/*global H5P*/
var H5PEditor = H5PEditor || {};

/**
 * Interactive Video editor widget module
 * TODO: Rewrite to use H5P.DragQuestion for previewing?

 * @param {jQuery} $
 */
H5PEditor.widgets.dragQuestion = H5PEditor.DragQuestion = (function ($, DragNBar) {
  /**
   * Must be changed if the semantics for the elements changes.
   * @πvate
   * @type {string}
   */
  var clipboardKey = 'H5PEditor.DragQuestion';

  /**
   * Initialize interactive video editor.
   *
   * @param {Object} parent
   * @param {Object} field
   * @param {Object} params
   * @param {function} setValue
   */
  function C(parent, field, params, setValue) {
    var that = this;

    this.fakeDropzoneLibrary = 'H5P.DragQuestionDropzone 0.1';

    this.parent = parent;

    // Set params
    this.params = $.extend({
      elements: [],
      dropZones: []
    }, params);
    setValue(field, this.params);

    // Get updates for fields
    H5PEditor.followField(parent, 'settings/background', function (params) {
      that.setBackground(params);
    });
    H5PEditor.followField(parent, 'settings/size', function (params) {
      that.setSize(params);
    });

    // Need the override background opacity
    this.backgroundOpacity = parent.parent.params.backgroundOpacity;
    this.backgroundOpacity = (this.backgroundOpacity === undefined || this.backgroundOpacity.trim() === '') ? undefined : this.backgroundOpacity;

    // Update opacity for all dropzones/draggables when global background opacity is changed
    parent.ready(function () {
      H5PEditor.findField('../behaviour/backgroundOpacity', parent).$item.find('input').on('change', function () {
        that.backgroundOpacity = $(this).val().trim();
        that.backgroundOpacity = (that.backgroundOpacity === '') ? undefined : that.backgroundOpacity;
        that.updateAllElementsOpacity(that.elements, that.params.elements, 'element');
      });
    });

    // Get options from semantics, clone since we'll be changing values.
    this.elementFields = H5P.cloneObject(field.fields[0].field.fields, true);
    this.dropZoneFields = H5P.cloneObject(field.fields[1].field.fields, true);
    this.elementLibraryOptions = this.elementFields[0].options;
    if (typeof this.elementLibraryOptions[0] === 'object') {
      this.elementLibraryOptions = this.elementLibraryOptions.map(function (option) {
        return option.name;
      });
    }

    this.elementDropZoneFieldWeight = 5;
    this.elementFields[this.elementDropZoneFieldWeight].options = [];
    this.dropZoneElementFieldWeight = 6;
    this.elementOptions = [];

    this.parent = parent;
    this.field = field;

    this.passReadies = true;
    parent.ready(function () {
      that.passReadies = false;
    });

    H5P.$window.on('resize', function () {
      if (that.size !== undefined && that.size.width !== undefined) {
        that.resize();
      }
    });

    // Update paste button
    H5P.externalDispatcher.on('datainclipboard', function (event) {
      if (!that.libraries) {
        return;
      }
      var canPaste = !event.data.reset;
      if (canPaste) {
        // Check if content type is supported here
        canPaste = that.canPaste(H5P.getClipboard());
      }
      that.dnb.setCanPaste(canPaste);
    });
  }

  /**
   * Append field to wrapper.
   *
   * @param {jQuery} $wrapper
   * @returns {undefined}
   */
  C.prototype.appendTo = function ($wrapper) {
    var that = this;

    this.$item = $(this.createHtml()).appendTo($wrapper);
    this.$editor = this.$item.children('.h5peditor-dragquestion');
    this.$dnbWrapper = this.$item.children('.h5peditor-dragnbar');
    this.$dialog = this.$item.children('.h5peditor-fluid-dialog');
    this.$dialogInner = this.$dialog.children('.h5peditor-fd-inner');
    this.$errors = this.$item.children('.h5p-errors');

    this.$editor.attr('tabindex', -1);

    // Handle click events for dialog buttons.
    this.$dialog.find('.h5peditor-done').click(function () {
      if (that.doneCallback() !== false) {
        that.hideDialog();
      }
      return false;
    }).end().find('.h5peditor-remove').click(function () {
      if (confirm(C.t('confirmRemoval'))) {
        that.removeCallback();
        that.hideDialog();
      }
      return false;
    });
  };

  /**
   * Check if the clipboard can be pasted into DnD.
   *
   * @param {Object} [clipboard] Clipboard data.
   * @return {boolean} True, if clipboard can be pasted.
   */
  C.prototype.canPaste = function (clipboard) {
    if (clipboard) {
      if (clipboard.from === clipboardKey &&
          (!clipboard.generic || this.supported(clipboard.generic.library))) {
        // Content comes from the same version of DQ
        // Non generic part = must be content like gotoslide or similar
        return true;
      }
      else if (clipboard.generic && this.supported(clipboard.generic.library)) {
        // Supported library from another content type
        return true;
      }
    }

    return false;
  };

  /**
   * Check if library is supported by Drag Question
   *
   * @private
   * @param {string} lib uber name
   * @returns {boolean}
   */
  C.prototype.supported = function (lib) {
    for (var i = 0; i < this.libraries.length; i++) {
      if (this.libraries[i].restricted !== true && this.libraries[i].uberName === lib) {
        return true; // Library is supported and allowed
      }
    }

    return false;
  };

  /**
   * Create HTML for the field.
   *
   * @returns {String}
   */
  C.prototype.createHtml = function () {
    var html = '';
    if (this.field.label !== 0) {
      html += '<span class="h5peditor-label">' + this.field.label + '</span>';
    }

    html += '<div class="h5peditor-dragnbar"></div>' +
      '<div class="h5peditor-dragquestion">' + C.t('noTaskSize') + '</div>' +
      '<div class="h5peditor-fluid-dialog">' +
      '  <div class="h5peditor-fd-inner"></div>' +
      '  <div class="h5peditor-fd-buttons">' +
      '    <a href="#" class="h5peditor-fd-button h5peditor-done">' + C.t('done') + '</a>' +
      '    <a href="#" class="h5peditor-fd-button h5peditor-remove">' + C.t('remove') + '</a>' +
      '  </div>' +
      '</div>';

    if (this.field.description !== undefined) {
      html += '<div class="h5peditor-field-description">' + this.field.description + '</div>';
    }

    // removes the description field, so it's not re-rendered on top
    var field = this.removeAttribute(this.field, 'description');

    return H5PEditor.createFieldMarkup(field, html);
  };

  /**
   * Clones an object, and removes an attribute
   *
   * @param {object} obj
   * @param {string} attributeName
   *
   * @return {object}
   */
  C.prototype.removeAttribute = function (obj, attributeName) {
    var result = H5P.cloneObject(obj);
    result[attributeName] = undefined;
    return result;
  };

  /**
   * Set current background.
   *
   * @param {Object} params
   * @returns {undefined}
   */
  C.prototype.setBackground = function (params) {
    var path = params === undefined ? '' : params.path;
    if (path !== '') {
      // Add correct base path
      path = 'url("' + H5P.getPath(path, H5PEditor.contentId) + '")';
    }

    this.$editor.css({
      backgroundImage: path
    });
  };

  /**
   * Set current dimensions.
   *
   * @param {Object} params
   * @returns {undefined}
   */
  C.prototype.setSize = function (params) {
    this.size = params;
  };

  /**
   * Apply new size to task editor once visible.
   *
   * @returns {undefined}
   */
  C.prototype.setActive = function () {
    var that = this;
    if (this.size === undefined || this.size.width === undefined) {
      return;
    }

    if (this.dnb === undefined) {
      this.$editor.html('<div class="h5p-throbber">' + H5PEditor.t('core', 'loading') + '</div>')
        .addClass('h5p-ready');
      H5PEditor.LibraryListCache.getLibraries(this.elementLibraryOptions, function (libraries) {
        that.libraries = libraries;

        // Add fake library for copy&paste (Dropzones are no libraries)
        libraries.push({
          uberName: that.fakeDropzoneLibrary,
          name: that.fakeDropzoneLibrary.split(' ')[0],
          title: that.fakeDropzoneLibrary.split(' ')[0].split('.')[1],
          majorVersion: that.fakeDropzoneLibrary.split(' ')[1].split('.')[0],
          minorVersion: that.fakeDropzoneLibrary.split(' ')[1].split('.')[1],
          restricted: false,
          runnable: 0
        });

        // Prevents duplicate loading
        if (this.dnb === undefined) {
          that.activateEditor(libraries);
        }
      });
    }

    this.resize();
  };

  /**
   * Adapt the editor when the window changes size.
   */
  C.prototype.resize = function () {
    if (!this.$editor.is(':visible')) {
      return;
    }
    if (this.fontSize === undefined) {
      // Get editor default font size.
      this.fontSize = parseInt(this.$editor.css('fontSize'));
    }

    var maxWidth = this.$item.width();
    var editorCss;
    if (this.size.width < maxWidth) {
      editorCss = {
        width: this.size.width,
        height: this.size.height,
        fontSize: this.fontSize
      };
      this.$dnbWrapper.css({
        width: this.size.width
      });
    }
    else {
      editorCss = {
        width: '100%',
        height: maxWidth * (this.size.height / this.size.width),
        fontSize: this.fontSize * (maxWidth / this.size.width)
      };
      this.$dnbWrapper.css({
        width: '100%'
      });
    }

    this.$editor.css(editorCss);
    if (this.dnb !== undefined) {
      this.dnb.dnr.setContainerEm(editorCss.fontSize);
    }

    this.pToEm = (parseFloat(window.getComputedStyle(this.$editor[0]).width) / this.fontSize) / 100;
  };

  /**
   * Activate DragNBar and add elements.
   *
   * @returns {undefined}
   */
  C.prototype.activateEditor = function (libraries) {
    var that = this;
    this.$editor.html('').addClass('h5p-ready');

    // Ignore fake libraries
    const buttonLibraries = libraries.filter(function (library) {
      return (library.uberName !== that.fakeDropzoneLibrary);
    });

    // Create new bar
    this.dnb = new DragNBar(this.getButtons(buttonLibraries), this.$editor, this.$item, {libraries: libraries});
    that.dnb.dnr.snap = 10;

    // Add event handling
    this.dnb.stopMovingCallback = function (x, y) {
      // Update params when the element is dropped.
      var id = that.dnb.dnd.$element.data('id');
      var params = that.dnb.dnd.$element.hasClass('h5p-dq-dz') ? that.params.dropZones[id] : that.params.elements[id];
      params.x = x;
      params.y = y;
    };
    this.dnb.dnd.releaseCallback = function () {
      // Edit element when it is dropped.
      if (that.dnb.newElement) {
        setTimeout(function () {
          that.dnb.dnd.$element.dblclick();
          that.dnb.blurAll();
        }, 1);
      }
    };
    this.dnb.attach(this.$dnbWrapper);

    // Set paste button
    this.dnb.setCanPaste(this.canPaste(H5P.getClipboard()));

    this.dnb.on('paste', function (event) {
      var pasted = event.data;
      var $element;

      if (!pasted.generic || !that.supported(pasted.generic.library)) {
        return alert(H5PEditor.t('H5P.DragNBar', 'unableToPaste'));
      }

      if (pasted.from === clipboardKey) {
        // Pasted content comes from the same version of DQ
        var isDropZone = pasted.generic.library === that.fakeDropzoneLibrary;

        that.center(pasted.specific);

        if (isDropZone) {
          that.params.dropZones.push(pasted.specific);
          $element = that.insertDropZone(that.params.dropZones.length - 1);
        }
        else {
          that.params.elements.push(pasted.specific);
          $element = that.insertElement(that.params.elements.length - 1);
        }

        setTimeout(function () {
          that.dnb.focus($element);
        });

      }
      else {
        // Supported library from another content type
        var id = C.getLibraryID(pasted.generic.library);
        var elementParams = C.getDefaultElementParams(id);
        elementParams.type = pasted.generic;
        elementParams.width = (pasted.width || elementParams.width / that.pToEm) * that.pToEm;
        elementParams.height = (pasted.height || elementParams.height / that.pToEm) * that.pToEm;

        that.center(elementParams);
        that.params.elements.push(elementParams);
        $element = that.insertElement(that.params.elements.length - 1);
        setTimeout(function () {
          that.dnb.focus($element);
        });
      }
    });

    /**
     * Update params on end of resize
     * Dimensions contains a data object where each dimensions is optional.
     */
    this.dnb.dnr.on('stoppedResizing', function (dimensions) {
      var id = that.dnb.$element.data('id');
      var params = that.dnb.$element.hasClass('h5p-dq-dz') ? that.params.dropZones[id] : that.params.elements[id];
      var containerStyle = window.getComputedStyle(that.$editor[0]);

      // Set dimensions if they were passed in
      if (dimensions.data.left !== undefined) {
        params.x = dimensions.data.left / (parseFloat(containerStyle.width) / 100);
      }
      if (dimensions.data.top !== undefined) {
        params.y = dimensions.data.top / (parseFloat(containerStyle.height) / 100);
      }
      if (dimensions.data.width !== undefined) {
        params.width = dimensions.data.width;
      }
      if (dimensions.data.height !== undefined) {
        params.height = dimensions.data.height;
      }
    });

    // Add Elements
    this.elements = [];
    for (var i = 0; i < this.params.elements.length; i++) {
      this.insertElement(i);
    }

    // Add Drop Zones
    this.dropZones = [];
    for (var j = 0; j < this.params.dropZones.length; j++) {
      this.insertDropZone(j);
    }

    this.resize();
  };

  /**
   * Help center new elements
   * @param {object} params
   */
  C.prototype.center = function (params) {
    var size = window.getComputedStyle(this.dnb.$container[0]);
    var width = parseFloat(size.width);
    var height = parseFloat(size.height);
    var pos = {
      x: (width - (params.width * this.fontSize)) / 2,
      y: (height - (params.height * this.fontSize)) / 2
    };
    this.dnb.avoidOverlapping(pos, {
      width: params.width * this.fontSize,
      height: params.height * this.fontSize,
    });
    params.x = pos.x / (width / 100);
    params.y = pos.y / (height / 100);
  };

  /**
   * Generate sub forms that's ready to use in the dialog.
   *
   * @param {Object} semantics
   * @param {Object} params
   * @returns {Object} generatedForm
   */
  C.prototype.generateForm = function (semantics, params) {
    var $form = $('<div></div>');
    H5PEditor.processSemanticsChunk(semantics, params, $form, this);

    // Remove library selector and copy button and paste button
    var pos = semantics.map(function (field) {
      return field.type;
    }).indexOf('library');
    if (pos > -1) {
      this.children[pos].hide();
    }

    var $lib = $form.children('.library:first');
    if ($lib.length !== 0) {
      $lib.children('label, select, .h5peditor-field-description').hide().end().children('.libwrap').css('margin-top', '0');
    }

    return {
      $form: $form,
      children: this.children
    };
  };

  /**
   * Generate a list of buttons for DnB.
   *
   * @returns {Array} Buttons
   */
  C.prototype.getButtons = function (libraries) {
    var that = this;
    var id = 'dropzone';
    var buttons = [{
      id: id,
      title: C.t('insertElement', {':type': C.t(id)}),
      createElement: function () {
        that.params.dropZones.push({
          x: 0,
          y: 0,
          width: 5,
          height: 2.5,
          correctElements: []
        });

        return that.insertDropZone(that.params.dropZones.length - 1);
      }
    }];

    for (var i = 0; i < libraries.length; i++) {
      if (libraries[i].restricted !== true) {
        buttons.push(this.getButton(libraries[i]));
      }
    }

    return buttons;
  };

  /**
   * Creates a fresh object with default element parameters.
   * @returns {object}
   */
  C.getDefaultElementParams = function (id) {
    return {
      x: 0,
      y: 0,
      width: 5,
      height: id === 'text' ? 1.25 : 5,
      dropZones: []
    };
  };

  /**
   * Find generic library identifier without version name.
   *
   * @param {string} library
   * @returns {string}
   */
  C.getLibraryID = function (library) {
    return library.split(' ')[0].split('.')[1].toLowerCase();
  };

  /**
   * Generate a single element button for the DnB.
   *
   * @param {String} library Library name + version
   * @returns {Object} DnB button semantics
   */
  C.prototype.getButton = function (library) {
    var that = this;
    var id = C.getLibraryID(library.uberName);
    return {
      id: id,
      title: library.title,
      createElement: function () {
        var elementParams = C.getDefaultElementParams(id);
        elementParams.type = {
          library: library.uberName,
          params: {}
        };
        that.params.elements.push(elementParams);
        return that.insertElement(that.params.elements.length - 1);
      }
    };
  };

  /**
   * Insert element at given params index.
   *
   * @param {int} index
   * @returns {jQuery} The element's DOM
   */
  C.prototype.insertElement = function (index) {
    var that = this;
    var elementParams = this.params.elements[index];
    var element = this.generateForm(this.elementFields, elementParams);

    var library = this.children[0];

    // Get image aspect ratio
    var libraryChange = function () {
      if (library.children[0].field.type === 'image') {
        library.children[0].changes.push(function (params) {
          if (params === undefined) {
            return;
          }

          if (params.width !== undefined && params.height !== undefined) {
            var editorStyles = window.getComputedStyle(that.$editor[0]);
            var editorWidth = parseFloat(editorStyles.width);
            var editorHeight = parseFloat(editorStyles.height);

            var aspectRatio = params.height / params.width;
            if (editorHeight / editorWidth > aspectRatio) {
              elementParams.height = elementParams.width * aspectRatio;
            }
            else {
              elementParams.width = elementParams.height / aspectRatio;
            }

            element.$element.css({
              width: elementParams.width + 'em',
              height: elementParams.height + 'em'
            });
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

    element.$element = $('<div class="h5p-dq-element" style="width:' + elementParams.width + 'em;height:' + elementParams.height + 'em;top:' + elementParams.y + '%;left:' + elementParams.x + '%"></div>')
      .data('id', index)
      .appendTo(this.$editor)
      .dblclick(function () {
        that.editElement(element);
      }).hover(function () {
        C.setElementOpacity(element.$element, that.getElementOpacitySetting(elementParams));
      }, function () {
        // Need this timeout for firefox beeing able to get the css hover rule in place
        setTimeout(function () {
          C.setElementOpacity(element.$element, that.getElementOpacitySetting(elementParams));
        }, 1);
      });

    element.$innerElement = $('<div>', {
      'class': 'h5p-dq-element-inner'
    }).appendTo(element.$element);

    setTimeout(function () {
      var type = (elementParams.type ? elementParams.type.library.split(' ')[0] : null);

      var dnbElement = that.dnb.add(element.$element, DragNBar.clipboardify(clipboardKey, elementParams, 'type'), {
        cornerLock: (type === 'H5P.Image')
      });

      dnbElement.contextMenu.on('contextMenuEdit', function () {
        that.editElement(element);
        that.dnb.blurAll();
      });

      dnbElement.contextMenu.on('contextMenuRemove', that.elementRemove.bind(that, element));
      dnbElement.contextMenu.on('contextMenuBringToFront', that.elementBringToFront.bind(that, element));
      dnbElement.contextMenu.on('contextMenuSendToBack', that.elementSendToBack.bind(that, element));
      that.dnb.focus(element.$element);
    }, 0);

    // Update element
    that.updateElement(element, index);

    this.elements[index] = element;
    return element.$element;
  };

  /**
   * Removes an element
   *
   * @param {object} element
   */
  C.prototype.elementRemove = function (element) {
    var that = this;

    // confirm remove
    if (!confirm(C.t('confirmRemoval'))) {
      return;
    }

    var id = element.$element.data('id');
    var value = id.toString();

    // Remove element form
    H5PEditor.removeChildren(element.children);

    // Remove element
    element.$element.remove();
    that.elements.splice(id, 1);
    that.params.elements.splice(id, 1);

    // Remove from options
    that.elementOptions.splice(id, 1);

    // Update drop zone params
    that.params.dropZones.forEach(function (dropZone) {
      // Update correct elements for drop zone
      for (let i = 0; i < dropZone.correctElements.length; i++) {
        if (dropZone.correctElements[i] === value) {
          dropZone.correctElements.splice(i, 1);
          i--;
        }
        else if (parseInt(dropZone.correctElements[i]) > id) {
          dropZone.correctElements[i] = '' + (parseInt(dropZone.correctElements[i]) - 1);
        }
      }
    });

    that.updateInternalElementIDs(id);
    that.dnb.blurAll();
  };

  /**
   * Brings an element to the front
   *
   * @param {object} element
   */
  C.prototype.elementBringToFront = function (element) {
    var that = this;

    // Find element ID
    var id = element.$element.data('id');
    var oldId = id.toString();

    // Update visuals
    element.$element.appendTo(that.$editor);

    // Give new ID
    that.elements.push(that.elements.splice(id, 1)[0]);
    that.params.elements.push(that.params.elements.splice(id, 1)[0]);
    that.elementOptions.push(that.elementOptions.splice(id, 1)[0]);

    var newId = (that.elements.length - 1).toString();
    that.params.dropZones.forEach(function (dropZone) {
      // Update correct elements for drop zone
      for (let i = 0; i < dropZone.correctElements.length; i++) {
        if (dropZone.correctElements[i] === oldId) {
          dropZone.correctElements[i] = newId;
        }
        else if (parseInt(dropZone.correctElements[i]) > id) {
          dropZone.correctElements[i] = (parseInt(dropZone.correctElements[i]) - 1).toString();
        }
      }
    });

    that.updateInternalElementIDs(id);
  };

  /**
   * Sends an element to the back
   *
   * @param {object} element
   */
  C.prototype.elementSendToBack = function (element) {
    var that = this;

    // Find element ID
    var id = element.$element.data('id');
    var oldId = id.toString();

    // Update visuals
    element.$element.prependTo(that.$editor);

    // Give new ID
    that.elements.unshift(that.elements.splice(id, 1)[0]);
    that.params.elements.unshift(that.params.elements.splice(id, 1)[0]);
    that.elementOptions.unshift(that.elementOptions.splice(id, 1)[0]);

    var newId = '0';
    that.params.dropZones.forEach(function (dropZone) {
      // Update correct elements for drop zone
      for (let i = 0; i < dropZone.correctElements.length; i++) {
        if (dropZone.correctElements[i] === oldId) {
          dropZone.correctElements[i] = newId;
        }
        else if (parseInt(dropZone.correctElements[i]) < id) {
          dropZone.correctElements[i] = (parseInt(dropZone.correctElements[i]) + 1).toString();
        }
      }
    });
    that.updateInternalElementIDs(0);
  };

  /**
   * Sync the internal ID of each element.
   * @param {number} start
   */
  C.prototype.updateInternalElementIDs = function (start) {
    for (var i = start; i < this.elements.length; i++) {
      this.elements[i].$element.data('id', i);
      this.elementOptions[i].value = '' + i;
    }
  };

  /**
   * Set callbacks and open dialog with the form for the given element.
   *
   * @param {Object} element
   * @returns {undefined}
   */
  C.prototype.editElement = function (element) {
    var that = this;
    var id = element.$element.data('id');

    this.doneCallback = function () {
      // Validate form
      var valid = true;
      for (var i = 0; i < element.children.length; i++) {
        if (element.children[i].validate() === false) {
          valid = false;
          break;
        }
      }
      if (!valid) {
        return false;
      }


      // Must be removed before dnb changes focus!
      if (H5PEditor.Html) {
        H5PEditor.Html.removeWysiwyg();
      }

      // Update element
      that.updateElement(element, id);
      that.dnb.focus(element.$element);
      that.dnb.pressed = undefined;
    };

    this.removeCallback = function () {
      var i, j, ce;

      // Remove element form
      H5PEditor.removeChildren(element.children);

      // Remove element
      element.$element.remove();
      that.elements.splice(id, 1);
      that.params.elements.splice(id, 1);

      // Remove from options
      this.elementOptions.splice(id, 1);

      // Update drop zone params
      for (i = 0; i < that.params.dropZones.length; i++) {
        ce = that.params.dropZones[i].correctElements;
        for (j = 0; j < ce.length; j++) {
          if (ce[j] === '' + id) {
            // Remove from correct answers
            ce.splice(j, 1);
          }
          else if (ce[j] > id) {
            // Adjust index for others
            ce[j] = '' + (ce[j] - 1);
          }
        }
      }

      // Change data index for "all" elements
      for (i = id; i < that.elements.length; i++) {
        that.elements[i].$element.data('id', i);
        that.elementOptions[i].value = '' + i;
      }
    };

    // Disable background opacity input if overriden globally
    var disableOpacityField = !!(that.params.elements[id].dropZones.length !== 0 && this.backgroundOpacity);
    H5PEditor.findField('backgroundOpacity', element).$item.find('input').prop({
      disabled: disableOpacityField,
      title: disableOpacityField ? C.t('backgroundOpacityOverridden') : ''
    });

    element.children[this.elementDropZoneFieldWeight].setActive();
    this.showDialog(element.$form);

    // Blur context menu when showing dialog.
    setTimeout(function () {
      that.dnb.blurAll();
    }, 10);
  };

  /**
   * Update the element with new data.
   *
   * @param {Object} element
   * @param {int} id
   * @returns {undefined}
   */
  C.prototype.updateElement = function (element, id) {
    var self = this;
    var params = this.params.elements[id];

    var type = (params.type.library.split(' ')[0] === 'H5P.AdvancedText' ? 'text' : 'image');
    var hasCk = (element.children[0].children !== undefined && element.children[0].children[0].ckeditor !== undefined);
    if (type === 'text' && hasCk) {
      // Create new text instance. Replace asterisk with spans
      element.instance = H5P.newRunnable({
        library: params.type.library,
        params: {
          text: params.type.params.text.replace(/\*([^*]+)\*/g, '<span class="h5p-dragquestion-placeholder">$1</span>')
        }
      }, H5PEditor.contentId, element.$innerElement);

      // Remove asterisk from params and input field
      params.type.params.text = params.type.params.text.replace(/\*([^*]+)\*/g, '$1');
      element.children[0].children[0].ckeditor.setData(params.type.params.text);
    }
    else {
      // Create new instance
      element.instance = H5P.newRunnable(params.type, H5PEditor.contentId, element.$innerElement);
    }

    if (type === 'text') {
      element.$element.addClass('h5p-dq-text');
    }

    // Find label text without html
    var label = (type === 'text' ? $('<div>' + params.type.params.text + '</div>').text() : params.type.params.alt + '');

    // Update correct element options
    this.elementOptions[id] = {
      value: '' + id,
      label: C.t(type) + ': ' + C.getLabel(label)
    };

    // Retain size after toggling class
    var toggleDraggable = function (addClass, $element) {
      var toggleClass = addClass !== $element.hasClass('h5p-draggable');
      if (!toggleClass) {
        return;
      }

      if (addClass) {
        $element.addClass('h5p-draggable');
      }
      else {
        $element.removeClass('h5p-draggable');
      }
    };

    if (params.dropZones !== undefined && params.dropZones.length) {

      toggleDraggable(true, element.$element);
    }
    else {
      toggleDraggable(false, element.$element);

      if (type === 'text' && hasCk) {
        // When dialog closes, replace spans with drop zones
        this.hideDialogCallback = function () {
          var pWidth = self.$editor.width() / 100;
          var pHeight = self.$editor.height() / 100;
          element.$element.find('.h5p-dragquestion-placeholder').each(function () {
            var $span = $(this);
            var pos = $span.position();

            // Add new drop zone
            self.params.dropZones.push({
              x: params.x + ((pos.left - 3) / pWidth),
              y: params.y + ((pos.top - 2) / pHeight),
              width: ($span.width() / self.fontSize) + 0.5,
              height: ($span.height() / self.fontSize) + 0.3,
              backgroundOpacity: 0,
              correctElements: [],
              label: C.getLabel($span.text()),
              showLabel: false
            });
            self.insertDropZone(self.params.dropZones.length - 1);

            // Remove span
            $span.contents().unwrap();
          });
          delete self.hideDialogCallback;
        };
      }
    }

    C.setElementOpacity(element.$element, this.getElementOpacitySetting(params));
  };

  /**
   * Clips text at 32 chars
   *
   * @param {String} text
   * @returns {String}
   */
  C.getLabel = function (text) {
    return (text.length > 32 ? text.substr(0, 32) + '...' : text);
  };

  /**
   * Insert the drop zone at the given index.
   *
   * @param {int} index
   * @returns {H5P.jQuery}
   */
  C.prototype.insertDropZone = function (index) {
    var that = this,
      dropZoneParams = this.params.dropZones[index],
      dropZone = this.generateForm(this.dropZoneFields, dropZoneParams);

    // Fake libraryName for copy&paste
    dropZoneParams.type = dropZoneParams.type || {library: that.fakeDropzoneLibrary};

    dropZone.$dropZone = $('<div class="h5p-dq-dz" style="width:' + dropZoneParams.width + 'em;height:' + dropZoneParams.height + 'em;top:' + dropZoneParams.y + '%;left:' + dropZoneParams.x + '%"></div>')
      .appendTo(this.$editor)
      .data('id', index)
      .dblclick(function () {
        // Edit
        that.editDropZone(dropZone);
        that.dnb.blurAll();
      });

    // Add label
    this.updateDropZone(dropZone, index);

    // Add to dnb after element has been attached
    setTimeout(function () {
      var dropzoneDnBElement = that.dnb.add(dropZone.$dropZone, DragNBar.clipboardify(clipboardKey, dropZoneParams, 'type'));

      // Register listeners for context menu buttons
      dropzoneDnBElement.contextMenu.on('contextMenuEdit', function () {
        that.editDropZone(dropZone);
        that.dnb.blurAll();
      });

      dropzoneDnBElement.contextMenu.on('contextMenuRemove', function () {
        if (!confirm(C.t('confirmRemoval'))) {
          return;
        }

        // Remove element form
        H5PEditor.removeChildren(dropZone.children);
        var i;
        var j;
        var id = dropZone.$dropZone.data('id');

        // Remove element
        dropZone.$dropZone.remove();
        that.dropZones.splice(id, 1);
        that.params.dropZones.splice(id, 1);

        // Remove from elements
        that.elementFields[that.elementDropZoneFieldWeight].options.splice(id, 1);

        // Remove dropZone from element params properly
        for (i = 0; i < that.params.elements.length; i++) {
          var dropZones = that.params.elements[i].dropZones;
          for (j = 0; j < dropZones.length; j++) {
            if (parseInt(dropZones[j]) === id) {
              // Remove from element drop zones
              dropZones.splice(j, 1);
              if (!dropZones.length) {
                that.elements[i].$element.removeClass('h5p-draggable');
              }
            }
            else if (dropZones[j] > id) {
              // Re index other drop zones
              dropZones[j] = '' + (dropZones[j] - 1);
            }
          }
        }

        that.updateInternalDropZoneIDs(id);
        that.dnb.blurAll();
      });

      dropzoneDnBElement.contextMenu.on('contextMenuBringToFront', function () {
        var id = dropZone.$dropZone.data('id');

        // Update visuals
        dropZone.$dropZone.appendTo(that.$editor);

        // Get new ID
        that.dropZones.push(that.dropZones.splice(id, 1)[0]);
        that.params.dropZones.push(that.params.dropZones.splice(id, 1)[0]);
        var options = that.elementFields[that.elementDropZoneFieldWeight].options;
        options.push(options.splice(id, 1)[0]);
        var newID = (that.dropZones.length - 1);

        // Update dropZone IDs in element params
        for (var i = 0; i < that.params.elements.length; i++) {
          var dropZones = that.params.elements[i].dropZones;
          for (var j = 0; j < dropZones.length; j++) {
            if (parseInt(dropZones[j]) === id) {
              // Update ID
              dropZones[j] = newID;
            }
            else if (dropZones[j] > id) {
              // Re-index other drop zones
              dropZones[j] = '' + (dropZones[j] - 1);
            }
          }
        }

        that.updateInternalDropZoneIDs(id);
      });

      dropzoneDnBElement.contextMenu.on('contextMenuSendToBack', function () {
        var id = dropZone.$dropZone.data('id');

        // Update visuals
        dropZone.$dropZone.prependTo(that.$editor);

        // Get new ID
        that.dropZones.unshift(that.dropZones.splice(id, 1)[0]);
        that.params.dropZones.unshift(that.params.dropZones.splice(id, 1)[0]);
        var options = that.elementFields[that.elementDropZoneFieldWeight].options;
        options.unshift(options.splice(id, 1)[0]);
        var newID = (that.dropZones.length - 1);

        // Update dropZone IDs in element params
        for (var i = 0; i < that.params.elements.length; i++) {
          var dropZones = that.params.elements[i].dropZones;
          for (var j = 0; j < dropZones.length; j++) {
            if (parseInt(dropZones[j]) === id) {
              // Update ID
              dropZones[j] = newID;
            }
            else if (dropZones[j] < id) {
              // Re-index other drop zones
              dropZones[j] = '' + (dropZones[j] + 1);
            }
          }
        }

        that.updateInternalDropZoneIDs(id);
      });
      that.dnb.focus(dropZone.$dropZone);
    }, 0);

    this.dropZones[index] = dropZone;
    return dropZone.$dropZone;
  };

  /**
   * Sync the internal ID of each drop zone.
   * @param {number} start
   */
  C.prototype.updateInternalDropZoneIDs = function (start) {
    for (var i = start; i < this.dropZones.length; i++) {
      this.dropZones[i].$dropZone.data('id', i);
      this.elementFields[this.elementDropZoneFieldWeight].options[i].value = i + '';
    }
  };

  /**
   * Set callbacks and open dialog with the form for the given drop zone.
   *
   * @param {Object} dropZone
   * @returns {undefined}
   */
  C.prototype.editDropZone = function (dropZone) {
    var that = this;
    var i, j, id = dropZone.$dropZone.data('id');

    this.doneCallback = function () {
      // Validate form
      var valid = true;
      for (var i = 0; i < dropZone.children.length; i++) {
        if (dropZone.children[i].validate() === false) {
          valid = false;
          break;
        }
      }
      if (!valid) {
        return false;
      }

      // Must be removed before dnb changes focus!
      if (H5PEditor.Html) {
        H5PEditor.Html.removeWysiwyg();
      }

      that.updateDropZone(dropZone, id);
      that.dnb.focus(dropZone.$dropZone);
      that.dnb.pressed = undefined;
    };

    this.removeCallback = function () {
      // Remove element form
      H5PEditor.removeChildren(dropZone.children);

      // Remove element
      dropZone.$dropZone.remove();
      that.dropZones.splice(id, 1);
      that.params.dropZones.splice(id, 1);

      // Remove from elements
      this.elementFields[this.elementDropZoneFieldWeight].options.splice(id, 1);

      // Remove dropZone from element params properly
      for (i = 0; i < that.params.elements.length; i++) {
        var dropZones = that.params.elements[i].dropZones;
        for (j = 0; j < dropZones.length; j++) {
          if (parseInt(dropZones[j]) === id) {
            // Remove from element drop zones
            dropZones.splice(j, 1);
            if (!dropZones.length) {
              that.elements[i].$element.removeClass('h5p-draggable');
            }
          }
          else if (dropZones[j] > id) {
            // Re index other drop zones
            dropZones[j] = '' + (dropZones[j] - 1);
          }
        }
      }

      // Reindex all dropzones
      for (i = id; i < that.dropZones.length; i++) {
        that.dropZones[i].$dropZone.data('id', i);
        this.elementFields[this.elementDropZoneFieldWeight].options[i].value = i + '';
      }
    };

    // Add only available options
    var options = this.dropZoneFields[this.dropZoneElementFieldWeight].options = [];
    var dropZones;
    for (i = 0; i < this.elementOptions.length; i++) {
      dropZones = this.params.elements[i].dropZones;
      for (j = 0; j < dropZones.length; j++) {
        if (dropZones[j] === (id + '')) {
          options.push(this.elementOptions[i]);
          break;
        }
      }
    }

    dropZone.children[this.dropZoneElementFieldWeight].setActive();
    this.showDialog(dropZone.$form);

    // Blur context menu when showing dialog
    setTimeout(function () {
      that.dnb.blurAll();
    }, 10);
  };

  /**
   * Remove old label and add new.
   *
   * @param {Object} dropZone
   * @param {int} id
   * @returns {undefined}
   */
  C.prototype.updateDropZone = function (dropZone, id) {
    var params = this.params.dropZones[id];

    // Remove old label and add new.
    dropZone.$dropZone.children('.h5p-dq-dz-label').remove();
    if (params.showLabel === true) {
      $('<div class="h5p-dq-dz-label">' + params.label + '</div>').appendTo(dropZone.$dropZone);
      dropZone.$dropZone.addClass('h5p-has-label');
    }
    else {
      dropZone.$dropZone.removeClass('h5p-has-label');
    }

    // Create/update Tip:
    dropZone.$dropZone.children('.joubel-tip-container').remove();
    if (params.tipsAndFeedback !== undefined && params.tipsAndFeedback.tip !== undefined && params.tipsAndFeedback.tip.trim().length !== 0) {
      dropZone.$dropZone.append(H5P.JoubelUI.createTip(params.tipsAndFeedback.tip, {showSpeechBubble: false}));
    }

    this.elementFields[this.elementDropZoneFieldWeight].options[id] = {
      value: '' + id,
      label: params.label
    };

    C.setOpacity(dropZone.$dropZone.add(dropZone.$dropZone.children('.h5p-dq-dz-label')), 'background', params.backgroundOpacity);
  };

  /**
   * Attach form to dialog and show.
   *
   * @param {jQuery} $form
   * @returns {undefined}
   */
  C.prototype.showDialog = function ($form) {
    this.dnb.blurAll();
    this.$currentForm = $form;
    $form.appendTo(this.$dialogInner);
    this.$dialog.show();
    this.$editor.add(this.$dnbWrapper).hide();
    this.dnb.dnr.toggleModifiers(false);
  };

  /**
   * Hide dialog and detach form.
   *
   * @returns {undefined}
   */
  C.prototype.hideDialog = function () {
    // Attempt to find and close CKEditor instances before detaching.


    this.$currentForm.detach();
    this.$dialog.hide();
    this.$editor.add(this.$dnbWrapper).show();

    if (this.hideDialogCallback !== undefined) {
      this.hideDialogCallback();
    }
    this.dnb.dnr.toggleModifiers(true);
  };

  /**
   * Update transparency for background.
   *
   * @param {jQuery} $element
   * @param {Number} opacity
   */
  C.setElementOpacity = function ($element, opacity) {
    C.setOpacity($element, 'background', opacity);
    C.setOpacity($element, 'boxShadow', opacity);
    C.setOpacity($element, 'borderColor', opacity);
  };

  /**
   * Update all elements' opacity
   *
   * @param {Array} domElements
   * @param {Array} elements
   * @param {String} type
   */
  C.prototype.updateAllElementsOpacity = function (domElements, elements, type) {
    if (domElements === undefined) {
      return;
    }

    for (var i = 0; i < domElements.length; i++) {
      C.setElementOpacity(domElements[i]['$'+type], this.getElementOpacitySetting(elements[i]));
    }
  };

  /**
   * Get the opacity setting for a given element
   *
   * @param {Object} element
   * @returns {String} opacity
   */
  C.prototype.getElementOpacitySetting = function (element) {
    if ((element.dropZones !== undefined && element.dropZones.length === 0) ||
       (this.backgroundOpacity === undefined)) {
      return element.backgroundOpacity;
    }

    return this.backgroundOpacity;
  };

  /**
   * Makes element background, border and shadow transparent.
   *
   * @param {jQuery} $element
   * @param {String} property
   * @param {Number} opacity
   */
  C.setOpacity = function ($element, property, opacity) {
    if (property === 'background') {
      // Set both color and gradient.
      C.setOpacity($element, 'backgroundColor', opacity);
      C.setOpacity($element, 'backgroundImage', opacity);
      return;
    }

    opacity = (opacity === undefined ? 1 : opacity / 100);

    // Private. Get css properties objects.
    function getProperties(property, value) {
      switch (property) {
        case 'borderColor':
          return {
            borderTopColor: value,
            borderRightColor: value,
            borderBottomColor: value,
            borderLeftColor: value
          };

        default:
          var properties = {};
          properties[property] = value;
          return properties;
      }
    }

    // Reset css to be sure we're using CSS and not inline values.
    var properties = getProperties(property, '');
    $element.css(properties);

    for (var prop in properties) {
      break;
    }
    var style = $element.css(prop); // Assume all props are the same and use the first.
    style = C.setAlphas(style, 'rgba(', opacity); // Update rgba
    style = C.setAlphas(style, 'rgb(', opacity); // Convert rgb

    $element.css(getProperties(property, style));
  };

  /**
   * Updates alpha channel for colors in the given style.
   *
   * @param {String} style
   * @param {String} prefix
   * @param {Number} alpha
   */
  C.setAlphas = function (style, prefix, alpha) {
    // Style undefined
    if (!style) {
      return;
    }
    var colorStart = style.indexOf(prefix);

    while (colorStart !== -1) {
      var colorEnd = style.indexOf(')', colorStart);
      var channels = style.substring(colorStart + prefix.length, colorEnd).split(',');

      // Set alpha channel
      channels[3] = (channels[3] !== undefined ? parseFloat(channels[3]) * alpha : alpha);

      style = style.substring(0, colorStart) + 'rgba(' + channels.join(',') + style.substring(colorEnd, style.length);

      // Look for more colors
      colorStart = style.indexOf(prefix, colorEnd);
    }

    return style;
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
   * Remove the field from DOM.
   *
   * @returns {undefined}
   */
  C.prototype.remove = function () {
    if (this.dnb !== undefined) {
      this.dnb.remove();
    }
    this.$item.remove();
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
   * Translate UI texts for this library.
   *
   * @param {String} key
   * @param {Object} vars
   * @returns {@exp;H5PEditor@call;t}
   */
  C.t = function (key, vars) {
    return H5PEditor.t('H5PEditor.DragQuestion', key, vars);
  };

  return C;
})(H5P.jQuery, H5P.DragNBar);
