var H5P = H5P || {};
H5P.SingleChoiceSet = H5P.SingleChoiceSet || {};

H5P.SingleChoiceSet.Alternative = (function ($, EventEmitter) {

  /**
  * @constructor
  *
  * @param {object} options Options for the alternative
  */
  function Alternative(options){
    EventEmitter.call(this);
    var self = this;

    this.options = options;

    var triggerAlternativeSelected = function () {
      self.trigger('alternative-selected', {
        correct: self.options.correct,
        $element: self.$alternative
      });
    };


    this.$alternative = $('<li>', {
      'class': 'h5p-sc-alternative h5p-sc-is-' + (this.options.correct ? 'correct' : 'wrong'),
      tabindex: 1,
      click: triggerAlternativeSelected,
      keypress: function (event) {
        // If enter or space has been pushed
        if(event.which === 13 || event.which === 32) {
          triggerAlternativeSelected();
        }
      }
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
  Alternative.prototype = Object.create(EventEmitter.prototype);
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
   * Append the alternative to a DOM container
   *
   * @param  {domElement} $container The Dom element to append to
   * @return {domElement}            This dom element
   */
  Alternative.prototype.appendTo = function ($container) {
    var self = this;
    $container.append(this.$alternative);
    return this.$alternative;
  };

  return Alternative;

})(H5P.jQuery, H5P.SingleChoiceSet.EventEmitter);
