var H5P = H5P || {};
H5P.CoursePresentation = H5P.CoursePresentation || {};

H5P.CoursePresentation.SummarySlide = (function ($, JoubelUI) {

  /**
   * Constructor for summary slide
   * @param {H5P.CoursePresentation} coursePresentation Course presentation parent of summary slide
   * @param {$} $summarySlide Summary slide element
   * @constructor
   */
  function SummarySlide(coursePresentation, $summarySlide) {
    // Create summary slide if not an editor
    this.$summarySlide = $summarySlide;
    this.cp = coursePresentation;
  }

  /**
   * Updates the provided summary slide with current values.
   *
   * @param {$} $summarySlide Summary slide that will be updated
   */
  SummarySlide.prototype.updateSummarySlide = function (slideNumber, noJump) {
    var that = this;
    // Validate update.
    var isValidUpdate = (this.cp.editor === undefined) && (this.$summarySlide !== undefined) && (slideNumber >= this.cp.slides.length - 1);
    var isExportSlide = (!this.cp.showSummarySlide && this.cp.hasAnswerElements);
    if (!isValidUpdate) {
      return;
    }

    // Hide keywordlist on summary slide
    if (that.cp.presentation.keywordListEnabled && that.cp.presentation.keywordListAlwaysShow) {
      that.cp.hideKeywords();
    }

    // Remove old content
    this.$summarySlide.children().remove();

    // Get scores and updated html for summary slide
    var slideScores = that.cp.getSlideScores(noJump);
    var htmlText = that.outputScoreStats(slideScores);
    $(htmlText).appendTo(that.$summarySlide);

    if (!isExportSlide) {
      // Get total scores and construct progress circle
      var totalScores = that.totalScores(slideScores);
      if (isNaN(totalScores.totalPercentage)) {
        JoubelUI.createProgressCircle(0)
          .appendTo($('.h5p-score-message-percentage', that.$summarySlide));
      }
      else {
        JoubelUI.createProgressCircle(totalScores.totalPercentage)
          .appendTo($('.h5p-score-message-percentage', that.$summarySlide));
      }

      // TODO: Get approved App-id for posting to facebook.
      // Construct facebook share score link
      //var $facebookContainer = $('.h5p-summary-facebook-message', that.$summarySlide).remove();
      //this.addFacebookScoreLinkTo($facebookContainer, totalScores.totalPercentage);
      $('.h5p-summary-facebook-message', that.$summarySlide).remove();

      // Construct twitter share score link
      var $twitterContainer = $('.h5p-summary-twitter-message', that.$summarySlide);
      this.addTwitterScoreLinkTo($twitterContainer, totalScores.totalPercentage);

      // Update slide links
      var links = that.$summarySlide.find('.h5p-td > .h5p-slide-link');
      links.each(function () {
        var slideLink = $(this);
        slideLink.click(function (event) {
          that.cp.jumpToSlide(parseInt(slideLink.data('slide'), 10) - 1);
          event.preventDefault();
        });
      });
    }

    // Button container ref
    var $summaryFooter = $('.h5p-summary-footer', that.$summarySlide);

    // Show solutions button
    JoubelUI.createButton({
      'class': 'h5p-show-solutions',
      html: that.cp.l10n.showSolutions,
      on: {
        click: function (event) {
          // Enable solution mode
          that.toggleSolutionMode(true);
          that.cp.jumpToSlide(0);
          // event.preventDefault();
        }
      },
      appendTo: $summaryFooter
    });

    // Show solutions button
    JoubelUI.createButton({
      'class': 'h5p-cp-retry-button',
      html: that.cp.l10n.retry,
      on: {
        click: function (event) {
          that.cp.resetTask();
          // event.preventDefault();
        }
      },
      appendTo: $summaryFooter
    });

    // Only make export button if there is an export area in CP
    if (that.cp.hasAnswerElements) {
      JoubelUI.createButton({
        'class': 'h5p-eta-export',
        html: that.cp.l10n.exportAnswers,
        on: {
          click: function (event) {
            H5P.ExportableTextArea.Exporter.run(that.cp.slides, that.cp.elementInstances);
            // event.preventDefault();
          }
        },
        appendTo: $summaryFooter
      });
    }
  };

  /**
   * Gets html for summary slide.
   *
   * @param slideScores Scores for all pages
   * @returns {string} html
   */
  SummarySlide.prototype.outputScoreStats = function (slideScores) {
    var self = this;
    if (slideScores === undefined) {
      this.$summarySlide.addClass('h5p-summary-only-export');
      return '<div class="h5p-summary-footer"></div>';
    }
    var that = this;
    var totalScore = 0;
    var totalMaxScore = 0;
    var tds = ''; // For saving the main table rows
    var i;
    var slidePercentageScore = 0;
    var slideDescription = '';
    var slideElements;
    var action;
    for (i = 0; i < slideScores.length; i += 1) {
      // Get percentage score for slide
      slidePercentageScore = (slideScores[i].score / slideScores[i].maxscore) * 100;
      if (slideScores[i].score === 0) {
        slidePercentageScore = 0;
      }

      slideDescription = self.getSlideDescription(slideScores[i]);

      slidePercentageScore = Math.round((slideScores[i].score / slideScores[i].maxScore) * 100);
      tds +=
        '<tr>' +
          '<td class="h5p-td h5p-summary-task-title">' +
            '<span role="button" class="h5p-slide-link" data-slide="' + slideScores[i].slide + '">' + that.cp.l10n.slide + ' ' + slideScores[i].slide + ': ' + (slideDescription.replace(/(<([^>]+)>)/ig, "")) + '</span>' +
          '</td>' +
          '<td class="h5p-td h5p-summary-score-bar">' +
            '<div title="' + slidePercentageScore + '%" class="h5p-summary-score-meter">' +
              '<span style="width: ' + slidePercentageScore + '%; opacity: ' + (slidePercentageScore / 100) + '"></span>' +
            '</div>' +
          '</td>' +
        '</tr>';
      totalScore += slideScores[i].score;
      totalMaxScore += slideScores[i].maxScore;
    }

    that.cp.triggerXAPICompleted(totalScore, totalMaxScore);

    var percentScore = Math.round((totalScore / totalMaxScore) * 100);

    var html =
      '<div class="h5p-score-message">' +
      '<div class="h5p-score-message-percentage">' + that.cp.l10n.scoreMessage + '</div>' +
      '<div class="h5p-summary-facebook-message"></div>' +
      '<div class="h5p-summary-twitter-message"></div>' +
      '</div>' +
      '<div class="h5p-summary-table-holder">' +
      ' <div class="h5p-summary-table-pages">' +
      '   <table class="h5p-score-table">' +
      '     <tbody>' + tds + '</tbody>' +
      '   </table>' +
      ' </div>' +
      ' <table class="h5p-summary-total-table" style="width: 100%">' +
      '    <tr>' +
      '     <td class="h5p-td h5p-summary-task-title">' + that.cp.l10n.total + '</td>' +
      '     <td class="h5p-td h5p-summary-score-bar">' +
      '       <div title="' + percentScore + '%" class="h5p-summary-score-meter">' +
      '         <span style="width: ' + percentScore + '%; opacity: ' + (percentScore / 100) + '"></span>' +
      '       </div>' +
      '     </td>' +
      '   </tr>' +
      ' </table>' +
      '</div>' +
      '<div class="h5p-summary-footer">' +
      '</div>';

    return html;
  };

  SummarySlide.prototype.getSlideDescription = function (slideScoresSlide) {
    var self = this;
    // Get task description, task name or identify multiple tasks:
    var slideDescription, action;
    var slideElements = self.cp.slides[slideScoresSlide.slide - 1].elements;
    if (slideScoresSlide.indexes.length > 1) {
      slideDescription = self.cp.l10n.summaryMultipleTaskText;
    } else if (slideElements[slideScoresSlide.indexes[0]] !== undefined && slideElements[0]) {
      action = slideElements[slideScoresSlide.indexes[0]].action;
      if (typeof self.cp.elementInstances[slideScoresSlide.slide - 1][slideScoresSlide.indexes[0]].getTitle === 'function') {
        slideDescription = self.cp.elementInstances[slideScoresSlide.slide - 1][slideScoresSlide.indexes[0]].getTitle();
      } else if (action.library !== undefined && action.library) {

        // Remove major, minor version and h5p prefix, Split on uppercase
        var humanReadableLibrary = action.library
          .split(' ')[0]
          .split('.')[1]
          .split(/(?=[A-Z])/);
        var humanReadableString = '';

        // Make library human readable
        humanReadableLibrary.forEach(function (readableWord, index) {

          // Make sequential words lowercase
          if (index !== 0) {
            readableWord = readableWord.toLowerCase();
          }
          humanReadableString += readableWord;

          // Add space between words
          if (index <= humanReadableLibrary.length - 1) {
            humanReadableString += ' ';
          }
        });
        slideDescription = humanReadableString;
      }
    }
    return slideDescription;
  };

  /**
   * Adds a link to the given container which will link achieved score to facebook.
   *
   * @param {jQuery} $facebookContainer Container that should hold the facebook link.
   * @param {Number} percentageScore Percentage score that should be linked.
   */
  SummarySlide.prototype.addFacebookScoreLinkTo = function ($facebookContainer, percentageScore) {
    var that = this;
    $('<span class="show-facebook-icon">' + that.cp.l10n.shareFacebook + '</span>')
      .appendTo($facebookContainer);

    var facebookString = 'http://www.facebook.com/dialog/feed?' +
      'app_id=1385640295075628&' +
      'link=http://h5p.org/&' +
      'name=H5P&20task&' +
      'caption=I%20just%20finished%20a%20H5P%20task!&' +
      'description=I%20got%20' + percentageScore + '%25%20at:%20' + window.location.href + '&' +
      'redirect_uri=http://h5p.org/';

    var popupWidth = 800;
    var popupHeight = 500;
    var leftPos = (window.innerWidth / 2);
    var topPos = (window.innerHeight / 2);

    $facebookContainer.attr('tabindex', '0')
      .attr('role', 'button')
      .click(function () {
        window.open(facebookString,
          that.cp.l10n.shareFacebook,
          'width=' + popupWidth +
          ',height=' + popupHeight +
          ',left=' + leftPos +
          ',top=' + topPos);
        return false;
      });
  };

  /**
   * Adds a link to the given container which will link achieved score to twitter.
   *
   * @param {jQuery} $twitterContainer Container that should hold the twitter link.
   * @param {Number} percentageScore Percentage score that should be linked.
   */
  SummarySlide.prototype.addTwitterScoreLinkTo = function ($twitterContainer, percentageScore) {
    var that = this;
    var twitterString = 'http://twitter.com/share?text=I%20got%20' + percentageScore + '%25%20on%20this%20task:';

    var popupWidth = 800;
    var popupHeight = 250;
    var leftPos = (window.innerWidth / 2);
    var topPos = (window.innerHeight / 2);

    $twitterContainer.attr('tabindex', '0')
      .attr('role', 'button')
      .click(function () {
        window.open(twitterString,
          that.cp.l10n.shareTwitter,
          'width=' + popupWidth +
          ',height=' + popupHeight +
          ',left=' + leftPos +
          ',top=' + topPos);
        return false;
      });

    $('<span class="show-twitter-icon">' + that.cp.l10n.shareTwitter + '</span>')
      .appendTo($twitterContainer);
  };

  /**
   * Gets total scores for all slides
   * @param {Array} slideScores
   * @returns {{totalScore: number, totalMaxScore: number, totalPercentage: number}} totalScores Total scores object
   */
  SummarySlide.prototype.totalScores = function (slideScores) {
    if (slideScores === undefined) {
      return {
        totalScore: 0,
        totalMaxScore: 0,
        totalPercentage: 0
      };
    }
    var totalScore = 0;
    var totalMaxScore = 0;
    var i;
    for (i = 0; i < slideScores.length; i += 1) {
      // Get percentage score for slide
      totalScore += slideScores[i].score;
      totalMaxScore += slideScores[i].maxScore;
    }

    var totalPercentage = Math.round((totalScore / totalMaxScore) * 100);
    if (isNaN(totalPercentage)) {
      totalPercentage = 0;
    }

    return {
      totalScore: totalScore,
      totalMaxScore: totalMaxScore,
      totalPercentage: totalPercentage
    };
  };

  /**
   * Toggles solution mode on/off.
   *
   * @params {Boolean} enableSolutionMode Enable/disable solution mode
   */
  SummarySlide.prototype.toggleSolutionMode = function (enableSolutionMode) {
    var that = this;

    if (enableSolutionMode) {
      // Get scores for summary slide
      var slideScores = that.cp.showSolutions();

      // Update feedback icons in solution mode
      this.cp.setProgressBarFeedback(slideScores);
    }
    this.cp.isSolutionMode = enableSolutionMode;
    if (enableSolutionMode) {
      // Get scores for summary slide
      var slideScores = that.cp.showSolutions();

      // Update feedback icons in solution mode
      this.cp.setProgressBarFeedback(slideScores);
      this.cp.$footer.addClass('h5p-footer-solution-mode');
      this.setFooterSolutionModeText(this.cp.l10n.solutionModeText);
    }
    else {
      this.cp.$footer.removeClass('h5p-footer-solution-mode');
      this.setFooterSolutionModeText();
      this.cp.setProgressBarFeedback();
    }
  };

  /**
   * Sets the solution mode button text in footer.
   *
   * @param solutionModeText
   */
  SummarySlide.prototype.setFooterSolutionModeText = function (solutionModeText) {
    if (solutionModeText !== undefined && solutionModeText) {
      this.cp.$exitSolutionModeText.html(solutionModeText);
    }
    else if (this.cp.$exitSolutionModeText) {
      this.cp.$exitSolutionModeText.html('');
    }
  };

  return SummarySlide;
})(H5P.jQuery, H5P.JoubelUI);
