var H5P = H5P || {};

/**
 * H5P Link Library Module.
 */
H5P.Link = (function ($) {

  /**
   * Link constructor.
   *
   * @param {Object} parameters
   * @param {Number} id
   */
  function Link(parameters, id) {
    // Add default parameters
    parameters = $.extend(true, {
      title: 'New link',
      linkWidget: {
        protocol: '',
        url: ''
      }
    }, parameters);

    var url = '';
    if (parameters.linkWidget.protocol !== 'other') {
       url += parameters.linkWidget.protocol;
    }
    url += parameters.linkWidget.url;

    /**
     * Public. Attach.
     *
     * @param {jQuery} $container
     */
    this.attach = function ($container) {
      var sanitizedUrl = sanitizeUrlProtocol(url);
      $container.addClass('h5p-link').html('<a href="' + sanitizedUrl + '" target="_blank">' + parameters.title + '</a>');
    };

    /**
     * Return url
     *
     * @returns {string}
     */
    this.getUrl = function () {
      return url;
    };

    /**
     * Private. Remove illegal url protocols from uri
     */
    var sanitizeUrlProtocol = function(uri) {
      var allowedProtocols = ['http', 'https', 'ftp', 'irc', 'mailto', 'news', 'nntp', 'rtsp', 'sftp', 'ssh', 'tel', 'telnet', 'webcal'];

      var first = true;
      var before = '';
      while (first || uri != before) {
        first = false;
        before = uri;
        var colonPos = uri.indexOf(':');
        if (colonPos > 0) {
          // We found a possible protocol
          var protocol = uri.substr(0, colonPos);
          // If the colon is preceeded by a hash, slash or question mark it isn't a protocol
          if (protocol.match(/[/?#]/g)) {
            break;
          }
          // Is this a forbidden protocol?
          if (allowedProtocols.indexOf(protocol.toLowerCase()) == -1) {
            // If illegal, remove the protocol...
            uri = uri.substr(colonPos + 1);
          }
        }
      }
      return uri;
    };
  }

  return Link;
})(H5P.jQuery);
