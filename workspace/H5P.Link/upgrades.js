/*global H5P*/
/** @namespace H5PUpgrades */
var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.Link'] = (function ($) {
  return {
    1: {
      /**
       * Asynchronous content upgrade hook.
       * Upgrades content parameters to support link v1.1.
       *
       * Sets protocol to none.
       *
       * @params {Object} parameters
       * @params {function} finished
       */
      1: function (parameters, finished) {
        var allowedProtocols = ['http://', 'https://', '/'];
        var urlProtocol;
        var url = parameters.url || '';

        // Check if url had any allowed protocols
        allowedProtocols.forEach(function (protocol) {
          if (url.substr(0, protocol.length) === protocol) {
            urlProtocol = protocol;
            url = url.substr(protocol.length);
          }
        });

        // Set new link widget parameters
        parameters.linkWidget = {
          url: url
        };

        if (urlProtocol) {
          parameters.linkWidget.protocol = urlProtocol;
        } else {
          parameters.linkWidget.protocol = 'other';
        }

        //Remove old url
        delete parameters.url;

        // Done
        finished(null, parameters);
      }
    }
  };
})(H5P.jQuery);
