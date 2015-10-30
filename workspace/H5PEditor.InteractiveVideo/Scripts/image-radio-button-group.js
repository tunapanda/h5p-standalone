/**
 * ImageRadioButtonGroup widget module
 *
 * @param {H5P.jQuery} $
 */
H5PEditor.widgets.imageRadioButtonGroup = (function ($) {

  var idCounter = 0;
  /**
   * Creates an image radio button group.
   *
   * @class H5PEditor.ImageRadioButtonGroup
   * @param {Object} parent
   * @param {Object} field
   * @param {Object} params
   * @param {function} setValue
   */
  function ImageRadioButtonGroup(parent, field, params, setValue) {
    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;
  }

  /**
   * Append the field to the wrapper.
   * @public
   * @param {H5P.jQuery} $wrapper
   */
  ImageRadioButtonGroup.prototype.appendTo = function ($wrapper) {
    var self = this;

    self.$container = $('<div>', {
      'class': 'field text h5p-image-radio-button-group'
    });

    // Add header:
    $('<span>', {
      'class': 'h5peditor-label',
      html: self.field.label
    }).appendTo(self.$container);

    var $buttonGroup = $('<div>', {
      'class': 'h5p-image-radio-button-container'
    }).appendTo(self.$container);

    for (var i=0, numOptions = self.field.options.length; i < numOptions; i++) {
      var option = self.field.options[i];
      var imgPath = H5P.getLibraryPath(self.field.library) + '/' + option.image;
      var inputId = 'h5p-image-radio-button-' + (idCounter++);

      var $button = $('<div>', {
        'class': 'h5p-image-radio-button ' + option.value
      }).appendTo($buttonGroup);

      $('<input>', {
        type: 'radio',
        name: self.field.name,
        value: option.value,
        id: inputId,
        checked: (self.params === option.value),
        change: function () {
          self.params = $('input[name=' + self.field.name + ']:checked', $buttonGroup).val();
          self.setValue(self.field, self.params);
        }
      }).appendTo($button);

      $('<label>', {
        'for': inputId
      }).append($('<div>', {
        'class': 'image-container',
        alt: option.label
      })).append($('<span>', {
        html: option.label
      })).appendTo($button);

      if (option.description) {
        $('<div>', {
          'class': 'h5p-option-description',
          html: option.description
        }).appendTo($button);
      }
    }

    // Add description:
    $('<span>', {
      'class': 'h5peditor-field-description',
      html: self.field.description
    }).appendTo(self.$container);

    self.$container.appendTo($wrapper);
  };


  /**
   * Validate the current values.
   */
  ImageRadioButtonGroup.prototype.validate = function () {
    return true;
  };

  ImageRadioButtonGroup.prototype.remove = function () {};

  return ImageRadioButtonGroup;
})(H5P.jQuery);
