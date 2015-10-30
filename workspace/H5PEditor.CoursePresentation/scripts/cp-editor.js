/*global H5P*/
var H5PEditor = H5PEditor || {};

/**
 * Create a field for the form.
 *
 * @param {mixed} parent
 * @param {Object} field
 * @param {mixed} params
 * @param {function} setValue
 * @returns {H5PEditor.Text}
 */
H5PEditor.CoursePresentation = function (parent, field, params, setValue) {
  var that = this;
  H5P.EventDispatcher.call(this);

  if (params === undefined) {
    params = {
      slides: [{
        elements: [],
        keywords: []
      }]
    };

    setValue(field, params);
  }

  this.parent = parent;
  this.field = field;
  this.params = params;
  // Elements holds a mix of forms and params, not element instances
  this.elements = [];
  this.slideRatio = 1.9753;

  this.passReadies = true;
  parent.ready(function () {
    that.passReadies = false;
  });

  // Make sure each slide has keywords array defined.
  // This won't always be the case for old presentations
  this.params.slides.forEach(function (slide) {
    slide.keywords = slide.keywords || [];
  });
};

H5PEditor.CoursePresentation.prototype = Object.create(H5P.EventDispatcher.prototype);
H5PEditor.CoursePresentation.prototype.constructor = H5PEditor.CoursePresentation;

/**
 * Add an element to the current slide and params.
 *
 * @param {String} library
 * @returns {unresolved}
 */
H5PEditor.CoursePresentation.prototype.addElement = function (library) {
  var elementParams = {
    x: 30,
    y: 30,
    width: 40,
    height: 40
  };

  if (library === 'GoToSlide') {
    elementParams.goToSlide = 1;
  }
  else {
    elementParams.action = {
      library: library,
      params: {},
      subContentId: H5P.createUUID()
    };
    var libraryName = library.split(' ')[0];
    switch (libraryName) {
      case 'H5P.Audio':
        elementParams.width = (20/this.cp.$current.width())*100;
        elementParams.height = (20/this.cp.$current.height())*100;
        break;

      case 'H5P.DragQuestion':
        elementParams.width = 50;
        elementParams.height = 50;
        break;
    }
  }

  var slideIndex = this.cp.$current.index();
  var slideParams = this.params.slides[slideIndex];

  if (slideParams.elements === undefined) {
    // No previous elements
    slideParams.elements = [elementParams];
  }
  else {
    // Add as last element
    slideParams.elements.push(elementParams);
  }

  this.cp.$boxWrapper.add(this.cp.$boxWrapper.find('.h5p-presentation-wrapper:first')).css('overflow', 'visible');

  var instance = this.cp.addElement(elementParams, this.cp.$current, slideIndex);
  return this.cp.attachElement(elementParams, instance, this.cp.$current, slideIndex);
};

/**
 * Append field to wrapper.
 *
 * @param {type} $wrapper
 * @returns {undefined}
 */
H5PEditor.CoursePresentation.prototype.appendTo = function ($wrapper) {
  var that = this;

  this.$item = H5PEditor.$(this.createHtml()).appendTo($wrapper);
  this.$editor = this.$item.children('.editor');
  this.$errors = this.$item.children('.h5p-errors');

  // Create new presentation.
  this.cp = new H5P.CoursePresentation({
    presentation: this.params
  }, H5PEditor.contentId, {cpEditor: this});
  this.cp.attach(this.$editor);
  if (this.cp.$wrapper.is(':visible')) {
    this.cp.trigger('resize');
  }

  // Add drag and drop menu bar.
  that.initializeDNB();

  // Add and bind slide controls.
  H5PEditor.$(
    '<div class="h5p-slidecontrols">' +
      '<a href="#" title="' + H5PEditor.t('H5PEditor.CoursePresentation', 'sortSlide', {':dir': 'left'}) + '" class="h5p-slidecontrols-button h5p-slidecontrols-button-sort-left"></a>' +
      '<a href="#" title="' + H5PEditor.t('H5PEditor.CoursePresentation', 'sortSlide', {':dir': 'right'}) + '" class="h5p-slidecontrols-button h5p-slidecontrols-button-sort-right"></a>' +
      '<a href="#" title="' + H5PEditor.t('H5PEditor.CoursePresentation', 'removeSlide') + '" class="h5p-slidecontrols-button h5p-slidecontrols-button-delete"></a>' +
      '<a href="#" title="' + H5PEditor.t('H5PEditor.CoursePresentation', 'cloneSlide') + '" class="h5p-clone-slide h5p-slidecontrols-button h5p-slidecontrols-button-clone"></a>' +
      '<a href="#" title="' + H5PEditor.t('H5PEditor.CoursePresentation', 'newSlide') + '" class="h5p-slidecontrols-button h5p-slidecontrols-button-add"></a></div>'
  ).appendTo(this.cp.$wrapper)
    .children('a:first')
    .click(function () {
      that.sortSlide(that.cp.$current.prev(), -1); // Left
      return false;
    }).next().click(function () {
      that.sortSlide(that.cp.$current.next(), 1); // Right
      return false;
  }).next().click(function () {
    that.removeSlide();
    return false;
  }).next().click(function () {
    that.addSlide(H5P.cloneObject(that.params.slides[that.cp.$current.index()],true));
    H5P.ContinuousText.Engine.run(that);
    return false;
  }).next().click(function () {
    that.addSlide();
    return false;
  });

  this.cp.on('resize', function () {
    // Reset drag and drop adjustments.
    if (that.keywordsDNS !== undefined) {
      delete that.keywordsDNS.dnd.containerOffset;
      delete that.keywordsDNS.marginAdjust;
    }
  });
};

H5PEditor.CoursePresentation.prototype.addDNBButton = function (library) {
  var that = this;
  var id = library.name.split('.')[1].toLowerCase();

  return {
    id: id,
    title: H5PEditor.t('H5PEditor.CoursePresentation', 'insertElement', {':type': library.title.toLowerCase()}),
    createElement: function () {
      return that.addElement(library.uberName);
    }
  };
};

/**
 * Initialize the drag and drop menu bar.
 *
 * @returns {undefined}
 */
