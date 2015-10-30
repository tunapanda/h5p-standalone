var H5P = H5P || {};
H5P.SingleChoiceSet = H5P.SingleChoiceSet || {};

H5P.SingleChoiceSet.SingleChoice = (function ($, EventEmitter, Alternative, SoundEffects) {
  /**
   * Constructor function.
   */
  function SingleChoice(options, index) {
    EventEmitter.call(this);
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      question: '',
      answers: []
    }, options);
    // Keep provided id.
    this.index = index;

    for (var i = 0; i < this.options.answers.length; i++) {
      this.options.answers[i] = {text: this.options.answers[i], correct: i===0};
    }
    // Randomize alternatives
    this.options.answers = H5P.shuffleArray(this.options.answers);
  }
  SingleChoice.prototype = Object.create(EventEmitter.prototype);
  SingleChoice.prototype.constructor = SingleChoice;

  /**
   * appendTo function invoked to append SingleChoice to container
   *
   * @param {jQuery} $container
   */
   SingleChoice.prototype.appendTo = function ($container, current) {
    var self = this;
    this.$container = $container;

    this.$choice = $('<div>', {
      'class': 'h5p-sc-slide h5p-sc' + (current ? ' h5p-sc-current-slide' : ''),
      css: {'left': (self.index*100) + '%'}
    });

    this.$choice.append($('<div>', {
      'class': 'h5p-sc-question',
      'html': '<p>' + this.options.question + '</p>'
    }));

    var $alternatives = $('<ul>', {
      'class': 'h5p-sc-alternatives'
    });


    /**
     * Handles click on an alternative
     */
    var handleAlternativeSelected = function (data) {
      if (data.$element.parent().hasClass('h5p-sc-selected')) {
        return;
      }
      // Can't play it after the transition end is received, since this is not
      // accepted on iPad. Therefore we are playing it here with a delay instead
      SoundEffects.play(data.correct ? 'positive-short' : 'negative-short', 700);

      H5P.Transition.onTransitionEnd(data.$element.find('.h5p-sc-progressbar'), function () {
        data.$element.addClass('h5p-sc-drummed');
        self.showResult(data.correct);
      }, 700);

      data.$element.addClass('h5p-sc-selected').parent().addClass('h5p-sc-selected');
    };

    for (var i = 0; i < this.options.answers.length; i++) {
      var alternative = new Alternative(this.options.answers[i]);
      alternative.appendTo($alternatives);
      alternative.on('alternative-selected', handleAlternativeSelected);
    }
    this.$choice.append($alternatives);
    $container.append(this.$choice);
    return this.$choice;
  };

  /**
   * Reveals the result for a question
   * @param  {boolean} correct True uf answer was correct, otherwise false
   */
  SingleChoice.prototype.showResult = function (correct) {
    var self = this;

    var $correctAlternative = self.$choice.find('.h5p-sc-is-correct');

    H5P.Transition.onTransitionEnd($correctAlternative, function () {
      self.trigger('finished', {correct: correct});
    }, 600);

    // Reveal corrects and wrong
    self.$choice.find('.h5p-sc-is-wrong').addClass('h5p-sc-reveal-wrong');
    $correctAlternative.addClass('h5p-sc-reveal-correct');
  };

  return SingleChoice;

})(H5P.jQuery, H5P.SingleChoiceSet.EventEmitter, H5P.SingleChoiceSet.Alternative, H5P.SingleChoiceSet.SoundEffects);
