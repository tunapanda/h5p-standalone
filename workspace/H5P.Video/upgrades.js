/** @namespace H5PUpgrades */
var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.Video'] = (function ($) {

  /**
   * Help move and rename object properties.
   *
   * @private
   * @param {Object} oldObj The object that has the property
   * @param {String} oldProp The old property name
   * @param {String} newProp The new property name OR the new object.
   * @param {Object} [newObj] The new object for the property.
   */
  var moveProp = function (oldObj, oldProp, newProp, newObj) {
    if (!oldObj.hasOwnProperty(oldProp)) {
      return;
    }

    if (!(newProp instanceof String) && typeof newProp !== 'string') {
      // Allow using dropping newProp and using it as the new Object
      newObj = newProp;
      newProp = oldProp;
    }
    else if (!newObj) {
      // Move on same object
      newObj = oldObj;
    }

    newObj[newProp] = oldObj[oldProp];
    delete oldObj[oldProp];
  };

  return {
    1: {
      /**
       * Asynchronous content upgrade hook.
       * Upgrades content parameters to support Video 1.1.
       *
       * Renames some parameters to better suiting names, groups language
       * localizations and moves copyrights to new object.
       *
       * @public
       * @params {Object} parameters
       * @params {Function} finished
       */
      1: function (parameters, finished) {

        // Use new names that better fits
        moveProp(parameters, 'files', 'sources');
        moveProp(parameters, 'fitToWrapper', 'fit');

        if (parameters.contentName) {
          // Create new group for language localization
          parameters.l10n = {};
          moveProp(parameters, 'contentName', 'name', parameters.l10n);
        }

        // Move old copyright properties
        var source;
        if (parameters.copyright && parameters.sources && parameters.sources[0]) {
          source = parameters.sources[0];
        }
        if (source && source.copyright) {
          var props = ['title', 'author', 'source', 'license'];
          for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            if (parameters.copyright[prop] && !source.copyright[prop]) {
              moveProp(parameters.copyright, prop, source.copyright);
            }
          }
        }
        if (parameters.copyright) {
          delete parameters.copyright;
        }

        // Done
        finished(null, parameters);
      }
    }
  };
})(H5P.jQuery);