H5PEditor.CoursePresentation.prototype.initializeDNB = function () {
  var that = this;

  this.$bar = H5PEditor.$('<div class="h5p-dragnbar">' + H5PEditor.t('H5PEditor.CoursePresentation', 'loading') + '</div>').insertBefore(this.cp.$boxWrapper);
  var slides = H5PEditor.CoursePresentation.findField('slides', this.field.fields);
  var elementFields = H5PEditor.CoursePresentation.findField('elements', slides.field.fields).field.fields;
  var action = H5PEditor.CoursePresentation.findField('action', elementFields);
  H5PEditor.LibraryListCache.getLibraries(action.options, function (libraries) {
    that.libraries = libraries;
    var buttons = [];
    for (var i = 0; i < libraries.length; i++) {
      if (libraries[i].restricted !== true) {
        buttons.push(that.addDNBButton(libraries[i]));
      }
    }
    // Add go to slide button
    var goToSlide = H5PEditor.CoursePresentation.findField('goToSlide', elementFields);
    if (goToSlide) {
      buttons.splice(5, 0, {
        id: 'gotoslide',
        title: H5PEditor.t('H5PEditor.CoursePresentation', 'insertElement', {':type': goToSlide.label}),
        createElement: function () {
          return that.addElement('GoToSlide');
        }
      });
    }

    that.dnb = new H5P.DragNBar(buttons, that.cp.$current, that.$editor, {$blurHandlers: that.cp.$boxWrapper});
    that.dnb.dnr.snap = 10;

    // Register all attached elements with dnb
    that.elements.forEach(function (slide, slideIndex) {
      slide.forEach(function (element, elementIndex) {
        var elementParams = that.params.slides[slideIndex].elements[elementIndex];
        var options = {};
        if (elementParams.displayAsButton) {
          options.disableResize = true;
        }
        if (elementParams.action && elementParams.action.library.split(' ')[0] === 'H5P.Image') {
          options.lock = true;
        }

        // Register option for locking dimensions if image
        that.addToDragNBar(element, elementParams, options);
      });
    });

    var reflowLoop;
    var reflowInterval = 250;
    var reflow = function () {
      H5P.ContinuousText.Engine.run(that);
      reflowLoop = setTimeout(reflow, reflowInterval);
    };



    // Resizing listener
    that.dnb.dnr.on('startResizing', function (eventData) {
      var elementParams = that.params.slides[that.cp.$current.index()].elements[that.dnb.$element.index()];

      // Check for continuous text
      if (elementParams.action && elementParams.action.library.split(' ')[0] === 'H5P.ContinuousText') {
        reflowLoop = setTimeout(reflow, reflowInterval);
      }
    });

    // Resizing has stopped
    that.dnb.dnr.on('stoppedResizing', function (eventData) {
      var elementParams = that.params.slides[that.cp.$current.index()].elements[that.dnb.$element.index()];

      // Store new element position
      elementParams.width = (that.dnb.$element.width() + 2) / (that.cp.$current.innerWidth() / 100);
      elementParams.height = (that.dnb.$element.height() + 2) / (that.cp.$current.innerHeight() / 100);
      elementParams.y = ((parseFloat(that.dnb.$element.css('top')) / that.cp.$current.innerHeight()) * 100);
      elementParams.x = ((parseFloat(that.dnb.$element.css('left')) / that.cp.$current.innerWidth()) * 100);

      // Stop reflow loop and run one last reflow
      if (elementParams.action && elementParams.action.library.split(' ')[0] === 'H5P.ContinuousText') {
        clearTimeout(reflowLoop);
        H5P.ContinuousText.Engine.run(that);
      }

      // Trigger element resize
      var elementInstance = that.cp.elementInstances[that.cp.$current.index()][that.dnb.$element.index()];
      H5P.trigger(elementInstance, 'resize');
    });

    // Update params when the element is dropped.
    that.dnb.stopMovingCallback = function (x, y) {
      var params = that.params.slides[that.cp.$current.index()].elements[that.dnb.dnd.$element.index()];
      params.x = x;
      params.y = y;
    };

    // Update params when the element is moved instead, to prevent timing issues.
    that.dnb.dnd.moveCallback = function (x, y) {
      var params = that.params.slides[that.cp.$current.index()].elements[that.dnb.dnd.$element.index()];
      params.x = x;
      params.y = y;

      that.dnb.updateCoordinates();
    };

    // Edit element when it is dropped.
    that.dnb.dnd.releaseCallback = function () {
      var params = that.params.slides[that.cp.$current.index()].elements[that.dnb.dnd.$element.index()];
      var element = that.elements[that.cp.$current.index()][that.dnb.dnd.$element.index()];

      if (that.dnb.newElement) {
        that.cp.$boxWrapper.add(that.cp.$boxWrapper.find('.h5p-presentation-wrapper:first')).css('overflow', '');

        if (params.action !== undefined && H5P.libraryFromString(params.action.library).machineName === 'H5P.ContinuousText') {
          H5P.ContinuousText.Engine.run(that);
          if (!that.params.ct) {
            // No CT text but there could be elements
            var CTs = that.getCTs(false, true);
            if (CTs.length === 1) {
              // First element, open form
              that.showElementForm(element, that.dnb.dnd.$element, params);
            }
          }
        }
        else {
          that.showElementForm(element, that.dnb.dnd.$element, params);
        }
      }
    };

    that.dnb.attach(that.$bar);

    // Bind keyword interactions.
    that.initKeywordInteractions();

    // Trigger event
    that.trigger('librariesReady');
  });
};

/**
 * Create HTML for the field.
 */
H5PEditor.CoursePresentation.prototype.createHtml = function () {
  return H5PEditor.createItem(this.field.widget, '<div class="editor"></div>');
};

/**
 * Validate the current field.
 */
H5PEditor.CoursePresentation.prototype.validate = function () {
  // Validate all form elements
  var valid = true;
  var firstCT = true;
  for (var i = 0; i < this.elements.length; i++) {
    if (!this.elements[i]) {
      continue;
    }
    for (var j = 0; j < this.elements[i].length; j++) {
      // We must make sure form values are stored if the dialog was never closed
      var elementParams = this.params.slides[i].elements[j];
      var isCT = (elementParams.action !== undefined && elementParams.action.library.split(' ')[0] === 'H5P.ContinuousText');
      if (isCT && !firstCT) {
        continue; // Only need to process the first CT
      }

      // Validate element form
      for (var k = 0; k < this.elements[i][j].children.length; k++) {
        if (this.elements[i][j].children[k].validate() === false && valid) {
          valid = false;
        }
      }

      if (isCT) {
        if (!this.params.ct) {
          // Store complete text in CT param
          this.params.ct = elementParams.action.params.text;
        }
        firstCT = false;
      }
    }
  }
  // Distribute CT text across elements
  H5P.ContinuousText.Engine.run(this);
  return valid;
};

