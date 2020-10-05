var H5PEditor = H5PEditor || {};
var H5PPresave = H5PPresave || {};

/**
 * Resolve the presave logic for the content type Drag Question
 *
 * @param {object} content
 * @param finished
 * @constructor
 */
H5PPresave['H5P.DragQuestion'] = function (content, finished) {
  var presave = H5PEditor.Presave;
  var score = 0;
  var correctDropZones = [];

  if (isContentInvalid()) {
    throw new presave.exceptions.InvalidContentSemanticsException('Invalid Drag and Drop Error');
  }

  if (hasDropZones()) {
    correctDropZones = content.question.task.dropZones
      .map(function (dropzone) {
        return dropzone.correctElements;
      })
      .filter(function (correctElements) {
        return correctElements.length;
      })
      .reduce(function (previous, current, dropZone) {
        current.forEach(function (element) {
          if (!Array.isArray(previous[element])) {
            previous[element] = [];
          }
          previous[element].push(dropZone);
        });
        return previous;
      }, []);
  }


  if (correctDropZones.length === 0 || isSinglePoint()) {
    score = 1;
  }
  else if (hasElements()) {
    score = content.question.task.elements
      .filter(function (element, index) {
        return Array.isArray(correctDropZones[index]) && correctDropZones.length > 0;
      })
      .map(function (element) {
        if (element.multiple === true) {
          return correctDropZones.length;
        }
        return 1;
      })
      .reduce(function (previous, current) {
        return previous + current;
      }, 0);
  }

  presave.validateScore(score);

  finished({maxScore: score});

  /**
   * Check if required parameters is present
   * @return {boolean}
   */
  function isContentInvalid() {
    return !presave.checkNestedRequirements(content, 'content.question.task');
  }

  /**
   * Check if tasks has drop zones
   * @return {boolean}
   */
  function hasDropZones() {
    return presave.checkNestedRequirements(content, 'content.question.task.dropZones') && Array.isArray(content.question.task.dropZones);
  }

  /**
   * Check if tasks has elements
   * @return {boolean}
   */
  function hasElements() {
    return presave.checkNestedRequirements(content, 'content.question.task.elements') && Array.isArray(content.question.task.elements);
  }

  /**
   * Check if task should give 1 point as score
   * @return {boolean}
   */
  function isSinglePoint() {
    return presave.checkNestedRequirements(content, 'content.behaviour.singlePoint') && content.behaviour.singlePoint === true;
  }
};
