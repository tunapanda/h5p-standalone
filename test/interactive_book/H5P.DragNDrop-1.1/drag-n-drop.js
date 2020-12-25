var H5P = H5P || {};

/**
 * A class that easily helps your create awesome drag and drop.
 *
 * @param {H5P.DragNBar} DnB
 * @param {jQuery} $container
 * @returns {undefined}
 */
H5P.DragNDrop = function (dnb, $container) {
  H5P.EventDispatcher.call(this);
  this.dnb = dnb;
  this.$container = $container;
  this.scrollLeft = 0;
  this.scrollTop = 0;
};

// Inherit support for events
H5P.DragNDrop.prototype = Object.create(H5P.EventDispatcher.prototype);
H5P.DragNDrop.prototype.constructor = H5P.DragNDrop;

/**
 * Set the current element
 * 
 * @method setElement
 * @param  {j@uery} $element
 */
H5P.DragNDrop.prototype.setElement = function ($element) {
  this.$element = $element;
};

/**
 * Start tracking the mouse.
 *
 * @param {jQuery} $element
 * @param {Number} x Start X coordinate
 * @param {Number} y Start Y coordinate
 * @returns {undefined}
 */
H5P.DragNDrop.prototype.press = function ($element, x, y) {
  var that = this;
  var eventData = {
    instance: this
  };

  H5P.$window
    .mousemove(eventData, H5P.DragNDrop.moveHandler)
    .bind('mouseup', eventData, H5P.DragNDrop.release);

  H5P.$body
    // With user-select: none uncommented, after moving a drag and drop element, if I hover over something that changes transparancy on hover IE10 on WIN7 crashes
    // TODO: Add user-select and -ms-user-select later if IE10 stops bugging
    .css({'-moz-user-select': 'none', '-webkit-user-select': 'none'/*, 'user-select': 'none', '-ms-user-select': 'none'*/})
    .attr('unselectable', 'on')[0]
    .onselectstart = H5P.$body[0].ondragstart = function () {
      return false;
    };

  that.containerOffset = $element.offsetParent().offset();

  this.$element = $element;
  this.moving = false;
  this.startX = x;
  this.startY = y;

  this.marginX = parseInt($element.css('marginLeft')) + parseInt($element.css('marginRight'));
  this.marginY = parseInt($element.css('marginTop')) + parseInt($element.css('marginBottom'));

  var offset = $element.offset();
  this.adjust = {
    x: x - offset.left + this.marginX,
    y: y - offset.top - this.marginY
  };

  if (that.dnb && that.dnb.newElement) {
    this.move(x, y);
  }
};

/**
 * Handles mouse move events.
 *
 * @param {Event} event
 */
H5P.DragNDrop.moveHandler = function (event) {
  event.stopPropagation();
  event.data.instance.move(event.pageX, event.pageY);
};

/**
 * Handles mouse movements.
 *
 * @param {number} x
 * @param {number} y
 */
H5P.DragNDrop.prototype.move = function (x, y) {
  var that = this;

  if (!that.moving) {
    if (that.startMovingCallback !== undefined && !that.startMovingCallback(x, y)) {
      return;
    }

    // Start moving
    that.moving = true;
    that.$element.addClass('h5p-moving');
  }

  x -= that.adjust.x;
  y -= that.adjust.y;

  var posX = x - that.containerOffset.left + that.scrollLeft;
  var posY = y - that.containerOffset.top + that.scrollTop;

  if (that.snap !== undefined) {
    posX = Math.round(posX / that.snap) * that.snap;
    posY = Math.round(posY / that.snap) * that.snap;
  }

  // Do not move outside of minimum values.
  if (that.min !== undefined) {
    if (posX < that.min.x) {
      posX = that.min.x;
      x = that.min.x + that.containerOffset.left - that.scrollLeft;
    }
    if (posY < that.min.y) {
      posY = that.min.y;
      y = that.min.y + that.containerOffset.top - that.scrollTop;
    }
  }


  if (that.dnb && that.dnb.newElement && posY >= 0) {
    that.min.y = 0;
  }

  // Do not move outside of maximum values.
  if (that.max !== undefined) {
    if (posX > that.max.x) {
      posX = that.max.x;
      x = that.max.x + that.containerOffset.left - that.scrollLeft;
    }
    if (posY > that.max.y) {
      posY = that.max.y;
      y = that.max.y + that.containerOffset.top - that.scrollTop;
    }
  }

  // Show transform panel if element has moved
  var startX = that.startX - that.adjust.x - that.containerOffset.left + that.scrollLeft;
  var startY = that.startY - that.adjust.y - that.containerOffset.top + that.scrollTop;
  if (!that.snap && (posX !== startX || posY !== startY)) {
    that.trigger('showTransformPanel');
  }
  else if (that.snap) {
    var xChanged = (Math.round(posX / that.snap) * that.snap) !==
      (Math.round(startX / that.snap) * that.snap);
    var yChanged = (Math.round(posY / that.snap) * that.snap) !==
      (Math.round(startY / that.snap) * that.snap);
    if (xChanged || yChanged) {
      that.trigger('showTransformPanel');
    }
  }

  that.$element.css({left: posX, top: posY});

  if (that.dnb) {
    that.dnb.updateCoordinates();
  }

  if (that.moveCallback !== undefined) {
    that.moveCallback(x, y, that.$element);
  }
};

/**
 * Stop tracking the mouse.
 *
 * @param {Object} event
 * @returns {undefined}
 */
H5P.DragNDrop.release = function (event) {
  var that = event.data.instance;

  H5P.$window
    .unbind('mousemove', H5P.DragNDrop.moveHandler)
    .unbind('mouseup', H5P.DragNDrop.release);

  H5P.$body
    .css({'-moz-user-select': '', '-webkit-user-select': ''/*, 'user-select': '', '-ms-user-select': ''*/})
    .removeAttr('unselectable')[0]
    .onselectstart = H5P.$body[0].ondragstart = null;

  if (that.releaseCallback !== undefined) {
    that.releaseCallback();
  }

  if (that.moving) {
    that.$element.removeClass('h5p-moving');
    if (that.stopMovingCallback !== undefined) {
      that.stopMovingCallback(event);
    }
  }

  // trigger to hide the transform panel unless it was activated
  // through the context menu
  that.trigger('hideTransformPanel');
};