/**
 * Remove this item.
 */
H5PEditor.CoursePresentation.prototype.remove = function () {
  this.$item.remove();
};

/**
 * Initialize keyword interactions.
 *
 * @returns {undefined} Nothing
 */
H5PEditor.CoursePresentation.prototype.initKeywordInteractions = function () {
  var that = this;

  // Add our own menu to the drag and drop menu bar.
  that.$keywordsDNB = H5PEditor.$(
    '<ul class="h5p-dragnbar-ul h5p-dragnbar-left">' +
      '<li class="h5p-dragnbar-li">' +
        '<div title="' + H5PEditor.t('H5PEditor.CoursePresentation', 'keywordsMenu') + '" class="h5p-dragnbar-a h5p-dragnbar-keywords" role="button" tabindex="1"></div>' +
        '<div class="h5p-keywords-dropdown">' +
          '<label class="h5p-keywords-enable"><input type="checkbox"/> Keywords list</label>' +
          '<label class="h5p-keywords-always"><input type="checkbox"/> Always show</label>' +
          '<label class="h5p-keywords-hide"><input type="checkbox"/> Auto hide</label>' +
          '<label class="h5p-keywords-opacity">Opacity <input type="text"/> %</label>' +
        '</div>' +
      '</li>' +
    '</ul>').prependTo(this.$bar);

  // We use this awesome library to make things easier.
  this.keywordsDNS = new H5P.DragNSort(this.cp.$keywords);

  this.keywordsDNS.startMovingCallback = function (event) {
    return that.keywordStartMoving(event);
  };

  this.keywordsDNS.moveCallback = function (x, y) {
    that.keywordMove(x, y);
  };

  this.keywordsDNS.swapCallback = function (direction) {
    that.swapKeywords(direction);
  };

  // Keyword events
  var keywordClick = function (event) {
    // Convert keywords into text areas when clicking.
    if (!that.keywordsDNS.moving && that.editKeyword(H5PEditor.$(this)) !== false) {
      event.stopPropagation();
    }
  };
  var keywordMousedown = function (event) {
    that.keywordsDNS.press(H5PEditor.$(this).parent(), event.pageX, event.pageY);
    return false;
  };
  var newKeyword = function ($li, newKeywordString, classes, x, y) {
    if (that.$keywordsTip !== undefined) {
      that.$keywordsTip.remove();
      delete that.$keywordsTip;
    }

    var $ol = $li.children('ol');
    if (!$ol.length) {
      $ol = H5PEditor.$('<ol class="h5p-keywords-ol"></ol>').prependTo($li);
    }
    var $element = H5PEditor.$('<li class="h5p-keywords-li h5p-new-keyword h5p-empty-keyword ' + classes + '"><span>' + newKeywordString + '</span></li>').appendTo($ol);
    var $label = $element.children('span').click(keywordClick).mousedown(keywordMousedown);

    that.keywordsDNS.press($element, x, y);

    // Edit once element is dropped.
    var edit = function () {
      H5P.$body.off('mouseup', edit).off('mouseleave', edit);

      // Use timeout to edit on next tick. (when moving and sorting has finished)
      setTimeout(function () {
        that.keywordsDNS.moving = false;
        $label.trigger('click');
      }, 0);
    };
    H5P.$body.on('mouseup', edit).on('mouseleave', edit);

    return false;
  };

  // Make existing keywords editable
  this.cp.$keywords.find('span').click(keywordClick).mousedown(keywordMousedown);

  this.$newKeyword = H5PEditor.$('<li class="h5p-keywords-li h5p-add-keyword" role="button" tabindex="1">Add keyword</li>').mousedown(function (event) {
    if (event.button !== 0) {
      return; // We only handle left click
    }

    // Create new keyword.
    var newKeywordString = H5PEditor.t('H5PEditor.CoursePresentation', 'newKeyword');

    // Add to params
    that.params.slides[that.cp.$current.index()].keywords.push({main: newKeywordString});

    return newKeyword(that.cp.$keywords.children('.h5p-current'), newKeywordString, 'h5p-main-keyword', event.pageX, event.pageY);
  }).appendTo(this.cp.$currentKeyword);

  // Make keywords drop down menu come alive
  var $dropdown = this.$bar.find('.h5p-keywords-dropdown');
  var preventClose = false;
  var closeDropdown = function () {
    if (preventClose) {
      preventClose = false;
    }
    else {
      $dropdown.removeClass('h5p-open');
      that.cp.$container.off('click', closeDropdown);
    }
  };

  // Open dropdown when clicking the dropdown button
  this.$bar.find('.h5p-dragnbar-keywords').click(function () {
    if (!$dropdown.hasClass('h5p-open')) {
      that.cp.$container.on('click', closeDropdown);
      $dropdown.addClass('h5p-open');
      preventClose = true;
    }
  });

  // Prevent closing when clicking on the dropdown dialog it self
  $dropdown.click(function () {
    preventClose = true;
  });

  // Enable keywords list
  var $enableKeywords = this.$bar.find('.h5p-keywords-enable input').change(function () {
    that.params.keywordListEnabled = $enableKeywords.is(':checked');
    if (that.params.keywordListEnabled) {
      if (that.params.keywordListAlwaysShow) {
        that.cp.$keywordsWrapper.show().add(that.cp.$keywordsButton).addClass('h5p-open');
        that.cp.$keywordsButton.hide();
      }
      else {
        that.cp.$keywordsWrapper.add(that.cp.$keywordsButton).show();
      }
    }
    else {
      that.cp.$keywordsWrapper.add(that.cp.$keywordsButton).hide();
    }
  });

  // Always show keywords list
  var $alwaysKeywords = this.$bar.find('.h5p-keywords-always input').change(function () {
    that.params.keywordListAlwaysShow = $alwaysKeywords.is(':checked');
    if (!that.params.keywordListEnabled) {
      that.cp.hideKeywords();
      that.cp.$keywordsButton.hide();
      return;
    } else if (!that.params.keywordListAlwaysShow) {
      that.cp.$keywordsButton.show();
    }
    if (that.params.keywordListAlwaysShow) {
      that.cp.$keywordsButton.hide();
      that.cp.showKeywords();
    }
    else if (that.params.keywordListEnabled) {
      that.cp.$keywordsButton.show();
      that.cp.showKeywords();
    }
  });

  // Auto hide keywords list
  var $hideKeywords = this.$bar.find('.h5p-keywords-hide input').change(function () {
    that.params.keywordListAutoHide = $hideKeywords.is(':checked');
  });

  // Opacity for keywords list
  var $opacityKeywords = this.$bar.find('.h5p-keywords-opacity input').change(function () {
    var opacity = parseInt($opacityKeywords.val());
    if (isNaN(opacity)) {
      opacity = 90;
    }
    if (opacity > 100) {
      opacity = 100;
    }
    if (opacity < 0) {
      opacity = 0;
    }
    that.params.keywordListOpacity = opacity;
    that.cp.setKeywordsOpacity(opacity);
  });

  /**
   * Help set default values if undefined.
   *
   * @private
   * @param {String} option
   * @param {*} defaultValue
   */
  var checkDefault = function (option, defaultValue) {
    if (that.params[option] === undefined) {
      that.params[option] = defaultValue;
    }
  };

  // Set defaults if undefined
  checkDefault('keywordListEnabled', true);
  checkDefault('keywordListAlwaysShow', false);
  checkDefault('keywordListAutoHide', false);
  checkDefault('keywordListOpacity', 90);

  // Update HTML
  $enableKeywords.attr('checked', that.params.keywordListEnabled);
  $alwaysKeywords.attr('checked', that.params.keywordListAlwaysShow);
  $hideKeywords.attr('checked', that.params.keywordListAutoHide);
  $opacityKeywords.val(that.params.keywordListOpacity);
};

