(function ($, Blanks) {

  /**
   * Simple private class for keeping track of clozes.
   *
   * @class H5P.Blanks.Cloze
   * @param {string} answer
   * @param {Object} behaviour Behaviour for the task
   * @param {string} defaultUserAnswer
   */
  Blanks.Cloze = function (answer, behaviour, defaultUserAnswer) {
    var self = this;
    var $input, $wrapper;
    var answers = [];
    var tip;

    var answersAndTip = answer.split(':');

    if (answersAndTip.length > 0) {
      answer = answersAndTip[0];
      answers = answer.split('/');

      // Trim answers
      for (var i = 0; i < answers.length; i++) {
        answers[i] = H5P.trim(answers[i]);
        if (behaviour.caseSensitive !== true) {
          answers[i] = answers[i].toLowerCase();
        }
      }

      if (answersAndTip.length === 2) {
        tip = answersAndTip[1];
      }
    }

    /**
     * Check if the answer is correct.
     *
     * @private
     * @param {string} answered
     */
    var correct = function (answered) {
      if (behaviour.caseSensitive !== true) {
        answered = answered.toLowerCase();
      }

      for (var i = 0; i < answers.length; i++) {
        if (answered === answers[i]) {
          return true;
        }
      }
      return false;
    };

    /**
     * Check if filled out.
     *
     * @param {boolean}
     */
    this.filledOut = function () {
      var answered = this.getUserAnswer();
      // Blank can be correct and is interpreted as filled out.
      return (answered !== '' || correct(answered));
    };

    /**
     * Check the cloze and mark it as wrong or correct.
     */
    this.checkAnswer = function () {
      var isCorrect = correct(this.getUserAnswer());
      if (isCorrect) {
        $wrapper.addClass('h5p-correct');
        $input.attr('disabled', true);
      }
      else {
        $wrapper.addClass('h5p-wrong');
      }
    };

    /**
     * Disables further input.
     */
    this.disableInput = function () {
      $input.attr('disabled', true);
    };

    /**
     * Show the correct solution.
     */
    this.showSolution = function () {
      if (correct(this.getUserAnswer())) {
        return; // Only for the wrong ones
      }

      $('<span class="h5p-correct-answer"> ' + answer + '</span>').insertAfter($wrapper);
      $input.attr('disabled', true);
    };

    /**
     * @returns {boolean}
     */
    this.correct = function () {
      return correct(this.getUserAnswer());
    };

    /**
     * Set input element.
     *
     * @param {H5P.jQuery} $element
     * @param {function} afterCheck
     * @param {function} afterFocus
     */
    this.setInput = function ($element, afterCheck, afterFocus) {
      $input = $element;
      $wrapper = $element.parent();

      // Add tip if tip is set
      if(tip !== undefined && tip.trim().length > 0) {
        $wrapper.addClass('has-tip').append(H5P.JoubelUI.createTip(tip, $wrapper.parent()));
      }

      if (afterCheck !== undefined) {
        $input.blur(function () {
          if (self.filledOut()) {
            // Check answers
            if (!behaviour.enableRetry) {
              self.disableInput();
            }
            self.checkAnswer();
            afterCheck();
          }
        });
      }
      $input.focus(function () {
        $wrapper.removeClass('h5p-wrong');
        if (afterFocus !== undefined) {
          afterFocus();
        }
      });
    };

    /**
     * @returns {string} Cloze html
     */
    this.toString = function () {
      var extra = defaultUserAnswer ? ' value="' + defaultUserAnswer + '"' : '';
      return '<span class="h5p-input-wrapper"><input type="text" class="h5p-text-input" autocapitalize="off"' + extra + '></span>';
    };

    /**
     * @returns {string} Trimmed answer
     */
    this.getUserAnswer = function () {
      return H5P.trim($input.val());
    };

    /**
     * @returns {string} Answer
     */
    this.getUserInput = function () {
      return $input.val();
    };

    /**
     * @param {string} text New input text
     */
    this.setUserInput = function (text) {
      $input.val(text);
    };
  };

})(H5P.jQuery, H5P.Blanks);
