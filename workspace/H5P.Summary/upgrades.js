var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.Summary'] = (function ($) {
  return {
    1: {
      1: {
        contentUpgrade: function (parameters, finished) {
          // Wrap summaries to allow tip.
          for (var i = 0; i < parameters.summaries.length; i++) {
            parameters.summaries[i] = {
              summary: parameters.summaries[i]
            };
          }
          
          finished(null, parameters);
        }
      }
    }
  };
})(H5P.jQuery);