var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.SingleChoiceSet'] = (function () {
  return {
    1: {
      7: function (options, finished) {
        if (options.choices != undefined) {
          for (var i = 0; i < options.choices.length; i++) {
            if (options.choices[i] && options.choices[i].subContentId === undefined) {
              // NOTE: We avoid using H5P.createUUID since this is an upgrade script and H5P function may change in the
              // future
              options.choices[i].subContentId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(char) {
                var random = Math.random()*16|0, newChar = char === 'x' ? random : (random&0x3|0x8);
                return newChar.toString(16);
              });
            }
          }
        }

        finished(null, options);
      },

      /**
       * Asynchronous content upgrade hook.
       * Upgrades content parameters to support Single Choice Set 1.9
       *
       * Move old feedback message to the new overall feedback system.
       *
       * @param {object} parameters
       * @param {function} finished
       */
      9: function (parameters, finished) {
        if (parameters && parameters.l10n && parameters.l10n.resultSlideTitle) {
          parameters.overallFeedback = [
            {
              'from': 0,
              'to': 100,
              'feedback': parameters.l10n.resultSlideTitle
            }
          ];

          delete parameters.l10n.resultSlideTitle;
        }

        finished(null, parameters);
      },
      11: function (parameters, finished, extras) {
        var title;

        if (parameters && parameters.choices && parameters.choices[0] && parameters.choices[0].question) {
          title = parameters.choices[0].question;
        }

        extras = extras || {};
        extras.metadata = extras.metadata || {};
        extras.metadata.title = (title) ? title.replace(/<[^>]*>?/g, '') : ((extras.metadata.title) ? extras.metadata.title : 'Single Choice Set');

        finished(null, parameters, extras);
      }
    }
  };
})();
