/**
 * Drag Text module
 * @external {jQuery} $ H5P.jQuery
 */
H5P.DragText = (function ($, Question) {
  //CSS Main Containers:
  var MAIN_CONTAINER = "h5p-drag";
  var INNER_CONTAINER = "h5p-drag-inner";
  var TASK_CONTAINER = "h5p-drag-task";
  var WORDS_CONTAINER = "h5p-drag-droppable-words";
  var DROPZONE_CONTAINER = "h5p-drag-dropzone-container";
  var DRAGGABLES_CONTAINER = "h5p-drag-draggables-container";

  //Special Sub-containers:
  var DROPZONE = "h5p-drag-dropzone";
  var DRAGGABLE = "h5p-drag-draggable";
  var SHOW_SOLUTION_CONTAINER = "h5p-drag-show-solution-container";
  var DRAGGABLES_WIDE_SCREEN = 'h5p-drag-wide-screen';
  var DRAGGABLE_ELEMENT_WIDE_SCREEN = 'h5p-drag-draggable-wide-screen';

  //CSS Dropzone feedback:
  var CORRECT_FEEDBACK = 'h5p-drag-correct-feedback';
  var WRONG_FEEDBACK = 'h5p-drag-wrong-feedback';

  //CSS Draggable feedback:
  var DRAGGABLE_DROPPED = 'h5p-drag-dropped';
  var DRAGGABLE_FEEDBACK_CORRECT = 'h5p-drag-draggable-correct';
  var DRAGGABLE_FEEDBACK_WRONG = 'h5p-drag-draggable-wrong';

  /**
   * Initialize module.
   *
   * @class H5P.DragText
   * @extends H5P.Question
   * @param {Object} params Behavior settings
   * @param {Number} contentId Content identification
   * @param {Object} contentData Object containing task specific content data
   *
   * @returns {Object} DragText Drag Text instance
   */
  function DragText(params, contentId, contentData) {
    this.$ = $(this);
    this.contentId = contentId;
    Question.call(this, 'drag-text');

    // Set default behavior.
    this.params = $.extend({}, {
      taskDescription: "Set in adjectives in the following sentence",
      textField: "This is a *nice*, *flexible* content type, which allows you to highlight all the *wonderful* words in this *exciting* sentence.\n" +
        "This is another line of *fantastic* text.",
      checkAnswer: "Check",
      tryAgain: "Retry",
      behaviour: {
        enableRetry: true,
        enableSolutionsButton: true,
        instantFeedback: false
      },
      score: "Score : @score of @total.",
      showSolution : "Show Solution"
    }, params);

    this.contentData = contentData;
    if (this.contentData !== undefined && this.contentData.previousState !== undefined && this.contentData.previousState.length !== undefined) {
      this.previousState = this.contentData.previousState;
    }

    // Keeps track of if Question has been answered
    this.answered = false;

    // Init drag text task
    this.initDragText();

    this.on('resize', this.resize, this);
  }

  DragText.prototype = Object.create(Question.prototype);
  DragText.prototype.constructor = DragText;

  /**
   * Registers this question type's DOM elements before they are attached.
   * Called from H5P.Question.
   */
  DragText.prototype.registerDomElements = function () {
    // Register task introduction text
    this.setIntroduction('<p>' + this.params.taskDescription + '</p>');

    // Register task content area
    this.setContent(this.initDragText());

    // Register buttons
    this.addButtons();
  };

  /**
   * Initialize drag text task
   */
  DragText.prototype.initDragText = function () {
    this.$inner = $('<div/>', {
      class: INNER_CONTAINER
    });

    // Create task
    this.addTaskTo(this.$inner);

    // Set stored user state
    this.setH5PUserState();

    // Notify that activity has been started
    this.setActivityStarted();

    return this.$inner;
  };

  /**
   * Changes layout responsively when resized.
   * @public
   */
  DragText.prototype.resize = function () {
    this.changeLayoutToFitWidth();
  };

  /**
  * Adds the draggables on the right side of the screen if widescreen is detected.
  * @public
  */
  DragText.prototype.changeLayoutToFitWidth = function () {
    var self = this;
    self.addDropzoneWidth();

    //Find ratio of width to em, and make sure it is less than the predefined ratio, make sure widest draggable is less than a third of parent width.
    if ((self.$inner.width() / parseFloat(self.$inner.css("font-size"), 10) > 43) && (self.widestDraggable <= (self.$inner.width() / 3))) {
      // Adds a class that floats the draggables to the right.
      self.$draggables.addClass(DRAGGABLES_WIDE_SCREEN);
      // Detach and reappend the wordContainer so it will fill up the remaining space left by draggables.
      self.$wordContainer.detach().appendTo(self.$taskContainer);
      // Set margin so the wordContainer does not expand when there are no more draggables left.
      self.$wordContainer.css({'margin-right': self.widestDraggable});
      // Set all draggables to be blocks
      self.draggables.forEach(function (draggable) {
        draggable.getDraggableElement().addClass(DRAGGABLE_ELEMENT_WIDE_SCREEN);
      });
    } else {
      // Remove the specific wide screen settings.
      self.$wordContainer.css({'margin-right': 0});
      self.$draggables.removeClass(DRAGGABLES_WIDE_SCREEN);
      self.$draggables.detach().appendTo(self.$taskContainer);
      self.draggables.forEach(function (draggable) {
        draggable.getDraggableElement().removeClass(DRAGGABLE_ELEMENT_WIDE_SCREEN);
      });
    }
  };

  /**
   * Add check solution, show solution and retry buttons, and their functionality.
   * @public
   */
  DragText.prototype.addButtons = function () {
    var self = this;

    // Checking answer button
    self.addButton('check-answer', self.params.checkAnswer, function () {
      if (!self.showEvaluation()) {
        if (self.params.behaviour.enableRetry) {
          self.showButton('try-again');
        }
        if (self.params.behaviour.enableSolutionsButton) {
          self.showButton('show-solution');
        }
        self.hideButton('check-answer');
        self.disableDraggables();
      } else {
        self.hideButton('show-solution');
        self.hideButton('try-again');
        self.hideButton('check-answer');
      }
    }, !self.params.behaviour.instantFeedback);

    //Retry button
    self.addButton('try-again', self.params.tryAgain, function () {
      // Reset and shuffle draggables if Question is answered
      if (self.answered) {
        self.resetDraggables();
        self.addDraggablesRandomly(self.$draggables);
      }
      self.answered = false;

      self.hideEvaluation();

      self.hideButton('try-again');
      self.hideButton('show-solution');

      if (self.params.behaviour.instantFeedback) {
        self.enableAllDropzonesAndDraggables();
      } else {
        self.showButton('check-answer');
        self.enableDraggables();
      }
      self.hideAllSolutions();
    }, false);

    //Show Solution button
    self.addButton('show-solution', self.params.showSolution, function () {
      self.droppables.forEach(function (droppable) {
        droppable.showSolution();
      });
      self.disableDraggables();
      self.hideButton('show-solution');
    }, false);
  };

  /**
   * Shows feedback for dropzones.
   * @public
   */
  DragText.prototype.showDropzoneFeedback = function () {
    this.droppables.forEach(function (droppable) {
      droppable.addFeedback();
    });
  };

  /**
   * Evaluate task and display score text for word markings.
   * @public
   *
   * @return {Boolean} Returns true if maxScore was achieved.
   */
  DragText.prototype.showEvaluation = function () {
    this.hideEvaluation();
    this.calculateScore();
    this.showDropzoneFeedback();

    var score = this.correctAnswers;
    var maxScore = this.droppables.length;

    this.triggerXAPIScored(score, maxScore, 'answered');

    var scoreText = this.params.score.replace(/@score/g, score.toString())
      .replace(/@total/g, maxScore.toString());

    if (score === maxScore) {
      //Hide buttons and disable task
      this.hideButton('check-answer');
      this.hideButton('show-solution');
      this.hideButton('try-again');
      this.disableDraggables();
    }
    this.trigger('resize');

    // Set feedback score
    this.setFeedback(scoreText, score, maxScore);

    return score === maxScore;
  };

  /**
   * Calculate score and store them in class variables.
   * @public
   */
  DragText.prototype.calculateScore = function () {
    var self = this;
    self.correctAnswers = 0;
    self.droppables.forEach(function (entry) {
      if (entry.isCorrect()) {
        self.correctAnswers += 1;
      }
    });
  };

  /**
   * Clear the evaluation text.
   */
  DragText.prototype.hideEvaluation = function () {
    this.setFeedback();
    this.trigger('resize');
  };

  /**
   * Hides solution text for all dropzones.
   */
  DragText.prototype.hideAllSolutions = function () {
    this.droppables.forEach(function (droppable) {
      droppable.hideSolution();
    });
    this.trigger('resize');
  };

  /**
   * Handle task and add it to container.
   * @public
   * @param {jQuery} $container The object which our task will attach to.
   */
  DragText.prototype.addTaskTo = function ($container) {
    var self = this;
    self.widest = 0;
    self.widestDraggable = 0;
    self.droppables = [];
    self.draggables = [];

    self.$taskContainer = $('<div/>', {
      'class': TASK_CONTAINER
    });

    self.$draggables = $('<div/>', {
      'class': DRAGGABLES_CONTAINER
    });

    self.$wordContainer = $('<div/>', {'class': WORDS_CONTAINER});
    self.handleText();

    self.addDraggablesRandomly(self.$draggables);
    self.$wordContainer.appendTo(self.$taskContainer);
    self.$draggables.appendTo(self.$taskContainer);
    self.$taskContainer.appendTo($container);
    self.addDropzoneWidth();
  };

  /**
   * Parses the text and sends identified dropzones to the addDragNDrop method for further handling.
   * Appends the parsed text to wordContainer.
   * @public
   */
  DragText.prototype.handleText = function () {
    var self = this;

    //Replace newlines with break line tag
    var textField = self.params.textField.replace(/(\r\n|\n|\r)/gm, "<br/>");

    // Go through the text and replace all the asterisks with input fields
    var dropStart = textField.indexOf('*');
    var dropEnd = -1;
    var currentIndex = 0;
    //While the start of a dropbox is found
    while (dropStart !== -1) {
      dropStart += 1;
      dropEnd = textField.indexOf('*', dropStart);
      if (dropEnd === -1) {
        dropStart = -1;
      } else {
        //Appends the text between each dropzone
        self.$wordContainer.append(textField.slice(currentIndex, dropStart - 1));

        //Adds the drag n drop functionality when an answer is found
        self.addDragNDrop(textField.substring(dropStart, dropEnd));
        dropEnd += 1;
        currentIndex = dropEnd;

        //Attempts to find the beginning of the next answer.
        dropStart = textField.indexOf('*', dropEnd);
      }
    }
    //Appends the remaining part of the text.
    self.$wordContainer.append(textField.slice(currentIndex, textField.length));
  };

  /**
   * Matches the width of all dropzones to the widest draggable, and sets widest class variable.
   * @public
   */
  DragText.prototype.addDropzoneWidth = function () {
    var self = this;
    var widest = 0;
    var widestDragagble = 0;
    var fontSize = parseInt(this.$inner.css('font-size'), 10);
    var staticMinimumWidth = 3 * fontSize;
    var staticPadding = fontSize; // Needed to make room for feedback icons

    //Find widest draggable
    this.draggables.forEach(function (draggable) {
      var $draggableElement = draggable.getDraggableElement();

      //Find the initial natural width of the draggable.
      var $tmp = $draggableElement.clone().css({
        'position': 'absolute',
        'white-space': 'nowrap',
        'width': 'auto',
        'padding': 0,
        'margin': 0
      }).html(draggable.getAnswerText())
        .appendTo($draggableElement.parent());
      var width = $tmp.width();

      widestDragagble = width > widestDragagble ? width : widestDragagble;

      // Measure how big truncated draggable should be
      if ($draggableElement.text().length >= 20) {
        $tmp.html(draggable.getShortFormat());
        width = $tmp.width();
      }

      if (width + staticPadding > widest) {
        widest = width + staticPadding;
      }
      $tmp.remove();
    });
    // Set min size
    if (widest < staticMinimumWidth) {
      widest = staticMinimumWidth;
    }
    this.widestDraggable = widestDragagble;
    this.widest = widest;

    //Adjust all droppable to widest size.
    this.droppables.forEach(function (droppable) {
      droppable.getDropzone().width(self.widest);
    });
  };

  /**
   * Makes a drag n drop from the specified text.
   * @public
   * @param {String} text Text for the drag n drop.
   */
  DragText.prototype.addDragNDrop = function (text) {
    var self = this;
    var tip;
    var answer = text;
    var answersAndTip = answer.split(':');

    if (answersAndTip.length > 0) {
      answer = answersAndTip[0];
      tip = answersAndTip[1];
    }

    //Make the draggable
    var $draggable = $('<div/>', {
      html: answer,
      'class': DRAGGABLE
    }).draggable({
      revert: function (isValidDrop) {
        var dropzone = droppable;
        if (!isValidDrop) {
          if (!self.$draggables.children().length) {
            // Show draggables container
            self.$draggables.css('display', '');
          }

          self.moveDraggableToDroppable(draggable, null);
          return true;
        }
        if (self.params.behaviour.instantFeedback) {
          if (dropzone !== null) {
            dropzone.addFeedback();
          }
          self.instantFeedbackEvaluation(true);
        }
        return !isValidDrop;
      }
    });

    var draggable = new Draggable(answer, $draggable);
    draggable.on('xAPI', function (event) {
      if (event.getVerb() === 'interacted') {
        self.triggerXAPI('interacted');
      }
    });

    //Make the dropzone
    var $dropzoneContainer = $('<div/>', {
      'class': DROPZONE_CONTAINER
    });
    var $dropzone = $('<div/>', {
      'class': DROPZONE
    }).appendTo($dropzoneContainer)
      .droppable({
        tolerance: 'pointer',
        drop: function (event, ui) {
          self.draggables.forEach(function (draggable) {
            if (draggable.getDraggableElement().is(ui.draggable)) {
              self.moveDraggableToDroppable(draggable, droppable);

            }
          });
          if (self.params.behaviour.instantFeedback) {
            droppable.addFeedback();
            self.instantFeedbackEvaluation();
            if (!self.params.behaviour.enableRetry) {
              droppable.disableDropzoneAndContainedDraggable();
            }
            if (droppable.isCorrect()) {
              droppable.disableDropzoneAndContainedDraggable();
            }
          }
          if (!self.$draggables.children().length) {
            // Hide draggables container
            self.$draggables.css('display', 'none');
          }
        }
      });

    var droppable = new Droppable(answer, tip, $dropzone, $dropzoneContainer);
    droppable.appendDroppableTo(self.$wordContainer);

    self.draggables.push(draggable);
    self.droppables.push(droppable);
  };

  /**
   * Moves a draggable onto a droppable, and updates all parameters in the objects.
   * @public
   * @param {Draggable} draggable Draggable instance.
   * @param {Droppable} droppable The droppable instance the draggable is put on.
   */
  DragText.prototype.moveDraggableToDroppable = function (draggable, droppable) {
    draggable.removeFromZone();
    if (droppable !== null) {
      this.answered = true;
      droppable.appendInsideDroppableTo(this.$draggables);
      droppable.setDraggable(draggable);
      draggable.appendDraggableTo(droppable.getDropzone());
    } else {
      draggable.revertDraggableTo(this.$draggables);
    }
    this.trigger('resize');
  };

  /**
   * Adds the draggable words to the provided container in random order.
   * @public
   * @param {jQuery} $container Container the draggables will be added to.
   */
  DragText.prototype.addDraggablesRandomly = function ($container) {
    var tempArray = this.draggables.slice();
    var randIndex = 0;
    while (tempArray.length >= 1) {
      randIndex = parseInt(Math.random() * tempArray.length, 10);
      tempArray[randIndex].appendDraggableTo($container);
      tempArray.splice(randIndex, 1);
    }
  };

  /**
   * Feedback function for checking if all fields are filled, and show evaluation if that is the case.
   * @public
   */
  DragText.prototype.instantFeedbackEvaluation = function (revert) {
    var self = this;
    var allFilled = true;
    self.draggables.forEach(function (entry) {
      if (entry.insideDropzone === null) {
        allFilled = false;
        //Hides "retry" and "show solution" buttons.
        self.hideButton('try-again');
        self.hideButton('show-solution');

        //Hides evaluation text.
        self.hideEvaluation();
      }
    });
    if (allFilled) {
      //Shows "retry" and "show solution" buttons.
      if (self.params.behaviour.enableSolutionsButton) {
        self.showButton('show-solution');
      }
      if (self.params.behaviour.enableRetry) {
        self.showButton('try-again');
      }

      // Shows evaluation text
      if (!revert) {
        self.showEvaluation();
      }
    }
  };

  /**
   * Enables all dropzones and all draggables.
   */
  DragText.prototype.enableAllDropzonesAndDraggables = function () {
    this.enableDraggables();
    this.droppables.forEach(function (droppable) {
      droppable.enableDropzone();
    });
  };

  /**
   * Disables all draggables, user will not be able to interact with them any more.
   * @public
   */
  DragText.prototype.disableDraggables = function () {
    this.draggables.forEach(function (entry) {
      entry.disableDraggable();
    });
  };

  /**
   * Enables all draggables, user will be able to interact with them again.
   * @public
   */
  DragText.prototype.enableDraggables = function () {
    this.draggables.forEach(function (entry) {
      entry.enableDraggable();
    });
  };

  /**
   * Used for contracts.
   * Checks if the parent program can proceed. Always true.
   * @public
   * @returns {Boolean} true
   */
  DragText.prototype.getAnswerGiven = function () {
    return this.answered;
  };

  /**
   * Used for contracts.
   * Checks the current score for this task.
   * @public
   * @returns {Number} The current score.
   */
  DragText.prototype.getScore = function () {
    this.calculateScore();
    return this.correctAnswers;
  };

  /**
   * Used for contracts.
   * Checks the maximum score for this task.
   * @public
   * @returns {Number} The maximum score.
   */
  DragText.prototype.getMaxScore = function () {
    return this.droppables.length;
  };

  /**
   * Get title of task
   * @returns {string} title
   */
  DragText.prototype.getTitle = function () {
    return H5P.createTitle(this.params.taskDescription);
  };

  /**
   * Used for contracts.
   * Sets feedback on the dropzones.
   * @public
   */
  DragText.prototype.showSolutions = function () {
    this.droppables.forEach(function (droppable) {
      droppable.addFeedback();
      droppable.showSolution();
    });
    this.disableDraggables();
    //Remove all buttons in "show solution" mode.
    this.hideButton('try-again');
    this.hideButton('show-solution');
    this.hideButton('check-answer');
    this.trigger('resize');
  };

  /**
   * Used for contracts.
   * Resets the complete task back to its' initial state.
   * @public
   */
  DragText.prototype.resetTask = function () {
    var self = this;
    // Reset task answer
    self.answered = false;
    //Reset draggables parameters and position
    self.resetDraggables();
    //Hides solution text and re-enable draggables
    self.hideEvaluation();
    self.enableAllDropzonesAndDraggables();
    //Show and hide buttons
    self.hideButton('try-again');
    self.hideButton('show-solution');

    if (!self.params.behaviour.instantFeedback) {
      self.showButton('check-answer');
    }
    self.hideAllSolutions();
    this.trigger('resize');
  };

  /**
   * Resets the position of all draggables.
   */
  DragText.prototype.resetDraggables = function () {
    var self = this;
    // Show draggables container
    self.$draggables.css('display', '');
    self.draggables.forEach(function (entry) {
      self.moveDraggableToDroppable(entry, null);
    });
    this.trigger('resize');
  };

  /**
   * Returns an object containing the dropped words
   * @returns {object} containing indexes of dropped words
   */
  DragText.prototype.getCurrentState = function () {
    var self = this;
    var draggedDraggablesIndexes = [];

    // Return undefined if task is not initialized
    if (this.draggables === undefined) {
      return undefined;
    }

    // Find draggables that has been dropped
    this.draggables.forEach(function (draggable, draggableIndex) {
      if (draggable.getInsideDropzone() !== null) {
        draggedDraggablesIndexes.push({draggable: draggableIndex, droppable: self.droppables.indexOf(draggable.getInsideDropzone())});
      }
    });
    return draggedDraggablesIndexes;
  };

  /**
   * Sets answers to current user state
   */
  DragText.prototype.setH5PUserState = function () {
    var self = this;

    // Do nothing if user state is undefined
    if (this.previousState === undefined) {
      return;
    }

    // Select words from user state
    this.previousState.forEach(function (draggedDraggableIndexes) {
      var draggableIndexIsInvalid = isNaN(draggedDraggableIndexes.draggable) ||
        draggedDraggableIndexes.draggable >= self.draggables.length ||
        draggedDraggableIndexes.draggable < 0;

      var droppableIndexIsInvalid = isNaN(draggedDraggableIndexes.droppable) ||
        draggedDraggableIndexes.droppable >= self.droppables.length ||
        draggedDraggableIndexes.droppable < 0;

      if (draggableIndexIsInvalid || droppableIndexIsInvalid) {
        throw new Error('Stored user state is invalid');
      }

      var moveDraggable = self.draggables[draggedDraggableIndexes.draggable];
      var moveToDroppable = self.droppables[draggedDraggableIndexes.droppable];
      self.moveDraggableToDroppable(moveDraggable, moveToDroppable);

      if (self.params.behaviour.instantFeedback) {
        // Add feedback to dropzone
        if (moveToDroppable !== null) {
          moveToDroppable.addFeedback();
        }

        // Add feedback to draggable
        if (moveToDroppable.isCorrect()) {
          moveToDroppable.disableDropzoneAndContainedDraggable();
        }
      }
    });

    // Show evaluation if task is finished
    if (self.params.behaviour.instantFeedback) {
      self.instantFeedbackEvaluation();
    }
  };

  /**
   * Private class for keeping track of draggable text.
   * @private
   * @param {String} text String that will be turned into a selectable word.
   * @param {jQuery} draggable Draggable object.
   */
  function Draggable(text, draggable) {
    H5P.EventDispatcher.call(this);
    var self = this;
    self.text = text;
    self.insideDropzone = null;
    self.$draggable = $(draggable);

    self.shortFormat = self.text;
    //Shortens the draggable string if inside a dropbox.
    if (self.shortFormat.length > 20) {
      self.shortFormat = self.shortFormat.slice(0, 17) + '...';
    }
  }

  Draggable.prototype = Object.create(H5P.EventDispatcher.prototype);
  Draggable.prototype.constructor = Draggable;

  /**
   * Moves the draggable to the provided container.
   * @public
   * @param {jQuery} $container Container the draggable will append to.
   */
  Draggable.prototype.appendDraggableTo = function ($container) {
    this.$draggable.detach().css({left: 0, top: 0}).appendTo($container);
  };

  /**
   * Reverts the draggable to its' provided container.
   * @public
   * @params {jQuery} $container The parent which the draggable will revert to.
   */
  Draggable.prototype.revertDraggableTo = function ($container) {
    // get the relative distance between draggable and container.
    var offLeft = this.$draggable.offset().left - $container.offset().left;
    var offTop = this.$draggable.offset().top - $container.offset().top;

    // Prepend draggable to new container, but keep the offset,
    // then animate to new container's top:0, left:0
    this.$draggable.detach()
      .prependTo($container)
      .css({left: offLeft, top: offTop})
      .animate({left: 0, top: 0});
  };

  /**
   * Sets dropped feedback if the on the draggable if parameter is true.
   * @public
   * @params {Boolean} isDropped Decides whether the draggable has been dropped.
   */
  Draggable.prototype.toggleDroppedFeedback = function (isDropped) {
    if (isDropped) {
      this.$draggable.addClass(DRAGGABLE_DROPPED);
    } else {
      this.$draggable.removeClass(DRAGGABLE_DROPPED);
    }
  };

  /**
   * Disables the draggable, making it immovable.
   * @public
   */
  Draggable.prototype.disableDraggable = function () {
    this.$draggable.draggable({ disabled: true});
  };

  /**
   * Enables the draggable, making it movable.
   * @public
   */
  Draggable.prototype.enableDraggable = function () {
    this.$draggable.draggable({ disabled: false});
  };

  /**
   * Gets the draggable jQuery object for this class.
   * @public
   *
   * @returns {jQuery} Draggable item.
   */
  Draggable.prototype.getDraggableElement = function () {
    return this.$draggable;
  };

  /**
   * Removes this draggable from its dropzone, if it is contained in one.
   * @public
   */
  Draggable.prototype.removeFromZone = function () {
    if (this.insideDropzone !== null) {
      this.insideDropzone.removeFeedback();
      this.insideDropzone.removeDraggable();
    }
    this.toggleDroppedFeedback(false);
    this.removeShortFormat();
    this.insideDropzone = null;
  };

  /**
   * Adds this draggable to the given dropzone.
   * @public
   * @param {Droppable} droppable The droppable this draggable will be added to.
   */
  Draggable.prototype.addToZone = function (droppable) {
    this.triggerXAPI('interacted');
    if (this.insideDropzone !== null) {
      this.insideDropzone.removeDraggable();
    }
    this.toggleDroppedFeedback(true);
    this.insideDropzone = droppable;
    this.setShortFormat();
  };

  /**
   * Gets the answer text for this draggable.
   * @public
   *
   * @returns {String} The answer text in this draggable.
   */
  Draggable.prototype.getAnswerText = function () {
    return this.text;
  };

  /**
   * Sets short format of draggable when inside a dropbox.
   * @public
   */
  Draggable.prototype.setShortFormat = function () {
    this.$draggable.html(this.shortFormat);
  };

  /**
   * Get short format of draggable when inside a dropbox.
   * @returns {String|*}
   */
  Draggable.prototype.getShortFormat = function () {
    return this.shortFormat;
  };

  /**
   * Removes the short format of draggable when it is outside a dropbox.
   * @public
   */
  Draggable.prototype.removeShortFormat = function () {
    this.$draggable.html(this.text);
  };

  /**
   * Get the droppable this draggable is inside
   * @returns {Droppable} Droppable
   */
  Draggable.prototype.getInsideDropzone = function () {
    return this.insideDropzone;
  };

  /**
   * Private class for keeping track of droppable zones.
   * @private
   *
   * @param {String} text Correct text string for this drop box.
   * @param {undefined/String} tip Tip for this container, optional.
   * @param {jQuery} dropzone Dropzone object.
   * @param {jQuery} dropzoneContainer Container Container for the dropzone.
   */
  function Droppable(text, tip, dropzone, dropzoneContainer) {
    var self = this;
    self.text = text;
    self.tip = tip;
    self.containedDraggable = null;
    self.$dropzone = $(dropzone);
    self.$dropzoneContainer = $(dropzoneContainer);

    if (self.tip !== undefined) {
      self.$dropzone.append(H5P.JoubelUI.createTip(self.tip, self.$dropzone));
    }

    self.$showSolution = $('<div/>', {
      'class': SHOW_SOLUTION_CONTAINER
    }).appendTo(self.$dropzoneContainer).hide();
  }

  /**
   * Displays the solution next to the drop box if it is not correct.
   * @public
   */
  Droppable.prototype.showSolution = function () {
    if (!((this.containedDraggable !== null) && (this.containedDraggable.getAnswerText() === this.text))) {
      this.$showSolution.html(this.text);
      this.$showSolution.show();
    }
  };

  /**
   * Hides the solution.
   * @public
   */
  Droppable.prototype.hideSolution = function () {
    this.$showSolution.html('');
    this.$showSolution.hide();
  };

  /**
   * Appends the droppable to the provided container.
   * @public
   * @param {jQuery} $container Container which the dropzone will be appended to.
   */
  Droppable.prototype.appendDroppableTo = function ($container) {
    this.$dropzoneContainer.appendTo($container);
  };
  /**
   * Appends the draggable contained within this dropzone to the argument.
   * @public
   * @param {jQuery} $container Container which the draggable will append to.
   */
  Droppable.prototype.appendInsideDroppableTo = function ($container) {
    if (this.containedDraggable !== null) {
      this.containedDraggable.revertDraggableTo($container);
    }
  };

  /**
   * Sets the contained draggable in this drop box to the provided argument.
   * @public
   * @param {Draggable} droppedDraggable A draggable that has been dropped on this box.
   */
  Droppable.prototype.setDraggable = function (droppedDraggable) {
    var self = this;
    if (self.containedDraggable === droppedDraggable) {
      return;
    }
    if (self.containedDraggable !== null) {
      self.containedDraggable.removeFromZone();
    }
    self.containedDraggable = droppedDraggable;
    droppedDraggable.addToZone(self);
  };

  /**
   * Removes the contained draggable in this box.
   * @public
   */
  Droppable.prototype.removeDraggable = function () {
    if (this.containedDraggable !== null) {
      this.containedDraggable = null;
    }
  };

  /**
   * Checks if this drop box contains the correct draggable.
   * @public
   *
   * @returns {Boolean} True if this box has the correct answer.
   */
  Droppable.prototype.isCorrect = function () {
    if (this.containedDraggable === null) {
      return false;
    }
    return this.containedDraggable.getAnswerText() === this.text;
  };

  /**
   * Sets CSS styling feedback for this drop box.
   * @public
   */
  Droppable.prototype.addFeedback = function () {
    //Draggable is correct
    if (this.isCorrect()) {
      this.$dropzone.removeClass(WRONG_FEEDBACK).addClass(CORRECT_FEEDBACK);

      //Draggable feedback
      this.containedDraggable.getDraggableElement().removeClass(DRAGGABLE_FEEDBACK_WRONG).addClass(DRAGGABLE_FEEDBACK_CORRECT);
    } else if (this.containedDraggable === null) {
      //Does not contain a draggable
      this.$dropzone.removeClass(WRONG_FEEDBACK).removeClass(CORRECT_FEEDBACK);
    } else {
      //Draggable is wrong
      this.$dropzone.removeClass(CORRECT_FEEDBACK).addClass(WRONG_FEEDBACK);

      //Draggable feedback
      if (this.containedDraggable !== null) {
        this.containedDraggable.getDraggableElement().addClass(DRAGGABLE_FEEDBACK_WRONG).removeClass(DRAGGABLE_FEEDBACK_CORRECT);
      }
    }
  };

  /**
   * Removes all CSS styling feedback for this drop box.
   * @public
   */
  Droppable.prototype.removeFeedback = function () {
    this.$dropzone.removeClass(WRONG_FEEDBACK).removeClass(CORRECT_FEEDBACK);

    //Draggable feedback
    if (this.containedDraggable !== null) {
      this.containedDraggable.getDraggableElement().removeClass(DRAGGABLE_FEEDBACK_WRONG).removeClass(DRAGGABLE_FEEDBACK_CORRECT);
    }
  };

  /**
   * Sets short format of draggable when inside a dropbox.
   * @public
   */
  Droppable.prototype.setShortFormat = function () {
    if (this.containedDraggable !== null) {
      this.containedDraggable.setShortFormat();
    }
  };

  /**
   * Disables dropzone and the contained draggable.
   */
  Droppable.prototype.disableDropzoneAndContainedDraggable = function () {
    if (this.containedDraggable !== null) {
      this.containedDraggable.disableDraggable();
    }
    this.$dropzone.droppable({ disabled: true});
  };

  /**
   * Enable dropzone.
   */
  Droppable.prototype.enableDropzone = function () {
    this.$dropzone.droppable({ disabled: false});
  };

  /**
   * Removes the short format of draggable when it is outside a dropbox.
   * @public
   */
  Droppable.prototype.removeShortFormat = function () {
    if (this.containedDraggable !== null) {
      this.containedDraggable.removeShortFormat();
    }
  };

  /**
   * Gets this object's dropzone jQuery object.
   * @public
   *
   * @returns {jQuery} This object's dropzone.
   */
  Droppable.prototype.getDropzone = function () {
    return this.$dropzone;
  };

  return DragText;

}(H5P.jQuery, H5P.Question));
