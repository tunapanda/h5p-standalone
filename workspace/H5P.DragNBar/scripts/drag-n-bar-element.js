/*global H5P*/

/**
 * Create Drag N Bar Element. Connects a DragNBar element to a context menu
 */
H5P.DragNBarElement = (function ($, ContextMenu, EventDispatcher) {

  /**
   * Constructor DragNBarElement
   *
   * @class
   * @param {H5P.DragNBar} dragNBar Parent dragNBar toolbar
   * @param {Object} [options] Button object that the element is created from
   * @param {Boolean} [options.disableContextMenu] Decides if element should have editor functionality
   * @param {Function} [options.createElement] Function for creating element from button
   * @param {boolean} [options.hasCoordinates] Decides if element will display coordinates
   * @param {H5P.jQuery} [options.element] Element
   */
  function DragNBarElement(dragNBar, options) {
    var self = this;
    EventDispatcher.call(this);

    this.dnb = dragNBar;
    this.options = options || {};
    if (!this.options.disableContextMenu) {
      this.contextMenu = new ContextMenu(this.dnb.$dialogContainer, this, this.options.hasCoordinates);
    }
    this.focused = false;

    if (this.options.createElement) {
      this.$element = this.options.createElement().appendTo(dragNBar.$container);
      this.focus();
    }
    else {
      this.$element = this.options.element;
    }

    // Let dnb know element has been pressed
    if (this.$element) {
      if (this.dnb.isEditor) {
        this.$element.mousedown(function () {
          self.dnb.pressed = true;
        });
      }

      // Run custom focus function on element focus
      this.$element.focus(function () {
        self.focus();
      });
    }
  }

  // Inheritance
  DragNBarElement.prototype = Object.create(EventDispatcher.prototype);
  DragNBarElement.prototype.constructor = DragNBarElement;

  /**
   * Add button to context menu.
   *
   * @param {string} name
   * @param {string} label
   */
  DragNBarElement.prototype.addButton = function (name, label) {
    this.contextMenu.addToMenu({name:name, label:label});
  };

  /**
   * Get element
   * @returns {H5P.jQuery}
   */
  DragNBarElement.prototype.getElement = function () {
    return this.$element;
  };

  /**
   * Set element
   * @param {H5P.jQuery} $element
   */
  DragNBarElement.prototype.setElement = function ($element) {
    var self = this;
    this.$element = $element;

    // Register custom focus function on new element focus
    this.$element.focus(function () {
      self.focus();
    });
  };

  /**
   * Show context menu
   */
  DragNBarElement.prototype.showContextMenu = function () {
    if (this.contextMenu) {
      this.contextMenu.attach();
    }
  };

  /**
   * Hide context menu
   */
  DragNBarElement.prototype.hideContextMenu = function () {
    if (this.contextMenu) {
      this.contextMenu.detach();
    }
  };

  /**
   * Update coordinates in context menu to current location
   *
   * @param {Number} left Left position of context menu
   * @param {Number} top Top position of context menu
   * @param {Number} x X coordinate of context menu
   * @param {Number} y Y coordinate of context menu
   */
  DragNBarElement.prototype.updateCoordinates = function (left, top, x, y) {
    if (this.contextMenu) {
      this.contextMenu.updateCoordinates(left, top, x, y);
      this.resizeContextMenu(x);
    }
  };

  /**
   * Float context menu left if width exceeds parent container.
   *
   * @param {Number} left Left position of context menu.
   */
  DragNBarElement.prototype.resizeContextMenu = function (left) {
    var containerWidth = this.dnb.$container.width();
    var $tmp = this.contextMenu.$contextMenu.clone().css({
      position: 'absolute',
      left: 0
    }).appendTo(this.contextMenu.$contextMenu.parent());
    var contextMenuWidth = $tmp.outerWidth(true);
    $tmp.remove();
    var isTooWide = left + contextMenuWidth >= containerWidth;

    if (isTooWide) {
      var newLeft = left - contextMenuWidth;
      this.contextMenu.$contextMenu.css('left', newLeft + 'px');
      this.contextMenu.$contextMenu.addClass('left-aligned');
    } else {
      this.contextMenu.$contextMenu.removeClass('left-aligned');
    }
  };

  /**
   * Blur element and hide context menu.
   */
  DragNBarElement.prototype.blur = function () {
    if (this.$element) {
      this.$element.removeClass('focused');
      this.focused = false;
    }
    this.hideContextMenu();
  };

  /**
   * Focus element
   */
  DragNBarElement.prototype.focus = function () {
    this.$element.addClass('focused');
    this.focused = true;
    if (this.contextMenu) {
      this.resizeContextMenu(this.$element.position().left);
    }
  };

  /**
   * Remove element and hide context menu
   */
  DragNBarElement.prototype.removeElement = function () {
    this.$element.detach();
    this.hideContextMenu();
  };

  return DragNBarElement;

})(H5P.jQuery, H5P.DragNBarContextMenu, H5P.EventDispatcher);
