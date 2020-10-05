var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.Column'] = (function () {
  return {
    1: {

      /**
       * Asynchronous content upgrade hook.
       * Upgrades content parameters to support Column 1.10.
       *
       * - Converts H5P.AppearIn to H5P.AdvancedText
       *
       * @param {Object} parameters
       * @param {function} finished
       */
      10: function (parameters, finished) {

        if (parameters && parameters.content) {

          // Go through content
          for (var i = 0; i < parameters.content.length; i++) {
            if (parameters.content[i] && parameters.content[i].content) {

              const content = parameters.content[i].content;
              if (content.library && content.library.split(' ')[0] === 'H5P.AppearIn') {

                content.library = 'H5P.AdvancedText 1.1';

                content.params = content.params || {};
                let roomName = '';
                if (content.params.appearRoom) {
                  roomName = content.params.appearRoom;
                }

                content.params.text = '<p>AppearIn support for embedded rooms has been deprecated and is no longer maintained. Access your room in a new tab with the following <a target="_blank" href="https://appear.in/' + roomName + '">link.</a></p>';
              }
            }
          }
        }

        // Done
        finished(null, parameters);
      }

    }
  };
})();
