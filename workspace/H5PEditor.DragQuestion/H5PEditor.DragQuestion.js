/*global H5P*/
var H5PEditor = H5PEditor || {};

/**
 * Interactive Video editor widget module
 * TODO: Rewrite to use H5P.DragQuestion for previewing?

 * @param {jQuery} $
 */
H5PEditor.widgets.dragQuestion = H5PEditor.DragQuestion = (function ($) {
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
      H5PEditor.findField('../backgroundOpacity', parent).$item.find('input').on('change', function () {
        that.backgroundOpacity = $(this).val().trim();
        that.backgroundOpacity = (that.backgroundOpacity === '') ? undefined : that.backgroundOpacity;
        that.updateAllElementsOpacity(that.elements, that.params.elements, 'element');
      });
    });

    // Get options from semantics, clone since we'll be changing values.
    this.elementFields = H5P.cloneObject(field.fields[0].field.fields, true);
    this.dropZoneFields = H5P.cloneObject(field.fields[1].field.fields, true);
    this.elementLibraryOptions = this.elementFields[0].options;
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

    // Get editor default font size.
    this.fontSize = parseInt(this.$editor.css('fontSize'));
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

    return H5PEditor.createItem(this.field.widget, html);
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
    if (this.size === undefined || this.size.width === undefined) {
      return;
    }
    var maxWidth = this.$item.width();
    if (this.size.width < maxWidth) {
      this.$editor.css({
        width: this.size.width,
        height: this.size.height,
        fontSize: this.fontSize
      });
      this.$dnbWrapper.css({
        width: this.size.width
      });
    }
    else {
      this.$editor.css({
        width: '100%',
        height: maxWidth * (this.size.height / this.size.width),
        fontSize: this.fontSize * (maxWidth / this.size.width)
      });
      this.$dnbWrapper.css({
        width: '100%'
      });
    }


    // TODO: Should we care about resize events? Will only be an issue for responsive designs.

    if (this.dnb === undefined) {
      this.activateEditor();
    }

    // TODO: Move elements that is outside inside.
  };

  /**
   * Activate DragNBar and add elements.
   *
   * @returns {undefined}
   */
  C.prototype.activateEditor = function () {
    var that = this;
    this.$editor.html('').addClass('h5p-ready');

    // Create new bar
    this.dnb = new H5P.DragNBar(this.getButtons(), this.$editor, this.$item);
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

    // Update params on end of resize
    this.dnb.dnr.on('stoppedResizing', function (dimensions) {
      var id = that.dnb.$element.data('id');
      var params = that.dnb.$element.hasClass('h5p-dq-dz') ? that.params.dropZones[id] : that.params.elements[id];
      params.width = dimensions.data.width;
      params.height = dimensions.data.height;
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
  C.prototype.getButtons = function () {
    var that = this;

    var buttons = [{
      id: 'dropzone',
      title: 'Drop Zone',
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

    for (var i = 0; i < this.elementLibraryOptions.length; i++) {
      buttons.push(this.getButton(this.elementLibraryOptions[i]));
    }

    return buttons;
  };

  /**
   * Generate a single element button for the DnB.
   *
   * @param {String} library Library name + version
   * @returns {Object} DnB button semantics
   */
  C.prototype.getButton = function (library) {
    var that = this;
    var id = library.split(' ')[0].split('.')[1].toLowerCase();
    var h = id === 'text' ? 1.25 : 5;
    return {
      id: id,
      title: C.t('insertElement', {':type': id}),
      createElement: function () {
        that.params.elements.push({
          type: {
            library: library,
            params: {}
          },
          x: 0,
          y: 0,
          width: 5,
          height: h,
          dropZones: []
        });

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
            elementParams.height = elementParams.width * (params.height / params.width);
            element.$element.css('height', elementParams.height + 'em');
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
      var dnbElement = that.dnb.add(element.$element);

      dnbElement.contextMenu.on('contextMenuEdit', function () {
        that.editElement(element);
        that.dnb.blurAll();
      });

      dnbElement.contextMenu.on('contextMenuRemove', function () {
        if (!confirm(C.t('confirmRemoval'))) {
          return;
        }
        var i, j, ce;
        var id = element.$element.data('id');

        // Remove element form
        H5PEditor.removeChildren(element.children);

        // Remove element
        element.$element.remove();
        that.elements.splice(id, 1);
        that.params.elements.splice(id, 1);

        // Remove from options
        that.elementOptions.splice(id, 1);

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
        that.dnb.blurAll();
      });
    }, 0);

    // Update element
    that.updateElement(element, index);

    this.elements[index] = element;
    return element.$element;
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
    var disableOpacityField = (that.params.elements[id].dropZones.length !== 0 && this.backgroundOpacity);
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

    // Find label text without html
    var label = (type === 'text' ? $('<div>' + params.type.params.text + '</div>').text() : params.type.params.alt + '');

    // Update correct element options
    this.elementOptions[id] = {
      value: '' + id,
      label: C.t(type) + ': ' + C.getLabel(label)
    };

    if (params.dropZones !== undefined && params.dropZones.length) {
      element.$element.addClass('h5p-draggable');
    }
    else {
      element.$element.removeClass('h5p-draggable');

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

    dropZone.$dropZone = $('<div class="h5p-dq-dz" style="width:' + dropZoneParams.width + 'em;height:' + dropZoneParams.height + 'em;top:' + dropZoneParams.y + '%;left:' + dropZoneParams.x + '%"></div>')
      .appendTo(this.$editor)
      .data('id', index)
      .dblclick(function () {
        // Edit
        that.editDropZone(dropZone);
        that.dnb.blurAll();
      });

    // Add tip if any
    if (dropZoneParams.tip !== undefined && dropZoneParams.tip.trim().length > 0) {
      dropZone.$dropZone.append(H5P.JoubelUI.createTip(dropZoneParams.tip, {showSpeechBubble: false}));
    }

    // Add label
    this.updateDropZone(dropZone, index);

    // Add to dnb after element has been attached
    setTimeout(function () {

      var dropzoneDnBElement = that.dnb.add(dropZone.$dropZone);

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

        // Reindex all dropzones
        for (i = id; i < that.dropZones.length; i++) {
          that.dropZones[i].$dropZone.data('id', i);
          that.elementFields[that.elementDropZoneFieldWeight].options[i].value = i + '';
        }
        that.dnb.blurAll();
      });
    }, 0);

    this.dropZones[index] = dropZone;
    return dropZone.$dropZone;
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

    // Update Tip:
    dropZone.$dropZone.children('.joubel-tip-container').remove();
    if (params.tip !== undefined && params.tip.trim().length > 0) {
      dropZone.$dropZone.append(H5P.JoubelUI.createTip(params.tip, {showSpeechBubble: false}));
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
  };

  /**
   * Hide dialog and detach form.
   *
   * @returns {undefined}
   */
  C.prototype.hideDialog = function () {
    // Attempt to find and close CKEditor instances before detaching.
    if (H5PEditor.Html) {
      H5PEditor.Html.removeWysiwyg();
    }

    this.$currentForm.detach();
    this.$dialog.hide();
    this.$editor.add(this.$dnbWrapper).show();

    if (this.hideDialogCallback !== undefined) {
      this.hideDialogCallback();
    }
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
})(H5P.jQuery);

// Default english translations
H5PEditor.language['H5PEditor.DragQuestion'] = {
  libraryStrings: {
    insertElement: 'Insert :type',
    done: 'Done',
    remove: 'Remove',
    image: 'Image',
    text: 'Text',
    noTaskSize: 'Please specify task size first.',
    confirmRemoval: 'Are you sure you wish to remove this element?',
    backgroundOpacityOverridden: 'The background opacity is overridden'
  }
};
