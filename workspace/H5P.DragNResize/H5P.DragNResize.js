/*global H5P*/
H5P.DragNResize = (function ($, EventDispatcher) {

  /**
   * Constructor!
   *
   * @class H5P.DragNResize
   * @param {H5P.jQuery} $container
   */
  function C($container) {
    var self = this;
    this.$container = $container;

    EventDispatcher.call(this);

    // Override settings for snapping to grid, and locking aspect ratio.
    H5P.$body.keydown(function (event) {
      if (event.keyCode === 17) {
        // Ctrl
        self.revertSnap = true;
      }
      else if (event.keyCode === 16) {
        // Shift
        self.revertLock = true;
      }
    }).keyup(function (event) {
      if (event.keyCode === 17) {
        // Ctrl
        self.revertSnap = false;
      }
      else if (event.keyCode === 16) {
        // Shift
        self.revertLock = false;
      }
    });
  }

  // Inheritance
  C.prototype = Object.create(EventDispatcher.prototype);
  C.prototype.constructor = C;

  /**
   * Gives the given element a resize handle.
   *
   * @param {H5P.jQuery} $element
   * @param {Object} [options]
   * @param {boolean} [options.lock]
   */
  C.prototype.add = function ($element, options) {
    var that = this;

    // Array with position of handles
    var cornerPositions = ['nw', 'ne', 'sw', 'se'];
    var edgePositions = ['n', 'w', 'e', 's'];

    var addResizeHandle = function (position) {
      $('<div>', {
        'class': 'h5p-dragnresize-handle ' + position
      }).mousedown(function (event) {
        that.lock = (options && options.lock);
        that.$element = $element;
        that.press(event.clientX, event.clientY, position);

        return false;
      }).data('position', position)
        .appendTo($element);
    };

    cornerPositions.forEach(function (pos) {
      addResizeHandle(pos);
    });

    // Add edge handles
    if (!options || !options.lock) {
      edgePositions.forEach(function (pos) {
        addResizeHandle(pos);
      });
    }
  };

  /**
   * Start resizing
   *
   * @param {number} x
   * @param {number} y
   * @param {String} [direction] Direction of resize
   */
  C.prototype.press = function (x, y, direction) {
    var eventData = {
      instance: this,
      direction: direction
    };

    H5P.$body
      .bind('mouseup', eventData, C.release)
      .bind('mouseleave', eventData, C.release)
      .css({
        '-moz-user-select': 'none',
        '-webkit-user-select': 'none',
        'user-select': 'none',
        '-ms-user-select': 'none'
      })
      .mousemove(eventData, C.move)
      .attr('unselectable', 'on')[0]
      .onselectstart = H5P.$body[0].ondragstart = function () {
        return false;
      };

    this.startX = x;
    this.startY = y;
    this.startWidth = this.$element.width();
    this.startHeight = this.$element.height();
    this.ratio = (this.startWidth / this.startHeight);
    this.left = this.$element.position().left;
    this.top = this.$element.position().top;

    this.containerEm = pxToNum(this.$element.css('fontSize'));
    this.containerWidth = this.$container.width();
    this.containerHeight = this.$container.height();

    // Set default values
    this.newLeft = this.left;
    this.newTop = this.top;
    this.newWidth = this.startWidth;
    this.newHeight = this.startHeight;

    this.trigger('startResizing', eventData);
  };

  /**
   * Resize events
   *
   * @param {Event} event
   */
  C.move = function (event) {
    var direction = (event.data.direction ? event.data.direction : 'se');
    var that = event.data.instance;
    var moveW = (direction === 'nw' || direction === 'sw' || direction === 'w');
    var moveN = (direction === 'nw' || direction === 'ne' || direction === 'n');
    var movesHorizontal = (direction === 'w' || direction === 'e');
    var movesVertical = (direction === 'n' || direction === 's');
    var deltaX = that.startX - event.clientX;
    var deltaY = that.startY - event.clientY;
    if (that.snap && !that.revertSnap) {
      deltaX = Math.floor(deltaX / that.snap) * that.snap;
      deltaY = Math.floor(deltaY / that.snap) * that.snap;
    }

    that.minLeft = that.left + that.startWidth - that.containerEm;
    that.minTop = that.top + that.startHeight - that.containerEm;

    // Moving west
    if (moveW) {
      that.newLeft = that.left - deltaX;
      that.newWidth = that.startWidth + deltaX;

      // Snap west side
      if (that.snap && !that.revertSnap) {
        that.newLeft = Math.round(that.newLeft / that.snap) * that.snap;
        that.newWidth = (that.left - that.newLeft) + that.startWidth;
      }
    }
    else if (!movesVertical) {
      that.newWidth = that.startWidth - deltaX;

      // Snap width
      if (that.snap && !that.revertSnap) {
        that.newWidth = Math.round(that.newWidth / that.snap) * that.snap;
      }
    }

    // Moving north
    if (moveN) {
      that.newTop = that.top - deltaY;
      that.newHeight = that.startHeight + deltaY;
      // Snap north
      if (that.snap && !that.revertSnap) {
        that.newTop = Math.round(that.newTop / that.snap) * that.snap;
        that.newHeight = (that.top - that.newTop) + that.startHeight;
      }
    }
    else if (!movesHorizontal) {
      that.newHeight = that.startHeight - deltaY;

      // Snap height
      if (that.snap && !that.revertSnap) {
        that.newHeight = Math.round(that.newHeight / that.snap) * that.snap;
      }
    }

    // Check edge cases
    if (moveW) {
      if (that.newLeft < 0) {
        that.newLeft = 0;
        that.newWidth = that.left + that.startWidth;
      }
      else if (that.startWidth + deltaX < that.containerEm) {
        // Element too small, keep current size
        that.newLeft = that.left + that.startWidth - that.containerEm;
        that.newWidth = that.containerEm;
      }
    }
    else if (!movesVertical) {
      if (that.left + that.newWidth > that.containerWidth) {
        that.newWidth = that.containerWidth - that.left;
      }
    }

    if (moveN) {
      if (that.newTop < 0) {
        that.newTop = 0;
        that.newHeight = that.top + that.startHeight;
      }
      else if (that.startHeight + deltaY < that.containerEm) {
        // Element not high enough, keep min size
        that.newTop = that.top + that.startHeight - that.containerEm;
        that.newHeight = that.containerEm;
      }
    }
    else if (!movesHorizontal) {
      if (that.top + that.newHeight > that.containerHeight) {
        that.newHeight = that.containerHeight - that.top;
      }
    }

    // Apply ratio lock
    var lock = (that.revertLock ? !that.lock : that.lock);
    if (lock) {
      that.lockDimensions(moveW, moveN, movesVertical, movesHorizontal);
    }

    // Fixes fast drags outside the canvas normalizing to smallest pos.
    if (moveW && event.clientX > that.startX + that.startWidth) {
      that.newLeft = that.minLeft;
    }

    if (moveN && event.clientY > that.startY + that.startHeight) {
      that.newTop = that.minTop;
    }

    // Min size at 4px
    if (that.newWidth <= 4) {
      that.newWidth = 4;
    }

    if (that.newHeight <= 4) {
      that.newHeight = 4;
    }

    that.$element.css({
      width: (that.newWidth / that.containerEm) + 'em',
      height: (that.newHeight / that.containerEm) + 'em',
      left: ((that.newLeft / that.containerWidth) * 100) + '%',
      top: ((that.newTop / that.containerHeight) * 100) + '%'
    });

    that.trigger('moveResizing');

    return false;
  };

  /**
   * Changes element values depending on moving direction of the element
   * @param isMovingWest
   * @param isMovingNorth
   * @param movesVertical
   * @param movesHorizontal
   */
  C.prototype.lockDimensions = function (isMovingWest, isMovingNorth, movesVertical, movesHorizontal) {
    // Expand to longest edge
    if (movesVertical) {
      this.newWidth = this.newHeight * this.ratio;
    }
    else if (movesHorizontal) {
      this.newHeight = this.newWidth / this.ratio;
    }
    else if (this.newWidth / this.startWidth > this.newHeight / this.startHeight) {
      this.newHeight = this.newWidth / this.ratio;
    }
    else {
      this.newWidth = this.newHeight * this.ratio;
    }

    // Change top to match new height
    if (isMovingNorth) {
      this.newTop = this.top - (this.newHeight - this.startHeight);

      // Edge case
      if (this.newTop <= 0) {
        this.newTop = 0;
        this.newHeight = this.top + this.startHeight;
        this.newWidth = this.newHeight * this.ratio;
      }
    }
    else {
      // Too high
      if (this.top + this.newHeight > this.containerHeight) {
        this.newHeight = this.containerHeight - this.top;
        this.newWidth = this.newHeight * this.ratio;
      }
    }

    // Change left to match new width
    if (isMovingWest) {
      this.newLeft = this.left - (this.newWidth - this.startWidth);
      // Edge case
      if (this.newLeft <= 0) {
        this.newLeft = 0;
        this.newWidth = this.left + this.startWidth;
        this.newHeight = this.newWidth / this.ratio;
      }
    }
    else {
      // Too wide
      if (this.left + this.newWidth > this.containerWidth) {
        this.newWidth = this.containerWidth - this.left;
        this.newHeight = this.newWidth / this.ratio;
      }
    }
  };

  /**
   * Stop resizing
   *
   * @param {Event} event
   */
  C.release = function (event) {
    var that = event.data.instance;

    H5P.$body.unbind('mousemove', C.move)
    .unbind('mouseleave', C.release)
    .unbind('mouseup', C.release)
    .css({
      '-moz-user-select': '',
      '-webkit-user-select': '',
      'user-select': '',
      '-ms-user-select': ''
    })
    .removeAttr('unselectable')[0]
    .onselectstart = H5P.$body[0].ondragstart = null;

    // Stopped resizing send width and height in Ems
    that.trigger('stoppedResizing', {
      left: that.left,
      top: that.top,
      width: that.newWidth / that.containerEm,
      height: that.newHeight / that.containerEm
    });

    // Refocus element after resizing it. Apply timeout since focus is lost at the end of mouse event.
    setTimeout(function () {
      that.$element.focus();
    }, 0);
  };

  /**
   * Convert px value to number.
   *
   * @param {String} px
   * @returns {Number}
   */
  var pxToNum = function (px) {
    return Number(px.replace('px', ''));
  };

  return C;
})(H5P.jQuery, H5P.EventDispatcher);
