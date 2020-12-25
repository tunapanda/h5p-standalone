/** @namespace H5PEditor */
var H5PEditor = H5PEditor || {};

H5PEditor.SingleChoiceSetTextualEditor = (function ($) {

  /**
   * Creates a text input widget for editing ssc.
   *
   * @class
   * @param {List}
   */
  function SSCEditor(list) {
    var self = this;
    var recreation = false;
    var shouldWarn = false;

    /**
     * Instructions as to how this editor widget is used.
     * @public
     */
    self.helpText = t('helpText');

    // Create list html
    var $input = $('<textarea/>', {
      id: list.getId(),
      'aria-describedby': list.getDescriptionId(),
      rows: 20,
      css: {
        resize: 'none'
      },
      placeholder: "2 + 2 = ?\n4\n6\n8\n\n3 + 3= ?\n6\n9\n0\n\n",
      on: {
        change: function () {
          recreateList();
        }
      }
    });

    // Used to convert HTML to text and vice versa
    var $cleaner = $('<div/>');

    /**
     * Clears all items from the list, processes the text and add the items
     * from the text. This makes it possible to switch to another widget
     * without losing datas.
     *
     * @private
     */
    var recreateList = function () {
      // Get text input
      var textLines = $input.val().split("\n");
      textLines.push(''); // Add separator

      // Reset list
      list.removeAllItems();
      recreation = true;
      // TODO: recreation can be dropped when group structure can be created without being appended.
      // Then the fields can be added back to the textarea like a validation.

      // Go through text lines and add questions to list
      var question = undefined;
      var answers = [];
      for (var i = 0; i < textLines.length; i++) {
        var textLine = textLines[i].trim();
        if (textLine === '') {
          // Task seperator
          if (answers.length) {
            // Add question & answers to list
            list.addItem({
              question: question,
              answers: answers
            });

            // Start new question
            answers = [];
            question = undefined;
          }
          continue;
        }

        // Convert text to html
        textLine = $cleaner.text(textLine).html();

        if (!question) {
          // First line is the question
          question = textLine;
        }
        else {
          // Add answer
          answers.push(textLine);
        }
      }

      recreation = false;
    };

    /**
     * Find the name of the given field.
     *
     * @private
     * @param {Object} field
     * @return {String}
     */
    var getName = function (field) {
      return (field.getName !== undefined ? field.getName() : field.field.name);
    };

    /**
     * Add items to the text input.
     *
     * @public
     * @param {Object} item instance
     */
    self.addItem = function (item) {
      if (recreation) {
        return;
      }
      if (!(item instanceof H5PEditor.Group)) {
        return;
      }

      var text = '';
      item.forEachChild(function (child) {
        switch (getName(child)) {
          case 'question':
            // Grab HTML from text fields
            var html = child.validate();
            if (html !== false) {
              // Strip all html tags and remove line breaks.
              html = html.replace(/(<[^>]*>|\r\n|\n|\r)/gm, '').trim();
              if (html !== '') {
                text += html + '\n';
              }
            }
            break;

          case 'answers':
            // Cycle through the answers
            child.forEachChild(function (grandChild) {
              // Found text field containing answer
              var answer = grandChild.validate();
              if (answer !== false) {
                answer = answer.trim();
                if (answer !== '') {
                  text += answer + '\n';
                }
              }
            });
            break;
        }
      });

      if (text !== '') {
        // Convert all escaped html to text
        $cleaner.html(text);
        text = $cleaner.text();

        // Append text
        var current = $input.val();
        if (current !== '') {
          current += '\n';
        }
        $input.val(current + text);

        shouldWarn = !warned && !shouldWarn;
      }
    };

    /**
     * Puts this widget at the end of the given container.
     *
     * @public
     * @param {jQuery} $container
     */
    self.appendTo = function ($container) {
      $input.appendTo($container);
      if (shouldWarn && !warned) {
        alert(t('warning'));
        warned = true;
      }
    };

    /**
     * Remove this widget from the editor DOM.
     *
     * @public
     */
    self.remove = function () {
      $input.remove();
    };
  }

  /**
   * Helps localize strings.
   *
   * @private
   * @param {String} identifier
   * @param {Object} [placeholders]
   * @returns {String}
   */
  var t = function (identifier, placeholders) {
    return H5PEditor.t('H5PEditor.SingleChoiceSetTextualEditor', identifier, placeholders);
  };

  /**
  * Warn user the first time he uses the editor.
  */
  var warned = false;

  return SSCEditor;
})(H5P.jQuery);