/**
 * Keyword start moving handler.
 *
 * @param {object} event
 * @returns {Boolean} Indicates if we're ready to start moving.
 */
H5PEditor.CoursePresentation.prototype.keywordStartMoving = function (event) {
  // Make sure we're moving the keywords that belongs to this slide.
  this.keywordsDNS.$parent = this.keywordsDNS.$element.parent().parent();
  if (!this.keywordsDNS.$parent.hasClass('h5p-current')) {
    // Element is a sub keyword.
    if (!this.keywordsDNS.$parent.parent().parent().hasClass('h5p-current')) {
      return false;
    }
  }
  else {
    delete this.keywordsDNS.$parent; // Remove since we're not a sub keyword.
  }

  if (this.keywordsDNS.$element.hasClass('h5p-new-keyword')) {
    // Adjust new keywords to mouse pos.
    var height = this.keywordsDNS.$element.height() / 2;
    this.keywordsDNS.dnd.adjust.x += height;
    this.keywordsDNS.dnd.adjust.y += this.keywordsDNS.$element.offset().top - event.pageY + (height * 1.75);
    this.keywordsDNS.$element.removeClass('h5p-new-keyword');
  }

  this.keywordsDNS.dnd.scrollTop = this.cp.$keywords.scrollTop() - parseInt(this.cp.$keywords.css('marginTop'));
  return true;
};

/**
 * Keyword move handler.
 *
 * @param {int} x
 * @param {int} y
 * @returns {undefined}
 */
H5PEditor.CoursePresentation.prototype.keywordMove = function (x, y) {
  // Check if sub keyword should change parent.
  if (this.keywordsDNS.$parent === undefined) {
    return;
  }

  var fontSize = parseInt(this.cp.$wrapper.css('fontSize'));

  // Jump up
  var $prev = this.keywordsDNS.$parent.prev();
  if ($prev.length && y < $prev.offset().top + ($prev.height() + this.keywordsDNS.marginAdjust + parseInt($prev.css('paddingBottom')) - (fontSize/2))) {
    return this.jumpKeyword($prev, 1);
  }

  // Jump down
  var $next = this.keywordsDNS.$parent.next();
  if ($next.length && y + this.keywordsDNS.$element.height() > $next.offset().top + fontSize) {
    return this.jumpKeyword($next, -1);
  }
};

/**
 * Update params after swapping keywords.
 *
 * @param {type} direction
 * @returns {undefined}
 */
H5PEditor.CoursePresentation.prototype.swapKeywords = function (direction) {
  var keywords = this.params.slides[this.cp.$current.index()].keywords;
  if (this.keywordsDNS.$parent !== undefined) {
    // We're swapping sub keywords.
    keywords = keywords[this.keywordsDNS.$parent.index()].subs;
  }

  var index = this.keywordsDNS.$element.index() - 1;
  var oldIndex = index + direction;
  var oldItem = keywords[oldIndex];
  keywords[oldIndex] = keywords[index];
  keywords[index] = oldItem;
};

/**
 * Move a sub keyword to another parent.
 *
 * @param {jQuery} $target The new parent.
 * @param {int} direction Indicates the direction we're jumping in.
 * @returns {undefined}
 */
H5PEditor.CoursePresentation.prototype.jumpKeyword = function ($target, direction) {
  var $ol = $target.children('ol');
  if (!$ol.length) {
    $ol = H5PEditor.$('<ol class="h5p-keywords-ol"></ol>').appendTo($target);
  }

  // Remove from params
  var keywords = this.slide.params.slides[this.cp.$current.index()].keywords;
  var subs = keywords[this.keywordsDNS.$parent.index()];
  var item = subs.subs.splice(this.keywordsDNS.$element.index() - 1, 1)[0];
  if (!subs.subs.length) {
    delete subs.subs;
  }

  // Update UI
  if (direction === -1) {
    this.keywordsDNS.$element.add(this.keywordsDNS.$placeholder).prependTo($ol);
  }
  else {
    this.keywordsDNS.$element.add(this.keywordsDNS.$placeholder).appendTo($ol);
  }

  // Add to params
  subs = keywords[$target.index()];
  if (subs.subs === undefined) {
    subs.subs = [item];
  }
  else {
    subs.subs.splice(this.keywordsDNS.$element.index() - 1, 0, item);
  }

  // Remove ol if empty.
  $ol = this.keywordsDNS.$parent.children('ol');
  if (!$ol.children('li').length) {
    $ol.remove();
  }
  this.keywordsDNS.$parent = $target;
};

/**
 * Adds slide after current slide.
 *
 * @param {object} slideParams
 * @returns {undefined} Nothing
 */
