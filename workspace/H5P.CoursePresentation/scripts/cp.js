var H5P = H5P || {};

/**
 * Constructor.
 *
 * @param {object} params Start paramteres.
 * @param {int} id Content identifier
 * @param {function} editor
 *  Set if an editor is initiating this library
 * @returns {undefined} Nothing.
 */
H5P.CoursePresentation = function (params, id, extras) {
  H5P.EventDispatcher.call(this);
  var that = this;
  this.presentation = params.presentation;
  this.slides = this.presentation.slides;
  this.contentId = id;
  this.currentSlideIndex = 0;
  this.elementInstances = []; // elementInstances holds the instances for elements in an array.
  this.elementsAttached = []; // Map to keep track of which slide has attached elements
  this.slidesWithSolutions = [];
  this.hasAnswerElements = false;
  this.ignoreResize = false;

  if (extras.cpEditor) {
    this.editor = extras.cpEditor;
  }

  if (extras) {
    this.previousState = extras.previousState;
  }

  this.presentation.keywordListEnabled = (params.presentation.keywordListEnabled === undefined ? true : params.presentation.keywordListEnabled);

  this.l10n = H5P.jQuery.extend({
    slide: 'Slide',
    yourScore: 'Your score',
    maxScore: 'Max score',
    goodScore: 'Congratulations! You got @percent correct!',
    okScore: 'Nice effort! You got @percent correct!',
    badScore: 'You need to work more on this. You only got @percent correct...',
    total: 'TOTAL',
    showSolutions: 'Show solutions',
    summary: 'summary',
    retry: 'Retry',
    exportAnswers: 'Export text',
    close: 'Close',
    hideKeywords: 'Hide keywords list',
    showKeywords: 'Show keywords list',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit fullscreen',
    prevSlide: 'Previous slide',
    nextSlide: 'Next slide',
    currentSlide: 'Current slide',
    lastSlide: 'Last slide',
    solutionModeTitle: 'Exit solution mode',
    solutionModeText: 'Solution Mode',
    summaryMultipleTaskText: 'Multiple tasks',
    scoreMessage: 'You achieved:',
    shareFacebook: 'Share on Facebook',
    shareTwitter: 'Share on Twitter',
    goToSlide: 'Go to slide :num',
    solutionsButtonTitle: 'Show comments',
    printTitle: 'Print',
    printIngress: 'How would you like to print this presentation?',
    printAllSlides: 'Print all slides',
    printCurrentSlide: 'Print current slide'
  }, params.l10n !== undefined ? params.l10n : {});

  if (!!params.override) {
    this.overrideButtons = !!params.override.overrideButtons;
    this.overrideShowSolutionsButton = !!params.override.overrideShowSolutionButton;
    this.overrideRetry = !!params.override.overrideRetry;
    this.hideSummarySlide = !!params.override.hideSummarySlide;
  }
  this.on('resize', this.resize, this);

  this.on('printing', function (event) {
    that.ignoreResize = !event.data.finished;

    if (event.data.finished) {
      that.resize();
    }
    else if (event.data.allSlides) {
      that.attachAllElements();
    }
  });
};

H5P.CoursePresentation.prototype = Object.create(H5P.EventDispatcher.prototype);
H5P.CoursePresentation.prototype.constructor = H5P.CoursePresentation;

/**
 * @public
 */
H5P.CoursePresentation.prototype.getCurrentState = function () {
  var state = this.previousState ? this.previousState : {};
  state.progress = this.$current.index();
  if (!state.answers) {
    state.answers = [];
  }
  if (!state.answered) {
    state.answered = [];
  }

  // Get answers and answered
  for (var slide = 0; slide < this.elementInstances.length; slide++) {
    state.answered[slide] = this.progressbarParts[slide].children('.h5p-progressbar-part-has-task').hasClass('h5p-answered');
    if (this.elementInstances[slide]) {
      for (var element = 0; element < this.elementInstances[slide].length; element++) {
        var instance = this.elementInstances[slide][element];
        if (instance.getCurrentState instanceof Function ||
            typeof instance.getCurrentState === 'function') {
          if (!state.answers[slide]) {
            state.answers[slide] = [];
          }
          state.answers[slide][element] = instance.getCurrentState();
        }
      }
    }
  }

  return state;
};

/**
 * Render the presentation inside the given container.
 *
 * @param {H5P.jQuery} $container Container for this presentation.
 * @returns {undefined} Nothing.
 */
