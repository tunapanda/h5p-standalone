var H5P = H5P || {};

/**
 * Constructor.
 *
 * @param {Object} params Options for this library.
 * @param {Number} id Content identifier
 * @returns {undefined}
 */
H5P.Image = function (params, id) {
  if (params.file === undefined || !(params.file instanceof Object)) {
    this.source = 'data:image/png;base64,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';
  }
  else {
    this.source = H5P.getPath(params.file.path, id);
    this.width = params.file.width;
    this.height = params.file.height;
    
    // Use new copyright information if available. Fallback to old.
    if (params.file.copyright !== undefined) {
      this.copyright = params.file.copyright;
    }
    else if (params.copyright !== undefined) {
      this.copyright = params.copyright;
    }
  }

  this.alt = params.alt !== undefined ? params.alt : 'New image';

  if (params.title !== undefined) {
    this.title = params.title;
  }
};

/**
 * Wipe out the content of the wrapper and put our HTML in it.
 *
 * @param {jQuery} $wrapper
 * @returns {undefined}
 */
H5P.Image.prototype.attach = function ($wrapper) {
  var extraAttr = this.title === undefined ? '' : ' title="' + this.title + '"';
  $wrapper.addClass('h5p-image').html('<img width="100%" height="100%" src="' + this.source + '" alt="' + this.alt + '"' + extraAttr + '/>');
};

/**
 * Gather copyright information for the current content.
 *
 * @returns {H5P.ContentCopyright}
 */
H5P.Image.prototype.getCopyrights = function () {
  if (this.copyright === undefined) {
    return;
  }
  
  var info = new H5P.ContentCopyrights();
  
  var image = new H5P.MediaCopyright(this.copyright);
  image.setThumbnail(new H5P.Thumbnail(this.source, this.width, this.height));
  info.addMedia(image);
  
  return info;
};
