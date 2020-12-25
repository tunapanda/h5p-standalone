
H5P.DragNBar = (function (EventDispatcher) {
  var nextInstanceIndex = 0;

  /**
   * Constructor. Initializes the drag and drop menu bar.
   *
   * @class
   * @param {Array} buttons
   * @param {H5P.jQuery} $container
   * @param {H5P.jQuery} $dialogContainer
   * @param {object} [options] Collection of options
   * @param {boolean} [options.disableEditor=false] Determines if DragNBar should be displayed in view or editor mode
   * @param {boolean} [options.enableCopyPaste=true] Determines if copy & paste is supported
   * @param {H5P.jQuery} [options.$blurHandlers] When clicking these element(s) dnb focus will be lost
   * @param {object} [options.libraries] Libraries to check against for paste notification
   */
  function DragNBar(buttons, $container, $dialogContainer, options) {
    var self = this;

    EventDispatcher.call(this);
    this.overflowThreshold = 13; // How many buttons to display before we add the more button.
    this.buttons = buttons;
    this.$container = $container;
    this.$dialogContainer = $dialogContainer;
    this.dnd = new H5P.DragNDrop(this, $container);
    this.dnd.snap = 10;
    this.newElement = false;
    var defaultOptions = {
      disableEditor: false,
      enableCopyPaste: true
    };
    options = H5P.jQuery.extend(defaultOptions, options);
    this.enableCopyPaste = options.enableCopyPaste;
    this.isEditor = !options.disableEditor;
    this.$blurHandlers = options.$blurHandlers ? options.$blurHandlers : undefined;
    this.libraries = options.libraries;
    this.instanceIndex = nextInstanceIndex++;

    /**
     * Keeps track of created DragNBar elements
     * @type {Array}
     */
    this.elements = [];

    // Create a popup dialog
    this.dialog = new H5P.DragNBarDialog($dialogContainer, $container);

    // Fix for forcing redraw on $container, to avoid "artifcats" on safari
    this.$container.addClass('hardware-accelerated');

    if (this.isEditor) {
      this.transformButtonActive = false;
      this.initEditor();
      this.initClickListeners();

      H5P.$window.resize(function () {
        self.resize();
      });
    }

    /**
     * Add button group.
     *
     * @private
     * @param {object[]} Buttons.
     * @param {H5P.jQuery} $button Button to add button group to.
     * @param {object} [options] Options.
     * @param {string} [options.title] Title for the group.
     */
    this.addButtonGroup = function (buttons, $button, options) {
      const $buttonGroup = H5P.jQuery('<li class="h5p-dragnbar-li h5p-dragnbar-button-group" data-label="Image"></li>');
      // Add optional title to the group
      if (options && options.title && options.title !=='') {
        H5P.jQuery('<div class="h5p-dragnbar-button-title">' + options.title + '</div>')
          .appendTo($buttonGroup);
      }

      // Container for buttons
      const $buttonGroupButtons = H5P.jQuery('<ul class="h5p-dragnbar-button-buttons h5p-dragnbar-ul"></ul>')
        .appendTo($buttonGroup);

      // Add buttons
      buttons.forEach(function (button) {
        self.addButton(button, $buttonGroupButtons);
      });

      $buttonGroup.insertAfter($button.parent());
      return $buttonGroup;
    };
  }

  // Inherit support for events
  DragNBar.prototype = Object.create(EventDispatcher.prototype);
  DragNBar.prototype.constructor = DragNBar;

  return DragNBar;
})(H5P.EventDispatcher);

/**
 * Initializes editor functionality of DragNBar
 */