H5PEditor.CoursePresentation.prototype.addSlide = function (slideParams) {
  var that = this;

  if (slideParams === undefined) {
    // Set new slide params
    slideParams = {
      elements: []
    };
    if (this.cp.$keywords !== undefined) {
      slideParams.keywords = [];
    }
  }

  var index = this.cp.$current.index() + 1;
  if (index >= this.params.slides.length) {
    this.params.slides.push(slideParams);
  }
  else {
    this.params.slides.splice(index, 0, slideParams);
  }

  this.elements.splice(index, 0, []);
  this.cp.elementInstances.splice(index, 0, []);
  this.cp.elementsAttached.splice(index, 0, []);

  // Add slide with elements
  var $slide = H5P.jQuery(H5P.CoursePresentation.createSlide(slideParams)).insertAfter(this.cp.$current);
  this.cp.addElements(slideParams, $slide, $slide.index());

  // Add keywords
  if (slideParams.keywords !== undefined) {
    H5PEditor.$(this.cp.keywordsHtml(slideParams.keywords)).insertAfter(this.cp.$currentKeyword).click(function (event) {
      that.cp.keywordClick(H5PEditor.$(this));
      event.preventDefault();
    }).find('span').click(function (event) {
      // Convert keywords into text areas when clicking.
      if (!that.keywordsDNS.moving && that.editKeyword(H5PEditor.$(this)) !== false) {
        event.stopPropagation();
      }
    }).mousedown(function (event) {
      that.keywordsDNS.press(H5PEditor.$(this).parent(), event.pageX, event.pageY);
      return false;
    });
  }

  this.updateNavigationLine(index);

  // Switch to the new slide.
  this.cp.nextSlide();
};

H5PEditor.CoursePresentation.prototype.updateNavigationLine = function (index) {
  var that = this;
  // Update slides with solutions.
  var hasSolutionArray = [];
  this.cp.slides.forEach(function (instanceArray, slideNumber) {
    var isTaskWithSolution = false;

    if (that.cp.elementInstances[slideNumber] !== undefined && that.cp.elementInstances[slideNumber].length) {
      that.cp.elementInstances[slideNumber].forEach(function (elementInstance) {
        if (that.cp.checkForSolutions(elementInstance)) {
          isTaskWithSolution = true;
        }
      });
    }

    if (isTaskWithSolution) {
      hasSolutionArray.push([[isTaskWithSolution]]);
    } else {
      hasSolutionArray.push([]);
    }
  });

  // Update progressbar and footer
  this.cp.navigationLine.initProgressbar(hasSolutionArray);
  this.cp.navigationLine.updateProgressBar(index);
  this.cp.navigationLine.updateFooter(index);
};

/**
 * Remove the current slide
 *
 * @returns {Boolean} Indicates success
 */
H5PEditor.CoursePresentation.prototype.removeSlide = function () {
  var index = this.cp.$current.index();
  var $remove = this.cp.$current.add(this.cp.$currentKeyword);

  // Confirm
  if (!confirm(H5PEditor.t('H5PEditor.CoursePresentation', 'confirmDeleteSlide'))) {
    return false;
  }

  // Remove elements from slide
  var slideKids = this.elements[index];
  if (slideKids !== undefined) {
    for (var i = 0; i < slideKids.length; i++) {
      this.removeElement(slideKids[i], slideKids[i].$wrapper, this.cp.elementInstances[index][i].libraryInfo && this.cp.elementInstances[index][i].libraryInfo.machineName === 'H5P.ContinuousText');
    }
  }
  this.elements.splice(index, 1);

  // Change slide
  var move = this.cp.previousSlide() ? -1 : (this.cp.nextSlide(true) ? 0 : undefined);
  if (move === undefined) {
    return false; // No next or previous slide
  }

  // ExportableTextArea needs to know about the deletion:
  H5P.ExportableTextArea.CPInterface.onDeleteSlide(index);

  // Remove visuals.
  $remove.remove();

  // Update presentation params.
  this.params.slides.splice(index, 1);

  // Update the list of element instances
  this.cp.elementInstances.splice(index, 1);
  this.cp.elementsAttached.splice(index, 1);

  this.updateNavigationLine(index + move);

  H5P.ContinuousText.Engine.run(this);
};

/**
 * Sort current slide in the given direction.
 *
 * @param {H5PEditor.$} $element The next/prev slide.
 * @param {int} direction 1 for next, -1 for prev.
 * @returns {Boolean} Indicates success.
 */
H5PEditor.CoursePresentation.prototype.sortSlide = function ($element, direction) {
  if (!$element.length) {
    return false;
  }

  var index = this.cp.$current.index();

  var keywordsEnabled = this.cp.$currentKeyword !== undefined;

  // Move slides and keywords.
  if (direction === -1) {
    this.cp.$current.insertBefore($element.removeClass('h5p-previous'));
    if (keywordsEnabled) {
      this.cp.$currentKeyword.insertBefore(this.cp.$currentKeyword.prev());
    }
  }
  else {
    this.cp.$current.insertAfter($element.addClass('h5p-previous'));
    if (keywordsEnabled) {
      this.cp.$currentKeyword.insertAfter(this.cp.$currentKeyword.next());
    }
  }

  if (keywordsEnabled) {
    this.cp.scrollToKeywords();
  }

  // Jump to sorted slide number
  var newIndex = index + direction;
  this.cp.jumpToSlide(newIndex);

  // Need to inform exportable text area about the change:
  H5P.ExportableTextArea.CPInterface.changeSlideIndex(direction > 0 ? index : index-1, direction > 0 ? index+1 : index);

  // Update params.
  this.params.slides.splice(newIndex, 0, this.params.slides.splice(index, 1)[0]);
  this.elements.splice(newIndex, 0, this.elements.splice(index, 1)[0]);
  this.cp.elementInstances.splice(newIndex, 0, this.cp.elementInstances.splice(index, 1)[0]);
  this.cp.elementsAttached.splice(newIndex, 0, this.cp.elementsAttached.splice(index, 1)[0]);

  this.updateNavigationLine(newIndex);

  H5P.ContinuousText.Engine.run(this);

  return true;
};

/**
 * Edit keyword.
 *
 * @param {H5PEditor.$} $span Keyword wrapper.
 * @returns {unresolved} Nothing
 */
