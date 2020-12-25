/**
 * Defines the ImageHotspots.Popup class
 */
(function ($, ImageHotspots, EventDispatcher) {

  /**
   * Creates new Popup instance
   *
   * @class
   * @namespace H5P.ImageHotspots
   * @param {H5P.jQuery} $container
   * @param {H5P.jQuery} $content
   * @param {number} x
   * @param {number} y
   * @param {number} hotspotWidth
   * @param {string} header
   * @param {string} className
   * @param {boolean} fullscreen
   * @param {Object} options
   *
   */
  ImageHotspots.Popup = function ($container, $content, x, y, hotspotWidth, header, className, fullscreen, options) {
    EventDispatcher.call(this);

    var self = this;
    this.$container = $container;
    var width = this.$container.width();

    var pointerWidthInPercent = 4;
    hotspotWidth = (hotspotWidth/width)*100;

    var popupLeft = 0;
    var popupWidth = 0;
    var toTheLeft = false;

    if (fullscreen) {
      popupWidth = 100;
      className += ' fullscreen-popup';
    }
    else {
      toTheLeft = (x > 45);
      popupLeft = (toTheLeft ? 0 : (x + hotspotWidth + pointerWidthInPercent));
      popupWidth = (toTheLeft ?  x - pointerWidthInPercent : 100 - popupLeft);
    }

    this.$popupBackground = $('<div/>', {'class': 'h5p-image-hotspots-overlay'});
    this.$popup = $('<div/>', {
      'class': 'h5p-image-hotspot-popup ' + className,
      'role': 'dialog'
    }).css({
      left: (toTheLeft ? '' : '-') + '100%',
      width: popupWidth + '%'
    }).click(function (event) {
      // If clicking on popup, stop propagating:
      event.stopPropagation();
    }).appendTo(this.$popupBackground);

    this.$popupContent = $('<div/>', {'class': 'h5p-image-hotspot-popup-content'});
    if (header) {
      this.$popupHeader = $('<div/>', {
        'class': 'h5p-image-hotspot-popup-header',
        html: header,
        'tabindex': '-1'
      });
      this.$popupContent.append(this.$popupHeader);
      this.$popup.addClass('h5p-image-hotspot-has-header');
    }
    $content.appendTo(this.$popupContent);
    this.$popupContent.appendTo(this.$popup);

    // Add close button
    this.$closeButton = $('<button>', {
      'class': 'h5p-image-hotspot-close-popup-button',
      'aria-label': options.closeButtonLabel,
      'title': options.closeButtonLabel
    }).click(function () {
      self.trigger('closed');
    }).keydown(function (e) {
      if (e.which === 32 || e.which === 13) {
        self.trigger('closed', {refocus: true});
        return false;
      }
    }).appendTo(this.$popup);

    // Need to add pointer to parent container, since this should be partly covered
    // by the popup
    if (fullscreen) {
      this.$closeButton.addClass('h5p-image-hotspot-close-fullscreen');

      if (!H5P.isFullscreen) {
        var $fullscreenButton = $('.h5p-enable-fullscreen');
        this.$closeButton.css({
          width: $fullscreenButton.outerWidth() + 'px',
          top: $fullscreenButton.outerHeight() + 'px'
        });
      }

      H5P.Transition.onTransitionEnd(self.$popup, function () {
        self.$closeButton.css({
          right: '0'
        });
      }, 300);
    }
    else {
      this.$pointer = $('<div/>', {
        'class': 'h5p-image-hotspot-popup-pointer to-the-' + (toTheLeft ? 'left' : 'right'),
      }).css({
        top: y + 0.5 + '%'
      }).appendTo(this.$popup);
    }

    this.$popupBackground.appendTo(this.$container);

    /**
     * Show popup
     * @param {boolean} [focusContainer] Will focus container for keyboard accessibility
     */
    self.show = function (focusContainer) {
      // Fix height
      var contentHeight = self.$popupContent.height();
      var parentHeight = self.$popup.height();

      if (!fullscreen) {
        if (contentHeight < parentHeight) {
          // don't need all height:
          self.$popup.css({
            maxHeight: 'auto',
            height: 'auto'
          });

          // find new top:
          var yInPixels = (y / 100) * parentHeight;
          var top = ((y / 100) * parentHeight) - (contentHeight / 2);

          // Make sure popup close button is not conflicting with full screen button
          if (top < 30) {
            top = 30;
          }
          else if (top + contentHeight > parentHeight) {
            top = parentHeight - contentHeight;
          }

          // From pixels to percent:
          var pointerTop = yInPixels - top;
          top = (top / parentHeight) * 100 ;
          self.$popup.css({
            top: top + '%'
          });

          // Need to move pointer:
          self.$pointer.css({
            top: ((pointerTop / contentHeight) * 100) - (parentHeight / contentHeight * 0.5) + '%'
          });
        }
        else {
          // Need all height:
          self.$popupContent.css({
            height: '100%',
            overflow: 'auto'
          });
        }
      }

      self.$popup.css({
        left: popupLeft + '%'
      });
      self.$popupBackground.addClass('visible');

      H5P.Transition.onTransitionEnd(self.$popup, function () {
        if (focusContainer) {
          if (self.$popupHeader) {
            self.$popupHeader.focus();
          }
          else {
            self.$closeButton.focus();
          }
        }
        self.trigger('finishedLoading');
      }, 300);
    };

    self.hide = function () {
      self.$popupBackground.remove();
    };
  };

  // Extends the event dispatcher
  ImageHotspots.Popup.prototype = Object.create(EventDispatcher.prototype);
  ImageHotspots.Popup.prototype.constructor = ImageHotspots.Popup;

})(H5P.jQuery, H5P.ImageHotspots, H5P.EventDispatcher);
