/** @namespace H5PEditor */
var H5PEditor = H5PEditor || {};

H5PEditor.VerticalTabs = (function ($) {

  /**
   * Draws the list.
   *
   * @class
   * @param {List} list
   */
  function VerticalTabs(list) {
    var self = this;
    var entity = list.getEntity();

    // Make first letter upper case.
    entity = entity.substr(0,1).toUpperCase() + entity.substr(1);

    // Create DOM elements
    var $wrapper = $('<div/>', {
      'class': 'h5p-vtab-wrapper'
    });
    var $inner = $('<div/>', {
      'class': 'h5p-vtabs'
    }).appendTo($wrapper);
    var $tabs = $('<ol/>', {
      'class': 'h5p-ul'
    }).appendTo($inner);
    var $button = $('<button/>', {
      text: H5PEditor.t('core', 'addEntity', {':entity': entity}),
      on: {
        click: function () {
          if (list.addItem()) {
            openTab($tabs.children(':last').add($forms.children(':last')));
          }
        }
      }
    }).appendTo($inner);
    var $forms = $('<div/>', {
      'class': 'h5p-vtab-forms'
    }).appendTo($wrapper);

    // Used when dragging items around
    var adjustX, adjustY, marginTop, formOffset, $currentTab;

    /**
     * @private
     * @param {jQuery} $item
     * @param {jQuery} $placeholder
     * @param {Number} x
     * @param {Number} y
     */
    var moveItem = function ($item, $placeholder, x, y) {
      var currentIndex;

      // Adjust so the mouse is placed on top of the icon.
      x = x - adjustX;
      y = y - adjustY;
      $item.css({
        top: y - marginTop - formOffset.top,
        left: x - formOffset.left
      });

      // Try to move up.
      var $prev = $item.prev().prev();
      if ($prev.length && y < $prev.offset().top + ($prev.height() / 2)) {
        $prev.insertAfter($item);

        currentIndex = $item.index();
        list.moveItem(currentIndex, currentIndex - 1);

        return;
      }

      // Try to move down.
      var $next = $item.next();
      if ($next.length && y + $item.height() > $next.offset().top + ($next.height() / 2)) {
        $next.insertBefore($placeholder);

        currentIndex = $item.index() - 2;
        list.moveItem(currentIndex, currentIndex + 1);
      }
    };

    /**
     * Re-index labels. Necessary after tabs are sorted or removed.
     *
     * @private
     */
    var reindexLabels = function () {
      $tabs.find('.h5p-index-label').each(function (index, element) {
        $(element).text(index + 1);
      });
    };

    /**
     * Opens the given tab.
     *
     * @private
     * @param {jQuery} $newTab
     */
    var openTab = function ($newTab) {
      if ($currentTab !== undefined) {
        $currentTab.removeClass('h5p-current');
      }
      $newTab.addClass('h5p-current');
      $currentTab = $newTab;
    };

    /**
     * Adds UI items to the widget.
     *
     * @public
     * @param {Object} item
     */
    self.addItem = function (item) {
      var $placeholder;
      var $tab = $('<li/>', {
        'class': 'h5p-vtab-li'
      }).appendTo($tabs);

      /**
       * Mouse move callback
       *
       * @private
       * @param {Object} event
       */
      var move = function (event) {
        moveItem($tab, $placeholder, event.pageX, event.pageY);
      };

      /**
       * Mouse button release callback
       *
       * @private
       */
      var up = function () {
        H5P.$body
          .unbind('mousemove', move)
          .unbind('mouseup', up)
          .unbind('mouseleave', up)
          .attr('unselectable', 'off')
          .css({
            '-moz-user-select': '',
            '-webkit-user-select': '',
            'user-select': '',
            '-ms-user-select': ''
          })
          [0].onselectstart = H5P.$body[0].ondragstart = null;

        $tab.removeClass('h5p-moving').css({
          width: 'auto',
          height: 'auto',
          top: '',
          left: ''
        });
        $placeholder.remove();
        reindexLabels();
      };

      /**
       * Mouse button down callback
       *
       * @private
       */
      var down = function (event) {
        if (event.which !== 1) {
          return; // Only allow left mouse button
        }

        // Start tracking mouse
        H5P.$body
          .attr('unselectable', 'on')
          .mouseup(up)
          .bind('mouseleave', up)
          .css({
            '-moz-user-select': 'none',
            '-webkit-user-select': 'none',
            'user-select': 'none',
            '-ms-user-select': 'none'
          })
          .mousemove(move)
          [0].onselectstart = H5P.$body[0].ondragstart = function () {
            return false;
          };

        var offset = $tab.offset();
        adjustX = event.pageX - offset.left;
        adjustY = event.pageY - offset.top;
        marginTop = parseInt($tab.css('marginTop'));
        formOffset = $tabs.offsetParent().offset();
        // TODO: Couldn't formOffset and margin be added?

        var width = $tab.width();
        var height = $tab.height();

        $tab.addClass('h5p-moving').css({
          width: width,
          height: height
        });
        $placeholder = $('<li/>', {
          'class': 'h5p-placeholder',
          css: {
            width: width,
            height: height
          }
        }).insertBefore($tab);

        move(event);
        return false;
      };

      // Add order button
      $('<div/>', {
        'class' : 'h5p-order',
        role: 'button',
        tabIndex: 1,
        on: {
          mousedown: down
        }
      }).appendTo($tab);

      // Add clickable label
      $('<div/>', {
        'class' : 'h5p-vtab-a',
        html: '<span class="h5p-index-label">' + ($tab.index() + 1) + '</span>. <span class="h5p-label">' + entity + '</span>',
        role: 'button',
        tabIndex: 1,
        on: {
          click: function () {
            openTab($tab.add($form));
          }
        }
      }).appendTo($tab);

      // Create form wrapper
      var $form = $('<fieldset/>', {
        'class': 'h5p-vtab-form'
      });

      // Append new field item to forms wrapper
      item.appendTo($form);

      // Append remove button
      $('<div/>', {
        'class' : 'h5p-remove',
        role: 'button',
        tabIndex: 1,
        on: {
          click: function () {
            if (confirm(H5PEditor.t('core', 'confirmRemoval', {':type': entity}))) {
              var $next, index = $tab.index();
              if (index) {
                // Go to previous tab
                $next = $tab.prev().add($form.prev());
              }
              else {
                // Go to next tab
                $next = $tab.next().add($form.next());
              }

              if ($next.length) {
                // Open another tab
                openTab($next);
              }

              list.removeItem($tab.index());
              $tab.remove();
              $form.remove();
              reindexLabels();
            }
          }
        }
      }).prependTo($form);

      // Append form wrapper to forms list
      $form.appendTo($forms);

      // Good UX: automatically expand groups
      if (item instanceof H5PEditor.Group) {
        item.expand();
      }
      else if (item instanceof H5PEditor.Library) {
        // Use selected library as title
        item.changes.push(function (library) {
          $tab.find('.h5p-label').text(library.title);
        });
        if (item.currentLibrary) {
          for (var i = 0; i < item.libraries.length; i++) {
            //console.log(item.libraries[i].uberName, item.currentLibrary);
            if (item.libraries[i].uberName === item.currentLibrary) {
              $tab.find('.h5p-label').text(item.libraries[i].title);
              break;
            }
          }
        }
      }
      else if (item instanceof H5PEditor.Select) {
        // Use selected value as title
        var change = function () {
          var value = item.$select.val();
          $tab.find('.h5p-label').text(value === '-' ?  entity : item.$select.children('option[value="' + value + '"]').text());
        };
        item.$select.change(change);
        change();
      }

      if ($currentTab === undefined) {
        // Open tab if there are none open
        openTab($tab.add($form));
      }
    };

    /**
     * Puts this widget at the end of the given container.
     *
     * @public
     * @param {jQuery} $container
     */
    self.appendTo = function ($container) {
      $wrapper.appendTo($container);
    };

    /**
     * Remove this widget from the editor DOM.
     *
     * @public
     */
    self.remove = function () {
      $wrapper.remove();
    };
  }

  return VerticalTabs;
})(H5P.jQuery);