H5P.DragNBar.prototype.initEditor = function () {
  var that = this;
  this.dnr = new H5P.DragNResize(this.$container);
  this.dnr.snap = 10;

  // Update coordinates when element is resized
  this.dnr.on('moveResizing', function () {
    var offset = that.$element.offset();
    var position = that.$element.position();
    that.updateCoordinates(offset.left, offset.top, position.left, position.top);
  });

  // Set pressed to not lose focus at the end of resize
  this.dnr.on('stoppedResizing', function () {
    that.pressed = true;

    // Delete pressed after dnbelement has been refocused so it will lose focus on single click.
    setTimeout(function () {
      delete that.pressed;
    }, 10);
  });

  /**
   * Show transform panel listeners
   */
  this.dnr.on('showTransformPanel', function () {
    TransformPanel(true);
  });
  this.dnd.on('showTransformPanel', function () {
    TransformPanel(true);
  });

  /**
   * Hide transform panel listeners
   */
  this.dnr.on('hideTransformPanel', function () {
    if (!that.transformButtonActive) {
      TransformPanel(false);
    }
  });
  this.dnd.on('hideTransformPanel', function () {
    if (!that.transformButtonActive) {
      TransformPanel(false);
    }
  });

  /**
   * Trigger a context menu transform to either show or hide
   * the transform panel.
   *
   * @param {boolean} show
   */
  function TransformPanel(show) {
    if (that.focusedElement) {
      that.focusedElement.contextMenu.trigger('contextMenuTransform', {showTransformPanel: show});
    }
  }

  this.dnd.startMovingCallback = function () {
    that.dnd.min = {x: 0, y: 0};
    that.dnd.max = {
      x: that.$container.width() - that.$element.outerWidth(),
      y: that.$container.height() - that.$element.outerHeight()
    };

    if (that.newElement) {
      that.dnd.adjust.x = 10;
      that.dnd.adjust.y = 10;
      that.dnd.min.y -= that.$list.height();
    }

    return true;
  };

  this.dnd.stopMovingCallback = function () {
    var pos = {};

    if (that.newElement) {
      that.$container.css('overflow', '');
      if (Math.round(parseFloat(that.$element.css('top'))) < 0) {
        // Try to center element, but avoid overlapping
        pos.x = (that.dnd.max.x / 2);
        pos.y = (that.dnd.max.y / 2);
        that.avoidOverlapping(pos, that.$element);
      }
    }

    if (pos.x === undefined || pos.y === undefined ) {
      pos.x = Math.round(parseFloat(that.$element.css('left')));
      pos.y = Math.round(parseFloat(that.$element.css('top')));
    }

    that.stopMoving(pos.x, pos.y);
    that.newElement = false;

    delete that.dnd.min;
    delete that.dnd.max;
  };
};

/**
 * Tries to position the given element close to the requested coordinates.
 * Element can be skipped to check if spot is available.
 *
 * @param {object} pos
 * @param {number} pos.x
 * @param {number} pos.y
 * @param {(H5P.jQuery|Object)} element object with width&height if ran before insertion.
 */
H5P.DragNBar.prototype.avoidOverlapping = function (pos, $element) {
  // Determine size of element
  var size = $element;
  if (size instanceof H5P.jQuery) {
    size = window.getComputedStyle(size[0]);
    size = {
      width: parseFloat(size.width),
      height: parseFloat(size.height)
    };
  }
  else {
    $element = undefined;
  }

  // Determine how much they can be manuvered
  var containerStyle = window.getComputedStyle(this.$container[0]);
  var manX = parseFloat(containerStyle.width) - size.width;
  var manY = parseFloat(containerStyle.height) - size.height;

  var limit = 16;
  var attempts = 0;

  while (attempts < limit && this.elementOverlaps(pos.x, pos.y, $element)) {
    // Try to place randomly inside container
    if (manX > 0) {
      pos.x = Math.floor(Math.random() * manX);
    }
    if (manY > 0) {
      pos.y = Math.floor(Math.random() * manY);
    }
    attempts++;
  }
};

/**
 * Determine if moving the given element to its new position will cause it to
 * cover another element. This can make new or pasted elements difficult to see.
 * Element can be skipped to check if spot is available.
 *
 * @param {number} x
 * @param {number} y
 * @param {H5P.jQuery} [$element]
 * @returns {boolean}
 */
H5P.DragNBar.prototype.elementOverlaps = function (x, y, $element) {
  var self = this;

  // Use snap grid
  x = Math.round(x / 10);
  y = Math.round(y / 10);

  for (var i = 0; i < self.elements.length; i++) {
    var element = self.elements[i];
    if ($element !== undefined && element.$element === $element) {
      continue;
    }

    if (x === Math.round(parseFloat(element.$element.css('left')) / 10) &&
        y === Math.round(parseFloat(element.$element.css('top')) / 10)) {
      return true; // Stop loop
    }
  }

  return false;
};

// Key coordinates
var SHIFT = 16;
var CTRL = 17;
var DELETE = 46;
var BACKSPACE = 8;
var C = 67;
var V = 86;
var LEFT = 37;
var UP = 38;
var RIGHT = 39;
var DOWN = 40;

// Keep track of key state
var ctrlDown = false;

// How many pixels to move
var snapAmount = 1;

/**
 * Handle keydown events for the entire frame
 */
