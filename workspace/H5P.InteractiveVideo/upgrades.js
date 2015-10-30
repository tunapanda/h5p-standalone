/** @namespace H5PUpgrades */
var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.InteractiveVideo'] = (function ($) {
  return {
    1: {
      /**
       * Asynchronous content upgrade hook.
       * Upgrades content parameters to support IV 1.1.
       *
       * Moves interactions into an assets container to be able to add more
       * properties to the video, i.e. a bookmark list
       *
       * @params {Object} parameters
       * @params {function} finished
       */
      1: function (parameters, finished) {

          // Move interactions into assets container
          parameters.interactiveVideo.assets = {
            interactions: parameters.interactiveVideo.interactions,
            bookmarks: []
          };
          delete parameters.interactiveVideo.interactions;

          // Done
          finished(null, parameters);
      },

      /**
       * Asynchronous content upgrade hook.
       * Upgrades content parameters to support IV 1.3.
       *
       * Wraps summary in a container to be able to add IV specific options
       * to the summary task, i.e. when to display the task.
       *
       * @params {Object} parameters
       * @params {function} finished
       */
      3: function (parameters, finished) {

        // Move summary task into container
        parameters.interactiveVideo.summary = {
          task: parameters.interactiveVideo.summary,
          displayAt: 3
        };

        // Done
        finished(null, parameters);
      },

      /**
       * Asynchronous content upgrade hook.
       * Upgrades content parameters to support IV 1.5.
       *
       * Adds unique identifiers to sub content?
       *
       * @params {Object} parameters
       * @params {function} finished
       */
      5: function (parameters, finished) {
        if (parameters.interactiveVideo && parameters.interactiveVideo.assets && parameters.interactiveVideo.assets.interactions) {
          var interactions = parameters.interactiveVideo.assets.interactions;
          for (var i = 0; i < interactions.length; i++) {
            if (interactions[i].action && interactions[i].action.subContentId === undefined) {
              // NOTE: We avoid using H5P.createUUID since this is an upgrade script and H5P function may change in the
              // future
              interactions[i].action.subContentId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(char) {
                var random = Math.random()*16|0, newChar = char === 'x' ? random : (random&0x3|0x8);
                return newChar.toString(16);
              });
            }
          }
        }
        finished(null, parameters);
      },

      /**
       * Asynchronous content upgrade hook.
       * Upgrades content parameters to support IV 1.7.
       *
       * Groups all UI text strings to make them eaiser to translate and handle.
       *
       * @params {Object} parameters
       * @params {function} finished
       */
      7: function (parameters, finished) {
        var i;
        parameters.l10n = {};

        var keys = ['interaction', 'play', 'pause', 'mute', 'quality', 'unmute', 'fullscreen', 'exitFullscreen', 'summary', 'bookmarks', 'defaultAdaptivitySeekLabel'];
        for (i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (parameters.hasOwnProperty(key)) {
            parameters.l10n[key] = parameters[key];
            delete parameters[key];
          }
        }

        /* Move displayAsButton to displayType  */
        if (parameters.interactiveVideo && parameters.interactiveVideo.assets && parameters.interactiveVideo.assets.interactions) {
          var interactions = parameters.interactiveVideo.assets.interactions;
          for (i = 0; i < interactions.length; i++) {
            var interaction = interactions[i];
            interaction.displayType = (interaction.displayAsButton === undefined || interaction.displayAsButton) ? 'button' : 'poster';
            delete interaction.displayAsButton;

            // Set links displayType to poster
            if (interaction.action && interaction.action.library && interaction.action.library.split(' ')[0] === 'H5P.Link') {
              interaction.displayType = 'poster';
            }
          }
        }

        finished(null, parameters);
      },
    }
  };
})(H5P.jQuery);