H5P.CoursePresentation.prototype.attach = function ($container) {
  var that = this;
  this.setActivityStarted();

  var html =
          '<div class="h5p-wrapper" tabindex="0">' +
          '  <div class="h5p-box-wrapper">' +
          '    <div class="h5p-presentation-wrapper">' +
          '      <div class="h5p-keywords-wrapper"></div>' +
          '      <div class="h5p-slides-wrapper"></div>' +
          '    </div>' +
          '  </div>' +
          '  <div class="h5p-progressbar"></div>' +
          '  <div class="h5p-footer"></div>' +
          '</div>';

  $container.addClass('h5p-course-presentation').html(html);

  //Detect ie version
  var ie = (function () {
    var undef;
    var v = 3;
    var div = document.createElement('div');
    var all = div.getElementsByTagName('i');

    while (
      div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i>< ![endif]-->',
        all[0]
      );

    return v > 4 ? v : undef;

  }());

  if (ie <= 9) {
    $container.addClass('old-ie-browser');
  }

  if (window.navigator.userAgent.indexOf('MSIE 8.0') !== -1) {
    $container.find('.h5p-box-wrapper').css({
      border: '1px solid #a9a9a9',
      boxSizing: 'border-box'
    });
  }

  this.$container = $container;
  this.$wrapper = $container.children('.h5p-wrapper').focus(function () {
    that.initKeyEvents();
  }).blur(function () {
    H5P.jQuery('body').unbind('keydown', that.keydown);
    delete that.keydown;
  }).click(function (event) {
    var $target = H5P.jQuery(event.target);
    if (!$target.is('input, textarea') && !that.editor) {
      // Add focus to the wrapper so that it may capture keyboard events
      that.$wrapper.focus();
    }

    if (that.keywordsClicked) {
      that.keywordsClicked = false;
    }
    else if (that.presentation.keywordListEnabled &&
            !that.presentation.keywordListAlwaysShow &&
            that.presentation.keywordListAutoHide) {
      that.hideKeywords();
    }
  });

  // Get intended base width from CSS.
  this.width = parseInt(this.$wrapper.css('width'));
  this.height = parseInt(this.$wrapper.css('height'));
  this.ratio = 16/9;
  // Intended base font size cannot be read from CSS, as it might be modified
  // by mobile browsers already. (The Android native browser does this.)
  this.fontSize = 16;

  this.$boxWrapper = this.$wrapper.children('.h5p-box-wrapper');
  var $presentationWrapper = this.$boxWrapper.children('.h5p-presentation-wrapper');
  this.$slidesWrapper = $presentationWrapper.children('.h5p-slides-wrapper');
  this.$keywordsWrapper = $presentationWrapper.children('.h5p-keywords-wrapper');
  this.$progressbar = this.$wrapper.children('.h5p-progressbar');
  this.$footer = this.$wrapper.children('.h5p-footer');

  this.initKeywords = (this.presentation.keywordListEnabled === undefined || this.presentation.keywordListEnabled === true || this.editor !== undefined);
  this.isSolutionMode = false;

  // Create keywords html
  var keywords = '';
  var foundKeywords = false;
  var first, slide, $slide;
  for (var i = 0; i < this.slides.length; i++) {
    slide = this.slides[i];
    $slide = H5P.jQuery(H5P.CoursePresentation.createSlide(slide)).appendTo(this.$slidesWrapper);
    first = i === 0;

    if (first) {
      this.$current = $slide.addClass('h5p-current');
    }

    this.addElements(slide, $slide, i);

    if (!foundKeywords && slide.keywords !== undefined && slide.keywords.length) {
      foundKeywords = true;
    }
    if (this.initKeywords) {
      keywords += this.keywordsHtml(slide.keywords, first);
    }
  }

  // Determine if summary slide should be added
  var $summarySlide;
  this.showSummarySlide = false;

  if (this.hideSummarySlide) {
    this.showSummarySlide = !this.hideSummarySlide;
  } else {
    // Check for task
    this.slidesWithSolutions.forEach(function (slide) {
      that.showSummarySlide = slide.length;
    });
  }

  var summarySlideData = [];
  if ((this.editor === undefined) && (this.showSummarySlide || this.hasAnswerElements)) {
    summarySlideData = {
      elements: [],
      keywords: []
    };
    this.slides.push(summarySlideData);

    slide = this.slides[this.slides.length - 1];
    $slide = H5P.jQuery(H5P.CoursePresentation.createSlide(slide)).appendTo(this.$slidesWrapper);

    this.addElements(slide, $slide, i);

    if (!foundKeywords && slide.keywords !== undefined && slide.keywords.length) {
      foundKeywords = true;
    }
    if (this.initKeywords) {
      keywords += this.keywordsHtml(slide.keywords, first);
    }

    $slide.addClass('h5p-summary-slide');
    $summarySlide = H5P.jQuery('.h5p-summary-slide');
  }

  if (!foundKeywords && this.editor === undefined) {
    this.initKeywords = false; // Do not show keywords pane if it's empty!
  }

  // Initialize keywords
  if (this.initKeywords) {
    this.initKeywordsList(keywords);
    if (this.presentation.keywordListAlwaysShow) {
      this.showKeywords();
    }
  }
  else {
    this.$keywordsWrapper.remove();
  }

  // Initialize touch events
  this.initTouchEvents();

  // init navigation line
  this.navigationLine = new H5P.CoursePresentation.NavigationLine(this);

  this.summarySlideObject = new H5P.CoursePresentation.SummarySlide(this, $summarySlide);

  if (this.previousState && this.previousState.progress) {
    this.jumpToSlide(this.previousState.progress);
  }
};

/**
 * Updates the feedback icons for the progres bar.
 *
 * @param slideScores
 */
H5P.CoursePresentation.prototype.setProgressBarFeedback = function (slideScores) {
  var that = this;

  if (slideScores !== undefined && slideScores) {
    // Set feedback icons for progress bar.
    slideScores.forEach(function (singleSlide) {
      if (that.progressbarParts[singleSlide.slide-1].children('.h5p-progressbar-part-has-task').hasClass('h5p-answered')) {
        if (singleSlide.score >= singleSlide.maxScore) {
          that.progressbarParts[singleSlide.slide-1]
            .children('.h5p-progressbar-part-has-task')
            .addClass('h5p-is-correct');
        } else {
          that.progressbarParts[singleSlide.slide-1]
            .children('.h5p-progressbar-part-has-task')
            .addClass('h5p-is-wrong');
        }
      }
    });
  } else {
    // Remove all feedback icons.
    that.progressbarParts.forEach(function (pbPart) {
      pbPart.children('.h5p-progressbar-part-has-task').removeClass('h5p-is-correct');
      pbPart.children('.h5p-progressbar-part-has-task').removeClass('h5p-is-wrong');
    });
  }
};

/**
 * Toggle keywords list on/off depending on current state
 */
H5P.CoursePresentation.prototype.toggleKeywords = function () {
  // Check state of keywords
  if (this.$keywordsWrapper.hasClass('h5p-open')) {
    // Already open, remove keywords
    this.hideKeywords();
  }
  else {
    // Open keywords
    this.showKeywords();
  }
};

/**
 * Hide keywords
 */
H5P.CoursePresentation.prototype.hideKeywords = function () {
  if (this.$keywordsButton !== undefined) {
    this.$keywordsButton.attr('title', this.l10n.showKeywords);
  }
  this.$keywordsWrapper.add(this.$keywordsButton).removeClass('h5p-open');
};

/**
 * Show keywords
 */
H5P.CoursePresentation.prototype.showKeywords = function () {
  if (this.$keywordsButton !== undefined) {
    this.$keywordsButton.attr('title', this.l10n.hideKeywords);
  }
  this.$keywordsWrapper.add(this.$keywordsButton).addClass('h5p-open');
};

