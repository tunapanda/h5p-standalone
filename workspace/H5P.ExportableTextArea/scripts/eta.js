var H5P = H5P || {};

H5P.ExportableTextArea = (function ($) {
  /**
   * Constructor.
   *
   * @param {object} params Options for this library.
   * @param {int} id Content identifier
   */
  function C(params, id, contentData) {
    this.index = (params.index !== undefined ? params.index : -1);
    this.header = (params.label !== undefined ? params.label : '');
    this.notSupportedText = params.exportNotSupported;
    this.defaultAnswer = (contentData && contentData.previousState ? contentData.previousState.answer : '');
  }

  C.prototype.attach = function ($wrapper) {
    var supportsExport = H5P.ExportableTextArea.Exporter.supportsExport();
    this.$content = $wrapper.addClass('h5p-eta').html('<div class="h5p-eta-label">' + this.header + '</div><textarea class="h5p-eta-input" ' + (supportsExport ? '' : 'placeholder="' + this.notSupportedText + '"') + 'data-index="' + this.index + '">' + this.defaultAnswer + '</textarea>');
    this.$label = this.$content.children('.h5p-eta-label');
    this.$input = this.$content.children('.h5p-eta-input');
  };

  C.prototype.onDelete = function (params, slideIndex, elementIndex) {
    H5P.ExportableTextArea.CPInterface.onDelete(params, slideIndex, elementIndex, this);
  };

  C.prototype.onAdd = function (params, slideIndex) {
    H5P.ExportableTextArea.CPInterface.onAdd(params, slideIndex, this);
  };

  C.prototype.exportAnswers = true;

  C.prototype.getTitle = function() {
    return H5P.createTitle(this.header);
  };

  C.prototype.getCurrentState = function () {
    var text = this.$input.val();
    if (text.trim()) {
      return {
        answer: text
      };
    }
  };

  return C;
})(H5P.jQuery);

/**
 * Interface responsible for handling index calculations beeing done when
 * adding and removing Answer elements
 *
 * Implemented as singleton
 */
H5P.ExportableTextArea.CPInterface = (function _eta_cp_interface_internal() {
  if ( _eta_cp_interface_internal._singletonInstance ) {
    return _eta_cp_interface_internal._singletonInstance;
  }
  _eta_cp_interface_internal._singletonInstance = this;

  this.answerCounter = [];

  this.onDelete = function (params, slideIndex, elementIndex, elementInstance) {
    // Reorder index on current slide
    var filtered = params.slides[slideIndex].elements.filter(function (element, index) {
      return H5P.libraryFromString(element.action.library).machineName === 'H5P.ExportableTextArea';
    }).sort(function (a, b) {
      return a.action.params.index - b.action.params.index;
    });

    this.answerCounter[slideIndex] = [];
    var $currentSlide = H5P.jQuery('.h5p-slides-wrapper > .h5p-current');
    for (var i = 0; i < filtered.length; i++) {
      filtered[i].action.params.index = i;
      this.answerCounter[slideIndex][i] = true;
      var $child = $currentSlide.children('.h5p-eta').has('[data-index=' + i + ']');
      if (!$child.length) {
        $child = $currentSlide.children('.h5p-eta').has('[data-index=' + (i + 1) + ']');
        $child.find('.index').html(i + 1);
        $child.find('.h5p-eta-input').attr('data-index', i);

      }
    }
  };

  this.onDeleteSlide = function (slideIndex) {
    this.answerCounter[slideIndex] = [];
  };

  this.changeSlideIndex = function(left, right) {
    var tmp = this.answerCounter[left];
    this.answerCounter[left] = this.answerCounter[right];
    this.answerCounter[right] = tmp;
  };

  this.onAdd = function (params, slideIndex, elementInstance) {
    if (this.answerCounter[slideIndex] === undefined) {
      this.answerCounter[slideIndex] = [];
    }

    if (params.action.params.index === undefined) {
      params.action.params.index = this.answerCounter[slideIndex].length;
    }

    this.answerCounter[slideIndex][params.action.params.index] = true;
  };

  return this;
})();

/**
 * Export all Answers
 *
 * Implemented as singleton
 */
H5P.ExportableTextArea.Exporter = (function _eta_exporter_internal() {

  if ( _eta_exporter_internal._singletonInstance ) {
    return _eta_exporter_internal._singletonInstance;
  }
  _eta_exporter_internal._singletonInstance = this;

  this.deviceIsIPx = undefined;
  this.useFlash = undefined;

  this.run = function (slides, elements) {
    // Save it as a file:
    if (this.useFileSaver()) {
      var blob = new Blob([this.createDocContent(slides, elements)], {
        type: "application/msword;charset=utf-8"
      });
      saveAs(blob, 'exported-text.doc');
    }
  };

  this.createDocContent = function (slides, elements) {
    var html = '';

    for (var i = 0; i < elements.length; i++) {
      var slideHtml = [];

      for (var j = 0; j < elements[i].length; j++) {
        var element = elements[i][j];

        if (element.libraryInfo && element.libraryInfo.machineName === 'H5P.ExportableTextArea') {
          var params = slides[i].elements[j];
          var input = (element.$input !== undefined ? element.$input.val() : '');
          slideHtml[element.index] = element.header + '<p>' + input.replace(/(\r\n|\r|\n)/g, '<br>') + '</p>';

          if (params.action.params.exportComments !== undefined && params.action.params.exportComments) {
            slideHtml[element.index] += params.solution;
          }
        }
      }

      if (slideHtml.length) {
        if (html) {
          html += '<hr/>';
        }
        html += slideHtml.join('');
      }
    }

    // Create HTML:
    // me + ta and other hacks to avoid that new relic injects script...
    html = '<ht' + 'ml><he' + 'ad><me' + 'ta charset="UTF-8"></me' + 'ta></he' + 'ad><bo' + 'dy><p><a href="' + document.URL + '">' + document.URL + '</a></p>' + html + '</bo' + 'dy></ht' + 'ml>';

    return html;
  };

  this.createExportButton = function (title) {
    var self = this;

    if (!H5P.ExportableTextArea.Exporter.supportsExport()) {
      return '';
    }

    if (this.useFileSaver()) {
      return '<a href="#" class="h5p-eta-export">' + title + '</a>';
    } else {
      var $downloadify = H5P.jQuery('<div></div>');
      $downloadify.appendTo('body');

      $downloadify.downloadify({
        filename: function () {
          return 'answer-text.doc';
        },
        data: function () {
          return self.createDocContent();
        },
        onError: function () {
          alert('You must put something in the File Contents or there will be nothing to save!');
        },
        swf: H5P.getLibraryPath('downloadify-1.0') + '/resources/downloadify.swf',
        width: 100,
        height: 30,
        transparent: true,
        append: false,
        label: title
      });

      var html = '<a href="#" class="h5p-eta-export flash">' + $downloadify.html() + '</a>';
      $downloadify.remove();
      return html;
    }
  };

  this.useFileSaver = function () {
    if (useFlash === undefined) {
      useFlash = (navigator.userAgent.match(/MSIE 8/i) !== null || navigator.userAgent.match(/MSIE 9/i) !== null);
    }
    return !useFlash;
  };

  /**
   *  Check if this device/browser supports download
   * at all
   */
  this.supportsExport = function () {
    if (deviceIsIPx === undefined) {
      deviceIsIPx = navigator.userAgent.match(/iPad/i) === null &&
        navigator.userAgent.match(/iPhone/i) === null &&
        navigator.userAgent.match(/iPod/i) === null;
    }
    return deviceIsIPx;
  };

  return this;
})();
