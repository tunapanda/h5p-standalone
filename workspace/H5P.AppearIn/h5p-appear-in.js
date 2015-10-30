var H5P = H5P || {};

H5P.AppearIn = (function ($) {
  
  /**
   * Constructor function.
   */
  function C(options, contentId) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      appearRoom: 'h5p',
      appearHeight: '400',
      appearWidth: '550',
      fitToContainer: true
    }, options);
    // Keep provided id.
    this.contentId = contentId;
};

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    // Set class on container to identify it as a appear.in
    // container.  Allows for styling later.
    $container.addClass("h5p-appear-in");
  
    var iframeParams = {
      src: "https://appear.in/" + this.options.appearRoom
    };
    if (!this.options.fitToContainer) {
      iframeParams.width = this.options.appearWidth;
      iframeParams.height = this.options.appearHeight;
    }
  
    // Creates the Box wrapper
    var content = $('<iframe/>', iframeParams);
    if (this.options.fitToContainer) {
      content.css({height: '100%', width: '100%'});
    }
    content.appendTo($container);
  };

  return C;
})(H5P.jQuery);
