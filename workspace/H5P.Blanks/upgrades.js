var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.Blanks'] = (function ($) {
  return {
    1: {
      1: {
        contentUpgrade: function (parameters, finished) {
          // Moved all behavioural settings into "behaviour" group.
          parameters.behaviour = {
            enableRetry: parameters.enableTryAgain === undefined ? true : parameters.enableRetry,
            enableSolutionsButton: true,
            autoCheck: parameters.autoCheck === undefined ? false : parameters.autoCheck,
            caseSensitive: parameters.caseSensitive === undefined ? true : parameters.caseSensitive,
            showSolutionsRequiresInput: parameters.showSolutionsRequiresInput === undefined ? true : parameters.showSolutionsRequiresInput,
            separateLines: parameters.separateLines === undefined ? false : parameters.separateLines
          };
          delete parameters.enableTryAgain;
          delete parameters.enableShowSolution;
          delete parameters.autoCheck;
          delete parameters.caseSensitive;
          delete parameters.showSolutionsRequiresInput;
          delete parameters.separateLines;
          delete parameters.changeAnswer;

          finished(null, parameters);
        }
      }
    }
  };
})(H5P.jQuery);