H5P.DragNBar.keydownHandler = function (event) {
  var self = event.data.instance;
  var activeElement = document.activeElement;

  // Don't care about keys if parent editor is not in focus
  // This means all editors using drag-n-bar need to set a tabindex
  // (it's not done inside this library)
  if (self.$dialogContainer.find(activeElement).length === 0 && self.$dialogContainer.get(0) !== activeElement) {
    return;
  }

  if (event.which === CTRL) {
    ctrlDown = true;

    if (self.dnd.snap !== undefined) {
      // Disable snapping
      delete self.dnd.snap;
    }
  }

  if (event.which === SHIFT) {
    snapAmount = self.dnd.snap;
  }

  if (event.which === LEFT && self.focusedElement) {
    if (activeElement.contentEditable === 'true' || activeElement.value !== undefined) {
      return;
    }
    event.preventDefault();
    self.moveWithKeys(-snapAmount, 0);
  }
  else if (event.which === UP && self.focusedElement) {
    if (activeElement.contentEditable === 'true' || activeElement.value !== undefined) {
      return;
    }
    event.preventDefault();
    self.moveWithKeys(0, -snapAmount);
  }
  else if (event.which === RIGHT && self.focusedElement) {
    if (activeElement.contentEditable === 'true' || activeElement.value !== undefined) {
      return;
    }
    event.preventDefault();
    self.moveWithKeys(snapAmount, 0);
  }
  else if (event.which === DOWN && self.focusedElement) {
    if (activeElement.contentEditable === 'true' || activeElement.value !== undefined) {
      return;
    }
    event.preventDefault();
    self.moveWithKeys(0, snapAmount);
  }
  else if (event.which === C && ctrlDown && self.focusedElement && self.$container.is(':visible')) {
    self.copyHandler(event);
  }
  else if (event.which === V && ctrlDown && window.localStorage && self.$container.is(':visible')) {
    self.pasteHandler(event);
  }
  else if ((event.which === DELETE || event.which === BACKSPACE) && self.focusedElement && self.$container.is(':visible') && activeElement.tagName.toLowerCase() !== 'input') {
    if (self.pressed === undefined) {
      self.focusedElement.contextMenu.trigger('contextMenuRemove');
      event.preventDefault(); // Prevent browser navigating back
    }
  }
};

/**
 * Copy object.
 * @param {Event} event - Event to check for copyable content.
 */
H5P.DragNBar.prototype.copyHandler = function (event) {

  if (!this.enableCopyPaste) {
    return;
  }

  var self = event === undefined ? this : event.data.instance;
  // Copy element params to clipboard
  var elementSize = window.getComputedStyle(self.focusedElement.$element[0]);
  var width = parseFloat(elementSize.width);
  var height = parseFloat(elementSize.height) / width;
  width = width / (parseFloat(window.getComputedStyle(self.$container[0]).width) / 100);
  height *= width;

  self.focusedElement.toClipboard(width, height);
  H5P.externalDispatcher.trigger('datainclipboard', {reset: false});
};

/**
 * Paste object.
 * @param {Event} event - Event to check for pastable content.
 */
H5P.DragNBar.prototype.pasteHandler = function (event) {
  var self = event === undefined ? this : event.data.instance;
  var activeElement = document.activeElement;

  // Don't paste if parent editor is not in focus
  if (!this.enableCopyPaste || self.preventPaste || self.dialog.isOpen() ||
      activeElement.contentEditable === 'true' || activeElement.value !== undefined) {
    return;
  }

  if (self.$pasteButton.hasClass('disabled')) {
    // Inform user why pasting is not possible
    const pasteCheck = H5PEditor.canPastePlus(H5P.getClipboard(), this.libraries);
    if (pasteCheck.canPaste !== true) {
      if (pasteCheck.reason === 'pasteTooOld' || pasteCheck.reason === 'pasteTooNew') {
        self.confirmPasteError(pasteCheck.description, 0, function () {});
      }
      else {
        H5PEditor.attachToastTo(
          self.$pasteButton.get(0),
          pasteCheck.description,
          {position: {horizontal: 'center', vertical: 'above', noOverflowX: true}}
        );
      }
      return;
    }
  }

  var clipboardData = localStorage.getItem('h5pClipboard');
  if (clipboardData) {
    // Parse
    try {
      clipboardData = JSON.parse(clipboardData);
    }
    catch (err) {
      console.error('Unable to parse JSON from clipboard.', err);
      return;
    }

    // Update file URLs
    H5P.DragNBar.updateFileUrls(clipboardData.specific, function (path) {
      var isTmpFile = (path.substr(-4,4) === '#tmp');
      if (!isTmpFile && clipboardData.contentId) {
        // Comes from existing content

        if (H5PEditor.contentId) {
          // .. to existing content
          return '../' + clipboardData.contentId + '/' + path;
        }
        else {
          // .. to new content
          return (H5PEditor.contentRelUrl ? H5PEditor.contentRelUrl : '../content/') + clipboardData.contentId + '/' + path;
        }
      }
      return path; // Will automatically be looked for in tmp folder
    });

    if (clipboardData.generic) {
      // Use reference instead of key
      clipboardData.generic = clipboardData.specific[clipboardData.generic];

      // Avoid multiple content with same ID
      delete clipboardData.generic.subContentId;
    }

    self.trigger('paste', clipboardData);
  }
};

