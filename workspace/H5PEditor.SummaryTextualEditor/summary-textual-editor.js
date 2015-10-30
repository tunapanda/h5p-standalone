/** @namespace H5PEditor */
var H5PEditor = H5PEditor || {};

H5PEditor.SummaryTextualEditor = (function ($) {

  /**
   * Creates a text input widget for editing summaries.
   *
   * @class
   * @param {List}
   */
  function SummaryTextualEditor(list) {
    var self = this;
    var entity = list.getEntity();
    var recreation = false;
    var shouldWarn = false;

    /**
     * Instructions as to how this editor widget is used.
     * @public
     */
    self.helpText = t('helpText');

    // Create list html
    var $input = $('<textarea/>', {
      rows: 20,
      css: {
        resize: 'none'
      },
      placeholder: t('example'),
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

      // Go through text lines and add statements to list
      var tip, statements = [];
      for (var i = 0; i < textLines.length; i++) {
        var textLine = textLines[i].trim();
        if (textLine === '') {
          // Task seperator
          if (statements.length || tip !== undefined) {
            // Add statements to list
            list.addItem({
              summary: statements,
              tip: tip
            });

            // Start new list of statements
            statements = [];
            tip = undefined;
          }
          continue;
        }

        // Convert text to html
        textLine = $cleaner.text(textLine).html();

        if (!statements.length && textLine.substr(0, 1) === ':') {
          // If first line begins with ":", it's a tip
          tip = textLine.substr(1, textLine.length);
        }
        else {
          // Add statement
          statements.push(textLine);
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
          case 'summary':
            // Cycle through statements list
            child.forEachChild(function (grandChild) {
              // Grab HTML from text fields
              var html = grandChild.validate();
              if (html !== false) {
                // Strip all html tags and remove line breaks.
                html = html.replace(/(<[^>]*>|\r\n|\n|\r)/gm, '').trim();
                if (html !== '') {
                 text += html + '\n';
                }
              }
            });
            break;

          case 'tip':
            // Cycle through field in the tip group
            child.forEachChild(function (grandChild) {
              // Found text field containing tip
              var tip = grandChild.validate();
              if (tip !== false) {
                tip = tip.trim();
                if (tip !== '') {
                  // Add tip to the beginning
                  text = ':' + tip + '\n' + text;
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

        if (!warned && !shouldWarn) {
          shouldWarn = true;
        }
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
    return H5PEditor.t('H5PEditor.SummaryTextualEditor', identifier, placeholders);
  };

  /**
  * Warn user the first time he uses the editor.
  */
  var warned = false;

  return SummaryTextualEditor;
})(H5P.jQuery);


// Add translations
H5PEditor.language['H5PEditor.SummaryTextualEditor'] = {
  'libraryStrings': {
    'helpText': 'Write each statement on a separate line. Use an empty line to separate sets of statements.',
    'example': 'Oslo is the capital of Norway\nOslo is the capital of Sweden\nOslo is the capital of Island\n\n2 + 2 = 4\n0 * 4 = 4',
    'warning': 'Warning! If you change the tasks in the textual editor all rich text formatting(incl. line breaks) will be removed.',
  }
};
