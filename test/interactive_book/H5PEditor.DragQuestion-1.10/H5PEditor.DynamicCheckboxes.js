var H5PEditor = H5PEditor || {};

/**
 * Editor widget module for dynamic value checkboxes.
 *
 * Displays a list of checkboxes, and the list is regenerated each time the
 * field is set as active unlike H5PEditor.select where the options are
 * generated when the field is initialized, and after that stays the same.
 *
 * Other fields may change the options in dynamicCheckboxes
 */
H5PEditor.widgets.dynamicCheckboxes = H5PEditor.DynamicCheckboxes = (function ($) {
  /**
   * Initialize widget.
   *
   * @param {Object} parent
   * @param {Object} field
   * @param {Object} params
   * @param {function} setValue
   * @returns {_L8.C}
   */
  function C(parent, field, params, setValue) {
    this.parent = parent;
    this.field = field;
    this.setValue = setValue;
    if (params === undefined) {
      if (this.field.multiple) {
        this.params = [];
      }
      else {
        this.params = '';
      }
      setValue(field, this.params);
    }
    else {
      this.params = params;
    }
  }

  /**
   * Append widget to form.
   *
   * @param {jQuery} $wrapper
   * @returns {undefined}
   */
  C.prototype.appendTo = function ($wrapper) {
    this.$item = $(H5PEditor.createFieldMarkup(this.field)).appendTo($wrapper);
    this.$errors = this.$item.children('.h5p-errors');
  };

  /**
   * The widget is set as active.
   * (re)Generate options.
   *
   * @returns {undefined}
   */
  C.prototype.setActive = function () {
    var that = this,
      html = '',
      i, j, option, selected;

    for (i = 0; i < this.field.options.length; i++) {
      option = this.field.options[i];
      selected = false;

      if (this.field.multiple) {
        // Check if selected
        for (j = 0; j < this.params.length; j++) {
          if (this.params[j] === option.value) {
            selected = true;
            break;
          }
        }
        html += '<li><label class="h5p-editor-label"><input type="checkbox" value="' + option.value + '"' + (selected ? ' checked="checked"' : '') + '/><div class="h5p-label-text">' + option.label + '</div></label></li>';
      }
      else {
        // Check if selected
        if (this.params === option.value) {
          selected = true;
        }
        html += '<li><label class="h5p-editor-label"><input type="radio" name="dynboxradio1" value="' + option.value + '"' + (selected ? ' checked="checked"' : '') + '/>' + option.label + '</label></li>';
      }
    }

    this.$item.html(html ? '<div class="h5peditor-label">' + this.field.label + '</div>' + (this.field.multiple ? '<a href="#" class="h5p-selectall">' + H5PEditor.t('H5PEditor.DragQuestion', 'selectAll') + '</a>' : '') + '<ul class="h5peditor-dynamiccheckboxes-select">' + html + '</ul>' : '');

    var updateSelectAll, $a, $checkboxes = this.$item.find('input').change(function () {
      that.change($(this));

      // If all is checked change select all button.
      updateSelectAll();
    });

    $a = this.$item.find('.h5p-selectall').click(function () {
      if ($a.hasClass('h5p-deselectall')) {
        $checkboxes.each(function () {
          var $this = $(this);
          if ($this.is(':checked')) {
            $this.prop('checked', false).change();
          }
        });
      }
      else {
        $checkboxes.each(function () {
          var $this = $(this);
          if (!$this.is(':checked')) {
            $this.prop('checked', true).change();
          }
        });
      }

      return false;
    });

    updateSelectAll = function () {
      if ($checkboxes.length) {
        if ($checkboxes.length === $checkboxes.filter(':checked').length) {
          $a.addClass('h5p-deselectall').text(H5PEditor.t('H5PEditor.DragQuestion', 'deselectAll'));
        }
        else {
          $a.removeClass('h5p-deselectall').text(H5PEditor.t('H5PEditor.DragQuestion', 'selectAll'));
        }
      }
    };
    updateSelectAll();
  };

  /**
   * Update params with changes to checkbox.
   *
   * @param {jQuery} $input
   * @returns {undefined}
   */
  C.prototype.change = function ($input) {
    var i, value = $input.val();

    if (this.field.multiple) {
      if ($input.is(':checked')) {
        this.params.push(value);
      }
      else {
        for (i = 0; i < this.params.length; i++) {
          if (this.params[i] === value) {
            this.params.splice(i, 1);
          }
        }
      }
    }
    else {
      if ($input.is(':checked')) {
        this.params = value;
        this.setValue(this.field, value);
      }
    }
  };

  /**
   * Validate the current field.
   *
   * @returns {Boolean}
   */
  C.prototype.validate = function () {
    return true;
  };

  /**
   *
   * @returns {undefined}
   */
  C.prototype.remove = function () {
    this.$item.remove();
  };

  return C;
})(H5P.jQuery);

// Get translations from H5PEditor.DragQuestion