/**
 * Set state of paste button.
 * @param {boolean} canPaste - If true, button will be enabled
 */
H5P.DragNBar.prototype.setCanPaste = function (canPaste) {
  canPaste = canPaste || false;
  if (this.$pasteButton) {
    this.$pasteButton.toggleClass('disabled', !canPaste);
  }
};

/**
 * Confirm replace if there is content selected
 *
 * @param {number} top Offset
 * @param {function} next Next callback
 */
H5P.DragNBar.prototype.confirmPasteError = function (message, top, next) {
  // Confirm changing library
  var confirmReplace = new H5P.ConfirmationDialog({
    headerText: H5PEditor.t('core', 'pasteError'),
    dialogText: message,
    cancelText: ' ',
    confirmText: H5PEditor.t('core', 'ok')
  }).appendTo(document.body);
  confirmReplace.on('confirmed', next);
  confirmReplace.show(top);
};

/**
 * Handle keypress events for the entire frame
 */
H5P.DragNBar.keypressHandler = function (event) {
  var self = event.data.instance;
  if (event.which === BACKSPACE && self.focusedElement && self.$container.is(':visible') && document.activeElement.tagName.toLowerCase() !== 'input') {
    event.preventDefault(); // Prevent browser navigating back
  }
};

/**
 * Handle keyup events for the entire frame
 */
H5P.DragNBar.keyupHandler = function (event) {
  var self = event.data.instance;

  if (event.which === CTRL) {
    // Update key state
    ctrlDown = false;

    // Enable snapping
    self.dnd.snap = 10;
  }
  if (event.which === SHIFT) {
    snapAmount = 1;
  }

  if (self.focusedElement && (event.which === LEFT || event.which === UP || event.which === RIGHT || event.which === DOWN)) {
    // Store position of element after moving
    var position = self.getElementSizeNPosition();
    self.stopMoving(Math.round(position.left), Math.round(position.top));
  }
};

/**
 * Handle click events for the entire frame
 */
H5P.DragNBar.clickHandler = function (event) {
  var self = event.data.instance;

  // Remove pressed on click
  delete self.pressed;
};

/**
 * Initialize click listeners
 */
H5P.DragNBar.prototype.initClickListeners = function () {
  var self = this;
  var index = self.instanceIndex;

  // Register event listeners
  var eventData = {
    instance: self
  };
  H5P.$body.on('keydown.dnb' + index, eventData, H5P.DragNBar.keydownHandler)
    .on('keypress.dnb' + index, eventData, H5P.DragNBar.keypressHandler)
    .on('keyup.dnb' + index, eventData, H5P.DragNBar.keyupHandler)
    .on('click.dnb' + index, eventData, H5P.DragNBar.clickHandler);

  // Set blur handler element if option has been specified
  var $blurHandlers = this.$container;
  if (this.$blurHandlers) {
    $blurHandlers = this.$blurHandlers;
  }

  function handleBlur() {
    // Remove coordinates picker if we didn't press an element.
    if (self.pressed !== undefined) {
      delete self.pressed;
    }
    else {
      self.blurAll();
      if (self.focusedElement !== undefined) {
        delete self.focusedElement;
      }
    }
  }

  $blurHandlers
    .keydown(function (e) {
      if (e.which === 9) { // pressed tab
        handleBlur();
      }
    })
    .click(handleBlur);
};

/**
 * Update file URLs. Useful when copying between different contents.
 *
 * @param {object} params Reference
 * @param {function} handler Modifies the path to work when pasted
 */
