var H5P = H5P || {};

/**
 * A class that easily helps your sort stuff.
 *
 * @param {jQuery} $container
 * @returns {undefined}
 */
H5P.DragNSort = function ($container) {
  var that = this;
  
  this.placeholderHtml = '<li class="h5p-placeholder"></li>';
  this.dnd = new H5P.DragNDrop($container);
  
  this.dnd.startMovingCallback = function (event) {
    return that.startMoving(event);
  };
  
  this.dnd.moveCallback = function (x, y) {
    that.move(x, y);
  };
  
  this.dnd.stopMovingCallback = function () {
    that.$element.removeAttr('style');
    that.$placeholder.remove();
  };
};

/**
 * Handles mousedown/touchstart for the sortable elemenet.
 * 
 * @param {jQuery} $element
 * @param {int} x Start X coordinate.
 * @param {int} y Start Y coordinate.
 * @returns {undefined}
 */
H5P.DragNSort.prototype.press = function ($element, x, y) {
  this.$element = $element;
  this.moving = false;
  this.dnd.press($element, x, y);
};

/**
 * Check if we can start moving the element and insert a placeholder.
 * 
 * @returns {Boolean} Indicates if we can start moving.
 */
H5P.DragNSort.prototype.startMoving = function (event) {
  if (this.startMovingCallback !== undefined && !this.startMovingCallback(event)) {
    return false;
  }
  
  this.moving = true;
  
  if (this.marginAdjust === undefined) {
    this.marginAdjust = parseInt(this.$element.css('marginTop')) + parseInt(this.$element.css('marginBottom'));
  }
  
  this.$placeholder = H5P.jQuery(this.placeholderHtml).css('height', this.$element.height()).insertBefore(this.$element.css('width', this.$element.width() + 'px'));
  return true;
};

/**
 * Tries to sort the element as we're moving.
 * 
 * @param {int} x Our current X coordinate.
 * @param {int} y Our current Y coordinate.
 * @returns {undefined}
 */
H5P.DragNSort.prototype.move = function (x, y) {
  // Try to move up.
  var $prev = this.$element.prev().prev();
  if ($prev.length && y < $prev.offset().top + (($prev.height() + this.marginAdjust + parseInt($prev.css('paddingBottom')) + parseInt($prev.css('paddingTop'))) / 2)) {
    $prev.insertAfter(this.$element);
    if (this.swapCallback !== undefined) {
      this.swapCallback(1);
    }
    return;
  }
    
  // Try to move down.
  var $next = this.$element.next();
  if ($next.length && y + this.$element.height() > $next.offset().top + (($next.height() + this.marginAdjust + parseInt($next.css('paddingBottom')) + parseInt($next.css('paddingTop'))) / 2)) {
    $next.insertBefore(this.$placeholder);
    if (this.swapCallback !== undefined) {
      this.swapCallback(-1);
    }
    return;
  }
  
  if (this.moveCallback !== undefined) {
    this.moveCallback(x, y);
  }
};