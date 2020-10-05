var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.DragQuestion'] = (function () {
  return {
    1: {
      1: {
        contentUpgrade: function (parameters, finished) {
          // Moved all behavioural settings into "behaviour" group.
          parameters.behaviour = {
            enableRetry: parameters.enableTryAgain === undefined ? true : parameters.enableTryAgain,
            preventResize: parameters.preventResize === undefined ? true : parameters.preventResize,
            singlePoint: parameters.singlePoint === undefined ? true : parameters.singlePoint,
            showSolutionsRequiresInput: parameters.showSolutionsRequiresInput === undefined ? true : parameters.showSolutionsRequiresInput
          };
          delete parameters.enableTryAgain;
          delete parameters.preventResize;
          delete parameters.singlePoint;
          delete parameters.showSolutionsRequiresInput;

          finished(null, parameters);
        }
      },

      /**
       * Asynchronous content upgrade hook.
       * Upgrades content parameters to support DQ 1.4.
       *
       * Converts H5P.Text elements into H5P.AdvancedText. This is to support
       * more styling options for text.
       *
       * @params {Object} parameters
       * @params {function} finished
       */
      4: function (parameters, finished) {
        if (parameters.question !== undefined && parameters.question.task !== undefined && parameters.question.task.elements !== undefined) {
          var elements = parameters.question.task.elements;

          // Go through elements
          for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            // Check if element type is text
            if (element && element.type && element.type.library &&
                element.type.library.split(' ')[0] === 'H5P.Text') {
              element.type.library = 'H5P.AdvancedText 1.0';
            }
          }
        }
        finished(null, parameters);
      },

      /**
       * Asynchronous content upgrade hook.
       * Upgrades content parameters to support Drag Question 1.11
       *
       * 1. Move old feedback message to the new overall feedback system.
       * 2. Group tip with feedback
       * 3. Do not show the new score points for old content being upgraded.
       * 4. Relocate fields in the editor
       *
       * @param {object} parameters
       * @param {function} finished
       */
      11: function (parameters, finished) {

        // Move old feedback message to the new overall feedback system.
        if (parameters && parameters.feedback) {
          parameters.overallFeedback = [
            {
              'from': 0,
              'to': 100,
              'feedback': parameters.feedback
            }
          ];

          delete parameters.feedback;
        }

        // Group tip with feedback
        if (parameters.question !== undefined &&
            parameters.question.task !== undefined &&
            parameters.question.task.dropZones !== undefined ) {

          var dropZones = parameters.question.task.dropZones;
          for (var i = 0; i < dropZones.length; i++) {
            var dropZone = dropZones[i];
            var tip = (dropZone !== undefined && dropZone.tip !== undefined && typeof dropZone.tip === 'string') ? dropZone.tip : '';

            // Create the new group-structure
            delete dropZone.tip;
            dropZone.tipsAndFeedback = {
              tip: tip,
              feedbackOnCorrect: '',
              feedbackOnIncorrect: ''
            };
          }
        }

        // Hide score points for old content
        if (!parameters.behaviour) {
          parameters.behaviour = {};
        }

        // Move fields into behaviour and remove the old values
        parameters.behaviour.backgroundOpacity = parameters.backgroundOpacity;
        delete parameters.backgroundOpacity;
        if (parameters.question !== undefined && parameters.question.settings !== undefined) {
          parameters.behaviour.dropZoneHighlighting = parameters.question.settings.dropZoneHighlighting;
          parameters.behaviour.autoAlignSpacing = parameters.question.settings.autoAlignSpacing;
          parameters.behaviour.enableFullScreen = parameters.question.settings.enableFullScreen;
          delete parameters.question.settings.dropZoneHighlighting;
          delete parameters.question.settings.autoAlignSpacing;
          delete parameters.question.settings.enableFullScreen;
        }

        // Done
        finished(null, parameters);
      },
      13: function (parameters, finished, extras) {
        var metadata = extras.metadata || {};
        if (parameters.question && parameters.question.settings) {
          // Set new show title parameter
          if (parameters.behaviour) {
            parameters.behaviour.showTitle = parameters.question.settings.showTitle || false;
          }

          metadata.title = parameters.question.settings.questionTitle || ((extras && extras.metadata) ? extras.metadata.title : undefined);

          // Remove old parameter
          delete parameters.question.settings.questionTitle;
          delete parameters.question.settings.showTitle;
        }
        extras.metadata = metadata;

        finished(null, parameters, extras);
      }

    }
  };
})();
