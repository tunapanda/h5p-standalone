var H5P = H5P || {};
H5P.SingleChoiceSet = H5P.SingleChoiceSet || {};
/**
 * SingleChoiceResultSlide - Represents the result slide
 */
H5P.SingleChoiceSet.ResultSlide = (function ($, EventEmitter) {

  /**
  * @constructor
  * @param {number} maxscore Max score
  */
  function ResultSlide(maxscore) {
    EventEmitter.call(this);
    this.maxscore = maxscore;
    var self = this;
    this.$feedbackContainer = $('<div>', {
     'class': 'h5p-sc-feedback-container'
    });

    this.$buttonContainer = $('<div/>', {
      'class': 'h5p-sc-button-container'
    });

    var $resultContainer = $('<div/>', {
      'class': 'h5p-sc-result-container'
    }).append(this.$feedbackContainer)
      .append(this.$buttonContainer);

    this.$resultSlide = $('<div>', {
      'class': 'h5p-sc-slide h5p-sc-set-results',
      'css': {left: (maxscore * 100) + '%'}
    }).append($resultContainer);
  }
  ResultSlide.prototype = Object.create(EventEmitter.prototype);
  ResultSlide.prototype.constructor = ResultSlide;


  /**
   * Append the resultslide to a container
   *
   * @param  {domElement} $container The container
   * @return {domElement}            This dom element
   */
  ResultSlide.prototype.appendTo = function ($container) {
    this.$resultSlide.appendTo($container);
    return this.$resultSlide;
  };

  return ResultSlide;

})(H5P.jQuery, H5P.SingleChoiceSet.EventEmitter);