H5P.DragNBar.updateFileUrls = function (params, handler) {
  for (var prop in params) {
    if (params.hasOwnProperty(prop) && params[prop] instanceof Object) {
      var obj = params[prop];
      if (obj.path !== undefined && obj.mime !== undefined) {
        obj.path = handler(obj.path);
      }
      else {
        H5P.DragNBar.updateFileUrls(obj, handler);
      }
    }
  }
};

/**
 * Attaches the menu bar to the given wrapper.
 *
 * @param {jQuery} $wrapper
 * @returns {undefined}
 */
H5P.DragNBar.prototype.attach = function ($wrapper) {
  var self = this;
  $wrapper.html('');
  $wrapper.addClass('h5peditor-dragnbar');

  var $list = H5P.jQuery('<ul class="h5p-dragnbar-ul"></ul>').appendTo($wrapper);
  this.$list = $list;

  for (var i = 0; i < this.buttons.length; i++) {
    var button = this.buttons[i];

    if (i === this.overflowThreshold) {
      const $buttonMore = H5P.jQuery('<li class="h5p-dragnbar-li"><a href="#" title="' + H5PEditor.t('H5P.DragNBar', 'moreElements') + '" class="h5p-dragnbar-a h5p-dragnbar-more-button"></a><ul class="h5p-dragnbar-li-ul"></ul></li>');
      $list = $buttonMore
        .appendTo($list)
        .click(function (e) {
          $list.stop().slideToggle(300);
          e.preventDefault();
        })
        .children(':first')
        .next();

      // Close "more" on click somewhere else
      H5P.jQuery(document).click(function (event) {
        if (!H5P.jQuery(event.target).is($buttonMore.find('.h5p-dragnbar-more-button')) && $list.css('display') !== 'none') {
          $list.stop().slideToggle(300);
        }
      });
    }

    this.addButton(button, $list);
  }

  if (this.enableCopyPaste) {
    // Paste button
    this.$pasteButton = H5P.jQuery(
      '<li class="h5p-dragnbar-li paste-button disabled">' +
        '<a href="#" class="h5p-dragnbar-a h5p-dragnbar-paste-button" />' +
      '</li>'
    );

    H5P.jQuery('<span>', {
      'class': 'h5p-dragnbar-tooltip',
      'text': H5PEditor.t('H5P.DragNBar', 'paste')
    }).appendTo(this.$pasteButton);

    this.$pasteButton.find('.h5p-dragnbar-paste-button').click(function (event) {
      event.preventDefault(); // Avoid anchor click making window scroll
      self.pasteHandler();
    });
    if (this.buttons.length > this.overflowThreshold) {
      this.$pasteButton.insertAfter($list.parent());
    }
    else {
      this.$pasteButton.appendTo($list);
    }
  }

  this.containTooltips();
};

/**
 * Add button.
 *
 * @param {type} button
 * @param {Function} button.createElement Function for creating element
 * @param {type} $list
 * @returns {undefined}
 */
H5P.DragNBar.prototype.addButton = function (button, $list) {
  var that = this;

  const hasTitle = (button.title && button.title !== '');
  const ariaLabel = hasTitle ? ' aria-label="' + button.title + '"' : '';
  var $button = H5P.jQuery(
    '<li class="h5p-dragnbar-li" data-label="Image">' +
      '<a href="#" class="h5p-dragnbar-a h5p-dragnbar-' + button.id + '-button"' + ariaLabel + '></a>' +
    '</li>'
  ).appendTo($list);

  // Prevent empty tooltips (would show on Firefox)
  if (hasTitle) {
    H5P.jQuery('<span/>', {
      'class': 'h5p-dragnbar-tooltip',
      'text': button.title
    }).appendTo($button);
  }

  let $buttonGroup;
  if (button.type === 'group') {
    // Create dropdown button group
    $buttonGroup = this.addButtonGroup(button.buttons, $button, {title: button.titleGroup});
    $buttonGroup.addClass('h5peditor-dragnbar-gone');

    // Close group on click somewhere else
    H5P.jQuery(document).click(function (event) {
      const hitButton = H5P.jQuery(event.target).is($button); // Closing handled by button itself
      const hitButtonGroup = H5P.jQuery(event.target).closest('.h5p-dragnbar-button-group').length === 1;
      if (!hitButton && !hitButtonGroup) {
        $buttonGroup.toggleClass('h5peditor-dragnbar-gone', true);
        $button.find('.h5p-dragnbar-tooltip').toggleClass('h5peditor-dragnbar-gone', false);
      }
    });
  }

  $button
    .hover(function () {
      that.containTooltips();
    })
    .children()
    .click(function () {
      return false;
    }).mousedown(function (event) {
      if (event.which !== 1) {
        return;
      }

      // Switch between normal button and dropdown button group
      if (button.type === 'group') {
        if ($buttonGroup !== undefined) {
          // Set position here, because content types might add buttons out of order
          const offset = parseFloat($button.closest('.h5p-dragnbar').css('padding-left'));
          const position = $button.position().left - $buttonGroup.position().left - offset;
          if (position > 0) {
            $buttonGroup.css('left', position);
          }

          // Show dropdown and hide buttons tooltip
          $buttonGroup.toggleClass('h5peditor-dragnbar-gone');
          $button.find('.h5p-dragnbar-tooltip').toggleClass('h5peditor-dragnbar-gone');
        }
      }
      else {
        that.newElement = true;
        that.pressed = true;
        var createdElement = button.createElement();
        that.$element = createdElement;
        that.$container.css('overflow', 'visible');
        // y = 0 will make sure this press is regarded as outside of canvas to place element correctly
        that.dnd.press(that.$element, event.pageX, 0);
        that.focus(that.$element);
      }
    });
};

