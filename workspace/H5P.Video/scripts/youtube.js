/** @namespace H5P */
H5P.VideoYouTube = (function ($) {

  /**
   * YouTube video player for H5P.
   *
   * @class
   * @param {Array} sources Video files to use
   * @param {Object} options Settings for the player
   * @param {Object} l10n Localization strings
   */
  function YouTube(sources, options, l10n) {
    var self = this;

    var player;
    var id = 'h5p-youtube-' + numInstances;
    numInstances++;

    var $wrapper = $('<div/>');
    var $placeholder = $('<div/>', {
      id: id,
      text: l10n.loading
    }).appendTo($wrapper);

    // Optional placeholder
    // var $placeholder = $('<iframe id="' + id + '" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/' + getId(sources[0].path) + '?enablejsapi=1&origin=' + encodeURIComponent(ORIGIN) + '&autoplay=' + (options.autoplay ? 1 : 0) + '&controls=' + (options.controls ? 1 : 0) + '&disabledkb=' + (options.controls ? 0 : 1) + '&fs=0&loop=' + (options.loop ? 1 : 0) + '&rel=0&showinfo=0&iv_load_policy=3" frameborder="0"></iframe>').appendTo($wrapper);

    /**
     * Use the YouTube API to create a new player
     *
     * @private
     */
    var create = function () {
      if (!$placeholder.is(':visible') || player !== undefined) {
        return;
      }

      if (window.YT === undefined) {
        // Load API first
        loadAPI(create);
        return;
      }

      var width = $wrapper.width();
      if (width < 200) {
        width = 200;
      }

      player = new YT.Player(id, {
        width: width,
        height: width * (9/16),
        videoId: getId(sources[0].path),
        playerVars: {
          origin: ORIGIN,
          autoplay: options.autoplay ? 1 : 0,
          controls: options.controls ? 1 : 0,
          disablekb: options.controls ? 0 : 1,
          fs: 0,
          loop: options.loop ? 1 : 0,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          wmode: "opaque"
        },
        events: {
          onReady: function () {
            self.trigger('ready');
            self.trigger('loaded');
          },
          onStateChange: function (state) {
            if (state.data > -1 && state.data < 4) {
              self.trigger('stateChange', state.data);
            }
          },
          onPlaybackQualityChange: function (quality) {
            self.trigger('qualityChange', quality.data);
          },
          onError: function (error) {
            var message;
            switch (error.data) {
              case 2:
                message = l10n.invalidYtId;
                break;

              case 100:
                message = l10n.unknownYtId;
                break;

              case 101:
              case 150:
                message = l10n.restrictedYt;
                break;

              default:
                message = l10n.unknownError + ' ' + error.data;
                break;
            }
            self.trigger('error', message);
          }
        }
      });
    };

    /**
     * Indicates if the video must be clicked for it to start playing.
     * For instance YouTube videos on iPad must be pressed to start playing.
     *
     * @public
     */
    self.pressToPlay = navigator.userAgent.match(/iPad/i) ? true : false;

    /**
    * Appends the video player to the DOM.
    *
    * @public
    * @param {jQuery} $container
    */
    self.appendTo = function ($container) {
      $container.addClass('h5p-youtube').append($wrapper);
      create();
    };

    /**
     * Get list of available qualities. Not available until after play.
     *
     * @public
     * @returns {Array}
     */
    self.getQualities = function () {
      if (!player || !player.getAvailableQualityLevels) {
        return;
      }

      var qualities = player.getAvailableQualityLevels();
      if (!qualities.length) {
        return; // No qualities
      }

      // Add labels
      for (var i = 0; i < qualities.length; i++) {
        var quality = qualities[i];
        var label = (LABELS[quality] !== undefined ? LABELS[quality] : 'Unknown'); // TODO: l10n
        qualities[i] = {
          name: quality,
          label: LABELS[quality]
        };
      }

      return qualities;
    };

    /**
     * Get current playback quality. Not available until after play.
     *
     * @public
     * @returns {String}
     */
    self.getQuality = function () {
      if (!player || !player.getPlaybackQuality) {
        return;
      }

      var quality = player.getPlaybackQuality();
      return quality === 'unknown' ? undefined : quality;
    };

    /**
     * Set current playback quality. Not available until after play.
     * Listen to event "qualityChange" to check if successful.
     *
     * @public
     * @params {String} [quality]
     */
    self.setQuality = function (quality) {
      if (!player || !player.setPlaybackQuality) {
        return;
      }

      player.setPlaybackQuality(quality);
    };

    /**
     * Starts the video.
     *
     * @public
     */
    self.play = function () {
      if (!player || !player.playVideo) {
        return;
      }

      player.playVideo();
    };

    /**
     * Pauses the video.
     *
     * @public
     */
    self.pause = function () {
      if (!player || !player.pauseVideo) {
        return;
      }

      player.pauseVideo();
    };

    /**
     * Seek video to given time.
     *
     * @public
     * @param {Number} time
     */
    self.seek = function (time) {
      if (!player || !player.seekTo) {
        return;
      }

      player.seekTo(time, true);
    };

    /**
     * Get elapsed time since video beginning.
     *
     * @public
     * @returns {Number}
     */
    self.getCurrentTime = function () {
      if (!player || !player.getCurrentTime) {
        return;
      }

      return player.getCurrentTime();
    };

    /**
     * Get total video duration time.
     *
     * @public
     * @returns {Number}
     */
    self.getDuration = function () {
      if (!player || !player.getDuration) {
        return;
      }

      return player.getDuration();
    };

    /**
     * Get percentage of video that is buffered.
     *
     * @public
     * @returns {Number} Between 0 and 100
     */
    self.getBuffered = function () {
      if (!player || !player.getVideoLoadedFraction) {
        return;
      }

      return player.getVideoLoadedFraction() * 100;
    };

    /**
     * Turn off video sound.
     *
     * @public
     */
    self.mute = function () {
      if (!player || !player.mute) {
        return;
      }

      player.mute();
    };

    /**
     * Turn on video sound.
     *
     * @public
     */
    self.unMute = function () {
      if (!player || !player.unMute) {
        return;
      }

      player.unMute();
    };

    /**
     * Check if video sound is turned on or off.
     *
     * @public
     * @returns {Boolean}
     */
    self.isMuted = function () {
      if (!player || !player.isMuted) {
        return;
      }

      return player.isMuted();
    };

    /**
     * Returns the video sound level.
     *
     * @public
     * @returns {Number} Between 0 and 100.
     */
    self.getVolume = function () {
      if (!player || !player.getVolume) {
        return;
      }

      return player.getVolume();
    };

    /**
     * Set video sound level.
     *
     * @public
     * @param {Number} level Between 0 and 100.
     */
    self.setVolume = function (level) {
      if (!player || !player.setVolume) {
        return;
      }

      player.setVolume(level);
    };

    // Respond to resize events by setting the YT player size.
    self.on('resize', function () {
      if (!player) {
        // Player isn't created yet. Try again.
        create();
        return;
      }

      // Use as much space as possible
      $wrapper.css({
        width: '100%',
        height: '100%'
      });

      var width = $wrapper[0].clientWidth;
      var height = options.fit ? $wrapper[0].clientHeight : (width * (9/16));

      // Set size
      $wrapper.css({
        width: width + 'px',
        height: height + 'px'
      });

      player.setSize(width, height);
    });
  }

  /**
   * Check to see if we can play any of the given sources.
   *
   * @public
   * @static
   * @param {Array} sources
   * @returns {Boolean}
   */
  YouTube.canPlay = function (sources) {
    return getId(sources[0].path);
  };

  /**
   * Find id of YouTube video from given URL.
   *
   * @private
   * @param {String} url
   * @returns {String} YouTube video identifier
   */
  var getId = function (url) {
    var matches = url.match(/^https?:\/\/(www.youtube.com|youtu.be|y2u.be)\/(.+=)?(\S+)$/i);
    if (matches && matches[3]) {
      return matches[3];
    }
  };

  /**
   * Load the IFrame Player API asynchronously.
   */
  var loadAPI = function (loaded) {
    if (window.onYouTubeIframeAPIReady !== undefined) {
      // Someone else is loading, hook in
      var original = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function (id) {
        loaded(id);
        original(id);
      };
    }
    else {
      // Load the API our self
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = loaded;
    }
  };

  /** @constant {Object} */
  var LABELS = {
    highres: '2160p',
    hd1440: '1440p',
    hd1080: '1080p',
    hd720: '720p',
    large: '480p',
    medium: '360p',
    small: '240p',
    tiny: '144p',
    auto: 'Auto'
  };

  /** @private */
  var numInstances = 0;

  // Extract the current origin (used for security)
  var ORIGIN = window.location.href.match(/http[s]?:\/\/[^\/]+/)[0];

  return YouTube;
})(H5P.jQuery);

// Register video handler
H5P.videoHandlers = H5P.videoHandlers || [];
H5P.videoHandlers.push(H5P.VideoYouTube);
