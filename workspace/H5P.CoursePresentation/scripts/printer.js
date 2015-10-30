H5P.CoursePresentation.Printer = (function ($) {
  /**
   * Printer class
   * @class Printer
   */
  function Printer(){}

  /**
   * Check if printing is supported
   *
   * @method supported
   * @static
   * @return {boolean} True if supported, else false.
   */
  Printer.supported = function () {
    // Need window.print to be available
    return (typeof window.print === 'function');
  };

  /**
   * Do the actual printing
   *
   * @method print
   * @static
   * @param  {H5P.CoursePresentation} cp Reference to cp instance
   * @param  {H5P.jQuery} $wrapper  The CP dom wrapper
   * @param  {boolean} allSlides If true, all slides are printed. If false or
   *                             undefined, the currentSlide is printed.
   */
  Printer.print = function (cp, $wrapper, allSlides) {
    // Let CP know we are about to print
    cp.trigger('printing', {finished: false, allSlides: allSlides});

    // Find height of a slide:
    var $currentSlide = $('.h5p-slide.h5p-current');
    var slideHeight = $currentSlide.height();
    var slideWidth = $currentSlide.width();

    // Use 670px as width when printing. We can't use 100% percent, since user can
    // change between landscape and portrait without us ever knowing about it.
    // More info: http://stackoverflow.com/a/11084797/2797106
    var ratio = slideWidth/670;

    var $slides = $('.h5p-slide');

    $slides.css({
      height: slideHeight/ratio + 'px',
      width: '670px',
      fontSize: Math.floor(100/ratio) + '%'
    });

    var wrapperHeight = $wrapper.height();
    $wrapper.css('height', 'auto');

    // Let printer css know which slides to print:
    $slides.toggleClass('doprint', allSlides === true);
    $currentSlide.addClass('doprint');

    // Need timeout for some browsers.
    setTimeout(function () {
      // Do the actual printing of the iframe content
      window.print();

      // Reset CSS
      $slides.css({
        height: '',
        width: '',
        fontSize: ''
      });
      $wrapper.css('height', wrapperHeight+'px');

      // Let CP know we are finished printing
      cp.trigger('printing', {finished: true});
    }, 500);
  };

  /**
   * Show the print dialog. Wanted to use H5P.Dialog, but it does not support getting a jQuery object as the content
   *
   * @method showDialog
   * @param  {object}       texts    Translated texts
   * @param  {H5P.jQuery}   $element Dom object to insert dialog after
   * @param  {Function}     callback Function invoked when printing is done.
   */
  Printer.showDialog = function (texts, $element, callback) {
    var self = this;
    /*jshint multistr: true */
    var $dialog = $('<div class="h5p-popup-dialog h5p-print-dialog">\
                      <div class="h5p-inner">\
                        <h2>' + texts.printTitle + '</h2>\
                        <div class="h5p-scroll-content"></div>\
                        <div class="h5p-close" role="button" tabindex="1" title="' + H5P.t('close') + '">\
                      </div>\
                    </div>')
      .insertAfter($element)
      .click(function () {
        self.close();
      })
      .children('.h5p-inner')
      .click(function () {
          return false;
      })
      .find('.h5p-close')
      .click(function () {
        self.close();
      }).end().end();

    var $content = $dialog.find('.h5p-scroll-content');

    $content.append($('<div>', {
      'class': 'h5p-cp-print-ingress',
      html: texts.printIngress
    }));

    var $buttonAllSlides = H5P.JoubelUI.createButton({
      html: texts.printAllSlides,
      'class': 'h5p-cp-print-all-slides',
      click: function () {
        self.close();
        callback(true);
      }
    }).appendTo($content);

    var $buttonCurrentSlide = H5P.JoubelUI.createButton({
      html: texts.printCurrentSlide,
      'class': 'h5p-cp-print-current-slide',
      click: function () {
        self.close();
        callback(false);
      }
    }).appendTo($content);

    this.open = function () {
      setTimeout(function () {
        $dialog.addClass('h5p-open'); // Fade in
        // Triggering an event, in case something has to be done after dialog has been opened.
        H5P.jQuery(self).trigger('dialog-opened', [$dialog]);
      }, 1);
    };

    this.close = function () {
      $dialog.removeClass('h5p-open'); // Fade out
      setTimeout(function () {
        $dialog.remove();
      }, 200);
    };

    this.open();
  };

  return Printer;

})(H5P.jQuery);