/**
 * Contain tooltips.
 *
 * @returns {undefined}
 */
H5P.DragNBar.prototype.containTooltips = function () {
  var that = this;

  var containerWidth = that.$container.outerWidth();

  this.$list.find('.h5p-dragnbar-tooltip').each(function () {
    // Get correct offset even if element is a child
    var width = H5P.jQuery(this).outerWidth();
    var parentWidth = H5P.jQuery(this).parents('.h5p-dragnbar-li').last().outerWidth();

    // Center the tooltip
    H5P.jQuery(this).css('left', -(width / 2) + (parentWidth / 2) + 'px');

    var offsetLeft = H5P.jQuery(this).position().left += H5P.jQuery(this).parents('.h5p-dragnbar-li').last().position().left;

    // If outside left edge
    if (offsetLeft <= 0) {
      H5P.jQuery(this).css('left', 0);
    }

    // If outside right edge
    if (offsetLeft + width > containerWidth) {
      H5P.jQuery(this).css('left', -(width - parentWidth));
    }
  });
};

/**
 * Change container.
 *
 * @param {jQuery} $container
 * @returns {undefined}
 */
H5P.DragNBar.prototype.setContainer = function ($container) {
  this.$container = $container;
  if (this.dnd) {
    this.dnd.$container = $container;
  }
  if (this.dnr) {
    this.dnr.$container = $container;
  }
};

/**
 * Handler for when the dragging stops. Makes sure the element is inside its container.
 *
 * @param {Number} left
 * @param {Number} top
 * @returns {undefined}
 */
H5P.DragNBar.prototype.stopMoving = function (left, top) {
  // Calculate percentage
  top = top / (this.$container.height() / 100);
  left = left / (this.$container.width() / 100);
  this.$element.css({top: top + '%', left: left + '%'});

  // Give others the result
  if (this.stopMovingCallback !== undefined) {
    this.stopMovingCallback(left, top);
  }
};

/**
 * @typedef SizeNPosition
 * @type Object
 * @property {number} width Outer width of the element
 * @property {number} height Outer height of the element
 * @property {number} left The X Coordinate
 * @property {number} top The Y Coordinate
 * @property {number} containerWidth Inner width of the container
 * @property {number} containerHeight Inner height of the container
 */

/**
 *
 * Only works when element is inside this.$container. This is assumed and no
 * are done.
 *
 * @param {H5P.jQuery} [$element] Defaults to focused element.
 * @throws 'No element given' if $element is missing
 * @return {SizeNPosition}
 */
H5P.DragNBar.prototype.getElementSizeNPosition = function ($element) {
  $element = $element || this.focusedElement.$element;
  if (!$element || !$element.length) {
    throw 'No element given';
  }

  // Always use outer size for element
  var size = $element[0].getBoundingClientRect();

  // Always use position relative to container for element
  var position = window.getComputedStyle($element[0]);

  // We include container inner size as well
  var containerSize = window.getComputedStyle(this.$container[0]);

  // Start preparing return value
  var sizeNPosition = {
    width: parseFloat(size.width),
    height: parseFloat(size.height),
    left: parseFloat(position.left),
    top: parseFloat(position.top),
    containerWidth: parseFloat(containerSize.width),
    containerHeight: parseFloat(containerSize.height)
  };

  if (position.left.substr(-1, 1) === '%' || position.top.substr(-1, 1) === '%') {
    // Some browsers(Safari) gets percentage value instead of pixel value.
    // Container inner size must be used to calculate such values.
    sizeNPosition.left *= (sizeNPosition.containerWidth / 100);
    sizeNPosition.top *= (sizeNPosition.containerHeight / 100);
  }

  return sizeNPosition;
};

