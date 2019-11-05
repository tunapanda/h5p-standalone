(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["h5p-standalone"] = factory();
	else
		root["H5PStandalone"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/frame.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/imports-loader/index.js?H5PIntegration=>window.parent.H5PIntegration!./vendor/h5p/js/h5p.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/imports-loader?H5PIntegration=>window.parent.H5PIntegration!./vendor/h5p/js/h5p.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var H5PIntegration = window.parent.H5PIntegration;

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(/*! h5pjquery */ "./vendor/h5p/js/jquery.js");

/*jshint multistr: true */
// TODO: Should we split up the generic parts needed by the editor(and others), and the parts needed to "run" H5Ps?

/** @namespace */
var H5P = window.H5P = window.H5P || {};

/**
 * Tells us if we're inside of an iframe.
 * @member {boolean}
 */
H5P.isFramed = (window.self !== window.parent);

/**
 * jQuery instance of current window.
 * @member {H5P.jQuery}
 */
H5P.$window = H5P.jQuery(window);

/**
 * List over H5P instances on the current page.
 * @member {Array}
 */
H5P.instances = [];

// Detect if we support fullscreen, and what prefix to use.
if (document.documentElement.requestFullScreen) {
  /**
   * Browser prefix to use when entering fullscreen mode.
   * undefined means no fullscreen support.
   * @member {string}
   */
  H5P.fullScreenBrowserPrefix = '';
}
else if (document.documentElement.webkitRequestFullScreen) {
  H5P.safariBrowser = navigator.userAgent.match(/version\/([.\d]+)/i);
  H5P.safariBrowser = (H5P.safariBrowser === null ? 0 : parseInt(H5P.safariBrowser[1]));

  // Do not allow fullscreen for safari < 7.
  if (H5P.safariBrowser === 0 || H5P.safariBrowser > 6) {
    H5P.fullScreenBrowserPrefix = 'webkit';
  }
}
else if (document.documentElement.mozRequestFullScreen) {
  H5P.fullScreenBrowserPrefix = 'moz';
}
else if (document.documentElement.msRequestFullscreen) {
  H5P.fullScreenBrowserPrefix = 'ms';
}

/**
 * Keep track of when the H5Ps where started.
 *
 * @type {Object[]}
 */
H5P.opened = {};

/**
 * Initialize H5P content.
 * Scans for ".h5p-content" in the document and initializes H5P instances where found.
 *
 * @param {Object} target DOM Element
 */
H5P.init = function (target) {
  // Useful jQuery object.
  if (H5P.$body === undefined) {
    H5P.$body = H5P.jQuery(document.body);
  }

  // Determine if we can use full screen
  if (H5P.fullscreenSupported === undefined) {
    /**
     * Use this variable to check if fullscreen is supported. Fullscreen can be
     * restricted when embedding since not all browsers support the native
     * fullscreen, and the semi-fullscreen solution doesn't work when embedded.
     * @type {boolean}
     */
    H5P.fullscreenSupported = !H5PIntegration.fullscreenDisabled && !H5P.fullscreenDisabled && (!(H5P.isFramed && H5P.externalEmbed !== false) || !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled));
    // -We should consider document.msFullscreenEnabled when they get their
    // -element sizing corrected. Ref. https://connect.microsoft.com/IE/feedback/details/838286/ie-11-incorrectly-reports-dom-element-sizes-in-fullscreen-mode-when-fullscreened-element-is-within-an-iframe
    // Update: Seems to be no need as they've moved on to Webkit
  }

  // Deprecated variable, kept to maintain backwards compatability
  if (H5P.canHasFullScreen === undefined) {
    /**
     * @deprecated since version 1.11
     * @type {boolean}
     */
    H5P.canHasFullScreen = H5P.fullscreenSupported;
  }

  // H5Ps added in normal DIV.
  H5P.jQuery('.h5p-content:not(.h5p-initialized)', target).each(function () {
    var $element = H5P.jQuery(this).addClass('h5p-initialized');
    var $container = H5P.jQuery('<div class="h5p-container"></div>').appendTo($element);
    var contentId = $element.data('content-id');
    var contentData = H5PIntegration.contents['cid-' + contentId];
    if (contentData === undefined) {
      return H5P.error('No data for content id ' + contentId + '. Perhaps the library is gone?');
    }
    var library = {
      library: contentData.library,
      params: JSON.parse(contentData.jsonContent),
      metadata: contentData.metadata
    };

    H5P.getUserData(contentId, 'state', function (err, previousState) {
      if (previousState) {
        library.userDatas = {
          state: previousState
        };
      }
      else if (previousState === null && H5PIntegration.saveFreq) {
        // Content has been reset. Display dialog.
        delete contentData.contentUserData;
        var dialog = new H5P.Dialog('content-user-data-reset', 'Data Reset', '<p>' + H5P.t('contentChanged') + '</p><p>' + H5P.t('startingOver') + '</p><div class="h5p-dialog-ok-button" tabIndex="0" role="button">OK</div>', $container);
        H5P.jQuery(dialog).on('dialog-opened', function (event, $dialog) {

          var closeDialog = function (event) {
            if (event.type === 'click' || event.which === 32) {
              dialog.close();
              H5P.deleteUserData(contentId, 'state', 0);
            }
          };

          $dialog.find('.h5p-dialog-ok-button').click(closeDialog).keypress(closeDialog);
          H5P.trigger(instance, 'resize');
        }).on('dialog-closed', function () {
          H5P.trigger(instance, 'resize');
        });
        dialog.open();
      }
      // If previousState is false we don't have a previous state
    });

    // Create new instance.
    var instance = H5P.newRunnable(library, contentId, $container, true, {standalone: true});

    H5P.offlineRequestQueue = new H5P.OfflineRequestQueue({instance: instance});

    // Check if we should add and display a fullscreen button for this H5P.
    if (contentData.fullScreen == 1 && H5P.fullscreenSupported) {
      H5P.jQuery(
        '<div class="h5p-content-controls">' +
          '<div role="button" ' +
                'tabindex="0" ' +
                'class="h5p-enable-fullscreen" ' +
                'aria-label="' + H5P.t('fullscreen') + '" ' +
                'title="' + H5P.t('fullscreen') + '">' +
          '</div>' +
        '</div>')
        .prependTo($container)
          .children()
          .click(function () {
            H5P.fullScreen($container, instance);
          })
        .keydown(function (e) {
          if (e.which === 32 || e.which === 13) {
            H5P.fullScreen($container, instance);
            return false;
          }
        })
      ;
    }

    /**
     * Create action bar
     */
    var displayOptions = contentData.displayOptions;
    var displayFrame = false;
    if (displayOptions.frame) {
      // Special handling of copyrights
      if (displayOptions.copyright) {
        var copyrights = H5P.getCopyrights(instance, library.params, contentId, library.metadata);
        if (!copyrights) {
          displayOptions.copyright = false;
        }
      }

      // Create action bar
      var actionBar = new H5P.ActionBar(displayOptions);
      var $actions = actionBar.getDOMElement();

      actionBar.on('reuse', function () {
        H5P.openReuseDialog($actions, contentData, library, instance, contentId);
        instance.triggerXAPI('accessed-reuse');
      });
      actionBar.on('copyrights', function () {
        var dialog = new H5P.Dialog('copyrights', H5P.t('copyrightInformation'), copyrights, $container);
        dialog.open(true);
        instance.triggerXAPI('accessed-copyright');
      });
      actionBar.on('embed', function () {
        H5P.openEmbedDialog($actions, contentData.embedCode, contentData.resizeCode, {
          width: $element.width(),
          height: $element.height()
        }, instance);
        instance.triggerXAPI('accessed-embed');
      });

      if (actionBar.hasActions()) {
        displayFrame = true;
        $actions.insertAfter($container);
      }
    }

    $element.addClass(displayFrame ? 'h5p-frame' : 'h5p-no-frame');

    // Keep track of when we started
    H5P.opened[contentId] = new Date();

    // Handle events when the user finishes the content. Useful for logging exercise results.
    H5P.on(instance, 'finish', function (event) {
      if (event.data !== undefined) {
        H5P.setFinished(contentId, event.data.score, event.data.maxScore, event.data.time);
      }
    });

    // Listen for xAPI events.
    H5P.on(instance, 'xAPI', H5P.xAPICompletedListener);

    // Auto save current state if supported
    if (H5PIntegration.saveFreq !== false && (
        instance.getCurrentState instanceof Function ||
        typeof instance.getCurrentState === 'function')) {

      var saveTimer, save = function () {
        var state = instance.getCurrentState();
        if (state !== undefined) {
          H5P.setUserData(contentId, 'state', state, {deleteOnChange: true});
        }
        if (H5PIntegration.saveFreq) {
          // Continue autosave
          saveTimer = setTimeout(save, H5PIntegration.saveFreq * 1000);
        }
      };

      if (H5PIntegration.saveFreq) {
        // Start autosave
        saveTimer = setTimeout(save, H5PIntegration.saveFreq * 1000);
      }

      // xAPI events will schedule a save in three seconds.
      H5P.on(instance, 'xAPI', function (event) {
        var verb = event.getVerb();
        if (verb === 'completed' || verb === 'progressed') {
          clearTimeout(saveTimer);
          saveTimer = setTimeout(save, 3000);
        }
      });
    }

    if (H5P.isFramed) {
      var resizeDelay;
      if (H5P.externalEmbed === false) {
        // Internal embed
        // Make it possible to resize the iframe when the content changes size. This way we get no scrollbars.
        var iframe = window.frameElement;
        var resizeIframe = function () {
          if (window.parent.H5P.isFullscreen) {
            return; // Skip if full screen.
          }

          // Retain parent size to avoid jumping/scrolling
          var parentHeight = iframe.parentElement.style.height;
          iframe.parentElement.style.height = iframe.parentElement.clientHeight + 'px';

          // Note:  Force layout reflow
          //        This fixes a flickering bug for embedded content on iPads
          //        @see https://github.com/h5p/h5p-moodle-plugin/issues/237
          iframe.getBoundingClientRect();

          // Reset iframe height, in case content has shrinked.
          iframe.style.height = '1px';

          // Resize iframe so all content is visible.
          iframe.style.height = (iframe.contentDocument.body.scrollHeight) + 'px';

          // Free parent
          iframe.parentElement.style.height = parentHeight;
        };

        H5P.on(instance, 'resize', function () {
          // Use a delay to make sure iframe is resized to the correct size.
          clearTimeout(resizeDelay);
          resizeDelay = setTimeout(function () {
            resizeIframe();
          }, 1);
        });
      }
      else if (H5P.communicator) {
        // External embed
        var parentIsFriendly = false;

        // Handle that the resizer is loaded after the iframe
        H5P.communicator.on('ready', function () {
          H5P.communicator.send('hello');
        });

        // Handle hello message from our parent window
        H5P.communicator.on('hello', function () {
          // Initial setup/handshake is done
          parentIsFriendly = true;

          // Make iframe responsive
          document.body.style.height = 'auto';

          // Hide scrollbars for correct size
          document.body.style.overflow = 'hidden';

          // Content need to be resized to fit the new iframe size
          H5P.trigger(instance, 'resize');
        });

        // When resize has been prepared tell parent window to resize
        H5P.communicator.on('resizePrepared', function () {
          H5P.communicator.send('resize', {
            scrollHeight: document.body.scrollHeight
          });
        });

        H5P.communicator.on('resize', function () {
          H5P.trigger(instance, 'resize');
        });

        H5P.on(instance, 'resize', function () {
          if (H5P.isFullscreen) {
            return; // Skip iframe resize
          }

          // Use a delay to make sure iframe is resized to the correct size.
          clearTimeout(resizeDelay);
          resizeDelay = setTimeout(function () {
            // Only resize if the iframe can be resized
            if (parentIsFriendly) {
              H5P.communicator.send('prepareResize', {
                scrollHeight: document.body.scrollHeight,
                clientHeight: document.body.clientHeight
              });
            }
            else {
              H5P.communicator.send('hello');
            }
          }, 0);
        });
      }
    }

    if (!H5P.isFramed || H5P.externalEmbed === false) {
      // Resize everything when window is resized.
      H5P.jQuery(window.parent).resize(function () {
        if (window.parent.H5P.isFullscreen) {
          // Use timeout to avoid bug in certain browsers when exiting fullscreen. Some browser will trigger resize before the fullscreenchange event.
          H5P.trigger(instance, 'resize');
        }
        else {
          H5P.trigger(instance, 'resize');
        }
      });
    }

    H5P.instances.push(instance);

    // Resize content.
    H5P.trigger(instance, 'resize');

    // Logic for hiding focus effects when using mouse
    $element.addClass('using-mouse');
    $element.on('mousedown keydown keyup', function (event) {
      $element.toggleClass('using-mouse', event.type === 'mousedown');
    });

    if (H5P.externalDispatcher) {
      H5P.externalDispatcher.trigger('initialized');
    }
  });

  // Insert H5Ps that should be in iframes.
  H5P.jQuery('iframe.h5p-iframe:not(.h5p-initialized)', target).each(function () {
    var contentId = H5P.jQuery(this).addClass('h5p-initialized').data('content-id');
    this.contentDocument.open();
    this.contentDocument.write('<!doctype html><html class="h5p-iframe"><head>' + H5P.getHeadTags(contentId) + '</head><body><div class="h5p-content" data-content-id="' + contentId + '"/></body></html>');
    this.contentDocument.close();
  });
};

/**
 * Loop through assets for iframe content and create a set of tags for head.
 *
 * @private
 * @param {number} contentId
 * @returns {string} HTML
 */
H5P.getHeadTags = function (contentId) {
  var createStyleTags = function (styles) {
    var tags = '';
    for (var i = 0; i < styles.length; i++) {
      tags += '<link rel="stylesheet" href="' + styles[i] + '">';
    }
    return tags;
  };

  var createScriptTags = function (scripts) {
    var tags = '';
    for (var i = 0; i < scripts.length; i++) {
      tags += '<script src="' + scripts[i] + '"></script>';
    }
    return tags;
  };

  return '<base target="_parent">' +
         createStyleTags(H5PIntegration.core.styles) +
         createStyleTags(H5PIntegration.contents['cid-' + contentId].styles) +
         createScriptTags(H5PIntegration.core.scripts) +
         createScriptTags(H5PIntegration.contents['cid-' + contentId].scripts) +
         '<script>H5PIntegration = window.parent.H5PIntegration; var H5P = H5P || {}; H5P.externalEmbed = false;</script>';
};

/**
 * When embedded the communicator helps talk to the parent page.
 *
 * @type {Communicator}
 */
H5P.communicator = (function () {
  /**
   * @class
   * @private
   */
  function Communicator() {
    var self = this;

    // Maps actions to functions
    var actionHandlers = {};

    // Register message listener
    window.addEventListener('message', function receiveMessage(event) {
      if (window.parent !== event.source || event.data.context !== 'h5p') {
        return; // Only handle messages from parent and in the correct context
      }

      if (actionHandlers[event.data.action] !== undefined) {
        actionHandlers[event.data.action](event.data);
      }
    } , false);


    /**
     * Register action listener.
     *
     * @param {string} action What you are waiting for
     * @param {function} handler What you want done
     */
    self.on = function (action, handler) {
      actionHandlers[action] = handler;
    };

    /**
     * Send a message to the all mighty father.
     *
     * @param {string} action
     * @param {Object} [data] payload
     */
    self.send = function (action, data) {
      if (data === undefined) {
        data = {};
      }
      data.context = 'h5p';
      data.action = action;

      // Parent origin can be anything
      window.parent.postMessage(data, '*');
    };
  }

  return (window.postMessage && window.addEventListener ? new Communicator() : undefined);
})();

/**
 * Enter semi fullscreen for the given H5P instance
 *
 * @param {H5P.jQuery} $element Content container.
 * @param {Object} instance
 * @param {function} exitCallback Callback function called when user exits fullscreen.
 * @param {H5P.jQuery} $body For internal use. Gives the body of the iframe.
 */
H5P.semiFullScreen = function ($element, instance, exitCallback, body) {
  H5P.fullScreen($element, instance, exitCallback, body, true);
};

/**
 * Enter fullscreen for the given H5P instance.
 *
 * @param {H5P.jQuery} $element Content container.
 * @param {Object} instance
 * @param {function} exitCallback Callback function called when user exits fullscreen.
 * @param {H5P.jQuery} $body For internal use. Gives the body of the iframe.
 * @param {Boolean} forceSemiFullScreen
 */
H5P.fullScreen = function ($element, instance, exitCallback, body, forceSemiFullScreen) {
  if (H5P.exitFullScreen !== undefined) {
    return; // Cannot enter new fullscreen until previous is over
  }

  if (H5P.isFramed && H5P.externalEmbed === false) {
    // Trigger resize on wrapper in parent window.
    window.parent.H5P.fullScreen($element, instance, exitCallback, H5P.$body.get(), forceSemiFullScreen);
    H5P.isFullscreen = true;
    H5P.exitFullScreen = function () {
      window.parent.H5P.exitFullScreen();
    };
    H5P.on(instance, 'exitFullScreen', function () {
      H5P.isFullscreen = false;
      H5P.exitFullScreen = undefined;
    });
    return;
  }

  var $container = $element;
  var $classes, $iframe, $body;
  if (body === undefined)  {
    $body = H5P.$body;
  }
  else {
    // We're called from an iframe.
    $body = H5P.jQuery(body);
    $classes = $body.add($element.get());
    var iframeSelector = '#h5p-iframe-' + $element.parent().data('content-id');
    $iframe = H5P.jQuery(iframeSelector);
    $element = $iframe.parent(); // Put iframe wrapper in fullscreen, not container.
  }

  $classes = $element.add(H5P.$body).add($classes);

  /**
   * Prepare for resize by setting the correct styles.
   *
   * @private
   * @param {string} classes CSS
   */
  var before = function (classes) {
    $classes.addClass(classes);

    if ($iframe !== undefined) {
      // Set iframe to its default size(100%).
      $iframe.css('height', '');
    }
  };

  /**
   * Gets called when fullscreen mode has been entered.
   * Resizes and sets focus on content.
   *
   * @private
   */
  var entered = function () {
    // Do not rely on window resize events.
    H5P.trigger(instance, 'resize');
    H5P.trigger(instance, 'focus');
    H5P.trigger(instance, 'enterFullScreen');
  };

  /**
   * Gets called when fullscreen mode has been exited.
   * Resizes and sets focus on content.
   *
   * @private
   * @param {string} classes CSS
   */
  var done = function (classes) {
    H5P.isFullscreen = false;
    $classes.removeClass(classes);

    // Do not rely on window resize events.
    H5P.trigger(instance, 'resize');
    H5P.trigger(instance, 'focus');

    H5P.exitFullScreen = undefined;
    if (exitCallback !== undefined) {
      exitCallback();
    }

    H5P.trigger(instance, 'exitFullScreen');
  };

  H5P.isFullscreen = true;
  if (H5P.fullScreenBrowserPrefix === undefined || forceSemiFullScreen === true) {
    // Create semi fullscreen.

    if (H5P.isFramed) {
      return; // TODO: Should we support semi-fullscreen for IE9 & 10 ?
    }

    before('h5p-semi-fullscreen');
    var $disable = H5P.jQuery('<div role="button" tabindex="0" class="h5p-disable-fullscreen" title="' + H5P.t('disableFullscreen') + '" aria-label="' + H5P.t('disableFullscreen') + '"></div>').appendTo($container.find('.h5p-content-controls'));
    var keyup, disableSemiFullscreen = H5P.exitFullScreen = function () {
      if (prevViewportContent) {
        // Use content from the previous viewport tag
        h5pViewport.content = prevViewportContent;
      }
      else {
        // Remove viewport tag
        head.removeChild(h5pViewport);
      }
      $disable.remove();
      $body.unbind('keyup', keyup);
      done('h5p-semi-fullscreen');
    };
    keyup = function (event) {
      if (event.keyCode === 27) {
        disableSemiFullscreen();
      }
    };
    $disable.click(disableSemiFullscreen);
    $body.keyup(keyup);

    // Disable zoom
    var prevViewportContent, h5pViewport;
    var metaTags = document.getElementsByTagName('meta');
    for (var i = 0; i < metaTags.length; i++) {
      if (metaTags[i].name === 'viewport') {
        // Use the existing viewport tag
        h5pViewport = metaTags[i];
        prevViewportContent = h5pViewport.content;
        break;
      }
    }
    if (!prevViewportContent) {
      // Create a new viewport tag
      h5pViewport = document.createElement('meta');
      h5pViewport.name = 'viewport';
    }
    h5pViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
    if (!prevViewportContent) {
      // Insert the new viewport tag
      var head = document.getElementsByTagName('head')[0];
      head.appendChild(h5pViewport);
    }

    entered();
  }
  else {
    // Create real fullscreen.

    before('h5p-fullscreen');
    var first, eventName = (H5P.fullScreenBrowserPrefix === 'ms' ? 'MSFullscreenChange' : H5P.fullScreenBrowserPrefix + 'fullscreenchange');
    document.addEventListener(eventName, function () {
      if (first === undefined) {
        // We are entering fullscreen mode
        first = false;
        entered();
        return;
      }

      // We are exiting fullscreen
      done('h5p-fullscreen');
      document.removeEventListener(eventName, arguments.callee, false);
    });

    if (H5P.fullScreenBrowserPrefix === '') {
      $element[0].requestFullScreen();
    }
    else {
      var method = (H5P.fullScreenBrowserPrefix === 'ms' ? 'msRequestFullscreen' : H5P.fullScreenBrowserPrefix + 'RequestFullScreen');
      var params = (H5P.fullScreenBrowserPrefix === 'webkit' && H5P.safariBrowser === 0 ? Element.ALLOW_KEYBOARD_INPUT : undefined);
      $element[0][method](params);
    }

    // Allows everone to exit
    H5P.exitFullScreen = function () {
      if (H5P.fullScreenBrowserPrefix === '') {
        document.exitFullscreen();
      }
      else if (H5P.fullScreenBrowserPrefix === 'moz') {
        document.mozCancelFullScreen();
      }
      else {
        document[H5P.fullScreenBrowserPrefix + 'ExitFullscreen']();
      }
    };
  }
};

(function () {
  /**
   * Helper for adding a query parameter to an existing path that may already
   * contain one or a hash.
   *
   * @param {string} path
   * @param {string} parameter
   * @return {string}
   */
  H5P.addQueryParameter = function (path, parameter) {
    let newPath, secondSplit;
    const firstSplit = path.split('?');
    if (firstSplit[1]) {
      // There is already an existing query
      secondSplit = firstSplit[1].split('#');
      newPath = firstSplit[0] + '?' + secondSplit[0] + '&';
    }
    else {
      // No existing query, just need to take care of the hash
      secondSplit = firstSplit[0].split('#');
      newPath = secondSplit[0] + '?';
    }
    newPath += parameter;
    if (secondSplit[1]) {
      // Add back the hash
      newPath += '#' + secondSplit[1];
    }
    return newPath;
  };

  /**
   * Helper for setting the crossOrigin attribute + the complete correct source.
   * Note: This will start loading the resource.
   *
   * @param {Element} element DOM element, typically img, video or audio
   * @param {Object} source File object from parameters/json_content (created by H5PEditor)
   * @param {number} contentId Needed to determine the complete correct file path
   */
  H5P.setSource = function (element, source, contentId) {
    let path = source.path;

    const crossOrigin = H5P.getCrossOrigin(source);
    if (crossOrigin) {
      element.crossOrigin = crossOrigin;

      if (H5PIntegration.crossoriginCacheBuster) {
        // Some sites may want to add a cache buster in case the same resource
        // is used elsewhere without the crossOrigin attribute
        path = H5P.addQueryParameter(path, H5PIntegration.crossoriginCacheBuster);
      }
    }
    else {
      // In case this element has been used before.
      element.removeAttribute('crossorigin');
    }

    element.src = H5P.getPath(path, contentId);
  };

  /**
   * Check if the given path has a protocol.
   *
   * @private
   * @param {string} path
   * @return {string}
   */
  var hasProtocol = function (path) {
    return path.match(/^[a-z0-9]+:\/\//i);
  };

  /**
   * Get the crossOrigin policy to use for img, video and audio tags on the current site.
   *
   * @param {Object|string} source File object from parameters/json_content - Can also be URL(deprecated usage)
   * @returns {string|null} crossOrigin attribute value required by the source
   */
  H5P.getCrossOrigin = function (source) {
    if (typeof source !== 'object') {
      // Deprecated usage.
      return H5PIntegration.crossorigin && H5PIntegration.crossoriginRegex && source.match(H5PIntegration.crossoriginRegex) ? H5PIntegration.crossorigin : null;
    }

    if (H5PIntegration.crossorigin && !hasProtocol(source.path)) {
      // This is a local file, use the local crossOrigin policy.
      return H5PIntegration.crossorigin;
      // Note: We cannot use this for all external sources since we do not know
      // each server's individual policy. We could add support for a list of
      // external sources and their policy later on.
    }
  };

  /**
   * Find the path to the content files based on the id of the content.
   * Also identifies and returns absolute paths.
   *
   * @param {string} path
   *   Relative to content folder or absolute.
   * @param {number} contentId
   *   ID of the content requesting the path.
   * @returns {string}
   *   Complete URL to path.
   */
  H5P.getPath = function (path, contentId) {
    if (hasProtocol(path)) {
      return path;
    }

    var prefix;
    var isTmpFile = (path.substr(-4,4) === '#tmp');
    if (contentId !== undefined && !isTmpFile) {
      // Check for custom override URL
      if (H5PIntegration.contents !== undefined &&
          H5PIntegration.contents['cid-' + contentId]) {
        prefix = H5PIntegration.contents['cid-' + contentId].contentUrl;
      }
      if (!prefix) {
        prefix = H5PIntegration.url + '/content/' + contentId;
      }
    }
    else if (window.H5PEditor !== undefined) {
      prefix = H5PEditor.filesPath;
    }
    else {
      return;
    }

    if (!hasProtocol(prefix)) {
      // Use absolute urls
      prefix = window.location.protocol + "//" + window.location.host + prefix;
    }

    return prefix + '/' + path;
  };
})();

/**
 * THIS FUNCTION IS DEPRECATED, USE getPath INSTEAD
 * Will be remove march 2016.
 *
 * Find the path to the content files folder based on the id of the content
 *
 * @deprecated
 *   Will be removed march 2016.
 * @param contentId
 *   Id of the content requesting the path
 * @returns {string}
 *   URL
 */
H5P.getContentPath = function (contentId) {
  return H5PIntegration.url + '/content/' + contentId;
};

/**
 * Get library class constructor from H5P by classname.
 * Note that this class will only work for resolve "H5P.NameWithoutDot".
 * Also check out {@link H5P.newRunnable}
 *
 * Used from libraries to construct instances of other libraries' objects by name.
 *
 * @param {string} name Name of library
 * @returns {Object} Class constructor
 */
H5P.classFromName = function (name) {
  var arr = name.split(".");
  return this[arr[arr.length - 1]];
};

/**
 * A safe way of creating a new instance of a runnable H5P.
 *
 * @param {Object} library
 *   Library/action object form params.
 * @param {number} contentId
 *   Identifies the content.
 * @param {H5P.jQuery} [$attachTo]
 *   Element to attach the instance to.
 * @param {boolean} [skipResize]
 *   Skip triggering of the resize event after attaching.
 * @param {Object} [extras]
 *   Extra parameters for the H5P content constructor
 * @returns {Object}
 *   Instance.
 */
H5P.newRunnable = function (library, contentId, $attachTo, skipResize, extras) {
  var nameSplit, versionSplit, machineName;
  try {
    nameSplit = library.library.split(' ', 2);
    machineName = nameSplit[0];
    versionSplit = nameSplit[1].split('.', 2);
  }
  catch (err) {
    return H5P.error('Invalid library string: ' + library.library);
  }

  if ((library.params instanceof Object) !== true || (library.params instanceof Array) === true) {
    H5P.error('Invalid library params for: ' + library.library);
    return H5P.error(library.params);
  }

  // Find constructor function
  var constructor;
  try {
    nameSplit = nameSplit[0].split('.');
    constructor = window;
    for (var i = 0; i < nameSplit.length; i++) {
      constructor = constructor[nameSplit[i]];
    }
    if (typeof constructor !== 'function') {
      throw null;
    }
  }
  catch (err) {
    return H5P.error('Unable to find constructor for: ' + library.library);
  }

  if (extras === undefined) {
    extras = {};
  }
  if (library.subContentId) {
    extras.subContentId = library.subContentId;
  }

  if (library.userDatas && library.userDatas.state && H5PIntegration.saveFreq) {
    extras.previousState = library.userDatas.state;
  }

  if (library.metadata) {
    extras.metadata = library.metadata;
  }

  // Makes all H5P libraries extend H5P.ContentType:
  var standalone = extras.standalone || false;
  // This order makes it possible for an H5P library to override H5P.ContentType functions!
  constructor.prototype = H5P.jQuery.extend({}, H5P.ContentType(standalone).prototype, constructor.prototype);

  var instance;
  // Some old library versions have their own custom third parameter.
  // Make sure we don't send them the extras.
  // (they will interpret it as something else)
  if (H5P.jQuery.inArray(library.library, ['H5P.CoursePresentation 1.0', 'H5P.CoursePresentation 1.1', 'H5P.CoursePresentation 1.2', 'H5P.CoursePresentation 1.3']) > -1) {
    instance = new constructor(library.params, contentId);
  }
  else {
    instance = new constructor(library.params, contentId, extras);
  }

  if (instance.$ === undefined) {
    instance.$ = H5P.jQuery(instance);
  }

  if (instance.contentId === undefined) {
    instance.contentId = contentId;
  }
  if (instance.subContentId === undefined && library.subContentId) {
    instance.subContentId = library.subContentId;
  }
  if (instance.parent === undefined && extras && extras.parent) {
    instance.parent = extras.parent;
  }
  if (instance.libraryInfo === undefined) {
    instance.libraryInfo = {
      versionedName: library.library,
      versionedNameNoSpaces: machineName + '-' + versionSplit[0] + '.' + versionSplit[1],
      machineName: machineName,
      majorVersion: versionSplit[0],
      minorVersion: versionSplit[1]
    };
  }

  if ($attachTo !== undefined) {
    $attachTo.toggleClass('h5p-standalone', standalone);
    instance.attach($attachTo);
    H5P.trigger(instance, 'domChanged', {
      '$target': $attachTo,
      'library': machineName,
      'key': 'newLibrary'
    }, {'bubbles': true, 'external': true});

    if (skipResize === undefined || !skipResize) {
      // Resize content.
      H5P.trigger(instance, 'resize');
    }
  }
  return instance;
};

/**
 * Used to print useful error messages. (to JavaScript error console)
 *
 * @param {*} err Error to print.
 */
H5P.error = function (err) {
  if (window.console !== undefined && console.error !== undefined) {
    console.error(err.stack ? err.stack : err);
  }
};

/**
 * Translate text strings.
 *
 * @param {string} key
 *   Translation identifier, may only contain a-zA-Z0-9. No spaces or special chars.
 * @param {Object} [vars]
 *   Data for placeholders.
 * @param {string} [ns]
 *   Translation namespace. Defaults to H5P.
 * @returns {string}
 *   Translated text
 */
H5P.t = function (key, vars, ns) {
  if (ns === undefined) {
    ns = 'H5P';
  }

  if (H5PIntegration.l10n[ns] === undefined) {
    return '[Missing translation namespace "' + ns + '"]';
  }

  if (H5PIntegration.l10n[ns][key] === undefined) {
    return '[Missing translation "' + key + '" in "' + ns + '"]';
  }

  var translation = H5PIntegration.l10n[ns][key];

  if (vars !== undefined) {
    // Replace placeholder with variables.
    for (var placeholder in vars) {
      translation = translation.replace(placeholder, vars[placeholder]);
    }
  }

  return translation;
};

/**
 * Creates a new popup dialog over the H5P content.
 *
 * @class
 * @param {string} name
 *   Used for html class.
 * @param {string} title
 *   Used for header.
 * @param {string} content
 *   Displayed inside the dialog.
 * @param {H5P.jQuery} $element
 *   Which DOM element the dialog should be inserted after.
 */
H5P.Dialog = function (name, title, content, $element) {
  /** @alias H5P.Dialog# */
  var self = this;
  var $dialog = H5P.jQuery('<div class="h5p-popup-dialog h5p-' + name + '-dialog" role="dialog" tabindex="-1">\
                              <div class="h5p-inner">\
                                <h2>' + title + '</h2>\
                                <div class="h5p-scroll-content">' + content + '</div>\
                                <div class="h5p-close" role="button" tabindex="0" aria-label="' + H5P.t('close') + '" title="' + H5P.t('close') + '"></div>\
                              </div>\
                            </div>')
    .insertAfter($element)
    .click(function (e) {
      if (e && e.originalEvent && e.originalEvent.preventClosing) {
        return;
      }

      self.close();
    })
    .children('.h5p-inner')
      .click(function (e) {
        e.originalEvent.preventClosing = true;
      })
      .find('.h5p-close')
        .click(function () {
          self.close();
        })
        .keypress(function (e) {
          if (e.which === 13 || e.which === 32) {
            self.close();
            return false;
          }
        })
        .end()
      .find('a')
        .click(function (e) {
          e.stopPropagation();
        })
      .end()
    .end();

  /**
   * Opens the dialog.
   */
  self.open = function (scrollbar) {
    if (scrollbar) {
      $dialog.css('height', '100%');
    }
    setTimeout(function () {
      $dialog.addClass('h5p-open'); // Fade in
      // Triggering an event, in case something has to be done after dialog has been opened.
      H5P.jQuery(self).trigger('dialog-opened', [$dialog]);
      $dialog.focus();
    }, 1);
  };

  /**
   * Closes the dialog.
   */
  self.close = function () {
    $dialog.removeClass('h5p-open'); // Fade out
    setTimeout(function () {
      $dialog.remove();
      H5P.jQuery(self).trigger('dialog-closed', [$dialog]);
      $element.attr('tabindex', '-1');
      $element.focus();
    }, 200);
  };
};

/**
 * Gather copyright information for the given content.
 *
 * @param {Object} instance
 *   H5P instance to get copyright information for.
 * @param {Object} parameters
 *   Parameters of the content instance.
 * @param {number} contentId
 *   Identifies the H5P content
 * @param {Object} metadata
 *   Metadata of the content instance.
 * @returns {string} Copyright information.
 */
H5P.getCopyrights = function (instance, parameters, contentId, metadata) {
  var copyrights;

  if (instance.getCopyrights !== undefined) {
    try {
      // Use the instance's own copyright generator
      copyrights = instance.getCopyrights();
    }
    catch (err) {
      // Failed, prevent crashing page.
    }
  }

  if (copyrights === undefined) {
    // Create a generic flat copyright list
    copyrights = new H5P.ContentCopyrights();
    H5P.findCopyrights(copyrights, parameters, contentId);
  }

  var metadataCopyrights = H5P.buildMetadataCopyrights(metadata, instance.libraryInfo.machineName);
  if (metadataCopyrights !== undefined) {
    copyrights.addMediaInFront(metadataCopyrights);
  }

  if (copyrights !== undefined) {
    // Convert to string
    copyrights = copyrights.toString();
  }
  return copyrights;
};

/**
 * Gather a flat list of copyright information from the given parameters.
 *
 * @param {H5P.ContentCopyrights} info
 *   Used to collect all information in.
 * @param {(Object|Array)} parameters
 *   To search for file objects in.
 * @param {number} contentId
 *   Used to insert thumbnails for images.
 * @param {Object} extras - Extras.
 * @param {object} extras.metadata - Metadata
 * @param {object} extras.machineName - Library name of some kind.
 *   Metadata of the content instance.
 */
H5P.findCopyrights = function (info, parameters, contentId, extras) {
  // If extras are
  if (extras) {
    extras.params = parameters;
    buildFromMetadata(extras, extras.machineName, contentId);
  }

  var lastContentTypeName;
  // Cycle through parameters
  for (var field in parameters) {
    if (!parameters.hasOwnProperty(field)) {
      continue; // Do not check
    }

    /**
     * @deprecated This hack should be removed after 2017-11-01
     * The code that was using this was removed by HFP-574
     * This note was seen on 2018-04-04, and consultation with
     * higher authorities lead to keeping the code for now ;-)
     */
    if (field === 'overrideSettings') {
      console.warn("The semantics field 'overrideSettings' is DEPRECATED and should not be used.");
      console.warn(parameters);
      continue;
    }

    var value = parameters[field];

    if (value && value.library && typeof value.library === 'string') {
      lastContentTypeName = value.library.split(' ')[0];
    }
    else if (value && value.library && typeof value.library === 'object') {
      lastContentTypeName = (value.library.library && typeof value.library.library === 'string') ? value.library.library.split(' ')[0] : lastContentTypeName;
    }

    if (value instanceof Array) {
      // Cycle through array
      H5P.findCopyrights(info, value, contentId);
    }
    else if (value instanceof Object) {
      buildFromMetadata(value, lastContentTypeName, contentId);

      // Check if object is a file with copyrights (old core)
      if (value.copyright === undefined ||
          value.copyright.license === undefined ||
          value.path === undefined ||
          value.mime === undefined) {

        // Nope, cycle throught object
        H5P.findCopyrights(info, value, contentId);
      }
      else {
        // Found file, add copyrights
        var copyrights = new H5P.MediaCopyright(value.copyright);
        if (value.width !== undefined && value.height !== undefined) {
          copyrights.setThumbnail(new H5P.Thumbnail(H5P.getPath(value.path, contentId), value.width, value.height));
        }
        info.addMedia(copyrights);
      }
    }
  }

  function buildFromMetadata(data, name, contentId) {
    if (data.metadata) {
      const metadataCopyrights = H5P.buildMetadataCopyrights(data.metadata, name);
      if (metadataCopyrights !== undefined) {
        if (data.params && data.params.contentName === 'Image' && data.params.file) {
          const path = data.params.file.path;
          const width = data.params.file.width;
          const height = data.params.file.height;
          metadataCopyrights.setThumbnail(new H5P.Thumbnail(H5P.getPath(path, contentId), width, height));
        }
        info.addMedia(metadataCopyrights);
      }
    }
  }
};

H5P.buildMetadataCopyrights = function (metadata) {
  if (metadata && metadata.license !== undefined && metadata.license !== 'U') {
    var dataset = {
      contentType: metadata.contentType,
      title: metadata.title,
      author: (metadata.authors && metadata.authors.length > 0) ? metadata.authors.map(function (author) {
        return (author.role) ? author.name + ' (' + author.role + ')' : author.name;
      }).join(', ') : undefined,
      source: metadata.source,
      year: (metadata.yearFrom) ? (metadata.yearFrom + ((metadata.yearTo) ? '-' + metadata.yearTo: '')) : undefined,
      license: metadata.license,
      version: metadata.licenseVersion,
      licenseExtras: metadata.licenseExtras,
      changes: (metadata.changes && metadata.changes.length > 0) ? metadata.changes.map(function (change) {
        return change.log + (change.author ? ', ' + change.author : '') + (change.date ? ', ' + change.date : '');
      }).join(' / ') : undefined
    };

    return new H5P.MediaCopyright(dataset);
  }
};

/**
 * Display a dialog containing the download button and copy button.
 *
 * @param {H5P.jQuery} $element
 * @param {Object} contentData
 * @param {Object} library
 * @param {Object} instance
 * @param {number} contentId
 */
H5P.openReuseDialog = function ($element, contentData, library, instance, contentId) {
  let html = '';
  if (contentData.displayOptions.export) {
    html += '<button type="button" class="h5p-big-button h5p-download-button"><div class="h5p-button-title">Download as an .h5p file</div><div class="h5p-button-description">.h5p files may be uploaded to any web-site where H5P content may be created.</div></button>';
  }
  if (contentData.displayOptions.export && contentData.displayOptions.copy) {
    html += '<div class="h5p-horizontal-line-text"><span>or</span></div>';
  }
  if (contentData.displayOptions.copy) {
    html += '<button type="button" class="h5p-big-button h5p-copy-button"><div class="h5p-button-title">Copy content</div><div class="h5p-button-description">Copied content may be pasted anywhere this content type is supported on this website.</div></button>';
  }

  const dialog = new H5P.Dialog('reuse', H5P.t('reuseContent'), html, $element);

  // Selecting embed code when dialog is opened
  H5P.jQuery(dialog).on('dialog-opened', function (e, $dialog) {
    H5P.jQuery('<a href="https://h5p.org/node/442225" target="_blank">More Info</a>').click(function (e) {
      e.stopPropagation();
    }).appendTo($dialog.find('h2'));
    $dialog.find('.h5p-download-button').click(function () {
      window.location.href = contentData.exportUrl;
      instance.triggerXAPI('downloaded');
      dialog.close();
    });
    $dialog.find('.h5p-copy-button').click(function () {
      const item = new H5P.ClipboardItem(library);
      item.contentId = contentId;
      H5P.setClipboard(item);
      instance.triggerXAPI('copied');
      dialog.close();
      H5P.attachToastTo(
        H5P.jQuery('.h5p-content:first')[0],
        H5P.t('contentCopied'),
        {
          position: {
            horizontal: 'centered',
            vertical: 'centered',
            noOverflowX: true
          }
        }
      );
    });
    H5P.trigger(instance, 'resize');
  }).on('dialog-closed', function () {
    H5P.trigger(instance, 'resize');
  });

  dialog.open();
};

/**
 * Display a dialog containing the embed code.
 *
 * @param {H5P.jQuery} $element
 *   Element to insert dialog after.
 * @param {string} embedCode
 *   The embed code.
 * @param {string} resizeCode
 *   The advanced resize code
 * @param {Object} size
 *   The content's size.
 * @param {number} size.width
 * @param {number} size.height
 */
H5P.openEmbedDialog = function ($element, embedCode, resizeCode, size, instance) {
  var fullEmbedCode = embedCode + resizeCode;
  var dialog = new H5P.Dialog('embed', H5P.t('embed'), '<textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>' + H5P.t('size') + ': <input type="text" value="' + Math.ceil(size.width) + '" class="h5p-embed-size"/> × <input type="text" value="' + Math.ceil(size.height) + '" class="h5p-embed-size"/> px<br/><div role="button" tabindex="0" class="h5p-expander">' + H5P.t('showAdvanced') + '</div><div class="h5p-expander-content"><p>' + H5P.t('advancedHelp') + '</p><textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false">' + resizeCode + '</textarea></div>', $element);

  // Selecting embed code when dialog is opened
  H5P.jQuery(dialog).on('dialog-opened', function (event, $dialog) {
    var $inner = $dialog.find('.h5p-inner');
    var $scroll = $inner.find('.h5p-scroll-content');
    var diff = $scroll.outerHeight() - $scroll.innerHeight();
    var positionInner = function () {
      H5P.trigger(instance, 'resize');
    };

    // Handle changing of width/height
    var $w = $dialog.find('.h5p-embed-size:eq(0)');
    var $h = $dialog.find('.h5p-embed-size:eq(1)');
    var getNum = function ($e, d) {
      var num = parseFloat($e.val());
      if (isNaN(num)) {
        return d;
      }
      return Math.ceil(num);
    };
    var updateEmbed = function () {
      $dialog.find('.h5p-embed-code-container:first').val(fullEmbedCode.replace(':w', getNum($w, size.width)).replace(':h', getNum($h, size.height)));
    };

    $w.change(updateEmbed);
    $h.change(updateEmbed);
    updateEmbed();

    // Select text and expand textareas
    $dialog.find('.h5p-embed-code-container').each(function () {
      H5P.jQuery(this).css('height', this.scrollHeight + 'px').focus(function () {
        H5P.jQuery(this).select();
      });
    });
    $dialog.find('.h5p-embed-code-container').eq(0).select();
    positionInner();

    // Expand advanced embed
    var expand = function () {
      var $expander = H5P.jQuery(this);
      var $content = $expander.next();
      if ($content.is(':visible')) {
        $expander.removeClass('h5p-open').text(H5P.t('showAdvanced')).attr('aria-expanded', 'true');
        $content.hide();
      }
      else {
        $expander.addClass('h5p-open').text(H5P.t('hideAdvanced')).attr('aria-expanded', 'false');
        $content.show();
      }
      $dialog.find('.h5p-embed-code-container').each(function () {
        H5P.jQuery(this).css('height', this.scrollHeight + 'px');
      });
      positionInner();
    };
    $dialog.find('.h5p-expander').click(expand).keypress(function (event) {
      if (event.keyCode === 32) {
        expand.apply(this);
        return false;
      }
    });
  }).on('dialog-closed', function () {
    H5P.trigger(instance, 'resize');
  });

  dialog.open();
};

/**
 * Show a toast message.
 *
 * The reference element could be dom elements the toast should be attached to,
 * or e.g. the document body for general toast messages.
 *
 * @param {DOM} element Reference element to show toast message for.
 * @param {string} message Message to show.
 * @param {object} [config] Configuration.
 * @param {string} [config.style=h5p-toast] Style name for the tooltip.
 * @param {number} [config.duration=3000] Toast message length in ms.
 * @param {object} [config.position] Relative positioning of the toast.
 * @param {string} [config.position.horizontal=centered] [before|left|centered|right|after].
 * @param {string} [config.position.vertical=below] [above|top|centered|bottom|below].
 * @param {number} [config.position.offsetHorizontal=0] Extra horizontal offset.
 * @param {number} [config.position.offsetVertical=0] Extra vetical offset.
 * @param {boolean} [config.position.noOverflowLeft=false] True to prevent overflow left.
 * @param {boolean} [config.position.noOverflowRight=false] True to prevent overflow right.
 * @param {boolean} [config.position.noOverflowTop=false] True to prevent overflow top.
 * @param {boolean} [config.position.noOverflowBottom=false] True to prevent overflow bottom.
 * @param {boolean} [config.position.noOverflowX=false] True to prevent overflow left and right.
 * @param {boolean} [config.position.noOverflowY=false] True to prevent overflow top and bottom.
 * @param {object} [config.position.overflowReference=document.body] DOM reference for overflow.
 */
H5P.attachToastTo = function (element, message, config) {
  if (element === undefined || message === undefined) {
    return;
  }

  const eventPath = function (evt) {
    var path = (evt.composedPath && evt.composedPath()) || evt.path;
    var target = evt.target;

    if (path != null) {
      // Safari doesn't include Window, but it should.
      return (path.indexOf(window) < 0) ? path.concat(window) : path;
    }

    if (target === window) {
      return [window];
    }

    function getParents(node, memo) {
      memo = memo || [];
      var parentNode = node.parentNode;

      if (!parentNode) {
        return memo;
      }
      else {
        return getParents(parentNode, memo.concat(parentNode));
      }
    }

    return [target].concat(getParents(target), window);
  };

  /**
   * Handle click while toast is showing.
   */
  const clickHandler = function (event) {
    /*
     * A common use case will be to attach toasts to buttons that are clicked.
     * The click would remove the toast message instantly without this check.
     * Children of the clicked element are also ignored.
     */
    var path = eventPath(event);
    if (path.indexOf(element) !== -1) {
      return;
    }
    clearTimeout(timer);
    removeToast();
  };



  /**
   * Remove the toast message.
   */
  const removeToast = function () {
    document.removeEventListener('click', clickHandler);
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  };

  /**
   * Get absolute coordinates for the toast.
   *
   * @param {DOM} element Reference element to show toast message for.
   * @param {DOM} toast Toast element.
   * @param {object} [position={}] Relative positioning of the toast message.
   * @param {string} [position.horizontal=centered] [before|left|centered|right|after].
   * @param {string} [position.vertical=below] [above|top|centered|bottom|below].
   * @param {number} [position.offsetHorizontal=0] Extra horizontal offset.
   * @param {number} [position.offsetVertical=0] Extra vetical offset.
   * @param {boolean} [position.noOverflowLeft=false] True to prevent overflow left.
   * @param {boolean} [position.noOverflowRight=false] True to prevent overflow right.
   * @param {boolean} [position.noOverflowTop=false] True to prevent overflow top.
   * @param {boolean} [position.noOverflowBottom=false] True to prevent overflow bottom.
   * @param {boolean} [position.noOverflowX=false] True to prevent overflow left and right.
   * @param {boolean} [position.noOverflowY=false] True to prevent overflow top and bottom.
   * @return {object}
   */
  const getToastCoordinates = function (element, toast, position) {
    position = position || {};
    position.offsetHorizontal = position.offsetHorizontal || 0;
    position.offsetVertical = position.offsetVertical || 0;

    const toastRect = toast.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    let left = 0;
    let top = 0;

    // Compute horizontal position
    switch (position.horizontal) {
      case 'before':
        left = elementRect.left - toastRect.width - position.offsetHorizontal;
        break;
      case 'after':
        left = elementRect.left + elementRect.width + position.offsetHorizontal;
        break;
      case 'left':
        left = elementRect.left + position.offsetHorizontal;
        break;
      case 'right':
        left = elementRect.left + elementRect.width - toastRect.width - position.offsetHorizontal;
        break;
      case 'centered':
        left = elementRect.left + elementRect.width / 2 - toastRect.width / 2 + position.offsetHorizontal;
        break;
      default:
        left = elementRect.left + elementRect.width / 2 - toastRect.width / 2 + position.offsetHorizontal;
    }

    // Compute vertical position
    switch (position.vertical) {
      case 'above':
        top = elementRect.top - toastRect.height - position.offsetVertical;
        break;
      case 'below':
        top = elementRect.top + elementRect.height + position.offsetVertical;
        break;
      case 'top':
        top = elementRect.top + position.offsetVertical;
        break;
      case 'bottom':
        top = elementRect.top + elementRect.height - toastRect.height - position.offsetVertical;
        break;
      case 'centered':
        top = elementRect.top + elementRect.height / 2 - toastRect.height / 2 + position.offsetVertical;
        break;
      default:
        top = elementRect.top + elementRect.height + position.offsetVertical;
    }

    // Prevent overflow
    const overflowElement = document.body;
    const bounds = overflowElement.getBoundingClientRect();
    if ((position.noOverflowLeft || position.noOverflowX) && (left < bounds.x)) {
      left = bounds.x;
    }
    if ((position.noOverflowRight || position.noOverflowX) && ((left + toastRect.width) > (bounds.x + bounds.width))) {
      left = bounds.x + bounds.width - toastRect.width;
    }
    if ((position.noOverflowTop || position.noOverflowY) && (top < bounds.y)) {
      top = bounds.y;
    }
    if ((position.noOverflowBottom || position.noOverflowY) && ((top + toastRect.height) > (bounds.y + bounds.height))) {
      left = bounds.y + bounds.height - toastRect.height;
    }

    return {left: left, top: top};
  };

  // Sanitization
  config = config || {};
  config.style = config.style || 'h5p-toast';
  config.duration = config.duration || 3000;

  // Build toast
  const toast = document.createElement('div');
  toast.setAttribute('id', config.style);
  toast.classList.add('h5p-toast-disabled');
  toast.classList.add(config.style);

  const msg = document.createElement('span');
  msg.innerHTML = message;
  toast.appendChild(msg);

  document.body.appendChild(toast);

  // The message has to be set before getting the coordinates
  const coordinates = getToastCoordinates(element, toast, config.position);
  toast.style.left = Math.round(coordinates.left) + 'px';
  toast.style.top = Math.round(coordinates.top) + 'px';

  toast.classList.remove('h5p-toast-disabled');
  const timer = setTimeout(removeToast, config.duration);

  // The toast can also be removed by clicking somewhere
  document.addEventListener('click', clickHandler);
};

/**
 * Copyrights for a H5P Content Library.
 *
 * @class
 */
H5P.ContentCopyrights = function () {
  var label;
  var media = [];
  var content = [];

  /**
   * Set label.
   *
   * @param {string} newLabel
   */
  this.setLabel = function (newLabel) {
    label = newLabel;
  };

  /**
   * Add sub content.
   *
   * @param {H5P.MediaCopyright} newMedia
   */
  this.addMedia = function (newMedia) {
    if (newMedia !== undefined) {
      media.push(newMedia);
    }
  };

  /**
   * Add sub content in front.
   *
   * @param {H5P.MediaCopyright} newMedia
   */
  this.addMediaInFront = function (newMedia) {
    if (newMedia !== undefined) {
      media.unshift(newMedia);
    }
  };

  /**
   * Add sub content.
   *
   * @param {H5P.ContentCopyrights} newContent
   */
  this.addContent = function (newContent) {
    if (newContent !== undefined) {
      content.push(newContent);
    }
  };

  /**
   * Print content copyright.
   *
   * @returns {string} HTML.
   */
  this.toString = function () {
    var html = '';

    // Add media rights
    for (var i = 0; i < media.length; i++) {
      html += media[i];
    }

    // Add sub content rights
    for (i = 0; i < content.length; i++) {
      html += content[i];
    }


    if (html !== '') {
      // Add a label to this info
      if (label !== undefined) {
        html = '<h3>' + label + '</h3>' + html;
      }

      // Add wrapper
      html = '<div class="h5p-content-copyrights">' + html + '</div>';
    }

    return html;
  };
};

/**
 * A ordered list of copyright fields for media.
 *
 * @class
 * @param {Object} copyright
 *   Copyright information fields.
 * @param {Object} [labels]
 *   Translation of labels.
 * @param {Array} [order]
 *   Order of the fields.
 * @param {Object} [extraFields]
 *   Add extra copyright fields.
 */
H5P.MediaCopyright = function (copyright, labels, order, extraFields) {
  var thumbnail;
  var list = new H5P.DefinitionList();

  /**
   * Get translated label for field.
   *
   * @private
   * @param {string} fieldName
   * @returns {string}
   */
  var getLabel = function (fieldName) {
    if (labels === undefined || labels[fieldName] === undefined) {
      return H5P.t(fieldName);
    }

    return labels[fieldName];
  };

  /**
   * Get humanized value for the license field.
   *
   * @private
   * @param {string} license
   * @param {string} [version]
   * @returns {string}
   */
  var humanizeLicense = function (license, version) {
    var copyrightLicense = H5P.copyrightLicenses[license];

    // Build license string
    var value = '';
    if (!(license === 'PD' && version)) {
      // Add license label
      value += (copyrightLicense.hasOwnProperty('label') ? copyrightLicense.label : copyrightLicense);
    }

    // Check for version info
    var versionInfo;
    if (copyrightLicense.versions) {
      if (copyrightLicense.versions.default && (!version || !copyrightLicense.versions[version])) {
        version = copyrightLicense.versions.default;
      }
      if (version && copyrightLicense.versions[version]) {
        versionInfo = copyrightLicense.versions[version];
      }
    }

    if (versionInfo) {
      // Add license version
      if (value) {
        value += ' ';
      }
      value += (versionInfo.hasOwnProperty('label') ? versionInfo.label : versionInfo);
    }

    // Add link if specified
    var link;
    if (copyrightLicense.hasOwnProperty('link')) {
      link = copyrightLicense.link.replace(':version', copyrightLicense.linkVersions ? copyrightLicense.linkVersions[version] : version);
    }
    else if (versionInfo && copyrightLicense.hasOwnProperty('link')) {
      link = versionInfo.link;
    }
    if (link) {
      value = '<a href="' + link + '" target="_blank">' + value + '</a>';
    }

    // Generate parenthesis
    var parenthesis = '';
    if (license !== 'PD' && license !== 'C') {
      parenthesis += license;
    }
    if (version && version !== 'CC0 1.0') {
      if (parenthesis && license !== 'GNU GPL') {
        parenthesis += ' ';
      }
      parenthesis += version;
    }
    if (parenthesis) {
      value += ' (' + parenthesis + ')';
    }
    if (license === 'C') {
      value += ' &copy;';
    }

    return value;
  };

  if (copyright !== undefined) {
    // Add the extra fields
    for (var field in extraFields) {
      if (extraFields.hasOwnProperty(field)) {
        copyright[field] = extraFields[field];
      }
    }

    if (order === undefined) {
      // Set default order
      order = ['contentType', 'title', 'license', 'author', 'year', 'source', 'licenseExtras', 'changes'];
    }

    for (var i = 0; i < order.length; i++) {
      var fieldName = order[i];
      if (copyright[fieldName] !== undefined && copyright[fieldName] !== '') {
        var humanValue = copyright[fieldName];
        if (fieldName === 'license') {
          humanValue = humanizeLicense(copyright.license, copyright.version);
        }
        if (fieldName === 'source') {
          humanValue = (humanValue) ? '<a href="' + humanValue + '" target="_blank">' + humanValue + '</a>' : undefined;
        }
        list.add(new H5P.Field(getLabel(fieldName), humanValue));
      }
    }
  }

  /**
   * Set thumbnail.
   *
   * @param {H5P.Thumbnail} newThumbnail
   */
  this.setThumbnail = function (newThumbnail) {
    thumbnail = newThumbnail;
  };

  /**
   * Checks if this copyright is undisclosed.
   * I.e. only has the license attribute set, and it's undisclosed.
   *
   * @returns {boolean}
   */
  this.undisclosed = function () {
    if (list.size() === 1) {
      var field = list.get(0);
      if (field.getLabel() === getLabel('license') && field.getValue() === humanizeLicense('U')) {
        return true;
      }
    }
    return false;
  };

  /**
   * Print media copyright.
   *
   * @returns {string} HTML.
   */
  this.toString = function () {
    var html = '';

    if (this.undisclosed()) {
      return html; // No need to print a copyright with a single undisclosed license.
    }

    if (thumbnail !== undefined) {
      html += thumbnail;
    }
    html += list;

    if (html !== '') {
      html = '<div class="h5p-media-copyright">' + html + '</div>';
    }

    return html;
  };
};

/**
 * A simple and elegant class for creating thumbnails of images.
 *
 * @class
 * @param {string} source
 * @param {number} width
 * @param {number} height
 */
H5P.Thumbnail = function (source, width, height) {
  var thumbWidth, thumbHeight = 100;
  if (width !== undefined) {
    thumbWidth = Math.round(thumbHeight * (width / height));
  }

  /**
   * Print thumbnail.
   *
   * @returns {string} HTML.
   */
  this.toString = function () {
    return '<img src="' + source + '" alt="' + H5P.t('thumbnail') + '" class="h5p-thumbnail" height="' + thumbHeight + '"' + (thumbWidth === undefined ? '' : ' width="' + thumbWidth + '"') + '/>';
  };
};

/**
 * Simple data structure class for storing a single field.
 *
 * @class
 * @param {string} label
 * @param {string} value
 */
H5P.Field = function (label, value) {
  /**
   * Public. Get field label.
   *
   * @returns {String}
   */
  this.getLabel = function () {
    return label;
  };

  /**
   * Public. Get field value.
   *
   * @returns {String}
   */
  this.getValue = function () {
    return value;
  };
};

/**
 * Simple class for creating a definition list.
 *
 * @class
 */
H5P.DefinitionList = function () {
  var fields = [];

  /**
   * Add field to list.
   *
   * @param {H5P.Field} field
   */
  this.add = function (field) {
    fields.push(field);
  };

  /**
   * Get Number of fields.
   *
   * @returns {number}
   */
  this.size = function () {
    return fields.length;
  };

  /**
   * Get field at given index.
   *
   * @param {number} index
   * @returns {H5P.Field}
   */
  this.get = function (index) {
    return fields[index];
  };

  /**
   * Print definition list.
   *
   * @returns {string} HTML.
   */
  this.toString = function () {
    var html = '';
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      html += '<dt>' + field.getLabel() + '</dt><dd>' + field.getValue() + '</dd>';
    }
    return (html === '' ? html : '<dl class="h5p-definition-list">' + html + '</dl>');
  };
};

/**
 * THIS FUNCTION/CLASS IS DEPRECATED AND WILL BE REMOVED.
 *
 * Helper object for keeping coordinates in the same format all over.
 *
 * @deprecated
 *   Will be removed march 2016.
 * @class
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 */
H5P.Coords = function (x, y, w, h) {
  if ( !(this instanceof H5P.Coords) )
    return new H5P.Coords(x, y, w, h);

  /** @member {number} */
  this.x = 0;
  /** @member {number} */
  this.y = 0;
  /** @member {number} */
  this.w = 1;
  /** @member {number} */
  this.h = 1;

  if (typeof(x) === 'object') {
    this.x = x.x;
    this.y = x.y;
    this.w = x.w;
    this.h = x.h;
  }
  else {
    if (x !== undefined) {
      this.x = x;
    }
    if (y !== undefined) {
      this.y = y;
    }
    if (w !== undefined) {
      this.w = w;
    }
    if (h !== undefined) {
      this.h = h;
    }
  }
  return this;
};

/**
 * Parse library string into values.
 *
 * @param {string} library
 *   library in the format "machineName majorVersion.minorVersion"
 * @returns {Object}
 *   library as an object with machineName, majorVersion and minorVersion properties
 *   return false if the library parameter is invalid
 */
H5P.libraryFromString = function (library) {
  var regExp = /(.+)\s(\d+)\.(\d+)$/g;
  var res = regExp.exec(library);
  if (res !== null) {
    return {
      'machineName': res[1],
      'majorVersion': parseInt(res[2]),
      'minorVersion': parseInt(res[3])
    };
  }
  else {
    return false;
  }
};

/**
 * Get the path to the library
 *
 * @param {string} library
 *   The library identifier in the format "machineName-majorVersion.minorVersion".
 * @returns {string}
 *   The full path to the library.
 */
H5P.getLibraryPath = function (library) {
  if (H5PIntegration.urlLibraries !== undefined) {
    // This is an override for those implementations that has a different libraries URL, e.g. Moodle
    return H5PIntegration.urlLibraries + '/' + library;
  }
  else {
    return H5PIntegration.url + '/libraries/' + library;
  }
};

/**
 * Recursivly clone the given object.
 *
 * @param {Object|Array} object
 *   Object to clone.
 * @param {boolean} [recursive]
 * @returns {Object|Array}
 *   A clone of object.
 */
H5P.cloneObject = function (object, recursive) {
  // TODO: Consider if this needs to be in core. Doesn't $.extend do the same?
  var clone = object instanceof Array ? [] : {};

  for (var i in object) {
    if (object.hasOwnProperty(i)) {
      if (recursive !== undefined && recursive && typeof object[i] === 'object') {
        clone[i] = H5P.cloneObject(object[i], recursive);
      }
      else {
        clone[i] = object[i];
      }
    }
  }

  return clone;
};

/**
 * Remove all empty spaces before and after the value.
 *
 * @param {string} value
 * @returns {string}
 */
H5P.trim = function (value) {
  return value.replace(/^\s+|\s+$/g, '');

  // TODO: Only include this or String.trim(). What is best?
  // I'm leaning towards implementing the missing ones: http://kangax.github.io/compat-table/es5/
  // So should we make this function deprecated?
};

/**
 * Check if JavaScript path/key is loaded.
 *
 * @param {string} path
 * @returns {boolean}
 */
H5P.jsLoaded = function (path) {
  H5PIntegration.loadedJs = H5PIntegration.loadedJs || [];
  return H5P.jQuery.inArray(path, H5PIntegration.loadedJs) !== -1;
};

/**
 * Check if styles path/key is loaded.
 *
 * @param {string} path
 * @returns {boolean}
 */
H5P.cssLoaded = function (path) {
  H5PIntegration.loadedCss = H5PIntegration.loadedCss || [];
  return H5P.jQuery.inArray(path, H5PIntegration.loadedCss) !== -1;
};

/**
 * Shuffle an array in place.
 *
 * @param {Array} array
 *   Array to shuffle
 * @returns {Array}
 *   The passed array is returned for chaining.
 */
H5P.shuffleArray = function (array) {
  // TODO: Consider if this should be a part of core. I'm guessing very few libraries are going to use it.
  if (!(array instanceof Array)) {
    return;
  }

  var i = array.length, j, tempi, tempj;
  if ( i === 0 ) return false;
  while ( --i ) {
    j       = Math.floor( Math.random() * ( i + 1 ) );
    tempi   = array[i];
    tempj   = array[j];
    array[i] = tempj;
    array[j] = tempi;
  }
  return array;
};

/**
 * Post finished results for user.
 *
 * @deprecated
 *   Do not use this function directly, trigger the finish event instead.
 *   Will be removed march 2016
 * @param {number} contentId
 *   Identifies the content
 * @param {number} score
 *   Achieved score/points
 * @param {number} maxScore
 *   The maximum score/points that can be achieved
 * @param {number} [time]
 *   Reported time consumption/usage
 */
H5P.setFinished = function (contentId, score, maxScore, time) {
  var validScore = typeof score === 'number' || score instanceof Number;
  if (validScore && H5PIntegration.postUserStatistics === true) {
    /**
     * Return unix timestamp for the given JS Date.
     *
     * @private
     * @param {Date} date
     * @returns {Number}
     */
    var toUnix = function (date) {
      return Math.round(date.getTime() / 1000);
    };

    // Post the results
    const data = {
      contentId: contentId,
      score: score,
      maxScore: maxScore,
      opened: toUnix(H5P.opened[contentId]),
      finished: toUnix(new Date()),
      time: time
    };
    H5P.jQuery.post(H5PIntegration.ajax.setFinished, data)
      .fail(function () {
        H5P.offlineRequestQueue.add(H5PIntegration.ajax.setFinished, data);
      });
  }
};

// Add indexOf to browsers that lack them. (IEs)
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (needle) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === needle) {
        return i;
      }
    }
    return -1;
  };
}

// Need to define trim() since this is not available on older IEs,
// and trim is used in several libs
if (String.prototype.trim === undefined) {
  String.prototype.trim = function () {
    return H5P.trim(this);
  };
}

/**
 * Trigger an event on an instance
 *
 * Helper function that triggers an event if the instance supports event handling
 *
 * @param {Object} instance
 *   Instance of H5P content
 * @param {string} eventType
 *   Type of event to trigger
 * @param {*} data
 * @param {Object} extras
 */
H5P.trigger = function (instance, eventType, data, extras) {
  // Try new event system first
  if (instance.trigger !== undefined) {
    instance.trigger(eventType, data, extras);
  }
  // Try deprecated event system
  else if (instance.$ !== undefined && instance.$.trigger !== undefined) {
    instance.$.trigger(eventType);
  }
};

/**
 * Register an event handler
 *
 * Helper function that registers an event handler for an event type if
 * the instance supports event handling
 *
 * @param {Object} instance
 *   Instance of H5P content
 * @param {string} eventType
 *   Type of event to listen for
 * @param {H5P.EventCallback} handler
 *   Callback that gets triggered for events of the specified type
 */
H5P.on = function (instance, eventType, handler) {
  // Try new event system first
  if (instance.on !== undefined) {
    instance.on(eventType, handler);
  }
  // Try deprecated event system
  else if (instance.$ !== undefined && instance.$.on !== undefined) {
    instance.$.on(eventType, handler);
  }
};

/**
 * Generate random UUID
 *
 * @returns {string} UUID
 */
H5P.createUUID = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
    var random = Math.random()*16|0, newChar = char === 'x' ? random : (random&0x3|0x8);
    return newChar.toString(16);
  });
};

/**
 * Create title
 *
 * @param {string} rawTitle
 * @param {number} maxLength
 * @returns {string}
 */
H5P.createTitle = function (rawTitle, maxLength) {
  if (!rawTitle) {
    return '';
  }
  if (maxLength === undefined) {
    maxLength = 60;
  }
  var title = H5P.jQuery('<div></div>')
    .text(
      // Strip tags
      rawTitle.replace(/(<([^>]+)>)/ig,"")
    // Escape
    ).text();
  if (title.length > maxLength) {
    title = title.substr(0, maxLength - 3) + '...';
  }
  return title;
};

// Wrap in privates
(function ($) {

  /**
   * Creates ajax requests for inserting, updateing and deleteing
   * content user data.
   *
   * @private
   * @param {number} contentId What content to store the data for.
   * @param {string} dataType Identifies the set of data for this content.
   * @param {string} subContentId Identifies sub content
   * @param {function} [done] Callback when ajax is done.
   * @param {object} [data] To be stored for future use.
   * @param {boolean} [preload=false] Data is loaded when content is loaded.
   * @param {boolean} [invalidate=false] Data is invalidated when content changes.
   * @param {boolean} [async=true]
   */
  function contentUserDataAjax(contentId, dataType, subContentId, done, data, preload, invalidate, async) {
    if (H5PIntegration.user === undefined) {
      // Not logged in, no use in saving.
      done('Not signed in.');
      return;
    }

    var options = {
      url: H5PIntegration.ajax.contentUserData.replace(':contentId', contentId).replace(':dataType', dataType).replace(':subContentId', subContentId ? subContentId : 0),
      dataType: 'json',
      async: async === undefined ? true : async
    };
    if (data !== undefined) {
      options.type = 'POST';
      options.data = {
        data: (data === null ? 0 : data),
        preload: (preload ? 1 : 0),
        invalidate: (invalidate ? 1 : 0)
      };
    }
    else {
      options.type = 'GET';
    }
    if (done !== undefined) {
      options.error = function (xhr, error) {
        done(error);
      };
      options.success = function (response) {
        if (!response.success) {
          done(response.message);
          return;
        }

        if (response.data === false || response.data === undefined) {
          done();
          return;
        }

        done(undefined, response.data);
      };
    }

    $.ajax(options);
  }

  /**
   * Get user data for given content.
   *
   * @param {number} contentId
   *   What content to get data for.
   * @param {string} dataId
   *   Identifies the set of data for this content.
   * @param {function} done
   *   Callback with error and data parameters.
   * @param {string} [subContentId]
   *   Identifies which data belongs to sub content.
   */
  H5P.getUserData = function (contentId, dataId, done, subContentId) {
    if (!subContentId) {
      subContentId = 0; // Default
    }

    H5PIntegration.contents = H5PIntegration.contents || {};
    var content = H5PIntegration.contents['cid-' + contentId] || {};
    var preloadedData = content.contentUserData;
    if (preloadedData && preloadedData[subContentId] && preloadedData[subContentId][dataId] !== undefined) {
      if (preloadedData[subContentId][dataId] === 'RESET') {
        done(undefined, null);
        return;
      }
      try {
        done(undefined, JSON.parse(preloadedData[subContentId][dataId]));
      }
      catch (err) {
        done(err);
      }
    }
    else {
      contentUserDataAjax(contentId, dataId, subContentId, function (err, data) {
        if (err || data === undefined) {
          done(err, data);
          return; // Error or no data
        }

        // Cache in preloaded
        if (content.contentUserData === undefined) {
          content.contentUserData = preloadedData = {};
        }
        if (preloadedData[subContentId] === undefined) {
          preloadedData[subContentId] = {};
        }
        preloadedData[subContentId][dataId] = data;

        // Done. Try to decode JSON
        try {
          done(undefined, JSON.parse(data));
        }
        catch (e) {
          done(e);
        }
      });
    }
  };

  /**
   * Async error handling.
   *
   * @callback H5P.ErrorCallback
   * @param {*} error
   */

  /**
   * Set user data for given content.
   *
   * @param {number} contentId
   *   What content to get data for.
   * @param {string} dataId
   *   Identifies the set of data for this content.
   * @param {Object} data
   *   The data that is to be stored.
   * @param {Object} [extras]
   *   Extra properties
   * @param {string} [extras.subContentId]
   *   Identifies which data belongs to sub content.
   * @param {boolean} [extras.preloaded=true]
   *   If the data should be loaded when content is loaded.
   * @param {boolean} [extras.deleteOnChange=false]
   *   If the data should be invalidated when the content changes.
   * @param {H5P.ErrorCallback} [extras.errorCallback]
   *   Callback with error as parameters.
   * @param {boolean} [extras.async=true]
   */
  H5P.setUserData = function (contentId, dataId, data, extras) {
    var options = H5P.jQuery.extend(true, {}, {
      subContentId: 0,
      preloaded: true,
      deleteOnChange: false,
      async: true
    }, extras);

    try {
      data = JSON.stringify(data);
    }
    catch (err) {
      if (options.errorCallback) {
        options.errorCallback(err);
      }
      return; // Failed to serialize.
    }

    var content = H5PIntegration.contents['cid-' + contentId];
    if (content === undefined) {
      content = H5PIntegration.contents['cid-' + contentId] = {};
    }
    if (!content.contentUserData) {
      content.contentUserData = {};
    }
    var preloadedData = content.contentUserData;
    if (preloadedData[options.subContentId] === undefined) {
      preloadedData[options.subContentId] = {};
    }
    if (data === preloadedData[options.subContentId][dataId]) {
      return; // No need to save this twice.
    }

    preloadedData[options.subContentId][dataId] = data;
    contentUserDataAjax(contentId, dataId, options.subContentId, function (error) {
      if (options.errorCallback && error) {
        options.errorCallback(error);
      }
    }, data, options.preloaded, options.deleteOnChange, options.async);
  };

  /**
   * Delete user data for given content.
   *
   * @param {number} contentId
   *   What content to remove data for.
   * @param {string} dataId
   *   Identifies the set of data for this content.
   * @param {string} [subContentId]
   *   Identifies which data belongs to sub content.
   */
  H5P.deleteUserData = function (contentId, dataId, subContentId) {
    if (!subContentId) {
      subContentId = 0; // Default
    }

    // Remove from preloaded/cache
    var preloadedData = H5PIntegration.contents['cid-' + contentId].contentUserData;
    if (preloadedData && preloadedData[subContentId] && preloadedData[subContentId][dataId]) {
      delete preloadedData[subContentId][dataId];
    }

    contentUserDataAjax(contentId, dataId, subContentId, undefined, null);
  };

  /**
   * Function for getting content for a certain ID
   *
   * @param {number} contentId
   * @return {Object}
   */
  H5P.getContentForInstance = function (contentId) {
    var key = 'cid-' + contentId;
    var exists = H5PIntegration && H5PIntegration.contents &&
                 H5PIntegration.contents[key];

    return exists ? H5PIntegration.contents[key] : undefined;
  };

  /**
   * Prepares the content parameters for storing in the clipboard.
   *
   * @class
   * @param {Object} parameters The parameters for the content to store
   * @param {string} [genericProperty] If only part of the parameters are generic, which part
   * @param {string} [specificKey] If the parameters are specific, what content type does it fit
   * @returns {Object} Ready for the clipboard
   */
  H5P.ClipboardItem = function (parameters, genericProperty, specificKey) {
    var self = this;

    /**
     * Set relative dimensions when params contains a file with a width and a height.
     * Very useful to be compatible with wysiwyg editors.
     *
     * @private
     */
    var setDimensionsFromFile = function () {
      if (!self.generic) {
        return;
      }
      var params = self.specific[self.generic];
      if (!params.params.file || !params.params.file.width || !params.params.file.height) {
        return;
      }

      self.width = 20; // %
      self.height = (params.params.file.height / params.params.file.width) * self.width;
    };

    if (!genericProperty) {
      genericProperty = 'action';
      parameters = {
        action: parameters
      };
    }

    self.specific = parameters;

    if (genericProperty && parameters[genericProperty]) {
      self.generic = genericProperty;
    }
    if (specificKey) {
      self.from = specificKey;
    }

    if (window.H5PEditor && H5PEditor.contentId) {
      self.contentId = H5PEditor.contentId;
    }

    if (!self.specific.width && !self.specific.height) {
      setDimensionsFromFile();
    }
  };

  /**
   * Store item in the H5P Clipboard.
   *
   * @param {H5P.ClipboardItem|*} clipboardItem
   */
  H5P.clipboardify = function (clipboardItem) {
    if (!(clipboardItem instanceof H5P.ClipboardItem)) {
      clipboardItem = new H5P.ClipboardItem(clipboardItem);
    }
    H5P.setClipboard(clipboardItem);
  };

  /**
   * Retrieve parsed clipboard data.
   *
   * @return {Object}
   */
  H5P.getClipboard = function () {
    return parseClipboard();
  };

  /**
   * Set item in the H5P Clipboard.
   *
   * @param {H5P.ClipboardItem|object} clipboardItem - Data to be set.
   */
  H5P.setClipboard = function (clipboardItem) {
    localStorage.setItem('h5pClipboard', JSON.stringify(clipboardItem));

    // Trigger an event so all 'Paste' buttons may be enabled.
    H5P.externalDispatcher.trigger('datainclipboard', {reset: false});
  };

  /**
   * Get config for a library
   *
   * @param string machineName
   * @return Object
   */
  H5P.getLibraryConfig = function (machineName) {
    var hasConfig = H5PIntegration.libraryConfig && H5PIntegration.libraryConfig[machineName];
    return hasConfig ? H5PIntegration.libraryConfig[machineName] : {};
  };

  /**
   * Get item from the H5P Clipboard.
   *
   * @private
   * @return {Object}
   */
  var parseClipboard = function () {
    var clipboardData = localStorage.getItem('h5pClipboard');
    if (!clipboardData) {
      return;
    }

    // Try to parse clipboard dat
    try {
      clipboardData = JSON.parse(clipboardData);
    }
    catch (err) {
      console.error('Unable to parse JSON from clipboard.', err);
      return;
    }

    // Update file URLs and reset content Ids
    recursiveUpdate(clipboardData.specific, function (path) {
      var isTmpFile = (path.substr(-4, 4) === '#tmp');
      if (!isTmpFile && clipboardData.contentId && !path.match(/^https?:\/\//i)) {
        // Comes from existing content

        if (H5PEditor.contentId) {
          // .. to existing content
          return '../' + clipboardData.contentId + '/' + path;
        }
        else {
          // .. to new content
          return (H5PEditor.contentRelUrl ? H5PEditor.contentRelUrl : '../content/') + clipboardData.contentId + '/' + path;
        }
      }
      return path; // Will automatically be looked for in tmp folder
    });


    if (clipboardData.generic) {
      // Use reference instead of key
      clipboardData.generic = clipboardData.specific[clipboardData.generic];
    }

    return clipboardData;
  };

  /**
   * Update file URLs and reset content IDs.
   * Useful when copying content.
   *
   * @private
   * @param {object} params Reference
   * @param {function} handler Modifies the path to work when pasted
   */
  var recursiveUpdate = function (params, handler) {
    for (var prop in params) {
      if (params.hasOwnProperty(prop) && params[prop] instanceof Object) {
        var obj = params[prop];
        if (obj.path !== undefined && obj.mime !== undefined) {
          obj.path = handler(obj.path);
        }
        else {
          if (obj.library !== undefined && obj.subContentId !== undefined) {
            // Avoid multiple content with same ID
            delete obj.subContentId;
          }
          recursiveUpdate(obj, handler);
        }
      }
    }
  };

  // Init H5P when page is fully loadded
  $(document).ready(function () {

    window.addEventListener('storage', function (event) {
      // Pick up clipboard changes from other tabs
      if (event.key === 'h5pClipboard') {
        // Trigger an event so all 'Paste' buttons may be enabled.
        H5P.externalDispatcher.trigger('datainclipboard', {reset: event.newValue === null});
      }
    });

    var ccVersions = {
      'default': '4.0',
      '4.0': H5P.t('licenseCC40'),
      '3.0': H5P.t('licenseCC30'),
      '2.5': H5P.t('licenseCC25'),
      '2.0': H5P.t('licenseCC20'),
      '1.0': H5P.t('licenseCC10'),
    };

    /**
     * Maps copyright license codes to their human readable counterpart.
     *
     * @type {Object}
     */
    H5P.copyrightLicenses = {
      'U': H5P.t('licenseU'),
      'CC BY': {
        label: H5P.t('licenseCCBY'),
        link: 'http://creativecommons.org/licenses/by/:version',
        versions: ccVersions
      },
      'CC BY-SA': {
        label: H5P.t('licenseCCBYSA'),
        link: 'http://creativecommons.org/licenses/by-sa/:version',
        versions: ccVersions
      },
      'CC BY-ND': {
        label: H5P.t('licenseCCBYND'),
        link: 'http://creativecommons.org/licenses/by-nd/:version',
        versions: ccVersions
      },
      'CC BY-NC': {
        label: H5P.t('licenseCCBYNC'),
        link: 'http://creativecommons.org/licenses/by-nc/:version',
        versions: ccVersions
      },
      'CC BY-NC-SA': {
        label: H5P.t('licenseCCBYNCSA'),
        link: 'http://creativecommons.org/licenses/by-nc-sa/:version',
        versions: ccVersions
      },
      'CC BY-NC-ND': {
        label: H5P.t('licenseCCBYNCND'),
        link: 'http://creativecommons.org/licenses/by-nc-nd/:version',
        versions: ccVersions
      },
      'CC0 1.0': {
        label: H5P.t('licenseCC010'),
        link: 'https://creativecommons.org/publicdomain/zero/1.0/'
      },
      'GNU GPL': {
        label: H5P.t('licenseGPL'),
        link: 'http://www.gnu.org/licenses/gpl-:version-standalone.html',
        linkVersions: {
          'v3': '3.0',
          'v2': '2.0',
          'v1': '1.0'
        },
        versions: {
          'default': 'v3',
          'v3': H5P.t('licenseV3'),
          'v2': H5P.t('licenseV2'),
          'v1': H5P.t('licenseV1')
        }
      },
      'PD': {
        label: H5P.t('licensePD'),
        versions: {
          'CC0 1.0': {
            label: H5P.t('licenseCC010'),
            link: 'https://creativecommons.org/publicdomain/zero/1.0/'
          },
          'CC PDM': {
            label: H5P.t('licensePDM'),
            link: 'https://creativecommons.org/publicdomain/mark/1.0/'
          }
        }
      },
      'ODC PDDL': '<a href="http://opendatacommons.org/licenses/pddl/1.0/" target="_blank">Public Domain Dedication and Licence</a>',
      'CC PDM': {
        label: H5P.t('licensePDM'),
        link: 'https://creativecommons.org/publicdomain/mark/1.0/'
      },
      'C': H5P.t('licenseC'),
    };

    /**
     * Indicates if H5P is embedded on an external page using iframe.
     * @member {boolean} H5P.externalEmbed
     */

    // Relay events to top window. This must be done before H5P.init
    // since events may be fired on initialization.
    if (H5P.isFramed && H5P.externalEmbed === false) {
      H5P.externalDispatcher.on('*', function (event) {
        window.parent.H5P.externalDispatcher.trigger.call(this, event);
      });
    }

    /**
     * Prevent H5P Core from initializing. Must be overriden before document ready.
     * @member {boolean} H5P.preventInit
     */
    if (!H5P.preventInit) {
      // Note that this start script has to be an external resource for it to
      // load in correct order in IE9.
      H5P.init(document.body);
    }

    if (H5PIntegration.saveFreq !== false) {
      // When was the last state stored
      var lastStoredOn = 0;
      // Store the current state of the H5P when leaving the page.
      var storeCurrentState = function () {
        // Make sure at least 250 ms has passed since last save
        var currentTime = new Date().getTime();
        if (currentTime - lastStoredOn > 250) {
          lastStoredOn = currentTime;
          for (var i = 0; i < H5P.instances.length; i++) {
            var instance = H5P.instances[i];
            if (instance.getCurrentState instanceof Function ||
                typeof instance.getCurrentState === 'function') {
              var state = instance.getCurrentState();
              if (state !== undefined) {
                // Async is not used to prevent the request from being cancelled.
                H5P.setUserData(instance.contentId, 'state', state, {deleteOnChange: true, async: false});
              }
            }
          }
        }
      };
      // iPad does not support beforeunload, therefore using unload
      H5P.$window.one('beforeunload unload', function () {
        // Only want to do this once
        H5P.$window.off('pagehide beforeunload unload');
        storeCurrentState();
      });
      // pagehide is used on iPad when tabs are switched
      H5P.$window.on('pagehide', storeCurrentState);
    }
  });

})(H5P.jQuery);



/*** EXPORTS FROM exports-loader ***/
module.exports = H5P;


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/js/frame.js":
/*!*************************!*\
  !*** ./src/js/frame.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imports_loader_H5PIntegration_window_parent_H5PIntegration_H5P__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imports-loader?H5PIntegration=>window.parent.H5PIntegration!H5P */ "./node_modules/imports-loader/index.js?H5PIntegration=>window.parent.H5PIntegration!./vendor/h5p/js/h5p.js");
/* harmony import */ var imports_loader_H5PIntegration_window_parent_H5PIntegration_H5P__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(imports_loader_H5PIntegration_window_parent_H5PIntegration_H5P__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var H5PEventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! H5PEventDispatcher */ "./vendor/h5p/js/h5p-event-dispatcher.js");
/* harmony import */ var H5PEventDispatcher__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(H5PEventDispatcher__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var H5PxAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! H5PxAPI */ "./vendor/h5p/js/h5p-x-api.js");
/* harmony import */ var H5PxAPI__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(H5PxAPI__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var H5PxAPIEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! H5PxAPIEvent */ "./vendor/h5p/js/h5p-x-api-event.js");
/* harmony import */ var H5PxAPIEvent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(H5PxAPIEvent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var H5PContentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! H5PContentType */ "./vendor/h5p/js/h5p-content-type.js");
/* harmony import */ var H5PContentType__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(H5PContentType__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var H5PConfirmationDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! H5PConfirmationDialog */ "./vendor/h5p/js/h5p-confirmation-dialog.js");
/* harmony import */ var H5PConfirmationDialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(H5PConfirmationDialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var H5PRequestQueue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! H5PRequestQueue */ "./vendor/h5p/js/request-queue.js");
/* harmony import */ var H5PRequestQueue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(H5PRequestQueue__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var H5PActionBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! H5PActionBar */ "./vendor/h5p/js/h5p-action-bar.js");
/* harmony import */ var H5PActionBar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(H5PActionBar__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./vendor/h5p/js/h5p-action-bar.js":
/*!*****************************************!*\
  !*** ./vendor/h5p/js/h5p-action-bar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @class
 * @augments H5P.EventDispatcher
 * @param {Object} displayOptions
 * @param {boolean} displayOptions.export Triggers the display of the 'Download' button
 * @param {boolean} displayOptions.copyright Triggers the display of the 'Copyright' button
 * @param {boolean} displayOptions.embed Triggers the display of the 'Embed' button
 * @param {boolean} displayOptions.icon Triggers the display of the 'H5P icon' link
 */
H5P.ActionBar = (function ($, EventDispatcher) {
  "use strict";

  function ActionBar(displayOptions) {
    EventDispatcher.call(this);

    /** @alias H5P.ActionBar# */
    var self = this;

    var hasActions = false;

    // Create action bar
    var $actions = H5P.jQuery('<ul class="h5p-actions"></ul>');

    /**
     * Helper for creating action bar buttons.
     *
     * @private
     * @param {string} type
     * @param {string} customClass Instead of type class
     */
    var addActionButton = function (type, customClass) {
      /**
       * Handles selection of action
       */
      var handler = function () {
        self.trigger(type);
      };
      H5P.jQuery('<li/>', {
        'class': 'h5p-button h5p-noselect h5p-' + (customClass ? customClass : type),
        role: 'button',
        tabindex: 0,
        title: H5P.t(type + 'Description'),
        html: H5P.t(type),
        on: {
          click: handler,
          keypress: function (e) {
            if (e.which === 32) {
              handler();
              e.preventDefault(); // (since return false will block other inputs)
            }
          }
        },
        appendTo: $actions
      });

      hasActions = true;
    };

    // Register action bar buttons
    if (displayOptions.export || displayOptions.copy) {
      // Add export button
      addActionButton('reuse', 'export');
    }
    if (displayOptions.copyright) {
      addActionButton('copyrights');
    }
    if (displayOptions.embed) {
      addActionButton('embed');
    }
    if (displayOptions.icon) {
      // Add about H5P button icon
      H5P.jQuery('<li><a class="h5p-link" href="http://h5p.org" target="_blank" title="' + H5P.t('h5pDescription') + '"></a></li>').appendTo($actions);
      hasActions = true;
    }

    /**
     * Returns a reference to the dom element
     *
     * @return {H5P.jQuery}
     */
    self.getDOMElement = function () {
      return $actions;
    };

    /**
     * Does the actionbar contain actions?
     *
     * @return {Boolean}
     */
    self.hasActions = function () {
      return hasActions;
    };
  }

  ActionBar.prototype = Object.create(EventDispatcher.prototype);
  ActionBar.prototype.constructor = ActionBar;

  return ActionBar;

})(H5P.jQuery, H5P.EventDispatcher);


/***/ }),

/***/ "./vendor/h5p/js/h5p-confirmation-dialog.js":
/*!**************************************************!*\
  !*** ./vendor/h5p/js/h5p-confirmation-dialog.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
     * Flow focus to element
     * @param {HTMLElement} element Next element to be focused
     * @param {Event} e Original tab event
     */
    function flowTo(element, e) {
      element.focus();
      e.preventDefault();
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

    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-labelledby', 'h5p-confirmation-dialog-dialog-text-' + uniqueId);
    popupBackground.appendChild(popup);
    popup.addEventListener('keydown', function (e) {
      if (e.which === 27) {// Esc key
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
    var cancelButton = document.createElement('button');
    cancelButton.classList.add('h5p-core-cancel-button');
    cancelButton.textContent = options.cancelText;

    // Confirm button
    var confirmButton = document.createElement('button');
    confirmButton.classList.add('h5p-core-button');
    confirmButton.classList.add('h5p-confirmation-dialog-confirm-button');
    confirmButton.textContent = options.confirmText;

    // Exit button
    var exitButton = document.createElement('button');
    exitButton.classList.add('h5p-confirmation-dialog-exit');
    exitButton.setAttribute('aria-hidden', 'true');
    exitButton.tabIndex = -1;
    exitButton.title = options.cancelText;

    // Cancel handler
    cancelButton.addEventListener('click', dialogCanceled);
    cancelButton.addEventListener('keydown', function (e) {
      if (e.which === 32) { // Space
        dialogCanceled(e);
      }
      else if (e.which === 9 && e.shiftKey) { // Shift-tab
        flowTo(confirmButton, e);
      }
    });

    if (!options.hideCancel) {
      buttons.appendChild(cancelButton);
    }
    else {
      // Center buttons
      buttons.classList.add('center');
    }

    // Confirm handler
    confirmButton.addEventListener('click', dialogConfirmed);
    confirmButton.addEventListener('keydown', function (e) {
      if (e.which === 32) { // Space
        dialogConfirmed(e);
      }
      else if (e.which === 9 && !e.shiftKey) { // Tab
        const nextButton = !options.hideCancel ? cancelButton : confirmButton;
        flowTo(nextButton, e);
      }
    });
    buttons.appendChild(confirmButton);

    // Exit handler
    exitButton.addEventListener('click', dialogCanceled);
    exitButton.addEventListener('keydown', function (e) {
      if (e.which === 32) { // Space
        dialogCanceled(e);
      }
    });
    if (!options.hideExit) {
      popup.appendChild(exitButton);
    }

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
        confirmButton.focus();
      }
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
          siblings[i].setAttribute('aria-hidden', true);
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
          siblings[i].removeAttribute('aria-hidden');
        }
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
      focusPredator.removeAttribute('aria-hidden');
      focusPredator.removeEventListener('focus', captureFocus, true);
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
      disableUnderlay();
      popupBackground.classList.remove('hidden');
      fitToContainer(offsetTop);
      setTimeout(function () {
        popup.classList.remove('hidden');
        popupBackground.classList.remove('hiding');

        setTimeout(function () {
          // Focus confirm button
          confirmButton.focus();

          // Resize iFrame if necessary
          if (resizeIFrame && options.instance) {
            var minHeight = parseInt(popup.offsetHeight, 10) +
              exitButtonOffset + (2 * shadowOffset);
            self.setViewPortMinimumHeight(minHeight);
            options.instance.trigger('resize');
            resizeIFrame = false;
          }
        }, 100);
      }, 0);

      return this;
    };

    /**
     * Hide confirmation dialog
     * @returns {H5P.ConfirmationDialog}
     */
    this.hide = function () {
      popupBackground.classList.add('hiding');
      popup.classList.add('hidden');

      // Restore focus
      stopCapturingFocus();
      if (!options.skipRestoreFocus) {
        previouslyFocused.focus();
      }
      restoreUnderlay();
      setTimeout(function () {
        popupBackground.classList.add('hidden');
        wrapperElement.removeChild(popupBackground);
        self.setViewPortMinimumHeight(null);
      }, 100);

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


/***/ }),

/***/ "./vendor/h5p/js/h5p-content-type.js":
/*!*******************************************!*\
  !*** ./vendor/h5p/js/h5p-content-type.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * H5P.ContentType is a base class for all content types. Used by newRunnable()
 *
 * Functions here may be overridable by the libraries. In special cases,
 * it is also possible to override H5P.ContentType on a global level.
 *
 * NOTE that this doesn't actually 'extend' the event dispatcher but instead
 * it creates a single instance which all content types shares as their base
 * prototype. (in some cases this may be the root of strange event behavior)
 *
 * @class
 * @augments H5P.EventDispatcher
 */
H5P.ContentType = function (isRootLibrary) {

  function ContentType() {}

  // Inherit from EventDispatcher.
  ContentType.prototype = new H5P.EventDispatcher();

  /**
   * Is library standalone or not? Not beeing standalone, means it is
   * included in another library
   *
   * @return {Boolean}
   */
  ContentType.prototype.isRoot = function () {
    return isRootLibrary;
  };

  /**
   * Returns the file path of a file in the current library
   * @param  {string} filePath The path to the file relative to the library folder
   * @return {string} The full path to the file
   */
  ContentType.prototype.getLibraryFilePath = function (filePath) {
    return H5P.getLibraryPath(this.libraryInfo.versionedNameNoSpaces) + '/' + filePath;
  };

  return ContentType;
};


/***/ }),

/***/ "./vendor/h5p/js/h5p-event-dispatcher.js":
/*!***********************************************!*\
  !*** ./vendor/h5p/js/h5p-event-dispatcher.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var H5P = window.H5P = window.H5P || {};

/**
 * The Event class for the EventDispatcher.
 *
 * @class
 * @param {string} type
 * @param {*} data
 * @param {Object} [extras]
 * @param {boolean} [extras.bubbles]
 * @param {boolean} [extras.external]
 */
H5P.Event = function (type, data, extras) {
  this.type = type;
  this.data = data;
  var bubbles = false;

  // Is this an external event?
  var external = false;

  // Is this event scheduled to be sent externally?
  var scheduledForExternal = false;

  if (extras === undefined) {
    extras = {};
  }
  if (extras.bubbles === true) {
    bubbles = true;
  }
  if (extras.external === true) {
    external = true;
  }

  /**
   * Prevent this event from bubbling up to parent
   */
  this.preventBubbling = function () {
    bubbles = false;
  };

  /**
   * Get bubbling status
   *
   * @returns {boolean}
   *   true if bubbling false otherwise
   */
  this.getBubbles = function () {
    return bubbles;
  };

  /**
   * Try to schedule an event for externalDispatcher
   *
   * @returns {boolean}
   *   true if external and not already scheduled, otherwise false
   */
  this.scheduleForExternal = function () {
    if (external && !scheduledForExternal) {
      scheduledForExternal = true;
      return true;
    }
    return false;
  };
};

/**
 * Callback type for event listeners.
 *
 * @callback H5P.EventCallback
 * @param {H5P.Event} event
 */

H5P.EventDispatcher = (function () {

  /**
   * The base of the event system.
   * Inherit this class if you want your H5P to dispatch events.
   *
   * @class
   * @memberof H5P
   */
  function EventDispatcher() {
    var self = this;

    /**
     * Keep track of listeners for each event.
     *
     * @private
     * @type {Object}
     */
    var triggers = {};

    /**
     * Add new event listener.
     *
     * @throws {TypeError}
     *   listener must be a function
     * @param {string} type
     *   Event type
     * @param {H5P.EventCallback} listener
     *   Event listener
     * @param {Object} [thisArg]
     *   Optionally specify the this value when calling listener.
     */
    this.on = function (type, listener, thisArg) {
      if (typeof listener !== 'function') {
        throw TypeError('listener must be a function');
      }

      // Trigger event before adding to avoid recursion
      self.trigger('newListener', {'type': type, 'listener': listener});

      var trigger = {'listener': listener, 'thisArg': thisArg};
      if (!triggers[type]) {
        // First
        triggers[type] = [trigger];
      }
      else {
        // Append
        triggers[type].push(trigger);
      }
    };

    /**
     * Add new event listener that will be fired only once.
     *
     * @throws {TypeError}
     *   listener must be a function
     * @param {string} type
     *   Event type
     * @param {H5P.EventCallback} listener
     *   Event listener
     * @param {Object} thisArg
     *   Optionally specify the this value when calling listener.
     */
    this.once = function (type, listener, thisArg) {
      if (!(listener instanceof Function)) {
        throw TypeError('listener must be a function');
      }

      var once = function (event) {
        self.off(event.type, once);
        listener.call(this, event);
      };

      self.on(type, once, thisArg);
    };

    /**
     * Remove event listener.
     * If no listener is specified, all listeners will be removed.
     *
     * @throws {TypeError}
     *   listener must be a function
     * @param {string} type
     *   Event type
     * @param {H5P.EventCallback} listener
     *   Event listener
     */
    this.off = function (type, listener) {
      if (listener !== undefined && !(listener instanceof Function)) {
        throw TypeError('listener must be a function');
      }

      if (triggers[type] === undefined) {
        return;
      }

      if (listener === undefined) {
        // Remove all listeners
        delete triggers[type];
        self.trigger('removeListener', type);
        return;
      }

      // Find specific listener
      for (var i = 0; i < triggers[type].length; i++) {
        if (triggers[type][i].listener === listener) {
          triggers[type].splice(i, 1);
          self.trigger('removeListener', type, {'listener': listener});
          break;
        }
      }

      // Clean up empty arrays
      if (!triggers[type].length) {
        delete triggers[type];
      }
    };

    /**
     * Try to call all event listeners for the given event type.
     *
     * @private
     * @param {string} Event type
     */
    var call = function (type, event) {
      if (triggers[type] === undefined) {
        return;
      }

      // Clone array (prevents triggers from being modified during the event)
      var handlers = triggers[type].slice();

      // Call all listeners
      for (var i = 0; i < handlers.length; i++) {
        var trigger = handlers[i];
        var thisArg = (trigger.thisArg ? trigger.thisArg : this);
        trigger.listener.call(thisArg, event);
      }
    };

    /**
     * Dispatch event.
     *
     * @param {string|H5P.Event} event
     *   Event object or event type as string
     * @param {*} [eventData]
     *   Custom event data(used when event type as string is used as first
     *   argument).
     * @param {Object} [extras]
     * @param {boolean} [extras.bubbles]
     * @param {boolean} [extras.external]
     */
    this.trigger = function (event, eventData, extras) {
      if (event === undefined) {
        return;
      }
      if (event instanceof String || typeof event === 'string') {
        event = new H5P.Event(event, eventData, extras);
      }
      else if (eventData !== undefined) {
        event.data = eventData;
      }

      // Check to see if this event should go externally after all triggering and bubbling is done
      var scheduledForExternal = event.scheduleForExternal();

      // Call all listeners
      call.call(this, event.type, event);

      // Call all * listeners
      call.call(this, '*', event);

      // Bubble
      if (event.getBubbles() && self.parent instanceof H5P.EventDispatcher &&
          (self.parent.trigger instanceof Function || typeof self.parent.trigger === 'function')) {
        self.parent.trigger(event);
      }

      if (scheduledForExternal) {
        H5P.externalDispatcher.trigger.call(this, event);
      }
    };
  }

  return EventDispatcher;
})();


/***/ }),

/***/ "./vendor/h5p/js/h5p-x-api-event.js":
/*!******************************************!*\
  !*** ./vendor/h5p/js/h5p-x-api-event.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var H5P = window.H5P = window.H5P || {};

/**
 * Used for xAPI events.
 *
 * @class
 * @extends H5P.Event
 */
H5P.XAPIEvent = function () {
  H5P.Event.call(this, 'xAPI', {'statement': {}}, {bubbles: true, external: true});
};

H5P.XAPIEvent.prototype = Object.create(H5P.Event.prototype);
H5P.XAPIEvent.prototype.constructor = H5P.XAPIEvent;

/**
 * Set scored result statements.
 *
 * @param {number} score
 * @param {number} maxScore
 * @param {object} instance
 * @param {boolean} completion
 * @param {boolean} success
 */
H5P.XAPIEvent.prototype.setScoredResult = function (score, maxScore, instance, completion, success) {
  this.data.statement.result = {};

  if (typeof score !== 'undefined') {
    if (typeof maxScore === 'undefined') {
      this.data.statement.result.score = {'raw': score};
    }
    else {
      this.data.statement.result.score = {
        'min': 0,
        'max': maxScore,
        'raw': score
      };
      if (maxScore > 0) {
        this.data.statement.result.score.scaled = Math.round(score / maxScore * 10000) / 10000;
      }
    }
  }

  if (typeof completion === 'undefined') {
    this.data.statement.result.completion = (this.getVerb() === 'completed' || this.getVerb() === 'answered');
  }
  else {
    this.data.statement.result.completion = completion;
  }

  if (typeof success !== 'undefined') {
    this.data.statement.result.success = success;
  }

  if (instance && instance.activityStartTime) {
    var duration = Math.round((Date.now() - instance.activityStartTime ) / 10) / 100;
    // xAPI spec allows a precision of 0.01 seconds

    this.data.statement.result.duration = 'PT' + duration + 'S';
  }
};

/**
 * Set a verb.
 *
 * @param {string} verb
 *   Verb in short form, one of the verbs defined at
 *   {@link http://adlnet.gov/expapi/verbs/|ADL xAPI Vocabulary}
 *
 */
H5P.XAPIEvent.prototype.setVerb = function (verb) {
  if (H5P.jQuery.inArray(verb, H5P.XAPIEvent.allowedXAPIVerbs) !== -1) {
    this.data.statement.verb = {
      'id': 'http://adlnet.gov/expapi/verbs/' + verb,
      'display': {
        'en-US': verb
      }
    };
  }
  else if (verb.id !== undefined) {
    this.data.statement.verb = verb;
  }
};

/**
 * Get the statements verb id.
 *
 * @param {boolean} full
 *   if true the full verb id prefixed by http://adlnet.gov/expapi/verbs/
 *   will be returned
 * @returns {string}
 *   Verb or null if no verb with an id has been defined
 */
H5P.XAPIEvent.prototype.getVerb = function (full) {
  var statement = this.data.statement;
  if ('verb' in statement) {
    if (full === true) {
      return statement.verb;
    }
    return statement.verb.id.slice(31);
  }
  else {
    return null;
  }
};

/**
 * Set the object part of the statement.
 *
 * The id is found automatically (the url to the content)
 *
 * @param {Object} instance
 *   The H5P instance
 */
H5P.XAPIEvent.prototype.setObject = function (instance) {
  if (instance.contentId) {
    this.data.statement.object = {
      'id': this.getContentXAPIId(instance),
      'objectType': 'Activity',
      'definition': {
        'extensions': {
          'http://h5p.org/x-api/h5p-local-content-id': instance.contentId
        }
      }
    };
    if (instance.subContentId) {
      this.data.statement.object.definition.extensions['http://h5p.org/x-api/h5p-subContentId'] = instance.subContentId;
      // Don't set titles on main content, title should come from publishing platform
      if (typeof instance.getTitle === 'function') {
        this.data.statement.object.definition.name = {
          "en-US": instance.getTitle()
        };
      }
    }
    else {
      var content = H5P.getContentForInstance(instance.contentId);
      if (content && content.metadata && content.metadata.title) {
        this.data.statement.object.definition.name = {
          "en-US": H5P.createTitle(content.metadata.title)
        };
      }
    }
  }
  else {
    // Content types view always expect to have a contentId when they are displayed.
    // This is not the case if they are displayed in the editor as part of a preview.
    // The fix is to set an empty object with definition for the xAPI event, so all
    // the content types that rely on this does not have to handle it. This means
    // that content types that are being previewed will send xAPI completed events,
    // but since there are no scripts that catch these events in the editor,
    // this is not a problem.
    this.data.statement.object = {
      definition: {}
    };
  }
};

/**
 * Set the context part of the statement.
 *
 * @param {Object} instance
 *   The H5P instance
 */
H5P.XAPIEvent.prototype.setContext = function (instance) {
  if (instance.parent && (instance.parent.contentId || instance.parent.subContentId)) {
    this.data.statement.context = {
      "contextActivities": {
        "parent": [
          {
            "id": this.getContentXAPIId(instance.parent),
            "objectType": "Activity"
          }
        ]
      }
    };
  }
  if (instance.libraryInfo) {
    if (this.data.statement.context === undefined) {
      this.data.statement.context = {"contextActivities":{}};
    }
    this.data.statement.context.contextActivities.category = [
      {
        "id": "http://h5p.org/libraries/" + instance.libraryInfo.versionedNameNoSpaces,
        "objectType": "Activity"
      }
    ];
  }
};

/**
 * Set the actor. Email and name will be added automatically.
 */
H5P.XAPIEvent.prototype.setActor = function () {
  if (H5PIntegration.user !== undefined) {
    this.data.statement.actor = {
      'name': H5PIntegration.user.name,
      'mbox': 'mailto:' + H5PIntegration.user.mail,
      'objectType': 'Agent'
    };
  }
  else {
    var uuid;
    try {
      if (localStorage.H5PUserUUID) {
        uuid = localStorage.H5PUserUUID;
      }
      else {
        uuid = H5P.createUUID();
        localStorage.H5PUserUUID = uuid;
      }
    }
    catch (err) {
      // LocalStorage and Cookies are probably disabled. Do not track the user.
      uuid = 'not-trackable-' + H5P.createUUID();
    }
    this.data.statement.actor = {
      'account': {
        'name': uuid,
        'homePage': H5PIntegration.siteUrl
      },
      'objectType': 'Agent'
    };
  }
};

/**
 * Get the max value of the result - score part of the statement
 *
 * @returns {number}
 *   The max score, or null if not defined
 */
H5P.XAPIEvent.prototype.getMaxScore = function () {
  return this.getVerifiedStatementValue(['result', 'score', 'max']);
};

/**
 * Get the raw value of the result - score part of the statement
 *
 * @returns {number}
 *   The score, or null if not defined
 */
H5P.XAPIEvent.prototype.getScore = function () {
  return this.getVerifiedStatementValue(['result', 'score', 'raw']);
};

/**
 * Get content xAPI ID.
 *
 * @param {Object} instance
 *   The H5P instance
 */
H5P.XAPIEvent.prototype.getContentXAPIId = function (instance) {
  var xAPIId;
  if (instance.contentId && H5PIntegration && H5PIntegration.contents && H5PIntegration.contents['cid-' + instance.contentId]) {
    xAPIId =  H5PIntegration.contents['cid-' + instance.contentId].url;
    if (instance.subContentId) {
      xAPIId += '?subContentId=' +  instance.subContentId;
    }
  }
  return xAPIId;
};

/**
 * Check if this event is sent from a child (i.e not from grandchild)
 *
 * @return {Boolean}
 */
H5P.XAPIEvent.prototype.isFromChild = function () {
  var parentId = this.getVerifiedStatementValue(['context', 'contextActivities', 'parent', 0, 'id']);
  return !parentId || parentId.indexOf('subContentId') === -1;
};

/**
 * Figure out if a property exists in the statement and return it
 *
 * @param {string[]} keys
 *   List describing the property we're looking for. For instance
 *   ['result', 'score', 'raw'] for result.score.raw
 * @returns {*}
 *   The value of the property if it is set, null otherwise.
 */
H5P.XAPIEvent.prototype.getVerifiedStatementValue = function (keys) {
  var val = this.data.statement;
  for (var i = 0; i < keys.length; i++) {
    if (val[keys[i]] === undefined) {
      return null;
    }
    val = val[keys[i]];
  }
  return val;
};

/**
 * List of verbs defined at {@link http://adlnet.gov/expapi/verbs/|ADL xAPI Vocabulary}
 *
 * @type Array
 */
H5P.XAPIEvent.allowedXAPIVerbs = [
  'answered',
  'asked',
  'attempted',
  'attended',
  'commented',
  'completed',
  'exited',
  'experienced',
  'failed',
  'imported',
  'initialized',
  'interacted',
  'launched',
  'mastered',
  'passed',
  'preferred',
  'progressed',
  'registered',
  'responded',
  'resumed',
  'scored',
  'shared',
  'suspended',
  'terminated',
  'voided',

  // Custom verbs used for action toolbar below content
  'downloaded',
  'copied',
  'accessed-reuse',
  'accessed-embed',
  'accessed-copyright'
];


/***/ }),

/***/ "./vendor/h5p/js/h5p-x-api.js":
/*!************************************!*\
  !*** ./vendor/h5p/js/h5p-x-api.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var H5P = window.H5P = window.H5P || {};

/**
 * The external event dispatcher. Others, outside of H5P may register and
 * listen for H5P Events here.
 *
 * @type {H5P.EventDispatcher}
 */
H5P.externalDispatcher = new H5P.EventDispatcher();

// EventDispatcher extensions

/**
 * Helper function for triggering xAPI added to the EventDispatcher.
 *
 * @param {string} verb
 *   The short id of the verb we want to trigger
 * @param {Oject} [extra]
 *   Extra properties for the xAPI statement
 */
H5P.EventDispatcher.prototype.triggerXAPI = function (verb, extra) {
  this.trigger(this.createXAPIEventTemplate(verb, extra));
};

/**
 * Helper function to create event templates added to the EventDispatcher.
 *
 * Will in the future be used to add representations of the questions to the
 * statements.
 *
 * @param {string} verb
 *   Verb id in short form
 * @param {Object} [extra]
 *   Extra values to be added to the statement
 * @returns {H5P.XAPIEvent}
 *   Instance
 */
H5P.EventDispatcher.prototype.createXAPIEventTemplate = function (verb, extra) {
  var event = new H5P.XAPIEvent();

  event.setActor();
  event.setVerb(verb);
  if (extra !== undefined) {
    for (var i in extra) {
      event.data.statement[i] = extra[i];
    }
  }
  if (!('object' in event.data.statement)) {
    event.setObject(this);
  }
  if (!('context' in event.data.statement)) {
    event.setContext(this);
  }
  return event;
};

/**
 * Helper function to create xAPI completed events
 *
 * DEPRECATED - USE triggerXAPIScored instead
 *
 * @deprecated
 *   since 1.5, use triggerXAPIScored instead.
 * @param {number} score
 *   Will be set as the 'raw' value of the score object
 * @param {number} maxScore
 *   will be set as the "max" value of the score object
 * @param {boolean} success
 *   will be set as the "success" value of the result object
 */
H5P.EventDispatcher.prototype.triggerXAPICompleted = function (score, maxScore, success) {
  this.triggerXAPIScored(score, maxScore, 'completed', true, success);
};

/**
 * Helper function to create scored xAPI events
 *
 * @param {number} score
 *   Will be set as the 'raw' value of the score object
 * @param {number} maxScore
 *   Will be set as the "max" value of the score object
 * @param {string} verb
 *   Short form of adl verb
 * @param {boolean} completion
 *   Is this a statement from a completed activity?
 * @param {boolean} success
 *   Is this a statement from an activity that was done successfully?
 */
H5P.EventDispatcher.prototype.triggerXAPIScored = function (score, maxScore, verb, completion, success) {
  var event = this.createXAPIEventTemplate(verb);
  event.setScoredResult(score, maxScore, this, completion, success);
  this.trigger(event);
};

H5P.EventDispatcher.prototype.setActivityStarted = function () {
  if (this.activityStartTime === undefined) {
    // Don't trigger xAPI events in the editor
    if (this.contentId !== undefined &&
        H5PIntegration.contents !== undefined &&
        H5PIntegration.contents['cid-' + this.contentId] !== undefined) {
      this.triggerXAPI('attempted');
    }
    this.activityStartTime = Date.now();
  }
};

/**
 * Internal H5P function listening for xAPI completed events and stores scores
 *
 * @param {H5P.XAPIEvent} event
 */
H5P.xAPICompletedListener = function (event) {
  if ((event.getVerb() === 'completed' || event.getVerb() === 'answered') && !event.getVerifiedStatementValue(['context', 'contextActivities', 'parent'])) {
    var score = event.getScore();
    var maxScore = event.getMaxScore();
    var contentId = event.getVerifiedStatementValue(['object', 'definition', 'extensions', 'http://h5p.org/x-api/h5p-local-content-id']);
    H5P.setFinished(contentId, score, maxScore);
  }
};


/***/ }),

/***/ "./vendor/h5p/js/jquery.js":
/*!*********************************!*\
  !*** ./vendor/h5p/js/jquery.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b, true&&__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js").jQuery&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return b}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))})(window);

// Snap this specific version of jQuery into H5P. jQuery.noConflict will
// revert the globals to what they were before this file was loaded.
var H5P = window.H5P = window.H5P || {};

/**
 * jQuery v1.9.1
 *
 * @member
 */
H5P.jQuery = jQuery.noConflict(true);
H5P.jQuery.ajaxPrefilter(function (s) {
  if (s.crossDomain) {
    s.contents.script = false;
  }
});


/***/ }),

/***/ "./vendor/h5p/js/request-queue.js":
/*!****************************************!*\
  !*** ./vendor/h5p/js/request-queue.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Queue requests and handle them at your convenience
 *
 * @type {RequestQueue}
 */
H5P.RequestQueue = (function ($, EventDispatcher) {
  /**
   * A queue for requests, will be automatically processed when regaining connection
   *
   * @param {boolean} [options.showToast] Show toast when losing or regaining connection
   * @constructor
   */
  const RequestQueue = function (options) {
    EventDispatcher.call(this);
    this.processingQueue = false;
    options = options || {};

    this.showToast = options.showToast;
    this.itemName = 'requestQueue';
  };

  /**
   * Add request to queue. Only supports posts currently.
   *
   * @param {string} url
   * @param {Object} data
   * @returns {boolean}
   */
  RequestQueue.prototype.add = function (url, data) {
    if (!window.localStorage) {
      return false;
    }

    let storedStatements = this.getStoredRequests();
    if (!storedStatements) {
      storedStatements = [];
    }

    storedStatements.push({
      url: url,
      data: data,
    });

    window.localStorage.setItem(this.itemName, JSON.stringify(storedStatements));

    this.trigger('requestQueued', {
      storedStatements: storedStatements,
      processingQueue: this.processingQueue,
    });
    return true;
  };

  /**
   * Get stored requests
   *
   * @returns {boolean|Array} Stored requests
   */
  RequestQueue.prototype.getStoredRequests = function () {
    if (!window.localStorage) {
      return false;
    }

    const item = window.localStorage.getItem(this.itemName);
    if (!item) {
      return [];
    }

    return JSON.parse(item);
  };

  /**
   * Clear stored requests
   *
   * @returns {boolean} True if the storage was successfully cleared
   */
  RequestQueue.prototype.clearQueue = function () {
    if (!window.localStorage) {
      return false;
    }

    window.localStorage.removeItem(this.itemName);
    return true;
  };

  /**
   * Start processing of requests queue
   *
   * @return {boolean} Returns false if it was not possible to resume processing queue
   */
  RequestQueue.prototype.resumeQueue = function () {
    // Not supported
    if (!H5PIntegration || !window.navigator || !window.localStorage) {
      return false;
    }

    // Already processing
    if (this.processingQueue) {
      return false;
    }

    // Attempt to send queued requests
    const queue = this.getStoredRequests();
    const queueLength = queue.length;

    // Clear storage, failed requests will be re-added
    this.clearQueue();

    // No items left in queue
    if (!queueLength) {
      this.trigger('emptiedQueue', queue);
      return true;
    }

    // Make sure requests are not changed while they're being handled
    this.processingQueue = true;

    // Process queue in original order
    this.processQueue(queue);
    return true
  };

  /**
   * Process first item in the request queue
   *
   * @param {Array} queue Request queue
   */
  RequestQueue.prototype.processQueue = function (queue) {
    if (!queue.length) {
      return;
    }

    this.trigger('processingQueue');

    // Make sure the requests are processed in a FIFO order
    const request = queue.shift();

    const self = this;
    $.post(request.url, request.data)
      .fail(self.onQueuedRequestFail.bind(self, request))
      .always(self.onQueuedRequestProcessed.bind(self, queue))
  };

  /**
   * Request fail handler
   *
   * @param {Object} request
   */
  RequestQueue.prototype.onQueuedRequestFail = function (request) {
    // Queue the failed request again if we're offline
    if (!window.navigator.onLine) {
      this.add(request.url, request.data);
    }
  };

  /**
   * An item in the queue was processed
   *
   * @param {Array} queue Queue that was processed
   */
  RequestQueue.prototype.onQueuedRequestProcessed = function (queue) {
    if (queue.length) {
      this.processQueue(queue);
      return;
    }

    // Finished processing this queue
    this.processingQueue = false;

    // Run empty queue callback with next request queue
    const requestQueue = this.getStoredRequests();
    this.trigger('queueEmptied', requestQueue);
  };

  /**
   * Display toast message on the first content of current page
   *
   * @param {string} msg Message to display
   * @param {boolean} [forceShow] Force override showing the toast
   * @param {Object} [configOverride] Override toast message config
   */
  RequestQueue.prototype.displayToastMessage = function (msg, forceShow, configOverride) {
    if (!this.showToast && !forceShow) {
      return;
    }

    const config = H5P.jQuery.extend(true, {}, {
      position: {
        horizontal : 'centered',
        vertical: 'centered',
        noOverflowX: true,
      }
    }, configOverride);

    H5P.attachToastTo(H5P.jQuery('.h5p-content:first')[0], msg, config);
  };

  return RequestQueue;
})(H5P.jQuery, H5P.EventDispatcher);

/**
 * Request queue for retrying failing requests, will automatically retry them when you come online
 *
 * @type {offlineRequestQueue}
 */
H5P.OfflineRequestQueue = (function (RequestQueue, Dialog) {

  /**
   * Constructor
   *
   * @param {Object} [options] Options for offline request queue
   * @param {Object} [options.instance] The H5P instance which UI components are placed within
   */
  const offlineRequestQueue = function (options) {
    const requestQueue = new RequestQueue();

    // We could handle requests from previous pages here, but instead we throw them away
    requestQueue.clearQueue();

    let startTime = null;
    const retryIntervals = [10, 20, 40, 60, 120, 300, 600];
    let intervalIndex = -1;
    let currentInterval = null;
    let isAttached = false;
    let isShowing = false;
    let isLoading = false;
    const instance = options.instance;

    const offlineDialog = new Dialog({
      headerText: H5P.t('offlineDialogHeader'),
      dialogText: H5P.t('offlineDialogBody'),
      confirmText: H5P.t('offlineDialogRetryButtonLabel'),
      hideCancel: true,
      hideExit: true,
      classes: ['offline'],
      instance: instance,
      skipRestoreFocus: true,
    });

    const dialog = offlineDialog.getElement();

    // Add retry text to body
    const countDownText = document.createElement('div');
    countDownText.classList.add('count-down');
    countDownText.innerHTML = H5P.t('offlineDialogRetryMessage')
      .replace(':num', '<span class="count-down-num">0</span>');

    dialog.querySelector('.h5p-confirmation-dialog-text').appendChild(countDownText);
    const countDownNum = countDownText.querySelector('.count-down-num');

    // Create throbber
    const throbberWrapper = document.createElement('div');
    throbberWrapper.classList.add('throbber-wrapper');
    const throbber = document.createElement('div');
    throbber.classList.add('sending-requests-throbber');
    throbberWrapper.appendChild(throbber);

    requestQueue.on('requestQueued', function (e) {
      // Already processing queue, wait until queue has finished processing before showing dialog
      if (e.data && e.data.processingQueue) {
        return;
      }

      if (!isAttached) {
        const rootContent = document.body.querySelector('.h5p-content');
        if (!rootContent) {
          return;
        }
        offlineDialog.appendTo(rootContent);
        rootContent.appendChild(throbberWrapper);
        isAttached = true;
      }

      startCountDown();
    }.bind(this));

    requestQueue.on('queueEmptied', function (e) {
      if (e.data && e.data.length) {
        // New requests were added while processing queue or requests failed again. Re-queue requests.
        startCountDown(true);
        return;
      }

      // Successfully emptied queue
      clearInterval(currentInterval);
      toggleThrobber(false);
      intervalIndex = -1;
      if (isShowing) {
        offlineDialog.hide();
        isShowing = false;
      }

      requestQueue.displayToastMessage(
        H5P.t('offlineSuccessfulSubmit'),
        true,
        {
          position: {
            vertical: 'top',
            offsetVertical: '100',
          }
        }
      );

    }.bind(this));

    offlineDialog.on('confirmed', function () {
      // Show dialog on next render in case it is being hidden by the 'confirm' button
      isShowing = false;
      setTimeout(function () {
        retryRequests();
      }, 100);
    }.bind(this));

    // Initialize listener for when requests are added to queue
    window.addEventListener('online', function () {
      retryRequests();
    }.bind(this));

    // Listen for queued requests outside the iframe
    window.addEventListener('message', function (event) {
      const isValidQueueEvent = window.parent === event.source
        && event.data.context === 'h5p'
        && event.data.action === 'queueRequest';

      if (!isValidQueueEvent) {
        return;
      }

      this.add(event.data.url, event.data.data);
    }.bind(this));

    /**
     * Toggle throbber visibility
     *
     * @param {boolean} [forceShow] Will force throbber visibility if set
     */
    const toggleThrobber = function (forceShow) {
      isLoading = !isLoading;
      if (forceShow !== undefined) {
        isLoading = forceShow;
      }

      if (isLoading && isShowing) {
        offlineDialog.hide();
        isShowing = false;
      }

      if (isLoading) {
        throbberWrapper.classList.add('show');
      }
      else {
        throbberWrapper.classList.remove('show');
      }
    };
    /**
     * Retries the failed requests
     */
    const retryRequests = function () {
      clearInterval(currentInterval);
      toggleThrobber(true);
      requestQueue.resumeQueue();
    };

    /**
     * Increments retry interval
     */
    const incrementRetryInterval = function () {
      intervalIndex += 1;
      if (intervalIndex >= retryIntervals.length) {
        intervalIndex = retryIntervals.length - 1;
      }
    };

    /**
     * Starts counting down to retrying queued requests.
     *
     * @param forceDelayedShow
     */
    const startCountDown = function (forceDelayedShow) {
      // Already showing, wait for retry
      if (isShowing) {
        return;
      }

      toggleThrobber(false);
      if (!isShowing) {
        if (forceDelayedShow) {
          // Must force delayed show since dialog may be hiding, and confirmation dialog does not
          //  support this.
          setTimeout(function () {
            offlineDialog.show(0);
          }, 100);
        }
        else {
          offlineDialog.show(0);
        }
      }
      isShowing = true;
      startTime = new Date().getTime();
      incrementRetryInterval();
      clearInterval(currentInterval);
      currentInterval = setInterval(updateCountDown, 100);
    };

    /**
     * Updates the count down timer. Retries requests when time expires.
     */
    const updateCountDown = function () {
      const time = new Date().getTime();
      const timeElapsed = Math.floor((time - startTime) / 1000);
      const timeLeft = retryIntervals[intervalIndex] - timeElapsed;
      countDownNum.textContent = timeLeft.toString();

      // Retry interval reached, retry requests
      if (timeLeft <= 0) {
        retryRequests();
      }
    };

    /**
     * Add request to offline request queue. Only supports posts for now.
     *
     * @param {string} url The request url
     * @param {Object} data The request data
     */
    this.add = function (url, data) {
      // Only queue request if it failed because we are offline
      if (window.navigator.onLine) {
        return false;
      }

      requestQueue.add(url, data);
    };
  };

  return offlineRequestQueue;
})(H5P.RequestQueue, H5P.ConfirmationDialog);


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9INVBTdGFuZGFsb25lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9INVBTdGFuZGFsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0g1UFN0YW5kYWxvbmUvLi92ZW5kb3IvaDVwL2pzL2g1cC5qcz82NmEwIiwid2VicGFjazovL0g1UFN0YW5kYWxvbmUvKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSDVQU3RhbmRhbG9uZS8uL3NyYy9qcy9mcmFtZS5qcyIsIndlYnBhY2s6Ly9INVBTdGFuZGFsb25lLy4vdmVuZG9yL2g1cC9qcy9oNXAtYWN0aW9uLWJhci5qcyIsIndlYnBhY2s6Ly9INVBTdGFuZGFsb25lLy4vdmVuZG9yL2g1cC9qcy9oNXAtY29uZmlybWF0aW9uLWRpYWxvZy5qcyIsIndlYnBhY2s6Ly9INVBTdGFuZGFsb25lLy4vdmVuZG9yL2g1cC9qcy9oNXAtY29udGVudC10eXBlLmpzIiwid2VicGFjazovL0g1UFN0YW5kYWxvbmUvLi92ZW5kb3IvaDVwL2pzL2g1cC1ldmVudC1kaXNwYXRjaGVyLmpzIiwid2VicGFjazovL0g1UFN0YW5kYWxvbmUvLi92ZW5kb3IvaDVwL2pzL2g1cC14LWFwaS1ldmVudC5qcyIsIndlYnBhY2s6Ly9INVBTdGFuZGFsb25lLy4vdmVuZG9yL2g1cC9qcy9oNXAteC1hcGkuanMiLCJ3ZWJwYWNrOi8vSDVQU3RhbmRhbG9uZS8uL3ZlbmRvci9oNXAvanMvanF1ZXJ5LmpzIiwid2VicGFjazovL0g1UFN0YW5kYWxvbmUvLi92ZW5kb3IvaDVwL2pzL3JlcXVlc3QtcXVldWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUcsa0NBQWtDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDO0FBQ0EsV0FBVyxlQUFlO0FBQzFCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJmaWxlIjoiZnJhbWUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaDVwLXN0YW5kYWxvbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSDVQU3RhbmRhbG9uZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvZnJhbWUuanNcIik7XG4iLCIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG52YXIgSDVQSW50ZWdyYXRpb24gPSB3aW5kb3cucGFyZW50Lkg1UEludGVncmF0aW9uO1xuXG4vKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG52YXIgalF1ZXJ5ID0gcmVxdWlyZShcImg1cGpxdWVyeVwiKTtcblxuLypqc2hpbnQgbXVsdGlzdHI6IHRydWUgKi9cbi8vIFRPRE86IFNob3VsZCB3ZSBzcGxpdCB1cCB0aGUgZ2VuZXJpYyBwYXJ0cyBuZWVkZWQgYnkgdGhlIGVkaXRvcihhbmQgb3RoZXJzKSwgYW5kIHRoZSBwYXJ0cyBuZWVkZWQgdG8gXCJydW5cIiBINVBzP1xuXG4vKiogQG5hbWVzcGFjZSAqL1xudmFyIEg1UCA9IHdpbmRvdy5INVAgPSB3aW5kb3cuSDVQIHx8IHt9O1xuXG4vKipcbiAqIFRlbGxzIHVzIGlmIHdlJ3JlIGluc2lkZSBvZiBhbiBpZnJhbWUuXG4gKiBAbWVtYmVyIHtib29sZWFufVxuICovXG5INVAuaXNGcmFtZWQgPSAod2luZG93LnNlbGYgIT09IHdpbmRvdy5wYXJlbnQpO1xuXG4vKipcbiAqIGpRdWVyeSBpbnN0YW5jZSBvZiBjdXJyZW50IHdpbmRvdy5cbiAqIEBtZW1iZXIge0g1UC5qUXVlcnl9XG4gKi9cbkg1UC4kd2luZG93ID0gSDVQLmpRdWVyeSh3aW5kb3cpO1xuXG4vKipcbiAqIExpc3Qgb3ZlciBINVAgaW5zdGFuY2VzIG9uIHRoZSBjdXJyZW50IHBhZ2UuXG4gKiBAbWVtYmVyIHtBcnJheX1cbiAqL1xuSDVQLmluc3RhbmNlcyA9IFtdO1xuXG4vLyBEZXRlY3QgaWYgd2Ugc3VwcG9ydCBmdWxsc2NyZWVuLCBhbmQgd2hhdCBwcmVmaXggdG8gdXNlLlxuaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZXF1ZXN0RnVsbFNjcmVlbikge1xuICAvKipcbiAgICogQnJvd3NlciBwcmVmaXggdG8gdXNlIHdoZW4gZW50ZXJpbmcgZnVsbHNjcmVlbiBtb2RlLlxuICAgKiB1bmRlZmluZWQgbWVhbnMgbm8gZnVsbHNjcmVlbiBzdXBwb3J0LlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBINVAuZnVsbFNjcmVlbkJyb3dzZXJQcmVmaXggPSAnJztcbn1cbmVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbikge1xuICBINVAuc2FmYXJpQnJvd3NlciA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3ZlcnNpb25cXC8oWy5cXGRdKykvaSk7XG4gIEg1UC5zYWZhcmlCcm93c2VyID0gKEg1UC5zYWZhcmlCcm93c2VyID09PSBudWxsID8gMCA6IHBhcnNlSW50KEg1UC5zYWZhcmlCcm93c2VyWzFdKSk7XG5cbiAgLy8gRG8gbm90IGFsbG93IGZ1bGxzY3JlZW4gZm9yIHNhZmFyaSA8IDcuXG4gIGlmIChINVAuc2FmYXJpQnJvd3NlciA9PT0gMCB8fCBINVAuc2FmYXJpQnJvd3NlciA+IDYpIHtcbiAgICBINVAuZnVsbFNjcmVlbkJyb3dzZXJQcmVmaXggPSAnd2Via2l0JztcbiAgfVxufVxuZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gIEg1UC5mdWxsU2NyZWVuQnJvd3NlclByZWZpeCA9ICdtb3onO1xufVxuZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgSDVQLmZ1bGxTY3JlZW5Ccm93c2VyUHJlZml4ID0gJ21zJztcbn1cblxuLyoqXG4gKiBLZWVwIHRyYWNrIG9mIHdoZW4gdGhlIEg1UHMgd2hlcmUgc3RhcnRlZC5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0W119XG4gKi9cbkg1UC5vcGVuZWQgPSB7fTtcblxuLyoqXG4gKiBJbml0aWFsaXplIEg1UCBjb250ZW50LlxuICogU2NhbnMgZm9yIFwiLmg1cC1jb250ZW50XCIgaW4gdGhlIGRvY3VtZW50IGFuZCBpbml0aWFsaXplcyBINVAgaW5zdGFuY2VzIHdoZXJlIGZvdW5kLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgRE9NIEVsZW1lbnRcbiAqL1xuSDVQLmluaXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIC8vIFVzZWZ1bCBqUXVlcnkgb2JqZWN0LlxuICBpZiAoSDVQLiRib2R5ID09PSB1bmRlZmluZWQpIHtcbiAgICBINVAuJGJvZHkgPSBINVAualF1ZXJ5KGRvY3VtZW50LmJvZHkpO1xuICB9XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIHdlIGNhbiB1c2UgZnVsbCBzY3JlZW5cbiAgaWYgKEg1UC5mdWxsc2NyZWVuU3VwcG9ydGVkID09PSB1bmRlZmluZWQpIHtcbiAgICAvKipcbiAgICAgKiBVc2UgdGhpcyB2YXJpYWJsZSB0byBjaGVjayBpZiBmdWxsc2NyZWVuIGlzIHN1cHBvcnRlZC4gRnVsbHNjcmVlbiBjYW4gYmVcbiAgICAgKiByZXN0cmljdGVkIHdoZW4gZW1iZWRkaW5nIHNpbmNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB0aGUgbmF0aXZlXG4gICAgICogZnVsbHNjcmVlbiwgYW5kIHRoZSBzZW1pLWZ1bGxzY3JlZW4gc29sdXRpb24gZG9lc24ndCB3b3JrIHdoZW4gZW1iZWRkZWQuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgSDVQLmZ1bGxzY3JlZW5TdXBwb3J0ZWQgPSAhSDVQSW50ZWdyYXRpb24uZnVsbHNjcmVlbkRpc2FibGVkICYmICFINVAuZnVsbHNjcmVlbkRpc2FibGVkICYmICghKEg1UC5pc0ZyYW1lZCAmJiBINVAuZXh0ZXJuYWxFbWJlZCAhPT0gZmFsc2UpIHx8ICEhKGRvY3VtZW50LmZ1bGxzY3JlZW5FbmFibGVkIHx8IGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbmFibGVkIHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbmFibGVkKSk7XG4gICAgLy8gLVdlIHNob3VsZCBjb25zaWRlciBkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbmFibGVkIHdoZW4gdGhleSBnZXQgdGhlaXJcbiAgICAvLyAtZWxlbWVudCBzaXppbmcgY29ycmVjdGVkLiBSZWYuIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvODM4Mjg2L2llLTExLWluY29ycmVjdGx5LXJlcG9ydHMtZG9tLWVsZW1lbnQtc2l6ZXMtaW4tZnVsbHNjcmVlbi1tb2RlLXdoZW4tZnVsbHNjcmVlbmVkLWVsZW1lbnQtaXMtd2l0aGluLWFuLWlmcmFtZVxuICAgIC8vIFVwZGF0ZTogU2VlbXMgdG8gYmUgbm8gbmVlZCBhcyB0aGV5J3ZlIG1vdmVkIG9uIHRvIFdlYmtpdFxuICB9XG5cbiAgLy8gRGVwcmVjYXRlZCB2YXJpYWJsZSwga2VwdCB0byBtYWludGFpbiBiYWNrd2FyZHMgY29tcGF0YWJpbGl0eVxuICBpZiAoSDVQLmNhbkhhc0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4xMVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIEg1UC5jYW5IYXNGdWxsU2NyZWVuID0gSDVQLmZ1bGxzY3JlZW5TdXBwb3J0ZWQ7XG4gIH1cblxuICAvLyBINVBzIGFkZGVkIGluIG5vcm1hbCBESVYuXG4gIEg1UC5qUXVlcnkoJy5oNXAtY29udGVudDpub3QoLmg1cC1pbml0aWFsaXplZCknLCB0YXJnZXQpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciAkZWxlbWVudCA9IEg1UC5qUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2g1cC1pbml0aWFsaXplZCcpO1xuICAgIHZhciAkY29udGFpbmVyID0gSDVQLmpRdWVyeSgnPGRpdiBjbGFzcz1cImg1cC1jb250YWluZXJcIj48L2Rpdj4nKS5hcHBlbmRUbygkZWxlbWVudCk7XG4gICAgdmFyIGNvbnRlbnRJZCA9ICRlbGVtZW50LmRhdGEoJ2NvbnRlbnQtaWQnKTtcbiAgICB2YXIgY29udGVudERhdGEgPSBINVBJbnRlZ3JhdGlvbi5jb250ZW50c1snY2lkLScgKyBjb250ZW50SWRdO1xuICAgIGlmIChjb250ZW50RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gSDVQLmVycm9yKCdObyBkYXRhIGZvciBjb250ZW50IGlkICcgKyBjb250ZW50SWQgKyAnLiBQZXJoYXBzIHRoZSBsaWJyYXJ5IGlzIGdvbmU/Jyk7XG4gICAgfVxuICAgIHZhciBsaWJyYXJ5ID0ge1xuICAgICAgbGlicmFyeTogY29udGVudERhdGEubGlicmFyeSxcbiAgICAgIHBhcmFtczogSlNPTi5wYXJzZShjb250ZW50RGF0YS5qc29uQ29udGVudCksXG4gICAgICBtZXRhZGF0YTogY29udGVudERhdGEubWV0YWRhdGFcbiAgICB9O1xuXG4gICAgSDVQLmdldFVzZXJEYXRhKGNvbnRlbnRJZCwgJ3N0YXRlJywgZnVuY3Rpb24gKGVyciwgcHJldmlvdXNTdGF0ZSkge1xuICAgICAgaWYgKHByZXZpb3VzU3RhdGUpIHtcbiAgICAgICAgbGlicmFyeS51c2VyRGF0YXMgPSB7XG4gICAgICAgICAgc3RhdGU6IHByZXZpb3VzU3RhdGVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHByZXZpb3VzU3RhdGUgPT09IG51bGwgJiYgSDVQSW50ZWdyYXRpb24uc2F2ZUZyZXEpIHtcbiAgICAgICAgLy8gQ29udGVudCBoYXMgYmVlbiByZXNldC4gRGlzcGxheSBkaWFsb2cuXG4gICAgICAgIGRlbGV0ZSBjb250ZW50RGF0YS5jb250ZW50VXNlckRhdGE7XG4gICAgICAgIHZhciBkaWFsb2cgPSBuZXcgSDVQLkRpYWxvZygnY29udGVudC11c2VyLWRhdGEtcmVzZXQnLCAnRGF0YSBSZXNldCcsICc8cD4nICsgSDVQLnQoJ2NvbnRlbnRDaGFuZ2VkJykgKyAnPC9wPjxwPicgKyBINVAudCgnc3RhcnRpbmdPdmVyJykgKyAnPC9wPjxkaXYgY2xhc3M9XCJoNXAtZGlhbG9nLW9rLWJ1dHRvblwiIHRhYkluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj5PSzwvZGl2PicsICRjb250YWluZXIpO1xuICAgICAgICBINVAualF1ZXJ5KGRpYWxvZykub24oJ2RpYWxvZy1vcGVuZWQnLCBmdW5jdGlvbiAoZXZlbnQsICRkaWFsb2cpIHtcblxuICAgICAgICAgIHZhciBjbG9zZURpYWxvZyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgfHwgZXZlbnQud2hpY2ggPT09IDMyKSB7XG4gICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgICBINVAuZGVsZXRlVXNlckRhdGEoY29udGVudElkLCAnc3RhdGUnLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgJGRpYWxvZy5maW5kKCcuaDVwLWRpYWxvZy1vay1idXR0b24nKS5jbGljayhjbG9zZURpYWxvZykua2V5cHJlc3MoY2xvc2VEaWFsb2cpO1xuICAgICAgICAgIEg1UC50cmlnZ2VyKGluc3RhbmNlLCAncmVzaXplJyk7XG4gICAgICAgIH0pLm9uKCdkaWFsb2ctY2xvc2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIEg1UC50cmlnZ2VyKGluc3RhbmNlLCAncmVzaXplJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaWFsb2cub3BlbigpO1xuICAgICAgfVxuICAgICAgLy8gSWYgcHJldmlvdXNTdGF0ZSBpcyBmYWxzZSB3ZSBkb24ndCBoYXZlIGEgcHJldmlvdXMgc3RhdGVcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBuZXcgaW5zdGFuY2UuXG4gICAgdmFyIGluc3RhbmNlID0gSDVQLm5ld1J1bm5hYmxlKGxpYnJhcnksIGNvbnRlbnRJZCwgJGNvbnRhaW5lciwgdHJ1ZSwge3N0YW5kYWxvbmU6IHRydWV9KTtcblxuICAgIEg1UC5vZmZsaW5lUmVxdWVzdFF1ZXVlID0gbmV3IEg1UC5PZmZsaW5lUmVxdWVzdFF1ZXVlKHtpbnN0YW5jZTogaW5zdGFuY2V9KTtcblxuICAgIC8vIENoZWNrIGlmIHdlIHNob3VsZCBhZGQgYW5kIGRpc3BsYXkgYSBmdWxsc2NyZWVuIGJ1dHRvbiBmb3IgdGhpcyBINVAuXG4gICAgaWYgKGNvbnRlbnREYXRhLmZ1bGxTY3JlZW4gPT0gMSAmJiBINVAuZnVsbHNjcmVlblN1cHBvcnRlZCkge1xuICAgICAgSDVQLmpRdWVyeShcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJoNXAtY29udGVudC1jb250cm9sc1wiPicgK1xuICAgICAgICAgICc8ZGl2IHJvbGU9XCJidXR0b25cIiAnICtcbiAgICAgICAgICAgICAgICAndGFiaW5kZXg9XCIwXCIgJyArXG4gICAgICAgICAgICAgICAgJ2NsYXNzPVwiaDVwLWVuYWJsZS1mdWxsc2NyZWVuXCIgJyArXG4gICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWw9XCInICsgSDVQLnQoJ2Z1bGxzY3JlZW4nKSArICdcIiAnICtcbiAgICAgICAgICAgICAgICAndGl0bGU9XCInICsgSDVQLnQoJ2Z1bGxzY3JlZW4nKSArICdcIj4nICtcbiAgICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICc8L2Rpdj4nKVxuICAgICAgICAucHJlcGVuZFRvKCRjb250YWluZXIpXG4gICAgICAgICAgLmNoaWxkcmVuKClcbiAgICAgICAgICAuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgSDVQLmZ1bGxTY3JlZW4oJGNvbnRhaW5lciwgaW5zdGFuY2UpO1xuICAgICAgICAgIH0pXG4gICAgICAgIC5rZXlkb3duKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGUud2hpY2ggPT09IDMyIHx8IGUud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICAgICBINVAuZnVsbFNjcmVlbigkY29udGFpbmVyLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhY3Rpb24gYmFyXG4gICAgICovXG4gICAgdmFyIGRpc3BsYXlPcHRpb25zID0gY29udGVudERhdGEuZGlzcGxheU9wdGlvbnM7XG4gICAgdmFyIGRpc3BsYXlGcmFtZSA9IGZhbHNlO1xuICAgIGlmIChkaXNwbGF5T3B0aW9ucy5mcmFtZSkge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjb3B5cmlnaHRzXG4gICAgICBpZiAoZGlzcGxheU9wdGlvbnMuY29weXJpZ2h0KSB7XG4gICAgICAgIHZhciBjb3B5cmlnaHRzID0gSDVQLmdldENvcHlyaWdodHMoaW5zdGFuY2UsIGxpYnJhcnkucGFyYW1zLCBjb250ZW50SWQsIGxpYnJhcnkubWV0YWRhdGEpO1xuICAgICAgICBpZiAoIWNvcHlyaWdodHMpIHtcbiAgICAgICAgICBkaXNwbGF5T3B0aW9ucy5jb3B5cmlnaHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgYWN0aW9uIGJhclxuICAgICAgdmFyIGFjdGlvbkJhciA9IG5ldyBINVAuQWN0aW9uQmFyKGRpc3BsYXlPcHRpb25zKTtcbiAgICAgIHZhciAkYWN0aW9ucyA9IGFjdGlvbkJhci5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGFjdGlvbkJhci5vbigncmV1c2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEg1UC5vcGVuUmV1c2VEaWFsb2coJGFjdGlvbnMsIGNvbnRlbnREYXRhLCBsaWJyYXJ5LCBpbnN0YW5jZSwgY29udGVudElkKTtcbiAgICAgICAgaW5zdGFuY2UudHJpZ2dlclhBUEkoJ2FjY2Vzc2VkLXJldXNlJyk7XG4gICAgICB9KTtcbiAgICAgIGFjdGlvbkJhci5vbignY29weXJpZ2h0cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRpYWxvZyA9IG5ldyBINVAuRGlhbG9nKCdjb3B5cmlnaHRzJywgSDVQLnQoJ2NvcHlyaWdodEluZm9ybWF0aW9uJyksIGNvcHlyaWdodHMsICRjb250YWluZXIpO1xuICAgICAgICBkaWFsb2cub3Blbih0cnVlKTtcbiAgICAgICAgaW5zdGFuY2UudHJpZ2dlclhBUEkoJ2FjY2Vzc2VkLWNvcHlyaWdodCcpO1xuICAgICAgfSk7XG4gICAgICBhY3Rpb25CYXIub24oJ2VtYmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBINVAub3BlbkVtYmVkRGlhbG9nKCRhY3Rpb25zLCBjb250ZW50RGF0YS5lbWJlZENvZGUsIGNvbnRlbnREYXRhLnJlc2l6ZUNvZGUsIHtcbiAgICAgICAgICB3aWR0aDogJGVsZW1lbnQud2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQ6ICRlbGVtZW50LmhlaWdodCgpXG4gICAgICAgIH0sIGluc3RhbmNlKTtcbiAgICAgICAgaW5zdGFuY2UudHJpZ2dlclhBUEkoJ2FjY2Vzc2VkLWVtYmVkJyk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFjdGlvbkJhci5oYXNBY3Rpb25zKCkpIHtcbiAgICAgICAgZGlzcGxheUZyYW1lID0gdHJ1ZTtcbiAgICAgICAgJGFjdGlvbnMuaW5zZXJ0QWZ0ZXIoJGNvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJGVsZW1lbnQuYWRkQ2xhc3MoZGlzcGxheUZyYW1lID8gJ2g1cC1mcmFtZScgOiAnaDVwLW5vLWZyYW1lJyk7XG5cbiAgICAvLyBLZWVwIHRyYWNrIG9mIHdoZW4gd2Ugc3RhcnRlZFxuICAgIEg1UC5vcGVuZWRbY29udGVudElkXSA9IG5ldyBEYXRlKCk7XG5cbiAgICAvLyBIYW5kbGUgZXZlbnRzIHdoZW4gdGhlIHVzZXIgZmluaXNoZXMgdGhlIGNvbnRlbnQuIFVzZWZ1bCBmb3IgbG9nZ2luZyBleGVyY2lzZSByZXN1bHRzLlxuICAgIEg1UC5vbihpbnN0YW5jZSwgJ2ZpbmlzaCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBINVAuc2V0RmluaXNoZWQoY29udGVudElkLCBldmVudC5kYXRhLnNjb3JlLCBldmVudC5kYXRhLm1heFNjb3JlLCBldmVudC5kYXRhLnRpbWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gTGlzdGVuIGZvciB4QVBJIGV2ZW50cy5cbiAgICBINVAub24oaW5zdGFuY2UsICd4QVBJJywgSDVQLnhBUElDb21wbGV0ZWRMaXN0ZW5lcik7XG5cbiAgICAvLyBBdXRvIHNhdmUgY3VycmVudCBzdGF0ZSBpZiBzdXBwb3J0ZWRcbiAgICBpZiAoSDVQSW50ZWdyYXRpb24uc2F2ZUZyZXEgIT09IGZhbHNlICYmIChcbiAgICAgICAgaW5zdGFuY2UuZ2V0Q3VycmVudFN0YXRlIGluc3RhbmNlb2YgRnVuY3Rpb24gfHxcbiAgICAgICAgdHlwZW9mIGluc3RhbmNlLmdldEN1cnJlbnRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykpIHtcblxuICAgICAgdmFyIHNhdmVUaW1lciwgc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gaW5zdGFuY2UuZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICAgIGlmIChzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgSDVQLnNldFVzZXJEYXRhKGNvbnRlbnRJZCwgJ3N0YXRlJywgc3RhdGUsIHtkZWxldGVPbkNoYW5nZTogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChINVBJbnRlZ3JhdGlvbi5zYXZlRnJlcSkge1xuICAgICAgICAgIC8vIENvbnRpbnVlIGF1dG9zYXZlXG4gICAgICAgICAgc2F2ZVRpbWVyID0gc2V0VGltZW91dChzYXZlLCBINVBJbnRlZ3JhdGlvbi5zYXZlRnJlcSAqIDEwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoSDVQSW50ZWdyYXRpb24uc2F2ZUZyZXEpIHtcbiAgICAgICAgLy8gU3RhcnQgYXV0b3NhdmVcbiAgICAgICAgc2F2ZVRpbWVyID0gc2V0VGltZW91dChzYXZlLCBINVBJbnRlZ3JhdGlvbi5zYXZlRnJlcSAqIDEwMDApO1xuICAgICAgfVxuXG4gICAgICAvLyB4QVBJIGV2ZW50cyB3aWxsIHNjaGVkdWxlIGEgc2F2ZSBpbiB0aHJlZSBzZWNvbmRzLlxuICAgICAgSDVQLm9uKGluc3RhbmNlLCAneEFQSScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdmVyYiA9IGV2ZW50LmdldFZlcmIoKTtcbiAgICAgICAgaWYgKHZlcmIgPT09ICdjb21wbGV0ZWQnIHx8IHZlcmIgPT09ICdwcm9ncmVzc2VkJykge1xuICAgICAgICAgIGNsZWFyVGltZW91dChzYXZlVGltZXIpO1xuICAgICAgICAgIHNhdmVUaW1lciA9IHNldFRpbWVvdXQoc2F2ZSwgMzAwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChINVAuaXNGcmFtZWQpIHtcbiAgICAgIHZhciByZXNpemVEZWxheTtcbiAgICAgIGlmIChINVAuZXh0ZXJuYWxFbWJlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gSW50ZXJuYWwgZW1iZWRcbiAgICAgICAgLy8gTWFrZSBpdCBwb3NzaWJsZSB0byByZXNpemUgdGhlIGlmcmFtZSB3aGVuIHRoZSBjb250ZW50IGNoYW5nZXMgc2l6ZS4gVGhpcyB3YXkgd2UgZ2V0IG5vIHNjcm9sbGJhcnMuXG4gICAgICAgIHZhciBpZnJhbWUgPSB3aW5kb3cuZnJhbWVFbGVtZW50O1xuICAgICAgICB2YXIgcmVzaXplSWZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cucGFyZW50Lkg1UC5pc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gU2tpcCBpZiBmdWxsIHNjcmVlbi5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZXRhaW4gcGFyZW50IHNpemUgdG8gYXZvaWQganVtcGluZy9zY3JvbGxpbmdcbiAgICAgICAgICB2YXIgcGFyZW50SGVpZ2h0ID0gaWZyYW1lLnBhcmVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0O1xuICAgICAgICAgIGlmcmFtZS5wYXJlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGlmcmFtZS5wYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodCArICdweCc7XG5cbiAgICAgICAgICAvLyBOb3RlOiAgRm9yY2UgbGF5b3V0IHJlZmxvd1xuICAgICAgICAgIC8vICAgICAgICBUaGlzIGZpeGVzIGEgZmxpY2tlcmluZyBidWcgZm9yIGVtYmVkZGVkIGNvbnRlbnQgb24gaVBhZHNcbiAgICAgICAgICAvLyAgICAgICAgQHNlZSBodHRwczovL2dpdGh1Yi5jb20vaDVwL2g1cC1tb29kbGUtcGx1Z2luL2lzc3Vlcy8yMzdcbiAgICAgICAgICBpZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAvLyBSZXNldCBpZnJhbWUgaGVpZ2h0LCBpbiBjYXNlIGNvbnRlbnQgaGFzIHNocmlua2VkLlxuICAgICAgICAgIGlmcmFtZS5zdHlsZS5oZWlnaHQgPSAnMXB4JztcblxuICAgICAgICAgIC8vIFJlc2l6ZSBpZnJhbWUgc28gYWxsIGNvbnRlbnQgaXMgdmlzaWJsZS5cbiAgICAgICAgICBpZnJhbWUuc3R5bGUuaGVpZ2h0ID0gKGlmcmFtZS5jb250ZW50RG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpICsgJ3B4JztcblxuICAgICAgICAgIC8vIEZyZWUgcGFyZW50XG4gICAgICAgICAgaWZyYW1lLnBhcmVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gcGFyZW50SGVpZ2h0O1xuICAgICAgICB9O1xuXG4gICAgICAgIEg1UC5vbihpbnN0YW5jZSwgJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBVc2UgYSBkZWxheSB0byBtYWtlIHN1cmUgaWZyYW1lIGlzIHJlc2l6ZWQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplRGVsYXkpO1xuICAgICAgICAgIHJlc2l6ZURlbGF5ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNpemVJZnJhbWUoKTtcbiAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChINVAuY29tbXVuaWNhdG9yKSB7XG4gICAgICAgIC8vIEV4dGVybmFsIGVtYmVkXG4gICAgICAgIHZhciBwYXJlbnRJc0ZyaWVuZGx5ID0gZmFsc2U7XG5cbiAgICAgICAgLy8gSGFuZGxlIHRoYXQgdGhlIHJlc2l6ZXIgaXMgbG9hZGVkIGFmdGVyIHRoZSBpZnJhbWVcbiAgICAgICAgSDVQLmNvbW11bmljYXRvci5vbigncmVhZHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgSDVQLmNvbW11bmljYXRvci5zZW5kKCdoZWxsbycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBIYW5kbGUgaGVsbG8gbWVzc2FnZSBmcm9tIG91ciBwYXJlbnQgd2luZG93XG4gICAgICAgIEg1UC5jb21tdW5pY2F0b3Iub24oJ2hlbGxvJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEluaXRpYWwgc2V0dXAvaGFuZHNoYWtlIGlzIGRvbmVcbiAgICAgICAgICBwYXJlbnRJc0ZyaWVuZGx5ID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIE1ha2UgaWZyYW1lIHJlc3BvbnNpdmVcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblxuICAgICAgICAgIC8vIEhpZGUgc2Nyb2xsYmFycyBmb3IgY29ycmVjdCBzaXplXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgICAgICAgLy8gQ29udGVudCBuZWVkIHRvIGJlIHJlc2l6ZWQgdG8gZml0IHRoZSBuZXcgaWZyYW1lIHNpemVcbiAgICAgICAgICBINVAudHJpZ2dlcihpbnN0YW5jZSwgJ3Jlc2l6ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBXaGVuIHJlc2l6ZSBoYXMgYmVlbiBwcmVwYXJlZCB0ZWxsIHBhcmVudCB3aW5kb3cgdG8gcmVzaXplXG4gICAgICAgIEg1UC5jb21tdW5pY2F0b3Iub24oJ3Jlc2l6ZVByZXBhcmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIEg1UC5jb21tdW5pY2F0b3Iuc2VuZCgncmVzaXplJywge1xuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0OiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBINVAuY29tbXVuaWNhdG9yLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgSDVQLnRyaWdnZXIoaW5zdGFuY2UsICdyZXNpemUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgSDVQLm9uKGluc3RhbmNlLCAncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChINVAuaXNGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICByZXR1cm47IC8vIFNraXAgaWZyYW1lIHJlc2l6ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFVzZSBhIGRlbGF5IHRvIG1ha2Ugc3VyZSBpZnJhbWUgaXMgcmVzaXplZCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVEZWxheSk7XG4gICAgICAgICAgcmVzaXplRGVsYXkgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIE9ubHkgcmVzaXplIGlmIHRoZSBpZnJhbWUgY2FuIGJlIHJlc2l6ZWRcbiAgICAgICAgICAgIGlmIChwYXJlbnRJc0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICAgIEg1UC5jb21tdW5pY2F0b3Iuc2VuZCgncHJlcGFyZVJlc2l6ZScsIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxIZWlnaHQ6IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgICAgIGNsaWVudEhlaWdodDogZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgSDVQLmNvbW11bmljYXRvci5zZW5kKCdoZWxsbycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIUg1UC5pc0ZyYW1lZCB8fCBINVAuZXh0ZXJuYWxFbWJlZCA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIFJlc2l6ZSBldmVyeXRoaW5nIHdoZW4gd2luZG93IGlzIHJlc2l6ZWQuXG4gICAgICBINVAualF1ZXJ5KHdpbmRvdy5wYXJlbnQpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cucGFyZW50Lkg1UC5pc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgICAvLyBVc2UgdGltZW91dCB0byBhdm9pZCBidWcgaW4gY2VydGFpbiBicm93c2VycyB3aGVuIGV4aXRpbmcgZnVsbHNjcmVlbi4gU29tZSBicm93c2VyIHdpbGwgdHJpZ2dlciByZXNpemUgYmVmb3JlIHRoZSBmdWxsc2NyZWVuY2hhbmdlIGV2ZW50LlxuICAgICAgICAgIEg1UC50cmlnZ2VyKGluc3RhbmNlLCAncmVzaXplJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgSDVQLnRyaWdnZXIoaW5zdGFuY2UsICdyZXNpemUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgSDVQLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcblxuICAgIC8vIFJlc2l6ZSBjb250ZW50LlxuICAgIEg1UC50cmlnZ2VyKGluc3RhbmNlLCAncmVzaXplJyk7XG5cbiAgICAvLyBMb2dpYyBmb3IgaGlkaW5nIGZvY3VzIGVmZmVjdHMgd2hlbiB1c2luZyBtb3VzZVxuICAgICRlbGVtZW50LmFkZENsYXNzKCd1c2luZy1tb3VzZScpO1xuICAgICRlbGVtZW50Lm9uKCdtb3VzZWRvd24ga2V5ZG93biBrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgJGVsZW1lbnQudG9nZ2xlQ2xhc3MoJ3VzaW5nLW1vdXNlJywgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicpO1xuICAgIH0pO1xuXG4gICAgaWYgKEg1UC5leHRlcm5hbERpc3BhdGNoZXIpIHtcbiAgICAgIEg1UC5leHRlcm5hbERpc3BhdGNoZXIudHJpZ2dlcignaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEluc2VydCBINVBzIHRoYXQgc2hvdWxkIGJlIGluIGlmcmFtZXMuXG4gIEg1UC5qUXVlcnkoJ2lmcmFtZS5oNXAtaWZyYW1lOm5vdCguaDVwLWluaXRpYWxpemVkKScsIHRhcmdldCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbnRlbnRJZCA9IEg1UC5qUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2g1cC1pbml0aWFsaXplZCcpLmRhdGEoJ2NvbnRlbnQtaWQnKTtcbiAgICB0aGlzLmNvbnRlbnREb2N1bWVudC5vcGVuKCk7XG4gICAgdGhpcy5jb250ZW50RG9jdW1lbnQud3JpdGUoJzwhZG9jdHlwZSBodG1sPjxodG1sIGNsYXNzPVwiaDVwLWlmcmFtZVwiPjxoZWFkPicgKyBINVAuZ2V0SGVhZFRhZ3MoY29udGVudElkKSArICc8L2hlYWQ+PGJvZHk+PGRpdiBjbGFzcz1cImg1cC1jb250ZW50XCIgZGF0YS1jb250ZW50LWlkPVwiJyArIGNvbnRlbnRJZCArICdcIi8+PC9ib2R5PjwvaHRtbD4nKTtcbiAgICB0aGlzLmNvbnRlbnREb2N1bWVudC5jbG9zZSgpO1xuICB9KTtcbn07XG5cbi8qKlxuICogTG9vcCB0aHJvdWdoIGFzc2V0cyBmb3IgaWZyYW1lIGNvbnRlbnQgYW5kIGNyZWF0ZSBhIHNldCBvZiB0YWdzIGZvciBoZWFkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gY29udGVudElkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBIVE1MXG4gKi9cbkg1UC5nZXRIZWFkVGFncyA9IGZ1bmN0aW9uIChjb250ZW50SWQpIHtcbiAgdmFyIGNyZWF0ZVN0eWxlVGFncyA9IGZ1bmN0aW9uIChzdHlsZXMpIHtcbiAgICB2YXIgdGFncyA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YWdzICs9ICc8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIicgKyBzdHlsZXNbaV0gKyAnXCI+JztcbiAgICB9XG4gICAgcmV0dXJuIHRhZ3M7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVNjcmlwdFRhZ3MgPSBmdW5jdGlvbiAoc2NyaXB0cykge1xuICAgIHZhciB0YWdzID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YWdzICs9ICc8c2NyaXB0IHNyYz1cIicgKyBzY3JpcHRzW2ldICsgJ1wiPjwvc2NyaXB0Pic7XG4gICAgfVxuICAgIHJldHVybiB0YWdzO1xuICB9O1xuXG4gIHJldHVybiAnPGJhc2UgdGFyZ2V0PVwiX3BhcmVudFwiPicgK1xuICAgICAgICAgY3JlYXRlU3R5bGVUYWdzKEg1UEludGVncmF0aW9uLmNvcmUuc3R5bGVzKSArXG4gICAgICAgICBjcmVhdGVTdHlsZVRhZ3MoSDVQSW50ZWdyYXRpb24uY29udGVudHNbJ2NpZC0nICsgY29udGVudElkXS5zdHlsZXMpICtcbiAgICAgICAgIGNyZWF0ZVNjcmlwdFRhZ3MoSDVQSW50ZWdyYXRpb24uY29yZS5zY3JpcHRzKSArXG4gICAgICAgICBjcmVhdGVTY3JpcHRUYWdzKEg1UEludGVncmF0aW9uLmNvbnRlbnRzWydjaWQtJyArIGNvbnRlbnRJZF0uc2NyaXB0cykgK1xuICAgICAgICAgJzxzY3JpcHQ+SDVQSW50ZWdyYXRpb24gPSB3aW5kb3cucGFyZW50Lkg1UEludGVncmF0aW9uOyB2YXIgSDVQID0gSDVQIHx8IHt9OyBINVAuZXh0ZXJuYWxFbWJlZCA9IGZhbHNlOzwvc2NyaXB0Pic7XG59O1xuXG4vKipcbiAqIFdoZW4gZW1iZWRkZWQgdGhlIGNvbW11bmljYXRvciBoZWxwcyB0YWxrIHRvIHRoZSBwYXJlbnQgcGFnZS5cbiAqXG4gKiBAdHlwZSB7Q29tbXVuaWNhdG9yfVxuICovXG5INVAuY29tbXVuaWNhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gQ29tbXVuaWNhdG9yKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIE1hcHMgYWN0aW9ucyB0byBmdW5jdGlvbnNcbiAgICB2YXIgYWN0aW9uSGFuZGxlcnMgPSB7fTtcblxuICAgIC8vIFJlZ2lzdGVyIG1lc3NhZ2UgbGlzdGVuZXJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIHJlY2VpdmVNZXNzYWdlKGV2ZW50KSB7XG4gICAgICBpZiAod2luZG93LnBhcmVudCAhPT0gZXZlbnQuc291cmNlIHx8IGV2ZW50LmRhdGEuY29udGV4dCAhPT0gJ2g1cCcpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBPbmx5IGhhbmRsZSBtZXNzYWdlcyBmcm9tIHBhcmVudCBhbmQgaW4gdGhlIGNvcnJlY3QgY29udGV4dFxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9uSGFuZGxlcnNbZXZlbnQuZGF0YS5hY3Rpb25dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWN0aW9uSGFuZGxlcnNbZXZlbnQuZGF0YS5hY3Rpb25dKGV2ZW50LmRhdGEpO1xuICAgICAgfVxuICAgIH0gLCBmYWxzZSk7XG5cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGFjdGlvbiBsaXN0ZW5lci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gV2hhdCB5b3UgYXJlIHdhaXRpbmcgZm9yXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciBXaGF0IHlvdSB3YW50IGRvbmVcbiAgICAgKi9cbiAgICBzZWxmLm9uID0gZnVuY3Rpb24gKGFjdGlvbiwgaGFuZGxlcikge1xuICAgICAgYWN0aW9uSGFuZGxlcnNbYWN0aW9uXSA9IGhhbmRsZXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSBhbGwgbWlnaHR5IGZhdGhlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdIHBheWxvYWRcbiAgICAgKi9cbiAgICBzZWxmLnNlbmQgPSBmdW5jdGlvbiAoYWN0aW9uLCBkYXRhKSB7XG4gICAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRhdGEgPSB7fTtcbiAgICAgIH1cbiAgICAgIGRhdGEuY29udGV4dCA9ICdoNXAnO1xuICAgICAgZGF0YS5hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgIC8vIFBhcmVudCBvcmlnaW4gY2FuIGJlIGFueXRoaW5nXG4gICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKGRhdGEsICcqJyk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiAod2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyID8gbmV3IENvbW11bmljYXRvcigpIDogdW5kZWZpbmVkKTtcbn0pKCk7XG5cbi8qKlxuICogRW50ZXIgc2VtaSBmdWxsc2NyZWVuIGZvciB0aGUgZ2l2ZW4gSDVQIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtINVAualF1ZXJ5fSAkZWxlbWVudCBDb250ZW50IGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZXhpdENhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHVzZXIgZXhpdHMgZnVsbHNjcmVlbi5cbiAqIEBwYXJhbSB7SDVQLmpRdWVyeX0gJGJvZHkgRm9yIGludGVybmFsIHVzZS4gR2l2ZXMgdGhlIGJvZHkgb2YgdGhlIGlmcmFtZS5cbiAqL1xuSDVQLnNlbWlGdWxsU2NyZWVuID0gZnVuY3Rpb24gKCRlbGVtZW50LCBpbnN0YW5jZSwgZXhpdENhbGxiYWNrLCBib2R5KSB7XG4gIEg1UC5mdWxsU2NyZWVuKCRlbGVtZW50LCBpbnN0YW5jZSwgZXhpdENhbGxiYWNrLCBib2R5LCB0cnVlKTtcbn07XG5cbi8qKlxuICogRW50ZXIgZnVsbHNjcmVlbiBmb3IgdGhlIGdpdmVuIEg1UCBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0ge0g1UC5qUXVlcnl9ICRlbGVtZW50IENvbnRlbnQgY29udGFpbmVyLlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBleGl0Q2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdXNlciBleGl0cyBmdWxsc2NyZWVuLlxuICogQHBhcmFtIHtINVAualF1ZXJ5fSAkYm9keSBGb3IgaW50ZXJuYWwgdXNlLiBHaXZlcyB0aGUgYm9keSBvZiB0aGUgaWZyYW1lLlxuICogQHBhcmFtIHtCb29sZWFufSBmb3JjZVNlbWlGdWxsU2NyZWVuXG4gKi9cbkg1UC5mdWxsU2NyZWVuID0gZnVuY3Rpb24gKCRlbGVtZW50LCBpbnN0YW5jZSwgZXhpdENhbGxiYWNrLCBib2R5LCBmb3JjZVNlbWlGdWxsU2NyZWVuKSB7XG4gIGlmIChINVAuZXhpdEZ1bGxTY3JlZW4gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjsgLy8gQ2Fubm90IGVudGVyIG5ldyBmdWxsc2NyZWVuIHVudGlsIHByZXZpb3VzIGlzIG92ZXJcbiAgfVxuXG4gIGlmIChINVAuaXNGcmFtZWQgJiYgSDVQLmV4dGVybmFsRW1iZWQgPT09IGZhbHNlKSB7XG4gICAgLy8gVHJpZ2dlciByZXNpemUgb24gd3JhcHBlciBpbiBwYXJlbnQgd2luZG93LlxuICAgIHdpbmRvdy5wYXJlbnQuSDVQLmZ1bGxTY3JlZW4oJGVsZW1lbnQsIGluc3RhbmNlLCBleGl0Q2FsbGJhY2ssIEg1UC4kYm9keS5nZXQoKSwgZm9yY2VTZW1pRnVsbFNjcmVlbik7XG4gICAgSDVQLmlzRnVsbHNjcmVlbiA9IHRydWU7XG4gICAgSDVQLmV4aXRGdWxsU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LnBhcmVudC5INVAuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgICB9O1xuICAgIEg1UC5vbihpbnN0YW5jZSwgJ2V4aXRGdWxsU2NyZWVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgSDVQLmlzRnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgICAgSDVQLmV4aXRGdWxsU2NyZWVuID0gdW5kZWZpbmVkO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciAkY29udGFpbmVyID0gJGVsZW1lbnQ7XG4gIHZhciAkY2xhc3NlcywgJGlmcmFtZSwgJGJvZHk7XG4gIGlmIChib2R5ID09PSB1bmRlZmluZWQpICB7XG4gICAgJGJvZHkgPSBINVAuJGJvZHk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gV2UncmUgY2FsbGVkIGZyb20gYW4gaWZyYW1lLlxuICAgICRib2R5ID0gSDVQLmpRdWVyeShib2R5KTtcbiAgICAkY2xhc3NlcyA9ICRib2R5LmFkZCgkZWxlbWVudC5nZXQoKSk7XG4gICAgdmFyIGlmcmFtZVNlbGVjdG9yID0gJyNoNXAtaWZyYW1lLScgKyAkZWxlbWVudC5wYXJlbnQoKS5kYXRhKCdjb250ZW50LWlkJyk7XG4gICAgJGlmcmFtZSA9IEg1UC5qUXVlcnkoaWZyYW1lU2VsZWN0b3IpO1xuICAgICRlbGVtZW50ID0gJGlmcmFtZS5wYXJlbnQoKTsgLy8gUHV0IGlmcmFtZSB3cmFwcGVyIGluIGZ1bGxzY3JlZW4sIG5vdCBjb250YWluZXIuXG4gIH1cblxuICAkY2xhc3NlcyA9ICRlbGVtZW50LmFkZChINVAuJGJvZHkpLmFkZCgkY2xhc3Nlcyk7XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZm9yIHJlc2l6ZSBieSBzZXR0aW5nIHRoZSBjb3JyZWN0IHN0eWxlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzZXMgQ1NTXG4gICAqL1xuICB2YXIgYmVmb3JlID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICAkY2xhc3Nlcy5hZGRDbGFzcyhjbGFzc2VzKTtcblxuICAgIGlmICgkaWZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFNldCBpZnJhbWUgdG8gaXRzIGRlZmF1bHQgc2l6ZSgxMDAlKS5cbiAgICAgICRpZnJhbWUuY3NzKCdoZWlnaHQnLCAnJyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIGNhbGxlZCB3aGVuIGZ1bGxzY3JlZW4gbW9kZSBoYXMgYmVlbiBlbnRlcmVkLlxuICAgKiBSZXNpemVzIGFuZCBzZXRzIGZvY3VzIG9uIGNvbnRlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB2YXIgZW50ZXJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBEbyBub3QgcmVseSBvbiB3aW5kb3cgcmVzaXplIGV2ZW50cy5cbiAgICBINVAudHJpZ2dlcihpbnN0YW5jZSwgJ3Jlc2l6ZScpO1xuICAgIEg1UC50cmlnZ2VyKGluc3RhbmNlLCAnZm9jdXMnKTtcbiAgICBINVAudHJpZ2dlcihpbnN0YW5jZSwgJ2VudGVyRnVsbFNjcmVlbicpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIGNhbGxlZCB3aGVuIGZ1bGxzY3JlZW4gbW9kZSBoYXMgYmVlbiBleGl0ZWQuXG4gICAqIFJlc2l6ZXMgYW5kIHNldHMgZm9jdXMgb24gY29udGVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzZXMgQ1NTXG4gICAqL1xuICB2YXIgZG9uZSA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgSDVQLmlzRnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgICRjbGFzc2VzLnJlbW92ZUNsYXNzKGNsYXNzZXMpO1xuXG4gICAgLy8gRG8gbm90IHJlbHkgb24gd2luZG93IHJlc2l6ZSBldmVudHMuXG4gICAgSDVQLnRyaWdnZXIoaW5zdGFuY2UsICdyZXNpemUnKTtcbiAgICBINVAudHJpZ2dlcihpbnN0YW5jZSwgJ2ZvY3VzJyk7XG5cbiAgICBINVAuZXhpdEZ1bGxTY3JlZW4gPSB1bmRlZmluZWQ7XG4gICAgaWYgKGV4aXRDYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBleGl0Q2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBINVAudHJpZ2dlcihpbnN0YW5jZSwgJ2V4aXRGdWxsU2NyZWVuJyk7XG4gIH07XG5cbiAgSDVQLmlzRnVsbHNjcmVlbiA9IHRydWU7XG4gIGlmIChINVAuZnVsbFNjcmVlbkJyb3dzZXJQcmVmaXggPT09IHVuZGVmaW5lZCB8fCBmb3JjZVNlbWlGdWxsU2NyZWVuID09PSB0cnVlKSB7XG4gICAgLy8gQ3JlYXRlIHNlbWkgZnVsbHNjcmVlbi5cblxuICAgIGlmIChINVAuaXNGcmFtZWQpIHtcbiAgICAgIHJldHVybjsgLy8gVE9ETzogU2hvdWxkIHdlIHN1cHBvcnQgc2VtaS1mdWxsc2NyZWVuIGZvciBJRTkgJiAxMCA/XG4gICAgfVxuXG4gICAgYmVmb3JlKCdoNXAtc2VtaS1mdWxsc2NyZWVuJyk7XG4gICAgdmFyICRkaXNhYmxlID0gSDVQLmpRdWVyeSgnPGRpdiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJoNXAtZGlzYWJsZS1mdWxsc2NyZWVuXCIgdGl0bGU9XCInICsgSDVQLnQoJ2Rpc2FibGVGdWxsc2NyZWVuJykgKyAnXCIgYXJpYS1sYWJlbD1cIicgKyBINVAudCgnZGlzYWJsZUZ1bGxzY3JlZW4nKSArICdcIj48L2Rpdj4nKS5hcHBlbmRUbygkY29udGFpbmVyLmZpbmQoJy5oNXAtY29udGVudC1jb250cm9scycpKTtcbiAgICB2YXIga2V5dXAsIGRpc2FibGVTZW1pRnVsbHNjcmVlbiA9IEg1UC5leGl0RnVsbFNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcmV2Vmlld3BvcnRDb250ZW50KSB7XG4gICAgICAgIC8vIFVzZSBjb250ZW50IGZyb20gdGhlIHByZXZpb3VzIHZpZXdwb3J0IHRhZ1xuICAgICAgICBoNXBWaWV3cG9ydC5jb250ZW50ID0gcHJldlZpZXdwb3J0Q29udGVudDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBSZW1vdmUgdmlld3BvcnQgdGFnXG4gICAgICAgIGhlYWQucmVtb3ZlQ2hpbGQoaDVwVmlld3BvcnQpO1xuICAgICAgfVxuICAgICAgJGRpc2FibGUucmVtb3ZlKCk7XG4gICAgICAkYm9keS51bmJpbmQoJ2tleXVwJywga2V5dXApO1xuICAgICAgZG9uZSgnaDVwLXNlbWktZnVsbHNjcmVlbicpO1xuICAgIH07XG4gICAga2V5dXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICBkaXNhYmxlU2VtaUZ1bGxzY3JlZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuICAgICRkaXNhYmxlLmNsaWNrKGRpc2FibGVTZW1pRnVsbHNjcmVlbik7XG4gICAgJGJvZHkua2V5dXAoa2V5dXApO1xuXG4gICAgLy8gRGlzYWJsZSB6b29tXG4gICAgdmFyIHByZXZWaWV3cG9ydENvbnRlbnQsIGg1cFZpZXdwb3J0O1xuICAgIHZhciBtZXRhVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtZXRhJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRhVGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG1ldGFUYWdzW2ldLm5hbWUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBleGlzdGluZyB2aWV3cG9ydCB0YWdcbiAgICAgICAgaDVwVmlld3BvcnQgPSBtZXRhVGFnc1tpXTtcbiAgICAgICAgcHJldlZpZXdwb3J0Q29udGVudCA9IGg1cFZpZXdwb3J0LmNvbnRlbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXByZXZWaWV3cG9ydENvbnRlbnQpIHtcbiAgICAgIC8vIENyZWF0ZSBhIG5ldyB2aWV3cG9ydCB0YWdcbiAgICAgIGg1cFZpZXdwb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuICAgICAgaDVwVmlld3BvcnQubmFtZSA9ICd2aWV3cG9ydCc7XG4gICAgfVxuICAgIGg1cFZpZXdwb3J0LmNvbnRlbnQgPSAnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCc7XG4gICAgaWYgKCFwcmV2Vmlld3BvcnRDb250ZW50KSB7XG4gICAgICAvLyBJbnNlcnQgdGhlIG5ldyB2aWV3cG9ydCB0YWdcbiAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoaDVwVmlld3BvcnQpO1xuICAgIH1cblxuICAgIGVudGVyZWQoKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBDcmVhdGUgcmVhbCBmdWxsc2NyZWVuLlxuXG4gICAgYmVmb3JlKCdoNXAtZnVsbHNjcmVlbicpO1xuICAgIHZhciBmaXJzdCwgZXZlbnROYW1lID0gKEg1UC5mdWxsU2NyZWVuQnJvd3NlclByZWZpeCA9PT0gJ21zJyA/ICdNU0Z1bGxzY3JlZW5DaGFuZ2UnIDogSDVQLmZ1bGxTY3JlZW5Ccm93c2VyUHJlZml4ICsgJ2Z1bGxzY3JlZW5jaGFuZ2UnKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGZpcnN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gV2UgYXJlIGVudGVyaW5nIGZ1bGxzY3JlZW4gbW9kZVxuICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICBlbnRlcmVkKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gV2UgYXJlIGV4aXRpbmcgZnVsbHNjcmVlblxuICAgICAgZG9uZSgnaDVwLWZ1bGxzY3JlZW4nKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBhcmd1bWVudHMuY2FsbGVlLCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoSDVQLmZ1bGxTY3JlZW5Ccm93c2VyUHJlZml4ID09PSAnJykge1xuICAgICAgJGVsZW1lbnRbMF0ucmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgbWV0aG9kID0gKEg1UC5mdWxsU2NyZWVuQnJvd3NlclByZWZpeCA9PT0gJ21zJyA/ICdtc1JlcXVlc3RGdWxsc2NyZWVuJyA6IEg1UC5mdWxsU2NyZWVuQnJvd3NlclByZWZpeCArICdSZXF1ZXN0RnVsbFNjcmVlbicpO1xuICAgICAgdmFyIHBhcmFtcyA9IChINVAuZnVsbFNjcmVlbkJyb3dzZXJQcmVmaXggPT09ICd3ZWJraXQnICYmIEg1UC5zYWZhcmlCcm93c2VyID09PSAwID8gRWxlbWVudC5BTExPV19LRVlCT0FSRF9JTlBVVCA6IHVuZGVmaW5lZCk7XG4gICAgICAkZWxlbWVudFswXVttZXRob2RdKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gQWxsb3dzIGV2ZXJvbmUgdG8gZXhpdFxuICAgIEg1UC5leGl0RnVsbFNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChINVAuZnVsbFNjcmVlbkJyb3dzZXJQcmVmaXggPT09ICcnKSB7XG4gICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChINVAuZnVsbFNjcmVlbkJyb3dzZXJQcmVmaXggPT09ICdtb3onKSB7XG4gICAgICAgIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudFtINVAuZnVsbFNjcmVlbkJyb3dzZXJQcmVmaXggKyAnRXhpdEZ1bGxzY3JlZW4nXSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbihmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBIZWxwZXIgZm9yIGFkZGluZyBhIHF1ZXJ5IHBhcmFtZXRlciB0byBhbiBleGlzdGluZyBwYXRoIHRoYXQgbWF5IGFscmVhZHlcbiAgICogY29udGFpbiBvbmUgb3IgYSBoYXNoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1ldGVyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEg1UC5hZGRRdWVyeVBhcmFtZXRlciA9IGZ1bmN0aW9uIChwYXRoLCBwYXJhbWV0ZXIpIHtcbiAgICBsZXQgbmV3UGF0aCwgc2Vjb25kU3BsaXQ7XG4gICAgY29uc3QgZmlyc3RTcGxpdCA9IHBhdGguc3BsaXQoJz8nKTtcbiAgICBpZiAoZmlyc3RTcGxpdFsxXSkge1xuICAgICAgLy8gVGhlcmUgaXMgYWxyZWFkeSBhbiBleGlzdGluZyBxdWVyeVxuICAgICAgc2Vjb25kU3BsaXQgPSBmaXJzdFNwbGl0WzFdLnNwbGl0KCcjJyk7XG4gICAgICBuZXdQYXRoID0gZmlyc3RTcGxpdFswXSArICc/JyArIHNlY29uZFNwbGl0WzBdICsgJyYnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIE5vIGV4aXN0aW5nIHF1ZXJ5LCBqdXN0IG5lZWQgdG8gdGFrZSBjYXJlIG9mIHRoZSBoYXNoXG4gICAgICBzZWNvbmRTcGxpdCA9IGZpcnN0U3BsaXRbMF0uc3BsaXQoJyMnKTtcbiAgICAgIG5ld1BhdGggPSBzZWNvbmRTcGxpdFswXSArICc/JztcbiAgICB9XG4gICAgbmV3UGF0aCArPSBwYXJhbWV0ZXI7XG4gICAgaWYgKHNlY29uZFNwbGl0WzFdKSB7XG4gICAgICAvLyBBZGQgYmFjayB0aGUgaGFzaFxuICAgICAgbmV3UGF0aCArPSAnIycgKyBzZWNvbmRTcGxpdFsxXTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1BhdGg7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhlbHBlciBmb3Igc2V0dGluZyB0aGUgY3Jvc3NPcmlnaW4gYXR0cmlidXRlICsgdGhlIGNvbXBsZXRlIGNvcnJlY3Qgc291cmNlLlxuICAgKiBOb3RlOiBUaGlzIHdpbGwgc3RhcnQgbG9hZGluZyB0aGUgcmVzb3VyY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBET00gZWxlbWVudCwgdHlwaWNhbGx5IGltZywgdmlkZW8gb3IgYXVkaW9cbiAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBGaWxlIG9iamVjdCBmcm9tIHBhcmFtZXRlcnMvanNvbl9jb250ZW50IChjcmVhdGVkIGJ5IEg1UEVkaXRvcilcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRlbnRJZCBOZWVkZWQgdG8gZGV0ZXJtaW5lIHRoZSBjb21wbGV0ZSBjb3JyZWN0IGZpbGUgcGF0aFxuICAgKi9cbiAgSDVQLnNldFNvdXJjZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBzb3VyY2UsIGNvbnRlbnRJZCkge1xuICAgIGxldCBwYXRoID0gc291cmNlLnBhdGg7XG5cbiAgICBjb25zdCBjcm9zc09yaWdpbiA9IEg1UC5nZXRDcm9zc09yaWdpbihzb3VyY2UpO1xuICAgIGlmIChjcm9zc09yaWdpbikge1xuICAgICAgZWxlbWVudC5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xuXG4gICAgICBpZiAoSDVQSW50ZWdyYXRpb24uY3Jvc3NvcmlnaW5DYWNoZUJ1c3Rlcikge1xuICAgICAgICAvLyBTb21lIHNpdGVzIG1heSB3YW50IHRvIGFkZCBhIGNhY2hlIGJ1c3RlciBpbiBjYXNlIHRoZSBzYW1lIHJlc291cmNlXG4gICAgICAgIC8vIGlzIHVzZWQgZWxzZXdoZXJlIHdpdGhvdXQgdGhlIGNyb3NzT3JpZ2luIGF0dHJpYnV0ZVxuICAgICAgICBwYXRoID0gSDVQLmFkZFF1ZXJ5UGFyYW1ldGVyKHBhdGgsIEg1UEludGVncmF0aW9uLmNyb3Nzb3JpZ2luQ2FjaGVCdXN0ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIEluIGNhc2UgdGhpcyBlbGVtZW50IGhhcyBiZWVuIHVzZWQgYmVmb3JlLlxuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Nyb3Nzb3JpZ2luJyk7XG4gICAgfVxuXG4gICAgZWxlbWVudC5zcmMgPSBINVAuZ2V0UGF0aChwYXRoLCBjb250ZW50SWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gcGF0aCBoYXMgYSBwcm90b2NvbC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdmFyIGhhc1Byb3RvY29sID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5tYXRjaCgvXlthLXowLTldKzpcXC9cXC8vaSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3Jvc3NPcmlnaW4gcG9saWN5IHRvIHVzZSBmb3IgaW1nLCB2aWRlbyBhbmQgYXVkaW8gdGFncyBvbiB0aGUgY3VycmVudCBzaXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IHNvdXJjZSBGaWxlIG9iamVjdCBmcm9tIHBhcmFtZXRlcnMvanNvbl9jb250ZW50IC0gQ2FuIGFsc28gYmUgVVJMKGRlcHJlY2F0ZWQgdXNhZ2UpXG4gICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH0gY3Jvc3NPcmlnaW4gYXR0cmlidXRlIHZhbHVlIHJlcXVpcmVkIGJ5IHRoZSBzb3VyY2VcbiAgICovXG4gIEg1UC5nZXRDcm9zc09yaWdpbiA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIERlcHJlY2F0ZWQgdXNhZ2UuXG4gICAgICByZXR1cm4gSDVQSW50ZWdyYXRpb24uY3Jvc3NvcmlnaW4gJiYgSDVQSW50ZWdyYXRpb24uY3Jvc3NvcmlnaW5SZWdleCAmJiBzb3VyY2UubWF0Y2goSDVQSW50ZWdyYXRpb24uY3Jvc3NvcmlnaW5SZWdleCkgPyBINVBJbnRlZ3JhdGlvbi5jcm9zc29yaWdpbiA6IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKEg1UEludGVncmF0aW9uLmNyb3Nzb3JpZ2luICYmICFoYXNQcm90b2NvbChzb3VyY2UucGF0aCkpIHtcbiAgICAgIC8vIFRoaXMgaXMgYSBsb2NhbCBmaWxlLCB1c2UgdGhlIGxvY2FsIGNyb3NzT3JpZ2luIHBvbGljeS5cbiAgICAgIHJldHVybiBINVBJbnRlZ3JhdGlvbi5jcm9zc29yaWdpbjtcbiAgICAgIC8vIE5vdGU6IFdlIGNhbm5vdCB1c2UgdGhpcyBmb3IgYWxsIGV4dGVybmFsIHNvdXJjZXMgc2luY2Ugd2UgZG8gbm90IGtub3dcbiAgICAgIC8vIGVhY2ggc2VydmVyJ3MgaW5kaXZpZHVhbCBwb2xpY3kuIFdlIGNvdWxkIGFkZCBzdXBwb3J0IGZvciBhIGxpc3Qgb2ZcbiAgICAgIC8vIGV4dGVybmFsIHNvdXJjZXMgYW5kIHRoZWlyIHBvbGljeSBsYXRlciBvbi5cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIHBhdGggdG8gdGhlIGNvbnRlbnQgZmlsZXMgYmFzZWQgb24gdGhlIGlkIG9mIHRoZSBjb250ZW50LlxuICAgKiBBbHNvIGlkZW50aWZpZXMgYW5kIHJldHVybnMgYWJzb2x1dGUgcGF0aHMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAqICAgUmVsYXRpdmUgdG8gY29udGVudCBmb2xkZXIgb3IgYWJzb2x1dGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb250ZW50SWRcbiAgICogICBJRCBvZiB0aGUgY29udGVudCByZXF1ZXN0aW5nIHRoZSBwYXRoLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiAgIENvbXBsZXRlIFVSTCB0byBwYXRoLlxuICAgKi9cbiAgSDVQLmdldFBhdGggPSBmdW5jdGlvbiAocGF0aCwgY29udGVudElkKSB7XG4gICAgaWYgKGhhc1Byb3RvY29sKHBhdGgpKSB7XG4gICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG5cbiAgICB2YXIgcHJlZml4O1xuICAgIHZhciBpc1RtcEZpbGUgPSAocGF0aC5zdWJzdHIoLTQsNCkgPT09ICcjdG1wJyk7XG4gICAgaWYgKGNvbnRlbnRJZCAhPT0gdW5kZWZpbmVkICYmICFpc1RtcEZpbGUpIHtcbiAgICAgIC8vIENoZWNrIGZvciBjdXN0b20gb3ZlcnJpZGUgVVJMXG4gICAgICBpZiAoSDVQSW50ZWdyYXRpb24uY29udGVudHMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgIEg1UEludGVncmF0aW9uLmNvbnRlbnRzWydjaWQtJyArIGNvbnRlbnRJZF0pIHtcbiAgICAgICAgcHJlZml4ID0gSDVQSW50ZWdyYXRpb24uY29udGVudHNbJ2NpZC0nICsgY29udGVudElkXS5jb250ZW50VXJsO1xuICAgICAgfVxuICAgICAgaWYgKCFwcmVmaXgpIHtcbiAgICAgICAgcHJlZml4ID0gSDVQSW50ZWdyYXRpb24udXJsICsgJy9jb250ZW50LycgKyBjb250ZW50SWQ7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvdy5INVBFZGl0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlZml4ID0gSDVQRWRpdG9yLmZpbGVzUGF0aDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFoYXNQcm90b2NvbChwcmVmaXgpKSB7XG4gICAgICAvLyBVc2UgYWJzb2x1dGUgdXJsc1xuICAgICAgcHJlZml4ID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyBwcmVmaXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeCArICcvJyArIHBhdGg7XG4gIH07XG59KSgpO1xuXG4vKipcbiAqIFRISVMgRlVOQ1RJT04gSVMgREVQUkVDQVRFRCwgVVNFIGdldFBhdGggSU5TVEVBRFxuICogV2lsbCBiZSByZW1vdmUgbWFyY2ggMjAxNi5cbiAqXG4gKiBGaW5kIHRoZSBwYXRoIHRvIHRoZSBjb250ZW50IGZpbGVzIGZvbGRlciBiYXNlZCBvbiB0aGUgaWQgb2YgdGhlIGNvbnRlbnRcbiAqXG4gKiBAZGVwcmVjYXRlZFxuICogICBXaWxsIGJlIHJlbW92ZWQgbWFyY2ggMjAxNi5cbiAqIEBwYXJhbSBjb250ZW50SWRcbiAqICAgSWQgb2YgdGhlIGNvbnRlbnQgcmVxdWVzdGluZyB0aGUgcGF0aFxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgVVJMXG4gKi9cbkg1UC5nZXRDb250ZW50UGF0aCA9IGZ1bmN0aW9uIChjb250ZW50SWQpIHtcbiAgcmV0dXJuIEg1UEludGVncmF0aW9uLnVybCArICcvY29udGVudC8nICsgY29udGVudElkO1xufTtcblxuLyoqXG4gKiBHZXQgbGlicmFyeSBjbGFzcyBjb25zdHJ1Y3RvciBmcm9tIEg1UCBieSBjbGFzc25hbWUuXG4gKiBOb3RlIHRoYXQgdGhpcyBjbGFzcyB3aWxsIG9ubHkgd29yayBmb3IgcmVzb2x2ZSBcIkg1UC5OYW1lV2l0aG91dERvdFwiLlxuICogQWxzbyBjaGVjayBvdXQge0BsaW5rIEg1UC5uZXdSdW5uYWJsZX1cbiAqXG4gKiBVc2VkIGZyb20gbGlicmFyaWVzIHRvIGNvbnN0cnVjdCBpbnN0YW5jZXMgb2Ygb3RoZXIgbGlicmFyaWVzJyBvYmplY3RzIGJ5IG5hbWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiBsaWJyYXJ5XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDbGFzcyBjb25zdHJ1Y3RvclxuICovXG5INVAuY2xhc3NGcm9tTmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBhcnIgPSBuYW1lLnNwbGl0KFwiLlwiKTtcbiAgcmV0dXJuIHRoaXNbYXJyW2Fyci5sZW5ndGggLSAxXV07XG59O1xuXG4vKipcbiAqIEEgc2FmZSB3YXkgb2YgY3JlYXRpbmcgYSBuZXcgaW5zdGFuY2Ugb2YgYSBydW5uYWJsZSBINVAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGxpYnJhcnlcbiAqICAgTGlicmFyeS9hY3Rpb24gb2JqZWN0IGZvcm0gcGFyYW1zLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbnRlbnRJZFxuICogICBJZGVudGlmaWVzIHRoZSBjb250ZW50LlxuICogQHBhcmFtIHtINVAualF1ZXJ5fSBbJGF0dGFjaFRvXVxuICogICBFbGVtZW50IHRvIGF0dGFjaCB0aGUgaW5zdGFuY2UgdG8uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwUmVzaXplXVxuICogICBTa2lwIHRyaWdnZXJpbmcgb2YgdGhlIHJlc2l6ZSBldmVudCBhZnRlciBhdHRhY2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gW2V4dHJhc11cbiAqICAgRXh0cmEgcGFyYW1ldGVycyBmb3IgdGhlIEg1UCBjb250ZW50IGNvbnN0cnVjdG9yXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICogICBJbnN0YW5jZS5cbiAqL1xuSDVQLm5ld1J1bm5hYmxlID0gZnVuY3Rpb24gKGxpYnJhcnksIGNvbnRlbnRJZCwgJGF0dGFjaFRvLCBza2lwUmVzaXplLCBleHRyYXMpIHtcbiAgdmFyIG5hbWVTcGxpdCwgdmVyc2lvblNwbGl0LCBtYWNoaW5lTmFtZTtcbiAgdHJ5IHtcbiAgICBuYW1lU3BsaXQgPSBsaWJyYXJ5LmxpYnJhcnkuc3BsaXQoJyAnLCAyKTtcbiAgICBtYWNoaW5lTmFtZSA9IG5hbWVTcGxpdFswXTtcbiAgICB2ZXJzaW9uU3BsaXQgPSBuYW1lU3BsaXRbMV0uc3BsaXQoJy4nLCAyKTtcbiAgfVxuICBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIEg1UC5lcnJvcignSW52YWxpZCBsaWJyYXJ5IHN0cmluZzogJyArIGxpYnJhcnkubGlicmFyeSk7XG4gIH1cblxuICBpZiAoKGxpYnJhcnkucGFyYW1zIGluc3RhbmNlb2YgT2JqZWN0KSAhPT0gdHJ1ZSB8fCAobGlicmFyeS5wYXJhbXMgaW5zdGFuY2VvZiBBcnJheSkgPT09IHRydWUpIHtcbiAgICBINVAuZXJyb3IoJ0ludmFsaWQgbGlicmFyeSBwYXJhbXMgZm9yOiAnICsgbGlicmFyeS5saWJyYXJ5KTtcbiAgICByZXR1cm4gSDVQLmVycm9yKGxpYnJhcnkucGFyYW1zKTtcbiAgfVxuXG4gIC8vIEZpbmQgY29uc3RydWN0b3IgZnVuY3Rpb25cbiAgdmFyIGNvbnN0cnVjdG9yO1xuICB0cnkge1xuICAgIG5hbWVTcGxpdCA9IG5hbWVTcGxpdFswXS5zcGxpdCgnLicpO1xuICAgIGNvbnN0cnVjdG9yID0gd2luZG93O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZVNwbGl0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yW25hbWVTcGxpdFtpXV07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29uc3RydWN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG51bGw7XG4gICAgfVxuICB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gSDVQLmVycm9yKCdVbmFibGUgdG8gZmluZCBjb25zdHJ1Y3RvciBmb3I6ICcgKyBsaWJyYXJ5LmxpYnJhcnkpO1xuICB9XG5cbiAgaWYgKGV4dHJhcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXh0cmFzID0ge307XG4gIH1cbiAgaWYgKGxpYnJhcnkuc3ViQ29udGVudElkKSB7XG4gICAgZXh0cmFzLnN1YkNvbnRlbnRJZCA9IGxpYnJhcnkuc3ViQ29udGVudElkO1xuICB9XG5cbiAgaWYgKGxpYnJhcnkudXNlckRhdGFzICYmIGxpYnJhcnkudXNlckRhdGFzLnN0YXRlICYmIEg1UEludGVncmF0aW9uLnNhdmVGcmVxKSB7XG4gICAgZXh0cmFzLnByZXZpb3VzU3RhdGUgPSBsaWJyYXJ5LnVzZXJEYXRhcy5zdGF0ZTtcbiAgfVxuXG4gIGlmIChsaWJyYXJ5Lm1ldGFkYXRhKSB7XG4gICAgZXh0cmFzLm1ldGFkYXRhID0gbGlicmFyeS5tZXRhZGF0YTtcbiAgfVxuXG4gIC8vIE1ha2VzIGFsbCBINVAgbGlicmFyaWVzIGV4dGVuZCBINVAuQ29udGVudFR5cGU6XG4gIHZhciBzdGFuZGFsb25lID0gZXh0cmFzLnN0YW5kYWxvbmUgfHwgZmFsc2U7XG4gIC8vIFRoaXMgb3JkZXIgbWFrZXMgaXQgcG9zc2libGUgZm9yIGFuIEg1UCBsaWJyYXJ5IHRvIG92ZXJyaWRlIEg1UC5Db250ZW50VHlwZSBmdW5jdGlvbnMhXG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IEg1UC5qUXVlcnkuZXh0ZW5kKHt9LCBINVAuQ29udGVudFR5cGUoc3RhbmRhbG9uZSkucHJvdG90eXBlLCBjb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuXG4gIHZhciBpbnN0YW5jZTtcbiAgLy8gU29tZSBvbGQgbGlicmFyeSB2ZXJzaW9ucyBoYXZlIHRoZWlyIG93biBjdXN0b20gdGhpcmQgcGFyYW1ldGVyLlxuICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3Qgc2VuZCB0aGVtIHRoZSBleHRyYXMuXG4gIC8vICh0aGV5IHdpbGwgaW50ZXJwcmV0IGl0IGFzIHNvbWV0aGluZyBlbHNlKVxuICBpZiAoSDVQLmpRdWVyeS5pbkFycmF5KGxpYnJhcnkubGlicmFyeSwgWydINVAuQ291cnNlUHJlc2VudGF0aW9uIDEuMCcsICdINVAuQ291cnNlUHJlc2VudGF0aW9uIDEuMScsICdINVAuQ291cnNlUHJlc2VudGF0aW9uIDEuMicsICdINVAuQ291cnNlUHJlc2VudGF0aW9uIDEuMyddKSA+IC0xKSB7XG4gICAgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3IobGlicmFyeS5wYXJhbXMsIGNvbnRlbnRJZCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3IobGlicmFyeS5wYXJhbXMsIGNvbnRlbnRJZCwgZXh0cmFzKTtcbiAgfVxuXG4gIGlmIChpbnN0YW5jZS4kID09PSB1bmRlZmluZWQpIHtcbiAgICBpbnN0YW5jZS4kID0gSDVQLmpRdWVyeShpbnN0YW5jZSk7XG4gIH1cblxuICBpZiAoaW5zdGFuY2UuY29udGVudElkID09PSB1bmRlZmluZWQpIHtcbiAgICBpbnN0YW5jZS5jb250ZW50SWQgPSBjb250ZW50SWQ7XG4gIH1cbiAgaWYgKGluc3RhbmNlLnN1YkNvbnRlbnRJZCA9PT0gdW5kZWZpbmVkICYmIGxpYnJhcnkuc3ViQ29udGVudElkKSB7XG4gICAgaW5zdGFuY2Uuc3ViQ29udGVudElkID0gbGlicmFyeS5zdWJDb250ZW50SWQ7XG4gIH1cbiAgaWYgKGluc3RhbmNlLnBhcmVudCA9PT0gdW5kZWZpbmVkICYmIGV4dHJhcyAmJiBleHRyYXMucGFyZW50KSB7XG4gICAgaW5zdGFuY2UucGFyZW50ID0gZXh0cmFzLnBhcmVudDtcbiAgfVxuICBpZiAoaW5zdGFuY2UubGlicmFyeUluZm8gPT09IHVuZGVmaW5lZCkge1xuICAgIGluc3RhbmNlLmxpYnJhcnlJbmZvID0ge1xuICAgICAgdmVyc2lvbmVkTmFtZTogbGlicmFyeS5saWJyYXJ5LFxuICAgICAgdmVyc2lvbmVkTmFtZU5vU3BhY2VzOiBtYWNoaW5lTmFtZSArICctJyArIHZlcnNpb25TcGxpdFswXSArICcuJyArIHZlcnNpb25TcGxpdFsxXSxcbiAgICAgIG1hY2hpbmVOYW1lOiBtYWNoaW5lTmFtZSxcbiAgICAgIG1ham9yVmVyc2lvbjogdmVyc2lvblNwbGl0WzBdLFxuICAgICAgbWlub3JWZXJzaW9uOiB2ZXJzaW9uU3BsaXRbMV1cbiAgICB9O1xuICB9XG5cbiAgaWYgKCRhdHRhY2hUbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgJGF0dGFjaFRvLnRvZ2dsZUNsYXNzKCdoNXAtc3RhbmRhbG9uZScsIHN0YW5kYWxvbmUpO1xuICAgIGluc3RhbmNlLmF0dGFjaCgkYXR0YWNoVG8pO1xuICAgIEg1UC50cmlnZ2VyKGluc3RhbmNlLCAnZG9tQ2hhbmdlZCcsIHtcbiAgICAgICckdGFyZ2V0JzogJGF0dGFjaFRvLFxuICAgICAgJ2xpYnJhcnknOiBtYWNoaW5lTmFtZSxcbiAgICAgICdrZXknOiAnbmV3TGlicmFyeSdcbiAgICB9LCB7J2J1YmJsZXMnOiB0cnVlLCAnZXh0ZXJuYWwnOiB0cnVlfSk7XG5cbiAgICBpZiAoc2tpcFJlc2l6ZSA9PT0gdW5kZWZpbmVkIHx8ICFza2lwUmVzaXplKSB7XG4gICAgICAvLyBSZXNpemUgY29udGVudC5cbiAgICAgIEg1UC50cmlnZ2VyKGluc3RhbmNlLCAncmVzaXplJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbnN0YW5jZTtcbn07XG5cbi8qKlxuICogVXNlZCB0byBwcmludCB1c2VmdWwgZXJyb3IgbWVzc2FnZXMuICh0byBKYXZhU2NyaXB0IGVycm9yIGNvbnNvbGUpXG4gKlxuICogQHBhcmFtIHsqfSBlcnIgRXJyb3IgdG8gcHJpbnQuXG4gKi9cbkg1UC5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgaWYgKHdpbmRvdy5jb25zb2xlICE9PSB1bmRlZmluZWQgJiYgY29uc29sZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIuc3RhY2sgPyBlcnIuc3RhY2sgOiBlcnIpO1xuICB9XG59O1xuXG4vKipcbiAqIFRyYW5zbGF0ZSB0ZXh0IHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogICBUcmFuc2xhdGlvbiBpZGVudGlmaWVyLCBtYXkgb25seSBjb250YWluIGEtekEtWjAtOS4gTm8gc3BhY2VzIG9yIHNwZWNpYWwgY2hhcnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3ZhcnNdXG4gKiAgIERhdGEgZm9yIHBsYWNlaG9sZGVycy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbnNdXG4gKiAgIFRyYW5zbGF0aW9uIG5hbWVzcGFjZS4gRGVmYXVsdHMgdG8gSDVQLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgVHJhbnNsYXRlZCB0ZXh0XG4gKi9cbkg1UC50ID0gZnVuY3Rpb24gKGtleSwgdmFycywgbnMpIHtcbiAgaWYgKG5zID09PSB1bmRlZmluZWQpIHtcbiAgICBucyA9ICdINVAnO1xuICB9XG5cbiAgaWYgKEg1UEludGVncmF0aW9uLmwxMG5bbnNdID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ1tNaXNzaW5nIHRyYW5zbGF0aW9uIG5hbWVzcGFjZSBcIicgKyBucyArICdcIl0nO1xuICB9XG5cbiAgaWYgKEg1UEludGVncmF0aW9uLmwxMG5bbnNdW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnW01pc3NpbmcgdHJhbnNsYXRpb24gXCInICsga2V5ICsgJ1wiIGluIFwiJyArIG5zICsgJ1wiXSc7XG4gIH1cblxuICB2YXIgdHJhbnNsYXRpb24gPSBINVBJbnRlZ3JhdGlvbi5sMTBuW25zXVtrZXldO1xuXG4gIGlmICh2YXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBSZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggdmFyaWFibGVzLlxuICAgIGZvciAodmFyIHBsYWNlaG9sZGVyIGluIHZhcnMpIHtcbiAgICAgIHRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb24ucmVwbGFjZShwbGFjZWhvbGRlciwgdmFyc1twbGFjZWhvbGRlcl0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cmFuc2xhdGlvbjtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBwb3B1cCBkaWFsb2cgb3ZlciB0aGUgSDVQIGNvbnRlbnQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogICBVc2VkIGZvciBodG1sIGNsYXNzLlxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG4gKiAgIFVzZWQgZm9yIGhlYWRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiAgIERpc3BsYXllZCBpbnNpZGUgdGhlIGRpYWxvZy5cbiAqIEBwYXJhbSB7SDVQLmpRdWVyeX0gJGVsZW1lbnRcbiAqICAgV2hpY2ggRE9NIGVsZW1lbnQgdGhlIGRpYWxvZyBzaG91bGQgYmUgaW5zZXJ0ZWQgYWZ0ZXIuXG4gKi9cbkg1UC5EaWFsb2cgPSBmdW5jdGlvbiAobmFtZSwgdGl0bGUsIGNvbnRlbnQsICRlbGVtZW50KSB7XG4gIC8qKiBAYWxpYXMgSDVQLkRpYWxvZyMgKi9cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgJGRpYWxvZyA9IEg1UC5qUXVlcnkoJzxkaXYgY2xhc3M9XCJoNXAtcG9wdXAtZGlhbG9nIGg1cC0nICsgbmFtZSArICctZGlhbG9nXCIgcm9sZT1cImRpYWxvZ1wiIHRhYmluZGV4PVwiLTFcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImg1cC1pbm5lclwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4nICsgdGl0bGUgKyAnPC9oMj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaDVwLXNjcm9sbC1jb250ZW50XCI+JyArIGNvbnRlbnQgKyAnPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImg1cC1jbG9zZVwiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsPVwiJyArIEg1UC50KCdjbG9zZScpICsgJ1wiIHRpdGxlPVwiJyArIEg1UC50KCdjbG9zZScpICsgJ1wiPjwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PicpXG4gICAgLmluc2VydEFmdGVyKCRlbGVtZW50KVxuICAgIC5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUgJiYgZS5vcmlnaW5hbEV2ZW50ICYmIGUub3JpZ2luYWxFdmVudC5wcmV2ZW50Q2xvc2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuY2xvc2UoKTtcbiAgICB9KVxuICAgIC5jaGlsZHJlbignLmg1cC1pbm5lcicpXG4gICAgICAuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5vcmlnaW5hbEV2ZW50LnByZXZlbnRDbG9zaW5nID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICAuZmluZCgnLmg1cC1jbG9zZScpXG4gICAgICAgIC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5jbG9zZSgpO1xuICAgICAgICB9KVxuICAgICAgICAua2V5cHJlc3MoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMgfHwgZS53aGljaCA9PT0gMzIpIHtcbiAgICAgICAgICAgIHNlbGYuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5lbmQoKVxuICAgICAgLmZpbmQoJ2EnKVxuICAgICAgICAuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KVxuICAgICAgLmVuZCgpXG4gICAgLmVuZCgpO1xuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgZGlhbG9nLlxuICAgKi9cbiAgc2VsZi5vcGVuID0gZnVuY3Rpb24gKHNjcm9sbGJhcikge1xuICAgIGlmIChzY3JvbGxiYXIpIHtcbiAgICAgICRkaWFsb2cuY3NzKCdoZWlnaHQnLCAnMTAwJScpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICRkaWFsb2cuYWRkQ2xhc3MoJ2g1cC1vcGVuJyk7IC8vIEZhZGUgaW5cbiAgICAgIC8vIFRyaWdnZXJpbmcgYW4gZXZlbnQsIGluIGNhc2Ugc29tZXRoaW5nIGhhcyB0byBiZSBkb25lIGFmdGVyIGRpYWxvZyBoYXMgYmVlbiBvcGVuZWQuXG4gICAgICBINVAualF1ZXJ5KHNlbGYpLnRyaWdnZXIoJ2RpYWxvZy1vcGVuZWQnLCBbJGRpYWxvZ10pO1xuICAgICAgJGRpYWxvZy5mb2N1cygpO1xuICAgIH0sIDEpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGRpYWxvZy5cbiAgICovXG4gIHNlbGYuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGRpYWxvZy5yZW1vdmVDbGFzcygnaDVwLW9wZW4nKTsgLy8gRmFkZSBvdXRcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICRkaWFsb2cucmVtb3ZlKCk7XG4gICAgICBINVAualF1ZXJ5KHNlbGYpLnRyaWdnZXIoJ2RpYWxvZy1jbG9zZWQnLCBbJGRpYWxvZ10pO1xuICAgICAgJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICRlbGVtZW50LmZvY3VzKCk7XG4gICAgfSwgMjAwKTtcbiAgfTtcbn07XG5cbi8qKlxuICogR2F0aGVyIGNvcHlyaWdodCBpbmZvcm1hdGlvbiBmb3IgdGhlIGdpdmVuIGNvbnRlbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlXG4gKiAgIEg1UCBpbnN0YW5jZSB0byBnZXQgY29weXJpZ2h0IGluZm9ybWF0aW9uIGZvci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbWV0ZXJzXG4gKiAgIFBhcmFtZXRlcnMgb2YgdGhlIGNvbnRlbnQgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gY29udGVudElkXG4gKiAgIElkZW50aWZpZXMgdGhlIEg1UCBjb250ZW50XG4gKiBAcGFyYW0ge09iamVjdH0gbWV0YWRhdGFcbiAqICAgTWV0YWRhdGEgb2YgdGhlIGNvbnRlbnQgaW5zdGFuY2UuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBDb3B5cmlnaHQgaW5mb3JtYXRpb24uXG4gKi9cbkg1UC5nZXRDb3B5cmlnaHRzID0gZnVuY3Rpb24gKGluc3RhbmNlLCBwYXJhbWV0ZXJzLCBjb250ZW50SWQsIG1ldGFkYXRhKSB7XG4gIHZhciBjb3B5cmlnaHRzO1xuXG4gIGlmIChpbnN0YW5jZS5nZXRDb3B5cmlnaHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB0cnkge1xuICAgICAgLy8gVXNlIHRoZSBpbnN0YW5jZSdzIG93biBjb3B5cmlnaHQgZ2VuZXJhdG9yXG4gICAgICBjb3B5cmlnaHRzID0gaW5zdGFuY2UuZ2V0Q29weXJpZ2h0cygpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBGYWlsZWQsIHByZXZlbnQgY3Jhc2hpbmcgcGFnZS5cbiAgICB9XG4gIH1cblxuICBpZiAoY29weXJpZ2h0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gQ3JlYXRlIGEgZ2VuZXJpYyBmbGF0IGNvcHlyaWdodCBsaXN0XG4gICAgY29weXJpZ2h0cyA9IG5ldyBINVAuQ29udGVudENvcHlyaWdodHMoKTtcbiAgICBINVAuZmluZENvcHlyaWdodHMoY29weXJpZ2h0cywgcGFyYW1ldGVycywgY29udGVudElkKTtcbiAgfVxuXG4gIHZhciBtZXRhZGF0YUNvcHlyaWdodHMgPSBINVAuYnVpbGRNZXRhZGF0YUNvcHlyaWdodHMobWV0YWRhdGEsIGluc3RhbmNlLmxpYnJhcnlJbmZvLm1hY2hpbmVOYW1lKTtcbiAgaWYgKG1ldGFkYXRhQ29weXJpZ2h0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29weXJpZ2h0cy5hZGRNZWRpYUluRnJvbnQobWV0YWRhdGFDb3B5cmlnaHRzKTtcbiAgfVxuXG4gIGlmIChjb3B5cmlnaHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBDb252ZXJ0IHRvIHN0cmluZ1xuICAgIGNvcHlyaWdodHMgPSBjb3B5cmlnaHRzLnRvU3RyaW5nKCk7XG4gIH1cbiAgcmV0dXJuIGNvcHlyaWdodHM7XG59O1xuXG4vKipcbiAqIEdhdGhlciBhIGZsYXQgbGlzdCBvZiBjb3B5cmlnaHQgaW5mb3JtYXRpb24gZnJvbSB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cbiAqXG4gKiBAcGFyYW0ge0g1UC5Db250ZW50Q29weXJpZ2h0c30gaW5mb1xuICogICBVc2VkIHRvIGNvbGxlY3QgYWxsIGluZm9ybWF0aW9uIGluLlxuICogQHBhcmFtIHsoT2JqZWN0fEFycmF5KX0gcGFyYW1ldGVyc1xuICogICBUbyBzZWFyY2ggZm9yIGZpbGUgb2JqZWN0cyBpbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb250ZW50SWRcbiAqICAgVXNlZCB0byBpbnNlcnQgdGh1bWJuYWlscyBmb3IgaW1hZ2VzLlxuICogQHBhcmFtIHtPYmplY3R9IGV4dHJhcyAtIEV4dHJhcy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBleHRyYXMubWV0YWRhdGEgLSBNZXRhZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IGV4dHJhcy5tYWNoaW5lTmFtZSAtIExpYnJhcnkgbmFtZSBvZiBzb21lIGtpbmQuXG4gKiAgIE1ldGFkYXRhIG9mIHRoZSBjb250ZW50IGluc3RhbmNlLlxuICovXG5INVAuZmluZENvcHlyaWdodHMgPSBmdW5jdGlvbiAoaW5mbywgcGFyYW1ldGVycywgY29udGVudElkLCBleHRyYXMpIHtcbiAgLy8gSWYgZXh0cmFzIGFyZVxuICBpZiAoZXh0cmFzKSB7XG4gICAgZXh0cmFzLnBhcmFtcyA9IHBhcmFtZXRlcnM7XG4gICAgYnVpbGRGcm9tTWV0YWRhdGEoZXh0cmFzLCBleHRyYXMubWFjaGluZU5hbWUsIGNvbnRlbnRJZCk7XG4gIH1cblxuICB2YXIgbGFzdENvbnRlbnRUeXBlTmFtZTtcbiAgLy8gQ3ljbGUgdGhyb3VnaCBwYXJhbWV0ZXJzXG4gIGZvciAodmFyIGZpZWxkIGluIHBhcmFtZXRlcnMpIHtcbiAgICBpZiAoIXBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoZmllbGQpKSB7XG4gICAgICBjb250aW51ZTsgLy8gRG8gbm90IGNoZWNrXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgVGhpcyBoYWNrIHNob3VsZCBiZSByZW1vdmVkIGFmdGVyIDIwMTctMTEtMDFcbiAgICAgKiBUaGUgY29kZSB0aGF0IHdhcyB1c2luZyB0aGlzIHdhcyByZW1vdmVkIGJ5IEhGUC01NzRcbiAgICAgKiBUaGlzIG5vdGUgd2FzIHNlZW4gb24gMjAxOC0wNC0wNCwgYW5kIGNvbnN1bHRhdGlvbiB3aXRoXG4gICAgICogaGlnaGVyIGF1dGhvcml0aWVzIGxlYWQgdG8ga2VlcGluZyB0aGUgY29kZSBmb3Igbm93IDstKVxuICAgICAqL1xuICAgIGlmIChmaWVsZCA9PT0gJ292ZXJyaWRlU2V0dGluZ3MnKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgc2VtYW50aWNzIGZpZWxkICdvdmVycmlkZVNldHRpbmdzJyBpcyBERVBSRUNBVEVEIGFuZCBzaG91bGQgbm90IGJlIHVzZWQuXCIpO1xuICAgICAgY29uc29sZS53YXJuKHBhcmFtZXRlcnMpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gcGFyYW1ldGVyc1tmaWVsZF07XG5cbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGlicmFyeSAmJiB0eXBlb2YgdmFsdWUubGlicmFyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxhc3RDb250ZW50VHlwZU5hbWUgPSB2YWx1ZS5saWJyYXJ5LnNwbGl0KCcgJylbMF07XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLmxpYnJhcnkgJiYgdHlwZW9mIHZhbHVlLmxpYnJhcnkgPT09ICdvYmplY3QnKSB7XG4gICAgICBsYXN0Q29udGVudFR5cGVOYW1lID0gKHZhbHVlLmxpYnJhcnkubGlicmFyeSAmJiB0eXBlb2YgdmFsdWUubGlicmFyeS5saWJyYXJ5ID09PSAnc3RyaW5nJykgPyB2YWx1ZS5saWJyYXJ5LmxpYnJhcnkuc3BsaXQoJyAnKVswXSA6IGxhc3RDb250ZW50VHlwZU5hbWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIC8vIEN5Y2xlIHRocm91Z2ggYXJyYXlcbiAgICAgIEg1UC5maW5kQ29weXJpZ2h0cyhpbmZvLCB2YWx1ZSwgY29udGVudElkKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgIGJ1aWxkRnJvbU1ldGFkYXRhKHZhbHVlLCBsYXN0Q29udGVudFR5cGVOYW1lLCBjb250ZW50SWQpO1xuXG4gICAgICAvLyBDaGVjayBpZiBvYmplY3QgaXMgYSBmaWxlIHdpdGggY29weXJpZ2h0cyAob2xkIGNvcmUpXG4gICAgICBpZiAodmFsdWUuY29weXJpZ2h0ID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICB2YWx1ZS5jb3B5cmlnaHQubGljZW5zZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgdmFsdWUucGF0aCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgdmFsdWUubWltZSA9PT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgLy8gTm9wZSwgY3ljbGUgdGhyb3VnaHQgb2JqZWN0XG4gICAgICAgIEg1UC5maW5kQ29weXJpZ2h0cyhpbmZvLCB2YWx1ZSwgY29udGVudElkKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBGb3VuZCBmaWxlLCBhZGQgY29weXJpZ2h0c1xuICAgICAgICB2YXIgY29weXJpZ2h0cyA9IG5ldyBINVAuTWVkaWFDb3B5cmlnaHQodmFsdWUuY29weXJpZ2h0KTtcbiAgICAgICAgaWYgKHZhbHVlLndpZHRoICE9PSB1bmRlZmluZWQgJiYgdmFsdWUuaGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb3B5cmlnaHRzLnNldFRodW1ibmFpbChuZXcgSDVQLlRodW1ibmFpbChINVAuZ2V0UGF0aCh2YWx1ZS5wYXRoLCBjb250ZW50SWQpLCB2YWx1ZS53aWR0aCwgdmFsdWUuaGVpZ2h0KSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5hZGRNZWRpYShjb3B5cmlnaHRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEZyb21NZXRhZGF0YShkYXRhLCBuYW1lLCBjb250ZW50SWQpIHtcbiAgICBpZiAoZGF0YS5tZXRhZGF0YSkge1xuICAgICAgY29uc3QgbWV0YWRhdGFDb3B5cmlnaHRzID0gSDVQLmJ1aWxkTWV0YWRhdGFDb3B5cmlnaHRzKGRhdGEubWV0YWRhdGEsIG5hbWUpO1xuICAgICAgaWYgKG1ldGFkYXRhQ29weXJpZ2h0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChkYXRhLnBhcmFtcyAmJiBkYXRhLnBhcmFtcy5jb250ZW50TmFtZSA9PT0gJ0ltYWdlJyAmJiBkYXRhLnBhcmFtcy5maWxlKSB7XG4gICAgICAgICAgY29uc3QgcGF0aCA9IGRhdGEucGFyYW1zLmZpbGUucGF0aDtcbiAgICAgICAgICBjb25zdCB3aWR0aCA9IGRhdGEucGFyYW1zLmZpbGUud2lkdGg7XG4gICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZGF0YS5wYXJhbXMuZmlsZS5oZWlnaHQ7XG4gICAgICAgICAgbWV0YWRhdGFDb3B5cmlnaHRzLnNldFRodW1ibmFpbChuZXcgSDVQLlRodW1ibmFpbChINVAuZ2V0UGF0aChwYXRoLCBjb250ZW50SWQpLCB3aWR0aCwgaGVpZ2h0KSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5hZGRNZWRpYShtZXRhZGF0YUNvcHlyaWdodHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuSDVQLmJ1aWxkTWV0YWRhdGFDb3B5cmlnaHRzID0gZnVuY3Rpb24gKG1ldGFkYXRhKSB7XG4gIGlmIChtZXRhZGF0YSAmJiBtZXRhZGF0YS5saWNlbnNlICE9PSB1bmRlZmluZWQgJiYgbWV0YWRhdGEubGljZW5zZSAhPT0gJ1UnKSB7XG4gICAgdmFyIGRhdGFzZXQgPSB7XG4gICAgICBjb250ZW50VHlwZTogbWV0YWRhdGEuY29udGVudFR5cGUsXG4gICAgICB0aXRsZTogbWV0YWRhdGEudGl0bGUsXG4gICAgICBhdXRob3I6IChtZXRhZGF0YS5hdXRob3JzICYmIG1ldGFkYXRhLmF1dGhvcnMubGVuZ3RoID4gMCkgPyBtZXRhZGF0YS5hdXRob3JzLm1hcChmdW5jdGlvbiAoYXV0aG9yKSB7XG4gICAgICAgIHJldHVybiAoYXV0aG9yLnJvbGUpID8gYXV0aG9yLm5hbWUgKyAnICgnICsgYXV0aG9yLnJvbGUgKyAnKScgOiBhdXRob3IubmFtZTtcbiAgICAgIH0pLmpvaW4oJywgJykgOiB1bmRlZmluZWQsXG4gICAgICBzb3VyY2U6IG1ldGFkYXRhLnNvdXJjZSxcbiAgICAgIHllYXI6IChtZXRhZGF0YS55ZWFyRnJvbSkgPyAobWV0YWRhdGEueWVhckZyb20gKyAoKG1ldGFkYXRhLnllYXJUbykgPyAnLScgKyBtZXRhZGF0YS55ZWFyVG86ICcnKSkgOiB1bmRlZmluZWQsXG4gICAgICBsaWNlbnNlOiBtZXRhZGF0YS5saWNlbnNlLFxuICAgICAgdmVyc2lvbjogbWV0YWRhdGEubGljZW5zZVZlcnNpb24sXG4gICAgICBsaWNlbnNlRXh0cmFzOiBtZXRhZGF0YS5saWNlbnNlRXh0cmFzLFxuICAgICAgY2hhbmdlczogKG1ldGFkYXRhLmNoYW5nZXMgJiYgbWV0YWRhdGEuY2hhbmdlcy5sZW5ndGggPiAwKSA/IG1ldGFkYXRhLmNoYW5nZXMubWFwKGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIGNoYW5nZS5sb2cgKyAoY2hhbmdlLmF1dGhvciA/ICcsICcgKyBjaGFuZ2UuYXV0aG9yIDogJycpICsgKGNoYW5nZS5kYXRlID8gJywgJyArIGNoYW5nZS5kYXRlIDogJycpO1xuICAgICAgfSkuam9pbignIC8gJykgOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBINVAuTWVkaWFDb3B5cmlnaHQoZGF0YXNldCk7XG4gIH1cbn07XG5cbi8qKlxuICogRGlzcGxheSBhIGRpYWxvZyBjb250YWluaW5nIHRoZSBkb3dubG9hZCBidXR0b24gYW5kIGNvcHkgYnV0dG9uLlxuICpcbiAqIEBwYXJhbSB7SDVQLmpRdWVyeX0gJGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZW50RGF0YVxuICogQHBhcmFtIHtPYmplY3R9IGxpYnJhcnlcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZVxuICogQHBhcmFtIHtudW1iZXJ9IGNvbnRlbnRJZFxuICovXG5INVAub3BlblJldXNlRGlhbG9nID0gZnVuY3Rpb24gKCRlbGVtZW50LCBjb250ZW50RGF0YSwgbGlicmFyeSwgaW5zdGFuY2UsIGNvbnRlbnRJZCkge1xuICBsZXQgaHRtbCA9ICcnO1xuICBpZiAoY29udGVudERhdGEuZGlzcGxheU9wdGlvbnMuZXhwb3J0KSB7XG4gICAgaHRtbCArPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJoNXAtYmlnLWJ1dHRvbiBoNXAtZG93bmxvYWQtYnV0dG9uXCI+PGRpdiBjbGFzcz1cImg1cC1idXR0b24tdGl0bGVcIj5Eb3dubG9hZCBhcyBhbiAuaDVwIGZpbGU8L2Rpdj48ZGl2IGNsYXNzPVwiaDVwLWJ1dHRvbi1kZXNjcmlwdGlvblwiPi5oNXAgZmlsZXMgbWF5IGJlIHVwbG9hZGVkIHRvIGFueSB3ZWItc2l0ZSB3aGVyZSBINVAgY29udGVudCBtYXkgYmUgY3JlYXRlZC48L2Rpdj48L2J1dHRvbj4nO1xuICB9XG4gIGlmIChjb250ZW50RGF0YS5kaXNwbGF5T3B0aW9ucy5leHBvcnQgJiYgY29udGVudERhdGEuZGlzcGxheU9wdGlvbnMuY29weSkge1xuICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJoNXAtaG9yaXpvbnRhbC1saW5lLXRleHRcIj48c3Bhbj5vcjwvc3Bhbj48L2Rpdj4nO1xuICB9XG4gIGlmIChjb250ZW50RGF0YS5kaXNwbGF5T3B0aW9ucy5jb3B5KSB7XG4gICAgaHRtbCArPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJoNXAtYmlnLWJ1dHRvbiBoNXAtY29weS1idXR0b25cIj48ZGl2IGNsYXNzPVwiaDVwLWJ1dHRvbi10aXRsZVwiPkNvcHkgY29udGVudDwvZGl2PjxkaXYgY2xhc3M9XCJoNXAtYnV0dG9uLWRlc2NyaXB0aW9uXCI+Q29waWVkIGNvbnRlbnQgbWF5IGJlIHBhc3RlZCBhbnl3aGVyZSB0aGlzIGNvbnRlbnQgdHlwZSBpcyBzdXBwb3J0ZWQgb24gdGhpcyB3ZWJzaXRlLjwvZGl2PjwvYnV0dG9uPic7XG4gIH1cblxuICBjb25zdCBkaWFsb2cgPSBuZXcgSDVQLkRpYWxvZygncmV1c2UnLCBINVAudCgncmV1c2VDb250ZW50JyksIGh0bWwsICRlbGVtZW50KTtcblxuICAvLyBTZWxlY3RpbmcgZW1iZWQgY29kZSB3aGVuIGRpYWxvZyBpcyBvcGVuZWRcbiAgSDVQLmpRdWVyeShkaWFsb2cpLm9uKCdkaWFsb2ctb3BlbmVkJywgZnVuY3Rpb24gKGUsICRkaWFsb2cpIHtcbiAgICBINVAualF1ZXJ5KCc8YSBocmVmPVwiaHR0cHM6Ly9oNXAub3JnL25vZGUvNDQyMjI1XCIgdGFyZ2V0PVwiX2JsYW5rXCI+TW9yZSBJbmZvPC9hPicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pLmFwcGVuZFRvKCRkaWFsb2cuZmluZCgnaDInKSk7XG4gICAgJGRpYWxvZy5maW5kKCcuaDVwLWRvd25sb2FkLWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29udGVudERhdGEuZXhwb3J0VXJsO1xuICAgICAgaW5zdGFuY2UudHJpZ2dlclhBUEkoJ2Rvd25sb2FkZWQnKTtcbiAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgIH0pO1xuICAgICRkaWFsb2cuZmluZCgnLmg1cC1jb3B5LWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSDVQLkNsaXBib2FyZEl0ZW0obGlicmFyeSk7XG4gICAgICBpdGVtLmNvbnRlbnRJZCA9IGNvbnRlbnRJZDtcbiAgICAgIEg1UC5zZXRDbGlwYm9hcmQoaXRlbSk7XG4gICAgICBpbnN0YW5jZS50cmlnZ2VyWEFQSSgnY29waWVkJyk7XG4gICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgIEg1UC5hdHRhY2hUb2FzdFRvKFxuICAgICAgICBINVAualF1ZXJ5KCcuaDVwLWNvbnRlbnQ6Zmlyc3QnKVswXSxcbiAgICAgICAgSDVQLnQoJ2NvbnRlbnRDb3BpZWQnKSxcbiAgICAgICAge1xuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyZWQnLFxuICAgICAgICAgICAgdmVydGljYWw6ICdjZW50ZXJlZCcsXG4gICAgICAgICAgICBub092ZXJmbG93WDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBINVAudHJpZ2dlcihpbnN0YW5jZSwgJ3Jlc2l6ZScpO1xuICB9KS5vbignZGlhbG9nLWNsb3NlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBINVAudHJpZ2dlcihpbnN0YW5jZSwgJ3Jlc2l6ZScpO1xuICB9KTtcblxuICBkaWFsb2cub3BlbigpO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgZGlhbG9nIGNvbnRhaW5pbmcgdGhlIGVtYmVkIGNvZGUuXG4gKlxuICogQHBhcmFtIHtINVAualF1ZXJ5fSAkZWxlbWVudFxuICogICBFbGVtZW50IHRvIGluc2VydCBkaWFsb2cgYWZ0ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZW1iZWRDb2RlXG4gKiAgIFRoZSBlbWJlZCBjb2RlLlxuICogQHBhcmFtIHtzdHJpbmd9IHJlc2l6ZUNvZGVcbiAqICAgVGhlIGFkdmFuY2VkIHJlc2l6ZSBjb2RlXG4gKiBAcGFyYW0ge09iamVjdH0gc2l6ZVxuICogICBUaGUgY29udGVudCdzIHNpemUuXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZS53aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IHNpemUuaGVpZ2h0XG4gKi9cbkg1UC5vcGVuRW1iZWREaWFsb2cgPSBmdW5jdGlvbiAoJGVsZW1lbnQsIGVtYmVkQ29kZSwgcmVzaXplQ29kZSwgc2l6ZSwgaW5zdGFuY2UpIHtcbiAgdmFyIGZ1bGxFbWJlZENvZGUgPSBlbWJlZENvZGUgKyByZXNpemVDb2RlO1xuICB2YXIgZGlhbG9nID0gbmV3IEg1UC5EaWFsb2coJ2VtYmVkJywgSDVQLnQoJ2VtYmVkJyksICc8dGV4dGFyZWEgY2xhc3M9XCJoNXAtZW1iZWQtY29kZS1jb250YWluZXJcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+PC90ZXh0YXJlYT4nICsgSDVQLnQoJ3NpemUnKSArICc6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJyArIE1hdGguY2VpbChzaXplLndpZHRoKSArICdcIiBjbGFzcz1cImg1cC1lbWJlZC1zaXplXCIvPiDDlyA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIicgKyBNYXRoLmNlaWwoc2l6ZS5oZWlnaHQpICsgJ1wiIGNsYXNzPVwiaDVwLWVtYmVkLXNpemVcIi8+IHB4PGJyLz48ZGl2IHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImg1cC1leHBhbmRlclwiPicgKyBINVAudCgnc2hvd0FkdmFuY2VkJykgKyAnPC9kaXY+PGRpdiBjbGFzcz1cImg1cC1leHBhbmRlci1jb250ZW50XCI+PHA+JyArIEg1UC50KCdhZHZhbmNlZEhlbHAnKSArICc8L3A+PHRleHRhcmVhIGNsYXNzPVwiaDVwLWVtYmVkLWNvZGUtY29udGFpbmVyXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPicgKyByZXNpemVDb2RlICsgJzwvdGV4dGFyZWE+PC9kaXY+JywgJGVsZW1lbnQpO1xuXG4gIC8vIFNlbGVjdGluZyBlbWJlZCBjb2RlIHdoZW4gZGlhbG9nIGlzIG9wZW5lZFxuICBINVAualF1ZXJ5KGRpYWxvZykub24oJ2RpYWxvZy1vcGVuZWQnLCBmdW5jdGlvbiAoZXZlbnQsICRkaWFsb2cpIHtcbiAgICB2YXIgJGlubmVyID0gJGRpYWxvZy5maW5kKCcuaDVwLWlubmVyJyk7XG4gICAgdmFyICRzY3JvbGwgPSAkaW5uZXIuZmluZCgnLmg1cC1zY3JvbGwtY29udGVudCcpO1xuICAgIHZhciBkaWZmID0gJHNjcm9sbC5vdXRlckhlaWdodCgpIC0gJHNjcm9sbC5pbm5lckhlaWdodCgpO1xuICAgIHZhciBwb3NpdGlvbklubmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgSDVQLnRyaWdnZXIoaW5zdGFuY2UsICdyZXNpemUnKTtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGNoYW5naW5nIG9mIHdpZHRoL2hlaWdodFxuICAgIHZhciAkdyA9ICRkaWFsb2cuZmluZCgnLmg1cC1lbWJlZC1zaXplOmVxKDApJyk7XG4gICAgdmFyICRoID0gJGRpYWxvZy5maW5kKCcuaDVwLWVtYmVkLXNpemU6ZXEoMSknKTtcbiAgICB2YXIgZ2V0TnVtID0gZnVuY3Rpb24gKCRlLCBkKSB7XG4gICAgICB2YXIgbnVtID0gcGFyc2VGbG9hdCgkZS52YWwoKSk7XG4gICAgICBpZiAoaXNOYU4obnVtKSkge1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtKTtcbiAgICB9O1xuICAgIHZhciB1cGRhdGVFbWJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICRkaWFsb2cuZmluZCgnLmg1cC1lbWJlZC1jb2RlLWNvbnRhaW5lcjpmaXJzdCcpLnZhbChmdWxsRW1iZWRDb2RlLnJlcGxhY2UoJzp3JywgZ2V0TnVtKCR3LCBzaXplLndpZHRoKSkucmVwbGFjZSgnOmgnLCBnZXROdW0oJGgsIHNpemUuaGVpZ2h0KSkpO1xuICAgIH07XG5cbiAgICAkdy5jaGFuZ2UodXBkYXRlRW1iZWQpO1xuICAgICRoLmNoYW5nZSh1cGRhdGVFbWJlZCk7XG4gICAgdXBkYXRlRW1iZWQoKTtcblxuICAgIC8vIFNlbGVjdCB0ZXh0IGFuZCBleHBhbmQgdGV4dGFyZWFzXG4gICAgJGRpYWxvZy5maW5kKCcuaDVwLWVtYmVkLWNvZGUtY29udGFpbmVyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBINVAualF1ZXJ5KHRoaXMpLmNzcygnaGVpZ2h0JywgdGhpcy5zY3JvbGxIZWlnaHQgKyAncHgnKS5mb2N1cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIEg1UC5qUXVlcnkodGhpcykuc2VsZWN0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAkZGlhbG9nLmZpbmQoJy5oNXAtZW1iZWQtY29kZS1jb250YWluZXInKS5lcSgwKS5zZWxlY3QoKTtcbiAgICBwb3NpdGlvbklubmVyKCk7XG5cbiAgICAvLyBFeHBhbmQgYWR2YW5jZWQgZW1iZWRcbiAgICB2YXIgZXhwYW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRleHBhbmRlciA9IEg1UC5qUXVlcnkodGhpcyk7XG4gICAgICB2YXIgJGNvbnRlbnQgPSAkZXhwYW5kZXIubmV4dCgpO1xuICAgICAgaWYgKCRjb250ZW50LmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICRleHBhbmRlci5yZW1vdmVDbGFzcygnaDVwLW9wZW4nKS50ZXh0KEg1UC50KCdzaG93QWR2YW5jZWQnKSkuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgICRjb250ZW50LmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAkZXhwYW5kZXIuYWRkQ2xhc3MoJ2g1cC1vcGVuJykudGV4dChINVAudCgnaGlkZUFkdmFuY2VkJykpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgJGNvbnRlbnQuc2hvdygpO1xuICAgICAgfVxuICAgICAgJGRpYWxvZy5maW5kKCcuaDVwLWVtYmVkLWNvZGUtY29udGFpbmVyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIEg1UC5qUXVlcnkodGhpcykuY3NzKCdoZWlnaHQnLCB0aGlzLnNjcm9sbEhlaWdodCArICdweCcpO1xuICAgICAgfSk7XG4gICAgICBwb3NpdGlvbklubmVyKCk7XG4gICAgfTtcbiAgICAkZGlhbG9nLmZpbmQoJy5oNXAtZXhwYW5kZXInKS5jbGljayhleHBhbmQpLmtleXByZXNzKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgIGV4cGFuZC5hcHBseSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9KS5vbignZGlhbG9nLWNsb3NlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBINVAudHJpZ2dlcihpbnN0YW5jZSwgJ3Jlc2l6ZScpO1xuICB9KTtcblxuICBkaWFsb2cub3BlbigpO1xufTtcblxuLyoqXG4gKiBTaG93IGEgdG9hc3QgbWVzc2FnZS5cbiAqXG4gKiBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgY291bGQgYmUgZG9tIGVsZW1lbnRzIHRoZSB0b2FzdCBzaG91bGQgYmUgYXR0YWNoZWQgdG8sXG4gKiBvciBlLmcuIHRoZSBkb2N1bWVudCBib2R5IGZvciBnZW5lcmFsIHRvYXN0IG1lc3NhZ2VzLlxuICpcbiAqIEBwYXJhbSB7RE9NfSBlbGVtZW50IFJlZmVyZW5jZSBlbGVtZW50IHRvIHNob3cgdG9hc3QgbWVzc2FnZSBmb3IuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBNZXNzYWdlIHRvIHNob3cuXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbmZpZ10gQ29uZmlndXJhdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29uZmlnLnN0eWxlPWg1cC10b2FzdF0gU3R5bGUgbmFtZSBmb3IgdGhlIHRvb2x0aXAuXG4gKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5kdXJhdGlvbj0zMDAwXSBUb2FzdCBtZXNzYWdlIGxlbmd0aCBpbiBtcy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29uZmlnLnBvc2l0aW9uXSBSZWxhdGl2ZSBwb3NpdGlvbmluZyBvZiB0aGUgdG9hc3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbmZpZy5wb3NpdGlvbi5ob3Jpem9udGFsPWNlbnRlcmVkXSBbYmVmb3JlfGxlZnR8Y2VudGVyZWR8cmlnaHR8YWZ0ZXJdLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb25maWcucG9zaXRpb24udmVydGljYWw9YmVsb3ddIFthYm92ZXx0b3B8Y2VudGVyZWR8Ym90dG9tfGJlbG93XS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLnBvc2l0aW9uLm9mZnNldEhvcml6b250YWw9MF0gRXh0cmEgaG9yaXpvbnRhbCBvZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5wb3NpdGlvbi5vZmZzZXRWZXJ0aWNhbD0wXSBFeHRyYSB2ZXRpY2FsIG9mZnNldC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NvbmZpZy5wb3NpdGlvbi5ub092ZXJmbG93TGVmdD1mYWxzZV0gVHJ1ZSB0byBwcmV2ZW50IG92ZXJmbG93IGxlZnQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjb25maWcucG9zaXRpb24ubm9PdmVyZmxvd1JpZ2h0PWZhbHNlXSBUcnVlIHRvIHByZXZlbnQgb3ZlcmZsb3cgcmlnaHQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjb25maWcucG9zaXRpb24ubm9PdmVyZmxvd1RvcD1mYWxzZV0gVHJ1ZSB0byBwcmV2ZW50IG92ZXJmbG93IHRvcC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NvbmZpZy5wb3NpdGlvbi5ub092ZXJmbG93Qm90dG9tPWZhbHNlXSBUcnVlIHRvIHByZXZlbnQgb3ZlcmZsb3cgYm90dG9tLlxuICogQHBhcmFtIHtib29sZWFufSBbY29uZmlnLnBvc2l0aW9uLm5vT3ZlcmZsb3dYPWZhbHNlXSBUcnVlIHRvIHByZXZlbnQgb3ZlcmZsb3cgbGVmdCBhbmQgcmlnaHQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjb25maWcucG9zaXRpb24ubm9PdmVyZmxvd1k9ZmFsc2VdIFRydWUgdG8gcHJldmVudCBvdmVyZmxvdyB0b3AgYW5kIGJvdHRvbS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29uZmlnLnBvc2l0aW9uLm92ZXJmbG93UmVmZXJlbmNlPWRvY3VtZW50LmJvZHldIERPTSByZWZlcmVuY2UgZm9yIG92ZXJmbG93LlxuICovXG5INVAuYXR0YWNoVG9hc3RUbyA9IGZ1bmN0aW9uIChlbGVtZW50LCBtZXNzYWdlLCBjb25maWcpIHtcbiAgaWYgKGVsZW1lbnQgPT09IHVuZGVmaW5lZCB8fCBtZXNzYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBldmVudFBhdGggPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgdmFyIHBhdGggPSAoZXZ0LmNvbXBvc2VkUGF0aCAmJiBldnQuY29tcG9zZWRQYXRoKCkpIHx8IGV2dC5wYXRoO1xuICAgIHZhciB0YXJnZXQgPSBldnQudGFyZ2V0O1xuXG4gICAgaWYgKHBhdGggIT0gbnVsbCkge1xuICAgICAgLy8gU2FmYXJpIGRvZXNuJ3QgaW5jbHVkZSBXaW5kb3csIGJ1dCBpdCBzaG91bGQuXG4gICAgICByZXR1cm4gKHBhdGguaW5kZXhPZih3aW5kb3cpIDwgMCkgPyBwYXRoLmNvbmNhdCh3aW5kb3cpIDogcGF0aDtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0ID09PSB3aW5kb3cpIHtcbiAgICAgIHJldHVybiBbd2luZG93XTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYXJlbnRzKG5vZGUsIG1lbW8pIHtcbiAgICAgIG1lbW8gPSBtZW1vIHx8IFtdO1xuICAgICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cbiAgICAgIGlmICghcGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2V0UGFyZW50cyhwYXJlbnROb2RlLCBtZW1vLmNvbmNhdChwYXJlbnROb2RlKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFt0YXJnZXRdLmNvbmNhdChnZXRQYXJlbnRzKHRhcmdldCksIHdpbmRvdyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBjbGljayB3aGlsZSB0b2FzdCBpcyBzaG93aW5nLlxuICAgKi9cbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLypcbiAgICAgKiBBIGNvbW1vbiB1c2UgY2FzZSB3aWxsIGJlIHRvIGF0dGFjaCB0b2FzdHMgdG8gYnV0dG9ucyB0aGF0IGFyZSBjbGlja2VkLlxuICAgICAqIFRoZSBjbGljayB3b3VsZCByZW1vdmUgdGhlIHRvYXN0IG1lc3NhZ2UgaW5zdGFudGx5IHdpdGhvdXQgdGhpcyBjaGVjay5cbiAgICAgKiBDaGlsZHJlbiBvZiB0aGUgY2xpY2tlZCBlbGVtZW50IGFyZSBhbHNvIGlnbm9yZWQuXG4gICAgICovXG4gICAgdmFyIHBhdGggPSBldmVudFBhdGgoZXZlbnQpO1xuICAgIGlmIChwYXRoLmluZGV4T2YoZWxlbWVudCkgIT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgcmVtb3ZlVG9hc3QoKTtcbiAgfTtcblxuXG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgdG9hc3QgbWVzc2FnZS5cbiAgICovXG4gIGNvbnN0IHJlbW92ZVRvYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICBpZiAodG9hc3QucGFyZW50Tm9kZSkge1xuICAgICAgdG9hc3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b2FzdCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYWJzb2x1dGUgY29vcmRpbmF0ZXMgZm9yIHRoZSB0b2FzdC5cbiAgICpcbiAgICogQHBhcmFtIHtET019IGVsZW1lbnQgUmVmZXJlbmNlIGVsZW1lbnQgdG8gc2hvdyB0b2FzdCBtZXNzYWdlIGZvci5cbiAgICogQHBhcmFtIHtET019IHRvYXN0IFRvYXN0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbcG9zaXRpb249e31dIFJlbGF0aXZlIHBvc2l0aW9uaW5nIG9mIHRoZSB0b2FzdCBtZXNzYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Bvc2l0aW9uLmhvcml6b250YWw9Y2VudGVyZWRdIFtiZWZvcmV8bGVmdHxjZW50ZXJlZHxyaWdodHxhZnRlcl0uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcG9zaXRpb24udmVydGljYWw9YmVsb3ddIFthYm92ZXx0b3B8Y2VudGVyZWR8Ym90dG9tfGJlbG93XS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwb3NpdGlvbi5vZmZzZXRIb3Jpem9udGFsPTBdIEV4dHJhIGhvcml6b250YWwgb2Zmc2V0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3Bvc2l0aW9uLm9mZnNldFZlcnRpY2FsPTBdIEV4dHJhIHZldGljYWwgb2Zmc2V0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwb3NpdGlvbi5ub092ZXJmbG93TGVmdD1mYWxzZV0gVHJ1ZSB0byBwcmV2ZW50IG92ZXJmbG93IGxlZnQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Bvc2l0aW9uLm5vT3ZlcmZsb3dSaWdodD1mYWxzZV0gVHJ1ZSB0byBwcmV2ZW50IG92ZXJmbG93IHJpZ2h0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwb3NpdGlvbi5ub092ZXJmbG93VG9wPWZhbHNlXSBUcnVlIHRvIHByZXZlbnQgb3ZlcmZsb3cgdG9wLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwb3NpdGlvbi5ub092ZXJmbG93Qm90dG9tPWZhbHNlXSBUcnVlIHRvIHByZXZlbnQgb3ZlcmZsb3cgYm90dG9tLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwb3NpdGlvbi5ub092ZXJmbG93WD1mYWxzZV0gVHJ1ZSB0byBwcmV2ZW50IG92ZXJmbG93IGxlZnQgYW5kIHJpZ2h0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwb3NpdGlvbi5ub092ZXJmbG93WT1mYWxzZV0gVHJ1ZSB0byBwcmV2ZW50IG92ZXJmbG93IHRvcCBhbmQgYm90dG9tLlxuICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAqL1xuICBjb25zdCBnZXRUb2FzdENvb3JkaW5hdGVzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHRvYXN0LCBwb3NpdGlvbikge1xuICAgIHBvc2l0aW9uID0gcG9zaXRpb24gfHwge307XG4gICAgcG9zaXRpb24ub2Zmc2V0SG9yaXpvbnRhbCA9IHBvc2l0aW9uLm9mZnNldEhvcml6b250YWwgfHwgMDtcbiAgICBwb3NpdGlvbi5vZmZzZXRWZXJ0aWNhbCA9IHBvc2l0aW9uLm9mZnNldFZlcnRpY2FsIHx8IDA7XG5cbiAgICBjb25zdCB0b2FzdFJlY3QgPSB0b2FzdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBsZXQgbGVmdCA9IDA7XG4gICAgbGV0IHRvcCA9IDA7XG5cbiAgICAvLyBDb21wdXRlIGhvcml6b250YWwgcG9zaXRpb25cbiAgICBzd2l0Y2ggKHBvc2l0aW9uLmhvcml6b250YWwpIHtcbiAgICAgIGNhc2UgJ2JlZm9yZSc6XG4gICAgICAgIGxlZnQgPSBlbGVtZW50UmVjdC5sZWZ0IC0gdG9hc3RSZWN0LndpZHRoIC0gcG9zaXRpb24ub2Zmc2V0SG9yaXpvbnRhbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhZnRlcic6XG4gICAgICAgIGxlZnQgPSBlbGVtZW50UmVjdC5sZWZ0ICsgZWxlbWVudFJlY3Qud2lkdGggKyBwb3NpdGlvbi5vZmZzZXRIb3Jpem9udGFsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBsZWZ0ID0gZWxlbWVudFJlY3QubGVmdCArIHBvc2l0aW9uLm9mZnNldEhvcml6b250YWw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBsZWZ0ID0gZWxlbWVudFJlY3QubGVmdCArIGVsZW1lbnRSZWN0LndpZHRoIC0gdG9hc3RSZWN0LndpZHRoIC0gcG9zaXRpb24ub2Zmc2V0SG9yaXpvbnRhbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjZW50ZXJlZCc6XG4gICAgICAgIGxlZnQgPSBlbGVtZW50UmVjdC5sZWZ0ICsgZWxlbWVudFJlY3Qud2lkdGggLyAyIC0gdG9hc3RSZWN0LndpZHRoIC8gMiArIHBvc2l0aW9uLm9mZnNldEhvcml6b250YWw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQgKyBlbGVtZW50UmVjdC53aWR0aCAvIDIgLSB0b2FzdFJlY3Qud2lkdGggLyAyICsgcG9zaXRpb24ub2Zmc2V0SG9yaXpvbnRhbDtcbiAgICB9XG5cbiAgICAvLyBDb21wdXRlIHZlcnRpY2FsIHBvc2l0aW9uXG4gICAgc3dpdGNoIChwb3NpdGlvbi52ZXJ0aWNhbCkge1xuICAgICAgY2FzZSAnYWJvdmUnOlxuICAgICAgICB0b3AgPSBlbGVtZW50UmVjdC50b3AgLSB0b2FzdFJlY3QuaGVpZ2h0IC0gcG9zaXRpb24ub2Zmc2V0VmVydGljYWw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYmVsb3cnOlxuICAgICAgICB0b3AgPSBlbGVtZW50UmVjdC50b3AgKyBlbGVtZW50UmVjdC5oZWlnaHQgKyBwb3NpdGlvbi5vZmZzZXRWZXJ0aWNhbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICB0b3AgPSBlbGVtZW50UmVjdC50b3AgKyBwb3NpdGlvbi5vZmZzZXRWZXJ0aWNhbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICB0b3AgPSBlbGVtZW50UmVjdC50b3AgKyBlbGVtZW50UmVjdC5oZWlnaHQgLSB0b2FzdFJlY3QuaGVpZ2h0IC0gcG9zaXRpb24ub2Zmc2V0VmVydGljYWw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2VudGVyZWQnOlxuICAgICAgICB0b3AgPSBlbGVtZW50UmVjdC50b3AgKyBlbGVtZW50UmVjdC5oZWlnaHQgLyAyIC0gdG9hc3RSZWN0LmhlaWdodCAvIDIgKyBwb3NpdGlvbi5vZmZzZXRWZXJ0aWNhbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0b3AgPSBlbGVtZW50UmVjdC50b3AgKyBlbGVtZW50UmVjdC5oZWlnaHQgKyBwb3NpdGlvbi5vZmZzZXRWZXJ0aWNhbDtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IG92ZXJmbG93XG4gICAgY29uc3Qgb3ZlcmZsb3dFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCBib3VuZHMgPSBvdmVyZmxvd0VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKChwb3NpdGlvbi5ub092ZXJmbG93TGVmdCB8fCBwb3NpdGlvbi5ub092ZXJmbG93WCkgJiYgKGxlZnQgPCBib3VuZHMueCkpIHtcbiAgICAgIGxlZnQgPSBib3VuZHMueDtcbiAgICB9XG4gICAgaWYgKChwb3NpdGlvbi5ub092ZXJmbG93UmlnaHQgfHwgcG9zaXRpb24ubm9PdmVyZmxvd1gpICYmICgobGVmdCArIHRvYXN0UmVjdC53aWR0aCkgPiAoYm91bmRzLnggKyBib3VuZHMud2lkdGgpKSkge1xuICAgICAgbGVmdCA9IGJvdW5kcy54ICsgYm91bmRzLndpZHRoIC0gdG9hc3RSZWN0LndpZHRoO1xuICAgIH1cbiAgICBpZiAoKHBvc2l0aW9uLm5vT3ZlcmZsb3dUb3AgfHwgcG9zaXRpb24ubm9PdmVyZmxvd1kpICYmICh0b3AgPCBib3VuZHMueSkpIHtcbiAgICAgIHRvcCA9IGJvdW5kcy55O1xuICAgIH1cbiAgICBpZiAoKHBvc2l0aW9uLm5vT3ZlcmZsb3dCb3R0b20gfHwgcG9zaXRpb24ubm9PdmVyZmxvd1kpICYmICgodG9wICsgdG9hc3RSZWN0LmhlaWdodCkgPiAoYm91bmRzLnkgKyBib3VuZHMuaGVpZ2h0KSkpIHtcbiAgICAgIGxlZnQgPSBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgLSB0b2FzdFJlY3QuaGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiB7bGVmdDogbGVmdCwgdG9wOiB0b3B9O1xuICB9O1xuXG4gIC8vIFNhbml0aXphdGlvblxuICBjb25maWcgPSBjb25maWcgfHwge307XG4gIGNvbmZpZy5zdHlsZSA9IGNvbmZpZy5zdHlsZSB8fCAnaDVwLXRvYXN0JztcbiAgY29uZmlnLmR1cmF0aW9uID0gY29uZmlnLmR1cmF0aW9uIHx8IDMwMDA7XG5cbiAgLy8gQnVpbGQgdG9hc3RcbiAgY29uc3QgdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9hc3Quc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5zdHlsZSk7XG4gIHRvYXN0LmNsYXNzTGlzdC5hZGQoJ2g1cC10b2FzdC1kaXNhYmxlZCcpO1xuICB0b2FzdC5jbGFzc0xpc3QuYWRkKGNvbmZpZy5zdHlsZSk7XG5cbiAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBtc2cuaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgdG9hc3QuYXBwZW5kQ2hpbGQobXNnKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvYXN0KTtcblxuICAvLyBUaGUgbWVzc2FnZSBoYXMgdG8gYmUgc2V0IGJlZm9yZSBnZXR0aW5nIHRoZSBjb29yZGluYXRlc1xuICBjb25zdCBjb29yZGluYXRlcyA9IGdldFRvYXN0Q29vcmRpbmF0ZXMoZWxlbWVudCwgdG9hc3QsIGNvbmZpZy5wb3NpdGlvbik7XG4gIHRvYXN0LnN0eWxlLmxlZnQgPSBNYXRoLnJvdW5kKGNvb3JkaW5hdGVzLmxlZnQpICsgJ3B4JztcbiAgdG9hc3Quc3R5bGUudG9wID0gTWF0aC5yb3VuZChjb29yZGluYXRlcy50b3ApICsgJ3B4JztcblxuICB0b2FzdC5jbGFzc0xpc3QucmVtb3ZlKCdoNXAtdG9hc3QtZGlzYWJsZWQnKTtcbiAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KHJlbW92ZVRvYXN0LCBjb25maWcuZHVyYXRpb24pO1xuXG4gIC8vIFRoZSB0b2FzdCBjYW4gYWxzbyBiZSByZW1vdmVkIGJ5IGNsaWNraW5nIHNvbWV3aGVyZVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG59O1xuXG4vKipcbiAqIENvcHlyaWdodHMgZm9yIGEgSDVQIENvbnRlbnQgTGlicmFyeS5cbiAqXG4gKiBAY2xhc3NcbiAqL1xuSDVQLkNvbnRlbnRDb3B5cmlnaHRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbGFiZWw7XG4gIHZhciBtZWRpYSA9IFtdO1xuICB2YXIgY29udGVudCA9IFtdO1xuXG4gIC8qKlxuICAgKiBTZXQgbGFiZWwuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdMYWJlbFxuICAgKi9cbiAgdGhpcy5zZXRMYWJlbCA9IGZ1bmN0aW9uIChuZXdMYWJlbCkge1xuICAgIGxhYmVsID0gbmV3TGFiZWw7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBzdWIgY29udGVudC5cbiAgICpcbiAgICogQHBhcmFtIHtINVAuTWVkaWFDb3B5cmlnaHR9IG5ld01lZGlhXG4gICAqL1xuICB0aGlzLmFkZE1lZGlhID0gZnVuY3Rpb24gKG5ld01lZGlhKSB7XG4gICAgaWYgKG5ld01lZGlhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG1lZGlhLnB1c2gobmV3TWVkaWEpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWRkIHN1YiBjb250ZW50IGluIGZyb250LlxuICAgKlxuICAgKiBAcGFyYW0ge0g1UC5NZWRpYUNvcHlyaWdodH0gbmV3TWVkaWFcbiAgICovXG4gIHRoaXMuYWRkTWVkaWFJbkZyb250ID0gZnVuY3Rpb24gKG5ld01lZGlhKSB7XG4gICAgaWYgKG5ld01lZGlhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG1lZGlhLnVuc2hpZnQobmV3TWVkaWEpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWRkIHN1YiBjb250ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0g1UC5Db250ZW50Q29weXJpZ2h0c30gbmV3Q29udGVudFxuICAgKi9cbiAgdGhpcy5hZGRDb250ZW50ID0gZnVuY3Rpb24gKG5ld0NvbnRlbnQpIHtcbiAgICBpZiAobmV3Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZW50LnB1c2gobmV3Q29udGVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBQcmludCBjb250ZW50IGNvcHlyaWdodC5cbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ30gSFRNTC5cbiAgICovXG4gIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGh0bWwgPSAnJztcblxuICAgIC8vIEFkZCBtZWRpYSByaWdodHNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lZGlhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBodG1sICs9IG1lZGlhW2ldO1xuICAgIH1cblxuICAgIC8vIEFkZCBzdWIgY29udGVudCByaWdodHNcbiAgICBmb3IgKGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgaHRtbCArPSBjb250ZW50W2ldO1xuICAgIH1cblxuXG4gICAgaWYgKGh0bWwgIT09ICcnKSB7XG4gICAgICAvLyBBZGQgYSBsYWJlbCB0byB0aGlzIGluZm9cbiAgICAgIGlmIChsYWJlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGh0bWwgPSAnPGgzPicgKyBsYWJlbCArICc8L2gzPicgKyBodG1sO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgd3JhcHBlclxuICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiaDVwLWNvbnRlbnQtY29weXJpZ2h0c1wiPicgKyBodG1sICsgJzwvZGl2Pic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH07XG59O1xuXG4vKipcbiAqIEEgb3JkZXJlZCBsaXN0IG9mIGNvcHlyaWdodCBmaWVsZHMgZm9yIG1lZGlhLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IGNvcHlyaWdodFxuICogICBDb3B5cmlnaHQgaW5mb3JtYXRpb24gZmllbGRzLlxuICogQHBhcmFtIHtPYmplY3R9IFtsYWJlbHNdXG4gKiAgIFRyYW5zbGF0aW9uIG9mIGxhYmVscy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtvcmRlcl1cbiAqICAgT3JkZXIgb2YgdGhlIGZpZWxkcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZXh0cmFGaWVsZHNdXG4gKiAgIEFkZCBleHRyYSBjb3B5cmlnaHQgZmllbGRzLlxuICovXG5INVAuTWVkaWFDb3B5cmlnaHQgPSBmdW5jdGlvbiAoY29weXJpZ2h0LCBsYWJlbHMsIG9yZGVyLCBleHRyYUZpZWxkcykge1xuICB2YXIgdGh1bWJuYWlsO1xuICB2YXIgbGlzdCA9IG5ldyBINVAuRGVmaW5pdGlvbkxpc3QoKTtcblxuICAvKipcbiAgICogR2V0IHRyYW5zbGF0ZWQgbGFiZWwgZm9yIGZpZWxkLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICB2YXIgZ2V0TGFiZWwgPSBmdW5jdGlvbiAoZmllbGROYW1lKSB7XG4gICAgaWYgKGxhYmVscyA9PT0gdW5kZWZpbmVkIHx8IGxhYmVsc1tmaWVsZE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBINVAudChmaWVsZE5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHNbZmllbGROYW1lXTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGh1bWFuaXplZCB2YWx1ZSBmb3IgdGhlIGxpY2Vuc2UgZmllbGQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaWNlbnNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdmVyc2lvbl1cbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHZhciBodW1hbml6ZUxpY2Vuc2UgPSBmdW5jdGlvbiAobGljZW5zZSwgdmVyc2lvbikge1xuICAgIHZhciBjb3B5cmlnaHRMaWNlbnNlID0gSDVQLmNvcHlyaWdodExpY2Vuc2VzW2xpY2Vuc2VdO1xuXG4gICAgLy8gQnVpbGQgbGljZW5zZSBzdHJpbmdcbiAgICB2YXIgdmFsdWUgPSAnJztcbiAgICBpZiAoIShsaWNlbnNlID09PSAnUEQnICYmIHZlcnNpb24pKSB7XG4gICAgICAvLyBBZGQgbGljZW5zZSBsYWJlbFxuICAgICAgdmFsdWUgKz0gKGNvcHlyaWdodExpY2Vuc2UuaGFzT3duUHJvcGVydHkoJ2xhYmVsJykgPyBjb3B5cmlnaHRMaWNlbnNlLmxhYmVsIDogY29weXJpZ2h0TGljZW5zZSk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIHZlcnNpb24gaW5mb1xuICAgIHZhciB2ZXJzaW9uSW5mbztcbiAgICBpZiAoY29weXJpZ2h0TGljZW5zZS52ZXJzaW9ucykge1xuICAgICAgaWYgKGNvcHlyaWdodExpY2Vuc2UudmVyc2lvbnMuZGVmYXVsdCAmJiAoIXZlcnNpb24gfHwgIWNvcHlyaWdodExpY2Vuc2UudmVyc2lvbnNbdmVyc2lvbl0pKSB7XG4gICAgICAgIHZlcnNpb24gPSBjb3B5cmlnaHRMaWNlbnNlLnZlcnNpb25zLmRlZmF1bHQ7XG4gICAgICB9XG4gICAgICBpZiAodmVyc2lvbiAmJiBjb3B5cmlnaHRMaWNlbnNlLnZlcnNpb25zW3ZlcnNpb25dKSB7XG4gICAgICAgIHZlcnNpb25JbmZvID0gY29weXJpZ2h0TGljZW5zZS52ZXJzaW9uc1t2ZXJzaW9uXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbkluZm8pIHtcbiAgICAgIC8vIEFkZCBsaWNlbnNlIHZlcnNpb25cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSArPSAnICc7XG4gICAgICB9XG4gICAgICB2YWx1ZSArPSAodmVyc2lvbkluZm8uaGFzT3duUHJvcGVydHkoJ2xhYmVsJykgPyB2ZXJzaW9uSW5mby5sYWJlbCA6IHZlcnNpb25JbmZvKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgbGluayBpZiBzcGVjaWZpZWRcbiAgICB2YXIgbGluaztcbiAgICBpZiAoY29weXJpZ2h0TGljZW5zZS5oYXNPd25Qcm9wZXJ0eSgnbGluaycpKSB7XG4gICAgICBsaW5rID0gY29weXJpZ2h0TGljZW5zZS5saW5rLnJlcGxhY2UoJzp2ZXJzaW9uJywgY29weXJpZ2h0TGljZW5zZS5saW5rVmVyc2lvbnMgPyBjb3B5cmlnaHRMaWNlbnNlLmxpbmtWZXJzaW9uc1t2ZXJzaW9uXSA6IHZlcnNpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmICh2ZXJzaW9uSW5mbyAmJiBjb3B5cmlnaHRMaWNlbnNlLmhhc093blByb3BlcnR5KCdsaW5rJykpIHtcbiAgICAgIGxpbmsgPSB2ZXJzaW9uSW5mby5saW5rO1xuICAgIH1cbiAgICBpZiAobGluaykge1xuICAgICAgdmFsdWUgPSAnPGEgaHJlZj1cIicgKyBsaW5rICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiPicgKyB2YWx1ZSArICc8L2E+JztcbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSBwYXJlbnRoZXNpc1xuICAgIHZhciBwYXJlbnRoZXNpcyA9ICcnO1xuICAgIGlmIChsaWNlbnNlICE9PSAnUEQnICYmIGxpY2Vuc2UgIT09ICdDJykge1xuICAgICAgcGFyZW50aGVzaXMgKz0gbGljZW5zZTtcbiAgICB9XG4gICAgaWYgKHZlcnNpb24gJiYgdmVyc2lvbiAhPT0gJ0NDMCAxLjAnKSB7XG4gICAgICBpZiAocGFyZW50aGVzaXMgJiYgbGljZW5zZSAhPT0gJ0dOVSBHUEwnKSB7XG4gICAgICAgIHBhcmVudGhlc2lzICs9ICcgJztcbiAgICAgIH1cbiAgICAgIHBhcmVudGhlc2lzICs9IHZlcnNpb247XG4gICAgfVxuICAgIGlmIChwYXJlbnRoZXNpcykge1xuICAgICAgdmFsdWUgKz0gJyAoJyArIHBhcmVudGhlc2lzICsgJyknO1xuICAgIH1cbiAgICBpZiAobGljZW5zZSA9PT0gJ0MnKSB7XG4gICAgICB2YWx1ZSArPSAnICZjb3B5Oyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGlmIChjb3B5cmlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIEFkZCB0aGUgZXh0cmEgZmllbGRzXG4gICAgZm9yICh2YXIgZmllbGQgaW4gZXh0cmFGaWVsZHMpIHtcbiAgICAgIGlmIChleHRyYUZpZWxkcy5oYXNPd25Qcm9wZXJ0eShmaWVsZCkpIHtcbiAgICAgICAgY29weXJpZ2h0W2ZpZWxkXSA9IGV4dHJhRmllbGRzW2ZpZWxkXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3JkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gU2V0IGRlZmF1bHQgb3JkZXJcbiAgICAgIG9yZGVyID0gWydjb250ZW50VHlwZScsICd0aXRsZScsICdsaWNlbnNlJywgJ2F1dGhvcicsICd5ZWFyJywgJ3NvdXJjZScsICdsaWNlbnNlRXh0cmFzJywgJ2NoYW5nZXMnXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZmllbGROYW1lID0gb3JkZXJbaV07XG4gICAgICBpZiAoY29weXJpZ2h0W2ZpZWxkTmFtZV0gIT09IHVuZGVmaW5lZCAmJiBjb3B5cmlnaHRbZmllbGROYW1lXSAhPT0gJycpIHtcbiAgICAgICAgdmFyIGh1bWFuVmFsdWUgPSBjb3B5cmlnaHRbZmllbGROYW1lXTtcbiAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gJ2xpY2Vuc2UnKSB7XG4gICAgICAgICAgaHVtYW5WYWx1ZSA9IGh1bWFuaXplTGljZW5zZShjb3B5cmlnaHQubGljZW5zZSwgY29weXJpZ2h0LnZlcnNpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09ICdzb3VyY2UnKSB7XG4gICAgICAgICAgaHVtYW5WYWx1ZSA9IChodW1hblZhbHVlKSA/ICc8YSBocmVmPVwiJyArIGh1bWFuVmFsdWUgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JyArIGh1bWFuVmFsdWUgKyAnPC9hPicgOiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdC5hZGQobmV3IEg1UC5GaWVsZChnZXRMYWJlbChmaWVsZE5hbWUpLCBodW1hblZhbHVlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aHVtYm5haWwuXG4gICAqXG4gICAqIEBwYXJhbSB7SDVQLlRodW1ibmFpbH0gbmV3VGh1bWJuYWlsXG4gICAqL1xuICB0aGlzLnNldFRodW1ibmFpbCA9IGZ1bmN0aW9uIChuZXdUaHVtYm5haWwpIHtcbiAgICB0aHVtYm5haWwgPSBuZXdUaHVtYm5haWw7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGlzIGNvcHlyaWdodCBpcyB1bmRpc2Nsb3NlZC5cbiAgICogSS5lLiBvbmx5IGhhcyB0aGUgbGljZW5zZSBhdHRyaWJ1dGUgc2V0LCBhbmQgaXQncyB1bmRpc2Nsb3NlZC5cbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB0aGlzLnVuZGlzY2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsaXN0LnNpemUoKSA9PT0gMSkge1xuICAgICAgdmFyIGZpZWxkID0gbGlzdC5nZXQoMCk7XG4gICAgICBpZiAoZmllbGQuZ2V0TGFiZWwoKSA9PT0gZ2V0TGFiZWwoJ2xpY2Vuc2UnKSAmJiBmaWVsZC5nZXRWYWx1ZSgpID09PSBodW1hbml6ZUxpY2Vuc2UoJ1UnKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmludCBtZWRpYSBjb3B5cmlnaHQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEhUTUwuXG4gICAqL1xuICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBodG1sID0gJyc7XG5cbiAgICBpZiAodGhpcy51bmRpc2Nsb3NlZCgpKSB7XG4gICAgICByZXR1cm4gaHRtbDsgLy8gTm8gbmVlZCB0byBwcmludCBhIGNvcHlyaWdodCB3aXRoIGEgc2luZ2xlIHVuZGlzY2xvc2VkIGxpY2Vuc2UuXG4gICAgfVxuXG4gICAgaWYgKHRodW1ibmFpbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBodG1sICs9IHRodW1ibmFpbDtcbiAgICB9XG4gICAgaHRtbCArPSBsaXN0O1xuXG4gICAgaWYgKGh0bWwgIT09ICcnKSB7XG4gICAgICBodG1sID0gJzxkaXYgY2xhc3M9XCJoNXAtbWVkaWEtY29weXJpZ2h0XCI+JyArIGh0bWwgKyAnPC9kaXY+JztcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfTtcbn07XG5cbi8qKlxuICogQSBzaW1wbGUgYW5kIGVsZWdhbnQgY2xhc3MgZm9yIGNyZWF0aW5nIHRodW1ibmFpbHMgb2YgaW1hZ2VzLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKi9cbkg1UC5UaHVtYm5haWwgPSBmdW5jdGlvbiAoc291cmNlLCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHZhciB0aHVtYldpZHRoLCB0aHVtYkhlaWdodCA9IDEwMDtcbiAgaWYgKHdpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aHVtYldpZHRoID0gTWF0aC5yb3VuZCh0aHVtYkhlaWdodCAqICh3aWR0aCAvIGhlaWdodCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByaW50IHRodW1ibmFpbC5cbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ30gSFRNTC5cbiAgICovXG4gIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICc8aW1nIHNyYz1cIicgKyBzb3VyY2UgKyAnXCIgYWx0PVwiJyArIEg1UC50KCd0aHVtYm5haWwnKSArICdcIiBjbGFzcz1cImg1cC10aHVtYm5haWxcIiBoZWlnaHQ9XCInICsgdGh1bWJIZWlnaHQgKyAnXCInICsgKHRodW1iV2lkdGggPT09IHVuZGVmaW5lZCA/ICcnIDogJyB3aWR0aD1cIicgKyB0aHVtYldpZHRoICsgJ1wiJykgKyAnLz4nO1xuICB9O1xufTtcblxuLyoqXG4gKiBTaW1wbGUgZGF0YSBzdHJ1Y3R1cmUgY2xhc3MgZm9yIHN0b3JpbmcgYSBzaW5nbGUgZmllbGQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICovXG5INVAuRmllbGQgPSBmdW5jdGlvbiAobGFiZWwsIHZhbHVlKSB7XG4gIC8qKlxuICAgKiBQdWJsaWMuIEdldCBmaWVsZCBsYWJlbC5cbiAgICpcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIHRoaXMuZ2V0TGFiZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGxhYmVsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMuIEdldCBmaWVsZCB2YWx1ZS5cbiAgICpcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIHRoaXMuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufTtcblxuLyoqXG4gKiBTaW1wbGUgY2xhc3MgZm9yIGNyZWF0aW5nIGEgZGVmaW5pdGlvbiBsaXN0LlxuICpcbiAqIEBjbGFzc1xuICovXG5INVAuRGVmaW5pdGlvbkxpc3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmaWVsZHMgPSBbXTtcblxuICAvKipcbiAgICogQWRkIGZpZWxkIHRvIGxpc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7SDVQLkZpZWxkfSBmaWVsZFxuICAgKi9cbiAgdGhpcy5hZGQgPSBmdW5jdGlvbiAoZmllbGQpIHtcbiAgICBmaWVsZHMucHVzaChmaWVsZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBOdW1iZXIgb2YgZmllbGRzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgdGhpcy5zaXplID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmaWVsZHMubGVuZ3RoO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgZmllbGQgYXQgZ2l2ZW4gaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJucyB7SDVQLkZpZWxkfVxuICAgKi9cbiAgdGhpcy5nZXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gZmllbGRzW2luZGV4XTtcbiAgfTtcblxuICAvKipcbiAgICogUHJpbnQgZGVmaW5pdGlvbiBsaXN0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBIVE1MLlxuICAgKi9cbiAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaHRtbCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZmllbGQgPSBmaWVsZHNbaV07XG4gICAgICBodG1sICs9ICc8ZHQ+JyArIGZpZWxkLmdldExhYmVsKCkgKyAnPC9kdD48ZGQ+JyArIGZpZWxkLmdldFZhbHVlKCkgKyAnPC9kZD4nO1xuICAgIH1cbiAgICByZXR1cm4gKGh0bWwgPT09ICcnID8gaHRtbCA6ICc8ZGwgY2xhc3M9XCJoNXAtZGVmaW5pdGlvbi1saXN0XCI+JyArIGh0bWwgKyAnPC9kbD4nKTtcbiAgfTtcbn07XG5cbi8qKlxuICogVEhJUyBGVU5DVElPTi9DTEFTUyBJUyBERVBSRUNBVEVEIEFORCBXSUxMIEJFIFJFTU9WRUQuXG4gKlxuICogSGVscGVyIG9iamVjdCBmb3Iga2VlcGluZyBjb29yZGluYXRlcyBpbiB0aGUgc2FtZSBmb3JtYXQgYWxsIG92ZXIuXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqICAgV2lsbCBiZSByZW1vdmVkIG1hcmNoIDIwMTYuXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gKiBAcGFyYW0ge251bWJlcn0geVxuICogQHBhcmFtIHtudW1iZXJ9IHdcbiAqIEBwYXJhbSB7bnVtYmVyfSBoXG4gKi9cbkg1UC5Db29yZHMgPSBmdW5jdGlvbiAoeCwgeSwgdywgaCkge1xuICBpZiAoICEodGhpcyBpbnN0YW5jZW9mIEg1UC5Db29yZHMpIClcbiAgICByZXR1cm4gbmV3IEg1UC5Db29yZHMoeCwgeSwgdywgaCk7XG5cbiAgLyoqIEBtZW1iZXIge251bWJlcn0gKi9cbiAgdGhpcy54ID0gMDtcbiAgLyoqIEBtZW1iZXIge251bWJlcn0gKi9cbiAgdGhpcy55ID0gMDtcbiAgLyoqIEBtZW1iZXIge251bWJlcn0gKi9cbiAgdGhpcy53ID0gMTtcbiAgLyoqIEBtZW1iZXIge251bWJlcn0gKi9cbiAgdGhpcy5oID0gMTtcblxuICBpZiAodHlwZW9mKHgpID09PSAnb2JqZWN0Jykge1xuICAgIHRoaXMueCA9IHgueDtcbiAgICB0aGlzLnkgPSB4Lnk7XG4gICAgdGhpcy53ID0geC53O1xuICAgIHRoaXMuaCA9IHguaDtcbiAgfVxuICBlbHNlIHtcbiAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnggPSB4O1xuICAgIH1cbiAgICBpZiAoeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbiAgICBpZiAodyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLncgPSB3O1xuICAgIH1cbiAgICBpZiAoaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmggPSBoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUGFyc2UgbGlicmFyeSBzdHJpbmcgaW50byB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxpYnJhcnlcbiAqICAgbGlicmFyeSBpbiB0aGUgZm9ybWF0IFwibWFjaGluZU5hbWUgbWFqb3JWZXJzaW9uLm1pbm9yVmVyc2lvblwiXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICogICBsaWJyYXJ5IGFzIGFuIG9iamVjdCB3aXRoIG1hY2hpbmVOYW1lLCBtYWpvclZlcnNpb24gYW5kIG1pbm9yVmVyc2lvbiBwcm9wZXJ0aWVzXG4gKiAgIHJldHVybiBmYWxzZSBpZiB0aGUgbGlicmFyeSBwYXJhbWV0ZXIgaXMgaW52YWxpZFxuICovXG5INVAubGlicmFyeUZyb21TdHJpbmcgPSBmdW5jdGlvbiAobGlicmFyeSkge1xuICB2YXIgcmVnRXhwID0gLyguKylcXHMoXFxkKylcXC4oXFxkKykkL2c7XG4gIHZhciByZXMgPSByZWdFeHAuZXhlYyhsaWJyYXJ5KTtcbiAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICAnbWFjaGluZU5hbWUnOiByZXNbMV0sXG4gICAgICAnbWFqb3JWZXJzaW9uJzogcGFyc2VJbnQocmVzWzJdKSxcbiAgICAgICdtaW5vclZlcnNpb24nOiBwYXJzZUludChyZXNbM10pXG4gICAgfTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBwYXRoIHRvIHRoZSBsaWJyYXJ5XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxpYnJhcnlcbiAqICAgVGhlIGxpYnJhcnkgaWRlbnRpZmllciBpbiB0aGUgZm9ybWF0IFwibWFjaGluZU5hbWUtbWFqb3JWZXJzaW9uLm1pbm9yVmVyc2lvblwiLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgVGhlIGZ1bGwgcGF0aCB0byB0aGUgbGlicmFyeS5cbiAqL1xuSDVQLmdldExpYnJhcnlQYXRoID0gZnVuY3Rpb24gKGxpYnJhcnkpIHtcbiAgaWYgKEg1UEludGVncmF0aW9uLnVybExpYnJhcmllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gVGhpcyBpcyBhbiBvdmVycmlkZSBmb3IgdGhvc2UgaW1wbGVtZW50YXRpb25zIHRoYXQgaGFzIGEgZGlmZmVyZW50IGxpYnJhcmllcyBVUkwsIGUuZy4gTW9vZGxlXG4gICAgcmV0dXJuIEg1UEludGVncmF0aW9uLnVybExpYnJhcmllcyArICcvJyArIGxpYnJhcnk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIEg1UEludGVncmF0aW9uLnVybCArICcvbGlicmFyaWVzLycgKyBsaWJyYXJ5O1xuICB9XG59O1xuXG4vKipcbiAqIFJlY3Vyc2l2bHkgY2xvbmUgdGhlIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqZWN0XG4gKiAgIE9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlY3Vyc2l2ZV1cbiAqIEByZXR1cm5zIHtPYmplY3R8QXJyYXl9XG4gKiAgIEEgY2xvbmUgb2Ygb2JqZWN0LlxuICovXG5INVAuY2xvbmVPYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0LCByZWN1cnNpdmUpIHtcbiAgLy8gVE9ETzogQ29uc2lkZXIgaWYgdGhpcyBuZWVkcyB0byBiZSBpbiBjb3JlLiBEb2Vzbid0ICQuZXh0ZW5kIGRvIHRoZSBzYW1lP1xuICB2YXIgY2xvbmUgPSBvYmplY3QgaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBpZiAocmVjdXJzaXZlICE9PSB1bmRlZmluZWQgJiYgcmVjdXJzaXZlICYmIHR5cGVvZiBvYmplY3RbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNsb25lW2ldID0gSDVQLmNsb25lT2JqZWN0KG9iamVjdFtpXSwgcmVjdXJzaXZlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjbG9uZVtpXSA9IG9iamVjdFtpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2xvbmU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgZW1wdHkgc3BhY2VzIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuSDVQLnRyaW0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcblxuICAvLyBUT0RPOiBPbmx5IGluY2x1ZGUgdGhpcyBvciBTdHJpbmcudHJpbSgpLiBXaGF0IGlzIGJlc3Q/XG4gIC8vIEknbSBsZWFuaW5nIHRvd2FyZHMgaW1wbGVtZW50aW5nIHRoZSBtaXNzaW5nIG9uZXM6IGh0dHA6Ly9rYW5nYXguZ2l0aHViLmlvL2NvbXBhdC10YWJsZS9lczUvXG4gIC8vIFNvIHNob3VsZCB3ZSBtYWtlIHRoaXMgZnVuY3Rpb24gZGVwcmVjYXRlZD9cbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgSmF2YVNjcmlwdCBwYXRoL2tleSBpcyBsb2FkZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5INVAuanNMb2FkZWQgPSBmdW5jdGlvbiAocGF0aCkge1xuICBINVBJbnRlZ3JhdGlvbi5sb2FkZWRKcyA9IEg1UEludGVncmF0aW9uLmxvYWRlZEpzIHx8IFtdO1xuICByZXR1cm4gSDVQLmpRdWVyeS5pbkFycmF5KHBhdGgsIEg1UEludGVncmF0aW9uLmxvYWRlZEpzKSAhPT0gLTE7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHN0eWxlcyBwYXRoL2tleSBpcyBsb2FkZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5INVAuY3NzTG9hZGVkID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgSDVQSW50ZWdyYXRpb24ubG9hZGVkQ3NzID0gSDVQSW50ZWdyYXRpb24ubG9hZGVkQ3NzIHx8IFtdO1xuICByZXR1cm4gSDVQLmpRdWVyeS5pbkFycmF5KHBhdGgsIEg1UEludGVncmF0aW9uLmxvYWRlZENzcykgIT09IC0xO1xufTtcblxuLyoqXG4gKiBTaHVmZmxlIGFuIGFycmF5IGluIHBsYWNlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XG4gKiAgIEFycmF5IHRvIHNodWZmbGVcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqICAgVGhlIHBhc3NlZCBhcnJheSBpcyByZXR1cm5lZCBmb3IgY2hhaW5pbmcuXG4gKi9cbkg1UC5zaHVmZmxlQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgLy8gVE9ETzogQ29uc2lkZXIgaWYgdGhpcyBzaG91bGQgYmUgYSBwYXJ0IG9mIGNvcmUuIEknbSBndWVzc2luZyB2ZXJ5IGZldyBsaWJyYXJpZXMgYXJlIGdvaW5nIHRvIHVzZSBpdC5cbiAgaWYgKCEoYXJyYXkgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgaSA9IGFycmF5Lmxlbmd0aCwgaiwgdGVtcGksIHRlbXBqO1xuICBpZiAoIGkgPT09IDAgKSByZXR1cm4gZmFsc2U7XG4gIHdoaWxlICggLS1pICkge1xuICAgIGogICAgICAgPSBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogKCBpICsgMSApICk7XG4gICAgdGVtcGkgICA9IGFycmF5W2ldO1xuICAgIHRlbXBqICAgPSBhcnJheVtqXTtcbiAgICBhcnJheVtpXSA9IHRlbXBqO1xuICAgIGFycmF5W2pdID0gdGVtcGk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufTtcblxuLyoqXG4gKiBQb3N0IGZpbmlzaGVkIHJlc3VsdHMgZm9yIHVzZXIuXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqICAgRG8gbm90IHVzZSB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5LCB0cmlnZ2VyIHRoZSBmaW5pc2ggZXZlbnQgaW5zdGVhZC5cbiAqICAgV2lsbCBiZSByZW1vdmVkIG1hcmNoIDIwMTZcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb250ZW50SWRcbiAqICAgSWRlbnRpZmllcyB0aGUgY29udGVudFxuICogQHBhcmFtIHtudW1iZXJ9IHNjb3JlXG4gKiAgIEFjaGlldmVkIHNjb3JlL3BvaW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG1heFNjb3JlXG4gKiAgIFRoZSBtYXhpbXVtIHNjb3JlL3BvaW50cyB0aGF0IGNhbiBiZSBhY2hpZXZlZFxuICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lXVxuICogICBSZXBvcnRlZCB0aW1lIGNvbnN1bXB0aW9uL3VzYWdlXG4gKi9cbkg1UC5zZXRGaW5pc2hlZCA9IGZ1bmN0aW9uIChjb250ZW50SWQsIHNjb3JlLCBtYXhTY29yZSwgdGltZSkge1xuICB2YXIgdmFsaWRTY29yZSA9IHR5cGVvZiBzY29yZSA9PT0gJ251bWJlcicgfHwgc2NvcmUgaW5zdGFuY2VvZiBOdW1iZXI7XG4gIGlmICh2YWxpZFNjb3JlICYmIEg1UEludGVncmF0aW9uLnBvc3RVc2VyU3RhdGlzdGljcyA9PT0gdHJ1ZSkge1xuICAgIC8qKlxuICAgICAqIFJldHVybiB1bml4IHRpbWVzdGFtcCBmb3IgdGhlIGdpdmVuIEpTIERhdGUuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdmFyIHRvVW5peCA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIH07XG5cbiAgICAvLyBQb3N0IHRoZSByZXN1bHRzXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGNvbnRlbnRJZDogY29udGVudElkLFxuICAgICAgc2NvcmU6IHNjb3JlLFxuICAgICAgbWF4U2NvcmU6IG1heFNjb3JlLFxuICAgICAgb3BlbmVkOiB0b1VuaXgoSDVQLm9wZW5lZFtjb250ZW50SWRdKSxcbiAgICAgIGZpbmlzaGVkOiB0b1VuaXgobmV3IERhdGUoKSksXG4gICAgICB0aW1lOiB0aW1lXG4gICAgfTtcbiAgICBINVAualF1ZXJ5LnBvc3QoSDVQSW50ZWdyYXRpb24uYWpheC5zZXRGaW5pc2hlZCwgZGF0YSlcbiAgICAgIC5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgSDVQLm9mZmxpbmVSZXF1ZXN0UXVldWUuYWRkKEg1UEludGVncmF0aW9uLmFqYXguc2V0RmluaXNoZWQsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cbn07XG5cbi8vIEFkZCBpbmRleE9mIHRvIGJyb3dzZXJzIHRoYXQgbGFjayB0aGVtLiAoSUVzKVxuaWYgKCFBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChuZWVkbGUpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzW2ldID09PSBuZWVkbGUpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfTtcbn1cblxuLy8gTmVlZCB0byBkZWZpbmUgdHJpbSgpIHNpbmNlIHRoaXMgaXMgbm90IGF2YWlsYWJsZSBvbiBvbGRlciBJRXMsXG4vLyBhbmQgdHJpbSBpcyB1c2VkIGluIHNldmVyYWwgbGlic1xuaWYgKFN0cmluZy5wcm90b3R5cGUudHJpbSA9PT0gdW5kZWZpbmVkKSB7XG4gIFN0cmluZy5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gSDVQLnRyaW0odGhpcyk7XG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBhbiBldmVudCBvbiBhbiBpbnN0YW5jZVxuICpcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IHRyaWdnZXJzIGFuIGV2ZW50IGlmIHRoZSBpbnN0YW5jZSBzdXBwb3J0cyBldmVudCBoYW5kbGluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZVxuICogICBJbnN0YW5jZSBvZiBINVAgY29udGVudFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogICBUeXBlIG9mIGV2ZW50IHRvIHRyaWdnZXJcbiAqIEBwYXJhbSB7Kn0gZGF0YVxuICogQHBhcmFtIHtPYmplY3R9IGV4dHJhc1xuICovXG5INVAudHJpZ2dlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgZXZlbnRUeXBlLCBkYXRhLCBleHRyYXMpIHtcbiAgLy8gVHJ5IG5ldyBldmVudCBzeXN0ZW0gZmlyc3RcbiAgaWYgKGluc3RhbmNlLnRyaWdnZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIGluc3RhbmNlLnRyaWdnZXIoZXZlbnRUeXBlLCBkYXRhLCBleHRyYXMpO1xuICB9XG4gIC8vIFRyeSBkZXByZWNhdGVkIGV2ZW50IHN5c3RlbVxuICBlbHNlIGlmIChpbnN0YW5jZS4kICE9PSB1bmRlZmluZWQgJiYgaW5zdGFuY2UuJC50cmlnZ2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICBpbnN0YW5jZS4kLnRyaWdnZXIoZXZlbnRUeXBlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyXG4gKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgcmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXIgZm9yIGFuIGV2ZW50IHR5cGUgaWZcbiAqIHRoZSBpbnN0YW5jZSBzdXBwb3J0cyBldmVudCBoYW5kbGluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZVxuICogICBJbnN0YW5jZSBvZiBINVAgY29udGVudFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogICBUeXBlIG9mIGV2ZW50IHRvIGxpc3RlbiBmb3JcbiAqIEBwYXJhbSB7SDVQLkV2ZW50Q2FsbGJhY2t9IGhhbmRsZXJcbiAqICAgQ2FsbGJhY2sgdGhhdCBnZXRzIHRyaWdnZXJlZCBmb3IgZXZlbnRzIG9mIHRoZSBzcGVjaWZpZWQgdHlwZVxuICovXG5INVAub24gPSBmdW5jdGlvbiAoaW5zdGFuY2UsIGV2ZW50VHlwZSwgaGFuZGxlcikge1xuICAvLyBUcnkgbmV3IGV2ZW50IHN5c3RlbSBmaXJzdFxuICBpZiAoaW5zdGFuY2Uub24gIT09IHVuZGVmaW5lZCkge1xuICAgIGluc3RhbmNlLm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG4gIH1cbiAgLy8gVHJ5IGRlcHJlY2F0ZWQgZXZlbnQgc3lzdGVtXG4gIGVsc2UgaWYgKGluc3RhbmNlLiQgIT09IHVuZGVmaW5lZCAmJiBpbnN0YW5jZS4kLm9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBpbnN0YW5jZS4kLm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG4gIH1cbn07XG5cbi8qKlxuICogR2VuZXJhdGUgcmFuZG9tIFVVSURcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBVVUlEXG4gKi9cbkg1UC5jcmVhdGVVVUlEID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoY2hhcikge1xuICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbSgpKjE2fDAsIG5ld0NoYXIgPSBjaGFyID09PSAneCcgPyByYW5kb20gOiAocmFuZG9tJjB4M3wweDgpO1xuICAgIHJldHVybiBuZXdDaGFyLnRvU3RyaW5nKDE2KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB0aXRsZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByYXdUaXRsZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heExlbmd0aFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuSDVQLmNyZWF0ZVRpdGxlID0gZnVuY3Rpb24gKHJhd1RpdGxlLCBtYXhMZW5ndGgpIHtcbiAgaWYgKCFyYXdUaXRsZSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAobWF4TGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBtYXhMZW5ndGggPSA2MDtcbiAgfVxuICB2YXIgdGl0bGUgPSBINVAualF1ZXJ5KCc8ZGl2PjwvZGl2PicpXG4gICAgLnRleHQoXG4gICAgICAvLyBTdHJpcCB0YWdzXG4gICAgICByYXdUaXRsZS5yZXBsYWNlKC8oPChbXj5dKyk+KS9pZyxcIlwiKVxuICAgIC8vIEVzY2FwZVxuICAgICkudGV4dCgpO1xuICBpZiAodGl0bGUubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgdGl0bGUgPSB0aXRsZS5zdWJzdHIoMCwgbWF4TGVuZ3RoIC0gMykgKyAnLi4uJztcbiAgfVxuICByZXR1cm4gdGl0bGU7XG59O1xuXG4vLyBXcmFwIGluIHByaXZhdGVzXG4oZnVuY3Rpb24gKCQpIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhamF4IHJlcXVlc3RzIGZvciBpbnNlcnRpbmcsIHVwZGF0ZWluZyBhbmQgZGVsZXRlaW5nXG4gICAqIGNvbnRlbnQgdXNlciBkYXRhLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gY29udGVudElkIFdoYXQgY29udGVudCB0byBzdG9yZSB0aGUgZGF0YSBmb3IuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhVHlwZSBJZGVudGlmaWVzIHRoZSBzZXQgb2YgZGF0YSBmb3IgdGhpcyBjb250ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3ViQ29udGVudElkIElkZW50aWZpZXMgc3ViIGNvbnRlbnRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2RvbmVdIENhbGxiYWNrIHdoZW4gYWpheCBpcyBkb25lLlxuICAgKiBAcGFyYW0ge29iamVjdH0gW2RhdGFdIFRvIGJlIHN0b3JlZCBmb3IgZnV0dXJlIHVzZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBbcHJlbG9hZD1mYWxzZV0gRGF0YSBpcyBsb2FkZWQgd2hlbiBjb250ZW50IGlzIGxvYWRlZC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbaW52YWxpZGF0ZT1mYWxzZV0gRGF0YSBpcyBpbnZhbGlkYXRlZCB3aGVuIGNvbnRlbnQgY2hhbmdlcy5cbiAgICogQHBhcmFtIHtib29sZWFufSBbYXN5bmM9dHJ1ZV1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbnRlbnRVc2VyRGF0YUFqYXgoY29udGVudElkLCBkYXRhVHlwZSwgc3ViQ29udGVudElkLCBkb25lLCBkYXRhLCBwcmVsb2FkLCBpbnZhbGlkYXRlLCBhc3luYykge1xuICAgIGlmIChINVBJbnRlZ3JhdGlvbi51c2VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE5vdCBsb2dnZWQgaW4sIG5vIHVzZSBpbiBzYXZpbmcuXG4gICAgICBkb25lKCdOb3Qgc2lnbmVkIGluLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgdXJsOiBINVBJbnRlZ3JhdGlvbi5hamF4LmNvbnRlbnRVc2VyRGF0YS5yZXBsYWNlKCc6Y29udGVudElkJywgY29udGVudElkKS5yZXBsYWNlKCc6ZGF0YVR5cGUnLCBkYXRhVHlwZSkucmVwbGFjZSgnOnN1YkNvbnRlbnRJZCcsIHN1YkNvbnRlbnRJZCA/IHN1YkNvbnRlbnRJZCA6IDApLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGFzeW5jOiBhc3luYyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFzeW5jXG4gICAgfTtcbiAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRpb25zLnR5cGUgPSAnUE9TVCc7XG4gICAgICBvcHRpb25zLmRhdGEgPSB7XG4gICAgICAgIGRhdGE6IChkYXRhID09PSBudWxsID8gMCA6IGRhdGEpLFxuICAgICAgICBwcmVsb2FkOiAocHJlbG9hZCA/IDEgOiAwKSxcbiAgICAgICAgaW52YWxpZGF0ZTogKGludmFsaWRhdGUgPyAxIDogMClcbiAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb3B0aW9ucy50eXBlID0gJ0dFVCc7XG4gICAgfVxuICAgIGlmIChkb25lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbnMuZXJyb3IgPSBmdW5jdGlvbiAoeGhyLCBlcnJvcikge1xuICAgICAgICBkb25lKGVycm9yKTtcbiAgICAgIH07XG4gICAgICBvcHRpb25zLnN1Y2Nlc3MgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgZG9uZShyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSA9PT0gZmFsc2UgfHwgcmVzcG9uc2UuZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvbmUodW5kZWZpbmVkLCByZXNwb25zZS5kYXRhKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgJC5hamF4KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB1c2VyIGRhdGEgZm9yIGdpdmVuIGNvbnRlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb250ZW50SWRcbiAgICogICBXaGF0IGNvbnRlbnQgdG8gZ2V0IGRhdGEgZm9yLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YUlkXG4gICAqICAgSWRlbnRpZmllcyB0aGUgc2V0IG9mIGRhdGEgZm9yIHRoaXMgY29udGVudC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZG9uZVxuICAgKiAgIENhbGxiYWNrIHdpdGggZXJyb3IgYW5kIGRhdGEgcGFyYW1ldGVycy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzdWJDb250ZW50SWRdXG4gICAqICAgSWRlbnRpZmllcyB3aGljaCBkYXRhIGJlbG9uZ3MgdG8gc3ViIGNvbnRlbnQuXG4gICAqL1xuICBINVAuZ2V0VXNlckRhdGEgPSBmdW5jdGlvbiAoY29udGVudElkLCBkYXRhSWQsIGRvbmUsIHN1YkNvbnRlbnRJZCkge1xuICAgIGlmICghc3ViQ29udGVudElkKSB7XG4gICAgICBzdWJDb250ZW50SWQgPSAwOyAvLyBEZWZhdWx0XG4gICAgfVxuXG4gICAgSDVQSW50ZWdyYXRpb24uY29udGVudHMgPSBINVBJbnRlZ3JhdGlvbi5jb250ZW50cyB8fCB7fTtcbiAgICB2YXIgY29udGVudCA9IEg1UEludGVncmF0aW9uLmNvbnRlbnRzWydjaWQtJyArIGNvbnRlbnRJZF0gfHwge307XG4gICAgdmFyIHByZWxvYWRlZERhdGEgPSBjb250ZW50LmNvbnRlbnRVc2VyRGF0YTtcbiAgICBpZiAocHJlbG9hZGVkRGF0YSAmJiBwcmVsb2FkZWREYXRhW3N1YkNvbnRlbnRJZF0gJiYgcHJlbG9hZGVkRGF0YVtzdWJDb250ZW50SWRdW2RhdGFJZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHByZWxvYWRlZERhdGFbc3ViQ29udGVudElkXVtkYXRhSWRdID09PSAnUkVTRVQnKSB7XG4gICAgICAgIGRvbmUodW5kZWZpbmVkLCBudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgZG9uZSh1bmRlZmluZWQsIEpTT04ucGFyc2UocHJlbG9hZGVkRGF0YVtzdWJDb250ZW50SWRdW2RhdGFJZF0pKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgZG9uZShlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnRlbnRVc2VyRGF0YUFqYXgoY29udGVudElkLCBkYXRhSWQsIHN1YkNvbnRlbnRJZCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICBpZiAoZXJyIHx8IGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRvbmUoZXJyLCBkYXRhKTtcbiAgICAgICAgICByZXR1cm47IC8vIEVycm9yIG9yIG5vIGRhdGFcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhY2hlIGluIHByZWxvYWRlZFxuICAgICAgICBpZiAoY29udGVudC5jb250ZW50VXNlckRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnRlbnQuY29udGVudFVzZXJEYXRhID0gcHJlbG9hZGVkRGF0YSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVsb2FkZWREYXRhW3N1YkNvbnRlbnRJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByZWxvYWRlZERhdGFbc3ViQ29udGVudElkXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHByZWxvYWRlZERhdGFbc3ViQ29udGVudElkXVtkYXRhSWRdID0gZGF0YTtcblxuICAgICAgICAvLyBEb25lLiBUcnkgdG8gZGVjb2RlIEpTT05cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkb25lKHVuZGVmaW5lZCwgSlNPTi5wYXJzZShkYXRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICBkb25lKGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFzeW5jIGVycm9yIGhhbmRsaW5nLlxuICAgKlxuICAgKiBAY2FsbGJhY2sgSDVQLkVycm9yQ2FsbGJhY2tcbiAgICogQHBhcmFtIHsqfSBlcnJvclxuICAgKi9cblxuICAvKipcbiAgICogU2V0IHVzZXIgZGF0YSBmb3IgZ2l2ZW4gY29udGVudC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRlbnRJZFxuICAgKiAgIFdoYXQgY29udGVudCB0byBnZXQgZGF0YSBmb3IuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhSWRcbiAgICogICBJZGVudGlmaWVzIHRoZSBzZXQgb2YgZGF0YSBmb3IgdGhpcyBjb250ZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKiAgIFRoZSBkYXRhIHRoYXQgaXMgdG8gYmUgc3RvcmVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW2V4dHJhc11cbiAgICogICBFeHRyYSBwcm9wZXJ0aWVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXh0cmFzLnN1YkNvbnRlbnRJZF1cbiAgICogICBJZGVudGlmaWVzIHdoaWNoIGRhdGEgYmVsb25ncyB0byBzdWIgY29udGVudC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXh0cmFzLnByZWxvYWRlZD10cnVlXVxuICAgKiAgIElmIHRoZSBkYXRhIHNob3VsZCBiZSBsb2FkZWQgd2hlbiBjb250ZW50IGlzIGxvYWRlZC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXh0cmFzLmRlbGV0ZU9uQ2hhbmdlPWZhbHNlXVxuICAgKiAgIElmIHRoZSBkYXRhIHNob3VsZCBiZSBpbnZhbGlkYXRlZCB3aGVuIHRoZSBjb250ZW50IGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7SDVQLkVycm9yQ2FsbGJhY2t9IFtleHRyYXMuZXJyb3JDYWxsYmFja11cbiAgICogICBDYWxsYmFjayB3aXRoIGVycm9yIGFzIHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V4dHJhcy5hc3luYz10cnVlXVxuICAgKi9cbiAgSDVQLnNldFVzZXJEYXRhID0gZnVuY3Rpb24gKGNvbnRlbnRJZCwgZGF0YUlkLCBkYXRhLCBleHRyYXMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IEg1UC5qUXVlcnkuZXh0ZW5kKHRydWUsIHt9LCB7XG4gICAgICBzdWJDb250ZW50SWQ6IDAsXG4gICAgICBwcmVsb2FkZWQ6IHRydWUsXG4gICAgICBkZWxldGVPbkNoYW5nZTogZmFsc2UsXG4gICAgICBhc3luYzogdHJ1ZVxuICAgIH0sIGV4dHJhcyk7XG5cbiAgICB0cnkge1xuICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAob3B0aW9ucy5lcnJvckNhbGxiYWNrKSB7XG4gICAgICAgIG9wdGlvbnMuZXJyb3JDYWxsYmFjayhlcnIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuOyAvLyBGYWlsZWQgdG8gc2VyaWFsaXplLlxuICAgIH1cblxuICAgIHZhciBjb250ZW50ID0gSDVQSW50ZWdyYXRpb24uY29udGVudHNbJ2NpZC0nICsgY29udGVudElkXTtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZW50ID0gSDVQSW50ZWdyYXRpb24uY29udGVudHNbJ2NpZC0nICsgY29udGVudElkXSA9IHt9O1xuICAgIH1cbiAgICBpZiAoIWNvbnRlbnQuY29udGVudFVzZXJEYXRhKSB7XG4gICAgICBjb250ZW50LmNvbnRlbnRVc2VyRGF0YSA9IHt9O1xuICAgIH1cbiAgICB2YXIgcHJlbG9hZGVkRGF0YSA9IGNvbnRlbnQuY29udGVudFVzZXJEYXRhO1xuICAgIGlmIChwcmVsb2FkZWREYXRhW29wdGlvbnMuc3ViQ29udGVudElkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmVsb2FkZWREYXRhW29wdGlvbnMuc3ViQ29udGVudElkXSA9IHt9O1xuICAgIH1cbiAgICBpZiAoZGF0YSA9PT0gcHJlbG9hZGVkRGF0YVtvcHRpb25zLnN1YkNvbnRlbnRJZF1bZGF0YUlkXSkge1xuICAgICAgcmV0dXJuOyAvLyBObyBuZWVkIHRvIHNhdmUgdGhpcyB0d2ljZS5cbiAgICB9XG5cbiAgICBwcmVsb2FkZWREYXRhW29wdGlvbnMuc3ViQ29udGVudElkXVtkYXRhSWRdID0gZGF0YTtcbiAgICBjb250ZW50VXNlckRhdGFBamF4KGNvbnRlbnRJZCwgZGF0YUlkLCBvcHRpb25zLnN1YkNvbnRlbnRJZCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAob3B0aW9ucy5lcnJvckNhbGxiYWNrICYmIGVycm9yKSB7XG4gICAgICAgIG9wdGlvbnMuZXJyb3JDYWxsYmFjayhlcnJvcik7XG4gICAgICB9XG4gICAgfSwgZGF0YSwgb3B0aW9ucy5wcmVsb2FkZWQsIG9wdGlvbnMuZGVsZXRlT25DaGFuZ2UsIG9wdGlvbnMuYXN5bmMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZWxldGUgdXNlciBkYXRhIGZvciBnaXZlbiBjb250ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gY29udGVudElkXG4gICAqICAgV2hhdCBjb250ZW50IHRvIHJlbW92ZSBkYXRhIGZvci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFJZFxuICAgKiAgIElkZW50aWZpZXMgdGhlIHNldCBvZiBkYXRhIGZvciB0aGlzIGNvbnRlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc3ViQ29udGVudElkXVxuICAgKiAgIElkZW50aWZpZXMgd2hpY2ggZGF0YSBiZWxvbmdzIHRvIHN1YiBjb250ZW50LlxuICAgKi9cbiAgSDVQLmRlbGV0ZVVzZXJEYXRhID0gZnVuY3Rpb24gKGNvbnRlbnRJZCwgZGF0YUlkLCBzdWJDb250ZW50SWQpIHtcbiAgICBpZiAoIXN1YkNvbnRlbnRJZCkge1xuICAgICAgc3ViQ29udGVudElkID0gMDsgLy8gRGVmYXVsdFxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBmcm9tIHByZWxvYWRlZC9jYWNoZVxuICAgIHZhciBwcmVsb2FkZWREYXRhID0gSDVQSW50ZWdyYXRpb24uY29udGVudHNbJ2NpZC0nICsgY29udGVudElkXS5jb250ZW50VXNlckRhdGE7XG4gICAgaWYgKHByZWxvYWRlZERhdGEgJiYgcHJlbG9hZGVkRGF0YVtzdWJDb250ZW50SWRdICYmIHByZWxvYWRlZERhdGFbc3ViQ29udGVudElkXVtkYXRhSWRdKSB7XG4gICAgICBkZWxldGUgcHJlbG9hZGVkRGF0YVtzdWJDb250ZW50SWRdW2RhdGFJZF07XG4gICAgfVxuXG4gICAgY29udGVudFVzZXJEYXRhQWpheChjb250ZW50SWQsIGRhdGFJZCwgc3ViQ29udGVudElkLCB1bmRlZmluZWQsIG51bGwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBmb3IgZ2V0dGluZyBjb250ZW50IGZvciBhIGNlcnRhaW4gSURcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRlbnRJZFxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBINVAuZ2V0Q29udGVudEZvckluc3RhbmNlID0gZnVuY3Rpb24gKGNvbnRlbnRJZCkge1xuICAgIHZhciBrZXkgPSAnY2lkLScgKyBjb250ZW50SWQ7XG4gICAgdmFyIGV4aXN0cyA9IEg1UEludGVncmF0aW9uICYmIEg1UEludGVncmF0aW9uLmNvbnRlbnRzICYmXG4gICAgICAgICAgICAgICAgIEg1UEludGVncmF0aW9uLmNvbnRlbnRzW2tleV07XG5cbiAgICByZXR1cm4gZXhpc3RzID8gSDVQSW50ZWdyYXRpb24uY29udGVudHNba2V5XSA6IHVuZGVmaW5lZDtcbiAgfTtcblxuICAvKipcbiAgICogUHJlcGFyZXMgdGhlIGNvbnRlbnQgcGFyYW1ldGVycyBmb3Igc3RvcmluZyBpbiB0aGUgY2xpcGJvYXJkLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtZXRlcnMgVGhlIHBhcmFtZXRlcnMgZm9yIHRoZSBjb250ZW50IHRvIHN0b3JlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZ2VuZXJpY1Byb3BlcnR5XSBJZiBvbmx5IHBhcnQgb2YgdGhlIHBhcmFtZXRlcnMgYXJlIGdlbmVyaWMsIHdoaWNoIHBhcnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzcGVjaWZpY0tleV0gSWYgdGhlIHBhcmFtZXRlcnMgYXJlIHNwZWNpZmljLCB3aGF0IGNvbnRlbnQgdHlwZSBkb2VzIGl0IGZpdFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZWFkeSBmb3IgdGhlIGNsaXBib2FyZFxuICAgKi9cbiAgSDVQLkNsaXBib2FyZEl0ZW0gPSBmdW5jdGlvbiAocGFyYW1ldGVycywgZ2VuZXJpY1Byb3BlcnR5LCBzcGVjaWZpY0tleSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIFNldCByZWxhdGl2ZSBkaW1lbnNpb25zIHdoZW4gcGFyYW1zIGNvbnRhaW5zIGEgZmlsZSB3aXRoIGEgd2lkdGggYW5kIGEgaGVpZ2h0LlxuICAgICAqIFZlcnkgdXNlZnVsIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB3eXNpd3lnIGVkaXRvcnMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHZhciBzZXREaW1lbnNpb25zRnJvbUZpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNlbGYuZ2VuZXJpYykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcGFyYW1zID0gc2VsZi5zcGVjaWZpY1tzZWxmLmdlbmVyaWNdO1xuICAgICAgaWYgKCFwYXJhbXMucGFyYW1zLmZpbGUgfHwgIXBhcmFtcy5wYXJhbXMuZmlsZS53aWR0aCB8fCAhcGFyYW1zLnBhcmFtcy5maWxlLmhlaWdodCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYud2lkdGggPSAyMDsgLy8gJVxuICAgICAgc2VsZi5oZWlnaHQgPSAocGFyYW1zLnBhcmFtcy5maWxlLmhlaWdodCAvIHBhcmFtcy5wYXJhbXMuZmlsZS53aWR0aCkgKiBzZWxmLndpZHRoO1xuICAgIH07XG5cbiAgICBpZiAoIWdlbmVyaWNQcm9wZXJ0eSkge1xuICAgICAgZ2VuZXJpY1Byb3BlcnR5ID0gJ2FjdGlvbic7XG4gICAgICBwYXJhbWV0ZXJzID0ge1xuICAgICAgICBhY3Rpb246IHBhcmFtZXRlcnNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgc2VsZi5zcGVjaWZpYyA9IHBhcmFtZXRlcnM7XG5cbiAgICBpZiAoZ2VuZXJpY1Byb3BlcnR5ICYmIHBhcmFtZXRlcnNbZ2VuZXJpY1Byb3BlcnR5XSkge1xuICAgICAgc2VsZi5nZW5lcmljID0gZ2VuZXJpY1Byb3BlcnR5O1xuICAgIH1cbiAgICBpZiAoc3BlY2lmaWNLZXkpIHtcbiAgICAgIHNlbGYuZnJvbSA9IHNwZWNpZmljS2V5O1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuSDVQRWRpdG9yICYmIEg1UEVkaXRvci5jb250ZW50SWQpIHtcbiAgICAgIHNlbGYuY29udGVudElkID0gSDVQRWRpdG9yLmNvbnRlbnRJZDtcbiAgICB9XG5cbiAgICBpZiAoIXNlbGYuc3BlY2lmaWMud2lkdGggJiYgIXNlbGYuc3BlY2lmaWMuaGVpZ2h0KSB7XG4gICAgICBzZXREaW1lbnNpb25zRnJvbUZpbGUoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3JlIGl0ZW0gaW4gdGhlIEg1UCBDbGlwYm9hcmQuXG4gICAqXG4gICAqIEBwYXJhbSB7SDVQLkNsaXBib2FyZEl0ZW18Kn0gY2xpcGJvYXJkSXRlbVxuICAgKi9cbiAgSDVQLmNsaXBib2FyZGlmeSA9IGZ1bmN0aW9uIChjbGlwYm9hcmRJdGVtKSB7XG4gICAgaWYgKCEoY2xpcGJvYXJkSXRlbSBpbnN0YW5jZW9mIEg1UC5DbGlwYm9hcmRJdGVtKSkge1xuICAgICAgY2xpcGJvYXJkSXRlbSA9IG5ldyBINVAuQ2xpcGJvYXJkSXRlbShjbGlwYm9hcmRJdGVtKTtcbiAgICB9XG4gICAgSDVQLnNldENsaXBib2FyZChjbGlwYm9hcmRJdGVtKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0cmlldmUgcGFyc2VkIGNsaXBib2FyZCBkYXRhLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBINVAuZ2V0Q2xpcGJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwYXJzZUNsaXBib2FyZCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgaXRlbSBpbiB0aGUgSDVQIENsaXBib2FyZC5cbiAgICpcbiAgICogQHBhcmFtIHtINVAuQ2xpcGJvYXJkSXRlbXxvYmplY3R9IGNsaXBib2FyZEl0ZW0gLSBEYXRhIHRvIGJlIHNldC5cbiAgICovXG4gIEg1UC5zZXRDbGlwYm9hcmQgPSBmdW5jdGlvbiAoY2xpcGJvYXJkSXRlbSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoNXBDbGlwYm9hcmQnLCBKU09OLnN0cmluZ2lmeShjbGlwYm9hcmRJdGVtKSk7XG5cbiAgICAvLyBUcmlnZ2VyIGFuIGV2ZW50IHNvIGFsbCAnUGFzdGUnIGJ1dHRvbnMgbWF5IGJlIGVuYWJsZWQuXG4gICAgSDVQLmV4dGVybmFsRGlzcGF0Y2hlci50cmlnZ2VyKCdkYXRhaW5jbGlwYm9hcmQnLCB7cmVzZXQ6IGZhbHNlfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBjb25maWcgZm9yIGEgbGlicmFyeVxuICAgKlxuICAgKiBAcGFyYW0gc3RyaW5nIG1hY2hpbmVOYW1lXG4gICAqIEByZXR1cm4gT2JqZWN0XG4gICAqL1xuICBINVAuZ2V0TGlicmFyeUNvbmZpZyA9IGZ1bmN0aW9uIChtYWNoaW5lTmFtZSkge1xuICAgIHZhciBoYXNDb25maWcgPSBINVBJbnRlZ3JhdGlvbi5saWJyYXJ5Q29uZmlnICYmIEg1UEludGVncmF0aW9uLmxpYnJhcnlDb25maWdbbWFjaGluZU5hbWVdO1xuICAgIHJldHVybiBoYXNDb25maWcgPyBINVBJbnRlZ3JhdGlvbi5saWJyYXJ5Q29uZmlnW21hY2hpbmVOYW1lXSA6IHt9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgaXRlbSBmcm9tIHRoZSBINVAgQ2xpcGJvYXJkLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICB2YXIgcGFyc2VDbGlwYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNsaXBib2FyZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaDVwQ2xpcGJvYXJkJyk7XG4gICAgaWYgKCFjbGlwYm9hcmREYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVHJ5IHRvIHBhcnNlIGNsaXBib2FyZCBkYXRcbiAgICB0cnkge1xuICAgICAgY2xpcGJvYXJkRGF0YSA9IEpTT04ucGFyc2UoY2xpcGJvYXJkRGF0YSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBKU09OIGZyb20gY2xpcGJvYXJkLicsIGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGZpbGUgVVJMcyBhbmQgcmVzZXQgY29udGVudCBJZHNcbiAgICByZWN1cnNpdmVVcGRhdGUoY2xpcGJvYXJkRGF0YS5zcGVjaWZpYywgZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgIHZhciBpc1RtcEZpbGUgPSAocGF0aC5zdWJzdHIoLTQsIDQpID09PSAnI3RtcCcpO1xuICAgICAgaWYgKCFpc1RtcEZpbGUgJiYgY2xpcGJvYXJkRGF0YS5jb250ZW50SWQgJiYgIXBhdGgubWF0Y2goL15odHRwcz86XFwvXFwvL2kpKSB7XG4gICAgICAgIC8vIENvbWVzIGZyb20gZXhpc3RpbmcgY29udGVudFxuXG4gICAgICAgIGlmIChINVBFZGl0b3IuY29udGVudElkKSB7XG4gICAgICAgICAgLy8gLi4gdG8gZXhpc3RpbmcgY29udGVudFxuICAgICAgICAgIHJldHVybiAnLi4vJyArIGNsaXBib2FyZERhdGEuY29udGVudElkICsgJy8nICsgcGF0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvLyAuLiB0byBuZXcgY29udGVudFxuICAgICAgICAgIHJldHVybiAoSDVQRWRpdG9yLmNvbnRlbnRSZWxVcmwgPyBINVBFZGl0b3IuY29udGVudFJlbFVybCA6ICcuLi9jb250ZW50LycpICsgY2xpcGJvYXJkRGF0YS5jb250ZW50SWQgKyAnLycgKyBwYXRoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcGF0aDsgLy8gV2lsbCBhdXRvbWF0aWNhbGx5IGJlIGxvb2tlZCBmb3IgaW4gdG1wIGZvbGRlclxuICAgIH0pO1xuXG5cbiAgICBpZiAoY2xpcGJvYXJkRGF0YS5nZW5lcmljKSB7XG4gICAgICAvLyBVc2UgcmVmZXJlbmNlIGluc3RlYWQgb2Yga2V5XG4gICAgICBjbGlwYm9hcmREYXRhLmdlbmVyaWMgPSBjbGlwYm9hcmREYXRhLnNwZWNpZmljW2NsaXBib2FyZERhdGEuZ2VuZXJpY107XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsaXBib2FyZERhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBmaWxlIFVSTHMgYW5kIHJlc2V0IGNvbnRlbnQgSURzLlxuICAgKiBVc2VmdWwgd2hlbiBjb3B5aW5nIGNvbnRlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgUmVmZXJlbmNlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgTW9kaWZpZXMgdGhlIHBhdGggdG8gd29yayB3aGVuIHBhc3RlZFxuICAgKi9cbiAgdmFyIHJlY3Vyc2l2ZVVwZGF0ZSA9IGZ1bmN0aW9uIChwYXJhbXMsIGhhbmRsZXIpIHtcbiAgICBmb3IgKHZhciBwcm9wIGluIHBhcmFtcykge1xuICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBwYXJhbXNbcHJvcF0gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgdmFyIG9iaiA9IHBhcmFtc1twcm9wXTtcbiAgICAgICAgaWYgKG9iai5wYXRoICE9PSB1bmRlZmluZWQgJiYgb2JqLm1pbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG9iai5wYXRoID0gaGFuZGxlcihvYmoucGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKG9iai5saWJyYXJ5ICE9PSB1bmRlZmluZWQgJiYgb2JqLnN1YkNvbnRlbnRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBBdm9pZCBtdWx0aXBsZSBjb250ZW50IHdpdGggc2FtZSBJRFxuICAgICAgICAgICAgZGVsZXRlIG9iai5zdWJDb250ZW50SWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3Vyc2l2ZVVwZGF0ZShvYmosIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIEluaXQgSDVQIHdoZW4gcGFnZSBpcyBmdWxseSBsb2FkZGVkXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBQaWNrIHVwIGNsaXBib2FyZCBjaGFuZ2VzIGZyb20gb3RoZXIgdGFic1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ2g1cENsaXBib2FyZCcpIHtcbiAgICAgICAgLy8gVHJpZ2dlciBhbiBldmVudCBzbyBhbGwgJ1Bhc3RlJyBidXR0b25zIG1heSBiZSBlbmFibGVkLlxuICAgICAgICBINVAuZXh0ZXJuYWxEaXNwYXRjaGVyLnRyaWdnZXIoJ2RhdGFpbmNsaXBib2FyZCcsIHtyZXNldDogZXZlbnQubmV3VmFsdWUgPT09IG51bGx9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBjY1ZlcnNpb25zID0ge1xuICAgICAgJ2RlZmF1bHQnOiAnNC4wJyxcbiAgICAgICc0LjAnOiBINVAudCgnbGljZW5zZUNDNDAnKSxcbiAgICAgICczLjAnOiBINVAudCgnbGljZW5zZUNDMzAnKSxcbiAgICAgICcyLjUnOiBINVAudCgnbGljZW5zZUNDMjUnKSxcbiAgICAgICcyLjAnOiBINVAudCgnbGljZW5zZUNDMjAnKSxcbiAgICAgICcxLjAnOiBINVAudCgnbGljZW5zZUNDMTAnKSxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTWFwcyBjb3B5cmlnaHQgbGljZW5zZSBjb2RlcyB0byB0aGVpciBodW1hbiByZWFkYWJsZSBjb3VudGVycGFydC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgSDVQLmNvcHlyaWdodExpY2Vuc2VzID0ge1xuICAgICAgJ1UnOiBINVAudCgnbGljZW5zZVUnKSxcbiAgICAgICdDQyBCWSc6IHtcbiAgICAgICAgbGFiZWw6IEg1UC50KCdsaWNlbnNlQ0NCWScpLFxuICAgICAgICBsaW5rOiAnaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvOnZlcnNpb24nLFxuICAgICAgICB2ZXJzaW9uczogY2NWZXJzaW9uc1xuICAgICAgfSxcbiAgICAgICdDQyBCWS1TQSc6IHtcbiAgICAgICAgbGFiZWw6IEg1UC50KCdsaWNlbnNlQ0NCWVNBJyksXG4gICAgICAgIGxpbms6ICdodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS86dmVyc2lvbicsXG4gICAgICAgIHZlcnNpb25zOiBjY1ZlcnNpb25zXG4gICAgICB9LFxuICAgICAgJ0NDIEJZLU5EJzoge1xuICAgICAgICBsYWJlbDogSDVQLnQoJ2xpY2Vuc2VDQ0JZTkQnKSxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5kLzp2ZXJzaW9uJyxcbiAgICAgICAgdmVyc2lvbnM6IGNjVmVyc2lvbnNcbiAgICAgIH0sXG4gICAgICAnQ0MgQlktTkMnOiB7XG4gICAgICAgIGxhYmVsOiBINVAudCgnbGljZW5zZUNDQllOQycpLFxuICAgICAgICBsaW5rOiAnaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktbmMvOnZlcnNpb24nLFxuICAgICAgICB2ZXJzaW9uczogY2NWZXJzaW9uc1xuICAgICAgfSxcbiAgICAgICdDQyBCWS1OQy1TQSc6IHtcbiAgICAgICAgbGFiZWw6IEg1UC50KCdsaWNlbnNlQ0NCWU5DU0EnKSxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5jLXNhLzp2ZXJzaW9uJyxcbiAgICAgICAgdmVyc2lvbnM6IGNjVmVyc2lvbnNcbiAgICAgIH0sXG4gICAgICAnQ0MgQlktTkMtTkQnOiB7XG4gICAgICAgIGxhYmVsOiBINVAudCgnbGljZW5zZUNDQllOQ05EJyksXG4gICAgICAgIGxpbms6ICdodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1uYy1uZC86dmVyc2lvbicsXG4gICAgICAgIHZlcnNpb25zOiBjY1ZlcnNpb25zXG4gICAgICB9LFxuICAgICAgJ0NDMCAxLjAnOiB7XG4gICAgICAgIGxhYmVsOiBINVAudCgnbGljZW5zZUNDMDEwJyksXG4gICAgICAgIGxpbms6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvcHVibGljZG9tYWluL3plcm8vMS4wLydcbiAgICAgIH0sXG4gICAgICAnR05VIEdQTCc6IHtcbiAgICAgICAgbGFiZWw6IEg1UC50KCdsaWNlbnNlR1BMJyksXG4gICAgICAgIGxpbms6ICdodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTp2ZXJzaW9uLXN0YW5kYWxvbmUuaHRtbCcsXG4gICAgICAgIGxpbmtWZXJzaW9uczoge1xuICAgICAgICAgICd2Myc6ICczLjAnLFxuICAgICAgICAgICd2Mic6ICcyLjAnLFxuICAgICAgICAgICd2MSc6ICcxLjAnXG4gICAgICAgIH0sXG4gICAgICAgIHZlcnNpb25zOiB7XG4gICAgICAgICAgJ2RlZmF1bHQnOiAndjMnLFxuICAgICAgICAgICd2Myc6IEg1UC50KCdsaWNlbnNlVjMnKSxcbiAgICAgICAgICAndjInOiBINVAudCgnbGljZW5zZVYyJyksXG4gICAgICAgICAgJ3YxJzogSDVQLnQoJ2xpY2Vuc2VWMScpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnUEQnOiB7XG4gICAgICAgIGxhYmVsOiBINVAudCgnbGljZW5zZVBEJyksXG4gICAgICAgIHZlcnNpb25zOiB7XG4gICAgICAgICAgJ0NDMCAxLjAnOiB7XG4gICAgICAgICAgICBsYWJlbDogSDVQLnQoJ2xpY2Vuc2VDQzAxMCcpLFxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9wdWJsaWNkb21haW4vemVyby8xLjAvJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0NDIFBETSc6IHtcbiAgICAgICAgICAgIGxhYmVsOiBINVAudCgnbGljZW5zZVBETScpLFxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9wdWJsaWNkb21haW4vbWFyay8xLjAvJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdPREMgUERETCc6ICc8YSBocmVmPVwiaHR0cDovL29wZW5kYXRhY29tbW9ucy5vcmcvbGljZW5zZXMvcGRkbC8xLjAvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UHVibGljIERvbWFpbiBEZWRpY2F0aW9uIGFuZCBMaWNlbmNlPC9hPicsXG4gICAgICAnQ0MgUERNJzoge1xuICAgICAgICBsYWJlbDogSDVQLnQoJ2xpY2Vuc2VQRE0nKSxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9wdWJsaWNkb21haW4vbWFyay8xLjAvJ1xuICAgICAgfSxcbiAgICAgICdDJzogSDVQLnQoJ2xpY2Vuc2VDJyksXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiBINVAgaXMgZW1iZWRkZWQgb24gYW4gZXh0ZXJuYWwgcGFnZSB1c2luZyBpZnJhbWUuXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gSDVQLmV4dGVybmFsRW1iZWRcbiAgICAgKi9cblxuICAgIC8vIFJlbGF5IGV2ZW50cyB0byB0b3Agd2luZG93LiBUaGlzIG11c3QgYmUgZG9uZSBiZWZvcmUgSDVQLmluaXRcbiAgICAvLyBzaW5jZSBldmVudHMgbWF5IGJlIGZpcmVkIG9uIGluaXRpYWxpemF0aW9uLlxuICAgIGlmIChINVAuaXNGcmFtZWQgJiYgSDVQLmV4dGVybmFsRW1iZWQgPT09IGZhbHNlKSB7XG4gICAgICBINVAuZXh0ZXJuYWxEaXNwYXRjaGVyLm9uKCcqJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHdpbmRvdy5wYXJlbnQuSDVQLmV4dGVybmFsRGlzcGF0Y2hlci50cmlnZ2VyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJldmVudCBINVAgQ29yZSBmcm9tIGluaXRpYWxpemluZy4gTXVzdCBiZSBvdmVycmlkZW4gYmVmb3JlIGRvY3VtZW50IHJlYWR5LlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IEg1UC5wcmV2ZW50SW5pdFxuICAgICAqL1xuICAgIGlmICghSDVQLnByZXZlbnRJbml0KSB7XG4gICAgICAvLyBOb3RlIHRoYXQgdGhpcyBzdGFydCBzY3JpcHQgaGFzIHRvIGJlIGFuIGV4dGVybmFsIHJlc291cmNlIGZvciBpdCB0b1xuICAgICAgLy8gbG9hZCBpbiBjb3JyZWN0IG9yZGVyIGluIElFOS5cbiAgICAgIEg1UC5pbml0KGRvY3VtZW50LmJvZHkpO1xuICAgIH1cblxuICAgIGlmIChINVBJbnRlZ3JhdGlvbi5zYXZlRnJlcSAhPT0gZmFsc2UpIHtcbiAgICAgIC8vIFdoZW4gd2FzIHRoZSBsYXN0IHN0YXRlIHN0b3JlZFxuICAgICAgdmFyIGxhc3RTdG9yZWRPbiA9IDA7XG4gICAgICAvLyBTdG9yZSB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgSDVQIHdoZW4gbGVhdmluZyB0aGUgcGFnZS5cbiAgICAgIHZhciBzdG9yZUN1cnJlbnRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIGF0IGxlYXN0IDI1MCBtcyBoYXMgcGFzc2VkIHNpbmNlIGxhc3Qgc2F2ZVxuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gbGFzdFN0b3JlZE9uID4gMjUwKSB7XG4gICAgICAgICAgbGFzdFN0b3JlZE9uID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBINVAuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBINVAuaW5zdGFuY2VzW2ldO1xuICAgICAgICAgICAgaWYgKGluc3RhbmNlLmdldEN1cnJlbnRTdGF0ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGluc3RhbmNlLmdldEN1cnJlbnRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBpbnN0YW5jZS5nZXRDdXJyZW50U3RhdGUoKTtcbiAgICAgICAgICAgICAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBBc3luYyBpcyBub3QgdXNlZCB0byBwcmV2ZW50IHRoZSByZXF1ZXN0IGZyb20gYmVpbmcgY2FuY2VsbGVkLlxuICAgICAgICAgICAgICAgIEg1UC5zZXRVc2VyRGF0YShpbnN0YW5jZS5jb250ZW50SWQsICdzdGF0ZScsIHN0YXRlLCB7ZGVsZXRlT25DaGFuZ2U6IHRydWUsIGFzeW5jOiBmYWxzZX0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgLy8gaVBhZCBkb2VzIG5vdCBzdXBwb3J0IGJlZm9yZXVubG9hZCwgdGhlcmVmb3JlIHVzaW5nIHVubG9hZFxuICAgICAgSDVQLiR3aW5kb3cub25lKCdiZWZvcmV1bmxvYWQgdW5sb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBPbmx5IHdhbnQgdG8gZG8gdGhpcyBvbmNlXG4gICAgICAgIEg1UC4kd2luZG93Lm9mZigncGFnZWhpZGUgYmVmb3JldW5sb2FkIHVubG9hZCcpO1xuICAgICAgICBzdG9yZUN1cnJlbnRTdGF0ZSgpO1xuICAgICAgfSk7XG4gICAgICAvLyBwYWdlaGlkZSBpcyB1c2VkIG9uIGlQYWQgd2hlbiB0YWJzIGFyZSBzd2l0Y2hlZFxuICAgICAgSDVQLiR3aW5kb3cub24oJ3BhZ2VoaWRlJywgc3RvcmVDdXJyZW50U3RhdGUpO1xuICAgIH1cbiAgfSk7XG5cbn0pKEg1UC5qUXVlcnkpO1xuXG5cblxuLyoqKiBFWFBPUlRTIEZST00gZXhwb3J0cy1sb2FkZXIgKioqL1xubW9kdWxlLmV4cG9ydHMgPSBINVA7XG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xuIiwiaW1wb3J0ICdpbXBvcnRzLWxvYWRlcj9INVBJbnRlZ3JhdGlvbj0+d2luZG93LnBhcmVudC5INVBJbnRlZ3JhdGlvbiFINVAnO1xuaW1wb3J0ICdINVBFdmVudERpc3BhdGNoZXInO1xuaW1wb3J0ICdINVB4QVBJJztcbmltcG9ydCAnSDVQeEFQSUV2ZW50JztcbmltcG9ydCAnSDVQQ29udGVudFR5cGUnO1xuaW1wb3J0ICdINVBDb25maXJtYXRpb25EaWFsb2cnO1xuaW1wb3J0ICdINVBSZXF1ZXN0UXVldWUnO1xuaW1wb3J0ICdINVBBY3Rpb25CYXInO1xuIiwiLyoqXG4gKiBAY2xhc3NcbiAqIEBhdWdtZW50cyBINVAuRXZlbnREaXNwYXRjaGVyXG4gKiBAcGFyYW0ge09iamVjdH0gZGlzcGxheU9wdGlvbnNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzcGxheU9wdGlvbnMuZXhwb3J0IFRyaWdnZXJzIHRoZSBkaXNwbGF5IG9mIHRoZSAnRG93bmxvYWQnIGJ1dHRvblxuICogQHBhcmFtIHtib29sZWFufSBkaXNwbGF5T3B0aW9ucy5jb3B5cmlnaHQgVHJpZ2dlcnMgdGhlIGRpc3BsYXkgb2YgdGhlICdDb3B5cmlnaHQnIGJ1dHRvblxuICogQHBhcmFtIHtib29sZWFufSBkaXNwbGF5T3B0aW9ucy5lbWJlZCBUcmlnZ2VycyB0aGUgZGlzcGxheSBvZiB0aGUgJ0VtYmVkJyBidXR0b25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzcGxheU9wdGlvbnMuaWNvbiBUcmlnZ2VycyB0aGUgZGlzcGxheSBvZiB0aGUgJ0g1UCBpY29uJyBsaW5rXG4gKi9cbkg1UC5BY3Rpb25CYXIgPSAoZnVuY3Rpb24gKCQsIEV2ZW50RGlzcGF0Y2hlcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBmdW5jdGlvbiBBY3Rpb25CYXIoZGlzcGxheU9wdGlvbnMpIHtcbiAgICBFdmVudERpc3BhdGNoZXIuY2FsbCh0aGlzKTtcblxuICAgIC8qKiBAYWxpYXMgSDVQLkFjdGlvbkJhciMgKi9cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgaGFzQWN0aW9ucyA9IGZhbHNlO1xuXG4gICAgLy8gQ3JlYXRlIGFjdGlvbiBiYXJcbiAgICB2YXIgJGFjdGlvbnMgPSBINVAualF1ZXJ5KCc8dWwgY2xhc3M9XCJoNXAtYWN0aW9uc1wiPjwvdWw+Jyk7XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZm9yIGNyZWF0aW5nIGFjdGlvbiBiYXIgYnV0dG9ucy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VzdG9tQ2xhc3MgSW5zdGVhZCBvZiB0eXBlIGNsYXNzXG4gICAgICovXG4gICAgdmFyIGFkZEFjdGlvbkJ1dHRvbiA9IGZ1bmN0aW9uICh0eXBlLCBjdXN0b21DbGFzcykge1xuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGVzIHNlbGVjdGlvbiBvZiBhY3Rpb25cbiAgICAgICAqL1xuICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcih0eXBlKTtcbiAgICAgIH07XG4gICAgICBINVAualF1ZXJ5KCc8bGkvPicsIHtcbiAgICAgICAgJ2NsYXNzJzogJ2g1cC1idXR0b24gaDVwLW5vc2VsZWN0IGg1cC0nICsgKGN1c3RvbUNsYXNzID8gY3VzdG9tQ2xhc3MgOiB0eXBlKSxcbiAgICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAgIHRhYmluZGV4OiAwLFxuICAgICAgICB0aXRsZTogSDVQLnQodHlwZSArICdEZXNjcmlwdGlvbicpLFxuICAgICAgICBodG1sOiBINVAudCh0eXBlKSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogaGFuZGxlcixcbiAgICAgICAgICBrZXlwcmVzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAzMikge1xuICAgICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gKHNpbmNlIHJldHVybiBmYWxzZSB3aWxsIGJsb2NrIG90aGVyIGlucHV0cylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFwcGVuZFRvOiAkYWN0aW9uc1xuICAgICAgfSk7XG5cbiAgICAgIGhhc0FjdGlvbnMgPSB0cnVlO1xuICAgIH07XG5cbiAgICAvLyBSZWdpc3RlciBhY3Rpb24gYmFyIGJ1dHRvbnNcbiAgICBpZiAoZGlzcGxheU9wdGlvbnMuZXhwb3J0IHx8IGRpc3BsYXlPcHRpb25zLmNvcHkpIHtcbiAgICAgIC8vIEFkZCBleHBvcnQgYnV0dG9uXG4gICAgICBhZGRBY3Rpb25CdXR0b24oJ3JldXNlJywgJ2V4cG9ydCcpO1xuICAgIH1cbiAgICBpZiAoZGlzcGxheU9wdGlvbnMuY29weXJpZ2h0KSB7XG4gICAgICBhZGRBY3Rpb25CdXR0b24oJ2NvcHlyaWdodHMnKTtcbiAgICB9XG4gICAgaWYgKGRpc3BsYXlPcHRpb25zLmVtYmVkKSB7XG4gICAgICBhZGRBY3Rpb25CdXR0b24oJ2VtYmVkJyk7XG4gICAgfVxuICAgIGlmIChkaXNwbGF5T3B0aW9ucy5pY29uKSB7XG4gICAgICAvLyBBZGQgYWJvdXQgSDVQIGJ1dHRvbiBpY29uXG4gICAgICBINVAualF1ZXJ5KCc8bGk+PGEgY2xhc3M9XCJoNXAtbGlua1wiIGhyZWY9XCJodHRwOi8vaDVwLm9yZ1wiIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiJyArIEg1UC50KCdoNXBEZXNjcmlwdGlvbicpICsgJ1wiPjwvYT48L2xpPicpLmFwcGVuZFRvKCRhY3Rpb25zKTtcbiAgICAgIGhhc0FjdGlvbnMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGRvbSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtINVAualF1ZXJ5fVxuICAgICAqL1xuICAgIHNlbGYuZ2V0RE9NRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAkYWN0aW9ucztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRG9lcyB0aGUgYWN0aW9uYmFyIGNvbnRhaW4gYWN0aW9ucz9cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgc2VsZi5oYXNBY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGhhc0FjdGlvbnM7XG4gICAgfTtcbiAgfVxuXG4gIEFjdGlvbkJhci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUpO1xuICBBY3Rpb25CYXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWN0aW9uQmFyO1xuXG4gIHJldHVybiBBY3Rpb25CYXI7XG5cbn0pKEg1UC5qUXVlcnksIEg1UC5FdmVudERpc3BhdGNoZXIpO1xuIiwiLypnbG9iYWwgSDVQKi9cbkg1UC5Db25maXJtYXRpb25EaWFsb2cgPSAoZnVuY3Rpb24gKEV2ZW50RGlzcGF0Y2hlcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgY29uZmlybWF0aW9uIGRpYWxvZ1xuICAgKlxuICAgKiBAcGFyYW0gW29wdGlvbnNdIE9wdGlvbnMgZm9yIGNvbmZpcm1hdGlvbiBkaWFsb2dcbiAgICogQHBhcmFtIFtvcHRpb25zLmluc3RhbmNlXSBJbnN0YW5jZSB0aGF0IHVzZXMgY29uZmlybWF0aW9uIGRpYWxvZ1xuICAgKiBAcGFyYW0gW29wdGlvbnMuaGVhZGVyVGV4dF0gSGVhZGVyIHRleHRcbiAgICogQHBhcmFtIFtvcHRpb25zLmRpYWxvZ1RleHRdIERpYWxvZyB0ZXh0XG4gICAqIEBwYXJhbSBbb3B0aW9ucy5jYW5jZWxUZXh0XSBDYW5jZWwgZGlhbG9nIGJ1dHRvbiB0ZXh0XG4gICAqIEBwYXJhbSBbb3B0aW9ucy5jb25maXJtVGV4dF0gQ29uZmlybSBkaWFsb2cgYnV0dG9uIHRleHRcbiAgICogQHBhcmFtIFtvcHRpb25zLmhpZGVDYW5jZWxdIEhpZGUgY2FuY2VsIGJ1dHRvblxuICAgKiBAcGFyYW0gW29wdGlvbnMuaGlkZUV4aXRdIEhpZGUgZXhpdCBidXR0b25cbiAgICogQHBhcmFtIFtvcHRpb25zLnNraXBSZXN0b3JlRm9jdXNdIFNraXAgcmVzdG9yaW5nIGZvY3VzIHdoZW4gaGlkaW5nIHRoZSBkaWFsb2dcbiAgICogQHBhcmFtIFtvcHRpb25zLmNsYXNzZXNdIEV4dHJhIGNsYXNzZXMgZm9yIHBvcHVwXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgZnVuY3Rpb24gQ29uZmlybWF0aW9uRGlhbG9nKG9wdGlvbnMpIHtcbiAgICBFdmVudERpc3BhdGNoZXIuY2FsbCh0aGlzKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBNYWtlIHN1cmUgY29uZmlybWF0aW9uIGRpYWxvZ3MgaGF2ZSB1bmlxdWUgaWRcbiAgICBINVAuQ29uZmlybWF0aW9uRGlhbG9nLnVuaXF1ZUlkICs9IDE7XG4gICAgdmFyIHVuaXF1ZUlkID0gSDVQLkNvbmZpcm1hdGlvbkRpYWxvZy51bmlxdWVJZDtcblxuICAgIC8vIERlZmF1bHQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuaGVhZGVyVGV4dCA9IG9wdGlvbnMuaGVhZGVyVGV4dCB8fCBINVAudCgnY29uZmlybURpYWxvZ0hlYWRlcicpO1xuICAgIG9wdGlvbnMuZGlhbG9nVGV4dCA9IG9wdGlvbnMuZGlhbG9nVGV4dCB8fCBINVAudCgnY29uZmlybURpYWxvZ0JvZHknKTtcbiAgICBvcHRpb25zLmNhbmNlbFRleHQgPSBvcHRpb25zLmNhbmNlbFRleHQgfHwgSDVQLnQoJ2NhbmNlbExhYmVsJyk7XG4gICAgb3B0aW9ucy5jb25maXJtVGV4dCA9IG9wdGlvbnMuY29uZmlybVRleHQgfHwgSDVQLnQoJ2NvbmZpcm1MYWJlbCcpO1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGNvbmZpcm1pbmcgZXZlbnRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGlhbG9nQ29uZmlybWVkKGUpIHtcbiAgICAgIHNlbGYuaGlkZSgpO1xuICAgICAgc2VsZi50cmlnZ2VyKCdjb25maXJtZWQnKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgZGlhbG9nIGNhbmNlbGVkXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpYWxvZ0NhbmNlbGVkKGUpIHtcbiAgICAgIHNlbGYuaGlkZSgpO1xuICAgICAgc2VsZi50cmlnZ2VyKCdjYW5jZWxlZCcpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZsb3cgZm9jdXMgdG8gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgTmV4dCBlbGVtZW50IHRvIGJlIGZvY3VzZWRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlIE9yaWdpbmFsIHRhYiBldmVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZsb3dUbyhlbGVtZW50LCBlKSB7XG4gICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgLy8gT2Zmc2V0IG9mIGV4aXQgYnV0dG9uXG4gICAgdmFyIGV4aXRCdXR0b25PZmZzZXQgPSAyICogMTY7XG4gICAgdmFyIHNoYWRvd09mZnNldCA9IDg7XG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgd2UgYXJlIHRvbyBsYXJnZSBmb3Igb3VyIGNvbnRhaW5lciBhbmQgbXVzdCByZXNpemVcbiAgICB2YXIgcmVzaXplSUZyYW1lID0gZmFsc2U7XG5cbiAgICAvLyBDcmVhdGUgYmFja2dyb3VuZFxuICAgIHZhciBwb3B1cEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cEJhY2tncm91bmQuY2xhc3NMaXN0XG4gICAgICAuYWRkKCdoNXAtY29uZmlybWF0aW9uLWRpYWxvZy1iYWNrZ3JvdW5kJywgJ2hpZGRlbicsICdoaWRpbmcnKTtcblxuICAgIC8vIENyZWF0ZSBvdXRlciBwb3B1cFxuICAgIHZhciBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2g1cC1jb25maXJtYXRpb24tZGlhbG9nLXBvcHVwJywgJ2hpZGRlbicpO1xuICAgIGlmIChvcHRpb25zLmNsYXNzZXMpIHtcbiAgICAgIG9wdGlvbnMuY2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChwb3B1cENsYXNzKSB7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQocG9wdXBDbGFzcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCAnaDVwLWNvbmZpcm1hdGlvbi1kaWFsb2ctZGlhbG9nLXRleHQtJyArIHVuaXF1ZUlkKTtcbiAgICBwb3B1cEJhY2tncm91bmQuYXBwZW5kQ2hpbGQocG9wdXApO1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUud2hpY2ggPT09IDI3KSB7Ly8gRXNjIGtleVxuICAgICAgICAvLyBFeGl0IGRpYWxvZ1xuICAgICAgICBkaWFsb2dDYW5jZWxlZChlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFBvcHVwIGhlYWRlclxuICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaDVwLWNvbmZpcm1hdGlvbi1kaWFsb2ctaGVhZGVyJyk7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIC8vIEhlYWRlciB0ZXh0XG4gICAgdmFyIGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJUZXh0LmNsYXNzTGlzdC5hZGQoJ2g1cC1jb25maXJtYXRpb24tZGlhbG9nLWhlYWRlci10ZXh0Jyk7XG4gICAgaGVhZGVyVGV4dC5pbm5lckhUTUwgPSBvcHRpb25zLmhlYWRlclRleHQ7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuXG4gICAgLy8gUG9wdXAgYm9keVxuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdoNXAtY29uZmlybWF0aW9uLWRpYWxvZy1ib2R5Jyk7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQoYm9keSk7XG5cbiAgICAvLyBQb3B1cCB0ZXh0XG4gICAgdmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2g1cC1jb25maXJtYXRpb24tZGlhbG9nLXRleHQnKTtcbiAgICB0ZXh0LmlubmVySFRNTCA9IG9wdGlvbnMuZGlhbG9nVGV4dDtcbiAgICB0ZXh0LmlkID0gJ2g1cC1jb25maXJtYXRpb24tZGlhbG9nLWRpYWxvZy10ZXh0LScgKyB1bmlxdWVJZDtcbiAgICBib2R5LmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgLy8gUG9wdXAgYnV0dG9uc1xuICAgIHZhciBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdoNXAtY29uZmlybWF0aW9uLWRpYWxvZy1idXR0b25zJyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChidXR0b25zKTtcblxuICAgIC8vIENhbmNlbCBidXR0b25cbiAgICB2YXIgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2g1cC1jb3JlLWNhbmNlbC1idXR0b24nKTtcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBvcHRpb25zLmNhbmNlbFRleHQ7XG5cbiAgICAvLyBDb25maXJtIGJ1dHRvblxuICAgIHZhciBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoNXAtY29yZS1idXR0b24nKTtcbiAgICBjb25maXJtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2g1cC1jb25maXJtYXRpb24tZGlhbG9nLWNvbmZpcm0tYnV0dG9uJyk7XG4gICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9IG9wdGlvbnMuY29uZmlybVRleHQ7XG5cbiAgICAvLyBFeGl0IGJ1dHRvblxuICAgIHZhciBleGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZXhpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoNXAtY29uZmlybWF0aW9uLWRpYWxvZy1leGl0Jyk7XG4gICAgZXhpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBleGl0QnV0dG9uLnRhYkluZGV4ID0gLTE7XG4gICAgZXhpdEJ1dHRvbi50aXRsZSA9IG9wdGlvbnMuY2FuY2VsVGV4dDtcblxuICAgIC8vIENhbmNlbCBoYW5kbGVyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlhbG9nQ2FuY2VsZWQpO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLndoaWNoID09PSAzMikgeyAvLyBTcGFjZVxuICAgICAgICBkaWFsb2dDYW5jZWxlZChlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGUud2hpY2ggPT09IDkgJiYgZS5zaGlmdEtleSkgeyAvLyBTaGlmdC10YWJcbiAgICAgICAgZmxvd1RvKGNvbmZpcm1CdXR0b24sIGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFvcHRpb25zLmhpZGVDYW5jZWwpIHtcbiAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBDZW50ZXIgYnV0dG9uc1xuICAgICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdjZW50ZXInKTtcbiAgICB9XG5cbiAgICAvLyBDb25maXJtIGhhbmRsZXJcbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlhbG9nQ29uZmlybWVkKTtcbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUud2hpY2ggPT09IDMyKSB7IC8vIFNwYWNlXG4gICAgICAgIGRpYWxvZ0NvbmZpcm1lZChlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGUud2hpY2ggPT09IDkgJiYgIWUuc2hpZnRLZXkpIHsgLy8gVGFiXG4gICAgICAgIGNvbnN0IG5leHRCdXR0b24gPSAhb3B0aW9ucy5oaWRlQ2FuY2VsID8gY2FuY2VsQnV0dG9uIDogY29uZmlybUJ1dHRvbjtcbiAgICAgICAgZmxvd1RvKG5leHRCdXR0b24sIGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbik7XG5cbiAgICAvLyBFeGl0IGhhbmRsZXJcbiAgICBleGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlhbG9nQ2FuY2VsZWQpO1xuICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS53aGljaCA9PT0gMzIpIHsgLy8gU3BhY2VcbiAgICAgICAgZGlhbG9nQ2FuY2VsZWQoZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFvcHRpb25zLmhpZGVFeGl0KSB7XG4gICAgICBwb3B1cC5hcHBlbmRDaGlsZChleGl0QnV0dG9uKTtcbiAgICB9XG5cbiAgICAvLyBXcmFwcGVyIGVsZW1lbnRcbiAgICB2YXIgd3JhcHBlckVsZW1lbnQ7XG5cbiAgICAvLyBGb2N1cyBjYXB0dXJpbmdcbiAgICB2YXIgZm9jdXNQcmVkYXRvcjtcblxuICAgIC8vIE1haW50YWlucyBoaWRkZW4gc3RhdGUgb2YgZWxlbWVudHNcbiAgICB2YXIgd3JhcHBlclNpYmxpbmdzSGlkZGVuID0gW107XG4gICAgdmFyIHBvcHVwU2libGluZ3NIaWRkZW4gPSBbXTtcblxuICAgIC8vIEVsZW1lbnQgd2l0aCBmb2N1cyBiZWZvcmUgZGlhbG9nXG4gICAgdmFyIHByZXZpb3VzbHlGb2N1c2VkO1xuXG4gICAgLyoqXG4gICAgICogU2V0IHBhcmVudCBvZiBjb25maXJtYXRpb24gZGlhbG9nXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gd3JhcHBlclxuICAgICAqIEByZXR1cm5zIHtINVAuQ29uZmlybWF0aW9uRGlhbG9nfVxuICAgICAqL1xuICAgIHRoaXMuYXBwZW5kVG8gPSBmdW5jdGlvbiAod3JhcHBlcikge1xuICAgICAgd3JhcHBlckVsZW1lbnQgPSB3cmFwcGVyO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENhcHR1cmUgdGhlIGZvY3VzIGVsZW1lbnQsIHNlbmQgaXQgdG8gY29uZmlybWF0aW9uIGJ1dHRvblxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGUgT3JpZ2luYWwgZm9jdXMgZXZlbnRcbiAgICAgKi9cbiAgICB2YXIgY2FwdHVyZUZvY3VzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghcG9wdXBCYWNrZ3JvdW5kLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbmZpcm1CdXR0b24uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGlkZSBzaWJsaW5ncyBvZiBlbGVtZW50IGZyb20gYXNzaXN0aXZlIHRlY2hub2xvZ3lcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBwcmV2aW91cyBoaWRkZW4gc3RhdGUgb2YgYWxsIHNpYmxpbmdzXG4gICAgICovXG4gICAgdmFyIGhpZGVTaWJsaW5ncyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB2YXIgaGlkZGVuU2libGluZ3MgPSBbXTtcbiAgICAgIHZhciBzaWJsaW5ncyA9IGVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZHJlbjtcbiAgICAgIHZhciBpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHNpYmxpbmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIC8vIFByZXNlcnZlIGhpZGRlbiBzdGF0ZVxuICAgICAgICBoaWRkZW5TaWJsaW5nc1tpXSA9IHNpYmxpbmdzW2ldLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSA/XG4gICAgICAgICAgdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgIGlmIChzaWJsaW5nc1tpXSAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIHNpYmxpbmdzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGhpZGRlblNpYmxpbmdzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXN0b3JlcyBhc3Npc3RpdmUgdGVjaG5vbG9neSBzdGF0ZSBvZiBlbGVtZW50J3Mgc2libGluZ3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBoaWRkZW5TaWJsaW5ncyBIaWRkZW4gc3RhdGUgb2YgYWxsIHNpYmxpbmdzXG4gICAgICovXG4gICAgdmFyIHJlc3RvcmVTaWJsaW5ncyA9IGZ1bmN0aW9uIChlbGVtZW50LCBoaWRkZW5TaWJsaW5ncykge1xuICAgICAgdmFyIHNpYmxpbmdzID0gZWxlbWVudC5wYXJlbnROb2RlLmNoaWxkcmVuO1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgc2libGluZ3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNpYmxpbmdzW2ldICE9PSBlbGVtZW50ICYmICFoaWRkZW5TaWJsaW5nc1tpXSkge1xuICAgICAgICAgIHNpYmxpbmdzW2ldLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBjYXB0dXJpbmcgZm9jdXMgb2YgcGFyZW50IGFuZCBzZW5kIGl0IHRvIGRpYWxvZ1xuICAgICAqL1xuICAgIHZhciBzdGFydENhcHR1cmluZ0ZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9jdXNQcmVkYXRvciA9IHdyYXBwZXJFbGVtZW50LnBhcmVudE5vZGUgfHwgd3JhcHBlckVsZW1lbnQ7XG4gICAgICBmb2N1c1ByZWRhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgY2FwdHVyZUZvY3VzLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYW4gdXAgZXZlbnQgbGlzdGVuZXIgZm9yIGNhcHR1cmluZyBmb2N1c1xuICAgICAqL1xuICAgIHZhciBzdG9wQ2FwdHVyaW5nRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb2N1c1ByZWRhdG9yLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIGZvY3VzUHJlZGF0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjYXB0dXJlRm9jdXMsIHRydWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHNpYmxpbmdzIGluIHVuZGVybGF5IGZyb20gYXNzaXN0aXZlIHRlY2hub2xvZ2llc1xuICAgICAqL1xuICAgIHZhciBkaXNhYmxlVW5kZXJsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3cmFwcGVyU2libGluZ3NIaWRkZW4gPSBoaWRlU2libGluZ3Mod3JhcHBlckVsZW1lbnQpO1xuICAgICAgcG9wdXBTaWJsaW5nc0hpZGRlbiA9IGhpZGVTaWJsaW5ncyhwb3B1cEJhY2tncm91bmQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXN0b3JlIHN0YXRlIG9mIHVuZGVybGF5IGZvciBhc3Npc3RpdmUgdGVjaG5vbG9naWVzXG4gICAgICovXG4gICAgdmFyIHJlc3RvcmVVbmRlcmxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc3RvcmVTaWJsaW5ncyh3cmFwcGVyRWxlbWVudCwgd3JhcHBlclNpYmxpbmdzSGlkZGVuKTtcbiAgICAgIHJlc3RvcmVTaWJsaW5ncyhwb3B1cEJhY2tncm91bmQsIHBvcHVwU2libGluZ3NIaWRkZW4pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaXQgcG9wdXAgdG8gY29udGFpbmVyLiBNYWtlcyBzdXJlIGl0IGRvZXNuJ3Qgb3ZlcmZsb3cuXG4gICAgICogQHBhcmFtcyB7bnVtYmVyfSBbb2Zmc2V0VG9wXSBPZmZzZXQgb2YgcG9wdXBcbiAgICAgKi9cbiAgICB2YXIgZml0VG9Db250YWluZXIgPSBmdW5jdGlvbiAob2Zmc2V0VG9wKSB7XG4gICAgICB2YXIgcG9wdXBPZmZzZXRUb3AgPSBwYXJzZUludChwb3B1cC5zdHlsZS50b3AsIDEwKTtcbiAgICAgIGlmIChvZmZzZXRUb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwb3B1cE9mZnNldFRvcCA9IG9mZnNldFRvcDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwb3B1cE9mZnNldFRvcCkge1xuICAgICAgICBwb3B1cE9mZnNldFRvcCA9IDA7XG4gICAgICB9XG5cbiAgICAgIC8vIE92ZXJmbG93cyBoZWlnaHRcbiAgICAgIGlmIChwb3B1cE9mZnNldFRvcCArIHBvcHVwLm9mZnNldEhlaWdodCA+IHdyYXBwZXJFbGVtZW50Lm9mZnNldEhlaWdodCkge1xuICAgICAgICBwb3B1cE9mZnNldFRvcCA9IHdyYXBwZXJFbGVtZW50Lm9mZnNldEhlaWdodCAtIHBvcHVwLm9mZnNldEhlaWdodCAtIHNoYWRvd09mZnNldDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBvcHVwT2Zmc2V0VG9wIC0gZXhpdEJ1dHRvbk9mZnNldCA8PSAwKSB7XG4gICAgICAgIHBvcHVwT2Zmc2V0VG9wID0gZXhpdEJ1dHRvbk9mZnNldCArIHNoYWRvd09mZnNldDtcblxuICAgICAgICAvLyBXZSBhcmUgdG9vIGJpZyBhbmQgbXVzdCByZXNpemVcbiAgICAgICAgcmVzaXplSUZyYW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHBvcHVwLnN0eWxlLnRvcCA9IHBvcHVwT2Zmc2V0VG9wICsgJ3B4JztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2hvdyBjb25maXJtYXRpb24gZGlhbG9nXG4gICAgICogQHBhcmFtcyB7bnVtYmVyfSBvZmZzZXRUb3AgT2Zmc2V0IHRvcFxuICAgICAqIEByZXR1cm5zIHtINVAuQ29uZmlybWF0aW9uRGlhbG9nfVxuICAgICAqL1xuICAgIHRoaXMuc2hvdyA9IGZ1bmN0aW9uIChvZmZzZXRUb3ApIHtcbiAgICAgIC8vIENhcHR1cmUgZm9jdXNlZCBpdGVtXG4gICAgICBwcmV2aW91c2x5Rm9jdXNlZCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICB3cmFwcGVyRWxlbWVudC5hcHBlbmRDaGlsZChwb3B1cEJhY2tncm91bmQpO1xuICAgICAgc3RhcnRDYXB0dXJpbmdGb2N1cygpO1xuICAgICAgZGlzYWJsZVVuZGVybGF5KCk7XG4gICAgICBwb3B1cEJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBmaXRUb0NvbnRhaW5lcihvZmZzZXRUb3ApO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBwb3B1cEJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkaW5nJyk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gRm9jdXMgY29uZmlybSBidXR0b25cbiAgICAgICAgICBjb25maXJtQnV0dG9uLmZvY3VzKCk7XG5cbiAgICAgICAgICAvLyBSZXNpemUgaUZyYW1lIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgIGlmIChyZXNpemVJRnJhbWUgJiYgb3B0aW9ucy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdmFyIG1pbkhlaWdodCA9IHBhcnNlSW50KHBvcHVwLm9mZnNldEhlaWdodCwgMTApICtcbiAgICAgICAgICAgICAgZXhpdEJ1dHRvbk9mZnNldCArICgyICogc2hhZG93T2Zmc2V0KTtcbiAgICAgICAgICAgIHNlbGYuc2V0Vmlld1BvcnRNaW5pbXVtSGVpZ2h0KG1pbkhlaWdodCk7XG4gICAgICAgICAgICBvcHRpb25zLmluc3RhbmNlLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICAgICAgICAgICAgcmVzaXplSUZyYW1lID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgICAgfSwgMCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIGNvbmZpcm1hdGlvbiBkaWFsb2dcbiAgICAgKiBAcmV0dXJucyB7SDVQLkNvbmZpcm1hdGlvbkRpYWxvZ31cbiAgICAgKi9cbiAgICB0aGlzLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwb3B1cEJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnaGlkaW5nJyk7XG4gICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgICAgLy8gUmVzdG9yZSBmb2N1c1xuICAgICAgc3RvcENhcHR1cmluZ0ZvY3VzKCk7XG4gICAgICBpZiAoIW9wdGlvbnMuc2tpcFJlc3RvcmVGb2N1cykge1xuICAgICAgICBwcmV2aW91c2x5Rm9jdXNlZC5mb2N1cygpO1xuICAgICAgfVxuICAgICAgcmVzdG9yZVVuZGVybGF5KCk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcG9wdXBCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB3cmFwcGVyRWxlbWVudC5yZW1vdmVDaGlsZChwb3B1cEJhY2tncm91bmQpO1xuICAgICAgICBzZWxmLnNldFZpZXdQb3J0TWluaW11bUhlaWdodChudWxsKTtcbiAgICAgIH0sIDEwMCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICB0aGlzLmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcG9wdXA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCBwcmV2aW91c2x5IGZvY3VzZWQgZWxlbWVudFxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHRoaXMuZ2V0UHJldmlvdXNseUZvY3VzZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcHJldmlvdXNseUZvY3VzZWQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1pbmltdW0gaGVpZ2h0IG9mIHRoZSB2aWV3IHBvcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfG51bGx9IG1pbkhlaWdodFxuICAgICAqL1xuICAgIHRoaXMuc2V0Vmlld1BvcnRNaW5pbXVtSGVpZ2h0ID0gZnVuY3Rpb24gKG1pbkhlaWdodCkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oNXAtY29udGFpbmVyJykgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSAodHlwZW9mIG1pbkhlaWdodCA9PT0gJ251bWJlcicpID8gKG1pbkhlaWdodCArICdweCcpIDogbWluSGVpZ2h0O1xuICAgIH07XG4gIH1cblxuICBDb25maXJtYXRpb25EaWFsb2cucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudERpc3BhdGNoZXIucHJvdG90eXBlKTtcbiAgQ29uZmlybWF0aW9uRGlhbG9nLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbmZpcm1hdGlvbkRpYWxvZztcblxuICByZXR1cm4gQ29uZmlybWF0aW9uRGlhbG9nO1xuXG59KEg1UC5FdmVudERpc3BhdGNoZXIpKTtcblxuSDVQLkNvbmZpcm1hdGlvbkRpYWxvZy51bmlxdWVJZCA9IC0xO1xuIiwiLyoqXG4gKiBINVAuQ29udGVudFR5cGUgaXMgYSBiYXNlIGNsYXNzIGZvciBhbGwgY29udGVudCB0eXBlcy4gVXNlZCBieSBuZXdSdW5uYWJsZSgpXG4gKlxuICogRnVuY3Rpb25zIGhlcmUgbWF5IGJlIG92ZXJyaWRhYmxlIGJ5IHRoZSBsaWJyYXJpZXMuIEluIHNwZWNpYWwgY2FzZXMsXG4gKiBpdCBpcyBhbHNvIHBvc3NpYmxlIHRvIG92ZXJyaWRlIEg1UC5Db250ZW50VHlwZSBvbiBhIGdsb2JhbCBsZXZlbC5cbiAqXG4gKiBOT1RFIHRoYXQgdGhpcyBkb2Vzbid0IGFjdHVhbGx5ICdleHRlbmQnIHRoZSBldmVudCBkaXNwYXRjaGVyIGJ1dCBpbnN0ZWFkXG4gKiBpdCBjcmVhdGVzIGEgc2luZ2xlIGluc3RhbmNlIHdoaWNoIGFsbCBjb250ZW50IHR5cGVzIHNoYXJlcyBhcyB0aGVpciBiYXNlXG4gKiBwcm90b3R5cGUuIChpbiBzb21lIGNhc2VzIHRoaXMgbWF5IGJlIHRoZSByb290IG9mIHN0cmFuZ2UgZXZlbnQgYmVoYXZpb3IpXG4gKlxuICogQGNsYXNzXG4gKiBAYXVnbWVudHMgSDVQLkV2ZW50RGlzcGF0Y2hlclxuICovXG5INVAuQ29udGVudFR5cGUgPSBmdW5jdGlvbiAoaXNSb290TGlicmFyeSkge1xuXG4gIGZ1bmN0aW9uIENvbnRlbnRUeXBlKCkge31cblxuICAvLyBJbmhlcml0IGZyb20gRXZlbnREaXNwYXRjaGVyLlxuICBDb250ZW50VHlwZS5wcm90b3R5cGUgPSBuZXcgSDVQLkV2ZW50RGlzcGF0Y2hlcigpO1xuXG4gIC8qKlxuICAgKiBJcyBsaWJyYXJ5IHN0YW5kYWxvbmUgb3Igbm90PyBOb3QgYmVlaW5nIHN0YW5kYWxvbmUsIG1lYW5zIGl0IGlzXG4gICAqIGluY2x1ZGVkIGluIGFub3RoZXIgbGlicmFyeVxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgQ29udGVudFR5cGUucHJvdG90eXBlLmlzUm9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaXNSb290TGlicmFyeTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZmlsZSBwYXRoIG9mIGEgZmlsZSBpbiB0aGUgY3VycmVudCBsaWJyYXJ5XG4gICAqIEBwYXJhbSAge3N0cmluZ30gZmlsZVBhdGggVGhlIHBhdGggdG8gdGhlIGZpbGUgcmVsYXRpdmUgdG8gdGhlIGxpYnJhcnkgZm9sZGVyXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGZ1bGwgcGF0aCB0byB0aGUgZmlsZVxuICAgKi9cbiAgQ29udGVudFR5cGUucHJvdG90eXBlLmdldExpYnJhcnlGaWxlUGF0aCA9IGZ1bmN0aW9uIChmaWxlUGF0aCkge1xuICAgIHJldHVybiBINVAuZ2V0TGlicmFyeVBhdGgodGhpcy5saWJyYXJ5SW5mby52ZXJzaW9uZWROYW1lTm9TcGFjZXMpICsgJy8nICsgZmlsZVBhdGg7XG4gIH07XG5cbiAgcmV0dXJuIENvbnRlbnRUeXBlO1xufTtcbiIsInZhciBINVAgPSB3aW5kb3cuSDVQID0gd2luZG93Lkg1UCB8fCB7fTtcblxuLyoqXG4gKiBUaGUgRXZlbnQgY2xhc3MgZm9yIHRoZSBFdmVudERpc3BhdGNoZXIuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHsqfSBkYXRhXG4gKiBAcGFyYW0ge09iamVjdH0gW2V4dHJhc11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V4dHJhcy5idWJibGVzXVxuICogQHBhcmFtIHtib29sZWFufSBbZXh0cmFzLmV4dGVybmFsXVxuICovXG5INVAuRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgZGF0YSwgZXh0cmFzKSB7XG4gIHRoaXMudHlwZSA9IHR5cGU7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHZhciBidWJibGVzID0gZmFsc2U7XG5cbiAgLy8gSXMgdGhpcyBhbiBleHRlcm5hbCBldmVudD9cbiAgdmFyIGV4dGVybmFsID0gZmFsc2U7XG5cbiAgLy8gSXMgdGhpcyBldmVudCBzY2hlZHVsZWQgdG8gYmUgc2VudCBleHRlcm5hbGx5P1xuICB2YXIgc2NoZWR1bGVkRm9yRXh0ZXJuYWwgPSBmYWxzZTtcblxuICBpZiAoZXh0cmFzID09PSB1bmRlZmluZWQpIHtcbiAgICBleHRyYXMgPSB7fTtcbiAgfVxuICBpZiAoZXh0cmFzLmJ1YmJsZXMgPT09IHRydWUpIHtcbiAgICBidWJibGVzID0gdHJ1ZTtcbiAgfVxuICBpZiAoZXh0cmFzLmV4dGVybmFsID09PSB0cnVlKSB7XG4gICAgZXh0ZXJuYWwgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXZlbnQgdGhpcyBldmVudCBmcm9tIGJ1YmJsaW5nIHVwIHRvIHBhcmVudFxuICAgKi9cbiAgdGhpcy5wcmV2ZW50QnViYmxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgYnViYmxlcyA9IGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYnViYmxpbmcgc3RhdHVzXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiAgIHRydWUgaWYgYnViYmxpbmcgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICB0aGlzLmdldEJ1YmJsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGJ1YmJsZXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRyeSB0byBzY2hlZHVsZSBhbiBldmVudCBmb3IgZXh0ZXJuYWxEaXNwYXRjaGVyXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiAgIHRydWUgaWYgZXh0ZXJuYWwgYW5kIG5vdCBhbHJlYWR5IHNjaGVkdWxlZCwgb3RoZXJ3aXNlIGZhbHNlXG4gICAqL1xuICB0aGlzLnNjaGVkdWxlRm9yRXh0ZXJuYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGV4dGVybmFsICYmICFzY2hlZHVsZWRGb3JFeHRlcm5hbCkge1xuICAgICAgc2NoZWR1bGVkRm9yRXh0ZXJuYWwgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn07XG5cbi8qKlxuICogQ2FsbGJhY2sgdHlwZSBmb3IgZXZlbnQgbGlzdGVuZXJzLlxuICpcbiAqIEBjYWxsYmFjayBINVAuRXZlbnRDYWxsYmFja1xuICogQHBhcmFtIHtINVAuRXZlbnR9IGV2ZW50XG4gKi9cblxuSDVQLkV2ZW50RGlzcGF0Y2hlciA9IChmdW5jdGlvbiAoKSB7XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIG9mIHRoZSBldmVudCBzeXN0ZW0uXG4gICAqIEluaGVyaXQgdGhpcyBjbGFzcyBpZiB5b3Ugd2FudCB5b3VyIEg1UCB0byBkaXNwYXRjaCBldmVudHMuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAbWVtYmVyb2YgSDVQXG4gICAqL1xuICBmdW5jdGlvbiBFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogS2VlcCB0cmFjayBvZiBsaXN0ZW5lcnMgZm9yIGVhY2ggZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIHRyaWdnZXJzID0ge307XG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV3IGV2ZW50IGxpc3RlbmVyLlxuICAgICAqXG4gICAgICogQHRocm93cyB7VHlwZUVycm9yfVxuICAgICAqICAgbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiAgIEV2ZW50IHR5cGVcbiAgICAgKiBAcGFyYW0ge0g1UC5FdmVudENhbGxiYWNrfSBsaXN0ZW5lclxuICAgICAqICAgRXZlbnQgbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3RoaXNBcmddXG4gICAgICogICBPcHRpb25hbGx5IHNwZWNpZnkgdGhlIHRoaXMgdmFsdWUgd2hlbiBjYWxsaW5nIGxpc3RlbmVyLlxuICAgICAqL1xuICAgIHRoaXMub24gPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHRoaXNBcmcpIHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJpZ2dlciBldmVudCBiZWZvcmUgYWRkaW5nIHRvIGF2b2lkIHJlY3Vyc2lvblxuICAgICAgc2VsZi50cmlnZ2VyKCduZXdMaXN0ZW5lcicsIHsndHlwZSc6IHR5cGUsICdsaXN0ZW5lcic6IGxpc3RlbmVyfSk7XG5cbiAgICAgIHZhciB0cmlnZ2VyID0geydsaXN0ZW5lcic6IGxpc3RlbmVyLCAndGhpc0FyZyc6IHRoaXNBcmd9O1xuICAgICAgaWYgKCF0cmlnZ2Vyc1t0eXBlXSkge1xuICAgICAgICAvLyBGaXJzdFxuICAgICAgICB0cmlnZ2Vyc1t0eXBlXSA9IFt0cmlnZ2VyXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBBcHBlbmRcbiAgICAgICAgdHJpZ2dlcnNbdHlwZV0ucHVzaCh0cmlnZ2VyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkIG5ldyBldmVudCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgb25seSBvbmNlLlxuICAgICAqXG4gICAgICogQHRocm93cyB7VHlwZUVycm9yfVxuICAgICAqICAgbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiAgIEV2ZW50IHR5cGVcbiAgICAgKiBAcGFyYW0ge0g1UC5FdmVudENhbGxiYWNrfSBsaXN0ZW5lclxuICAgICAqICAgRXZlbnQgbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZ1xuICAgICAqICAgT3B0aW9uYWxseSBzcGVjaWZ5IHRoZSB0aGlzIHZhbHVlIHdoZW4gY2FsbGluZyBsaXN0ZW5lci5cbiAgICAgKi9cbiAgICB0aGlzLm9uY2UgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHRoaXNBcmcpIHtcbiAgICAgIGlmICghKGxpc3RlbmVyIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBvbmNlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHNlbGYub2ZmKGV2ZW50LnR5cGUsIG9uY2UpO1xuICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIHNlbGYub24odHlwZSwgb25jZSwgdGhpc0FyZyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBldmVudCBsaXN0ZW5lci5cbiAgICAgKiBJZiBubyBsaXN0ZW5lciBpcyBzcGVjaWZpZWQsIGFsbCBsaXN0ZW5lcnMgd2lsbCBiZSByZW1vdmVkLlxuICAgICAqXG4gICAgICogQHRocm93cyB7VHlwZUVycm9yfVxuICAgICAqICAgbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiAgIEV2ZW50IHR5cGVcbiAgICAgKiBAcGFyYW0ge0g1UC5FdmVudENhbGxiYWNrfSBsaXN0ZW5lclxuICAgICAqICAgRXZlbnQgbGlzdGVuZXJcbiAgICAgKi9cbiAgICB0aGlzLm9mZiA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgaWYgKGxpc3RlbmVyICE9PSB1bmRlZmluZWQgJiYgIShsaXN0ZW5lciBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJpZ2dlcnNbdHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIFJlbW92ZSBhbGwgbGlzdGVuZXJzXG4gICAgICAgIGRlbGV0ZSB0cmlnZ2Vyc1t0eXBlXTtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmQgc3BlY2lmaWMgbGlzdGVuZXJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJpZ2dlcnNbdHlwZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRyaWdnZXJzW3R5cGVdW2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgIHRyaWdnZXJzW3R5cGVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgeydsaXN0ZW5lcic6IGxpc3RlbmVyfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYW4gdXAgZW1wdHkgYXJyYXlzXG4gICAgICBpZiAoIXRyaWdnZXJzW3R5cGVdLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgdHJpZ2dlcnNbdHlwZV07XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyeSB0byBjYWxsIGFsbCBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBnaXZlbiBldmVudCB0eXBlLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gRXZlbnQgdHlwZVxuICAgICAqL1xuICAgIHZhciBjYWxsID0gZnVuY3Rpb24gKHR5cGUsIGV2ZW50KSB7XG4gICAgICBpZiAodHJpZ2dlcnNbdHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENsb25lIGFycmF5IChwcmV2ZW50cyB0cmlnZ2VycyBmcm9tIGJlaW5nIG1vZGlmaWVkIGR1cmluZyB0aGUgZXZlbnQpXG4gICAgICB2YXIgaGFuZGxlcnMgPSB0cmlnZ2Vyc1t0eXBlXS5zbGljZSgpO1xuXG4gICAgICAvLyBDYWxsIGFsbCBsaXN0ZW5lcnNcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSBoYW5kbGVyc1tpXTtcbiAgICAgICAgdmFyIHRoaXNBcmcgPSAodHJpZ2dlci50aGlzQXJnID8gdHJpZ2dlci50aGlzQXJnIDogdGhpcyk7XG4gICAgICAgIHRyaWdnZXIubGlzdGVuZXIuY2FsbCh0aGlzQXJnLCBldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8SDVQLkV2ZW50fSBldmVudFxuICAgICAqICAgRXZlbnQgb2JqZWN0IG9yIGV2ZW50IHR5cGUgYXMgc3RyaW5nXG4gICAgICogQHBhcmFtIHsqfSBbZXZlbnREYXRhXVxuICAgICAqICAgQ3VzdG9tIGV2ZW50IGRhdGEodXNlZCB3aGVuIGV2ZW50IHR5cGUgYXMgc3RyaW5nIGlzIHVzZWQgYXMgZmlyc3RcbiAgICAgKiAgIGFyZ3VtZW50KS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2V4dHJhc11cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtleHRyYXMuYnViYmxlc11cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtleHRyYXMuZXh0ZXJuYWxdXG4gICAgICovXG4gICAgdGhpcy50cmlnZ2VyID0gZnVuY3Rpb24gKGV2ZW50LCBldmVudERhdGEsIGV4dHJhcykge1xuICAgICAgaWYgKGV2ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgU3RyaW5nIHx8IHR5cGVvZiBldmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZXZlbnQgPSBuZXcgSDVQLkV2ZW50KGV2ZW50LCBldmVudERhdGEsIGV4dHJhcyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBldmVudC5kYXRhID0gZXZlbnREYXRhO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhpcyBldmVudCBzaG91bGQgZ28gZXh0ZXJuYWxseSBhZnRlciBhbGwgdHJpZ2dlcmluZyBhbmQgYnViYmxpbmcgaXMgZG9uZVxuICAgICAgdmFyIHNjaGVkdWxlZEZvckV4dGVybmFsID0gZXZlbnQuc2NoZWR1bGVGb3JFeHRlcm5hbCgpO1xuXG4gICAgICAvLyBDYWxsIGFsbCBsaXN0ZW5lcnNcbiAgICAgIGNhbGwuY2FsbCh0aGlzLCBldmVudC50eXBlLCBldmVudCk7XG5cbiAgICAgIC8vIENhbGwgYWxsICogbGlzdGVuZXJzXG4gICAgICBjYWxsLmNhbGwodGhpcywgJyonLCBldmVudCk7XG5cbiAgICAgIC8vIEJ1YmJsZVxuICAgICAgaWYgKGV2ZW50LmdldEJ1YmJsZXMoKSAmJiBzZWxmLnBhcmVudCBpbnN0YW5jZW9mIEg1UC5FdmVudERpc3BhdGNoZXIgJiZcbiAgICAgICAgICAoc2VsZi5wYXJlbnQudHJpZ2dlciBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8IHR5cGVvZiBzZWxmLnBhcmVudC50cmlnZ2VyID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICBzZWxmLnBhcmVudC50cmlnZ2VyKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNjaGVkdWxlZEZvckV4dGVybmFsKSB7XG4gICAgICAgIEg1UC5leHRlcm5hbERpc3BhdGNoZXIudHJpZ2dlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIEV2ZW50RGlzcGF0Y2hlcjtcbn0pKCk7XG4iLCJ2YXIgSDVQID0gd2luZG93Lkg1UCA9IHdpbmRvdy5INVAgfHwge307XG5cbi8qKlxuICogVXNlZCBmb3IgeEFQSSBldmVudHMuXG4gKlxuICogQGNsYXNzXG4gKiBAZXh0ZW5kcyBINVAuRXZlbnRcbiAqL1xuSDVQLlhBUElFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgSDVQLkV2ZW50LmNhbGwodGhpcywgJ3hBUEknLCB7J3N0YXRlbWVudCc6IHt9fSwge2J1YmJsZXM6IHRydWUsIGV4dGVybmFsOiB0cnVlfSk7XG59O1xuXG5INVAuWEFQSUV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSDVQLkV2ZW50LnByb3RvdHlwZSk7XG5INVAuWEFQSUV2ZW50LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEg1UC5YQVBJRXZlbnQ7XG5cbi8qKlxuICogU2V0IHNjb3JlZCByZXN1bHQgc3RhdGVtZW50cy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gc2NvcmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTY29yZVxuICogQHBhcmFtIHtvYmplY3R9IGluc3RhbmNlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNvbXBsZXRpb25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VjY2Vzc1xuICovXG5INVAuWEFQSUV2ZW50LnByb3RvdHlwZS5zZXRTY29yZWRSZXN1bHQgPSBmdW5jdGlvbiAoc2NvcmUsIG1heFNjb3JlLCBpbnN0YW5jZSwgY29tcGxldGlvbiwgc3VjY2Vzcykge1xuICB0aGlzLmRhdGEuc3RhdGVtZW50LnJlc3VsdCA9IHt9O1xuXG4gIGlmICh0eXBlb2Ygc2NvcmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtYXhTY29yZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuZGF0YS5zdGF0ZW1lbnQucmVzdWx0LnNjb3JlID0geydyYXcnOiBzY29yZX07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kYXRhLnN0YXRlbWVudC5yZXN1bHQuc2NvcmUgPSB7XG4gICAgICAgICdtaW4nOiAwLFxuICAgICAgICAnbWF4JzogbWF4U2NvcmUsXG4gICAgICAgICdyYXcnOiBzY29yZVxuICAgICAgfTtcbiAgICAgIGlmIChtYXhTY29yZSA+IDApIHtcbiAgICAgICAgdGhpcy5kYXRhLnN0YXRlbWVudC5yZXN1bHQuc2NvcmUuc2NhbGVkID0gTWF0aC5yb3VuZChzY29yZSAvIG1heFNjb3JlICogMTAwMDApIC8gMTAwMDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBjb21wbGV0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuZGF0YS5zdGF0ZW1lbnQucmVzdWx0LmNvbXBsZXRpb24gPSAodGhpcy5nZXRWZXJiKCkgPT09ICdjb21wbGV0ZWQnIHx8IHRoaXMuZ2V0VmVyYigpID09PSAnYW5zd2VyZWQnKTtcbiAgfVxuICBlbHNlIHtcbiAgICB0aGlzLmRhdGEuc3RhdGVtZW50LnJlc3VsdC5jb21wbGV0aW9uID0gY29tcGxldGlvbjtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3VjY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmRhdGEuc3RhdGVtZW50LnJlc3VsdC5zdWNjZXNzID0gc3VjY2VzcztcbiAgfVxuXG4gIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5hY3Rpdml0eVN0YXJ0VGltZSkge1xuICAgIHZhciBkdXJhdGlvbiA9IE1hdGgucm91bmQoKERhdGUubm93KCkgLSBpbnN0YW5jZS5hY3Rpdml0eVN0YXJ0VGltZSApIC8gMTApIC8gMTAwO1xuICAgIC8vIHhBUEkgc3BlYyBhbGxvd3MgYSBwcmVjaXNpb24gb2YgMC4wMSBzZWNvbmRzXG5cbiAgICB0aGlzLmRhdGEuc3RhdGVtZW50LnJlc3VsdC5kdXJhdGlvbiA9ICdQVCcgKyBkdXJhdGlvbiArICdTJztcbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgYSB2ZXJiLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJiXG4gKiAgIFZlcmIgaW4gc2hvcnQgZm9ybSwgb25lIG9mIHRoZSB2ZXJicyBkZWZpbmVkIGF0XG4gKiAgIHtAbGluayBodHRwOi8vYWRsbmV0Lmdvdi9leHBhcGkvdmVyYnMvfEFETCB4QVBJIFZvY2FidWxhcnl9XG4gKlxuICovXG5INVAuWEFQSUV2ZW50LnByb3RvdHlwZS5zZXRWZXJiID0gZnVuY3Rpb24gKHZlcmIpIHtcbiAgaWYgKEg1UC5qUXVlcnkuaW5BcnJheSh2ZXJiLCBINVAuWEFQSUV2ZW50LmFsbG93ZWRYQVBJVmVyYnMpICE9PSAtMSkge1xuICAgIHRoaXMuZGF0YS5zdGF0ZW1lbnQudmVyYiA9IHtcbiAgICAgICdpZCc6ICdodHRwOi8vYWRsbmV0Lmdvdi9leHBhcGkvdmVyYnMvJyArIHZlcmIsXG4gICAgICAnZGlzcGxheSc6IHtcbiAgICAgICAgJ2VuLVVTJzogdmVyYlxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZWxzZSBpZiAodmVyYi5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5kYXRhLnN0YXRlbWVudC52ZXJiID0gdmVyYjtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgdGhlIHN0YXRlbWVudHMgdmVyYiBpZC5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGZ1bGxcbiAqICAgaWYgdHJ1ZSB0aGUgZnVsbCB2ZXJiIGlkIHByZWZpeGVkIGJ5IGh0dHA6Ly9hZGxuZXQuZ292L2V4cGFwaS92ZXJicy9cbiAqICAgd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgVmVyYiBvciBudWxsIGlmIG5vIHZlcmIgd2l0aCBhbiBpZCBoYXMgYmVlbiBkZWZpbmVkXG4gKi9cbkg1UC5YQVBJRXZlbnQucHJvdG90eXBlLmdldFZlcmIgPSBmdW5jdGlvbiAoZnVsbCkge1xuICB2YXIgc3RhdGVtZW50ID0gdGhpcy5kYXRhLnN0YXRlbWVudDtcbiAgaWYgKCd2ZXJiJyBpbiBzdGF0ZW1lbnQpIHtcbiAgICBpZiAoZnVsbCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlbWVudC52ZXJiO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGVtZW50LnZlcmIuaWQuc2xpY2UoMzEpO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIFNldCB0aGUgb2JqZWN0IHBhcnQgb2YgdGhlIHN0YXRlbWVudC5cbiAqXG4gKiBUaGUgaWQgaXMgZm91bmQgYXV0b21hdGljYWxseSAodGhlIHVybCB0byB0aGUgY29udGVudClcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VcbiAqICAgVGhlIEg1UCBpbnN0YW5jZVxuICovXG5INVAuWEFQSUV2ZW50LnByb3RvdHlwZS5zZXRPYmplY3QgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaWYgKGluc3RhbmNlLmNvbnRlbnRJZCkge1xuICAgIHRoaXMuZGF0YS5zdGF0ZW1lbnQub2JqZWN0ID0ge1xuICAgICAgJ2lkJzogdGhpcy5nZXRDb250ZW50WEFQSUlkKGluc3RhbmNlKSxcbiAgICAgICdvYmplY3RUeXBlJzogJ0FjdGl2aXR5JyxcbiAgICAgICdkZWZpbml0aW9uJzoge1xuICAgICAgICAnZXh0ZW5zaW9ucyc6IHtcbiAgICAgICAgICAnaHR0cDovL2g1cC5vcmcveC1hcGkvaDVwLWxvY2FsLWNvbnRlbnQtaWQnOiBpbnN0YW5jZS5jb250ZW50SWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGluc3RhbmNlLnN1YkNvbnRlbnRJZCkge1xuICAgICAgdGhpcy5kYXRhLnN0YXRlbWVudC5vYmplY3QuZGVmaW5pdGlvbi5leHRlbnNpb25zWydodHRwOi8vaDVwLm9yZy94LWFwaS9oNXAtc3ViQ29udGVudElkJ10gPSBpbnN0YW5jZS5zdWJDb250ZW50SWQ7XG4gICAgICAvLyBEb24ndCBzZXQgdGl0bGVzIG9uIG1haW4gY29udGVudCwgdGl0bGUgc2hvdWxkIGNvbWUgZnJvbSBwdWJsaXNoaW5nIHBsYXRmb3JtXG4gICAgICBpZiAodHlwZW9mIGluc3RhbmNlLmdldFRpdGxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuZGF0YS5zdGF0ZW1lbnQub2JqZWN0LmRlZmluaXRpb24ubmFtZSA9IHtcbiAgICAgICAgICBcImVuLVVTXCI6IGluc3RhbmNlLmdldFRpdGxlKClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgY29udGVudCA9IEg1UC5nZXRDb250ZW50Rm9ySW5zdGFuY2UoaW5zdGFuY2UuY29udGVudElkKTtcbiAgICAgIGlmIChjb250ZW50ICYmIGNvbnRlbnQubWV0YWRhdGEgJiYgY29udGVudC5tZXRhZGF0YS50aXRsZSkge1xuICAgICAgICB0aGlzLmRhdGEuc3RhdGVtZW50Lm9iamVjdC5kZWZpbml0aW9uLm5hbWUgPSB7XG4gICAgICAgICAgXCJlbi1VU1wiOiBINVAuY3JlYXRlVGl0bGUoY29udGVudC5tZXRhZGF0YS50aXRsZSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gQ29udGVudCB0eXBlcyB2aWV3IGFsd2F5cyBleHBlY3QgdG8gaGF2ZSBhIGNvbnRlbnRJZCB3aGVuIHRoZXkgYXJlIGRpc3BsYXllZC5cbiAgICAvLyBUaGlzIGlzIG5vdCB0aGUgY2FzZSBpZiB0aGV5IGFyZSBkaXNwbGF5ZWQgaW4gdGhlIGVkaXRvciBhcyBwYXJ0IG9mIGEgcHJldmlldy5cbiAgICAvLyBUaGUgZml4IGlzIHRvIHNldCBhbiBlbXB0eSBvYmplY3Qgd2l0aCBkZWZpbml0aW9uIGZvciB0aGUgeEFQSSBldmVudCwgc28gYWxsXG4gICAgLy8gdGhlIGNvbnRlbnQgdHlwZXMgdGhhdCByZWx5IG9uIHRoaXMgZG9lcyBub3QgaGF2ZSB0byBoYW5kbGUgaXQuIFRoaXMgbWVhbnNcbiAgICAvLyB0aGF0IGNvbnRlbnQgdHlwZXMgdGhhdCBhcmUgYmVpbmcgcHJldmlld2VkIHdpbGwgc2VuZCB4QVBJIGNvbXBsZXRlZCBldmVudHMsXG4gICAgLy8gYnV0IHNpbmNlIHRoZXJlIGFyZSBubyBzY3JpcHRzIHRoYXQgY2F0Y2ggdGhlc2UgZXZlbnRzIGluIHRoZSBlZGl0b3IsXG4gICAgLy8gdGhpcyBpcyBub3QgYSBwcm9ibGVtLlxuICAgIHRoaXMuZGF0YS5zdGF0ZW1lbnQub2JqZWN0ID0ge1xuICAgICAgZGVmaW5pdGlvbjoge31cbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIFNldCB0aGUgY29udGV4dCBwYXJ0IG9mIHRoZSBzdGF0ZW1lbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlXG4gKiAgIFRoZSBINVAgaW5zdGFuY2VcbiAqL1xuSDVQLlhBUElFdmVudC5wcm90b3R5cGUuc2V0Q29udGV4dCA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpZiAoaW5zdGFuY2UucGFyZW50ICYmIChpbnN0YW5jZS5wYXJlbnQuY29udGVudElkIHx8IGluc3RhbmNlLnBhcmVudC5zdWJDb250ZW50SWQpKSB7XG4gICAgdGhpcy5kYXRhLnN0YXRlbWVudC5jb250ZXh0ID0ge1xuICAgICAgXCJjb250ZXh0QWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwicGFyZW50XCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IHRoaXMuZ2V0Q29udGVudFhBUElJZChpbnN0YW5jZS5wYXJlbnQpLFxuICAgICAgICAgICAgXCJvYmplY3RUeXBlXCI6IFwiQWN0aXZpdHlcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgaWYgKGluc3RhbmNlLmxpYnJhcnlJbmZvKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5zdGF0ZW1lbnQuY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRhdGEuc3RhdGVtZW50LmNvbnRleHQgPSB7XCJjb250ZXh0QWN0aXZpdGllc1wiOnt9fTtcbiAgICB9XG4gICAgdGhpcy5kYXRhLnN0YXRlbWVudC5jb250ZXh0LmNvbnRleHRBY3Rpdml0aWVzLmNhdGVnb3J5ID0gW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiaHR0cDovL2g1cC5vcmcvbGlicmFyaWVzL1wiICsgaW5zdGFuY2UubGlicmFyeUluZm8udmVyc2lvbmVkTmFtZU5vU3BhY2VzLFxuICAgICAgICBcIm9iamVjdFR5cGVcIjogXCJBY3Rpdml0eVwiXG4gICAgICB9XG4gICAgXTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdGhlIGFjdG9yLiBFbWFpbCBhbmQgbmFtZSB3aWxsIGJlIGFkZGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbkg1UC5YQVBJRXZlbnQucHJvdG90eXBlLnNldEFjdG9yID0gZnVuY3Rpb24gKCkge1xuICBpZiAoSDVQSW50ZWdyYXRpb24udXNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5kYXRhLnN0YXRlbWVudC5hY3RvciA9IHtcbiAgICAgICduYW1lJzogSDVQSW50ZWdyYXRpb24udXNlci5uYW1lLFxuICAgICAgJ21ib3gnOiAnbWFpbHRvOicgKyBINVBJbnRlZ3JhdGlvbi51c2VyLm1haWwsXG4gICAgICAnb2JqZWN0VHlwZSc6ICdBZ2VudCdcbiAgICB9O1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciB1dWlkO1xuICAgIHRyeSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLkg1UFVzZXJVVUlEKSB7XG4gICAgICAgIHV1aWQgPSBsb2NhbFN0b3JhZ2UuSDVQVXNlclVVSUQ7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdXVpZCA9IEg1UC5jcmVhdGVVVUlEKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5INVBVc2VyVVVJRCA9IHV1aWQ7XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIExvY2FsU3RvcmFnZSBhbmQgQ29va2llcyBhcmUgcHJvYmFibHkgZGlzYWJsZWQuIERvIG5vdCB0cmFjayB0aGUgdXNlci5cbiAgICAgIHV1aWQgPSAnbm90LXRyYWNrYWJsZS0nICsgSDVQLmNyZWF0ZVVVSUQoKTtcbiAgICB9XG4gICAgdGhpcy5kYXRhLnN0YXRlbWVudC5hY3RvciA9IHtcbiAgICAgICdhY2NvdW50Jzoge1xuICAgICAgICAnbmFtZSc6IHV1aWQsXG4gICAgICAgICdob21lUGFnZSc6IEg1UEludGVncmF0aW9uLnNpdGVVcmxcbiAgICAgIH0sXG4gICAgICAnb2JqZWN0VHlwZSc6ICdBZ2VudCdcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgbWF4IHZhbHVlIG9mIHRoZSByZXN1bHQgLSBzY29yZSBwYXJ0IG9mIHRoZSBzdGF0ZW1lbnRcbiAqXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICogICBUaGUgbWF4IHNjb3JlLCBvciBudWxsIGlmIG5vdCBkZWZpbmVkXG4gKi9cbkg1UC5YQVBJRXZlbnQucHJvdG90eXBlLmdldE1heFNjb3JlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5nZXRWZXJpZmllZFN0YXRlbWVudFZhbHVlKFsncmVzdWx0JywgJ3Njb3JlJywgJ21heCddKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSByYXcgdmFsdWUgb2YgdGhlIHJlc3VsdCAtIHNjb3JlIHBhcnQgb2YgdGhlIHN0YXRlbWVudFxuICpcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKiAgIFRoZSBzY29yZSwgb3IgbnVsbCBpZiBub3QgZGVmaW5lZFxuICovXG5INVAuWEFQSUV2ZW50LnByb3RvdHlwZS5nZXRTY29yZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZShbJ3Jlc3VsdCcsICdzY29yZScsICdyYXcnXSk7XG59O1xuXG4vKipcbiAqIEdldCBjb250ZW50IHhBUEkgSUQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlXG4gKiAgIFRoZSBINVAgaW5zdGFuY2VcbiAqL1xuSDVQLlhBUElFdmVudC5wcm90b3R5cGUuZ2V0Q29udGVudFhBUElJZCA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICB2YXIgeEFQSUlkO1xuICBpZiAoaW5zdGFuY2UuY29udGVudElkICYmIEg1UEludGVncmF0aW9uICYmIEg1UEludGVncmF0aW9uLmNvbnRlbnRzICYmIEg1UEludGVncmF0aW9uLmNvbnRlbnRzWydjaWQtJyArIGluc3RhbmNlLmNvbnRlbnRJZF0pIHtcbiAgICB4QVBJSWQgPSAgSDVQSW50ZWdyYXRpb24uY29udGVudHNbJ2NpZC0nICsgaW5zdGFuY2UuY29udGVudElkXS51cmw7XG4gICAgaWYgKGluc3RhbmNlLnN1YkNvbnRlbnRJZCkge1xuICAgICAgeEFQSUlkICs9ICc/c3ViQ29udGVudElkPScgKyAgaW5zdGFuY2Uuc3ViQ29udGVudElkO1xuICAgIH1cbiAgfVxuICByZXR1cm4geEFQSUlkO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGV2ZW50IGlzIHNlbnQgZnJvbSBhIGNoaWxkIChpLmUgbm90IGZyb20gZ3JhbmRjaGlsZClcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5INVAuWEFQSUV2ZW50LnByb3RvdHlwZS5pc0Zyb21DaGlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHBhcmVudElkID0gdGhpcy5nZXRWZXJpZmllZFN0YXRlbWVudFZhbHVlKFsnY29udGV4dCcsICdjb250ZXh0QWN0aXZpdGllcycsICdwYXJlbnQnLCAwLCAnaWQnXSk7XG4gIHJldHVybiAhcGFyZW50SWQgfHwgcGFyZW50SWQuaW5kZXhPZignc3ViQ29udGVudElkJykgPT09IC0xO1xufTtcblxuLyoqXG4gKiBGaWd1cmUgb3V0IGlmIGEgcHJvcGVydHkgZXhpc3RzIGluIHRoZSBzdGF0ZW1lbnQgYW5kIHJldHVybiBpdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqICAgTGlzdCBkZXNjcmliaW5nIHRoZSBwcm9wZXJ0eSB3ZSdyZSBsb29raW5nIGZvci4gRm9yIGluc3RhbmNlXG4gKiAgIFsncmVzdWx0JywgJ3Njb3JlJywgJ3JhdyddIGZvciByZXN1bHQuc2NvcmUucmF3XG4gKiBAcmV0dXJucyB7Kn1cbiAqICAgVGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSBpZiBpdCBpcyBzZXQsIG51bGwgb3RoZXJ3aXNlLlxuICovXG5INVAuWEFQSUV2ZW50LnByb3RvdHlwZS5nZXRWZXJpZmllZFN0YXRlbWVudFZhbHVlID0gZnVuY3Rpb24gKGtleXMpIHtcbiAgdmFyIHZhbCA9IHRoaXMuZGF0YS5zdGF0ZW1lbnQ7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh2YWxba2V5c1tpXV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhbCA9IHZhbFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gdmFsO1xufTtcblxuLyoqXG4gKiBMaXN0IG9mIHZlcmJzIGRlZmluZWQgYXQge0BsaW5rIGh0dHA6Ly9hZGxuZXQuZ292L2V4cGFwaS92ZXJicy98QURMIHhBUEkgVm9jYWJ1bGFyeX1cbiAqXG4gKiBAdHlwZSBBcnJheVxuICovXG5INVAuWEFQSUV2ZW50LmFsbG93ZWRYQVBJVmVyYnMgPSBbXG4gICdhbnN3ZXJlZCcsXG4gICdhc2tlZCcsXG4gICdhdHRlbXB0ZWQnLFxuICAnYXR0ZW5kZWQnLFxuICAnY29tbWVudGVkJyxcbiAgJ2NvbXBsZXRlZCcsXG4gICdleGl0ZWQnLFxuICAnZXhwZXJpZW5jZWQnLFxuICAnZmFpbGVkJyxcbiAgJ2ltcG9ydGVkJyxcbiAgJ2luaXRpYWxpemVkJyxcbiAgJ2ludGVyYWN0ZWQnLFxuICAnbGF1bmNoZWQnLFxuICAnbWFzdGVyZWQnLFxuICAncGFzc2VkJyxcbiAgJ3ByZWZlcnJlZCcsXG4gICdwcm9ncmVzc2VkJyxcbiAgJ3JlZ2lzdGVyZWQnLFxuICAncmVzcG9uZGVkJyxcbiAgJ3Jlc3VtZWQnLFxuICAnc2NvcmVkJyxcbiAgJ3NoYXJlZCcsXG4gICdzdXNwZW5kZWQnLFxuICAndGVybWluYXRlZCcsXG4gICd2b2lkZWQnLFxuXG4gIC8vIEN1c3RvbSB2ZXJicyB1c2VkIGZvciBhY3Rpb24gdG9vbGJhciBiZWxvdyBjb250ZW50XG4gICdkb3dubG9hZGVkJyxcbiAgJ2NvcGllZCcsXG4gICdhY2Nlc3NlZC1yZXVzZScsXG4gICdhY2Nlc3NlZC1lbWJlZCcsXG4gICdhY2Nlc3NlZC1jb3B5cmlnaHQnXG5dO1xuIiwidmFyIEg1UCA9IHdpbmRvdy5INVAgPSB3aW5kb3cuSDVQIHx8IHt9O1xuXG4vKipcbiAqIFRoZSBleHRlcm5hbCBldmVudCBkaXNwYXRjaGVyLiBPdGhlcnMsIG91dHNpZGUgb2YgSDVQIG1heSByZWdpc3RlciBhbmRcbiAqIGxpc3RlbiBmb3IgSDVQIEV2ZW50cyBoZXJlLlxuICpcbiAqIEB0eXBlIHtINVAuRXZlbnREaXNwYXRjaGVyfVxuICovXG5INVAuZXh0ZXJuYWxEaXNwYXRjaGVyID0gbmV3IEg1UC5FdmVudERpc3BhdGNoZXIoKTtcblxuLy8gRXZlbnREaXNwYXRjaGVyIGV4dGVuc2lvbnNcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHRyaWdnZXJpbmcgeEFQSSBhZGRlZCB0byB0aGUgRXZlbnREaXNwYXRjaGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJiXG4gKiAgIFRoZSBzaG9ydCBpZCBvZiB0aGUgdmVyYiB3ZSB3YW50IHRvIHRyaWdnZXJcbiAqIEBwYXJhbSB7T2plY3R9IFtleHRyYV1cbiAqICAgRXh0cmEgcHJvcGVydGllcyBmb3IgdGhlIHhBUEkgc3RhdGVtZW50XG4gKi9cbkg1UC5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlLnRyaWdnZXJYQVBJID0gZnVuY3Rpb24gKHZlcmIsIGV4dHJhKSB7XG4gIHRoaXMudHJpZ2dlcih0aGlzLmNyZWF0ZVhBUElFdmVudFRlbXBsYXRlKHZlcmIsIGV4dHJhKSk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgZXZlbnQgdGVtcGxhdGVzIGFkZGVkIHRvIHRoZSBFdmVudERpc3BhdGNoZXIuXG4gKlxuICogV2lsbCBpbiB0aGUgZnV0dXJlIGJlIHVzZWQgdG8gYWRkIHJlcHJlc2VudGF0aW9ucyBvZiB0aGUgcXVlc3Rpb25zIHRvIHRoZVxuICogc3RhdGVtZW50cy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmVyYlxuICogICBWZXJiIGlkIGluIHNob3J0IGZvcm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZXh0cmFdXG4gKiAgIEV4dHJhIHZhbHVlcyB0byBiZSBhZGRlZCB0byB0aGUgc3RhdGVtZW50XG4gKiBAcmV0dXJucyB7SDVQLlhBUElFdmVudH1cbiAqICAgSW5zdGFuY2VcbiAqL1xuSDVQLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUuY3JlYXRlWEFQSUV2ZW50VGVtcGxhdGUgPSBmdW5jdGlvbiAodmVyYiwgZXh0cmEpIHtcbiAgdmFyIGV2ZW50ID0gbmV3IEg1UC5YQVBJRXZlbnQoKTtcblxuICBldmVudC5zZXRBY3RvcigpO1xuICBldmVudC5zZXRWZXJiKHZlcmIpO1xuICBpZiAoZXh0cmEgIT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAodmFyIGkgaW4gZXh0cmEpIHtcbiAgICAgIGV2ZW50LmRhdGEuc3RhdGVtZW50W2ldID0gZXh0cmFbaV07XG4gICAgfVxuICB9XG4gIGlmICghKCdvYmplY3QnIGluIGV2ZW50LmRhdGEuc3RhdGVtZW50KSkge1xuICAgIGV2ZW50LnNldE9iamVjdCh0aGlzKTtcbiAgfVxuICBpZiAoISgnY29udGV4dCcgaW4gZXZlbnQuZGF0YS5zdGF0ZW1lbnQpKSB7XG4gICAgZXZlbnQuc2V0Q29udGV4dCh0aGlzKTtcbiAgfVxuICByZXR1cm4gZXZlbnQ7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgeEFQSSBjb21wbGV0ZWQgZXZlbnRzXG4gKlxuICogREVQUkVDQVRFRCAtIFVTRSB0cmlnZ2VyWEFQSVNjb3JlZCBpbnN0ZWFkXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqICAgc2luY2UgMS41LCB1c2UgdHJpZ2dlclhBUElTY29yZWQgaW5zdGVhZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzY29yZVxuICogICBXaWxsIGJlIHNldCBhcyB0aGUgJ3JhdycgdmFsdWUgb2YgdGhlIHNjb3JlIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IG1heFNjb3JlXG4gKiAgIHdpbGwgYmUgc2V0IGFzIHRoZSBcIm1heFwiIHZhbHVlIG9mIHRoZSBzY29yZSBvYmplY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VjY2Vzc1xuICogICB3aWxsIGJlIHNldCBhcyB0aGUgXCJzdWNjZXNzXCIgdmFsdWUgb2YgdGhlIHJlc3VsdCBvYmplY3RcbiAqL1xuSDVQLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUudHJpZ2dlclhBUElDb21wbGV0ZWQgPSBmdW5jdGlvbiAoc2NvcmUsIG1heFNjb3JlLCBzdWNjZXNzKSB7XG4gIHRoaXMudHJpZ2dlclhBUElTY29yZWQoc2NvcmUsIG1heFNjb3JlLCAnY29tcGxldGVkJywgdHJ1ZSwgc3VjY2Vzcyk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgc2NvcmVkIHhBUEkgZXZlbnRzXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNjb3JlXG4gKiAgIFdpbGwgYmUgc2V0IGFzIHRoZSAncmF3JyB2YWx1ZSBvZiB0aGUgc2NvcmUgb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0gbWF4U2NvcmVcbiAqICAgV2lsbCBiZSBzZXQgYXMgdGhlIFwibWF4XCIgdmFsdWUgb2YgdGhlIHNjb3JlIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IHZlcmJcbiAqICAgU2hvcnQgZm9ybSBvZiBhZGwgdmVyYlxuICogQHBhcmFtIHtib29sZWFufSBjb21wbGV0aW9uXG4gKiAgIElzIHRoaXMgYSBzdGF0ZW1lbnQgZnJvbSBhIGNvbXBsZXRlZCBhY3Rpdml0eT9cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VjY2Vzc1xuICogICBJcyB0aGlzIGEgc3RhdGVtZW50IGZyb20gYW4gYWN0aXZpdHkgdGhhdCB3YXMgZG9uZSBzdWNjZXNzZnVsbHk/XG4gKi9cbkg1UC5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlLnRyaWdnZXJYQVBJU2NvcmVkID0gZnVuY3Rpb24gKHNjb3JlLCBtYXhTY29yZSwgdmVyYiwgY29tcGxldGlvbiwgc3VjY2Vzcykge1xuICB2YXIgZXZlbnQgPSB0aGlzLmNyZWF0ZVhBUElFdmVudFRlbXBsYXRlKHZlcmIpO1xuICBldmVudC5zZXRTY29yZWRSZXN1bHQoc2NvcmUsIG1heFNjb3JlLCB0aGlzLCBjb21wbGV0aW9uLCBzdWNjZXNzKTtcbiAgdGhpcy50cmlnZ2VyKGV2ZW50KTtcbn07XG5cbkg1UC5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlLnNldEFjdGl2aXR5U3RhcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZpdHlTdGFydFRpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIERvbid0IHRyaWdnZXIgeEFQSSBldmVudHMgaW4gdGhlIGVkaXRvclxuICAgIGlmICh0aGlzLmNvbnRlbnRJZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIEg1UEludGVncmF0aW9uLmNvbnRlbnRzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgSDVQSW50ZWdyYXRpb24uY29udGVudHNbJ2NpZC0nICsgdGhpcy5jb250ZW50SWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudHJpZ2dlclhBUEkoJ2F0dGVtcHRlZCcpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2aXR5U3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfVxufTtcblxuLyoqXG4gKiBJbnRlcm5hbCBINVAgZnVuY3Rpb24gbGlzdGVuaW5nIGZvciB4QVBJIGNvbXBsZXRlZCBldmVudHMgYW5kIHN0b3JlcyBzY29yZXNcbiAqXG4gKiBAcGFyYW0ge0g1UC5YQVBJRXZlbnR9IGV2ZW50XG4gKi9cbkg1UC54QVBJQ29tcGxldGVkTGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKChldmVudC5nZXRWZXJiKCkgPT09ICdjb21wbGV0ZWQnIHx8IGV2ZW50LmdldFZlcmIoKSA9PT0gJ2Fuc3dlcmVkJykgJiYgIWV2ZW50LmdldFZlcmlmaWVkU3RhdGVtZW50VmFsdWUoWydjb250ZXh0JywgJ2NvbnRleHRBY3Rpdml0aWVzJywgJ3BhcmVudCddKSkge1xuICAgIHZhciBzY29yZSA9IGV2ZW50LmdldFNjb3JlKCk7XG4gICAgdmFyIG1heFNjb3JlID0gZXZlbnQuZ2V0TWF4U2NvcmUoKTtcbiAgICB2YXIgY29udGVudElkID0gZXZlbnQuZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZShbJ29iamVjdCcsICdkZWZpbml0aW9uJywgJ2V4dGVuc2lvbnMnLCAnaHR0cDovL2g1cC5vcmcveC1hcGkvaDVwLWxvY2FsLWNvbnRlbnQtaWQnXSk7XG4gICAgSDVQLnNldEZpbmlzaGVkKGNvbnRlbnRJZCwgc2NvcmUsIG1heFNjb3JlKTtcbiAgfVxufTtcbiIsIi8qISBqUXVlcnkgdjEuOS4xIHwgKGMpIDIwMDUsIDIwMTIgalF1ZXJ5IEZvdW5kYXRpb24sIEluYy4gfCBqcXVlcnkub3JnL2xpY2Vuc2VcbiovKGZ1bmN0aW9uKGUsdCl7dmFyIG4scixpPXR5cGVvZiB0LG89ZS5kb2N1bWVudCxhPWUubG9jYXRpb24scz1lLmpRdWVyeSx1PWUuJCxsPXt9LGM9W10scD1cIjEuOS4xXCIsZj1jLmNvbmNhdCxkPWMucHVzaCxoPWMuc2xpY2UsZz1jLmluZGV4T2YsbT1sLnRvU3RyaW5nLHk9bC5oYXNPd25Qcm9wZXJ0eSx2PXAudHJpbSxiPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBiLmZuLmluaXQoZSx0LHIpfSx4PS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSx3PS9cXFMrL2csVD0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csTj0vXig/Oig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSopKSQvLEM9L148KFxcdyspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLGs9L15bXFxdLDp7fVxcc10qJC8sRT0vKD86Xnw6fCwpKD86XFxzKlxcWykrL2csUz0vXFxcXCg/OltcIlxcXFxcXC9iZm5ydF18dVtcXGRhLWZBLUZdezR9KS9nLEE9L1wiW15cIlxcXFxcXHJcXG5dKlwifHRydWV8ZmFsc2V8bnVsbHwtPyg/OlxcZCtcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvZyxqPS9eLW1zLS8sRD0vLShbXFxkYS16XSkvZ2ksTD1mdW5jdGlvbihlLHQpe3JldHVybiB0LnRvVXBwZXJDYXNlKCl9LEg9ZnVuY3Rpb24oZSl7KG8uYWRkRXZlbnRMaXN0ZW5lcnx8XCJsb2FkXCI9PT1lLnR5cGV8fFwiY29tcGxldGVcIj09PW8ucmVhZHlTdGF0ZSkmJihxKCksYi5yZWFkeSgpKX0scT1mdW5jdGlvbigpe28uYWRkRXZlbnRMaXN0ZW5lcj8oby5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEgsITEpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixILCExKSk6KG8uZGV0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixIKSxlLmRldGFjaEV2ZW50KFwib25sb2FkXCIsSCkpfTtiLmZuPWIucHJvdG90eXBlPXtqcXVlcnk6cCxjb25zdHJ1Y3RvcjpiLGluaXQ6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpLGE7aWYoIWUpcmV0dXJuIHRoaXM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKGk9XCI8XCI9PT1lLmNoYXJBdCgwKSYmXCI+XCI9PT1lLmNoYXJBdChlLmxlbmd0aC0xKSYmZS5sZW5ndGg+PTM/W251bGwsZSxudWxsXTpOLmV4ZWMoZSksIWl8fCFpWzFdJiZuKXJldHVybiFufHxuLmpxdWVyeT8obnx8cikuZmluZChlKTp0aGlzLmNvbnN0cnVjdG9yKG4pLmZpbmQoZSk7aWYoaVsxXSl7aWYobj1uIGluc3RhbmNlb2YgYj9uWzBdOm4sYi5tZXJnZSh0aGlzLGIucGFyc2VIVE1MKGlbMV0sbiYmbi5ub2RlVHlwZT9uLm93bmVyRG9jdW1lbnR8fG46bywhMCkpLEMudGVzdChpWzFdKSYmYi5pc1BsYWluT2JqZWN0KG4pKWZvcihpIGluIG4pYi5pc0Z1bmN0aW9uKHRoaXNbaV0pP3RoaXNbaV0obltpXSk6dGhpcy5hdHRyKGksbltpXSk7cmV0dXJuIHRoaXN9aWYoYT1vLmdldEVsZW1lbnRCeUlkKGlbMl0pLGEmJmEucGFyZW50Tm9kZSl7aWYoYS5pZCE9PWlbMl0pcmV0dXJuIHIuZmluZChlKTt0aGlzLmxlbmd0aD0xLHRoaXNbMF09YX1yZXR1cm4gdGhpcy5jb250ZXh0PW8sdGhpcy5zZWxlY3Rvcj1lLHRoaXN9cmV0dXJuIGUubm9kZVR5cGU/KHRoaXMuY29udGV4dD10aGlzWzBdPWUsdGhpcy5sZW5ndGg9MSx0aGlzKTpiLmlzRnVuY3Rpb24oZSk/ci5yZWFkeShlKTooZS5zZWxlY3RvciE9PXQmJih0aGlzLnNlbGVjdG9yPWUuc2VsZWN0b3IsdGhpcy5jb250ZXh0PWUuY29udGV4dCksYi5tYWtlQXJyYXkoZSx0aGlzKSl9LHNlbGVjdG9yOlwiXCIsbGVuZ3RoOjAsc2l6ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aH0sdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBoLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT90aGlzLnRvQXJyYXkoKTowPmU/dGhpc1t0aGlzLmxlbmd0aCtlXTp0aGlzW2VdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oZSl7dmFyIHQ9Yi5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksZSk7cmV0dXJuIHQucHJldk9iamVjdD10aGlzLHQuY29udGV4dD10aGlzLmNvbnRleHQsdH0sZWFjaDpmdW5jdGlvbihlLHQpe3JldHVybiBiLmVhY2godGhpcyxlLHQpfSxyZWFkeTpmdW5jdGlvbihlKXtyZXR1cm4gYi5yZWFkeS5wcm9taXNlKCkuZG9uZShlKSx0aGlzfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhoLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubGVuZ3RoLG49K2UrKDA+ZT90OjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhuPj0wJiZ0Pm4/W3RoaXNbbl1dOltdKX0sbWFwOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhiLm1hcCh0aGlzLGZ1bmN0aW9uKHQsbil7cmV0dXJuIGUuY2FsbCh0LG4sdCl9KSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IobnVsbCl9LHB1c2g6ZCxzb3J0OltdLnNvcnQsc3BsaWNlOltdLnNwbGljZX0sYi5mbi5pbml0LnByb3RvdHlwZT1iLmZuLGIuZXh0ZW5kPWIuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGUsbixyLGksbyxhLHM9YXJndW1lbnRzWzBdfHx7fSx1PTEsbD1hcmd1bWVudHMubGVuZ3RoLGM9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgcyYmKGM9cyxzPWFyZ3VtZW50c1sxXXx8e30sdT0yKSxcIm9iamVjdFwiPT10eXBlb2Ygc3x8Yi5pc0Z1bmN0aW9uKHMpfHwocz17fSksbD09PXUmJihzPXRoaXMsLS11KTtsPnU7dSsrKWlmKG51bGwhPShvPWFyZ3VtZW50c1t1XSkpZm9yKGkgaW4gbyllPXNbaV0scj1vW2ldLHMhPT1yJiYoYyYmciYmKGIuaXNQbGFpbk9iamVjdChyKXx8KG49Yi5pc0FycmF5KHIpKSk/KG4/KG49ITEsYT1lJiZiLmlzQXJyYXkoZSk/ZTpbXSk6YT1lJiZiLmlzUGxhaW5PYmplY3QoZSk/ZTp7fSxzW2ldPWIuZXh0ZW5kKGMsYSxyKSk6ciE9PXQmJihzW2ldPXIpKTtyZXR1cm4gc30sYi5leHRlbmQoe25vQ29uZmxpY3Q6ZnVuY3Rpb24odCl7cmV0dXJuIGUuJD09PWImJihlLiQ9dSksdCYmZS5qUXVlcnk9PT1iJiYoZS5qUXVlcnk9cyksYn0saXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxob2xkUmVhZHk6ZnVuY3Rpb24oZSl7ZT9iLnJlYWR5V2FpdCsrOmIucmVhZHkoITApfSxyZWFkeTpmdW5jdGlvbihlKXtpZihlPT09ITA/IS0tYi5yZWFkeVdhaXQ6IWIuaXNSZWFkeSl7aWYoIW8uYm9keSlyZXR1cm4gc2V0VGltZW91dChiLnJlYWR5KTtiLmlzUmVhZHk9ITAsZSE9PSEwJiYtLWIucmVhZHlXYWl0PjB8fChuLnJlc29sdmVXaXRoKG8sW2JdKSxiLmZuLnRyaWdnZXImJmIobykudHJpZ2dlcihcInJlYWR5XCIpLm9mZihcInJlYWR5XCIpKX19LGlzRnVuY3Rpb246ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT09Yi50eXBlKGUpfSxpc0FycmF5OkFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGUpe3JldHVyblwiYXJyYXlcIj09PWIudHlwZShlKX0saXNXaW5kb3c6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUmJmU9PWUud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oZSl7cmV0dXJuIWlzTmFOKHBhcnNlRmxvYXQoZSkpJiZpc0Zpbml0ZShlKX0sdHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9lK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/bFttLmNhbGwoZSldfHxcIm9iamVjdFwiOnR5cGVvZiBlfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGUpe2lmKCFlfHxcIm9iamVjdFwiIT09Yi50eXBlKGUpfHxlLm5vZGVUeXBlfHxiLmlzV2luZG93KGUpKXJldHVybiExO3RyeXtpZihlLmNvbnN0cnVjdG9yJiYheS5jYWxsKGUsXCJjb25zdHJ1Y3RvclwiKSYmIXkuY2FsbChlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxcImlzUHJvdG90eXBlT2ZcIikpcmV0dXJuITF9Y2F0Y2gobil7cmV0dXJuITF9dmFyIHI7Zm9yKHIgaW4gZSk7cmV0dXJuIHI9PT10fHx5LmNhbGwoZSxyKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlKXJldHVybiExO3JldHVybiEwfSxlcnJvcjpmdW5jdGlvbihlKXt0aHJvdyBFcnJvcihlKX0scGFyc2VIVE1MOmZ1bmN0aW9uKGUsdCxuKXtpZighZXx8XCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIG51bGw7XCJib29sZWFuXCI9PXR5cGVvZiB0JiYobj10LHQ9ITEpLHQ9dHx8bzt2YXIgcj1DLmV4ZWMoZSksaT0hbiYmW107cmV0dXJuIHI/W3QuY3JlYXRlRWxlbWVudChyWzFdKV06KHI9Yi5idWlsZEZyYWdtZW50KFtlXSx0LGkpLGkmJmIoaSkucmVtb3ZlKCksYi5tZXJnZShbXSxyLmNoaWxkTm9kZXMpKX0scGFyc2VKU09OOmZ1bmN0aW9uKG4pe3JldHVybiBlLkpTT04mJmUuSlNPTi5wYXJzZT9lLkpTT04ucGFyc2Uobik6bnVsbD09PW4/bjpcInN0cmluZ1wiPT10eXBlb2YgbiYmKG49Yi50cmltKG4pLG4mJmsudGVzdChuLnJlcGxhY2UoUyxcIkBcIikucmVwbGFjZShBLFwiXVwiKS5yZXBsYWNlKEUsXCJcIikpKT9GdW5jdGlvbihcInJldHVybiBcIituKSgpOihiLmVycm9yKFwiSW52YWxpZCBKU09OOiBcIituKSx0KX0scGFyc2VYTUw6ZnVuY3Rpb24obil7dmFyIHIsaTtpZighbnx8XCJzdHJpbmdcIiE9dHlwZW9mIG4pcmV0dXJuIG51bGw7dHJ5e2UuRE9NUGFyc2VyPyhpPW5ldyBET01QYXJzZXIscj1pLnBhcnNlRnJvbVN0cmluZyhuLFwidGV4dC94bWxcIikpOihyPW5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTERPTVwiKSxyLmFzeW5jPVwiZmFsc2VcIixyLmxvYWRYTUwobikpfWNhdGNoKG8pe3I9dH1yZXR1cm4gciYmci5kb2N1bWVudEVsZW1lbnQmJiFyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RofHxiLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK24pLHJ9LG5vb3A6ZnVuY3Rpb24oKXt9LGdsb2JhbEV2YWw6ZnVuY3Rpb24odCl7dCYmYi50cmltKHQpJiYoZS5leGVjU2NyaXB0fHxmdW5jdGlvbih0KXtlLmV2YWwuY2FsbChlLHQpfSkodCl9LGNhbWVsQ2FzZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKGosXCJtcy1cIikucmVwbGFjZShELEwpfSxub2RlTmFtZTpmdW5jdGlvbihlLHQpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10LnRvTG93ZXJDYXNlKCl9LGVhY2g6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9MCxvPWUubGVuZ3RoLGE9TShlKTtpZihuKXtpZihhKXtmb3IoO28+aTtpKyspaWYocj10LmFwcGx5KGVbaV0sbikscj09PSExKWJyZWFrfWVsc2UgZm9yKGkgaW4gZSlpZihyPXQuYXBwbHkoZVtpXSxuKSxyPT09ITEpYnJlYWt9ZWxzZSBpZihhKXtmb3IoO28+aTtpKyspaWYocj10LmNhbGwoZVtpXSxpLGVbaV0pLHI9PT0hMSlicmVha31lbHNlIGZvcihpIGluIGUpaWYocj10LmNhbGwoZVtpXSxpLGVbaV0pLHI9PT0hMSlicmVhaztyZXR1cm4gZX0sdHJpbTp2JiYhdi5jYWxsKFwiXFx1ZmVmZlxcdTAwYTBcIik/ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjp2LmNhbGwoZSl9OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6KGUrXCJcIikucmVwbGFjZShULFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oZSx0KXt2YXIgbj10fHxbXTtyZXR1cm4gbnVsbCE9ZSYmKE0oT2JqZWN0KGUpKT9iLm1lcmdlKG4sXCJzdHJpbmdcIj09dHlwZW9mIGU/W2VdOmUpOmQuY2FsbChuLGUpKSxufSxpbkFycmF5OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZih0KXtpZihnKXJldHVybiBnLmNhbGwodCxlLG4pO2ZvcihyPXQubGVuZ3RoLG49bj8wPm4/TWF0aC5tYXgoMCxyK24pOm46MDtyPm47bisrKWlmKG4gaW4gdCYmdFtuXT09PWUpcmV0dXJuIG59cmV0dXJuLTF9LG1lcmdlOmZ1bmN0aW9uKGUsbil7dmFyIHI9bi5sZW5ndGgsaT1lLmxlbmd0aCxvPTA7aWYoXCJudW1iZXJcIj09dHlwZW9mIHIpZm9yKDtyPm87bysrKWVbaSsrXT1uW29dO2Vsc2Ugd2hpbGUobltvXSE9PXQpZVtpKytdPW5bbysrXTtyZXR1cm4gZS5sZW5ndGg9aSxlfSxncmVwOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPVtdLG89MCxhPWUubGVuZ3RoO2ZvcihuPSEhbjthPm87bysrKXI9ISF0KGVbb10sbyksbiE9PXImJmkucHVzaChlW29dKTtyZXR1cm4gaX0sbWFwOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPTAsbz1lLmxlbmd0aCxhPU0oZSkscz1bXTtpZihhKWZvcig7bz5pO2krKylyPXQoZVtpXSxpLG4pLG51bGwhPXImJihzW3MubGVuZ3RoXT1yKTtlbHNlIGZvcihpIGluIGUpcj10KGVbaV0saSxuKSxudWxsIT1yJiYoc1tzLmxlbmd0aF09cik7cmV0dXJuIGYuYXBwbHkoW10scyl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihlLG4pe3ZhciByLGksbztyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgbiYmKG89ZVtuXSxuPWUsZT1vKSxiLmlzRnVuY3Rpb24oZSk/KHI9aC5jYWxsKGFyZ3VtZW50cywyKSxpPWZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkobnx8dGhpcyxyLmNvbmNhdChoLmNhbGwoYXJndW1lbnRzKSkpfSxpLmd1aWQ9ZS5ndWlkPWUuZ3VpZHx8Yi5ndWlkKyssaSk6dH0sYWNjZXNzOmZ1bmN0aW9uKGUsbixyLGksbyxhLHMpe3ZhciB1PTAsbD1lLmxlbmd0aCxjPW51bGw9PXI7aWYoXCJvYmplY3RcIj09PWIudHlwZShyKSl7bz0hMDtmb3IodSBpbiByKWIuYWNjZXNzKGUsbix1LHJbdV0sITAsYSxzKX1lbHNlIGlmKGkhPT10JiYobz0hMCxiLmlzRnVuY3Rpb24oaSl8fChzPSEwKSxjJiYocz8obi5jYWxsKGUsaSksbj1udWxsKTooYz1uLG49ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBjLmNhbGwoYihlKSxuKX0pKSxuKSlmb3IoO2w+dTt1KyspbihlW3VdLHIscz9pOmkuY2FsbChlW3VdLHUsbihlW3VdLHIpKSk7cmV0dXJuIG8/ZTpjP24uY2FsbChlKTpsP24oZVswXSxyKTphfSxub3c6ZnVuY3Rpb24oKXtyZXR1cm4obmV3IERhdGUpLmdldFRpbWUoKX19KSxiLnJlYWR5LnByb21pc2U9ZnVuY3Rpb24odCl7aWYoIW4paWYobj1iLkRlZmVycmVkKCksXCJjb21wbGV0ZVwiPT09by5yZWFkeVN0YXRlKXNldFRpbWVvdXQoYi5yZWFkeSk7ZWxzZSBpZihvLmFkZEV2ZW50TGlzdGVuZXIpby5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEgsITEpLGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixILCExKTtlbHNle28uYXR0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixIKSxlLmF0dGFjaEV2ZW50KFwib25sb2FkXCIsSCk7dmFyIHI9ITE7dHJ5e3I9bnVsbD09ZS5mcmFtZUVsZW1lbnQmJm8uZG9jdW1lbnRFbGVtZW50fWNhdGNoKGkpe31yJiZyLmRvU2Nyb2xsJiZmdW5jdGlvbiBhKCl7aWYoIWIuaXNSZWFkeSl7dHJ5e3IuZG9TY3JvbGwoXCJsZWZ0XCIpfWNhdGNoKGUpe3JldHVybiBzZXRUaW1lb3V0KGEsNTApfXEoKSxiLnJlYWR5KCl9fSgpfXJldHVybiBuLnByb21pc2UodCl9LGIuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSx0KXtsW1wiW29iamVjdCBcIit0K1wiXVwiXT10LnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiBNKGUpe3ZhciB0PWUubGVuZ3RoLG49Yi50eXBlKGUpO3JldHVybiBiLmlzV2luZG93KGUpPyExOjE9PT1lLm5vZGVUeXBlJiZ0PyEwOlwiYXJyYXlcIj09PW58fFwiZnVuY3Rpb25cIiE9PW4mJigwPT09dHx8XCJudW1iZXJcIj09dHlwZW9mIHQmJnQ+MCYmdC0xIGluIGUpfXI9YihvKTt2YXIgXz17fTtmdW5jdGlvbiBGKGUpe3ZhciB0PV9bZV09e307cmV0dXJuIGIuZWFjaChlLm1hdGNoKHcpfHxbXSxmdW5jdGlvbihlLG4pe3Rbbl09ITB9KSx0fWIuQ2FsbGJhY2tzPWZ1bmN0aW9uKGUpe2U9XCJzdHJpbmdcIj09dHlwZW9mIGU/X1tlXXx8RihlKTpiLmV4dGVuZCh7fSxlKTt2YXIgbixyLGksbyxhLHMsdT1bXSxsPSFlLm9uY2UmJltdLGM9ZnVuY3Rpb24odCl7Zm9yKHI9ZS5tZW1vcnkmJnQsaT0hMCxhPXN8fDAscz0wLG89dS5sZW5ndGgsbj0hMDt1JiZvPmE7YSsrKWlmKHVbYV0uYXBwbHkodFswXSx0WzFdKT09PSExJiZlLnN0b3BPbkZhbHNlKXtyPSExO2JyZWFrfW49ITEsdSYmKGw/bC5sZW5ndGgmJmMobC5zaGlmdCgpKTpyP3U9W106cC5kaXNhYmxlKCkpfSxwPXthZGQ6ZnVuY3Rpb24oKXtpZih1KXt2YXIgdD11Lmxlbmd0aDsoZnVuY3Rpb24gaSh0KXtiLmVhY2godCxmdW5jdGlvbih0LG4pe3ZhciByPWIudHlwZShuKTtcImZ1bmN0aW9uXCI9PT1yP2UudW5pcXVlJiZwLmhhcyhuKXx8dS5wdXNoKG4pOm4mJm4ubGVuZ3RoJiZcInN0cmluZ1wiIT09ciYmaShuKX0pfSkoYXJndW1lbnRzKSxuP289dS5sZW5ndGg6ciYmKHM9dCxjKHIpKX1yZXR1cm4gdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIHUmJmIuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oZSx0KXt2YXIgcjt3aGlsZSgocj1iLmluQXJyYXkodCx1LHIpKT4tMSl1LnNwbGljZShyLDEpLG4mJihvPj1yJiZvLS0sYT49ciYmYS0tKX0pLHRoaXN9LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZT9iLmluQXJyYXkoZSx1KT4tMTohKCF1fHwhdS5sZW5ndGgpfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiB1PVtdLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gdT1sPXI9dCx0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiF1fSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGw9dCxyfHxwLmRpc2FibGUoKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hbH0sZmlyZVdpdGg6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD10fHxbXSx0PVtlLHQuc2xpY2U/dC5zbGljZSgpOnRdLCF1fHxpJiYhbHx8KG4/bC5wdXNoKHQpOmModCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gcC5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWl9fTtyZXR1cm4gcH0sYi5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGUpe3ZhciB0PVtbXCJyZXNvbHZlXCIsXCJkb25lXCIsYi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLGIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZWplY3RlZFwiXSxbXCJub3RpZnlcIixcInByb2dyZXNzXCIsYi5DYWxsYmFja3MoXCJtZW1vcnlcIildXSxuPVwicGVuZGluZ1wiLHI9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIG59LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBpLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sdGhlbjpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cztyZXR1cm4gYi5EZWZlcnJlZChmdW5jdGlvbihuKXtiLmVhY2godCxmdW5jdGlvbih0LG8pe3ZhciBhPW9bMF0scz1iLmlzRnVuY3Rpb24oZVt0XSkmJmVbdF07aVtvWzFdXShmdW5jdGlvbigpe3ZhciBlPXMmJnMuYXBwbHkodGhpcyxhcmd1bWVudHMpO2UmJmIuaXNGdW5jdGlvbihlLnByb21pc2UpP2UucHJvbWlzZSgpLmRvbmUobi5yZXNvbHZlKS5mYWlsKG4ucmVqZWN0KS5wcm9ncmVzcyhuLm5vdGlmeSk6blthK1wiV2l0aFwiXSh0aGlzPT09cj9uLnByb21pc2UoKTp0aGlzLHM/W2VdOmFyZ3VtZW50cyl9KX0pLGU9bnVsbH0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZT9iLmV4dGVuZChlLHIpOnJ9fSxpPXt9O3JldHVybiByLnBpcGU9ci50aGVuLGIuZWFjaCh0LGZ1bmN0aW9uKGUsbyl7dmFyIGE9b1syXSxzPW9bM107cltvWzFdXT1hLmFkZCxzJiZhLmFkZChmdW5jdGlvbigpe249c30sdFsxXmVdWzJdLmRpc2FibGUsdFsyXVsyXS5sb2NrKSxpW29bMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGlbb1swXStcIldpdGhcIl0odGhpcz09PWk/cjp0aGlzLGFyZ3VtZW50cyksdGhpc30saVtvWzBdK1wiV2l0aFwiXT1hLmZpcmVXaXRofSksci5wcm9taXNlKGkpLGUmJmUuY2FsbChpLGkpLGl9LHdoZW46ZnVuY3Rpb24oZSl7dmFyIHQ9MCxuPWguY2FsbChhcmd1bWVudHMpLHI9bi5sZW5ndGgsaT0xIT09cnx8ZSYmYi5pc0Z1bmN0aW9uKGUucHJvbWlzZSk/cjowLG89MT09PWk/ZTpiLkRlZmVycmVkKCksYT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIGZ1bmN0aW9uKHIpe3RbZV09dGhpcyxuW2VdPWFyZ3VtZW50cy5sZW5ndGg+MT9oLmNhbGwoYXJndW1lbnRzKTpyLG49PT1zP28ubm90aWZ5V2l0aCh0LG4pOi0taXx8by5yZXNvbHZlV2l0aCh0LG4pfX0scyx1LGw7aWYocj4xKWZvcihzPUFycmF5KHIpLHU9QXJyYXkociksbD1BcnJheShyKTtyPnQ7dCsrKW5bdF0mJmIuaXNGdW5jdGlvbihuW3RdLnByb21pc2UpP25bdF0ucHJvbWlzZSgpLmRvbmUoYSh0LGwsbikpLmZhaWwoby5yZWplY3QpLnByb2dyZXNzKGEodCx1LHMpKTotLWk7cmV0dXJuIGl8fG8ucmVzb2x2ZVdpdGgobCxuKSxvLnByb21pc2UoKX19KSxiLnN1cHBvcnQ9ZnVuY3Rpb24oKXt2YXIgdCxuLHIsYSxzLHUsbCxjLHAsZixkPW8uY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihkLnNldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiLFwidFwiKSxkLmlubmVySFRNTD1cIiAgPGxpbmsvPjx0YWJsZT48L3RhYmxlPjxhIGhyZWY9Jy9hJz5hPC9hPjxpbnB1dCB0eXBlPSdjaGVja2JveCcvPlwiLG49ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikscj1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKVswXSwhbnx8IXJ8fCFuLmxlbmd0aClyZXR1cm57fTtzPW8uY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxsPXMuYXBwZW5kQ2hpbGQoby5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKSxhPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXSxyLnN0eWxlLmNzc1RleHQ9XCJ0b3A6MXB4O2Zsb2F0OmxlZnQ7b3BhY2l0eTouNVwiLHQ9e2dldFNldEF0dHJpYnV0ZTpcInRcIiE9PWQuY2xhc3NOYW1lLGxlYWRpbmdXaGl0ZXNwYWNlOjM9PT1kLmZpcnN0Q2hpbGQubm9kZVR5cGUsdGJvZHk6IWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKS5sZW5ndGgsaHRtbFNlcmlhbGl6ZTohIWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpLmxlbmd0aCxzdHlsZTovdG9wLy50ZXN0KHIuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikpLGhyZWZOb3JtYWxpemVkOlwiL2FcIj09PXIuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxvcGFjaXR5Oi9eMC41Ly50ZXN0KHIuc3R5bGUub3BhY2l0eSksY3NzRmxvYXQ6ISFyLnN0eWxlLmNzc0Zsb2F0LGNoZWNrT246ISFhLnZhbHVlLG9wdFNlbGVjdGVkOmwuc2VsZWN0ZWQsZW5jdHlwZTohIW8uY3JlYXRlRWxlbWVudChcImZvcm1cIikuZW5jdHlwZSxodG1sNUNsb25lOlwiPDpuYXY+PC86bmF2PlwiIT09by5jcmVhdGVFbGVtZW50KFwibmF2XCIpLmNsb25lTm9kZSghMCkub3V0ZXJIVE1MLGJveE1vZGVsOlwiQ1NTMUNvbXBhdFwiPT09by5jb21wYXRNb2RlLGRlbGV0ZUV4cGFuZG86ITAsbm9DbG9uZUV2ZW50OiEwLGlubGluZUJsb2NrTmVlZHNMYXlvdXQ6ITEsc2hyaW5rV3JhcEJsb2NrczohMSxyZWxpYWJsZU1hcmdpblJpZ2h0OiEwLGJveFNpemluZ1JlbGlhYmxlOiEwLHBpeGVsUG9zaXRpb246ITF9LGEuY2hlY2tlZD0hMCx0Lm5vQ2xvbmVDaGVja2VkPWEuY2xvbmVOb2RlKCEwKS5jaGVja2VkLHMuZGlzYWJsZWQ9ITAsdC5vcHREaXNhYmxlZD0hbC5kaXNhYmxlZDt0cnl7ZGVsZXRlIGQudGVzdH1jYXRjaChoKXt0LmRlbGV0ZUV4cGFuZG89ITF9YT1vLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksdC5pbnB1dD1cIlwiPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSxhLnZhbHVlPVwidFwiLGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksdC5yYWRpb1ZhbHVlPVwidFwiPT09YS52YWx1ZSxhLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcInRcIiksYS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLHU9by5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksdS5hcHBlbmRDaGlsZChhKSx0LmFwcGVuZENoZWNrZWQ9YS5jaGVja2VkLHQuY2hlY2tDbG9uZT11LmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxkLmF0dGFjaEV2ZW50JiYoZC5hdHRhY2hFdmVudChcIm9uY2xpY2tcIixmdW5jdGlvbigpe3Qubm9DbG9uZUV2ZW50PSExfSksZC5jbG9uZU5vZGUoITApLmNsaWNrKCkpO2ZvcihmIGlue3N1Ym1pdDohMCxjaGFuZ2U6ITAsZm9jdXNpbjohMH0pZC5zZXRBdHRyaWJ1dGUoYz1cIm9uXCIrZixcInRcIiksdFtmK1wiQnViYmxlc1wiXT1jIGluIGV8fGQuYXR0cmlidXRlc1tjXS5leHBhbmRvPT09ITE7cmV0dXJuIGQuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGQuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLHQuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWQuc3R5bGUuYmFja2dyb3VuZENsaXAsYihmdW5jdGlvbigpe3ZhciBuLHIsYSxzPVwicGFkZGluZzowO21hcmdpbjowO2JvcmRlcjowO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpjb250ZW50LWJveDstbW96LWJveC1zaXppbmc6Y29udGVudC1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O1wiLHU9by5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07dSYmKG49by5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG4uc3R5bGUuY3NzVGV4dD1cImJvcmRlcjowO3dpZHRoOjA7aGVpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDotOTk5OXB4O21hcmdpbi10b3A6MXB4XCIsdS5hcHBlbmRDaGlsZChuKS5hcHBlbmRDaGlsZChkKSxkLmlubmVySFRNTD1cIjx0YWJsZT48dHI+PHRkPjwvdGQ+PHRkPnQ8L3RkPjwvdHI+PC90YWJsZT5cIixhPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKSxhWzBdLnN0eWxlLmNzc1RleHQ9XCJwYWRkaW5nOjA7bWFyZ2luOjA7Ym9yZGVyOjA7ZGlzcGxheTpub25lXCIscD0wPT09YVswXS5vZmZzZXRIZWlnaHQsYVswXS5zdHlsZS5kaXNwbGF5PVwiXCIsYVsxXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHQucmVsaWFibGVIaWRkZW5PZmZzZXRzPXAmJjA9PT1hWzBdLm9mZnNldEhlaWdodCxkLmlubmVySFRNTD1cIlwiLGQuc3R5bGUuY3NzVGV4dD1cImJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjFweDtib3JkZXI6MXB4O2Rpc3BsYXk6YmxvY2s7d2lkdGg6NHB4O21hcmdpbi10b3A6MSU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjElO1wiLHQuYm94U2l6aW5nPTQ9PT1kLm9mZnNldFdpZHRoLHQuZG9lc05vdEluY2x1ZGVNYXJnaW5JbkJvZHlPZmZzZXQ9MSE9PXUub2Zmc2V0VG9wLGUuZ2V0Q29tcHV0ZWRTdHlsZSYmKHQucGl4ZWxQb3NpdGlvbj1cIjElXCIhPT0oZS5nZXRDb21wdXRlZFN0eWxlKGQsbnVsbCl8fHt9KS50b3AsdC5ib3hTaXppbmdSZWxpYWJsZT1cIjRweFwiPT09KGUuZ2V0Q29tcHV0ZWRTdHlsZShkLG51bGwpfHx7d2lkdGg6XCI0cHhcIn0pLndpZHRoLHI9ZC5hcHBlbmRDaGlsZChvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLHIuc3R5bGUuY3NzVGV4dD1kLnN0eWxlLmNzc1RleHQ9cyxyLnN0eWxlLm1hcmdpblJpZ2h0PXIuc3R5bGUud2lkdGg9XCIwXCIsZC5zdHlsZS53aWR0aD1cIjFweFwiLHQucmVsaWFibGVNYXJnaW5SaWdodD0hcGFyc2VGbG9hdCgoZS5nZXRDb21wdXRlZFN0eWxlKHIsbnVsbCl8fHt9KS5tYXJnaW5SaWdodCkpLHR5cGVvZiBkLnN0eWxlLnpvb20hPT1pJiYoZC5pbm5lckhUTUw9XCJcIixkLnN0eWxlLmNzc1RleHQ9cytcIndpZHRoOjFweDtwYWRkaW5nOjFweDtkaXNwbGF5OmlubGluZTt6b29tOjFcIix0LmlubGluZUJsb2NrTmVlZHNMYXlvdXQ9Mz09PWQub2Zmc2V0V2lkdGgsZC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixkLmlubmVySFRNTD1cIjxkaXY+PC9kaXY+XCIsZC5maXJzdENoaWxkLnN0eWxlLndpZHRoPVwiNXB4XCIsdC5zaHJpbmtXcmFwQmxvY2tzPTMhPT1kLm9mZnNldFdpZHRoLHQuaW5saW5lQmxvY2tOZWVkc0xheW91dCYmKHUuc3R5bGUuem9vbT0xKSksdS5yZW1vdmVDaGlsZChuKSxuPWQ9YT1yPW51bGwpfSksbj1zPXU9bD1yPWE9bnVsbCx0fSgpO3ZhciBPPS8oPzpcXHtbXFxzXFxTXSpcXH18XFxbW1xcc1xcU10qXFxdKSQvLEI9LyhbQS1aXSkvZztmdW5jdGlvbiBQKGUsbixyLGkpe2lmKGIuYWNjZXB0RGF0YShlKSl7dmFyIG8sYSxzPWIuZXhwYW5kbyx1PVwic3RyaW5nXCI9PXR5cGVvZiBuLGw9ZS5ub2RlVHlwZSxwPWw/Yi5jYWNoZTplLGY9bD9lW3NdOmVbc10mJnM7aWYoZiYmcFtmXSYmKGl8fHBbZl0uZGF0YSl8fCF1fHxyIT09dClyZXR1cm4gZnx8KGw/ZVtzXT1mPWMucG9wKCl8fGIuZ3VpZCsrOmY9cykscFtmXXx8KHBbZl09e30sbHx8KHBbZl0udG9KU09OPWIubm9vcCkpLChcIm9iamVjdFwiPT10eXBlb2Ygbnx8XCJmdW5jdGlvblwiPT10eXBlb2YgbikmJihpP3BbZl09Yi5leHRlbmQocFtmXSxuKTpwW2ZdLmRhdGE9Yi5leHRlbmQocFtmXS5kYXRhLG4pKSxvPXBbZl0saXx8KG8uZGF0YXx8KG8uZGF0YT17fSksbz1vLmRhdGEpLHIhPT10JiYob1tiLmNhbWVsQ2FzZShuKV09ciksdT8oYT1vW25dLG51bGw9PWEmJihhPW9bYi5jYW1lbENhc2UobildKSk6YT1vLGF9fWZ1bmN0aW9uIFIoZSx0LG4pe2lmKGIuYWNjZXB0RGF0YShlKSl7dmFyIHIsaSxvLGE9ZS5ub2RlVHlwZSxzPWE/Yi5jYWNoZTplLHU9YT9lW2IuZXhwYW5kb106Yi5leHBhbmRvO2lmKHNbdV0pe2lmKHQmJihvPW4/c1t1XTpzW3VdLmRhdGEpKXtiLmlzQXJyYXkodCk/dD10LmNvbmNhdChiLm1hcCh0LGIuY2FtZWxDYXNlKSk6dCBpbiBvP3Q9W3RdOih0PWIuY2FtZWxDYXNlKHQpLHQ9dCBpbiBvP1t0XTp0LnNwbGl0KFwiIFwiKSk7Zm9yKHI9MCxpPXQubGVuZ3RoO2k+cjtyKyspZGVsZXRlIG9bdFtyXV07aWYoIShuPyQ6Yi5pc0VtcHR5T2JqZWN0KShvKSlyZXR1cm59KG58fChkZWxldGUgc1t1XS5kYXRhLCQoc1t1XSkpKSYmKGE/Yi5jbGVhbkRhdGEoW2VdLCEwKTpiLnN1cHBvcnQuZGVsZXRlRXhwYW5kb3x8cyE9cy53aW5kb3c/ZGVsZXRlIHNbdV06c1t1XT1udWxsKX19fWIuZXh0ZW5kKHtjYWNoZTp7fSxleHBhbmRvOlwialF1ZXJ5XCIrKHArTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksbm9EYXRhOntlbWJlZDohMCxvYmplY3Q6XCJjbHNpZDpEMjdDREI2RS1BRTZELTExY2YtOTZCOC00NDQ1NTM1NDAwMDBcIixhcHBsZXQ6ITB9LGhhc0RhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9ZS5ub2RlVHlwZT9iLmNhY2hlW2VbYi5leHBhbmRvXV06ZVtiLmV4cGFuZG9dLCEhZSYmISQoZSl9LGRhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBQKGUsdCxuKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe3JldHVybiBSKGUsdCl9LF9kYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUChlLHQsbiwhMCl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFIoZSx0LCEwKX0sYWNjZXB0RGF0YTpmdW5jdGlvbihlKXtpZihlLm5vZGVUeXBlJiYxIT09ZS5ub2RlVHlwZSYmOSE9PWUubm9kZVR5cGUpcmV0dXJuITE7dmFyIHQ9ZS5ub2RlTmFtZSYmYi5ub0RhdGFbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXTtyZXR1cm4hdHx8dCE9PSEwJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzaWRcIik9PT10fX0pLGIuZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGUsbil7dmFyIHIsaSxvPXRoaXNbMF0sYT0wLHM9bnVsbDtpZihlPT09dCl7aWYodGhpcy5sZW5ndGgmJihzPWIuZGF0YShvKSwxPT09by5ub2RlVHlwZSYmIWIuX2RhdGEobyxcInBhcnNlZEF0dHJzXCIpKSl7Zm9yKHI9by5hdHRyaWJ1dGVzO3IubGVuZ3RoPmE7YSsrKWk9clthXS5uYW1lLGkuaW5kZXhPZihcImRhdGEtXCIpfHwoaT1iLmNhbWVsQ2FzZShpLnNsaWNlKDUpKSxXKG8saSxzW2ldKSk7Yi5fZGF0YShvLFwicGFyc2VkQXR0cnNcIiwhMCl9cmV0dXJuIHN9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGU/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5kYXRhKHRoaXMsZSl9KTpiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKG4pe3JldHVybiBuPT09dD9vP1cobyxlLGIuZGF0YShvLGUpKTpudWxsOih0aGlzLmVhY2goZnVuY3Rpb24oKXtiLmRhdGEodGhpcyxlLG4pfSksdCl9LG51bGwsbixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2IucmVtb3ZlRGF0YSh0aGlzLGUpfSl9fSk7ZnVuY3Rpb24gVyhlLG4scil7aWYocj09PXQmJjE9PT1lLm5vZGVUeXBlKXt2YXIgaT1cImRhdGEtXCIrbi5yZXBsYWNlKEIsXCItJDFcIikudG9Mb3dlckNhc2UoKTtpZihyPWUuZ2V0QXR0cmlidXRlKGkpLFwic3RyaW5nXCI9PXR5cGVvZiByKXt0cnl7cj1cInRydWVcIj09PXI/ITA6XCJmYWxzZVwiPT09cj8hMTpcIm51bGxcIj09PXI/bnVsbDorcitcIlwiPT09cj8rcjpPLnRlc3Qocik/Yi5wYXJzZUpTT04ocik6cn1jYXRjaChvKXt9Yi5kYXRhKGUsbixyKX1lbHNlIHI9dH1yZXR1cm4gcn1mdW5jdGlvbiAkKGUpe3ZhciB0O2Zvcih0IGluIGUpaWYoKFwiZGF0YVwiIT09dHx8IWIuaXNFbXB0eU9iamVjdChlW3RdKSkmJlwidG9KU09OXCIhPT10KXJldHVybiExO3JldHVybiEwfWIuZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihlLG4scil7dmFyIGk7cmV0dXJuIGU/KG49KG58fFwiZnhcIikrXCJxdWV1ZVwiLGk9Yi5fZGF0YShlLG4pLHImJighaXx8Yi5pc0FycmF5KHIpP2k9Yi5fZGF0YShlLG4sYi5tYWtlQXJyYXkocikpOmkucHVzaChyKSksaXx8W10pOnR9LGRlcXVldWU6ZnVuY3Rpb24oZSx0KXt0PXR8fFwiZnhcIjt2YXIgbj1iLnF1ZXVlKGUsdCkscj1uLmxlbmd0aCxpPW4uc2hpZnQoKSxvPWIuX3F1ZXVlSG9va3MoZSx0KSxhPWZ1bmN0aW9uKCl7Yi5kZXF1ZXVlKGUsdCl9O1wiaW5wcm9ncmVzc1wiPT09aSYmKGk9bi5zaGlmdCgpLHItLSksby5jdXI9aSxpJiYoXCJmeFwiPT09dCYmbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgby5zdG9wLGkuY2FsbChlLGEsbykpLCFyJiZvJiZvLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10K1wicXVldWVIb29rc1wiO3JldHVybiBiLl9kYXRhKGUsbil8fGIuX2RhdGEoZSxuLHtlbXB0eTpiLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe2IuX3JlbW92ZURhdGEoZSx0K1wicXVldWVcIiksYi5fcmVtb3ZlRGF0YShlLG4pfSl9KX19KSxiLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSxuKXt2YXIgcj0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlJiYobj1lLGU9XCJmeFwiLHItLSkscj5hcmd1bWVudHMubGVuZ3RoP2IucXVldWUodGhpc1swXSxlKTpuPT09dD90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PWIucXVldWUodGhpcyxlLG4pO2IuX3F1ZXVlSG9va3ModGhpcyxlKSxcImZ4XCI9PT1lJiZcImlucHJvZ3Jlc3NcIiE9PXRbMF0mJmIuZGVxdWV1ZSh0aGlzLGUpfSl9LGRlcXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2IuZGVxdWV1ZSh0aGlzLGUpfSl9LGRlbGF5OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9Yi5meD9iLmZ4LnNwZWVkc1tlXXx8ZTplLHQ9dHx8XCJmeFwiLHRoaXMucXVldWUodCxmdW5jdGlvbih0LG4pe3ZhciByPXNldFRpbWVvdXQodCxlKTtuLnN0b3A9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQocil9fSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucXVldWUoZXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihlLG4pe3ZhciByLGk9MSxvPWIuRGVmZXJyZWQoKSxhPXRoaXMscz10aGlzLmxlbmd0aCx1PWZ1bmN0aW9uKCl7LS1pfHxvLnJlc29sdmVXaXRoKGEsW2FdKX07XCJzdHJpbmdcIiE9dHlwZW9mIGUmJihuPWUsZT10KSxlPWV8fFwiZnhcIjt3aGlsZShzLS0pcj1iLl9kYXRhKGFbc10sZStcInF1ZXVlSG9va3NcIiksciYmci5lbXB0eSYmKGkrKyxyLmVtcHR5LmFkZCh1KSk7cmV0dXJuIHUoKSxvLnByb21pc2Uobil9fSk7dmFyIEkseixYPS9bXFx0XFxyXFxuXS9nLFU9L1xcci9nLFY9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9ufG9iamVjdCkkL2ksWT0vXig/OmF8YXJlYSkkL2ksSj0vXig/OmNoZWNrZWR8c2VsZWN0ZWR8YXV0b2ZvY3VzfGF1dG9wbGF5fGFzeW5jfGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkKSQvaSxHPS9eKD86Y2hlY2tlZHxzZWxlY3RlZCkkL2ksUT1iLnN1cHBvcnQuZ2V0U2V0QXR0cmlidXRlLEs9Yi5zdXBwb3J0LmlucHV0O2IuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGIuYWNjZXNzKHRoaXMsYi5hdHRyLGUsdCxhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtiLnJlbW92ZUF0dHIodGhpcyxlKX0pfSxwcm9wOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGIuYWNjZXNzKHRoaXMsYi5wcm9wLGUsdCxhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGUpe3JldHVybiBlPWIucHJvcEZpeFtlXXx8ZSx0aGlzLmVhY2goZnVuY3Rpb24oKXt0cnl7dGhpc1tlXT10LGRlbGV0ZSB0aGlzW2VdfWNhdGNoKG4pe319KX0sYWRkQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGksbyxhPTAscz10aGlzLmxlbmd0aCx1PVwic3RyaW5nXCI9PXR5cGVvZiBlJiZlO2lmKGIuaXNGdW5jdGlvbihlKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2IodGhpcykuYWRkQ2xhc3MoZS5jYWxsKHRoaXMsdCx0aGlzLmNsYXNzTmFtZSkpfSk7aWYodSlmb3IodD0oZXx8XCJcIikubWF0Y2godyl8fFtdO3M+YTthKyspaWYobj10aGlzW2FdLHI9MT09PW4ubm9kZVR5cGUmJihuLmNsYXNzTmFtZT8oXCIgXCIrbi5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoWCxcIiBcIik6XCIgXCIpKXtvPTA7d2hpbGUoaT10W28rK10pMD5yLmluZGV4T2YoXCIgXCIraStcIiBcIikmJihyKz1pK1wiIFwiKTtuLmNsYXNzTmFtZT1iLnRyaW0ocil9cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpLG8sYT0wLHM9dGhpcy5sZW5ndGgsdT0wPT09YXJndW1lbnRzLmxlbmd0aHx8XCJzdHJpbmdcIj09dHlwZW9mIGUmJmU7aWYoYi5pc0Z1bmN0aW9uKGUpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24odCl7Yih0aGlzKS5yZW1vdmVDbGFzcyhlLmNhbGwodGhpcyx0LHRoaXMuY2xhc3NOYW1lKSl9KTtpZih1KWZvcih0PShlfHxcIlwiKS5tYXRjaCh3KXx8W107cz5hO2ErKylpZihuPXRoaXNbYV0scj0xPT09bi5ub2RlVHlwZSYmKG4uY2xhc3NOYW1lPyhcIiBcIituLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShYLFwiIFwiKTpcIlwiKSl7bz0wO3doaWxlKGk9dFtvKytdKXdoaWxlKHIuaW5kZXhPZihcIiBcIitpK1wiIFwiKT49MClyPXIucmVwbGFjZShcIiBcIitpK1wiIFwiLFwiIFwiKTtuLmNsYXNzTmFtZT1lP2IudHJpbShyKTpcIlwifXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihlLHQpe3ZhciBuPXR5cGVvZiBlLHI9XCJib29sZWFuXCI9PXR5cGVvZiB0O3JldHVybiBiLmlzRnVuY3Rpb24oZSk/dGhpcy5lYWNoKGZ1bmN0aW9uKG4pe2IodGhpcykudG9nZ2xlQ2xhc3MoZS5jYWxsKHRoaXMsbix0aGlzLmNsYXNzTmFtZSx0KSx0KX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe2lmKFwic3RyaW5nXCI9PT1uKXt2YXIgbyxhPTAscz1iKHRoaXMpLHU9dCxsPWUubWF0Y2godyl8fFtdO3doaWxlKG89bFthKytdKXU9cj91OiFzLmhhc0NsYXNzKG8pLHNbdT9cImFkZENsYXNzXCI6XCJyZW1vdmVDbGFzc1wiXShvKX1lbHNlKG49PT1pfHxcImJvb2xlYW5cIj09PW4pJiYodGhpcy5jbGFzc05hbWUmJmIuX2RhdGEodGhpcyxcIl9fY2xhc3NOYW1lX19cIix0aGlzLmNsYXNzTmFtZSksdGhpcy5jbGFzc05hbWU9dGhpcy5jbGFzc05hbWV8fGU9PT0hMT9cIlwiOmIuX2RhdGEodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0PVwiIFwiK2UrXCIgXCIsbj0wLHI9dGhpcy5sZW5ndGg7Zm9yKDtyPm47bisrKWlmKDE9PT10aGlzW25dLm5vZGVUeXBlJiYoXCIgXCIrdGhpc1tuXS5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoWCxcIiBcIikuaW5kZXhPZih0KT49MClyZXR1cm4hMDtyZXR1cm4hMX0sdmFsOmZ1bmN0aW9uKGUpe3ZhciBuLHIsaSxvPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGk9Yi5pc0Z1bmN0aW9uKGUpLHRoaXMuZWFjaChmdW5jdGlvbihuKXt2YXIgbyxhPWIodGhpcyk7MT09PXRoaXMubm9kZVR5cGUmJihvPWk/ZS5jYWxsKHRoaXMsbixhLnZhbCgpKTplLG51bGw9PW8/bz1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiBvP28rPVwiXCI6Yi5pc0FycmF5KG8pJiYobz1iLm1hcChvLGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6ZStcIlwifSkpLHI9Yi52YWxIb29rc1t0aGlzLnR5cGVdfHxiLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sciYmXCJzZXRcImluIHImJnIuc2V0KHRoaXMsbyxcInZhbHVlXCIpIT09dHx8KHRoaXMudmFsdWU9bykpfSk7aWYobylyZXR1cm4gcj1iLnZhbEhvb2tzW28udHlwZV18fGIudmFsSG9va3Nbby5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxyJiZcImdldFwiaW4gciYmKG49ci5nZXQobyxcInZhbHVlXCIpKSE9PXQ/bjoobj1vLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBuP24ucmVwbGFjZShVLFwiXCIpOm51bGw9PW4/XCJcIjpuKX19fSksYi5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihlKXt2YXIgdD1lLmF0dHJpYnV0ZXMudmFsdWU7cmV0dXJuIXR8fHQuc3BlY2lmaWVkP2UudmFsdWU6ZS50ZXh0fX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPWUub3B0aW9ucyxpPWUuc2VsZWN0ZWRJbmRleCxvPVwic2VsZWN0LW9uZVwiPT09ZS50eXBlfHwwPmksYT1vP251bGw6W10scz1vP2krMTpyLmxlbmd0aCx1PTA+aT9zOm8/aTowO2Zvcig7cz51O3UrKylpZihuPXJbdV0sISghbi5zZWxlY3RlZCYmdSE9PWl8fChiLnN1cHBvcnQub3B0RGlzYWJsZWQ/bi5kaXNhYmxlZDpudWxsIT09bi5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSl8fG4ucGFyZW50Tm9kZS5kaXNhYmxlZCYmYi5ub2RlTmFtZShuLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKHQ9YihuKS52YWwoKSxvKXJldHVybiB0O2EucHVzaCh0KX1yZXR1cm4gYX0sc2V0OmZ1bmN0aW9uKGUsdCl7dmFyIG49Yi5tYWtlQXJyYXkodCk7cmV0dXJuIGIoZSkuZmluZChcIm9wdGlvblwiKS5lYWNoKGZ1bmN0aW9uKCl7dGhpcy5zZWxlY3RlZD1iLmluQXJyYXkoYih0aGlzKS52YWwoKSxuKT49MH0pLG4ubGVuZ3RofHwoZS5zZWxlY3RlZEluZGV4PS0xKSxufX19LGF0dHI6ZnVuY3Rpb24oZSxuLHIpe3ZhciBvLGEscyx1PWUubm9kZVR5cGU7aWYoZSYmMyE9PXUmJjghPT11JiYyIT09dSlyZXR1cm4gdHlwZW9mIGUuZ2V0QXR0cmlidXRlPT09aT9iLnByb3AoZSxuLHIpOihhPTEhPT11fHwhYi5pc1hNTERvYyhlKSxhJiYobj1uLnRvTG93ZXJDYXNlKCksbz1iLmF0dHJIb29rc1tuXXx8KEoudGVzdChuKT96OkkpKSxyPT09dD9vJiZhJiZcImdldFwiaW4gbyYmbnVsbCE9PShzPW8uZ2V0KGUsbikpP3M6KHR5cGVvZiBlLmdldEF0dHJpYnV0ZSE9PWkmJihzPWUuZ2V0QXR0cmlidXRlKG4pKSxudWxsPT1zP3Q6cyk6bnVsbCE9PXI/byYmYSYmXCJzZXRcImluIG8mJihzPW8uc2V0KGUscixuKSkhPT10P3M6KGUuc2V0QXR0cmlidXRlKG4scitcIlwiKSxyKTooYi5yZW1vdmVBdHRyKGUsbiksdCkpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpPTAsbz10JiZ0Lm1hdGNoKHcpO2lmKG8mJjE9PT1lLm5vZGVUeXBlKXdoaWxlKG49b1tpKytdKXI9Yi5wcm9wRml4W25dfHxuLEoudGVzdChuKT8hUSYmRy50ZXN0KG4pP2VbYi5jYW1lbENhc2UoXCJkZWZhdWx0LVwiK24pXT1lW3JdPSExOmVbcl09ITE6Yi5hdHRyKGUsbixcIlwiKSxlLnJlbW92ZUF0dHJpYnV0ZShRP246cil9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGUsdCl7aWYoIWIuc3VwcG9ydC5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT10JiZiLm5vZGVOYW1lKGUsXCJpbnB1dFwiKSl7dmFyIG49ZS52YWx1ZTtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsdCksbiYmKGUudmFsdWU9biksdH19fX0scHJvcEZpeDp7dGFiaW5kZXg6XCJ0YWJJbmRleFwiLHJlYWRvbmx5OlwicmVhZE9ubHlcIixcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwiLG1heGxlbmd0aDpcIm1heExlbmd0aFwiLGNlbGxzcGFjaW5nOlwiY2VsbFNwYWNpbmdcIixjZWxscGFkZGluZzpcImNlbGxQYWRkaW5nXCIscm93c3BhbjpcInJvd1NwYW5cIixjb2xzcGFuOlwiY29sU3BhblwiLHVzZW1hcDpcInVzZU1hcFwiLGZyYW1lYm9yZGVyOlwiZnJhbWVCb3JkZXJcIixjb250ZW50ZWRpdGFibGU6XCJjb250ZW50RWRpdGFibGVcIn0scHJvcDpmdW5jdGlvbihlLG4scil7dmFyIGksbyxhLHM9ZS5ub2RlVHlwZTtpZihlJiYzIT09cyYmOCE9PXMmJjIhPT1zKXJldHVybiBhPTEhPT1zfHwhYi5pc1hNTERvYyhlKSxhJiYobj1iLnByb3BGaXhbbl18fG4sbz1iLnByb3BIb29rc1tuXSksciE9PXQ/byYmXCJzZXRcImluIG8mJihpPW8uc2V0KGUscixuKSkhPT10P2k6ZVtuXT1yOm8mJlwiZ2V0XCJpbiBvJiZudWxsIT09KGk9by5nZXQoZSxuKSk/aTplW25dfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIG49ZS5nZXRBdHRyaWJ1dGVOb2RlKFwidGFiaW5kZXhcIik7cmV0dXJuIG4mJm4uc3BlY2lmaWVkP3BhcnNlSW50KG4udmFsdWUsMTApOlYudGVzdChlLm5vZGVOYW1lKXx8WS50ZXN0KGUubm9kZU5hbWUpJiZlLmhyZWY/MDp0fX19fSksej17Z2V0OmZ1bmN0aW9uKGUsbil7dmFyIHI9Yi5wcm9wKGUsbiksaT1cImJvb2xlYW5cIj09dHlwZW9mIHImJmUuZ2V0QXR0cmlidXRlKG4pLG89XCJib29sZWFuXCI9PXR5cGVvZiByP0smJlE/bnVsbCE9aTpHLnRlc3Qobik/ZVtiLmNhbWVsQ2FzZShcImRlZmF1bHQtXCIrbildOiEhaTplLmdldEF0dHJpYnV0ZU5vZGUobik7cmV0dXJuIG8mJm8udmFsdWUhPT0hMT9uLnRvTG93ZXJDYXNlKCk6dH0sc2V0OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdD09PSExP2IucmVtb3ZlQXR0cihlLG4pOksmJlF8fCFHLnRlc3Qobik/ZS5zZXRBdHRyaWJ1dGUoIVEmJmIucHJvcEZpeFtuXXx8bixuKTplW2IuY2FtZWxDYXNlKFwiZGVmYXVsdC1cIituKV09ZVtuXT0hMCxufX0sSyYmUXx8KGIuYXR0ckhvb2tzLnZhbHVlPXtnZXQ6ZnVuY3Rpb24oZSxuKXt2YXIgcj1lLmdldEF0dHJpYnV0ZU5vZGUobik7cmV0dXJuIGIubm9kZU5hbWUoZSxcImlucHV0XCIpP2UuZGVmYXVsdFZhbHVlOnImJnIuc3BlY2lmaWVkP3IudmFsdWU6dH0sc2V0OmZ1bmN0aW9uKGUsbixyKXtyZXR1cm4gYi5ub2RlTmFtZShlLFwiaW5wdXRcIik/KGUuZGVmYXVsdFZhbHVlPW4sdCk6SSYmSS5zZXQoZSxuLHIpfX0pLFF8fChJPWIudmFsSG9va3MuYnV0dG9uPXtnZXQ6ZnVuY3Rpb24oZSxuKXt2YXIgcj1lLmdldEF0dHJpYnV0ZU5vZGUobik7cmV0dXJuIHImJihcImlkXCI9PT1ufHxcIm5hbWVcIj09PW58fFwiY29vcmRzXCI9PT1uP1wiXCIhPT1yLnZhbHVlOnIuc3BlY2lmaWVkKT9yLnZhbHVlOnR9LHNldDpmdW5jdGlvbihlLG4scil7dmFyIGk9ZS5nZXRBdHRyaWJ1dGVOb2RlKHIpO3JldHVybiBpfHxlLnNldEF0dHJpYnV0ZU5vZGUoaT1lLm93bmVyRG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKHIpKSxpLnZhbHVlPW4rPVwiXCIsXCJ2YWx1ZVwiPT09cnx8bj09PWUuZ2V0QXR0cmlidXRlKHIpP246dH19LGIuYXR0ckhvb2tzLmNvbnRlbnRlZGl0YWJsZT17Z2V0OkkuZ2V0LHNldDpmdW5jdGlvbihlLHQsbil7SS5zZXQoZSxcIlwiPT09dD8hMTp0LG4pfX0sYi5lYWNoKFtcIndpZHRoXCIsXCJoZWlnaHRcIl0sZnVuY3Rpb24oZSxuKXtiLmF0dHJIb29rc1tuXT1iLmV4dGVuZChiLmF0dHJIb29rc1tuXSx7c2V0OmZ1bmN0aW9uKGUscil7cmV0dXJuXCJcIj09PXI/KGUuc2V0QXR0cmlidXRlKG4sXCJhdXRvXCIpLHIpOnR9fSl9KSksYi5zdXBwb3J0LmhyZWZOb3JtYWxpemVkfHwoYi5lYWNoKFtcImhyZWZcIixcInNyY1wiLFwid2lkdGhcIixcImhlaWdodFwiXSxmdW5jdGlvbihlLG4pe2IuYXR0ckhvb2tzW25dPWIuZXh0ZW5kKGIuYXR0ckhvb2tzW25dLHtnZXQ6ZnVuY3Rpb24oZSl7dmFyIHI9ZS5nZXRBdHRyaWJ1dGUobiwyKTtyZXR1cm4gbnVsbD09cj90OnJ9fSl9KSxiLmVhY2goW1wiaHJlZlwiLFwic3JjXCJdLGZ1bmN0aW9uKGUsdCl7Yi5wcm9wSG9va3NbdF09e2dldDpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodCw0KX19fSkpLGIuc3VwcG9ydC5zdHlsZXx8KGIuYXR0ckhvb2tzLnN0eWxlPXtnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc3R5bGUuY3NzVGV4dHx8dH0sc2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuc3R5bGUuY3NzVGV4dD10K1wiXCJ9fSksYi5zdXBwb3J0Lm9wdFNlbGVjdGVkfHwoYi5wcm9wSG9va3Muc2VsZWN0ZWQ9Yi5leHRlbmQoYi5wcm9wSG9va3Muc2VsZWN0ZWQse2dldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJih0LnNlbGVjdGVkSW5kZXgsdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCksbnVsbH19KSksYi5zdXBwb3J0LmVuY3R5cGV8fChiLnByb3BGaXguZW5jdHlwZT1cImVuY29kaW5nXCIpLGIuc3VwcG9ydC5jaGVja09ufHxiLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7Yi52YWxIb29rc1t0aGlzXT17Z2V0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT09ZS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6ZS52YWx1ZX19fSksYi5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe2IudmFsSG9va3NbdGhpc109Yi5leHRlbmQoYi52YWxIb29rc1t0aGlzXSx7c2V0OmZ1bmN0aW9uKGUsbil7cmV0dXJuIGIuaXNBcnJheShuKT9lLmNoZWNrZWQ9Yi5pbkFycmF5KGIoZSkudmFsKCksbik+PTA6dH19KX0pO3ZhciBaPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhKSQvaSxldD0vXmtleS8sdHQ9L14oPzptb3VzZXxjb250ZXh0bWVudSl8Y2xpY2svLG50PS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxydD0vXihbXi5dKikoPzpcXC4oLispfCkkLztmdW5jdGlvbiBpdCgpe3JldHVybiEwfWZ1bmN0aW9uIG90KCl7cmV0dXJuITF9Yi5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihlLG4scixvLGEpe3ZhciBzLHUsbCxjLHAsZixkLGgsZyxtLHksdj1iLl9kYXRhKGUpO2lmKHYpe3IuaGFuZGxlciYmKGM9cixyPWMuaGFuZGxlcixhPWMuc2VsZWN0b3IpLHIuZ3VpZHx8KHIuZ3VpZD1iLmd1aWQrKyksKHU9di5ldmVudHMpfHwodT12LmV2ZW50cz17fSksKGY9di5oYW5kbGUpfHwoZj12LmhhbmRsZT1mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGI9PT1pfHxlJiZiLmV2ZW50LnRyaWdnZXJlZD09PWUudHlwZT90OmIuZXZlbnQuZGlzcGF0Y2guYXBwbHkoZi5lbGVtLGFyZ3VtZW50cyl9LGYuZWxlbT1lKSxuPShufHxcIlwiKS5tYXRjaCh3KXx8W1wiXCJdLGw9bi5sZW5ndGg7d2hpbGUobC0tKXM9cnQuZXhlYyhuW2xdKXx8W10sZz15PXNbMV0sbT0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxwPWIuZXZlbnQuc3BlY2lhbFtnXXx8e30sZz0oYT9wLmRlbGVnYXRlVHlwZTpwLmJpbmRUeXBlKXx8ZyxwPWIuZXZlbnQuc3BlY2lhbFtnXXx8e30sZD1iLmV4dGVuZCh7dHlwZTpnLG9yaWdUeXBlOnksZGF0YTpvLGhhbmRsZXI6cixndWlkOnIuZ3VpZCxzZWxlY3RvcjphLG5lZWRzQ29udGV4dDphJiZiLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoYSksbmFtZXNwYWNlOm0uam9pbihcIi5cIil9LGMpLChoPXVbZ10pfHwoaD11W2ddPVtdLGguZGVsZWdhdGVDb3VudD0wLHAuc2V0dXAmJnAuc2V0dXAuY2FsbChlLG8sbSxmKSE9PSExfHwoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihnLGYsITEpOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvblwiK2csZikpKSxwLmFkZCYmKHAuYWRkLmNhbGwoZSxkKSxkLmhhbmRsZXIuZ3VpZHx8KGQuaGFuZGxlci5ndWlkPXIuZ3VpZCkpLGE/aC5zcGxpY2UoaC5kZWxlZ2F0ZUNvdW50KyssMCxkKTpoLnB1c2goZCksYi5ldmVudC5nbG9iYWxbZ109ITA7ZT1udWxsfX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLHAsZixkLGgsZyxtPWIuaGFzRGF0YShlKSYmYi5fZGF0YShlKTtpZihtJiYoYz1tLmV2ZW50cykpe3Q9KHR8fFwiXCIpLm1hdGNoKHcpfHxbXCJcIl0sbD10Lmxlbmd0aDt3aGlsZShsLS0paWYocz1ydC5leGVjKHRbbF0pfHxbXSxkPWc9c1sxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQpe3A9Yi5ldmVudC5zcGVjaWFsW2RdfHx7fSxkPShyP3AuZGVsZWdhdGVUeXBlOnAuYmluZFR5cGUpfHxkLGY9Y1tkXXx8W10scz1zWzJdJiZSZWdFeHAoXCIoXnxcXFxcLilcIitoLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSx1PW89Zi5sZW5ndGg7d2hpbGUoby0tKWE9ZltvXSwhaSYmZyE9PWEub3JpZ1R5cGV8fG4mJm4uZ3VpZCE9PWEuZ3VpZHx8cyYmIXMudGVzdChhLm5hbWVzcGFjZSl8fHImJnIhPT1hLnNlbGVjdG9yJiYoXCIqKlwiIT09cnx8IWEuc2VsZWN0b3IpfHwoZi5zcGxpY2UobywxKSxhLnNlbGVjdG9yJiZmLmRlbGVnYXRlQ291bnQtLSxwLnJlbW92ZSYmcC5yZW1vdmUuY2FsbChlLGEpKTt1JiYhZi5sZW5ndGgmJihwLnRlYXJkb3duJiZwLnRlYXJkb3duLmNhbGwoZSxoLG0uaGFuZGxlKSE9PSExfHxiLnJlbW92ZUV2ZW50KGUsZCxtLmhhbmRsZSksZGVsZXRlIGNbZF0pfWVsc2UgZm9yKGQgaW4gYyliLmV2ZW50LnJlbW92ZShlLGQrdFtsXSxuLHIsITApO2IuaXNFbXB0eU9iamVjdChjKSYmKGRlbGV0ZSBtLmhhbmRsZSxiLl9yZW1vdmVEYXRhKGUsXCJldmVudHNcIikpfX0sdHJpZ2dlcjpmdW5jdGlvbihuLHIsaSxhKXt2YXIgcyx1LGwsYyxwLGYsZCxoPVtpfHxvXSxnPXkuY2FsbChuLFwidHlwZVwiKT9uLnR5cGU6bixtPXkuY2FsbChuLFwibmFtZXNwYWNlXCIpP24ubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihsPWY9aT1pfHxvLDMhPT1pLm5vZGVUeXBlJiY4IT09aS5ub2RlVHlwZSYmIW50LnRlc3QoZytiLmV2ZW50LnRyaWdnZXJlZCkmJihnLmluZGV4T2YoXCIuXCIpPj0wJiYobT1nLnNwbGl0KFwiLlwiKSxnPW0uc2hpZnQoKSxtLnNvcnQoKSksdT0wPmcuaW5kZXhPZihcIjpcIikmJlwib25cIitnLG49bltiLmV4cGFuZG9dP246bmV3IGIuRXZlbnQoZyxcIm9iamVjdFwiPT10eXBlb2YgbiYmbiksbi5pc1RyaWdnZXI9ITAsbi5uYW1lc3BhY2U9bS5qb2luKFwiLlwiKSxuLm5hbWVzcGFjZV9yZT1uLm5hbWVzcGFjZT9SZWdFeHAoXCIoXnxcXFxcLilcIittLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLG4ucmVzdWx0PXQsbi50YXJnZXR8fChuLnRhcmdldD1pKSxyPW51bGw9PXI/W25dOmIubWFrZUFycmF5KHIsW25dKSxwPWIuZXZlbnQuc3BlY2lhbFtnXXx8e30sYXx8IXAudHJpZ2dlcnx8cC50cmlnZ2VyLmFwcGx5KGkscikhPT0hMSkpe2lmKCFhJiYhcC5ub0J1YmJsZSYmIWIuaXNXaW5kb3coaSkpe2ZvcihjPXAuZGVsZWdhdGVUeXBlfHxnLG50LnRlc3QoYytnKXx8KGw9bC5wYXJlbnROb2RlKTtsO2w9bC5wYXJlbnROb2RlKWgucHVzaChsKSxmPWw7Zj09PShpLm93bmVyRG9jdW1lbnR8fG8pJiZoLnB1c2goZi5kZWZhdWx0Vmlld3x8Zi5wYXJlbnRXaW5kb3d8fGUpfWQ9MDt3aGlsZSgobD1oW2QrK10pJiYhbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKW4udHlwZT1kPjE/YzpwLmJpbmRUeXBlfHxnLHM9KGIuX2RhdGEobCxcImV2ZW50c1wiKXx8e30pW24udHlwZV0mJmIuX2RhdGEobCxcImhhbmRsZVwiKSxzJiZzLmFwcGx5KGwscikscz11JiZsW3VdLHMmJmIuYWNjZXB0RGF0YShsKSYmcy5hcHBseSYmcy5hcHBseShsLHIpPT09ITEmJm4ucHJldmVudERlZmF1bHQoKTtpZihuLnR5cGU9ZywhKGF8fG4uaXNEZWZhdWx0UHJldmVudGVkKCl8fHAuX2RlZmF1bHQmJnAuX2RlZmF1bHQuYXBwbHkoaS5vd25lckRvY3VtZW50LHIpIT09ITF8fFwiY2xpY2tcIj09PWcmJmIubm9kZU5hbWUoaSxcImFcIil8fCFiLmFjY2VwdERhdGEoaSl8fCF1fHwhaVtnXXx8Yi5pc1dpbmRvdyhpKSkpe2Y9aVt1XSxmJiYoaVt1XT1udWxsKSxiLmV2ZW50LnRyaWdnZXJlZD1nO3RyeXtpW2ddKCl9Y2F0Y2godil7fWIuZXZlbnQudHJpZ2dlcmVkPXQsZiYmKGlbdV09Zil9cmV0dXJuIG4ucmVzdWx0fX0sZGlzcGF0Y2g6ZnVuY3Rpb24oZSl7ZT1iLmV2ZW50LmZpeChlKTt2YXIgbixyLGksbyxhLHM9W10sdT1oLmNhbGwoYXJndW1lbnRzKSxsPShiLl9kYXRhKHRoaXMsXCJldmVudHNcIil8fHt9KVtlLnR5cGVdfHxbXSxjPWIuZXZlbnQuc3BlY2lhbFtlLnR5cGVdfHx7fTtpZih1WzBdPWUsZS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFjLnByZURpc3BhdGNofHxjLnByZURpc3BhdGNoLmNhbGwodGhpcyxlKSE9PSExKXtzPWIuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGUsbCksbj0wO3doaWxlKChvPXNbbisrXSkmJiFlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2UuY3VycmVudFRhcmdldD1vLmVsZW0sYT0wO3doaWxlKChpPW8uaGFuZGxlcnNbYSsrXSkmJiFlLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpKCFlLm5hbWVzcGFjZV9yZXx8ZS5uYW1lc3BhY2VfcmUudGVzdChpLm5hbWVzcGFjZSkpJiYoZS5oYW5kbGVPYmo9aSxlLmRhdGE9aS5kYXRhLHI9KChiLmV2ZW50LnNwZWNpYWxbaS5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGkuaGFuZGxlcikuYXBwbHkoby5lbGVtLHUpLHIhPT10JiYoZS5yZXN1bHQ9cik9PT0hMSYmKGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGMucG9zdERpc3BhdGNoJiZjLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsZSksZS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihlLG4pe3ZhciByLGksbyxhLHM9W10sdT1uLmRlbGVnYXRlQ291bnQsbD1lLnRhcmdldDtpZih1JiZsLm5vZGVUeXBlJiYoIWUuYnV0dG9ufHxcImNsaWNrXCIhPT1lLnR5cGUpKWZvcig7bCE9dGhpcztsPWwucGFyZW50Tm9kZXx8dGhpcylpZigxPT09bC5ub2RlVHlwZSYmKGwuZGlzYWJsZWQhPT0hMHx8XCJjbGlja1wiIT09ZS50eXBlKSl7Zm9yKG89W10sYT0wO3U+YTthKyspaT1uW2FdLHI9aS5zZWxlY3RvcitcIiBcIixvW3JdPT09dCYmKG9bcl09aS5uZWVkc0NvbnRleHQ/YihyLHRoaXMpLmluZGV4KGwpPj0wOmIuZmluZChyLHRoaXMsbnVsbCxbbF0pLmxlbmd0aCksb1tyXSYmby5wdXNoKGkpO28ubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczpvfSl9cmV0dXJuIG4ubGVuZ3RoPnUmJnMucHVzaCh7ZWxlbTp0aGlzLGhhbmRsZXJzOm4uc2xpY2UodSl9KSxzfSxmaXg6ZnVuY3Rpb24oZSl7aWYoZVtiLmV4cGFuZG9dKXJldHVybiBlO3ZhciB0LG4scixpPWUudHlwZSxhPWUscz10aGlzLmZpeEhvb2tzW2ldO3N8fCh0aGlzLmZpeEhvb2tzW2ldPXM9dHQudGVzdChpKT90aGlzLm1vdXNlSG9va3M6ZXQudGVzdChpKT90aGlzLmtleUhvb2tzOnt9KSxyPXMucHJvcHM/dGhpcy5wcm9wcy5jb25jYXQocy5wcm9wcyk6dGhpcy5wcm9wcyxlPW5ldyBiLkV2ZW50KGEpLHQ9ci5sZW5ndGg7d2hpbGUodC0tKW49clt0XSxlW25dPWFbbl07cmV0dXJuIGUudGFyZ2V0fHwoZS50YXJnZXQ9YS5zcmNFbGVtZW50fHxvKSwzPT09ZS50YXJnZXQubm9kZVR5cGUmJihlLnRhcmdldD1lLnRhcmdldC5wYXJlbnROb2RlKSxlLm1ldGFLZXk9ISFlLm1ldGFLZXkscy5maWx0ZXI/cy5maWx0ZXIoZSxhKTplfSxwcm9wczpcImFsdEtleSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0IGV2ZW50UGhhc2UgbWV0YUtleSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5IHRhcmdldCB0aW1lU3RhbXAgdmlldyB3aGljaFwiLnNwbGl0KFwiIFwiKSxmaXhIb29rczp7fSxrZXlIb29rczp7cHJvcHM6XCJjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlXCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT1lLndoaWNoJiYoZS53aGljaD1udWxsIT10LmNoYXJDb2RlP3QuY2hhckNvZGU6dC5rZXlDb2RlKSxlfX0sbW91c2VIb29rczp7cHJvcHM6XCJidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgZnJvbUVsZW1lbnQgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnRcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGUsbil7dmFyIHIsaSxhLHM9bi5idXR0b24sdT1uLmZyb21FbGVtZW50O3JldHVybiBudWxsPT1lLnBhZ2VYJiZudWxsIT1uLmNsaWVudFgmJihpPWUudGFyZ2V0Lm93bmVyRG9jdW1lbnR8fG8sYT1pLmRvY3VtZW50RWxlbWVudCxyPWkuYm9keSxlLnBhZ2VYPW4uY2xpZW50WCsoYSYmYS5zY3JvbGxMZWZ0fHxyJiZyLnNjcm9sbExlZnR8fDApLShhJiZhLmNsaWVudExlZnR8fHImJnIuY2xpZW50TGVmdHx8MCksZS5wYWdlWT1uLmNsaWVudFkrKGEmJmEuc2Nyb2xsVG9wfHxyJiZyLnNjcm9sbFRvcHx8MCktKGEmJmEuY2xpZW50VG9wfHxyJiZyLmNsaWVudFRvcHx8MCkpLCFlLnJlbGF0ZWRUYXJnZXQmJnUmJihlLnJlbGF0ZWRUYXJnZXQ9dT09PWUudGFyZ2V0P24udG9FbGVtZW50OnUpLGUud2hpY2h8fHM9PT10fHwoZS53aGljaD0xJnM/MToyJnM/Mzo0JnM/MjowKSxlfX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIGIubm9kZU5hbWUodGhpcyxcImlucHV0XCIpJiZcImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2s/KHRoaXMuY2xpY2soKSwhMSk6dH19LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYodGhpcyE9PW8uYWN0aXZlRWxlbWVudCYmdGhpcy5mb2N1cyl0cnl7cmV0dXJuIHRoaXMuZm9jdXMoKSwhMX1jYXRjaChlKXt9fSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcz09PW8uYWN0aXZlRWxlbWVudCYmdGhpcy5ibHVyPyh0aGlzLmJsdXIoKSwhMSk6dH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oZSl7ZS5yZXN1bHQhPT10JiYoZS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWUucmVzdWx0KX19fSxzaW11bGF0ZTpmdW5jdGlvbihlLHQsbixyKXt2YXIgaT1iLmV4dGVuZChuZXcgYi5FdmVudCxuLHt0eXBlOmUsaXNTaW11bGF0ZWQ6ITAsb3JpZ2luYWxFdmVudDp7fX0pO3I/Yi5ldmVudC50cmlnZ2VyKGksbnVsbCx0KTpiLmV2ZW50LmRpc3BhdGNoLmNhbGwodCxpKSxpLmlzRGVmYXVsdFByZXZlbnRlZCgpJiZuLnByZXZlbnREZWZhdWx0KCl9fSxiLnJlbW92ZUV2ZW50PW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcj9mdW5jdGlvbihlLHQsbil7ZS5yZW1vdmVFdmVudExpc3RlbmVyJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuLCExKX06ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVwib25cIit0O2UuZGV0YWNoRXZlbnQmJih0eXBlb2YgZVtyXT09PWkmJihlW3JdPW51bGwpLGUuZGV0YWNoRXZlbnQocixuKSl9LGIuRXZlbnQ9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGIuRXZlbnQ/KGUmJmUudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWUsdGhpcy50eXBlPWUudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1lLmRlZmF1bHRQcmV2ZW50ZWR8fGUucmV0dXJuVmFsdWU9PT0hMXx8ZS5nZXRQcmV2ZW50RGVmYXVsdCYmZS5nZXRQcmV2ZW50RGVmYXVsdCgpP2l0Om90KTp0aGlzLnR5cGU9ZSxuJiZiLmV4dGVuZCh0aGlzLG4pLHRoaXMudGltZVN0YW1wPWUmJmUudGltZVN0YW1wfHxiLm5vdygpLHRoaXNbYi5leHBhbmRvXT0hMCx0KTpuZXcgYi5FdmVudChlLG4pfSxiLkV2ZW50LnByb3RvdHlwZT17aXNEZWZhdWx0UHJldmVudGVkOm90LGlzUHJvcGFnYXRpb25TdG9wcGVkOm90LGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOm90LHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPWl0LGUmJihlLnByZXZlbnREZWZhdWx0P2UucHJldmVudERlZmF1bHQoKTplLnJldHVyblZhbHVlPSExKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9aXQsZSYmKGUuc3RvcFByb3BhZ2F0aW9uJiZlLnN0b3BQcm9wYWdhdGlvbigpLGUuY2FuY2VsQnViYmxlPSEwKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1pdCx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sYi5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCJ9LGZ1bmN0aW9uKGUsdCl7Yi5ldmVudC5zcGVjaWFsW2VdPXtkZWxlZ2F0ZVR5cGU6dCxiaW5kVHlwZTp0LGhhbmRsZTpmdW5jdGlvbihlKXt2YXIgbixyPXRoaXMsaT1lLnJlbGF0ZWRUYXJnZXQsbz1lLmhhbmRsZU9iajtcbnJldHVybighaXx8aSE9PXImJiFiLmNvbnRhaW5zKHIsaSkpJiYoZS50eXBlPW8ub3JpZ1R5cGUsbj1vLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGUudHlwZT10KSxufX19KSxiLnN1cHBvcnQuc3VibWl0QnViYmxlc3x8KGIuZXZlbnQuc3BlY2lhbC5zdWJtaXQ9e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIGIubm9kZU5hbWUodGhpcyxcImZvcm1cIik/ITE6KGIuZXZlbnQuYWRkKHRoaXMsXCJjbGljay5fc3VibWl0IGtleXByZXNzLl9zdWJtaXRcIixmdW5jdGlvbihlKXt2YXIgbj1lLnRhcmdldCxyPWIubm9kZU5hbWUobixcImlucHV0XCIpfHxiLm5vZGVOYW1lKG4sXCJidXR0b25cIik/bi5mb3JtOnQ7ciYmIWIuX2RhdGEocixcInN1Ym1pdEJ1YmJsZXNcIikmJihiLmV2ZW50LmFkZChyLFwic3VibWl0Ll9zdWJtaXRcIixmdW5jdGlvbihlKXtlLl9zdWJtaXRfYnViYmxlPSEwfSksYi5fZGF0YShyLFwic3VibWl0QnViYmxlc1wiLCEwKSl9KSx0KX0scG9zdERpc3BhdGNoOmZ1bmN0aW9uKGUpe2UuX3N1Ym1pdF9idWJibGUmJihkZWxldGUgZS5fc3VibWl0X2J1YmJsZSx0aGlzLnBhcmVudE5vZGUmJiFlLmlzVHJpZ2dlciYmYi5ldmVudC5zaW11bGF0ZShcInN1Ym1pdFwiLHRoaXMucGFyZW50Tm9kZSxlLCEwKSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7cmV0dXJuIGIubm9kZU5hbWUodGhpcyxcImZvcm1cIik/ITE6KGIuZXZlbnQucmVtb3ZlKHRoaXMsXCIuX3N1Ym1pdFwiKSx0KX19KSxiLnN1cHBvcnQuY2hhbmdlQnViYmxlc3x8KGIuZXZlbnQuc3BlY2lhbC5jaGFuZ2U9e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIFoudGVzdCh0aGlzLm5vZGVOYW1lKT8oKFwiY2hlY2tib3hcIj09PXRoaXMudHlwZXx8XCJyYWRpb1wiPT09dGhpcy50eXBlKSYmKGIuZXZlbnQuYWRkKHRoaXMsXCJwcm9wZXJ0eWNoYW5nZS5fY2hhbmdlXCIsZnVuY3Rpb24oZSl7XCJjaGVja2VkXCI9PT1lLm9yaWdpbmFsRXZlbnQucHJvcGVydHlOYW1lJiYodGhpcy5fanVzdF9jaGFuZ2VkPSEwKX0pLGIuZXZlbnQuYWRkKHRoaXMsXCJjbGljay5fY2hhbmdlXCIsZnVuY3Rpb24oZSl7dGhpcy5fanVzdF9jaGFuZ2VkJiYhZS5pc1RyaWdnZXImJih0aGlzLl9qdXN0X2NoYW5nZWQ9ITEpLGIuZXZlbnQuc2ltdWxhdGUoXCJjaGFuZ2VcIix0aGlzLGUsITApfSkpLCExKTooYi5ldmVudC5hZGQodGhpcyxcImJlZm9yZWFjdGl2YXRlLl9jaGFuZ2VcIixmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDtaLnRlc3QodC5ub2RlTmFtZSkmJiFiLl9kYXRhKHQsXCJjaGFuZ2VCdWJibGVzXCIpJiYoYi5ldmVudC5hZGQodCxcImNoYW5nZS5fY2hhbmdlXCIsZnVuY3Rpb24oZSl7IXRoaXMucGFyZW50Tm9kZXx8ZS5pc1NpbXVsYXRlZHx8ZS5pc1RyaWdnZXJ8fGIuZXZlbnQuc2ltdWxhdGUoXCJjaGFuZ2VcIix0aGlzLnBhcmVudE5vZGUsZSwhMCl9KSxiLl9kYXRhKHQsXCJjaGFuZ2VCdWJibGVzXCIsITApKX0pLHQpfSxoYW5kbGU6ZnVuY3Rpb24oZSl7dmFyIG49ZS50YXJnZXQ7cmV0dXJuIHRoaXMhPT1ufHxlLmlzU2ltdWxhdGVkfHxlLmlzVHJpZ2dlcnx8XCJyYWRpb1wiIT09bi50eXBlJiZcImNoZWNrYm94XCIhPT1uLnR5cGU/ZS5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dH0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gYi5ldmVudC5yZW1vdmUodGhpcyxcIi5fY2hhbmdlXCIpLCFaLnRlc3QodGhpcy5ub2RlTmFtZSl9fSksYi5zdXBwb3J0LmZvY3VzaW5CdWJibGVzfHxiLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihlLHQpe3ZhciBuPTAscj1mdW5jdGlvbihlKXtiLmV2ZW50LnNpbXVsYXRlKHQsZS50YXJnZXQsYi5ldmVudC5maXgoZSksITApfTtiLmV2ZW50LnNwZWNpYWxbdF09e3NldHVwOmZ1bmN0aW9uKCl7MD09PW4rKyYmby5hZGRFdmVudExpc3RlbmVyKGUsciwhMCl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7MD09PS0tbiYmby5yZW1vdmVFdmVudExpc3RlbmVyKGUsciwhMCl9fX0pLGIuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihlLG4scixpLG8pe3ZhciBhLHM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe1wic3RyaW5nXCIhPXR5cGVvZiBuJiYocj1yfHxuLG49dCk7Zm9yKGEgaW4gZSl0aGlzLm9uKGEsbixyLGVbYV0sbyk7cmV0dXJuIHRoaXN9aWYobnVsbD09ciYmbnVsbD09aT8oaT1uLHI9bj10KTpudWxsPT1pJiYoXCJzdHJpbmdcIj09dHlwZW9mIG4/KGk9cixyPXQpOihpPXIscj1uLG49dCkpLGk9PT0hMSlpPW90O2Vsc2UgaWYoIWkpcmV0dXJuIHRoaXM7cmV0dXJuIDE9PT1vJiYocz1pLGk9ZnVuY3Rpb24oZSl7cmV0dXJuIGIoKS5vZmYoZSkscy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGkuZ3VpZD1zLmd1aWR8fChzLmd1aWQ9Yi5ndWlkKyspKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtiLmV2ZW50LmFkZCh0aGlzLGUsaSxyLG4pfSl9LG9uZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5vbihlLHQsbixyLDEpfSxvZmY6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpLG87aWYoZSYmZS5wcmV2ZW50RGVmYXVsdCYmZS5oYW5kbGVPYmopcmV0dXJuIGk9ZS5oYW5kbGVPYmosYihlLmRlbGVnYXRlVGFyZ2V0KS5vZmYoaS5uYW1lc3BhY2U/aS5vcmlnVHlwZStcIi5cIitpLm5hbWVzcGFjZTppLm9yaWdUeXBlLGkuc2VsZWN0b3IsaS5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXtmb3IobyBpbiBlKXRoaXMub2ZmKG8sbixlW29dKTtyZXR1cm4gdGhpc31yZXR1cm4obj09PSExfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKSYmKHI9bixuPXQpLHI9PT0hMSYmKHI9b3QpLHRoaXMuZWFjaChmdW5jdGlvbigpe2IuZXZlbnQucmVtb3ZlKHRoaXMsZSxyLG4pfSl9LGJpbmQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0aGlzLm9uKGUsbnVsbCx0LG4pfSx1bmJpbmQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5vZmYoZSxudWxsLHQpfSxkZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5vbih0LGUsbixyKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGUsXCIqKlwiKTp0aGlzLm9mZih0LGV8fFwiKipcIixuKX0sdHJpZ2dlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtiLmV2ZW50LnRyaWdnZXIoZSx0LHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGUsbil7dmFyIHI9dGhpc1swXTtyZXR1cm4gcj9iLmV2ZW50LnRyaWdnZXIoZSxuLHIsITApOnR9fSksZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhLHMsdSxsLGMscCxmLGQsaCxnLG0seSx2LHg9XCJzaXp6bGVcIistbmV3IERhdGUsdz1lLmRvY3VtZW50LFQ9e30sTj0wLEM9MCxrPWl0KCksRT1pdCgpLFM9aXQoKSxBPXR5cGVvZiB0LGo9MTw8MzEsRD1bXSxMPUQucG9wLEg9RC5wdXNoLHE9RC5zbGljZSxNPUQuaW5kZXhPZnx8ZnVuY3Rpb24oZSl7dmFyIHQ9MCxuPXRoaXMubGVuZ3RoO2Zvcig7bj50O3QrKylpZih0aGlzW3RdPT09ZSlyZXR1cm4gdDtyZXR1cm4tMX0sXz1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsRj1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcXFx4MDAtXFxcXHhhMF0pK1wiLE89Ri5yZXBsYWNlKFwid1wiLFwidyNcIiksQj1cIihbKl4kfCF+XT89KVwiLFA9XCJcXFxcW1wiK18rXCIqKFwiK0YrXCIpXCIrXytcIiooPzpcIitCK18rXCIqKD86KFsnXFxcIl0pKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXSkqPylcXFxcM3woXCIrTytcIil8KXwpXCIrXytcIipcXFxcXVwiLFI9XCI6KFwiK0YrXCIpKD86XFxcXCgoKFsnXFxcIl0pKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXSkqPylcXFxcM3woKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrUC5yZXBsYWNlKDMsOCkrXCIpKil8LiopXFxcXCl8KVwiLFc9UmVnRXhwKFwiXlwiK18rXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK18rXCIrJFwiLFwiZ1wiKSwkPVJlZ0V4cChcIl5cIitfK1wiKixcIitfK1wiKlwiKSxJPVJlZ0V4cChcIl5cIitfK1wiKihbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmPit+XSlcIitfK1wiKlwiKSx6PVJlZ0V4cChSKSxYPVJlZ0V4cChcIl5cIitPK1wiJFwiKSxVPXtJRDpSZWdFeHAoXCJeIyhcIitGK1wiKVwiKSxDTEFTUzpSZWdFeHAoXCJeXFxcXC4oXCIrRitcIilcIiksTkFNRTpSZWdFeHAoXCJeXFxcXFtuYW1lPVsnXFxcIl0/KFwiK0YrXCIpWydcXFwiXT9cXFxcXVwiKSxUQUc6UmVnRXhwKFwiXihcIitGLnJlcGxhY2UoXCJ3XCIsXCJ3KlwiKStcIilcIiksQVRUUjpSZWdFeHAoXCJeXCIrUCksUFNFVURPOlJlZ0V4cChcIl5cIitSKSxDSElMRDpSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK18rXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitfK1wiKig/OihbKy1dfClcIitfK1wiKihcXFxcZCspfCkpXCIrXytcIipcXFxcKXwpXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpSZWdFeHAoXCJeXCIrXytcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrXytcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrXytcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sVj0vW1xceDIwXFx0XFxyXFxuXFxmXSpbK35dLyxZPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIGNvZGUvLEo9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sRz0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFE9L15oXFxkJC9pLEs9Lyd8XFxcXC9nLFo9L1xcPVtcXHgyMFxcdFxcclxcblxcZl0qKFteJ1wiXFxdXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXF0vZyxldD0vXFxcXChbXFxkYS1mQS1GXXsxLDZ9W1xceDIwXFx0XFxyXFxuXFxmXT98LikvZyx0dD1mdW5jdGlvbihlLHQpe3ZhciBuPVwiMHhcIit0LTY1NTM2O3JldHVybiBuIT09bj90OjA+bj9TdHJpbmcuZnJvbUNoYXJDb2RlKG4rNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTZ8bj4+MTAsNTYzMjB8MTAyMyZuKX07dHJ5e3EuY2FsbCh3LmRvY3VtZW50RWxlbWVudC5jaGlsZE5vZGVzLDApWzBdLm5vZGVUeXBlfWNhdGNoKG50KXtxPWZ1bmN0aW9uKGUpe3ZhciB0LG49W107d2hpbGUodD10aGlzW2UrK10pbi5wdXNoKHQpO3JldHVybiBufX1mdW5jdGlvbiBydChlKXtyZXR1cm4gWS50ZXN0KGUrXCJcIil9ZnVuY3Rpb24gaXQoKXt2YXIgZSx0PVtdO3JldHVybiBlPWZ1bmN0aW9uKG4scil7cmV0dXJuIHQucHVzaChuKz1cIiBcIik+aS5jYWNoZUxlbmd0aCYmZGVsZXRlIGVbdC5zaGlmdCgpXSxlW25dPXJ9fWZ1bmN0aW9uIG90KGUpe3JldHVybiBlW3hdPSEwLGV9ZnVuY3Rpb24gYXQoZSl7dmFyIHQ9cC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RyeXtyZXR1cm4gZSh0KX1jYXRjaChuKXtyZXR1cm4hMX1maW5hbGx5e3Q9bnVsbH19ZnVuY3Rpb24gc3QoZSx0LG4scil7dmFyIGksbyxhLHMsdSxsLGYsZyxtLHY7aWYoKHQ/dC5vd25lckRvY3VtZW50fHx0OncpIT09cCYmYyh0KSx0PXR8fHAsbj1ufHxbXSwhZXx8XCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIG47aWYoMSE9PShzPXQubm9kZVR5cGUpJiY5IT09cylyZXR1cm5bXTtpZighZCYmIXIpe2lmKGk9Si5leGVjKGUpKWlmKGE9aVsxXSl7aWYoOT09PXMpe2lmKG89dC5nZXRFbGVtZW50QnlJZChhKSwhb3x8IW8ucGFyZW50Tm9kZSlyZXR1cm4gbjtpZihvLmlkPT09YSlyZXR1cm4gbi5wdXNoKG8pLG59ZWxzZSBpZih0Lm93bmVyRG9jdW1lbnQmJihvPXQub3duZXJEb2N1bWVudC5nZXRFbGVtZW50QnlJZChhKSkmJnkodCxvKSYmby5pZD09PWEpcmV0dXJuIG4ucHVzaChvKSxufWVsc2V7aWYoaVsyXSlyZXR1cm4gSC5hcHBseShuLHEuY2FsbCh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpLDApKSxuO2lmKChhPWlbM10pJiZULmdldEJ5Q2xhc3NOYW1lJiZ0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkobixxLmNhbGwodC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpLDApKSxufWlmKFQucXNhJiYhaC50ZXN0KGUpKXtpZihmPSEwLGc9eCxtPXQsdj05PT09cyYmZSwxPT09cyYmXCJvYmplY3RcIiE9PXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7bD1mdChlKSwoZj10LmdldEF0dHJpYnV0ZShcImlkXCIpKT9nPWYucmVwbGFjZShLLFwiXFxcXCQmXCIpOnQuc2V0QXR0cmlidXRlKFwiaWRcIixnKSxnPVwiW2lkPSdcIitnK1wiJ10gXCIsdT1sLmxlbmd0aDt3aGlsZSh1LS0pbFt1XT1nK2R0KGxbdV0pO209Vi50ZXN0KGUpJiZ0LnBhcmVudE5vZGV8fHQsdj1sLmpvaW4oXCIsXCIpfWlmKHYpdHJ5e3JldHVybiBILmFwcGx5KG4scS5jYWxsKG0ucXVlcnlTZWxlY3RvckFsbCh2KSwwKSksbn1jYXRjaChiKXt9ZmluYWxseXtmfHx0LnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIHd0KGUucmVwbGFjZShXLFwiJDFcIiksdCxuLHIpfWE9c3QuaXNYTUw9ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmKGUub3duZXJEb2N1bWVudHx8ZSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiB0P1wiSFRNTFwiIT09dC5ub2RlTmFtZTohMX0sYz1zdC5zZXREb2N1bWVudD1mdW5jdGlvbihlKXt2YXIgbj1lP2Uub3duZXJEb2N1bWVudHx8ZTp3O3JldHVybiBuIT09cCYmOT09PW4ubm9kZVR5cGUmJm4uZG9jdW1lbnRFbGVtZW50PyhwPW4sZj1uLmRvY3VtZW50RWxlbWVudCxkPWEobiksVC50YWdOYW1lTm9Db21tZW50cz1hdChmdW5jdGlvbihlKXtyZXR1cm4gZS5hcHBlbmRDaGlsZChuLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxULmF0dHJpYnV0ZXM9YXQoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8c2VsZWN0Pjwvc2VsZWN0PlwiO3ZhciB0PXR5cGVvZiBlLmxhc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiKTtyZXR1cm5cImJvb2xlYW5cIiE9PXQmJlwic3RyaW5nXCIhPT10fSksVC5nZXRCeUNsYXNzTmFtZT1hdChmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8ZGl2IGNsYXNzPSdoaWRkZW4gZSc+PC9kaXY+PGRpdiBjbGFzcz0naGlkZGVuJz48L2Rpdj5cIixlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVcIikubGVuZ3RoPyhlLmxhc3RDaGlsZC5jbGFzc05hbWU9XCJlXCIsMj09PWUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVcIikubGVuZ3RoKTohMX0pLFQuZ2V0QnlOYW1lPWF0KGZ1bmN0aW9uKGUpe2UuaWQ9eCswLGUuaW5uZXJIVE1MPVwiPGEgbmFtZT0nXCIreCtcIic+PC9hPjxkaXYgbmFtZT0nXCIreCtcIic+PC9kaXY+XCIsZi5pbnNlcnRCZWZvcmUoZSxmLmZpcnN0Q2hpbGQpO3ZhciB0PW4uZ2V0RWxlbWVudHNCeU5hbWUmJm4uZ2V0RWxlbWVudHNCeU5hbWUoeCkubGVuZ3RoPT09MituLmdldEVsZW1lbnRzQnlOYW1lKHgrMCkubGVuZ3RoO3JldHVybiBULmdldElkTm90TmFtZT0hbi5nZXRFbGVtZW50QnlJZCh4KSxmLnJlbW92ZUNoaWxkKGUpLHR9KSxpLmF0dHJIYW5kbGU9YXQoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLGUuZmlyc3RDaGlsZCYmdHlwZW9mIGUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUhPT1BJiZcIiNcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSk/e306e2hyZWY6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiLDIpfSx0eXBlOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcInR5cGVcIil9fSxULmdldElkTm90TmFtZT8oaS5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYodHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQhPT1BJiYhZCl7dmFyIG49dC5nZXRFbGVtZW50QnlJZChlKTtyZXR1cm4gbiYmbi5wYXJlbnROb2RlP1tuXTpbXX19LGkuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZShldCx0dCk7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImlkXCIpPT09dH19KTooaS5maW5kLklEPWZ1bmN0aW9uKGUsbil7aWYodHlwZW9mIG4uZ2V0RWxlbWVudEJ5SWQhPT1BJiYhZCl7dmFyIHI9bi5nZXRFbGVtZW50QnlJZChlKTtyZXR1cm4gcj9yLmlkPT09ZXx8dHlwZW9mIHIuZ2V0QXR0cmlidXRlTm9kZSE9PUEmJnIuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpLnZhbHVlPT09ZT9bcl06dDpbXX19LGkuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZShldCx0dCk7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciBuPXR5cGVvZiBlLmdldEF0dHJpYnV0ZU5vZGUhPT1BJiZlLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gbiYmbi52YWx1ZT09PXR9fSksaS5maW5kLlRBRz1ULnRhZ05hbWVOb0NvbW1lbnRzP2Z1bmN0aW9uKGUsbil7cmV0dXJuIHR5cGVvZiBuLmdldEVsZW1lbnRzQnlUYWdOYW1lIT09QT9uLmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpOnR9OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPTAsbz10LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpO2lmKFwiKlwiPT09ZSl7d2hpbGUobj1vW2krK10pMT09PW4ubm9kZVR5cGUmJnIucHVzaChuKTtyZXR1cm4gcn1yZXR1cm4gb30saS5maW5kLk5BTUU9VC5nZXRCeU5hbWUmJmZ1bmN0aW9uKGUsbil7cmV0dXJuIHR5cGVvZiBuLmdldEVsZW1lbnRzQnlOYW1lIT09QT9uLmdldEVsZW1lbnRzQnlOYW1lKG5hbWUpOnR9LGkuZmluZC5DTEFTUz1ULmdldEJ5Q2xhc3NOYW1lJiZmdW5jdGlvbihlLG4pe3JldHVybiB0eXBlb2Ygbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPT09QXx8ZD90Om4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlKX0sZz1bXSxoPVtcIjpmb2N1c1wiXSwoVC5xc2E9cnQobi5xdWVyeVNlbGVjdG9yQWxsKSkmJihhdChmdW5jdGlvbihlKXtlLmlubmVySFRNTD1cIjxzZWxlY3Q+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8aC5wdXNoKFwiXFxcXFtcIitfK1wiKig/OmNoZWNrZWR8ZGlzYWJsZWR8aXNtYXB8bXVsdGlwbGV8cmVhZG9ubHl8c2VsZWN0ZWR8dmFsdWUpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8aC5wdXNoKFwiOmNoZWNrZWRcIil9KSxhdChmdW5jdGlvbihlKXtlLmlubmVySFRNTD1cIjxpbnB1dCB0eXBlPSdoaWRkZW4nIGk9JycvPlwiLGUucXVlcnlTZWxlY3RvckFsbChcIltpXj0nJ11cIikubGVuZ3RoJiZoLnB1c2goXCJbKl4kXT1cIitfK1wiKig/OlxcXCJcXFwifCcnKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGh8fGgucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSxoLnB1c2goXCIsLio6XCIpfSkpLChULm1hdGNoZXNTZWxlY3Rvcj1ydChtPWYubWF0Y2hlc1NlbGVjdG9yfHxmLm1vek1hdGNoZXNTZWxlY3Rvcnx8Zi53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGYub01hdGNoZXNTZWxlY3Rvcnx8Zi5tc01hdGNoZXNTZWxlY3RvcikpJiZhdChmdW5jdGlvbihlKXtULmRpc2Nvbm5lY3RlZE1hdGNoPW0uY2FsbChlLFwiZGl2XCIpLG0uY2FsbChlLFwiW3MhPScnXTp4XCIpLGcucHVzaChcIiE9XCIsUil9KSxoPVJlZ0V4cChoLmpvaW4oXCJ8XCIpKSxnPVJlZ0V4cChnLmpvaW4oXCJ8XCIpKSx5PXJ0KGYuY29udGFpbnMpfHxmLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uP2Z1bmN0aW9uKGUsdCl7dmFyIG49OT09PWUubm9kZVR5cGU/ZS5kb2N1bWVudEVsZW1lbnQ6ZSxyPXQmJnQucGFyZW50Tm9kZTtyZXR1cm4gZT09PXJ8fCEoIXJ8fDEhPT1yLm5vZGVUeXBlfHwhKG4uY29udGFpbnM/bi5jb250YWlucyhyKTplLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHIpKSl9OmZ1bmN0aW9uKGUsdCl7aWYodCl3aGlsZSh0PXQucGFyZW50Tm9kZSlpZih0PT09ZSlyZXR1cm4hMDtyZXR1cm4hMX0sdj1mLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uP2Z1bmN0aW9uKGUsdCl7dmFyIHI7cmV0dXJuIGU9PT10Pyh1PSEwLDApOihyPXQuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24odCkpPzEmcnx8ZS5wYXJlbnROb2RlJiYxMT09PWUucGFyZW50Tm9kZS5ub2RlVHlwZT9lPT09bnx8eSh3LGUpPy0xOnQ9PT1ufHx5KHcsdCk/MTowOjQmcj8tMToxOmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24/LTE6MX06ZnVuY3Rpb24oZSx0KXt2YXIgcixpPTAsbz1lLnBhcmVudE5vZGUsYT10LnBhcmVudE5vZGUscz1bZV0sbD1bdF07aWYoZT09PXQpcmV0dXJuIHU9ITAsMDtpZighb3x8IWEpcmV0dXJuIGU9PT1uPy0xOnQ9PT1uPzE6bz8tMTphPzE6MDtpZihvPT09YSlyZXR1cm4gdXQoZSx0KTtyPWU7d2hpbGUocj1yLnBhcmVudE5vZGUpcy51bnNoaWZ0KHIpO3I9dDt3aGlsZShyPXIucGFyZW50Tm9kZSlsLnVuc2hpZnQocik7d2hpbGUoc1tpXT09PWxbaV0paSsrO3JldHVybiBpP3V0KHNbaV0sbFtpXSk6c1tpXT09PXc/LTE6bFtpXT09PXc/MTowfSx1PSExLFswLDBdLnNvcnQodiksVC5kZXRlY3REdXBsaWNhdGVzPXUscCk6cH0sc3QubWF0Y2hlcz1mdW5jdGlvbihlLHQpe3JldHVybiBzdChlLG51bGwsbnVsbCx0KX0sc3QubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGUsdCl7aWYoKGUub3duZXJEb2N1bWVudHx8ZSkhPT1wJiZjKGUpLHQ9dC5yZXBsYWNlKFosXCI9JyQxJ11cIiksISghVC5tYXRjaGVzU2VsZWN0b3J8fGR8fGcmJmcudGVzdCh0KXx8aC50ZXN0KHQpKSl0cnl7dmFyIG49bS5jYWxsKGUsdCk7aWYobnx8VC5kaXNjb25uZWN0ZWRNYXRjaHx8ZS5kb2N1bWVudCYmMTEhPT1lLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBufWNhdGNoKHIpe31yZXR1cm4gc3QodCxwLG51bGwsW2VdKS5sZW5ndGg+MH0sc3QuY29udGFpbnM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZS5vd25lckRvY3VtZW50fHxlKSE9PXAmJmMoZSkseShlLHQpfSxzdC5hdHRyPWZ1bmN0aW9uKGUsdCl7dmFyIG47cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPT1wJiZjKGUpLGR8fCh0PXQudG9Mb3dlckNhc2UoKSksKG49aS5hdHRySGFuZGxlW3RdKT9uKGUpOmR8fFQuYXR0cmlidXRlcz9lLmdldEF0dHJpYnV0ZSh0KTooKG49ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKXx8ZS5nZXRBdHRyaWJ1dGUodCkpJiZlW3RdPT09ITA/dDpuJiZuLnNwZWNpZmllZD9uLnZhbHVlOm51bGx9LHN0LmVycm9yPWZ1bmN0aW9uKGUpe3Rocm93IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrZSl9LHN0LnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1bXSxyPTEsaT0wO2lmKHU9IVQuZGV0ZWN0RHVwbGljYXRlcyxlLnNvcnQodiksdSl7Zm9yKDt0PWVbcl07cisrKXQ9PT1lW3ItMV0mJihpPW4ucHVzaChyKSk7d2hpbGUoaS0tKWUuc3BsaWNlKG5baV0sMSl9cmV0dXJuIGV9O2Z1bmN0aW9uIHV0KGUsdCl7dmFyIG49dCYmZSxyPW4mJih+dC5zb3VyY2VJbmRleHx8aiktKH5lLnNvdXJjZUluZGV4fHxqKTtpZihyKXJldHVybiByO2lmKG4pd2hpbGUobj1uLm5leHRTaWJsaW5nKWlmKG49PT10KXJldHVybi0xO3JldHVybiBlPzE6LTF9ZnVuY3Rpb24gbHQoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1uJiZ0LnR5cGU9PT1lfX1mdW5jdGlvbiBjdChlKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIG49dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1ufHxcImJ1dHRvblwiPT09bikmJnQudHlwZT09PWV9fWZ1bmN0aW9uIHB0KGUpe3JldHVybiBvdChmdW5jdGlvbih0KXtyZXR1cm4gdD0rdCxvdChmdW5jdGlvbihuLHIpe3ZhciBpLG89ZShbXSxuLmxlbmd0aCx0KSxhPW8ubGVuZ3RoO3doaWxlKGEtLSluW2k9b1thXV0mJihuW2ldPSEocltpXT1uW2ldKSl9KX0pfW89c3QuZ2V0VGV4dD1mdW5jdGlvbihlKXt2YXIgdCxuPVwiXCIscj0wLGk9ZS5ub2RlVHlwZTtpZihpKXtpZigxPT09aXx8OT09PWl8fDExPT09aSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUudGV4dENvbnRlbnQpcmV0dXJuIGUudGV4dENvbnRlbnQ7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKW4rPW8oZSl9ZWxzZSBpZigzPT09aXx8ND09PWkpcmV0dXJuIGUubm9kZVZhbHVlfWVsc2UgZm9yKDt0PWVbcl07cisrKW4rPW8odCk7cmV0dXJuIG59LGk9c3Quc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86b3QsbWF0Y2g6VSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnJlcGxhY2UoZXQsdHQpLGVbM109KGVbNF18fGVbNV18fFwiXCIpLnJlcGxhY2UoZXQsdHQpLFwifj1cIj09PWVbMl0mJihlWzNdPVwiIFwiK2VbM10rXCIgXCIpLGUuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1lWzFdLnNsaWNlKDAsMyk/KGVbM118fHN0LmVycm9yKGVbMF0pLGVbNF09KyhlWzRdP2VbNV0rKGVbNl18fDEpOjIqKFwiZXZlblwiPT09ZVszXXx8XCJvZGRcIj09PWVbM10pKSxlWzVdPSsoZVs3XStlWzhdfHxcIm9kZFwiPT09ZVszXSkpOmVbM10mJnN0LmVycm9yKGVbMF0pLGV9LFBTRVVETzpmdW5jdGlvbihlKXt2YXIgdCxuPSFlWzVdJiZlWzJdO3JldHVybiBVLkNISUxELnRlc3QoZVswXSk/bnVsbDooZVs0XT9lWzJdPWVbNF06biYmei50ZXN0KG4pJiYodD1mdChuLCEwKSkmJih0PW4uaW5kZXhPZihcIilcIixuLmxlbmd0aC10KS1uLmxlbmd0aCkmJihlWzBdPWVbMF0uc2xpY2UoMCx0KSxlWzJdPW4uc2xpY2UoMCx0KSksZS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGUpe3JldHVyblwiKlwiPT09ZT9mdW5jdGlvbigpe3JldHVybiEwfTooZT1lLnJlcGxhY2UoZXQsdHQpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24odCl7cmV0dXJuIHQubm9kZU5hbWUmJnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWV9KX0sQ0xBU1M6ZnVuY3Rpb24oZSl7dmFyIHQ9a1tlK1wiIFwiXTtyZXR1cm4gdHx8KHQ9UmVnRXhwKFwiKF58XCIrXytcIilcIitlK1wiKFwiK18rXCJ8JClcIikpJiZrKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHQudGVzdChlLmNsYXNzTmFtZXx8dHlwZW9mIGUuZ2V0QXR0cmlidXRlIT09QSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGZ1bmN0aW9uKHIpe3ZhciBpPXN0LmF0dHIocixlKTtyZXR1cm4gbnVsbD09aT9cIiE9XCI9PT10OnQ/KGkrPVwiXCIsXCI9XCI9PT10P2k9PT1uOlwiIT1cIj09PXQ/aSE9PW46XCJePVwiPT09dD9uJiYwPT09aS5pbmRleE9mKG4pOlwiKj1cIj09PXQ/biYmaS5pbmRleE9mKG4pPi0xOlwiJD1cIj09PXQ/biYmaS5zbGljZSgtbi5sZW5ndGgpPT09bjpcIn49XCI9PT10PyhcIiBcIitpK1wiIFwiKS5pbmRleE9mKG4pPi0xOlwifD1cIj09PXQ/aT09PW58fGkuc2xpY2UoMCxuLmxlbmd0aCsxKT09PW4rXCItXCI6ITEpOiEwfX0sQ0hJTEQ6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbz1cIm50aFwiIT09ZS5zbGljZSgwLDMpLGE9XCJsYXN0XCIhPT1lLnNsaWNlKC00KSxzPVwib2YtdHlwZVwiPT09dDtyZXR1cm4gMT09PXImJjA9PT1pP2Z1bmN0aW9uKGUpe3JldHVybiEhZS5wYXJlbnROb2RlfTpmdW5jdGlvbih0LG4sdSl7dmFyIGwsYyxwLGYsZCxoLGc9byE9PWE/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIsbT10LnBhcmVudE5vZGUseT1zJiZ0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksdj0hdSYmIXM7aWYobSl7aWYobyl7d2hpbGUoZyl7cD10O3doaWxlKHA9cFtnXSlpZihzP3Aubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXk6MT09PXAubm9kZVR5cGUpcmV0dXJuITE7aD1nPVwib25seVwiPT09ZSYmIWgmJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihoPVthP20uZmlyc3RDaGlsZDptLmxhc3RDaGlsZF0sYSYmdil7Yz1tW3hdfHwobVt4XT17fSksbD1jW2VdfHxbXSxkPWxbMF09PT1OJiZsWzFdLGY9bFswXT09PU4mJmxbMl0scD1kJiZtLmNoaWxkTm9kZXNbZF07d2hpbGUocD0rK2QmJnAmJnBbZ118fChmPWQ9MCl8fGgucG9wKCkpaWYoMT09PXAubm9kZVR5cGUmJisrZiYmcD09PXQpe2NbZV09W04sZCxmXTticmVha319ZWxzZSBpZih2JiYobD0odFt4XXx8KHRbeF09e30pKVtlXSkmJmxbMF09PT1OKWY9bFsxXTtlbHNlIHdoaWxlKHA9KytkJiZwJiZwW2ddfHwoZj1kPTApfHxoLnBvcCgpKWlmKChzP3Aubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXk6MT09PXAubm9kZVR5cGUpJiYrK2YmJih2JiYoKHBbeF18fChwW3hdPXt9KSlbZV09W04sZl0pLHA9PT10KSlicmVhaztyZXR1cm4gZi09aSxmPT09cnx8MD09PWYlciYmZi9yPj0wfX19LFBTRVVETzpmdW5jdGlvbihlLHQpe3ZhciBuLHI9aS5wc2V1ZG9zW2VdfHxpLnNldEZpbHRlcnNbZS50b0xvd2VyQ2FzZSgpXXx8c3QuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2UpO3JldHVybiByW3hdP3IodCk6ci5sZW5ndGg+MT8obj1bZSxlLFwiXCIsdF0saS5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGUudG9Mb3dlckNhc2UoKSk/b3QoZnVuY3Rpb24oZSxuKXt2YXIgaSxvPXIoZSx0KSxhPW8ubGVuZ3RoO3doaWxlKGEtLSlpPU0uY2FsbChlLG9bYV0pLGVbaV09IShuW2ldPW9bYV0pfSk6ZnVuY3Rpb24oZSl7cmV0dXJuIHIoZSwwLG4pfSk6cn19LHBzZXVkb3M6e25vdDpvdChmdW5jdGlvbihlKXt2YXIgdD1bXSxuPVtdLHI9cyhlLnJlcGxhY2UoVyxcIiQxXCIpKTtyZXR1cm4gclt4XT9vdChmdW5jdGlvbihlLHQsbixpKXt2YXIgbyxhPXIoZSxudWxsLGksW10pLHM9ZS5sZW5ndGg7d2hpbGUocy0tKShvPWFbc10pJiYoZVtzXT0hKHRbc109bykpfSk6ZnVuY3Rpb24oZSxpLG8pe3JldHVybiB0WzBdPWUscih0LG51bGwsbyxuKSwhbi5wb3AoKX19KSxoYXM6b3QoZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBzdChlLHQpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOm90KGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4odC50ZXh0Q29udGVudHx8dC5pbm5lclRleHR8fG8odCkpLmluZGV4T2YoZSk+LTF9fSksbGFuZzpvdChmdW5jdGlvbihlKXtyZXR1cm4gWC50ZXN0KGV8fFwiXCIpfHxzdC5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2UpLGU9ZS5yZXBsYWNlKGV0LHR0KS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKHQpe3ZhciBuO2RvIGlmKG49ZD90LmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHx0LmdldEF0dHJpYnV0ZShcImxhbmdcIik6dC5sYW5nKXJldHVybiBuPW4udG9Mb3dlckNhc2UoKSxuPT09ZXx8MD09PW4uaW5kZXhPZihlK1wiLVwiKTt3aGlsZSgodD10LnBhcmVudE5vZGUpJiYxPT09dC5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKHQpe3ZhciBuPWUubG9jYXRpb24mJmUubG9jYXRpb24uaGFzaDtyZXR1cm4gbiYmbi5zbGljZSgxKT09PXQuaWR9LHJvb3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1mfSxmb2N1czpmdW5jdGlvbihlKXtyZXR1cm4gZT09PXAuYWN0aXZlRWxlbWVudCYmKCFwLmhhc0ZvY3VzfHxwLmhhc0ZvY3VzKCkpJiYhIShlLnR5cGV8fGUuaHJlZnx8fmUudGFiSW5kZXgpfSxlbmFibGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLmRpc2FibGVkPT09ITF9LGRpc2FibGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLmRpc2FibGVkPT09ITB9LGNoZWNrZWQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJiEhZS5jaGVja2VkfHxcIm9wdGlvblwiPT09dCYmISFlLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxlLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGUpe2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZylpZihlLm5vZGVOYW1lPlwiQFwifHwzPT09ZS5ub2RlVHlwZXx8ND09PWUubm9kZVR5cGUpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihlKXtyZXR1cm4haS5wc2V1ZG9zLmVtcHR5KGUpfSxoZWFkZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIFEudGVzdChlLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIEcudGVzdChlLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiZcImJ1dHRvblwiPT09ZS50eXBlfHxcImJ1dHRvblwiPT09dH0sdGV4dDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm5cImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09ZS50eXBlJiYobnVsbD09KHQ9ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8dC50b0xvd2VyQ2FzZSgpPT09ZS50eXBlKX0sZmlyc3Q6cHQoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0OnB0KGZ1bmN0aW9uKGUsdCl7cmV0dXJuW3QtMV19KSxlcTpwdChmdW5jdGlvbihlLHQsbil7cmV0dXJuWzA+bj9uK3Q6bl19KSxldmVuOnB0KGZ1bmN0aW9uKGUsdCl7dmFyIG49MDtmb3IoO3Q+bjtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLG9kZDpwdChmdW5jdGlvbihlLHQpe3ZhciBuPTE7Zm9yKDt0Pm47bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxsdDpwdChmdW5jdGlvbihlLHQsbil7dmFyIHI9MD5uP24rdDpuO2Zvcig7LS1yPj0wOyllLnB1c2gocik7cmV0dXJuIGV9KSxndDpwdChmdW5jdGlvbihlLHQsbil7dmFyIHI9MD5uP24rdDpuO2Zvcig7dD4rK3I7KWUucHVzaChyKTtyZXR1cm4gZX0pfX07Zm9yKG4gaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0paS5wc2V1ZG9zW25dPWx0KG4pO2ZvcihuIGlue3N1Ym1pdDohMCxyZXNldDohMH0paS5wc2V1ZG9zW25dPWN0KG4pO2Z1bmN0aW9uIGZ0KGUsdCl7dmFyIG4scixvLGEscyx1LGwsYz1FW2UrXCIgXCJdO2lmKGMpcmV0dXJuIHQ/MDpjLnNsaWNlKDApO3M9ZSx1PVtdLGw9aS5wcmVGaWx0ZXI7d2hpbGUocyl7KCFufHwocj0kLmV4ZWMocykpKSYmKHImJihzPXMuc2xpY2UoclswXS5sZW5ndGgpfHxzKSx1LnB1c2gobz1bXSkpLG49ITEsKHI9SS5leGVjKHMpKSYmKG49ci5zaGlmdCgpLG8ucHVzaCh7dmFsdWU6bix0eXBlOnJbMF0ucmVwbGFjZShXLFwiIFwiKX0pLHM9cy5zbGljZShuLmxlbmd0aCkpO2ZvcihhIGluIGkuZmlsdGVyKSEocj1VW2FdLmV4ZWMocykpfHxsW2FdJiYhKHI9bFthXShyKSl8fChuPXIuc2hpZnQoKSxvLnB1c2goe3ZhbHVlOm4sdHlwZTphLG1hdGNoZXM6cn0pLHM9cy5zbGljZShuLmxlbmd0aCkpO2lmKCFuKWJyZWFrfXJldHVybiB0P3MubGVuZ3RoOnM/c3QuZXJyb3IoZSk6RShlLHUpLnNsaWNlKDApfWZ1bmN0aW9uIGR0KGUpe3ZhciB0PTAsbj1lLmxlbmd0aCxyPVwiXCI7Zm9yKDtuPnQ7dCsrKXIrPWVbdF0udmFsdWU7cmV0dXJuIHJ9ZnVuY3Rpb24gaHQoZSx0LG4pe3ZhciBpPXQuZGlyLG89biYmXCJwYXJlbnROb2RlXCI9PT1pLGE9QysrO3JldHVybiB0LmZpcnN0P2Z1bmN0aW9uKHQsbixyKXt3aGlsZSh0PXRbaV0paWYoMT09PXQubm9kZVR5cGV8fG8pcmV0dXJuIGUodCxuLHIpfTpmdW5jdGlvbih0LG4scyl7dmFyIHUsbCxjLHA9TitcIiBcIithO2lmKHMpe3doaWxlKHQ9dFtpXSlpZigoMT09PXQubm9kZVR5cGV8fG8pJiZlKHQsbixzKSlyZXR1cm4hMH1lbHNlIHdoaWxlKHQ9dFtpXSlpZigxPT09dC5ub2RlVHlwZXx8bylpZihjPXRbeF18fCh0W3hdPXt9KSwobD1jW2ldKSYmbFswXT09PXApe2lmKCh1PWxbMV0pPT09ITB8fHU9PT1yKXJldHVybiB1PT09ITB9ZWxzZSBpZihsPWNbaV09W3BdLGxbMV09ZSh0LG4scyl8fHIsbFsxXT09PSEwKXJldHVybiEwfX1mdW5jdGlvbiBndChlKXtyZXR1cm4gZS5sZW5ndGg+MT9mdW5jdGlvbih0LG4scil7dmFyIGk9ZS5sZW5ndGg7d2hpbGUoaS0tKWlmKCFlW2ldKHQsbixyKSlyZXR1cm4hMTtyZXR1cm4hMH06ZVswXX1mdW5jdGlvbiBtdChlLHQsbixyLGkpe3ZhciBvLGE9W10scz0wLHU9ZS5sZW5ndGgsbD1udWxsIT10O2Zvcig7dT5zO3MrKykobz1lW3NdKSYmKCFufHxuKG8scixpKSkmJihhLnB1c2gobyksbCYmdC5wdXNoKHMpKTtyZXR1cm4gYX1mdW5jdGlvbiB5dChlLHQsbixyLGksbyl7cmV0dXJuIHImJiFyW3hdJiYocj15dChyKSksaSYmIWlbeF0mJihpPXl0KGksbykpLG90KGZ1bmN0aW9uKG8sYSxzLHUpe3ZhciBsLGMscCxmPVtdLGQ9W10saD1hLmxlbmd0aCxnPW98fHh0KHR8fFwiKlwiLHMubm9kZVR5cGU/W3NdOnMsW10pLG09IWV8fCFvJiZ0P2c6bXQoZyxmLGUscyx1KSx5PW4/aXx8KG8/ZTpofHxyKT9bXTphOm07aWYobiYmbihtLHkscyx1KSxyKXtsPW10KHksZCkscihsLFtdLHMsdSksYz1sLmxlbmd0aDt3aGlsZShjLS0pKHA9bFtjXSkmJih5W2RbY11dPSEobVtkW2NdXT1wKSl9aWYobyl7aWYoaXx8ZSl7aWYoaSl7bD1bXSxjPXkubGVuZ3RoO3doaWxlKGMtLSkocD15W2NdKSYmbC5wdXNoKG1bY109cCk7aShudWxsLHk9W10sbCx1KX1jPXkubGVuZ3RoO3doaWxlKGMtLSkocD15W2NdKSYmKGw9aT9NLmNhbGwobyxwKTpmW2NdKT4tMSYmKG9bbF09IShhW2xdPXApKX19ZWxzZSB5PW10KHk9PT1hP3kuc3BsaWNlKGgseS5sZW5ndGgpOnkpLGk/aShudWxsLGEseSx1KTpILmFwcGx5KGEseSl9KX1mdW5jdGlvbiB2dChlKXt2YXIgdCxuLHIsbz1lLmxlbmd0aCxhPWkucmVsYXRpdmVbZVswXS50eXBlXSxzPWF8fGkucmVsYXRpdmVbXCIgXCJdLHU9YT8xOjAsYz1odChmdW5jdGlvbihlKXtyZXR1cm4gZT09PXR9LHMsITApLHA9aHQoZnVuY3Rpb24oZSl7cmV0dXJuIE0uY2FsbCh0LGUpPi0xfSxzLCEwKSxmPVtmdW5jdGlvbihlLG4scil7cmV0dXJuIWEmJihyfHxuIT09bCl8fCgodD1uKS5ub2RlVHlwZT9jKGUsbixyKTpwKGUsbixyKSl9XTtmb3IoO28+dTt1KyspaWYobj1pLnJlbGF0aXZlW2VbdV0udHlwZV0pZj1baHQoZ3QoZiksbildO2Vsc2V7aWYobj1pLmZpbHRlcltlW3VdLnR5cGVdLmFwcGx5KG51bGwsZVt1XS5tYXRjaGVzKSxuW3hdKXtmb3Iocj0rK3U7bz5yO3IrKylpZihpLnJlbGF0aXZlW2Vbcl0udHlwZV0pYnJlYWs7cmV0dXJuIHl0KHU+MSYmZ3QoZiksdT4xJiZkdChlLnNsaWNlKDAsdS0xKSkucmVwbGFjZShXLFwiJDFcIiksbixyPnUmJnZ0KGUuc2xpY2UodSxyKSksbz5yJiZ2dChlPWUuc2xpY2UocikpLG8+ciYmZHQoZSkpfWYucHVzaChuKX1yZXR1cm4gZ3QoZil9ZnVuY3Rpb24gYnQoZSx0KXt2YXIgbj0wLG89dC5sZW5ndGg+MCxhPWUubGVuZ3RoPjAscz1mdW5jdGlvbihzLHUsYyxmLGQpe3ZhciBoLGcsbSx5PVtdLHY9MCxiPVwiMFwiLHg9cyYmW10sdz1udWxsIT1kLFQ9bCxDPXN8fGEmJmkuZmluZC5UQUcoXCIqXCIsZCYmdS5wYXJlbnROb2RlfHx1KSxrPU4rPW51bGw9PVQ/MTpNYXRoLnJhbmRvbSgpfHwuMTtmb3IodyYmKGw9dSE9PXAmJnUscj1uKTtudWxsIT0oaD1DW2JdKTtiKyspe2lmKGEmJmgpe2c9MDt3aGlsZShtPWVbZysrXSlpZihtKGgsdSxjKSl7Zi5wdXNoKGgpO2JyZWFrfXcmJihOPWsscj0rK24pfW8mJigoaD0hbSYmaCkmJnYtLSxzJiZ4LnB1c2goaCkpfWlmKHYrPWIsbyYmYiE9PXYpe2c9MDt3aGlsZShtPXRbZysrXSltKHgseSx1LGMpO2lmKHMpe2lmKHY+MCl3aGlsZShiLS0peFtiXXx8eVtiXXx8KHlbYl09TC5jYWxsKGYpKTt5PW10KHkpfUguYXBwbHkoZix5KSx3JiYhcyYmeS5sZW5ndGg+MCYmdit0Lmxlbmd0aD4xJiZzdC51bmlxdWVTb3J0KGYpfXJldHVybiB3JiYoTj1rLGw9VCkseH07cmV0dXJuIG8/b3Qocyk6c31zPXN0LmNvbXBpbGU9ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9W10sbz1TW2UrXCIgXCJdO2lmKCFvKXt0fHwodD1mdChlKSksbj10Lmxlbmd0aDt3aGlsZShuLS0pbz12dCh0W25dKSxvW3hdP3IucHVzaChvKTppLnB1c2gobyk7bz1TKGUsYnQoaSxyKSl9cmV0dXJuIG99O2Z1bmN0aW9uIHh0KGUsdCxuKXt2YXIgcj0wLGk9dC5sZW5ndGg7Zm9yKDtpPnI7cisrKXN0KGUsdFtyXSxuKTtyZXR1cm4gbn1mdW5jdGlvbiB3dChlLHQsbixyKXt2YXIgbyxhLHUsbCxjLHA9ZnQoZSk7aWYoIXImJjE9PT1wLmxlbmd0aCl7aWYoYT1wWzBdPXBbMF0uc2xpY2UoMCksYS5sZW5ndGg+MiYmXCJJRFwiPT09KHU9YVswXSkudHlwZSYmOT09PXQubm9kZVR5cGUmJiFkJiZpLnJlbGF0aXZlW2FbMV0udHlwZV0pe2lmKHQ9aS5maW5kLklEKHUubWF0Y2hlc1swXS5yZXBsYWNlKGV0LHR0KSx0KVswXSwhdClyZXR1cm4gbjtlPWUuc2xpY2UoYS5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9bz1VLm5lZWRzQ29udGV4dC50ZXN0KGUpPzA6YS5sZW5ndGg7d2hpbGUoby0tKXtpZih1PWFbb10saS5yZWxhdGl2ZVtsPXUudHlwZV0pYnJlYWs7aWYoKGM9aS5maW5kW2xdKSYmKHI9Yyh1Lm1hdGNoZXNbMF0ucmVwbGFjZShldCx0dCksVi50ZXN0KGFbMF0udHlwZSkmJnQucGFyZW50Tm9kZXx8dCkpKXtpZihhLnNwbGljZShvLDEpLGU9ci5sZW5ndGgmJmR0KGEpLCFlKXJldHVybiBILmFwcGx5KG4scS5jYWxsKHIsMCkpLG47YnJlYWt9fX1yZXR1cm4gcyhlLHApKHIsdCxkLG4sVi50ZXN0KGUpKSxufWkucHNldWRvcy5udGg9aS5wc2V1ZG9zLmVxO2Z1bmN0aW9uIFR0KCl7fWkuZmlsdGVycz1UdC5wcm90b3R5cGU9aS5wc2V1ZG9zLGkuc2V0RmlsdGVycz1uZXcgVHQsYygpLHN0LmF0dHI9Yi5hdHRyLGIuZmluZD1zdCxiLmV4cHI9c3Quc2VsZWN0b3JzLGIuZXhwcltcIjpcIl09Yi5leHByLnBzZXVkb3MsYi51bmlxdWU9c3QudW5pcXVlU29ydCxiLnRleHQ9c3QuZ2V0VGV4dCxiLmlzWE1MRG9jPXN0LmlzWE1MLGIuY29udGFpbnM9c3QuY29udGFpbnN9KGUpO3ZhciBhdD0vVW50aWwkLyxzdD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyx1dD0vXi5bXjojXFxbXFwuLF0qJC8sbHQ9Yi5leHByLm1hdGNoLm5lZWRzQ29udGV4dCxjdD17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtiLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaT10aGlzLmxlbmd0aDtpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gcj10aGlzLHRoaXMucHVzaFN0YWNrKGIoZSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHQ9MDtpPnQ7dCsrKWlmKGIuY29udGFpbnMoclt0XSx0aGlzKSlyZXR1cm4hMH0pKTtmb3Iobj1bXSx0PTA7aT50O3QrKyliLmZpbmQoZSx0aGlzW3RdLG4pO3JldHVybiBuPXRoaXMucHVzaFN0YWNrKGk+MT9iLnVuaXF1ZShuKTpuKSxuLnNlbGVjdG9yPSh0aGlzLnNlbGVjdG9yP3RoaXMuc2VsZWN0b3IrXCIgXCI6XCJcIikrZSxufSxoYXM6ZnVuY3Rpb24oZSl7dmFyIHQsbj1iKGUsdGhpcykscj1uLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodD0wO3I+dDt0KyspaWYoYi5jb250YWlucyh0aGlzLG5bdF0pKXJldHVybiEwfSl9LG5vdDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZnQodGhpcyxlLCExKSl9LGZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZnQodGhpcyxlLCEwKSl9LGlzOmZ1bmN0aW9uKGUpe3JldHVybiEhZSYmKFwic3RyaW5nXCI9PXR5cGVvZiBlP2x0LnRlc3QoZSk/YihlLHRoaXMuY29udGV4dCkuaW5kZXgodGhpc1swXSk+PTA6Yi5maWx0ZXIoZSx0aGlzKS5sZW5ndGg+MDp0aGlzLmZpbHRlcihlKS5sZW5ndGg+MCl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10aGlzLmxlbmd0aCxvPVtdLGE9bHQudGVzdChlKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGU/YihlLHR8fHRoaXMuY29udGV4dCk6MDtmb3IoO2k+cjtyKyspe249dGhpc1tyXTt3aGlsZShuJiZuLm93bmVyRG9jdW1lbnQmJm4hPT10JiYxMSE9PW4ubm9kZVR5cGUpe2lmKGE/YS5pbmRleChuKT4tMTpiLmZpbmQubWF0Y2hlc1NlbGVjdG9yKG4sZSkpe28ucHVzaChuKTticmVha31uPW4ucGFyZW50Tm9kZX19cmV0dXJuIHRoaXMucHVzaFN0YWNrKG8ubGVuZ3RoPjE/Yi51bmlxdWUobyk6byl9LGluZGV4OmZ1bmN0aW9uKGUpe3JldHVybiBlP1wic3RyaW5nXCI9PXR5cGVvZiBlP2IuaW5BcnJheSh0aGlzWzBdLGIoZSkpOmIuaW5BcnJheShlLmpxdWVyeT9lWzBdOmUsdGhpcyk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oZSx0KXt2YXIgbj1cInN0cmluZ1wiPT10eXBlb2YgZT9iKGUsdCk6Yi5tYWtlQXJyYXkoZSYmZS5ub2RlVHlwZT9bZV06ZSkscj1iLm1lcmdlKHRoaXMuZ2V0KCksbik7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGIudW5pcXVlKHIpKX0sYWRkQmFjazpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09ZT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihlKSl9fSksYi5mbi5hbmRTZWxmPWIuZm4uYWRkQmFjaztmdW5jdGlvbiBwdChlLHQpe2RvIGU9ZVt0XTt3aGlsZShlJiYxIT09ZS5ub2RlVHlwZSk7cmV0dXJuIGV9Yi5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiYxMSE9PXQubm9kZVR5cGU/dDpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBiLmRpcihlLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gYi5kaXIoZSxcInBhcmVudE5vZGVcIixuKX0sbmV4dDpmdW5jdGlvbihlKXtyZXR1cm4gcHQoZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGUpe3JldHVybiBwdChlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBiLmRpcihlLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGIuZGlyKGUsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGIuZGlyKGUsXCJuZXh0U2libGluZ1wiLG4pfSxwcmV2VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBiLmRpcihlLFwicHJldmlvdXNTaWJsaW5nXCIsbil9LHNpYmxpbmdzOmZ1bmN0aW9uKGUpe3JldHVybiBiLnNpYmxpbmcoKGUucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsZSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGUpe3JldHVybiBiLnNpYmxpbmcoZS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGIubm9kZU5hbWUoZSxcImlmcmFtZVwiKT9lLmNvbnRlbnREb2N1bWVudHx8ZS5jb250ZW50V2luZG93LmRvY3VtZW50OmIubWVyZ2UoW10sZS5jaGlsZE5vZGVzKX19LGZ1bmN0aW9uKGUsdCl7Yi5mbltlXT1mdW5jdGlvbihuLHIpe3ZhciBpPWIubWFwKHRoaXMsdCxuKTtyZXR1cm4gYXQudGVzdChlKXx8KHI9biksciYmXCJzdHJpbmdcIj09dHlwZW9mIHImJihpPWIuZmlsdGVyKHIsaSkpLGk9dGhpcy5sZW5ndGg+MSYmIWN0W2VdP2IudW5pcXVlKGkpOmksdGhpcy5sZW5ndGg+MSYmc3QudGVzdChlKSYmKGk9aS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGkpfX0pLGIuZXh0ZW5kKHtmaWx0ZXI6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBuJiYoZT1cIjpub3QoXCIrZStcIilcIiksMT09PXQubGVuZ3RoP2IuZmluZC5tYXRjaGVzU2VsZWN0b3IodFswXSxlKT9bdFswXV06W106Yi5maW5kLm1hdGNoZXMoZSx0KX0sZGlyOmZ1bmN0aW9uKGUsbixyKXt2YXIgaT1bXSxvPWVbbl07d2hpbGUobyYmOSE9PW8ubm9kZVR5cGUmJihyPT09dHx8MSE9PW8ubm9kZVR5cGV8fCFiKG8pLmlzKHIpKSkxPT09by5ub2RlVHlwZSYmaS5wdXNoKG8pLG89b1tuXTtyZXR1cm4gaX0sc2libGluZzpmdW5jdGlvbihlLHQpe3ZhciBuPVtdO2Zvcig7ZTtlPWUubmV4dFNpYmxpbmcpMT09PWUubm9kZVR5cGUmJmUhPT10JiZuLnB1c2goZSk7cmV0dXJuIG59fSk7ZnVuY3Rpb24gZnQoZSx0LG4pe2lmKHQ9dHx8MCxiLmlzRnVuY3Rpb24odCkpcmV0dXJuIGIuZ3JlcChlLGZ1bmN0aW9uKGUscil7dmFyIGk9ISF0LmNhbGwoZSxyLGUpO3JldHVybiBpPT09bn0pO2lmKHQubm9kZVR5cGUpcmV0dXJuIGIuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiBlPT09dD09PW59KTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIHI9Yi5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfSk7aWYodXQudGVzdCh0KSlyZXR1cm4gYi5maWx0ZXIodCxyLCFuKTt0PWIuZmlsdGVyKHQscil9cmV0dXJuIGIuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiBiLmluQXJyYXkoZSx0KT49MD09PW59KX1mdW5jdGlvbiBkdChlKXt2YXIgdD1odC5zcGxpdChcInxcIiksbj1lLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtpZihuLmNyZWF0ZUVsZW1lbnQpd2hpbGUodC5sZW5ndGgpbi5jcmVhdGVFbGVtZW50KHQucG9wKCkpO3JldHVybiBufXZhciBodD1cImFiYnJ8YXJ0aWNsZXxhc2lkZXxhdWRpb3xiZGl8Y2FudmFzfGRhdGF8ZGF0YWxpc3R8ZGV0YWlsc3xmaWdjYXB0aW9ufGZpZ3VyZXxmb290ZXJ8aGVhZGVyfGhncm91cHxtYXJrfG1ldGVyfG5hdnxvdXRwdXR8cHJvZ3Jlc3N8c2VjdGlvbnxzdW1tYXJ5fHRpbWV8dmlkZW9cIixndD0vIGpRdWVyeVxcZCs9XCIoPzpudWxsfFxcZCspXCIvZyxtdD1SZWdFeHAoXCI8KD86XCIraHQrXCIpW1xcXFxzLz5dXCIsXCJpXCIpLHl0PS9eXFxzKy8sdnQ9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzpdKylbXj5dKilcXC8+L2dpLGJ0PS88KFtcXHc6XSspLyx4dD0vPHRib2R5L2ksd3Q9Lzx8JiM/XFx3KzsvLFR0PS88KD86c2NyaXB0fHN0eWxlfGxpbmspL2ksTnQ9L14oPzpjaGVja2JveHxyYWRpbykkL2ksQ3Q9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxrdD0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLEV0PS9edHJ1ZVxcLyguKikvLFN0PS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZyxBdD17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLGxlZ2VuZDpbMSxcIjxmaWVsZHNldD5cIixcIjwvZmllbGRzZXQ+XCJdLGFyZWE6WzEsXCI8bWFwPlwiLFwiPC9tYXA+XCJdLHBhcmFtOlsxLFwiPG9iamVjdD5cIixcIjwvb2JqZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjx0Ym9keT48L3Rib2R5Pjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpiLnN1cHBvcnQuaHRtbFNlcmlhbGl6ZT9bMCxcIlwiLFwiXCJdOlsxLFwiWDxkaXY+XCIsXCI8L2Rpdj5cIl19LGp0PWR0KG8pLER0PWp0LmFwcGVuZENoaWxkKG8uY3JlYXRlRWxlbWVudChcImRpdlwiKSk7QXQub3B0Z3JvdXA9QXQub3B0aW9uLEF0LnRib2R5PUF0LnRmb290PUF0LmNvbGdyb3VwPUF0LmNhcHRpb249QXQudGhlYWQsQXQudGg9QXQudGQsYi5mbi5leHRlbmQoe3RleHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGIuYWNjZXNzKHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT10P2IudGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuYXBwZW5kKCh0aGlzWzBdJiZ0aGlzWzBdLm93bmVyRG9jdW1lbnR8fG8pLmNyZWF0ZVRleHROb2RlKGUpKX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSx3cmFwQWxsOmZ1bmN0aW9uKGUpe2lmKGIuaXNGdW5jdGlvbihlKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2IodGhpcykud3JhcEFsbChlLmNhbGwodGhpcyx0KSl9KTtpZih0aGlzWzBdKXt2YXIgdD1iKGUsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCk7dGhpc1swXS5wYXJlbnROb2RlJiZ0Lmluc2VydEJlZm9yZSh0aGlzWzBdKSx0Lm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXM7d2hpbGUoZS5maXJzdENoaWxkJiYxPT09ZS5maXJzdENoaWxkLm5vZGVUeXBlKWU9ZS5maXJzdENoaWxkO3JldHVybiBlfSkuYXBwZW5kKHRoaXMpfXJldHVybiB0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGIuaXNGdW5jdGlvbihlKT90aGlzLmVhY2goZnVuY3Rpb24odCl7Yih0aGlzKS53cmFwSW5uZXIoZS5jYWxsKHRoaXMsdCkpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9Yih0aGlzKSxuPXQuY29udGVudHMoKTtuLmxlbmd0aD9uLndyYXBBbGwoZSk6dC5hcHBlbmQoZSl9KX0sd3JhcDpmdW5jdGlvbihlKXt2YXIgdD1iLmlzRnVuY3Rpb24oZSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihuKXtiKHRoaXMpLndyYXBBbGwodD9lLmNhbGwodGhpcyxuKTplKX0pfSx1bndyYXA6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXJlbnQoKS5lYWNoKGZ1bmN0aW9uKCl7Yi5ub2RlTmFtZSh0aGlzLFwiYm9keVwiKXx8Yih0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSkuZW5kKCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cywhMCxmdW5jdGlvbihlKXsoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpJiZ0aGlzLmFwcGVuZENoaWxkKGUpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsITAsZnVuY3Rpb24oZSl7KDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKSYmdGhpcy5pbnNlcnRCZWZvcmUoZSx0aGlzLmZpcnN0Q2hpbGQpfSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cywhMSxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cywhMSxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzLm5leHRTaWJsaW5nKX0pfSxyZW1vdmU6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTA7Zm9yKDtudWxsIT0obj10aGlzW3JdKTtyKyspKCFlfHxiLmZpbHRlcihlLFtuXSkubGVuZ3RoPjApJiYodHx8MSE9PW4ubm9kZVR5cGV8fGIuY2xlYW5EYXRhKE90KG4pKSxuLnBhcmVudE5vZGUmJih0JiZiLmNvbnRhaW5zKG4ub3duZXJEb2N1bWVudCxuKSYmTXQoT3QobixcInNjcmlwdFwiKSksbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pKSk7cmV0dXJuIHRoaXN9LGVtcHR5OmZ1bmN0aW9uKCl7dmFyIGUsdD0wO2Zvcig7bnVsbCE9KGU9dGhpc1t0XSk7dCsrKXsxPT09ZS5ub2RlVHlwZSYmYi5jbGVhbkRhdGEoT3QoZSwhMSkpO3doaWxlKGUuZmlyc3RDaGlsZCllLnJlbW92ZUNoaWxkKGUuZmlyc3RDaGlsZCk7ZS5vcHRpb25zJiZiLm5vZGVOYW1lKGUsXCJzZWxlY3RcIikmJihlLm9wdGlvbnMubGVuZ3RoPTApfXJldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihlLHQpe3JldHVybiBlPW51bGw9PWU/ITE6ZSx0PW51bGw9PXQ/ZTp0LHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIGIuY2xvbmUodGhpcyxlLHQpfSl9LGh0bWw6ZnVuY3Rpb24oZSl7cmV0dXJuIGIuYWNjZXNzKHRoaXMsZnVuY3Rpb24oZSl7dmFyIG49dGhpc1swXXx8e30scj0wLGk9dGhpcy5sZW5ndGg7aWYoZT09PXQpcmV0dXJuIDE9PT1uLm5vZGVUeXBlP24uaW5uZXJIVE1MLnJlcGxhY2UoZ3QsXCJcIik6dDtpZighKFwic3RyaW5nXCIhPXR5cGVvZiBlfHxUdC50ZXN0KGUpfHwhYi5zdXBwb3J0Lmh0bWxTZXJpYWxpemUmJm10LnRlc3QoZSl8fCFiLnN1cHBvcnQubGVhZGluZ1doaXRlc3BhY2UmJnl0LnRlc3QoZSl8fEF0WyhidC5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pKXtlPWUucmVwbGFjZSh2dCxcIjwkMT48LyQyPlwiKTt0cnl7Zm9yKDtpPnI7cisrKW49dGhpc1tyXXx8e30sMT09PW4ubm9kZVR5cGUmJihiLmNsZWFuRGF0YShPdChuLCExKSksbi5pbm5lckhUTUw9ZSk7bj0wfWNhdGNoKG8pe319biYmdGhpcy5lbXB0eSgpLmFwcGVuZChlKX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbihlKXt2YXIgdD1iLmlzRnVuY3Rpb24oZSk7cmV0dXJuIHR8fFwic3RyaW5nXCI9PXR5cGVvZiBlfHwoZT1iKGUpLm5vdCh0aGlzKS5kZXRhY2goKSksdGhpcy5kb21NYW5pcChbZV0sITAsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5uZXh0U2libGluZyxuPXRoaXMucGFyZW50Tm9kZTtuJiYoYih0aGlzKS5yZW1vdmUoKSxuLmluc2VydEJlZm9yZShlLHQpKX0pfSxkZXRhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucmVtb3ZlKGUsITApfSxkb21NYW5pcDpmdW5jdGlvbihlLG4scil7ZT1mLmFwcGx5KFtdLGUpO3ZhciBpLG8sYSxzLHUsbCxjPTAscD10aGlzLmxlbmd0aCxkPXRoaXMsaD1wLTEsZz1lWzBdLG09Yi5pc0Z1bmN0aW9uKGcpO2lmKG18fCEoMT49cHx8XCJzdHJpbmdcIiE9dHlwZW9mIGd8fGIuc3VwcG9ydC5jaGVja0Nsb25lKSYmQ3QudGVzdChnKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGkpe3ZhciBvPWQuZXEoaSk7bSYmKGVbMF09Zy5jYWxsKHRoaXMsaSxuP28uaHRtbCgpOnQpKSxvLmRvbU1hbmlwKGUsbixyKX0pO2lmKHAmJihsPWIuYnVpbGRGcmFnbWVudChlLHRoaXNbMF0ub3duZXJEb2N1bWVudCwhMSx0aGlzKSxpPWwuZmlyc3RDaGlsZCwxPT09bC5jaGlsZE5vZGVzLmxlbmd0aCYmKGw9aSksaSkpe2ZvcihuPW4mJmIubm9kZU5hbWUoaSxcInRyXCIpLHM9Yi5tYXAoT3QobCxcInNjcmlwdFwiKSxIdCksYT1zLmxlbmd0aDtwPmM7YysrKW89bCxjIT09aCYmKG89Yi5jbG9uZShvLCEwLCEwKSxhJiZiLm1lcmdlKHMsT3QobyxcInNjcmlwdFwiKSkpLHIuY2FsbChuJiZiLm5vZGVOYW1lKHRoaXNbY10sXCJ0YWJsZVwiKT9MdCh0aGlzW2NdLFwidGJvZHlcIik6dGhpc1tjXSxvLGMpO2lmKGEpZm9yKHU9c1tzLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LGIubWFwKHMscXQpLGM9MDthPmM7YysrKW89c1tjXSxrdC50ZXN0KG8udHlwZXx8XCJcIikmJiFiLl9kYXRhKG8sXCJnbG9iYWxFdmFsXCIpJiZiLmNvbnRhaW5zKHUsbykmJihvLnNyYz9iLmFqYXgoe3VybDpvLnNyYyx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixhc3luYzohMSxnbG9iYWw6ITEsXCJ0aHJvd3NcIjohMH0pOmIuZ2xvYmFsRXZhbCgoby50ZXh0fHxvLnRleHRDb250ZW50fHxvLmlubmVySFRNTHx8XCJcIikucmVwbGFjZShTdCxcIlwiKSkpO2w9aT1udWxsfXJldHVybiB0aGlzfX0pO2Z1bmN0aW9uIEx0KGUsdCl7cmV0dXJuIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodClbMF18fGUuYXBwZW5kQ2hpbGQoZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCkpfWZ1bmN0aW9uIEh0KGUpe3ZhciB0PWUuZ2V0QXR0cmlidXRlTm9kZShcInR5cGVcIik7cmV0dXJuIGUudHlwZT0odCYmdC5zcGVjaWZpZWQpK1wiL1wiK2UudHlwZSxlfWZ1bmN0aW9uIHF0KGUpe3ZhciB0PUV0LmV4ZWMoZS50eXBlKTtyZXR1cm4gdD9lLnR5cGU9dFsxXTplLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksZX1mdW5jdGlvbiBNdChlLHQpe3ZhciBuLHI9MDtmb3IoO251bGwhPShuPWVbcl0pO3IrKyliLl9kYXRhKG4sXCJnbG9iYWxFdmFsXCIsIXR8fGIuX2RhdGEodFtyXSxcImdsb2JhbEV2YWxcIikpfWZ1bmN0aW9uIF90KGUsdCl7aWYoMT09PXQubm9kZVR5cGUmJmIuaGFzRGF0YShlKSl7dmFyIG4scixpLG89Yi5fZGF0YShlKSxhPWIuX2RhdGEodCxvKSxzPW8uZXZlbnRzO2lmKHMpe2RlbGV0ZSBhLmhhbmRsZSxhLmV2ZW50cz17fTtmb3IobiBpbiBzKWZvcihyPTAsaT1zW25dLmxlbmd0aDtpPnI7cisrKWIuZXZlbnQuYWRkKHQsbixzW25dW3JdKX1hLmRhdGEmJihhLmRhdGE9Yi5leHRlbmQoe30sYS5kYXRhKSl9fWZ1bmN0aW9uIEZ0KGUsdCl7dmFyIG4scixpO2lmKDE9PT10Lm5vZGVUeXBlKXtpZihuPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSwhYi5zdXBwb3J0Lm5vQ2xvbmVFdmVudCYmdFtiLmV4cGFuZG9dKXtpPWIuX2RhdGEodCk7Zm9yKHIgaW4gaS5ldmVudHMpYi5yZW1vdmVFdmVudCh0LHIsaS5oYW5kbGUpO3QucmVtb3ZlQXR0cmlidXRlKGIuZXhwYW5kbyl9XCJzY3JpcHRcIj09PW4mJnQudGV4dCE9PWUudGV4dD8oSHQodCkudGV4dD1lLnRleHQscXQodCkpOlwib2JqZWN0XCI9PT1uPyh0LnBhcmVudE5vZGUmJih0Lm91dGVySFRNTD1lLm91dGVySFRNTCksYi5zdXBwb3J0Lmh0bWw1Q2xvbmUmJmUuaW5uZXJIVE1MJiYhYi50cmltKHQuaW5uZXJIVE1MKSYmKHQuaW5uZXJIVE1MPWUuaW5uZXJIVE1MKSk6XCJpbnB1dFwiPT09biYmTnQudGVzdChlLnR5cGUpPyh0LmRlZmF1bHRDaGVja2VkPXQuY2hlY2tlZD1lLmNoZWNrZWQsdC52YWx1ZSE9PWUudmFsdWUmJih0LnZhbHVlPWUudmFsdWUpKTpcIm9wdGlvblwiPT09bj90LmRlZmF1bHRTZWxlY3RlZD10LnNlbGVjdGVkPWUuZGVmYXVsdFNlbGVjdGVkOihcImlucHV0XCI9PT1ufHxcInRleHRhcmVhXCI9PT1uKSYmKHQuZGVmYXVsdFZhbHVlPWUuZGVmYXVsdFZhbHVlKX19Yi5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGUsdCl7Yi5mbltlXT1mdW5jdGlvbihlKXt2YXIgbixyPTAsaT1bXSxvPWIoZSksYT1vLmxlbmd0aC0xO2Zvcig7YT49cjtyKyspbj1yPT09YT90aGlzOnRoaXMuY2xvbmUoITApLGIob1tyXSlbdF0obiksZC5hcHBseShpLG4uZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhpKX19KTtmdW5jdGlvbiBPdChlLG4pe3ZhciByLG8sYT0wLHM9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUhPT1pP2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUobnx8XCIqXCIpOnR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGwhPT1pP2UucXVlcnlTZWxlY3RvckFsbChufHxcIipcIik6dDtpZighcylmb3Iocz1bXSxyPWUuY2hpbGROb2Rlc3x8ZTtudWxsIT0obz1yW2FdKTthKyspIW58fGIubm9kZU5hbWUobyxuKT9zLnB1c2gobyk6Yi5tZXJnZShzLE90KG8sbikpO3JldHVybiBuPT09dHx8biYmYi5ub2RlTmFtZShlLG4pP2IubWVyZ2UoW2VdLHMpOnN9ZnVuY3Rpb24gQnQoZSl7TnQudGVzdChlLnR5cGUpJiYoZS5kZWZhdWx0Q2hlY2tlZD1lLmNoZWNrZWQpfWIuZXh0ZW5kKHtjbG9uZTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1PWIuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpO2lmKGIuc3VwcG9ydC5odG1sNUNsb25lfHxiLmlzWE1MRG9jKGUpfHwhbXQudGVzdChcIjxcIitlLm5vZGVOYW1lK1wiPlwiKT9vPWUuY2xvbmVOb2RlKCEwKTooRHQuaW5uZXJIVE1MPWUub3V0ZXJIVE1MLER0LnJlbW92ZUNoaWxkKG89RHQuZmlyc3RDaGlsZCkpLCEoYi5zdXBwb3J0Lm5vQ2xvbmVFdmVudCYmYi5zdXBwb3J0Lm5vQ2xvbmVDaGVja2VkfHwxIT09ZS5ub2RlVHlwZSYmMTEhPT1lLm5vZGVUeXBlfHxiLmlzWE1MRG9jKGUpKSlmb3Iocj1PdChvKSxzPU90KGUpLGE9MDtudWxsIT0oaT1zW2FdKTsrK2EpclthXSYmRnQoaSxyW2FdKTtpZih0KWlmKG4pZm9yKHM9c3x8T3QoZSkscj1yfHxPdChvKSxhPTA7bnVsbCE9KGk9c1thXSk7YSsrKV90KGksclthXSk7ZWxzZSBfdChlLG8pO3JldHVybiByPU90KG8sXCJzY3JpcHRcIiksci5sZW5ndGg+MCYmTXQociwhdSYmT3QoZSxcInNjcmlwdFwiKSkscj1zPWk9bnVsbCxvfSxidWlsZEZyYWdtZW50OmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLHA9ZS5sZW5ndGgsZj1kdCh0KSxkPVtdLGg9MDtmb3IoO3A+aDtoKyspaWYobz1lW2hdLG98fDA9PT1vKWlmKFwib2JqZWN0XCI9PT1iLnR5cGUobykpYi5tZXJnZShkLG8ubm9kZVR5cGU/W29dOm8pO2Vsc2UgaWYod3QudGVzdChvKSl7cz1zfHxmLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSksdT0oYnQuZXhlYyhvKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksYz1BdFt1XXx8QXQuX2RlZmF1bHQscy5pbm5lckhUTUw9Y1sxXStvLnJlcGxhY2UodnQsXCI8JDE+PC8kMj5cIikrY1syXSxpPWNbMF07d2hpbGUoaS0tKXM9cy5sYXN0Q2hpbGQ7aWYoIWIuc3VwcG9ydC5sZWFkaW5nV2hpdGVzcGFjZSYmeXQudGVzdChvKSYmZC5wdXNoKHQuY3JlYXRlVGV4dE5vZGUoeXQuZXhlYyhvKVswXSkpLCFiLnN1cHBvcnQudGJvZHkpe289XCJ0YWJsZVwiIT09dXx8eHQudGVzdChvKT9cIjx0YWJsZT5cIiE9PWNbMV18fHh0LnRlc3Qobyk/MDpzOnMuZmlyc3RDaGlsZCxpPW8mJm8uY2hpbGROb2Rlcy5sZW5ndGg7d2hpbGUoaS0tKWIubm9kZU5hbWUobD1vLmNoaWxkTm9kZXNbaV0sXCJ0Ym9keVwiKSYmIWwuY2hpbGROb2Rlcy5sZW5ndGgmJm8ucmVtb3ZlQ2hpbGQobClcbn1iLm1lcmdlKGQscy5jaGlsZE5vZGVzKSxzLnRleHRDb250ZW50PVwiXCI7d2hpbGUocy5maXJzdENoaWxkKXMucmVtb3ZlQ2hpbGQocy5maXJzdENoaWxkKTtzPWYubGFzdENoaWxkfWVsc2UgZC5wdXNoKHQuY3JlYXRlVGV4dE5vZGUobykpO3MmJmYucmVtb3ZlQ2hpbGQocyksYi5zdXBwb3J0LmFwcGVuZENoZWNrZWR8fGIuZ3JlcChPdChkLFwiaW5wdXRcIiksQnQpLGg9MDt3aGlsZShvPWRbaCsrXSlpZigoIXJ8fC0xPT09Yi5pbkFycmF5KG8scikpJiYoYT1iLmNvbnRhaW5zKG8ub3duZXJEb2N1bWVudCxvKSxzPU90KGYuYXBwZW5kQ2hpbGQobyksXCJzY3JpcHRcIiksYSYmTXQocyksbikpe2k9MDt3aGlsZShvPXNbaSsrXSlrdC50ZXN0KG8udHlwZXx8XCJcIikmJm4ucHVzaChvKX1yZXR1cm4gcz1udWxsLGZ9LGNsZWFuRGF0YTpmdW5jdGlvbihlLHQpe3ZhciBuLHIsbyxhLHM9MCx1PWIuZXhwYW5kbyxsPWIuY2FjaGUscD1iLnN1cHBvcnQuZGVsZXRlRXhwYW5kbyxmPWIuZXZlbnQuc3BlY2lhbDtmb3IoO251bGwhPShuPWVbc10pO3MrKylpZigodHx8Yi5hY2NlcHREYXRhKG4pKSYmKG89blt1XSxhPW8mJmxbb10pKXtpZihhLmV2ZW50cylmb3IociBpbiBhLmV2ZW50cylmW3JdP2IuZXZlbnQucmVtb3ZlKG4scik6Yi5yZW1vdmVFdmVudChuLHIsYS5oYW5kbGUpO2xbb10mJihkZWxldGUgbFtvXSxwP2RlbGV0ZSBuW3VdOnR5cGVvZiBuLnJlbW92ZUF0dHJpYnV0ZSE9PWk/bi5yZW1vdmVBdHRyaWJ1dGUodSk6blt1XT1udWxsLGMucHVzaChvKSl9fX0pO3ZhciBQdCxSdCxXdCwkdD0vYWxwaGFcXChbXildKlxcKS9pLEl0PS9vcGFjaXR5XFxzKj1cXHMqKFteKV0qKS8senQ9L14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvLFh0PS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxVdD0vXm1hcmdpbi8sVnQ9UmVnRXhwKFwiXihcIit4K1wiKSguKikkXCIsXCJpXCIpLFl0PVJlZ0V4cChcIl4oXCIreCtcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxKdD1SZWdFeHAoXCJeKFsrLV0pPShcIit4K1wiKVwiLFwiaVwiKSxHdD17Qk9EWTpcImJsb2NrXCJ9LFF0PXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxLdD17bGV0dGVyU3BhY2luZzowLGZvbnRXZWlnaHQ6NDAwfSxadD1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sZW49W1wiV2Via2l0XCIsXCJPXCIsXCJNb3pcIixcIm1zXCJdO2Z1bmN0aW9uIHRuKGUsdCl7aWYodCBpbiBlKXJldHVybiB0O3ZhciBuPXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKSxyPXQsaT1lbi5sZW5ndGg7d2hpbGUoaS0tKWlmKHQ9ZW5baV0rbix0IGluIGUpcmV0dXJuIHQ7cmV0dXJuIHJ9ZnVuY3Rpb24gbm4oZSx0KXtyZXR1cm4gZT10fHxlLFwibm9uZVwiPT09Yi5jc3MoZSxcImRpc3BsYXlcIil8fCFiLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKX1mdW5jdGlvbiBybihlLHQpe3ZhciBuLHIsaSxvPVtdLGE9MCxzPWUubGVuZ3RoO2Zvcig7cz5hO2ErKylyPWVbYV0sci5zdHlsZSYmKG9bYV09Yi5fZGF0YShyLFwib2xkZGlzcGxheVwiKSxuPXIuc3R5bGUuZGlzcGxheSx0PyhvW2FdfHxcIm5vbmVcIiE9PW58fChyLnN0eWxlLmRpc3BsYXk9XCJcIiksXCJcIj09PXIuc3R5bGUuZGlzcGxheSYmbm4ocikmJihvW2FdPWIuX2RhdGEocixcIm9sZGRpc3BsYXlcIix1bihyLm5vZGVOYW1lKSkpKTpvW2FdfHwoaT1ubihyKSwobiYmXCJub25lXCIhPT1ufHwhaSkmJmIuX2RhdGEocixcIm9sZGRpc3BsYXlcIixpP246Yi5jc3MocixcImRpc3BsYXlcIikpKSk7Zm9yKGE9MDtzPmE7YSsrKXI9ZVthXSxyLnN0eWxlJiYodCYmXCJub25lXCIhPT1yLnN0eWxlLmRpc3BsYXkmJlwiXCIhPT1yLnN0eWxlLmRpc3BsYXl8fChyLnN0eWxlLmRpc3BsYXk9dD9vW2FdfHxcIlwiOlwibm9uZVwiKSk7cmV0dXJuIGV9Yi5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihlLG4pe3JldHVybiBiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKGUsbixyKXt2YXIgaSxvLGE9e30scz0wO2lmKGIuaXNBcnJheShuKSl7Zm9yKG89UnQoZSksaT1uLmxlbmd0aDtpPnM7cysrKWFbbltzXV09Yi5jc3MoZSxuW3NdLCExLG8pO3JldHVybiBhfXJldHVybiByIT09dD9iLnN0eWxlKGUsbixyKTpiLmNzcyhlLG4pfSxlLG4sYXJndW1lbnRzLmxlbmd0aD4xKX0sc2hvdzpmdW5jdGlvbigpe3JldHVybiBybih0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBybih0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiYm9vbGVhblwiPT10eXBlb2YgZTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7KHQ/ZTpubih0aGlzKSk/Yih0aGlzKS5zaG93KCk6Yih0aGlzKS5oaWRlKCl9KX19KSxiLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihlLHQpe2lmKHQpe3ZhciBuPVd0KGUsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1uP1wiMVwiOm59fX19LGNzc051bWJlcjp7Y29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOntcImZsb2F0XCI6Yi5zdXBwb3J0LmNzc0Zsb2F0P1wiY3NzRmxvYXRcIjpcInN0eWxlRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oZSxuLHIsaSl7aWYoZSYmMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiZlLnN0eWxlKXt2YXIgbyxhLHMsdT1iLmNhbWVsQ2FzZShuKSxsPWUuc3R5bGU7aWYobj1iLmNzc1Byb3BzW3VdfHwoYi5jc3NQcm9wc1t1XT10bihsLHUpKSxzPWIuY3NzSG9va3Nbbl18fGIuY3NzSG9va3NbdV0scj09PXQpcmV0dXJuIHMmJlwiZ2V0XCJpbiBzJiYobz1zLmdldChlLCExLGkpKSE9PXQ/bzpsW25dO2lmKGE9dHlwZW9mIHIsXCJzdHJpbmdcIj09PWEmJihvPUp0LmV4ZWMocikpJiYocj0ob1sxXSsxKSpvWzJdK3BhcnNlRmxvYXQoYi5jc3MoZSxuKSksYT1cIm51bWJlclwiKSwhKG51bGw9PXJ8fFwibnVtYmVyXCI9PT1hJiZpc05hTihyKXx8KFwibnVtYmVyXCIhPT1hfHxiLmNzc051bWJlclt1XXx8KHIrPVwicHhcIiksYi5zdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PXJ8fDAhPT1uLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwobFtuXT1cImluaGVyaXRcIikscyYmXCJzZXRcImluIHMmJihyPXMuc2V0KGUscixpKSk9PT10KSkpdHJ5e2xbbl09cn1jYXRjaChjKXt9fX0sY3NzOmZ1bmN0aW9uKGUsbixyLGkpe3ZhciBvLGEscyx1PWIuY2FtZWxDYXNlKG4pO3JldHVybiBuPWIuY3NzUHJvcHNbdV18fChiLmNzc1Byb3BzW3VdPXRuKGUuc3R5bGUsdSkpLHM9Yi5jc3NIb29rc1tuXXx8Yi5jc3NIb29rc1t1XSxzJiZcImdldFwiaW4gcyYmKGE9cy5nZXQoZSwhMCxyKSksYT09PXQmJihhPVd0KGUsbixpKSksXCJub3JtYWxcIj09PWEmJm4gaW4gS3QmJihhPUt0W25dKSxcIlwiPT09cnx8cj8obz1wYXJzZUZsb2F0KGEpLHI9PT0hMHx8Yi5pc051bWVyaWMobyk/b3x8MDphKTphfSxzd2FwOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYT17fTtmb3IobyBpbiB0KWFbb109ZS5zdHlsZVtvXSxlLnN0eWxlW29dPXRbb107aT1uLmFwcGx5KGUscnx8W10pO2ZvcihvIGluIHQpZS5zdHlsZVtvXT1hW29dO3JldHVybiBpfX0pLGUuZ2V0Q29tcHV0ZWRTdHlsZT8oUnQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUuZ2V0Q29tcHV0ZWRTdHlsZSh0LG51bGwpfSxXdD1mdW5jdGlvbihlLG4scil7dmFyIGksbyxhLHM9cnx8UnQoZSksdT1zP3MuZ2V0UHJvcGVydHlWYWx1ZShuKXx8c1tuXTp0LGw9ZS5zdHlsZTtyZXR1cm4gcyYmKFwiXCIhPT11fHxiLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKXx8KHU9Yi5zdHlsZShlLG4pKSxZdC50ZXN0KHUpJiZVdC50ZXN0KG4pJiYoaT1sLndpZHRoLG89bC5taW5XaWR0aCxhPWwubWF4V2lkdGgsbC5taW5XaWR0aD1sLm1heFdpZHRoPWwud2lkdGg9dSx1PXMud2lkdGgsbC53aWR0aD1pLGwubWluV2lkdGg9byxsLm1heFdpZHRoPWEpKSx1fSk6by5kb2N1bWVudEVsZW1lbnQuY3VycmVudFN0eWxlJiYoUnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUuY3VycmVudFN0eWxlfSxXdD1mdW5jdGlvbihlLG4scil7dmFyIGksbyxhLHM9cnx8UnQoZSksdT1zP3Nbbl06dCxsPWUuc3R5bGU7cmV0dXJuIG51bGw9PXUmJmwmJmxbbl0mJih1PWxbbl0pLFl0LnRlc3QodSkmJiF6dC50ZXN0KG4pJiYoaT1sLmxlZnQsbz1lLnJ1bnRpbWVTdHlsZSxhPW8mJm8ubGVmdCxhJiYoby5sZWZ0PWUuY3VycmVudFN0eWxlLmxlZnQpLGwubGVmdD1cImZvbnRTaXplXCI9PT1uP1wiMWVtXCI6dSx1PWwucGl4ZWxMZWZ0K1wicHhcIixsLmxlZnQ9aSxhJiYoby5sZWZ0PWEpKSxcIlwiPT09dT9cImF1dG9cIjp1fSk7ZnVuY3Rpb24gb24oZSx0LG4pe3ZhciByPVZ0LmV4ZWModCk7cmV0dXJuIHI/TWF0aC5tYXgoMCxyWzFdLShufHwwKSkrKHJbMl18fFwicHhcIik6dH1mdW5jdGlvbiBhbihlLHQsbixyLGkpe3ZhciBvPW49PT0ocj9cImJvcmRlclwiOlwiY29udGVudFwiKT80Olwid2lkdGhcIj09PXQ/MTowLGE9MDtmb3IoOzQ+bztvKz0yKVwibWFyZ2luXCI9PT1uJiYoYSs9Yi5jc3MoZSxuK1p0W29dLCEwLGkpKSxyPyhcImNvbnRlbnRcIj09PW4mJihhLT1iLmNzcyhlLFwicGFkZGluZ1wiK1p0W29dLCEwLGkpKSxcIm1hcmdpblwiIT09biYmKGEtPWIuY3NzKGUsXCJib3JkZXJcIitadFtvXStcIldpZHRoXCIsITAsaSkpKTooYSs9Yi5jc3MoZSxcInBhZGRpbmdcIitadFtvXSwhMCxpKSxcInBhZGRpbmdcIiE9PW4mJihhKz1iLmNzcyhlLFwiYm9yZGVyXCIrWnRbb10rXCJXaWR0aFwiLCEwLGkpKSk7cmV0dXJuIGF9ZnVuY3Rpb24gc24oZSx0LG4pe3ZhciByPSEwLGk9XCJ3aWR0aFwiPT09dD9lLm9mZnNldFdpZHRoOmUub2Zmc2V0SGVpZ2h0LG89UnQoZSksYT1iLnN1cHBvcnQuYm94U2l6aW5nJiZcImJvcmRlci1ib3hcIj09PWIuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxvKTtpZigwPj1pfHxudWxsPT1pKXtpZihpPVd0KGUsdCxvKSwoMD5pfHxudWxsPT1pKSYmKGk9ZS5zdHlsZVt0XSksWXQudGVzdChpKSlyZXR1cm4gaTtyPWEmJihiLnN1cHBvcnQuYm94U2l6aW5nUmVsaWFibGV8fGk9PT1lLnN0eWxlW3RdKSxpPXBhcnNlRmxvYXQoaSl8fDB9cmV0dXJuIGkrYW4oZSx0LG58fChhP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLHIsbykrXCJweFwifWZ1bmN0aW9uIHVuKGUpe3ZhciB0PW8sbj1HdFtlXTtyZXR1cm4gbnx8KG49bG4oZSx0KSxcIm5vbmVcIiE9PW4mJm58fChQdD0oUHR8fGIoXCI8aWZyYW1lIGZyYW1lYm9yZGVyPScwJyB3aWR0aD0nMCcgaGVpZ2h0PScwJy8+XCIpLmNzcyhcImNzc1RleHRcIixcImRpc3BsYXk6YmxvY2sgIWltcG9ydGFudFwiKSkuYXBwZW5kVG8odC5kb2N1bWVudEVsZW1lbnQpLHQ9KFB0WzBdLmNvbnRlbnRXaW5kb3d8fFB0WzBdLmNvbnRlbnREb2N1bWVudCkuZG9jdW1lbnQsdC53cml0ZShcIjwhZG9jdHlwZSBodG1sPjxodG1sPjxib2R5PlwiKSx0LmNsb3NlKCksbj1sbihlLHQpLFB0LmRldGFjaCgpKSxHdFtlXT1uKSxufWZ1bmN0aW9uIGxuKGUsdCl7dmFyIG49Yih0LmNyZWF0ZUVsZW1lbnQoZSkpLmFwcGVuZFRvKHQuYm9keSkscj1iLmNzcyhuWzBdLFwiZGlzcGxheVwiKTtyZXR1cm4gbi5yZW1vdmUoKSxyfWIuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGUsbil7Yi5jc3NIb29rc1tuXT17Z2V0OmZ1bmN0aW9uKGUscixpKXtyZXR1cm4gcj8wPT09ZS5vZmZzZXRXaWR0aCYmWHQudGVzdChiLmNzcyhlLFwiZGlzcGxheVwiKSk/Yi5zd2FwKGUsUXQsZnVuY3Rpb24oKXtyZXR1cm4gc24oZSxuLGkpfSk6c24oZSxuLGkpOnR9LHNldDpmdW5jdGlvbihlLHQscil7dmFyIGk9ciYmUnQoZSk7cmV0dXJuIG9uKGUsdCxyP2FuKGUsbixyLGIuc3VwcG9ydC5ib3hTaXppbmcmJlwiYm9yZGVyLWJveFwiPT09Yi5jc3MoZSxcImJveFNpemluZ1wiLCExLGkpLGkpOjApfX19KSxiLnN1cHBvcnQub3BhY2l0eXx8KGIuY3NzSG9va3Mub3BhY2l0eT17Z2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIEl0LnRlc3QoKHQmJmUuY3VycmVudFN0eWxlP2UuY3VycmVudFN0eWxlLmZpbHRlcjplLnN0eWxlLmZpbHRlcil8fFwiXCIpPy4wMSpwYXJzZUZsb2F0KFJlZ0V4cC4kMSkrXCJcIjp0P1wiMVwiOlwiXCJ9LHNldDpmdW5jdGlvbihlLHQpe3ZhciBuPWUuc3R5bGUscj1lLmN1cnJlbnRTdHlsZSxpPWIuaXNOdW1lcmljKHQpP1wiYWxwaGEob3BhY2l0eT1cIisxMDAqdCtcIilcIjpcIlwiLG89ciYmci5maWx0ZXJ8fG4uZmlsdGVyfHxcIlwiO24uem9vbT0xLCh0Pj0xfHxcIlwiPT09dCkmJlwiXCI9PT1iLnRyaW0oby5yZXBsYWNlKCR0LFwiXCIpKSYmbi5yZW1vdmVBdHRyaWJ1dGUmJihuLnJlbW92ZUF0dHJpYnV0ZShcImZpbHRlclwiKSxcIlwiPT09dHx8ciYmIXIuZmlsdGVyKXx8KG4uZmlsdGVyPSR0LnRlc3Qobyk/by5yZXBsYWNlKCR0LGkpOm8rXCIgXCIraSl9fSksYihmdW5jdGlvbigpe2Iuc3VwcG9ydC5yZWxpYWJsZU1hcmdpblJpZ2h0fHwoYi5jc3NIb29rcy5tYXJnaW5SaWdodD17Z2V0OmZ1bmN0aW9uKGUsbil7cmV0dXJuIG4/Yi5zd2FwKGUse2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn0sV3QsW2UsXCJtYXJnaW5SaWdodFwiXSk6dH19KSwhYi5zdXBwb3J0LnBpeGVsUG9zaXRpb24mJmIuZm4ucG9zaXRpb24mJmIuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oZSxuKXtiLmNzc0hvb2tzW25dPXtnZXQ6ZnVuY3Rpb24oZSxyKXtyZXR1cm4gcj8ocj1XdChlLG4pLFl0LnRlc3Qocik/YihlKS5wb3NpdGlvbigpW25dK1wicHhcIjpyKTp0fX19KX0pLGIuZXhwciYmYi5leHByLmZpbHRlcnMmJihiLmV4cHIuZmlsdGVycy5oaWRkZW49ZnVuY3Rpb24oZSl7cmV0dXJuIDA+PWUub2Zmc2V0V2lkdGgmJjA+PWUub2Zmc2V0SGVpZ2h0fHwhYi5zdXBwb3J0LnJlbGlhYmxlSGlkZGVuT2Zmc2V0cyYmXCJub25lXCI9PT0oZS5zdHlsZSYmZS5zdHlsZS5kaXNwbGF5fHxiLmNzcyhlLFwiZGlzcGxheVwiKSl9LGIuZXhwci5maWx0ZXJzLnZpc2libGU9ZnVuY3Rpb24oZSl7cmV0dXJuIWIuZXhwci5maWx0ZXJzLmhpZGRlbihlKX0pLGIuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGUsdCl7Yi5jc3NIb29rc1tlK3RdPXtleHBhbmQ6ZnVuY3Rpb24obil7dmFyIHI9MCxpPXt9LG89XCJzdHJpbmdcIj09dHlwZW9mIG4/bi5zcGxpdChcIiBcIik6W25dO2Zvcig7ND5yO3IrKylpW2UrWnRbcl0rdF09b1tyXXx8b1tyLTJdfHxvWzBdO3JldHVybiBpfX0sVXQudGVzdChlKXx8KGIuY3NzSG9va3NbZSt0XS5zZXQ9b24pfSk7dmFyIGNuPS8lMjAvZyxwbj0vXFxbXFxdJC8sZm49L1xccj9cXG4vZyxkbj0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksaG49L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2IuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gYi5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPWIucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGU/Yi5tYWtlQXJyYXkoZSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBlPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhYih0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmaG4udGVzdCh0aGlzLm5vZGVOYW1lKSYmIWRuLnRlc3QoZSkmJih0aGlzLmNoZWNrZWR8fCFOdC50ZXN0KGUpKX0pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBuPWIodGhpcykudmFsKCk7cmV0dXJuIG51bGw9PW4/bnVsbDpiLmlzQXJyYXkobik/Yi5tYXAobixmdW5jdGlvbihlKXtyZXR1cm57bmFtZTp0Lm5hbWUsdmFsdWU6ZS5yZXBsYWNlKGZuLFwiXFxyXFxuXCIpfX0pOntuYW1lOnQubmFtZSx2YWx1ZTpuLnJlcGxhY2UoZm4sXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSksYi5wYXJhbT1mdW5jdGlvbihlLG4pe3ZhciByLGk9W10sbz1mdW5jdGlvbihlLHQpe3Q9Yi5pc0Z1bmN0aW9uKHQpP3QoKTpudWxsPT10P1wiXCI6dCxpW2kubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHQpfTtpZihuPT09dCYmKG49Yi5hamF4U2V0dGluZ3MmJmIuYWpheFNldHRpbmdzLnRyYWRpdGlvbmFsKSxiLmlzQXJyYXkoZSl8fGUuanF1ZXJ5JiYhYi5pc1BsYWluT2JqZWN0KGUpKWIuZWFjaChlLGZ1bmN0aW9uKCl7byh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihyIGluIGUpZ24ocixlW3JdLG4sbyk7cmV0dXJuIGkuam9pbihcIiZcIikucmVwbGFjZShjbixcIitcIil9O2Z1bmN0aW9uIGduKGUsdCxuLHIpe3ZhciBpO2lmKGIuaXNBcnJheSh0KSliLmVhY2godCxmdW5jdGlvbih0LGkpe258fHBuLnRlc3QoZSk/cihlLGkpOmduKGUrXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBpP3Q6XCJcIikrXCJdXCIsaSxuLHIpfSk7ZWxzZSBpZihufHxcIm9iamVjdFwiIT09Yi50eXBlKHQpKXIoZSx0KTtlbHNlIGZvcihpIGluIHQpZ24oZStcIltcIitpK1wiXVwiLHRbaV0sbixyKX1iLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7Yi5mblt0XT1mdW5jdGlvbihlLG4pe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbih0LG51bGwsZSxuKTp0aGlzLnRyaWdnZXIodCl9fSksYi5mbi5ob3Zlcj1mdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoZSkubW91c2VsZWF2ZSh0fHxlKX07dmFyIG1uLHluLHZuPWIubm93KCksYm49L1xcPy8seG49LyMuKiQvLHduPS8oWz8mXSlfPVteJl0qLyxUbj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKilcXHI/JC9nbSxObj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxDbj0vXig/OkdFVHxIRUFEKSQvLGtuPS9eXFwvXFwvLyxFbj0vXihbXFx3ListXSs6KSg/OlxcL1xcLyhbXlxcLz8jOl0qKSg/OjooXFxkKyl8KXwpLyxTbj1iLmZuLmxvYWQsQW49e30sam49e30sRG49XCIqL1wiLmNvbmNhdChcIipcIik7dHJ5e3luPWEuaHJlZn1jYXRjaChMbil7eW49by5jcmVhdGVFbGVtZW50KFwiYVwiKSx5bi5ocmVmPVwiXCIseW49eW4uaHJlZn1tbj1Fbi5leGVjKHluLnRvTG93ZXJDYXNlKCkpfHxbXTtmdW5jdGlvbiBIbihlKXtyZXR1cm4gZnVuY3Rpb24odCxuKXtcInN0cmluZ1wiIT10eXBlb2YgdCYmKG49dCx0PVwiKlwiKTt2YXIgcixpPTAsbz10LnRvTG93ZXJDYXNlKCkubWF0Y2godyl8fFtdO2lmKGIuaXNGdW5jdGlvbihuKSl3aGlsZShyPW9baSsrXSlcIitcIj09PXJbMF0/KHI9ci5zbGljZSgxKXx8XCIqXCIsKGVbcl09ZVtyXXx8W10pLnVuc2hpZnQobikpOihlW3JdPWVbcl18fFtdKS5wdXNoKG4pfX1mdW5jdGlvbiBxbihlLG4scixpKXt2YXIgbz17fSxhPWU9PT1qbjtmdW5jdGlvbiBzKHUpe3ZhciBsO3JldHVybiBvW3VdPSEwLGIuZWFjaChlW3VdfHxbXSxmdW5jdGlvbihlLHUpe3ZhciBjPXUobixyLGkpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBjfHxhfHxvW2NdP2E/IShsPWMpOnQ6KG4uZGF0YVR5cGVzLnVuc2hpZnQoYykscyhjKSwhMSl9KSxsfXJldHVybiBzKG4uZGF0YVR5cGVzWzBdKXx8IW9bXCIqXCJdJiZzKFwiKlwiKX1mdW5jdGlvbiBNbihlLG4pe3ZhciByLGksbz1iLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGkgaW4gbiluW2ldIT09dCYmKChvW2ldP2U6cnx8KHI9e30pKVtpXT1uW2ldKTtyZXR1cm4gciYmYi5leHRlbmQoITAsZSxyKSxlfWIuZm4ubG9hZD1mdW5jdGlvbihlLG4scil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUmJlNuKXJldHVybiBTbi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGksbyxhLHM9dGhpcyx1PWUuaW5kZXhPZihcIiBcIik7cmV0dXJuIHU+PTAmJihpPWUuc2xpY2UodSxlLmxlbmd0aCksZT1lLnNsaWNlKDAsdSkpLGIuaXNGdW5jdGlvbihuKT8ocj1uLG49dCk6biYmXCJvYmplY3RcIj09dHlwZW9mIG4mJihhPVwiUE9TVFwiKSxzLmxlbmd0aD4wJiZiLmFqYXgoe3VybDplLHR5cGU6YSxkYXRhVHlwZTpcImh0bWxcIixkYXRhOm59KS5kb25lKGZ1bmN0aW9uKGUpe289YXJndW1lbnRzLHMuaHRtbChpP2IoXCI8ZGl2PlwiKS5hcHBlbmQoYi5wYXJzZUhUTUwoZSkpLmZpbmQoaSk6ZSl9KS5jb21wbGV0ZShyJiZmdW5jdGlvbihlLHQpe3MuZWFjaChyLG98fFtlLnJlc3BvbnNlVGV4dCx0LGVdKX0pLHRoaXN9LGIuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGUsdCl7Yi5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vbih0LGUpfX0pLGIuZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oZSxuKXtiW25dPWZ1bmN0aW9uKGUscixpLG8pe3JldHVybiBiLmlzRnVuY3Rpb24ocikmJihvPW98fGksaT1yLHI9dCksYi5hamF4KHt1cmw6ZSx0eXBlOm4sZGF0YVR5cGU6byxkYXRhOnIsc3VjY2VzczppfSl9fSksYi5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOnluLHR5cGU6XCJHRVRcIixpc0xvY2FsOk5uLnRlc3QobW5bMV0pLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOkRuLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L3htbC8saHRtbDovaHRtbC8sanNvbjovanNvbi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIn0sY29udmVydGVyczp7XCIqIHRleHRcIjplLlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6Yi5wYXJzZUpTT04sXCJ0ZXh0IHhtbFwiOmIucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihlLHQpe3JldHVybiB0P01uKE1uKGUsYi5hamF4U2V0dGluZ3MpLHQpOk1uKGIuYWpheFNldHRpbmdzLGUpfSxhamF4UHJlZmlsdGVyOkhuKEFuKSxhamF4VHJhbnNwb3J0OkhuKGpuKSxhamF4OmZ1bmN0aW9uKGUsbil7XCJvYmplY3RcIj09dHlwZW9mIGUmJihuPWUsZT10KSxuPW58fHt9O3ZhciByLGksbyxhLHMsdSxsLGMscD1iLmFqYXhTZXR1cCh7fSxuKSxmPXAuY29udGV4dHx8cCxkPXAuY29udGV4dCYmKGYubm9kZVR5cGV8fGYuanF1ZXJ5KT9iKGYpOmIuZXZlbnQsaD1iLkRlZmVycmVkKCksZz1iLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLG09cC5zdGF0dXNDb2RlfHx7fSx5PXt9LHY9e30seD0wLFQ9XCJjYW5jZWxlZFwiLE49e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihlKXt2YXIgdDtpZigyPT09eCl7aWYoIWMpe2M9e307d2hpbGUodD1Ubi5leGVjKGEpKWNbdFsxXS50b0xvd2VyQ2FzZSgpXT10WzJdfXQ9Y1tlLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT10P251bGw6dH0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDI9PT14P2E6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihlLHQpe3ZhciBuPWUudG9Mb3dlckNhc2UoKTtyZXR1cm4geHx8KGU9dltuXT12W25dfHxlLHlbZV09dCksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihlKXtyZXR1cm4geHx8KHAubWltZVR5cGU9ZSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihlKXt2YXIgdDtpZihlKWlmKDI+eClmb3IodCBpbiBlKW1bdF09W21bdF0sZVt0XV07ZWxzZSBOLmFsd2F5cyhlW04uc3RhdHVzXSk7cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGUpe3ZhciB0PWV8fFQ7cmV0dXJuIGwmJmwuYWJvcnQodCksaygwLHQpLHRoaXN9fTtpZihoLnByb21pc2UoTikuY29tcGxldGU9Zy5hZGQsTi5zdWNjZXNzPU4uZG9uZSxOLmVycm9yPU4uZmFpbCxwLnVybD0oKGV8fHAudXJsfHx5bikrXCJcIikucmVwbGFjZSh4bixcIlwiKS5yZXBsYWNlKGtuLG1uWzFdK1wiLy9cIikscC50eXBlPW4ubWV0aG9kfHxuLnR5cGV8fHAubWV0aG9kfHxwLnR5cGUscC5kYXRhVHlwZXM9Yi50cmltKHAuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKHcpfHxbXCJcIl0sbnVsbD09cC5jcm9zc0RvbWFpbiYmKHI9RW4uZXhlYyhwLnVybC50b0xvd2VyQ2FzZSgpKSxwLmNyb3NzRG9tYWluPSEoIXJ8fHJbMV09PT1tblsxXSYmclsyXT09PW1uWzJdJiYoclszXXx8KFwiaHR0cDpcIj09PXJbMV0/ODA6NDQzKSk9PShtblszXXx8KFwiaHR0cDpcIj09PW1uWzFdPzgwOjQ0MykpKSkscC5kYXRhJiZwLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2YgcC5kYXRhJiYocC5kYXRhPWIucGFyYW0ocC5kYXRhLHAudHJhZGl0aW9uYWwpKSxxbihBbixwLG4sTiksMj09PXgpcmV0dXJuIE47dT1wLmdsb2JhbCx1JiYwPT09Yi5hY3RpdmUrKyYmYi5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLHAudHlwZT1wLnR5cGUudG9VcHBlckNhc2UoKSxwLmhhc0NvbnRlbnQ9IUNuLnRlc3QocC50eXBlKSxvPXAudXJsLHAuaGFzQ29udGVudHx8KHAuZGF0YSYmKG89cC51cmwrPShibi50ZXN0KG8pP1wiJlwiOlwiP1wiKStwLmRhdGEsZGVsZXRlIHAuZGF0YSkscC5jYWNoZT09PSExJiYocC51cmw9d24udGVzdChvKT9vLnJlcGxhY2Uod24sXCIkMV89XCIrdm4rKyk6bysoYm4udGVzdChvKT9cIiZcIjpcIj9cIikrXCJfPVwiK3ZuKyspKSxwLmlmTW9kaWZpZWQmJihiLmxhc3RNb2RpZmllZFtvXSYmTi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixiLmxhc3RNb2RpZmllZFtvXSksYi5ldGFnW29dJiZOLnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsYi5ldGFnW29dKSksKHAuZGF0YSYmcC5oYXNDb250ZW50JiZwLmNvbnRlbnRUeXBlIT09ITF8fG4uY29udGVudFR5cGUpJiZOLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixwLmNvbnRlbnRUeXBlKSxOLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixwLmRhdGFUeXBlc1swXSYmcC5hY2NlcHRzW3AuZGF0YVR5cGVzWzBdXT9wLmFjY2VwdHNbcC5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PXAuZGF0YVR5cGVzWzBdP1wiLCBcIitEbitcIjsgcT0wLjAxXCI6XCJcIik6cC5hY2NlcHRzW1wiKlwiXSk7Zm9yKGkgaW4gcC5oZWFkZXJzKU4uc2V0UmVxdWVzdEhlYWRlcihpLHAuaGVhZGVyc1tpXSk7aWYocC5iZWZvcmVTZW5kJiYocC5iZWZvcmVTZW5kLmNhbGwoZixOLHApPT09ITF8fDI9PT14KSlyZXR1cm4gTi5hYm9ydCgpO1Q9XCJhYm9ydFwiO2ZvcihpIGlue3N1Y2Nlc3M6MSxlcnJvcjoxLGNvbXBsZXRlOjF9KU5baV0ocFtpXSk7aWYobD1xbihqbixwLG4sTikpe04ucmVhZHlTdGF0ZT0xLHUmJmQudHJpZ2dlcihcImFqYXhTZW5kXCIsW04scF0pLHAuYXN5bmMmJnAudGltZW91dD4wJiYocz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Ti5hYm9ydChcInRpbWVvdXRcIil9LHAudGltZW91dCkpO3RyeXt4PTEsbC5zZW5kKHksayl9Y2F0Y2goQyl7aWYoISgyPngpKXRocm93IEM7aygtMSxDKX19ZWxzZSBrKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIGsoZSxuLHIsaSl7dmFyIGMseSx2LHcsVCxDPW47MiE9PXgmJih4PTIscyYmY2xlYXJUaW1lb3V0KHMpLGw9dCxhPWl8fFwiXCIsTi5yZWFkeVN0YXRlPWU+MD80OjAsciYmKHc9X24ocCxOLHIpKSxlPj0yMDAmJjMwMD5lfHwzMDQ9PT1lPyhwLmlmTW9kaWZpZWQmJihUPU4uZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLFQmJihiLmxhc3RNb2RpZmllZFtvXT1UKSxUPU4uZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLFQmJihiLmV0YWdbb109VCkpLDIwND09PWU/KGM9ITAsQz1cIm5vY29udGVudFwiKTozMDQ9PT1lPyhjPSEwLEM9XCJub3Rtb2RpZmllZFwiKTooYz1GbihwLHcpLEM9Yy5zdGF0ZSx5PWMuZGF0YSx2PWMuZXJyb3IsYz0hdikpOih2PUMsKGV8fCFDKSYmKEM9XCJlcnJvclwiLDA+ZSYmKGU9MCkpKSxOLnN0YXR1cz1lLE4uc3RhdHVzVGV4dD0obnx8QykrXCJcIixjP2gucmVzb2x2ZVdpdGgoZixbeSxDLE5dKTpoLnJlamVjdFdpdGgoZixbTixDLHZdKSxOLnN0YXR1c0NvZGUobSksbT10LHUmJmQudHJpZ2dlcihjP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFtOLHAsYz95OnZdKSxnLmZpcmVXaXRoKGYsW04sQ10pLHUmJihkLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbTixwXSksLS1iLmFjdGl2ZXx8Yi5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gTn0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGUsbil7cmV0dXJuIGIuZ2V0KGUsdCxuLFwic2NyaXB0XCIpfSxnZXRKU09OOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gYi5nZXQoZSx0LG4sXCJqc29uXCIpfX0pO2Z1bmN0aW9uIF9uKGUsbixyKXt2YXIgaSxvLGEscyx1PWUuY29udGVudHMsbD1lLmRhdGFUeXBlcyxjPWUucmVzcG9uc2VGaWVsZHM7Zm9yKHMgaW4gYylzIGluIHImJihuW2Nbc11dPXJbc10pO3doaWxlKFwiKlwiPT09bFswXSlsLnNoaWZ0KCksbz09PXQmJihvPWUubWltZVR5cGV8fG4uZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKG8pZm9yKHMgaW4gdSlpZih1W3NdJiZ1W3NdLnRlc3Qobykpe2wudW5zaGlmdChzKTticmVha31pZihsWzBdaW4gcilhPWxbMF07ZWxzZXtmb3IocyBpbiByKXtpZighbFswXXx8ZS5jb252ZXJ0ZXJzW3MrXCIgXCIrbFswXV0pe2E9czticmVha31pfHwoaT1zKX1hPWF8fGl9cmV0dXJuIGE/KGEhPT1sWzBdJiZsLnVuc2hpZnQoYSksclthXSk6dH1mdW5jdGlvbiBGbihlLHQpe3ZhciBuLHIsaSxvLGE9e30scz0wLHU9ZS5kYXRhVHlwZXMuc2xpY2UoKSxsPXVbMF07aWYoZS5kYXRhRmlsdGVyJiYodD1lLmRhdGFGaWx0ZXIodCxlLmRhdGFUeXBlKSksdVsxXSlmb3IoaSBpbiBlLmNvbnZlcnRlcnMpYVtpLnRvTG93ZXJDYXNlKCldPWUuY29udmVydGVyc1tpXTtmb3IoO3I9dVsrK3NdOylpZihcIipcIiE9PXIpe2lmKFwiKlwiIT09bCYmbCE9PXIpe2lmKGk9YVtsK1wiIFwiK3JdfHxhW1wiKiBcIityXSwhaSlmb3IobiBpbiBhKWlmKG89bi5zcGxpdChcIiBcIiksb1sxXT09PXImJihpPWFbbCtcIiBcIitvWzBdXXx8YVtcIiogXCIrb1swXV0pKXtpPT09ITA/aT1hW25dOmFbbl0hPT0hMCYmKHI9b1swXSx1LnNwbGljZShzLS0sMCxyKSk7YnJlYWt9aWYoaSE9PSEwKWlmKGkmJmVbXCJ0aHJvd3NcIl0pdD1pKHQpO2Vsc2UgdHJ5e3Q9aSh0KX1jYXRjaChjKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmk/YzpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitsK1wiIHRvIFwiK3J9fX1sPXJ9cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6dH19Yi5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6Lyg/OmphdmF8ZWNtYSlzY3JpcHQvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oZSl7cmV0dXJuIGIuZ2xvYmFsRXZhbChlKSxlfX19KSxiLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihlKXtlLmNhY2hlPT09dCYmKGUuY2FjaGU9ITEpLGUuY3Jvc3NEb21haW4mJihlLnR5cGU9XCJHRVRcIixlLmdsb2JhbD0hMSl9KSxiLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihlKXtpZihlLmNyb3NzRG9tYWluKXt2YXIgbixyPW8uaGVhZHx8YihcImhlYWRcIilbMF18fG8uZG9jdW1lbnRFbGVtZW50O3JldHVybntzZW5kOmZ1bmN0aW9uKHQsaSl7bj1vLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksbi5hc3luYz0hMCxlLnNjcmlwdENoYXJzZXQmJihuLmNoYXJzZXQ9ZS5zY3JpcHRDaGFyc2V0KSxuLnNyYz1lLnVybCxuLm9ubG9hZD1uLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbihlLHQpeyh0fHwhbi5yZWFkeVN0YXRlfHwvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KG4ucmVhZHlTdGF0ZSkpJiYobi5vbmxvYWQ9bi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxuLnBhcmVudE5vZGUmJm4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKSxuPW51bGwsdHx8aSgyMDAsXCJzdWNjZXNzXCIpKX0sci5pbnNlcnRCZWZvcmUobixyLmZpcnN0Q2hpbGQpfSxhYm9ydDpmdW5jdGlvbigpe24mJm4ub25sb2FkKHQsITApfX19fSk7dmFyIE9uPVtdLEJuPS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87Yi5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGU9T24ucG9wKCl8fGIuZXhwYW5kbytcIl9cIit2bisrO3JldHVybiB0aGlzW2VdPSEwLGV9fSksYi5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKG4scixpKXt2YXIgbyxhLHMsdT1uLmpzb25wIT09ITEmJihCbi50ZXN0KG4udXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBuLmRhdGEmJiEobi5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmQm4udGVzdChuLmRhdGEpJiZcImRhdGFcIik7cmV0dXJuIHV8fFwianNvbnBcIj09PW4uZGF0YVR5cGVzWzBdPyhvPW4uanNvbnBDYWxsYmFjaz1iLmlzRnVuY3Rpb24obi5qc29ucENhbGxiYWNrKT9uLmpzb25wQ2FsbGJhY2soKTpuLmpzb25wQ2FsbGJhY2ssdT9uW3VdPW5bdV0ucmVwbGFjZShCbixcIiQxXCIrbyk6bi5qc29ucCE9PSExJiYobi51cmwrPShibi50ZXN0KG4udXJsKT9cIiZcIjpcIj9cIikrbi5qc29ucCtcIj1cIitvKSxuLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBzfHxiLmVycm9yKG8rXCIgd2FzIG5vdCBjYWxsZWRcIiksc1swXX0sbi5kYXRhVHlwZXNbMF09XCJqc29uXCIsYT1lW29dLGVbb109ZnVuY3Rpb24oKXtzPWFyZ3VtZW50c30saS5hbHdheXMoZnVuY3Rpb24oKXtlW29dPWEsbltvXSYmKG4uanNvbnBDYWxsYmFjaz1yLmpzb25wQ2FsbGJhY2ssT24ucHVzaChvKSkscyYmYi5pc0Z1bmN0aW9uKGEpJiZhKHNbMF0pLHM9YT10fSksXCJzY3JpcHRcIik6dH0pO3ZhciBQbixSbixXbj0wLCRuPWUuQWN0aXZlWE9iamVjdCYmZnVuY3Rpb24oKXt2YXIgZTtmb3IoZSBpbiBQbilQbltlXSh0LCEwKX07ZnVuY3Rpb24gSW4oKXt0cnl7cmV0dXJuIG5ldyBlLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKHQpe319ZnVuY3Rpb24gem4oKXt0cnl7cmV0dXJuIG5ldyBlLkFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKX1jYXRjaCh0KXt9fWIuYWpheFNldHRpbmdzLnhocj1lLkFjdGl2ZVhPYmplY3Q/ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5pc0xvY2FsJiZJbigpfHx6bigpfTpJbixSbj1iLmFqYXhTZXR0aW5ncy54aHIoKSxiLnN1cHBvcnQuY29ycz0hIVJuJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gUm4sUm49Yi5zdXBwb3J0LmFqYXg9ISFSbixSbiYmYi5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKG4pe2lmKCFuLmNyb3NzRG9tYWlufHxiLnN1cHBvcnQuY29ycyl7dmFyIHI7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oaSxvKXt2YXIgYSxzLHU9bi54aHIoKTtpZihuLnVzZXJuYW1lP3Uub3BlbihuLnR5cGUsbi51cmwsbi5hc3luYyxuLnVzZXJuYW1lLG4ucGFzc3dvcmQpOnUub3BlbihuLnR5cGUsbi51cmwsbi5hc3luYyksbi54aHJGaWVsZHMpZm9yKHMgaW4gbi54aHJGaWVsZHMpdVtzXT1uLnhockZpZWxkc1tzXTtuLm1pbWVUeXBlJiZ1Lm92ZXJyaWRlTWltZVR5cGUmJnUub3ZlcnJpZGVNaW1lVHlwZShuLm1pbWVUeXBlKSxuLmNyb3NzRG9tYWlufHxpW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGlbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7dHJ5e2ZvcihzIGluIGkpdS5zZXRSZXF1ZXN0SGVhZGVyKHMsaVtzXSl9Y2F0Y2gobCl7fXUuc2VuZChuLmhhc0NvbnRlbnQmJm4uZGF0YXx8bnVsbCkscj1mdW5jdGlvbihlLGkpe3ZhciBzLGwsYyxwO3RyeXtpZihyJiYoaXx8ND09PXUucmVhZHlTdGF0ZSkpaWYocj10LGEmJih1Lm9ucmVhZHlzdGF0ZWNoYW5nZT1iLm5vb3AsJG4mJmRlbGV0ZSBQblthXSksaSk0IT09dS5yZWFkeVN0YXRlJiZ1LmFib3J0KCk7ZWxzZXtwPXt9LHM9dS5zdGF0dXMsbD11LmdldEFsbFJlc3BvbnNlSGVhZGVycygpLFwic3RyaW5nXCI9PXR5cGVvZiB1LnJlc3BvbnNlVGV4dCYmKHAudGV4dD11LnJlc3BvbnNlVGV4dCk7dHJ5e2M9dS5zdGF0dXNUZXh0fWNhdGNoKGYpe2M9XCJcIn1zfHwhbi5pc0xvY2FsfHxuLmNyb3NzRG9tYWluPzEyMjM9PT1zJiYocz0yMDQpOnM9cC50ZXh0PzIwMDo0MDR9fWNhdGNoKGQpe2l8fG8oLTEsZCl9cCYmbyhzLGMscCxsKX0sbi5hc3luYz80PT09dS5yZWFkeVN0YXRlP3NldFRpbWVvdXQocik6KGE9KytXbiwkbiYmKFBufHwoUG49e30sYihlKS51bmxvYWQoJG4pKSxQblthXT1yKSx1Lm9ucmVhZHlzdGF0ZWNoYW5nZT1yKTpyKCl9LGFib3J0OmZ1bmN0aW9uKCl7ciYmcih0LCEwKX19fX0pO3ZhciBYbixVbixWbj0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sWW49UmVnRXhwKFwiXig/OihbKy1dKT18KShcIit4K1wiKShbYS16JV0qKSRcIixcImlcIiksSm49L3F1ZXVlSG9va3MkLyxHbj1bbnJdLFFuPXtcIipcIjpbZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk9dGhpcy5jcmVhdGVUd2VlbihlLHQpLG89WW4uZXhlYyh0KSxhPWkuY3VyKCkscz0rYXx8MCx1PTEsbD0yMDtpZihvKXtpZihuPStvWzJdLHI9b1szXXx8KGIuY3NzTnVtYmVyW2VdP1wiXCI6XCJweFwiKSxcInB4XCIhPT1yJiZzKXtzPWIuY3NzKGkuZWxlbSxlLCEwKXx8bnx8MTtkbyB1PXV8fFwiLjVcIixzLz11LGIuc3R5bGUoaS5lbGVtLGUscytyKTt3aGlsZSh1IT09KHU9aS5jdXIoKS9hKSYmMSE9PXUmJi0tbCl9aS51bml0PXIsaS5zdGFydD1zLGkuZW5kPW9bMV0/cysob1sxXSsxKSpuOm59cmV0dXJuIGl9XX07ZnVuY3Rpb24gS24oKXtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe1huPXR9KSxYbj1iLm5vdygpfWZ1bmN0aW9uIFpuKGUsdCl7Yi5lYWNoKHQsZnVuY3Rpb24odCxuKXt2YXIgcj0oUW5bdF18fFtdKS5jb25jYXQoUW5bXCIqXCJdKSxpPTAsbz1yLmxlbmd0aDtmb3IoO28+aTtpKyspaWYocltpXS5jYWxsKGUsdCxuKSlyZXR1cm59KX1mdW5jdGlvbiBlcihlLHQsbil7dmFyIHIsaSxvPTAsYT1Hbi5sZW5ndGgscz1iLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIHUuZWxlbX0pLHU9ZnVuY3Rpb24oKXtpZihpKXJldHVybiExO3ZhciB0PVhufHxLbigpLG49TWF0aC5tYXgoMCxsLnN0YXJ0VGltZStsLmR1cmF0aW9uLXQpLHI9bi9sLmR1cmF0aW9ufHwwLG89MS1yLGE9MCx1PWwudHdlZW5zLmxlbmd0aDtmb3IoO3U+YTthKyspbC50d2VlbnNbYV0ucnVuKG8pO3JldHVybiBzLm5vdGlmeVdpdGgoZSxbbCxvLG5dKSwxPm8mJnU/bjoocy5yZXNvbHZlV2l0aChlLFtsXSksITEpfSxsPXMucHJvbWlzZSh7ZWxlbTplLHByb3BzOmIuZXh0ZW5kKHt9LHQpLG9wdHM6Yi5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e319LG4pLG9yaWdpbmFsUHJvcGVydGllczp0LG9yaWdpbmFsT3B0aW9uczpuLHN0YXJ0VGltZTpYbnx8S24oKSxkdXJhdGlvbjpuLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbih0LG4pe3ZhciByPWIuVHdlZW4oZSxsLm9wdHMsdCxuLGwub3B0cy5zcGVjaWFsRWFzaW5nW3RdfHxsLm9wdHMuZWFzaW5nKTtyZXR1cm4gbC50d2VlbnMucHVzaChyKSxyfSxzdG9wOmZ1bmN0aW9uKHQpe3ZhciBuPTAscj10P2wudHdlZW5zLmxlbmd0aDowO2lmKGkpcmV0dXJuIHRoaXM7Zm9yKGk9ITA7cj5uO24rKylsLnR3ZWVuc1tuXS5ydW4oMSk7cmV0dXJuIHQ/cy5yZXNvbHZlV2l0aChlLFtsLHRdKTpzLnJlamVjdFdpdGgoZSxbbCx0XSksdGhpc319KSxjPWwucHJvcHM7Zm9yKHRyKGMsbC5vcHRzLnNwZWNpYWxFYXNpbmcpO2E+bztvKyspaWYocj1HbltvXS5jYWxsKGwsZSxjLGwub3B0cykpcmV0dXJuIHI7cmV0dXJuIFpuKGwsYyksYi5pc0Z1bmN0aW9uKGwub3B0cy5zdGFydCkmJmwub3B0cy5zdGFydC5jYWxsKGUsbCksYi5meC50aW1lcihiLmV4dGVuZCh1LHtlbGVtOmUsYW5pbTpsLHF1ZXVlOmwub3B0cy5xdWV1ZX0pKSxsLnByb2dyZXNzKGwub3B0cy5wcm9ncmVzcykuZG9uZShsLm9wdHMuZG9uZSxsLm9wdHMuY29tcGxldGUpLmZhaWwobC5vcHRzLmZhaWwpLmFsd2F5cyhsLm9wdHMuYWx3YXlzKX1mdW5jdGlvbiB0cihlLHQpe3ZhciBuLHIsaSxvLGE7Zm9yKGkgaW4gZSlpZihyPWIuY2FtZWxDYXNlKGkpLG89dFtyXSxuPWVbaV0sYi5pc0FycmF5KG4pJiYobz1uWzFdLG49ZVtpXT1uWzBdKSxpIT09ciYmKGVbcl09bixkZWxldGUgZVtpXSksYT1iLmNzc0hvb2tzW3JdLGEmJlwiZXhwYW5kXCJpbiBhKXtuPWEuZXhwYW5kKG4pLGRlbGV0ZSBlW3JdO2ZvcihpIGluIG4paSBpbiBlfHwoZVtpXT1uW2ldLHRbaV09byl9ZWxzZSB0W3JdPW99Yi5BbmltYXRpb249Yi5leHRlbmQoZXIse3R3ZWVuZXI6ZnVuY3Rpb24oZSx0KXtiLmlzRnVuY3Rpb24oZSk/KHQ9ZSxlPVtcIipcIl0pOmU9ZS5zcGxpdChcIiBcIik7dmFyIG4scj0wLGk9ZS5sZW5ndGg7Zm9yKDtpPnI7cisrKW49ZVtyXSxRbltuXT1RbltuXXx8W10sUW5bbl0udW5zaGlmdCh0KX0scHJlZmlsdGVyOmZ1bmN0aW9uKGUsdCl7dD9Hbi51bnNoaWZ0KGUpOkduLnB1c2goZSl9fSk7ZnVuY3Rpb24gbnIoZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGMscCxmPXRoaXMsZD1lLnN0eWxlLGg9e30sZz1bXSxtPWUubm9kZVR5cGUmJm5uKGUpO24ucXVldWV8fChjPWIuX3F1ZXVlSG9va3MoZSxcImZ4XCIpLG51bGw9PWMudW5xdWV1ZWQmJihjLnVucXVldWVkPTAscD1jLmVtcHR5LmZpcmUsYy5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7Yy51bnF1ZXVlZHx8cCgpfSksYy51bnF1ZXVlZCsrLGYuYWx3YXlzKGZ1bmN0aW9uKCl7Zi5hbHdheXMoZnVuY3Rpb24oKXtjLnVucXVldWVkLS0sYi5xdWV1ZShlLFwiZnhcIikubGVuZ3RofHxjLmVtcHR5LmZpcmUoKX0pfSkpLDE9PT1lLm5vZGVUeXBlJiYoXCJoZWlnaHRcImluIHR8fFwid2lkdGhcImluIHQpJiYobi5vdmVyZmxvdz1bZC5vdmVyZmxvdyxkLm92ZXJmbG93WCxkLm92ZXJmbG93WV0sXCJpbmxpbmVcIj09PWIuY3NzKGUsXCJkaXNwbGF5XCIpJiZcIm5vbmVcIj09PWIuY3NzKGUsXCJmbG9hdFwiKSYmKGIuc3VwcG9ydC5pbmxpbmVCbG9ja05lZWRzTGF5b3V0JiZcImlubGluZVwiIT09dW4oZS5ub2RlTmFtZSk/ZC56b29tPTE6ZC5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxuLm92ZXJmbG93JiYoZC5vdmVyZmxvdz1cImhpZGRlblwiLGIuc3VwcG9ydC5zaHJpbmtXcmFwQmxvY2tzfHxmLmFsd2F5cyhmdW5jdGlvbigpe2Qub3ZlcmZsb3c9bi5vdmVyZmxvd1swXSxkLm92ZXJmbG93WD1uLm92ZXJmbG93WzFdLGQub3ZlcmZsb3dZPW4ub3ZlcmZsb3dbMl19KSk7Zm9yKGkgaW4gdClpZihhPXRbaV0sVm4uZXhlYyhhKSl7aWYoZGVsZXRlIHRbaV0sdT11fHxcInRvZ2dsZVwiPT09YSxhPT09KG0/XCJoaWRlXCI6XCJzaG93XCIpKWNvbnRpbnVlO2cucHVzaChpKX1pZihvPWcubGVuZ3RoKXtzPWIuX2RhdGEoZSxcImZ4c2hvd1wiKXx8Yi5fZGF0YShlLFwiZnhzaG93XCIse30pLFwiaGlkZGVuXCJpbiBzJiYobT1zLmhpZGRlbiksdSYmKHMuaGlkZGVuPSFtKSxtP2IoZSkuc2hvdygpOmYuZG9uZShmdW5jdGlvbigpe2IoZSkuaGlkZSgpfSksZi5kb25lKGZ1bmN0aW9uKCl7dmFyIHQ7Yi5fcmVtb3ZlRGF0YShlLFwiZnhzaG93XCIpO2Zvcih0IGluIGgpYi5zdHlsZShlLHQsaFt0XSl9KTtmb3IoaT0wO28+aTtpKyspcj1nW2ldLGw9Zi5jcmVhdGVUd2VlbihyLG0/c1tyXTowKSxoW3JdPXNbcl18fGIuc3R5bGUoZSxyKSxyIGluIHN8fChzW3JdPWwuc3RhcnQsbSYmKGwuZW5kPWwuc3RhcnQsbC5zdGFydD1cIndpZHRoXCI9PT1yfHxcImhlaWdodFwiPT09cj8xOjApKX19ZnVuY3Rpb24gcnIoZSx0LG4scixpKXtyZXR1cm4gbmV3IHJyLnByb3RvdHlwZS5pbml0KGUsdCxuLHIsaSl9Yi5Ud2Vlbj1ycixyci5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOnJyLGluaXQ6ZnVuY3Rpb24oZSx0LG4scixpLG8pe3RoaXMuZWxlbT1lLHRoaXMucHJvcD1uLHRoaXMuZWFzaW5nPWl8fFwic3dpbmdcIix0aGlzLm9wdGlvbnM9dCx0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9cix0aGlzLnVuaXQ9b3x8KGIuY3NzTnVtYmVyW25dP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGU9cnIucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGUmJmUuZ2V0P2UuZ2V0KHRoaXMpOnJyLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihlKXt2YXIgdCxuPXJyLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLnBvcz10PXRoaXMub3B0aW9ucy5kdXJhdGlvbj9iLmVhc2luZ1t0aGlzLmVhc2luZ10oZSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qZSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTplLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSp0K3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLG4mJm4uc2V0P24uc2V0KHRoaXMpOnJyLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LHJyLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1yci5wcm90b3R5cGUscnIucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBudWxsPT1lLmVsZW1bZS5wcm9wXXx8ZS5lbGVtLnN0eWxlJiZudWxsIT1lLmVsZW0uc3R5bGVbZS5wcm9wXT8odD1iLmNzcyhlLmVsZW0sZS5wcm9wLFwiXCIpLHQmJlwiYXV0b1wiIT09dD90OjApOmUuZWxlbVtlLnByb3BdfSxzZXQ6ZnVuY3Rpb24oZSl7Yi5meC5zdGVwW2UucHJvcF0/Yi5meC5zdGVwW2UucHJvcF0oZSk6ZS5lbGVtLnN0eWxlJiYobnVsbCE9ZS5lbGVtLnN0eWxlW2IuY3NzUHJvcHNbZS5wcm9wXV18fGIuY3NzSG9va3NbZS5wcm9wXSk/Yi5zdHlsZShlLmVsZW0sZS5wcm9wLGUubm93K2UudW5pdCk6ZS5lbGVtW2UucHJvcF09ZS5ub3d9fX0scnIucHJvcEhvb2tzLnNjcm9sbFRvcD1yci5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGUpe2UuZWxlbS5ub2RlVHlwZSYmZS5lbGVtLnBhcmVudE5vZGUmJihlLmVsZW1bZS5wcm9wXT1lLm5vdyl9fSxiLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGUsdCl7dmFyIG49Yi5mblt0XTtiLmZuW3RdPWZ1bmN0aW9uKGUscixpKXtyZXR1cm4gbnVsbD09ZXx8XCJib29sZWFuXCI9PXR5cGVvZiBlP24uYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShpcih0LCEwKSxlLHIsaSl9fSksYi5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5maWx0ZXIobm4pLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTp0fSxlLG4scil9LGFuaW1hdGU6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGk9Yi5pc0VtcHR5T2JqZWN0KGUpLG89Yi5zcGVlZCh0LG4sciksYT1mdW5jdGlvbigpe3ZhciB0PWVyKHRoaXMsYi5leHRlbmQoe30sZSksbyk7YS5maW5pc2g9ZnVuY3Rpb24oKXt0LnN0b3AoITApfSwoaXx8Yi5fZGF0YSh0aGlzLFwiZmluaXNoXCIpKSYmdC5zdG9wKCEwKX07cmV0dXJuIGEuZmluaXNoPWEsaXx8by5xdWV1ZT09PSExP3RoaXMuZWFjaChhKTp0aGlzLnF1ZXVlKG8ucXVldWUsYSl9LHN0b3A6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3RvcDtkZWxldGUgZS5zdG9wLHQocil9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlJiYocj1uLG49ZSxlPXQpLG4mJmUhPT0hMSYmdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PSEwLG49bnVsbCE9ZSYmZStcInF1ZXVlSG9va3NcIixvPWIudGltZXJzLGE9Yi5fZGF0YSh0aGlzKTtpZihuKWFbbl0mJmFbbl0uc3RvcCYmaShhW25dKTtlbHNlIGZvcihuIGluIGEpYVtuXSYmYVtuXS5zdG9wJiZKbi50ZXN0KG4pJiZpKGFbbl0pO2ZvcihuPW8ubGVuZ3RoO24tLTspb1tuXS5lbGVtIT09dGhpc3x8bnVsbCE9ZSYmb1tuXS5xdWV1ZSE9PWV8fChvW25dLmFuaW0uc3RvcChyKSx0PSExLG8uc3BsaWNlKG4sMSkpOyh0fHwhcikmJmIuZGVxdWV1ZSh0aGlzLGUpfSl9LGZpbmlzaDpmdW5jdGlvbihlKXtyZXR1cm4gZSE9PSExJiYoZT1lfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0LG49Yi5fZGF0YSh0aGlzKSxyPW5bZStcInF1ZXVlXCJdLGk9bltlK1wicXVldWVIb29rc1wiXSxvPWIudGltZXJzLGE9cj9yLmxlbmd0aDowO2ZvcihuLmZpbmlzaD0hMCxiLnF1ZXVlKHRoaXMsZSxbXSksaSYmaS5jdXImJmkuY3VyLmZpbmlzaCYmaS5jdXIuZmluaXNoLmNhbGwodGhpcyksdD1vLmxlbmd0aDt0LS07KW9bdF0uZWxlbT09PXRoaXMmJm9bdF0ucXVldWU9PT1lJiYob1t0XS5hbmltLnN0b3AoITApLG8uc3BsaWNlKHQsMSkpO2Zvcih0PTA7YT50O3QrKylyW3RdJiZyW3RdLmZpbmlzaCYmclt0XS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgbi5maW5pc2h9KX19KTtmdW5jdGlvbiBpcihlLHQpe3ZhciBuLHI9e2hlaWdodDplfSxpPTA7Zm9yKHQ9dD8xOjA7ND5pO2krPTItdCluPVp0W2ldLHJbXCJtYXJnaW5cIituXT1yW1wicGFkZGluZ1wiK25dPWU7cmV0dXJuIHQmJihyLm9wYWNpdHk9ci53aWR0aD1lKSxyfWIuZWFjaCh7c2xpZGVEb3duOmlyKFwic2hvd1wiKSxzbGlkZVVwOmlyKFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTppcihcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGUsdCl7Yi5mbltlXT1mdW5jdGlvbihlLG4scil7cmV0dXJuIHRoaXMuYW5pbWF0ZSh0LGUsbixyKX19KSxiLnNwZWVkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1lJiZcIm9iamVjdFwiPT10eXBlb2YgZT9iLmV4dGVuZCh7fSxlKTp7Y29tcGxldGU6bnx8IW4mJnR8fGIuaXNGdW5jdGlvbihlKSYmZSxkdXJhdGlvbjplLGVhc2luZzpuJiZ0fHx0JiYhYi5pc0Z1bmN0aW9uKHQpJiZ0fTtyZXR1cm4gci5kdXJhdGlvbj1iLmZ4Lm9mZj8wOlwibnVtYmVyXCI9PXR5cGVvZiByLmR1cmF0aW9uP3IuZHVyYXRpb246ci5kdXJhdGlvbiBpbiBiLmZ4LnNwZWVkcz9iLmZ4LnNwZWVkc1tyLmR1cmF0aW9uXTpiLmZ4LnNwZWVkcy5fZGVmYXVsdCwobnVsbD09ci5xdWV1ZXx8ci5xdWV1ZT09PSEwKSYmKHIucXVldWU9XCJmeFwiKSxyLm9sZD1yLmNvbXBsZXRlLHIuY29tcGxldGU9ZnVuY3Rpb24oKXtiLmlzRnVuY3Rpb24oci5vbGQpJiZyLm9sZC5jYWxsKHRoaXMpLHIucXVldWUmJmIuZGVxdWV1ZSh0aGlzLHIucXVldWUpfSxyfSxiLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxzd2luZzpmdW5jdGlvbihlKXtyZXR1cm4uNS1NYXRoLmNvcyhlKk1hdGguUEkpLzJ9fSxiLnRpbWVycz1bXSxiLmZ4PXJyLnByb3RvdHlwZS5pbml0LGIuZngudGljaz1mdW5jdGlvbigpe3ZhciBlLG49Yi50aW1lcnMscj0wO2ZvcihYbj1iLm5vdygpO24ubGVuZ3RoPnI7cisrKWU9bltyXSxlKCl8fG5bcl0hPT1lfHxuLnNwbGljZShyLS0sMSk7bi5sZW5ndGh8fGIuZnguc3RvcCgpLFhuPXR9LGIuZngudGltZXI9ZnVuY3Rpb24oZSl7ZSgpJiZiLnRpbWVycy5wdXNoKGUpJiZiLmZ4LnN0YXJ0KCl9LGIuZnguaW50ZXJ2YWw9MTMsYi5meC5zdGFydD1mdW5jdGlvbigpe1VufHwoVW49c2V0SW50ZXJ2YWwoYi5meC50aWNrLGIuZnguaW50ZXJ2YWwpKX0sYi5meC5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChVbiksVW49bnVsbH0sYi5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sYi5meC5zdGVwPXt9LGIuZXhwciYmYi5leHByLmZpbHRlcnMmJihiLmV4cHIuZmlsdGVycy5hbmltYXRlZD1mdW5jdGlvbihlKXtyZXR1cm4gYi5ncmVwKGIudGltZXJzLGZ1bmN0aW9uKHQpe3JldHVybiBlPT09dC5lbGVtfSkubGVuZ3RofSksYi5mbi5vZmZzZXQ9ZnVuY3Rpb24oZSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZT09PXQ/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24odCl7Yi5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsZSx0KX0pO3ZhciBuLHIsbz17dG9wOjAsbGVmdDowfSxhPXRoaXNbMF0scz1hJiZhLm93bmVyRG9jdW1lbnQ7aWYocylyZXR1cm4gbj1zLmRvY3VtZW50RWxlbWVudCxiLmNvbnRhaW5zKG4sYSk/KHR5cGVvZiBhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCE9PWkmJihvPWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLHI9b3Iocykse3RvcDpvLnRvcCsoci5wYWdlWU9mZnNldHx8bi5zY3JvbGxUb3ApLShuLmNsaWVudFRvcHx8MCksbGVmdDpvLmxlZnQrKHIucGFnZVhPZmZzZXR8fG4uc2Nyb2xsTGVmdCktKG4uY2xpZW50TGVmdHx8MCl9KTpvfSxiLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1iLmNzcyhlLFwicG9zaXRpb25cIik7XCJzdGF0aWNcIj09PXImJihlLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIik7dmFyIGk9YihlKSxvPWkub2Zmc2V0KCksYT1iLmNzcyhlLFwidG9wXCIpLHM9Yi5jc3MoZSxcImxlZnRcIiksdT0oXCJhYnNvbHV0ZVwiPT09cnx8XCJmaXhlZFwiPT09cikmJmIuaW5BcnJheShcImF1dG9cIixbYSxzXSk+LTEsbD17fSxjPXt9LHAsZjt1PyhjPWkucG9zaXRpb24oKSxwPWMudG9wLGY9Yy5sZWZ0KToocD1wYXJzZUZsb2F0KGEpfHwwLGY9cGFyc2VGbG9hdChzKXx8MCksYi5pc0Z1bmN0aW9uKHQpJiYodD10LmNhbGwoZSxuLG8pKSxudWxsIT10LnRvcCYmKGwudG9wPXQudG9wLW8udG9wK3ApLG51bGwhPXQubGVmdCYmKGwubGVmdD10LmxlZnQtby5sZWZ0K2YpLFwidXNpbmdcImluIHQ/dC51c2luZy5jYWxsKGUsbCk6aS5jc3MobCl9fSxiLmZuLmV4dGVuZCh7cG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgZSx0LG49e3RvcDowLGxlZnQ6MH0scj10aGlzWzBdO3JldHVyblwiZml4ZWRcIj09PWIuY3NzKHIsXCJwb3NpdGlvblwiKT90PXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGU9dGhpcy5vZmZzZXRQYXJlbnQoKSx0PXRoaXMub2Zmc2V0KCksYi5ub2RlTmFtZShlWzBdLFwiaHRtbFwiKXx8KG49ZS5vZmZzZXQoKSksbi50b3ArPWIuY3NzKGVbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxuLmxlZnQrPWIuY3NzKGVbMF0sXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpLHt0b3A6dC50b3Atbi50b3AtYi5jc3MocixcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OnQubGVmdC1uLmxlZnQtYi5jc3MocixcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vZmZzZXRQYXJlbnR8fG8uZG9jdW1lbnRFbGVtZW50O3doaWxlKGUmJiFiLm5vZGVOYW1lKGUsXCJodG1sXCIpJiZcInN0YXRpY1wiPT09Yi5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fG8uZG9jdW1lbnRFbGVtZW50fSl9fSksYi5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihlLG4pe3ZhciByPS9ZLy50ZXN0KG4pO2IuZm5bZV09ZnVuY3Rpb24oaSl7cmV0dXJuIGIuYWNjZXNzKHRoaXMsZnVuY3Rpb24oZSxpLG8pe3ZhciBhPW9yKGUpO3JldHVybiBvPT09dD9hP24gaW4gYT9hW25dOmEuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W2ldOmVbaV06KGE/YS5zY3JvbGxUbyhyP2IoYSkuc2Nyb2xsTGVmdCgpOm8scj9vOmIoYSkuc2Nyb2xsVG9wKCkpOmVbaV09byx0KX0sZSxpLGFyZ3VtZW50cy5sZW5ndGgsbnVsbCl9fSk7ZnVuY3Rpb24gb3IoZSl7cmV0dXJuIGIuaXNXaW5kb3coZSk/ZTo5PT09ZS5ub2RlVHlwZT9lLmRlZmF1bHRWaWV3fHxlLnBhcmVudFdpbmRvdzohMX1iLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oZSxuKXtiLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2UsY29udGVudDpuLFwiXCI6XCJvdXRlclwiK2V9LGZ1bmN0aW9uKHIsaSl7Yi5mbltpXT1mdW5jdGlvbihpLG8pe3ZhciBhPWFyZ3VtZW50cy5sZW5ndGgmJihyfHxcImJvb2xlYW5cIiE9dHlwZW9mIGkpLHM9cnx8KGk9PT0hMHx8bz09PSEwP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIGIuYWNjZXNzKHRoaXMsZnVuY3Rpb24obixyLGkpe3ZhciBvO3JldHVybiBiLmlzV2luZG93KG4pP24uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrZV06OT09PW4ubm9kZVR5cGU/KG89bi5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgobi5ib2R5W1wic2Nyb2xsXCIrZV0sb1tcInNjcm9sbFwiK2VdLG4uYm9keVtcIm9mZnNldFwiK2VdLG9bXCJvZmZzZXRcIitlXSxvW1wiY2xpZW50XCIrZV0pKTppPT09dD9iLmNzcyhuLHIscyk6Yi5zdHlsZShuLHIsaSxzKX0sbixhP2k6dCxhLG51bGwpfX0pfSksZS5qUXVlcnk9ZS4kPWIsXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUuYW1kLmpRdWVyeSYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gYn0pfSkod2luZG93KTtcblxuLy8gU25hcCB0aGlzIHNwZWNpZmljIHZlcnNpb24gb2YgalF1ZXJ5IGludG8gSDVQLiBqUXVlcnkubm9Db25mbGljdCB3aWxsXG4vLyByZXZlcnQgdGhlIGdsb2JhbHMgdG8gd2hhdCB0aGV5IHdlcmUgYmVmb3JlIHRoaXMgZmlsZSB3YXMgbG9hZGVkLlxudmFyIEg1UCA9IHdpbmRvdy5INVAgPSB3aW5kb3cuSDVQIHx8IHt9O1xuXG4vKipcbiAqIGpRdWVyeSB2MS45LjFcbiAqXG4gKiBAbWVtYmVyXG4gKi9cbkg1UC5qUXVlcnkgPSBqUXVlcnkubm9Db25mbGljdCh0cnVlKTtcbkg1UC5qUXVlcnkuYWpheFByZWZpbHRlcihmdW5jdGlvbiAocykge1xuICBpZiAocy5jcm9zc0RvbWFpbikge1xuICAgIHMuY29udGVudHMuc2NyaXB0ID0gZmFsc2U7XG4gIH1cbn0pO1xuIiwiLyoqXG4gKiBRdWV1ZSByZXF1ZXN0cyBhbmQgaGFuZGxlIHRoZW0gYXQgeW91ciBjb252ZW5pZW5jZVxuICpcbiAqIEB0eXBlIHtSZXF1ZXN0UXVldWV9XG4gKi9cbkg1UC5SZXF1ZXN0UXVldWUgPSAoZnVuY3Rpb24gKCQsIEV2ZW50RGlzcGF0Y2hlcikge1xuICAvKipcbiAgICogQSBxdWV1ZSBmb3IgcmVxdWVzdHMsIHdpbGwgYmUgYXV0b21hdGljYWxseSBwcm9jZXNzZWQgd2hlbiByZWdhaW5pbmcgY29ubmVjdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnNob3dUb2FzdF0gU2hvdyB0b2FzdCB3aGVuIGxvc2luZyBvciByZWdhaW5pbmcgY29ubmVjdGlvblxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0IFJlcXVlc3RRdWV1ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgRXZlbnREaXNwYXRjaGVyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5wcm9jZXNzaW5nUXVldWUgPSBmYWxzZTtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHRoaXMuc2hvd1RvYXN0ID0gb3B0aW9ucy5zaG93VG9hc3Q7XG4gICAgdGhpcy5pdGVtTmFtZSA9ICdyZXF1ZXN0UXVldWUnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgcmVxdWVzdCB0byBxdWV1ZS4gT25seSBzdXBwb3J0cyBwb3N0cyBjdXJyZW50bHkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBSZXF1ZXN0UXVldWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh1cmwsIGRhdGEpIHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgc3RvcmVkU3RhdGVtZW50cyA9IHRoaXMuZ2V0U3RvcmVkUmVxdWVzdHMoKTtcbiAgICBpZiAoIXN0b3JlZFN0YXRlbWVudHMpIHtcbiAgICAgIHN0b3JlZFN0YXRlbWVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBzdG9yZWRTdGF0ZW1lbnRzLnB1c2goe1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgIH0pO1xuXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuaXRlbU5hbWUsIEpTT04uc3RyaW5naWZ5KHN0b3JlZFN0YXRlbWVudHMpKTtcblxuICAgIHRoaXMudHJpZ2dlcigncmVxdWVzdFF1ZXVlZCcsIHtcbiAgICAgIHN0b3JlZFN0YXRlbWVudHM6IHN0b3JlZFN0YXRlbWVudHMsXG4gICAgICBwcm9jZXNzaW5nUXVldWU6IHRoaXMucHJvY2Vzc2luZ1F1ZXVlLFxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgc3RvcmVkIHJlcXVlc3RzXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufEFycmF5fSBTdG9yZWQgcmVxdWVzdHNcbiAgICovXG4gIFJlcXVlc3RRdWV1ZS5wcm90b3R5cGUuZ2V0U3RvcmVkUmVxdWVzdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYWxTdG9yYWdlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLml0ZW1OYW1lKTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5wYXJzZShpdGVtKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2xlYXIgc3RvcmVkIHJlcXVlc3RzXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzdG9yYWdlIHdhcyBzdWNjZXNzZnVsbHkgY2xlYXJlZFxuICAgKi9cbiAgUmVxdWVzdFF1ZXVlLnByb3RvdHlwZS5jbGVhclF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghd2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLml0ZW1OYW1lKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogU3RhcnQgcHJvY2Vzc2luZyBvZiByZXF1ZXN0cyBxdWV1ZVxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIGZhbHNlIGlmIGl0IHdhcyBub3QgcG9zc2libGUgdG8gcmVzdW1lIHByb2Nlc3NpbmcgcXVldWVcbiAgICovXG4gIFJlcXVlc3RRdWV1ZS5wcm90b3R5cGUucmVzdW1lUXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gTm90IHN1cHBvcnRlZFxuICAgIGlmICghSDVQSW50ZWdyYXRpb24gfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIXdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBbHJlYWR5IHByb2Nlc3NpbmdcbiAgICBpZiAodGhpcy5wcm9jZXNzaW5nUXVldWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBdHRlbXB0IHRvIHNlbmQgcXVldWVkIHJlcXVlc3RzXG4gICAgY29uc3QgcXVldWUgPSB0aGlzLmdldFN0b3JlZFJlcXVlc3RzKCk7XG4gICAgY29uc3QgcXVldWVMZW5ndGggPSBxdWV1ZS5sZW5ndGg7XG5cbiAgICAvLyBDbGVhciBzdG9yYWdlLCBmYWlsZWQgcmVxdWVzdHMgd2lsbCBiZSByZS1hZGRlZFxuICAgIHRoaXMuY2xlYXJRdWV1ZSgpO1xuXG4gICAgLy8gTm8gaXRlbXMgbGVmdCBpbiBxdWV1ZVxuICAgIGlmICghcXVldWVMZW5ndGgpIHtcbiAgICAgIHRoaXMudHJpZ2dlcignZW1wdGllZFF1ZXVlJywgcXVldWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHJlcXVlc3RzIGFyZSBub3QgY2hhbmdlZCB3aGlsZSB0aGV5J3JlIGJlaW5nIGhhbmRsZWRcbiAgICB0aGlzLnByb2Nlc3NpbmdRdWV1ZSA9IHRydWU7XG5cbiAgICAvLyBQcm9jZXNzIHF1ZXVlIGluIG9yaWdpbmFsIG9yZGVyXG4gICAgdGhpcy5wcm9jZXNzUXVldWUocXVldWUpO1xuICAgIHJldHVybiB0cnVlXG4gIH07XG5cbiAgLyoqXG4gICAqIFByb2Nlc3MgZmlyc3QgaXRlbSBpbiB0aGUgcmVxdWVzdCBxdWV1ZVxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBxdWV1ZSBSZXF1ZXN0IHF1ZXVlXG4gICAqL1xuICBSZXF1ZXN0UXVldWUucHJvdG90eXBlLnByb2Nlc3NRdWV1ZSA9IGZ1bmN0aW9uIChxdWV1ZSkge1xuICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKCdwcm9jZXNzaW5nUXVldWUnKTtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgcmVxdWVzdHMgYXJlIHByb2Nlc3NlZCBpbiBhIEZJRk8gb3JkZXJcbiAgICBjb25zdCByZXF1ZXN0ID0gcXVldWUuc2hpZnQoKTtcblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICQucG9zdChyZXF1ZXN0LnVybCwgcmVxdWVzdC5kYXRhKVxuICAgICAgLmZhaWwoc2VsZi5vblF1ZXVlZFJlcXVlc3RGYWlsLmJpbmQoc2VsZiwgcmVxdWVzdCkpXG4gICAgICAuYWx3YXlzKHNlbGYub25RdWV1ZWRSZXF1ZXN0UHJvY2Vzc2VkLmJpbmQoc2VsZiwgcXVldWUpKVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IGZhaWwgaGFuZGxlclxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVxdWVzdFxuICAgKi9cbiAgUmVxdWVzdFF1ZXVlLnByb3RvdHlwZS5vblF1ZXVlZFJlcXVlc3RGYWlsID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgICAvLyBRdWV1ZSB0aGUgZmFpbGVkIHJlcXVlc3QgYWdhaW4gaWYgd2UncmUgb2ZmbGluZVxuICAgIGlmICghd2luZG93Lm5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgIHRoaXMuYWRkKHJlcXVlc3QudXJsLCByZXF1ZXN0LmRhdGEpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQW4gaXRlbSBpbiB0aGUgcXVldWUgd2FzIHByb2Nlc3NlZFxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBxdWV1ZSBRdWV1ZSB0aGF0IHdhcyBwcm9jZXNzZWRcbiAgICovXG4gIFJlcXVlc3RRdWV1ZS5wcm90b3R5cGUub25RdWV1ZWRSZXF1ZXN0UHJvY2Vzc2VkID0gZnVuY3Rpb24gKHF1ZXVlKSB7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5wcm9jZXNzUXVldWUocXVldWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZpbmlzaGVkIHByb2Nlc3NpbmcgdGhpcyBxdWV1ZVxuICAgIHRoaXMucHJvY2Vzc2luZ1F1ZXVlID0gZmFsc2U7XG5cbiAgICAvLyBSdW4gZW1wdHkgcXVldWUgY2FsbGJhY2sgd2l0aCBuZXh0IHJlcXVlc3QgcXVldWVcbiAgICBjb25zdCByZXF1ZXN0UXVldWUgPSB0aGlzLmdldFN0b3JlZFJlcXVlc3RzKCk7XG4gICAgdGhpcy50cmlnZ2VyKCdxdWV1ZUVtcHRpZWQnLCByZXF1ZXN0UXVldWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IHRvYXN0IG1lc3NhZ2Ugb24gdGhlIGZpcnN0IGNvbnRlbnQgb2YgY3VycmVudCBwYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgTWVzc2FnZSB0byBkaXNwbGF5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlU2hvd10gRm9yY2Ugb3ZlcnJpZGUgc2hvd2luZyB0aGUgdG9hc3RcbiAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWdPdmVycmlkZV0gT3ZlcnJpZGUgdG9hc3QgbWVzc2FnZSBjb25maWdcbiAgICovXG4gIFJlcXVlc3RRdWV1ZS5wcm90b3R5cGUuZGlzcGxheVRvYXN0TWVzc2FnZSA9IGZ1bmN0aW9uIChtc2csIGZvcmNlU2hvdywgY29uZmlnT3ZlcnJpZGUpIHtcbiAgICBpZiAoIXRoaXMuc2hvd1RvYXN0ICYmICFmb3JjZVNob3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSBINVAualF1ZXJ5LmV4dGVuZCh0cnVlLCB7fSwge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgaG9yaXpvbnRhbCA6ICdjZW50ZXJlZCcsXG4gICAgICAgIHZlcnRpY2FsOiAnY2VudGVyZWQnLFxuICAgICAgICBub092ZXJmbG93WDogdHJ1ZSxcbiAgICAgIH1cbiAgICB9LCBjb25maWdPdmVycmlkZSk7XG5cbiAgICBINVAuYXR0YWNoVG9hc3RUbyhINVAualF1ZXJ5KCcuaDVwLWNvbnRlbnQ6Zmlyc3QnKVswXSwgbXNnLCBjb25maWcpO1xuICB9O1xuXG4gIHJldHVybiBSZXF1ZXN0UXVldWU7XG59KShINVAualF1ZXJ5LCBINVAuRXZlbnREaXNwYXRjaGVyKTtcblxuLyoqXG4gKiBSZXF1ZXN0IHF1ZXVlIGZvciByZXRyeWluZyBmYWlsaW5nIHJlcXVlc3RzLCB3aWxsIGF1dG9tYXRpY2FsbHkgcmV0cnkgdGhlbSB3aGVuIHlvdSBjb21lIG9ubGluZVxuICpcbiAqIEB0eXBlIHtvZmZsaW5lUmVxdWVzdFF1ZXVlfVxuICovXG5INVAuT2ZmbGluZVJlcXVlc3RRdWV1ZSA9IChmdW5jdGlvbiAoUmVxdWVzdFF1ZXVlLCBEaWFsb2cpIHtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIGZvciBvZmZsaW5lIHJlcXVlc3QgcXVldWVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmluc3RhbmNlXSBUaGUgSDVQIGluc3RhbmNlIHdoaWNoIFVJIGNvbXBvbmVudHMgYXJlIHBsYWNlZCB3aXRoaW5cbiAgICovXG4gIGNvbnN0IG9mZmxpbmVSZXF1ZXN0UXVldWUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGNvbnN0IHJlcXVlc3RRdWV1ZSA9IG5ldyBSZXF1ZXN0UXVldWUoKTtcblxuICAgIC8vIFdlIGNvdWxkIGhhbmRsZSByZXF1ZXN0cyBmcm9tIHByZXZpb3VzIHBhZ2VzIGhlcmUsIGJ1dCBpbnN0ZWFkIHdlIHRocm93IHRoZW0gYXdheVxuICAgIHJlcXVlc3RRdWV1ZS5jbGVhclF1ZXVlKCk7XG5cbiAgICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcbiAgICBjb25zdCByZXRyeUludGVydmFscyA9IFsxMCwgMjAsIDQwLCA2MCwgMTIwLCAzMDAsIDYwMF07XG4gICAgbGV0IGludGVydmFsSW5kZXggPSAtMTtcbiAgICBsZXQgY3VycmVudEludGVydmFsID0gbnVsbDtcbiAgICBsZXQgaXNBdHRhY2hlZCA9IGZhbHNlO1xuICAgIGxldCBpc1Nob3dpbmcgPSBmYWxzZTtcbiAgICBsZXQgaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBvcHRpb25zLmluc3RhbmNlO1xuXG4gICAgY29uc3Qgb2ZmbGluZURpYWxvZyA9IG5ldyBEaWFsb2coe1xuICAgICAgaGVhZGVyVGV4dDogSDVQLnQoJ29mZmxpbmVEaWFsb2dIZWFkZXInKSxcbiAgICAgIGRpYWxvZ1RleHQ6IEg1UC50KCdvZmZsaW5lRGlhbG9nQm9keScpLFxuICAgICAgY29uZmlybVRleHQ6IEg1UC50KCdvZmZsaW5lRGlhbG9nUmV0cnlCdXR0b25MYWJlbCcpLFxuICAgICAgaGlkZUNhbmNlbDogdHJ1ZSxcbiAgICAgIGhpZGVFeGl0OiB0cnVlLFxuICAgICAgY2xhc3NlczogWydvZmZsaW5lJ10sXG4gICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICBza2lwUmVzdG9yZUZvY3VzOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGlhbG9nID0gb2ZmbGluZURpYWxvZy5nZXRFbGVtZW50KCk7XG5cbiAgICAvLyBBZGQgcmV0cnkgdGV4dCB0byBib2R5XG4gICAgY29uc3QgY291bnREb3duVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvdW50RG93blRleHQuY2xhc3NMaXN0LmFkZCgnY291bnQtZG93bicpO1xuICAgIGNvdW50RG93blRleHQuaW5uZXJIVE1MID0gSDVQLnQoJ29mZmxpbmVEaWFsb2dSZXRyeU1lc3NhZ2UnKVxuICAgICAgLnJlcGxhY2UoJzpudW0nLCAnPHNwYW4gY2xhc3M9XCJjb3VudC1kb3duLW51bVwiPjA8L3NwYW4+Jyk7XG5cbiAgICBkaWFsb2cucXVlcnlTZWxlY3RvcignLmg1cC1jb25maXJtYXRpb24tZGlhbG9nLXRleHQnKS5hcHBlbmRDaGlsZChjb3VudERvd25UZXh0KTtcbiAgICBjb25zdCBjb3VudERvd25OdW0gPSBjb3VudERvd25UZXh0LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudC1kb3duLW51bScpO1xuXG4gICAgLy8gQ3JlYXRlIHRocm9iYmVyXG4gICAgY29uc3QgdGhyb2JiZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhyb2JiZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Rocm9iYmVyLXdyYXBwZXInKTtcbiAgICBjb25zdCB0aHJvYmJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRocm9iYmVyLmNsYXNzTGlzdC5hZGQoJ3NlbmRpbmctcmVxdWVzdHMtdGhyb2JiZXInKTtcbiAgICB0aHJvYmJlcldyYXBwZXIuYXBwZW5kQ2hpbGQodGhyb2JiZXIpO1xuXG4gICAgcmVxdWVzdFF1ZXVlLm9uKCdyZXF1ZXN0UXVldWVkJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vIEFscmVhZHkgcHJvY2Vzc2luZyBxdWV1ZSwgd2FpdCB1bnRpbCBxdWV1ZSBoYXMgZmluaXNoZWQgcHJvY2Vzc2luZyBiZWZvcmUgc2hvd2luZyBkaWFsb2dcbiAgICAgIGlmIChlLmRhdGEgJiYgZS5kYXRhLnByb2Nlc3NpbmdRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNBdHRhY2hlZCkge1xuICAgICAgICBjb25zdCByb290Q29udGVudCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmg1cC1jb250ZW50Jyk7XG4gICAgICAgIGlmICghcm9vdENvbnRlbnQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgb2ZmbGluZURpYWxvZy5hcHBlbmRUbyhyb290Q29udGVudCk7XG4gICAgICAgIHJvb3RDb250ZW50LmFwcGVuZENoaWxkKHRocm9iYmVyV3JhcHBlcik7XG4gICAgICAgIGlzQXR0YWNoZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzdGFydENvdW50RG93bigpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXF1ZXN0UXVldWUub24oJ3F1ZXVlRW1wdGllZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5kYXRhICYmIGUuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgLy8gTmV3IHJlcXVlc3RzIHdlcmUgYWRkZWQgd2hpbGUgcHJvY2Vzc2luZyBxdWV1ZSBvciByZXF1ZXN0cyBmYWlsZWQgYWdhaW4uIFJlLXF1ZXVlIHJlcXVlc3RzLlxuICAgICAgICBzdGFydENvdW50RG93bih0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTdWNjZXNzZnVsbHkgZW1wdGllZCBxdWV1ZVxuICAgICAgY2xlYXJJbnRlcnZhbChjdXJyZW50SW50ZXJ2YWwpO1xuICAgICAgdG9nZ2xlVGhyb2JiZXIoZmFsc2UpO1xuICAgICAgaW50ZXJ2YWxJbmRleCA9IC0xO1xuICAgICAgaWYgKGlzU2hvd2luZykge1xuICAgICAgICBvZmZsaW5lRGlhbG9nLmhpZGUoKTtcbiAgICAgICAgaXNTaG93aW5nID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3RRdWV1ZS5kaXNwbGF5VG9hc3RNZXNzYWdlKFxuICAgICAgICBINVAudCgnb2ZmbGluZVN1Y2Nlc3NmdWxTdWJtaXQnKSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAge1xuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgICBvZmZzZXRWZXJ0aWNhbDogJzEwMCcsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIG9mZmxpbmVEaWFsb2cub24oJ2NvbmZpcm1lZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFNob3cgZGlhbG9nIG9uIG5leHQgcmVuZGVyIGluIGNhc2UgaXQgaXMgYmVpbmcgaGlkZGVuIGJ5IHRoZSAnY29uZmlybScgYnV0dG9uXG4gICAgICBpc1Nob3dpbmcgPSBmYWxzZTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXRyeVJlcXVlc3RzKCk7XG4gICAgICB9LCAxMDApO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAvLyBJbml0aWFsaXplIGxpc3RlbmVyIGZvciB3aGVuIHJlcXVlc3RzIGFyZSBhZGRlZCB0byBxdWV1ZVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXRyeVJlcXVlc3RzKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIExpc3RlbiBmb3IgcXVldWVkIHJlcXVlc3RzIG91dHNpZGUgdGhlIGlmcmFtZVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zdCBpc1ZhbGlkUXVldWVFdmVudCA9IHdpbmRvdy5wYXJlbnQgPT09IGV2ZW50LnNvdXJjZVxuICAgICAgICAmJiBldmVudC5kYXRhLmNvbnRleHQgPT09ICdoNXAnXG4gICAgICAgICYmIGV2ZW50LmRhdGEuYWN0aW9uID09PSAncXVldWVSZXF1ZXN0JztcblxuICAgICAgaWYgKCFpc1ZhbGlkUXVldWVFdmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWRkKGV2ZW50LmRhdGEudXJsLCBldmVudC5kYXRhLmRhdGEpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgdGhyb2JiZXIgdmlzaWJpbGl0eVxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VTaG93XSBXaWxsIGZvcmNlIHRocm9iYmVyIHZpc2liaWxpdHkgaWYgc2V0XG4gICAgICovXG4gICAgY29uc3QgdG9nZ2xlVGhyb2JiZXIgPSBmdW5jdGlvbiAoZm9yY2VTaG93KSB7XG4gICAgICBpc0xvYWRpbmcgPSAhaXNMb2FkaW5nO1xuICAgICAgaWYgKGZvcmNlU2hvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlzTG9hZGluZyA9IGZvcmNlU2hvdztcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTG9hZGluZyAmJiBpc1Nob3dpbmcpIHtcbiAgICAgICAgb2ZmbGluZURpYWxvZy5oaWRlKCk7XG4gICAgICAgIGlzU2hvd2luZyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIHRocm9iYmVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhyb2JiZXJXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXMgdGhlIGZhaWxlZCByZXF1ZXN0c1xuICAgICAqL1xuICAgIGNvbnN0IHJldHJ5UmVxdWVzdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhckludGVydmFsKGN1cnJlbnRJbnRlcnZhbCk7XG4gICAgICB0b2dnbGVUaHJvYmJlcih0cnVlKTtcbiAgICAgIHJlcXVlc3RRdWV1ZS5yZXN1bWVRdWV1ZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbmNyZW1lbnRzIHJldHJ5IGludGVydmFsXG4gICAgICovXG4gICAgY29uc3QgaW5jcmVtZW50UmV0cnlJbnRlcnZhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGludGVydmFsSW5kZXggKz0gMTtcbiAgICAgIGlmIChpbnRlcnZhbEluZGV4ID49IHJldHJ5SW50ZXJ2YWxzLmxlbmd0aCkge1xuICAgICAgICBpbnRlcnZhbEluZGV4ID0gcmV0cnlJbnRlcnZhbHMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIGNvdW50aW5nIGRvd24gdG8gcmV0cnlpbmcgcXVldWVkIHJlcXVlc3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcmNlRGVsYXllZFNob3dcbiAgICAgKi9cbiAgICBjb25zdCBzdGFydENvdW50RG93biA9IGZ1bmN0aW9uIChmb3JjZURlbGF5ZWRTaG93KSB7XG4gICAgICAvLyBBbHJlYWR5IHNob3dpbmcsIHdhaXQgZm9yIHJldHJ5XG4gICAgICBpZiAoaXNTaG93aW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdG9nZ2xlVGhyb2JiZXIoZmFsc2UpO1xuICAgICAgaWYgKCFpc1Nob3dpbmcpIHtcbiAgICAgICAgaWYgKGZvcmNlRGVsYXllZFNob3cpIHtcbiAgICAgICAgICAvLyBNdXN0IGZvcmNlIGRlbGF5ZWQgc2hvdyBzaW5jZSBkaWFsb2cgbWF5IGJlIGhpZGluZywgYW5kIGNvbmZpcm1hdGlvbiBkaWFsb2cgZG9lcyBub3RcbiAgICAgICAgICAvLyAgc3VwcG9ydCB0aGlzLlxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb2ZmbGluZURpYWxvZy5zaG93KDApO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgb2ZmbGluZURpYWxvZy5zaG93KDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpc1Nob3dpbmcgPSB0cnVlO1xuICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBpbmNyZW1lbnRSZXRyeUludGVydmFsKCk7XG4gICAgICBjbGVhckludGVydmFsKGN1cnJlbnRJbnRlcnZhbCk7XG4gICAgICBjdXJyZW50SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVDb3VudERvd24sIDEwMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGNvdW50IGRvd24gdGltZXIuIFJldHJpZXMgcmVxdWVzdHMgd2hlbiB0aW1lIGV4cGlyZXMuXG4gICAgICovXG4gICAgY29uc3QgdXBkYXRlQ291bnREb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgY29uc3QgdGltZUVsYXBzZWQgPSBNYXRoLmZsb29yKCh0aW1lIC0gc3RhcnRUaW1lKSAvIDEwMDApO1xuICAgICAgY29uc3QgdGltZUxlZnQgPSByZXRyeUludGVydmFsc1tpbnRlcnZhbEluZGV4XSAtIHRpbWVFbGFwc2VkO1xuICAgICAgY291bnREb3duTnVtLnRleHRDb250ZW50ID0gdGltZUxlZnQudG9TdHJpbmcoKTtcblxuICAgICAgLy8gUmV0cnkgaW50ZXJ2YWwgcmVhY2hlZCwgcmV0cnkgcmVxdWVzdHNcbiAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgIHJldHJ5UmVxdWVzdHMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkIHJlcXVlc3QgdG8gb2ZmbGluZSByZXF1ZXN0IHF1ZXVlLiBPbmx5IHN1cHBvcnRzIHBvc3RzIGZvciBub3cuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSByZXF1ZXN0IHVybFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSByZXF1ZXN0IGRhdGFcbiAgICAgKi9cbiAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uICh1cmwsIGRhdGEpIHtcbiAgICAgIC8vIE9ubHkgcXVldWUgcmVxdWVzdCBpZiBpdCBmYWlsZWQgYmVjYXVzZSB3ZSBhcmUgb2ZmbGluZVxuICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdFF1ZXVlLmFkZCh1cmwsIGRhdGEpO1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIG9mZmxpbmVSZXF1ZXN0UXVldWU7XG59KShINVAuUmVxdWVzdFF1ZXVlLCBINVAuQ29uZmlybWF0aW9uRGlhbG9nKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=