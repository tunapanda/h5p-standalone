/** @namespace H5P */
H5P.CoursePresentation.GoToSlide = (function ($) {

  /**
   * Element for linking between slides in presentations.
   *
   * @class
   * @param {Number} slideNum
   * @param {CoursePresentation} cp
   */
  function GoToSlide(title, slideNum, invisible, cp) {
    var self = this;

    var classes = 'h5p-press-to-go';
    var tabindex = 1;
    if (invisible) {
      title = undefined;
      tabindex = -1;
    }
    else {
      title = title ? title : cp.l10n.goToSlide.replace(':num', slideNum);
      classes += ' h5p-visible';
    }

    slideNum--;

    /**
     * @private
     */
    var go = function () {
      if (cp.editor === undefined && cp.slides[slideNum] !== undefined) {
        cp.jumpToSlide(slideNum);
      }
    };

    // Create button that leads to another slide
    var $button = $('<div/>', {
      'class': classes,
      role: 'button',
      tabindex: tabindex,
      title: title,
      on: {
        click: go,
        keypress: function (event) {
          if (event.which === 13) {
            go();
          }
        }
      }
    });

    /**
     * Attach element to the given container.
     *
     * @public
     * @param {jQuery} $container
     */
    self.attach = function ($container) {
      $container.html('').addClass('h5p-go-to-slide').append($button);
    };
  }

  return GoToSlide;
})(H5P.jQuery);
