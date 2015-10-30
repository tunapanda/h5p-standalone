H5P Question
==========

Gives a uniform way of dealing with tasks. Extend this class to make it easier
to create tasks that can be used inside other content types.

Typically your question type will need to do the following (examples from fill in the blanks)

1. Call the constructor from your questiontypes constructor:
H5P.Question.call(self, 'blanks');

2. Set your content type's prototype to use Question's prototype:
Blanks.prototype = Object.create(H5P.Question.prototype);
2.1. But you still want to use your own constructor:
Blanks.prototype.constructor = Blanks;

3. register your questions sections:
/**
 * Registers this question type's DOM elements before they are attached.
 * Called from H5P.Question.
 */
Blanks.prototype.registerDomElements = function () {
  var self = this;

  if (self.params.image) {
    // Register task image
    self.setImage(self.params.image.path);
  }

  // Register task introduction text
  self.setIntroduction(self.params.text);

  // Register task content area
  self.setContent(self.createQuestions(), {
    'class': self.params.behaviour.separateLines ? 'h5p-separate-lines' : ''
  });
  // ... and buttons
  self.registerButtons();
};

4. Register your buttons:
/**
 * Create all the buttons for the task
 */
Blanks.prototype.registerButtons = function () {
  var self = this;

  if (!self.params.behaviour.autoCheck) {
    // Check answer button
    self.addButton('check-answer', self.params.checkAnswer, function () {
      self.toggleButtonVisibility(STATE_CHECKING);
      self.markResults();
      self.showEvaluation();
      self.triggerXAPICompleted(self.getScore(), self.getMaxScore());
    });
  }

  // Check answer button
  self.addButton('show-solution', self.params.showSolutions, function () {
    if (self.allBlanksFilledOut()) {
      self.toggleButtonVisibility(STATE_SHOWING_SOLUTION);
      self.showCorrectAnswers();
    }
  }, self.params.behaviour.enableSolutionsButton);

  // Try again button
  if (self.params.behaviour.enableRetry === true) {
    self.addButton('try-again', self.params.tryAgain, function () {
      self.removeMarkedResults();
      self.hideSolutions();
      self.hideEvaluation();
      self.clearAnswers();
      self.resetGrowTextField();
      self.done = false;
      self.toggleButtonVisibility(STATE_ONGOING);
      self.$questions.filter(':first').find('input:first').focus();
    });
  }
  self.toggleButtonVisibility(STATE_ONGOING);
};

5. Toggle buttons visibility using the showButton and hideButton functions

6. Display feedback at the end using the setFeedback function

## License

(The MIT License)

Copyright (c) 2015 Joubel AS

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
