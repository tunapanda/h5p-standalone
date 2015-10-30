var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.DragText'] = (function ($) {
  return {
    1: {
      1: {
        contentUpgrade: function (parameters, finished) {
          // Moved all behavioural settings into "behaviour" group.
          parameters.behaviour = {
            enableRetry: parameters.enableTryAgain === undefined ? true : parameters.enableTryAgain,
            enableSolutionsButton: parameters.enableShowSolution === undefined ? true : parameters.enableShowSolution,
            instantFeedback: parameters.instantFeedback === undefined ? false : parameters.instantFeedback
          };
          delete parameters.enableTryAgain;
          delete parameters.enableShowSolution;
          delete parameters.instantFeedback;

          finished(null, parameters);
        }
      }
    }
  };
})(H5P.jQuery);