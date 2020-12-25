var H5PPresave = H5PPresave || {};

/**
 * Resolve the presave logic for the content type Single Choice Set
 *
 * @param {object} content
 * @param finished
 * @constructor
 */
H5PPresave['H5P.SingleChoiceSet'] = function (content, finished) {
  var presave = H5PEditor.Presave;
  var score = 0;

  if (isContentInvalid()) {
    throw new presave.exceptions.InvalidContentSemanticsException('Invalid Single Choice Error');
  }

  score = content.choices
    .filter(function (choice) {
      return choice.hasOwnProperty('question') && choice.question.length > 0;
    })
    .length;

  presave.validateScore(score);

  finished({maxScore: score});

  /**
   * Check if required parameters is present
   * @return {boolean}
   */
  function isContentInvalid() {
    return !presave.checkNestedRequirements(content, 'content.choices') || !Array.isArray(content.choices);
  }
};
