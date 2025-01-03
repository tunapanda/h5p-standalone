/*global H5P*/
H5P.ConfirmationDialog = (function (EventDispatcher) {
  "use strict";

  /**
   * Create a confirmation dialog
   *
   * @param [options] Options for confirmation dialog
   * @param [options.instance] Instance that uses confirmation dialog
   * @param [options.headerText] Header text
   * @param [options.dialogText] Dialog text
   * @param [options.cancelText] Cancel dialog button text
   * @param [options.confirmText] Confirm dialog button text
   * @param [options.hideCancel] Hide cancel button
   * @param [options.hideExit] Hide exit button
   * @param [options.skipRestoreFocus] Skip restoring focus when hiding the dialog
   * @param [options.classes] Extra classes for popup
   * @constructor
   */
  function ConfirmationDialog(options) {
    EventDispatcher.call(this);
    var self = this;

    // Make sure confirmation dialogs have unique id
    H5P.ConfirmationDialog.uniqueId += 1;
    var uniqueId = H5P.ConfirmationDialog.uniqueId;

    // Default options
    options = options || {};
    options.headerText = options.headerText || H5P.t('confirmDialogHeader');
    options.dialogText = options.dialogText || H5P.t('confirmDialogBody');
    options.cancelText = options.cancelText || H5P.t('cancelLabel');
    options.closeText = options.closeText || H5P.t('close');
    options.confirmText = options.confirmText || H5P.t('confirmLabel');

    /**
     * Handle confirming event
     * @param {Event} e
     */
    function dialogConfirmed(e) {
      self.hide();
      self.trigger('confirmed');
      e.preventDefault();
    }

    /**
     * Handle dialog canceled
     * @param {Event} e
     */
    function dialogCanceled(e) {
      self.hide();
      self.trigger('canceled');
      e.preventDefault();
    }

    /**
     * Flow focus to button
     * @param {number} index 0 to focus first button, -1 for last
     * @param {Event} e Original tab event
     */
    function flowTo(index, e) {
      if (index === 0) {
        buttons.firstChild.focus();
      }
      else if (index === -1) {
        if (!options.hideExit) {
          exitButton.focus();
        }
        else {
          buttons.lastChild.focus();
        }
      }

      e?.preventDefault();
    }

    // Offset of exit button
    var exitButtonOffset = 2 * 16;
    var shadowOffset = 8;

    // Determine if we are too large for our container and must resize
    var resizeIFrame = false;

    // Create background
    var popupBackground = document.createElement('div');
    popupBackground.classList
      .add('h5p-confirmation-dialog-background', 'hidden', 'hiding');

    // Create outer popup
    var popup = document.createElement('div');
    popup.classList.add('h5p-confirmation-dialog-popup', 'hidden');
    if (options.classes) {
      options.classes.forEach(function (popupClass) {
        popup.classList.add(popupClass);
      });
    }

    popup.setAttribute('role', 'alertdialog');
    popup.setAttribute('aria-modal', 'true');
    popup.setAttribute('aria-labelledby', 'h5p-confirmation-dialog-header-text-' + uniqueId);
    popup.setAttribute('aria-describedby', 'h5p-confirmation-dialog-text-' + uniqueId);
    popupBackground.appendChild(popup);
    popup.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {// Esc key
        // Exit dialog
        dialogCanceled(e);
      }
    });

    // Popup header
    var header = document.createElement('div');
    header.classList.add('h5p-confirmation-dialog-header');
    popup.appendChild(header);

    // Header text
    var headerText = document.createElement('div');
    headerText.classList.add('h5p-confirmation-dialog-header-text');
    headerText.id = 'h5p-confirmation-dialog-dialog-header-text-' + uniqueId;
    headerText.innerHTML = options.headerText;
    header.appendChild(headerText);

    // Popup body
    var body = document.createElement('div');
    body.classList.add('h5p-confirmation-dialog-body');
    popup.appendChild(body);

    // Popup text
    var text = document.createElement('div');
    text.classList.add('h5p-confirmation-dialog-text');
    text.innerHTML = options.dialogText;
    text.id = 'h5p-confirmation-dialog-dialog-text-' + uniqueId;
    body.appendChild(text);

    // Popup buttons
    var buttons = document.createElement('div');
    buttons.classList.add('h5p-confirmation-dialog-buttons');
    body.appendChild(buttons);

    // Cancel button
    if (!options.hideCancel) {
      var cancelButton = document.createElement('button');
      cancelButton.classList.add('h5p-core-cancel-button');
      cancelButton.textContent = options.cancelText;
      cancelButton.addEventListener('click', dialogCanceled);
      buttons.appendChild(cancelButton);
    }
    else {
      // Center remaining buttons
      buttons.classList.add('center');
    }

    // Confirm button
    var confirmButton = document.createElement('button');
    confirmButton.classList.add('h5p-core-button');
    confirmButton.classList.add('h5p-confirmation-dialog-confirm-button');
    confirmButton.setAttribute('aria-label', options.confirmText);
    confirmButton.addEventListener('click', dialogConfirmed);
    const confirmText = document.createElement('span');
    confirmText.textContent = options.confirmText;
    confirmButton.appendChild(confirmText);
    buttons.appendChild(confirmButton);

    // Exit button
    if (!options.hideExit) {
      var exitButton = document.createElement('button');
      exitButton.classList.add('h5p-confirmation-dialog-exit');
      exitButton.setAttribute('aria-label', options.closeText);
      exitButton.addEventListener('click', dialogCanceled);
      exitButton.addEventListener('keydown', (event) => {
        // Forwards tab
        if (event.key === 'Tab' && !event.shiftKey) {
          flowTo(0, event);
        }
      });
      popup.appendChild(exitButton);
    }
    else {
      // Last child should set focus on first (forwards tab)
      buttons.lastChild.addEventListener('keydown', (event) => {
        if (event.key === 'Tab' && !event.shiftKey) {
          flowTo(0, event);
        }
      });
    }

    // First child should set focus on last (backwards tab)
    buttons.firstChild.addEventListener('keydown', (event) => {
      if (event.key === 'Tab' && event.shiftKey) {
        flowTo(-1, event);
      }
    });

    // Wrapper element
    var wrapperElement;

    // Focus capturing
    var focusPredator;

    // Maintains hidden state of elements
    var wrapperSiblingsHidden = [];
    var popupSiblingsHidden = [];

    // Element with focus before dialog
    var previouslyFocused;

    /**
     * Set parent of confirmation dialog
     * @param {HTMLElement} wrapper
     * @returns {H5P.ConfirmationDialog}
     */
    this.appendTo = function (wrapper) {
      wrapperElement = wrapper;
      return this;
    };

    /**
     * Capture the focus element, send it to confirmation button
     * @param {Event} e Original focus event
     */
    var captureFocus = function (e) {
      if (!popupBackground.contains(e.target)) {
        e.preventDefault();
        flowTo(0);
      }
    };

    /**
     * Start capturing focus of parent and send it to dialog
     */
    var startCapturingFocus = function () {
      focusPredator = wrapperElement.parentNode || wrapperElement;
      focusPredator.addEventListener('focus', captureFocus, true);
    };

    /**
     * Clean up event listener for capturing focus
     */
    var stopCapturingFocus = function () {
      focusPredator.removeEventListener('focus', captureFocus, true);
    };

    /**
     * Hide siblings of element from assistive technology
     *
     * @param {HTMLElement} element
     * @returns {Array} The previous hidden state of all siblings
     */
    var hideSiblings = function (element) {
      var hiddenSiblings = [];
      var siblings = element.parentNode.children;
      var i;
      for (i = 0; i < siblings.length; i += 1) {
        // Preserve hidden state
        hiddenSiblings[i] = siblings[i].getAttribute('aria-hidden') ?
          true : false;

        if (siblings[i] !== element) {
          if (siblings[i].getAttribute('aria-live')) {
            siblings[i].setAttribute('aria-busy', true);
          }
          else {
            siblings[i].setAttribute('aria-hidden', true);
          }
        }
      }
      return hiddenSiblings;
    };

    /**
     * Restores assistive technology state of element's siblings
     *
     * @param {HTMLElement} element
     * @param {Array} hiddenSiblings Hidden state of all siblings
     */
    var restoreSiblings = function (element, hiddenSiblings) {
      var siblings = element.parentNode.children;
      var i;
      for (i = 0; i < siblings.length; i += 1) {
        if (siblings[i] !== element && !hiddenSiblings[i]) {
          if (siblings[i].getAttribute('aria-live')) {
            siblings[i].setAttribute('aria-busy', false);
          }
          else {
            siblings[i].removeAttribute('aria-hidden');
          }
        }
      }
    };

    /**
     * Hide siblings in underlay from assistive technologies
     */
    var disableUnderlay = function () {
      wrapperSiblingsHidden = hideSiblings(wrapperElement);
      popupSiblingsHidden = hideSiblings(popupBackground);
    };

    /**
     * Restore state of underlay for assistive technologies
     */
    var restoreUnderlay = function () {
      restoreSiblings(wrapperElement, wrapperSiblingsHidden);
      restoreSiblings(popupBackground, popupSiblingsHidden);
    };

    /**
     * Fit popup to container. Makes sure it doesn't overflow.
     * @params {number} [offsetTop] Offset of popup
     */
    var fitToContainer = function (offsetTop) {
      var popupOffsetTop = parseInt(popup.style.top, 10);
      if (offsetTop !== undefined) {
        popupOffsetTop = offsetTop;
      }

      if (!popupOffsetTop) {
        popupOffsetTop = 0;
      }

      // Overflows height
      if (popupOffsetTop + popup.offsetHeight > wrapperElement.offsetHeight) {
        popupOffsetTop = wrapperElement.offsetHeight - popup.offsetHeight - shadowOffset;
      }

      if (popupOffsetTop - exitButtonOffset <= 0) {
        popupOffsetTop = exitButtonOffset + shadowOffset;

        // We are too big and must resize
        resizeIFrame = true;
      }
      popup.style.top = popupOffsetTop + 'px';
    };

    /**
     * Show confirmation dialog
     * @params {number} offsetTop Offset top
     * @returns {H5P.ConfirmationDialog}
     */
    this.show = function (offsetTop) {
      // Capture focused item
      previouslyFocused = document.activeElement;
      wrapperElement.appendChild(popupBackground);
      startCapturingFocus();
      popupBackground.classList.remove('hidden');
      fitToContainer(offsetTop);
      popup.classList.remove('hidden');
      popupBackground.classList.remove('hiding');

      // Focus first button
      flowTo(0);
      disableUnderlay();

      // Resize iFrame if necessary
      if (resizeIFrame && options.instance) {
        var minHeight = parseInt(popup.offsetHeight, 10) +
          exitButtonOffset + (2 * shadowOffset);
        self.setViewPortMinimumHeight(minHeight);
        options.instance.trigger('resize');
        resizeIFrame = false;
      }

      return this;
    };

    /**
     * Hide confirmation dialog
     * @returns {H5P.ConfirmationDialog}
     */
    this.hide = function () {
      restoreUnderlay();
      popupBackground.classList.add('hiding');
      popup.classList.add('hidden');

      // Restore focus
      stopCapturingFocus();
      if (!options.skipRestoreFocus) {
        previouslyFocused.focus();
      }
      popupBackground.classList.add('hidden');
      wrapperElement.removeChild(popupBackground);
      self.setViewPortMinimumHeight(null);

      return this;
    };

    /**
     * Retrieve element
     *
     * @return {HTMLElement}
     */
    this.getElement = function () {
      return popup;
    };

    /**
     * Get previously focused element
     * @return {HTMLElement}
     */
    this.getPreviouslyFocused = function () {
      return previouslyFocused;
    };

    /**
     * Sets the minimum height of the view port
     *
     * @param {number|null} minHeight
     */
    this.setViewPortMinimumHeight = function (minHeight) {
      var container = document.querySelector('.h5p-container') || document.body;
      container.style.minHeight = (typeof minHeight === 'number') ? (minHeight + 'px') : minHeight;
    };
  }

  ConfirmationDialog.prototype = Object.create(EventDispatcher.prototype);
  ConfirmationDialog.prototype.constructor = ConfirmationDialog;

  return ConfirmationDialog;

}(H5P.EventDispatcher));

H5P.ConfirmationDialog.uniqueId = -1;