/**
 * Change the background opacity of the keywords list.
 *
 * @param {Number} value 0 - 100
 */
H5P.CoursePresentation.prototype.setKeywordsOpacity = function (value) {
  var self = this;
  var color = self.$keywordsWrapper.css('background-color').split(/\(|\)|,/g);
  self.$keywordsWrapper.css('background-color', 'rgba(' + color[1] + ', ' + color[2] + ', ' + color[3] + ',' + (value / 100) + ')');
};

/**
 * Makes continuous text smaller if it does not fit inside its container.
 * Only works in view mode.
 *
 * @returns {undefined}
 */
H5P.CoursePresentation.prototype.fitCT = function () {
  if (this.editor !== undefined) {
    return;
  }

  this.$current.find('.h5p-ct').each(function () {
    var percent = 100;
    var $ct = H5P.jQuery(this);
    var parentHeight = $ct.parent().height();
    while ($ct.outerHeight() > parentHeight) {
      percent--;
      $ct.css({
        fontSize: percent + '%',
        lineHeight: (percent + 65) + '%'
      });

      if (percent < 0) {
        break; // Just in case.
      }
    }
  });
};

/**
 * Resize handling.
 *
 * @param {Boolean} fullscreen
 * @returns {undefined}
 */
H5P.CoursePresentation.prototype.resize = function () {
  var fullscreenOn = H5P.$body.hasClass('h5p-fullscreen') || H5P.$body.hasClass('h5p-semi-fullscreen');

  if (this.ignoreResize) {
    return;
  }

  // Fill up all available width
  this.$wrapper.css('width', 'auto');
  var width = this.$container.width();
  var style = {};

  if (fullscreenOn) {
    var maxHeight = this.$container.height();
    if (width / maxHeight > this.ratio) {
      // Top and bottom would be cut off so scale down.
      width = maxHeight * this.ratio;
      style.width = width + 'px';
    }
  }

  // TODO: Add support for -16 when content conversion script is created?
  var widthRatio = width / this.width;
  style.height = (width / this.ratio) + 'px';
  style.fontSize = (this.fontSize * widthRatio) + 'px';
  this.$wrapper.css(style);

  this.swipeThreshold = widthRatio * 100; // Default swipe threshold is 50px.

  // Resize elements
  var instances = this.elementInstances[this.$current.index()];
  if (instances !== undefined) {
    var slideElements = this.slides[this.$current.index()].elements;
    for (var i = 0; i < instances.length; i++) {
      var instance = instances[i];
      if ((instance.preventResize === undefined || instance.preventResize === false) && instance.$ !== undefined && !slideElements[i].displayAsButton) {
        H5P.trigger(instance, 'resize');
      }
    }
  }

  this.fitCT();
};

/**
 * Enter/exit full screen mode.
 */
