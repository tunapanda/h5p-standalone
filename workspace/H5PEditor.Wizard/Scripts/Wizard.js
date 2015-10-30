var H5PEditor = H5PEditor || {};

/**
 * Wizard editor widget module
 *
 * @param {jQuery} $
 */
H5PEditor.widgets.wizard = H5PEditor.Wizard = (function ($) {

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
  };

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
    this.$tabs.eq(0).click();

    this.$panes.children('.h5peditor-label').hide();
  };

  /**
   * Create HTML for the field.
   */
  C.prototype.createHtml = function () {
    var tabs = '';

    if (this.field.label !== 0) {
      tabs += '<div class="h5peditor-label">' + (this.field.label === undefined ? this.field.name : this.field.label) + '</div>';
    }

    tabs += '<ol class="h5peditor-tabs">';

    for (var i = 0; i < this.field.fields.length; i++) {
      var field = this.field.fields[i];
      tabs += C.createTab(i, field);
    }

    tabs += '</ol>';

    return H5PEditor.createItem(this.field.widget, tabs);
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

    // Give the poor child a chance to handle tab switching.
    if (this.children[id].setActive !== undefined) {
      this.children[id].setActive();
    }

    H5P.externalDispatcher.trigger('wizard-tab-changed', {
      fieldName: this.field.name,
      library: this.library,
      tabIndex: parseInt(id)
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
    return '<li class="h5peditor-tab-li"><a href="#" class="h5peditor-tab-a h5peditor-tab-' + field.name.toLowerCase() + '" data-id="' + id + '">' + field.label + '</a></li>';
  };

  return C;
})(H5P.jQuery);
