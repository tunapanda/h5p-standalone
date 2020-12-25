var H5P = H5P || {};
H5P.SingleChoiceSet = H5P.SingleChoiceSet || {};

H5P.SingleChoiceSet.SingleChoice = (function ($, EventDispatcher, Alternative) {
  /**
   * Constructor function.
   */
  function SingleChoice(options, index, id) {
    EventDispatcher.call(this);
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      question: '',
      answers: []
    }, options);
    // Keep provided id.
    this.index = index;
    this.id = id;
    this.answered = false;

    for (var i = 0; i < this.options.answers.length; i++) {
      this.options.answers[i] = {
        text: this.options.answers[i],
        correct: i === 0,
        answerIndex: i
      };
    }
    // Randomize alternatives
    this.options.answers = H5P.shuffleArray(this.options.answers);
  }

  SingleChoice.prototype = Object.create(EventDispatcher.prototype);
  SingleChoice.prototype.constructor = SingleChoice;

  /**
   * appendTo function invoked to append SingleChoice to container
   *
   * @param {jQuery} $container
   * @param {boolean} isCurrent Current slide we are on
   */
  SingleChoice.prototype.appendTo = function ($container, isCurrent) {
    var self = this;
    this.$container = $container;

    // Index of the currently focused option.
    var focusedOption;

    this.$choice = $('<div>', {
      'class': 'h5p-sc-slide h5p-sc' + (isCurrent ? ' h5p-sc-current-slide' : ''),
      css: {'left': (self.index * 100) + '%'}
    });

    var questionId = 'single-choice-' + self.id + '-question-' + self.index;

    this.$choice.append($('<div>', {
      'id': questionId,
      'class': 'h5p-sc-question',
      'html': this.options.question
    }));

    var $alternatives = $('<ul>', {
      'class': 'h5p-sc-alternatives',
      'role': 'application',
      'aria-labelledby': questionId
    });

    /**
     * List of Alternatives
     *
     * @type {Alternative[]}
     */
    this.alternatives = self.options.answers.map(function (opts) {
      return new Alternative(opts);
    });

    /**
     * Handles click on an alternative
     */
    var handleAlternativeSelected = function (event) {
      var $element = event.data.$element;
      var correct = event.data.correct;
      var answerIndex = event.data.answerIndex;

      if ($element.parent().hasClass('h5p-sc-selected')) {
        return;
      }

      self.trigger('alternative-selected', {
        correct: correct,
        index: self.index,
        answerIndex: answerIndex
      });

      H5P.Transition.onTransitionEnd($element.find('.h5p-sc-progressbar'), function () {
        $element.addClass('h5p-sc-drummed');
        self.showResult(correct, answerIndex);
      }, 700);

      $element.addClass('h5p-sc-selected').parent().addClass('h5p-sc-selected');

      // indicate that this question is anwered
      this.setAnswered(true);
    };

    /**
     * Handles focusing one of the options, making the rest non-tabbable.
     * @private
     */
    var handleFocus = function (answer, index) {
      // Keep track of currently focused option
      focusedOption = index;

      // remove tabbable all alternatives
      self.alternatives.forEach(function (alternative) {
        alternative.notTabbable();
      });
      answer.tabbable();
    };

    /**
     * Handles moving the focus from the current option to the previous option.
     * @private
     */
    var handlePreviousOption = function () {
      if (focusedOption === 0) {
        // wrap around to last
        this.focusOnAlternative(self.alternatives.length - 1);
      }
      else {
        this.focusOnAlternative(focusedOption - 1);
      }
    };

    /**
     * Handles moving the focus from the current option to the next option.
     * @private
     */
    var handleNextOption = function () {
      if ((focusedOption === this.alternatives.length - 1)) {
        // wrap around to first
        this.focusOnAlternative(0);
      }
      else {
        this.focusOnAlternative(focusedOption + 1);
      }
    };

    /**
     * Handles moving the focus to the first option
     * @private
     */
    var handleFirstOption = function () {
      this.focusOnAlternative(0);
    };

    /**
     * Handles moving the focus to the last option
     * @private
     */
    var handleLastOption = function () {
      this.focusOnAlternative(self.alternatives.length - 1);
    };

    for (var i = 0; i < this.alternatives.length; i++) {
      var alternative = this.alternatives[i];

      if (i === 0) {
        alternative.tabbable();
      }

      alternative.appendTo($alternatives);
      alternative.on('focus', handleFocus.bind(this, alternative, i), this);
      alternative.on('alternative-selected', handleAlternativeSelected, this);
      alternative.on('previousOption', handlePreviousOption, this);
      alternative.on('nextOption', handleNextOption, this);
      alternative.on('firstOption', handleFirstOption, this);
      alternative.on('lastOption', handleLastOption, this);

    }

    this.$choice.append($alternatives);
    $container.append(this.$choice);
    return this.$choice;
  };

  /**
   * Focus on an alternative by index
   *
   * @param {Number} index The index of the alternative to focus on
   */
  SingleChoice.prototype.focusOnAlternative = function (index) {
    if (!this.answered) {
      this.alternatives[index].focus();
    }
  };

  /**
   * Sets if the question was answered
   *
   * @param {Boolean} answered If this question was answered
   */
  SingleChoice.prototype.setAnswered = function (answered) {
    this.answered = answered;
  };

  /**
   * Reveals the result for a question
   *
   * @param  {boolean} correct True uf answer was correct, otherwise false
   * @param  {number} answerIndex Original index of answer
   */
  SingleChoice.prototype.showResult = function (correct, answerIndex) {
    var self = this;

    var $correctAlternative = self.$choice.find('.h5p-sc-is-correct');

    H5P.Transition.onTransitionEnd($correctAlternative, function () {
      self.trigger('finished', {
        correct: correct,
        index: self.index,
        answerIndex: answerIndex
      });
    }, 600);

    // Reveal corrects and wrong
    self.$choice.find('.h5p-sc-is-wrong').addClass('h5p-sc-reveal-wrong');
    $correctAlternative.addClass('h5p-sc-reveal-correct');
  };

  return SingleChoice;

})(H5P.jQuery, H5P.EventDispatcher, H5P.SingleChoiceSet.Alternative);
