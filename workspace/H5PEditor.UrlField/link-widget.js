/*global H5PEditor, H5P */
H5PEditor.widgets.linkWidget = (function ($) {

  /**
   * Initialize link widget
   *
   * @param parent
   * @param field
   * @param params
   * @param setValue
   */
  function LinkWidget(parent, field, params, setValue) {
    var self = this;

    // Tell editor to handle passing readies.
    self.passReadies = false;

    // Create link widget container
    var $container = $('<div>', {
      'class': 'h5p-link-widget'
    });

    // Link fields
    var $linkFields = $('<div>', {
      'class': 'h5p-link-fields'
    }).appendTo($container);

    // Error field
    var $errorField = $('<div>', {
      'class': 'h5p-link-errors'
    }).appendTo($container);

    // Extend params with default values
    params = $.extend({}, params);
    setValue(field, params);

    // Process semantics and place them in container
    H5PEditor.processSemanticsChunk(field.fields, params, $linkFields, self);

    // Selector element
    var $selectElement = $linkFields.find('.field.select').addClass('h5p-link-protocol-selector');
    var $selector = $selectElement.find('select');

    // Url text element
    var $urlElement = $linkFields.find('.field.text').addClass('h5p-link-url');
    var $urlText = $urlElement.find('.h5peditor-text');

    // Move error messages
    $selectElement.find('.h5p-errors').appendTo($errorField);
    $urlElement.find('.h5p-errors').appendTo($errorField);

    // Register listener for changes in url field
    $urlText.on('input propertychange paste', function () {
      findUrlProtocol();
    });

    /**
     * Finds url protocol and sets it in selector if found.
     */
    var findUrlProtocol = function () {
      var $options = $('option', $selector);
      $options.each(function (idx, option) {
        if ($urlText.val().substr(0, option.value.length) === option.value) {
          $urlText.val($urlText.val().substr(option.value.length));
          $selector.val(option.value);
        }
      });

      // Make sure params are updated
      params.url = $urlText.val();
      params.protocol = $selector.val();
    };

    /**
     * Validate the url
     */
    self.validate = function () {

      // We only require the URL field to be non-empty
      return $urlText.val().trim().length >= 1;
    };

    /**
     * Remove widget
     */
    self.remove = function () {
      $container.remove();
    };

    /**
     * Append link widget to wrapper
     *
     * @param {H5P.jQuery} $wrapper
     */
    self.appendTo = function ($wrapper) {
      $container.appendTo($wrapper);
    };
  }

  return LinkWidget;

})(H5P.jQuery);
