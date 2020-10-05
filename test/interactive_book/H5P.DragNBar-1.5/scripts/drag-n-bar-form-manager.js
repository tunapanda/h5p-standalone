(function (DragNBar, EventDispatcher) {

  /**
   * Allows different forms to be places on top of each other instead of
   * in a dialog.
   *
   * @class H5P.DragNBar.FormManager
   * @extends H5P.EventDispatcher
   * @param {*} parent
   * @param {Object} l10n
   */
  DragNBar.FormManager = function (parent, l10n, customIconClass) {
    /** @alias H5P.DragNBar.FormManager# */
    var self = this;

    // Initialize event inheritance
    EventDispatcher.call(self);

    const formTargets = [self];
    let head, footer, subForm, titles, handleTransitionend, proceedButton, breadcrumbButton, alwaysShowButtons;

    /**
     * Initialize the FormManager.
     * Create frame breadcrumbs, and fullscreen button.
     *
     * @private
     */
    const initialize = function () {
      self.isMainLibrary = !(parent instanceof H5PEditor.Library)

      // Locate target container
      self.formContainer = (self.isMainLibrary ? parent.$form : parent.$libraryWrapper)[0];
      self.formContainer.classList.add('form-manager');
      self.formContainer.classList.add('root-form');

      head = document.createElement('div');
      head.classList.add('form-manager-head');
      footer = document.createElement('div');
      footer.classList.add('form-manager-head');
      footer.classList.add('form-manager-footer');
      self.footer = footer;

      // Create button to toggle preivous menu on narrow layouts
      breadcrumbButton = createButton('breadcrumb-menu', l10n.expandBreadcrumbButtonLabel, self.toggleBreadcrumbMenu);
      breadcrumbButton.classList.add('form-manager-disabled');
      head.appendChild(breadcrumbButton);

      // Create breadcrumb menu to use when the layout is too narrow for the regular breadcrumb
      self.formBreadcrumbMenu = document.createElement('div');
      self.formBreadcrumbMenu.classList.add('form-manager-breadcrumb-menulist');
      head.appendChild(self.formBreadcrumbMenu);

      // Create breadcrumb wrapper
      self.formBreadcrumb = document.createElement('div');
      self.formBreadcrumb.classList.add('form-manager-breadcrumb');
      head.appendChild(self.formBreadcrumb);

      // Create the first part of the breadcrumb
      const titles = createTitles(parent);
      titles.breadcrumb.classList.add('form-manager-comein');
      self.formBreadcrumb.appendChild(titles.breadcrumb);
      self.formBreadcrumbMenu.appendChild(titles.menu);

      // Create 'Proceed to save' button
      proceedButton = createButton('proceed', H5PEditor.t('core', 'proceedButtonLabel'), function () {
        if (manager.exitSemiFullscreen) {
          // Trigger semi-fullscreen exit
          manager.exitSemiFullscreen();
          manager.exitSemiFullscreen = null;
        }
      });
      hideElement(proceedButton);
      head.appendChild(proceedButton);

      // Create a container for the action buttons
      self.formButtons = document.createElement('div');
      self.formButtons.classList.add('form-manager-buttons');
      self.footerFormButtons = document.createElement('div');
      self.footerFormButtons.classList.add('form-manager-buttons');
      hideElement(self.footerFormButtons);
      hideElement(self.formButtons); // Buttons are hidden by default
      footer.appendChild(self.footerFormButtons);
      head.appendChild(self.formButtons);

      // Create 'Delete' button
      self.formButtons.appendChild(createButton('delete', l10n.deleteButtonLabel, function () {
        const e = new H5P.Event('formremove');
        e.data = formTargets.length;
        formTargets[formTargets.length - 1].trigger(e);
        if (!e.preventRemove && formTargets.length > 1) {
          closeForm();
        }
      }));

      // Create 'Done' button
      self.formButtons.appendChild(createButton('done', l10n.doneButtonLabel, function () {
        formTargets[formTargets.length - 1].trigger('formdone', formTargets.length);
        if (formTargets.length > 1) {
          closeForm();
        }
      }));

      // Footer form buttons
      self.footerFormButtons.appendChild(createButton('done', l10n.doneButtonLabel, function () {
        formTargets[formTargets.length - 1].trigger('formdone', formTargets.length);
        if (formTargets.length > 1) {
          closeForm();
        }
      }));

      self.footerFormButtons.appendChild(createButton('delete', l10n.deleteButtonLabel, function () {
        const e = new H5P.Event('formremove');
        e.data = formTargets.length;
        formTargets[formTargets.length - 1].trigger(e);
        if (!e.preventRemove && formTargets.length > 1) {
          closeForm();
        }
      }));

      // Check if we should add the fullscreen button
      if (self.isMainLibrary && H5PEditor.semiFullscreen !== undefined) {
        // Create and insert fullscreen button into header
        const fullscreenButton = createButton('fullscreen', '', function () {
          if (manager.exitSemiFullscreen) {
            // Trigger semi-fullscreen exit
            manager.exitSemiFullscreen();
          }
          else {
            // Trigger semi-fullscreen enter
            manager.exitSemiFullscreen = H5PEditor.semiFullscreen([manager.formContainer], function () {
              if (!subForm) {
                showElement(proceedButton);
              }
              toggleFullscreenButtonState(fullscreenButton, true);
              self.trigger('formentersemifullscreen');
            }, function () {
              manager.exitSemiFullscreen = null;
              if (!subForm) {
                hideElement(proceedButton);
              }
              toggleFullscreenButtonState(fullscreenButton);
              self.trigger('formexitsemifullscreen');
            });
          }
        });
        toggleFullscreenButtonState(fullscreenButton);
        head.appendChild(fullscreenButton);
      }

      window.addEventListener('resize', self.updateFormResponsiveness);
      // Always clean up on remove
      self.on('remove', function () {
        window.removeEventListener('resize', self.updateFormResponsiveness);
      });

      const overlay = document.createElement('div');
      overlay.classList.add('form-mananger-overlay');
      self.formContainer.insertBefore(overlay, self.formContainer.firstChild);

      // Insert everything in the top of the form DOM
      self.formContainer.insertBefore(head, self.formContainer.firstChild);
      hideElement(footer);
      self.formContainer.appendChild(manager.footer);


      // Always clean up on remove
      self.on('validate', function () {
        if (parent.metadata && (!parent.metadata.title || !H5P.trim(parent.metadata.title))) {
          // We are trying to save the form without a title
          self.closeFormUntil(0);
        }
      });
    };

    /**
     * Helper for creating buttons.
     *
     * @private
     * @param {string} id
     * @param {string} text
     * @param {function} clickHandler
     * @return {Element}
     */
    const createButton = function (id, text, clickHandler) {
      const button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.classList.add('form-manager-button');
      button.classList.add('form-manager-' + id);
      button.setAttribute('aria-label', text);
      button.addEventListener('click', clickHandler);

      // Create special inner filler to avoid focus from pointer devices.
      const content = document.createElement('span');
      content.classList.add('form-manager-button-inner');
      content.innerText = text
      content.tabIndex = -1;
      button.appendChild(content);

      return button;
    };

    /**
     * Create two titles, one for the breadcrumb and for the expanded
     * breadcrumb menu used for narrow layouts.
     *
     * @private
     * @param {H5PEditor.Library} libraryField
     * @return {Element[]}
     */
    const createTitles = function (libraryField, customTitle, customIconId) {

      const library = (libraryField.params && libraryField.params.library) ? libraryField.params.library : (libraryField.currentLibrary ? libraryField.currentLibrary : undefined);

      // Create breadcrumb section.
      const title = document.createElement('div');
      title.classList.add('form-manager-title');

      // Create breadcrumb section.
      const menuTitle = document.createElement('div');
      menuTitle.classList.add('form-manager-menutitle');
      menuTitle.tabIndex = '0';
      menuTitle.addEventListener('click', function () {
        handleBreadcrumbClick.call(title);
      });
      menuTitle.addEventListener('keypress', function (e) {
        handleBreadcrumbKeypress.call(title, e);
      });

      // For limiting the length of the menu title
      const menuTitleText = document.createElement('span');
      menuTitleText.classList.add('form-manager-menutitle-text');
      menuTitle.appendChild(menuTitleText);

      // Create a tooltip that can be display the whole text on hover
      const menuTitleTooltip = document.createElement('span');
      menuTitleTooltip.classList.add('form-manager-tooltip');
      menuTitle.appendChild(menuTitleTooltip);

      // Create a text wrapper so we can limit max-width on the text
      const textWrapper = document.createElement('span');
      textWrapper.classList.add('truncatable-text');
      textWrapper.tabIndex = -1;
      title.appendChild(textWrapper);

      // Create a tooltip that can display the whole text on hover
      const tooltip = document.createElement('span');
      tooltip.classList.add('form-manager-tooltip');
      title.appendChild(tooltip);

      /**
       * @private
       * @param {string} title WARNING: This is Text do not use as HTML.
       */
      const setTitle = function (title) {
        textWrapper.innerText = menuTitleText.innerText = tooltip.innerText = menuTitleTooltip.innerText = title;
      };

      /**
       * @private
       * @return {string} WARNING: This is Text do not use as HTML.
       */
      const getTitle = function () {
        if (customTitle) {
          return customTitle;
        }
        else if (libraryField.params && libraryField.params.metadata && libraryField.params.metadata.title &&
            libraryField.params.metadata.title.substr(0, 8) !== 'Untitled' ||
            libraryField.metadata && libraryField.metadata.title &&
            libraryField.metadata.title.substr(0, 8) !== 'Untitled') {
          return getText(libraryField.metadata ? libraryField.metadata.title : libraryField.params.metadata.title);
        }
        else {
          if (libraryField.$select !== undefined) {
            return libraryField.$select.children(':selected').text();
          }
          else {
            return H5PEditor.libraryCache[library].title;
          }
        }
      };

      // Set correct starting title
      setTitle(getTitle());

      /**
       * Help listen for title changes after library has been fully loaded
       * @private
       */
      const listenForTitleChanges = function () {
        if (libraryField.metadataForm) {
          libraryField.metadataForm.on('titlechange', function (e) {
            // Handle changes to the metadata title
            setTitle(getTitle());
            manager.updateFormResponsiveness();
          });
        }

        if (textWrapper.innerText === 'Loading...') {
          // Correct title was not set initally, try again after library load
          setTitle(getTitle());
          manager.updateFormResponsiveness();
        }
      };

      // Listen for title updates
      if (libraryField.metadataForm === undefined && libraryField.change) {
        libraryField.change(listenForTitleChanges);
      }
      else {
        listenForTitleChanges();
      }

      const iconId = customIconId ? customIconId : library.split(' ')[0].split('.')[1].toLowerCase();
      title.classList.add('form-manager-icon-' + iconId);
      menuTitle.classList.add('form-manager-icon-' + iconId);
      if (customIconClass) {
        title.classList.add('form-manager-' + customIconClass);
        menuTitle.classList.add('form-manager-' + customIconClass);
      }

      return {
        breadcrumb: title,
        menu: menuTitle
      };
    };

    /**
     * Look through all parent ancestors to see if a manager already exists.
     *
     * @private
     * @param {*} parent
     * @return {DragNBar.FormManager}
     */
    const findExistingManager = function (parent) {
      if (parent instanceof DragNBar.FormManager) {
        return parent.getFormManager(); // Found our parent manager
      }
      if (parent.parent) {
        // Looks deeper
        return findExistingManager(parent.parent);
      }
      else {
        return self; // Use our self
      }
    };

    /**
     * Help hide an element.
     *
     * @param {Element} element
     * @private
     */
    const hideElement = function (element) {
      // Make sure element is hidden while still retaining its width without
      // expanding the container's height. This is due to some editors resizing
      // if their container changes size which leads to some funny transitions.
      // Also, having invisible height causes resize loops.
      element.classList.add('form-manager-hidden');
      element.setAttribute('aria-hidden', true);
    };

    /**
     * Help show a hidden element again
     *
     * @param {Element} element
     * @private
     */
    const showElement = function (element) {
      element.classList.remove('form-manager-hidden');
      element.removeAttribute('aria-hidden');
    };

    /**
     * Update fuillscreen button's attributes dependent on fullscreen or not
     *
     * @private
     * @param {Element} element The fullscreen button element
     * @param {boolean} isInFullscreen
     */
    const toggleFullscreenButtonState = function (element, isInFullscreen) {
      if (isInFullscreen) {
        // We are entering fullscreen mode
        element.setAttribute('aria-label', H5PEditor.t('core', 'exitFullscreenButtonLabel'));
        element.classList.add('form-manager-exit');
      }
      else {
        // We are exiting fullscreen mode
        element.setAttribute('aria-label', H5PEditor.t('core', 'enterFullscreenButtonLabel'));
        element.classList.remove('form-manager-exit');
      }
    };

    /**
     * Closes the current form.
     *
     * @private
     */
    const closeForm = function () {
      const activeManager = formTargets.pop();

      // Close any open CKEditors
      if (H5PEditor.Html) {
        H5PEditor.Html.removeWysiwyg();
      }

      // Let everyone know we're closing
      activeManager.trigger('formclose');

      // Locate open form and remove it from the manager
      const activeSubForm = activeManager.popForm();

      if (handleTransitionend) {
        // Cancel callback for form if not fully opened.
        activeSubForm.removeEventListener('transitionend', handleTransitionend);
        handleTransitionend = null;
      }

      // Find last part of breadcrumb and remove it from the manager
      const titles = activeManager.popTitles();

      // Remove menu title
      manager.formBreadcrumbMenu.removeChild(titles.menu);

      // The previous breadcrumb must no longer be clickable
      const previousBreadcrumb = titles.breadcrumb.previousSibling;
      previousBreadcrumb.removeEventListener('click', handleBreadcrumbClick);
      previousBreadcrumb.removeEventListener('keypress', handleBreadcrumbKeypress);
      previousBreadcrumb.classList.remove('clickable');
      previousBreadcrumb.removeAttribute('tabindex');

      const headHeight = manager.getFormHeadHeight();

      // Freeze container height to avoid jumping while showing elements
      manager.formContainer.style.height = (activeSubForm.getBoundingClientRect().height + headHeight) + 'px';

      // Make underlay visible again
      if (activeSubForm.previousSibling.classList.contains('form-manager-form')) {
        // This is not our last sub-form
        showElement(activeSubForm.previousSibling);
      }
      else {
        // Show bottom form
        for (let i = 1; i < manager.formContainer.children.length - 1; i++) {
          showElement(manager.formContainer.children[i]);
        }

        // No need for the buttons any more
        if (!alwaysShowButtons) {
          hideElement(manager.formButtons);
          manager.formButtons.classList.remove('form-manager-comein');

          // Hide footer
          manager.footerFormButtons.classList.remove('form-manager-comein');
          hideElement(manager.footerFormButtons);
          hideElement(manager.footer);
        }

        manager.formContainer.classList.add('root-form');
      }

      // Animation fix for fullscreen max-width limit.
      activeSubForm.style.marginLeft = window.getComputedStyle(activeSubForm).marginLeft

      // Make the sub-form animatable
      activeSubForm.classList.add('form-manager-movable');

      // Resume natural container height
      manager.formContainer.style.height = '';

      // Set sub-form height to cover container
      activeSubForm.style.height = (manager.formContainer.getBoundingClientRect().height - headHeight) + 'px';

      // Clean up when the final transition animation is finished
      onlyOnce(activeSubForm, 'transitionend', function () {
        // Remove from DOM
        manager.formContainer.removeChild(activeSubForm);
      });
      // Start the animation
      activeSubForm.classList.remove('form-manager-slidein');

      if (titles.breadcrumb.offsetWidth === 0) {
        // Remove last breadcrumb section in case it's hidden
        manager.formBreadcrumb.removeChild(titles.breadcrumb);
      }
      else {
        onlyOnce(titles.breadcrumb, 'transitionend', function () {
          // Remove last breadcrumb section
          manager.formBreadcrumb.removeChild(titles.breadcrumb);
        });
        // Start the animation
        titles.breadcrumb.classList.remove('form-manager-comein');
      }

      if (!subForm) {
        if (proceedButton && manager.exitSemiFullscreen) {
          // We are in fullscreen and closing sub-form, show proceed button
          showElement(proceedButton);
        }
        if (breadcrumbButton) {
          breadcrumbButton.classList.add('form-manager-disabled');
        }
      }
      if (self.formContainer.classList.contains('mobile-menu-open')) {
        self.toggleBreadcrumbMenu();
      }

      // Scroll parent manager header into view
      manager.formButtons.scrollIntoView();
    };

    /**
     * The breadcrumb click handler figures out how many forms to close.
     *
     * @private
     */
    const handleBreadcrumbClick = function () {
      for (let i = 0; i < manager.formBreadcrumb.children.length; i++) {
        if (manager.formBreadcrumb.children[i] === this) {
          manager.closeFormUntil(i);
          break;
        }
      }
    };

    /**
     * The breadcrumb click handler figures out how many forms to close.
     *
     * @private
     */
    const handleBreadcrumbKeypress = function (e) {
      if (e.which === 13 || e.which === 32) {
        handleBreadcrumbClick.call(this);
      }
    };

    /**
     * Close all forms until the given index.
     *
     * @param {number} index
     */
    self.closeFormUntil = function (index) {
      while (formTargets.length - 1 !== index) {
        formTargets[formTargets.length - 1].trigger('formdone');
        closeForm();
      }
    };

    /**
     * Retrieve the current form element and remove it from the manager.
     *
     * @return {Element}
     */
    self.popForm = function () {
      const sF = subForm;
      subForm = null;
      return sF;
    };

    /**
     * Retrieve the current title element and remove it from the manager.
     *
     * @return {Element}
     */
    self.popTitles = function () {
      const t = titles;
      titles = null;
      return t;
    };

    /**
     * Retrieve the active manager.
     *
     * @return {DragNBar.FormManager}
     */
    self.getFormManager = function () {
      return manager;
    };

    /**
     * Set the form manager to be used for the next button clicks.
     *
     * @param {DragNBar.FormManager} target
     */
    self.addFormTarget = function (target) {
      formTargets.push(target);
    };

    /**
     * Create a new sub-form and shows it.
     *
     * @param {H5PEditor.Library} libraryField
     * @param {Element} formElement
     */
    self.openForm = function (libraryField, formElement, customClass, customTitle, customIconId) {
      if (subForm) {
        return; // Prevent opening more than one sub-form at a time per editor.
      }

      // Tell manager that we should be receiving the next buttons events
      manager.formContainer.classList.remove('root-form');
      manager.addFormTarget(self);

      // Create the new sub-form
      subForm = document.createElement('div');
      subForm.classList.add('form-manager-form');
      subForm.classList.add('form-manager-movable');
      if (customClass) {
        subForm.classList.add(customClass);
      }
      subForm.appendChild(formElement);

      // Ensure same height as container
      subForm.style.height = (manager.formContainer.getBoundingClientRect().height - manager.getFormHeadHeight()) + 'px';

      // Insert into DOM
      manager.formContainer.appendChild(subForm);

      // Make last part of breadcrumb clickable
      const lastBreadcrumb = manager.formBreadcrumb.lastChild;
      lastBreadcrumb.addEventListener('click', handleBreadcrumbClick);
      lastBreadcrumb.addEventListener('keypress', handleBreadcrumbKeypress);
      lastBreadcrumb.classList.add('clickable');
      lastBreadcrumb.tabIndex = '0';

      // Add breadcrumb section
      titles = createTitles(libraryField, customTitle, customIconId);
      manager.formBreadcrumb.appendChild(titles.breadcrumb);
      manager.formBreadcrumbMenu.insertBefore(titles.menu, manager.formBreadcrumbMenu.firstChild);

      // Show our buttons
      showElement(manager.formButtons);
      showElement(manager.footerFormButtons);
      showElement(manager.footer);

      // Ensure footer is at the bottom of the form
      manager.formContainer.appendChild(manager.footer);

      // When transition animation is done and the form is fully open...
      handleTransitionend = onlyOnce(subForm, 'transitionend', function () {
        handleTransitionend = null;

        // Hide everything except first, second, last child and footer
        for (let i = 2; i < manager.formContainer.children.length - 1; i++) {
          const child = manager.formContainer.children[i];
          const skipHiding = child === subForm
            || child.classList.contains('sp-container')
            || child.classList.contains('form-manager-footer');
          if (!skipHiding) {
            hideElement(manager.formContainer.children[i]);
          }
        }

        // Resume natural height
        subForm.style.height = '';
        subForm.style.marginLeft = '';
        subForm.classList.remove('form-manager-movable');

        self.trigger('formopened');
      });

      // Start animation on the next tick
      setTimeout(function () {
        // Animation fix for fullscreen max-width limit.
        subForm.style.marginLeft = (parseFloat(window.getComputedStyle(manager.formContainer.children[manager.formContainer.children.length - 2]).marginLeft) - 20) + 'px';

        subForm.classList.add('form-manager-slidein');
        titles.breadcrumb.classList.add('form-manager-comein');
        manager.formButtons.classList.add('form-manager-comein');
        manager.footerFormButtons.classList.add('form-manager-comein');
        manager.updateFormResponsiveness();
      }, 0);

      if (proceedButton && manager.exitSemiFullscreen) {
        // We are in fullscreen and opening sub-form, hide Proceed button
        hideElement(proceedButton);
      }
      if (breadcrumbButton) {
        breadcrumbButton.classList.remove('form-manager-disabled');
      }
    };

    /**
     * Check if the sub-form is fully opened. (animation finished)
     *
     * @return {boolean}
     */
    self.isFormOpen = function () {
      return subForm && !handleTransitionend;
    };

    /**
     * Determine the overall height of the form head section.
     *
     * @return {number}
     */
    self.getFormHeadHeight = function () {
      return (alwaysShowButtons ? 0 : head.getBoundingClientRect().height);
    };

    /**
     * Toggle the breadcrumb menu.
     */
    self.toggleBreadcrumbMenu = function () {
      if (self.formContainer.classList.contains('mobile-menu-open')) {
        // Close breadcrumb menu
        self.formContainer.classList.remove('mobile-menu-open');
        breadcrumbButton.children[0].innerText = l10n.expandBreadcrumbButtonLabel;
        breadcrumbButton.setAttribute('aria-label', l10n.expandBreadcrumbButtonLabel);
        self.formBreadcrumbMenu.classList.remove('form-manager-comein');
      }
      else {
        // Open breadcrumb menu
        self.formContainer.classList.add('mobile-menu-open');
        breadcrumbButton.children[0].innerText = l10n.collapseBreadcrumbButtonLabel;
        breadcrumbButton.setAttribute('aria-label', l10n.collapseBreadcrumbButtonLabel);
        self.formBreadcrumbMenu.classList.add('form-manager-comein');
      }
    };

    /**
     * Resize form header elements to fit better inside narrow forms.
     */
    self.updateFormResponsiveness = function () {
      if (head.classList.contains('mobile-view-large')) {
        head.classList.remove('mobile-view-large');
      }
      if (self.formContainer.classList.contains('mobile-view-small')) {
        self.formContainer.classList.remove('mobile-view-small');
      }
      if (head.offsetWidth < 481) {
        self.formContainer.classList.add('mobile-view-small');
      }

      /**
       * Enable tooltips where we have text-ellipsis.
       *
       * @private
       * @param {Element} element
       */
      const updateActiveTooltips = function (element) {
        let tooltipActive;
        for (let i = 0; i < element.children.length; i++) {
          const breadcrumbTitle = element.children[i];
          if (breadcrumbTitle.firstChild.offsetWidth && breadcrumbTitle.firstChild.scrollWidth > breadcrumbTitle.firstChild.offsetWidth + 1) {
            breadcrumbTitle.classList.add('form-mananger-tooltip-active');
            tooltipActive = true;
          }
          else {
            breadcrumbTitle.classList.remove('form-mananger-tooltip-active');
          }
        }
        return tooltipActive;
      };
      if (updateActiveTooltips(self.formBreadcrumb)) {
        head.classList.add('mobile-view-large');
        // Check again since we made buttons smaller
        updateActiveTooltips(self.formBreadcrumb)
      }
      updateActiveTooltips(self.formBreadcrumbMenu);
    };

    /**
     * Keep the buttons visible even though the last sub-form is closed.
     *
     * @param {Boolean} state
     */
    self.setAlwaysShowButtons = function (state) {
      alwaysShowButtons = state;

      if (alwaysShowButtons) {
        // Show our buttons
        showElement(manager.formButtons);
        manager.formButtons.classList.add('form-manager-comein');
      }
    };

    // Figure out which manager to use.
    const manager = findExistingManager(parent);
    if (manager === self) {
      initialize(); // We are the first of our kind
    }
  };

  DragNBar.FormManager.prototype = Object.create(EventDispatcher.prototype);
  DragNBar.FormManager.prototype.constructor = DragNBar.FormManager;

  /**
   * Help convert any HTML into text.
   *
   * @param {string} value
   * @return {string}
   */
  const getText = function (value) {
    const textNode = H5PEditor.$.parseHTML(value);
    if (textNode !== null) {
      return textNode[0].nodeValue;
    }
    return value;
  };

  /**
   * Help make sure that an event handler is only triggered once.
   *
   * @private
   * @param {Element} element
   * @param {string} eventName
   * @param {function} handler
   * @return {function} Callback in case of manual cancellation
   */
  const onlyOnce = function (element, eventName, handler) {
    const callback = function () {
      // Make sure we're only called once.
      element.removeEventListener(eventName, callback);

      // Trigger the real handler
      handler.apply(this, arguments);
    };
    element.addEventListener(eventName, callback);
    return callback;
  };

})(H5P.DragNBar, H5P.EventDispatcher);
