/*global H5P*/

/**
 * Create context menu
 */
H5P.DragNBarContextMenu = (function ($, EventDispatcher) {

  /**
   * Constructor for context menu
   * @class
   * @param {jQuery} $container Parent container
   * @param {H5P.DragNBarElement} DragNBarElement
   * @param {boolean} [hasCoordinates] Decides if coordinates will be displayed
   * @param {boolean} [disableResize] No input for dimensions
   * @param {boolean} [disableCopy] Disable copy button
   * @param {string} [directionLock] Which way to lock resizing. Possible values:
   *  - 'vertical'
   *  - 'horizontal'
   */
  function ContextMenu($container, DragNBarElement, hasCoordinates, disableResize, disableCopy, directionLock) {
    var self = this;
    EventDispatcher.call(this);

    /**
     * Keeps track of DragNBar object
     *
     * @type {H5P.DragNBar}
     */
    this.dnb = DragNBarElement.dnb;

    this.directionLock = directionLock;

    /**
     * Keeps track of DnBElement object
     *
     * @type {H5P.DragNBarElement}
     */
    this.dnbElement = DragNBarElement;

    /**
     * Keeps track of context menu container
     *
     * @type {H5P.jQuery}
     */
    this.$contextMenu = $('<div>', {
      'class': 'h5p-dragnbar-context-menu'
    });

    /**
     * Keeps track of buttons container
     *
     * @type {H5P.jQuery}
     */
    this.$buttons = $('<div>', {
      'class': 'h5p-context-menu-buttons'
    });

    /**
     * Keeps track of transform panel
     *
     * @type {H5P.jQuery}
     */
    this.$transformPanel = $('<div>', {
      'class': 'h5p-transform-panel hide'
    });

    /**
     * Keeps track of context menu parent
     *
     * @type {jQuery}
     */
    this.$parent = $container;

    /**
     * Keeps track of whether the context menu should display coordinates
     * @type {Boolean}
     */
    this.hasCoordinates = (hasCoordinates !== undefined ? hasCoordinates : true);

    /**
     * Determines if the dimensions can be changed.
     * @type {boolean}
     */
    this.canResize = !disableResize;

    /**
     * Determines if the transform panel is showing.
     * @type {boolean}
     */
    this.showingTransformPanel = false;

    /**
     * Button containing button name and event name that will be fired.
     * @typedef {Object} ContextMenuButton
     * @property {String} name Machine readable
     * @property {String} label Human readable
     */

    /**
     * Keeps track of button objects
     * @type {ContextMenuButton[]}
     */
    this.buttons = [
      {name: 'Edit', label: H5PEditor.t('H5P.DragNBar', 'editLabel')},
      {name: 'BringToFront', label: H5PEditor.t('H5P.DragNBar', 'bringToFrontLabel')},
      {name: 'SendToBack', label: H5PEditor.t('H5P.DragNBar', 'sendToBackLabel')},
      {name: 'Remove', label: H5PEditor.t('H5P.DragNBar', 'removeLabel')}
    ];

    if (!disableCopy) {
      this.buttons.splice(1, 0, {name: 'Copy', label: H5PEditor.t('H5P.DragNBar', 'copyLabel')});
    }

    /**
     * Register transform listener
     *
     * @param {event} [e] event
     * @param {Object} [e.data] event data
     * @param {Boolean} [e.data.showTransformPanel] Show transform panel
     */
    self.on('contextMenuTransform', function (e) {
      if (e && e.data.showTransformPanel !== undefined) {
        // Use event data
        self.showingTransformPanel = e.data.showTransformPanel;
      }
      else {
        // Toggle showing panel
        self.showingTransformPanel = !self.showingTransformPanel;
      }

      // Toggle sticky transform panel
      if (e.data.button === 'Transform') {
        if (self.dnb.transformButtonActive) {
          self.dnb.transformButtonActive = false;
        }
        else {
          self.dnb.transformButtonActive = true;
        }
      }

      // Remove sticky transform panel when focus is lost
      if (e.data.showTransformPanel == false) {
        self.dnb.transformButtonActive = false;
      }

      // Toggle buttons bar and transform panel
      self.toggleButtonsBar(!self.showingTransformPanel);
      self.toggleTransformPanel(self.showingTransformPanel);
      self.$transformButtonWrapper.toggleClass('active', self.showingTransformPanel);

      // Realign context menu
      self.dnb.updateCoordinates();
    });

    this.updateContextMenu();
  }

  // Inherit event dispatcher
  ContextMenu.prototype = Object.create(EventDispatcher.prototype);
  ContextMenu.prototype.constructor = ContextMenu;

  /**
   * Create coordinates in context menu
   */
  ContextMenu.prototype.addCoordinates = function () {
    // Coordinates disabled or exists
    if (!this.hasCoordinates || this.$coordinates) {
      return;
    }

    var self = this;

    // Add coordinates picker
    this.$coordinates = $(
      '<div class="h5p-dragnbar-coordinates">' +
        '<div class="h5p-dragnbar-label">' + H5PEditor.t('H5P.DragNBar', 'positionLabel') + '</div>' +
        '<div class="h5p-dragnbar-x-container" aria-label="X position">' +
          '<input class="h5p-dragnbar-x" type="text" value="0">' +
        '</div>' +
        '<span class="h5p-dragnbar-coordinates-separater">,</span>' +
        '<div class="h5p-dragnbar-y-container" aria-label="Y position">' +
          '<input class="h5p-dragnbar-y" type="text" value="0">' +
        '</div>' +
      '</div>'
    ).mousedown(function () {
      self.dnb.pressed = true;
    }).appendTo(this.$transformPanel);

    this.$x = this.$coordinates.find('.h5p-dragnbar-x');
    this.$y = this.$coordinates.find('.h5p-dragnbar-y');

    this.$x.add(this.$y).on('change keydown', function (event) {
      if (event.type === 'change' || event.which === 13) {

        // Get input
        var x = Number(self.$x.val());
        var y = Number(self.$y.val());

        if (!isNaN(x) && !isNaN(y)) {

          // Do not move outside of container
          var min = {x: 0 , y: 0};
          var max = {
            x: self.dnb.$container.width() - self.dnbElement.getElement().outerWidth(),
            y: self.dnb.$container.height() - self.dnbElement.getElement().outerHeight()
          };

          // Check min values
          if (x < 0) {
            x = min.x;
          }
          if (y < 0) {
            y = min.y;
          }

          // Check max values
          if (x > max.x) {
            x = max.x;
          }
          if (y > max.y) {
            y = max.y;
          }

          // Update and store location
          self.dnb.stopMoving(x, y);

          if (event.which === 13) {
            // Pressed enter, mark number for easy edit
            setTimeout(function () {
              event.target.focus();
              event.target.setSelectionRange(0, event.target.value.length);
            }, 0);
          }

          // Update context menu position
          self.dnb.updateCoordinates();
        }
      }
    }).click(function (event) {
      // Select coordinates numbers for easy edit
      event.target.focus();
      event.target.setSelectionRange(0, event.target.value.length);
    });
  };

  /**
   * Update the coordinates picker.
   *
   * @param {Number} left Left pos of context menu
   * @param {Number} top Top pos of context menu
   * @param {Number} x X value in coordinates
   * @param {Number} y Y value in coordinates
   */
  ContextMenu.prototype.updateCoordinates = function (left, top, x, y) {
    // Move it
    this.$contextMenu.css({
      left: left,
      top: top
    });

    // Set pos
    if (this.hasCoordinates) {
      this.$x.val(Math.round(x));
      this.$y.val(Math.round(y));
    }
  };

  /**
   * Create coordinates in context menu
   */
  ContextMenu.prototype.addDimensions = function () {
    var self = this;

    self.$dimensions = $('<div/>', {
      'class': 'h5p-dragnbar-dimensions'
    });

    // Add label
    $('<div/>', {
      'class': 'h5p-dragnbar-label',
      appendTo: self.$dimensions,
      text: H5PEditor.t('H5P.DragNBar', 'sizeLabel')
    });

    var updateDimensions = function (type) {
      var target = parseFloat(this.value);

      if (isNaN(target)) {
        return;
      }

      // Get element
      var $element = self.dnbElement.getElement();

      // Determine min&max values
      var min = H5P.DragNResize.MIN_SIZE;
      var containerSize = parseFloat(window.getComputedStyle(self.dnb.$container[0])[type]);
      var elementStyle = window.getComputedStyle($element[0]);
      var max = containerSize - parseFloat(elementStyle[type === 'width' ? 'left' : 'top']);

      if (target < min) {
        target = min;
      }
      if (target > max) {
        target = max;
      }

      // Set input field value
      self['$' + type].val(Math.round(target));

      // Remove any height padding before updating element
      var padding = $element[0].getBoundingClientRect()[type] - parseFloat(elementStyle[type]);
      target -= padding;

      $element.css(type, (target / (containerSize / 100)) + '%');

      var eventData = {};
      eventData[type] = target / self.dnb.dnr.containerEm;
      self.dnb.dnr.trigger('stoppedResizing', eventData);
    };

    // Add input for width
    self.$width = self.getNewInput('width', H5PEditor.t('H5P.DragNBar', 'widthLabel'), self.$dimensions, updateDimensions, self.directionLock === 'vertical');

    $('<span/>', {
      'class': 'h5p-dragnbar-dimensions-separator',
      text: '×',
      appendTo: self.$dimensions
    });

    self.$height = self.getNewInput('height', H5PEditor.t('H5P.DragNBar', 'heightLabel'), self.$dimensions, updateDimensions, self.directionLock === 'horizontal');

    self.dnb.dnr.on('moveResizing', function () {
      self.updateDimensions();
    });

    self.$dimensions.appendTo(self.$transformPanel);
  };

  /**
   * Add transform functionality
   *
   * @param [enableTransform]
   */
  ContextMenu.prototype.addTransform = function (enableTransform) {
    var self = this;
    var transformButtonObject = {name: 'Transform', label: H5PEditor.t('H5P.DragNBar', 'transformLabel')};
    var $transformButtonWrapper = $('<div>', {
      'class': 'h5p-transform-button-wrapper'
    });

    // Attach button
    if (enableTransform) {
      self.createButton(transformButtonObject)
        .appendTo($transformButtonWrapper);
    }

    self.$transformButtonWrapper = $transformButtonWrapper;
    return $transformButtonWrapper;
  };

  /**
   * Updates the values in the input fields for width and height.
   */
  ContextMenu.prototype.updateDimensions = function () {
    var self = this;
    var $element = self.dnbElement.getElement();
    var elementSize = window.getComputedStyle($element[0]);

    // Re-add any padding removed while updating size
    var paddingX = $element[0].getBoundingClientRect()['width'] - parseFloat(elementSize['width']);
    var paddingY = $element[0].getBoundingClientRect()['height'] - parseFloat(elementSize['height']);

    self.$width.val(Math.round(parseFloat(elementSize.width) + paddingX));
    self.$height.val(Math.round(parseFloat(elementSize.height) + paddingY));
  };

  /**
   * Creates a new input field for modifying an element property.
   *
   * @param {string} type
   * @param {string} label
   * @param {H5P.jQuery} $container
   * @param {function} handler
   * @param {boolean} disabled
   * @returns {H5P.jQuery}
   */
  ContextMenu.prototype.getNewInput = function (type, label, $container, handler, disabled) {
    // Wrap input element with label (implicit labeling)
    var $wrapper = $('<div/>', {
      'class': 'h5p-dragnbar-input h5p-dragnbar-' + type,
      'aria-label': label,
      appendTo: $container
    });

    // Create input field
    var $input = $('<input/>', {
      maxLength: 5,
      disabled: disabled === true,
      on: {
        change: function () {
          handler.call(this, type);
        },
        keydown: function (event) {
          if (event.which === 13) { // Enter key
            handler.call(this, type);
            $input.focus().select();
          }
          else if (event.which === 38 || event.which === 40) { // Up key
            // Increase or decrease the number by using the arrows keys
            var currentValue = parseFloat($input.val());
            if (!isNaN(currentValue)) {
              $input.val(currentValue + (event.which === 38 ? 1 : -1));
              handler.call(this, type);
            }
          }
        },
        keyup: function (event) {
          if (event.which === 38 || event.which === 40) { // Up or Down key
            $input.select(); // Select again
          }
        },
        click: function () {
          $input.select();
        }
      },
      appendTo: $wrapper
    });
    return $input;
  };

  /**
   * Create button and add it to buttons bar
   * @param {object} button
   */
  ContextMenu.prototype.addToMenu = function (button) {
    var self = this;

    self.createButton(button).appendTo(this.$buttons);
  };

  /**
   * Create button
   *
   * @param button
   * @param {string} button.name
   * @param {string} button.label
   *
   * @returns {H5P.jQuery}
   */
  ContextMenu.prototype.createButton = function (button) {
    var self = this;

    var $newButton = $('<div>', {
      'class': 'h5p-dragnbar-context-menu-button ' + button.name.toLowerCase(),
      'role': 'button',
      'tabindex': 0,
      'aria-label': button.label
    }).click(function () {
      self.dnb.pressed = true;
      self.trigger('contextMenu' + button.name, {button: button.name});
    }).keydown(function (e) {
      var keyPressed = e.which;
      // 32 - space
      if (keyPressed === 32) {
        $(this).click();
      }
    });

    return $newButton;
  };

  /**
   * Remove button from context menu
   * @param {String} buttonName
   */
  ContextMenu.prototype.removeFromMenu = function (buttonName) {
    var $removeButton = this.$buttons.children('.h5p-context-menu-button-' + buttonName);
    $removeButton.remove();
  };

  /**
   * Update context menu with current buttons. Useful when having added or removed buttons.
   */
  ContextMenu.prototype.updateContextMenu = function () {
    var self = this;

    // Clear context menu
    this.$buttons.children().remove();

    // Check if transform button should be enabled
    var enableTransform = false;

    // Add coordinates
    if (this.hasCoordinates) {
      this.addCoordinates();
      enableTransform = true;
    }

    // Add dimensions
    if (this.canResize) {
      this.addDimensions();
      enableTransform = true;
    }

    // Add menu elements
    this.buttons.forEach(function (button) {
      self.addToMenu(button);
    });

    // Add transform button
    this.addTransform(enableTransform)
      .appendTo(this.$contextMenu);

    this.$buttons.appendTo(this.$contextMenu);
    this.$transformPanel.appendTo(this.$contextMenu);
  };

  /**
   * Add button and update context menu.
   * @param {String} name
   * @param {String} label
   */
  ContextMenu.prototype.addButton = function (name, label) {
    this.buttons.push({name:name, label:label});
    this.updateContextMenu();
  };

  /**
   * Remove button from context menu
   * @param {string} name
   */
  ContextMenu.prototype.removeButton = function (name) {
    var self = this;

    // Check if button exists
    self.buttons.forEach(function (button, index) {
      if (button.name === name) {
        self.buttons.splice(index, 1);
        return;
      }
    });

    this.updateContextMenu();
  };

  /**
   * Toggle buttons visibility
   *
   * @param [showButtons] Show buttons
   */
  ContextMenu.prototype.toggleButtonsBar = function (showButtons) {
    var self = this;

    if (showButtons !== undefined) {
      self.$buttons.toggleClass('hide', !showButtons);
    }
    else {
      self.$buttons.toggleClass('hide');
    }
  };

  /**
   * Toggle transform panel visibility.
   *
   * @param [showTransformPanel] Show transform panel
   */
  ContextMenu.prototype.toggleTransformPanel = function (showTransformPanel) {
    var self = this;

    if (showTransformPanel !== undefined) {
      self.$transformPanel.toggleClass('hide', !showTransformPanel);
    }
    else {
      self.$transformPanel.toggleClass('hide');
    }
  };

  /**
   * Toggle if coordinates should show
   * @param {Boolean} [enableCoordinates] Enable coordinates
   */
  ContextMenu.prototype.toggleCoordinates = function (enableCoordinates) {
    if (enableCoordinates === undefined) {
      this.hasCoordinates = !this.hasCoordinates;
    }
    else {
      this.hasCoordinates = !!enableCoordinates;
    }

    this.updateContextMenu();
  };

  /**
   * Attach context menu to body.
   */
  ContextMenu.prototype.attach = function () {
    this.$contextMenu.appendTo(this.$parent);
  };

  /**
   * Detach context menu from DOM.
   */
  ContextMenu.prototype.detach = function () {
    this.$contextMenu.detach();
  };

  return ContextMenu;

})(H5P.jQuery, H5P.EventDispatcher);
