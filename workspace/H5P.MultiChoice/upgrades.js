var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.MultiChoice'] = (function ($) {
  return {
    1: {
      1: {
        contentUpgrade: function (parameters, finished) {
          // Moved all behavioural settings into "behaviour" group.
          parameters.behaviour = {
            enableRetry: parameters.tryAgain === undefined ? true : parameters.tryAgain,
            enableSolutionsButton: parameters.enableSolutionsButton === undefined ? true : parameters.enableSolutionsButton,
            singleAnswer: parameters.singleAnswer === undefined ? true : parameters.singleAnswer,
            singlePoint: parameters.singlePoint === undefined ? true : parameters.singlePoint,
            randomAnswers: parameters.randomAnswers === undefined ? true : parameters.randomAnswers,
            showSolutionsRequiresInput: parameters.showSolutionsRequiresInput === undefined ? true : parameters.showSolutionsRequiresInput
          };
          if (parameters.UI === undefined) {
            parameters.UI = {};
          }
          parameters.UI.checkAnswerButton = 'Check';
          delete parameters.tryAgain;
          delete parameters.enableSolutionsButton;
          delete parameters.singleAnswer;
          delete parameters.singlePoint;
          delete parameters.randomAnswers;
          delete parameters.showSolutionsRequiresInput;

          finished(null, parameters);
        }
      },
      3: {
        contentUpgrade: function (parameters, finished) {
          parameters.answers.forEach(function (answer) {
            // Add new place for variable and delete old.
            if (answer.tipsAndFeedback === undefined) {
              answer.tipsAndFeedback = {};
            }

            answer.tipsAndFeedback.tip = answer.tip !== undefined ? answer.tip : '';
            answer.tipsAndFeedback.chosenFeedback = answer.chosenFeedback !== undefined ? answer.chosenFeedback : '';
            answer.tipsAndFeedback.notChosenFeedback = answer.notChosenFeedback !== undefined ? answer.notChosenFeedback : '';
            delete answer.tip;
            delete answer.chosenFeedback;
            delete answer.notChosenFeedback;
          });

          finished(null, parameters);
        }
      }
    }
  };
})(H5P.jQuery);