H5PEditor.CoursePresentation.prototype.editKeyword = function ($span) {
  var that = this;

  var $li = $span.parent();
  var $ancestor = $li.parent().parent();
  var main = $ancestor.hasClass('h5p-current');

  if (!main && !$ancestor.parent().parent().hasClass('h5p-current')) {
    return false;
  }

  var slideIndex = that.cp.$current.index();
  var $delete = H5PEditor.$('<a href="#" class="h5p-delete-keyword" title="' + H5PEditor.t('H5PEditor.CoursePresentation', 'deleteKeyword') + '"></a>');
  var $textarea = H5PEditor.$('<textarea>' + ($li.hasClass('h5p-empty-keyword') ? '' : $span.text()) + '</textarea>').insertBefore($span.hide()).keydown(function (event) {
    if (event.keyCode === 13) {
      $textarea.blur();
      return false;
    }
  }).keyup(function () {
    $textarea.css('height', 1).css('height', $textarea[0].scrollHeight - 8);
  }).blur(function () {
    var keyword = $textarea.val();

    if (H5P.trim(keyword) === '') {
      $li.addClass('h5p-empty-keyword');
      keyword = H5PEditor.t('H5PEditor.CoursePresentation', 'newKeyword');
    }
    else {
      $li.removeClass('h5p-empty-keyword');
    }

    // Update visuals
    $span.text(keyword).show();
    $textarea.add($delete).remove();

    // Update params
    if (main) {
      that.params.slides[slideIndex].keywords[$li.index()].main = keyword;
    }
    else {
      that.params.slides[slideIndex].keywords[$li.parent().parent().index()].subs[$li.index()] = keyword;
    }
  }).focus();

  $textarea.keyup();

  $delete.insertBefore($textarea).mousedown(function () {
    // Remove keyword
    if (main) {
      that.params.slides[slideIndex].keywords.splice($li.index(), 1);
      $li.add($textarea).remove();
    }
    else {
      // Sub keywords
      var pi = $li.parent().parent().index();
      var $ol = $li.parent();
      if ($ol.children().length === 1) {
        delete that.params.slides[slideIndex].keywords[pi].subs;
        $ol.remove();
      }
      else {
        that.params.slides[slideIndex].keywords[pi].subs.splice($li.index(), 1);
        $li.add($textarea).remove();
      }
    }
  });
};

/**
 * Generate element form.
 *
 * @param {Object} elementParams
 * @param {String} type
 * @returns {Object}
 */
H5PEditor.CoursePresentation.prototype.generateForm = function (elementParams, type) {
  var self = this;

  if (type === 'H5P.ContinuousText' && self.ct) {
    // Continuous Text shares a single form across all elements
    return {
      '$form': self.ct.element.$form,
      children: self.ct.element.children
    };
  }

  // Get semantics for the elements field
  var slides = H5PEditor.CoursePresentation.findField('slides', this.field.fields);
  var elementFields = H5PEditor.$.extend(true, [], H5PEditor.CoursePresentation.findField('elements', slides.field.fields).field.fields);

  // Manipulate semantics into only using a given set of fields
  if (type === 'goToSlide') {
    // Hide all others
    self.showFields(elementFields, ['title', 'goToSlide', 'invisible']);
  }
  else {
    var hideFields = ['title', 'goToSlide', 'invisible'];

    if (type === 'H5P.ContinuousText' || type === 'H5P.Audio') {
      // Continuous Text or Go To Slide cannot be displayed as a button
      hideFields.push('displayAsButton');
    }

    // Only display goToSlide field for goToSlide elements
    self.hideFields(elementFields, hideFields);
  }

  var popupTitle = H5PEditor.t('H5PEditor.CoursePresentation', 'popupTitle', {':type': type.split('.')[1]});
  var element = {
    '$form': H5P.jQuery('<div/>')
  };

  // Find title for form (used by popup dialog)
  self.findElementTitle(type, function (title) {
    element.$form.attr('title', H5PEditor.t('H5PEditor.CoursePresentation', 'popupTitle', {':type': title}));
  });

  // Render element fields
  H5PEditor.processSemanticsChunk(elementFields, elementParams, element.$form, self);
  element.children = self.children;

  // Hide library selector
  element.$form.children('.library:first').children('label, select').hide().end().children('.libwrap').css('margin-top', '0');

  // Set correct aspect ratio on new images.
  // TODO: Do not use/rely on magic numbers!
  var library = element.children[4];
  if (!(library instanceof H5PEditor.None)) {
    var libraryChange = function () {
      if (library.children[0].field.type === 'image') {
        library.children[0].changes.push(function (params) {
          if (params === undefined) {
            return;
          }

          if (params.width !== undefined && params.height !== undefined) {
            // Avoid to small images, will not work with jQuery UI's resize
            var minSize = parseInt(element.$wrapper.css('font-size')) +
                          element.$wrapper.outerHeight() -
                          element.$wrapper.innerHeight();
            // Use same minSize as jQuery UI's resize
            if (params.width < minSize) {
              params.width = minSize;
            }
            if (params.height < minSize) {
              params.height = minSize;
            }

            // Reduce height for tiny images, stretched pixels looks horrible
            var suggestedHeight = params.height / (self.cp.$current.innerHeight() / 100);
            if (suggestedHeight < elementParams.height) {
              elementParams.height = suggestedHeight;
            }

            // Calculate new width
            elementParams.width = (elementParams.height * (params.width / params.height)) / self.slideRatio;
          }
        });
      }
    };
    if (library.children === undefined) {
      library.changes.push(libraryChange);
    }
    else {
      libraryChange();
    }
  }

  if (library.change && (library.change instanceof Function || typeof library.change === 'function')) {
    library.change(function () {
      // Find the first ckeditor or texteditor field that is not hidden.
      // h5p-editor dialog is copyright dialog
      // h5p-dialog-box is IVs video choose dialog
      H5P.jQuery('.ckeditor, .h5peditor-text', library.$myField)
        .not('.h5p-editor-dialog .ckeditor, ' +
        '.h5p-editor-dialog .h5peditor-text, ' +
        '.h5p-dialog-box .ckeditor, ' +
        '.h5p-dialog-box .h5peditor-text', library.$myField)
        .eq(0)
        .focus();
    });
  }

  return element;
};

/**
 * Hide all fields in the given list. All others are shown.
 *
 * @param {Object[]} elementFields
 * @param {String[]} fields
 */
H5PEditor.CoursePresentation.prototype.hideFields = function (elementFields, fields) {
  // Find and hide fields in list
  for (var i = 0; i < fields.length; i++) {
    var field = H5PEditor.CoursePresentation.findField(fields[i], elementFields);
    if (field) {
      field.widget = 'none';
    }
  }
};

