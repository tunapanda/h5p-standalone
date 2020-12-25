var H5P = H5P || {};
H5P.SingleChoiceSet = H5P.SingleChoiceSet || {};

H5P.SingleChoiceSet.Alternative = (function ($, EventDispatcher) {

  /**
   * @constructor
   *
   * @param {object} options Options for the alternative
   */
  function Alternative(options) {
    EventDispatcher.call(this);
    var self = this;

    this.options = options;

    var triggerAlternativeSelected = function (event) {
      self.trigger('alternative-selected', {
        correct: self.options.correct,
        $element: self.$alternative,
        answerIndex: self.options.answerIndex
      });

      event.preventDefault();
    };

    this.$alternative = $('<li>', {
      'class': 'h5p-sc-alternative h5p-sc-is-' + (this.options.correct ? 'correct' : 'wrong'),
      'role': 'button',
      'tabindex': -1,
      'on': {
        'keydown': function (event) {
          switch (event.which) {
            case 13: // Enter
            case 32: // Space
              // Answer question
              triggerAlternativeSelected(event);
              break;

            case 35: // End button
              // Go to previous Option
              self.trigger('lastOption', event);
              event.preventDefault();
              break;

            case 36: // Home button
              // Go to previous Option
              self.trigger('firstOption', event);
              event.preventDefault();
              break;

            case 37: // Left Arrow
            case 38: // Up Arrow
              // Go to previous Option
              self.trigger('previousOption', event);
              event.preventDefault();
              break;

            case 39: // Right Arrow
            case 40: // Down Arrow
              // Go to next Option
              self.trigger('nextOption', event);
              event.preventDefault();
              break;
          }
        }
      },
      'focus': function (event) {
        self.trigger('focus', event);
      },
      'click': triggerAlternativeSelected
    });

    this.$alternative.append($('<div>', {
      'class': 'h5p-sc-progressbar'
    }));

    this.$alternative.append($('<div>', {
      'class': 'h5p-sc-label',
      'html': this.options.text
    }));

    this.$alternative.append($('<div>', {
      'class': 'h5p-sc-status'
    }));
  }

  Alternative.prototype = Object.create(EventDispatcher.prototype);
  Alternative.prototype.constructor = Alternative;

  /**
   * Is this alternative the correct one?
   *
   * @return {boolean}  Correct or not?
   */
  Alternative.prototype.isCorrect = function () {
    return this.options.correct;
  };

  /**
   * Move focus to this option.
   */
  Alternative.prototype.focus = function () {
    this.$alternative.focus();
  };

  /**
   * Makes it possible to tab your way to this option.
   */
  Alternative.prototype.tabbable = function () {
    this.$alternative.attr('tabindex', 0);
  };

  /**
   * Make sure it's NOT possible to tab your way to this option.
   */
  Alternative.prototype.notTabbable = function () {
    this.$alternative.attr('tabindex', -1);
  };

  /**
   * Append the alternative to a DOM container
   *
   * @param  {jQuery} $container The Dom element to append to
   * @return {jQuery}            This dom element
   */
  Alternative.prototype.appendTo = function ($container) {
    $container.append(this.$alternative);
    return this.$alternative;
  };

  return Alternative;

})(H5P.jQuery, H5P.EventDispatcher);
