// Will render a Question with multiple choices for answers.

// Options format:
// {
//   title: "Optional title for question box",
//   question: "Question text",
//   answers: [{text: "Answer text", correct: false}, ...],
//   singleAnswer: true, // or false, will change rendered output slightly.
//   singlePoint: true,  // True if question give a single point score only
//                       // if all are correct, false to give 1 point per
//                       // correct answer. (Only for singleAnswer=false)
//   randomAnswers: false  // Whether to randomize the order of answers.
// }
//
// Events provided:
// - h5pQuestionAnswered: Triggered when a question has been answered.

var H5P = H5P || {};

H5P.MultiChoice = function(options, contentId, contentData) {
  if (!(this instanceof H5P.MultiChoice))
    return new H5P.MultiChoice(options, contentId, contentData);
  var self = this;
  this.contentId = contentId;
  H5P.Question.call(self, 'multichoice');
  var $ = H5P.jQuery;
  var texttemplate =
      '<ul class="h5p-answers">' +
      '  <% for (var i=0; i < answers.length; i++) { %>' +
      '    <li class="h5p-answer<% if (userAnswers.indexOf(i) > -1) { %> h5p-selected<% } %>">' +
      '      <label>' +
      '        <div class="h5p-input-container">' +
      '          <% if (behaviour.singleAnswer) { %>' +
      '          <input type="radio" name="answer" class="h5p-input" value="answer_<%= i %>"<% if (userAnswers.indexOf(i) > -1) { %> checked<% } %> />' +
      '          <% } else { %>' +
      '          <input type="checkbox" name="answer_<%= i %>" class="h5p-input" value="answer_<%= i %>"<% if (userAnswers.indexOf(i) > -1) { %> checked<% } %> />' +
      '          <% } %>' +
      '          <a width="100%" height="100%" class="h5p-radio-or-checkbox" href="#"><%= answers[i].checkboxOrRadioIcon %></a>' +
      '        </div><div class="h5p-alternative-container">' +
      '          <span class="h5p-span"><%= answers[i].text %></span>' +
      '        </div><div class="h5p-clearfix"></div>' +
      '      </label>' +
      '    </li>' +
      '  <% } %>' +
      '</ul>';

  var defaults = {
    image: null,
    question: "No question text provided",
    answers: [
      {
        tipsAndFeedback: {
          tip: '',
          chosenFeedback: '',
          notChosenFeedback: ''
        },
        text: "Answer 1",
        correct: true
      }
    ],
    weight: 1,
    userAnswers: [],
    UI: {
      checkAnswerButton: 'Check',
      showSolutionButton: 'Show solution',
      tryAgainButton: 'Try again'
    },
    behaviour: {
      enableRetry: true,
      enableSolutionsButton: true,
      singleAnswer: false,
      singlePoint: true,
      randomAnswers: false,
      showSolutionsRequiresInput: true
    }
  };

  // Make sure tips and feedback exists
  if (options.answers) {
    options.answers.forEach(function (answer) {
      answer.tipsAndFeedback = answer.tipsAndFeedback || {};
    });
  }


  var template = new EJS({text: texttemplate});
  var params = $.extend(true, {}, defaults, options);

  var getCheckboxOrRadioIcon = function (radio, selected) {
    var icon;
    if (radio) {
      icon = selected ? '&#xe603;' : '&#xe600;';
    }
    else {
      icon = selected ? '&#xe601;' : '&#xe602;';
    }
    return icon;
  };

  // Initialize buttons and elements.
  var $myDom;
  var $feedbackDialog;

  /**
   * Remove all feedback dialogs
   */
  var removeFeedbackDialog = function () {
    // Remove the open feedback dialogs.
    $myDom.unbind('click', removeFeedbackDialog );
    $myDom.find('.h5p-feedback-button, .h5p-feedback-dialog').remove();
    $myDom.find('.h5p-has-feedback').removeClass('h5p-has-feedback');
    if ($feedbackDialog) {
      $feedbackDialog.remove();
    }
  };

  var score = 0;
  var solutionsVisible = false;

  /**
   * Add feedback to element
   * @param {jQuery} $element Element that feedback will be added to
   * @param {string} feedback Feedback string
   */
  var addFeedback = function ($element, feedback) {
    $feedbackDialog = $('' +
    '<div class="h5p-feedback-dialog">' +
      '<div class="h5p-feedback-inner">' +
        '<div class="h5p-feedback-text">' + feedback + '</div>' +
      '</div>' +
    '</div>');

    //make sure feedback is only added once
    if (!$element.find($('.h5p-feedback-dialog')).length ) {
      $feedbackDialog.appendTo($element.addClass('h5p-has-feedback'));
    }
  };

  /**
   * Register the different parts of the task with the H5P.Question structure.
   */
  self.registerDomElements = function () {
    if (params.image) {
      // Register task image
      self.setImage(params.image.path);
    }

    // Determine if we're using checkboxes or radio buttons
    for (var i = 0; i < params.answers.length; i++) {
      params.answers[i].checkboxOrRadioIcon = getCheckboxOrRadioIcon(params.behaviour.singleAnswer, params.userAnswers.indexOf(i) > -1);
    }

    // Register Introduction
    self.setIntroduction(params.question);

    // Register task content area
    $myDom = $(template.render(params));
    self.setContent($myDom, {
      'class': params.behaviour.singleAnswer ? 'h5p-radio' : 'h5p-check'
    });

    // Create tips:
    $('.h5p-answer', $myDom).each(function (i) {
      var $tipContainer = $(this);
      var tip = params.answers[i].tipsAndFeedback.tip;
      if (tip === undefined) {
        return; // No tip
      }

      tip = tip.trim();
      if (!tip.length) {
        return; // Empty tip
      }

      // Add tip
      var $multichoiceTip = $('<div>', {
        'class': 'multichoice-tip'
      }).click(function () {
        var openFeedback = !$tipContainer.children('.h5p-feedback-dialog').is($feedbackDialog);
        removeFeedbackDialog();

        // Do not open feedback if it was open
        if (openFeedback) {
          // Add tip dialog
          addFeedback($tipContainer, tip);
          $feedbackDialog.addClass('h5p-has-tip');
        }

        // Remove tip dialog on dom click
        setTimeout(function () {
          $myDom.click(removeFeedbackDialog);
        }, 100);

        // Do not propagate
        return false;
      });

      $('.h5p-alternative-container', this).append($multichoiceTip);
    });

    // Set event listeners.
    $('input', $myDom).change(function () {
      var $this = $(this);
      var num = parseInt($(this).val().split('_')[1], 10);
      if (params.behaviour.singleAnswer) {
        params.userAnswers[0] = num;
        if (params.answers[num].correct) {
          score = 1;
        } else {
          score = 0;
        }
        $this.parents('.h5p-answers').find('.h5p-answer.h5p-selected').removeClass("h5p-selected");
        $this.parents('.h5p-answers').find('.h5p-radio-or-checkbox').html(getCheckboxOrRadioIcon(true, false));

        $this.parents('.h5p-answer').addClass("h5p-selected");
        $this.siblings('.h5p-radio-or-checkbox').html(getCheckboxOrRadioIcon(true, true));
      } else {
        if ($this.is(':checked')) {
          $this.parents('.h5p-answer').addClass("h5p-selected");
          $this.siblings('.h5p-radio-or-checkbox').html(getCheckboxOrRadioIcon(false, true));
        } else {
          $this.parents('.h5p-answer').removeClass("h5p-selected");
          $this.siblings('.h5p-radio-or-checkbox').html(getCheckboxOrRadioIcon(false, false));
        }
        calcScore();
      }

      self.triggerXAPI('attempted');

      var answerChecked = false;
      $myDom.find('.h5p-answer').each( function () {
        if($(this).hasClass('h5p-selected')) {
          answerChecked = true;
        }
      });

      if (answerChecked) {
        self.hideSolutions();
        self.showButton('check-answer');
        self.hideButton('try-again');
        self.hideButton('show-solution');
      }
    });

    // Adds check and retry button
    addButtons();

    if (!params.behaviour.singleAnswer) {
      calcScore();
    }
  };

  this.showAllSolutions = function () {
    if (solutionsVisible) {
      return;
    }
    solutionsVisible = true;

    $myDom.find('.h5p-answer').each(function (i, e) {
      var $e = $(e);
      var a = params.answers[i];
      if (a.correct) {
        $e.addClass('h5p-correct');
        $e.addClass('h5p-should');
      }
      else {
        $e.addClass('h5p-wrong');
        $e.addClass('h5p-should-not');
      }
      $e.find('input').attr('disabled', 'disabled');
    });
    var max = self.getMaxScore();

    // Add css class disabled to labels.
    $myDom.find('label').addClass('h5p-mc-disabled');

    //Hide buttons and retry depending on settings.
    self.hideButton('check-answer');
    self.hideButton('show-solution');
    if (params.behaviour.enableRetry) {
      self.showButton('try-again');
    }
    self.trigger('resize');
  };

  /**
   * Used in contracts.
   * Shows the solution for the task and hides all buttons.
   */
  this.showSolutions = function () {
    self.showAllSolutions();
    self.hideButton('try-again');
  };

  /**
   *
   */
  this.hideSolutions = function () {
    solutionsVisible = false;

    $myDom.find('.h5p-correct').removeClass('h5p-correct');
    $myDom.find('.h5p-wrong').removeClass('h5p-wrong');
    $myDom.find('.h5p-should').removeClass('h5p-should');
    $myDom.find('.h5p-should-not').removeClass('h5p-should-not');
    $myDom.find('input').prop('disabled', false);
    $myDom.find('.h5p-feedback-button, .h5p-feedback-dialog').remove();
    $myDom.find('.h5p-has-feedback').removeClass('h5p-has-feedback');
    this.setFeedback(); // Reset feedback

    self.trigger('resize');
  };

  /**
   * Resets the whole task.
   * Used in contracts with integrated content.
   * @private
   */
  this.resetTask = function () {
    self.answered = false;
    self.hideSolutions();
    params.userAnswers = [];
    removeSelections();
    self.showButton('check-answer');
    self.hideButton('try-again');
    self.hideButton('show-solution');
  };

  var calculateMaxScore = function () {
    if (blankIsCorrect) {
      return params.weight;
    }
    var maxScore = 0;
    for (var i = 0; i < params.answers.length; i++) {
      var choice = params.answers[i];
      if (choice.correct) {
        maxScore += (choice.weight !== undefined ? choice.weight : 1);
      }
    }
    return maxScore;
  };

  this.getMaxScore = function () {
    return (!params.behaviour.singleAnswer && !params.behaviour.singlePoint ? calculateMaxScore() : params.weight);
  };

  /**
   * Adds the ui buttons.
   * @private
   */
  var addButtons = function () {
    // Show solution button
    self.addButton('show-solution', params.UI.showSolutionButton, function () {
      calcScore();
      if (self.getAnswerGiven()) {
        self.showAllSolutions();
      }
    }, false);

    // Check solution button
    self.addButton('check-answer', params.UI.checkAnswerButton, function () {
      self.answered = true;
      // Unbind removal of feedback dialogs on click
      $myDom.unbind('click', removeFeedbackDialog );

      // Remove all tip dialogs
      removeFeedbackDialog();

      disableInput();
      self.hideButton('check-answer');
      if (params.behaviour.enableSolutionsButton && self.getAnswerGiven()) {
        self.showButton('show-solution');
      }
      if (params.behaviour.enableRetry) {
        self.showButton('try-again');
      }
      self.showCheckSolution();
      var xAPIEvent = self.createXAPIEventTemplate('completed');
      addQuestionToXAPI(xAPIEvent);
      addResponseToXAPI(xAPIEvent);
      self.trigger(xAPIEvent);
    });

    // Try Again button
    self.addButton('try-again', params.UI.tryAgainButton, function () {
      self.showButton('check-answer');
      self.hideButton('try-again');
      self.hideButton('show-solution');
      self.hideSolutions();
      removeSelections();
      enableInput();
    }, false);
  };


  /**
   * Shows feedback on the selected fields.
   * @public
   */
  this.showCheckSolution = function () {
    $myDom.find('.h5p-answer').each(function (i, e) {
      var $e = $(e);
      var a = params.answers[i];
      if ($e.hasClass('h5p-selected')) {
        if (a.correct) {
          $e.addClass('h5p-correct');
        }
        else {
          $e.addClass('h5p-wrong');
        }
      }

      var chosen = $e.hasClass('h5p-selected');
      if (chosen && a.tipsAndFeedback.chosenFeedback !== undefined && a.tipsAndFeedback.chosenFeedback !== '') {
        addFeedback($e, a.tipsAndFeedback.chosenFeedback);
      } else if (!chosen && a.tipsAndFeedback.notChosenFeedback !== undefined && a.tipsAndFeedback.notChosenFeedback !== '') {
        addFeedback($e, a.tipsAndFeedback.notChosenFeedback);
      }
    });

    // Determine feedback
    var max = self.getMaxScore();
    var feedback, ratio = (score / max);
    if (isFinite(ratio) && ratio > 0) {
      feedback = (ratio >= 1 ? params.UI.correctText : params.UI.almostText);    }
    else {
      feedback = params.UI.wrongText;
    }

    // Show feedback
    this.setFeedback(feedback, score, max);

    //Disable task if maxscore is achieved
    if (score === max) {
      finishedTask();
    }
    //Add disabled css class to label
    $myDom.find('label').addClass('h5p-mc-disabled');
    self.trigger('resize');
  };

  /**
   * Method to use when the task is correctly answered, removes all buttons and disables input.
   */
  var finishedTask = function () {
    self.hideButton('check-answer');
    self.hideButton('try-again');
    self.hideButton('show-solution');
    $myDom.find('input').attr('disabled', 'disabled');
    self.trigger('resize');
  };

  /**
   * Disables choosing new input.
   */
  var disableInput = function () {
    $myDom.find('input').attr('disabled', 'disabled');
  };

  /**
   * Enables new input.
   */
  var enableInput = function () {
    $myDom.find('input').attr('disabled', false);
    // Remove css class disabled from labels.
    $myDom.find('label').removeClass('h5p-mc-disabled');
  };

  var blankIsCorrect = true;
  for (var i = 0; i < params.answers.length; i++) {
    if (params.answers[i].correct) {
      blankIsCorrect = false;
      break;
    }
  }

  var calcScore = function () {
    score = 0;
    params.userAnswers = [];
    $('input', $myDom).each(function (idx, el) {
      var $el = $(el);
      if ($el.is(':checked')) {
        var choice = params.answers[idx];
        var weight = (choice.weight !== undefined ? choice.weight : 1);
        if (choice.correct) {
          score += weight;
        }
        else {
          score -= weight;
        }
        var num = parseInt($(el).val().split('_')[1], 10);
        params.userAnswers.push(num);
      }
    });
    if (score < 0) {
      score = 0;
    }
    if (!params.userAnswers.length && blankIsCorrect) {
      score = params.weight;
    }
    if (params.behaviour.singlePoint) {
      score = (score === calculateMaxScore() ? params.weight : 0);
    }
  };

  /**
   * Removes selections from task.
   */
  var removeSelections = function () {
    $myDom.find('input.h5p-input').each( function () {
      this.checked = false;
      $(this).parents('.h5p-answer').removeClass("h5p-selected");

      //Sets type of icon depending on answer type.
      if (params.behaviour.singleAnswer) {
        $(this).siblings('.h5p-radio-or-checkbox').html(getCheckboxOrRadioIcon(true, false));
      }
      else {
        $(this).siblings('.h5p-radio-or-checkbox').html(getCheckboxOrRadioIcon(false, false));
      }
    });
    calcScore();
  };

  /**
   * Add the question itselt to the definition part of an xAPIEvent
   */
  var addQuestionToXAPI = function(xAPIEvent) {
    var definition = xAPIEvent.getVerifiedStatementValue(['object', 'definition']);
    definition.description = {
      'en-US': params.question
    };
    definition.type = 'http://adlnet.gov/expapi/activities/cmi.interaction';
    definition.interactionType = 'choice';
    definition.correctResponsesPattern = [];
    definition.choices = [];
    for (var i = 0; i < params.answers.length; i++) {
      definition.choices[i] = {
        'id': params.answers[i].originalOrder + '',
        'description': {
          'en-US': params.answers[i].text
        }
      };
      if (params.answers[i].correct) {
        if (!params.singleAnswer) {
          if (definition.correctResponsesPattern.length) {
            definition.correctResponsesPattern[0] += '[,]';
            // This looks insane, but it's how you separate multiple answers
            // that must all be chosen to achieve perfect score...
          }
          else {
            definition.correctResponsesPattern.push('');
          }
          definition.correctResponsesPattern[0] += params.answers[i].originalOrder;
        }
        else {
          definition.correctResponsesPattern.push('' + params.answers[i].originalOrder);
        }
      }
    }
  };

  /**
   * Add the response part to an xAPI event
   *
   * @param {H5P.XAPIEvent} xAPIEvent
   *  The xAPI event we will add a response to
   */
  var addResponseToXAPI = function(xAPIEvent) {
    xAPIEvent.setScoredResult(score, self.getMaxScore(), self);
    if (params.userAnswers === undefined) {
      calcScore();
    }
    var response = '';
    for (var i = 0; i < params.userAnswers.length; i++) {
      if (response !== '') {
        response += '[,]';
      }
      response += idMap === undefined ? params.userAnswers[i] : idMap[params.userAnswers[i]];
    }
    xAPIEvent.data.statement.result.response = response;
  };

  // Initialization code
  // Randomize order, if requested
  var idMap;
  // Store original order in answers
  for (i = 0; i < params.answers.length; i++) {
    params.answers[i].originalOrder = i;
  }
  if (params.behaviour.randomAnswers) {
    var origOrder = $.extend([], params.answers);
    params.answers = H5P.shuffleArray(params.answers);

    // Create a map from the new id to the old one
    idMap = [];
    for (i = 0; i < params.answers.length; i++) {
      idMap[i] = params.answers[i].originalOrder;
    }
  }

  // Start with an empty set of user answers.
  params.userAnswers = [];

  // Restore previous state
  if (contentData && contentData.previousState !== undefined) {

    // Restore answers
    if (contentData.previousState.answers) {
      if (!idMap) {
        params.userAnswers = contentData.previousState.answers;
      }
      else {
        // The answers have been shuffled, and we must use the id mapping.
        for (i = 0; i < contentData.previousState.answers.length; i++) {
          for (var k = 0; k < idMap.length; k++) {
            if (idMap[k] === contentData.previousState.answers[i]) {
              params.userAnswers.push(k);
            }
          }
        }
      }
    }
  }

  /**
   * Pack the current state of the interactivity into a object that can be
   * serialized.
   *
   * @public
   */
  this.getCurrentState = function () {
    var state = {};
    if (!idMap) {
      state.answers = params.userAnswers;
    }
    else {
      // The answers have been shuffled and must be mapped back to their
      // original ID.
      state.answers = [];
      for (var i = 0; i < params.userAnswers.length; i++) {
        state.answers.push(idMap[params.userAnswers[i]]);
      }
    }
    return state;
  };


  this.getAnswerGiven = function() {
    return this.answered || params.behaviour.showSolutionsRequiresInput !== true || params.userAnswers.length || blankIsCorrect;
  };

  this.getScore = function() {
    return score;
  };

  this.getTitle = function() {
    return H5P.createTitle(params.question);
  };
};

H5P.MultiChoice.prototype = Object.create(H5P.Question.prototype);
H5P.MultiChoice.prototype.constructor = H5P.MultiChoice;