/**
 * Show all fields in the given list. All others are hidden.
 *
 * @param {Object[]} elementFields
 * @param {String[]} fields
 */
H5PEditor.CoursePresentation.prototype.showFields = function (elementFields, fields) {
  // Find and hide all fields not in list
  for (var i = 0; i < elementFields.length; i++) {
    var field = elementFields[i];
    var found = false;

    for (var j = 0; j < fields.length; j++) {
      if (field.name === fields[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      field.widget = 'none';
    }
  }
};

/**
 * Find the title for the given element type.
 *
 * @param {String} type Element type
 * @param {Function} next Called when we've found the title
 */
H5PEditor.CoursePresentation.prototype.findElementTitle = function (type, next) {
  var self = this;

  if (type === 'goToSlide') {
    // Find field label
    var slides = H5PEditor.CoursePresentation.findField('slides', this.field.fields);
    var elements = H5PEditor.CoursePresentation.findField('elements', slides.field.fields);
    var field = H5PEditor.CoursePresentation.findField(type, elements.field.fields);
    next(field.label);
  }
  else if (type.substring(0,4) === 'H5P.') {
    self.findLibraryTitle(type, next);
  }
  else {
    // Generic
    next(H5PEditor.t('H5PEditor.CoursePresentation', 'element'));
  }
};

/**
* Find the title for the given library.
*
* @param {String} type Library name
* @param {Function} next Called when we've found the title
*/
H5PEditor.CoursePresentation.prototype.findLibraryTitle = function (library, next) {
  var self = this;

  /** @private */
  var find = function () {
    for (var i = 0; i < self.libraries.length; i++) {
      if (self.libraries[i].name === library) {
        next(self.libraries[i].title);
        return;
      }
    }
  };

  if (self.libraries === undefined) {
    // Must wait until library titles are loaded
    self.once('librariesReady', find);
  }
  else {
    find();
  }
};

/**
 * Callback used by CP when a new element is added.
 *
 * @param {Object} elementParams
 * @param {jQuery} $wrapper
 * @param {Number} slideIndex
 * @param {Object} elementInstance
 * @returns {undefined}
 */
H5PEditor.CoursePresentation.prototype.processElement = function (elementParams, $wrapper, slideIndex, elementInstance) {
  var that = this;

  // Detect type
  var type;
  if (elementParams.action !== undefined) {
    type = elementParams.action.library.split(' ')[0];
  }
  else {
    type = 'goToSlide';
  }

  // Find element identifier
  var elementIndex = $wrapper.index();

  // Generate element form
  if (this.elements[slideIndex] === undefined) {
    this.elements[slideIndex] = [];
  }
  if (this.elements[slideIndex][elementIndex] === undefined) {
    this.elements[slideIndex][elementIndex] = this.generateForm(elementParams, type);
  }

  // Get element
  var element = this.elements[slideIndex][elementIndex];
  element.$wrapper = $wrapper;

  if (that.dnb) {
    var options = {};
    if (elementParams.displayAsButton) {
      options.disableResize = true;
    }

    if (elementParams.action && elementParams.action.library.split(' ')[0] === 'H5P.Image') {
      options.lock = true;
    }

    that.addToDragNBar(element, elementParams, options);
  }

  // Open form dialog when double clicking element
  $wrapper.dblclick(function () {
    that.showElementForm(element, $wrapper, elementParams);
  });

  H5P.jQuery('<div/>', {
    'class': 'h5p-element-overlay'
  }).appendTo($wrapper);

  if (type === 'H5P.ContinuousText' && that.ct === undefined) {
    // Keep track of first CT element!
    that.ct = {
      element: element,
      params: elementParams
    };
  }

  if (elementInstance.onAdd) {
    // Some sort of callback event thing
    elementInstance.onAdd(elementParams, slideIndex);
  }
};

/**
 * Make sure element can be moved and stop moving while resizing.
 *
 * @param {Object} element
 * @param {Object} elementParams
 * @param {Object} options
 * @returns {H5P.DragNBarElement}
 */
H5PEditor.CoursePresentation.prototype.addToDragNBar = function(element, elementParams, options) {
  var self = this;

  var dnbElement = self.dnb.add(element.$wrapper, options);
  dnbElement.contextMenu.on('contextMenuEdit', function () {
    self.showElementForm(element, element.$wrapper, elementParams);
  });

  dnbElement.contextMenu.on('contextMenuRemove', function () {
    if (!confirm(H5PEditor.t('H5PEditor.CoursePresentation', 'confirmRemoveElement'))) {
      return;
    }
    if (H5PEditor.Html) {
      H5PEditor.Html.removeWysiwyg();
    }
    self.removeElement(element, element.$wrapper, (elementParams.action !== undefined && H5P.libraryFromString(elementParams.action.library).machineName === 'H5P.ContinuousText'));
    dnbElement.blur();
  });

  return dnbElement;
};

/**
 * Removes element from slide.
 *
 * @param {Object} element
 * @param {jQuery} $wrapper
 * @param {Boolean} isContinuousText
 * @returns {undefined}
 */
H5PEditor.CoursePresentation.prototype.removeElement = function (element, $wrapper, isContinuousText) {
  var slideIndex = this.cp.$current.index();
  var elementIndex = $wrapper.index();

  var elementInstance = this.cp.elementInstances[slideIndex][elementIndex];
  var removeForm = (element.children.length ? true : false);

  if (isContinuousText) {
    var CTs = this.getCTs(false, true);
    if (CTs.length === 2) {
      // Prevent removing form while there are still some CT elements left
      removeForm = false;

      if (element === CTs[0].element && CTs.length === 2) {
        CTs[1].params.action.params = CTs[0].params.action.params;
      }
    }
    else {
      delete this.params.ct;
      delete this.ct;
    }
  }

  if (removeForm) {
    H5PEditor.removeChildren(element.children);
  }

  // Completely remove element from CP
  if (elementInstance.onDelete) {
    elementInstance.onDelete(this.params, slideIndex, elementIndex);
  }
  this.elements[slideIndex].splice(elementIndex, 1);
  this.cp.elementInstances[slideIndex].splice(elementIndex, 1);
  this.params.slides[slideIndex].elements.splice(elementIndex, 1);

  $wrapper.remove();

  if (isContinuousText) {
    H5P.ContinuousText.Engine.run(this);
  }
};

/**
 * Displays the given form in a popup.
 *
 * @param {jQuery} $form
 * @param {jQuery} $wrapper
 * @param {object} element Params
 * @returns {undefined}
 */
H5PEditor.CoursePresentation.prototype.showElementForm = function (element, $wrapper, elementParams) {
  var that = this;

  var isContinuousText = (elementParams.action !== undefined && H5P.libraryFromString(elementParams.action.library).machineName === 'H5P.ContinuousText');
  if (isContinuousText && that.ct) {
    // Make sure form uses the right text.
    that.ct.element.$form.find('.text .ckeditor').first().html(that.params.ct);
    that.ct.params.action.params.text = that.params.ct;
  }

  element.$form.dialog({
    modal: true,
    draggable: false,
    resizable: false,
    width: '80%',
    maxHeight: H5P.jQuery('.h5p-coursepresentation-editor').innerHeight(),
    position: {my: 'top', at: 'top', of: '.h5p-coursepresentation-editor'},
    dialogClass: "h5p-dialog-no-close",
    appendTo: '.h5p-course-presentation',
    buttons: [
      {
        text: H5PEditor.t('H5PEditor.CoursePresentation', 'remove'),
        class: 'h5p-remove',
        click: function () {
          if (!confirm(H5PEditor.t('H5PEditor.CoursePresentation', 'confirmRemoveElement'))) {
            return;
          }
          if (H5PEditor.Html) {
            H5PEditor.Html.removeWysiwyg();
          }
          element.$form.dialog('close');
          that.removeElement(element, $wrapper, isContinuousText);
          that.dnb.blurAll();
        }
      },
      {
        text: H5PEditor.t('H5PEditor.CoursePresentation', 'done'),
        class: 'h5p-done',
        click: function () {
          // Validate children
          var valid = true;
          for (var i = 0; i < element.children.length; i++) {
            if (element.children[i].validate() === false) {
              valid = false;
            }
          }

          if (isContinuousText) {
            // Store complete CT on slide 0
            that.params.ct = that.ct.params.action.params.text;

            // Split up text and place into CT elements
            H5P.ContinuousText.Engine.run(that);

            setTimeout(function () {
              // Put focus back on ct element
              that.dnb.focus($wrapper);
            }, 1);
          }
          else {
            that.redrawElement($wrapper, element, elementParams);
          }

          if (H5PEditor.Html) {
            H5PEditor.Html.removeWysiwyg();
          }
          element.$form.dialog('close');
        }
      }
    ]
  });

  if (that.dnb !== undefined) {
    setTimeout(function () {
      that.dnb.blurAll();
    }, 0);
  }
};

/**
*
*/
H5PEditor.CoursePresentation.prototype.redrawElement = function($wrapper, element, elementParams) {
  var elementIndex = $wrapper.index();
  var slideIndex = this.cp.$current.index();
  var elementsParams = this.params.slides[slideIndex].elements;
  var elements = this.elements[slideIndex];
  var elementInstances = this.cp.elementInstances[slideIndex];

  // Remove instance of lib:
  elementInstances.splice(elementIndex, 1);

  // Update params
  elementsParams.splice(elementIndex, 1);
  elementsParams.push(elementParams);

  // Update elements
  elements.splice(elementIndex, 1);
  elements.push(element);

  // Update visuals
  $wrapper.remove();

  var instance = this.cp.addElement(elementParams, this.cp.$current, slideIndex);
  var $element = this.cp.attachElement(elementParams, instance, this.cp.$current, slideIndex);

  // Resize element.
  instance = elementInstances[elementInstances.length - 1];
  if ((instance.preventResize === undefined || instance.preventResize === false) && instance.$ !== undefined && !elementParams.displayAsButton) {
    H5P.trigger(instance, 'resize');
  }

  var that = this;
  setTimeout(function () {
    // Put focus back on element
    that.dnb.focus($element);
  }, 1);
};

/**
* Find ContinuousText elements.
*
* @param {Boolean} [firstOnly] Return first element only
* @param {Boolean} [maxTwo] Return after two elements have been found
* @returns {{Object[]|Object}}
*/
H5PEditor.CoursePresentation.prototype.getCTs = function (firstOnly, maxTwo) {
  var self = this;

  var CTs = [];

  for (var i = 0; i < self.elements.length; i++) {
    var slideElements = self.elements[i];
    if (!self.params.slides[i] || !self.params.slides[i].elements) {
      continue;
    }

    for (var j = 0; slideElements !== undefined && j < slideElements.length; j++) {
      var element = slideElements[j];
      var params = self.params.slides[i].elements[j];
      if (params.action !== undefined && params.action.library.split(' ')[0] === 'H5P.ContinuousText') {
        CTs.push({
          element: element,
          params: params
        });

        if (firstOnly) {
          return CTs[0];
        }
        if (maxTwo && CTs.length === 2) {
          return CTs;
        }
      }
    }
  }

  return firstOnly ? null : CTs;
};

/**
 * Collect functions to execute once the tree is complete.
 *
 * @param {function} ready
 * @returns {undefined}
 */
H5PEditor.CoursePresentation.prototype.ready = function (ready) {
  if (this.passReadies) {
    this.parent.ready(ready);
  }
  else {
    this.readies.push(ready);
  }
};

/**
 * Look for field with the given name in the given collection.
 *
 * @param {String} name of field
 * @param {Array} fields collection to look in
 * @returns {Object} field object
 */
H5PEditor.CoursePresentation.findField = function (name, fields) {
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].name === name) {
      return fields[i];
    }
  }
};

// Tell the editor what widget we are.
H5PEditor.widgets.coursepresentation = H5PEditor.CoursePresentation;

// Add translations
H5PEditor.language["H5PEditor.CoursePresentation"] = {
  "libraryStrings": {
    "confirmDeleteSlide": "Are you sure you wish to delete this slide?",
    "sortSlide": "Sort slide - :dir",
    "removeSlide": "Remove slide",
    "cloneSlide": "Clone slide",
    "newSlide": "Add new slide",
    "insertElement": "Click and drag to place :type",
    "newKeyword": "New keyword",
    "deleteKeyword": "Remove this keyword",
    "removeElement": "Remove this element",
    "confirmRemoveElement": "Are you sure you wish to remove this element?",
    "cancel": "Cancel",
    "done": "Done",
    "remove": "Remove",
    "keywordsTip": "Drag in keywords using the two buttons above.",
    "popupTitle": "Edit :type",
    "loading": "Loading...",
    'keywordsMenu': 'Left menu menu',
    "element": "Element"
  }
};
