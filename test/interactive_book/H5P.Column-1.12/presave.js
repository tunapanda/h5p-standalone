var H5PPresave = H5PPresave || {};

/**
 * Resolve the presave logic for the content type Column
 *
 * @param {object} content
 * @param finished
 * @constructor
 */
H5PPresave['H5P.Column'] = function (content, finished) {
  var presave = H5PEditor.Presave;
  if (isContentInvalid()) {
    throw new presave.exceptions.InvalidContentSemanticsException('Invalid Column Error');
  }

  var score = content.content
    .map(function (content) {
      return content.content;
    })
    .filter(function (action) {
      return action.hasOwnProperty('library') && action.hasOwnProperty('params');
    })
    .map(function (action) {
      return (new presave).process(action.library, action.params).maxScore;
    })
    .reduce(function (currentScore, scoreToAdd) {
      if (presave.isInt(scoreToAdd)) {
        currentScore += scoreToAdd;
      }
      return currentScore;
    }, 0);

  presave.validateScore(score);

  finished({maxScore: score});

  /**
   * Check if required parameters is present
   * @return {boolean}
   */
  function isContentInvalid() {
    return !presave.checkNestedRequirements(content, 'content.content') || !Array.isArray(content.content);
  }
};
