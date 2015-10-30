var H5P = H5P || {};

/**
 * Class responsible for creating a help text dialog
 */
H5P.JoubelHelpTextDialog = (function ($) {

  /**
   * Display a pop-up containing a message.
   *
   * @param {H5P.jQuery}  $container  The container which message dialog will be appended to
   * @param {string}      message     The message
   * @return {H5P.jQuery}
   */
  function JoubelHelpTextDialog(header, message) {
    var $helpTextDialogBox = $('<div>', {
      'class': 'joubel-help-text-dialog-box'
    });

    var $helpTextDialogBackground = $('<div>', {
      'class': 'joubel-help-text-dialog-background'
    }).appendTo($helpTextDialogBox);

    var $helpTextDialogContainer = $('<div>', {
      'class': 'joubel-help-text-dialog-container'
    }).appendTo($helpTextDialogBox);

    $('<div>', {
      'class': 'joubel-help-text-header',
      'html': header
    }).appendTo($helpTextDialogContainer);

    $('<div>', {
      'class': 'joubel-help-text-body',
      'html': message
    }).appendTo($helpTextDialogContainer);

    $('<div>', {
      'class': 'joubel-help-text-remove',
      'tabindex': 0
    }).click(function () {
      $helpTextDialogBox.remove();
    }).keydown(function (e) {
      var keyPressed = e.which;
      // 32 - space
      if (keyPressed === 32) {
        $(this).click();
        e.preventDefault();
      }
    }).appendTo($helpTextDialogContainer);

    return $helpTextDialogBox;
  }

  return JoubelHelpTextDialog;
}(H5P.jQuery));
