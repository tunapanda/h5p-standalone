H5P.InteractiveVideo = (function ($, EventDispatcher, DragNBar, Interaction) {

  /**
   * Initialize a new interactive video.
   *
   * @class H5P.InteractiveVideo
   * @extends H5P.EventDispatcher
   * @param {Object} params
   * @param {number} id
   * @param {Object} contentData
   */
  function InteractiveVideo(params, id, contentData) {
    var self = this;

    // Inheritance
    H5P.EventDispatcher.call(self);

    // Keep track of content ID
    self.contentId = id;

    // Insert default options
    self.options = $.extend({ // Deep is not used since editor uses references.
      video: {},
      assets: {}
    }, params.interactiveVideo);

    // Add default title
    if (!self.options.video.title) {
      self.options.video.title = 'Interactive Video';
    }

    // Set default splash options
    self.startScreenOptions = $.extend({
      hideStartTitle: false,
      shortStartDescription: ''
    }, self.options.video.startScreenOptions);

    // Overriding
    self.override = params.override;

    // Translated UI text defaults
    self.l10n = $.extend({
      interaction: 'Interaction',
      play: 'Play',
      pause: 'Pause',
      mute: 'Mute',
      quality: 'Video quality',
      unmute: 'Unmute',
      fullscreen: 'Fullscreen',
      exitFullscreen: 'Exit fullscreen',
      summary: 'Summary',
      bookmarks: 'Bookmarks',
      defaultAdaptivitySeekLabel: 'Continue'
    }, params.l10n);

    // Make it possible to restore from previous state
    if (contentData &&
        contentData.previousState !== undefined &&
        contentData.previousState.progress !== undefined &&
        contentData.previousState.answers !== undefined) {
      self.previousState = contentData.previousState;
    }

    // Listen for resize events to make sure we cover our container.
    self.on('resize', function () {
      self.resize();
    });

    // Detect whether to add interactivies or just display a plain video.
    self.justVideo = navigator.userAgent.match(/iPhone|iPod/i) ? true : false;

    // Start up the video player
    self.video = H5P.newRunnable({
      library: 'H5P.Video 1.1',
      params: {
        sources: self.options.video.files,
        controls: self.justVideo,
        fit: false,
        poster: self.options.video.poster
      }
    }, self.contentId, undefined, undefined, {parent: self});

    // Listen for video events
    if (self.justVideo) {
      self.video.on('loaded', function (event) {
        // Make sure it fits
        self.trigger('resize');
      });

      // Do nothing more if we're just displaying a video
      return;
    }

    self.video.on('loaded', function (event) {
      // Update IV player UI
      self.loaded();
    });

    self.video.on('error', function (event) {
      // Make sure splash screen is removed so the error is visible.
      self.removeSplash();
    });

    // We need to initialize some stuff the first time the video plays
    var firstPlay = true;
    self.video.on('stateChange', function (event) {

      if (!self.controls) {
        // Add controls if they're missing
        self.addControls();
        self.trigger('resize');
      }

      var state = event.data;
      if (self.currentState === InteractiveVideo.SEEKING) {
        return; // Prevent updateing UI while seeking
      }

      switch (state) {
        case H5P.Video.ENDED:
          self.currentState = H5P.Video.ENDED;
          self.controls.$play.addClass('h5p-pause').attr('title', self.l10n.play);
          self.timeUpdate(self.video.getCurrentTime());
          self.controls.$currentTime.html(self.controls.$totalTime.html());

          self.complete();
          break;

        case H5P.Video.PLAYING:
          if (firstPlay) {
            firstPlay = false;

            // Qualities might not be available until after play.
            self.addQualityChooser();

            // Make sure splash screen is removed.
            self.removeSplash();

            // Make sure we track buffering of the video.
            self.startUpdatingBufferBar();
          }

          self.currentState = H5P.Video.PLAYING;
          self.controls.$play.removeClass('h5p-pause').attr('title', self.l10n.pause);
          self.timeUpdate(self.video.getCurrentTime());
          break;

        case H5P.Video.PAUSED:
          self.currentState = H5P.Video.PAUSED;
          self.controls.$play.addClass('h5p-pause').attr('title', self.l10n.play);
          self.timeUpdate(self.video.getCurrentTime());
          break;

        case H5P.Video.BUFFERING:
          self.currentState = H5P.Video.BUFFERING;

          // Make sure splash screen is removed.
          self.removeSplash();

          // Make sure we track buffering of the video.
          self.startUpdatingBufferBar();

          // Remove interactions while buffering
          self.timeUpdate(-1);
          break;
      }
    });

    self.video.on('qualityChange', function (event) {
      var quality = event.data;
      if (self.controls.$qualityChooser) {
        // Update quality selector
        self.controls.$qualityChooser.find('li').removeClass('h5p-selected').filter('[data-quality="' + quality + '"]').addClass('h5p-selected');
      }
    });

    self.on('exitFullScreen', function () {
      // Close dialog
      if (self.dnb && self.dnb.dialog) {
        self.dnb.dialog.close();
      }
    });

    // Initialize interactions
    self.interactions = [];
    if (self.options.assets.interactions) {
      for (var i = 0; i < self.options.assets.interactions.length; i++) {
        this.initInteraction(i);
      }
    }
  }

  // Inheritance
  InteractiveVideo.prototype = Object.create(H5P.EventDispatcher.prototype);
  InteractiveVideo.prototype.constructor = InteractiveVideo;

  /**
   * Returns the current state of the interactions
   *
   * @returns {Object}
   */
  InteractiveVideo.prototype.getCurrentState = function () {
    var self = this;

    if (!self.video.play) {
      return; // Missing video
    }

    var state = {
      progress: self.video.getCurrentTime(),
      answers: []
    };

    for (var i = 0; i < self.interactions.length; i++) {
      state.answers[i] = self.interactions[i].getCurrentState();
    }

    if (state.progress) {
      return state;
    }
  };

  /**
   * Removes splash screen.
   */
   InteractiveVideo.prototype.removeSplash = function () {
    if (this.$splash === undefined) {
      return;
    }

    this.$splash.remove();
    delete this.$splash;
  };

  /**
   * Attach interactive video to DOM element.
   *
   * @param {H5P.jQuery} $container
   */
  InteractiveVideo.prototype.attach = function ($container) {
    var that = this;
    this.setActivityStarted();
    this.$container = $container;

    $container.addClass('h5p-interactive-video').html('<div class="h5p-video-wrapper"></div><div class="h5p-controls"></div>');

    // Font size is now hardcoded, since some browsers (At least Android
    // native browser) will have scaled down the original CSS font size by the
    // time this is run. (It turned out to have become 13px) Hard coding it
    // makes it be consistent with the intended size set in CSS.
    this.fontSize = 16;
    this.width = 640; // parseInt($container.css('width')); // Get width in px

    // Video with interactions
    this.$videoWrapper = $container.children('.h5p-video-wrapper');
    this.attachVideo(this.$videoWrapper);

    if (this.justVideo) {
      this.$videoWrapper.find('video').css('minHeight', '200px');
      $container.children(':not(.h5p-video-wrapper)').remove();
      return;
    }

    // Controls
    this.$controls = $container.children('.h5p-controls').hide();

    if (this.editor === undefined) {
      this.dnb = new DragNBar([], this.$videoWrapper, this.$container, {disableEditor: true});
      // Pause video when opening dialog
      this.dnb.dialog.on('open', function () {
        // Keep track of last state
        that.lastState = that.currentState;

        if (that.currentState !== H5P.Video.PAUSED && that.currentState !== H5P.Video.ENDED) {
          // Pause video
          that.video.pause();
        }
      });

      // Resume playing when closing dialog
      this.dnb.dialog.on('close', function () {
        if (that.lastState !== H5P.Video.PAUSED && that.lastState !== H5P.Video.ENDED) {
          that.video.play();
        }
      });
    }
    else {
      that.on('dnbEditorReady', function () {
        that.dnb = that.editor.dnb;
        that.dnb.dialog.disableOverlay = true;
      });
    }

    if (this.currentState === InteractiveVideo.LOADED) {
      if (!this.video.pressToPlay) {
        this.addControls();
      }
      if (this.previousState !== undefined) {
        this.video.seek(this.previousState.progress);
      }
    }
    this.currentState = InteractiveVideo.ATTACHED;
  };

  /**
   * Attach the video to the given wrapper.
   *
   * @param {H5P.jQuery} $wrapper
   */
  InteractiveVideo.prototype.attachVideo = function ($wrapper) {
    var that = this;

    this.video.attach($wrapper);
    if (this.justVideo) {
      return;
    }

    this.$overlay = $('<div class="h5p-overlay h5p-ie-transparent-background"></div>').appendTo($wrapper);

    if (this.editor === undefined && !this.video.pressToPlay && this.video.play) {
      this.$splash = $(
        '<div class="h5p-splash-wrapper">' +
          '<div class="h5p-splash-outer">' +
            '<div class="h5p-splash" role="button" tabindex="1" title="' + this.l10n.play + '">' +
              '<div class="h5p-splash-main">' +
                '<div class="h5p-splash-main-outer">' +
                  '<div class="h5p-splash-main-inner">' +
                    '<div class="h5p-splash-play-icon"></div>' +
                    '<div class="h5p-splash-title">' + this.options.video.title + '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<div class="h5p-splash-footer">' +
                '<div class="h5p-splash-footer-holder">' +
                  '<div class="h5p-splash-description">' + that.startScreenOptions.shortStartDescription + '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>')
        .click(function () {
          that.video.play();
        })
        .appendTo(this.$overlay)
        .find('.h5p-interaction-button')
          .click(function () {
            return false;
          })
          .end();

      // Add play functionality and title to play icon
      $('.h5p-splash', this.$splash).keydown(function (e) {
        var code = e.which;
        // 32 = Space
        if (code === 32) {
          that.video.play();
          e.preventDefault();
        }
      });

      if (this.startScreenOptions.shortStartDescription === undefined || !this.startScreenOptions.shortStartDescription.length) {
        this.$splash.addClass('no-description');
      }

      if (this.startScreenOptions.hideStartTitle) {
        this.$splash.addClass('no-title');
      }
    }
  };

  /**
   * Update and show controls for the interactive video.
   */
  InteractiveVideo.prototype.addControls = function () {
    this.attachControls(this.$controls.show());

    var duration = this.video.getDuration();
    var time = InteractiveVideo.humanizeTime(duration);
    this.controls.$totalTime.html(time);
    this.controls.$slider.slider('option', 'max', duration);

    // Set correct margins for timeline
    this.controls.$slider.parent().css({
      marginLeft: this.$controls.children('.h5p-controls-left').width(),
      marginRight: this.$controls.children('.h5p-controls-right').width()
    });
    this.controls.$currentTime.html(InteractiveVideo.humanizeTime(0));

    // Add dots above seeking line.
    this.addSliderInteractions();

    // Add bookmarks
    this.addBookmarks();

    this.trigger('controls');
  };

  /**
   * Prepares the IV for playing.
   */
  InteractiveVideo.prototype.loaded = function () {
    var that = this;

    // Get duration
    var duration = this.video.getDuration();

    // Determine how many percentage one second is.
    this.oneSecondInPercentage = (100 / this.video.getDuration());

    duration = Math.floor(duration);

    if (this.editor !== undefined) {
      var interactions = findField('interactions', this.editor.field.fields);

      // Set max/min for editor duration fields
      var durationFields = findField('duration', interactions.field.fields).fields;
      durationFields[0].max = durationFields[1].max = duration;
      durationFields[0].min = durationFields[1].min = 0;

      // Set max value for adaptive seeking timecodes
      var adaptivityFields = findField('adaptivity', interactions.field.fields).fields;
      for (var i = 0; i < adaptivityFields.length; i++) {
        findField('seekTo', adaptivityFields[i].fields).max = duration;
      }
    }

    // Add summary interaction
    if (this.hasMainSummary()) {
      var displayAt = duration - this.options.summary.displayAt;
      if (displayAt < 0) {
        displayAt = 0;
      }

      if (this.options.assets.interactions === undefined) {
        this.options.assets.interactions = [];
      }

      this.options.assets.interactions.push({
        action: this.options.summary.task,
        x: 80,
        y: 80,
        duration: {
          from: displayAt,
          to: duration
        },
        displayType: 'button',
        bigDialog: true,
        className: 'h5p-summary-interaction h5p-end-summary',
        label: '<p>' + this.l10n.summary + '</p>',
        mainSummary: true
      });
      this.initInteraction(this.options.assets.interactions.length - 1);
    }

    if (this.currentState === InteractiveVideo.ATTACHED) {
      if (this.previousState !== undefined) {
        this.video.seek(this.previousState.progress);
      }
      if (!this.video.pressToPlay) {
        this.addControls();
      }

      this.trigger('resize');
    }

    this.currentState = InteractiveVideo.LOADED;
  };

  /**
   * Initialize interaction at the given index.
   *
   * @param {number} index
   * @returns {Interaction}
   */
  InteractiveVideo.prototype.initInteraction = function (index) {
    var self = this;
    var parameters = self.options.assets.interactions[index];

    if (self.override && self.override.overrideButtons) {
      // Extend interaction parameters
      H5P.jQuery.extend(parameters.action.params.behaviour, {
        enableSolutionsButton: self.override.overrideShowSolutionButton ? true : false,
        enableRetry: self.override.overrideRetry ? true : false
      });
    }

    var previousState;
    if (self.previousState !== undefined && self.previousState.answers !== undefined && self.previousState.answers[index] !== null) {
      previousState = self.previousState.answers[index];
    }

    var interaction = new Interaction(parameters, self, previousState);
    interaction.on('display', function (event) {
      var $interaction = event.data;
      $interaction.appendTo(self.$overlay);

      // Make sure the interaction does not overflow videowrapper.
      if ($interaction.position().top + $interaction.height() > self.$videoWrapper.height()) {
        $interaction.css('top', ((self.$videoWrapper.height() - $interaction.height()) / self.$videoWrapper.height() * 100) + '%');
      }

      if (self.currentState === H5P.Video.PLAYING && interaction.pause()) {
        self.video.pause();
      }

      setTimeout(function () {
        interaction.positionLabel(self.$videoWrapper.width());
      }, 0);
    });
    interaction.on('xAPI', function(event) {
      if ($.inArray(event.getVerb(), ['completed', 'answered']) ||
          event.getMaxScore() ||
          event.getScore() !== null) {
        event.setVerb('answered');
        if (interaction.isMainSummary()) {
          self.complete();
        }
      }
    });

    self.interactions.push(interaction);

    return interaction;
  };

  /**
   * Checks if the interactive video should have summary task scheduled at
   * the end of the video.
   *
   * This is the summary created in the summary tab of the editor.
   *
   * @returns {boolean}
   *   true if this interactive video has a summary
   *   false otherwise
   */
  InteractiveVideo.prototype.hasMainSummary = function() {
    var summary = this.options.summary;
    return !(summary === undefined ||
        summary.displayAt === undefined ||
        summary.task === undefined ||
        summary.task.params === undefined ||
        summary.task.params.summaries === undefined ||
        !summary.task.params.summaries.length ||
        summary.task.params.summaries[0].summary === undefined ||
        !summary.task.params.summaries[0].summary.length);
  };

  /**
   * Puts the tiny cute balls above the slider / seek bar.
   */
  InteractiveVideo.prototype.addSliderInteractions = function () {
    // Remove old dots
    this.controls.$interactionsContainer.children().remove();

    // Add new dots
    for (var i = 0; i < this.interactions.length; i++) {
      this.interactions[i].addDot(this.controls.$interactionsContainer);
    }
  };

  /**
   * Puts all the cool narrow lines around the slider / seek bar.
   */
  InteractiveVideo.prototype.addBookmarks = function () {
    this.bookmarksMap = {};
    if (this.options.assets.bookmarks !== undefined) {
      for (var i = 0; i < this.options.assets.bookmarks.length; i++) {
        this.addBookmark(i);
      }
    }
  };

  /**
   * Puts a single cool narrow line around the slider / seek bar.
   *
   * @param {number} id
   * @param {number} tenth
   * @returns {H5P.jQuery}
   */
  InteractiveVideo.prototype.addBookmark = function (id, tenth) {
    var self = this;
    var bookmark = self.options.assets.bookmarks[id];

    // Avoid stacking of bookmarks.
    if (tenth === undefined) {
      tenth = Math.floor(bookmark.time * 10) / 10;
    }

    // Create bookmark element for the seek bar.
    var $bookmark = self.bookmarksMap[tenth] = $('<div class="h5p-bookmark" style="left:' + (bookmark.time * self.oneSecondInPercentage) + '%"><div class="h5p-bookmark-label"><div class="h5p-bookmark-text">' + bookmark.label + '</div></div></div>')
      .appendTo(self.controls.$bookmarksContainer)
      .data('id', id)
      .hover(function () {
        if (self.bookmarkTimeout !== undefined) {
          clearTimeout(self.bookmarkTimeout);
        }
        self.controls.$bookmarksContainer.children('.h5p-show').removeClass('h5p-show');
        $bookmark.addClass('h5p-show');
      }, function () {
        self.bookmarkTimeout = setTimeout(function () {
          $bookmark.removeClass('h5p-show');
        }, 2000);
      });

    // Set max size of label to the size of the controls to the right.
    $bookmark.find('.h5p-bookmark-label').css('maxWidth', parseInt(self.controls.$slider.parent().css('marginRight')) - 35);

    // Creat list if non-existent (note that it isn't allowed to have empty lists in HTML)
    if (self.controls.$bookmarksList === undefined) {
      self.controls.$bookmarksList = $('<ol></ol>')
        .insertAfter(self.controls.$bookmarksChooser.find('h3'));
    }

    // Create list element for bookmark
    var $li = $('<li role="button" tabindex="1">' + bookmark.label + '</li>')
      .click(function () {
        if (self.currentState !== H5P.Video.PLAYING) {
          $bookmark.mouseover().mouseout();
        }
        self.controls.$bookmarksChooser.removeClass('h5p-show');
        self.video.seek(bookmark.time);
      });

    // Insert bookmark in the correct place.
    var $next = self.controls.$bookmarksList.children(':eq(' + id + ')');
    if ($next.length !== 0) {
      $li.insertBefore($next);
    }
    else {
      $li.appendTo(self.controls.$bookmarksList);
    }

    // Listen for changes to our id.
    self.on('bookmarksChanged', function (event) {
      var index = event.data.index;
      var number = event.data.number;
      if (index === id && number < 0) {
        // We are removing this item.
        $li.remove();
        delete self.bookmarksMap[tenth];
        // self.off('bookmarksChanged');
      }
      else if (id >= index) {
        // We must update our id.
        id += number;
        $bookmark.data('id', id);
      }
    });

    // Tell others we have added a new bookmark.
    self.trigger('bookmarkAdded', {'bookmark': $bookmark});
    return $bookmark;
  };

  /**
   * Attach video controls to the given wrapper.
   *
   * @param {H5P.jQuery} $wrapper
   */
  InteractiveVideo.prototype.attachControls = function ($wrapper) {
    var that = this;

    $wrapper.html('<div class="h5p-controls-left"><a href="#" class="h5p-control h5p-play h5p-pause" title="' + that.l10n.play + '"></a><a href="#" class="h5p-control h5p-bookmarks" title="' + that.l10n.bookmarks + '"></a><div class="h5p-chooser h5p-bookmarks"><h3>' + that.l10n.bookmarks + '</h3></div></div><div class="h5p-controls-right"><a href="#" class="h5p-control h5p-fullscreen"  title="' + that.l10n.fullscreen + '"></a><a href="#" class="h5p-control h5p-quality h5p-disabled"  title="' + that.l10n.quality + '"></a><div class="h5p-chooser h5p-quality"><h3>' + that.l10n.quality + '</h3></div><a href="#" class="h5p-control h5p-volume"  title="' + that.l10n.mute + '"></a><div class="h5p-control h5p-time"><span class="h5p-current">0:00</span> / <span class="h5p-total">0:00</span></div></div><div class="h5p-control h5p-slider"><div class="h5p-interactions-container"></div><div class="h5p-bookmarks-container"></div><div></div></div>');
    this.controls = {};

    // Play/pause button
    this.controls.$play = $wrapper.find('.h5p-play').click(function () {
      if (that.controls.$play.hasClass('h5p-pause')) {
        that.video.play();
      }
      else {
        that.video.pause();
      }
      return false;
    });

    // Bookmark selector
    if ((this.options.assets.bookmarks === undefined || this.options.assets.bookmarks.length === 0) && this.editor === undefined) {
      // No bookmarks and no editor, remove button.
      $wrapper.find('.h5p-control.h5p-bookmarks').remove();
    }
    else {
      this.controls.$bookmarksChooser = $wrapper.find('.h5p-chooser.h5p-bookmarks');
      var $bcb = $wrapper.find('.h5p-control.h5p-bookmarks').click(function () {
        $bcb.toggleClass('h5p-active');
        that.controls.$bookmarksChooser.toggleClass('h5p-show');
        return false;
      });
    }

    if (this.editor === undefined) {
      // Fullscreen button
      this.controls.$fullscreen = $wrapper.find('.h5p-fullscreen').click(function () {
        that.toggleFullScreen();
        return false;
      });

      that.on('enterFullScreen', function () {
        if (that.$container !== undefined) {
          that.$container.parent('.h5p-content').css('height', '100%');
        }
        that.controls.$fullscreen.addClass('h5p-exit').attr('title', that.l10n.exitFullscreen);
        that.resizeInteractions();
      });
      that.on('exitFullScreen', function () {
        if (that.$container !== undefined) {
          that.$container.parent('.h5p-content').css('height', 'auto');
        }
        that.controls.$fullscreen.removeClass('h5p-exit').attr('title', that.l10n.fullscreen);
        that.resizeInteractions();
      });

      // Video quality selector
      this.controls.$qualityChooser = $wrapper.find('.h5p-chooser.h5p-quality');
      this.controls.$qualityButton = $wrapper.find('.h5p-control.h5p-quality').click(function () {
        if (!that.controls.$qualityButton.hasClass('h5p-disabled')) {
          that.controls.$qualityButton.toggleClass('h5p-active');
          that.controls.$qualityChooser.toggleClass('h5p-show');
        }
        return false;
      });

      this.addQualityChooser();
    }
    else {
      // Remove buttons in editor mode.
      $wrapper.find('.h5p-fullscreen').remove();
      $wrapper.find('.h5p-quality, .h5p-quality-chooser').remove();
    }

    if (H5P.canHasFullScreen === false) {
      $wrapper.find('.h5p-fullscreen').remove();
    }

    // Volume/mute button
    if (navigator.userAgent.indexOf('Android') === -1 && navigator.userAgent.indexOf('iPad') === -1) {
      this.controls.$volume = $wrapper.find('.h5p-volume').click(function () {
        if (that.controls.$volume.hasClass('h5p-muted')) {
          that.controls.$volume.removeClass('h5p-muted').attr('title', that.l10n.mute);
          that.video.unMute();
        }
        else {
          that.controls.$volume.addClass('h5p-muted').attr('title', that.l10n.unmute);
          that.video.mute();
        }
        return false;
      });
    }
    else {
      $wrapper.find('.h5p-volume').remove();
    }

    // Timer
    var $time = $wrapper.find('.h5p-time');
    this.controls.$currentTime = $time.children('.h5p-current');
    this.controls.$totalTime = $time.children('.h5p-total');

    // Timeline
    var $slider = $wrapper.find('.h5p-slider');
    this.controls.$slider = $slider.children(':last').slider({
      value: 0,
      step: 0.01,
      orientation: 'horizontal',
			range: 'min',
      max: 0,
      start: function () {
        if (that.currentState === InteractiveVideo.SEEKING) {
          return; // Prevent double start on touch devies!
        }

        that.lastState = (that.currentState === H5P.Video.ENDED ? H5P.Video.PLAYING : that.currentState);
        that.video.pause();
        that.currentState = InteractiveVideo.SEEKING;

        // Make sure splash screen is removed.
        that.removeSplash();
      },
      slide: function (e, ui) {
        // Update elapsed time
        that.controls.$currentTime.html(InteractiveVideo.humanizeTime(ui.value));
      },
      stop: function (e, ui) {
        that.currentState = that.lastState;
        that.video.seek(ui.value);
        if (that.lastState === H5P.Video.PLAYING) {
          that.video.play();
        }
        else {
          that.timeUpdate(ui.value);
        }
      }
    });

    // Slider bufferer
    this.controls.$buffered = $('<div class="h5p-buffered"></div>').prependTo(this.controls.$slider);

    // Slider containers
    this.controls.$interactionsContainer = $slider.find('.h5p-interactions-container');
    this.controls.$bookmarksContainer = $slider.find('.h5p-bookmarks-container');
  };

  /**
   * Add a dialog for selecting video quality.
   */
  InteractiveVideo.prototype.addQualityChooser = function () {
    var self = this;

    if (!this.video.getQualities) {
      return;
    }

    var qualities = this.video.getQualities();
    if (!qualities || this.controls.$qualityButton === undefined ||
        !this.controls.$qualityButton.hasClass('h5p-disabled')) {
      return;
    }

    var currentQuality = this.video.getQuality();

    var html = '';
    for (var i = 0; i < qualities.length; i++) {
      var quality = qualities[i];
      html += '<li role="button" tabIndex="1" data-quality="' + quality.name + '" class="' + (quality.name === currentQuality ? 'h5p-selected' : '') + '">' + quality.label + '</li>';
    }

    var $list = $('<ol>' + html + '</ol>').appendTo(this.controls.$qualityChooser);
    var $options = $list.children().click(function () {
      self.video.setQuality($(this).attr('data-quality'));
      self.controls.$qualityChooser.removeClass('h5p-show');
    });

    // Enable quality chooser button
    this.controls.$qualityButton.removeClass('h5p-disabled');
  };

  /**
   * Create loop that constantly updates the buffer bar
   */
  InteractiveVideo.prototype.startUpdatingBufferBar = function () {
    var self = this;
    if (self.bufferLoop) {
      return;
    }

    var updateBufferBar = function () {
      var buffered = self.video.getBuffered();
      if (buffered && self.controls.$buffered) {
        self.controls.$buffered.css('width', buffered + '%');
      }
      self.bufferLoop = setTimeout(updateBufferBar, 500);
    };
    updateBufferBar();
  };

  /**
   * Resize the video to fit the wrapper.
   */
  InteractiveVideo.prototype.resize = function () {
    var self = this;
    var fullscreenOn = this.$container.hasClass('h5p-fullscreen') || this.$container.hasClass('h5p-semi-fullscreen');

    // Resize the controls the first time we're visible
    if (!this.justVideo && this.controlsSized === undefined) {
      var left = this.$controls.children('.h5p-controls-left').width();
      var right = this.$controls.children('.h5p-controls-right').width();
      if (left || right) {
        this.controlsSized = true;

        // Set correct margins for timeline
        this.controls.$slider.parent().css({
          marginLeft: left,
          marginRight: right
        });
      }
    }

    this.$videoWrapper.css({
      marginTop: '',
      marginLeft: '',
      width: '',
      height: ''
    });
    this.video.trigger('resize');

    var width;
    var controlsHeight = this.justVideo ? 0 : this.$controls.height();
    var containerHeight = this.$container.height();
    if (fullscreenOn) {
      var videoHeight = this.$videoWrapper.height();

      if (videoHeight + controlsHeight <= containerHeight) {
        this.$videoWrapper.css('marginTop', (containerHeight - controlsHeight - videoHeight) / 2);
        width = this.$videoWrapper.width();
      }
      else {
        var ratio = this.$videoWrapper.width() / videoHeight;
        var height = containerHeight - controlsHeight;
        width = height * ratio;
        this.$videoWrapper.css({
          marginLeft: (this.$container.width() - width) / 2,
          width: width,
          height: height
        });
      }

      // Resize again to fit the new container size.
      this.video.trigger('resize');
    }
    else {
      width = this.$container.width();
    }

    // Set base font size. Don't allow it to fall below original size.
    this.$container.css('fontSize', (width > this.width) ? (this.fontSize * (width / this.width)) : this.fontSize + 'px');

    this.$container.find('.h5p-chooser').css('maxHeight', (containerHeight - controlsHeight) + 'px');

    // Resize start screen
    if (!this.editor) {
      this.resizeMobileView();
      if (this.$splash !== undefined) {
        this.resizeStartScreen();
      }
    }

    this.resizeInteractions();
  };

  /**
   * Determine if interactive video should be in mobile view.
   */
  InteractiveVideo.prototype.resizeMobileView = function () {
    // IV not init
    if (isNaN(this.currentState)) {
      return;
    }
    // Width to font size ratio threshold
    var widthToEmThreshold = 30;
    var ivWidth = this.$container.width();
    var fontSize = parseInt(this.$container.css('font-size'), 10);
    var widthToEmRatio = ivWidth / fontSize;
    if (widthToEmRatio < widthToEmThreshold) {
      // Resize interactions in mobile view
      this.resizeInteractions();

      if (!this.isMobileView) {
        this.$container.addClass('mobile');
        this.isMobileView = true;
        this.dnb.dialog.closeOverlay();
        this.recreateCurrentInteractions();
      }
    } else {
      if (this.isMobileView) {
        // Close dialog because we can not know if it will turn into a poster
        if (this.dnb && this.dnb.dialog) {
          this.dnb.dialog.close();
        }
        this.$container.removeClass('mobile');
        this.isMobileView = false;
        this.recreateCurrentInteractions();
      }
    }
  };

  /**
   * Resize all interactions.
   */
  InteractiveVideo.prototype.resizeInteractions = function () {
    // IV not init
    if (isNaN(this.currentState)) {
      return;
    }

    var self = this;
    this.interactions.forEach(function (interaction) {
      interaction.resizeInteraction();
      interaction.repositionToWrapper(self.$videoWrapper);
      interaction.positionLabel(self.$videoWrapper.width());
    });
  };

  /**
   * Recreate interactions
   */
  InteractiveVideo.prototype.recreateCurrentInteractions = function () {
    this.interactions.forEach(function (interaction) {
      interaction.reCreateInteraction();
    });
  };

  /**
   * Resizes the start screen.
   */
  InteractiveVideo.prototype.resizeStartScreen = function () {
    var descriptionSizeEm = 0.8;
    var titleSizeEm = 1.5;

    var playFontSizeThreshold = 10;

    var staticWidthToFontRatio = 50;
    var staticMobileViewThreshold = 510;

    var hasDescription = true;
    var hasTitle = true;

    // Scale up width to font ratio if one component is missing
    if (this.startScreenOptions.shortStartDescription === undefined ||
        !this.startScreenOptions.shortStartDescription.length) {
      hasDescription = false;
      if (this.startScreenOptions.hideStartTitle) {
        hasTitle = false;
        staticWidthToFontRatio = 45;
      }
    }

    var $splashDescription = $('.h5p-splash-description', this.$splash);
    var $splashTitle = $('.h5p-splash-title', this.$splash);
    var $tmpDescription = $splashDescription.clone()
      .css('position', 'absolute')
      .addClass('minimum-font-size')
      .appendTo($splashDescription.parent());
    var $tmpTitle = $splashTitle.clone()
      .css('position', 'absolute')
      .addClass('minimum-font-size')
      .appendTo($splashTitle.parent());
    var descriptionFontSizeThreshold = parseInt($tmpDescription.css('font-size'), 10);
    var titleFontSizeThreshold = parseInt($tmpTitle.css('font-size'), 10);

    // Determine new font size for splash screen from container width
    var containerWidth = this.$container.width();
    var newFontSize = parseInt(containerWidth / staticWidthToFontRatio, 10);

    if (!hasDescription) {
      if (hasTitle && newFontSize < descriptionFontSizeThreshold) {
        newFontSize = descriptionFontSizeThreshold;
      } else if (newFontSize < playFontSizeThreshold) {
        newFontSize = playFontSizeThreshold;
      }
    }

    // Determine if we should add mobile view
    if (containerWidth < staticMobileViewThreshold) {
      this.$splash.addClass('mobile');
    } else {
      this.$splash.removeClass('mobile');
    }

    // Minimum font sizes
    if (newFontSize * descriptionSizeEm < descriptionFontSizeThreshold) {
      $splashDescription.addClass('minimum-font-size');
    } else {
      $splashDescription.removeClass('minimum-font-size');
    }

    if (newFontSize * titleSizeEm < titleFontSizeThreshold) {
      $splashTitle.addClass('minimum-font-size');
    } else {
      $splashTitle.removeClass('minimum-font-size');
    }

    // Set new font size
    this.$splash.css('font-size', newFontSize);
    $tmpDescription.remove();
    $tmpTitle.remove();
  };

  /**
   * Toggle enter or exit fullscreen mode.
   */
  InteractiveVideo.prototype.toggleFullScreen = function () {
    var self = this;

    if (H5P.isFullscreen || this.$container.hasClass('h5p-fullscreen') || this.$container.hasClass('h5p-semi-fullscreen')) {
      // Cancel fullscreen
      if (H5P.exitFullScreen !== undefined && H5P.fullScreenBrowserPrefix !== undefined) {
        H5P.exitFullScreen();
      }
      else {
        // Use old system
        if (H5P.fullScreenBrowserPrefix === undefined) {
          // Click button to disable fullscreen
          $('.h5p-disable-fullscreen').click();
        }
        else {
          // Exit full screen
          if (H5P.fullScreenBrowserPrefix === '') {
            window.top.document.exitFullScreen();
          }
          else if (H5P.fullScreenBrowserPrefix === 'ms') {
            window.top.document.msExitFullscreen();
          }
          else {
            window.top.document[H5P.fullScreenBrowserPrefix + 'CancelFullScreen']();
          }
        }

        // Manually trigger event that updates fullscreen icon
        self.trigger('exitFullScreen');
      }
    }
    else {
      H5P.fullScreen(this.$container, this);

      if (H5P.exitFullScreen === undefined) {
        // Old system; manually trigger the event that updates the fullscreen icon
        self.trigger('enterFullScreen');
      }
    }

    // Resize all interactions
    this.resizeInteractions();
  };

  /**
   * Called when the time of the video changes.
   * Makes sure to update all UI elements.
   *
   * @param {number} time
   */
  InteractiveVideo.prototype.timeUpdate = function (time) {
    var self = this;

    // Scroll slider
    if (time > 0) {
      self.controls.$slider.slider('option', 'value', time);
    }

    // Some UI elements are updated every 10th of a second.
    var tenth = Math.floor(time * 10) / 10;
    if (tenth !== self.lastTenth) {
      // Check for bookmark
      if (self.bookmarksMap !== undefined && self.bookmarksMap[tenth] !== undefined) {
        // Show bookmark
        self.bookmarksMap[tenth].mouseover().mouseout();
      }
    }
    self.lastTenth = tenth;

    // Some UI elements are updated every second.
    var second = Math.floor(time);
    if (second !== self.lastSecond) {
      self.toggleInteractions(second);

      if (self.currentState === H5P.Video.PLAYING || self.currentState === H5P.Video.PAUSED) {
        // Update elapsed time
        self.controls.$currentTime.html(InteractiveVideo.humanizeTime(second));
      }
    }
    self.lastSecond = second;

    setTimeout(function () {
      if (self.currentState === H5P.Video.PLAYING) {
        self.timeUpdate(self.video.getCurrentTime());
      }
    }, 40); // 25 fps
  };

  /**
   * Call xAPI completed only once
   *
   * @public
   */
  InteractiveVideo.prototype.complete = function() {
    if (!this.isCompleted) {
      // Post user score. Max score is based on how many of the questions the user
      // actually answered
      this.triggerXAPIScored(this.getUsersScore(), this.getUsersMaxScore(), 'completed');
    }
    this.isCompleted = true;
  };

  /**
   * Gets the users score
   * @returns {number}
   */
  InteractiveVideo.prototype.getUsersScore = function() {
    var score = 0;

    for (var i = 0; i < this.interactions.length; i++) {
      if (this.interactions[i].score) {
        score += this.interactions[i].score;
      }
    }

    return score;
  };

  /**
   * Gets the users max score
   * @returns {number}
   */
  InteractiveVideo.prototype.getUsersMaxScore = function() {
    var maxScore = 0;

    for (var i = 0; i < this.interactions.length; i++) {
      if (this.interactions[i].maxScore) {
        maxScore += this.interactions[i].maxScore;
      }
    }

    return maxScore;
  };

  /**
   * Implements getScore from the question type contract
   * @returns {number}
   */
  InteractiveVideo.prototype.getScore = function() {
    return this.getUsersScore();
  };

  /**
   * Implements getMaxScore from the question type contract
   * @returns {number}
   */
  InteractiveVideo.prototype.getMaxScore = function() {
    return this.getUsersMaxScore();
  };

  /**
   * Implements showSolutions from the question type contract
   */
  InteractiveVideo.prototype.showSolutions = function() {
    // Intentionally left empty. Function makes IV pop up in CP summary
  };

  /**
   * Implements getTitle from the question type contract
   * @returns {string}
   */
  InteractiveVideo.prototype.getTitle = function() {
    return H5P.createTitle(this.options.video.title);
  };

  /**
   * Display and remove interactions for the given second.
   * @param {number} second
   */
  InteractiveVideo.prototype.toggleInteractions = function (second) {
    for (var i = 0; i < this.interactions.length; i++) {
      this.interactions[i].toggle(second);
      this.interactions[i].repositionToWrapper(this.$videoWrapper);
    }
  };

  /**
   * Start interactive video playback.
   */
  InteractiveVideo.prototype.play = function () {
    this.video.play();
  };

  /**
   * Seek interactive video to the given time
   * @param {number} time
   */
  InteractiveVideo.prototype.seek = function (time) {
    this.video.seek(time);
  };

  /**
   * Pause interactive video playback.
   */
  InteractiveVideo.prototype.pause = function () {
    if (this.video && this.video.pause) {
      this.video.pause();
    }
  };

  /**
   * Gather copyright information for the current content.
   *
   * @returns {H5P.ContentCopyrights}
   */
  InteractiveVideo.prototype.getCopyrights = function () {
    var self = this;
    var info = new H5P.ContentCopyrights();

    var videoRights, video = self.options.video.files[0];
    if (video.copyright !== undefined) {
      videoRights = new H5P.MediaCopyright(video.copyright, self.l10n);
    }

    if ((videoRights === undefined || videoRights.undisclosed()) && self.options.video.copyright !== undefined) {
      // Use old copyright info as fallback.
      videoRights = self.options.video.copyright;
    }
    info.addMedia(videoRights);

    for (var i = 0; i < self.interactions.length; i++) {
      var interactionCopyrights = self.interactions[i].getCopyrights();
      if (interactionCopyrights) {
        info.addContent(interactionCopyrights);
      }
    }

    return info;
  };

  // Additional player states
  /** @constant {number} */
  InteractiveVideo.SEEKING = 4;
  /** @constant {number} */
  InteractiveVideo.LOADED = 5;
  /** @constant {number} */
  InteractiveVideo.ATTACHED = 6;

  /**
   * Formats time in H:MM:SS.
   *
   * @public
   * @param {number} seconds
   * @returns {string}
   */
  InteractiveVideo.humanizeTime = function (seconds) {
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);

    minutes = minutes % 60;
    seconds = Math.floor(seconds % 60);

    var time = '';

    if (hours !== 0) {
      time += hours + ':';

      if (minutes < 10) {
        time += '0';
      }
    }

    time += minutes + ':';

    if (seconds < 10) {
      time += '0';
    }

    time += seconds;

    return time;
  };

  /**
   * Look for field with the given name in the given collection.
   * Only used by editor.
   *
   * @private
   * @param {string} name of field
   * @param {Array} fields collection to look in
   * @returns {Object} field object
   */
  var findField = function (name, fields) {
    for (var i = 0; i < fields.length; i++) {
      if (fields[i].name === name) {
        return fields[i];
      }
    }
  };

  return InteractiveVideo;
})(H5P.jQuery, H5P.EventDispatcher, H5P.DragNBar, H5P.InteractiveVideoInteraction);
