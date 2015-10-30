var H5PEditor = H5PEditor || {};

/**
 * Duration widget module
 *
 * @param {jQuery} $
 */
H5PEditor.widgets.duration = H5PEditor.Duration = (function ($) {

  /**
   * Creates a time picker.
   *
   * @param {mixed} parent
   * @param {object} field
   * @param {mixed} params
   * @param {function} setValue
   * @returns {C}
   */
  function C(parent, field, params, setValue) {
    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;
  };

  /**
   * Append the field to the wrapper.
   *
   * @param {jQuery} $wrapper
   * @returns {undefined}
   */
  C.prototype.appendTo = function ($wrapper) {
    var that = this;

    this.$item = $(this.createHtml()).appendTo($wrapper);
    this.$inputs = this.$item.find('input');
    this.$errors = this.$item.children('.h5p-errors');

    this.$inputs.change(function () {
      // Validate
      var value = that.validate();

      if (value) {
        // Set param
        that.params = value;
        that.setValue(that.field, value);
      }
    }).click(function () {
      return false;
    });
  };

  /**
   * Creates HTML for the widget.
   */
  C.prototype.createHtml = function () {
    var input = H5PEditor.createText(this.params !== undefined ? C.humanizeTime(this.params.from) : undefined, 15, 'From') + ' - ' + H5PEditor.createText(this.params !== undefined ? C.humanizeTime(this.params.to) : undefined, 15, 'To');
    var label = H5PEditor.createLabel(this.field, input);

    return H5PEditor.createItem(this.field.widget, label, this.field.description);
  };

  /**
   * Validate the current values.
   */
  C.prototype.validate = function () {
    var that = this;
    var duration = {};

    if (that.$errors.children().length) {
      // Field hasn't been fixed since last validate
      return false;
    }

    this.$inputs.each(function (i) {
      var $input = $(this);
      var value = H5P.trim($input.val());
      var field = that.field.fields[i];

      // Check that the input isn't blank
      if ((that.field.optional === undefined || !that.field.optional) && !value.length) {
        that.$errors.append(H5PEditor.createError(H5PEditor.t('core', 'requiredProperty', {':property': field.name})));
        return false;
      }

      // Split time format and check that we have between one and two colons.
      var values = value.split(':', 4);
      if (values.length !== 2 && values.length !== 3) {
        that.$errors.append(H5PEditor.createError(C.t('invalidTime', {':property': field.name})));
        return false;
      }

      // Validate seconds and add to value
      var allowedChars = new RegExp('^[0-9]+$');
      var j = values.length - 1;

      value = parseInt(values[j]);
      if (!values[j].match(allowedChars) || values[j].length !== 2 || value > 59) {
        that.$errors.append(H5PEditor.createError(C.t('invalidTime', {':property': field.name})));
        return false;
      }

      // Validate minutes
      j = j - 1;
      var minutes = parseInt(values[j]);
      if (!values[j].match(allowedChars) || (values[j - 1] !== undefined && values[j].length !== 2) || (values[j - 1] === undefined && values[j].length !== (minutes + '').length) || minutes > 59) {
        that.$errors.append(H5PEditor.createError(C.t('invalidTime', {':property': field.name})));
        return false;
      }
      // Convert to seconds and add to value
      value += minutes * 60;

      // Validate hours
      j = j - 1;
      if (values[j] !== undefined) {
        var hours = parseInt(values[j]);
        if (!values[j].match(allowedChars) || values[j].length !== (minutes + '').length || hours < 1) {
          that.$errors.append(H5PEditor.createError(C.t('invalidTime', {':property': field.name})));
          return false;
        }
        // Convert to seconds and add to value
        value += hours * 3600;
      }

      // Check that field doesn't exceed its min and max values.
      if (field.max !== undefined && value > field.max) {
        that.$errors.append(H5PEditor.createError(H5PEditor.t('core', 'exceedsMax', {':property': field.name, ':max': C.humanizeTime(field.max)})));
        return false;
      }
      else if (field.min !== undefined && value < field.min) {
        that.$errors.append(H5PEditor.createError(C.t('exceedsMin', {':property': field.name, ':min': C.humanizeTime(field.min)})));
        return false;
      }

      duration[field.name] = value;
    });

    // Check that "To" time always is after "From" time.
    if (duration.from > duration.to) {
      this.$errors.append(H5PEditor.createError(C.t('fromBiggerThanTo')));
    }

    return H5PEditor.checkErrors(this.$errors, this.$inputs, duration);
  };

  /**
   * Remove this item.
   */
  C.prototype.remove = function () {
    this.$item.remove();
  };

  /**
   * Local translate function.
   *
   * @param {Atring} key
   * @param {Object} params
   * @returns {@exp;H5PEditor@call;t}
   */
  C.t = function (key, params) {
    return H5PEditor.t('H5PEditor.Duration', key, params);
  };

  /**
   * Formats time in H:MM:SS.
   *
   * @param {float} seconds
   * @returns {string}
   */
  C.humanizeTime = function (seconds) {
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

  return C;
})(H5P.jQuery);

// Default english translations
H5PEditor.language['H5PEditor.Duration'] = {
  libraryStrings: {
    exceedsMin: '":property" exceeds minimum value of :min.',
    fromBiggerThanTo: '"From" must be earlier than "To".',
    invalidTime: '":property" contains an invalid time format.'
  }
};