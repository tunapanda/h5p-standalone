/*global H5PEditor */
var H5P = H5P || {};

/**
 * Drag n bar class
 */
H5P.DragNBar = (function () {

  /**
   * Constructor. Initializes the drag and drop menu bar.
   *
   * @class
   * @param {Array} buttons
   * @param {jQuery} $container
   * @param {jQuery} $dialogContainer
   * @param {Object} [options] Collection of options
   * @param {Boolean} [options.disableEditor=false] Determines if DragNBar should be displayed in view or editor mode
   * @param {jQuery} [options.$blurHandlers] When clicking these element(s) dnb focus will be lost
   */
  function DragNBar(buttons, $container, $dialogContainer, options) {
    this.overflowThreshold = 13; // How many buttons to display before we add the more button.
    this.buttons = buttons;
    this.$container = $container;
    this.$dialogContainer = $dialogContainer;
    this.dnd = new H5P.DragNDrop(this, $container);
    this.dnd.snap = 10;
    this.newElement = false;
    var defaultOptions = {
      disableEditor: false
    };
    options = H5P.jQuery.extend(defaultOptions, options);
    this.isEditor = !options.disableEditor;
    this.$blurHandlers = options.$blurHandlers ? options.$blurHandlers : undefined;

    /**
     * Keeps track of created DragNBar elements
     * @type {Array}
     */
    this.elements = [];

    // Create a popup dialog
    this.dialog = new H5P.DragNBarDialog($dialogContainer, $container);

    if (this.isEditor) {
      this.initEditor();
      this.initClickListeners();
    }
  }

  return DragNBar;
})();

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

  this.dnr.on('stoppedResizing',function () {
    // Queue refocus of element
    setTimeout(function () {
      that.focus(that.$element);
    }, 0);
  });

  this.dnd.startMovingCallback = function (x, y) {
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

  this.dnd.stopMovingCallback = function (event) {
    var x, y;

    if (that.newElement) {
      that.$container.css('overflow', '');
      if (Math.round(parseFloat(that.$element.css('top'))) < 0) {
        x = (that.dnd.max.x / 2);
        y = (that.dnd.max.y / 2);
      }
    }

    if (x === undefined || y === undefined) {
      x = Math.round(parseFloat(that.$element.css('left')));
      y = Math.round(parseFloat(that.$element.css('top')));
    }

    that.stopMoving(x, y);
    that.newElement = false;

    delete that.dnd.min;
    delete that.dnd.max;
  };
};

/**
 * Initialize click listeners
 */
H5P.DragNBar.prototype.initClickListeners = function () {
  var that = this;

  H5P.$body.click(function () {

    // Remove pressed on click
    delete that.pressed;
  }).keydown(function (event) {
    if (event.keyCode === 17 && that.dnd.snap !== undefined) {
      delete that.dnd.snap;
    }
  }).keyup(function (event) {
    if (event.keyCode === 17) {
      that.dnd.snap = 10;
    }
  });

  // Set blur handler element if option has been specified
  var $blurHandlers = this.$container;
  if (this.$blurHandlers) {
    $blurHandlers = this.$blurHandlers;
  }

  $blurHandlers.click(function () {
    // Remove coordinates picker if we didn't press an element.
    if (that.pressed !== undefined) {
      delete that.pressed;
    }
    else {
      that.blurAll();
      if (that.focusedElement !== undefined) {
        delete that.focusedElement;
      }
    }
  });
};

/**
 * Attaches the menu bar to the given wrapper.
 *
 * @param {jQuery} $wrapper
 * @returns {undefined}
 */
H5P.DragNBar.prototype.attach = function ($wrapper) {
  $wrapper.html('');
  $wrapper.addClass('h5peditor-dragnbar');

  var $list = H5P.jQuery('<ul class="h5p-dragnbar-ul"></ul>').appendTo($wrapper);
  this.$list = $list;

  for (var i = 0; i < this.buttons.length; i++) {
    var button = this.buttons[i];

    if (i === this.overflowThreshold) {
      $list = H5P.jQuery('<li class="h5p-dragnbar-li"><a href="#" title="' + 'More elements' + '" class="h5p-dragnbar-a h5p-dragnbar-more-button"></a><ul class="h5p-dragnbar-li-ul"></ul></li>')
        .appendTo($list)
        .click(function () {
          return false;
        })
        .hover(function () {
          $list.stop().slideToggle(300);
        }, function () {
          $list.stop().slideToggle(300);
        })
        .children(':first')
        .next();
    }

    this.addButton(button, $list);
  }
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

  H5P.jQuery('<li class="h5p-dragnbar-li"><a href="#" title="' + button.title + '" class="h5p-dragnbar-a h5p-dragnbar-' + button.id + '-button"></a></li>')
    .appendTo($list)
    .children()
    .click(function () {
      return false;
    }).mousedown(function (event) {
      if (event.which !== 1) {
        return;
      }

      that.newElement = true;
      that.pressed = true;
      var createdElement = button.createElement();
      that.$element = createdElement;
      that.$container.css('overflow', 'visible');
      that.dnd.press(that.$element, event.pageX, event.pageY);
      that.focus(that.$element);
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
  this.dnd.$container = $container;
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
  this.dnd.$element.css({top: top + '%', left: left + '%'});

  // Give others the result
  if (this.stopMovingCallback !== undefined) {
    this.stopMovingCallback(left, top);
  }
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
 * @returns {H5P.DragNBarElement} Reference to added dnbelement
 */
H5P.DragNBar.prototype.add = function ($element, options) {
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
    newElement = new H5P.DragNBarElement(this, options);
    this.elements.push(newElement);
  }

  $element.addClass('h5p-dragnbar-element');

  if ($element.attr('tabindex') === undefined) {
    // Make it possible to tab between elements.
    $element.attr('tabindex', 1);
  }

  if (this.isEditor) {
    $element.mousedown(function (event) {
      if (event.which !== 1) {
        return;
      }

      self.pressed = true;
      self.focus($element);
      if (event.result !== false) { // Moving can be stopped if the mousedown is doing something else
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

  // Keep track of the element we have in focus
  self.$element = $element;

  // Show and update coordinates picker
  this.focusedElement = this.getDragNBarElement($element);

  if (this.focusedElement) {
    this.focusedElement.showContextMenu();
    this.focusedElement.focus();
  }

  // Wait for potential recreation of element
  setTimeout(function () {
    self.updateCoordinates();
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
  this.dialog.resize();
  this.updateCoordinates();
  if (self.focusedElement) {
    self.focusedElement.resizeContextMenu(this.$element.offset().left);
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

if (window.H5PEditor) {
  // Default english translations
  H5PEditor.language['H5P.DragNBar'] = {
    libraryStrings: {
      editLabel: 'Edit',
      removeLabel: 'Remove'
      // bringToFrontLabel: 'Bring to Front'
    }
  };
}