/**
 * Makes it possible to move dnb elements by adding to it's x and y
 *
 * @param {number} x Amount to move on x-axis.
 * @param {number} y Amount to move on y-axis.
 */
H5P.DragNBar.prototype.moveWithKeys = function (x, y) {

  /**
   * Ensure that the given value is within the given boundaries.
   *
   * @private
   * @param {number} value
   * @param {number} min
   * @param {number} max
   * @return {number}
   */
  var withinBoundaries = function (value, min, max) {
    if (value < min) {
      value = min;
    }
    if (value > max) {
      value = max;
    }

    return value;
  };

  // Get size and position of current elemet in focus
  var sizeNPosition = this.getElementSizeNPosition();

  // Change position
  sizeNPosition.left += x;
  sizeNPosition.top += y;

  // Check that values are within boundaries
  sizeNPosition.left = withinBoundaries(sizeNPosition.left, 0, sizeNPosition.containerWidth - sizeNPosition.width);
  sizeNPosition.top = withinBoundaries(sizeNPosition.top, 0, sizeNPosition.containerHeight - sizeNPosition.height);

  // Determine new position style
  this.$element.css({
    left: sizeNPosition.left + 'px',
    top: sizeNPosition.top + 'px',
  });

  this.dnd.trigger('showTransformPanel');

  // Update position of context menu
  this.updateCoordinates(sizeNPosition.left, sizeNPosition.top, sizeNPosition.left, sizeNPosition.top);
};

/**
 * Makes it possible to focus and move the element around.
 * Must be inside $container.
 *
 * @param {H5P.jQuery} $element
 * @param {Object} [options]
 * @param {H5P.DragNBarElement} [options.dnbElement] Register new element with dnbelement
 * @param {boolean} [options.disableResize] Resize disabled
 * @param {boolean} [options.lock] Lock ratio during resize
 * @param {string} [clipboardData]
 * @returns {H5P.DragNBarElement} Reference to added dnbelement
 */
H5P.DragNBar.prototype.add = function ($element, clipboardData, options) {
  var self = this;
  options = options || {};
  if (this.isEditor && !options.disableResize) {
    this.dnr.add($element, options);
  }
  var newElement = null;

  // Check if element already exist
  if (options.dnbElement) {
    // Set element as added element
    options.dnbElement.setElement($element);
    newElement = options.dnbElement;
  }
  else {
    options.element = $element;
    options.disableCopy = !this.enableCopyPaste;
    newElement = new H5P.DragNBarElement(this, clipboardData, options);
    this.elements.push(newElement);
  }

  $element.addClass('h5p-dragnbar-element');

  if (this.isEditor) {
    if (newElement.contextMenu) {
      newElement.contextMenu.on('contextMenuCopy', function () {
        self.copyHandler();
      });
    }

    if ($element.attr('tabindex') === undefined) {
      // Make it possible to tab between elements.
      $element.attr('tabindex', '0');
    }

    $element.mousedown(function (event) {
      if (event.which !== 1) {
        return;
      }

      self.pressed = true;
      self.focus($element);
      if (self.dnr.active !== true) { // Moving can be stopped if the mousedown is doing something else
        self.dnd.press($element, event.pageX, event.pageY);
      }
    });
  }

  $element.focus(function () {
    self.focus($element);
  });

  return newElement;
};

/**
 * Remove given element in the UI.
 *
 * @param {H5P.DragNBarElement} dnbElement
 */
H5P.DragNBar.prototype.removeElement = function (dnbElement) {
  dnbElement.removeElement();
};

/**
 * Select the given element in the UI.
 *
 * @param {jQuery} $element
 * @returns {undefined}
 */
H5P.DragNBar.prototype.focus = function ($element) {
  var self = this;

  // Blur last focused
  if (this.focusedElement && this.focusedElement.$element !== $element) {
    this.focusedElement.blur();
    this.focusedElement.hideContextMenu();
  }

  if (!$element.is(':visible')) {
    return; // Do not focus invisible items (fixes FF refocus issue)
  }

  // Keep track of the element we have in focus
  self.$element = $element;
  this.dnd.setElement($element);

  // Show and update coordinates picker
  this.focusedElement = this.getDragNBarElement($element);

  if (this.focusedElement) {
    this.focusedElement.showContextMenu();
    this.focusedElement.focus();
    self.updateCoordinates();
  }

  // Wait for potential recreation of element
  setTimeout(function () {
    self.updateCoordinates();
    if (self.focusedElement && self.focusedElement.contextMenu && self.focusedElement.contextMenu.canResize) {
      self.focusedElement.contextMenu.updateDimensions();
    }
  }, 0);
};