H5P.CoursePresentation.prototype.toggleFullScreen = function () {
  if (H5P.isFullscreen || this.$container.hasClass('h5p-fullscreen') || this.$container.hasClass('h5p-semi-fullscreen')) {
    // Downscale fullscreen font size
    this.$footer.removeClass('footer-full-screen');
    this.$fullScreenButton.attr('title', this.l10n.fullscreen);

    // Cancel fullscreen
    if (H5P.exitFullScreen !== undefined && H5P.fullScreenBrowserPrefix !== undefined) {
      H5P.exitFullScreen();
    } else {
      // Use old system
      if (H5P.fullScreenBrowserPrefix === undefined) {
        // Click button to disable fullscreen
        H5P.jQuery('.h5p-disable-fullscreen').click();
      }
      else {
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
    }
  }
  else {
    // Rescale footer buttons
    this.$footer.addClass('footer-full-screen');

    this.$fullScreenButton.attr('title', this.l10n.exitFullscreen);
    H5P.fullScreen(this.$container, this);
    if (H5P.fullScreenBrowserPrefix === undefined) {
      // Hide disable full screen button. We have our own!
      H5P.jQuery('.h5p-disable-fullscreen').hide();
    }
  }
};

/**
 * Set focus.
 */
H5P.CoursePresentation.prototype.focus = function () {
  this.$wrapper.focus();
};

/**
 *
 * @param {jQuery} $keyword
 * @returns {undefined}
 */
H5P.CoursePresentation.prototype.keywordClick = function ($keyword) {
  if ($keyword.hasClass('h5p-current')) {
    return;
  }

  if (this.presentation.keywordListEnabled &&
      !this.presentation.keywordListAlwaysShow &&
      this.presentation.keywordListAutoHide) {
    // Auto-hide keywords list
    this.hideKeywords();
  }

  this.jumpToSlide($keyword.index());
};

/**
 * Add all element to the given slide.
 *
 * @param {Object} slide
 * @param {jQuery} $slide
 * @param {Number} index
 */
H5P.CoursePresentation.prototype.addElements = function (slide, $slide, index) {
  if (slide.elements === undefined) {
    return;
  }
  var attach = (this.editor !== undefined || index === 0 || index === 1);

  for (var i = 0; i < slide.elements.length; i++) {
    var element = slide.elements[i];
    var instance = this.addElement(element, $slide, index);
    if (attach) {
      // The editor requires all fields to be attached/rendered right away
      this.attachElement(element, instance, $slide, index);
    }
  }

  if (attach) {
    this.elementsAttached[index] = true;
    this.trigger('domChanged', {
      '$target': $slide,
      'library': 'H5P.CoursePresentation',
      'key': 'newSlide'
    }, {'bubbles': true, 'external': true});
  }
};

/**
 * Add element to the given slide and stores elements with solutions.
 *
 * @param {Object} element The Element to add.
 * @param {jQuery} $slide Optional, the slide. Defaults to current.
 * @param {Number} index Optional, the index of the slide we're adding elements to.
 * @returns {unresolved}
 */
H5P.CoursePresentation.prototype.addElement = function (element, $slide, index) {
  var instance;
  if (element.action === undefined) {
    // goToSlide, internal element
    instance = new H5P.CoursePresentation.GoToSlide(element.title, element.goToSlide, element.invisible, this);
  }
  else {
    // H5P library
    var defaults;
    if (this.overrideButtons) {
      defaults = {
        params: {
          behaviour: {
            enableSolutionsButton: this.overrideShowSolutionsButton,
            enableRetry: this.overrideRetry
          }
        }
      };
    }
    else {
      defaults = {
        params: {
        }
      };
    }

    var library;
    if (this.editor !== undefined) {
      // Clone the whole tree to avoid libraries accidentally changing params while running.
      library = H5P.jQuery.extend(true, {}, element.action, defaults);
    }
    else {
      // Add defaults
      library = H5P.jQuery.extend(true, element.action, defaults);
    }

    /* If library allows autoplay, control this from CP */
    if (library.params.autoplay) {
      library.params.autoplay = false;
      library.params.cpAutoplay = true;
    }

    var internalSlideId = this.elementInstances[index] ? this.elementInstances[index].length : 0;
    if (this.previousState && this.previousState.answers && this.previousState.answers[index] && this.previousState.answers[index][internalSlideId]) {
      // Restore previous state
      library.userDatas = {
        state: this.previousState.answers[index][internalSlideId]
      };
    }

    instance = H5P.newRunnable(library, this.contentId, undefined, undefined, {parent: this});
    if (instance.preventResize !== undefined) {
      instance.preventResize = true;
    }
  }

  if (this.elementInstances[index] === undefined) {
    this.elementInstances[index] = [instance];
  }
  else {
    this.elementInstances[index].push(instance);
  }

  if (this.checkForSolutions(instance)) {
    instance.coursePresentationIndexOnSlide = this.elementInstances[index].length - 1;
    if (this.slidesWithSolutions[index] === undefined) {
      this.slidesWithSolutions[index] = [];
    }
    this.slidesWithSolutions[index].push(instance);
  }

  //Check if it is a exportable text area
  if (instance.exportAnswers !== undefined && instance.exportAnswers) {
    this.hasAnswerElements = true;
  }

  return instance;
};

/**
 * Attach all element instances to slide.
 *
 * @param {jQuery} $slide
 * @param {Number} index
 */
H5P.CoursePresentation.prototype.attachElements = function ($slide, index) {
  if (this.elementsAttached[index] !== undefined) {
    return; // Already attached
  }

  var slide = this.slides[index];
  var instances = this.elementInstances[index];
  if (slide.elements !== undefined) {
    for (var i = 0; i < slide.elements.length; i++) {
      this.attachElement(slide.elements[i], instances[i], $slide, index);
    }
  }
  this.trigger('domChanged', {
      '$target': $slide,
      'library': 'H5P.CoursePresentation',
      'key': 'newSlide'
    }, {'bubbles': true, 'external': true});

  this.elementsAttached[index] = true;
};

/**
 * Attach element to slide container.
 *
 * @param {Object} element
 * @param {Object} instance
 * @param {jQuery} $slide
 * @param {Number} index
 * @returns {jQuery}
 */
H5P.CoursePresentation.prototype.attachElement = function (element, instance, $slide, index) {
  var that = this;
  var displayAsButton = (element.displayAsButton !== undefined && element.displayAsButton);

  var $elementContainer = H5P.jQuery('<div class="h5p-element' + (displayAsButton ? ' h5p-element-button-wrapper' : '') + '" style="left: ' + element.x + '%; top: ' + element.y + '%; width: ' + element.width + '%; height: ' + element.height + '%;"></div>').appendTo($slide);
  var isTransparent = element.backgroundOpacity === undefined || element.backgroundOpacity === 0;
  $elementContainer.toggleClass('h5p-transparent', isTransparent);
  var libTypePmz = '';
  if (displayAsButton) {
    var $buttonElement = H5P.jQuery('<div class="h5p-button-element"></div>');
    instance.attach($buttonElement);

    // Parameterize library name to use as html class.
    libTypePmz = element.action.library.split(' ')[0].toLowerCase().replace(/[\W]/g, '-');
    H5P.jQuery('<a href="#" class="h5p-element-button ' + libTypePmz + '-button"></a>').appendTo($elementContainer).click(function () {
      if (that.editor === undefined) {
        $buttonElement.appendTo(that.showPopup('', function () {
          that.pauseMedia(instance);
          $buttonElement.detach();
        }, libTypePmz).find('.h5p-popup-wrapper'));
        H5P.trigger(instance, 'resize');

        // Resize images to fit popup dialog
        if (H5P.Image !== undefined && instance instanceof H5P.Image) {
          that.resizePopupImage($buttonElement);
        }
      }
      return false;
    });
  }
  else {
    if (element.action && element.action.library) {
      libTypePmz = element.action.library.split(' ')[0].toLowerCase().replace(/[\W]/g, '-');
    }
    else {
      libTypePmz = 'other';
    }
    var outerElementLibrary = libTypePmz + '-outer-element';
    var $outerElementContainer = H5P.jQuery('<div>', {
      'class': 'h5p-element-outer ' + outerElementLibrary
    }).css({
      background: 'rgba(255,255,255,' + (element.backgroundOpacity === undefined ? 0 : element.backgroundOpacity / 100) + ')'
    }).appendTo($elementContainer);

    var $innerElementContainer = H5P.jQuery('<div>', {
      'class': 'h5p-element-inner'
    }).appendTo($outerElementContainer);

    instance.attach($innerElementContainer);
    if (element.action !== undefined && element.action.library.substr(0, 20) === 'H5P.InteractiveVideo') {
      $innerElementContainer.addClass('h5p-fullscreen').find('.h5p-fullscreen').remove();
    }
  }

  if (this.editor !== undefined) {
    // If we're in the H5P editor, allow it to manipulate the elementInstances
    this.editor.processElement(element, $elementContainer, index, instance);
  }
  else {
    if (element.solution) {
      this.addElementSolutionButton(element, instance, $elementContainer);
    }

    /* When in view mode, we need to know if there are any answer elements,
     * so that we can display the export answers button on the last slide */
    this.hasAnswerElements = this.hasAnswerElements || instance.exportAnswers !== undefined;
  }

  return $elementContainer;
};

/**
 * Resize image inside popup dialog.
 *
 * @public
 * @param {H5P.jQuery} $wrapper
 */
H5P.CoursePresentation.prototype.resizePopupImage = function ($wrapper) {
  // Get fontsize, needed for scale
  var fontSize = Number($wrapper.css('fontSize').replace('px', ''));
  var $img = $wrapper.find('img');

  /**
   * Resize image to fit inside popup.
   *
   * @private
   * @param {Number} width
   * @param {Number} height
   */
  var resize = function (width, height) {
    if ((height / fontSize) < 18.5) {
      return;
    }

    var ratio = (width / height);
    height = 18.5 * fontSize;
    $wrapper.css({
      width: height * ratio,
      height: height
    });
  };

  if (!$img.height()) {
    // Wait for image to load
    $img.one('load', function () {
      resize(this.width, this.height);
    });
  }
  else {
    // Image already loaded, resize!
    resize($img.width(), $img.height());
  }
};

/**
 * Adds a info button
 *
 * @param {Object} element Properties from params.
 * @param {Object} elementInstance Instance of the element.
 * @param {jQuery} $elementContainer Wrapper for the element.
 * @returns {undefined}
 */
H5P.CoursePresentation.prototype.addElementSolutionButton = function (element, elementInstance, $elementContainer) {
  var that = this;
  elementInstance.showCPComments = function () {
    var $stripHtml = H5P.jQuery('<div>');
    if (!$elementContainer.children('.h5p-element-solution').length && $stripHtml.html(element.solution).text().trim()) {
      H5P.jQuery('<a href="#" class="h5p-element-solution" title="' + that.l10n.solutionsButtonTitle + '"></a>')
        .click(function(event) {
          event.preventDefault();
          that.showPopup(element.solution);
        })
        .appendTo($elementContainer);
    }
  };
  if (element.alwaysDisplayComments !== undefined && element.alwaysDisplayComments) {
    elementInstance.showCPComments();
  }
};

/**
 * Displays a popup.
 *
 * @param {String} popupContent
 * @param {Function} [remove] Gets called before the popup is removed.
 * @returns {undefined}
 */
H5P.CoursePresentation.prototype.showPopup = function (popupContent, remove, classes) {
  var doNotClose;
  var self = this;

  /** @private */
  var close = function(event) {
    if (doNotClose) {
      // Prevent closing the popup
      doNotClose = false;
      return;
    }

    // Remove popup
    if (remove !== undefined) {
      remove();
    }
    event.preventDefault();
    $popup.remove();
  };

  var $popup = H5P.jQuery(
    '<div class="h5p-popup-overlay ' + (classes || 'h5p-popup-comment-field') + '">' +
      '<div class="h5p-popup-container">' +
        '<div class="h5p-popup-wrapper">' + popupContent + '</div>' +
        '<div role="button" tabindex="1" class="h5p-close-popup" title="' + this.l10n.close + '"></div>' +
      '</div>' +
    '</div>')
    .prependTo(this.$wrapper)
    .click(close)
    .find('.h5p-popup-container')
      .click(function () {
        doNotClose = true;
      })
      .end()
    .find('.h5p-close-popup')
      .click(close)
      .end();

  return $popup;
};

/**
 * Checks if an element has a solution
 *
 * @param {H5P library instance} elementInstance
 * @returns {Boolean}
 *  true if the element has a solution
 *  false otherwise
 */
H5P.CoursePresentation.prototype.checkForSolutions = function (elementInstance) {
  return (elementInstance.showSolutions !== undefined || elementInstance.showCPComments !== undefined);
};

/**
 * Generate html for the given keywords.
 *
 * @param {Array} keywords List of keywords.
 * @param {Boolean} first Indicates if this is the first slide.
 * @returns {String} HTML.
 */
H5P.CoursePresentation.prototype.keywordsHtml = function (keywords, first) {
  var html = '';
  if (keywords === undefined) {
    keywords = [];
  }
  for (var i = 0; i < keywords.length; i++) {
    var keyword = keywords[i];

    html += '<li class="h5p-keywords-li"><span>' + keyword.main + '</span>';

    if (keyword.subs !== undefined && keyword.subs.length) {
      html += '<ol class="h5p-keywords-ol">';
      for (var j = 0; j < keyword.subs.length; j++) {
        html += '<li class="h5p-keywords-li h5p-sub-keyword"><span>' + keyword.subs[j] + '</span></li>';
      }
      html += '</ol>';
    }
    html += '</li>';
  }
  if (html) {
    html = '<ol class="h5p-keywords-ol">' + html + '</ol>';
  }

  return '<li class="h5p-keywords-li' + (first ? ' h5p-current' : '') + '">' + html + '</li>';
};

/**
 * Initialize list of keywords
 *
 * @param {string} keywords Html string list entries for keywords
 */
H5P.CoursePresentation.prototype.initKeywordsList = function (keywords) {
  var that = this;

  this.$keywords = this.$keywordsWrapper.html('<ol class="h5p-keywords-ol">' + keywords + '</ol>').children('ol');
  this.$currentKeyword = this.$keywords.children('.h5p-current');

  this.$keywords.children('li').click(function () {
    that.keywordClick(H5P.jQuery(this));
  });

  this.setKeywordsOpacity(this.presentation.keywordListOpacity === undefined ? 90 : this.presentation.keywordListOpacity);

};

/**
 * Initialize key press events.
 *
 * @returns {undefined} Nothing.
 */
H5P.CoursePresentation.prototype.initKeyEvents = function () {
  if (this.keydown !== undefined) {
    return;
  }

  var that = this;
  var wait = false;

  this.keydown = function (event) {
    if (wait) {
      return;
    }

    // Left
    if (event.keyCode === 37 && that.previousSlide()) {
      wait = true;
    }

    // Right
    else if (event.keyCode === 39 && that.nextSlide()) {
      wait = true;
    }

    if (wait) {
      // Make sure we only change slide every 300ms.
      setTimeout(function () {
        wait = false;
      }, 300);
    }
  };

  H5P.jQuery('body').keydown(this.keydown);
};

/**
 * Initialize touch events
 *
 * @returns {undefined} Nothing.
 */
H5P.CoursePresentation.prototype.initTouchEvents = function () {
  var that = this;
  var startX, startY, lastX, prevX, nextX, scroll;
  var containerWidth = this.$slidesWrapper.width();
  var containerPercentageForScrolling = 0.6; // 60% of container width used to reach endpoints with touch
  var slidesNumbers = this.slides.length;
  var pixelsPerSlide = (containerWidth * containerPercentageForScrolling) / slidesNumbers;
  var startTime;
  var currentTime;
  var navigateTimer = 500; // 500ms before navigation popup starts.
  var isTouchJump = false;
  var nextSlide;
  var transform = function (value) {
    return {
      '-webkit-transform': value,
      '-moz-transform': value,
      '-ms-transform': value,
      'transform': value
    };
  };
  var reset = transform('');
  var getTranslateX = function ($element) {
    var prefixes = ['', '-webkit-', '-moz-', '-ms-'];
    for (var i = 0; i < prefixes.length; i++) {
      var matrix = $element.css(prefixes[i] + 'transform');
      if (matrix !== undefined) {
        return parseInt(matrix.match(/\d+/g)[4]);
      }
    }
  };

  this.$slidesWrapper.bind('touchstart', function (event) {
    isTouchJump = false;
    // Set start positions
    lastX = startX = event.originalEvent.touches[0].pageX;
    startY = event.originalEvent.touches[0].pageY;
    prevX = getTranslateX(that.$current.addClass('h5p-touch-move').prev().addClass('h5p-touch-move'));
    nextX = getTranslateX(that.$current.next().addClass('h5p-touch-move'));
    containerWidth = H5P.jQuery(this).width();
    startTime = new Date().getTime();

    scroll = null;

  }).bind('touchmove', function (event) {
    var touches = event.originalEvent.touches;

    // Determine horizontal movement
    lastX = touches[0].pageX;
    var movedX = startX - lastX;

    if (scroll === null) {
      // Detemine if we're scrolling horizontally or changing slide
      scroll = Math.abs(startY - event.originalEvent.touches[0].pageY) > Math.abs(movedX);
    }
    if (touches.length !== 1 || scroll) {
      // Do nothing if we're scrolling, zooming etc.
      return;
    }

    // Disable horizontal scrolling when changing slide
    event.preventDefault();

    // Create popup longer time than navigateTimer has passed
    if (!isTouchJump) {
/*      currentTime = new Date().getTime();
      var timeLapsed = currentTime - startTime;
      if (timeLapsed > navigateTimer) {
        isTouchJump = true;
      }*/

      // Fast swipe to next slide
      if (movedX < 0) {
        // Move previous slide
        that.$current.next().css(reset);
        that.$current.prev().css(transform('translateX(' + (prevX - movedX) + 'px'));
      }
      else {
        // Move next slide
        that.$current.prev().css(reset);
        that.$current.next().css(transform('translateX(' + (nextX - movedX) + 'px)'));
      }

      // Move current slide
      that.$current.css(transform('translateX(' + (-movedX) + 'px)'));
    }
    // TODO: Jumping over multiple slides disabled until redesigned.

    /* else {
      that.$current.css(reset);
      // Update slider popup.
      nextSlide = parseInt(that.currentSlideIndex + (movedX / pixelsPerSlide), 10);
      if (nextSlide >= that.slides.length -1) {
        nextSlide = that.slides.length -1;
      } else if (nextSlide < 0) {
        nextSlide = 0;
      }
      // Create popup at initial touch point
      that.updateTouchPopup(that.$slidesWrapper, nextSlide, startX, startY);
    }*/

  }).bind('touchend', function () {
    if (!scroll) {
/*      if (isTouchJump) {
        that.jumpToSlide(nextSlide);
        that.updateTouchPopup();
        return;
      }*/
      // If we're not scrolling detemine if we're changing slide
      var moved = startX - lastX;
      if (moved > that.swipeThreshold && that.nextSlide() || moved < -that.swipeThreshold && that.previousSlide()) {
        return;
      }
    }
    // Reset.
    that.$slidesWrapper.children().css(reset).removeClass('h5p-touch-move');
  });
};

/**
 *
 * @param $container
 * @param slideNumber
 * @param xPos
 * @param yPos
 */
H5P.CoursePresentation.prototype.updateTouchPopup = function ($container, slideNumber, xPos, yPos) {
  // Remove popup on no arguments
  if (arguments.length <= 0) {
    if(this.touchPopup !== undefined) {
      this.touchPopup.remove();
    }
    return;
  }

  var keyword = '';
  var yPosAdjustment = 0.15; // Adjust y-position 15% higher for visibility

  if ((this.$keywords !== undefined) && (this.$keywords.children(':eq(' + slideNumber + ')').find('span').html() !== undefined)) {
    keyword += this.$keywords.children(':eq(' + slideNumber + ')').find('span').html();
  } else {
    var slideIndexToNumber = slideNumber+1;
    keyword += this.l10n.slide + ' ' + slideIndexToNumber;
  }

  // Summary slide keyword
  if (this.editor === undefined) {
    if (slideNumber >= this.slides.length - 1) {
      keyword = this.l10n.showSolutions;
    }
  }

  if (this.touchPopup === undefined) {
    this.touchPopup = H5P.jQuery('<div/>', {
      'class': 'h5p-touch-popup'
    }).insertAfter($container);
  } else {
    this.touchPopup.insertAfter($container);
  }

  // Adjust yPos above finger.
  if ((yPos - ($container.parent().height() * yPosAdjustment)) < 0) {
    yPos = 0;
  } else {
    yPos -= ($container.parent().height() * yPosAdjustment);
  }

  this.touchPopup.css({
    'max-width': $container.width() - xPos,
    'left': xPos,
    'top': yPos
  });
  this.touchPopup.html(keyword);
};

/**
 * Switch to previous slide
 *
 * @param {Boolean} noScroll Skip UI scrolling.
 * @returns {Boolean} Indicates if the move was made.
 */
H5P.CoursePresentation.prototype.previousSlide = function (noScroll) {
  var $prev = this.$current.prev();
  if (!$prev.length) {
    return false;
  }

  return this.jumpToSlide($prev.index(), noScroll);
};

/**
 * Switch to next slide.
 *
 * @param {Boolean} noScroll Skip UI scrolling.
 * @returns {Boolean} Indicates if the move was made.
 */
H5P.CoursePresentation.prototype.nextSlide = function (noScroll) {
  var $next = this.$current.next();
  if (!$next.length) {
    return false;
  }

  return this.jumpToSlide($next.index(), noScroll);
};

/**
 * Loads all slides (Needed by print)
 * @method attachAllElements
 */
H5P.CoursePresentation.prototype.attachAllElements = function () {
  var $slides = this.$slidesWrapper.children();

  for (var i=0; i<this.slides.length; i++) {
    this.attachElements($slides.eq(i), i);
  }

  // Need to force updating summary slide! This is normally done
  // only when summary slide is about to be viewed
  if (this.summarySlideObject !== undefined) {
    this.summarySlideObject.updateSummarySlide(this.slides.length-1, true);
  }
};

/**
 * Jump to the given slide.
 *
 * @param {type} slideNumber The slide number to jump to.
 * @param {Boolean} noScroll Skip UI scrolling.
 * @returns {Boolean} Always true.
 */
H5P.CoursePresentation.prototype.jumpToSlide = function (slideNumber, noScroll) {
  var that = this;
  if (this.editor === undefined) {
    var progressedEvent = this.createXAPIEventTemplate('progressed');
    progressedEvent.data.statement.object.definition.extensions['http://id.tincanapi.com/extension/ending-point'] = slideNumber + 1;
    this.trigger(progressedEvent);
  }

  if (this.$current.hasClass('h5p-animate')) {
    return;
  }

  // Jump to given slide and enable animation.
  var $old = this.$current.addClass('h5p-animate');
  var $slides = that.$slidesWrapper.children();
  var $prevs = $slides.filter(':lt(' + slideNumber + ')');
  this.$current = $slides.eq(slideNumber).addClass('h5p-animate');
  var previousSlideIndex = this.currentSlideIndex;
  this.currentSlideIndex = slideNumber;

  // Attach elements for this slide
  this.attachElements(this.$current, slideNumber);

  // Attach elements for next slide
  var $nextSlide = this.$current.next();
  if ($nextSlide.length) {
    this.attachElements($nextSlide, slideNumber + 1);
  }

  // Stop media on old slide
  // this is done no mather what autoplay says
  var instances = this.elementInstances[previousSlideIndex];
  if (instances !== undefined) {
    for (var i = 0; i < instances.length; i++) {
      if (!this.slides[previousSlideIndex].elements[i].displayAsButton) {
        // Only pause media elements displayed as posters.
        that.pauseMedia(instances[i]);
      }
    }
  }

  setTimeout(function () {
    // Play animations
    $old.removeClass('h5p-current');
    $slides.css({
      '-webkit-transform': '',
      '-moz-transform': '',
      '-ms-transform': '',
      'transform': ''
    }).removeClass('h5p-touch-move').removeClass('h5p-previous');
    $prevs.addClass('h5p-previous');
    that.$current.addClass('h5p-current');
  }, 1);

  setTimeout(function () {
    // Done animating
    that.$slidesWrapper.children().removeClass('h5p-animate');

    if (that.editor !== undefined) {
      return;
    }

    // Start media on new slide for elements beeing setup with autoplay!
    var instances = that.elementInstances[that.currentSlideIndex];
    var instanceParams = that.slides[that.currentSlideIndex].elements;
    if (instances !== undefined) {
      for (var i = 0; i < instances.length; i++) {
        // TODO: Check instance type instead to avoid accidents?
        if (instanceParams[i] &&
            instanceParams[i].action &&
            instanceParams[i].action.params &&
            instanceParams[i].action.params.cpAutoplay &&
            typeof instances[i].play === 'function') {

          // Autoplay media
          instances[i].play();
        }
      }
    }
  }, 250);

  // Jump keywords
  if (this.$keywords !== undefined) {
    this.$currentKeyword.removeClass('h5p-current');
    this.$currentKeyword = this.$keywords.children(':eq(' + slideNumber + ')').addClass('h5p-current');

    if (!noScroll) {
      this.scrollToKeywords();
    }

    if (this.editor !== undefined) {
      // Move add keywords button if using editor
      this.editor.$newKeyword.appendTo(this.$currentKeyword);
    }
  }

  // Show keywords if they should always show
  if (that.presentation.keywordListEnabled && that.presentation.keywordListAlwaysShow) {
    that.showKeywords();
  }

  // Update progress bar
  that.navigationLine.updateProgressBar(slideNumber, previousSlideIndex, this.isSolutionMode);

  // Update footer
  that.navigationLine.updateFooter(slideNumber);

  // Update summary slide if on last slide
  that.summarySlideObject.updateSummarySlide(slideNumber);

  // Editor specific settings
  if (this.editor !== undefined && this.editor.dnb !== undefined) {
    // Update drag and drop menu bar container
    this.editor.dnb.setContainer(this.$current);
    this.editor.dnb.blurAll();
  }

  this.trigger('resize'); // Triggered to resize elements.
  this.fitCT();
  return true;
};

/**
 * Scroll to current keywords.
 *
 * @returns {undefined} Nothing
 */
H5P.CoursePresentation.prototype.scrollToKeywords = function () {
  var $parent = this.$currentKeyword.parent();
  var move = $parent.scrollTop() + this.$currentKeyword.position().top - 8;

  if (H5P.CoursePresentation.isiPad) {
    // scrollTop animations does not work well on ipad.
    // TODO: Check on iPhone.
    $parent.scrollTop(move);
  }
  else {
    $parent.stop().animate({scrollTop: move}, 250);
  }
};

/**
 * @type Boolean Indicate if this is an ipad user.
 */
H5P.CoursePresentation.isiPad = navigator.userAgent.match(/iPad/i) !== null;

/**
 * Create HTML for a slide.
 *
 * @param {object} slide Params.
 * @returns {String} HTML.
 */
H5P.CoursePresentation.createSlide = function (slide) {
  return '<div class="h5p-slide"' + (slide.background !== undefined ? ' style="background:' + slide.background + '"' : '') + '"></div>';
};

/**
 * Reset the content for all slides.
 * @public
 */
H5P.CoursePresentation.prototype.resetTask = function () {
  this.summarySlideObject.toggleSolutionMode(false);
  for (var i = 0; i < this.slidesWithSolutions.length; i++) {
    if (this.slidesWithSolutions[i] !== undefined) {
      for (var j = 0; j < this.slidesWithSolutions[i].length; j++) {
        var elementInstance = this.slidesWithSolutions[i][j];
        if (elementInstance.resetTask) {
          elementInstance.resetTask();
        }
      }
    }
  }
  this.navigationLine.updateProgressBar(0);
  this.jumpToSlide(0, false);
  this.$container.find('.h5p-popup-overlay').remove();
};

/**
 * Show solutions for all slides that have solutions
 *
 * @returns {undefined}
 */
H5P.CoursePresentation.prototype.showSolutions = function () {
  var jumpedToFirst = false;
  var slideScores = [];
  var hasScores = false;
  for (var i = 0; i < this.slidesWithSolutions.length; i++) {
    if (this.slidesWithSolutions[i] !== undefined) {
      if (!this.elementsAttached[i]) {
        // Attach elements before showing solutions
        this.attachElements(this.$slidesWrapper.children(':eq(' + i + ')'), i);
      }
      if (!jumpedToFirst) {
        this.jumpToSlide(i, false);
        jumpedToFirst = true; // TODO: Explain what this really does.
      }
      var slideScore = 0;
      var slideMaxScore = 0;
      var indexes = [];
      for (var j = 0; j < this.slidesWithSolutions[i].length; j++) {
        var elementInstance = this.slidesWithSolutions[i][j];
        if (elementInstance.addSolutionButton !== undefined) {
          elementInstance.addSolutionButton();
        }
        if (elementInstance.showSolutions) {
          elementInstance.showSolutions();
        }
        if (elementInstance.showCPComments) {
          elementInstance.showCPComments();
        }
        if (elementInstance.getMaxScore !== undefined) {
          slideMaxScore += elementInstance.getMaxScore();
          slideScore += elementInstance.getScore();
          hasScores = true;
          indexes.push(elementInstance.coursePresentationIndexOnSlide);
        }
      }
      slideScores.push({
        indexes: indexes,
        slide: (i + 1),
        score: slideScore,
        maxScore: slideMaxScore
      });
    }
  }
  if (hasScores) {
    return slideScores;
  }
};

/**
 * Gets slides scores for whole cp
 * @returns {Array} slideScores Array containing scores for all slides.
 */
H5P.CoursePresentation.prototype.getSlideScores = function (noJump) {
  var jumpedToFirst = (noJump === true);
  var slideScores = [];
  var hasScores = false;
  for (var i = 0; i < this.slidesWithSolutions.length; i++) {
    if (this.slidesWithSolutions[i] !== undefined) {
      if (!this.elementsAttached[i]) {
        // Attach elements before showing solutions
        this.attachElements(this.$slidesWrapper.children(':eq(' + i + ')'), i);
      }
      if (!jumpedToFirst) {
        this.jumpToSlide(i, false);
        jumpedToFirst = true; // TODO: Explain what this really does.
      }
      var slideScore = 0;
      var slideMaxScore = 0;
      var indexes = [];
      for (var j = 0; j < this.slidesWithSolutions[i].length; j++) {
        var elementInstance = this.slidesWithSolutions[i][j];
        if (elementInstance.getMaxScore !== undefined) {
          slideMaxScore += elementInstance.getMaxScore();
          slideScore += elementInstance.getScore();
          hasScores = true;
          indexes.push(elementInstance.coursePresentationIndexOnSlide);
        }
      }
      slideScores.push({
        indexes: indexes,
        slide: (i + 1),
        score: slideScore,
        maxScore: slideMaxScore
      });
    }
  }
  if (hasScores) {
    return slideScores;
  }
};

/**
 * Gather copyright information for the current content.
 *
 * @returns {H5P.ContentCopyrights}
 */
H5P.CoursePresentation.prototype.getCopyrights = function () {
  var info = new H5P.ContentCopyrights();

  var elementCopyrights;
  for (var slide = 0; slide < this.elementInstances.length; slide++) {
    var slideInfo = new H5P.ContentCopyrights();
    slideInfo.setLabel(this.l10n.slide + ' ' + (slide + 1));

    if (this.elementInstances[slide] !== undefined) {
      for (var element = 0; element < this.elementInstances[slide].length; element++) {
        var instance = this.elementInstances[slide][element];
        var params = this.slides[slide].elements[element].action.params;

        elementCopyrights = undefined;
        if (instance.getCopyrights !== undefined) {
          // Use the instance's own copyright generator
          elementCopyrights = instance.getCopyrights();
        }
        if (elementCopyrights === undefined) {
          // Create a generic flat copyright list
          elementCopyrights = new H5P.ContentCopyrights();
          H5P.findCopyrights(elementCopyrights, params, this.contentId);
        }

        var label = (element + 1);
        if (params.contentName !== undefined) {
          label += ': ' + params.contentName;
        }
        else if (instance.getTitle !== undefined) {
          label += ': ' + instance.getTitle();
        }
        elementCopyrights.setLabel(label);

        slideInfo.addContent(elementCopyrights);
      }
    }

    info.addContent(slideInfo);
  }

  return info;
};

/**
 * Stop the given element's playback if any.
 *
 * @param {object} instance
 */
H5P.CoursePresentation.prototype.pauseMedia = function (instance) {
  try {
    if (instance.pause !== undefined &&
        (instance.pause instanceof Function ||
          typeof instance.pause === 'function')) {
      instance.pause();
    }
    else if (instance.video !== undefined &&
             instance.video.pause !== undefined &&
             (instance.video.pause instanceof Function ||
               typeof instance.video.pause === 'function')) {
      instance.video.pause();
    }
    else if (instance.stop !== undefined &&
             (instance.stop instanceof Function ||
               typeof instance.stop === 'function')) {
      instance.stop();
    }
  }
  catch (err) {
    // Prevent crashing, but tell developers there's something wrong.
    H5P.error(err);
  }
};
