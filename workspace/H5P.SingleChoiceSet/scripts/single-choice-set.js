var H5P = H5P || {};

H5P.SingleChoiceSet = (function ($, Question, SingleChoice, SolutionView, ResultSlide, SoundEffects) {
  /**
   * @constructor
   * @extends Question
   * @param {object} options Options for single choice set
   * @param {string} contentId H5P instance id
   * @param {Object} contentData H5P instance data
   */
  function SingleChoiceSet(options, contentId, contentData) {
    var self = this;

    // Extend defaults with provided options
    this.contentId = contentId;
    Question.call(this, 'single-choice-set');
    this.options = $.extend(true, {}, {
      choices: [],
      behaviour: {
        timeoutCorrect: 2000,
        timeoutWrong: 3000,
        soundEffectsEnabled: true,
        enableRetry: true,
        enableSolutionsButton: true
      }
    }, options);
    if (contentData && contentData.previousState !== undefined) {
      this.currentIndex = contentData.previousState.progress;
      this.results = contentData.previousState.answers;
    }
    this.currentIndex = this.currentIndex || 0;
    this.results = this.results || {
      corrects: 0,
      wrongs: 0
    };

    this.l10n = H5P.jQuery.extend({
      resultSlideTitle: 'You got :numcorrect of :maxscore correct',
      showSolutionButtonLabel: 'Show solution',
      retryButtonLabel: 'Retry',
      solutionViewTitle: 'Solution'
    }, options.l10n !== undefined ? options.l10n : {});

    this.$slides = [];
    // An array containing the SingleChoice instances
    this.choices = [];

    this.solutionView = new SolutionView(this.options.choices, this.l10n);

    this.$choices = $('<div>', {
      'class': 'h5p-sc-set h5p-sc-animate'
    });
    this.$progressbar = $('<div>', {
      'class': 'h5p-sc-set-progress'
    });
    this.$progressCompleted = $('<div>', {
      'class': 'h5p-sc-completed'
    }).appendTo(this.$progressbar);

    // Validate "slides", reverse traversal since we remove entries as we go
    for (var slideIndex = this.options.choices.length - 1; slideIndex >= 0; slideIndex--) {

      // Prune invalid slide
      if (!this.options.choices[slideIndex].answers) {
        this.options.choices.splice(slideIndex, 1);
      }
    }

    for (var i = 0; i < this.options.choices.length; i++) {
      var choice = new SingleChoice(this.options.choices[i], i);
      choice.on('finished', this.handleQuestionFinished, this);
      choice.appendTo(this.$choices, (i === this.currentIndex));
      this.choices.push(choice);
      this.$slides.push(choice.$choice);
    }

    this.resultSlide = new ResultSlide(this.options.choices.length);
    this.resultSlide.appendTo(this.$choices);
    this.resultSlide.on('retry', this.resetTask, this);
    this.resultSlide.on('view-solution', this.handleViewSolution, this);
    this.$slides.push(this.resultSlide.$resultSlide);
    this.on('resize', this.resize, this);

    // Use the correct starting slide
    this.recklessJump(this.currentIndex);

    if (this.options.choices.length === this.currentIndex) {
      // Make sure results slide is displayed
      this.resultSlide.$resultSlide.addClass('h5p-sc-current-slide');
      this.setScore(this.results.corrects, true);
    }
    setTimeout(function () {
      SoundEffects.setup();
    },1);

    var hideButtons = [];

    /**
     * Keeps track of buttons that will be hidden
     * @type {Array}
     */
    self.buttonsToBeHidden = [];

    /**
     * Override Question's hideButton function
     * to be able to hide buttons after delay
     *
     * @override
     * @param {string} id
     */
    this.superHideButton = self.hideButton;
    this.hideButton = (function () {
      return function (id) {

        if (!self.scoreTimeout) {
          return self.superHideButton(id);
        }

        self.buttonsToBeHidden.push(id);
        return this;
      };
    })();
  }

  SingleChoiceSet.prototype = Object.create(Question.prototype);
  SingleChoiceSet.prototype.constructor = SingleChoiceSet;

  /**
   * Handler invoked when question is done
   *
   * @param  {object} data An object containing a single boolean property: "correct".
   */
  SingleChoiceSet.prototype.handleQuestionFinished = function (data) {
    var self = this;
    self.triggerXAPI('interacted');
    if (data.correct) {
      self.results.corrects++;
    }
    else {
      self.results.wrongs++;
    }

    if (self.currentIndex+1 >= self.options.choices.length) {
      self.setScore(self.results.corrects);
    }

    var letsMove = function () {
      // Handle impatient users
      self.$container.off('click.impatient keydown.impatient');
      clearTimeout(timeout);
      self.move(self.currentIndex+1);
    };

    var timeout = setTimeout(function () {
      letsMove();
    }, data.correct ? self.options.behaviour.timeoutCorrect : self.options.behaviour.timeoutWrong);

    self.$container.on('click.impatient', function () {
      letsMove();
    });
    self.$container.on('keydown.impatient', function (event) {
      // If return, space or right arrow
      if(event.which === 13 || event.which === 32 || event.which === 39) {
        letsMove();
      }
    });
  };

  /**
   * Handles buttons that are queued for hiding
   */
  SingleChoiceSet.prototype.handleQueuedButtonChanges = function () {
    var self = this;

    if (self.buttonsToBeHidden.length) {
      self.buttonsToBeHidden.forEach(function (id) {
        self.superHideButton(id);
      });
    }
    self.buttonsToBeHidden = [];
  };

  /**
   * Set score and feedback
   *
   * @params {Number} score Number of correct answers
   */
  SingleChoiceSet.prototype.setScore = function (score, noXAPI) {
    var self = this;

    // Find last selected alternative, and determine timeout before solution slide shows
    if (!self.choices.length) {
      return;
    }
    var lastSelected = self.choices[self.choices.length - 1]
      .$choice
      .find('.h5p-sc-alternative.h5p-sc-selected');
    var timeout = lastSelected.is('.h5p-sc-is-correct') ?
      this.options.behaviour.timeoutCorrect :
      this.options.behaviour.timeoutWrong;

    /**
     * Show feedback and buttons on result slide
     */
    var showFeedback = function () {
      self.setFeedback(self.l10n.resultSlideTitle
          .replace(':numcorrect', score)
          .replace(':maxscore', self.options.choices.length),
        score, self.options.choices.length);
      if (score === self.options.choices.length) {
        self.hideButton('try-again');
      } else {
        self.showButton('try-again');
      }
      self.showButton('show-solution');
      self.handleQueuedButtonChanges();
      self.scoreTimeout = undefined;
      if (!noXAPI) {
        self.triggerXAPIScored(score, self.options.choices.length, 'completed');
      }

      self.trigger('resize');
    };

    /**
     * Wait for result slide animation
     */
    self.scoreTimeout = setTimeout(function () {
      showFeedback();
    }, (timeout));

    /**
     * Listen for impatient clicks.
     * On impatient clicks clear timeout and immediately show feedback.
     */
    self.$container.on('click.impatient', function () {
      clearTimeout(self.scoreTimeout);
      showFeedback();
    });
  };

  /**
   * Handler invoked when view solution is selected
   */
  SingleChoiceSet.prototype.handleViewSolution = function () {
    this.solutionView.show();
  };

  /**
   * Register DOM elements before they are attached.
   * Called from H5P.Question.
   */
  SingleChoiceSet.prototype.registerDomElements = function () {
    // Register task content area.
    this.setContent(this.createQuestion());

    // Register buttons with question.
    this.addButtons();

    // Insert feedback and buttons section on the result slide
    this.insertSectionAtElement('feedback', this.resultSlide.$feedbackContainer);
    this.insertSectionAtElement('buttons', this.resultSlide.$buttonContainer);
  };

  /**
   * Add Buttons to question.
   */
  SingleChoiceSet.prototype.addButtons = function () {
    var self = this;

    if (this.options.behaviour.enableSolutionsButton) {
      this.addButton('show-solution', this.l10n.showSolutionButtonLabel, function () {
        self.showSolutions();
      }, false);
    }

    if (this.options.behaviour.enableRetry) {
      this.addButton('try-again', this.l10n.retryButtonLabel, function () {
        self.resetTask();
      }, false);
    }
  };

  /**
   * Create main content
   */
  SingleChoiceSet.prototype.createQuestion = function () {
    this.setActivityStarted();
    var self = this;
    var $container = $('<div>');
    self.$container = $container;
    $container.addClass('h5p-sc-set-wrapper');

    $container.append(self.$choices);
    $container.append(self.$progressbar);

    if (self.options.behaviour.soundEffectsEnabled) {
      $container.append($('<div>', {
        'class': 'h5p-sc-sound-control',
        'click': function () {
          SoundEffects.muted = !SoundEffects.muted;
          $(this).toggleClass('muted', SoundEffects.muted);
        }
      }));
    }

    // Append solution view - hidden by default:
    self.solutionView.appendTo($container);

    self.resize();

    // Hide all other slides than the current one:
    $container.addClass('initialized');

    return $container;
  };

  /**
   * Resize if something outside resizes
   */
  SingleChoiceSet.prototype.resize = function () {
    var self = this;
    var maxHeight = 0;
    self.choices.forEach(function (choice) {
      var choiceHeight = choice.$choice.outerHeight();
      maxHeight = choiceHeight > maxHeight ? choiceHeight : maxHeight;
    });

    // Set minimum height for choices
    self.$choices.css({minHeight: maxHeight + 'px'});
  };

  /**
   * Will jump to the given slide without any though to animations,
   * current slide etc.
   *
   * @public
   */
  SingleChoiceSet.prototype.recklessJump = function (index) {
    var tX = 'translateX('+(-index*100)+'%)';this.$choices.css({'-webkit-transform':tX,'-moz-transform':tX,'-ms-transform':tX,'transform':tX});
    this.$progressCompleted.css({width:((index+1)/(this.options.choices.length+1))*100 + '%'});
  };

  /**
   * Move to slide n
   * @param  {number} index The slide number    to move to
   */
  SingleChoiceSet.prototype.move = function (index) {
    if (index === this.currentIndex) {
      return;
    }

    var $previousSlide = this.$slides[this.currentIndex];

    H5P.Transition.onTransitionEnd(this.$choices, function () {
      $previousSlide.removeClass('h5p-sc-current-slide');
    }, 600);

    this.$slides[index].addClass('h5p-sc-current-slide');
    this.recklessJump(index);

    this.currentIndex = index;
  };

  /**
   * The following functions implements the CP and IV - Contracts v 1.0 documented here:
   * http://h5p.org/node/1009
   */
  SingleChoiceSet.prototype.getScore = function () {
    return this.results.corrects;
  };
  SingleChoiceSet.prototype.getMaxScore = function () {
   return this.options.choices.length;
  };
  SingleChoiceSet.prototype.getAnswerGiven = function () {
    return (this.results.corrects + this.results.wrongs) > 0;
  };
  SingleChoiceSet.prototype.getTitle = function() {
    return H5P.createTitle(this.options.choices[0].question);
  };
  SingleChoiceSet.prototype.showSolutions = function () {
    this.handleViewSolution();
  };
  /**
   * Reset all answers. This is equal to refreshing the quiz
   */
  SingleChoiceSet.prototype.resetTask = function () {
    var self = this;

    // Close solution view if visible:
    this.solutionView.hide();

    // Reset the user's answers
    var classes = ['h5p-sc-reveal-wrong', 'h5p-sc-reveal-correct', 'h5p-sc-selected', 'h5p-sc-drummed', 'h5p-sc-correct-answer'];
    for (var i = 0; i < classes.length; i++) {
      this.$choices.find('.' + classes[i]).removeClass(classes[i]);
    }
    this.results = {
      corrects: 0,
      wrongs: 0
    };

    this.move(0);

    // Wait for transition, then remove feedback.
    H5P.Transition.onTransitionEnd(this.$choices, function () {
      self.setFeedback();
    }, 600);
  };

  /**
   * Clever comment.
   *
   * @public
   * @returns {object}
   */
  SingleChoiceSet.prototype.getCurrentState = function () {
    return {
      progress: this.currentIndex,
      answers: this.results
    };
  };

  return SingleChoiceSet;

})(H5P.jQuery, H5P.Question, H5P.SingleChoiceSet.SingleChoice, H5P.SingleChoiceSet.SolutionView, H5P.SingleChoiceSet.ResultSlide, H5P.SingleChoiceSet.SoundEffects);
