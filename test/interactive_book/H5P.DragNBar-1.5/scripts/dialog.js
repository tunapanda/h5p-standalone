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
    var KEY_CODE_ESC = 27;
    var KEY_CODE_ENTER = 13;
    var KEY_CODE_SPACE = 32;

    var self = this;
    var titleId = 'dialog-title-' + H5P.createUUID();

    // Initialize event inheritance
    EventDispatcher.call(self);

    /**
     * Stops propagating an event
     *
     * @param {Event} event
     */
    var stopEventPropagation = function (event) {
      // k is used to stop and start an interactive video
      if (event.which === 75) {
        event.stopPropagation();
      }
    };

    // Create DOM elements for dialog
    var $wrapper = $('<div/>', {
      'class': 'h5p-dialog-wrapper h5p-ie-transparent-background h5p-hidden',
      on: {
        click: function () {
          if (!self.disableOverlay)  {
            self.close();
          }
        },
        keyup: stopEventPropagation,
        keydown: stopEventPropagation
      }
    });
    var $dialog = $('<div/>', {
      'class': 'h5p-dialog h5p-big',
      'aria-labelledby': titleId,
      on: {
        click: function (event) {
          event.stopPropagation();
        },
        keydown: function (event) {
          var isClosable = $close.is(':visible');
          if (event.which === KEY_CODE_ESC && isClosable) {
            self.close();
          }
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
      id: titleId,
      appendTo: $titleBar
    });
    var $close = $('<div/>', {
      'role': 'button',
      'class': 'h5p-dialog-close',
      tabindex: '0',
      title: H5P.t('close'),
      'aria-label': H5P.t('close'),
      on: {
        click: function (event) {
          if (event.which === 1) {
            self.close();
          }
        },
        keypress: function (event) {
          if (event.which === KEY_CODE_SPACE || event.which === KEY_CODE_ENTER) {
            self.close();
            event.preventDefault();
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
     * @private
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

      $dialog.one('transitionend', function() {
        // Find visible enabled inputs:
        var $inputs = $inner.find('input:visible:not(:disabled)');
        var $tabbables = $inner.find('[tabindex]');

        // Prioritize the focusing of inputs before other elements
        if ($inputs.length) {
          $inputs.get(0).focus();
        }
        // If other tabbables exist like h5p-text, focus on them
        else if ($tabbables.length) {
          $tabbables.get(0).focus();
        }
      });
    };

    self.resize = function () {
      if (!$dialog.hasClass('h5p-big')) {
        return;
      }

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

    /**
     * Toggle class on the dialog Dom element
     * @method toggleClass
     * @param  {String}    cls    Classname
     * @param  {Boolean}   toggle
     */
    self.toggleClass = function (cls, toggle) {
      $dialog.toggleClass(cls, toggle);
    };

    self.isOpen = function () {
      return $wrapper.is(':visible');
    };

    /**
     * Reposition the currently open dialog relative to the given button.
     *
     * @param {H5P.jQuery} $button
     * @param {Object} [size] Sets a size for the dialog, useful for images.
     * @param {string|boolean} [type] Type of dialog. Possible values are
     * 'medium' and 'big'. It also supports an older version of the function,
     * i.e: type = true means 'medium'
     */
    self.position = function ($button, size, type) {
      // Still support old version of this function
      if (type === true) {
        type = 'medium';
      }

      resetPosition();
      $dialog.removeClass('h5p-big h5p-medium');
      var titleBarHeight = Number($inner[0].style.marginTop.replace('em', ''));

      // Use a fixed size
      if (size) {
        var fontSizeRatio = 16 / toNum($container.css('fontSize'));

        // Fixed width
        if (size.width) {
          size.width = (size.width * fontSizeRatio);
          $dialog.css('width', size.width + 'em');
        }

        // Fixed height
        if (size.height) {
          size.height = (size.height * fontSizeRatio) + titleBarHeight;
          $dialog.css('height', size.height + 'em');

          $inner.css({
            width: 'auto',
            overflow: 'hidden'
          });
        }
      }

      if (type === 'medium') {
        $dialog.addClass('h5p-medium');
      }

      if (type === 'big') {
        $dialog.addClass('h5p-big');
        $dialog.addClass('h5p-stretch');
      }

      var buttonWidth = $button.outerWidth(true);
      var buttonPosition = $button.position();
      var containerWidth = $container.width();
      var containerHeight = $container.height();

      // Position dialog horizontally
      var left = buttonPosition.left;
      var dialogWidth = $dialog.outerWidth(true);
      if (type === 'medium' && dialogWidth > containerWidth) {
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

      // Set dialog size for dialogs which aren't stretched
      if (type !== 'big') {
        var top = (type === 'medium' ? 0 : (buttonPosition.top + marginTop));
        var totalHeight = top + $dialog.outerHeight(true);
        if (totalHeight > containerHeight) {
          top -= totalHeight - containerHeight;
        }
        var maxHeight = $container.height() - top + $dialog.height() - $dialog.outerHeight(true);
        var fontSize = toNum($container.css('fontSize'));

        $dialog.css({
          top: (top / (containerHeight / 100)) + '%',
          left: (left / (containerWidth / 100)) + '%',
          width: (window.getComputedStyle($dialog[0]).width / fontSize) + 'em',
          maxHeight: (maxHeight / fontSize) + 'em'
        });
        $inner.css('maxHeight', ((maxHeight - $titleBar.outerHeight(true)) / fontSize) + 'em');
      }
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

      // If border, extract that:
      max.height -= Number($inner.css('border-width').replace('px', '')) * 2;

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
    self.close = function (closeInstant) {
      $wrapper.addClass('h5p-hidden');

      if (closeInstant) {
        $wrapper.hide();
        self.disableOverlay = false;
        $close.show();
      }
      else {
        setTimeout(function () {
          $wrapper.hide();
          self.disableOverlay = false;
          $close.show();
        }, 201);
      }

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
    self.hideCloseButton = function () {
      $close.hide();
    };

    /**
     * Get width of dialog
     * @returns {Number} Width of dialog
     */
    self.getDialogWidth = function () {
      return $dialog.width();
    };

    /**
     * Reset dialog width
     */
    self.removeStaticWidth = function () {
      $dialog.css('width', '');
    };
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
