var H5PEditor = H5PEditor || {};

/**
 * Wizard editor widget module
 *
 * @param {jQuery} $
 */
H5PEditor.widgets.wizard = H5PEditor.Wizard = (function ($, EventDispatcher) {

  /**
   * Initialize wizard editor.
   *
   * @param {mixed} parent
   * @param {Object} field
   * @param {mixed} params
   * @param {function} setValue
   * @returns {_L8.C}
   */
  function C(parent, field, params, setValue) {
    var that = this;

    // Event support
    H5P.EventDispatcher.call(that);

    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;
    this.library = parent.library + '/' + field.name;
    this.children = [];

    this.passReadies = true;
    parent.ready(function () {
      that.passReadies = false;
    });
  }

  // Inheritance
  C.prototype = Object.create(EventDispatcher.prototype);
  C.prototype.constructor = C;

  /**
   * Append field to wrapper.
   *
   * @param {jQuery} $wrapper
   * @returns {undefined}
   */
  C.prototype.appendTo = function ($wrapper) {
    var that = this;
    this.$item = $(this.createHtml()).appendTo($wrapper);
    this.$errors = this.$item.children('.h5p-errors');
    var $panesWrapper = $('<div class="h5peditor-panes"></div>').insertBefore(this.$errors);

    if (this.params === undefined) {
      this.params = {};
      this.setValue(this.field, this.params);
    }
    H5PEditor.processSemanticsChunk(this.field.fields, this.params, $panesWrapper, this);

    this.$panes = $panesWrapper.children();
    this.$tabs = this.$item.find('ol > li > a').click(function () {
      that.showTab($(this));
      return false;
    });

    this.$panes.children('.h5peditor-label').hide();

    // Make sure first tab is selected as default
    this.$tabs.eq(0).click();

    // Create wizard navigation buttons and attach events
    var $prevButton = this.$item.find('.nav-button-prev').click(function () {
      var currentTabId = that.$item.find('.h5peditor-active').attr('data-id');
      that.showTab(that.$item.find('ol > li > a').eq(parseInt(currentTabId) - 1));
    });

    var $nextButton = this.$item.find('.nav-button-next').click(function () {
      var currentTabId = that.$item.find('.h5peditor-active').attr('data-id');
      that.showTab(that.$item.find('ol > li > a').eq(parseInt(currentTabId) + 1));
    });

    // Create wizard navigation wrapper and attach buttons
    $('<div class="h5peditor-wizard-navigation-buttons"></div>')
      .append($prevButton)
      .append($nextButton)
      .appendTo(this.$item);
  };

  /**
   * Update the wizard navigation

   * @param {jQuery} $tab
   * @param {String} currentTabId
   */
  C.prototype.updateWizardNavigation = function ($tab, currentTabId) {
    currentTabId = parseInt(currentTabId, 10);
    var $prevButton = this.$item.find('.nav-button-prev');
    var $nextButton = this.$item.find('.nav-button-next');

    // If there is a previous tab, update navigation prev button
    if (currentTabId > 0) {
      var $prevTab = this.$tabs.eq(currentTabId - 1);

      // Get the specific classname of the previous tab to mimic icon for navigation button
      var prevTabClasses = $prevTab.attr('class').split(' ').filter(function (className) {
        return (className.match(/h5peditor-tab-[a-zA-z]{2,}/i) !== null);
      })[0];

      this.$item.find('.nav-button-prev .nav-button-label')
        .attr('class', 'nav-button-label ' + prevTabClasses)
        .text($prevTab.find('.field-name').text());

      $prevButton.show();
    }
    else {
      $prevButton.hide();
    }

    // If there is a next tab, update navigation next button
    if (currentTabId < this.$tabs.length - 1) {
      var $nextTab = this.$tabs.eq(currentTabId + 1);

      // Get the specific classname of the next tab to mimic icon for navigation button
      var nextTabClasses = $nextTab.attr('class').split(' ').filter(function (className) {
        return (className.match(/h5peditor-tab-[a-zA-z]{2,}/i) !== null);
      })[0];

      this.$item.find('.nav-button-next .nav-button-label')
        .attr('class', 'nav-button-label ' + nextTabClasses)
        .text($nextTab.find('.field-name').text());

      $nextButton.show();
    }
    else {
      $nextButton.hide();
    }
  };

  /**
   * Create HTML for the field.
   */
  C.prototype.createHtml = function () {
    // Create wizard tabs
    var html = '<ol class="h5peditor-tabs">';
    for (var i = 0; i < this.field.fields.length; i++) {
      var field = this.field.fields[i];
      html += C.createTab(i, field);
    }
    html += '</ol>';

    // Create wizard navigation buttons
    html += '<div class="nav-button-prev">' +
              '<span class="nav-button-icon"></span>' +
              '<div>' +
                '<span>' + C.t('previousStep') + '</span>' +
                '<span class="nav-button-label">' + this.field.fields[0].label + '</span>' +
              '</div>' +
            '</div>' +
            '<div class="nav-button-next">' +
              '<div>' +
                '<span>' + C.t('nextStep') + '</span>' +
                '<span class="nav-button-label">' + this.field.fields[1].label + '</span>' +
              '</div>' +
              '<span class="nav-button-icon"></span>' +
            '</div>';

    return H5PEditor.createFieldMarkup(this.field, html);
  };

  /**
   * Display tab.
   *
   * @param {jQuery} $tab
   * @returns {undefined}
   */
  C.prototype.showTab = function ($tab) {
    var id = $tab.attr('data-id');
    this.$panes.hide().eq(id).show();
    this.$tabs.removeClass('h5peditor-active');
    $tab.addClass('h5peditor-active');

    // Update wizard navigation to sync with tabs
    this.updateWizardNavigation($tab, id);

    // Give the poor child a chance to handle tab switching.
    if (this.children[id].setActive !== undefined) {
      this.children[id].setActive();
    }

    this.trigger('stepChanged', {
      id: parseInt(id),
      name: this.field.fields[id].name
    });
  };

  /**
   * Validate the current field.
   *
   * @returns {Boolean}
   */
  C.prototype.validate = function () {
    for (var i = 0; i < this.children.length; i++) {
      if (!this.children[i].validate()) {
        return false;
      }
    }

    return true;
  };

  /**
   * Local translate function.
   *
   * @param {Atring} key
   * @param {Object} params
   * @returns {@exp;H5PEditor@call;t}
   */
  C.t = function (key, params) {
    return H5PEditor.t('H5PEditor.Wizard', key, params);
  };

  /**
   * Collect functions to execute once the tree is complete.
   *
   * @param {function} ready
   * @returns {undefined}
   */
  C.prototype.ready = function (ready) {
    if (this.passReadies) {
      this.parent.ready(ready);
    }
    else {
      this.readies.push(ready);
    }
  };

  /**
   * Remove this item.
   */
  C.prototype.remove = function () {
    H5PEditor.removeChildren(this.children);
    this.$item.remove();
  };

  /**
   * Create HTML for a tab.
   *
   * @param {type} id
   * @param {type} label
   * @returns {String}
   */
  C.createTab = function (id, field) {
    return '<li class="h5peditor-tab-li"><a href="#" class="h5peditor-tab-a h5peditor-tab-' + field.name.toLowerCase() + '" data-id="' + id + '">' +
      '<span class="field-step">' + C.t('step', { ':index': id + 1 }) + '</span>' +
      '<span class="field-name">' + field.label + '</span>' +
    '</a></li>';
  };

  return C;
})(H5P.jQuery, H5P.EventDispatcher);