/**
 * Get dnbElement from $element
 * @param {jQuery} $element
 * @returns {H5P.DragNBarElement} dnbElement with matching $element
 */
H5P.DragNBar.prototype.getDragNBarElement = function ($element) {
  var foundElement;
  // Find object with matching element
  this.elements.forEach(function (element) {
    if (element.getElement().is($element)) {
      foundElement = element;
    }
  });
  return foundElement;
};

/**
 * Deselect all elements in the UI.
 *
 * @returns {undefined}
 */
H5P.DragNBar.prototype.blurAll = function () {
  this.elements.forEach(function (element) {
    element.blur();
  });
  delete this.focusedElement;
};

/**
 * Resize DnB, make sure context menu is positioned correctly.
 */
H5P.DragNBar.prototype.resize = function () {
  var self = this;
  this.updateCoordinates();

  if (self.focusedElement) {
    self.focusedElement.resizeContextMenu(self.$element.offset().left - self.$element.parent().offset().left);
  }
};

/**
 * Update the coordinates of context menu.
 *
 * @param {Number} [left]
 * @param {Number} [top]
 * @param {Number} [x]
 * @param {Number} [y]
 * @returns {undefined}
 */
H5P.DragNBar.prototype.updateCoordinates = function (left, top, x, y) {
  if (!this.focusedElement) {
    return;
  }

  var containerPosition = this.$container.position();

  if (left && top && x && y) {
    left = x + containerPosition.left;
    top = y + containerPosition.top;
    this.focusedElement.updateCoordinates(left, top, x, y);
  }
  else {
    var position = this.$element.position();
    this.focusedElement.updateCoordinates(position.left + containerPosition.left, position.top + containerPosition.top, position.left, position.top);
  }
};

/**
 * Creates element data to store in the clipboard.
 *
 * @param {string} from Source of the element
 * @param {object} params Element options
 * @param {string} [generic] Which part of the parameters can be used by other libraries
 * @returns {string} JSON
 */
H5P.DragNBar.clipboardify = function (from, params, generic) {
  var clipboardData = {
    from: from,
    specific: params
  };

  if (H5PEditor.contentId) {
    clipboardData.contentId = H5PEditor.contentId;
  }

  // Add the generic part
  if (params[generic]) {
    clipboardData.generic = generic;
  }

  return clipboardData;
};

/**
 * Make sure the given element is inside the container.
 *
 * @param {SizeNPosition} sizeNPosition For the element
 * @returns {SizeNPosition} Only the properties which require change
 */
H5P.DragNBar.fitElementInside = function (sizeNPosition) {
  var style = {};

  if (sizeNPosition.left < 0) {
    // Element sticks out of the left side
    style.left = sizeNPosition.left = 0;
  }

  if (sizeNPosition.width + sizeNPosition.left > sizeNPosition.containerWidth) {
    // Element sticks out of the right side
    style.left = sizeNPosition.containerWidth - sizeNPosition.width;
    if (style.left < 0) {
      // Element is wider than the container
      style.left = 0;
      style.width = sizeNPosition.containerWidth;
    }
  }

  if (sizeNPosition.top < 0) {
    // Element sticks out of the top side
    style.top = sizeNPosition.top = 0;
  }

  if (sizeNPosition.height + sizeNPosition.top > sizeNPosition.containerHeight) {
    // Element sticks out of the bottom side
    style.top = sizeNPosition.containerHeight - sizeNPosition.height;
    if (style.top < 0) {
      // Element is higher than the container
      style.top = 0;
      style.height = sizeNPosition.containerHeight;
    }
  }

  return style;
};

/**
 * Clean up any event listeners
 */
H5P.DragNBar.prototype.remove = function () {
  var index = this.instanceIndex;

  H5P.$body.off('keydown.dnb' + index, H5P.DragNBar.keydownHandler)
    .off('keypress.dnb' + index, H5P.DragNBar.keypressHandler)
    .off('keyup.dnb' + index, H5P.DragNBar.keyupHandler)
    .off('click.dnb' + index, H5P.DragNBar.clickHandler);
};
