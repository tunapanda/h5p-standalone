var H5P = H5P || {};

/**
 * @module
 */
H5P.JoubelScoreBar = (function ($) {

  /**
   * Creates a score bar
   * @class H5P.JoubelScoreBar
   * @param {number=} maxScore  Maximum score
   */
  function JoubelScoreBar(maxScore) {
    var self = this;

    self.maxScore = maxScore;
    self.score = 0;

    /**
     * @method hasFullScore
     * @private
     * @return {Boolean} true if full score, else false
     */
    var hasFullScore = function () {
      return self.score === self.maxScore;
    };

    /**
     * @function appendTo
     * @memberOf H5P.JoubelScoreBar#
     * @param {H5P.jQuery}  $wrapper  Dom container
     */
    self.appendTo = function ($wrapper) {
      self.$scoreBar.appendTo($wrapper);
    };

    /**
     * Creates the html for this widget
     *
     * @method createHtml
     * @private
     */
    var createHtml = function () {
      // Container div
      self.$scoreBar = $('<div>', {
        'class': 'h5p-joubelui-score-bar'
      });

      // The progress bar wrapper
      self.$progressWrapper = $('<div>', {
        'class': 'h5p-joubelui-score-bar-progress-wrapper'
      }).appendTo(self.$scoreBar);

      self.$progress = $('<div>', {
        'class': 'h5p-joubelui-score-bar-progress'
      }).appendTo(self.$progressWrapper);

      // The star
      self.$endWrapper = $('<div>', {
        'class': 'h5p-joubelui-score-bar-end'
      }).appendTo(self.$scoreBar);

      // The default star
      self.$defaultStar = $('<span>', {
        'class': 'h5p-joubelui-score-bar-default-star'
      }).appendTo(self.$endWrapper);

      // The full score star
      self.$fullScoreStar = $('<span>', {
        'class': 'h5p-joubelui-score-bar-full-score-star'
      }).appendTo(self.$endWrapper);
    };

    /**
     * Set the current score
     * @method setScore
     * @memberOf H5P.JoubelScoreBar#
     * @param  {number} score
     */
    self.setScore = function (score) {
      // Do nothing if score hasn't changed
      if (score === self.score) {
        return;
      }
      self.score = score > self.maxScore ? self.maxScore : score;
      self.updateVisuals();
    };

    /**
     * Increment score
     * @method incrementScore
     * @memberOf H5P.JoubelScoreBar#
     * @param  {number=}        incrementBy Optional parameter, defaults to 1
     */
    self.incrementScore = function (incrementBy) {
      self.setScore(self.score + (incrementBy || 1));
    };

    /**
     * Set the max score
     * @method setMaxScore
     * @memberOf H5P.JoubelScoreBar#
     * @param  {number}    maxScore The max score
     */
    self.setMaxScore = function (maxScore) {
      self.maxScore = maxScore;
    };

    /**
     * Updates the progressbar visuals
     * @memberOf H5P.JoubelScoreBar#
     * @method updateVisuals
     */
    self.updateVisuals = function () {
      var fullscore = hasFullScore();

      setTimeout(function () {
        self.$progress.addClass('animate');
        self.$progress.css({
          width: (fullscore ? '102' : (self.maxScore - 1 !== 0 ? (self.score * 100 / (self.maxScore - 1)) : 0)) + '%'

        });
        H5P.Transition.sequence([
          {
            $element: self.$progress,
            timeout: 600,
            end: function () {
              self.$progress.removeClass('animate');
              self.$scoreBar.toggleClass('full-score', fullscore);
              if (fullscore) {
                self.$fullScoreStar.addClass('animate-background');
              }
            },
            break: !fullscore
          },
          {
            $element: self.$fullScoreStar,
            timeout: 400,
            end: function () {
              self.$fullScoreStar.addClass('animate-star show-star');
            }
          },
          {
            $element: self.$fullScoreStar,
            end: function () {
              self.$fullScoreStar.removeClass('animate-star');
              self.$fullScoreStar.addClass('animate-star-blink');
            }
          }
        ]);
      }, 300);
    };

    createHtml();
  }

  return JoubelScoreBar;
})(H5P.jQuery);
