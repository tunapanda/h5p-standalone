/*global H5P*/
H5P.DragNBarDialog = (function ($, EventDispatcher) {

  /**
   * Controls the dialog in the interactive video.
   *
   * @class
   * @param {H5P.jQuery} $container for dialog
   * @param {H5P.jQuery} $videoWrapper needed for positioning of dialog
   */
  function Dialog($container, $videoWrapper) {
    var self = this;

    // Initialize event inheritance
    EventDispatcher.call(self);

    // Create DOM elements for dialog
    var $wrapper = $('<div/>', {
      'class': 'h5p-dialog-wrapper h5p-ie-transparent-background h5p-hidden',
      on: {
        click: function () {
          if (!self.disableOverlay)  {
            self.close();
          }
        }
      }
    });
    var $dialog = $('<div/>', {
      'class': 'h5p-dialog h5p-big',
      on: {
        click: function (event) {
          event.stopPropagation();
        }
      }
    }).appendTo($wrapper);

    // Create title bar
    var $titleBar = $('<div/>', {
      'class': 'h5p-dialog-titlebar',
      appendTo: $dialog
    });
    var $title = $('<div/>', {
      'class': 'h5p-dialog-title',
      appendTo: $titleBar
    });
    var $close = $('<div/>', {
      'class': 'h5p-dialog-close',
      tabindex: 0,
      title: H5P.t('close'),
      on: {
        click: function (event) {
          if (event.which === 1) {
            self.close();
          }
        },
        keypress: function (event) {
          if (event.which === 32) {
            self.close();
          }
        }
      },
      appendTo: $titleBar
    });

    // Used instead of close
    var $customButtons;

    // Create inner DOM elements for dialog
    var $inner = $('<div/>', {
      'class': 'h5p-dialog-inner'
    }).appendTo($dialog);

    // Add all to DOM
    $wrapper.appendTo($container);

    /**
     * Reset the dialog's positioning
     *
     * @private
     */
    var resetPosition = function () {
      // Reset positioning
      $dialog.css({
        left: '',
        top: '',
        height: '',
        width: '',
        fontSize: '',
        bottom: ''
      });
      $inner.css({
        width: '',
        height: '',
        overflow: ''
      });
    };

    /**
     * Display overlay.
     *
     * @private
     * @param {function} next callback
     */
    var showOverlay = function (next) {
      $wrapper.show();
      setTimeout(function () {
        // Remove class on next tick to ensure css animation
        $wrapper.removeClass('h5p-hidden');
        if (next) {
          next();
        }
      }, 0);
    };

    /**
     * Close overlay.
     *
     * @private
     * @param {function} next callback
     */
    var hideOverlay = function (next) {
      $wrapper.addClass('h5p-hidden');
      setTimeout(function () {
        // Hide when animation is done
        $wrapper.hide();
        if (next) {
          next();
        }
      }, 200);
    };

    /**
     * Opens a new dialog. Displays the given element.
     *
     * @param {H5P.jQuery} $element
     * @param {string} [title] Label for the dialog
     * @param {string} [classes] For styling
     * @param {H5P.jQuery} [$buttons] Use custom buttons for dialog
     */
    self.open = function ($element, title, classes, $buttons) {
      showOverlay();
      $inner.children().detach().end().append($element);

      // Reset positioning
      resetPosition();
      $dialog.addClass('h5p-big');
      $title.attr('class', 'h5p-dialog-title' + (classes ? ' ' + classes : ''));

      // Add label
      if (!title) {
        title = '';
      }
      $title.html(title);

      // Clean up after previous custom buttons
      if ($customButtons) {
        $customButtons.remove();
        $close.show();
      }

      // Add new custom buttons
      if ($buttons) {
        $customButtons = $buttons;

        // Hide default close button
        $close.hide();

        // Add custom buttons
        $buttons.appendTo($titleBar);
      }

      self.resize();

      self.trigger('open');

      setTimeout(function () {
        if ($inner.find('input').length) {
          $inner.find('input').get(0).focus();
        }
      }, 100);
    };

    self.resize = function () {
      var fontSize = toNum($inner.css('fontSize'));
      var titleBarHeight = ($titleBar.outerHeight() / fontSize);

      // Same as height
      var maxHeight = $container.height();
      // minus dialog margins
      maxHeight -= Number($dialog.css('top').replace('px', '')) * 2;

      $inner.css({
        width: '100%',
        maxHeight: ((maxHeight / fontSize) - titleBarHeight) + 'em',
        marginTop: titleBarHeight + 'em'
      });
      $dialog.css({
        bottom: 'auto',
        maxHeight: ''
      });
    };

    /**
     * Adds a name to the dialog for identifying what it contains.
     *
     * @param {string} machineName Name of library inside dialog.
     */
    self.addLibraryClass = function (machineName) {
      $dialog.attr('data-lib', machineName);
    };

    self.isOpen = function () {
      return $wrapper.is(':visible');
    };

    /**
     * Reposition the currently open dialog relative to the given button.
     *
     * @param {H5P.jQuery} $button
     * @param {Object} [size] Sets a size for the dialog, useful for images.
     * @param {boolean} [medium=false] Sets a min. size for medium dialogs.
     */
    self.position = function ($button, size, medium) {
      resetPosition();
      $dialog.removeClass('h5p-big h5p-medium');
      var titleBarHeight = Number($inner[0].style.marginTop.replace('em', ''));

      if (size) {
        var fontSizeRatio = 16 / toNum($container.css('fontSize'));
        size.width = (size.width * fontSizeRatio);
        size.height = (size.height * fontSizeRatio) + titleBarHeight;

        // Use a fixed size
        $dialog.css({
          width: size.width + 'em',
          height: size.height + 'em'
        });
        $inner.css({
          width: 'auto',
          overflow: 'hidden'
        });
      }

      if (medium) {
        $dialog.addClass('h5p-medium');
      }

      var buttonWidth = $button.outerWidth(true);
      var buttonPosition = $button.position();
      var containerWidth = $container.width();
      var containerHeight = $container.height();

      // Position dialog horizontally
      var left = buttonPosition.left;
      var dialogWidth = $dialog.outerWidth(true);
      if (medium && dialogWidth > containerWidth) {
        // If dialog is too big to fit within the container, display as h5p-big instead.
        // Only medium dialogs can become big
        $dialog.addClass('h5p-big');
        return;
      }

      if (buttonPosition.left > (containerWidth / 2) - (buttonWidth / 2)) {
        // Show on left
        left -= dialogWidth - buttonWidth;
      }

      // Make sure the dialog is within the video on the right.
      if ((left + dialogWidth) > containerWidth) {
        left = containerWidth - dialogWidth;
      }

      var marginLeft = parseInt($videoWrapper.css('marginLeft'));
      if (isNaN(marginLeft)) {
        marginLeft = 0;
      }

      // And finally, make sure we're within bounds on the left hand side too...
      if (left < marginLeft) {
        left = marginLeft;
      }

      // Position dialog vertically
      var marginTop = parseInt($videoWrapper.css('marginTop'));
      if (isNaN(marginTop)) {
        marginTop = 0;
      }

      var top = (medium ? 0 : (buttonPosition.top + marginTop));
      var totalHeight = top + $dialog.outerHeight(true);
      if (totalHeight > containerHeight) {
        top -= totalHeight - containerHeight;
      }
      var maxHeight = $container.height() - top + $dialog.height() - $dialog.outerHeight(true);
      // Set dialog size
      $dialog.css({
        top: (top / (containerHeight / 100)) + '%',
        left: (left / (containerWidth / 100)) + '%',
        width: window.getComputedStyle($dialog[0]).width,
        maxHeight: maxHeight
      });
      $inner.css('maxHeight', maxHeight - $titleBar.outerHeight(true));
    };

    /**
     * Find max available space inside dialog when positioning relative to
     * given button.
     *
     * @param {H5P.jQuery} $button
     * @param {Boolean} fullScreen True if dialog fills whole parent
     * @returns {Object} Attrs: width, height
     */
    self.getMaxSize = function ($button, fullScreen) {
      var buttonWidth = $button.outerWidth(true);
      var buttonPosition = $button.position();
      var containerWidth = $container.width();

      var max = {};
      max.height = Number($inner.css('maxHeight').replace('px', ''));
      if (fullScreen) {
        max.width = containerWidth;
      }
      else {
        if (buttonPosition.left > (containerWidth / 2) - (buttonWidth / 2)) {
          // Space to the left of the button minus margin
          max.width = buttonPosition.left;
        }
        else {
          // Space to the right of the button minus margin
          max.width = (containerWidth - buttonPosition.left - buttonWidth);
        }
      }

      // Use em
      var fontSize = toNum($container.css('fontSize'));
      max.width = (max.width / fontSize) * (fontSize / 16);
      max.height = (max.height / fontSize) * (fontSize / 16);

      return max;
    };

    /**
     * Scroll to given position in current dialog.
     *
     * @param {number} to Scroll position
     * @param {number} ms Time the animation takes.
     */
    self.scroll = function (to, ms) {
      $inner.stop().animate({
        scrollTop: to
      }, ms);
    };

    /**
     * Close the currently open dialog.
     */
    self.close = function () {
      $wrapper.addClass('h5p-hidden');


      setTimeout(function () {
        $wrapper.hide();
        self.disableOverlay = false;
        $close.show();
      }, 201);

      self.trigger('close');

      // Let others reach to the hiding of this dialog
      self.trigger('domHidden', {
        '$dom': $wrapper,
        'key': 'dialogClosed'
      }, {'bubbles': true, 'external': true});
    };

    /**
     * Open overlay only.
     */
    self.openOverlay = function () {
      self.disableOverlay = true;
      $dialog.hide();
      showOverlay();
    };

    /**
     * Close overlay only.
     */
    self.closeOverlay = function () {
      $wrapper.addClass('h5p-hidden');
      hideOverlay(function () {
        $dialog.show();
        self.disableOverlay = false;
      });
    };

    /**
     * Removes the close button from the current dialog.
     */
    self.hideCloseButton = function () {
      $close.hide();
    };

    this.on('resize', this.resize, this);
  }

  // Extends the event dispatcher
  Dialog.prototype = Object.create(EventDispatcher.prototype);
  Dialog.prototype.constructor = Dialog;


  /**
   * Converts css px value to number.
   *
   * @private
   * @param {string} num
   * @returns {Number}
   */
  var toNum = function (num) {
    return Number(num.replace('px',''));
  };

  return Dialog;
})(H5P.jQuery, H5P.EventDispatcher);
