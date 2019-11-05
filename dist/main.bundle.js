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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/imports-loader/index.js?H5PIntegration=>window.H5PIntegration!./vendor/h5p/js/h5p.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/imports-loader?H5PIntegration=>window.H5PIntegration!./vendor/h5p/js/h5p.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var H5PIntegration = window.H5PIntegration;

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

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/toposort-class/build/toposort.js":
/*!*******************************************************!*\
  !*** ./node_modules/toposort-class/build/toposort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/****
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Gustavo Henke and Aaron Trent
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 ****/
(function( global, factory ) {
    if( true ) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})( this, function( exports, module ) {
    "use strict";

    function _classCallCheck( instance, Constructor ) {
        if( !(instance instanceof Constructor) ) {
            throw new TypeError( "Cannot call a class as a function" );
        }
    }

    var Toposort = (function() {
        function Toposort() {
            _classCallCheck( this, Toposort );

            this.edges = [];
            this.Toposort = Toposort;
        }

        /**
         * Adds dependency edges.
         *
         * @since   0.1.0
         * @param   {String} item               An dependent name. Must be an string and not empty
         * @param   {String[]|String} [deps]    An dependency or array of dependencies
         * @returns {Toposort}                  The Toposort instance
         */

        Toposort.prototype.add = function add( item, deps ) {
            if( typeof item !== "string" || !item ) {
                throw new TypeError( "Dependent name must be given as a not empty string" );
            }

            deps = Array.isArray( deps ) ? deps : [deps];

            if( deps.length > 0 ) {
                for( var _iterator = deps, _isArray = Array.isArray( _iterator ), _i = 0, _iterator = _isArray ?
                                                                                                      _iterator :
                                                                                                      _iterator[Symbol.iterator](); ; ) {
                    var _ref;

                    if( _isArray ) {
                        if( _i >= _iterator.length ) {
                            break;
                        }
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if( _i.done ) {
                            break;
                        }
                        _ref = _i.value;
                    }

                    var dep = _ref;

                    if( typeof dep !== "string" || !dep ) {
                        throw new TypeError( "Dependency name must be given as a not empty string" );
                    }

                    this.edges.push( [item, dep] );
                }
            } else {
                this.edges.push( [item] );
            }

            return this;
        };

        /**
         * Runs the toposorting and return an ordered array of strings
         *
         * @since   0.1.0
         * @returns {String[]}  The list of items topologically sorted.
         */

        Toposort.prototype.sort = function sort() {
            var _this = this;

            var nodes = [];

            //accumulate unique nodes into a large list
            for( var _iterator2 = this.edges, _isArray2 = Array.isArray( _iterator2 ), _i2 = 0, _iterator2 = _isArray2 ?
                                                                                                             _iterator2 :
                                                                                                             _iterator2[Symbol.iterator](); ; ) {
                var _ref2;

                if( _isArray2 ) {
                    if( _i2 >= _iterator2.length ) {
                        break;
                    }
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if( _i2.done ) {
                        break;
                    }
                    _ref2 = _i2.value;
                }

                var edge = _ref2;

                for( var _iterator3 = edge, _isArray3 = Array.isArray( _iterator3 ), _i3 = 0, _iterator3 = _isArray3 ?
                                                                                                           _iterator3 :
                                                                                                           _iterator3[Symbol.iterator](); ; ) {
                    var _ref3;

                    if( _isArray3 ) {
                        if( _i3 >= _iterator3.length ) {
                            break;
                        }
                        _ref3 = _iterator3[_i3++];
                    } else {
                        _i3 = _iterator3.next();
                        if( _i3.done ) {
                            break;
                        }
                        _ref3 = _i3.value;
                    }

                    var node = _ref3;

                    if( nodes.indexOf( node ) === -1 ) {
                        nodes.push( node );
                    }
                }
            }

            //initialize the placement of nodes into the sorted array at the end
            var place = nodes.length;

            //initialize the sorted array with the same length as the unique nodes array
            var sorted = new Array( nodes.length );

            //define a visitor function that recursively traverses dependencies.
            var visit = function visit( node, predecessors ) {
                //check if a node is dependent of itself
                if( predecessors.length !== 0 && predecessors.indexOf( node ) !== -1 ) {
                    throw new Error( "Cyclic dependency found. " + node + " is dependent of itself.\nDependency chain: "
                                     + predecessors.join( " -> " ) + " => " + node );
                }

                var index = nodes.indexOf( node );

                //if the node still exists, traverse its dependencies
                if( index !== -1 ) {
                    var copy = false;

                    //mark the node as false to exclude it from future iterations
                    nodes[index] = false;

                    //loop through all edges and follow dependencies of the current node
                    for( var _iterator4 = _this.edges, _isArray4 = Array.isArray( _iterator4 ), _i4 = 0, _iterator4 = _isArray4 ?
                                                                                                                      _iterator4 :
                                                                                                                      _iterator4[Symbol.iterator](); ; ) {
                        var _ref4;

                        if( _isArray4 ) {
                            if( _i4 >= _iterator4.length ) {
                                break;
                            }
                            _ref4 = _iterator4[_i4++];
                        } else {
                            _i4 = _iterator4.next();
                            if( _i4.done ) {
                                break;
                            }
                            _ref4 = _i4.value;
                        }

                        var edge = _ref4;

                        if( edge[0] === node ) {
                            //lazily create a copy of predecessors with the current node concatenated onto it
                            copy = copy || predecessors.concat( [node] );

                            //recurse to node dependencies
                            visit( edge[1], copy );
                        }
                    }

                    //add the node to the next place in the sorted array
                    sorted[--place] = node;
                }
            };

            for( var i = 0; i < nodes.length; i++ ) {
                var node = nodes[i];

                //ignore nodes that have been excluded
                if( node !== false ) {
                    //mark the node as false to exclude it from future iterations
                    nodes[i] = false;

                    //loop through all edges and follow dependencies of the current node
                    for( var _iterator5 = this.edges, _isArray5 = Array.isArray( _iterator5 ), _i5 = 0, _iterator5 = _isArray5 ?
                                                                                                                     _iterator5 :
                                                                                                                     _iterator5[Symbol.iterator](); ; ) {
                        var _ref5;

                        if( _isArray5 ) {
                            if( _i5 >= _iterator5.length ) {
                                break;
                            }
                            _ref5 = _iterator5[_i5++];
                        } else {
                            _i5 = _iterator5.next();
                            if( _i5.done ) {
                                break;
                            }
                            _ref5 = _i5.value;
                        }

                        var edge = _ref5;

                        if( edge[0] === node ) {
                            //recurse to node dependencies
                            visit( edge[1], [node] );
                        }
                    }

                    //add the node to the next place in the sorted array
                    sorted[--place] = node;
                }
            }

            return sorted;
        };

        /**
         * Clears edges
         *
         * @since   0.4.0
         * @returns {Toposort}                  The Toposort instance
         */

        Toposort.prototype.clear = function clear() {
            this.edges = [];

            return this;
        };

        return Toposort;
    })();

    module.exports = Toposort;
} );


/***/ }),

/***/ "./node_modules/toposort-class/index.js":
/*!**********************************************!*\
  !*** ./node_modules/toposort-class/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__( /*! ./build/toposort.js */ "./node_modules/toposort-class/build/toposort.js" );


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

/***/ "./src/js/h5p-integration.js":
/*!***********************************!*\
  !*** ./src/js/h5p-integration.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var H5PIntegration = {};
H5PIntegration.l10n = {
  H5P: {
    "fullscreen": "Fullscreen",
    "disableFullscreen": "Disable fullscreen",
    "download": "Download",
    "copyrights": "Rights of use",
    "embed": "Embed",
    "size": "Size",
    "showAdvanced": "Show advanced",
    "hideAdvanced": "Hide advanced",
    "advancedHelp": "Include this script on your website if you want dynamic sizing of the embedded content:",
    "copyrightInformation": "Rights of use",
    "close": "Close",
    "title": "Title",
    "author": "Author",
    "year": "Year",
    "source": "Source",
    "license": "License",
    "thumbnail": "Thumbnail",
    "noCopyrights": "No copyright information available for this content.",
    "reuse": "Reuse",
    "reuseContent": "Reuse Content",
    "reuseDescription": "Reuse this content.",
    "downloadDescription": "Download this content as a H5P file.",
    "copyrightsDescription": "View copyright information for this content.",
    "embedDescription": "View the embed code for this content.",
    "h5pDescription": "Visit H5P.org to check out more cool content.",
    "contentChanged": "This content has changed since you last used it.",
    "startingOver": "You'll be starting over.",
    "by": "by",
    "showMore": "Show more",
    "showLess": "Show less",
    "subLevel": "Sublevel",
    "confirmDialogHeader": "Confirm action",
    "confirmDialogBody": "Please confirm that you wish to proceed. This action is not reversible.",
    "cancelLabel": "Cancel",
    "confirmLabel": "Confirm",
    "licenseU": "Undisclosed",
    "licenseCCBY": "Attribution",
    "licenseCCBYSA": "Attribution-ShareAlike",
    "licenseCCBYND": "Attribution-NoDerivs",
    "licenseCCBYNC": "Attribution-NonCommercial",
    "licenseCCBYNCSA": "Attribution-NonCommercial-ShareAlike",
    "licenseCCBYNCND": "Attribution-NonCommercial-NoDerivs",
    "licenseCC40": "4.0 International",
    "licenseCC30": "3.0 Unported",
    "licenseCC25": "2.5 Generic",
    "licenseCC20": "2.0 Generic",
    "licenseCC10": "1.0 Generic",
    "licenseGPL": "General Public License",
    "licenseV3": "Version 3",
    "licenseV2": "Version 2",
    "licenseV1": "Version 1",
    "licensePD": "Public Domain",
    "licenseCC010": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
    "licensePDM": "Public Domain Mark",
    "licenseC": "Copyright",
    "contentType": "Content Type",
    "licenseExtras": "License Extras",
    "changes": "Changelog",
    "contentCopied": "Content is copied to the clipboard",
    "connectionLost": "Connection lost. Results will be stored and sent when you regain connection.",
    "connectionReestablished": "Connection reestablished.",
    "resubmitScores": "Attempting to submit stored results.",
    "offlineDialogHeader": "Your connection to the server was lost",
    "offlineDialogBody": "We were unable to send information about your completion of this task. Please check your internet connection.",
    "offlineDialogRetryMessage": "Retrying in :num....",
    "offlineDialogRetryButtonLabel": "Retry now",
    "offlineSuccessfulSubmit": "Successfully submitted results."
  }
};
window.H5PIntegration = H5PIntegration;

/***/ }),

/***/ "./src/js/h5p-standalone.class.js":
/*!****************************************!*\
  !*** ./src/js/h5p-standalone.class.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return H5PStandalone; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var toposort_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! toposort-class */ "./node_modules/toposort-class/index.js");
/* harmony import */ var toposort_class__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(toposort_class__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var imports_loader_H5PIntegration_window_H5PIntegration_H5P__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! imports-loader?H5PIntegration=>window.H5PIntegration!H5P */ "./node_modules/imports-loader/index.js?H5PIntegration=>window.H5PIntegration!./vendor/h5p/js/h5p.js");
/* harmony import */ var imports_loader_H5PIntegration_window_H5PIntegration_H5P__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(imports_loader_H5PIntegration_window_H5PIntegration_H5P__WEBPACK_IMPORTED_MODULE_5__);






H5PIntegration = window.H5PIntegration;

var H5PStandalone =
/*#__PURE__*/
function () {
  function H5PStandalone(el) {
    var pathToContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'workspace';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var displayOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, H5PStandalone);

    this.id = options.id || Math.random().toString(36).substr(2, 9);
    this.path = pathToContent;
    this.initElement(el);
    return this.initH5P(options.frameCss, options.frameJs, displayOptions, options.preventH5PInit);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(H5PStandalone, [{
    key: "initElement",
    value: function initElement(el) {
      if (!(el instanceof HTMLElement)) {
        throw new Error('createH5P must be passed an element');
      }

      el.innerHTML = "<div class=\"h5p-iframe-wrapper\" style=\"background-color:#DDD;\">\n        <iframe id=\"h5p-iframe-".concat(this.id, "\" class=\"h5p-iframe\" data-content-id=\"").concat(this.id, "\" style=\"width: 100%; height: 100%; border: none; display: block;\" src=\"about:blank\" frameBorder=\"0\"></iframe>\n      </div>");
    }
  }, {
    key: "initH5P",
    value: function () {
      var _initH5P = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var frameCss,
            frameJs,
            displayOptions,
            preventH5PInit,
            content,
            dependencies,
            _this$sortDependencie,
            styles,
            scripts,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                frameCss = _args.length > 0 && _args[0] !== undefined ? _args[0] : './styles/h5p.css';
                frameJs = _args.length > 1 && _args[1] !== undefined ? _args[1] : './frame.bundle.js';
                displayOptions = _args.length > 2 ? _args[2] : undefined;
                preventH5PInit = _args.length > 3 ? _args[3] : undefined;
                _context.next = 6;
                return this.getJSON("".concat(this.path, "/h5p.json"));

              case 6:
                this.h5p = _context.sent;
                _context.next = 9;
                return this.getJSON("".concat(this.path, "/content/content.json"));

              case 9:
                content = _context.sent;
                _context.next = 12;
                return this.checkIfPathIncludesVersion();

              case 12:
                H5PIntegration.pathIncludesVersion = this.pathIncludesVersion = _context.sent;
                _context.next = 15;
                return this.findMainLibrary();

              case 15:
                this.mainLibrary = _context.sent;
                _context.next = 18;
                return this.findAllDependencies();

              case 18:
                dependencies = _context.sent;
                _this$sortDependencie = this.sortDependencies(dependencies), styles = _this$sortDependencie.styles, scripts = _this$sortDependencie.scripts;
                H5PIntegration.url = this.path;
                H5PIntegration.contents = H5PIntegration.contents ? H5PIntegration.contents : {};
                H5PIntegration.core = {
                  styles: [frameCss],
                  scripts: [frameJs]
                };
                H5PIntegration.contents["cid-".concat(this.id)] = {
                  library: "".concat(this.mainLibrary.machineName, " ").concat(this.mainLibrary.majorVersion, ".").concat(this.mainLibrary.minorVersion),
                  jsonContent: JSON.stringify(content),
                  styles: styles,
                  scripts: scripts,
                  displayOptions: displayOptions
                }; // if (!preventH5PInit) {

                imports_loader_H5PIntegration_window_H5PIntegration_H5P__WEBPACK_IMPORTED_MODULE_5___default.a.init(); // }

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initH5P() {
        return _initH5P.apply(this, arguments);
      }

      return initH5P;
    }()
  }, {
    key: "getJSON",
    value: function getJSON(url) {
      return fetch(url).then(function (res) {
        return res.json();
      });
    }
    /**
     * Check if the library folder include the version or not
     * This was changed at some point in H5P and we need to be backwards compatible
     * 
     * @return {boolean}
     */

  }, {
    key: "checkIfPathIncludesVersion",
    value: function () {
      var _checkIfPathIncludesVersion = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var dependency, machinePath, pathIncludesVersion;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dependency = this.h5p.preloadedDependencies[0];
                machinePath = dependency.machineName + "-" + dependency.majorVersion + "." + dependency.minorVersion;
                _context2.prev = 2;
                _context2.next = 5;
                return this.getJSON("".concat(this.path, "/").concat(machinePath, "/library.json"));

              case 5:
                pathIncludesVersion = true;
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                pathIncludesVersion = false;

              case 11:
                return _context2.abrupt("return", pathIncludesVersion);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 8]]);
      }));

      function checkIfPathIncludesVersion() {
        return _checkIfPathIncludesVersion.apply(this, arguments);
      }

      return checkIfPathIncludesVersion;
    }()
    /**
     * return the path to a library
     * @param {object} library
     * @return {string}
     */

  }, {
    key: "libraryPath",
    value: function libraryPath(library) {
      return library.machineName + (this.pathIncludesVersion ? "-" + library.majorVersion + "." + library.minorVersion : '');
    }
    /**
     * FInd the main library for this H5P
     * @return {Promise}
     */

  }, {
    key: "findMainLibrary",
    value: function findMainLibrary() {
      var _this = this;

      var mainLibraryInfo = this.h5p.preloadedDependencies.find(function (dep) {
        return dep.machineName === _this.h5p.mainLibrary;
      });
      this.mainLibraryPath = this.h5p.mainLibrary + (this.pathIncludesVersion ? "-" + mainLibraryInfo.majorVersion + "." + mainLibraryInfo.minorVersion : '');
      return this.getJSON("".concat(this.path, "/").concat(this.mainLibraryPath, "/library.json"));
    }
    /**
     * find all the libraries used in this H5P
     * @return {Promise}
     */

  }, {
    key: "findAllDependencies",
    value: function findAllDependencies() {
      var _this2 = this;

      var directDependencyNames = this.h5p.preloadedDependencies.map(function (dependency) {
        return _this2.libraryPath(dependency);
      });
      return this.loadDependencies(directDependencyNames, []);
    }
    /**
     * searches through all supplied libraries for dependencies, this is recursive and repeats until all deep dependencies have been found
     * @param {string[]} toFind list of libraries to find the dependencies of
     * @param {string[]} alreadyFound the dependencies that have already been found
     */

  }, {
    key: "loadDependencies",
    value: function () {
      var _loadDependencies = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(toFind, alreadyFound) {
        var _this3 = this;

        var dependencies, findNext, newDependencies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // console.log(`loading dependency level: ${dependencyDepth}`);
                // dependencyDepth++;
                dependencies = alreadyFound;
                findNext = [];
                _context3.next = 4;
                return Promise.all(toFind.map(function (libraryName) {
                  return _this3.findLibraryDependencies(libraryName);
                }));

              case 4:
                newDependencies = _context3.sent;
                // loop over newly found libraries
                newDependencies.forEach(function (library) {
                  // push into found list
                  dependencies.push(library); // check if any dependencies haven't been found yet

                  library.dependencies.forEach(function (dependency) {
                    if (!dependencies.find(function (foundLibrary) {
                      return foundLibrary.libraryPath === dependency;
                    }) && !newDependencies.find(function (foundLibrary) {
                      return foundLibrary.libraryPath === dependency;
                    })) {
                      findNext.push(dependency);
                    }
                  });
                });

                if (!(findNext.length > 0)) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", this.loadDependencies(findNext, dependencies));

              case 8:
                return _context3.abrupt("return", dependencies);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadDependencies(_x, _x2) {
        return _loadDependencies.apply(this, arguments);
      }

      return loadDependencies;
    }()
    /**
     * Loads a dependencies library.json and finds the libraries it dependson as well ass the JS and CSS it needs
     * @param {string} libraryName 
     */

  }, {
    key: "findLibraryDependencies",
    value: function () {
      var _findLibraryDependencies = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(libraryName) {
        var _this4 = this;

        var library, libraryPath, dependencies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getJSON("".concat(this.path, "/").concat(libraryName, "/library.json"));

              case 2:
                library = _context4.sent;
                libraryPath = this.libraryPath(library);
                dependencies = [];

                if (library.preloadedDependencies) {
                  dependencies = library.preloadedDependencies.map(function (dependency) {
                    return _this4.libraryPath(dependency);
                  });
                }

                return _context4.abrupt("return", {
                  libraryPath: libraryPath,
                  dependencies: dependencies,
                  preloadedCss: library.preloadedCss,
                  preloadedJs: library.preloadedJs
                });

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function findLibraryDependencies(_x3) {
        return _findLibraryDependencies.apply(this, arguments);
      }

      return findLibraryDependencies;
    }()
    /**
     * Resolves the library dependency tree and sorts the JS and CSS files into order
     * @param {object[]} dependencies 
     * @return {object}
     */

  }, {
    key: "sortDependencies",
    value: function sortDependencies(dependencies) {
      var _this5 = this;

      var dependencySorter = new toposort_class__WEBPACK_IMPORTED_MODULE_4___default.a();
      var CSSDependencies = {};
      var JSDependencies = {};
      dependencies.forEach(function (dependency) {
        dependencySorter.add(dependency.libraryPath, dependency.dependencies);

        if (dependency.preloadedCss) {
          CSSDependencies[dependency.libraryPath] = CSSDependencies[dependency.libraryPath] ? CSSDependencies[dependency.libraryPath] : [];
          dependency.preloadedCss.forEach(function (style) {
            CSSDependencies[dependency.libraryPath].push("".concat(_this5.path, "/").concat(dependency.libraryPath, "/").concat(style.path));
          });
        }

        if (dependency.preloadedJs) {
          JSDependencies[dependency.libraryPath] = JSDependencies[dependency.libraryPath] ? JSDependencies[dependency.libraryPath] : [];
          dependency.preloadedJs.forEach(function (script) {
            JSDependencies[dependency.libraryPath].push("".concat(_this5.path, "/").concat(dependency.libraryPath, "/").concat(script.path));
          });
        }
      });
      var styles = [];
      var scripts = [];
      dependencySorter.sort().reverse().forEach(function (dependencyName) {
        Array.prototype.push.apply(styles, CSSDependencies[dependencyName]);
        Array.prototype.push.apply(scripts, JSDependencies[dependencyName]);
      });
      Array.prototype.push.apply(styles, this.mainLibrary.preloadedCss.map(function (style) {
        return "".concat(_this5.path, "/").concat(_this5.mainLibraryPath, "/").concat(style.path);
      }));
      Array.prototype.push.apply(scripts, this.mainLibrary.preloadedJs.map(function (script) {
        return "".concat(_this5.path, "/").concat(_this5.mainLibraryPath, "/").concat(script.path);
      }));
      return {
        styles: styles,
        scripts: scripts
      };
    }
  }]);

  return H5PStandalone;
}();



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _h5p_integration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h5p-integration */ "./src/js/h5p-integration.js");
/* harmony import */ var _h5p_integration__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_h5p_integration__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _h5p_standalone_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h5p-standalone.class */ "./src/js/h5p-standalone.class.js");
/* harmony import */ var H5PEventDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! H5PEventDispatcher */ "./vendor/h5p/js/h5p-event-dispatcher.js");
/* harmony import */ var H5PEventDispatcher__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(H5PEventDispatcher__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var H5PxAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! H5PxAPI */ "./vendor/h5p/js/h5p-x-api.js");
/* harmony import */ var H5PxAPI__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(H5PxAPI__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var H5PxAPIEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! H5PxAPIEvent */ "./vendor/h5p/js/h5p-x-api-event.js");
/* harmony import */ var H5PxAPIEvent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(H5PxAPIEvent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var H5PContentType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! H5PContentType */ "./vendor/h5p/js/h5p-content-type.js");
/* harmony import */ var H5PContentType__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(H5PContentType__WEBPACK_IMPORTED_MODULE_5__);






window.H5P.preventInit = true;
/* harmony default export */ __webpack_exports__["default"] = ({
  H5P: _h5p_standalone_class__WEBPACK_IMPORTED_MODULE_1__["default"]
});

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


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9INVBTdGFuZGFsb25lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9INVBTdGFuZGFsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0g1UFN0YW5kYWxvbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL0g1UFN0YW5kYWxvbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9INVBTdGFuZGFsb25lLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSDVQU3RhbmRhbG9uZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9INVBTdGFuZGFsb25lLy4vdmVuZG9yL2g1cC9qcy9oNXAuanMiLCJ3ZWJwYWNrOi8vSDVQU3RhbmRhbG9uZS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSDVQU3RhbmRhbG9uZS8uL25vZGVfbW9kdWxlcy90b3Bvc29ydC1jbGFzcy9idWlsZC90b3Bvc29ydC5qcyIsIndlYnBhY2s6Ly9INVBTdGFuZGFsb25lLy4vbm9kZV9tb2R1bGVzL3RvcG9zb3J0LWNsYXNzL2luZGV4LmpzIiwid2VicGFjazovL0g1UFN0YW5kYWxvbmUvKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSDVQU3RhbmRhbG9uZS8uL3NyYy9qcy9oNXAtaW50ZWdyYXRpb24uanMiLCJ3ZWJwYWNrOi8vSDVQU3RhbmRhbG9uZS8uL3NyYy9qcy9oNXAtc3RhbmRhbG9uZS5jbGFzcy5qcyIsIndlYnBhY2s6Ly9INVBTdGFuZGFsb25lLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovL0g1UFN0YW5kYWxvbmUvLi92ZW5kb3IvaDVwL2pzL2g1cC1jb250ZW50LXR5cGUuanMiLCJ3ZWJwYWNrOi8vSDVQU3RhbmRhbG9uZS8uL3ZlbmRvci9oNXAvanMvaDVwLWV2ZW50LWRpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vSDVQU3RhbmRhbG9uZS8uL3ZlbmRvci9oNXAvanMvaDVwLXgtYXBpLWV2ZW50LmpzIiwid2VicGFjazovL0g1UFN0YW5kYWxvbmUvLi92ZW5kb3IvaDVwL2pzL2g1cC14LWFwaS5qcyIsIndlYnBhY2s6Ly9INVBTdGFuZGFsb25lLy4vdmVuZG9yL2g1cC9qcy9qcXVlcnkuanMiXSwibmFtZXMiOlsiSDVQSW50ZWdyYXRpb24iLCJsMTBuIiwiSDVQIiwid2luZG93IiwiSDVQU3RhbmRhbG9uZSIsImVsIiwicGF0aFRvQ29udGVudCIsIm9wdGlvbnMiLCJkaXNwbGF5T3B0aW9ucyIsImlkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwicGF0aCIsImluaXRFbGVtZW50IiwiaW5pdEg1UCIsImZyYW1lQ3NzIiwiZnJhbWVKcyIsInByZXZlbnRINVBJbml0IiwiSFRNTEVsZW1lbnQiLCJFcnJvciIsImlubmVySFRNTCIsImdldEpTT04iLCJoNXAiLCJjb250ZW50IiwiY2hlY2tJZlBhdGhJbmNsdWRlc1ZlcnNpb24iLCJwYXRoSW5jbHVkZXNWZXJzaW9uIiwiZmluZE1haW5MaWJyYXJ5IiwibWFpbkxpYnJhcnkiLCJmaW5kQWxsRGVwZW5kZW5jaWVzIiwiZGVwZW5kZW5jaWVzIiwic29ydERlcGVuZGVuY2llcyIsInN0eWxlcyIsInNjcmlwdHMiLCJ1cmwiLCJjb250ZW50cyIsImNvcmUiLCJsaWJyYXJ5IiwibWFjaGluZU5hbWUiLCJtYWpvclZlcnNpb24iLCJtaW5vclZlcnNpb24iLCJqc29uQ29udGVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbml0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRlcGVuZGVuY3kiLCJwcmVsb2FkZWREZXBlbmRlbmNpZXMiLCJtYWNoaW5lUGF0aCIsIm1haW5MaWJyYXJ5SW5mbyIsImZpbmQiLCJkZXAiLCJtYWluTGlicmFyeVBhdGgiLCJkaXJlY3REZXBlbmRlbmN5TmFtZXMiLCJtYXAiLCJsaWJyYXJ5UGF0aCIsImxvYWREZXBlbmRlbmNpZXMiLCJ0b0ZpbmQiLCJhbHJlYWR5Rm91bmQiLCJmaW5kTmV4dCIsIlByb21pc2UiLCJhbGwiLCJsaWJyYXJ5TmFtZSIsImZpbmRMaWJyYXJ5RGVwZW5kZW5jaWVzIiwibmV3RGVwZW5kZW5jaWVzIiwiZm9yRWFjaCIsInB1c2giLCJmb3VuZExpYnJhcnkiLCJsZW5ndGgiLCJwcmVsb2FkZWRDc3MiLCJwcmVsb2FkZWRKcyIsImRlcGVuZGVuY3lTb3J0ZXIiLCJUb3Bvc29ydCIsIkNTU0RlcGVuZGVuY2llcyIsIkpTRGVwZW5kZW5jaWVzIiwiYWRkIiwic3R5bGUiLCJzY3JpcHQiLCJzb3J0IiwicmV2ZXJzZSIsImRlcGVuZGVuY3lOYW1lIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsInByZXZlbnRJbml0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlD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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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eUJBQXlCLDJCQUEyQiwyQ0FBMkMsZ0ZBQWdGLDRCQUE0QixHQUFHLFVBQVUsaURBQWlELGVBQWUsa0JBQWtCLG9CQUFvQixxQ0FBcUMsWUFBWSxrSUFBa0ksNkJBQTZCLEVBQUUsZUFBZSx1RUFBdUUsUUFBUSw4QkFBOEIsZUFBZSxRQUFRLHlDQUF5QyxlQUFlLHNCQUFzQix5RkFBeUYscUNBQXFDLE1BQU0sK05BQStOLGtCQUFrQixFQUFFLGlCQUFpQixLQUFxQyxFQUFFLGdHQUFVLFNBQVMsaUNBQWdCLEVBQUUsbUNBQUMsV0FBVyxTQUFTO0FBQUEsb0dBQUMsQ0FBQzs7QUFFN3UzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaDVwLXN0YW5kYWxvbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSDVQU3RhbmRhbG9uZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG52YXIgSDVQSW50ZWdyYXRpb24gPSB3aW5kb3cuSDVQSW50ZWdyYXRpb247XG5cbi8qKiogSU1QT1JUUyBGUk9NIGltcG9ydHMtbG9hZGVyICoqKi9cbnZhciBqUXVlcnkgPSByZXF1aXJlKFwiaDVwanF1ZXJ5XCIpO1xuXG4vKmpzaGludCBtdWx0aXN0cjogdHJ1ZSAqL1xuLy8gVE9ETzogU2hvdWxkIHdlIHNwbGl0IHVwIHRoZSBnZW5lcmljIHBhcnRzIG5lZWRlZCBieSB0aGUgZWRpdG9yKGFuZCBvdGhlcnMpLCBhbmQgdGhlIHBhcnRzIG5lZWRlZCB0byBcInJ1blwiIEg1UHM/XG5cbi8qKiBAbmFtZXNwYWNlICovXG52YXIgSDVQID0gd2luZG93Lkg1UCA9IHdpbmRvdy5INVAgfHwge307XG5cbi8qKlxuICogVGVsbHMgdXMgaWYgd2UncmUgaW5zaWRlIG9mIGFuIGlmcmFtZS5cbiAqIEBtZW1iZXIge2Jvb2xlYW59XG4gKi9cbkg1UC5pc0ZyYW1lZCA9ICh3aW5kb3cuc2VsZiAhPT0gd2luZG93LnBhcmVudCk7XG5cbi8qKlxuICogalF1ZXJ5IGluc3RhbmNlIG9mIGN1cnJlbnQgd2luZG93LlxuICogQG1lbWJlciB7SDVQLmpRdWVyeX1cbiAqL1xuSDVQLiR3aW5kb3cgPSBINVAualF1ZXJ5KHdpbmRvdyk7XG5cbi8qKlxuICogTGlzdCBvdmVyIEg1UCBpbnN0YW5jZXMgb24gdGhlIGN1cnJlbnQgcGFnZS5cbiAqIEBtZW1iZXIge0FycmF5fVxuICovXG5INVAuaW5zdGFuY2VzID0gW107XG5cbi8vIERldGVjdCBpZiB3ZSBzdXBwb3J0IGZ1bGxzY3JlZW4sIGFuZCB3aGF0IHByZWZpeCB0byB1c2UuXG5pZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gIC8qKlxuICAgKiBCcm93c2VyIHByZWZpeCB0byB1c2Ugd2hlbiBlbnRlcmluZyBmdWxsc2NyZWVuIG1vZGUuXG4gICAqIHVuZGVmaW5lZCBtZWFucyBubyBmdWxsc2NyZWVuIHN1cHBvcnQuXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIEg1UC5mdWxsU2NyZWVuQnJvd3NlclByZWZpeCA9ICcnO1xufVxuZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gIEg1UC5zYWZhcmlCcm93c2VyID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvdmVyc2lvblxcLyhbLlxcZF0rKS9pKTtcbiAgSDVQLnNhZmFyaUJyb3dzZXIgPSAoSDVQLnNhZmFyaUJyb3dzZXIgPT09IG51bGwgPyAwIDogcGFyc2VJbnQoSDVQLnNhZmFyaUJyb3dzZXJbMV0pKTtcblxuICAvLyBEbyBub3QgYWxsb3cgZnVsbHNjcmVlbiBmb3Igc2FmYXJpIDwgNy5cbiAgaWYgKEg1UC5zYWZhcmlCcm93c2VyID09PSAwIHx8IEg1UC5zYWZhcmlCcm93c2VyID4gNikge1xuICAgIEg1UC5mdWxsU2NyZWVuQnJvd3NlclByZWZpeCA9ICd3ZWJraXQnO1xuICB9XG59XG5lbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgSDVQLmZ1bGxTY3JlZW5Ccm93c2VyUHJlZml4ID0gJ21veic7XG59XG5lbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICBINVAuZnVsbFNjcmVlbkJyb3dzZXJQcmVmaXggPSAnbXMnO1xufVxuXG4vKipcbiAqIEtlZXAgdHJhY2sgb2Ygd2hlbiB0aGUgSDVQcyB3aGVyZSBzdGFydGVkLlxuICpcbiAqIEB0eXBlIHtPYmplY3RbXX1cbiAqL1xuSDVQLm9wZW5lZCA9IHt9O1xuXG4vKipcbiAqIEluaXRpYWxpemUgSDVQIGNvbnRlbnQuXG4gKiBTY2FucyBmb3IgXCIuaDVwLWNvbnRlbnRcIiBpbiB0aGUgZG9jdW1lbnQgYW5kIGluaXRpYWxpemVzIEg1UCBpbnN0YW5jZXMgd2hlcmUgZm91bmQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBET00gRWxlbWVudFxuICovXG5INVAuaW5pdCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgLy8gVXNlZnVsIGpRdWVyeSBvYmplY3QuXG4gIGlmIChINVAuJGJvZHkgPT09IHVuZGVmaW5lZCkge1xuICAgIEg1UC4kYm9keSA9IEg1UC5qUXVlcnkoZG9jdW1lbnQuYm9keSk7XG4gIH1cblxuICAvLyBEZXRlcm1pbmUgaWYgd2UgY2FuIHVzZSBmdWxsIHNjcmVlblxuICBpZiAoSDVQLmZ1bGxzY3JlZW5TdXBwb3J0ZWQgPT09IHVuZGVmaW5lZCkge1xuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIHZhcmlhYmxlIHRvIGNoZWNrIGlmIGZ1bGxzY3JlZW4gaXMgc3VwcG9ydGVkLiBGdWxsc2NyZWVuIGNhbiBiZVxuICAgICAqIHJlc3RyaWN0ZWQgd2hlbiBlbWJlZGRpbmcgc2luY2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IHRoZSBuYXRpdmVcbiAgICAgKiBmdWxsc2NyZWVuLCBhbmQgdGhlIHNlbWktZnVsbHNjcmVlbiBzb2x1dGlvbiBkb2Vzbid0IHdvcmsgd2hlbiBlbWJlZGRlZC5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBINVAuZnVsbHNjcmVlblN1cHBvcnRlZCA9ICFINVBJbnRlZ3JhdGlvbi5mdWxsc2NyZWVuRGlzYWJsZWQgJiYgIUg1UC5mdWxsc2NyZWVuRGlzYWJsZWQgJiYgKCEoSDVQLmlzRnJhbWVkICYmIEg1UC5leHRlcm5hbEVtYmVkICE9PSBmYWxzZSkgfHwgISEoZG9jdW1lbnQuZnVsbHNjcmVlbkVuYWJsZWQgfHwgZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVuYWJsZWQgfHwgZG9jdW1lbnQubW96RnVsbFNjcmVlbkVuYWJsZWQpKTtcbiAgICAvLyAtV2Ugc2hvdWxkIGNvbnNpZGVyIGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVuYWJsZWQgd2hlbiB0aGV5IGdldCB0aGVpclxuICAgIC8vIC1lbGVtZW50IHNpemluZyBjb3JyZWN0ZWQuIFJlZi4gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy84MzgyODYvaWUtMTEtaW5jb3JyZWN0bHktcmVwb3J0cy1kb20tZWxlbWVudC1zaXplcy1pbi1mdWxsc2NyZWVuLW1vZGUtd2hlbi1mdWxsc2NyZWVuZWQtZWxlbWVudC1pcy13aXRoaW4tYW4taWZyYW1lXG4gICAgLy8gVXBkYXRlOiBTZWVtcyB0byBiZSBubyBuZWVkIGFzIHRoZXkndmUgbW92ZWQgb24gdG8gV2Via2l0XG4gIH1cblxuICAvLyBEZXByZWNhdGVkIHZhcmlhYmxlLCBrZXB0IHRvIG1haW50YWluIGJhY2t3YXJkcyBjb21wYXRhYmlsaXR5XG4gIGlmIChINVAuY2FuSGFzRnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjExXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgSDVQLmNhbkhhc0Z1bGxTY3JlZW4gPSBINVAuZnVsbHNjcmVlblN1cHBvcnRlZDtcbiAgfVxuXG4gIC8vIEg1UHMgYWRkZWQgaW4gbm9ybWFsIERJVi5cbiAgSDVQLmpRdWVyeSgnLmg1cC1jb250ZW50Om5vdCguaDVwLWluaXRpYWxpemVkKScsIHRhcmdldCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRlbGVtZW50ID0gSDVQLmpRdWVyeSh0aGlzKS5hZGRDbGFzcygnaDVwLWluaXRpYWxpemVkJyk7XG4gICAgdmFyICRjb250YWluZXIgPSBINVAualF1ZXJ5KCc8ZGl2IGNsYXNzPVwiaDVwLWNvbnRhaW5lclwiPjwvZGl2PicpLmFwcGVuZFRvKCRlbGVtZW50KTtcbiAgICB2YXIgY29udGVudElkID0gJGVsZW1lbnQuZGF0YSgnY29udGVudC1pZCcpO1xuICAgIHZhciBjb250ZW50RGF0YSA9IEg1UEludGVncmF0aW9uLmNvbnRlbnRzWydjaWQtJyArIGNvbnRlbnRJZF07XG4gICAgaWYgKGNvbnRlbnREYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBINVAuZXJyb3IoJ05vIGRhdGEgZm9yIGNvbnRlbnQgaWQgJyArIGNvbnRlbnRJZCArICcuIFBlcmhhcHMgdGhlIGxpYnJhcnkgaXMgZ29uZT8nKTtcbiAgICB9XG4gICAgdmFyIGxpYnJhcnkgPSB7XG4gICAgICBsaWJyYXJ5OiBjb250ZW50RGF0YS5saWJyYXJ5LFxuICAgICAgcGFyYW1zOiBKU09OLnBhcnNlKGNvbnRlbnREYXRhLmpzb25Db250ZW50KSxcbiAgICAgIG1ldGFkYXRhOiBjb250ZW50RGF0YS5tZXRhZGF0YVxuICAgIH07XG5cbiAgICBINVAuZ2V0VXNlckRhdGEoY29udGVudElkLCAnc3RhdGUnLCBmdW5jdGlvbiAoZXJyLCBwcmV2aW91c1N0YXRlKSB7XG4gICAgICBpZiAocHJldmlvdXNTdGF0ZSkge1xuICAgICAgICBsaWJyYXJ5LnVzZXJEYXRhcyA9IHtcbiAgICAgICAgICBzdGF0ZTogcHJldmlvdXNTdGF0ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocHJldmlvdXNTdGF0ZSA9PT0gbnVsbCAmJiBINVBJbnRlZ3JhdGlvbi5zYXZlRnJlcSkge1xuICAgICAgICAvLyBDb250ZW50IGhhcyBiZWVuIHJlc2V0LiBEaXNwbGF5IGRpYWxvZy5cbiAgICAgICAgZGVsZXRlIGNvbnRlbnREYXRhLmNvbnRlbnRVc2VyRGF0YTtcbiAgICAgICAgdmFyIGRpYWxvZyA9IG5ldyBINVAuRGlhbG9nKCdjb250ZW50LXVzZXItZGF0YS1yZXNldCcsICdEYXRhIFJlc2V0JywgJzxwPicgKyBINVAudCgnY29udGVudENoYW5nZWQnKSArICc8L3A+PHA+JyArIEg1UC50KCdzdGFydGluZ092ZXInKSArICc8L3A+PGRpdiBjbGFzcz1cImg1cC1kaWFsb2ctb2stYnV0dG9uXCIgdGFiSW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvblwiPk9LPC9kaXY+JywgJGNvbnRhaW5lcik7XG4gICAgICAgIEg1UC5qUXVlcnkoZGlhbG9nKS5vbignZGlhbG9nLW9wZW5lZCcsIGZ1bmN0aW9uIChldmVudCwgJGRpYWxvZykge1xuXG4gICAgICAgICAgdmFyIGNsb3NlRGlhbG9nID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyB8fCBldmVudC53aGljaCA9PT0gMzIpIHtcbiAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgIEg1UC5kZWxldGVVc2VyRGF0YShjb250ZW50SWQsICdzdGF0ZScsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAkZGlhbG9nLmZpbmQoJy5oNXAtZGlhbG9nLW9rLWJ1dHRvbicpLmNsaWNrKGNsb3NlRGlhbG9nKS5rZXlwcmVzcyhjbG9zZURpYWxvZyk7XG4gICAgICAgICAgSDVQLnRyaWdnZXIoaW5zdGFuY2UsICdyZXNpemUnKTtcbiAgICAgICAgfSkub24oJ2RpYWxvZy1jbG9zZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgSDVQLnRyaWdnZXIoaW5zdGFuY2UsICdyZXNpemUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRpYWxvZy5vcGVuKCk7XG4gICAgICB9XG4gICAgICAvLyBJZiBwcmV2aW91c1N0YXRlIGlzIGZhbHNlIHdlIGRvbid0IGhhdmUgYSBwcmV2aW91cyBzdGF0ZVxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIG5ldyBpbnN0YW5jZS5cbiAgICB2YXIgaW5zdGFuY2UgPSBINVAubmV3UnVubmFibGUobGlicmFyeSwgY29udGVudElkLCAkY29udGFpbmVyLCB0cnVlLCB7c3RhbmRhbG9uZTogdHJ1ZX0pO1xuXG4gICAgSDVQLm9mZmxpbmVSZXF1ZXN0UXVldWUgPSBuZXcgSDVQLk9mZmxpbmVSZXF1ZXN0UXVldWUoe2luc3RhbmNlOiBpbnN0YW5jZX0pO1xuXG4gICAgLy8gQ2hlY2sgaWYgd2Ugc2hvdWxkIGFkZCBhbmQgZGlzcGxheSBhIGZ1bGxzY3JlZW4gYnV0dG9uIGZvciB0aGlzIEg1UC5cbiAgICBpZiAoY29udGVudERhdGEuZnVsbFNjcmVlbiA9PSAxICYmIEg1UC5mdWxsc2NyZWVuU3VwcG9ydGVkKSB7XG4gICAgICBINVAualF1ZXJ5KFxuICAgICAgICAnPGRpdiBjbGFzcz1cImg1cC1jb250ZW50LWNvbnRyb2xzXCI+JyArXG4gICAgICAgICAgJzxkaXYgcm9sZT1cImJ1dHRvblwiICcgK1xuICAgICAgICAgICAgICAgICd0YWJpbmRleD1cIjBcIiAnICtcbiAgICAgICAgICAgICAgICAnY2xhc3M9XCJoNXAtZW5hYmxlLWZ1bGxzY3JlZW5cIiAnICtcbiAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbD1cIicgKyBINVAudCgnZnVsbHNjcmVlbicpICsgJ1wiICcgK1xuICAgICAgICAgICAgICAgICd0aXRsZT1cIicgKyBINVAudCgnZnVsbHNjcmVlbicpICsgJ1wiPicgK1xuICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgJzwvZGl2PicpXG4gICAgICAgIC5wcmVwZW5kVG8oJGNvbnRhaW5lcilcbiAgICAgICAgICAuY2hpbGRyZW4oKVxuICAgICAgICAgIC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBINVAuZnVsbFNjcmVlbigkY29udGFpbmVyLCBpbnN0YW5jZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgLmtleWRvd24oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoZS53aGljaCA9PT0gMzIgfHwgZS53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgICAgIEg1UC5mdWxsU2NyZWVuKCRjb250YWluZXIsIGluc3RhbmNlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFjdGlvbiBiYXJcbiAgICAgKi9cbiAgICB2YXIgZGlzcGxheU9wdGlvbnMgPSBjb250ZW50RGF0YS5kaXNwbGF5T3B0aW9ucztcbiAgICB2YXIgZGlzcGxheUZyYW1lID0gZmFsc2U7XG4gICAgaWYgKGRpc3BsYXlPcHRpb25zLmZyYW1lKSB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNvcHlyaWdodHNcbiAgICAgIGlmIChkaXNwbGF5T3B0aW9ucy5jb3B5cmlnaHQpIHtcbiAgICAgICAgdmFyIGNvcHlyaWdodHMgPSBINVAuZ2V0Q29weXJpZ2h0cyhpbnN0YW5jZSwgbGlicmFyeS5wYXJhbXMsIGNvbnRlbnRJZCwgbGlicmFyeS5tZXRhZGF0YSk7XG4gICAgICAgIGlmICghY29weXJpZ2h0cykge1xuICAgICAgICAgIGRpc3BsYXlPcHRpb25zLmNvcHlyaWdodCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBhY3Rpb24gYmFyXG4gICAgICB2YXIgYWN0aW9uQmFyID0gbmV3IEg1UC5BY3Rpb25CYXIoZGlzcGxheU9wdGlvbnMpO1xuICAgICAgdmFyICRhY3Rpb25zID0gYWN0aW9uQmFyLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgYWN0aW9uQmFyLm9uKCdyZXVzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgSDVQLm9wZW5SZXVzZURpYWxvZygkYWN0aW9ucywgY29udGVudERhdGEsIGxpYnJhcnksIGluc3RhbmNlLCBjb250ZW50SWQpO1xuICAgICAgICBpbnN0YW5jZS50cmlnZ2VyWEFQSSgnYWNjZXNzZWQtcmV1c2UnKTtcbiAgICAgIH0pO1xuICAgICAgYWN0aW9uQmFyLm9uKCdjb3B5cmlnaHRzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGlhbG9nID0gbmV3IEg1UC5EaWFsb2coJ2NvcHlyaWdodHMnLCBINVAudCgnY29weXJpZ2h0SW5mb3JtYXRpb24nKSwgY29weXJpZ2h0cywgJGNvbnRhaW5lcik7XG4gICAgICAgIGRpYWxvZy5vcGVuKHRydWUpO1xuICAgICAgICBpbnN0YW5jZS50cmlnZ2VyWEFQSSgnYWNjZXNzZWQtY29weXJpZ2h0Jyk7XG4gICAgICB9KTtcbiAgICAgIGFjdGlvbkJhci5vbignZW1iZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEg1UC5vcGVuRW1iZWREaWFsb2coJGFjdGlvbnMsIGNvbnRlbnREYXRhLmVtYmVkQ29kZSwgY29udGVudERhdGEucmVzaXplQ29kZSwge1xuICAgICAgICAgIHdpZHRoOiAkZWxlbWVudC53aWR0aCgpLFxuICAgICAgICAgIGhlaWdodDogJGVsZW1lbnQuaGVpZ2h0KClcbiAgICAgICAgfSwgaW5zdGFuY2UpO1xuICAgICAgICBpbnN0YW5jZS50cmlnZ2VyWEFQSSgnYWNjZXNzZWQtZW1iZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYWN0aW9uQmFyLmhhc0FjdGlvbnMoKSkge1xuICAgICAgICBkaXNwbGF5RnJhbWUgPSB0cnVlO1xuICAgICAgICAkYWN0aW9ucy5pbnNlcnRBZnRlcigkY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkZWxlbWVudC5hZGRDbGFzcyhkaXNwbGF5RnJhbWUgPyAnaDVwLWZyYW1lJyA6ICdoNXAtbm8tZnJhbWUnKTtcblxuICAgIC8vIEtlZXAgdHJhY2sgb2Ygd2hlbiB3ZSBzdGFydGVkXG4gICAgSDVQLm9wZW5lZFtjb250ZW50SWRdID0gbmV3IERhdGUoKTtcblxuICAgIC8vIEhhbmRsZSBldmVudHMgd2hlbiB0aGUgdXNlciBmaW5pc2hlcyB0aGUgY29udGVudC4gVXNlZnVsIGZvciBsb2dnaW5nIGV4ZXJjaXNlIHJlc3VsdHMuXG4gICAgSDVQLm9uKGluc3RhbmNlLCAnZmluaXNoJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIEg1UC5zZXRGaW5pc2hlZChjb250ZW50SWQsIGV2ZW50LmRhdGEuc2NvcmUsIGV2ZW50LmRhdGEubWF4U2NvcmUsIGV2ZW50LmRhdGEudGltZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHhBUEkgZXZlbnRzLlxuICAgIEg1UC5vbihpbnN0YW5jZSwgJ3hBUEknLCBINVAueEFQSUNvbXBsZXRlZExpc3RlbmVyKTtcblxuICAgIC8vIEF1dG8gc2F2ZSBjdXJyZW50IHN0YXRlIGlmIHN1cHBvcnRlZFxuICAgIGlmIChINVBJbnRlZ3JhdGlvbi5zYXZlRnJlcSAhPT0gZmFsc2UgJiYgKFxuICAgICAgICBpbnN0YW5jZS5nZXRDdXJyZW50U3RhdGUgaW5zdGFuY2VvZiBGdW5jdGlvbiB8fFxuICAgICAgICB0eXBlb2YgaW5zdGFuY2UuZ2V0Q3VycmVudFN0YXRlID09PSAnZnVuY3Rpb24nKSkge1xuXG4gICAgICB2YXIgc2F2ZVRpbWVyLCBzYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSBpbnN0YW5jZS5nZXRDdXJyZW50U3RhdGUoKTtcbiAgICAgICAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBINVAuc2V0VXNlckRhdGEoY29udGVudElkLCAnc3RhdGUnLCBzdGF0ZSwge2RlbGV0ZU9uQ2hhbmdlOiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEg1UEludGVncmF0aW9uLnNhdmVGcmVxKSB7XG4gICAgICAgICAgLy8gQ29udGludWUgYXV0b3NhdmVcbiAgICAgICAgICBzYXZlVGltZXIgPSBzZXRUaW1lb3V0KHNhdmUsIEg1UEludGVncmF0aW9uLnNhdmVGcmVxICogMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChINVBJbnRlZ3JhdGlvbi5zYXZlRnJlcSkge1xuICAgICAgICAvLyBTdGFydCBhdXRvc2F2ZVxuICAgICAgICBzYXZlVGltZXIgPSBzZXRUaW1lb3V0KHNhdmUsIEg1UEludGVncmF0aW9uLnNhdmVGcmVxICogMTAwMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHhBUEkgZXZlbnRzIHdpbGwgc2NoZWR1bGUgYSBzYXZlIGluIHRocmVlIHNlY29uZHMuXG4gICAgICBINVAub24oaW5zdGFuY2UsICd4QVBJJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB2ZXJiID0gZXZlbnQuZ2V0VmVyYigpO1xuICAgICAgICBpZiAodmVyYiA9PT0gJ2NvbXBsZXRlZCcgfHwgdmVyYiA9PT0gJ3Byb2dyZXNzZWQnKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHNhdmVUaW1lcik7XG4gICAgICAgICAgc2F2ZVRpbWVyID0gc2V0VGltZW91dChzYXZlLCAzMDAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKEg1UC5pc0ZyYW1lZCkge1xuICAgICAgdmFyIHJlc2l6ZURlbGF5O1xuICAgICAgaWYgKEg1UC5leHRlcm5hbEVtYmVkID09PSBmYWxzZSkge1xuICAgICAgICAvLyBJbnRlcm5hbCBlbWJlZFxuICAgICAgICAvLyBNYWtlIGl0IHBvc3NpYmxlIHRvIHJlc2l6ZSB0aGUgaWZyYW1lIHdoZW4gdGhlIGNvbnRlbnQgY2hhbmdlcyBzaXplLiBUaGlzIHdheSB3ZSBnZXQgbm8gc2Nyb2xsYmFycy5cbiAgICAgICAgdmFyIGlmcmFtZSA9IHdpbmRvdy5mcmFtZUVsZW1lbnQ7XG4gICAgICAgIHZhciByZXNpemVJZnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQuSDVQLmlzRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgcmV0dXJuOyAvLyBTa2lwIGlmIGZ1bGwgc2NyZWVuLlxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJldGFpbiBwYXJlbnQgc2l6ZSB0byBhdm9pZCBqdW1waW5nL3Njcm9sbGluZ1xuICAgICAgICAgIHZhciBwYXJlbnRIZWlnaHQgPSBpZnJhbWUucGFyZW50RWxlbWVudC5zdHlsZS5oZWlnaHQ7XG4gICAgICAgICAgaWZyYW1lLnBhcmVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaWZyYW1lLnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAgIC8vIE5vdGU6ICBGb3JjZSBsYXlvdXQgcmVmbG93XG4gICAgICAgICAgLy8gICAgICAgIFRoaXMgZml4ZXMgYSBmbGlja2VyaW5nIGJ1ZyBmb3IgZW1iZWRkZWQgY29udGVudCBvbiBpUGFkc1xuICAgICAgICAgIC8vICAgICAgICBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9oNXAvaDVwLW1vb2RsZS1wbHVnaW4vaXNzdWVzLzIzN1xuICAgICAgICAgIGlmcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgIC8vIFJlc2V0IGlmcmFtZSBoZWlnaHQsIGluIGNhc2UgY29udGVudCBoYXMgc2hyaW5rZWQuXG4gICAgICAgICAgaWZyYW1lLnN0eWxlLmhlaWdodCA9ICcxcHgnO1xuXG4gICAgICAgICAgLy8gUmVzaXplIGlmcmFtZSBzbyBhbGwgY29udGVudCBpcyB2aXNpYmxlLlxuICAgICAgICAgIGlmcmFtZS5zdHlsZS5oZWlnaHQgPSAoaWZyYW1lLmNvbnRlbnREb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCkgKyAncHgnO1xuXG4gICAgICAgICAgLy8gRnJlZSBwYXJlbnRcbiAgICAgICAgICBpZnJhbWUucGFyZW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBwYXJlbnRIZWlnaHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgSDVQLm9uKGluc3RhbmNlLCAncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFVzZSBhIGRlbGF5IHRvIG1ha2Ugc3VyZSBpZnJhbWUgaXMgcmVzaXplZCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVEZWxheSk7XG4gICAgICAgICAgcmVzaXplRGVsYXkgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlc2l6ZUlmcmFtZSgpO1xuICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKEg1UC5jb21tdW5pY2F0b3IpIHtcbiAgICAgICAgLy8gRXh0ZXJuYWwgZW1iZWRcbiAgICAgICAgdmFyIHBhcmVudElzRnJpZW5kbHkgPSBmYWxzZTtcblxuICAgICAgICAvLyBIYW5kbGUgdGhhdCB0aGUgcmVzaXplciBpcyBsb2FkZWQgYWZ0ZXIgdGhlIGlmcmFtZVxuICAgICAgICBINVAuY29tbXVuaWNhdG9yLm9uKCdyZWFkeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBINVAuY29tbXVuaWNhdG9yLnNlbmQoJ2hlbGxvJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEhhbmRsZSBoZWxsbyBtZXNzYWdlIGZyb20gb3VyIHBhcmVudCB3aW5kb3dcbiAgICAgICAgSDVQLmNvbW11bmljYXRvci5vbignaGVsbG8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gSW5pdGlhbCBzZXR1cC9oYW5kc2hha2UgaXMgZG9uZVxuICAgICAgICAgIHBhcmVudElzRnJpZW5kbHkgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gTWFrZSBpZnJhbWUgcmVzcG9uc2l2ZVxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXG4gICAgICAgICAgLy8gSGlkZSBzY3JvbGxiYXJzIGZvciBjb3JyZWN0IHNpemVcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICAgICAgICAvLyBDb250ZW50IG5lZWQgdG8gYmUgcmVzaXplZCB0byBmaXQgdGhlIG5ldyBpZnJhbWUgc2l6ZVxuICAgICAgICAgIEg1UC50cmlnZ2VyKGluc3RhbmNlLCAncmVzaXplJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFdoZW4gcmVzaXplIGhhcyBiZWVuIHByZXBhcmVkIHRlbGwgcGFyZW50IHdpbmRvdyB0byByZXNpemVcbiAgICAgICAgSDVQLmNvbW11bmljYXRvci5vbigncmVzaXplUHJlcGFyZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgSDVQLmNvbW11bmljYXRvci5zZW5kKCdyZXNpemUnLCB7XG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQ6IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEg1UC5jb21tdW5pY2F0b3Iub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBINVAudHJpZ2dlcihpbnN0YW5jZSwgJ3Jlc2l6ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBINVAub24oaW5zdGFuY2UsICdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKEg1UC5pc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gU2tpcCBpZnJhbWUgcmVzaXplXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVXNlIGEgZGVsYXkgdG8gbWFrZSBzdXJlIGlmcmFtZSBpcyByZXNpemVkIHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZURlbGF5KTtcbiAgICAgICAgICByZXNpemVEZWxheSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gT25seSByZXNpemUgaWYgdGhlIGlmcmFtZSBjYW4gYmUgcmVzaXplZFxuICAgICAgICAgICAgaWYgKHBhcmVudElzRnJpZW5kbHkpIHtcbiAgICAgICAgICAgICAgSDVQLmNvbW11bmljYXRvci5zZW5kKCdwcmVwYXJlUmVzaXplJywge1xuICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodDogZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICAgICAgY2xpZW50SGVpZ2h0OiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBINVAuY29tbXVuaWNhdG9yLnNlbmQoJ2hlbGxvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghSDVQLmlzRnJhbWVkIHx8IEg1UC5leHRlcm5hbEVtYmVkID09PSBmYWxzZSkge1xuICAgICAgLy8gUmVzaXplIGV2ZXJ5dGhpbmcgd2hlbiB3aW5kb3cgaXMgcmVzaXplZC5cbiAgICAgIEg1UC5qUXVlcnkod2luZG93LnBhcmVudCkucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQuSDVQLmlzRnVsbHNjcmVlbikge1xuICAgICAgICAgIC8vIFVzZSB0aW1lb3V0IHRvIGF2b2lkIGJ1ZyBpbiBjZXJ0YWluIGJyb3dzZXJzIHdoZW4gZXhpdGluZyBmdWxsc2NyZWVuLiBTb21lIGJyb3dzZXIgd2lsbCB0cmlnZ2VyIHJlc2l6ZSBiZWZvcmUgdGhlIGZ1bGxzY3JlZW5jaGFuZ2UgZXZlbnQuXG4gICAgICAgICAgSDVQLnRyaWdnZXIoaW5zdGFuY2UsICdyZXNpemUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBINVAudHJpZ2dlcihpbnN0YW5jZSwgJ3Jlc2l6ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBINVAuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuXG4gICAgLy8gUmVzaXplIGNvbnRlbnQuXG4gICAgSDVQLnRyaWdnZXIoaW5zdGFuY2UsICdyZXNpemUnKTtcblxuICAgIC8vIExvZ2ljIGZvciBoaWRpbmcgZm9jdXMgZWZmZWN0cyB3aGVuIHVzaW5nIG1vdXNlXG4gICAgJGVsZW1lbnQuYWRkQ2xhc3MoJ3VzaW5nLW1vdXNlJyk7XG4gICAgJGVsZW1lbnQub24oJ21vdXNlZG93biBrZXlkb3duIGtleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAkZWxlbWVudC50b2dnbGVDbGFzcygndXNpbmctbW91c2UnLCBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyk7XG4gICAgfSk7XG5cbiAgICBpZiAoSDVQLmV4dGVybmFsRGlzcGF0Y2hlcikge1xuICAgICAgSDVQLmV4dGVybmFsRGlzcGF0Y2hlci50cmlnZ2VyKCdpbml0aWFsaXplZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gSW5zZXJ0IEg1UHMgdGhhdCBzaG91bGQgYmUgaW4gaWZyYW1lcy5cbiAgSDVQLmpRdWVyeSgnaWZyYW1lLmg1cC1pZnJhbWU6bm90KC5oNXAtaW5pdGlhbGl6ZWQpJywgdGFyZ2V0KS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29udGVudElkID0gSDVQLmpRdWVyeSh0aGlzKS5hZGRDbGFzcygnaDVwLWluaXRpYWxpemVkJykuZGF0YSgnY29udGVudC1pZCcpO1xuICAgIHRoaXMuY29udGVudERvY3VtZW50Lm9wZW4oKTtcbiAgICB0aGlzLmNvbnRlbnREb2N1bWVudC53cml0ZSgnPCFkb2N0eXBlIGh0bWw+PGh0bWwgY2xhc3M9XCJoNXAtaWZyYW1lXCI+PGhlYWQ+JyArIEg1UC5nZXRIZWFkVGFncyhjb250ZW50SWQpICsgJzwvaGVhZD48Ym9keT48ZGl2IGNsYXNzPVwiaDVwLWNvbnRlbnRcIiBkYXRhLWNvbnRlbnQtaWQ9XCInICsgY29udGVudElkICsgJ1wiLz48L2JvZHk+PC9odG1sPicpO1xuICAgIHRoaXMuY29udGVudERvY3VtZW50LmNsb3NlKCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBMb29wIHRocm91Z2ggYXNzZXRzIGZvciBpZnJhbWUgY29udGVudCBhbmQgY3JlYXRlIGEgc2V0IG9mIHRhZ3MgZm9yIGhlYWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb250ZW50SWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEhUTUxcbiAqL1xuSDVQLmdldEhlYWRUYWdzID0gZnVuY3Rpb24gKGNvbnRlbnRJZCkge1xuICB2YXIgY3JlYXRlU3R5bGVUYWdzID0gZnVuY3Rpb24gKHN0eWxlcykge1xuICAgIHZhciB0YWdzID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRhZ3MgKz0gJzxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiJyArIHN0eWxlc1tpXSArICdcIj4nO1xuICAgIH1cbiAgICByZXR1cm4gdGFncztcbiAgfTtcblxuICB2YXIgY3JlYXRlU2NyaXB0VGFncyA9IGZ1bmN0aW9uIChzY3JpcHRzKSB7XG4gICAgdmFyIHRhZ3MgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRhZ3MgKz0gJzxzY3JpcHQgc3JjPVwiJyArIHNjcmlwdHNbaV0gKyAnXCI+PC9zY3JpcHQ+JztcbiAgICB9XG4gICAgcmV0dXJuIHRhZ3M7XG4gIH07XG5cbiAgcmV0dXJuICc8YmFzZSB0YXJnZXQ9XCJfcGFyZW50XCI+JyArXG4gICAgICAgICBjcmVhdGVTdHlsZVRhZ3MoSDVQSW50ZWdyYXRpb24uY29yZS5zdHlsZXMpICtcbiAgICAgICAgIGNyZWF0ZVN0eWxlVGFncyhINVBJbnRlZ3JhdGlvbi5jb250ZW50c1snY2lkLScgKyBjb250ZW50SWRdLnN0eWxlcykgK1xuICAgICAgICAgY3JlYXRlU2NyaXB0VGFncyhINVBJbnRlZ3JhdGlvbi5jb3JlLnNjcmlwdHMpICtcbiAgICAgICAgIGNyZWF0ZVNjcmlwdFRhZ3MoSDVQSW50ZWdyYXRpb24uY29udGVudHNbJ2NpZC0nICsgY29udGVudElkXS5zY3JpcHRzKSArXG4gICAgICAgICAnPHNjcmlwdD5INVBJbnRlZ3JhdGlvbiA9IHdpbmRvdy5wYXJlbnQuSDVQSW50ZWdyYXRpb247IHZhciBINVAgPSBINVAgfHwge307IEg1UC5leHRlcm5hbEVtYmVkID0gZmFsc2U7PC9zY3JpcHQ+Jztcbn07XG5cbi8qKlxuICogV2hlbiBlbWJlZGRlZCB0aGUgY29tbXVuaWNhdG9yIGhlbHBzIHRhbGsgdG8gdGhlIHBhcmVudCBwYWdlLlxuICpcbiAqIEB0eXBlIHtDb21tdW5pY2F0b3J9XG4gKi9cbkg1UC5jb21tdW5pY2F0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBDb21tdW5pY2F0b3IoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gTWFwcyBhY3Rpb25zIHRvIGZ1bmN0aW9uc1xuICAgIHZhciBhY3Rpb25IYW5kbGVycyA9IHt9O1xuXG4gICAgLy8gUmVnaXN0ZXIgbWVzc2FnZSBsaXN0ZW5lclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gcmVjZWl2ZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgIGlmICh3aW5kb3cucGFyZW50ICE9PSBldmVudC5zb3VyY2UgfHwgZXZlbnQuZGF0YS5jb250ZXh0ICE9PSAnaDVwJykge1xuICAgICAgICByZXR1cm47IC8vIE9ubHkgaGFuZGxlIG1lc3NhZ2VzIGZyb20gcGFyZW50IGFuZCBpbiB0aGUgY29ycmVjdCBjb250ZXh0XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb25IYW5kbGVyc1tldmVudC5kYXRhLmFjdGlvbl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhY3Rpb25IYW5kbGVyc1tldmVudC5kYXRhLmFjdGlvbl0oZXZlbnQuZGF0YSk7XG4gICAgICB9XG4gICAgfSAsIGZhbHNlKTtcblxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYWN0aW9uIGxpc3RlbmVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiBXaGF0IHlvdSBhcmUgd2FpdGluZyBmb3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIFdoYXQgeW91IHdhbnQgZG9uZVxuICAgICAqL1xuICAgIHNlbGYub24gPSBmdW5jdGlvbiAoYWN0aW9uLCBoYW5kbGVyKSB7XG4gICAgICBhY3Rpb25IYW5kbGVyc1thY3Rpb25dID0gaGFuZGxlcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGFsbCBtaWdodHkgZmF0aGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV0gcGF5bG9hZFxuICAgICAqL1xuICAgIHNlbGYuc2VuZCA9IGZ1bmN0aW9uIChhY3Rpb24sIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGF0YSA9IHt9O1xuICAgICAgfVxuICAgICAgZGF0YS5jb250ZXh0ID0gJ2g1cCc7XG4gICAgICBkYXRhLmFjdGlvbiA9IGFjdGlvbjtcblxuICAgICAgLy8gUGFyZW50IG9yaWdpbiBjYW4gYmUgYW55dGhpbmdcbiAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoZGF0YSwgJyonKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuICh3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgPyBuZXcgQ29tbXVuaWNhdG9yKCkgOiB1bmRlZmluZWQpO1xufSkoKTtcblxuLyoqXG4gKiBFbnRlciBzZW1pIGZ1bGxzY3JlZW4gZm9yIHRoZSBnaXZlbiBINVAgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0ge0g1UC5qUXVlcnl9ICRlbGVtZW50IENvbnRlbnQgY29udGFpbmVyLlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBleGl0Q2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdXNlciBleGl0cyBmdWxsc2NyZWVuLlxuICogQHBhcmFtIHtINVAualF1ZXJ5fSAkYm9keSBGb3IgaW50ZXJuYWwgdXNlLiBHaXZlcyB0aGUgYm9keSBvZiB0aGUgaWZyYW1lLlxuICovXG5INVAuc2VtaUZ1bGxTY3JlZW4gPSBmdW5jdGlvbiAoJGVsZW1lbnQsIGluc3RhbmNlLCBleGl0Q2FsbGJhY2ssIGJvZHkpIHtcbiAgSDVQLmZ1bGxTY3JlZW4oJGVsZW1lbnQsIGluc3RhbmNlLCBleGl0Q2FsbGJhY2ssIGJvZHksIHRydWUpO1xufTtcblxuLyoqXG4gKiBFbnRlciBmdWxsc2NyZWVuIGZvciB0aGUgZ2l2ZW4gSDVQIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSB7SDVQLmpRdWVyeX0gJGVsZW1lbnQgQ29udGVudCBjb250YWluZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGV4aXRDYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiB1c2VyIGV4aXRzIGZ1bGxzY3JlZW4uXG4gKiBAcGFyYW0ge0g1UC5qUXVlcnl9ICRib2R5IEZvciBpbnRlcm5hbCB1c2UuIEdpdmVzIHRoZSBib2R5IG9mIHRoZSBpZnJhbWUuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZvcmNlU2VtaUZ1bGxTY3JlZW5cbiAqL1xuSDVQLmZ1bGxTY3JlZW4gPSBmdW5jdGlvbiAoJGVsZW1lbnQsIGluc3RhbmNlLCBleGl0Q2FsbGJhY2ssIGJvZHksIGZvcmNlU2VtaUZ1bGxTY3JlZW4pIHtcbiAgaWYgKEg1UC5leGl0RnVsbFNjcmVlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuOyAvLyBDYW5ub3QgZW50ZXIgbmV3IGZ1bGxzY3JlZW4gdW50aWwgcHJldmlvdXMgaXMgb3ZlclxuICB9XG5cbiAgaWYgKEg1UC5pc0ZyYW1lZCAmJiBINVAuZXh0ZXJuYWxFbWJlZCA9PT0gZmFsc2UpIHtcbiAgICAvLyBUcmlnZ2VyIHJlc2l6ZSBvbiB3cmFwcGVyIGluIHBhcmVudCB3aW5kb3cuXG4gICAgd2luZG93LnBhcmVudC5INVAuZnVsbFNjcmVlbigkZWxlbWVudCwgaW5zdGFuY2UsIGV4aXRDYWxsYmFjaywgSDVQLiRib2R5LmdldCgpLCBmb3JjZVNlbWlGdWxsU2NyZWVuKTtcbiAgICBINVAuaXNGdWxsc2NyZWVuID0gdHJ1ZTtcbiAgICBINVAuZXhpdEZ1bGxTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucGFyZW50Lkg1UC5leGl0RnVsbFNjcmVlbigpO1xuICAgIH07XG4gICAgSDVQLm9uKGluc3RhbmNlLCAnZXhpdEZ1bGxTY3JlZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBINVAuaXNGdWxsc2NyZWVuID0gZmFsc2U7XG4gICAgICBINVAuZXhpdEZ1bGxTY3JlZW4gPSB1bmRlZmluZWQ7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyICRjb250YWluZXIgPSAkZWxlbWVudDtcbiAgdmFyICRjbGFzc2VzLCAkaWZyYW1lLCAkYm9keTtcbiAgaWYgKGJvZHkgPT09IHVuZGVmaW5lZCkgIHtcbiAgICAkYm9keSA9IEg1UC4kYm9keTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBXZSdyZSBjYWxsZWQgZnJvbSBhbiBpZnJhbWUuXG4gICAgJGJvZHkgPSBINVAualF1ZXJ5KGJvZHkpO1xuICAgICRjbGFzc2VzID0gJGJvZHkuYWRkKCRlbGVtZW50LmdldCgpKTtcbiAgICB2YXIgaWZyYW1lU2VsZWN0b3IgPSAnI2g1cC1pZnJhbWUtJyArICRlbGVtZW50LnBhcmVudCgpLmRhdGEoJ2NvbnRlbnQtaWQnKTtcbiAgICAkaWZyYW1lID0gSDVQLmpRdWVyeShpZnJhbWVTZWxlY3Rvcik7XG4gICAgJGVsZW1lbnQgPSAkaWZyYW1lLnBhcmVudCgpOyAvLyBQdXQgaWZyYW1lIHdyYXBwZXIgaW4gZnVsbHNjcmVlbiwgbm90IGNvbnRhaW5lci5cbiAgfVxuXG4gICRjbGFzc2VzID0gJGVsZW1lbnQuYWRkKEg1UC4kYm9keSkuYWRkKCRjbGFzc2VzKTtcblxuICAvKipcbiAgICogUHJlcGFyZSBmb3IgcmVzaXplIGJ5IHNldHRpbmcgdGhlIGNvcnJlY3Qgc3R5bGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NlcyBDU1NcbiAgICovXG4gIHZhciBiZWZvcmUgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgICRjbGFzc2VzLmFkZENsYXNzKGNsYXNzZXMpO1xuXG4gICAgaWYgKCRpZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gU2V0IGlmcmFtZSB0byBpdHMgZGVmYXVsdCBzaXplKDEwMCUpLlxuICAgICAgJGlmcmFtZS5jc3MoJ2hlaWdodCcsICcnKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgY2FsbGVkIHdoZW4gZnVsbHNjcmVlbiBtb2RlIGhhcyBiZWVuIGVudGVyZWQuXG4gICAqIFJlc2l6ZXMgYW5kIHNldHMgZm9jdXMgb24gY29udGVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHZhciBlbnRlcmVkID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIERvIG5vdCByZWx5IG9uIHdpbmRvdyByZXNpemUgZXZlbnRzLlxuICAgIEg1UC50cmlnZ2VyKGluc3RhbmNlLCAncmVzaXplJyk7XG4gICAgSDVQLnRyaWdnZXIoaW5zdGFuY2UsICdmb2N1cycpO1xuICAgIEg1UC50cmlnZ2VyKGluc3RhbmNlLCAnZW50ZXJGdWxsU2NyZWVuJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgY2FsbGVkIHdoZW4gZnVsbHNjcmVlbiBtb2RlIGhhcyBiZWVuIGV4aXRlZC5cbiAgICogUmVzaXplcyBhbmQgc2V0cyBmb2N1cyBvbiBjb250ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NlcyBDU1NcbiAgICovXG4gIHZhciBkb25lID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICBINVAuaXNGdWxsc2NyZWVuID0gZmFsc2U7XG4gICAgJGNsYXNzZXMucmVtb3ZlQ2xhc3MoY2xhc3Nlcyk7XG5cbiAgICAvLyBEbyBub3QgcmVseSBvbiB3aW5kb3cgcmVzaXplIGV2ZW50cy5cbiAgICBINVAudHJpZ2dlcihpbnN0YW5jZSwgJ3Jlc2l6ZScpO1xuICAgIEg1UC50cmlnZ2VyKGluc3RhbmNlLCAnZm9jdXMnKTtcblxuICAgIEg1UC5leGl0RnVsbFNjcmVlbiA9IHVuZGVmaW5lZDtcbiAgICBpZiAoZXhpdENhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGV4aXRDYWxsYmFjaygpO1xuICAgIH1cblxuICAgIEg1UC50cmlnZ2VyKGluc3RhbmNlLCAnZXhpdEZ1bGxTY3JlZW4nKTtcbiAgfTtcblxuICBINVAuaXNGdWxsc2NyZWVuID0gdHJ1ZTtcbiAgaWYgKEg1UC5mdWxsU2NyZWVuQnJvd3NlclByZWZpeCA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlU2VtaUZ1bGxTY3JlZW4gPT09IHRydWUpIHtcbiAgICAvLyBDcmVhdGUgc2VtaSBmdWxsc2NyZWVuLlxuXG4gICAgaWYgKEg1UC5pc0ZyYW1lZCkge1xuICAgICAgcmV0dXJuOyAvLyBUT0RPOiBTaG91bGQgd2Ugc3VwcG9ydCBzZW1pLWZ1bGxzY3JlZW4gZm9yIElFOSAmIDEwID9cbiAgICB9XG5cbiAgICBiZWZvcmUoJ2g1cC1zZW1pLWZ1bGxzY3JlZW4nKTtcbiAgICB2YXIgJGRpc2FibGUgPSBINVAualF1ZXJ5KCc8ZGl2IHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImg1cC1kaXNhYmxlLWZ1bGxzY3JlZW5cIiB0aXRsZT1cIicgKyBINVAudCgnZGlzYWJsZUZ1bGxzY3JlZW4nKSArICdcIiBhcmlhLWxhYmVsPVwiJyArIEg1UC50KCdkaXNhYmxlRnVsbHNjcmVlbicpICsgJ1wiPjwvZGl2PicpLmFwcGVuZFRvKCRjb250YWluZXIuZmluZCgnLmg1cC1jb250ZW50LWNvbnRyb2xzJykpO1xuICAgIHZhciBrZXl1cCwgZGlzYWJsZVNlbWlGdWxsc2NyZWVuID0gSDVQLmV4aXRGdWxsU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHByZXZWaWV3cG9ydENvbnRlbnQpIHtcbiAgICAgICAgLy8gVXNlIGNvbnRlbnQgZnJvbSB0aGUgcHJldmlvdXMgdmlld3BvcnQgdGFnXG4gICAgICAgIGg1cFZpZXdwb3J0LmNvbnRlbnQgPSBwcmV2Vmlld3BvcnRDb250ZW50O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFJlbW92ZSB2aWV3cG9ydCB0YWdcbiAgICAgICAgaGVhZC5yZW1vdmVDaGlsZChoNXBWaWV3cG9ydCk7XG4gICAgICB9XG4gICAgICAkZGlzYWJsZS5yZW1vdmUoKTtcbiAgICAgICRib2R5LnVuYmluZCgna2V5dXAnLCBrZXl1cCk7XG4gICAgICBkb25lKCdoNXAtc2VtaS1mdWxsc2NyZWVuJyk7XG4gICAgfTtcbiAgICBrZXl1cCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgIGRpc2FibGVTZW1pRnVsbHNjcmVlbigpO1xuICAgICAgfVxuICAgIH07XG4gICAgJGRpc2FibGUuY2xpY2soZGlzYWJsZVNlbWlGdWxsc2NyZWVuKTtcbiAgICAkYm9keS5rZXl1cChrZXl1cCk7XG5cbiAgICAvLyBEaXNhYmxlIHpvb21cbiAgICB2YXIgcHJldlZpZXdwb3J0Q29udGVudCwgaDVwVmlld3BvcnQ7XG4gICAgdmFyIG1ldGFUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21ldGEnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1ldGFUYWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobWV0YVRhZ3NbaV0ubmFtZSA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgICAgICAvLyBVc2UgdGhlIGV4aXN0aW5nIHZpZXdwb3J0IHRhZ1xuICAgICAgICBoNXBWaWV3cG9ydCA9IG1ldGFUYWdzW2ldO1xuICAgICAgICBwcmV2Vmlld3BvcnRDb250ZW50ID0gaDVwVmlld3BvcnQuY29udGVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghcHJldlZpZXdwb3J0Q29udGVudCkge1xuICAgICAgLy8gQ3JlYXRlIGEgbmV3IHZpZXdwb3J0IHRhZ1xuICAgICAgaDVwVmlld3BvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJyk7XG4gICAgICBoNXBWaWV3cG9ydC5uYW1lID0gJ3ZpZXdwb3J0JztcbiAgICB9XG4gICAgaDVwVmlld3BvcnQuY29udGVudCA9ICd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT0wJztcbiAgICBpZiAoIXByZXZWaWV3cG9ydENvbnRlbnQpIHtcbiAgICAgIC8vIEluc2VydCB0aGUgbmV3IHZpZXdwb3J0IHRhZ1xuICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChoNXBWaWV3cG9ydCk7XG4gICAgfVxuXG4gICAgZW50ZXJlZCgpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIENyZWF0ZSByZWFsIGZ1bGxzY3JlZW4uXG5cbiAgICBiZWZvcmUoJ2g1cC1mdWxsc2NyZWVuJyk7XG4gICAgdmFyIGZpcnN0LCBldmVudE5hbWUgPSAoSDVQLmZ1bGxTY3JlZW5Ccm93c2VyUHJlZml4ID09PSAnbXMnID8gJ01TRnVsbHNjcmVlbkNoYW5nZScgOiBINVAuZnVsbFNjcmVlbkJyb3dzZXJQcmVmaXggKyAnZnVsbHNjcmVlbmNoYW5nZScpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZmlyc3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBXZSBhcmUgZW50ZXJpbmcgZnVsbHNjcmVlbiBtb2RlXG4gICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgIGVudGVyZWQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBhcmUgZXhpdGluZyBmdWxsc2NyZWVuXG4gICAgICBkb25lKCdoNXAtZnVsbHNjcmVlbicpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGFyZ3VtZW50cy5jYWxsZWUsIGZhbHNlKTtcbiAgICB9KTtcblxuICAgIGlmIChINVAuZnVsbFNjcmVlbkJyb3dzZXJQcmVmaXggPT09ICcnKSB7XG4gICAgICAkZWxlbWVudFswXS5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBtZXRob2QgPSAoSDVQLmZ1bGxTY3JlZW5Ccm93c2VyUHJlZml4ID09PSAnbXMnID8gJ21zUmVxdWVzdEZ1bGxzY3JlZW4nIDogSDVQLmZ1bGxTY3JlZW5Ccm93c2VyUHJlZml4ICsgJ1JlcXVlc3RGdWxsU2NyZWVuJyk7XG4gICAgICB2YXIgcGFyYW1zID0gKEg1UC5mdWxsU2NyZWVuQnJvd3NlclByZWZpeCA9PT0gJ3dlYmtpdCcgJiYgSDVQLnNhZmFyaUJyb3dzZXIgPT09IDAgPyBFbGVtZW50LkFMTE9XX0tFWUJPQVJEX0lOUFVUIDogdW5kZWZpbmVkKTtcbiAgICAgICRlbGVtZW50WzBdW21ldGhvZF0ocGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBBbGxvd3MgZXZlcm9uZSB0byBleGl0XG4gICAgSDVQLmV4aXRGdWxsU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKEg1UC5mdWxsU2NyZWVuQnJvd3NlclByZWZpeCA9PT0gJycpIHtcbiAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKEg1UC5mdWxsU2NyZWVuQnJvd3NlclByZWZpeCA9PT0gJ21veicpIHtcbiAgICAgICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50W0g1UC5mdWxsU2NyZWVuQnJvd3NlclByZWZpeCArICdFeGl0RnVsbHNjcmVlbiddKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEhlbHBlciBmb3IgYWRkaW5nIGEgcXVlcnkgcGFyYW1ldGVyIHRvIGFuIGV4aXN0aW5nIHBhdGggdGhhdCBtYXkgYWxyZWFkeVxuICAgKiBjb250YWluIG9uZSBvciBhIGhhc2guXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbWV0ZXJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgSDVQLmFkZFF1ZXJ5UGFyYW1ldGVyID0gZnVuY3Rpb24gKHBhdGgsIHBhcmFtZXRlcikge1xuICAgIGxldCBuZXdQYXRoLCBzZWNvbmRTcGxpdDtcbiAgICBjb25zdCBmaXJzdFNwbGl0ID0gcGF0aC5zcGxpdCgnPycpO1xuICAgIGlmIChmaXJzdFNwbGl0WzFdKSB7XG4gICAgICAvLyBUaGVyZSBpcyBhbHJlYWR5IGFuIGV4aXN0aW5nIHF1ZXJ5XG4gICAgICBzZWNvbmRTcGxpdCA9IGZpcnN0U3BsaXRbMV0uc3BsaXQoJyMnKTtcbiAgICAgIG5ld1BhdGggPSBmaXJzdFNwbGl0WzBdICsgJz8nICsgc2Vjb25kU3BsaXRbMF0gKyAnJic7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gTm8gZXhpc3RpbmcgcXVlcnksIGp1c3QgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlIGhhc2hcbiAgICAgIHNlY29uZFNwbGl0ID0gZmlyc3RTcGxpdFswXS5zcGxpdCgnIycpO1xuICAgICAgbmV3UGF0aCA9IHNlY29uZFNwbGl0WzBdICsgJz8nO1xuICAgIH1cbiAgICBuZXdQYXRoICs9IHBhcmFtZXRlcjtcbiAgICBpZiAoc2Vjb25kU3BsaXRbMV0pIHtcbiAgICAgIC8vIEFkZCBiYWNrIHRoZSBoYXNoXG4gICAgICBuZXdQYXRoICs9ICcjJyArIHNlY29uZFNwbGl0WzFdO1xuICAgIH1cbiAgICByZXR1cm4gbmV3UGF0aDtcbiAgfTtcblxuICAvKipcbiAgICogSGVscGVyIGZvciBzZXR0aW5nIHRoZSBjcm9zc09yaWdpbiBhdHRyaWJ1dGUgKyB0aGUgY29tcGxldGUgY29ycmVjdCBzb3VyY2UuXG4gICAqIE5vdGU6IFRoaXMgd2lsbCBzdGFydCBsb2FkaW5nIHRoZSByZXNvdXJjZS5cbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IERPTSBlbGVtZW50LCB0eXBpY2FsbHkgaW1nLCB2aWRlbyBvciBhdWRpb1xuICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlIEZpbGUgb2JqZWN0IGZyb20gcGFyYW1ldGVycy9qc29uX2NvbnRlbnQgKGNyZWF0ZWQgYnkgSDVQRWRpdG9yKVxuICAgKiBAcGFyYW0ge251bWJlcn0gY29udGVudElkIE5lZWRlZCB0byBkZXRlcm1pbmUgdGhlIGNvbXBsZXRlIGNvcnJlY3QgZmlsZSBwYXRoXG4gICAqL1xuICBINVAuc2V0U291cmNlID0gZnVuY3Rpb24gKGVsZW1lbnQsIHNvdXJjZSwgY29udGVudElkKSB7XG4gICAgbGV0IHBhdGggPSBzb3VyY2UucGF0aDtcblxuICAgIGNvbnN0IGNyb3NzT3JpZ2luID0gSDVQLmdldENyb3NzT3JpZ2luKHNvdXJjZSk7XG4gICAgaWYgKGNyb3NzT3JpZ2luKSB7XG4gICAgICBlbGVtZW50LmNyb3NzT3JpZ2luID0gY3Jvc3NPcmlnaW47XG5cbiAgICAgIGlmIChINVBJbnRlZ3JhdGlvbi5jcm9zc29yaWdpbkNhY2hlQnVzdGVyKSB7XG4gICAgICAgIC8vIFNvbWUgc2l0ZXMgbWF5IHdhbnQgdG8gYWRkIGEgY2FjaGUgYnVzdGVyIGluIGNhc2UgdGhlIHNhbWUgcmVzb3VyY2VcbiAgICAgICAgLy8gaXMgdXNlZCBlbHNld2hlcmUgd2l0aG91dCB0aGUgY3Jvc3NPcmlnaW4gYXR0cmlidXRlXG4gICAgICAgIHBhdGggPSBINVAuYWRkUXVlcnlQYXJhbWV0ZXIocGF0aCwgSDVQSW50ZWdyYXRpb24uY3Jvc3NvcmlnaW5DYWNoZUJ1c3Rlcik7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gSW4gY2FzZSB0aGlzIGVsZW1lbnQgaGFzIGJlZW4gdXNlZCBiZWZvcmUuXG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nKTtcbiAgICB9XG5cbiAgICBlbGVtZW50LnNyYyA9IEg1UC5nZXRQYXRoKHBhdGgsIGNvbnRlbnRJZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiBwYXRoIGhhcyBhIHByb3RvY29sLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB2YXIgaGFzUHJvdG9jb2wgPSBmdW5jdGlvbiAocGF0aCkge1xuICAgIHJldHVybiBwYXRoLm1hdGNoKC9eW2EtejAtOV0rOlxcL1xcLy9pKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSBjcm9zc09yaWdpbiBwb2xpY3kgdG8gdXNlIGZvciBpbWcsIHZpZGVvIGFuZCBhdWRpbyB0YWdzIG9uIHRoZSBjdXJyZW50IHNpdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fHN0cmluZ30gc291cmNlIEZpbGUgb2JqZWN0IGZyb20gcGFyYW1ldGVycy9qc29uX2NvbnRlbnQgLSBDYW4gYWxzbyBiZSBVUkwoZGVwcmVjYXRlZCB1c2FnZSlcbiAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSBjcm9zc09yaWdpbiBhdHRyaWJ1dGUgdmFsdWUgcmVxdWlyZWQgYnkgdGhlIHNvdXJjZVxuICAgKi9cbiAgSDVQLmdldENyb3NzT3JpZ2luID0gZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgLy8gRGVwcmVjYXRlZCB1c2FnZS5cbiAgICAgIHJldHVybiBINVBJbnRlZ3JhdGlvbi5jcm9zc29yaWdpbiAmJiBINVBJbnRlZ3JhdGlvbi5jcm9zc29yaWdpblJlZ2V4ICYmIHNvdXJjZS5tYXRjaChINVBJbnRlZ3JhdGlvbi5jcm9zc29yaWdpblJlZ2V4KSA/IEg1UEludGVncmF0aW9uLmNyb3Nzb3JpZ2luIDogbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoSDVQSW50ZWdyYXRpb24uY3Jvc3NvcmlnaW4gJiYgIWhhc1Byb3RvY29sKHNvdXJjZS5wYXRoKSkge1xuICAgICAgLy8gVGhpcyBpcyBhIGxvY2FsIGZpbGUsIHVzZSB0aGUgbG9jYWwgY3Jvc3NPcmlnaW4gcG9saWN5LlxuICAgICAgcmV0dXJuIEg1UEludGVncmF0aW9uLmNyb3Nzb3JpZ2luO1xuICAgICAgLy8gTm90ZTogV2UgY2Fubm90IHVzZSB0aGlzIGZvciBhbGwgZXh0ZXJuYWwgc291cmNlcyBzaW5jZSB3ZSBkbyBub3Qga25vd1xuICAgICAgLy8gZWFjaCBzZXJ2ZXIncyBpbmRpdmlkdWFsIHBvbGljeS4gV2UgY291bGQgYWRkIHN1cHBvcnQgZm9yIGEgbGlzdCBvZlxuICAgICAgLy8gZXh0ZXJuYWwgc291cmNlcyBhbmQgdGhlaXIgcG9saWN5IGxhdGVyIG9uLlxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRmluZCB0aGUgcGF0aCB0byB0aGUgY29udGVudCBmaWxlcyBiYXNlZCBvbiB0aGUgaWQgb2YgdGhlIGNvbnRlbnQuXG4gICAqIEFsc28gaWRlbnRpZmllcyBhbmQgcmV0dXJucyBhYnNvbHV0ZSBwYXRocy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICogICBSZWxhdGl2ZSB0byBjb250ZW50IGZvbGRlciBvciBhYnNvbHV0ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRlbnRJZFxuICAgKiAgIElEIG9mIHRoZSBjb250ZW50IHJlcXVlc3RpbmcgdGhlIHBhdGguXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqICAgQ29tcGxldGUgVVJMIHRvIHBhdGguXG4gICAqL1xuICBINVAuZ2V0UGF0aCA9IGZ1bmN0aW9uIChwYXRoLCBjb250ZW50SWQpIHtcbiAgICBpZiAoaGFzUHJvdG9jb2wocGF0aCkpIHtcbiAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIHZhciBwcmVmaXg7XG4gICAgdmFyIGlzVG1wRmlsZSA9IChwYXRoLnN1YnN0cigtNCw0KSA9PT0gJyN0bXAnKTtcbiAgICBpZiAoY29udGVudElkICE9PSB1bmRlZmluZWQgJiYgIWlzVG1wRmlsZSkge1xuICAgICAgLy8gQ2hlY2sgZm9yIGN1c3RvbSBvdmVycmlkZSBVUkxcbiAgICAgIGlmIChINVBJbnRlZ3JhdGlvbi5jb250ZW50cyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgSDVQSW50ZWdyYXRpb24uY29udGVudHNbJ2NpZC0nICsgY29udGVudElkXSkge1xuICAgICAgICBwcmVmaXggPSBINVBJbnRlZ3JhdGlvbi5jb250ZW50c1snY2lkLScgKyBjb250ZW50SWRdLmNvbnRlbnRVcmw7XG4gICAgICB9XG4gICAgICBpZiAoIXByZWZpeCkge1xuICAgICAgICBwcmVmaXggPSBINVBJbnRlZ3JhdGlvbi51cmwgKyAnL2NvbnRlbnQvJyArIGNvbnRlbnRJZDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAod2luZG93Lkg1UEVkaXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmVmaXggPSBINVBFZGl0b3IuZmlsZXNQYXRoO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWhhc1Byb3RvY29sKHByZWZpeCkpIHtcbiAgICAgIC8vIFVzZSBhYnNvbHV0ZSB1cmxzXG4gICAgICBwcmVmaXggPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHByZWZpeDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4ICsgJy8nICsgcGF0aDtcbiAgfTtcbn0pKCk7XG5cbi8qKlxuICogVEhJUyBGVU5DVElPTiBJUyBERVBSRUNBVEVELCBVU0UgZ2V0UGF0aCBJTlNURUFEXG4gKiBXaWxsIGJlIHJlbW92ZSBtYXJjaCAyMDE2LlxuICpcbiAqIEZpbmQgdGhlIHBhdGggdG8gdGhlIGNvbnRlbnQgZmlsZXMgZm9sZGVyIGJhc2VkIG9uIHRoZSBpZCBvZiB0aGUgY29udGVudFxuICpcbiAqIEBkZXByZWNhdGVkXG4gKiAgIFdpbGwgYmUgcmVtb3ZlZCBtYXJjaCAyMDE2LlxuICogQHBhcmFtIGNvbnRlbnRJZFxuICogICBJZCBvZiB0aGUgY29udGVudCByZXF1ZXN0aW5nIHRoZSBwYXRoXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBVUkxcbiAqL1xuSDVQLmdldENvbnRlbnRQYXRoID0gZnVuY3Rpb24gKGNvbnRlbnRJZCkge1xuICByZXR1cm4gSDVQSW50ZWdyYXRpb24udXJsICsgJy9jb250ZW50LycgKyBjb250ZW50SWQ7XG59O1xuXG4vKipcbiAqIEdldCBsaWJyYXJ5IGNsYXNzIGNvbnN0cnVjdG9yIGZyb20gSDVQIGJ5IGNsYXNzbmFtZS5cbiAqIE5vdGUgdGhhdCB0aGlzIGNsYXNzIHdpbGwgb25seSB3b3JrIGZvciByZXNvbHZlIFwiSDVQLk5hbWVXaXRob3V0RG90XCIuXG4gKiBBbHNvIGNoZWNrIG91dCB7QGxpbmsgSDVQLm5ld1J1bm5hYmxlfVxuICpcbiAqIFVzZWQgZnJvbSBsaWJyYXJpZXMgdG8gY29uc3RydWN0IGluc3RhbmNlcyBvZiBvdGhlciBsaWJyYXJpZXMnIG9iamVjdHMgYnkgbmFtZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIGxpYnJhcnlcbiAqIEByZXR1cm5zIHtPYmplY3R9IENsYXNzIGNvbnN0cnVjdG9yXG4gKi9cbkg1UC5jbGFzc0Zyb21OYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIGFyciA9IG5hbWUuc3BsaXQoXCIuXCIpO1xuICByZXR1cm4gdGhpc1thcnJbYXJyLmxlbmd0aCAtIDFdXTtcbn07XG5cbi8qKlxuICogQSBzYWZlIHdheSBvZiBjcmVhdGluZyBhIG5ldyBpbnN0YW5jZSBvZiBhIHJ1bm5hYmxlIEg1UC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbGlicmFyeVxuICogICBMaWJyYXJ5L2FjdGlvbiBvYmplY3QgZm9ybSBwYXJhbXMuXG4gKiBAcGFyYW0ge251bWJlcn0gY29udGVudElkXG4gKiAgIElkZW50aWZpZXMgdGhlIGNvbnRlbnQuXG4gKiBAcGFyYW0ge0g1UC5qUXVlcnl9IFskYXR0YWNoVG9dXG4gKiAgIEVsZW1lbnQgdG8gYXR0YWNoIHRoZSBpbnN0YW5jZSB0by5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBSZXNpemVdXG4gKiAgIFNraXAgdHJpZ2dlcmluZyBvZiB0aGUgcmVzaXplIGV2ZW50IGFmdGVyIGF0dGFjaGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZXh0cmFzXVxuICogICBFeHRyYSBwYXJhbWV0ZXJzIGZvciB0aGUgSDVQIGNvbnRlbnQgY29uc3RydWN0b3JcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKiAgIEluc3RhbmNlLlxuICovXG5INVAubmV3UnVubmFibGUgPSBmdW5jdGlvbiAobGlicmFyeSwgY29udGVudElkLCAkYXR0YWNoVG8sIHNraXBSZXNpemUsIGV4dHJhcykge1xuICB2YXIgbmFtZVNwbGl0LCB2ZXJzaW9uU3BsaXQsIG1hY2hpbmVOYW1lO1xuICB0cnkge1xuICAgIG5hbWVTcGxpdCA9IGxpYnJhcnkubGlicmFyeS5zcGxpdCgnICcsIDIpO1xuICAgIG1hY2hpbmVOYW1lID0gbmFtZVNwbGl0WzBdO1xuICAgIHZlcnNpb25TcGxpdCA9IG5hbWVTcGxpdFsxXS5zcGxpdCgnLicsIDIpO1xuICB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gSDVQLmVycm9yKCdJbnZhbGlkIGxpYnJhcnkgc3RyaW5nOiAnICsgbGlicmFyeS5saWJyYXJ5KTtcbiAgfVxuXG4gIGlmICgobGlicmFyeS5wYXJhbXMgaW5zdGFuY2VvZiBPYmplY3QpICE9PSB0cnVlIHx8IChsaWJyYXJ5LnBhcmFtcyBpbnN0YW5jZW9mIEFycmF5KSA9PT0gdHJ1ZSkge1xuICAgIEg1UC5lcnJvcignSW52YWxpZCBsaWJyYXJ5IHBhcmFtcyBmb3I6ICcgKyBsaWJyYXJ5LmxpYnJhcnkpO1xuICAgIHJldHVybiBINVAuZXJyb3IobGlicmFyeS5wYXJhbXMpO1xuICB9XG5cbiAgLy8gRmluZCBjb25zdHJ1Y3RvciBmdW5jdGlvblxuICB2YXIgY29uc3RydWN0b3I7XG4gIHRyeSB7XG4gICAgbmFtZVNwbGl0ID0gbmFtZVNwbGl0WzBdLnNwbGl0KCcuJyk7XG4gICAgY29uc3RydWN0b3IgPSB3aW5kb3c7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lU3BsaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JbbmFtZVNwbGl0W2ldXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjb25zdHJ1Y3RvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbnVsbDtcbiAgICB9XG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBINVAuZXJyb3IoJ1VuYWJsZSB0byBmaW5kIGNvbnN0cnVjdG9yIGZvcjogJyArIGxpYnJhcnkubGlicmFyeSk7XG4gIH1cblxuICBpZiAoZXh0cmFzID09PSB1bmRlZmluZWQpIHtcbiAgICBleHRyYXMgPSB7fTtcbiAgfVxuICBpZiAobGlicmFyeS5zdWJDb250ZW50SWQpIHtcbiAgICBleHRyYXMuc3ViQ29udGVudElkID0gbGlicmFyeS5zdWJDb250ZW50SWQ7XG4gIH1cblxuICBpZiAobGlicmFyeS51c2VyRGF0YXMgJiYgbGlicmFyeS51c2VyRGF0YXMuc3RhdGUgJiYgSDVQSW50ZWdyYXRpb24uc2F2ZUZyZXEpIHtcbiAgICBleHRyYXMucHJldmlvdXNTdGF0ZSA9IGxpYnJhcnkudXNlckRhdGFzLnN0YXRlO1xuICB9XG5cbiAgaWYgKGxpYnJhcnkubWV0YWRhdGEpIHtcbiAgICBleHRyYXMubWV0YWRhdGEgPSBsaWJyYXJ5Lm1ldGFkYXRhO1xuICB9XG5cbiAgLy8gTWFrZXMgYWxsIEg1UCBsaWJyYXJpZXMgZXh0ZW5kIEg1UC5Db250ZW50VHlwZTpcbiAgdmFyIHN0YW5kYWxvbmUgPSBleHRyYXMuc3RhbmRhbG9uZSB8fCBmYWxzZTtcbiAgLy8gVGhpcyBvcmRlciBtYWtlcyBpdCBwb3NzaWJsZSBmb3IgYW4gSDVQIGxpYnJhcnkgdG8gb3ZlcnJpZGUgSDVQLkNvbnRlbnRUeXBlIGZ1bmN0aW9ucyFcbiAgY29uc3RydWN0b3IucHJvdG90eXBlID0gSDVQLmpRdWVyeS5leHRlbmQoe30sIEg1UC5Db250ZW50VHlwZShzdGFuZGFsb25lKS5wcm90b3R5cGUsIGNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG5cbiAgdmFyIGluc3RhbmNlO1xuICAvLyBTb21lIG9sZCBsaWJyYXJ5IHZlcnNpb25zIGhhdmUgdGhlaXIgb3duIGN1c3RvbSB0aGlyZCBwYXJhbWV0ZXIuXG4gIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCBzZW5kIHRoZW0gdGhlIGV4dHJhcy5cbiAgLy8gKHRoZXkgd2lsbCBpbnRlcnByZXQgaXQgYXMgc29tZXRoaW5nIGVsc2UpXG4gIGlmIChINVAualF1ZXJ5LmluQXJyYXkobGlicmFyeS5saWJyYXJ5LCBbJ0g1UC5Db3Vyc2VQcmVzZW50YXRpb24gMS4wJywgJ0g1UC5Db3Vyc2VQcmVzZW50YXRpb24gMS4xJywgJ0g1UC5Db3Vyc2VQcmVzZW50YXRpb24gMS4yJywgJ0g1UC5Db3Vyc2VQcmVzZW50YXRpb24gMS4zJ10pID4gLTEpIHtcbiAgICBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvcihsaWJyYXJ5LnBhcmFtcywgY29udGVudElkKTtcbiAgfVxuICBlbHNlIHtcbiAgICBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvcihsaWJyYXJ5LnBhcmFtcywgY29udGVudElkLCBleHRyYXMpO1xuICB9XG5cbiAgaWYgKGluc3RhbmNlLiQgPT09IHVuZGVmaW5lZCkge1xuICAgIGluc3RhbmNlLiQgPSBINVAualF1ZXJ5KGluc3RhbmNlKTtcbiAgfVxuXG4gIGlmIChpbnN0YW5jZS5jb250ZW50SWQgPT09IHVuZGVmaW5lZCkge1xuICAgIGluc3RhbmNlLmNvbnRlbnRJZCA9IGNvbnRlbnRJZDtcbiAgfVxuICBpZiAoaW5zdGFuY2Uuc3ViQ29udGVudElkID09PSB1bmRlZmluZWQgJiYgbGlicmFyeS5zdWJDb250ZW50SWQpIHtcbiAgICBpbnN0YW5jZS5zdWJDb250ZW50SWQgPSBsaWJyYXJ5LnN1YkNvbnRlbnRJZDtcbiAgfVxuICBpZiAoaW5zdGFuY2UucGFyZW50ID09PSB1bmRlZmluZWQgJiYgZXh0cmFzICYmIGV4dHJhcy5wYXJlbnQpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBleHRyYXMucGFyZW50O1xuICB9XG4gIGlmIChpbnN0YW5jZS5saWJyYXJ5SW5mbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaW5zdGFuY2UubGlicmFyeUluZm8gPSB7XG4gICAgICB2ZXJzaW9uZWROYW1lOiBsaWJyYXJ5LmxpYnJhcnksXG4gICAgICB2ZXJzaW9uZWROYW1lTm9TcGFjZXM6IG1hY2hpbmVOYW1lICsgJy0nICsgdmVyc2lvblNwbGl0WzBdICsgJy4nICsgdmVyc2lvblNwbGl0WzFdLFxuICAgICAgbWFjaGluZU5hbWU6IG1hY2hpbmVOYW1lLFxuICAgICAgbWFqb3JWZXJzaW9uOiB2ZXJzaW9uU3BsaXRbMF0sXG4gICAgICBtaW5vclZlcnNpb246IHZlcnNpb25TcGxpdFsxXVxuICAgIH07XG4gIH1cblxuICBpZiAoJGF0dGFjaFRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAkYXR0YWNoVG8udG9nZ2xlQ2xhc3MoJ2g1cC1zdGFuZGFsb25lJywgc3RhbmRhbG9uZSk7XG4gICAgaW5zdGFuY2UuYXR0YWNoKCRhdHRhY2hUbyk7XG4gICAgSDVQLnRyaWdnZXIoaW5zdGFuY2UsICdkb21DaGFuZ2VkJywge1xuICAgICAgJyR0YXJnZXQnOiAkYXR0YWNoVG8sXG4gICAgICAnbGlicmFyeSc6IG1hY2hpbmVOYW1lLFxuICAgICAgJ2tleSc6ICduZXdMaWJyYXJ5J1xuICAgIH0sIHsnYnViYmxlcyc6IHRydWUsICdleHRlcm5hbCc6IHRydWV9KTtcblxuICAgIGlmIChza2lwUmVzaXplID09PSB1bmRlZmluZWQgfHwgIXNraXBSZXNpemUpIHtcbiAgICAgIC8vIFJlc2l6ZSBjb250ZW50LlxuICAgICAgSDVQLnRyaWdnZXIoaW5zdGFuY2UsICdyZXNpemUnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBVc2VkIHRvIHByaW50IHVzZWZ1bCBlcnJvciBtZXNzYWdlcy4gKHRvIEphdmFTY3JpcHQgZXJyb3IgY29uc29sZSlcbiAqXG4gKiBAcGFyYW0geyp9IGVyciBFcnJvciB0byBwcmludC5cbiAqL1xuSDVQLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICBpZiAod2luZG93LmNvbnNvbGUgIT09IHVuZGVmaW5lZCAmJiBjb25zb2xlLmVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayA/IGVyci5zdGFjayA6IGVycik7XG4gIH1cbn07XG5cbi8qKlxuICogVHJhbnNsYXRlIHRleHQgc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiAgIFRyYW5zbGF0aW9uIGlkZW50aWZpZXIsIG1heSBvbmx5IGNvbnRhaW4gYS16QS1aMC05LiBObyBzcGFjZXMgb3Igc3BlY2lhbCBjaGFycy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbdmFyc11cbiAqICAgRGF0YSBmb3IgcGxhY2Vob2xkZXJzLlxuICogQHBhcmFtIHtzdHJpbmd9IFtuc11cbiAqICAgVHJhbnNsYXRpb24gbmFtZXNwYWNlLiBEZWZhdWx0cyB0byBINVAuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBUcmFuc2xhdGVkIHRleHRcbiAqL1xuSDVQLnQgPSBmdW5jdGlvbiAoa2V5LCB2YXJzLCBucykge1xuICBpZiAobnMgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zID0gJ0g1UCc7XG4gIH1cblxuICBpZiAoSDVQSW50ZWdyYXRpb24ubDEwbltuc10gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnW01pc3NpbmcgdHJhbnNsYXRpb24gbmFtZXNwYWNlIFwiJyArIG5zICsgJ1wiXSc7XG4gIH1cblxuICBpZiAoSDVQSW50ZWdyYXRpb24ubDEwbltuc11ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICdbTWlzc2luZyB0cmFuc2xhdGlvbiBcIicgKyBrZXkgKyAnXCIgaW4gXCInICsgbnMgKyAnXCJdJztcbiAgfVxuXG4gIHZhciB0cmFuc2xhdGlvbiA9IEg1UEludGVncmF0aW9uLmwxMG5bbnNdW2tleV07XG5cbiAgaWYgKHZhcnMgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIFJlcGxhY2UgcGxhY2Vob2xkZXIgd2l0aCB2YXJpYWJsZXMuXG4gICAgZm9yICh2YXIgcGxhY2Vob2xkZXIgaW4gdmFycykge1xuICAgICAgdHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbi5yZXBsYWNlKHBsYWNlaG9sZGVyLCB2YXJzW3BsYWNlaG9sZGVyXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRyYW5zbGF0aW9uO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHBvcHVwIGRpYWxvZyBvdmVyIHRoZSBINVAgY29udGVudC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiAgIFVzZWQgZm9yIGh0bWwgY2xhc3MuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcbiAqICAgVXNlZCBmb3IgaGVhZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqICAgRGlzcGxheWVkIGluc2lkZSB0aGUgZGlhbG9nLlxuICogQHBhcmFtIHtINVAualF1ZXJ5fSAkZWxlbWVudFxuICogICBXaGljaCBET00gZWxlbWVudCB0aGUgZGlhbG9nIHNob3VsZCBiZSBpbnNlcnRlZCBhZnRlci5cbiAqL1xuSDVQLkRpYWxvZyA9IGZ1bmN0aW9uIChuYW1lLCB0aXRsZSwgY29udGVudCwgJGVsZW1lbnQpIHtcbiAgLyoqIEBhbGlhcyBINVAuRGlhbG9nIyAqL1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciAkZGlhbG9nID0gSDVQLmpRdWVyeSgnPGRpdiBjbGFzcz1cImg1cC1wb3B1cC1kaWFsb2cgaDVwLScgKyBuYW1lICsgJy1kaWFsb2dcIiByb2xlPVwiZGlhbG9nXCIgdGFiaW5kZXg9XCItMVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaDVwLWlubmVyXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPicgKyB0aXRsZSArICc8L2gyPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoNXAtc2Nyb2xsLWNvbnRlbnRcIj4nICsgY29udGVudCArICc8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaDVwLWNsb3NlXCIgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWw9XCInICsgSDVQLnQoJ2Nsb3NlJykgKyAnXCIgdGl0bGU9XCInICsgSDVQLnQoJ2Nsb3NlJykgKyAnXCI+PC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JylcbiAgICAuaW5zZXJ0QWZ0ZXIoJGVsZW1lbnQpXG4gICAgLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZSAmJiBlLm9yaWdpbmFsRXZlbnQgJiYgZS5vcmlnaW5hbEV2ZW50LnByZXZlbnRDbG9zaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5jbG9zZSgpO1xuICAgIH0pXG4gICAgLmNoaWxkcmVuKCcuaDVwLWlubmVyJylcbiAgICAgIC5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLm9yaWdpbmFsRXZlbnQucHJldmVudENsb3NpbmcgPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC5maW5kKCcuaDVwLWNsb3NlJylcbiAgICAgICAgLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLmNsb3NlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5rZXlwcmVzcyhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmIChlLndoaWNoID09PSAxMyB8fCBlLndoaWNoID09PSAzMikge1xuICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmVuZCgpXG4gICAgICAuZmluZCgnYScpXG4gICAgICAgIC5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG4gICAgICAuZW5kKClcbiAgICAuZW5kKCk7XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBkaWFsb2cuXG4gICAqL1xuICBzZWxmLm9wZW4gPSBmdW5jdGlvbiAoc2Nyb2xsYmFyKSB7XG4gICAgaWYgKHNjcm9sbGJhcikge1xuICAgICAgJGRpYWxvZy5jc3MoJ2hlaWdodCcsICcxMDAlJyk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJGRpYWxvZy5hZGRDbGFzcygnaDVwLW9wZW4nKTsgLy8gRmFkZSBpblxuICAgICAgLy8gVHJpZ2dlcmluZyBhbiBldmVudCwgaW4gY2FzZSBzb21ldGhpbmcgaGFzIHRvIGJlIGRvbmUgYWZ0ZXIgZGlhbG9nIGhhcyBiZWVuIG9wZW5lZC5cbiAgICAgIEg1UC5qUXVlcnkoc2VsZikudHJpZ2dlcignZGlhbG9nLW9wZW5lZCcsIFskZGlhbG9nXSk7XG4gICAgICAkZGlhbG9nLmZvY3VzKCk7XG4gICAgfSwgMSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgZGlhbG9nLlxuICAgKi9cbiAgc2VsZi5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAkZGlhbG9nLnJlbW92ZUNsYXNzKCdoNXAtb3BlbicpOyAvLyBGYWRlIG91dFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJGRpYWxvZy5yZW1vdmUoKTtcbiAgICAgIEg1UC5qUXVlcnkoc2VsZikudHJpZ2dlcignZGlhbG9nLWNsb3NlZCcsIFskZGlhbG9nXSk7XG4gICAgICAkZWxlbWVudC5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgJGVsZW1lbnQuZm9jdXMoKTtcbiAgICB9LCAyMDApO1xuICB9O1xufTtcblxuLyoqXG4gKiBHYXRoZXIgY29weXJpZ2h0IGluZm9ybWF0aW9uIGZvciB0aGUgZ2l2ZW4gY29udGVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VcbiAqICAgSDVQIGluc3RhbmNlIHRvIGdldCBjb3B5cmlnaHQgaW5mb3JtYXRpb24gZm9yLlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtZXRlcnNcbiAqICAgUGFyYW1ldGVycyBvZiB0aGUgY29udGVudCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb250ZW50SWRcbiAqICAgSWRlbnRpZmllcyB0aGUgSDVQIGNvbnRlbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXRhZGF0YVxuICogICBNZXRhZGF0YSBvZiB0aGUgY29udGVudCBpbnN0YW5jZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IENvcHlyaWdodCBpbmZvcm1hdGlvbi5cbiAqL1xuSDVQLmdldENvcHlyaWdodHMgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIHBhcmFtZXRlcnMsIGNvbnRlbnRJZCwgbWV0YWRhdGEpIHtcbiAgdmFyIGNvcHlyaWdodHM7XG5cbiAgaWYgKGluc3RhbmNlLmdldENvcHlyaWdodHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBVc2UgdGhlIGluc3RhbmNlJ3Mgb3duIGNvcHlyaWdodCBnZW5lcmF0b3JcbiAgICAgIGNvcHlyaWdodHMgPSBpbnN0YW5jZS5nZXRDb3B5cmlnaHRzKCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIEZhaWxlZCwgcHJldmVudCBjcmFzaGluZyBwYWdlLlxuICAgIH1cbiAgfVxuXG4gIGlmIChjb3B5cmlnaHRzID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBDcmVhdGUgYSBnZW5lcmljIGZsYXQgY29weXJpZ2h0IGxpc3RcbiAgICBjb3B5cmlnaHRzID0gbmV3IEg1UC5Db250ZW50Q29weXJpZ2h0cygpO1xuICAgIEg1UC5maW5kQ29weXJpZ2h0cyhjb3B5cmlnaHRzLCBwYXJhbWV0ZXJzLCBjb250ZW50SWQpO1xuICB9XG5cbiAgdmFyIG1ldGFkYXRhQ29weXJpZ2h0cyA9IEg1UC5idWlsZE1ldGFkYXRhQ29weXJpZ2h0cyhtZXRhZGF0YSwgaW5zdGFuY2UubGlicmFyeUluZm8ubWFjaGluZU5hbWUpO1xuICBpZiAobWV0YWRhdGFDb3B5cmlnaHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb3B5cmlnaHRzLmFkZE1lZGlhSW5Gcm9udChtZXRhZGF0YUNvcHlyaWdodHMpO1xuICB9XG5cbiAgaWYgKGNvcHlyaWdodHMgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIENvbnZlcnQgdG8gc3RyaW5nXG4gICAgY29weXJpZ2h0cyA9IGNvcHlyaWdodHMudG9TdHJpbmcoKTtcbiAgfVxuICByZXR1cm4gY29weXJpZ2h0cztcbn07XG5cbi8qKlxuICogR2F0aGVyIGEgZmxhdCBsaXN0IG9mIGNvcHlyaWdodCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwYXJhbSB7SDVQLkNvbnRlbnRDb3B5cmlnaHRzfSBpbmZvXG4gKiAgIFVzZWQgdG8gY29sbGVjdCBhbGwgaW5mb3JtYXRpb24gaW4uXG4gKiBAcGFyYW0geyhPYmplY3R8QXJyYXkpfSBwYXJhbWV0ZXJzXG4gKiAgIFRvIHNlYXJjaCBmb3IgZmlsZSBvYmplY3RzIGluLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbnRlbnRJZFxuICogICBVc2VkIHRvIGluc2VydCB0aHVtYm5haWxzIGZvciBpbWFnZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gZXh0cmFzIC0gRXh0cmFzLlxuICogQHBhcmFtIHtvYmplY3R9IGV4dHJhcy5tZXRhZGF0YSAtIE1ldGFkYXRhXG4gKiBAcGFyYW0ge29iamVjdH0gZXh0cmFzLm1hY2hpbmVOYW1lIC0gTGlicmFyeSBuYW1lIG9mIHNvbWUga2luZC5cbiAqICAgTWV0YWRhdGEgb2YgdGhlIGNvbnRlbnQgaW5zdGFuY2UuXG4gKi9cbkg1UC5maW5kQ29weXJpZ2h0cyA9IGZ1bmN0aW9uIChpbmZvLCBwYXJhbWV0ZXJzLCBjb250ZW50SWQsIGV4dHJhcykge1xuICAvLyBJZiBleHRyYXMgYXJlXG4gIGlmIChleHRyYXMpIHtcbiAgICBleHRyYXMucGFyYW1zID0gcGFyYW1ldGVycztcbiAgICBidWlsZEZyb21NZXRhZGF0YShleHRyYXMsIGV4dHJhcy5tYWNoaW5lTmFtZSwgY29udGVudElkKTtcbiAgfVxuXG4gIHZhciBsYXN0Q29udGVudFR5cGVOYW1lO1xuICAvLyBDeWNsZSB0aHJvdWdoIHBhcmFtZXRlcnNcbiAgZm9yICh2YXIgZmllbGQgaW4gcGFyYW1ldGVycykge1xuICAgIGlmICghcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCkpIHtcbiAgICAgIGNvbnRpbnVlOyAvLyBEbyBub3QgY2hlY2tcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBUaGlzIGhhY2sgc2hvdWxkIGJlIHJlbW92ZWQgYWZ0ZXIgMjAxNy0xMS0wMVxuICAgICAqIFRoZSBjb2RlIHRoYXQgd2FzIHVzaW5nIHRoaXMgd2FzIHJlbW92ZWQgYnkgSEZQLTU3NFxuICAgICAqIFRoaXMgbm90ZSB3YXMgc2VlbiBvbiAyMDE4LTA0LTA0LCBhbmQgY29uc3VsdGF0aW9uIHdpdGhcbiAgICAgKiBoaWdoZXIgYXV0aG9yaXRpZXMgbGVhZCB0byBrZWVwaW5nIHRoZSBjb2RlIGZvciBub3cgOy0pXG4gICAgICovXG4gICAgaWYgKGZpZWxkID09PSAnb3ZlcnJpZGVTZXR0aW5ncycpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSBzZW1hbnRpY3MgZmllbGQgJ292ZXJyaWRlU2V0dGluZ3MnIGlzIERFUFJFQ0FURUQgYW5kIHNob3VsZCBub3QgYmUgdXNlZC5cIik7XG4gICAgICBjb25zb2xlLndhcm4ocGFyYW1ldGVycyk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBwYXJhbWV0ZXJzW2ZpZWxkXTtcblxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5saWJyYXJ5ICYmIHR5cGVvZiB2YWx1ZS5saWJyYXJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgbGFzdENvbnRlbnRUeXBlTmFtZSA9IHZhbHVlLmxpYnJhcnkuc3BsaXQoJyAnKVswXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsdWUgJiYgdmFsdWUubGlicmFyeSAmJiB0eXBlb2YgdmFsdWUubGlicmFyeSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxhc3RDb250ZW50VHlwZU5hbWUgPSAodmFsdWUubGlicmFyeS5saWJyYXJ5ICYmIHR5cGVvZiB2YWx1ZS5saWJyYXJ5LmxpYnJhcnkgPT09ICdzdHJpbmcnKSA/IHZhbHVlLmxpYnJhcnkubGlicmFyeS5zcGxpdCgnICcpWzBdIDogbGFzdENvbnRlbnRUeXBlTmFtZTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgLy8gQ3ljbGUgdGhyb3VnaCBhcnJheVxuICAgICAgSDVQLmZpbmRDb3B5cmlnaHRzKGluZm8sIHZhbHVlLCBjb250ZW50SWQpO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgYnVpbGRGcm9tTWV0YWRhdGEodmFsdWUsIGxhc3RDb250ZW50VHlwZU5hbWUsIGNvbnRlbnRJZCk7XG5cbiAgICAgIC8vIENoZWNrIGlmIG9iamVjdCBpcyBhIGZpbGUgd2l0aCBjb3B5cmlnaHRzIChvbGQgY29yZSlcbiAgICAgIGlmICh2YWx1ZS5jb3B5cmlnaHQgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgIHZhbHVlLmNvcHlyaWdodC5saWNlbnNlID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICB2YWx1ZS5wYXRoID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICB2YWx1ZS5taW1lID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAvLyBOb3BlLCBjeWNsZSB0aHJvdWdodCBvYmplY3RcbiAgICAgICAgSDVQLmZpbmRDb3B5cmlnaHRzKGluZm8sIHZhbHVlLCBjb250ZW50SWQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIEZvdW5kIGZpbGUsIGFkZCBjb3B5cmlnaHRzXG4gICAgICAgIHZhciBjb3B5cmlnaHRzID0gbmV3IEg1UC5NZWRpYUNvcHlyaWdodCh2YWx1ZS5jb3B5cmlnaHQpO1xuICAgICAgICBpZiAodmFsdWUud2lkdGggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5oZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvcHlyaWdodHMuc2V0VGh1bWJuYWlsKG5ldyBINVAuVGh1bWJuYWlsKEg1UC5nZXRQYXRoKHZhbHVlLnBhdGgsIGNvbnRlbnRJZCksIHZhbHVlLndpZHRoLCB2YWx1ZS5oZWlnaHQpKTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLmFkZE1lZGlhKGNvcHlyaWdodHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkRnJvbU1ldGFkYXRhKGRhdGEsIG5hbWUsIGNvbnRlbnRJZCkge1xuICAgIGlmIChkYXRhLm1ldGFkYXRhKSB7XG4gICAgICBjb25zdCBtZXRhZGF0YUNvcHlyaWdodHMgPSBINVAuYnVpbGRNZXRhZGF0YUNvcHlyaWdodHMoZGF0YS5tZXRhZGF0YSwgbmFtZSk7XG4gICAgICBpZiAobWV0YWRhdGFDb3B5cmlnaHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGRhdGEucGFyYW1zICYmIGRhdGEucGFyYW1zLmNvbnRlbnROYW1lID09PSAnSW1hZ2UnICYmIGRhdGEucGFyYW1zLmZpbGUpIHtcbiAgICAgICAgICBjb25zdCBwYXRoID0gZGF0YS5wYXJhbXMuZmlsZS5wYXRoO1xuICAgICAgICAgIGNvbnN0IHdpZHRoID0gZGF0YS5wYXJhbXMuZmlsZS53aWR0aDtcbiAgICAgICAgICBjb25zdCBoZWlnaHQgPSBkYXRhLnBhcmFtcy5maWxlLmhlaWdodDtcbiAgICAgICAgICBtZXRhZGF0YUNvcHlyaWdodHMuc2V0VGh1bWJuYWlsKG5ldyBINVAuVGh1bWJuYWlsKEg1UC5nZXRQYXRoKHBhdGgsIGNvbnRlbnRJZCksIHdpZHRoLCBoZWlnaHQpKTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLmFkZE1lZGlhKG1ldGFkYXRhQ29weXJpZ2h0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5INVAuYnVpbGRNZXRhZGF0YUNvcHlyaWdodHMgPSBmdW5jdGlvbiAobWV0YWRhdGEpIHtcbiAgaWYgKG1ldGFkYXRhICYmIG1ldGFkYXRhLmxpY2Vuc2UgIT09IHVuZGVmaW5lZCAmJiBtZXRhZGF0YS5saWNlbnNlICE9PSAnVScpIHtcbiAgICB2YXIgZGF0YXNldCA9IHtcbiAgICAgIGNvbnRlbnRUeXBlOiBtZXRhZGF0YS5jb250ZW50VHlwZSxcbiAgICAgIHRpdGxlOiBtZXRhZGF0YS50aXRsZSxcbiAgICAgIGF1dGhvcjogKG1ldGFkYXRhLmF1dGhvcnMgJiYgbWV0YWRhdGEuYXV0aG9ycy5sZW5ndGggPiAwKSA/IG1ldGFkYXRhLmF1dGhvcnMubWFwKGZ1bmN0aW9uIChhdXRob3IpIHtcbiAgICAgICAgcmV0dXJuIChhdXRob3Iucm9sZSkgPyBhdXRob3IubmFtZSArICcgKCcgKyBhdXRob3Iucm9sZSArICcpJyA6IGF1dGhvci5uYW1lO1xuICAgICAgfSkuam9pbignLCAnKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNvdXJjZTogbWV0YWRhdGEuc291cmNlLFxuICAgICAgeWVhcjogKG1ldGFkYXRhLnllYXJGcm9tKSA/IChtZXRhZGF0YS55ZWFyRnJvbSArICgobWV0YWRhdGEueWVhclRvKSA/ICctJyArIG1ldGFkYXRhLnllYXJUbzogJycpKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxpY2Vuc2U6IG1ldGFkYXRhLmxpY2Vuc2UsXG4gICAgICB2ZXJzaW9uOiBtZXRhZGF0YS5saWNlbnNlVmVyc2lvbixcbiAgICAgIGxpY2Vuc2VFeHRyYXM6IG1ldGFkYXRhLmxpY2Vuc2VFeHRyYXMsXG4gICAgICBjaGFuZ2VzOiAobWV0YWRhdGEuY2hhbmdlcyAmJiBtZXRhZGF0YS5jaGFuZ2VzLmxlbmd0aCA+IDApID8gbWV0YWRhdGEuY2hhbmdlcy5tYXAoZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICByZXR1cm4gY2hhbmdlLmxvZyArIChjaGFuZ2UuYXV0aG9yID8gJywgJyArIGNoYW5nZS5hdXRob3IgOiAnJykgKyAoY2hhbmdlLmRhdGUgPyAnLCAnICsgY2hhbmdlLmRhdGUgOiAnJyk7XG4gICAgICB9KS5qb2luKCcgLyAnKSA6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3IEg1UC5NZWRpYUNvcHlyaWdodChkYXRhc2V0KTtcbiAgfVxufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgZGlhbG9nIGNvbnRhaW5pbmcgdGhlIGRvd25sb2FkIGJ1dHRvbiBhbmQgY29weSBidXR0b24uXG4gKlxuICogQHBhcmFtIHtINVAualF1ZXJ5fSAkZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRlbnREYXRhXG4gKiBAcGFyYW0ge09iamVjdH0gbGlicmFyeVxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlXG4gKiBAcGFyYW0ge251bWJlcn0gY29udGVudElkXG4gKi9cbkg1UC5vcGVuUmV1c2VEaWFsb2cgPSBmdW5jdGlvbiAoJGVsZW1lbnQsIGNvbnRlbnREYXRhLCBsaWJyYXJ5LCBpbnN0YW5jZSwgY29udGVudElkKSB7XG4gIGxldCBodG1sID0gJyc7XG4gIGlmIChjb250ZW50RGF0YS5kaXNwbGF5T3B0aW9ucy5leHBvcnQpIHtcbiAgICBodG1sICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImg1cC1iaWctYnV0dG9uIGg1cC1kb3dubG9hZC1idXR0b25cIj48ZGl2IGNsYXNzPVwiaDVwLWJ1dHRvbi10aXRsZVwiPkRvd25sb2FkIGFzIGFuIC5oNXAgZmlsZTwvZGl2PjxkaXYgY2xhc3M9XCJoNXAtYnV0dG9uLWRlc2NyaXB0aW9uXCI+Lmg1cCBmaWxlcyBtYXkgYmUgdXBsb2FkZWQgdG8gYW55IHdlYi1zaXRlIHdoZXJlIEg1UCBjb250ZW50IG1heSBiZSBjcmVhdGVkLjwvZGl2PjwvYnV0dG9uPic7XG4gIH1cbiAgaWYgKGNvbnRlbnREYXRhLmRpc3BsYXlPcHRpb25zLmV4cG9ydCAmJiBjb250ZW50RGF0YS5kaXNwbGF5T3B0aW9ucy5jb3B5KSB7XG4gICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cImg1cC1ob3Jpem9udGFsLWxpbmUtdGV4dFwiPjxzcGFuPm9yPC9zcGFuPjwvZGl2Pic7XG4gIH1cbiAgaWYgKGNvbnRlbnREYXRhLmRpc3BsYXlPcHRpb25zLmNvcHkpIHtcbiAgICBodG1sICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImg1cC1iaWctYnV0dG9uIGg1cC1jb3B5LWJ1dHRvblwiPjxkaXYgY2xhc3M9XCJoNXAtYnV0dG9uLXRpdGxlXCI+Q29weSBjb250ZW50PC9kaXY+PGRpdiBjbGFzcz1cImg1cC1idXR0b24tZGVzY3JpcHRpb25cIj5Db3BpZWQgY29udGVudCBtYXkgYmUgcGFzdGVkIGFueXdoZXJlIHRoaXMgY29udGVudCB0eXBlIGlzIHN1cHBvcnRlZCBvbiB0aGlzIHdlYnNpdGUuPC9kaXY+PC9idXR0b24+JztcbiAgfVxuXG4gIGNvbnN0IGRpYWxvZyA9IG5ldyBINVAuRGlhbG9nKCdyZXVzZScsIEg1UC50KCdyZXVzZUNvbnRlbnQnKSwgaHRtbCwgJGVsZW1lbnQpO1xuXG4gIC8vIFNlbGVjdGluZyBlbWJlZCBjb2RlIHdoZW4gZGlhbG9nIGlzIG9wZW5lZFxuICBINVAualF1ZXJ5KGRpYWxvZykub24oJ2RpYWxvZy1vcGVuZWQnLCBmdW5jdGlvbiAoZSwgJGRpYWxvZykge1xuICAgIEg1UC5qUXVlcnkoJzxhIGhyZWY9XCJodHRwczovL2g1cC5vcmcvbm9kZS80NDIyMjVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5Nb3JlIEluZm88L2E+JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSkuYXBwZW5kVG8oJGRpYWxvZy5maW5kKCdoMicpKTtcbiAgICAkZGlhbG9nLmZpbmQoJy5oNXAtZG93bmxvYWQtYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjb250ZW50RGF0YS5leHBvcnRVcmw7XG4gICAgICBpbnN0YW5jZS50cmlnZ2VyWEFQSSgnZG93bmxvYWRlZCcpO1xuICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgJGRpYWxvZy5maW5kKCcuaDVwLWNvcHktYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgaXRlbSA9IG5ldyBINVAuQ2xpcGJvYXJkSXRlbShsaWJyYXJ5KTtcbiAgICAgIGl0ZW0uY29udGVudElkID0gY29udGVudElkO1xuICAgICAgSDVQLnNldENsaXBib2FyZChpdGVtKTtcbiAgICAgIGluc3RhbmNlLnRyaWdnZXJYQVBJKCdjb3BpZWQnKTtcbiAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgSDVQLmF0dGFjaFRvYXN0VG8oXG4gICAgICAgIEg1UC5qUXVlcnkoJy5oNXAtY29udGVudDpmaXJzdCcpWzBdLFxuICAgICAgICBINVAudCgnY29udGVudENvcGllZCcpLFxuICAgICAgICB7XG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXJlZCcsXG4gICAgICAgICAgICB2ZXJ0aWNhbDogJ2NlbnRlcmVkJyxcbiAgICAgICAgICAgIG5vT3ZlcmZsb3dYOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICAgIEg1UC50cmlnZ2VyKGluc3RhbmNlLCAncmVzaXplJyk7XG4gIH0pLm9uKCdkaWFsb2ctY2xvc2VkJywgZnVuY3Rpb24gKCkge1xuICAgIEg1UC50cmlnZ2VyKGluc3RhbmNlLCAncmVzaXplJyk7XG4gIH0pO1xuXG4gIGRpYWxvZy5vcGVuKCk7XG59O1xuXG4vKipcbiAqIERpc3BsYXkgYSBkaWFsb2cgY29udGFpbmluZyB0aGUgZW1iZWQgY29kZS5cbiAqXG4gKiBAcGFyYW0ge0g1UC5qUXVlcnl9ICRlbGVtZW50XG4gKiAgIEVsZW1lbnQgdG8gaW5zZXJ0IGRpYWxvZyBhZnRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBlbWJlZENvZGVcbiAqICAgVGhlIGVtYmVkIGNvZGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVzaXplQ29kZVxuICogICBUaGUgYWR2YW5jZWQgcmVzaXplIGNvZGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzaXplXG4gKiAgIFRoZSBjb250ZW50J3Mgc2l6ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplLndpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZS5oZWlnaHRcbiAqL1xuSDVQLm9wZW5FbWJlZERpYWxvZyA9IGZ1bmN0aW9uICgkZWxlbWVudCwgZW1iZWRDb2RlLCByZXNpemVDb2RlLCBzaXplLCBpbnN0YW5jZSkge1xuICB2YXIgZnVsbEVtYmVkQ29kZSA9IGVtYmVkQ29kZSArIHJlc2l6ZUNvZGU7XG4gIHZhciBkaWFsb2cgPSBuZXcgSDVQLkRpYWxvZygnZW1iZWQnLCBINVAudCgnZW1iZWQnKSwgJzx0ZXh0YXJlYSBjbGFzcz1cImg1cC1lbWJlZC1jb2RlLWNvbnRhaW5lclwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3RleHRhcmVhPicgKyBINVAudCgnc2l6ZScpICsgJzogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCInICsgTWF0aC5jZWlsKHNpemUud2lkdGgpICsgJ1wiIGNsYXNzPVwiaDVwLWVtYmVkLXNpemVcIi8+IMOXIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJyArIE1hdGguY2VpbChzaXplLmhlaWdodCkgKyAnXCIgY2xhc3M9XCJoNXAtZW1iZWQtc2l6ZVwiLz4gcHg8YnIvPjxkaXYgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiaDVwLWV4cGFuZGVyXCI+JyArIEg1UC50KCdzaG93QWR2YW5jZWQnKSArICc8L2Rpdj48ZGl2IGNsYXNzPVwiaDVwLWV4cGFuZGVyLWNvbnRlbnRcIj48cD4nICsgSDVQLnQoJ2FkdmFuY2VkSGVscCcpICsgJzwvcD48dGV4dGFyZWEgY2xhc3M9XCJoNXAtZW1iZWQtY29kZS1jb250YWluZXJcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+JyArIHJlc2l6ZUNvZGUgKyAnPC90ZXh0YXJlYT48L2Rpdj4nLCAkZWxlbWVudCk7XG5cbiAgLy8gU2VsZWN0aW5nIGVtYmVkIGNvZGUgd2hlbiBkaWFsb2cgaXMgb3BlbmVkXG4gIEg1UC5qUXVlcnkoZGlhbG9nKS5vbignZGlhbG9nLW9wZW5lZCcsIGZ1bmN0aW9uIChldmVudCwgJGRpYWxvZykge1xuICAgIHZhciAkaW5uZXIgPSAkZGlhbG9nLmZpbmQoJy5oNXAtaW5uZXInKTtcbiAgICB2YXIgJHNjcm9sbCA9ICRpbm5lci5maW5kKCcuaDVwLXNjcm9sbC1jb250ZW50Jyk7XG4gICAgdmFyIGRpZmYgPSAkc2Nyb2xsLm91dGVySGVpZ2h0KCkgLSAkc2Nyb2xsLmlubmVySGVpZ2h0KCk7XG4gICAgdmFyIHBvc2l0aW9uSW5uZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBINVAudHJpZ2dlcihpbnN0YW5jZSwgJ3Jlc2l6ZScpO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgY2hhbmdpbmcgb2Ygd2lkdGgvaGVpZ2h0XG4gICAgdmFyICR3ID0gJGRpYWxvZy5maW5kKCcuaDVwLWVtYmVkLXNpemU6ZXEoMCknKTtcbiAgICB2YXIgJGggPSAkZGlhbG9nLmZpbmQoJy5oNXAtZW1iZWQtc2l6ZTplcSgxKScpO1xuICAgIHZhciBnZXROdW0gPSBmdW5jdGlvbiAoJGUsIGQpIHtcbiAgICAgIHZhciBudW0gPSBwYXJzZUZsb2F0KCRlLnZhbCgpKTtcbiAgICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiBkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE1hdGguY2VpbChudW0pO1xuICAgIH07XG4gICAgdmFyIHVwZGF0ZUVtYmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgJGRpYWxvZy5maW5kKCcuaDVwLWVtYmVkLWNvZGUtY29udGFpbmVyOmZpcnN0JykudmFsKGZ1bGxFbWJlZENvZGUucmVwbGFjZSgnOncnLCBnZXROdW0oJHcsIHNpemUud2lkdGgpKS5yZXBsYWNlKCc6aCcsIGdldE51bSgkaCwgc2l6ZS5oZWlnaHQpKSk7XG4gICAgfTtcblxuICAgICR3LmNoYW5nZSh1cGRhdGVFbWJlZCk7XG4gICAgJGguY2hhbmdlKHVwZGF0ZUVtYmVkKTtcbiAgICB1cGRhdGVFbWJlZCgpO1xuXG4gICAgLy8gU2VsZWN0IHRleHQgYW5kIGV4cGFuZCB0ZXh0YXJlYXNcbiAgICAkZGlhbG9nLmZpbmQoJy5oNXAtZW1iZWQtY29kZS1jb250YWluZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIEg1UC5qUXVlcnkodGhpcykuY3NzKCdoZWlnaHQnLCB0aGlzLnNjcm9sbEhlaWdodCArICdweCcpLmZvY3VzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgSDVQLmpRdWVyeSh0aGlzKS5zZWxlY3QoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgICRkaWFsb2cuZmluZCgnLmg1cC1lbWJlZC1jb2RlLWNvbnRhaW5lcicpLmVxKDApLnNlbGVjdCgpO1xuICAgIHBvc2l0aW9uSW5uZXIoKTtcblxuICAgIC8vIEV4cGFuZCBhZHZhbmNlZCBlbWJlZFxuICAgIHZhciBleHBhbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGV4cGFuZGVyID0gSDVQLmpRdWVyeSh0aGlzKTtcbiAgICAgIHZhciAkY29udGVudCA9ICRleHBhbmRlci5uZXh0KCk7XG4gICAgICBpZiAoJGNvbnRlbnQuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgJGV4cGFuZGVyLnJlbW92ZUNsYXNzKCdoNXAtb3BlbicpLnRleHQoSDVQLnQoJ3Nob3dBZHZhbmNlZCcpKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgJGNvbnRlbnQuaGlkZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICRleHBhbmRlci5hZGRDbGFzcygnaDVwLW9wZW4nKS50ZXh0KEg1UC50KCdoaWRlQWR2YW5jZWQnKSkuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAkY29udGVudC5zaG93KCk7XG4gICAgICB9XG4gICAgICAkZGlhbG9nLmZpbmQoJy5oNXAtZW1iZWQtY29kZS1jb250YWluZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgSDVQLmpRdWVyeSh0aGlzKS5jc3MoJ2hlaWdodCcsIHRoaXMuc2Nyb2xsSGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICB9KTtcbiAgICAgIHBvc2l0aW9uSW5uZXIoKTtcbiAgICB9O1xuICAgICRkaWFsb2cuZmluZCgnLmg1cC1leHBhbmRlcicpLmNsaWNrKGV4cGFuZCkua2V5cHJlc3MoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgZXhwYW5kLmFwcGx5KHRoaXMpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pLm9uKCdkaWFsb2ctY2xvc2VkJywgZnVuY3Rpb24gKCkge1xuICAgIEg1UC50cmlnZ2VyKGluc3RhbmNlLCAncmVzaXplJyk7XG4gIH0pO1xuXG4gIGRpYWxvZy5vcGVuKCk7XG59O1xuXG4vKipcbiAqIFNob3cgYSB0b2FzdCBtZXNzYWdlLlxuICpcbiAqIFRoZSByZWZlcmVuY2UgZWxlbWVudCBjb3VsZCBiZSBkb20gZWxlbWVudHMgdGhlIHRvYXN0IHNob3VsZCBiZSBhdHRhY2hlZCB0byxcbiAqIG9yIGUuZy4gdGhlIGRvY3VtZW50IGJvZHkgZm9yIGdlbmVyYWwgdG9hc3QgbWVzc2FnZXMuXG4gKlxuICogQHBhcmFtIHtET019IGVsZW1lbnQgUmVmZXJlbmNlIGVsZW1lbnQgdG8gc2hvdyB0b2FzdCBtZXNzYWdlIGZvci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIE1lc3NhZ2UgdG8gc2hvdy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29uZmlnXSBDb25maWd1cmF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb25maWcuc3R5bGU9aDVwLXRvYXN0XSBTdHlsZSBuYW1lIGZvciB0aGUgdG9vbHRpcC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLmR1cmF0aW9uPTMwMDBdIFRvYXN0IG1lc3NhZ2UgbGVuZ3RoIGluIG1zLlxuICogQHBhcmFtIHtvYmplY3R9IFtjb25maWcucG9zaXRpb25dIFJlbGF0aXZlIHBvc2l0aW9uaW5nIG9mIHRoZSB0b2FzdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29uZmlnLnBvc2l0aW9uLmhvcml6b250YWw9Y2VudGVyZWRdIFtiZWZvcmV8bGVmdHxjZW50ZXJlZHxyaWdodHxhZnRlcl0uXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbmZpZy5wb3NpdGlvbi52ZXJ0aWNhbD1iZWxvd10gW2Fib3ZlfHRvcHxjZW50ZXJlZHxib3R0b218YmVsb3ddLlxuICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcucG9zaXRpb24ub2Zmc2V0SG9yaXpvbnRhbD0wXSBFeHRyYSBob3Jpem9udGFsIG9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLnBvc2l0aW9uLm9mZnNldFZlcnRpY2FsPTBdIEV4dHJhIHZldGljYWwgb2Zmc2V0LlxuICogQHBhcmFtIHtib29sZWFufSBbY29uZmlnLnBvc2l0aW9uLm5vT3ZlcmZsb3dMZWZ0PWZhbHNlXSBUcnVlIHRvIHByZXZlbnQgb3ZlcmZsb3cgbGVmdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NvbmZpZy5wb3NpdGlvbi5ub092ZXJmbG93UmlnaHQ9ZmFsc2VdIFRydWUgdG8gcHJldmVudCBvdmVyZmxvdyByaWdodC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NvbmZpZy5wb3NpdGlvbi5ub092ZXJmbG93VG9wPWZhbHNlXSBUcnVlIHRvIHByZXZlbnQgb3ZlcmZsb3cgdG9wLlxuICogQHBhcmFtIHtib29sZWFufSBbY29uZmlnLnBvc2l0aW9uLm5vT3ZlcmZsb3dCb3R0b209ZmFsc2VdIFRydWUgdG8gcHJldmVudCBvdmVyZmxvdyBib3R0b20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjb25maWcucG9zaXRpb24ubm9PdmVyZmxvd1g9ZmFsc2VdIFRydWUgdG8gcHJldmVudCBvdmVyZmxvdyBsZWZ0IGFuZCByaWdodC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NvbmZpZy5wb3NpdGlvbi5ub092ZXJmbG93WT1mYWxzZV0gVHJ1ZSB0byBwcmV2ZW50IG92ZXJmbG93IHRvcCBhbmQgYm90dG9tLlxuICogQHBhcmFtIHtvYmplY3R9IFtjb25maWcucG9zaXRpb24ub3ZlcmZsb3dSZWZlcmVuY2U9ZG9jdW1lbnQuYm9keV0gRE9NIHJlZmVyZW5jZSBmb3Igb3ZlcmZsb3cuXG4gKi9cbkg1UC5hdHRhY2hUb2FzdFRvID0gZnVuY3Rpb24gKGVsZW1lbnQsIG1lc3NhZ2UsIGNvbmZpZykge1xuICBpZiAoZWxlbWVudCA9PT0gdW5kZWZpbmVkIHx8IG1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGV2ZW50UGF0aCA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICB2YXIgcGF0aCA9IChldnQuY29tcG9zZWRQYXRoICYmIGV2dC5jb21wb3NlZFBhdGgoKSkgfHwgZXZ0LnBhdGg7XG4gICAgdmFyIHRhcmdldCA9IGV2dC50YXJnZXQ7XG5cbiAgICBpZiAocGF0aCAhPSBudWxsKSB7XG4gICAgICAvLyBTYWZhcmkgZG9lc24ndCBpbmNsdWRlIFdpbmRvdywgYnV0IGl0IHNob3VsZC5cbiAgICAgIHJldHVybiAocGF0aC5pbmRleE9mKHdpbmRvdykgPCAwKSA/IHBhdGguY29uY2F0KHdpbmRvdykgOiBwYXRoO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQgPT09IHdpbmRvdykge1xuICAgICAgcmV0dXJuIFt3aW5kb3ddO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhcmVudHMobm9kZSwgbWVtbykge1xuICAgICAgbWVtbyA9IG1lbW8gfHwgW107XG4gICAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblxuICAgICAgaWYgKCFwYXJlbnROb2RlKSB7XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRzKHBhcmVudE5vZGUsIG1lbW8uY29uY2F0KHBhcmVudE5vZGUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW3RhcmdldF0uY29uY2F0KGdldFBhcmVudHModGFyZ2V0KSwgd2luZG93KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlIGNsaWNrIHdoaWxlIHRvYXN0IGlzIHNob3dpbmcuXG4gICAqL1xuICBjb25zdCBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvKlxuICAgICAqIEEgY29tbW9uIHVzZSBjYXNlIHdpbGwgYmUgdG8gYXR0YWNoIHRvYXN0cyB0byBidXR0b25zIHRoYXQgYXJlIGNsaWNrZWQuXG4gICAgICogVGhlIGNsaWNrIHdvdWxkIHJlbW92ZSB0aGUgdG9hc3QgbWVzc2FnZSBpbnN0YW50bHkgd2l0aG91dCB0aGlzIGNoZWNrLlxuICAgICAqIENoaWxkcmVuIG9mIHRoZSBjbGlja2VkIGVsZW1lbnQgYXJlIGFsc28gaWdub3JlZC5cbiAgICAgKi9cbiAgICB2YXIgcGF0aCA9IGV2ZW50UGF0aChldmVudCk7XG4gICAgaWYgKHBhdGguaW5kZXhPZihlbGVtZW50KSAhPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICByZW1vdmVUb2FzdCgpO1xuICB9O1xuXG5cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB0b2FzdCBtZXNzYWdlLlxuICAgKi9cbiAgY29uc3QgcmVtb3ZlVG9hc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgIGlmICh0b2FzdC5wYXJlbnROb2RlKSB7XG4gICAgICB0b2FzdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvYXN0KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBhYnNvbHV0ZSBjb29yZGluYXRlcyBmb3IgdGhlIHRvYXN0LlxuICAgKlxuICAgKiBAcGFyYW0ge0RPTX0gZWxlbWVudCBSZWZlcmVuY2UgZWxlbWVudCB0byBzaG93IHRvYXN0IG1lc3NhZ2UgZm9yLlxuICAgKiBAcGFyYW0ge0RPTX0gdG9hc3QgVG9hc3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtwb3NpdGlvbj17fV0gUmVsYXRpdmUgcG9zaXRpb25pbmcgb2YgdGhlIHRvYXN0IG1lc3NhZ2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcG9zaXRpb24uaG9yaXpvbnRhbD1jZW50ZXJlZF0gW2JlZm9yZXxsZWZ0fGNlbnRlcmVkfHJpZ2h0fGFmdGVyXS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtwb3NpdGlvbi52ZXJ0aWNhbD1iZWxvd10gW2Fib3ZlfHRvcHxjZW50ZXJlZHxib3R0b218YmVsb3ddLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3Bvc2l0aW9uLm9mZnNldEhvcml6b250YWw9MF0gRXh0cmEgaG9yaXpvbnRhbCBvZmZzZXQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbcG9zaXRpb24ub2Zmc2V0VmVydGljYWw9MF0gRXh0cmEgdmV0aWNhbCBvZmZzZXQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Bvc2l0aW9uLm5vT3ZlcmZsb3dMZWZ0PWZhbHNlXSBUcnVlIHRvIHByZXZlbnQgb3ZlcmZsb3cgbGVmdC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbcG9zaXRpb24ubm9PdmVyZmxvd1JpZ2h0PWZhbHNlXSBUcnVlIHRvIHByZXZlbnQgb3ZlcmZsb3cgcmlnaHQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Bvc2l0aW9uLm5vT3ZlcmZsb3dUb3A9ZmFsc2VdIFRydWUgdG8gcHJldmVudCBvdmVyZmxvdyB0b3AuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Bvc2l0aW9uLm5vT3ZlcmZsb3dCb3R0b209ZmFsc2VdIFRydWUgdG8gcHJldmVudCBvdmVyZmxvdyBib3R0b20uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Bvc2l0aW9uLm5vT3ZlcmZsb3dYPWZhbHNlXSBUcnVlIHRvIHByZXZlbnQgb3ZlcmZsb3cgbGVmdCBhbmQgcmlnaHQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Bvc2l0aW9uLm5vT3ZlcmZsb3dZPWZhbHNlXSBUcnVlIHRvIHByZXZlbnQgb3ZlcmZsb3cgdG9wIGFuZCBib3R0b20uXG4gICAqIEByZXR1cm4ge29iamVjdH1cbiAgICovXG4gIGNvbnN0IGdldFRvYXN0Q29vcmRpbmF0ZXMgPSBmdW5jdGlvbiAoZWxlbWVudCwgdG9hc3QsIHBvc2l0aW9uKSB7XG4gICAgcG9zaXRpb24gPSBwb3NpdGlvbiB8fCB7fTtcbiAgICBwb3NpdGlvbi5vZmZzZXRIb3Jpem9udGFsID0gcG9zaXRpb24ub2Zmc2V0SG9yaXpvbnRhbCB8fCAwO1xuICAgIHBvc2l0aW9uLm9mZnNldFZlcnRpY2FsID0gcG9zaXRpb24ub2Zmc2V0VmVydGljYWwgfHwgMDtcblxuICAgIGNvbnN0IHRvYXN0UmVjdCA9IHRvYXN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGxldCBsZWZ0ID0gMDtcbiAgICBsZXQgdG9wID0gMDtcblxuICAgIC8vIENvbXB1dGUgaG9yaXpvbnRhbCBwb3NpdGlvblxuICAgIHN3aXRjaCAocG9zaXRpb24uaG9yaXpvbnRhbCkge1xuICAgICAgY2FzZSAnYmVmb3JlJzpcbiAgICAgICAgbGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQgLSB0b2FzdFJlY3Qud2lkdGggLSBwb3NpdGlvbi5vZmZzZXRIb3Jpem9udGFsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FmdGVyJzpcbiAgICAgICAgbGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQgKyBlbGVtZW50UmVjdC53aWR0aCArIHBvc2l0aW9uLm9mZnNldEhvcml6b250YWw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGxlZnQgPSBlbGVtZW50UmVjdC5sZWZ0ICsgcG9zaXRpb24ub2Zmc2V0SG9yaXpvbnRhbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIGxlZnQgPSBlbGVtZW50UmVjdC5sZWZ0ICsgZWxlbWVudFJlY3Qud2lkdGggLSB0b2FzdFJlY3Qud2lkdGggLSBwb3NpdGlvbi5vZmZzZXRIb3Jpem9udGFsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NlbnRlcmVkJzpcbiAgICAgICAgbGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQgKyBlbGVtZW50UmVjdC53aWR0aCAvIDIgLSB0b2FzdFJlY3Qud2lkdGggLyAyICsgcG9zaXRpb24ub2Zmc2V0SG9yaXpvbnRhbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBsZWZ0ID0gZWxlbWVudFJlY3QubGVmdCArIGVsZW1lbnRSZWN0LndpZHRoIC8gMiAtIHRvYXN0UmVjdC53aWR0aCAvIDIgKyBwb3NpdGlvbi5vZmZzZXRIb3Jpem9udGFsO1xuICAgIH1cblxuICAgIC8vIENvbXB1dGUgdmVydGljYWwgcG9zaXRpb25cbiAgICBzd2l0Y2ggKHBvc2l0aW9uLnZlcnRpY2FsKSB7XG4gICAgICBjYXNlICdhYm92ZSc6XG4gICAgICAgIHRvcCA9IGVsZW1lbnRSZWN0LnRvcCAtIHRvYXN0UmVjdC5oZWlnaHQgLSBwb3NpdGlvbi5vZmZzZXRWZXJ0aWNhbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdiZWxvdyc6XG4gICAgICAgIHRvcCA9IGVsZW1lbnRSZWN0LnRvcCArIGVsZW1lbnRSZWN0LmhlaWdodCArIHBvc2l0aW9uLm9mZnNldFZlcnRpY2FsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHRvcCA9IGVsZW1lbnRSZWN0LnRvcCArIHBvc2l0aW9uLm9mZnNldFZlcnRpY2FsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHRvcCA9IGVsZW1lbnRSZWN0LnRvcCArIGVsZW1lbnRSZWN0LmhlaWdodCAtIHRvYXN0UmVjdC5oZWlnaHQgLSBwb3NpdGlvbi5vZmZzZXRWZXJ0aWNhbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjZW50ZXJlZCc6XG4gICAgICAgIHRvcCA9IGVsZW1lbnRSZWN0LnRvcCArIGVsZW1lbnRSZWN0LmhlaWdodCAvIDIgLSB0b2FzdFJlY3QuaGVpZ2h0IC8gMiArIHBvc2l0aW9uLm9mZnNldFZlcnRpY2FsO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRvcCA9IGVsZW1lbnRSZWN0LnRvcCArIGVsZW1lbnRSZWN0LmhlaWdodCArIHBvc2l0aW9uLm9mZnNldFZlcnRpY2FsO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgb3ZlcmZsb3dcbiAgICBjb25zdCBvdmVyZmxvd0VsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IGJvdW5kcyA9IG92ZXJmbG93RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoKHBvc2l0aW9uLm5vT3ZlcmZsb3dMZWZ0IHx8IHBvc2l0aW9uLm5vT3ZlcmZsb3dYKSAmJiAobGVmdCA8IGJvdW5kcy54KSkge1xuICAgICAgbGVmdCA9IGJvdW5kcy54O1xuICAgIH1cbiAgICBpZiAoKHBvc2l0aW9uLm5vT3ZlcmZsb3dSaWdodCB8fCBwb3NpdGlvbi5ub092ZXJmbG93WCkgJiYgKChsZWZ0ICsgdG9hc3RSZWN0LndpZHRoKSA+IChib3VuZHMueCArIGJvdW5kcy53aWR0aCkpKSB7XG4gICAgICBsZWZ0ID0gYm91bmRzLnggKyBib3VuZHMud2lkdGggLSB0b2FzdFJlY3Qud2lkdGg7XG4gICAgfVxuICAgIGlmICgocG9zaXRpb24ubm9PdmVyZmxvd1RvcCB8fCBwb3NpdGlvbi5ub092ZXJmbG93WSkgJiYgKHRvcCA8IGJvdW5kcy55KSkge1xuICAgICAgdG9wID0gYm91bmRzLnk7XG4gICAgfVxuICAgIGlmICgocG9zaXRpb24ubm9PdmVyZmxvd0JvdHRvbSB8fCBwb3NpdGlvbi5ub092ZXJmbG93WSkgJiYgKCh0b3AgKyB0b2FzdFJlY3QuaGVpZ2h0KSA+IChib3VuZHMueSArIGJvdW5kcy5oZWlnaHQpKSkge1xuICAgICAgbGVmdCA9IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCAtIHRvYXN0UmVjdC5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtsZWZ0OiBsZWZ0LCB0b3A6IHRvcH07XG4gIH07XG5cbiAgLy8gU2FuaXRpemF0aW9uXG4gIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgY29uZmlnLnN0eWxlID0gY29uZmlnLnN0eWxlIHx8ICdoNXAtdG9hc3QnO1xuICBjb25maWcuZHVyYXRpb24gPSBjb25maWcuZHVyYXRpb24gfHwgMzAwMDtcblxuICAvLyBCdWlsZCB0b2FzdFxuICBjb25zdCB0b2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2FzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLnN0eWxlKTtcbiAgdG9hc3QuY2xhc3NMaXN0LmFkZCgnaDVwLXRvYXN0LWRpc2FibGVkJyk7XG4gIHRvYXN0LmNsYXNzTGlzdC5hZGQoY29uZmlnLnN0eWxlKTtcblxuICBjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIG1zZy5pbm5lckhUTUwgPSBtZXNzYWdlO1xuICB0b2FzdC5hcHBlbmRDaGlsZChtc2cpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9hc3QpO1xuXG4gIC8vIFRoZSBtZXNzYWdlIGhhcyB0byBiZSBzZXQgYmVmb3JlIGdldHRpbmcgdGhlIGNvb3JkaW5hdGVzXG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0VG9hc3RDb29yZGluYXRlcyhlbGVtZW50LCB0b2FzdCwgY29uZmlnLnBvc2l0aW9uKTtcbiAgdG9hc3Quc3R5bGUubGVmdCA9IE1hdGgucm91bmQoY29vcmRpbmF0ZXMubGVmdCkgKyAncHgnO1xuICB0b2FzdC5zdHlsZS50b3AgPSBNYXRoLnJvdW5kKGNvb3JkaW5hdGVzLnRvcCkgKyAncHgnO1xuXG4gIHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2g1cC10b2FzdC1kaXNhYmxlZCcpO1xuICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQocmVtb3ZlVG9hc3QsIGNvbmZpZy5kdXJhdGlvbik7XG5cbiAgLy8gVGhlIHRvYXN0IGNhbiBhbHNvIGJlIHJlbW92ZWQgYnkgY2xpY2tpbmcgc29tZXdoZXJlXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbn07XG5cbi8qKlxuICogQ29weXJpZ2h0cyBmb3IgYSBINVAgQ29udGVudCBMaWJyYXJ5LlxuICpcbiAqIEBjbGFzc1xuICovXG5INVAuQ29udGVudENvcHlyaWdodHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsYWJlbDtcbiAgdmFyIG1lZGlhID0gW107XG4gIHZhciBjb250ZW50ID0gW107XG5cbiAgLyoqXG4gICAqIFNldCBsYWJlbC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0xhYmVsXG4gICAqL1xuICB0aGlzLnNldExhYmVsID0gZnVuY3Rpb24gKG5ld0xhYmVsKSB7XG4gICAgbGFiZWwgPSBuZXdMYWJlbDtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIHN1YiBjb250ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0g1UC5NZWRpYUNvcHlyaWdodH0gbmV3TWVkaWFcbiAgICovXG4gIHRoaXMuYWRkTWVkaWEgPSBmdW5jdGlvbiAobmV3TWVkaWEpIHtcbiAgICBpZiAobmV3TWVkaWEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbWVkaWEucHVzaChuZXdNZWRpYSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgc3ViIGNvbnRlbnQgaW4gZnJvbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7SDVQLk1lZGlhQ29weXJpZ2h0fSBuZXdNZWRpYVxuICAgKi9cbiAgdGhpcy5hZGRNZWRpYUluRnJvbnQgPSBmdW5jdGlvbiAobmV3TWVkaWEpIHtcbiAgICBpZiAobmV3TWVkaWEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbWVkaWEudW5zaGlmdChuZXdNZWRpYSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgc3ViIGNvbnRlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7SDVQLkNvbnRlbnRDb3B5cmlnaHRzfSBuZXdDb250ZW50XG4gICAqL1xuICB0aGlzLmFkZENvbnRlbnQgPSBmdW5jdGlvbiAobmV3Q29udGVudCkge1xuICAgIGlmIChuZXdDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQucHVzaChuZXdDb250ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaW50IGNvbnRlbnQgY29weXJpZ2h0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBIVE1MLlxuICAgKi9cbiAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaHRtbCA9ICcnO1xuXG4gICAgLy8gQWRkIG1lZGlhIHJpZ2h0c1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVkaWEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGh0bWwgKz0gbWVkaWFbaV07XG4gICAgfVxuXG4gICAgLy8gQWRkIHN1YiBjb250ZW50IHJpZ2h0c1xuICAgIGZvciAoaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBodG1sICs9IGNvbnRlbnRbaV07XG4gICAgfVxuXG5cbiAgICBpZiAoaHRtbCAhPT0gJycpIHtcbiAgICAgIC8vIEFkZCBhIGxhYmVsIHRvIHRoaXMgaW5mb1xuICAgICAgaWYgKGxhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaHRtbCA9ICc8aDM+JyArIGxhYmVsICsgJzwvaDM+JyArIGh0bWw7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB3cmFwcGVyXG4gICAgICBodG1sID0gJzxkaXYgY2xhc3M9XCJoNXAtY29udGVudC1jb3B5cmlnaHRzXCI+JyArIGh0bWwgKyAnPC9kaXY+JztcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfTtcbn07XG5cbi8qKlxuICogQSBvcmRlcmVkIGxpc3Qgb2YgY29weXJpZ2h0IGZpZWxkcyBmb3IgbWVkaWEuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gY29weXJpZ2h0XG4gKiAgIENvcHlyaWdodCBpbmZvcm1hdGlvbiBmaWVsZHMuXG4gKiBAcGFyYW0ge09iamVjdH0gW2xhYmVsc11cbiAqICAgVHJhbnNsYXRpb24gb2YgbGFiZWxzLlxuICogQHBhcmFtIHtBcnJheX0gW29yZGVyXVxuICogICBPcmRlciBvZiB0aGUgZmllbGRzLlxuICogQHBhcmFtIHtPYmplY3R9IFtleHRyYUZpZWxkc11cbiAqICAgQWRkIGV4dHJhIGNvcHlyaWdodCBmaWVsZHMuXG4gKi9cbkg1UC5NZWRpYUNvcHlyaWdodCA9IGZ1bmN0aW9uIChjb3B5cmlnaHQsIGxhYmVscywgb3JkZXIsIGV4dHJhRmllbGRzKSB7XG4gIHZhciB0aHVtYm5haWw7XG4gIHZhciBsaXN0ID0gbmV3IEg1UC5EZWZpbml0aW9uTGlzdCgpO1xuXG4gIC8qKlxuICAgKiBHZXQgdHJhbnNsYXRlZCBsYWJlbCBmb3IgZmllbGQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZE5hbWVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHZhciBnZXRMYWJlbCA9IGZ1bmN0aW9uIChmaWVsZE5hbWUpIHtcbiAgICBpZiAobGFiZWxzID09PSB1bmRlZmluZWQgfHwgbGFiZWxzW2ZpZWxkTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIEg1UC50KGZpZWxkTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsc1tmaWVsZE5hbWVdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgaHVtYW5pemVkIHZhbHVlIGZvciB0aGUgbGljZW5zZSBmaWVsZC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpY2Vuc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt2ZXJzaW9uXVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgdmFyIGh1bWFuaXplTGljZW5zZSA9IGZ1bmN0aW9uIChsaWNlbnNlLCB2ZXJzaW9uKSB7XG4gICAgdmFyIGNvcHlyaWdodExpY2Vuc2UgPSBINVAuY29weXJpZ2h0TGljZW5zZXNbbGljZW5zZV07XG5cbiAgICAvLyBCdWlsZCBsaWNlbnNlIHN0cmluZ1xuICAgIHZhciB2YWx1ZSA9ICcnO1xuICAgIGlmICghKGxpY2Vuc2UgPT09ICdQRCcgJiYgdmVyc2lvbikpIHtcbiAgICAgIC8vIEFkZCBsaWNlbnNlIGxhYmVsXG4gICAgICB2YWx1ZSArPSAoY29weXJpZ2h0TGljZW5zZS5oYXNPd25Qcm9wZXJ0eSgnbGFiZWwnKSA/IGNvcHlyaWdodExpY2Vuc2UubGFiZWwgOiBjb3B5cmlnaHRMaWNlbnNlKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgdmVyc2lvbiBpbmZvXG4gICAgdmFyIHZlcnNpb25JbmZvO1xuICAgIGlmIChjb3B5cmlnaHRMaWNlbnNlLnZlcnNpb25zKSB7XG4gICAgICBpZiAoY29weXJpZ2h0TGljZW5zZS52ZXJzaW9ucy5kZWZhdWx0ICYmICghdmVyc2lvbiB8fCAhY29weXJpZ2h0TGljZW5zZS52ZXJzaW9uc1t2ZXJzaW9uXSkpIHtcbiAgICAgICAgdmVyc2lvbiA9IGNvcHlyaWdodExpY2Vuc2UudmVyc2lvbnMuZGVmYXVsdDtcbiAgICAgIH1cbiAgICAgIGlmICh2ZXJzaW9uICYmIGNvcHlyaWdodExpY2Vuc2UudmVyc2lvbnNbdmVyc2lvbl0pIHtcbiAgICAgICAgdmVyc2lvbkluZm8gPSBjb3B5cmlnaHRMaWNlbnNlLnZlcnNpb25zW3ZlcnNpb25dO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJzaW9uSW5mbykge1xuICAgICAgLy8gQWRkIGxpY2Vuc2UgdmVyc2lvblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlICs9ICcgJztcbiAgICAgIH1cbiAgICAgIHZhbHVlICs9ICh2ZXJzaW9uSW5mby5oYXNPd25Qcm9wZXJ0eSgnbGFiZWwnKSA/IHZlcnNpb25JbmZvLmxhYmVsIDogdmVyc2lvbkluZm8pO1xuICAgIH1cblxuICAgIC8vIEFkZCBsaW5rIGlmIHNwZWNpZmllZFxuICAgIHZhciBsaW5rO1xuICAgIGlmIChjb3B5cmlnaHRMaWNlbnNlLmhhc093blByb3BlcnR5KCdsaW5rJykpIHtcbiAgICAgIGxpbmsgPSBjb3B5cmlnaHRMaWNlbnNlLmxpbmsucmVwbGFjZSgnOnZlcnNpb24nLCBjb3B5cmlnaHRMaWNlbnNlLmxpbmtWZXJzaW9ucyA/IGNvcHlyaWdodExpY2Vuc2UubGlua1ZlcnNpb25zW3ZlcnNpb25dIDogdmVyc2lvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZlcnNpb25JbmZvICYmIGNvcHlyaWdodExpY2Vuc2UuaGFzT3duUHJvcGVydHkoJ2xpbmsnKSkge1xuICAgICAgbGluayA9IHZlcnNpb25JbmZvLmxpbms7XG4gICAgfVxuICAgIGlmIChsaW5rKSB7XG4gICAgICB2YWx1ZSA9ICc8YSBocmVmPVwiJyArIGxpbmsgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JyArIHZhbHVlICsgJzwvYT4nO1xuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIHBhcmVudGhlc2lzXG4gICAgdmFyIHBhcmVudGhlc2lzID0gJyc7XG4gICAgaWYgKGxpY2Vuc2UgIT09ICdQRCcgJiYgbGljZW5zZSAhPT0gJ0MnKSB7XG4gICAgICBwYXJlbnRoZXNpcyArPSBsaWNlbnNlO1xuICAgIH1cbiAgICBpZiAodmVyc2lvbiAmJiB2ZXJzaW9uICE9PSAnQ0MwIDEuMCcpIHtcbiAgICAgIGlmIChwYXJlbnRoZXNpcyAmJiBsaWNlbnNlICE9PSAnR05VIEdQTCcpIHtcbiAgICAgICAgcGFyZW50aGVzaXMgKz0gJyAnO1xuICAgICAgfVxuICAgICAgcGFyZW50aGVzaXMgKz0gdmVyc2lvbjtcbiAgICB9XG4gICAgaWYgKHBhcmVudGhlc2lzKSB7XG4gICAgICB2YWx1ZSArPSAnICgnICsgcGFyZW50aGVzaXMgKyAnKSc7XG4gICAgfVxuICAgIGlmIChsaWNlbnNlID09PSAnQycpIHtcbiAgICAgIHZhbHVlICs9ICcgJmNvcHk7JztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgaWYgKGNvcHlyaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gQWRkIHRoZSBleHRyYSBmaWVsZHNcbiAgICBmb3IgKHZhciBmaWVsZCBpbiBleHRyYUZpZWxkcykge1xuICAgICAgaWYgKGV4dHJhRmllbGRzLmhhc093blByb3BlcnR5KGZpZWxkKSkge1xuICAgICAgICBjb3B5cmlnaHRbZmllbGRdID0gZXh0cmFGaWVsZHNbZmllbGRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBTZXQgZGVmYXVsdCBvcmRlclxuICAgICAgb3JkZXIgPSBbJ2NvbnRlbnRUeXBlJywgJ3RpdGxlJywgJ2xpY2Vuc2UnLCAnYXV0aG9yJywgJ3llYXInLCAnc291cmNlJywgJ2xpY2Vuc2VFeHRyYXMnLCAnY2hhbmdlcyddO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBmaWVsZE5hbWUgPSBvcmRlcltpXTtcbiAgICAgIGlmIChjb3B5cmlnaHRbZmllbGROYW1lXSAhPT0gdW5kZWZpbmVkICYmIGNvcHlyaWdodFtmaWVsZE5hbWVdICE9PSAnJykge1xuICAgICAgICB2YXIgaHVtYW5WYWx1ZSA9IGNvcHlyaWdodFtmaWVsZE5hbWVdO1xuICAgICAgICBpZiAoZmllbGROYW1lID09PSAnbGljZW5zZScpIHtcbiAgICAgICAgICBodW1hblZhbHVlID0gaHVtYW5pemVMaWNlbnNlKGNvcHlyaWdodC5saWNlbnNlLCBjb3B5cmlnaHQudmVyc2lvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gJ3NvdXJjZScpIHtcbiAgICAgICAgICBodW1hblZhbHVlID0gKGh1bWFuVmFsdWUpID8gJzxhIGhyZWY9XCInICsgaHVtYW5WYWx1ZSArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nICsgaHVtYW5WYWx1ZSArICc8L2E+JyA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBsaXN0LmFkZChuZXcgSDVQLkZpZWxkKGdldExhYmVsKGZpZWxkTmFtZSksIGh1bWFuVmFsdWUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRodW1ibmFpbC5cbiAgICpcbiAgICogQHBhcmFtIHtINVAuVGh1bWJuYWlsfSBuZXdUaHVtYm5haWxcbiAgICovXG4gIHRoaXMuc2V0VGh1bWJuYWlsID0gZnVuY3Rpb24gKG5ld1RodW1ibmFpbCkge1xuICAgIHRodW1ibmFpbCA9IG5ld1RodW1ibmFpbDtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoaXMgY29weXJpZ2h0IGlzIHVuZGlzY2xvc2VkLlxuICAgKiBJLmUuIG9ubHkgaGFzIHRoZSBsaWNlbnNlIGF0dHJpYnV0ZSBzZXQsIGFuZCBpdCdzIHVuZGlzY2xvc2VkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHRoaXMudW5kaXNjbG9zZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxpc3Quc2l6ZSgpID09PSAxKSB7XG4gICAgICB2YXIgZmllbGQgPSBsaXN0LmdldCgwKTtcbiAgICAgIGlmIChmaWVsZC5nZXRMYWJlbCgpID09PSBnZXRMYWJlbCgnbGljZW5zZScpICYmIGZpZWxkLmdldFZhbHVlKCkgPT09IGh1bWFuaXplTGljZW5zZSgnVScpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaW50IG1lZGlhIGNvcHlyaWdodC5cbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ30gSFRNTC5cbiAgICovXG4gIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGh0bWwgPSAnJztcblxuICAgIGlmICh0aGlzLnVuZGlzY2xvc2VkKCkpIHtcbiAgICAgIHJldHVybiBodG1sOyAvLyBObyBuZWVkIHRvIHByaW50IGEgY29weXJpZ2h0IHdpdGggYSBzaW5nbGUgdW5kaXNjbG9zZWQgbGljZW5zZS5cbiAgICB9XG5cbiAgICBpZiAodGh1bWJuYWlsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGh0bWwgKz0gdGh1bWJuYWlsO1xuICAgIH1cbiAgICBodG1sICs9IGxpc3Q7XG5cbiAgICBpZiAoaHRtbCAhPT0gJycpIHtcbiAgICAgIGh0bWwgPSAnPGRpdiBjbGFzcz1cImg1cC1tZWRpYS1jb3B5cmlnaHRcIj4nICsgaHRtbCArICc8L2Rpdj4nO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9O1xufTtcblxuLyoqXG4gKiBBIHNpbXBsZSBhbmQgZWxlZ2FudCBjbGFzcyBmb3IgY3JlYXRpbmcgdGh1bWJuYWlscyBvZiBpbWFnZXMuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqL1xuSDVQLlRodW1ibmFpbCA9IGZ1bmN0aW9uIChzb3VyY2UsIHdpZHRoLCBoZWlnaHQpIHtcbiAgdmFyIHRodW1iV2lkdGgsIHRodW1iSGVpZ2h0ID0gMTAwO1xuICBpZiAod2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgIHRodW1iV2lkdGggPSBNYXRoLnJvdW5kKHRodW1iSGVpZ2h0ICogKHdpZHRoIC8gaGVpZ2h0KSk7XG4gIH1cblxuICAvKipcbiAgICogUHJpbnQgdGh1bWJuYWlsLlxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBIVE1MLlxuICAgKi9cbiAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJzxpbWcgc3JjPVwiJyArIHNvdXJjZSArICdcIiBhbHQ9XCInICsgSDVQLnQoJ3RodW1ibmFpbCcpICsgJ1wiIGNsYXNzPVwiaDVwLXRodW1ibmFpbFwiIGhlaWdodD1cIicgKyB0aHVtYkhlaWdodCArICdcIicgKyAodGh1bWJXaWR0aCA9PT0gdW5kZWZpbmVkID8gJycgOiAnIHdpZHRoPVwiJyArIHRodW1iV2lkdGggKyAnXCInKSArICcvPic7XG4gIH07XG59O1xuXG4vKipcbiAqIFNpbXBsZSBkYXRhIHN0cnVjdHVyZSBjbGFzcyBmb3Igc3RvcmluZyBhIHNpbmdsZSBmaWVsZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKi9cbkg1UC5GaWVsZCA9IGZ1bmN0aW9uIChsYWJlbCwgdmFsdWUpIHtcbiAgLyoqXG4gICAqIFB1YmxpYy4gR2V0IGZpZWxkIGxhYmVsLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgdGhpcy5nZXRMYWJlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbGFiZWw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYy4gR2V0IGZpZWxkIHZhbHVlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgdGhpcy5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuXG4vKipcbiAqIFNpbXBsZSBjbGFzcyBmb3IgY3JlYXRpbmcgYSBkZWZpbml0aW9uIGxpc3QuXG4gKlxuICogQGNsYXNzXG4gKi9cbkg1UC5EZWZpbml0aW9uTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZpZWxkcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBBZGQgZmllbGQgdG8gbGlzdC5cbiAgICpcbiAgICogQHBhcmFtIHtINVAuRmllbGR9IGZpZWxkXG4gICAqL1xuICB0aGlzLmFkZCA9IGZ1bmN0aW9uIChmaWVsZCkge1xuICAgIGZpZWxkcy5wdXNoKGZpZWxkKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IE51bWJlciBvZiBmaWVsZHMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB0aGlzLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZpZWxkcy5sZW5ndGg7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBmaWVsZCBhdCBnaXZlbiBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm5zIHtINVAuRmllbGR9XG4gICAqL1xuICB0aGlzLmdldCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiBmaWVsZHNbaW5kZXhdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmludCBkZWZpbml0aW9uIGxpc3QuXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEhUTUwuXG4gICAqL1xuICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBodG1sID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBmaWVsZCA9IGZpZWxkc1tpXTtcbiAgICAgIGh0bWwgKz0gJzxkdD4nICsgZmllbGQuZ2V0TGFiZWwoKSArICc8L2R0PjxkZD4nICsgZmllbGQuZ2V0VmFsdWUoKSArICc8L2RkPic7XG4gICAgfVxuICAgIHJldHVybiAoaHRtbCA9PT0gJycgPyBodG1sIDogJzxkbCBjbGFzcz1cImg1cC1kZWZpbml0aW9uLWxpc3RcIj4nICsgaHRtbCArICc8L2RsPicpO1xuICB9O1xufTtcblxuLyoqXG4gKiBUSElTIEZVTkNUSU9OL0NMQVNTIElTIERFUFJFQ0FURUQgQU5EIFdJTEwgQkUgUkVNT1ZFRC5cbiAqXG4gKiBIZWxwZXIgb2JqZWN0IGZvciBrZWVwaW5nIGNvb3JkaW5hdGVzIGluIHRoZSBzYW1lIGZvcm1hdCBhbGwgb3Zlci5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICogICBXaWxsIGJlIHJlbW92ZWQgbWFyY2ggMjAxNi5cbiAqIEBjbGFzc1xuICogQHBhcmFtIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gKiBAcGFyYW0ge251bWJlcn0gd1xuICogQHBhcmFtIHtudW1iZXJ9IGhcbiAqL1xuSDVQLkNvb3JkcyA9IGZ1bmN0aW9uICh4LCB5LCB3LCBoKSB7XG4gIGlmICggISh0aGlzIGluc3RhbmNlb2YgSDVQLkNvb3JkcykgKVxuICAgIHJldHVybiBuZXcgSDVQLkNvb3Jkcyh4LCB5LCB3LCBoKTtcblxuICAvKiogQG1lbWJlciB7bnVtYmVyfSAqL1xuICB0aGlzLnggPSAwO1xuICAvKiogQG1lbWJlciB7bnVtYmVyfSAqL1xuICB0aGlzLnkgPSAwO1xuICAvKiogQG1lbWJlciB7bnVtYmVyfSAqL1xuICB0aGlzLncgPSAxO1xuICAvKiogQG1lbWJlciB7bnVtYmVyfSAqL1xuICB0aGlzLmggPSAxO1xuXG4gIGlmICh0eXBlb2YoeCkgPT09ICdvYmplY3QnKSB7XG4gICAgdGhpcy54ID0geC54O1xuICAgIHRoaXMueSA9IHgueTtcbiAgICB0aGlzLncgPSB4Lnc7XG4gICAgdGhpcy5oID0geC5oO1xuICB9XG4gIGVsc2Uge1xuICAgIGlmICh4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMueCA9IHg7XG4gICAgfVxuICAgIGlmICh5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuICAgIGlmICh3ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudyA9IHc7XG4gICAgfVxuICAgIGlmIChoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaCA9IGg7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBQYXJzZSBsaWJyYXJ5IHN0cmluZyBpbnRvIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGlicmFyeVxuICogICBsaWJyYXJ5IGluIHRoZSBmb3JtYXQgXCJtYWNoaW5lTmFtZSBtYWpvclZlcnNpb24ubWlub3JWZXJzaW9uXCJcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKiAgIGxpYnJhcnkgYXMgYW4gb2JqZWN0IHdpdGggbWFjaGluZU5hbWUsIG1ham9yVmVyc2lvbiBhbmQgbWlub3JWZXJzaW9uIHByb3BlcnRpZXNcbiAqICAgcmV0dXJuIGZhbHNlIGlmIHRoZSBsaWJyYXJ5IHBhcmFtZXRlciBpcyBpbnZhbGlkXG4gKi9cbkg1UC5saWJyYXJ5RnJvbVN0cmluZyA9IGZ1bmN0aW9uIChsaWJyYXJ5KSB7XG4gIHZhciByZWdFeHAgPSAvKC4rKVxccyhcXGQrKVxcLihcXGQrKSQvZztcbiAgdmFyIHJlcyA9IHJlZ0V4cC5leGVjKGxpYnJhcnkpO1xuICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdtYWNoaW5lTmFtZSc6IHJlc1sxXSxcbiAgICAgICdtYWpvclZlcnNpb24nOiBwYXJzZUludChyZXNbMl0pLFxuICAgICAgJ21pbm9yVmVyc2lvbic6IHBhcnNlSW50KHJlc1szXSlcbiAgICB9O1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgdGhlIHBhdGggdG8gdGhlIGxpYnJhcnlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGlicmFyeVxuICogICBUaGUgbGlicmFyeSBpZGVudGlmaWVyIGluIHRoZSBmb3JtYXQgXCJtYWNoaW5lTmFtZS1tYWpvclZlcnNpb24ubWlub3JWZXJzaW9uXCIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBUaGUgZnVsbCBwYXRoIHRvIHRoZSBsaWJyYXJ5LlxuICovXG5INVAuZ2V0TGlicmFyeVBhdGggPSBmdW5jdGlvbiAobGlicmFyeSkge1xuICBpZiAoSDVQSW50ZWdyYXRpb24udXJsTGlicmFyaWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBUaGlzIGlzIGFuIG92ZXJyaWRlIGZvciB0aG9zZSBpbXBsZW1lbnRhdGlvbnMgdGhhdCBoYXMgYSBkaWZmZXJlbnQgbGlicmFyaWVzIFVSTCwgZS5nLiBNb29kbGVcbiAgICByZXR1cm4gSDVQSW50ZWdyYXRpb24udXJsTGlicmFyaWVzICsgJy8nICsgbGlicmFyeTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gSDVQSW50ZWdyYXRpb24udXJsICsgJy9saWJyYXJpZXMvJyArIGxpYnJhcnk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVjdXJzaXZseSBjbG9uZSB0aGUgZ2l2ZW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmplY3RcbiAqICAgT2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbcmVjdXJzaXZlXVxuICogQHJldHVybnMge09iamVjdHxBcnJheX1cbiAqICAgQSBjbG9uZSBvZiBvYmplY3QuXG4gKi9cbkg1UC5jbG9uZU9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QsIHJlY3Vyc2l2ZSkge1xuICAvLyBUT0RPOiBDb25zaWRlciBpZiB0aGlzIG5lZWRzIHRvIGJlIGluIGNvcmUuIERvZXNuJ3QgJC5leHRlbmQgZG8gdGhlIHNhbWU/XG4gIHZhciBjbG9uZSA9IG9iamVjdCBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIGlmIChyZWN1cnNpdmUgIT09IHVuZGVmaW5lZCAmJiByZWN1cnNpdmUgJiYgdHlwZW9mIG9iamVjdFtpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY2xvbmVbaV0gPSBINVAuY2xvbmVPYmplY3Qob2JqZWN0W2ldLCByZWN1cnNpdmUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNsb25lW2ldID0gb2JqZWN0W2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbG9uZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBlbXB0eSBzcGFjZXMgYmVmb3JlIGFuZCBhZnRlciB0aGUgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5INVAudHJpbSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuXG4gIC8vIFRPRE86IE9ubHkgaW5jbHVkZSB0aGlzIG9yIFN0cmluZy50cmltKCkuIFdoYXQgaXMgYmVzdD9cbiAgLy8gSSdtIGxlYW5pbmcgdG93YXJkcyBpbXBsZW1lbnRpbmcgdGhlIG1pc3Npbmcgb25lczogaHR0cDovL2thbmdheC5naXRodWIuaW8vY29tcGF0LXRhYmxlL2VzNS9cbiAgLy8gU28gc2hvdWxkIHdlIG1ha2UgdGhpcyBmdW5jdGlvbiBkZXByZWNhdGVkP1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBKYXZhU2NyaXB0IHBhdGgva2V5IGlzIGxvYWRlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbkg1UC5qc0xvYWRlZCA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIEg1UEludGVncmF0aW9uLmxvYWRlZEpzID0gSDVQSW50ZWdyYXRpb24ubG9hZGVkSnMgfHwgW107XG4gIHJldHVybiBINVAualF1ZXJ5LmluQXJyYXkocGF0aCwgSDVQSW50ZWdyYXRpb24ubG9hZGVkSnMpICE9PSAtMTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgc3R5bGVzIHBhdGgva2V5IGlzIGxvYWRlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbkg1UC5jc3NMb2FkZWQgPSBmdW5jdGlvbiAocGF0aCkge1xuICBINVBJbnRlZ3JhdGlvbi5sb2FkZWRDc3MgPSBINVBJbnRlZ3JhdGlvbi5sb2FkZWRDc3MgfHwgW107XG4gIHJldHVybiBINVAualF1ZXJ5LmluQXJyYXkocGF0aCwgSDVQSW50ZWdyYXRpb24ubG9hZGVkQ3NzKSAhPT0gLTE7XG59O1xuXG4vKipcbiAqIFNodWZmbGUgYW4gYXJyYXkgaW4gcGxhY2UuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAqICAgQXJyYXkgdG8gc2h1ZmZsZVxuICogQHJldHVybnMge0FycmF5fVxuICogICBUaGUgcGFzc2VkIGFycmF5IGlzIHJldHVybmVkIGZvciBjaGFpbmluZy5cbiAqL1xuSDVQLnNodWZmbGVBcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xuICAvLyBUT0RPOiBDb25zaWRlciBpZiB0aGlzIHNob3VsZCBiZSBhIHBhcnQgb2YgY29yZS4gSSdtIGd1ZXNzaW5nIHZlcnkgZmV3IGxpYnJhcmllcyBhcmUgZ29pbmcgdG8gdXNlIGl0LlxuICBpZiAoIShhcnJheSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBpID0gYXJyYXkubGVuZ3RoLCBqLCB0ZW1waSwgdGVtcGo7XG4gIGlmICggaSA9PT0gMCApIHJldHVybiBmYWxzZTtcbiAgd2hpbGUgKCAtLWkgKSB7XG4gICAgaiAgICAgICA9IE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiAoIGkgKyAxICkgKTtcbiAgICB0ZW1waSAgID0gYXJyYXlbaV07XG4gICAgdGVtcGogICA9IGFycmF5W2pdO1xuICAgIGFycmF5W2ldID0gdGVtcGo7XG4gICAgYXJyYXlbal0gPSB0ZW1waTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuXG4vKipcbiAqIFBvc3QgZmluaXNoZWQgcmVzdWx0cyBmb3IgdXNlci5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICogICBEbyBub3QgdXNlIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHksIHRyaWdnZXIgdGhlIGZpbmlzaCBldmVudCBpbnN0ZWFkLlxuICogICBXaWxsIGJlIHJlbW92ZWQgbWFyY2ggMjAxNlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbnRlbnRJZFxuICogICBJZGVudGlmaWVzIHRoZSBjb250ZW50XG4gKiBAcGFyYW0ge251bWJlcn0gc2NvcmVcbiAqICAgQWNoaWV2ZWQgc2NvcmUvcG9pbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4U2NvcmVcbiAqICAgVGhlIG1heGltdW0gc2NvcmUvcG9pbnRzIHRoYXQgY2FuIGJlIGFjaGlldmVkXG4gKiBAcGFyYW0ge251bWJlcn0gW3RpbWVdXG4gKiAgIFJlcG9ydGVkIHRpbWUgY29uc3VtcHRpb24vdXNhZ2VcbiAqL1xuSDVQLnNldEZpbmlzaGVkID0gZnVuY3Rpb24gKGNvbnRlbnRJZCwgc2NvcmUsIG1heFNjb3JlLCB0aW1lKSB7XG4gIHZhciB2YWxpZFNjb3JlID0gdHlwZW9mIHNjb3JlID09PSAnbnVtYmVyJyB8fCBzY29yZSBpbnN0YW5jZW9mIE51bWJlcjtcbiAgaWYgKHZhbGlkU2NvcmUgJiYgSDVQSW50ZWdyYXRpb24ucG9zdFVzZXJTdGF0aXN0aWNzID09PSB0cnVlKSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHVuaXggdGltZXN0YW1wIGZvciB0aGUgZ2l2ZW4gSlMgRGF0ZS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICB2YXIgdG9Vbml4ID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgfTtcblxuICAgIC8vIFBvc3QgdGhlIHJlc3VsdHNcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgY29udGVudElkOiBjb250ZW50SWQsXG4gICAgICBzY29yZTogc2NvcmUsXG4gICAgICBtYXhTY29yZTogbWF4U2NvcmUsXG4gICAgICBvcGVuZWQ6IHRvVW5peChINVAub3BlbmVkW2NvbnRlbnRJZF0pLFxuICAgICAgZmluaXNoZWQ6IHRvVW5peChuZXcgRGF0ZSgpKSxcbiAgICAgIHRpbWU6IHRpbWVcbiAgICB9O1xuICAgIEg1UC5qUXVlcnkucG9zdChINVBJbnRlZ3JhdGlvbi5hamF4LnNldEZpbmlzaGVkLCBkYXRhKVxuICAgICAgLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBINVAub2ZmbGluZVJlcXVlc3RRdWV1ZS5hZGQoSDVQSW50ZWdyYXRpb24uYWpheC5zZXRGaW5pc2hlZCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxufTtcblxuLy8gQWRkIGluZGV4T2YgdG8gYnJvd3NlcnMgdGhhdCBsYWNrIHRoZW0uIChJRXMpXG5pZiAoIUFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gKG5lZWRsZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXNbaV0gPT09IG5lZWRsZSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9O1xufVxuXG4vLyBOZWVkIHRvIGRlZmluZSB0cmltKCkgc2luY2UgdGhpcyBpcyBub3QgYXZhaWxhYmxlIG9uIG9sZGVyIElFcyxcbi8vIGFuZCB0cmltIGlzIHVzZWQgaW4gc2V2ZXJhbCBsaWJzXG5pZiAoU3RyaW5nLnByb3RvdHlwZS50cmltID09PSB1bmRlZmluZWQpIHtcbiAgU3RyaW5nLnByb3RvdHlwZS50cmltID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBINVAudHJpbSh0aGlzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGFuIGV2ZW50IG9uIGFuIGluc3RhbmNlXG4gKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgdHJpZ2dlcnMgYW4gZXZlbnQgaWYgdGhlIGluc3RhbmNlIHN1cHBvcnRzIGV2ZW50IGhhbmRsaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlXG4gKiAgIEluc3RhbmNlIG9mIEg1UCBjb250ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiAgIFR5cGUgb2YgZXZlbnQgdG8gdHJpZ2dlclxuICogQHBhcmFtIHsqfSBkYXRhXG4gKiBAcGFyYW0ge09iamVjdH0gZXh0cmFzXG4gKi9cbkg1UC50cmlnZ2VyID0gZnVuY3Rpb24gKGluc3RhbmNlLCBldmVudFR5cGUsIGRhdGEsIGV4dHJhcykge1xuICAvLyBUcnkgbmV3IGV2ZW50IHN5c3RlbSBmaXJzdFxuICBpZiAoaW5zdGFuY2UudHJpZ2dlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaW5zdGFuY2UudHJpZ2dlcihldmVudFR5cGUsIGRhdGEsIGV4dHJhcyk7XG4gIH1cbiAgLy8gVHJ5IGRlcHJlY2F0ZWQgZXZlbnQgc3lzdGVtXG4gIGVsc2UgaWYgKGluc3RhbmNlLiQgIT09IHVuZGVmaW5lZCAmJiBpbnN0YW5jZS4kLnRyaWdnZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIGluc3RhbmNlLiQudHJpZ2dlcihldmVudFR5cGUpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXJcbiAqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCByZWdpc3RlcnMgYW4gZXZlbnQgaGFuZGxlciBmb3IgYW4gZXZlbnQgdHlwZSBpZlxuICogdGhlIGluc3RhbmNlIHN1cHBvcnRzIGV2ZW50IGhhbmRsaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlXG4gKiAgIEluc3RhbmNlIG9mIEg1UCBjb250ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiAgIFR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvclxuICogQHBhcmFtIHtINVAuRXZlbnRDYWxsYmFja30gaGFuZGxlclxuICogICBDYWxsYmFjayB0aGF0IGdldHMgdHJpZ2dlcmVkIGZvciBldmVudHMgb2YgdGhlIHNwZWNpZmllZCB0eXBlXG4gKi9cbkg1UC5vbiA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgZXZlbnRUeXBlLCBoYW5kbGVyKSB7XG4gIC8vIFRyeSBuZXcgZXZlbnQgc3lzdGVtIGZpcnN0XG4gIGlmIChpbnN0YW5jZS5vbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaW5zdGFuY2Uub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuICAvLyBUcnkgZGVwcmVjYXRlZCBldmVudCBzeXN0ZW1cbiAgZWxzZSBpZiAoaW5zdGFuY2UuJCAhPT0gdW5kZWZpbmVkICYmIGluc3RhbmNlLiQub24gIT09IHVuZGVmaW5lZCkge1xuICAgIGluc3RhbmNlLiQub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gVVVJRFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFVVSURcbiAqL1xuSDVQLmNyZWF0ZVVVSUQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjaGFyKSB7XG4gICAgdmFyIHJhbmRvbSA9IE1hdGgucmFuZG9tKCkqMTZ8MCwgbmV3Q2hhciA9IGNoYXIgPT09ICd4JyA/IHJhbmRvbSA6IChyYW5kb20mMHgzfDB4OCk7XG4gICAgcmV0dXJuIG5ld0NoYXIudG9TdHJpbmcoMTYpO1xuICB9KTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHRpdGxlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJhd1RpdGxlXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4TGVuZ3RoXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5INVAuY3JlYXRlVGl0bGUgPSBmdW5jdGlvbiAocmF3VGl0bGUsIG1heExlbmd0aCkge1xuICBpZiAoIXJhd1RpdGxlKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmIChtYXhMZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIG1heExlbmd0aCA9IDYwO1xuICB9XG4gIHZhciB0aXRsZSA9IEg1UC5qUXVlcnkoJzxkaXY+PC9kaXY+JylcbiAgICAudGV4dChcbiAgICAgIC8vIFN0cmlwIHRhZ3NcbiAgICAgIHJhd1RpdGxlLnJlcGxhY2UoLyg8KFtePl0rKT4pL2lnLFwiXCIpXG4gICAgLy8gRXNjYXBlXG4gICAgKS50ZXh0KCk7XG4gIGlmICh0aXRsZS5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICB0aXRsZSA9IHRpdGxlLnN1YnN0cigwLCBtYXhMZW5ndGggLSAzKSArICcuLi4nO1xuICB9XG4gIHJldHVybiB0aXRsZTtcbn07XG5cbi8vIFdyYXAgaW4gcHJpdmF0ZXNcbihmdW5jdGlvbiAoJCkge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFqYXggcmVxdWVzdHMgZm9yIGluc2VydGluZywgdXBkYXRlaW5nIGFuZCBkZWxldGVpbmdcbiAgICogY29udGVudCB1c2VyIGRhdGEuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb250ZW50SWQgV2hhdCBjb250ZW50IHRvIHN0b3JlIHRoZSBkYXRhIGZvci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFUeXBlIElkZW50aWZpZXMgdGhlIHNldCBvZiBkYXRhIGZvciB0aGlzIGNvbnRlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdWJDb250ZW50SWQgSWRlbnRpZmllcyBzdWIgY29udGVudFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZG9uZV0gQ2FsbGJhY2sgd2hlbiBhamF4IGlzIGRvbmUuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbZGF0YV0gVG8gYmUgc3RvcmVkIGZvciBmdXR1cmUgdXNlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVsb2FkPWZhbHNlXSBEYXRhIGlzIGxvYWRlZCB3aGVuIGNvbnRlbnQgaXMgbG9hZGVkLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpbnZhbGlkYXRlPWZhbHNlXSBEYXRhIGlzIGludmFsaWRhdGVkIHdoZW4gY29udGVudCBjaGFuZ2VzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthc3luYz10cnVlXVxuICAgKi9cbiAgZnVuY3Rpb24gY29udGVudFVzZXJEYXRhQWpheChjb250ZW50SWQsIGRhdGFUeXBlLCBzdWJDb250ZW50SWQsIGRvbmUsIGRhdGEsIHByZWxvYWQsIGludmFsaWRhdGUsIGFzeW5jKSB7XG4gICAgaWYgKEg1UEludGVncmF0aW9uLnVzZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gTm90IGxvZ2dlZCBpbiwgbm8gdXNlIGluIHNhdmluZy5cbiAgICAgIGRvbmUoJ05vdCBzaWduZWQgaW4uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICB1cmw6IEg1UEludGVncmF0aW9uLmFqYXguY29udGVudFVzZXJEYXRhLnJlcGxhY2UoJzpjb250ZW50SWQnLCBjb250ZW50SWQpLnJlcGxhY2UoJzpkYXRhVHlwZScsIGRhdGFUeXBlKS5yZXBsYWNlKCc6c3ViQ29udGVudElkJywgc3ViQ29udGVudElkID8gc3ViQ29udGVudElkIDogMCksXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgYXN5bmM6IGFzeW5jID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXN5bmNcbiAgICB9O1xuICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbnMudHlwZSA9ICdQT1NUJztcbiAgICAgIG9wdGlvbnMuZGF0YSA9IHtcbiAgICAgICAgZGF0YTogKGRhdGEgPT09IG51bGwgPyAwIDogZGF0YSksXG4gICAgICAgIHByZWxvYWQ6IChwcmVsb2FkID8gMSA6IDApLFxuICAgICAgICBpbnZhbGlkYXRlOiAoaW52YWxpZGF0ZSA/IDEgOiAwKVxuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvcHRpb25zLnR5cGUgPSAnR0VUJztcbiAgICB9XG4gICAgaWYgKGRvbmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy5lcnJvciA9IGZ1bmN0aW9uICh4aHIsIGVycm9yKSB7XG4gICAgICAgIGRvbmUoZXJyb3IpO1xuICAgICAgfTtcbiAgICAgIG9wdGlvbnMuc3VjY2VzcyA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkb25lKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhID09PSBmYWxzZSB8fCByZXNwb25zZS5kYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9uZSh1bmRlZmluZWQsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAkLmFqYXgob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHVzZXIgZGF0YSBmb3IgZ2l2ZW4gY29udGVudC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRlbnRJZFxuICAgKiAgIFdoYXQgY29udGVudCB0byBnZXQgZGF0YSBmb3IuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhSWRcbiAgICogICBJZGVudGlmaWVzIHRoZSBzZXQgb2YgZGF0YSBmb3IgdGhpcyBjb250ZW50LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBkb25lXG4gICAqICAgQ2FsbGJhY2sgd2l0aCBlcnJvciBhbmQgZGF0YSBwYXJhbWV0ZXJzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3N1YkNvbnRlbnRJZF1cbiAgICogICBJZGVudGlmaWVzIHdoaWNoIGRhdGEgYmVsb25ncyB0byBzdWIgY29udGVudC5cbiAgICovXG4gIEg1UC5nZXRVc2VyRGF0YSA9IGZ1bmN0aW9uIChjb250ZW50SWQsIGRhdGFJZCwgZG9uZSwgc3ViQ29udGVudElkKSB7XG4gICAgaWYgKCFzdWJDb250ZW50SWQpIHtcbiAgICAgIHN1YkNvbnRlbnRJZCA9IDA7IC8vIERlZmF1bHRcbiAgICB9XG5cbiAgICBINVBJbnRlZ3JhdGlvbi5jb250ZW50cyA9IEg1UEludGVncmF0aW9uLmNvbnRlbnRzIHx8IHt9O1xuICAgIHZhciBjb250ZW50ID0gSDVQSW50ZWdyYXRpb24uY29udGVudHNbJ2NpZC0nICsgY29udGVudElkXSB8fCB7fTtcbiAgICB2YXIgcHJlbG9hZGVkRGF0YSA9IGNvbnRlbnQuY29udGVudFVzZXJEYXRhO1xuICAgIGlmIChwcmVsb2FkZWREYXRhICYmIHByZWxvYWRlZERhdGFbc3ViQ29udGVudElkXSAmJiBwcmVsb2FkZWREYXRhW3N1YkNvbnRlbnRJZF1bZGF0YUlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAocHJlbG9hZGVkRGF0YVtzdWJDb250ZW50SWRdW2RhdGFJZF0gPT09ICdSRVNFVCcpIHtcbiAgICAgICAgZG9uZSh1bmRlZmluZWQsIG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBkb25lKHVuZGVmaW5lZCwgSlNPTi5wYXJzZShwcmVsb2FkZWREYXRhW3N1YkNvbnRlbnRJZF1bZGF0YUlkXSkpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICBkb25lKGVycik7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29udGVudFVzZXJEYXRhQWpheChjb250ZW50SWQsIGRhdGFJZCwgc3ViQ29udGVudElkLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgIGlmIChlcnIgfHwgZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZG9uZShlcnIsIGRhdGEpO1xuICAgICAgICAgIHJldHVybjsgLy8gRXJyb3Igb3Igbm8gZGF0YVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FjaGUgaW4gcHJlbG9hZGVkXG4gICAgICAgIGlmIChjb250ZW50LmNvbnRlbnRVc2VyRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29udGVudC5jb250ZW50VXNlckRhdGEgPSBwcmVsb2FkZWREYXRhID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZWxvYWRlZERhdGFbc3ViQ29udGVudElkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJlbG9hZGVkRGF0YVtzdWJDb250ZW50SWRdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcHJlbG9hZGVkRGF0YVtzdWJDb250ZW50SWRdW2RhdGFJZF0gPSBkYXRhO1xuXG4gICAgICAgIC8vIERvbmUuIFRyeSB0byBkZWNvZGUgSlNPTlxuICAgICAgICB0cnkge1xuICAgICAgICAgIGRvbmUodW5kZWZpbmVkLCBKU09OLnBhcnNlKGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGRvbmUoZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQXN5bmMgZXJyb3IgaGFuZGxpbmcuXG4gICAqXG4gICAqIEBjYWxsYmFjayBINVAuRXJyb3JDYWxsYmFja1xuICAgKiBAcGFyYW0geyp9IGVycm9yXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTZXQgdXNlciBkYXRhIGZvciBnaXZlbiBjb250ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gY29udGVudElkXG4gICAqICAgV2hhdCBjb250ZW50IHRvIGdldCBkYXRhIGZvci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFJZFxuICAgKiAgIElkZW50aWZpZXMgdGhlIHNldCBvZiBkYXRhIGZvciB0aGlzIGNvbnRlbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqICAgVGhlIGRhdGEgdGhhdCBpcyB0byBiZSBzdG9yZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbZXh0cmFzXVxuICAgKiAgIEV4dHJhIHByb3BlcnRpZXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtleHRyYXMuc3ViQ29udGVudElkXVxuICAgKiAgIElkZW50aWZpZXMgd2hpY2ggZGF0YSBiZWxvbmdzIHRvIHN1YiBjb250ZW50LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtleHRyYXMucHJlbG9hZGVkPXRydWVdXG4gICAqICAgSWYgdGhlIGRhdGEgc2hvdWxkIGJlIGxvYWRlZCB3aGVuIGNvbnRlbnQgaXMgbG9hZGVkLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtleHRyYXMuZGVsZXRlT25DaGFuZ2U9ZmFsc2VdXG4gICAqICAgSWYgdGhlIGRhdGEgc2hvdWxkIGJlIGludmFsaWRhdGVkIHdoZW4gdGhlIGNvbnRlbnQgY2hhbmdlcy5cbiAgICogQHBhcmFtIHtINVAuRXJyb3JDYWxsYmFja30gW2V4dHJhcy5lcnJvckNhbGxiYWNrXVxuICAgKiAgIENhbGxiYWNrIHdpdGggZXJyb3IgYXMgcGFyYW1ldGVycy5cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXh0cmFzLmFzeW5jPXRydWVdXG4gICAqL1xuICBINVAuc2V0VXNlckRhdGEgPSBmdW5jdGlvbiAoY29udGVudElkLCBkYXRhSWQsIGRhdGEsIGV4dHJhcykge1xuICAgIHZhciBvcHRpb25zID0gSDVQLmpRdWVyeS5leHRlbmQodHJ1ZSwge30sIHtcbiAgICAgIHN1YkNvbnRlbnRJZDogMCxcbiAgICAgIHByZWxvYWRlZDogdHJ1ZSxcbiAgICAgIGRlbGV0ZU9uQ2hhbmdlOiBmYWxzZSxcbiAgICAgIGFzeW5jOiB0cnVlXG4gICAgfSwgZXh0cmFzKTtcblxuICAgIHRyeSB7XG4gICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChvcHRpb25zLmVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgb3B0aW9ucy5lcnJvckNhbGxiYWNrKGVycik7XG4gICAgICB9XG4gICAgICByZXR1cm47IC8vIEZhaWxlZCB0byBzZXJpYWxpemUuXG4gICAgfVxuXG4gICAgdmFyIGNvbnRlbnQgPSBINVBJbnRlZ3JhdGlvbi5jb250ZW50c1snY2lkLScgKyBjb250ZW50SWRdO1xuICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRlbnQgPSBINVBJbnRlZ3JhdGlvbi5jb250ZW50c1snY2lkLScgKyBjb250ZW50SWRdID0ge307XG4gICAgfVxuICAgIGlmICghY29udGVudC5jb250ZW50VXNlckRhdGEpIHtcbiAgICAgIGNvbnRlbnQuY29udGVudFVzZXJEYXRhID0ge307XG4gICAgfVxuICAgIHZhciBwcmVsb2FkZWREYXRhID0gY29udGVudC5jb250ZW50VXNlckRhdGE7XG4gICAgaWYgKHByZWxvYWRlZERhdGFbb3B0aW9ucy5zdWJDb250ZW50SWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWxvYWRlZERhdGFbb3B0aW9ucy5zdWJDb250ZW50SWRdID0ge307XG4gICAgfVxuICAgIGlmIChkYXRhID09PSBwcmVsb2FkZWREYXRhW29wdGlvbnMuc3ViQ29udGVudElkXVtkYXRhSWRdKSB7XG4gICAgICByZXR1cm47IC8vIE5vIG5lZWQgdG8gc2F2ZSB0aGlzIHR3aWNlLlxuICAgIH1cblxuICAgIHByZWxvYWRlZERhdGFbb3B0aW9ucy5zdWJDb250ZW50SWRdW2RhdGFJZF0gPSBkYXRhO1xuICAgIGNvbnRlbnRVc2VyRGF0YUFqYXgoY29udGVudElkLCBkYXRhSWQsIG9wdGlvbnMuc3ViQ29udGVudElkLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChvcHRpb25zLmVycm9yQ2FsbGJhY2sgJiYgZXJyb3IpIHtcbiAgICAgICAgb3B0aW9ucy5lcnJvckNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH1cbiAgICB9LCBkYXRhLCBvcHRpb25zLnByZWxvYWRlZCwgb3B0aW9ucy5kZWxldGVPbkNoYW5nZSwgb3B0aW9ucy5hc3luYyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB1c2VyIGRhdGEgZm9yIGdpdmVuIGNvbnRlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb250ZW50SWRcbiAgICogICBXaGF0IGNvbnRlbnQgdG8gcmVtb3ZlIGRhdGEgZm9yLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YUlkXG4gICAqICAgSWRlbnRpZmllcyB0aGUgc2V0IG9mIGRhdGEgZm9yIHRoaXMgY29udGVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzdWJDb250ZW50SWRdXG4gICAqICAgSWRlbnRpZmllcyB3aGljaCBkYXRhIGJlbG9uZ3MgdG8gc3ViIGNvbnRlbnQuXG4gICAqL1xuICBINVAuZGVsZXRlVXNlckRhdGEgPSBmdW5jdGlvbiAoY29udGVudElkLCBkYXRhSWQsIHN1YkNvbnRlbnRJZCkge1xuICAgIGlmICghc3ViQ29udGVudElkKSB7XG4gICAgICBzdWJDb250ZW50SWQgPSAwOyAvLyBEZWZhdWx0XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGZyb20gcHJlbG9hZGVkL2NhY2hlXG4gICAgdmFyIHByZWxvYWRlZERhdGEgPSBINVBJbnRlZ3JhdGlvbi5jb250ZW50c1snY2lkLScgKyBjb250ZW50SWRdLmNvbnRlbnRVc2VyRGF0YTtcbiAgICBpZiAocHJlbG9hZGVkRGF0YSAmJiBwcmVsb2FkZWREYXRhW3N1YkNvbnRlbnRJZF0gJiYgcHJlbG9hZGVkRGF0YVtzdWJDb250ZW50SWRdW2RhdGFJZF0pIHtcbiAgICAgIGRlbGV0ZSBwcmVsb2FkZWREYXRhW3N1YkNvbnRlbnRJZF1bZGF0YUlkXTtcbiAgICB9XG5cbiAgICBjb250ZW50VXNlckRhdGFBamF4KGNvbnRlbnRJZCwgZGF0YUlkLCBzdWJDb250ZW50SWQsIHVuZGVmaW5lZCwgbnVsbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGZvciBnZXR0aW5nIGNvbnRlbnQgZm9yIGEgY2VydGFpbiBJRFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gY29udGVudElkXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEg1UC5nZXRDb250ZW50Rm9ySW5zdGFuY2UgPSBmdW5jdGlvbiAoY29udGVudElkKSB7XG4gICAgdmFyIGtleSA9ICdjaWQtJyArIGNvbnRlbnRJZDtcbiAgICB2YXIgZXhpc3RzID0gSDVQSW50ZWdyYXRpb24gJiYgSDVQSW50ZWdyYXRpb24uY29udGVudHMgJiZcbiAgICAgICAgICAgICAgICAgSDVQSW50ZWdyYXRpb24uY29udGVudHNba2V5XTtcblxuICAgIHJldHVybiBleGlzdHMgPyBINVBJbnRlZ3JhdGlvbi5jb250ZW50c1trZXldIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVwYXJlcyB0aGUgY29udGVudCBwYXJhbWV0ZXJzIGZvciBzdG9yaW5nIGluIHRoZSBjbGlwYm9hcmQuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVycyBUaGUgcGFyYW1ldGVycyBmb3IgdGhlIGNvbnRlbnQgdG8gc3RvcmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtnZW5lcmljUHJvcGVydHldIElmIG9ubHkgcGFydCBvZiB0aGUgcGFyYW1ldGVycyBhcmUgZ2VuZXJpYywgd2hpY2ggcGFydFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NwZWNpZmljS2V5XSBJZiB0aGUgcGFyYW1ldGVycyBhcmUgc3BlY2lmaWMsIHdoYXQgY29udGVudCB0eXBlIGRvZXMgaXQgZml0XG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJlYWR5IGZvciB0aGUgY2xpcGJvYXJkXG4gICAqL1xuICBINVAuQ2xpcGJvYXJkSXRlbSA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzLCBnZW5lcmljUHJvcGVydHksIHNwZWNpZmljS2V5KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogU2V0IHJlbGF0aXZlIGRpbWVuc2lvbnMgd2hlbiBwYXJhbXMgY29udGFpbnMgYSBmaWxlIHdpdGggYSB3aWR0aCBhbmQgYSBoZWlnaHQuXG4gICAgICogVmVyeSB1c2VmdWwgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHd5c2l3eWcgZWRpdG9ycy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdmFyIHNldERpbWVuc2lvbnNGcm9tRmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc2VsZi5nZW5lcmljKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBwYXJhbXMgPSBzZWxmLnNwZWNpZmljW3NlbGYuZ2VuZXJpY107XG4gICAgICBpZiAoIXBhcmFtcy5wYXJhbXMuZmlsZSB8fCAhcGFyYW1zLnBhcmFtcy5maWxlLndpZHRoIHx8ICFwYXJhbXMucGFyYW1zLmZpbGUuaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi53aWR0aCA9IDIwOyAvLyAlXG4gICAgICBzZWxmLmhlaWdodCA9IChwYXJhbXMucGFyYW1zLmZpbGUuaGVpZ2h0IC8gcGFyYW1zLnBhcmFtcy5maWxlLndpZHRoKSAqIHNlbGYud2lkdGg7XG4gICAgfTtcblxuICAgIGlmICghZ2VuZXJpY1Byb3BlcnR5KSB7XG4gICAgICBnZW5lcmljUHJvcGVydHkgPSAnYWN0aW9uJztcbiAgICAgIHBhcmFtZXRlcnMgPSB7XG4gICAgICAgIGFjdGlvbjogcGFyYW1ldGVyc1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBzZWxmLnNwZWNpZmljID0gcGFyYW1ldGVycztcblxuICAgIGlmIChnZW5lcmljUHJvcGVydHkgJiYgcGFyYW1ldGVyc1tnZW5lcmljUHJvcGVydHldKSB7XG4gICAgICBzZWxmLmdlbmVyaWMgPSBnZW5lcmljUHJvcGVydHk7XG4gICAgfVxuICAgIGlmIChzcGVjaWZpY0tleSkge1xuICAgICAgc2VsZi5mcm9tID0gc3BlY2lmaWNLZXk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5INVBFZGl0b3IgJiYgSDVQRWRpdG9yLmNvbnRlbnRJZCkge1xuICAgICAgc2VsZi5jb250ZW50SWQgPSBINVBFZGl0b3IuY29udGVudElkO1xuICAgIH1cblxuICAgIGlmICghc2VsZi5zcGVjaWZpYy53aWR0aCAmJiAhc2VsZi5zcGVjaWZpYy5oZWlnaHQpIHtcbiAgICAgIHNldERpbWVuc2lvbnNGcm9tRmlsZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU3RvcmUgaXRlbSBpbiB0aGUgSDVQIENsaXBib2FyZC5cbiAgICpcbiAgICogQHBhcmFtIHtINVAuQ2xpcGJvYXJkSXRlbXwqfSBjbGlwYm9hcmRJdGVtXG4gICAqL1xuICBINVAuY2xpcGJvYXJkaWZ5ID0gZnVuY3Rpb24gKGNsaXBib2FyZEl0ZW0pIHtcbiAgICBpZiAoIShjbGlwYm9hcmRJdGVtIGluc3RhbmNlb2YgSDVQLkNsaXBib2FyZEl0ZW0pKSB7XG4gICAgICBjbGlwYm9hcmRJdGVtID0gbmV3IEg1UC5DbGlwYm9hcmRJdGVtKGNsaXBib2FyZEl0ZW0pO1xuICAgIH1cbiAgICBINVAuc2V0Q2xpcGJvYXJkKGNsaXBib2FyZEl0ZW0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBwYXJzZWQgY2xpcGJvYXJkIGRhdGEuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEg1UC5nZXRDbGlwYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHBhcnNlQ2xpcGJvYXJkKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBpdGVtIGluIHRoZSBINVAgQ2xpcGJvYXJkLlxuICAgKlxuICAgKiBAcGFyYW0ge0g1UC5DbGlwYm9hcmRJdGVtfG9iamVjdH0gY2xpcGJvYXJkSXRlbSAtIERhdGEgdG8gYmUgc2V0LlxuICAgKi9cbiAgSDVQLnNldENsaXBib2FyZCA9IGZ1bmN0aW9uIChjbGlwYm9hcmRJdGVtKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2g1cENsaXBib2FyZCcsIEpTT04uc3RyaW5naWZ5KGNsaXBib2FyZEl0ZW0pKTtcblxuICAgIC8vIFRyaWdnZXIgYW4gZXZlbnQgc28gYWxsICdQYXN0ZScgYnV0dG9ucyBtYXkgYmUgZW5hYmxlZC5cbiAgICBINVAuZXh0ZXJuYWxEaXNwYXRjaGVyLnRyaWdnZXIoJ2RhdGFpbmNsaXBib2FyZCcsIHtyZXNldDogZmFsc2V9KTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGNvbmZpZyBmb3IgYSBsaWJyYXJ5XG4gICAqXG4gICAqIEBwYXJhbSBzdHJpbmcgbWFjaGluZU5hbWVcbiAgICogQHJldHVybiBPYmplY3RcbiAgICovXG4gIEg1UC5nZXRMaWJyYXJ5Q29uZmlnID0gZnVuY3Rpb24gKG1hY2hpbmVOYW1lKSB7XG4gICAgdmFyIGhhc0NvbmZpZyA9IEg1UEludGVncmF0aW9uLmxpYnJhcnlDb25maWcgJiYgSDVQSW50ZWdyYXRpb24ubGlicmFyeUNvbmZpZ1ttYWNoaW5lTmFtZV07XG4gICAgcmV0dXJuIGhhc0NvbmZpZyA/IEg1UEludGVncmF0aW9uLmxpYnJhcnlDb25maWdbbWFjaGluZU5hbWVdIDoge307XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBpdGVtIGZyb20gdGhlIEg1UCBDbGlwYm9hcmQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIHZhciBwYXJzZUNsaXBib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2xpcGJvYXJkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoNXBDbGlwYm9hcmQnKTtcbiAgICBpZiAoIWNsaXBib2FyZERhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUcnkgdG8gcGFyc2UgY2xpcGJvYXJkIGRhdFxuICAgIHRyeSB7XG4gICAgICBjbGlwYm9hcmREYXRhID0gSlNPTi5wYXJzZShjbGlwYm9hcmREYXRhKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIHBhcnNlIEpTT04gZnJvbSBjbGlwYm9hcmQuJywgZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgZmlsZSBVUkxzIGFuZCByZXNldCBjb250ZW50IElkc1xuICAgIHJlY3Vyc2l2ZVVwZGF0ZShjbGlwYm9hcmREYXRhLnNwZWNpZmljLCBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgdmFyIGlzVG1wRmlsZSA9IChwYXRoLnN1YnN0cigtNCwgNCkgPT09ICcjdG1wJyk7XG4gICAgICBpZiAoIWlzVG1wRmlsZSAmJiBjbGlwYm9hcmREYXRhLmNvbnRlbnRJZCAmJiAhcGF0aC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8vaSkpIHtcbiAgICAgICAgLy8gQ29tZXMgZnJvbSBleGlzdGluZyBjb250ZW50XG5cbiAgICAgICAgaWYgKEg1UEVkaXRvci5jb250ZW50SWQpIHtcbiAgICAgICAgICAvLyAuLiB0byBleGlzdGluZyBjb250ZW50XG4gICAgICAgICAgcmV0dXJuICcuLi8nICsgY2xpcGJvYXJkRGF0YS5jb250ZW50SWQgKyAnLycgKyBwYXRoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIC4uIHRvIG5ldyBjb250ZW50XG4gICAgICAgICAgcmV0dXJuIChINVBFZGl0b3IuY29udGVudFJlbFVybCA/IEg1UEVkaXRvci5jb250ZW50UmVsVXJsIDogJy4uL2NvbnRlbnQvJykgKyBjbGlwYm9hcmREYXRhLmNvbnRlbnRJZCArICcvJyArIHBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXRoOyAvLyBXaWxsIGF1dG9tYXRpY2FsbHkgYmUgbG9va2VkIGZvciBpbiB0bXAgZm9sZGVyXG4gICAgfSk7XG5cblxuICAgIGlmIChjbGlwYm9hcmREYXRhLmdlbmVyaWMpIHtcbiAgICAgIC8vIFVzZSByZWZlcmVuY2UgaW5zdGVhZCBvZiBrZXlcbiAgICAgIGNsaXBib2FyZERhdGEuZ2VuZXJpYyA9IGNsaXBib2FyZERhdGEuc3BlY2lmaWNbY2xpcGJvYXJkRGF0YS5nZW5lcmljXTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xpcGJvYXJkRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIGZpbGUgVVJMcyBhbmQgcmVzZXQgY29udGVudCBJRHMuXG4gICAqIFVzZWZ1bCB3aGVuIGNvcHlpbmcgY29udGVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyBSZWZlcmVuY2VcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciBNb2RpZmllcyB0aGUgcGF0aCB0byB3b3JrIHdoZW4gcGFzdGVkXG4gICAqL1xuICB2YXIgcmVjdXJzaXZlVXBkYXRlID0gZnVuY3Rpb24gKHBhcmFtcywgaGFuZGxlcikge1xuICAgIGZvciAodmFyIHByb3AgaW4gcGFyYW1zKSB7XG4gICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHByb3ApICYmIHBhcmFtc1twcm9wXSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICB2YXIgb2JqID0gcGFyYW1zW3Byb3BdO1xuICAgICAgICBpZiAob2JqLnBhdGggIT09IHVuZGVmaW5lZCAmJiBvYmoubWltZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgb2JqLnBhdGggPSBoYW5kbGVyKG9iai5wYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAob2JqLmxpYnJhcnkgIT09IHVuZGVmaW5lZCAmJiBvYmouc3ViQ29udGVudElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIEF2b2lkIG11bHRpcGxlIGNvbnRlbnQgd2l0aCBzYW1lIElEXG4gICAgICAgICAgICBkZWxldGUgb2JqLnN1YkNvbnRlbnRJZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdXJzaXZlVXBkYXRlKG9iaiwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gSW5pdCBINVAgd2hlbiBwYWdlIGlzIGZ1bGx5IGxvYWRkZWRcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIFBpY2sgdXAgY2xpcGJvYXJkIGNoYW5nZXMgZnJvbSBvdGhlciB0YWJzXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnaDVwQ2xpcGJvYXJkJykge1xuICAgICAgICAvLyBUcmlnZ2VyIGFuIGV2ZW50IHNvIGFsbCAnUGFzdGUnIGJ1dHRvbnMgbWF5IGJlIGVuYWJsZWQuXG4gICAgICAgIEg1UC5leHRlcm5hbERpc3BhdGNoZXIudHJpZ2dlcignZGF0YWluY2xpcGJvYXJkJywge3Jlc2V0OiBldmVudC5uZXdWYWx1ZSA9PT0gbnVsbH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGNjVmVyc2lvbnMgPSB7XG4gICAgICAnZGVmYXVsdCc6ICc0LjAnLFxuICAgICAgJzQuMCc6IEg1UC50KCdsaWNlbnNlQ0M0MCcpLFxuICAgICAgJzMuMCc6IEg1UC50KCdsaWNlbnNlQ0MzMCcpLFxuICAgICAgJzIuNSc6IEg1UC50KCdsaWNlbnNlQ0MyNScpLFxuICAgICAgJzIuMCc6IEg1UC50KCdsaWNlbnNlQ0MyMCcpLFxuICAgICAgJzEuMCc6IEg1UC50KCdsaWNlbnNlQ0MxMCcpLFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNYXBzIGNvcHlyaWdodCBsaWNlbnNlIGNvZGVzIHRvIHRoZWlyIGh1bWFuIHJlYWRhYmxlIGNvdW50ZXJwYXJ0LlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICBINVAuY29weXJpZ2h0TGljZW5zZXMgPSB7XG4gICAgICAnVSc6IEg1UC50KCdsaWNlbnNlVScpLFxuICAgICAgJ0NDIEJZJzoge1xuICAgICAgICBsYWJlbDogSDVQLnQoJ2xpY2Vuc2VDQ0JZJyksXG4gICAgICAgIGxpbms6ICdodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS86dmVyc2lvbicsXG4gICAgICAgIHZlcnNpb25zOiBjY1ZlcnNpb25zXG4gICAgICB9LFxuICAgICAgJ0NDIEJZLVNBJzoge1xuICAgICAgICBsYWJlbDogSDVQLnQoJ2xpY2Vuc2VDQ0JZU0EnKSxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzp2ZXJzaW9uJyxcbiAgICAgICAgdmVyc2lvbnM6IGNjVmVyc2lvbnNcbiAgICAgIH0sXG4gICAgICAnQ0MgQlktTkQnOiB7XG4gICAgICAgIGxhYmVsOiBINVAudCgnbGljZW5zZUNDQllORCcpLFxuICAgICAgICBsaW5rOiAnaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktbmQvOnZlcnNpb24nLFxuICAgICAgICB2ZXJzaW9uczogY2NWZXJzaW9uc1xuICAgICAgfSxcbiAgICAgICdDQyBCWS1OQyc6IHtcbiAgICAgICAgbGFiZWw6IEg1UC50KCdsaWNlbnNlQ0NCWU5DJyksXG4gICAgICAgIGxpbms6ICdodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1uYy86dmVyc2lvbicsXG4gICAgICAgIHZlcnNpb25zOiBjY1ZlcnNpb25zXG4gICAgICB9LFxuICAgICAgJ0NDIEJZLU5DLVNBJzoge1xuICAgICAgICBsYWJlbDogSDVQLnQoJ2xpY2Vuc2VDQ0JZTkNTQScpLFxuICAgICAgICBsaW5rOiAnaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktbmMtc2EvOnZlcnNpb24nLFxuICAgICAgICB2ZXJzaW9uczogY2NWZXJzaW9uc1xuICAgICAgfSxcbiAgICAgICdDQyBCWS1OQy1ORCc6IHtcbiAgICAgICAgbGFiZWw6IEg1UC50KCdsaWNlbnNlQ0NCWU5DTkQnKSxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5jLW5kLzp2ZXJzaW9uJyxcbiAgICAgICAgdmVyc2lvbnM6IGNjVmVyc2lvbnNcbiAgICAgIH0sXG4gICAgICAnQ0MwIDEuMCc6IHtcbiAgICAgICAgbGFiZWw6IEg1UC50KCdsaWNlbnNlQ0MwMTAnKSxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9wdWJsaWNkb21haW4vemVyby8xLjAvJ1xuICAgICAgfSxcbiAgICAgICdHTlUgR1BMJzoge1xuICAgICAgICBsYWJlbDogSDVQLnQoJ2xpY2Vuc2VHUEwnKSxcbiAgICAgICAgbGluazogJ2h0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtOnZlcnNpb24tc3RhbmRhbG9uZS5odG1sJyxcbiAgICAgICAgbGlua1ZlcnNpb25zOiB7XG4gICAgICAgICAgJ3YzJzogJzMuMCcsXG4gICAgICAgICAgJ3YyJzogJzIuMCcsXG4gICAgICAgICAgJ3YxJzogJzEuMCdcbiAgICAgICAgfSxcbiAgICAgICAgdmVyc2lvbnM6IHtcbiAgICAgICAgICAnZGVmYXVsdCc6ICd2MycsXG4gICAgICAgICAgJ3YzJzogSDVQLnQoJ2xpY2Vuc2VWMycpLFxuICAgICAgICAgICd2Mic6IEg1UC50KCdsaWNlbnNlVjInKSxcbiAgICAgICAgICAndjEnOiBINVAudCgnbGljZW5zZVYxJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdQRCc6IHtcbiAgICAgICAgbGFiZWw6IEg1UC50KCdsaWNlbnNlUEQnKSxcbiAgICAgICAgdmVyc2lvbnM6IHtcbiAgICAgICAgICAnQ0MwIDEuMCc6IHtcbiAgICAgICAgICAgIGxhYmVsOiBINVAudCgnbGljZW5zZUNDMDEwJyksXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL3B1YmxpY2RvbWFpbi96ZXJvLzEuMC8nXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnQ0MgUERNJzoge1xuICAgICAgICAgICAgbGFiZWw6IEg1UC50KCdsaWNlbnNlUERNJyksXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL3B1YmxpY2RvbWFpbi9tYXJrLzEuMC8nXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ09EQyBQRERMJzogJzxhIGhyZWY9XCJodHRwOi8vb3BlbmRhdGFjb21tb25zLm9yZy9saWNlbnNlcy9wZGRsLzEuMC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5QdWJsaWMgRG9tYWluIERlZGljYXRpb24gYW5kIExpY2VuY2U8L2E+JyxcbiAgICAgICdDQyBQRE0nOiB7XG4gICAgICAgIGxhYmVsOiBINVAudCgnbGljZW5zZVBETScpLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL3B1YmxpY2RvbWFpbi9tYXJrLzEuMC8nXG4gICAgICB9LFxuICAgICAgJ0MnOiBINVAudCgnbGljZW5zZUMnKSxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIEg1UCBpcyBlbWJlZGRlZCBvbiBhbiBleHRlcm5hbCBwYWdlIHVzaW5nIGlmcmFtZS5cbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBINVAuZXh0ZXJuYWxFbWJlZFxuICAgICAqL1xuXG4gICAgLy8gUmVsYXkgZXZlbnRzIHRvIHRvcCB3aW5kb3cuIFRoaXMgbXVzdCBiZSBkb25lIGJlZm9yZSBINVAuaW5pdFxuICAgIC8vIHNpbmNlIGV2ZW50cyBtYXkgYmUgZmlyZWQgb24gaW5pdGlhbGl6YXRpb24uXG4gICAgaWYgKEg1UC5pc0ZyYW1lZCAmJiBINVAuZXh0ZXJuYWxFbWJlZCA9PT0gZmFsc2UpIHtcbiAgICAgIEg1UC5leHRlcm5hbERpc3BhdGNoZXIub24oJyonLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgd2luZG93LnBhcmVudC5INVAuZXh0ZXJuYWxEaXNwYXRjaGVyLnRyaWdnZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmV2ZW50IEg1UCBDb3JlIGZyb20gaW5pdGlhbGl6aW5nLiBNdXN0IGJlIG92ZXJyaWRlbiBiZWZvcmUgZG9jdW1lbnQgcmVhZHkuXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gSDVQLnByZXZlbnRJbml0XG4gICAgICovXG4gICAgaWYgKCFINVAucHJldmVudEluaXQpIHtcbiAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIHN0YXJ0IHNjcmlwdCBoYXMgdG8gYmUgYW4gZXh0ZXJuYWwgcmVzb3VyY2UgZm9yIGl0IHRvXG4gICAgICAvLyBsb2FkIGluIGNvcnJlY3Qgb3JkZXIgaW4gSUU5LlxuICAgICAgSDVQLmluaXQoZG9jdW1lbnQuYm9keSk7XG4gICAgfVxuXG4gICAgaWYgKEg1UEludGVncmF0aW9uLnNhdmVGcmVxICE9PSBmYWxzZSkge1xuICAgICAgLy8gV2hlbiB3YXMgdGhlIGxhc3Qgc3RhdGUgc3RvcmVkXG4gICAgICB2YXIgbGFzdFN0b3JlZE9uID0gMDtcbiAgICAgIC8vIFN0b3JlIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBINVAgd2hlbiBsZWF2aW5nIHRoZSBwYWdlLlxuICAgICAgdmFyIHN0b3JlQ3VycmVudFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgYXQgbGVhc3QgMjUwIG1zIGhhcyBwYXNzZWQgc2luY2UgbGFzdCBzYXZlXG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAoY3VycmVudFRpbWUgLSBsYXN0U3RvcmVkT24gPiAyNTApIHtcbiAgICAgICAgICBsYXN0U3RvcmVkT24gPSBjdXJyZW50VGltZTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEg1UC5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IEg1UC5pbnN0YW5jZXNbaV07XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UuZ2V0Q3VycmVudFN0YXRlIGluc3RhbmNlb2YgRnVuY3Rpb24gfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgaW5zdGFuY2UuZ2V0Q3VycmVudFN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHZhciBzdGF0ZSA9IGluc3RhbmNlLmdldEN1cnJlbnRTdGF0ZSgpO1xuICAgICAgICAgICAgICBpZiAoc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIEFzeW5jIGlzIG5vdCB1c2VkIHRvIHByZXZlbnQgdGhlIHJlcXVlc3QgZnJvbSBiZWluZyBjYW5jZWxsZWQuXG4gICAgICAgICAgICAgICAgSDVQLnNldFVzZXJEYXRhKGluc3RhbmNlLmNvbnRlbnRJZCwgJ3N0YXRlJywgc3RhdGUsIHtkZWxldGVPbkNoYW5nZTogdHJ1ZSwgYXN5bmM6IGZhbHNlfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAvLyBpUGFkIGRvZXMgbm90IHN1cHBvcnQgYmVmb3JldW5sb2FkLCB0aGVyZWZvcmUgdXNpbmcgdW5sb2FkXG4gICAgICBINVAuJHdpbmRvdy5vbmUoJ2JlZm9yZXVubG9hZCB1bmxvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE9ubHkgd2FudCB0byBkbyB0aGlzIG9uY2VcbiAgICAgICAgSDVQLiR3aW5kb3cub2ZmKCdwYWdlaGlkZSBiZWZvcmV1bmxvYWQgdW5sb2FkJyk7XG4gICAgICAgIHN0b3JlQ3VycmVudFN0YXRlKCk7XG4gICAgICB9KTtcbiAgICAgIC8vIHBhZ2VoaWRlIGlzIHVzZWQgb24gaVBhZCB3aGVuIHRhYnMgYXJlIHN3aXRjaGVkXG4gICAgICBINVAuJHdpbmRvdy5vbigncGFnZWhpZGUnLCBzdG9yZUN1cnJlbnRTdGF0ZSk7XG4gICAgfVxuICB9KTtcblxufSkoSDVQLmpRdWVyeSk7XG5cblxuXG4vKioqIEVYUE9SVFMgRlJPTSBleHBvcnRzLWxvYWRlciAqKiovXG5tb2R1bGUuZXhwb3J0cyA9IEg1UDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLyoqKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBHdXN0YXZvIEhlbmtlIGFuZCBBYXJvbiBUcmVudFxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKlxuICoqKiovXG4oZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcbiAgICBpZiggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG4gICAgICAgIGRlZmluZSggXCJUb3Bvc29ydFwiLCBbXCJleHBvcnRzXCIsIFwibW9kdWxlXCJdLCBmYWN0b3J5ICk7XG4gICAgfSBlbHNlIGlmKCB0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICkge1xuICAgICAgICBmYWN0b3J5KCBleHBvcnRzLCBtb2R1bGUgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbW9kID0ge1xuICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgfTtcbiAgICAgICAgZmFjdG9yeSggbW9kLmV4cG9ydHMsIG1vZCApO1xuICAgICAgICBnbG9iYWwuVG9wb3NvcnQgPSBtb2QuZXhwb3J0cztcbiAgICB9XG59KSggdGhpcywgZnVuY3Rpb24oIGV4cG9ydHMsIG1vZHVsZSApIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayggaW5zdGFuY2UsIENvbnN0cnVjdG9yICkge1xuICAgICAgICBpZiggIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBUb3Bvc29ydCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgZnVuY3Rpb24gVG9wb3NvcnQoKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2soIHRoaXMsIFRvcG9zb3J0ICk7XG5cbiAgICAgICAgICAgIHRoaXMuZWRnZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuVG9wb3NvcnQgPSBUb3Bvc29ydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIGRlcGVuZGVuY3kgZWRnZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBzaW5jZSAgIDAuMS4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtTdHJpbmd9IGl0ZW0gICAgICAgICAgICAgICBBbiBkZXBlbmRlbnQgbmFtZS4gTXVzdCBiZSBhbiBzdHJpbmcgYW5kIG5vdCBlbXB0eVxuICAgICAgICAgKiBAcGFyYW0gICB7U3RyaW5nW118U3RyaW5nfSBbZGVwc10gICAgQW4gZGVwZW5kZW5jeSBvciBhcnJheSBvZiBkZXBlbmRlbmNpZXNcbiAgICAgICAgICogQHJldHVybnMge1RvcG9zb3J0fSAgICAgICAgICAgICAgICAgIFRoZSBUb3Bvc29ydCBpbnN0YW5jZVxuICAgICAgICAgKi9cblxuICAgICAgICBUb3Bvc29ydC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkKCBpdGVtLCBkZXBzICkge1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBpdGVtICE9PSBcInN0cmluZ1wiIHx8ICFpdGVtICkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIFwiRGVwZW5kZW50IG5hbWUgbXVzdCBiZSBnaXZlbiBhcyBhIG5vdCBlbXB0eSBzdHJpbmdcIiApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZXBzID0gQXJyYXkuaXNBcnJheSggZGVwcyApID8gZGVwcyA6IFtkZXBzXTtcblxuICAgICAgICAgICAgaWYoIGRlcHMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgICAgICBmb3IoIHZhciBfaXRlcmF0b3IgPSBkZXBzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoIF9pdGVyYXRvciApLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOyA7ICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICAgICAgICAgICAgICBpZiggX2lzQXJyYXkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggX2kuZG9uZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXAgPSBfcmVmO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgZGVwICE9PSBcInN0cmluZ1wiIHx8ICFkZXAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCBcIkRlcGVuZGVuY3kgbmFtZSBtdXN0IGJlIGdpdmVuIGFzIGEgbm90IGVtcHR5IHN0cmluZ1wiICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkZ2VzLnB1c2goIFtpdGVtLCBkZXBdICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkZ2VzLnB1c2goIFtpdGVtXSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUnVucyB0aGUgdG9wb3NvcnRpbmcgYW5kIHJldHVybiBhbiBvcmRlcmVkIGFycmF5IG9mIHN0cmluZ3NcbiAgICAgICAgICpcbiAgICAgICAgICogQHNpbmNlICAgMC4xLjBcbiAgICAgICAgICogQHJldHVybnMge1N0cmluZ1tdfSAgVGhlIGxpc3Qgb2YgaXRlbXMgdG9wb2xvZ2ljYWxseSBzb3J0ZWQuXG4gICAgICAgICAqL1xuXG4gICAgICAgIFRvcG9zb3J0LnByb3RvdHlwZS5zb3J0ID0gZnVuY3Rpb24gc29ydCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBub2RlcyA9IFtdO1xuXG4gICAgICAgICAgICAvL2FjY3VtdWxhdGUgdW5pcXVlIG5vZGVzIGludG8gYSBsYXJnZSBsaXN0XG4gICAgICAgICAgICBmb3IoIHZhciBfaXRlcmF0b3IyID0gdGhpcy5lZGdlcywgX2lzQXJyYXkyID0gQXJyYXkuaXNBcnJheSggX2l0ZXJhdG9yMiApLCBfaTIgPSAwLCBfaXRlcmF0b3IyID0gX2lzQXJyYXkyID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IyW1N5bWJvbC5pdGVyYXRvcl0oKTsgOyApIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZjI7XG5cbiAgICAgICAgICAgICAgICBpZiggX2lzQXJyYXkyICkge1xuICAgICAgICAgICAgICAgICAgICBpZiggX2kyID49IF9pdGVyYXRvcjIubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3JlZjIgPSBfaXRlcmF0b3IyW19pMisrXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaTIgPSBfaXRlcmF0b3IyLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIF9pMi5kb25lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3JlZjIgPSBfaTIudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGVkZ2UgPSBfcmVmMjtcblxuICAgICAgICAgICAgICAgIGZvciggdmFyIF9pdGVyYXRvcjMgPSBlZGdlLCBfaXNBcnJheTMgPSBBcnJheS5pc0FycmF5KCBfaXRlcmF0b3IzICksIF9pMyA9IDAsIF9pdGVyYXRvcjMgPSBfaXNBcnJheTMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yM1tTeW1ib2wuaXRlcmF0b3JdKCk7IDsgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfcmVmMztcblxuICAgICAgICAgICAgICAgICAgICBpZiggX2lzQXJyYXkzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF9pMyA+PSBfaXRlcmF0b3IzLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYzID0gX2l0ZXJhdG9yM1tfaTMrK107XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaTMgPSBfaXRlcmF0b3IzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfaTMuZG9uZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYzID0gX2kzLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBfcmVmMztcblxuICAgICAgICAgICAgICAgICAgICBpZiggbm9kZXMuaW5kZXhPZiggbm9kZSApID09PSAtMSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goIG5vZGUgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9pbml0aWFsaXplIHRoZSBwbGFjZW1lbnQgb2Ygbm9kZXMgaW50byB0aGUgc29ydGVkIGFycmF5IGF0IHRoZSBlbmRcbiAgICAgICAgICAgIHZhciBwbGFjZSA9IG5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgICAgLy9pbml0aWFsaXplIHRoZSBzb3J0ZWQgYXJyYXkgd2l0aCB0aGUgc2FtZSBsZW5ndGggYXMgdGhlIHVuaXF1ZSBub2RlcyBhcnJheVxuICAgICAgICAgICAgdmFyIHNvcnRlZCA9IG5ldyBBcnJheSggbm9kZXMubGVuZ3RoICk7XG5cbiAgICAgICAgICAgIC8vZGVmaW5lIGEgdmlzaXRvciBmdW5jdGlvbiB0aGF0IHJlY3Vyc2l2ZWx5IHRyYXZlcnNlcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICB2YXIgdmlzaXQgPSBmdW5jdGlvbiB2aXNpdCggbm9kZSwgcHJlZGVjZXNzb3JzICkge1xuICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgYSBub2RlIGlzIGRlcGVuZGVudCBvZiBpdHNlbGZcbiAgICAgICAgICAgICAgICBpZiggcHJlZGVjZXNzb3JzLmxlbmd0aCAhPT0gMCAmJiBwcmVkZWNlc3NvcnMuaW5kZXhPZiggbm9kZSApICE9PSAtMSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIkN5Y2xpYyBkZXBlbmRlbmN5IGZvdW5kLiBcIiArIG5vZGUgKyBcIiBpcyBkZXBlbmRlbnQgb2YgaXRzZWxmLlxcbkRlcGVuZGVuY3kgY2hhaW46IFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBwcmVkZWNlc3NvcnMuam9pbiggXCIgLT4gXCIgKSArIFwiID0+IFwiICsgbm9kZSApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IG5vZGVzLmluZGV4T2YoIG5vZGUgKTtcblxuICAgICAgICAgICAgICAgIC8vaWYgdGhlIG5vZGUgc3RpbGwgZXhpc3RzLCB0cmF2ZXJzZSBpdHMgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICAgICAgaWYoIGluZGV4ICE9PSAtMSApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvcHkgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAvL21hcmsgdGhlIG5vZGUgYXMgZmFsc2UgdG8gZXhjbHVkZSBpdCBmcm9tIGZ1dHVyZSBpdGVyYXRpb25zXG4gICAgICAgICAgICAgICAgICAgIG5vZGVzW2luZGV4XSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vbG9vcCB0aHJvdWdoIGFsbCBlZGdlcyBhbmQgZm9sbG93IGRlcGVuZGVuY2llcyBvZiB0aGUgY3VycmVudCBub2RlXG4gICAgICAgICAgICAgICAgICAgIGZvciggdmFyIF9pdGVyYXRvcjQgPSBfdGhpcy5lZGdlcywgX2lzQXJyYXk0ID0gQXJyYXkuaXNBcnJheSggX2l0ZXJhdG9yNCApLCBfaTQgPSAwLCBfaXRlcmF0b3I0ID0gX2lzQXJyYXk0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3I0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3I0W1N5bWJvbC5pdGVyYXRvcl0oKTsgOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcmVmNDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF9pc0FycmF5NCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggX2k0ID49IF9pdGVyYXRvcjQubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjQgPSBfaXRlcmF0b3I0W19pNCsrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2k0ID0gX2l0ZXJhdG9yNC5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF9pNC5kb25lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjQgPSBfaTQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlZGdlID0gX3JlZjQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBlZGdlWzBdID09PSBub2RlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbGF6aWx5IGNyZWF0ZSBhIGNvcHkgb2YgcHJlZGVjZXNzb3JzIHdpdGggdGhlIGN1cnJlbnQgbm9kZSBjb25jYXRlbmF0ZWQgb250byBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHkgPSBjb3B5IHx8IHByZWRlY2Vzc29ycy5jb25jYXQoIFtub2RlXSApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yZWN1cnNlIHRvIG5vZGUgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXQoIGVkZ2VbMV0sIGNvcHkgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vYWRkIHRoZSBub2RlIHRvIHRoZSBuZXh0IHBsYWNlIGluIHRoZSBzb3J0ZWQgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkWy0tcGxhY2VdID0gbm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IoIHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gbm9kZXNbaV07XG5cbiAgICAgICAgICAgICAgICAvL2lnbm9yZSBub2RlcyB0aGF0IGhhdmUgYmVlbiBleGNsdWRlZFxuICAgICAgICAgICAgICAgIGlmKCBub2RlICE9PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tYXJrIHRoZSBub2RlIGFzIGZhbHNlIHRvIGV4Y2x1ZGUgaXQgZnJvbSBmdXR1cmUgaXRlcmF0aW9uc1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vbG9vcCB0aHJvdWdoIGFsbCBlZGdlcyBhbmQgZm9sbG93IGRlcGVuZGVuY2llcyBvZiB0aGUgY3VycmVudCBub2RlXG4gICAgICAgICAgICAgICAgICAgIGZvciggdmFyIF9pdGVyYXRvcjUgPSB0aGlzLmVkZ2VzLCBfaXNBcnJheTUgPSBBcnJheS5pc0FycmF5KCBfaXRlcmF0b3I1ICksIF9pNSA9IDAsIF9pdGVyYXRvcjUgPSBfaXNBcnJheTUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yNSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3I1W1N5bWJvbC5pdGVyYXRvcl0oKTsgOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcmVmNTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF9pc0FycmF5NSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggX2k1ID49IF9pdGVyYXRvcjUubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjUgPSBfaXRlcmF0b3I1W19pNSsrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2k1ID0gX2l0ZXJhdG9yNS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF9pNS5kb25lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjUgPSBfaTUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlZGdlID0gX3JlZjU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBlZGdlWzBdID09PSBub2RlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVjdXJzZSB0byBub2RlIGRlcGVuZGVuY2llc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2l0KCBlZGdlWzFdLCBbbm9kZV0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vYWRkIHRoZSBub2RlIHRvIHRoZSBuZXh0IHBsYWNlIGluIHRoZSBzb3J0ZWQgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkWy0tcGxhY2VdID0gbm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzb3J0ZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsZWFycyBlZGdlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAc2luY2UgICAwLjQuMFxuICAgICAgICAgKiBAcmV0dXJucyB7VG9wb3NvcnR9ICAgICAgICAgICAgICAgICAgVGhlIFRvcG9zb3J0IGluc3RhbmNlXG4gICAgICAgICAqL1xuXG4gICAgICAgIFRvcG9zb3J0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy5lZGdlcyA9IFtdO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gVG9wb3NvcnQ7XG4gICAgfSkoKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gVG9wb3NvcnQ7XG59ICk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoICcuL2J1aWxkL3RvcG9zb3J0LmpzJyApO1xuIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcbiIsImNvbnN0IEg1UEludGVncmF0aW9uID0ge307XG5cbkg1UEludGVncmF0aW9uLmwxMG4gPSB7XG4gIEg1UDoge1xuICAgIFwiZnVsbHNjcmVlblwiOiBcIkZ1bGxzY3JlZW5cIixcbiAgICBcImRpc2FibGVGdWxsc2NyZWVuXCI6IFwiRGlzYWJsZSBmdWxsc2NyZWVuXCIsXG4gICAgXCJkb3dubG9hZFwiOiBcIkRvd25sb2FkXCIsXG4gICAgXCJjb3B5cmlnaHRzXCI6IFwiUmlnaHRzIG9mIHVzZVwiLFxuICAgIFwiZW1iZWRcIjogXCJFbWJlZFwiLFxuICAgIFwic2l6ZVwiOiBcIlNpemVcIixcbiAgICBcInNob3dBZHZhbmNlZFwiOiBcIlNob3cgYWR2YW5jZWRcIixcbiAgICBcImhpZGVBZHZhbmNlZFwiOiBcIkhpZGUgYWR2YW5jZWRcIixcbiAgICBcImFkdmFuY2VkSGVscFwiOiBcIkluY2x1ZGUgdGhpcyBzY3JpcHQgb24geW91ciB3ZWJzaXRlIGlmIHlvdSB3YW50IGR5bmFtaWMgc2l6aW5nIG9mIHRoZSBlbWJlZGRlZCBjb250ZW50OlwiLFxuICAgIFwiY29weXJpZ2h0SW5mb3JtYXRpb25cIjogXCJSaWdodHMgb2YgdXNlXCIsXG4gICAgXCJjbG9zZVwiOiBcIkNsb3NlXCIsXG4gICAgXCJ0aXRsZVwiOiBcIlRpdGxlXCIsXG4gICAgXCJhdXRob3JcIjogXCJBdXRob3JcIixcbiAgICBcInllYXJcIjogXCJZZWFyXCIsXG4gICAgXCJzb3VyY2VcIjogXCJTb3VyY2VcIixcbiAgICBcImxpY2Vuc2VcIjogXCJMaWNlbnNlXCIsXG4gICAgXCJ0aHVtYm5haWxcIjogXCJUaHVtYm5haWxcIixcbiAgICBcIm5vQ29weXJpZ2h0c1wiOiBcIk5vIGNvcHlyaWdodCBpbmZvcm1hdGlvbiBhdmFpbGFibGUgZm9yIHRoaXMgY29udGVudC5cIixcbiAgICBcInJldXNlXCI6IFwiUmV1c2VcIixcbiAgICBcInJldXNlQ29udGVudFwiOiBcIlJldXNlIENvbnRlbnRcIixcbiAgICBcInJldXNlRGVzY3JpcHRpb25cIjogXCJSZXVzZSB0aGlzIGNvbnRlbnQuXCIsXG4gICAgXCJkb3dubG9hZERlc2NyaXB0aW9uXCI6IFwiRG93bmxvYWQgdGhpcyBjb250ZW50IGFzIGEgSDVQIGZpbGUuXCIsXG4gICAgXCJjb3B5cmlnaHRzRGVzY3JpcHRpb25cIjogXCJWaWV3IGNvcHlyaWdodCBpbmZvcm1hdGlvbiBmb3IgdGhpcyBjb250ZW50LlwiLFxuICAgIFwiZW1iZWREZXNjcmlwdGlvblwiOiBcIlZpZXcgdGhlIGVtYmVkIGNvZGUgZm9yIHRoaXMgY29udGVudC5cIixcbiAgICBcImg1cERlc2NyaXB0aW9uXCI6IFwiVmlzaXQgSDVQLm9yZyB0byBjaGVjayBvdXQgbW9yZSBjb29sIGNvbnRlbnQuXCIsXG4gICAgXCJjb250ZW50Q2hhbmdlZFwiOiBcIlRoaXMgY29udGVudCBoYXMgY2hhbmdlZCBzaW5jZSB5b3UgbGFzdCB1c2VkIGl0LlwiLFxuICAgIFwic3RhcnRpbmdPdmVyXCI6IFwiWW91J2xsIGJlIHN0YXJ0aW5nIG92ZXIuXCIsXG4gICAgXCJieVwiOiBcImJ5XCIsXG4gICAgXCJzaG93TW9yZVwiOiBcIlNob3cgbW9yZVwiLFxuICAgIFwic2hvd0xlc3NcIjogXCJTaG93IGxlc3NcIixcbiAgICBcInN1YkxldmVsXCI6IFwiU3VibGV2ZWxcIixcbiAgICBcImNvbmZpcm1EaWFsb2dIZWFkZXJcIjogXCJDb25maXJtIGFjdGlvblwiLFxuICAgIFwiY29uZmlybURpYWxvZ0JvZHlcIjogXCJQbGVhc2UgY29uZmlybSB0aGF0IHlvdSB3aXNoIHRvIHByb2NlZWQuIFRoaXMgYWN0aW9uIGlzIG5vdCByZXZlcnNpYmxlLlwiLFxuICAgIFwiY2FuY2VsTGFiZWxcIjogXCJDYW5jZWxcIixcbiAgICBcImNvbmZpcm1MYWJlbFwiOiBcIkNvbmZpcm1cIixcbiAgICBcImxpY2Vuc2VVXCI6IFwiVW5kaXNjbG9zZWRcIixcbiAgICBcImxpY2Vuc2VDQ0JZXCI6IFwiQXR0cmlidXRpb25cIixcbiAgICBcImxpY2Vuc2VDQ0JZU0FcIjogXCJBdHRyaWJ1dGlvbi1TaGFyZUFsaWtlXCIsXG4gICAgXCJsaWNlbnNlQ0NCWU5EXCI6IFwiQXR0cmlidXRpb24tTm9EZXJpdnNcIixcbiAgICBcImxpY2Vuc2VDQ0JZTkNcIjogXCJBdHRyaWJ1dGlvbi1Ob25Db21tZXJjaWFsXCIsXG4gICAgXCJsaWNlbnNlQ0NCWU5DU0FcIjogXCJBdHRyaWJ1dGlvbi1Ob25Db21tZXJjaWFsLVNoYXJlQWxpa2VcIixcbiAgICBcImxpY2Vuc2VDQ0JZTkNORFwiOiBcIkF0dHJpYnV0aW9uLU5vbkNvbW1lcmNpYWwtTm9EZXJpdnNcIixcbiAgICBcImxpY2Vuc2VDQzQwXCI6IFwiNC4wIEludGVybmF0aW9uYWxcIixcbiAgICBcImxpY2Vuc2VDQzMwXCI6IFwiMy4wIFVucG9ydGVkXCIsXG4gICAgXCJsaWNlbnNlQ0MyNVwiOiBcIjIuNSBHZW5lcmljXCIsXG4gICAgXCJsaWNlbnNlQ0MyMFwiOiBcIjIuMCBHZW5lcmljXCIsXG4gICAgXCJsaWNlbnNlQ0MxMFwiOiBcIjEuMCBHZW5lcmljXCIsXG4gICAgXCJsaWNlbnNlR1BMXCI6IFwiR2VuZXJhbCBQdWJsaWMgTGljZW5zZVwiLFxuICAgIFwibGljZW5zZVYzXCI6IFwiVmVyc2lvbiAzXCIsXG4gICAgXCJsaWNlbnNlVjJcIjogXCJWZXJzaW9uIDJcIixcbiAgICBcImxpY2Vuc2VWMVwiOiBcIlZlcnNpb24gMVwiLFxuICAgIFwibGljZW5zZVBEXCI6IFwiUHVibGljIERvbWFpblwiLFxuICAgIFwibGljZW5zZUNDMDEwXCI6IFwiQ0MwIDEuMCBVbml2ZXJzYWwgKENDMCAxLjApIFB1YmxpYyBEb21haW4gRGVkaWNhdGlvblwiLFxuICAgIFwibGljZW5zZVBETVwiOiBcIlB1YmxpYyBEb21haW4gTWFya1wiLFxuICAgIFwibGljZW5zZUNcIjogXCJDb3B5cmlnaHRcIixcbiAgICBcImNvbnRlbnRUeXBlXCI6IFwiQ29udGVudCBUeXBlXCIsXG4gICAgXCJsaWNlbnNlRXh0cmFzXCI6IFwiTGljZW5zZSBFeHRyYXNcIixcbiAgICBcImNoYW5nZXNcIjogXCJDaGFuZ2Vsb2dcIixcbiAgICBcImNvbnRlbnRDb3BpZWRcIjogXCJDb250ZW50IGlzIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkXCIsXG4gICAgXCJjb25uZWN0aW9uTG9zdFwiOiBcIkNvbm5lY3Rpb24gbG9zdC4gUmVzdWx0cyB3aWxsIGJlIHN0b3JlZCBhbmQgc2VudCB3aGVuIHlvdSByZWdhaW4gY29ubmVjdGlvbi5cIixcbiAgICBcImNvbm5lY3Rpb25SZWVzdGFibGlzaGVkXCI6IFwiQ29ubmVjdGlvbiByZWVzdGFibGlzaGVkLlwiLFxuICAgIFwicmVzdWJtaXRTY29yZXNcIjogXCJBdHRlbXB0aW5nIHRvIHN1Ym1pdCBzdG9yZWQgcmVzdWx0cy5cIixcbiAgICBcIm9mZmxpbmVEaWFsb2dIZWFkZXJcIjogXCJZb3VyIGNvbm5lY3Rpb24gdG8gdGhlIHNlcnZlciB3YXMgbG9zdFwiLFxuICAgIFwib2ZmbGluZURpYWxvZ0JvZHlcIjogXCJXZSB3ZXJlIHVuYWJsZSB0byBzZW5kIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgY29tcGxldGlvbiBvZiB0aGlzIHRhc2suIFBsZWFzZSBjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb24uXCIsXG4gICAgXCJvZmZsaW5lRGlhbG9nUmV0cnlNZXNzYWdlXCI6IFwiUmV0cnlpbmcgaW4gOm51bS4uLi5cIixcbiAgICBcIm9mZmxpbmVEaWFsb2dSZXRyeUJ1dHRvbkxhYmVsXCI6IFwiUmV0cnkgbm93XCIsXG4gICAgXCJvZmZsaW5lU3VjY2Vzc2Z1bFN1Ym1pdFwiOiBcIlN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWQgcmVzdWx0cy5cIlxuICB9XG59O1xuXG53aW5kb3cuSDVQSW50ZWdyYXRpb24gPSBINVBJbnRlZ3JhdGlvbjsiLCJpbXBvcnQgVG9wb3NvcnQgZnJvbSAndG9wb3NvcnQtY2xhc3MnO1xuaW1wb3J0IEg1UCBmcm9tICdpbXBvcnRzLWxvYWRlcj9INVBJbnRlZ3JhdGlvbj0+d2luZG93Lkg1UEludGVncmF0aW9uIUg1UCc7XG5cbkg1UEludGVncmF0aW9uID0gd2luZG93Lkg1UEludGVncmF0aW9uO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBINVBTdGFuZGFsb25lIHtcbiAgY29uc3RydWN0b3IoZWwsIHBhdGhUb0NvbnRlbnQgPSAnd29ya3NwYWNlJywgb3B0aW9ucyA9IHt9LCBkaXNwbGF5T3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQgfHwgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xuICAgIHRoaXMucGF0aCA9IHBhdGhUb0NvbnRlbnQ7XG4gICAgdGhpcy5pbml0RWxlbWVudChlbCk7XG4gICAgcmV0dXJuIHRoaXMuaW5pdEg1UChvcHRpb25zLmZyYW1lQ3NzLCBvcHRpb25zLmZyYW1lSnMsIGRpc3BsYXlPcHRpb25zLCBvcHRpb25zLnByZXZlbnRINVBJbml0KTtcbiAgfVxuXG4gIGluaXRFbGVtZW50KGVsKSB7XG4gICAgaWYgKCEoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlSDVQIG11c3QgYmUgcGFzc2VkIGFuIGVsZW1lbnQnKTtcbiAgICB9XG5cbiAgICBlbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImg1cC1pZnJhbWUtd3JhcHBlclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjojREREO1wiPlxuICAgICAgICA8aWZyYW1lIGlkPVwiaDVwLWlmcmFtZS0ke3RoaXMuaWR9XCIgY2xhc3M9XCJoNXAtaWZyYW1lXCIgZGF0YS1jb250ZW50LWlkPVwiJHt0aGlzLmlkfVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgYm9yZGVyOiBub25lOyBkaXNwbGF5OiBibG9jaztcIiBzcmM9XCJhYm91dDpibGFua1wiIGZyYW1lQm9yZGVyPVwiMFwiPjwvaWZyYW1lPlxuICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIGFzeW5jIGluaXRINVAoZnJhbWVDc3MgPSAnLi9zdHlsZXMvaDVwLmNzcycsIGZyYW1lSnMgPSAnLi9mcmFtZS5idW5kbGUuanMnLCBkaXNwbGF5T3B0aW9ucywgcHJldmVudEg1UEluaXQpIHtcbiAgICB0aGlzLmg1cCA9IGF3YWl0IHRoaXMuZ2V0SlNPTihgJHt0aGlzLnBhdGh9L2g1cC5qc29uYCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5nZXRKU09OKGAke3RoaXMucGF0aH0vY29udGVudC9jb250ZW50Lmpzb25gKTtcbiAgICBINVBJbnRlZ3JhdGlvbi5wYXRoSW5jbHVkZXNWZXJzaW9uID0gdGhpcy5wYXRoSW5jbHVkZXNWZXJzaW9uID0gYXdhaXQgdGhpcy5jaGVja0lmUGF0aEluY2x1ZGVzVmVyc2lvbigpO1xuXG4gICAgdGhpcy5tYWluTGlicmFyeSA9IGF3YWl0IHRoaXMuZmluZE1haW5MaWJyYXJ5KCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSBhd2FpdCB0aGlzLmZpbmRBbGxEZXBlbmRlbmNpZXMoKTtcblxuICAgIGNvbnN0IHsgc3R5bGVzLCBzY3JpcHRzIH0gPSB0aGlzLnNvcnREZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzKTtcblxuICAgIEg1UEludGVncmF0aW9uLnVybCA9IHRoaXMucGF0aDtcbiAgICBINVBJbnRlZ3JhdGlvbi5jb250ZW50cyA9IEg1UEludGVncmF0aW9uLmNvbnRlbnRzID8gSDVQSW50ZWdyYXRpb24uY29udGVudHMgOiB7fTtcblxuICAgIEg1UEludGVncmF0aW9uLmNvcmUgPSB7XG4gICAgICBzdHlsZXM6IFtmcmFtZUNzc10sXG4gICAgICBzY3JpcHRzOiBbZnJhbWVKc11cbiAgICB9O1xuXG4gICAgSDVQSW50ZWdyYXRpb24uY29udGVudHNbYGNpZC0ke3RoaXMuaWR9YF0gPSB7XG4gICAgICBsaWJyYXJ5OiBgJHt0aGlzLm1haW5MaWJyYXJ5Lm1hY2hpbmVOYW1lfSAke3RoaXMubWFpbkxpYnJhcnkubWFqb3JWZXJzaW9ufS4ke3RoaXMubWFpbkxpYnJhcnkubWlub3JWZXJzaW9ufWAsXG4gICAgICBqc29uQ29udGVudDogSlNPTi5zdHJpbmdpZnkoY29udGVudCksXG4gICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgIHNjcmlwdHM6IHNjcmlwdHMsXG4gICAgICBkaXNwbGF5T3B0aW9uczogZGlzcGxheU9wdGlvbnNcbiAgICB9O1xuXG4gICAgLy8gaWYgKCFwcmV2ZW50SDVQSW5pdCkge1xuICAgIEg1UC5pbml0KCk7XG4gICAgLy8gfVxuICB9XG5cbiAgZ2V0SlNPTih1cmwpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgbGlicmFyeSBmb2xkZXIgaW5jbHVkZSB0aGUgdmVyc2lvbiBvciBub3RcbiAgICogVGhpcyB3YXMgY2hhbmdlZCBhdCBzb21lIHBvaW50IGluIEg1UCBhbmQgd2UgbmVlZCB0byBiZSBiYWNrd2FyZHMgY29tcGF0aWJsZVxuICAgKiBcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGFzeW5jIGNoZWNrSWZQYXRoSW5jbHVkZXNWZXJzaW9uKCkge1xuICAgIGxldCBkZXBlbmRlbmN5ID0gdGhpcy5oNXAucHJlbG9hZGVkRGVwZW5kZW5jaWVzWzBdO1xuICAgIGxldCBtYWNoaW5lUGF0aCA9IGRlcGVuZGVuY3kubWFjaGluZU5hbWUgKyBcIi1cIiArIGRlcGVuZGVuY3kubWFqb3JWZXJzaW9uICsgXCIuXCIgKyBkZXBlbmRlbmN5Lm1pbm9yVmVyc2lvbjtcblxuICAgIGxldCBwYXRoSW5jbHVkZXNWZXJzaW9uO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuZ2V0SlNPTihgJHt0aGlzLnBhdGh9LyR7bWFjaGluZVBhdGh9L2xpYnJhcnkuanNvbmApO1xuICAgICAgcGF0aEluY2x1ZGVzVmVyc2lvbiA9IHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcGF0aEluY2x1ZGVzVmVyc2lvbiA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aEluY2x1ZGVzVmVyc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gdGhlIHBhdGggdG8gYSBsaWJyYXJ5XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBsaWJyYXJ5XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGxpYnJhcnlQYXRoKGxpYnJhcnkpIHtcbiAgICByZXR1cm4gbGlicmFyeS5tYWNoaW5lTmFtZSArICh0aGlzLnBhdGhJbmNsdWRlc1ZlcnNpb24gPyBcIi1cIiArIGxpYnJhcnkubWFqb3JWZXJzaW9uICsgXCIuXCIgKyBsaWJyYXJ5Lm1pbm9yVmVyc2lvbiA6ICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGSW5kIHRoZSBtYWluIGxpYnJhcnkgZm9yIHRoaXMgSDVQXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqL1xuICBmaW5kTWFpbkxpYnJhcnkoKSB7XG4gICAgY29uc3QgbWFpbkxpYnJhcnlJbmZvID0gdGhpcy5oNXAucHJlbG9hZGVkRGVwZW5kZW5jaWVzLmZpbmQoZGVwID0+IGRlcC5tYWNoaW5lTmFtZSA9PT0gdGhpcy5oNXAubWFpbkxpYnJhcnkpO1xuXG4gICAgdGhpcy5tYWluTGlicmFyeVBhdGggPSB0aGlzLmg1cC5tYWluTGlicmFyeSArICh0aGlzLnBhdGhJbmNsdWRlc1ZlcnNpb24gPyBcIi1cIiArIG1haW5MaWJyYXJ5SW5mby5tYWpvclZlcnNpb24gKyBcIi5cIiArIG1haW5MaWJyYXJ5SW5mby5taW5vclZlcnNpb24gOiAnJyk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SlNPTihgJHt0aGlzLnBhdGh9LyR7dGhpcy5tYWluTGlicmFyeVBhdGh9L2xpYnJhcnkuanNvbmApO1xuICB9XG5cbiAgLyoqXG4gICAqIGZpbmQgYWxsIHRoZSBsaWJyYXJpZXMgdXNlZCBpbiB0aGlzIEg1UFxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cbiAgZmluZEFsbERlcGVuZGVuY2llcygpIHtcbiAgICBjb25zdCBkaXJlY3REZXBlbmRlbmN5TmFtZXMgPSB0aGlzLmg1cC5wcmVsb2FkZWREZXBlbmRlbmNpZXMubWFwKGRlcGVuZGVuY3kgPT4gdGhpcy5saWJyYXJ5UGF0aChkZXBlbmRlbmN5KSk7XG5cbiAgICByZXR1cm4gdGhpcy5sb2FkRGVwZW5kZW5jaWVzKGRpcmVjdERlcGVuZGVuY3lOYW1lcywgW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlYXJjaGVzIHRocm91Z2ggYWxsIHN1cHBsaWVkIGxpYnJhcmllcyBmb3IgZGVwZW5kZW5jaWVzLCB0aGlzIGlzIHJlY3Vyc2l2ZSBhbmQgcmVwZWF0cyB1bnRpbCBhbGwgZGVlcCBkZXBlbmRlbmNpZXMgaGF2ZSBiZWVuIGZvdW5kXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRvRmluZCBsaXN0IG9mIGxpYnJhcmllcyB0byBmaW5kIHRoZSBkZXBlbmRlbmNpZXMgb2ZcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gYWxyZWFkeUZvdW5kIHRoZSBkZXBlbmRlbmNpZXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBmb3VuZFxuICAgKi9cbiAgYXN5bmMgbG9hZERlcGVuZGVuY2llcyh0b0ZpbmQsIGFscmVhZHlGb3VuZCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGBsb2FkaW5nIGRlcGVuZGVuY3kgbGV2ZWw6ICR7ZGVwZW5kZW5jeURlcHRofWApO1xuICAgIC8vIGRlcGVuZGVuY3lEZXB0aCsrO1xuICAgIGxldCBkZXBlbmRlbmNpZXMgPSBhbHJlYWR5Rm91bmQ7XG4gICAgbGV0IGZpbmROZXh0ID0gW107XG4gICAgbGV0IG5ld0RlcGVuZGVuY2llcyA9IGF3YWl0IFByb21pc2UuYWxsKHRvRmluZC5tYXAoKGxpYnJhcnlOYW1lKSA9PiB0aGlzLmZpbmRMaWJyYXJ5RGVwZW5kZW5jaWVzKGxpYnJhcnlOYW1lKSkpO1xuICAgIC8vIGxvb3Agb3ZlciBuZXdseSBmb3VuZCBsaWJyYXJpZXNcbiAgICBuZXdEZXBlbmRlbmNpZXMuZm9yRWFjaCgobGlicmFyeSkgPT4ge1xuICAgICAgLy8gcHVzaCBpbnRvIGZvdW5kIGxpc3RcbiAgICAgIGRlcGVuZGVuY2llcy5wdXNoKGxpYnJhcnkpO1xuICAgICAgLy8gY2hlY2sgaWYgYW55IGRlcGVuZGVuY2llcyBoYXZlbid0IGJlZW4gZm91bmQgeWV0XG4gICAgICBsaWJyYXJ5LmRlcGVuZGVuY2llcy5mb3JFYWNoKChkZXBlbmRlbmN5KSA9PiB7XG4gICAgICAgIGlmICghZGVwZW5kZW5jaWVzLmZpbmQoKGZvdW5kTGlicmFyeSkgPT4gZm91bmRMaWJyYXJ5LmxpYnJhcnlQYXRoID09PSBkZXBlbmRlbmN5KSAmJiAhbmV3RGVwZW5kZW5jaWVzLmZpbmQoKGZvdW5kTGlicmFyeSkgPT4gZm91bmRMaWJyYXJ5LmxpYnJhcnlQYXRoID09PSBkZXBlbmRlbmN5KSkge1xuICAgICAgICAgIGZpbmROZXh0LnB1c2goZGVwZW5kZW5jeSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGZpbmROZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWREZXBlbmRlbmNpZXMoZmluZE5leHQsIGRlcGVuZGVuY2llcyk7XG4gICAgfVxuICAgIHJldHVybiBkZXBlbmRlbmNpZXM7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgYSBkZXBlbmRlbmNpZXMgbGlicmFyeS5qc29uIGFuZCBmaW5kcyB0aGUgbGlicmFyaWVzIGl0IGRlcGVuZHNvbiBhcyB3ZWxsIGFzcyB0aGUgSlMgYW5kIENTUyBpdCBuZWVkc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbGlicmFyeU5hbWUgXG4gICAqL1xuICBhc3luYyBmaW5kTGlicmFyeURlcGVuZGVuY2llcyhsaWJyYXJ5TmFtZSkge1xuICAgIGNvbnN0IGxpYnJhcnkgPSBhd2FpdCB0aGlzLmdldEpTT04oYCR7dGhpcy5wYXRofS8ke2xpYnJhcnlOYW1lfS9saWJyYXJ5Lmpzb25gKTtcbiAgICBjb25zdCBsaWJyYXJ5UGF0aCA9IHRoaXMubGlicmFyeVBhdGgobGlicmFyeSk7XG5cbiAgICBsZXQgZGVwZW5kZW5jaWVzID0gW107XG4gICAgaWYgKGxpYnJhcnkucHJlbG9hZGVkRGVwZW5kZW5jaWVzKSB7XG4gICAgICBkZXBlbmRlbmNpZXMgPSBsaWJyYXJ5LnByZWxvYWRlZERlcGVuZGVuY2llcy5tYXAoZGVwZW5kZW5jeSA9PiB0aGlzLmxpYnJhcnlQYXRoKGRlcGVuZGVuY3kpKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBsaWJyYXJ5UGF0aCwgZGVwZW5kZW5jaWVzLCBwcmVsb2FkZWRDc3M6IGxpYnJhcnkucHJlbG9hZGVkQ3NzLCBwcmVsb2FkZWRKczogbGlicmFyeS5wcmVsb2FkZWRKcyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBsaWJyYXJ5IGRlcGVuZGVuY3kgdHJlZSBhbmQgc29ydHMgdGhlIEpTIGFuZCBDU1MgZmlsZXMgaW50byBvcmRlclxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBkZXBlbmRlbmNpZXMgXG4gICAqIEByZXR1cm4ge29iamVjdH1cbiAgICovXG4gIHNvcnREZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jeVNvcnRlciA9IG5ldyBUb3Bvc29ydCgpO1xuICAgIGxldCBDU1NEZXBlbmRlbmNpZXMgPSB7fTtcbiAgICBsZXQgSlNEZXBlbmRlbmNpZXMgPSB7fTtcblxuICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoKGRlcGVuZGVuY3kgPT4ge1xuICAgICAgZGVwZW5kZW5jeVNvcnRlci5hZGQoZGVwZW5kZW5jeS5saWJyYXJ5UGF0aCwgZGVwZW5kZW5jeS5kZXBlbmRlbmNpZXMpO1xuXG4gICAgICBpZiAoZGVwZW5kZW5jeS5wcmVsb2FkZWRDc3MpIHtcbiAgICAgICAgQ1NTRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3kubGlicmFyeVBhdGhdID0gQ1NTRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3kubGlicmFyeVBhdGhdID8gQ1NTRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3kubGlicmFyeVBhdGhdIDogW107XG4gICAgICAgIGRlcGVuZGVuY3kucHJlbG9hZGVkQ3NzLmZvckVhY2goc3R5bGUgPT4ge1xuICAgICAgICAgIENTU0RlcGVuZGVuY2llc1tkZXBlbmRlbmN5LmxpYnJhcnlQYXRoXS5wdXNoKGAke3RoaXMucGF0aH0vJHtkZXBlbmRlbmN5LmxpYnJhcnlQYXRofS8ke3N0eWxlLnBhdGh9YCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGVwZW5kZW5jeS5wcmVsb2FkZWRKcykge1xuICAgICAgICBKU0RlcGVuZGVuY2llc1tkZXBlbmRlbmN5LmxpYnJhcnlQYXRoXSA9IEpTRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3kubGlicmFyeVBhdGhdID8gSlNEZXBlbmRlbmNpZXNbZGVwZW5kZW5jeS5saWJyYXJ5UGF0aF0gOiBbXTtcbiAgICAgICAgZGVwZW5kZW5jeS5wcmVsb2FkZWRKcy5mb3JFYWNoKHNjcmlwdCA9PiB7XG4gICAgICAgICAgSlNEZXBlbmRlbmNpZXNbZGVwZW5kZW5jeS5saWJyYXJ5UGF0aF0ucHVzaChgJHt0aGlzLnBhdGh9LyR7ZGVwZW5kZW5jeS5saWJyYXJ5UGF0aH0vJHtzY3JpcHQucGF0aH1gKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgc3R5bGVzID0gW107XG4gICAgbGV0IHNjcmlwdHMgPSBbXTtcblxuICAgIGRlcGVuZGVuY3lTb3J0ZXIuc29ydCgpLnJldmVyc2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChkZXBlbmRlbmN5TmFtZSkge1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoc3R5bGVzLCBDU1NEZXBlbmRlbmNpZXNbZGVwZW5kZW5jeU5hbWVdKTtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHNjcmlwdHMsIEpTRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3lOYW1lXSk7XG4gICAgfSk7XG5cbiAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShzdHlsZXMsIHRoaXMubWFpbkxpYnJhcnkucHJlbG9hZGVkQ3NzLm1hcChzdHlsZSA9PiBgJHt0aGlzLnBhdGh9LyR7dGhpcy5tYWluTGlicmFyeVBhdGh9LyR7c3R5bGUucGF0aH1gKSk7XG4gICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoc2NyaXB0cywgdGhpcy5tYWluTGlicmFyeS5wcmVsb2FkZWRKcy5tYXAoc2NyaXB0ID0+IGAke3RoaXMucGF0aH0vJHt0aGlzLm1haW5MaWJyYXJ5UGF0aH0vJHtzY3JpcHQucGF0aH1gKSk7XG5cbiAgICByZXR1cm4geyBzdHlsZXMsIHNjcmlwdHMgfTtcbiAgfVxufSIsImltcG9ydCAnLi9oNXAtaW50ZWdyYXRpb24nO1xuaW1wb3J0IEg1UFN0YW5kYWxvbmUgZnJvbSAnLi9oNXAtc3RhbmRhbG9uZS5jbGFzcyc7XG5pbXBvcnQgJ0g1UEV2ZW50RGlzcGF0Y2hlcic7XG5pbXBvcnQgJ0g1UHhBUEknO1xuaW1wb3J0ICdINVB4QVBJRXZlbnQnO1xuaW1wb3J0ICdINVBDb250ZW50VHlwZSc7XG5cbndpbmRvdy5INVAucHJldmVudEluaXQgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCB7IEg1UDogSDVQU3RhbmRhbG9uZSB9OyIsIi8qKlxuICogSDVQLkNvbnRlbnRUeXBlIGlzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIGNvbnRlbnQgdHlwZXMuIFVzZWQgYnkgbmV3UnVubmFibGUoKVxuICpcbiAqIEZ1bmN0aW9ucyBoZXJlIG1heSBiZSBvdmVycmlkYWJsZSBieSB0aGUgbGlicmFyaWVzLiBJbiBzcGVjaWFsIGNhc2VzLFxuICogaXQgaXMgYWxzbyBwb3NzaWJsZSB0byBvdmVycmlkZSBINVAuQ29udGVudFR5cGUgb24gYSBnbG9iYWwgbGV2ZWwuXG4gKlxuICogTk9URSB0aGF0IHRoaXMgZG9lc24ndCBhY3R1YWxseSAnZXh0ZW5kJyB0aGUgZXZlbnQgZGlzcGF0Y2hlciBidXQgaW5zdGVhZFxuICogaXQgY3JlYXRlcyBhIHNpbmdsZSBpbnN0YW5jZSB3aGljaCBhbGwgY29udGVudCB0eXBlcyBzaGFyZXMgYXMgdGhlaXIgYmFzZVxuICogcHJvdG90eXBlLiAoaW4gc29tZSBjYXNlcyB0aGlzIG1heSBiZSB0aGUgcm9vdCBvZiBzdHJhbmdlIGV2ZW50IGJlaGF2aW9yKVxuICpcbiAqIEBjbGFzc1xuICogQGF1Z21lbnRzIEg1UC5FdmVudERpc3BhdGNoZXJcbiAqL1xuSDVQLkNvbnRlbnRUeXBlID0gZnVuY3Rpb24gKGlzUm9vdExpYnJhcnkpIHtcblxuICBmdW5jdGlvbiBDb250ZW50VHlwZSgpIHt9XG5cbiAgLy8gSW5oZXJpdCBmcm9tIEV2ZW50RGlzcGF0Y2hlci5cbiAgQ29udGVudFR5cGUucHJvdG90eXBlID0gbmV3IEg1UC5FdmVudERpc3BhdGNoZXIoKTtcblxuICAvKipcbiAgICogSXMgbGlicmFyeSBzdGFuZGFsb25lIG9yIG5vdD8gTm90IGJlZWluZyBzdGFuZGFsb25lLCBtZWFucyBpdCBpc1xuICAgKiBpbmNsdWRlZCBpbiBhbm90aGVyIGxpYnJhcnlcbiAgICpcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIENvbnRlbnRUeXBlLnByb3RvdHlwZS5pc1Jvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzUm9vdExpYnJhcnk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpbGUgcGF0aCBvZiBhIGZpbGUgaW4gdGhlIGN1cnJlbnQgbGlicmFyeVxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZpbGVQYXRoIFRoZSBwYXRoIHRvIHRoZSBmaWxlIHJlbGF0aXZlIHRvIHRoZSBsaWJyYXJ5IGZvbGRlclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBmdWxsIHBhdGggdG8gdGhlIGZpbGVcbiAgICovXG4gIENvbnRlbnRUeXBlLnByb3RvdHlwZS5nZXRMaWJyYXJ5RmlsZVBhdGggPSBmdW5jdGlvbiAoZmlsZVBhdGgpIHtcbiAgICByZXR1cm4gSDVQLmdldExpYnJhcnlQYXRoKHRoaXMubGlicmFyeUluZm8udmVyc2lvbmVkTmFtZU5vU3BhY2VzKSArICcvJyArIGZpbGVQYXRoO1xuICB9O1xuXG4gIHJldHVybiBDb250ZW50VHlwZTtcbn07XG4iLCJ2YXIgSDVQID0gd2luZG93Lkg1UCA9IHdpbmRvdy5INVAgfHwge307XG5cbi8qKlxuICogVGhlIEV2ZW50IGNsYXNzIGZvciB0aGUgRXZlbnREaXNwYXRjaGVyLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gZGF0YVxuICogQHBhcmFtIHtPYmplY3R9IFtleHRyYXNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtleHRyYXMuYnViYmxlc11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V4dHJhcy5leHRlcm5hbF1cbiAqL1xuSDVQLkV2ZW50ID0gZnVuY3Rpb24gKHR5cGUsIGRhdGEsIGV4dHJhcykge1xuICB0aGlzLnR5cGUgPSB0eXBlO1xuICB0aGlzLmRhdGEgPSBkYXRhO1xuICB2YXIgYnViYmxlcyA9IGZhbHNlO1xuXG4gIC8vIElzIHRoaXMgYW4gZXh0ZXJuYWwgZXZlbnQ/XG4gIHZhciBleHRlcm5hbCA9IGZhbHNlO1xuXG4gIC8vIElzIHRoaXMgZXZlbnQgc2NoZWR1bGVkIHRvIGJlIHNlbnQgZXh0ZXJuYWxseT9cbiAgdmFyIHNjaGVkdWxlZEZvckV4dGVybmFsID0gZmFsc2U7XG5cbiAgaWYgKGV4dHJhcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXh0cmFzID0ge307XG4gIH1cbiAgaWYgKGV4dHJhcy5idWJibGVzID09PSB0cnVlKSB7XG4gICAgYnViYmxlcyA9IHRydWU7XG4gIH1cbiAgaWYgKGV4dHJhcy5leHRlcm5hbCA9PT0gdHJ1ZSkge1xuICAgIGV4dGVybmFsID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmV2ZW50IHRoaXMgZXZlbnQgZnJvbSBidWJibGluZyB1cCB0byBwYXJlbnRcbiAgICovXG4gIHRoaXMucHJldmVudEJ1YmJsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGJ1YmJsZXMgPSBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGJ1YmJsaW5nIHN0YXR1c1xuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogICB0cnVlIGlmIGJ1YmJsaW5nIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgdGhpcy5nZXRCdWJibGVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBidWJibGVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUcnkgdG8gc2NoZWR1bGUgYW4gZXZlbnQgZm9yIGV4dGVybmFsRGlzcGF0Y2hlclxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogICB0cnVlIGlmIGV4dGVybmFsIGFuZCBub3QgYWxyZWFkeSBzY2hlZHVsZWQsIG90aGVyd2lzZSBmYWxzZVxuICAgKi9cbiAgdGhpcy5zY2hlZHVsZUZvckV4dGVybmFsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChleHRlcm5hbCAmJiAhc2NoZWR1bGVkRm9yRXh0ZXJuYWwpIHtcbiAgICAgIHNjaGVkdWxlZEZvckV4dGVybmFsID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG59O1xuXG4vKipcbiAqIENhbGxiYWNrIHR5cGUgZm9yIGV2ZW50IGxpc3RlbmVycy5cbiAqXG4gKiBAY2FsbGJhY2sgSDVQLkV2ZW50Q2FsbGJhY2tcbiAqIEBwYXJhbSB7SDVQLkV2ZW50fSBldmVudFxuICovXG5cbkg1UC5FdmVudERpc3BhdGNoZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gIC8qKlxuICAgKiBUaGUgYmFzZSBvZiB0aGUgZXZlbnQgc3lzdGVtLlxuICAgKiBJbmhlcml0IHRoaXMgY2xhc3MgaWYgeW91IHdhbnQgeW91ciBINVAgdG8gZGlzcGF0Y2ggZXZlbnRzLlxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQG1lbWJlcm9mIEg1UFxuICAgKi9cbiAgZnVuY3Rpb24gRXZlbnREaXNwYXRjaGVyKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEtlZXAgdHJhY2sgb2YgbGlzdGVuZXJzIGZvciBlYWNoIGV2ZW50LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciB0cmlnZ2VycyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogQWRkIG5ldyBldmVudCBsaXN0ZW5lci5cbiAgICAgKlxuICAgICAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAgICAgKiAgIGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogICBFdmVudCB0eXBlXG4gICAgICogQHBhcmFtIHtINVAuRXZlbnRDYWxsYmFja30gbGlzdGVuZXJcbiAgICAgKiAgIEV2ZW50IGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFt0aGlzQXJnXVxuICAgICAqICAgT3B0aW9uYWxseSBzcGVjaWZ5IHRoZSB0aGlzIHZhbHVlIHdoZW4gY2FsbGluZyBsaXN0ZW5lci5cbiAgICAgKi9cbiAgICB0aGlzLm9uID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCB0aGlzQXJnKSB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyaWdnZXIgZXZlbnQgYmVmb3JlIGFkZGluZyB0byBhdm9pZCByZWN1cnNpb25cbiAgICAgIHNlbGYudHJpZ2dlcignbmV3TGlzdGVuZXInLCB7J3R5cGUnOiB0eXBlLCAnbGlzdGVuZXInOiBsaXN0ZW5lcn0pO1xuXG4gICAgICB2YXIgdHJpZ2dlciA9IHsnbGlzdGVuZXInOiBsaXN0ZW5lciwgJ3RoaXNBcmcnOiB0aGlzQXJnfTtcbiAgICAgIGlmICghdHJpZ2dlcnNbdHlwZV0pIHtcbiAgICAgICAgLy8gRmlyc3RcbiAgICAgICAgdHJpZ2dlcnNbdHlwZV0gPSBbdHJpZ2dlcl07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gQXBwZW5kXG4gICAgICAgIHRyaWdnZXJzW3R5cGVdLnB1c2godHJpZ2dlcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXcgZXZlbnQgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIG9ubHkgb25jZS5cbiAgICAgKlxuICAgICAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAgICAgKiAgIGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogICBFdmVudCB0eXBlXG4gICAgICogQHBhcmFtIHtINVAuRXZlbnRDYWxsYmFja30gbGlzdGVuZXJcbiAgICAgKiAgIEV2ZW50IGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmdcbiAgICAgKiAgIE9wdGlvbmFsbHkgc3BlY2lmeSB0aGUgdGhpcyB2YWx1ZSB3aGVuIGNhbGxpbmcgbGlzdGVuZXIuXG4gICAgICovXG4gICAgdGhpcy5vbmNlID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCB0aGlzQXJnKSB7XG4gICAgICBpZiAoIShsaXN0ZW5lciBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb25jZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBzZWxmLm9mZihldmVudC50eXBlLCBvbmNlKTtcbiAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICB9O1xuXG4gICAgICBzZWxmLm9uKHR5cGUsIG9uY2UsIHRoaXNBcmcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICogSWYgbm8gbGlzdGVuZXIgaXMgc3BlY2lmaWVkLCBhbGwgbGlzdGVuZXJzIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgKlxuICAgICAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAgICAgKiAgIGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogICBFdmVudCB0eXBlXG4gICAgICogQHBhcmFtIHtINVAuRXZlbnRDYWxsYmFja30gbGlzdGVuZXJcbiAgICAgKiAgIEV2ZW50IGxpc3RlbmVyXG4gICAgICovXG4gICAgdGhpcy5vZmYgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmIChsaXN0ZW5lciAhPT0gdW5kZWZpbmVkICYmICEobGlzdGVuZXIgaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyaWdnZXJzW3R5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBSZW1vdmUgYWxsIGxpc3RlbmVyc1xuICAgICAgICBkZWxldGUgdHJpZ2dlcnNbdHlwZV07XG4gICAgICAgIHNlbGYudHJpZ2dlcigncmVtb3ZlTGlzdGVuZXInLCB0eXBlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIHNwZWNpZmljIGxpc3RlbmVyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyaWdnZXJzW3R5cGVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0cmlnZ2Vyc1t0eXBlXVtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICB0cmlnZ2Vyc1t0eXBlXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIHsnbGlzdGVuZXInOiBsaXN0ZW5lcn0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFuIHVwIGVtcHR5IGFycmF5c1xuICAgICAgaWYgKCF0cmlnZ2Vyc1t0eXBlXS5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIHRyaWdnZXJzW3R5cGVdO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcnkgdG8gY2FsbCBhbGwgZXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgZ2l2ZW4gZXZlbnQgdHlwZS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IEV2ZW50IHR5cGVcbiAgICAgKi9cbiAgICB2YXIgY2FsbCA9IGZ1bmN0aW9uICh0eXBlLCBldmVudCkge1xuICAgICAgaWYgKHRyaWdnZXJzW3R5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDbG9uZSBhcnJheSAocHJldmVudHMgdHJpZ2dlcnMgZnJvbSBiZWluZyBtb2RpZmllZCBkdXJpbmcgdGhlIGV2ZW50KVxuICAgICAgdmFyIGhhbmRsZXJzID0gdHJpZ2dlcnNbdHlwZV0uc2xpY2UoKTtcblxuICAgICAgLy8gQ2FsbCBhbGwgbGlzdGVuZXJzXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB0cmlnZ2VyID0gaGFuZGxlcnNbaV07XG4gICAgICAgIHZhciB0aGlzQXJnID0gKHRyaWdnZXIudGhpc0FyZyA/IHRyaWdnZXIudGhpc0FyZyA6IHRoaXMpO1xuICAgICAgICB0cmlnZ2VyLmxpc3RlbmVyLmNhbGwodGhpc0FyZywgZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfEg1UC5FdmVudH0gZXZlbnRcbiAgICAgKiAgIEV2ZW50IG9iamVjdCBvciBldmVudCB0eXBlIGFzIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7Kn0gW2V2ZW50RGF0YV1cbiAgICAgKiAgIEN1c3RvbSBldmVudCBkYXRhKHVzZWQgd2hlbiBldmVudCB0eXBlIGFzIHN0cmluZyBpcyB1c2VkIGFzIGZpcnN0XG4gICAgICogICBhcmd1bWVudCkuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtleHRyYXNdXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZXh0cmFzLmJ1YmJsZXNdXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZXh0cmFzLmV4dGVybmFsXVxuICAgICAqL1xuICAgIHRoaXMudHJpZ2dlciA9IGZ1bmN0aW9uIChldmVudCwgZXZlbnREYXRhLCBleHRyYXMpIHtcbiAgICAgIGlmIChldmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIFN0cmluZyB8fCB0eXBlb2YgZXZlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGV2ZW50ID0gbmV3IEg1UC5FdmVudChldmVudCwgZXZlbnREYXRhLCBleHRyYXMpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnREYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXZlbnQuZGF0YSA9IGV2ZW50RGF0YTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoaXMgZXZlbnQgc2hvdWxkIGdvIGV4dGVybmFsbHkgYWZ0ZXIgYWxsIHRyaWdnZXJpbmcgYW5kIGJ1YmJsaW5nIGlzIGRvbmVcbiAgICAgIHZhciBzY2hlZHVsZWRGb3JFeHRlcm5hbCA9IGV2ZW50LnNjaGVkdWxlRm9yRXh0ZXJuYWwoKTtcblxuICAgICAgLy8gQ2FsbCBhbGwgbGlzdGVuZXJzXG4gICAgICBjYWxsLmNhbGwodGhpcywgZXZlbnQudHlwZSwgZXZlbnQpO1xuXG4gICAgICAvLyBDYWxsIGFsbCAqIGxpc3RlbmVyc1xuICAgICAgY2FsbC5jYWxsKHRoaXMsICcqJywgZXZlbnQpO1xuXG4gICAgICAvLyBCdWJibGVcbiAgICAgIGlmIChldmVudC5nZXRCdWJibGVzKCkgJiYgc2VsZi5wYXJlbnQgaW5zdGFuY2VvZiBINVAuRXZlbnREaXNwYXRjaGVyICYmXG4gICAgICAgICAgKHNlbGYucGFyZW50LnRyaWdnZXIgaW5zdGFuY2VvZiBGdW5jdGlvbiB8fCB0eXBlb2Ygc2VsZi5wYXJlbnQudHJpZ2dlciA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgc2VsZi5wYXJlbnQudHJpZ2dlcihldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzY2hlZHVsZWRGb3JFeHRlcm5hbCkge1xuICAgICAgICBINVAuZXh0ZXJuYWxEaXNwYXRjaGVyLnRyaWdnZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBFdmVudERpc3BhdGNoZXI7XG59KSgpO1xuIiwidmFyIEg1UCA9IHdpbmRvdy5INVAgPSB3aW5kb3cuSDVQIHx8IHt9O1xuXG4vKipcbiAqIFVzZWQgZm9yIHhBUEkgZXZlbnRzLlxuICpcbiAqIEBjbGFzc1xuICogQGV4dGVuZHMgSDVQLkV2ZW50XG4gKi9cbkg1UC5YQVBJRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIEg1UC5FdmVudC5jYWxsKHRoaXMsICd4QVBJJywgeydzdGF0ZW1lbnQnOiB7fX0sIHtidWJibGVzOiB0cnVlLCBleHRlcm5hbDogdHJ1ZX0pO1xufTtcblxuSDVQLlhBUElFdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEg1UC5FdmVudC5wcm90b3R5cGUpO1xuSDVQLlhBUElFdmVudC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBINVAuWEFQSUV2ZW50O1xuXG4vKipcbiAqIFNldCBzY29yZWQgcmVzdWx0IHN0YXRlbWVudHMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNjb3JlXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4U2NvcmVcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbnN0YW5jZVxuICogQHBhcmFtIHtib29sZWFufSBjb21wbGV0aW9uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN1Y2Nlc3NcbiAqL1xuSDVQLlhBUElFdmVudC5wcm90b3R5cGUuc2V0U2NvcmVkUmVzdWx0ID0gZnVuY3Rpb24gKHNjb3JlLCBtYXhTY29yZSwgaW5zdGFuY2UsIGNvbXBsZXRpb24sIHN1Y2Nlc3MpIHtcbiAgdGhpcy5kYXRhLnN0YXRlbWVudC5yZXN1bHQgPSB7fTtcblxuICBpZiAodHlwZW9mIHNjb3JlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbWF4U2NvcmUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmRhdGEuc3RhdGVtZW50LnJlc3VsdC5zY29yZSA9IHsncmF3Jzogc2NvcmV9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YS5zdGF0ZW1lbnQucmVzdWx0LnNjb3JlID0ge1xuICAgICAgICAnbWluJzogMCxcbiAgICAgICAgJ21heCc6IG1heFNjb3JlLFxuICAgICAgICAncmF3Jzogc2NvcmVcbiAgICAgIH07XG4gICAgICBpZiAobWF4U2NvcmUgPiAwKSB7XG4gICAgICAgIHRoaXMuZGF0YS5zdGF0ZW1lbnQucmVzdWx0LnNjb3JlLnNjYWxlZCA9IE1hdGgucm91bmQoc2NvcmUgLyBtYXhTY29yZSAqIDEwMDAwKSAvIDEwMDAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgY29tcGxldGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmRhdGEuc3RhdGVtZW50LnJlc3VsdC5jb21wbGV0aW9uID0gKHRoaXMuZ2V0VmVyYigpID09PSAnY29tcGxldGVkJyB8fCB0aGlzLmdldFZlcmIoKSA9PT0gJ2Fuc3dlcmVkJyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdGhpcy5kYXRhLnN0YXRlbWVudC5yZXN1bHQuY29tcGxldGlvbiA9IGNvbXBsZXRpb247XG4gIH1cblxuICBpZiAodHlwZW9mIHN1Y2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5kYXRhLnN0YXRlbWVudC5yZXN1bHQuc3VjY2VzcyA9IHN1Y2Nlc3M7XG4gIH1cblxuICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuYWN0aXZpdHlTdGFydFRpbWUpIHtcbiAgICB2YXIgZHVyYXRpb24gPSBNYXRoLnJvdW5kKChEYXRlLm5vdygpIC0gaW5zdGFuY2UuYWN0aXZpdHlTdGFydFRpbWUgKSAvIDEwKSAvIDEwMDtcbiAgICAvLyB4QVBJIHNwZWMgYWxsb3dzIGEgcHJlY2lzaW9uIG9mIDAuMDEgc2Vjb25kc1xuXG4gICAgdGhpcy5kYXRhLnN0YXRlbWVudC5yZXN1bHQuZHVyYXRpb24gPSAnUFQnICsgZHVyYXRpb24gKyAnUyc7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IGEgdmVyYi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmVyYlxuICogICBWZXJiIGluIHNob3J0IGZvcm0sIG9uZSBvZiB0aGUgdmVyYnMgZGVmaW5lZCBhdFxuICogICB7QGxpbmsgaHR0cDovL2FkbG5ldC5nb3YvZXhwYXBpL3ZlcmJzL3xBREwgeEFQSSBWb2NhYnVsYXJ5fVxuICpcbiAqL1xuSDVQLlhBUElFdmVudC5wcm90b3R5cGUuc2V0VmVyYiA9IGZ1bmN0aW9uICh2ZXJiKSB7XG4gIGlmIChINVAualF1ZXJ5LmluQXJyYXkodmVyYiwgSDVQLlhBUElFdmVudC5hbGxvd2VkWEFQSVZlcmJzKSAhPT0gLTEpIHtcbiAgICB0aGlzLmRhdGEuc3RhdGVtZW50LnZlcmIgPSB7XG4gICAgICAnaWQnOiAnaHR0cDovL2FkbG5ldC5nb3YvZXhwYXBpL3ZlcmJzLycgKyB2ZXJiLFxuICAgICAgJ2Rpc3BsYXknOiB7XG4gICAgICAgICdlbi1VUyc6IHZlcmJcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGVsc2UgaWYgKHZlcmIuaWQgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZGF0YS5zdGF0ZW1lbnQudmVyYiA9IHZlcmI7XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBzdGF0ZW1lbnRzIHZlcmIgaWQuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBmdWxsXG4gKiAgIGlmIHRydWUgdGhlIGZ1bGwgdmVyYiBpZCBwcmVmaXhlZCBieSBodHRwOi8vYWRsbmV0Lmdvdi9leHBhcGkvdmVyYnMvXG4gKiAgIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIFZlcmIgb3IgbnVsbCBpZiBubyB2ZXJiIHdpdGggYW4gaWQgaGFzIGJlZW4gZGVmaW5lZFxuICovXG5INVAuWEFQSUV2ZW50LnByb3RvdHlwZS5nZXRWZXJiID0gZnVuY3Rpb24gKGZ1bGwpIHtcbiAgdmFyIHN0YXRlbWVudCA9IHRoaXMuZGF0YS5zdGF0ZW1lbnQ7XG4gIGlmICgndmVyYicgaW4gc3RhdGVtZW50KSB7XG4gICAgaWYgKGZ1bGwgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZW1lbnQudmVyYjtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlbWVudC52ZXJiLmlkLnNsaWNlKDMxKTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdGhlIG9iamVjdCBwYXJ0IG9mIHRoZSBzdGF0ZW1lbnQuXG4gKlxuICogVGhlIGlkIGlzIGZvdW5kIGF1dG9tYXRpY2FsbHkgKHRoZSB1cmwgdG8gdGhlIGNvbnRlbnQpXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlXG4gKiAgIFRoZSBINVAgaW5zdGFuY2VcbiAqL1xuSDVQLlhBUElFdmVudC5wcm90b3R5cGUuc2V0T2JqZWN0ID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGlmIChpbnN0YW5jZS5jb250ZW50SWQpIHtcbiAgICB0aGlzLmRhdGEuc3RhdGVtZW50Lm9iamVjdCA9IHtcbiAgICAgICdpZCc6IHRoaXMuZ2V0Q29udGVudFhBUElJZChpbnN0YW5jZSksXG4gICAgICAnb2JqZWN0VHlwZSc6ICdBY3Rpdml0eScsXG4gICAgICAnZGVmaW5pdGlvbic6IHtcbiAgICAgICAgJ2V4dGVuc2lvbnMnOiB7XG4gICAgICAgICAgJ2h0dHA6Ly9oNXAub3JnL3gtYXBpL2g1cC1sb2NhbC1jb250ZW50LWlkJzogaW5zdGFuY2UuY29udGVudElkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbnN0YW5jZS5zdWJDb250ZW50SWQpIHtcbiAgICAgIHRoaXMuZGF0YS5zdGF0ZW1lbnQub2JqZWN0LmRlZmluaXRpb24uZXh0ZW5zaW9uc1snaHR0cDovL2g1cC5vcmcveC1hcGkvaDVwLXN1YkNvbnRlbnRJZCddID0gaW5zdGFuY2Uuc3ViQ29udGVudElkO1xuICAgICAgLy8gRG9uJ3Qgc2V0IHRpdGxlcyBvbiBtYWluIGNvbnRlbnQsIHRpdGxlIHNob3VsZCBjb21lIGZyb20gcHVibGlzaGluZyBwbGF0Zm9ybVxuICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZS5nZXRUaXRsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmRhdGEuc3RhdGVtZW50Lm9iamVjdC5kZWZpbml0aW9uLm5hbWUgPSB7XG4gICAgICAgICAgXCJlbi1VU1wiOiBpbnN0YW5jZS5nZXRUaXRsZSgpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIGNvbnRlbnQgPSBINVAuZ2V0Q29udGVudEZvckluc3RhbmNlKGluc3RhbmNlLmNvbnRlbnRJZCk7XG4gICAgICBpZiAoY29udGVudCAmJiBjb250ZW50Lm1ldGFkYXRhICYmIGNvbnRlbnQubWV0YWRhdGEudGl0bGUpIHtcbiAgICAgICAgdGhpcy5kYXRhLnN0YXRlbWVudC5vYmplY3QuZGVmaW5pdGlvbi5uYW1lID0ge1xuICAgICAgICAgIFwiZW4tVVNcIjogSDVQLmNyZWF0ZVRpdGxlKGNvbnRlbnQubWV0YWRhdGEudGl0bGUpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIC8vIENvbnRlbnQgdHlwZXMgdmlldyBhbHdheXMgZXhwZWN0IHRvIGhhdmUgYSBjb250ZW50SWQgd2hlbiB0aGV5IGFyZSBkaXNwbGF5ZWQuXG4gICAgLy8gVGhpcyBpcyBub3QgdGhlIGNhc2UgaWYgdGhleSBhcmUgZGlzcGxheWVkIGluIHRoZSBlZGl0b3IgYXMgcGFydCBvZiBhIHByZXZpZXcuXG4gICAgLy8gVGhlIGZpeCBpcyB0byBzZXQgYW4gZW1wdHkgb2JqZWN0IHdpdGggZGVmaW5pdGlvbiBmb3IgdGhlIHhBUEkgZXZlbnQsIHNvIGFsbFxuICAgIC8vIHRoZSBjb250ZW50IHR5cGVzIHRoYXQgcmVseSBvbiB0aGlzIGRvZXMgbm90IGhhdmUgdG8gaGFuZGxlIGl0LiBUaGlzIG1lYW5zXG4gICAgLy8gdGhhdCBjb250ZW50IHR5cGVzIHRoYXQgYXJlIGJlaW5nIHByZXZpZXdlZCB3aWxsIHNlbmQgeEFQSSBjb21wbGV0ZWQgZXZlbnRzLFxuICAgIC8vIGJ1dCBzaW5jZSB0aGVyZSBhcmUgbm8gc2NyaXB0cyB0aGF0IGNhdGNoIHRoZXNlIGV2ZW50cyBpbiB0aGUgZWRpdG9yLFxuICAgIC8vIHRoaXMgaXMgbm90IGEgcHJvYmxlbS5cbiAgICB0aGlzLmRhdGEuc3RhdGVtZW50Lm9iamVjdCA9IHtcbiAgICAgIGRlZmluaXRpb246IHt9XG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdGhlIGNvbnRleHQgcGFydCBvZiB0aGUgc3RhdGVtZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZVxuICogICBUaGUgSDVQIGluc3RhbmNlXG4gKi9cbkg1UC5YQVBJRXZlbnQucHJvdG90eXBlLnNldENvbnRleHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaWYgKGluc3RhbmNlLnBhcmVudCAmJiAoaW5zdGFuY2UucGFyZW50LmNvbnRlbnRJZCB8fCBpbnN0YW5jZS5wYXJlbnQuc3ViQ29udGVudElkKSkge1xuICAgIHRoaXMuZGF0YS5zdGF0ZW1lbnQuY29udGV4dCA9IHtcbiAgICAgIFwiY29udGV4dEFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcInBhcmVudFwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiB0aGlzLmdldENvbnRlbnRYQVBJSWQoaW5zdGFuY2UucGFyZW50KSxcbiAgICAgICAgICAgIFwib2JqZWN0VHlwZVwiOiBcIkFjdGl2aXR5XCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGlmIChpbnN0YW5jZS5saWJyYXJ5SW5mbykge1xuICAgIGlmICh0aGlzLmRhdGEuc3RhdGVtZW50LmNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kYXRhLnN0YXRlbWVudC5jb250ZXh0ID0ge1wiY29udGV4dEFjdGl2aXRpZXNcIjp7fX07XG4gICAgfVxuICAgIHRoaXMuZGF0YS5zdGF0ZW1lbnQuY29udGV4dC5jb250ZXh0QWN0aXZpdGllcy5jYXRlZ29yeSA9IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImh0dHA6Ly9oNXAub3JnL2xpYnJhcmllcy9cIiArIGluc3RhbmNlLmxpYnJhcnlJbmZvLnZlcnNpb25lZE5hbWVOb1NwYWNlcyxcbiAgICAgICAgXCJvYmplY3RUeXBlXCI6IFwiQWN0aXZpdHlcIlxuICAgICAgfVxuICAgIF07XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHRoZSBhY3Rvci4gRW1haWwgYW5kIG5hbWUgd2lsbCBiZSBhZGRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5INVAuWEFQSUV2ZW50LnByb3RvdHlwZS5zZXRBY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKEg1UEludGVncmF0aW9uLnVzZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZGF0YS5zdGF0ZW1lbnQuYWN0b3IgPSB7XG4gICAgICAnbmFtZSc6IEg1UEludGVncmF0aW9uLnVzZXIubmFtZSxcbiAgICAgICdtYm94JzogJ21haWx0bzonICsgSDVQSW50ZWdyYXRpb24udXNlci5tYWlsLFxuICAgICAgJ29iamVjdFR5cGUnOiAnQWdlbnQnXG4gICAgfTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgdXVpZDtcbiAgICB0cnkge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5INVBVc2VyVVVJRCkge1xuICAgICAgICB1dWlkID0gbG9jYWxTdG9yYWdlLkg1UFVzZXJVVUlEO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHV1aWQgPSBINVAuY3JlYXRlVVVJRCgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuSDVQVXNlclVVSUQgPSB1dWlkO1xuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBMb2NhbFN0b3JhZ2UgYW5kIENvb2tpZXMgYXJlIHByb2JhYmx5IGRpc2FibGVkLiBEbyBub3QgdHJhY2sgdGhlIHVzZXIuXG4gICAgICB1dWlkID0gJ25vdC10cmFja2FibGUtJyArIEg1UC5jcmVhdGVVVUlEKCk7XG4gICAgfVxuICAgIHRoaXMuZGF0YS5zdGF0ZW1lbnQuYWN0b3IgPSB7XG4gICAgICAnYWNjb3VudCc6IHtcbiAgICAgICAgJ25hbWUnOiB1dWlkLFxuICAgICAgICAnaG9tZVBhZ2UnOiBINVBJbnRlZ3JhdGlvbi5zaXRlVXJsXG4gICAgICB9LFxuICAgICAgJ29iamVjdFR5cGUnOiAnQWdlbnQnXG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgdGhlIG1heCB2YWx1ZSBvZiB0aGUgcmVzdWx0IC0gc2NvcmUgcGFydCBvZiB0aGUgc3RhdGVtZW50XG4gKlxuICogQHJldHVybnMge251bWJlcn1cbiAqICAgVGhlIG1heCBzY29yZSwgb3IgbnVsbCBpZiBub3QgZGVmaW5lZFxuICovXG5INVAuWEFQSUV2ZW50LnByb3RvdHlwZS5nZXRNYXhTY29yZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZShbJ3Jlc3VsdCcsICdzY29yZScsICdtYXgnXSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcmF3IHZhbHVlIG9mIHRoZSByZXN1bHQgLSBzY29yZSBwYXJ0IG9mIHRoZSBzdGF0ZW1lbnRcbiAqXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICogICBUaGUgc2NvcmUsIG9yIG51bGwgaWYgbm90IGRlZmluZWRcbiAqL1xuSDVQLlhBUElFdmVudC5wcm90b3R5cGUuZ2V0U2NvcmUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdldFZlcmlmaWVkU3RhdGVtZW50VmFsdWUoWydyZXN1bHQnLCAnc2NvcmUnLCAncmF3J10pO1xufTtcblxuLyoqXG4gKiBHZXQgY29udGVudCB4QVBJIElELlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZVxuICogICBUaGUgSDVQIGluc3RhbmNlXG4gKi9cbkg1UC5YQVBJRXZlbnQucHJvdG90eXBlLmdldENvbnRlbnRYQVBJSWQgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgdmFyIHhBUElJZDtcbiAgaWYgKGluc3RhbmNlLmNvbnRlbnRJZCAmJiBINVBJbnRlZ3JhdGlvbiAmJiBINVBJbnRlZ3JhdGlvbi5jb250ZW50cyAmJiBINVBJbnRlZ3JhdGlvbi5jb250ZW50c1snY2lkLScgKyBpbnN0YW5jZS5jb250ZW50SWRdKSB7XG4gICAgeEFQSUlkID0gIEg1UEludGVncmF0aW9uLmNvbnRlbnRzWydjaWQtJyArIGluc3RhbmNlLmNvbnRlbnRJZF0udXJsO1xuICAgIGlmIChpbnN0YW5jZS5zdWJDb250ZW50SWQpIHtcbiAgICAgIHhBUElJZCArPSAnP3N1YkNvbnRlbnRJZD0nICsgIGluc3RhbmNlLnN1YkNvbnRlbnRJZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHhBUElJZDtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBldmVudCBpcyBzZW50IGZyb20gYSBjaGlsZCAoaS5lIG5vdCBmcm9tIGdyYW5kY2hpbGQpXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuSDVQLlhBUElFdmVudC5wcm90b3R5cGUuaXNGcm9tQ2hpbGQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwYXJlbnRJZCA9IHRoaXMuZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZShbJ2NvbnRleHQnLCAnY29udGV4dEFjdGl2aXRpZXMnLCAncGFyZW50JywgMCwgJ2lkJ10pO1xuICByZXR1cm4gIXBhcmVudElkIHx8IHBhcmVudElkLmluZGV4T2YoJ3N1YkNvbnRlbnRJZCcpID09PSAtMTtcbn07XG5cbi8qKlxuICogRmlndXJlIG91dCBpZiBhIHByb3BlcnR5IGV4aXN0cyBpbiB0aGUgc3RhdGVtZW50IGFuZCByZXR1cm4gaXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiAgIExpc3QgZGVzY3JpYmluZyB0aGUgcHJvcGVydHkgd2UncmUgbG9va2luZyBmb3IuIEZvciBpbnN0YW5jZVxuICogICBbJ3Jlc3VsdCcsICdzY29yZScsICdyYXcnXSBmb3IgcmVzdWx0LnNjb3JlLnJhd1xuICogQHJldHVybnMgeyp9XG4gKiAgIFRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgaWYgaXQgaXMgc2V0LCBudWxsIG90aGVyd2lzZS5cbiAqL1xuSDVQLlhBUElFdmVudC5wcm90b3R5cGUuZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZSA9IGZ1bmN0aW9uIChrZXlzKSB7XG4gIHZhciB2YWwgPSB0aGlzLmRhdGEuc3RhdGVtZW50O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodmFsW2tleXNbaV1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YWwgPSB2YWxba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn07XG5cbi8qKlxuICogTGlzdCBvZiB2ZXJicyBkZWZpbmVkIGF0IHtAbGluayBodHRwOi8vYWRsbmV0Lmdvdi9leHBhcGkvdmVyYnMvfEFETCB4QVBJIFZvY2FidWxhcnl9XG4gKlxuICogQHR5cGUgQXJyYXlcbiAqL1xuSDVQLlhBUElFdmVudC5hbGxvd2VkWEFQSVZlcmJzID0gW1xuICAnYW5zd2VyZWQnLFxuICAnYXNrZWQnLFxuICAnYXR0ZW1wdGVkJyxcbiAgJ2F0dGVuZGVkJyxcbiAgJ2NvbW1lbnRlZCcsXG4gICdjb21wbGV0ZWQnLFxuICAnZXhpdGVkJyxcbiAgJ2V4cGVyaWVuY2VkJyxcbiAgJ2ZhaWxlZCcsXG4gICdpbXBvcnRlZCcsXG4gICdpbml0aWFsaXplZCcsXG4gICdpbnRlcmFjdGVkJyxcbiAgJ2xhdW5jaGVkJyxcbiAgJ21hc3RlcmVkJyxcbiAgJ3Bhc3NlZCcsXG4gICdwcmVmZXJyZWQnLFxuICAncHJvZ3Jlc3NlZCcsXG4gICdyZWdpc3RlcmVkJyxcbiAgJ3Jlc3BvbmRlZCcsXG4gICdyZXN1bWVkJyxcbiAgJ3Njb3JlZCcsXG4gICdzaGFyZWQnLFxuICAnc3VzcGVuZGVkJyxcbiAgJ3Rlcm1pbmF0ZWQnLFxuICAndm9pZGVkJyxcblxuICAvLyBDdXN0b20gdmVyYnMgdXNlZCBmb3IgYWN0aW9uIHRvb2xiYXIgYmVsb3cgY29udGVudFxuICAnZG93bmxvYWRlZCcsXG4gICdjb3BpZWQnLFxuICAnYWNjZXNzZWQtcmV1c2UnLFxuICAnYWNjZXNzZWQtZW1iZWQnLFxuICAnYWNjZXNzZWQtY29weXJpZ2h0J1xuXTtcbiIsInZhciBINVAgPSB3aW5kb3cuSDVQID0gd2luZG93Lkg1UCB8fCB7fTtcblxuLyoqXG4gKiBUaGUgZXh0ZXJuYWwgZXZlbnQgZGlzcGF0Y2hlci4gT3RoZXJzLCBvdXRzaWRlIG9mIEg1UCBtYXkgcmVnaXN0ZXIgYW5kXG4gKiBsaXN0ZW4gZm9yIEg1UCBFdmVudHMgaGVyZS5cbiAqXG4gKiBAdHlwZSB7SDVQLkV2ZW50RGlzcGF0Y2hlcn1cbiAqL1xuSDVQLmV4dGVybmFsRGlzcGF0Y2hlciA9IG5ldyBINVAuRXZlbnREaXNwYXRjaGVyKCk7XG5cbi8vIEV2ZW50RGlzcGF0Y2hlciBleHRlbnNpb25zXG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciB0cmlnZ2VyaW5nIHhBUEkgYWRkZWQgdG8gdGhlIEV2ZW50RGlzcGF0Y2hlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmVyYlxuICogICBUaGUgc2hvcnQgaWQgb2YgdGhlIHZlcmIgd2Ugd2FudCB0byB0cmlnZ2VyXG4gKiBAcGFyYW0ge09qZWN0fSBbZXh0cmFdXG4gKiAgIEV4dHJhIHByb3BlcnRpZXMgZm9yIHRoZSB4QVBJIHN0YXRlbWVudFxuICovXG5INVAuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZS50cmlnZ2VyWEFQSSA9IGZ1bmN0aW9uICh2ZXJiLCBleHRyYSkge1xuICB0aGlzLnRyaWdnZXIodGhpcy5jcmVhdGVYQVBJRXZlbnRUZW1wbGF0ZSh2ZXJiLCBleHRyYSkpO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGV2ZW50IHRlbXBsYXRlcyBhZGRlZCB0byB0aGUgRXZlbnREaXNwYXRjaGVyLlxuICpcbiAqIFdpbGwgaW4gdGhlIGZ1dHVyZSBiZSB1c2VkIHRvIGFkZCByZXByZXNlbnRhdGlvbnMgb2YgdGhlIHF1ZXN0aW9ucyB0byB0aGVcbiAqIHN0YXRlbWVudHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZlcmJcbiAqICAgVmVyYiBpZCBpbiBzaG9ydCBmb3JtXG4gKiBAcGFyYW0ge09iamVjdH0gW2V4dHJhXVxuICogICBFeHRyYSB2YWx1ZXMgdG8gYmUgYWRkZWQgdG8gdGhlIHN0YXRlbWVudFxuICogQHJldHVybnMge0g1UC5YQVBJRXZlbnR9XG4gKiAgIEluc3RhbmNlXG4gKi9cbkg1UC5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlLmNyZWF0ZVhBUElFdmVudFRlbXBsYXRlID0gZnVuY3Rpb24gKHZlcmIsIGV4dHJhKSB7XG4gIHZhciBldmVudCA9IG5ldyBINVAuWEFQSUV2ZW50KCk7XG5cbiAgZXZlbnQuc2V0QWN0b3IoKTtcbiAgZXZlbnQuc2V0VmVyYih2ZXJiKTtcbiAgaWYgKGV4dHJhICE9PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKHZhciBpIGluIGV4dHJhKSB7XG4gICAgICBldmVudC5kYXRhLnN0YXRlbWVudFtpXSA9IGV4dHJhW2ldO1xuICAgIH1cbiAgfVxuICBpZiAoISgnb2JqZWN0JyBpbiBldmVudC5kYXRhLnN0YXRlbWVudCkpIHtcbiAgICBldmVudC5zZXRPYmplY3QodGhpcyk7XG4gIH1cbiAgaWYgKCEoJ2NvbnRleHQnIGluIGV2ZW50LmRhdGEuc3RhdGVtZW50KSkge1xuICAgIGV2ZW50LnNldENvbnRleHQodGhpcyk7XG4gIH1cbiAgcmV0dXJuIGV2ZW50O1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHhBUEkgY29tcGxldGVkIGV2ZW50c1xuICpcbiAqIERFUFJFQ0FURUQgLSBVU0UgdHJpZ2dlclhBUElTY29yZWQgaW5zdGVhZFxuICpcbiAqIEBkZXByZWNhdGVkXG4gKiAgIHNpbmNlIDEuNSwgdXNlIHRyaWdnZXJYQVBJU2NvcmVkIGluc3RlYWQuXG4gKiBAcGFyYW0ge251bWJlcn0gc2NvcmVcbiAqICAgV2lsbCBiZSBzZXQgYXMgdGhlICdyYXcnIHZhbHVlIG9mIHRoZSBzY29yZSBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTY29yZVxuICogICB3aWxsIGJlIHNldCBhcyB0aGUgXCJtYXhcIiB2YWx1ZSBvZiB0aGUgc2NvcmUgb2JqZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN1Y2Nlc3NcbiAqICAgd2lsbCBiZSBzZXQgYXMgdGhlIFwic3VjY2Vzc1wiIHZhbHVlIG9mIHRoZSByZXN1bHQgb2JqZWN0XG4gKi9cbkg1UC5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlLnRyaWdnZXJYQVBJQ29tcGxldGVkID0gZnVuY3Rpb24gKHNjb3JlLCBtYXhTY29yZSwgc3VjY2Vzcykge1xuICB0aGlzLnRyaWdnZXJYQVBJU2NvcmVkKHNjb3JlLCBtYXhTY29yZSwgJ2NvbXBsZXRlZCcsIHRydWUsIHN1Y2Nlc3MpO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHNjb3JlZCB4QVBJIGV2ZW50c1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBzY29yZVxuICogICBXaWxsIGJlIHNldCBhcyB0aGUgJ3JhdycgdmFsdWUgb2YgdGhlIHNjb3JlIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IG1heFNjb3JlXG4gKiAgIFdpbGwgYmUgc2V0IGFzIHRoZSBcIm1heFwiIHZhbHVlIG9mIHRoZSBzY29yZSBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJiXG4gKiAgIFNob3J0IGZvcm0gb2YgYWRsIHZlcmJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY29tcGxldGlvblxuICogICBJcyB0aGlzIGEgc3RhdGVtZW50IGZyb20gYSBjb21wbGV0ZWQgYWN0aXZpdHk/XG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN1Y2Nlc3NcbiAqICAgSXMgdGhpcyBhIHN0YXRlbWVudCBmcm9tIGFuIGFjdGl2aXR5IHRoYXQgd2FzIGRvbmUgc3VjY2Vzc2Z1bGx5P1xuICovXG5INVAuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZS50cmlnZ2VyWEFQSVNjb3JlZCA9IGZ1bmN0aW9uIChzY29yZSwgbWF4U2NvcmUsIHZlcmIsIGNvbXBsZXRpb24sIHN1Y2Nlc3MpIHtcbiAgdmFyIGV2ZW50ID0gdGhpcy5jcmVhdGVYQVBJRXZlbnRUZW1wbGF0ZSh2ZXJiKTtcbiAgZXZlbnQuc2V0U2NvcmVkUmVzdWx0KHNjb3JlLCBtYXhTY29yZSwgdGhpcywgY29tcGxldGlvbiwgc3VjY2Vzcyk7XG4gIHRoaXMudHJpZ2dlcihldmVudCk7XG59O1xuXG5INVAuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZS5zZXRBY3Rpdml0eVN0YXJ0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2aXR5U3RhcnRUaW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBEb24ndCB0cmlnZ2VyIHhBUEkgZXZlbnRzIGluIHRoZSBlZGl0b3JcbiAgICBpZiAodGhpcy5jb250ZW50SWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBINVBJbnRlZ3JhdGlvbi5jb250ZW50cyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIEg1UEludGVncmF0aW9uLmNvbnRlbnRzWydjaWQtJyArIHRoaXMuY29udGVudElkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRyaWdnZXJYQVBJKCdhdHRlbXB0ZWQnKTtcbiAgICB9XG4gICAgdGhpcy5hY3Rpdml0eVN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gIH1cbn07XG5cbi8qKlxuICogSW50ZXJuYWwgSDVQIGZ1bmN0aW9uIGxpc3RlbmluZyBmb3IgeEFQSSBjb21wbGV0ZWQgZXZlbnRzIGFuZCBzdG9yZXMgc2NvcmVzXG4gKlxuICogQHBhcmFtIHtINVAuWEFQSUV2ZW50fSBldmVudFxuICovXG5INVAueEFQSUNvbXBsZXRlZExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmICgoZXZlbnQuZ2V0VmVyYigpID09PSAnY29tcGxldGVkJyB8fCBldmVudC5nZXRWZXJiKCkgPT09ICdhbnN3ZXJlZCcpICYmICFldmVudC5nZXRWZXJpZmllZFN0YXRlbWVudFZhbHVlKFsnY29udGV4dCcsICdjb250ZXh0QWN0aXZpdGllcycsICdwYXJlbnQnXSkpIHtcbiAgICB2YXIgc2NvcmUgPSBldmVudC5nZXRTY29yZSgpO1xuICAgIHZhciBtYXhTY29yZSA9IGV2ZW50LmdldE1heFNjb3JlKCk7XG4gICAgdmFyIGNvbnRlbnRJZCA9IGV2ZW50LmdldFZlcmlmaWVkU3RhdGVtZW50VmFsdWUoWydvYmplY3QnLCAnZGVmaW5pdGlvbicsICdleHRlbnNpb25zJywgJ2h0dHA6Ly9oNXAub3JnL3gtYXBpL2g1cC1sb2NhbC1jb250ZW50LWlkJ10pO1xuICAgIEg1UC5zZXRGaW5pc2hlZChjb250ZW50SWQsIHNjb3JlLCBtYXhTY29yZSk7XG4gIH1cbn07XG4iLCIvKiEgalF1ZXJ5IHYxLjkuMSB8IChjKSAyMDA1LCAyMDEyIGpRdWVyeSBGb3VuZGF0aW9uLCBJbmMuIHwganF1ZXJ5Lm9yZy9saWNlbnNlXG4qLyhmdW5jdGlvbihlLHQpe3ZhciBuLHIsaT10eXBlb2YgdCxvPWUuZG9jdW1lbnQsYT1lLmxvY2F0aW9uLHM9ZS5qUXVlcnksdT1lLiQsbD17fSxjPVtdLHA9XCIxLjkuMVwiLGY9Yy5jb25jYXQsZD1jLnB1c2gsaD1jLnNsaWNlLGc9Yy5pbmRleE9mLG09bC50b1N0cmluZyx5PWwuaGFzT3duUHJvcGVydHksdj1wLnRyaW0sYj1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgYi5mbi5pbml0KGUsdCxyKX0seD0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2Usdz0vXFxTKy9nLFQ9L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLE49L14oPzooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxDPS9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyxrPS9eW1xcXSw6e31cXHNdKiQvLEU9Lyg/Ol58OnwsKSg/OlxccypcXFspKy9nLFM9L1xcXFwoPzpbXCJcXFxcXFwvYmZucnRdfHVbXFxkYS1mQS1GXXs0fSkvZyxBPS9cIlteXCJcXFxcXFxyXFxuXSpcInx0cnVlfGZhbHNlfG51bGx8LT8oPzpcXGQrXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpL2csaj0vXi1tcy0vLEQ9Ly0oW1xcZGEtel0pL2dpLEw9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfSxIPWZ1bmN0aW9uKGUpeyhvLmFkZEV2ZW50TGlzdGVuZXJ8fFwibG9hZFwiPT09ZS50eXBlfHxcImNvbXBsZXRlXCI9PT1vLnJlYWR5U3RhdGUpJiYocSgpLGIucmVhZHkoKSl9LHE9ZnVuY3Rpb24oKXtvLmFkZEV2ZW50TGlzdGVuZXI/KG8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixILCExKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSCwhMSkpOihvLmRldGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsSCksZS5kZXRhY2hFdmVudChcIm9ubG9hZFwiLEgpKX07Yi5mbj1iLnByb3RvdHlwZT17anF1ZXJ5OnAsY29uc3RydWN0b3I6Yixpbml0OmZ1bmN0aW9uKGUsbixyKXt2YXIgaSxhO2lmKCFlKXJldHVybiB0aGlzO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXtpZihpPVwiPFwiPT09ZS5jaGFyQXQoMCkmJlwiPlwiPT09ZS5jaGFyQXQoZS5sZW5ndGgtMSkmJmUubGVuZ3RoPj0zP1tudWxsLGUsbnVsbF06Ti5leGVjKGUpLCFpfHwhaVsxXSYmbilyZXR1cm4hbnx8bi5qcXVlcnk/KG58fHIpLmZpbmQoZSk6dGhpcy5jb25zdHJ1Y3RvcihuKS5maW5kKGUpO2lmKGlbMV0pe2lmKG49biBpbnN0YW5jZW9mIGI/blswXTpuLGIubWVyZ2UodGhpcyxiLnBhcnNlSFRNTChpWzFdLG4mJm4ubm9kZVR5cGU/bi5vd25lckRvY3VtZW50fHxuOm8sITApKSxDLnRlc3QoaVsxXSkmJmIuaXNQbGFpbk9iamVjdChuKSlmb3IoaSBpbiBuKWIuaXNGdW5jdGlvbih0aGlzW2ldKT90aGlzW2ldKG5baV0pOnRoaXMuYXR0cihpLG5baV0pO3JldHVybiB0aGlzfWlmKGE9by5nZXRFbGVtZW50QnlJZChpWzJdKSxhJiZhLnBhcmVudE5vZGUpe2lmKGEuaWQhPT1pWzJdKXJldHVybiByLmZpbmQoZSk7dGhpcy5sZW5ndGg9MSx0aGlzWzBdPWF9cmV0dXJuIHRoaXMuY29udGV4dD1vLHRoaXMuc2VsZWN0b3I9ZSx0aGlzfXJldHVybiBlLm5vZGVUeXBlPyh0aGlzLmNvbnRleHQ9dGhpc1swXT1lLHRoaXMubGVuZ3RoPTEsdGhpcyk6Yi5pc0Z1bmN0aW9uKGUpP3IucmVhZHkoZSk6KGUuc2VsZWN0b3IhPT10JiYodGhpcy5zZWxlY3Rvcj1lLnNlbGVjdG9yLHRoaXMuY29udGV4dD1lLmNvbnRleHQpLGIubWFrZUFycmF5KGUsdGhpcykpfSxzZWxlY3RvcjpcIlwiLGxlbmd0aDowLHNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sZW5ndGh9LHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gaC5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/dGhpcy50b0FycmF5KCk6MD5lP3RoaXNbdGhpcy5sZW5ndGgrZV06dGhpc1tlXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGUpe3ZhciB0PWIubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGUpO3JldHVybiB0LnByZXZPYmplY3Q9dGhpcyx0LmNvbnRleHQ9dGhpcy5jb250ZXh0LHR9LGVhY2g6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYi5lYWNoKHRoaXMsZSx0KX0scmVhZHk6ZnVuY3Rpb24oZSl7cmV0dXJuIGIucmVhZHkucHJvbWlzZSgpLmRvbmUoZSksdGhpc30sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaC5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmxlbmd0aCxuPStlKygwPmU/dDowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobj49MCYmdD5uP1t0aGlzW25dXTpbXSl9LG1hcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYi5tYXAodGhpcyxmdW5jdGlvbih0LG4pe3JldHVybiBlLmNhbGwodCxuLHQpfSkpfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKG51bGwpfSxwdXNoOmQsc29ydDpbXS5zb3J0LHNwbGljZTpbXS5zcGxpY2V9LGIuZm4uaW5pdC5wcm90b3R5cGU9Yi5mbixiLmV4dGVuZD1iLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBlLG4scixpLG8sYSxzPWFyZ3VtZW50c1swXXx8e30sdT0xLGw9YXJndW1lbnRzLmxlbmd0aCxjPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIHMmJihjPXMscz1hcmd1bWVudHNbMV18fHt9LHU9MiksXCJvYmplY3RcIj09dHlwZW9mIHN8fGIuaXNGdW5jdGlvbihzKXx8KHM9e30pLGw9PT11JiYocz10aGlzLC0tdSk7bD51O3UrKylpZihudWxsIT0obz1hcmd1bWVudHNbdV0pKWZvcihpIGluIG8pZT1zW2ldLHI9b1tpXSxzIT09ciYmKGMmJnImJihiLmlzUGxhaW5PYmplY3Qocil8fChuPWIuaXNBcnJheShyKSkpPyhuPyhuPSExLGE9ZSYmYi5pc0FycmF5KGUpP2U6W10pOmE9ZSYmYi5pc1BsYWluT2JqZWN0KGUpP2U6e30sc1tpXT1iLmV4dGVuZChjLGEscikpOnIhPT10JiYoc1tpXT1yKSk7cmV0dXJuIHN9LGIuZXh0ZW5kKHtub0NvbmZsaWN0OmZ1bmN0aW9uKHQpe3JldHVybiBlLiQ9PT1iJiYoZS4kPXUpLHQmJmUualF1ZXJ5PT09YiYmKGUualF1ZXJ5PXMpLGJ9LGlzUmVhZHk6ITEscmVhZHlXYWl0OjEsaG9sZFJlYWR5OmZ1bmN0aW9uKGUpe2U/Yi5yZWFkeVdhaXQrKzpiLnJlYWR5KCEwKX0scmVhZHk6ZnVuY3Rpb24oZSl7aWYoZT09PSEwPyEtLWIucmVhZHlXYWl0OiFiLmlzUmVhZHkpe2lmKCFvLmJvZHkpcmV0dXJuIHNldFRpbWVvdXQoYi5yZWFkeSk7Yi5pc1JlYWR5PSEwLGUhPT0hMCYmLS1iLnJlYWR5V2FpdD4wfHwobi5yZXNvbHZlV2l0aChvLFtiXSksYi5mbi50cmlnZ2VyJiZiKG8pLnRyaWdnZXIoXCJyZWFkeVwiKS5vZmYoXCJyZWFkeVwiKSl9fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09PWIudHlwZShlKX0saXNBcnJheTpBcnJheS5pc0FycmF5fHxmdW5jdGlvbihlKXtyZXR1cm5cImFycmF5XCI9PT1iLnR5cGUoZSl9LGlzV2luZG93OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lJiZlPT1lLndpbmRvd30saXNOdW1lcmljOmZ1bmN0aW9uKGUpe3JldHVybiFpc05hTihwYXJzZUZsb2F0KGUpKSYmaXNGaW5pdGUoZSl9LHR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2xbbS5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihlKXtpZighZXx8XCJvYmplY3RcIiE9PWIudHlwZShlKXx8ZS5ub2RlVHlwZXx8Yi5pc1dpbmRvdyhlKSlyZXR1cm4hMTt0cnl7aWYoZS5jb25zdHJ1Y3RvciYmIXkuY2FsbChlLFwiY29uc3RydWN0b3JcIikmJiF5LmNhbGwoZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpKXJldHVybiExfWNhdGNoKG4pe3JldHVybiExfXZhciByO2ZvcihyIGluIGUpO3JldHVybiByPT09dHx8eS5jYWxsKGUscil9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZSlyZXR1cm4hMTtyZXR1cm4hMH0sZXJyb3I6ZnVuY3Rpb24oZSl7dGhyb3cgRXJyb3IoZSl9LHBhcnNlSFRNTDpmdW5jdGlvbihlLHQsbil7aWYoIWV8fFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBudWxsO1wiYm9vbGVhblwiPT10eXBlb2YgdCYmKG49dCx0PSExKSx0PXR8fG87dmFyIHI9Qy5leGVjKGUpLGk9IW4mJltdO3JldHVybiByP1t0LmNyZWF0ZUVsZW1lbnQoclsxXSldOihyPWIuYnVpbGRGcmFnbWVudChbZV0sdCxpKSxpJiZiKGkpLnJlbW92ZSgpLGIubWVyZ2UoW10sci5jaGlsZE5vZGVzKSl9LHBhcnNlSlNPTjpmdW5jdGlvbihuKXtyZXR1cm4gZS5KU09OJiZlLkpTT04ucGFyc2U/ZS5KU09OLnBhcnNlKG4pOm51bGw9PT1uP246XCJzdHJpbmdcIj09dHlwZW9mIG4mJihuPWIudHJpbShuKSxuJiZrLnRlc3Qobi5yZXBsYWNlKFMsXCJAXCIpLnJlcGxhY2UoQSxcIl1cIikucmVwbGFjZShFLFwiXCIpKSk/RnVuY3Rpb24oXCJyZXR1cm4gXCIrbikoKTooYi5lcnJvcihcIkludmFsaWQgSlNPTjogXCIrbiksdCl9LHBhcnNlWE1MOmZ1bmN0aW9uKG4pe3ZhciByLGk7aWYoIW58fFwic3RyaW5nXCIhPXR5cGVvZiBuKXJldHVybiBudWxsO3RyeXtlLkRPTVBhcnNlcj8oaT1uZXcgRE9NUGFyc2VyLHI9aS5wYXJzZUZyb21TdHJpbmcobixcInRleHQveG1sXCIpKToocj1uZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxET01cIiksci5hc3luYz1cImZhbHNlXCIsci5sb2FkWE1MKG4pKX1jYXRjaChvKXtyPXR9cmV0dXJuIHImJnIuZG9jdW1lbnRFbGVtZW50JiYhci5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8Yi5lcnJvcihcIkludmFsaWQgWE1MOiBcIituKSxyfSxub29wOmZ1bmN0aW9uKCl7fSxnbG9iYWxFdmFsOmZ1bmN0aW9uKHQpe3QmJmIudHJpbSh0KSYmKGUuZXhlY1NjcmlwdHx8ZnVuY3Rpb24odCl7ZS5ldmFsLmNhbGwoZSx0KX0pKHQpfSxjYW1lbENhc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShqLFwibXMtXCIpLnJlcGxhY2UoRCxMKX0sbm9kZU5hbWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dC50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPTAsbz1lLmxlbmd0aCxhPU0oZSk7aWYobil7aWYoYSl7Zm9yKDtvPmk7aSsrKWlmKHI9dC5hcHBseShlW2ldLG4pLHI9PT0hMSlicmVha31lbHNlIGZvcihpIGluIGUpaWYocj10LmFwcGx5KGVbaV0sbikscj09PSExKWJyZWFrfWVsc2UgaWYoYSl7Zm9yKDtvPmk7aSsrKWlmKHI9dC5jYWxsKGVbaV0saSxlW2ldKSxyPT09ITEpYnJlYWt9ZWxzZSBmb3IoaSBpbiBlKWlmKHI9dC5jYWxsKGVbaV0saSxlW2ldKSxyPT09ITEpYnJlYWs7cmV0dXJuIGV9LHRyaW06diYmIXYuY2FsbChcIlxcdWZlZmZcXHUwMGEwXCIpP2Z1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6di5jYWxsKGUpfTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOihlK1wiXCIpLnJlcGxhY2UoVCxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGUsdCl7dmFyIG49dHx8W107cmV0dXJuIG51bGwhPWUmJihNKE9iamVjdChlKSk/Yi5tZXJnZShuLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTpkLmNhbGwobixlKSksbn0saW5BcnJheTpmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYodCl7aWYoZylyZXR1cm4gZy5jYWxsKHQsZSxuKTtmb3Iocj10Lmxlbmd0aCxuPW4/MD5uP01hdGgubWF4KDAscituKTpuOjA7cj5uO24rKylpZihuIGluIHQmJnRbbl09PT1lKXJldHVybiBufXJldHVybi0xfSxtZXJnZTpmdW5jdGlvbihlLG4pe3ZhciByPW4ubGVuZ3RoLGk9ZS5sZW5ndGgsbz0wO2lmKFwibnVtYmVyXCI9PXR5cGVvZiByKWZvcig7cj5vO28rKyllW2krK109bltvXTtlbHNlIHdoaWxlKG5bb10hPT10KWVbaSsrXT1uW28rK107cmV0dXJuIGUubGVuZ3RoPWksZX0sZ3JlcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT1bXSxvPTAsYT1lLmxlbmd0aDtmb3Iobj0hIW47YT5vO28rKylyPSEhdChlW29dLG8pLG4hPT1yJiZpLnB1c2goZVtvXSk7cmV0dXJuIGl9LG1hcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT0wLG89ZS5sZW5ndGgsYT1NKGUpLHM9W107aWYoYSlmb3IoO28+aTtpKyspcj10KGVbaV0saSxuKSxudWxsIT1yJiYoc1tzLmxlbmd0aF09cik7ZWxzZSBmb3IoaSBpbiBlKXI9dChlW2ldLGksbiksbnVsbCE9ciYmKHNbcy5sZW5ndGhdPXIpO3JldHVybiBmLmFwcGx5KFtdLHMpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oZSxuKXt2YXIgcixpLG87cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIG4mJihvPWVbbl0sbj1lLGU9byksYi5pc0Z1bmN0aW9uKGUpPyhyPWguY2FsbChhcmd1bWVudHMsMiksaT1mdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KG58fHRoaXMsci5jb25jYXQoaC5jYWxsKGFyZ3VtZW50cykpKX0saS5ndWlkPWUuZ3VpZD1lLmd1aWR8fGIuZ3VpZCsrLGkpOnR9LGFjY2VzczpmdW5jdGlvbihlLG4scixpLG8sYSxzKXt2YXIgdT0wLGw9ZS5sZW5ndGgsYz1udWxsPT1yO2lmKFwib2JqZWN0XCI9PT1iLnR5cGUocikpe289ITA7Zm9yKHUgaW4gciliLmFjY2VzcyhlLG4sdSxyW3VdLCEwLGEscyl9ZWxzZSBpZihpIT09dCYmKG89ITAsYi5pc0Z1bmN0aW9uKGkpfHwocz0hMCksYyYmKHM/KG4uY2FsbChlLGkpLG49bnVsbCk6KGM9bixuPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gYy5jYWxsKGIoZSksbil9KSksbikpZm9yKDtsPnU7dSsrKW4oZVt1XSxyLHM/aTppLmNhbGwoZVt1XSx1LG4oZVt1XSxyKSkpO3JldHVybiBvP2U6Yz9uLmNhbGwoZSk6bD9uKGVbMF0scik6YX0sbm93OmZ1bmN0aW9uKCl7cmV0dXJuKG5ldyBEYXRlKS5nZXRUaW1lKCl9fSksYi5yZWFkeS5wcm9taXNlPWZ1bmN0aW9uKHQpe2lmKCFuKWlmKG49Yi5EZWZlcnJlZCgpLFwiY29tcGxldGVcIj09PW8ucmVhZHlTdGF0ZSlzZXRUaW1lb3V0KGIucmVhZHkpO2Vsc2UgaWYoby5hZGRFdmVudExpc3RlbmVyKW8uYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixILCExKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSCwhMSk7ZWxzZXtvLmF0dGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsSCksZS5hdHRhY2hFdmVudChcIm9ubG9hZFwiLEgpO3ZhciByPSExO3RyeXtyPW51bGw9PWUuZnJhbWVFbGVtZW50JiZvLmRvY3VtZW50RWxlbWVudH1jYXRjaChpKXt9ciYmci5kb1Njcm9sbCYmZnVuY3Rpb24gYSgpe2lmKCFiLmlzUmVhZHkpe3RyeXtyLmRvU2Nyb2xsKFwibGVmdFwiKX1jYXRjaChlKXtyZXR1cm4gc2V0VGltZW91dChhLDUwKX1xKCksYi5yZWFkeSgpfX0oKX1yZXR1cm4gbi5wcm9taXNlKHQpfSxiLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7bFtcIltvYmplY3QgXCIrdCtcIl1cIl09dC50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gTShlKXt2YXIgdD1lLmxlbmd0aCxuPWIudHlwZShlKTtyZXR1cm4gYi5pc1dpbmRvdyhlKT8hMToxPT09ZS5ub2RlVHlwZSYmdD8hMDpcImFycmF5XCI9PT1ufHxcImZ1bmN0aW9uXCIhPT1uJiYoMD09PXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0PjAmJnQtMSBpbiBlKX1yPWIobyk7dmFyIF89e307ZnVuY3Rpb24gRihlKXt2YXIgdD1fW2VdPXt9O3JldHVybiBiLmVhY2goZS5tYXRjaCh3KXx8W10sZnVuY3Rpb24oZSxuKXt0W25dPSEwfSksdH1iLkNhbGxiYWNrcz1mdW5jdGlvbihlKXtlPVwic3RyaW5nXCI9PXR5cGVvZiBlP19bZV18fEYoZSk6Yi5leHRlbmQoe30sZSk7dmFyIG4scixpLG8sYSxzLHU9W10sbD0hZS5vbmNlJiZbXSxjPWZ1bmN0aW9uKHQpe2ZvcihyPWUubWVtb3J5JiZ0LGk9ITAsYT1zfHwwLHM9MCxvPXUubGVuZ3RoLG49ITA7dSYmbz5hO2ErKylpZih1W2FdLmFwcGx5KHRbMF0sdFsxXSk9PT0hMSYmZS5zdG9wT25GYWxzZSl7cj0hMTticmVha31uPSExLHUmJihsP2wubGVuZ3RoJiZjKGwuc2hpZnQoKSk6cj91PVtdOnAuZGlzYWJsZSgpKX0scD17YWRkOmZ1bmN0aW9uKCl7aWYodSl7dmFyIHQ9dS5sZW5ndGg7KGZ1bmN0aW9uIGkodCl7Yi5lYWNoKHQsZnVuY3Rpb24odCxuKXt2YXIgcj1iLnR5cGUobik7XCJmdW5jdGlvblwiPT09cj9lLnVuaXF1ZSYmcC5oYXMobil8fHUucHVzaChuKTpuJiZuLmxlbmd0aCYmXCJzdHJpbmdcIiE9PXImJmkobil9KX0pKGFyZ3VtZW50cyksbj9vPXUubGVuZ3RoOnImJihzPXQsYyhyKSl9cmV0dXJuIHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiB1JiZiLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGUsdCl7dmFyIHI7d2hpbGUoKHI9Yi5pbkFycmF5KHQsdSxyKSk+LTEpdS5zcGxpY2UociwxKSxuJiYobz49ciYmby0tLGE+PXImJmEtLSl9KSx0aGlzfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/Yi5pbkFycmF5KGUsdSk+LTE6ISghdXx8IXUubGVuZ3RoKX0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gdT1bXSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIHU9bD1yPXQsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hdX0sbG9jazpmdW5jdGlvbigpe3JldHVybiBsPXQscnx8cC5kaXNhYmxlKCksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuIWx9LGZpcmVXaXRoOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ9dHx8W10sdD1bZSx0LnNsaWNlP3Quc2xpY2UoKTp0XSwhdXx8aSYmIWx8fChuP2wucHVzaCh0KTpjKHQpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIHAuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFpfX07cmV0dXJuIHB9LGIuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihlKXt2YXIgdD1bW1wicmVzb2x2ZVwiLFwiZG9uZVwiLGIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixiLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVqZWN0ZWRcIl0sW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLGIuQ2FsbGJhY2tzKFwibWVtb3J5XCIpXV0sbj1cInBlbmRpbmdcIixyPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBufSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gaS5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LHRoZW46ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHM7cmV0dXJuIGIuRGVmZXJyZWQoZnVuY3Rpb24obil7Yi5lYWNoKHQsZnVuY3Rpb24odCxvKXt2YXIgYT1vWzBdLHM9Yi5pc0Z1bmN0aW9uKGVbdF0pJiZlW3RdO2lbb1sxXV0oZnVuY3Rpb24oKXt2YXIgZT1zJiZzLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtlJiZiLmlzRnVuY3Rpb24oZS5wcm9taXNlKT9lLnByb21pc2UoKS5kb25lKG4ucmVzb2x2ZSkuZmFpbChuLnJlamVjdCkucHJvZ3Jlc3Mobi5ub3RpZnkpOm5bYStcIldpdGhcIl0odGhpcz09PXI/bi5wcm9taXNlKCk6dGhpcyxzP1tlXTphcmd1bWVudHMpfSl9KSxlPW51bGx9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWU/Yi5leHRlbmQoZSxyKTpyfX0saT17fTtyZXR1cm4gci5waXBlPXIudGhlbixiLmVhY2godCxmdW5jdGlvbihlLG8pe3ZhciBhPW9bMl0scz1vWzNdO3Jbb1sxXV09YS5hZGQscyYmYS5hZGQoZnVuY3Rpb24oKXtuPXN9LHRbMV5lXVsyXS5kaXNhYmxlLHRbMl1bMl0ubG9jayksaVtvWzBdXT1mdW5jdGlvbigpe3JldHVybiBpW29bMF0rXCJXaXRoXCJdKHRoaXM9PT1pP3I6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGlbb1swXStcIldpdGhcIl09YS5maXJlV2l0aH0pLHIucHJvbWlzZShpKSxlJiZlLmNhbGwoaSxpKSxpfSx3aGVuOmZ1bmN0aW9uKGUpe3ZhciB0PTAsbj1oLmNhbGwoYXJndW1lbnRzKSxyPW4ubGVuZ3RoLGk9MSE9PXJ8fGUmJmIuaXNGdW5jdGlvbihlLnByb21pc2UpP3I6MCxvPTE9PT1pP2U6Yi5EZWZlcnJlZCgpLGE9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBmdW5jdGlvbihyKXt0W2VdPXRoaXMsbltlXT1hcmd1bWVudHMubGVuZ3RoPjE/aC5jYWxsKGFyZ3VtZW50cyk6cixuPT09cz9vLm5vdGlmeVdpdGgodCxuKTotLWl8fG8ucmVzb2x2ZVdpdGgodCxuKX19LHMsdSxsO2lmKHI+MSlmb3Iocz1BcnJheShyKSx1PUFycmF5KHIpLGw9QXJyYXkocik7cj50O3QrKyluW3RdJiZiLmlzRnVuY3Rpb24oblt0XS5wcm9taXNlKT9uW3RdLnByb21pc2UoKS5kb25lKGEodCxsLG4pKS5mYWlsKG8ucmVqZWN0KS5wcm9ncmVzcyhhKHQsdSxzKSk6LS1pO3JldHVybiBpfHxvLnJlc29sdmVXaXRoKGwsbiksby5wcm9taXNlKCl9fSksYi5zdXBwb3J0PWZ1bmN0aW9uKCl7dmFyIHQsbixyLGEscyx1LGwsYyxwLGYsZD1vLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIixcInRcIiksZC5pbm5lckhUTUw9XCIgIDxsaW5rLz48dGFibGU+PC90YWJsZT48YSBocmVmPScvYSc+YTwvYT48aW5wdXQgdHlwZT0nY2hlY2tib3gnLz5cIixuPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLHI9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIilbMF0sIW58fCFyfHwhbi5sZW5ndGgpcmV0dXJue307cz1vLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksbD1zLmFwcGVuZENoaWxkKG8uY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSksYT1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0sci5zdHlsZS5jc3NUZXh0PVwidG9wOjFweDtmbG9hdDpsZWZ0O29wYWNpdHk6LjVcIix0PXtnZXRTZXRBdHRyaWJ1dGU6XCJ0XCIhPT1kLmNsYXNzTmFtZSxsZWFkaW5nV2hpdGVzcGFjZTozPT09ZC5maXJzdENoaWxkLm5vZGVUeXBlLHRib2R5OiFkLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIikubGVuZ3RoLGh0bWxTZXJpYWxpemU6ISFkLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKS5sZW5ndGgsc3R5bGU6L3RvcC8udGVzdChyLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpKSxocmVmTm9ybWFsaXplZDpcIi9hXCI9PT1yLmdldEF0dHJpYnV0ZShcImhyZWZcIiksb3BhY2l0eTovXjAuNS8udGVzdChyLnN0eWxlLm9wYWNpdHkpLGNzc0Zsb2F0OiEhci5zdHlsZS5jc3NGbG9hdCxjaGVja09uOiEhYS52YWx1ZSxvcHRTZWxlY3RlZDpsLnNlbGVjdGVkLGVuY3R5cGU6ISFvLmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLmVuY3R5cGUsaHRtbDVDbG9uZTpcIjw6bmF2PjwvOm5hdj5cIiE9PW8uY3JlYXRlRWxlbWVudChcIm5hdlwiKS5jbG9uZU5vZGUoITApLm91dGVySFRNTCxib3hNb2RlbDpcIkNTUzFDb21wYXRcIj09PW8uY29tcGF0TW9kZSxkZWxldGVFeHBhbmRvOiEwLG5vQ2xvbmVFdmVudDohMCxpbmxpbmVCbG9ja05lZWRzTGF5b3V0OiExLHNocmlua1dyYXBCbG9ja3M6ITEscmVsaWFibGVNYXJnaW5SaWdodDohMCxib3hTaXppbmdSZWxpYWJsZTohMCxwaXhlbFBvc2l0aW9uOiExfSxhLmNoZWNrZWQ9ITAsdC5ub0Nsb25lQ2hlY2tlZD1hLmNsb25lTm9kZSghMCkuY2hlY2tlZCxzLmRpc2FibGVkPSEwLHQub3B0RGlzYWJsZWQ9IWwuZGlzYWJsZWQ7dHJ5e2RlbGV0ZSBkLnRlc3R9Y2F0Y2goaCl7dC5kZWxldGVFeHBhbmRvPSExfWE9by5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLHQuaW5wdXQ9XCJcIj09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIiksYS52YWx1ZT1cInRcIixhLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLHQucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWUsYS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJ0XCIpLGEuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSx1PW8uY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHUuYXBwZW5kQ2hpbGQoYSksdC5hcHBlbmRDaGVja2VkPWEuY2hlY2tlZCx0LmNoZWNrQ2xvbmU9dS5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsZC5hdHRhY2hFdmVudCYmKGQuYXR0YWNoRXZlbnQoXCJvbmNsaWNrXCIsZnVuY3Rpb24oKXt0Lm5vQ2xvbmVFdmVudD0hMX0pLGQuY2xvbmVOb2RlKCEwKS5jbGljaygpKTtmb3IoZiBpbntzdWJtaXQ6ITAsY2hhbmdlOiEwLGZvY3VzaW46ITB9KWQuc2V0QXR0cmlidXRlKGM9XCJvblwiK2YsXCJ0XCIpLHRbZitcIkJ1YmJsZXNcIl09YyBpbiBlfHxkLmF0dHJpYnV0ZXNbY10uZXhwYW5kbz09PSExO3JldHVybiBkLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixkLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIix0LmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1kLnN0eWxlLmJhY2tncm91bmRDbGlwLGIoZnVuY3Rpb24oKXt2YXIgbixyLGEscz1cInBhZGRpbmc6MDttYXJnaW46MDtib3JkZXI6MDtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Y29udGVudC1ib3g7LW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtcIix1PW8uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO3UmJihuPW8uY3JlYXRlRWxlbWVudChcImRpdlwiKSxuLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDowO2hlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6LTk5OTlweDttYXJnaW4tdG9wOjFweFwiLHUuYXBwZW5kQ2hpbGQobikuYXBwZW5kQ2hpbGQoZCksZC5pbm5lckhUTUw9XCI8dGFibGU+PHRyPjx0ZD48L3RkPjx0ZD50PC90ZD48L3RyPjwvdGFibGU+XCIsYT1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIiksYVswXS5zdHlsZS5jc3NUZXh0PVwicGFkZGluZzowO21hcmdpbjowO2JvcmRlcjowO2Rpc3BsYXk6bm9uZVwiLHA9MD09PWFbMF0ub2Zmc2V0SGVpZ2h0LGFbMF0uc3R5bGUuZGlzcGxheT1cIlwiLGFbMV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0LnJlbGlhYmxlSGlkZGVuT2Zmc2V0cz1wJiYwPT09YVswXS5vZmZzZXRIZWlnaHQsZC5pbm5lckhUTUw9XCJcIixkLnN0eWxlLmNzc1RleHQ9XCJib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzoxcHg7Ym9yZGVyOjFweDtkaXNwbGF5OmJsb2NrO3dpZHRoOjRweDttYXJnaW4tdG9wOjElO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxJTtcIix0LmJveFNpemluZz00PT09ZC5vZmZzZXRXaWR0aCx0LmRvZXNOb3RJbmNsdWRlTWFyZ2luSW5Cb2R5T2Zmc2V0PTEhPT11Lm9mZnNldFRvcCxlLmdldENvbXB1dGVkU3R5bGUmJih0LnBpeGVsUG9zaXRpb249XCIxJVwiIT09KGUuZ2V0Q29tcHV0ZWRTdHlsZShkLG51bGwpfHx7fSkudG9wLHQuYm94U2l6aW5nUmVsaWFibGU9XCI0cHhcIj09PShlLmdldENvbXB1dGVkU3R5bGUoZCxudWxsKXx8e3dpZHRoOlwiNHB4XCJ9KS53aWR0aCxyPWQuYXBwZW5kQ2hpbGQoby5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxyLnN0eWxlLmNzc1RleHQ9ZC5zdHlsZS5jc3NUZXh0PXMsci5zdHlsZS5tYXJnaW5SaWdodD1yLnN0eWxlLndpZHRoPVwiMFwiLGQuc3R5bGUud2lkdGg9XCIxcHhcIix0LnJlbGlhYmxlTWFyZ2luUmlnaHQ9IXBhcnNlRmxvYXQoKGUuZ2V0Q29tcHV0ZWRTdHlsZShyLG51bGwpfHx7fSkubWFyZ2luUmlnaHQpKSx0eXBlb2YgZC5zdHlsZS56b29tIT09aSYmKGQuaW5uZXJIVE1MPVwiXCIsZC5zdHlsZS5jc3NUZXh0PXMrXCJ3aWR0aDoxcHg7cGFkZGluZzoxcHg7ZGlzcGxheTppbmxpbmU7em9vbToxXCIsdC5pbmxpbmVCbG9ja05lZWRzTGF5b3V0PTM9PT1kLm9mZnNldFdpZHRoLGQuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsZC5pbm5lckhUTUw9XCI8ZGl2PjwvZGl2PlwiLGQuZmlyc3RDaGlsZC5zdHlsZS53aWR0aD1cIjVweFwiLHQuc2hyaW5rV3JhcEJsb2Nrcz0zIT09ZC5vZmZzZXRXaWR0aCx0LmlubGluZUJsb2NrTmVlZHNMYXlvdXQmJih1LnN0eWxlLnpvb209MSkpLHUucmVtb3ZlQ2hpbGQobiksbj1kPWE9cj1udWxsKX0pLG49cz11PWw9cj1hPW51bGwsdH0oKTt2YXIgTz0vKD86XFx7W1xcc1xcU10qXFx9fFxcW1tcXHNcXFNdKlxcXSkkLyxCPS8oW0EtWl0pL2c7ZnVuY3Rpb24gUChlLG4scixpKXtpZihiLmFjY2VwdERhdGEoZSkpe3ZhciBvLGEscz1iLmV4cGFuZG8sdT1cInN0cmluZ1wiPT10eXBlb2YgbixsPWUubm9kZVR5cGUscD1sP2IuY2FjaGU6ZSxmPWw/ZVtzXTplW3NdJiZzO2lmKGYmJnBbZl0mJihpfHxwW2ZdLmRhdGEpfHwhdXx8ciE9PXQpcmV0dXJuIGZ8fChsP2Vbc109Zj1jLnBvcCgpfHxiLmd1aWQrKzpmPXMpLHBbZl18fChwW2ZdPXt9LGx8fChwW2ZdLnRvSlNPTj1iLm5vb3ApKSwoXCJvYmplY3RcIj09dHlwZW9mIG58fFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pJiYoaT9wW2ZdPWIuZXh0ZW5kKHBbZl0sbik6cFtmXS5kYXRhPWIuZXh0ZW5kKHBbZl0uZGF0YSxuKSksbz1wW2ZdLGl8fChvLmRhdGF8fChvLmRhdGE9e30pLG89by5kYXRhKSxyIT09dCYmKG9bYi5jYW1lbENhc2UobildPXIpLHU/KGE9b1tuXSxudWxsPT1hJiYoYT1vW2IuY2FtZWxDYXNlKG4pXSkpOmE9byxhfX1mdW5jdGlvbiBSKGUsdCxuKXtpZihiLmFjY2VwdERhdGEoZSkpe3ZhciByLGksbyxhPWUubm9kZVR5cGUscz1hP2IuY2FjaGU6ZSx1PWE/ZVtiLmV4cGFuZG9dOmIuZXhwYW5kbztpZihzW3VdKXtpZih0JiYobz1uP3NbdV06c1t1XS5kYXRhKSl7Yi5pc0FycmF5KHQpP3Q9dC5jb25jYXQoYi5tYXAodCxiLmNhbWVsQ2FzZSkpOnQgaW4gbz90PVt0XToodD1iLmNhbWVsQ2FzZSh0KSx0PXQgaW4gbz9bdF06dC5zcGxpdChcIiBcIikpO2ZvcihyPTAsaT10Lmxlbmd0aDtpPnI7cisrKWRlbGV0ZSBvW3Rbcl1dO2lmKCEobj8kOmIuaXNFbXB0eU9iamVjdCkobykpcmV0dXJufShufHwoZGVsZXRlIHNbdV0uZGF0YSwkKHNbdV0pKSkmJihhP2IuY2xlYW5EYXRhKFtlXSwhMCk6Yi5zdXBwb3J0LmRlbGV0ZUV4cGFuZG98fHMhPXMud2luZG93P2RlbGV0ZSBzW3VdOnNbdV09bnVsbCl9fX1iLmV4dGVuZCh7Y2FjaGU6e30sZXhwYW5kbzpcImpRdWVyeVwiKyhwK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLG5vRGF0YTp7ZW1iZWQ6ITAsb2JqZWN0OlwiY2xzaWQ6RDI3Q0RCNkUtQUU2RC0xMWNmLTk2QjgtNDQ0NTUzNTQwMDAwXCIsYXBwbGV0OiEwfSxoYXNEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBlPWUubm9kZVR5cGU/Yi5jYWNoZVtlW2IuZXhwYW5kb11dOmVbYi5leHBhbmRvXSwhIWUmJiEkKGUpfSxkYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUChlLHQsbil9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUihlLHQpfSxfZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFAoZSx0LG4sITApfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe3JldHVybiBSKGUsdCwhMCl9LGFjY2VwdERhdGE6ZnVuY3Rpb24oZSl7aWYoZS5ub2RlVHlwZSYmMSE9PWUubm9kZVR5cGUmJjkhPT1lLm5vZGVUeXBlKXJldHVybiExO3ZhciB0PWUubm9kZU5hbWUmJmIubm9EYXRhW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV07cmV0dXJuIXR8fHQhPT0hMCYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc2lkXCIpPT09dH19KSxiLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihlLG4pe3ZhciByLGksbz10aGlzWzBdLGE9MCxzPW51bGw7aWYoZT09PXQpe2lmKHRoaXMubGVuZ3RoJiYocz1iLmRhdGEobyksMT09PW8ubm9kZVR5cGUmJiFiLl9kYXRhKG8sXCJwYXJzZWRBdHRyc1wiKSkpe2ZvcihyPW8uYXR0cmlidXRlcztyLmxlbmd0aD5hO2ErKylpPXJbYV0ubmFtZSxpLmluZGV4T2YoXCJkYXRhLVwiKXx8KGk9Yi5jYW1lbENhc2UoaS5zbGljZSg1KSksVyhvLGksc1tpXSkpO2IuX2RhdGEobyxcInBhcnNlZEF0dHJzXCIsITApfXJldHVybiBzfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlP3RoaXMuZWFjaChmdW5jdGlvbigpe2IuZGF0YSh0aGlzLGUpfSk6Yi5hY2Nlc3ModGhpcyxmdW5jdGlvbihuKXtyZXR1cm4gbj09PXQ/bz9XKG8sZSxiLmRhdGEobyxlKSk6bnVsbDoodGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5kYXRhKHRoaXMsZSxuKX0pLHQpfSxudWxsLG4sYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtiLnJlbW92ZURhdGEodGhpcyxlKX0pfX0pO2Z1bmN0aW9uIFcoZSxuLHIpe2lmKHI9PT10JiYxPT09ZS5ub2RlVHlwZSl7dmFyIGk9XCJkYXRhLVwiK24ucmVwbGFjZShCLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCk7aWYocj1lLmdldEF0dHJpYnV0ZShpKSxcInN0cmluZ1wiPT10eXBlb2Ygcil7dHJ5e3I9XCJ0cnVlXCI9PT1yPyEwOlwiZmFsc2VcIj09PXI/ITE6XCJudWxsXCI9PT1yP251bGw6K3IrXCJcIj09PXI/K3I6Ty50ZXN0KHIpP2IucGFyc2VKU09OKHIpOnJ9Y2F0Y2gobyl7fWIuZGF0YShlLG4scil9ZWxzZSByPXR9cmV0dXJuIHJ9ZnVuY3Rpb24gJChlKXt2YXIgdDtmb3IodCBpbiBlKWlmKChcImRhdGFcIiE9PXR8fCFiLmlzRW1wdHlPYmplY3QoZVt0XSkpJiZcInRvSlNPTlwiIT09dClyZXR1cm4hMTtyZXR1cm4hMH1iLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpO3JldHVybiBlPyhuPShufHxcImZ4XCIpK1wicXVldWVcIixpPWIuX2RhdGEoZSxuKSxyJiYoIWl8fGIuaXNBcnJheShyKT9pPWIuX2RhdGEoZSxuLGIubWFrZUFycmF5KHIpKTppLnB1c2gocikpLGl8fFtdKTp0fSxkZXF1ZXVlOmZ1bmN0aW9uKGUsdCl7dD10fHxcImZ4XCI7dmFyIG49Yi5xdWV1ZShlLHQpLHI9bi5sZW5ndGgsaT1uLnNoaWZ0KCksbz1iLl9xdWV1ZUhvb2tzKGUsdCksYT1mdW5jdGlvbigpe2IuZGVxdWV1ZShlLHQpfTtcImlucHJvZ3Jlc3NcIj09PWkmJihpPW4uc2hpZnQoKSxyLS0pLG8uY3VyPWksaSYmKFwiZnhcIj09PXQmJm4udW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIG8uc3RvcCxpLmNhbGwoZSxhLG8pKSwhciYmbyYmby5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dCtcInF1ZXVlSG9va3NcIjtyZXR1cm4gYi5fZGF0YShlLG4pfHxiLl9kYXRhKGUsbix7ZW1wdHk6Yi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtiLl9yZW1vdmVEYXRhKGUsdCtcInF1ZXVlXCIpLGIuX3JlbW92ZURhdGEoZSxuKX0pfSl9fSksYi5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsbil7dmFyIHI9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZSYmKG49ZSxlPVwiZnhcIixyLS0pLHI+YXJndW1lbnRzLmxlbmd0aD9iLnF1ZXVlKHRoaXNbMF0sZSk6bj09PXQ/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1iLnF1ZXVlKHRoaXMsZSxuKTtiLl9xdWV1ZUhvb2tzKHRoaXMsZSksXCJmeFwiPT09ZSYmXCJpbnByb2dyZXNzXCIhPT10WzBdJiZiLmRlcXVldWUodGhpcyxlKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtiLmRlcXVldWUodGhpcyxlKX0pfSxkZWxheTpmdW5jdGlvbihlLHQpe3JldHVybiBlPWIuZng/Yi5meC5zcGVlZHNbZV18fGU6ZSx0PXR8fFwiZnhcIix0aGlzLnF1ZXVlKHQsZnVuY3Rpb24odCxuKXt2YXIgcj1zZXRUaW1lb3V0KHQsZSk7bi5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpfX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnF1ZXVlKGV8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oZSxuKXt2YXIgcixpPTEsbz1iLkRlZmVycmVkKCksYT10aGlzLHM9dGhpcy5sZW5ndGgsdT1mdW5jdGlvbigpey0taXx8by5yZXNvbHZlV2l0aChhLFthXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBlJiYobj1lLGU9dCksZT1lfHxcImZ4XCI7d2hpbGUocy0tKXI9Yi5fZGF0YShhW3NdLGUrXCJxdWV1ZUhvb2tzXCIpLHImJnIuZW1wdHkmJihpKyssci5lbXB0eS5hZGQodSkpO3JldHVybiB1KCksby5wcm9taXNlKG4pfX0pO3ZhciBJLHosWD0vW1xcdFxcclxcbl0vZyxVPS9cXHIvZyxWPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbnxvYmplY3QpJC9pLFk9L14oPzphfGFyZWEpJC9pLEo9L14oPzpjaGVja2VkfHNlbGVjdGVkfGF1dG9mb2N1c3xhdXRvcGxheXxhc3luY3xjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZCkkL2ksRz0vXig/OmNoZWNrZWR8c2VsZWN0ZWQpJC9pLFE9Yi5zdXBwb3J0LmdldFNldEF0dHJpYnV0ZSxLPWIuc3VwcG9ydC5pbnB1dDtiLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQpe3JldHVybiBiLmFjY2Vzcyh0aGlzLGIuYXR0cixlLHQsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5yZW1vdmVBdHRyKHRoaXMsZSl9KX0scHJvcDpmdW5jdGlvbihlLHQpe3JldHVybiBiLmFjY2Vzcyh0aGlzLGIucHJvcCxlLHQsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihlKXtyZXR1cm4gZT1iLnByb3BGaXhbZV18fGUsdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dHJ5e3RoaXNbZV09dCxkZWxldGUgdGhpc1tlXX1jYXRjaChuKXt9fSl9LGFkZENsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpLG8sYT0wLHM9dGhpcy5sZW5ndGgsdT1cInN0cmluZ1wiPT10eXBlb2YgZSYmZTtpZihiLmlzRnVuY3Rpb24oZSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0KXtiKHRoaXMpLmFkZENsYXNzKGUuY2FsbCh0aGlzLHQsdGhpcy5jbGFzc05hbWUpKX0pO2lmKHUpZm9yKHQ9KGV8fFwiXCIpLm1hdGNoKHcpfHxbXTtzPmE7YSsrKWlmKG49dGhpc1thXSxyPTE9PT1uLm5vZGVUeXBlJiYobi5jbGFzc05hbWU/KFwiIFwiK24uY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKFgsXCIgXCIpOlwiIFwiKSl7bz0wO3doaWxlKGk9dFtvKytdKTA+ci5pbmRleE9mKFwiIFwiK2krXCIgXCIpJiYocis9aStcIiBcIik7bi5jbGFzc05hbWU9Yi50cmltKHIpfXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaSxvLGE9MCxzPXRoaXMubGVuZ3RoLHU9MD09PWFyZ3VtZW50cy5sZW5ndGh8fFwic3RyaW5nXCI9PXR5cGVvZiBlJiZlO2lmKGIuaXNGdW5jdGlvbihlKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2IodGhpcykucmVtb3ZlQ2xhc3MoZS5jYWxsKHRoaXMsdCx0aGlzLmNsYXNzTmFtZSkpfSk7aWYodSlmb3IodD0oZXx8XCJcIikubWF0Y2godyl8fFtdO3M+YTthKyspaWYobj10aGlzW2FdLHI9MT09PW4ubm9kZVR5cGUmJihuLmNsYXNzTmFtZT8oXCIgXCIrbi5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoWCxcIiBcIik6XCJcIikpe289MDt3aGlsZShpPXRbbysrXSl3aGlsZShyLmluZGV4T2YoXCIgXCIraStcIiBcIik+PTApcj1yLnJlcGxhY2UoXCIgXCIraStcIiBcIixcIiBcIik7bi5jbGFzc05hbWU9ZT9iLnRyaW0ocik6XCJcIn1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10eXBlb2YgZSxyPVwiYm9vbGVhblwiPT10eXBlb2YgdDtyZXR1cm4gYi5pc0Z1bmN0aW9uKGUpP3RoaXMuZWFjaChmdW5jdGlvbihuKXtiKHRoaXMpLnRvZ2dsZUNsYXNzKGUuY2FsbCh0aGlzLG4sdGhpcy5jbGFzc05hbWUsdCksdCl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXtpZihcInN0cmluZ1wiPT09bil7dmFyIG8sYT0wLHM9Yih0aGlzKSx1PXQsbD1lLm1hdGNoKHcpfHxbXTt3aGlsZShvPWxbYSsrXSl1PXI/dTohcy5oYXNDbGFzcyhvKSxzW3U/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0obyl9ZWxzZShuPT09aXx8XCJib29sZWFuXCI9PT1uKSYmKHRoaXMuY2xhc3NOYW1lJiZiLl9kYXRhKHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsdGhpcy5jbGFzc05hbWUpLHRoaXMuY2xhc3NOYW1lPXRoaXMuY2xhc3NOYW1lfHxlPT09ITE/XCJcIjpiLl9kYXRhKHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKX0pfSxoYXNDbGFzczpmdW5jdGlvbihlKXt2YXIgdD1cIiBcIitlK1wiIFwiLG49MCxyPXRoaXMubGVuZ3RoO2Zvcig7cj5uO24rKylpZigxPT09dGhpc1tuXS5ub2RlVHlwZSYmKFwiIFwiK3RoaXNbbl0uY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKFgsXCIgXCIpLmluZGV4T2YodCk+PTApcmV0dXJuITA7cmV0dXJuITF9LHZhbDpmdW5jdGlvbihlKXt2YXIgbixyLGksbz10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBpPWIuaXNGdW5jdGlvbihlKSx0aGlzLmVhY2goZnVuY3Rpb24obil7dmFyIG8sYT1iKHRoaXMpOzE9PT10aGlzLm5vZGVUeXBlJiYobz1pP2UuY2FsbCh0aGlzLG4sYS52YWwoKSk6ZSxudWxsPT1vP289XCJcIjpcIm51bWJlclwiPT10eXBlb2Ygbz9vKz1cIlwiOmIuaXNBcnJheShvKSYmKG89Yi5tYXAobyxmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOmUrXCJcIn0pKSxyPWIudmFsSG9va3NbdGhpcy50eXBlXXx8Yi52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLHImJlwic2V0XCJpbiByJiZyLnNldCh0aGlzLG8sXCJ2YWx1ZVwiKSE9PXR8fCh0aGlzLnZhbHVlPW8pKX0pO2lmKG8pcmV0dXJuIHI9Yi52YWxIb29rc1tvLnR5cGVdfHxiLnZhbEhvb2tzW28ubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sciYmXCJnZXRcImluIHImJihuPXIuZ2V0KG8sXCJ2YWx1ZVwiKSkhPT10P246KG49by52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2Ygbj9uLnJlcGxhY2UoVSxcIlwiKTpudWxsPT1uP1wiXCI6bil9fX0pLGIuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5hdHRyaWJ1dGVzLnZhbHVlO3JldHVybiF0fHx0LnNwZWNpZmllZD9lLnZhbHVlOmUudGV4dH19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0LG4scj1lLm9wdGlvbnMsaT1lLnNlbGVjdGVkSW5kZXgsbz1cInNlbGVjdC1vbmVcIj09PWUudHlwZXx8MD5pLGE9bz9udWxsOltdLHM9bz9pKzE6ci5sZW5ndGgsdT0wPmk/czpvP2k6MDtmb3IoO3M+dTt1KyspaWYobj1yW3VdLCEoIW4uc2VsZWN0ZWQmJnUhPT1pfHwoYi5zdXBwb3J0Lm9wdERpc2FibGVkP24uZGlzYWJsZWQ6bnVsbCE9PW4uZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpfHxuLnBhcmVudE5vZGUuZGlzYWJsZWQmJmIubm9kZU5hbWUobi5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZih0PWIobikudmFsKCksbylyZXR1cm4gdDthLnB1c2godCl9cmV0dXJuIGF9LHNldDpmdW5jdGlvbihlLHQpe3ZhciBuPWIubWFrZUFycmF5KHQpO3JldHVybiBiKGUpLmZpbmQoXCJvcHRpb25cIikuZWFjaChmdW5jdGlvbigpe3RoaXMuc2VsZWN0ZWQ9Yi5pbkFycmF5KGIodGhpcykudmFsKCksbik+PTB9KSxuLmxlbmd0aHx8KGUuc2VsZWN0ZWRJbmRleD0tMSksbn19fSxhdHRyOmZ1bmN0aW9uKGUsbixyKXt2YXIgbyxhLHMsdT1lLm5vZGVUeXBlO2lmKGUmJjMhPT11JiY4IT09dSYmMiE9PXUpcmV0dXJuIHR5cGVvZiBlLmdldEF0dHJpYnV0ZT09PWk/Yi5wcm9wKGUsbixyKTooYT0xIT09dXx8IWIuaXNYTUxEb2MoZSksYSYmKG49bi50b0xvd2VyQ2FzZSgpLG89Yi5hdHRySG9va3Nbbl18fChKLnRlc3Qobik/ejpJKSkscj09PXQ/byYmYSYmXCJnZXRcImluIG8mJm51bGwhPT0ocz1vLmdldChlLG4pKT9zOih0eXBlb2YgZS5nZXRBdHRyaWJ1dGUhPT1pJiYocz1lLmdldEF0dHJpYnV0ZShuKSksbnVsbD09cz90OnMpOm51bGwhPT1yP28mJmEmJlwic2V0XCJpbiBvJiYocz1vLnNldChlLHIsbikpIT09dD9zOihlLnNldEF0dHJpYnV0ZShuLHIrXCJcIikscik6KGIucmVtb3ZlQXR0cihlLG4pLHQpKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaT0wLG89dCYmdC5tYXRjaCh3KTtpZihvJiYxPT09ZS5ub2RlVHlwZSl3aGlsZShuPW9baSsrXSlyPWIucHJvcEZpeFtuXXx8bixKLnRlc3Qobik/IVEmJkcudGVzdChuKT9lW2IuY2FtZWxDYXNlKFwiZGVmYXVsdC1cIituKV09ZVtyXT0hMTplW3JdPSExOmIuYXR0cihlLG4sXCJcIiksZS5yZW1vdmVBdHRyaWJ1dGUoUT9uOnIpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihlLHQpe2lmKCFiLnN1cHBvcnQucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09dCYmYi5ub2RlTmFtZShlLFwiaW5wdXRcIikpe3ZhciBuPWUudmFsdWU7cmV0dXJuIGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLHQpLG4mJihlLnZhbHVlPW4pLHR9fX19LHByb3BGaXg6e3RhYmluZGV4OlwidGFiSW5kZXhcIixyZWFkb25seTpcInJlYWRPbmx5XCIsXCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIixtYXhsZW5ndGg6XCJtYXhMZW5ndGhcIixjZWxsc3BhY2luZzpcImNlbGxTcGFjaW5nXCIsY2VsbHBhZGRpbmc6XCJjZWxsUGFkZGluZ1wiLHJvd3NwYW46XCJyb3dTcGFuXCIsY29sc3BhbjpcImNvbFNwYW5cIix1c2VtYXA6XCJ1c2VNYXBcIixmcmFtZWJvcmRlcjpcImZyYW1lQm9yZGVyXCIsY29udGVudGVkaXRhYmxlOlwiY29udGVudEVkaXRhYmxlXCJ9LHByb3A6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpLG8sYSxzPWUubm9kZVR5cGU7aWYoZSYmMyE9PXMmJjghPT1zJiYyIT09cylyZXR1cm4gYT0xIT09c3x8IWIuaXNYTUxEb2MoZSksYSYmKG49Yi5wcm9wRml4W25dfHxuLG89Yi5wcm9wSG9va3Nbbl0pLHIhPT10P28mJlwic2V0XCJpbiBvJiYoaT1vLnNldChlLHIsbikpIT09dD9pOmVbbl09cjpvJiZcImdldFwiaW4gbyYmbnVsbCE9PShpPW8uZ2V0KGUsbikpP2k6ZVtuXX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciBuPWUuZ2V0QXR0cmlidXRlTm9kZShcInRhYmluZGV4XCIpO3JldHVybiBuJiZuLnNwZWNpZmllZD9wYXJzZUludChuLnZhbHVlLDEwKTpWLnRlc3QoZS5ub2RlTmFtZSl8fFkudGVzdChlLm5vZGVOYW1lKSYmZS5ocmVmPzA6dH19fX0pLHo9e2dldDpmdW5jdGlvbihlLG4pe3ZhciByPWIucHJvcChlLG4pLGk9XCJib29sZWFuXCI9PXR5cGVvZiByJiZlLmdldEF0dHJpYnV0ZShuKSxvPVwiYm9vbGVhblwiPT10eXBlb2Ygcj9LJiZRP251bGwhPWk6Ry50ZXN0KG4pP2VbYi5jYW1lbENhc2UoXCJkZWZhdWx0LVwiK24pXTohIWk6ZS5nZXRBdHRyaWJ1dGVOb2RlKG4pO3JldHVybiBvJiZvLnZhbHVlIT09ITE/bi50b0xvd2VyQ2FzZSgpOnR9LHNldDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHQ9PT0hMT9iLnJlbW92ZUF0dHIoZSxuKTpLJiZRfHwhRy50ZXN0KG4pP2Uuc2V0QXR0cmlidXRlKCFRJiZiLnByb3BGaXhbbl18fG4sbik6ZVtiLmNhbWVsQ2FzZShcImRlZmF1bHQtXCIrbildPWVbbl09ITAsbn19LEsmJlF8fChiLmF0dHJIb29rcy52YWx1ZT17Z2V0OmZ1bmN0aW9uKGUsbil7dmFyIHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKG4pO3JldHVybiBiLm5vZGVOYW1lKGUsXCJpbnB1dFwiKT9lLmRlZmF1bHRWYWx1ZTpyJiZyLnNwZWNpZmllZD9yLnZhbHVlOnR9LHNldDpmdW5jdGlvbihlLG4scil7cmV0dXJuIGIubm9kZU5hbWUoZSxcImlucHV0XCIpPyhlLmRlZmF1bHRWYWx1ZT1uLHQpOkkmJkkuc2V0KGUsbixyKX19KSxRfHwoST1iLnZhbEhvb2tzLmJ1dHRvbj17Z2V0OmZ1bmN0aW9uKGUsbil7dmFyIHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKG4pO3JldHVybiByJiYoXCJpZFwiPT09bnx8XCJuYW1lXCI9PT1ufHxcImNvb3Jkc1wiPT09bj9cIlwiIT09ci52YWx1ZTpyLnNwZWNpZmllZCk/ci52YWx1ZTp0fSxzZXQ6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpPWUuZ2V0QXR0cmlidXRlTm9kZShyKTtyZXR1cm4gaXx8ZS5zZXRBdHRyaWJ1dGVOb2RlKGk9ZS5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShyKSksaS52YWx1ZT1uKz1cIlwiLFwidmFsdWVcIj09PXJ8fG49PT1lLmdldEF0dHJpYnV0ZShyKT9uOnR9fSxiLmF0dHJIb29rcy5jb250ZW50ZWRpdGFibGU9e2dldDpJLmdldCxzZXQ6ZnVuY3Rpb24oZSx0LG4pe0kuc2V0KGUsXCJcIj09PXQ/ITE6dCxuKX19LGIuZWFjaChbXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGUsbil7Yi5hdHRySG9va3Nbbl09Yi5leHRlbmQoYi5hdHRySG9va3Nbbl0se3NldDpmdW5jdGlvbihlLHIpe3JldHVyblwiXCI9PT1yPyhlLnNldEF0dHJpYnV0ZShuLFwiYXV0b1wiKSxyKTp0fX0pfSkpLGIuc3VwcG9ydC5ocmVmTm9ybWFsaXplZHx8KGIuZWFjaChbXCJocmVmXCIsXCJzcmNcIixcIndpZHRoXCIsXCJoZWlnaHRcIl0sZnVuY3Rpb24oZSxuKXtiLmF0dHJIb29rc1tuXT1iLmV4dGVuZChiLmF0dHJIb29rc1tuXSx7Z2V0OmZ1bmN0aW9uKGUpe3ZhciByPWUuZ2V0QXR0cmlidXRlKG4sMik7cmV0dXJuIG51bGw9PXI/dDpyfX0pfSksYi5lYWNoKFtcImhyZWZcIixcInNyY1wiXSxmdW5jdGlvbihlLHQpe2IucHJvcEhvb2tzW3RdPXtnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKHQsNCl9fX0pKSxiLnN1cHBvcnQuc3R5bGV8fChiLmF0dHJIb29rcy5zdHlsZT17Z2V0OmZ1bmN0aW9uKGUpe3JldHVybiBlLnN0eWxlLmNzc1RleHR8fHR9LHNldDpmdW5jdGlvbihlLHQpe3JldHVybiBlLnN0eWxlLmNzc1RleHQ9dCtcIlwifX0pLGIuc3VwcG9ydC5vcHRTZWxlY3RlZHx8KGIucHJvcEhvb2tzLnNlbGVjdGVkPWIuZXh0ZW5kKGIucHJvcEhvb2tzLnNlbGVjdGVkLHtnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiYodC5zZWxlY3RlZEluZGV4LHQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpLG51bGx9fSkpLGIuc3VwcG9ydC5lbmN0eXBlfHwoYi5wcm9wRml4LmVuY3R5cGU9XCJlbmNvZGluZ1wiKSxiLnN1cHBvcnQuY2hlY2tPbnx8Yi5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe2IudmFsSG9va3NbdGhpc109e2dldDpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmUudmFsdWV9fX0pLGIuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtiLnZhbEhvb2tzW3RoaXNdPWIuZXh0ZW5kKGIudmFsSG9va3NbdGhpc10se3NldDpmdW5jdGlvbihlLG4pe3JldHVybiBiLmlzQXJyYXkobik/ZS5jaGVja2VkPWIuaW5BcnJheShiKGUpLnZhbCgpLG4pPj0wOnR9fSl9KTt2YXIgWj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYSkkL2ksZXQ9L15rZXkvLHR0PS9eKD86bW91c2V8Y29udGV4dG1lbnUpfGNsaWNrLyxudD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8scnQ9L14oW14uXSopKD86XFwuKC4rKXwpJC87ZnVuY3Rpb24gaXQoKXtyZXR1cm4hMH1mdW5jdGlvbiBvdCgpe3JldHVybiExfWIuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oZSxuLHIsbyxhKXt2YXIgcyx1LGwsYyxwLGYsZCxoLGcsbSx5LHY9Yi5fZGF0YShlKTtpZih2KXtyLmhhbmRsZXImJihjPXIscj1jLmhhbmRsZXIsYT1jLnNlbGVjdG9yKSxyLmd1aWR8fChyLmd1aWQ9Yi5ndWlkKyspLCh1PXYuZXZlbnRzKXx8KHU9di5ldmVudHM9e30pLChmPXYuaGFuZGxlKXx8KGY9di5oYW5kbGU9ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBiPT09aXx8ZSYmYi5ldmVudC50cmlnZ2VyZWQ9PT1lLnR5cGU/dDpiLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGYuZWxlbSxhcmd1bWVudHMpfSxmLmVsZW09ZSksbj0obnx8XCJcIikubWF0Y2godyl8fFtcIlwiXSxsPW4ubGVuZ3RoO3doaWxlKGwtLSlzPXJ0LmV4ZWMobltsXSl8fFtdLGc9eT1zWzFdLG09KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCkscD1iLmV2ZW50LnNwZWNpYWxbZ118fHt9LGc9KGE/cC5kZWxlZ2F0ZVR5cGU6cC5iaW5kVHlwZSl8fGcscD1iLmV2ZW50LnNwZWNpYWxbZ118fHt9LGQ9Yi5leHRlbmQoe3R5cGU6ZyxvcmlnVHlwZTp5LGRhdGE6byxoYW5kbGVyOnIsZ3VpZDpyLmd1aWQsc2VsZWN0b3I6YSxuZWVkc0NvbnRleHQ6YSYmYi5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGEpLG5hbWVzcGFjZTptLmpvaW4oXCIuXCIpfSxjKSwoaD11W2ddKXx8KGg9dVtnXT1bXSxoLmRlbGVnYXRlQ291bnQ9MCxwLnNldHVwJiZwLnNldHVwLmNhbGwoZSxvLG0sZikhPT0hMXx8KGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoZyxmLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib25cIitnLGYpKSkscC5hZGQmJihwLmFkZC5jYWxsKGUsZCksZC5oYW5kbGVyLmd1aWR8fChkLmhhbmRsZXIuZ3VpZD1yLmd1aWQpKSxhP2guc3BsaWNlKGguZGVsZWdhdGVDb3VudCsrLDAsZCk6aC5wdXNoKGQpLGIuZXZlbnQuZ2xvYmFsW2ddPSEwO2U9bnVsbH19LHJlbW92ZTpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxwLGYsZCxoLGcsbT1iLmhhc0RhdGEoZSkmJmIuX2RhdGEoZSk7aWYobSYmKGM9bS5ldmVudHMpKXt0PSh0fHxcIlwiKS5tYXRjaCh3KXx8W1wiXCJdLGw9dC5sZW5ndGg7d2hpbGUobC0tKWlmKHM9cnQuZXhlYyh0W2xdKXx8W10sZD1nPXNbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkKXtwPWIuZXZlbnQuc3BlY2lhbFtkXXx8e30sZD0ocj9wLmRlbGVnYXRlVHlwZTpwLmJpbmRUeXBlKXx8ZCxmPWNbZF18fFtdLHM9c1syXSYmUmVnRXhwKFwiKF58XFxcXC4pXCIraC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksdT1vPWYubGVuZ3RoO3doaWxlKG8tLSlhPWZbb10sIWkmJmchPT1hLm9yaWdUeXBlfHxuJiZuLmd1aWQhPT1hLmd1aWR8fHMmJiFzLnRlc3QoYS5uYW1lc3BhY2UpfHxyJiZyIT09YS5zZWxlY3RvciYmKFwiKipcIiE9PXJ8fCFhLnNlbGVjdG9yKXx8KGYuc3BsaWNlKG8sMSksYS5zZWxlY3RvciYmZi5kZWxlZ2F0ZUNvdW50LS0scC5yZW1vdmUmJnAucmVtb3ZlLmNhbGwoZSxhKSk7dSYmIWYubGVuZ3RoJiYocC50ZWFyZG93biYmcC50ZWFyZG93bi5jYWxsKGUsaCxtLmhhbmRsZSkhPT0hMXx8Yi5yZW1vdmVFdmVudChlLGQsbS5oYW5kbGUpLGRlbGV0ZSBjW2RdKX1lbHNlIGZvcihkIGluIGMpYi5ldmVudC5yZW1vdmUoZSxkK3RbbF0sbixyLCEwKTtiLmlzRW1wdHlPYmplY3QoYykmJihkZWxldGUgbS5oYW5kbGUsYi5fcmVtb3ZlRGF0YShlLFwiZXZlbnRzXCIpKX19LHRyaWdnZXI6ZnVuY3Rpb24obixyLGksYSl7dmFyIHMsdSxsLGMscCxmLGQsaD1baXx8b10sZz15LmNhbGwobixcInR5cGVcIik/bi50eXBlOm4sbT15LmNhbGwobixcIm5hbWVzcGFjZVwiKT9uLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYobD1mPWk9aXx8bywzIT09aS5ub2RlVHlwZSYmOCE9PWkubm9kZVR5cGUmJiFudC50ZXN0KGcrYi5ldmVudC50cmlnZ2VyZWQpJiYoZy5pbmRleE9mKFwiLlwiKT49MCYmKG09Zy5zcGxpdChcIi5cIiksZz1tLnNoaWZ0KCksbS5zb3J0KCkpLHU9MD5nLmluZGV4T2YoXCI6XCIpJiZcIm9uXCIrZyxuPW5bYi5leHBhbmRvXT9uOm5ldyBiLkV2ZW50KGcsXCJvYmplY3RcIj09dHlwZW9mIG4mJm4pLG4uaXNUcmlnZ2VyPSEwLG4ubmFtZXNwYWNlPW0uam9pbihcIi5cIiksbi5uYW1lc3BhY2VfcmU9bi5uYW1lc3BhY2U/UmVnRXhwKFwiKF58XFxcXC4pXCIrbS5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxuLnJlc3VsdD10LG4udGFyZ2V0fHwobi50YXJnZXQ9aSkscj1udWxsPT1yP1tuXTpiLm1ha2VBcnJheShyLFtuXSkscD1iLmV2ZW50LnNwZWNpYWxbZ118fHt9LGF8fCFwLnRyaWdnZXJ8fHAudHJpZ2dlci5hcHBseShpLHIpIT09ITEpKXtpZighYSYmIXAubm9CdWJibGUmJiFiLmlzV2luZG93KGkpKXtmb3IoYz1wLmRlbGVnYXRlVHlwZXx8ZyxudC50ZXN0KGMrZyl8fChsPWwucGFyZW50Tm9kZSk7bDtsPWwucGFyZW50Tm9kZSloLnB1c2gobCksZj1sO2Y9PT0oaS5vd25lckRvY3VtZW50fHxvKSYmaC5wdXNoKGYuZGVmYXVsdFZpZXd8fGYucGFyZW50V2luZG93fHxlKX1kPTA7d2hpbGUoKGw9aFtkKytdKSYmIW4uaXNQcm9wYWdhdGlvblN0b3BwZWQoKSluLnR5cGU9ZD4xP2M6cC5iaW5kVHlwZXx8ZyxzPShiLl9kYXRhKGwsXCJldmVudHNcIil8fHt9KVtuLnR5cGVdJiZiLl9kYXRhKGwsXCJoYW5kbGVcIikscyYmcy5hcHBseShsLHIpLHM9dSYmbFt1XSxzJiZiLmFjY2VwdERhdGEobCkmJnMuYXBwbHkmJnMuYXBwbHkobCxyKT09PSExJiZuLnByZXZlbnREZWZhdWx0KCk7aWYobi50eXBlPWcsIShhfHxuLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxwLl9kZWZhdWx0JiZwLl9kZWZhdWx0LmFwcGx5KGkub3duZXJEb2N1bWVudCxyKSE9PSExfHxcImNsaWNrXCI9PT1nJiZiLm5vZGVOYW1lKGksXCJhXCIpfHwhYi5hY2NlcHREYXRhKGkpfHwhdXx8IWlbZ118fGIuaXNXaW5kb3coaSkpKXtmPWlbdV0sZiYmKGlbdV09bnVsbCksYi5ldmVudC50cmlnZ2VyZWQ9Zzt0cnl7aVtnXSgpfWNhdGNoKHYpe31iLmV2ZW50LnRyaWdnZXJlZD10LGYmJihpW3VdPWYpfXJldHVybiBuLnJlc3VsdH19LGRpc3BhdGNoOmZ1bmN0aW9uKGUpe2U9Yi5ldmVudC5maXgoZSk7dmFyIG4scixpLG8sYSxzPVtdLHU9aC5jYWxsKGFyZ3VtZW50cyksbD0oYi5fZGF0YSh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbZS50eXBlXXx8W10sYz1iLmV2ZW50LnNwZWNpYWxbZS50eXBlXXx8e307aWYodVswXT1lLGUuZGVsZWdhdGVUYXJnZXQ9dGhpcywhYy5wcmVEaXNwYXRjaHx8Yy5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsZSkhPT0hMSl7cz1iLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxlLGwpLG49MDt3aGlsZSgobz1zW24rK10pJiYhZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXtlLmN1cnJlbnRUYXJnZXQ9by5lbGVtLGE9MDt3aGlsZSgoaT1vLmhhbmRsZXJzW2ErK10pJiYhZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSghZS5uYW1lc3BhY2VfcmV8fGUubmFtZXNwYWNlX3JlLnRlc3QoaS5uYW1lc3BhY2UpKSYmKGUuaGFuZGxlT2JqPWksZS5kYXRhPWkuZGF0YSxyPSgoYi5ldmVudC5zcGVjaWFsW2kub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxpLmhhbmRsZXIpLmFwcGx5KG8uZWxlbSx1KSxyIT09dCYmKGUucmVzdWx0PXIpPT09ITEmJihlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBjLnBvc3REaXNwYXRjaCYmYy5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGUpLGUucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oZSxuKXt2YXIgcixpLG8sYSxzPVtdLHU9bi5kZWxlZ2F0ZUNvdW50LGw9ZS50YXJnZXQ7aWYodSYmbC5ub2RlVHlwZSYmKCFlLmJ1dHRvbnx8XCJjbGlja1wiIT09ZS50eXBlKSlmb3IoO2whPXRoaXM7bD1sLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWwubm9kZVR5cGUmJihsLmRpc2FibGVkIT09ITB8fFwiY2xpY2tcIiE9PWUudHlwZSkpe2ZvcihvPVtdLGE9MDt1PmE7YSsrKWk9blthXSxyPWkuc2VsZWN0b3IrXCIgXCIsb1tyXT09PXQmJihvW3JdPWkubmVlZHNDb250ZXh0P2Iocix0aGlzKS5pbmRleChsKT49MDpiLmZpbmQocix0aGlzLG51bGwsW2xdKS5sZW5ndGgpLG9bcl0mJm8ucHVzaChpKTtvLmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6b30pfXJldHVybiBuLmxlbmd0aD51JiZzLnB1c2goe2VsZW06dGhpcyxoYW5kbGVyczpuLnNsaWNlKHUpfSksc30sZml4OmZ1bmN0aW9uKGUpe2lmKGVbYi5leHBhbmRvXSlyZXR1cm4gZTt2YXIgdCxuLHIsaT1lLnR5cGUsYT1lLHM9dGhpcy5maXhIb29rc1tpXTtzfHwodGhpcy5maXhIb29rc1tpXT1zPXR0LnRlc3QoaSk/dGhpcy5tb3VzZUhvb2tzOmV0LnRlc3QoaSk/dGhpcy5rZXlIb29rczp7fSkscj1zLnByb3BzP3RoaXMucHJvcHMuY29uY2F0KHMucHJvcHMpOnRoaXMucHJvcHMsZT1uZXcgYi5FdmVudChhKSx0PXIubGVuZ3RoO3doaWxlKHQtLSluPXJbdF0sZVtuXT1hW25dO3JldHVybiBlLnRhcmdldHx8KGUudGFyZ2V0PWEuc3JjRWxlbWVudHx8byksMz09PWUudGFyZ2V0Lm5vZGVUeXBlJiYoZS50YXJnZXQ9ZS50YXJnZXQucGFyZW50Tm9kZSksZS5tZXRhS2V5PSEhZS5tZXRhS2V5LHMuZmlsdGVyP3MuZmlsdGVyKGUsYSk6ZX0scHJvcHM6XCJhbHRLZXkgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCBldmVudFBoYXNlIG1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIi5zcGxpdChcIiBcIiksZml4SG9va3M6e30sa2V5SG9va3M6e3Byb3BzOlwiY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZVwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09ZS53aGljaCYmKGUud2hpY2g9bnVsbCE9dC5jaGFyQ29kZT90LmNoYXJDb2RlOnQua2V5Q29kZSksZX19LG1vdXNlSG9va3M6e3Byb3BzOlwiYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIGZyb21FbGVtZW50IG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50XCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihlLG4pe3ZhciByLGksYSxzPW4uYnV0dG9uLHU9bi5mcm9tRWxlbWVudDtyZXR1cm4gbnVsbD09ZS5wYWdlWCYmbnVsbCE9bi5jbGllbnRYJiYoaT1lLnRhcmdldC5vd25lckRvY3VtZW50fHxvLGE9aS5kb2N1bWVudEVsZW1lbnQscj1pLmJvZHksZS5wYWdlWD1uLmNsaWVudFgrKGEmJmEuc2Nyb2xsTGVmdHx8ciYmci5zY3JvbGxMZWZ0fHwwKS0oYSYmYS5jbGllbnRMZWZ0fHxyJiZyLmNsaWVudExlZnR8fDApLGUucGFnZVk9bi5jbGllbnRZKyhhJiZhLnNjcm9sbFRvcHx8ciYmci5zY3JvbGxUb3B8fDApLShhJiZhLmNsaWVudFRvcHx8ciYmci5jbGllbnRUb3B8fDApKSwhZS5yZWxhdGVkVGFyZ2V0JiZ1JiYoZS5yZWxhdGVkVGFyZ2V0PXU9PT1lLnRhcmdldD9uLnRvRWxlbWVudDp1KSxlLndoaWNofHxzPT09dHx8KGUud2hpY2g9MSZzPzE6MiZzPzM6NCZzPzI6MCksZX19LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiBiLm5vZGVOYW1lKHRoaXMsXCJpbnB1dFwiKSYmXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrPyh0aGlzLmNsaWNrKCksITEpOnR9fSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT1vLmFjdGl2ZUVsZW1lbnQmJnRoaXMuZm9jdXMpdHJ5e3JldHVybiB0aGlzLmZvY3VzKCksITF9Y2F0Y2goZSl7fX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXM9PT1vLmFjdGl2ZUVsZW1lbnQmJnRoaXMuYmx1cj8odGhpcy5ibHVyKCksITEpOnR9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGUpe2UucmVzdWx0IT09dCYmKGUub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1lLnJlc3VsdCl9fX0sc2ltdWxhdGU6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGk9Yi5leHRlbmQobmV3IGIuRXZlbnQsbix7dHlwZTplLGlzU2ltdWxhdGVkOiEwLG9yaWdpbmFsRXZlbnQ6e319KTtyP2IuZXZlbnQudHJpZ2dlcihpLG51bGwsdCk6Yi5ldmVudC5kaXNwYXRjaC5jYWxsKHQsaSksaS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmbi5wcmV2ZW50RGVmYXVsdCgpfX0sYi5yZW1vdmVFdmVudD1vLnJlbW92ZUV2ZW50TGlzdGVuZXI/ZnVuY3Rpb24oZSx0LG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbiwhMSl9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1cIm9uXCIrdDtlLmRldGFjaEV2ZW50JiYodHlwZW9mIGVbcl09PT1pJiYoZVtyXT1udWxsKSxlLmRldGFjaEV2ZW50KHIsbikpfSxiLkV2ZW50PWZ1bmN0aW9uKGUsbil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBiLkV2ZW50PyhlJiZlLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1lLHRoaXMudHlwZT1lLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZS5kZWZhdWx0UHJldmVudGVkfHxlLnJldHVyblZhbHVlPT09ITF8fGUuZ2V0UHJldmVudERlZmF1bHQmJmUuZ2V0UHJldmVudERlZmF1bHQoKT9pdDpvdCk6dGhpcy50eXBlPWUsbiYmYi5leHRlbmQodGhpcyxuKSx0aGlzLnRpbWVTdGFtcD1lJiZlLnRpbWVTdGFtcHx8Yi5ub3coKSx0aGlzW2IuZXhwYW5kb109ITAsdCk6bmV3IGIuRXZlbnQoZSxuKX0sYi5FdmVudC5wcm90b3R5cGU9e2lzRGVmYXVsdFByZXZlbnRlZDpvdCxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpvdCxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpvdCxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1pdCxlJiYoZS5wcmV2ZW50RGVmYXVsdD9lLnByZXZlbnREZWZhdWx0KCk6ZS5yZXR1cm5WYWx1ZT0hMSl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPWl0LGUmJihlLnN0b3BQcm9wYWdhdGlvbiYmZS5zdG9wUHJvcGFnYXRpb24oKSxlLmNhbmNlbEJ1YmJsZT0hMCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9aXQsdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LGIuZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwifSxmdW5jdGlvbihlLHQpe2IuZXZlbnQuc3BlY2lhbFtlXT17ZGVsZWdhdGVUeXBlOnQsYmluZFR5cGU6dCxoYW5kbGU6ZnVuY3Rpb24oZSl7dmFyIG4scj10aGlzLGk9ZS5yZWxhdGVkVGFyZ2V0LG89ZS5oYW5kbGVPYmo7XG5yZXR1cm4oIWl8fGkhPT1yJiYhYi5jb250YWlucyhyLGkpKSYmKGUudHlwZT1vLm9yaWdUeXBlLG49by5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxlLnR5cGU9dCksbn19fSksYi5zdXBwb3J0LnN1Ym1pdEJ1YmJsZXN8fChiLmV2ZW50LnNwZWNpYWwuc3VibWl0PXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiBiLm5vZGVOYW1lKHRoaXMsXCJmb3JtXCIpPyExOihiLmV2ZW50LmFkZCh0aGlzLFwiY2xpY2suX3N1Ym1pdCBrZXlwcmVzcy5fc3VibWl0XCIsZnVuY3Rpb24oZSl7dmFyIG49ZS50YXJnZXQscj1iLm5vZGVOYW1lKG4sXCJpbnB1dFwiKXx8Yi5ub2RlTmFtZShuLFwiYnV0dG9uXCIpP24uZm9ybTp0O3ImJiFiLl9kYXRhKHIsXCJzdWJtaXRCdWJibGVzXCIpJiYoYi5ldmVudC5hZGQocixcInN1Ym1pdC5fc3VibWl0XCIsZnVuY3Rpb24oZSl7ZS5fc3VibWl0X2J1YmJsZT0hMH0pLGIuX2RhdGEocixcInN1Ym1pdEJ1YmJsZXNcIiwhMCkpfSksdCl9LHBvc3REaXNwYXRjaDpmdW5jdGlvbihlKXtlLl9zdWJtaXRfYnViYmxlJiYoZGVsZXRlIGUuX3N1Ym1pdF9idWJibGUsdGhpcy5wYXJlbnROb2RlJiYhZS5pc1RyaWdnZXImJmIuZXZlbnQuc2ltdWxhdGUoXCJzdWJtaXRcIix0aGlzLnBhcmVudE5vZGUsZSwhMCkpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3JldHVybiBiLm5vZGVOYW1lKHRoaXMsXCJmb3JtXCIpPyExOihiLmV2ZW50LnJlbW92ZSh0aGlzLFwiLl9zdWJtaXRcIiksdCl9fSksYi5zdXBwb3J0LmNoYW5nZUJ1YmJsZXN8fChiLmV2ZW50LnNwZWNpYWwuY2hhbmdlPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiBaLnRlc3QodGhpcy5ub2RlTmFtZSk/KChcImNoZWNrYm94XCI9PT10aGlzLnR5cGV8fFwicmFkaW9cIj09PXRoaXMudHlwZSkmJihiLmV2ZW50LmFkZCh0aGlzLFwicHJvcGVydHljaGFuZ2UuX2NoYW5nZVwiLGZ1bmN0aW9uKGUpe1wiY2hlY2tlZFwiPT09ZS5vcmlnaW5hbEV2ZW50LnByb3BlcnR5TmFtZSYmKHRoaXMuX2p1c3RfY2hhbmdlZD0hMCl9KSxiLmV2ZW50LmFkZCh0aGlzLFwiY2xpY2suX2NoYW5nZVwiLGZ1bmN0aW9uKGUpe3RoaXMuX2p1c3RfY2hhbmdlZCYmIWUuaXNUcmlnZ2VyJiYodGhpcy5fanVzdF9jaGFuZ2VkPSExKSxiLmV2ZW50LnNpbXVsYXRlKFwiY2hhbmdlXCIsdGhpcyxlLCEwKX0pKSwhMSk6KGIuZXZlbnQuYWRkKHRoaXMsXCJiZWZvcmVhY3RpdmF0ZS5fY2hhbmdlXCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7Wi50ZXN0KHQubm9kZU5hbWUpJiYhYi5fZGF0YSh0LFwiY2hhbmdlQnViYmxlc1wiKSYmKGIuZXZlbnQuYWRkKHQsXCJjaGFuZ2UuX2NoYW5nZVwiLGZ1bmN0aW9uKGUpeyF0aGlzLnBhcmVudE5vZGV8fGUuaXNTaW11bGF0ZWR8fGUuaXNUcmlnZ2VyfHxiLmV2ZW50LnNpbXVsYXRlKFwiY2hhbmdlXCIsdGhpcy5wYXJlbnROb2RlLGUsITApfSksYi5fZGF0YSh0LFwiY2hhbmdlQnViYmxlc1wiLCEwKSl9KSx0KX0saGFuZGxlOmZ1bmN0aW9uKGUpe3ZhciBuPWUudGFyZ2V0O3JldHVybiB0aGlzIT09bnx8ZS5pc1NpbXVsYXRlZHx8ZS5pc1RyaWdnZXJ8fFwicmFkaW9cIiE9PW4udHlwZSYmXCJjaGVja2JveFwiIT09bi50eXBlP2UuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOnR9LHRlYXJkb3duOmZ1bmN0aW9uKCl7cmV0dXJuIGIuZXZlbnQucmVtb3ZlKHRoaXMsXCIuX2NoYW5nZVwiKSwhWi50ZXN0KHRoaXMubm9kZU5hbWUpfX0pLGIuc3VwcG9ydC5mb2N1c2luQnViYmxlc3x8Yi5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oZSx0KXt2YXIgbj0wLHI9ZnVuY3Rpb24oZSl7Yi5ldmVudC5zaW11bGF0ZSh0LGUudGFyZ2V0LGIuZXZlbnQuZml4KGUpLCEwKX07Yi5ldmVudC5zcGVjaWFsW3RdPXtzZXR1cDpmdW5jdGlvbigpezA9PT1uKysmJm8uYWRkRXZlbnRMaXN0ZW5lcihlLHIsITApfSx0ZWFyZG93bjpmdW5jdGlvbigpezA9PT0tLW4mJm8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHIsITApfX19KSxiLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oZSxuLHIsaSxvKXt2YXIgYSxzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXtcInN0cmluZ1wiIT10eXBlb2YgbiYmKHI9cnx8bixuPXQpO2ZvcihhIGluIGUpdGhpcy5vbihhLG4scixlW2FdLG8pO3JldHVybiB0aGlzfWlmKG51bGw9PXImJm51bGw9PWk/KGk9bixyPW49dCk6bnVsbD09aSYmKFwic3RyaW5nXCI9PXR5cGVvZiBuPyhpPXIscj10KTooaT1yLHI9bixuPXQpKSxpPT09ITEpaT1vdDtlbHNlIGlmKCFpKXJldHVybiB0aGlzO3JldHVybiAxPT09byYmKHM9aSxpPWZ1bmN0aW9uKGUpe3JldHVybiBiKCkub2ZmKGUpLHMuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxpLmd1aWQ9cy5ndWlkfHwocy5ndWlkPWIuZ3VpZCsrKSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5ldmVudC5hZGQodGhpcyxlLGkscixuKX0pfSxvbmU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24oZSx0LG4sciwxKX0sb2ZmOmZ1bmN0aW9uKGUsbixyKXt2YXIgaSxvO2lmKGUmJmUucHJldmVudERlZmF1bHQmJmUuaGFuZGxlT2JqKXJldHVybiBpPWUuaGFuZGxlT2JqLGIoZS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGkubmFtZXNwYWNlP2kub3JpZ1R5cGUrXCIuXCIraS5uYW1lc3BhY2U6aS5vcmlnVHlwZSxpLnNlbGVjdG9yLGkuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7Zm9yKG8gaW4gZSl0aGlzLm9mZihvLG4sZVtvXSk7cmV0dXJuIHRoaXN9cmV0dXJuKG49PT0hMXx8XCJmdW5jdGlvblwiPT10eXBlb2YgbikmJihyPW4sbj10KSxyPT09ITEmJihyPW90KSx0aGlzLmVhY2goZnVuY3Rpb24oKXtiLmV2ZW50LnJlbW92ZSh0aGlzLGUscixuKX0pfSxiaW5kOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5vbihlLG51bGwsdCxuKX0sdW5iaW5kOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMub2ZmKGUsbnVsbCx0KX0sZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24odCxlLG4scil9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihlLFwiKipcIik6dGhpcy5vZmYodCxlfHxcIioqXCIsbil9LHRyaWdnZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5ldmVudC50cmlnZ2VyKGUsdCx0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihlLG4pe3ZhciByPXRoaXNbMF07cmV0dXJuIHI/Yi5ldmVudC50cmlnZ2VyKGUsbixyLCEwKTp0fX0pLGZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsbCxjLHAsZixkLGgsZyxtLHksdix4PVwic2l6emxlXCIrLW5ldyBEYXRlLHc9ZS5kb2N1bWVudCxUPXt9LE49MCxDPTAsaz1pdCgpLEU9aXQoKSxTPWl0KCksQT10eXBlb2YgdCxqPTE8PDMxLEQ9W10sTD1ELnBvcCxIPUQucHVzaCxxPUQuc2xpY2UsTT1ELmluZGV4T2Z8fGZ1bmN0aW9uKGUpe3ZhciB0PTAsbj10aGlzLmxlbmd0aDtmb3IoO24+dDt0KyspaWYodGhpc1t0XT09PWUpcmV0dXJuIHQ7cmV0dXJuLTF9LF89XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLEY9XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXFxceDAwLVxcXFx4YTBdKStcIixPPUYucmVwbGFjZShcIndcIixcIncjXCIpLEI9XCIoWypeJHwhfl0/PSlcIixQPVwiXFxcXFtcIitfK1wiKihcIitGK1wiKVwiK18rXCIqKD86XCIrQitfK1wiKig/OihbJ1xcXCJdKSgoPzpcXFxcXFxcXC58W15cXFxcXFxcXF0pKj8pXFxcXDN8KFwiK08rXCIpfCl8KVwiK18rXCIqXFxcXF1cIixSPVwiOihcIitGK1wiKSg/OlxcXFwoKChbJ1xcXCJdKSgoPzpcXFxcXFxcXC58W15cXFxcXFxcXF0pKj8pXFxcXDN8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK1AucmVwbGFjZSgzLDgpK1wiKSopfC4qKVxcXFwpfClcIixXPVJlZ0V4cChcIl5cIitfK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitfK1wiKyRcIixcImdcIiksJD1SZWdFeHAoXCJeXCIrXytcIiosXCIrXytcIipcIiksST1SZWdFeHAoXCJeXCIrXytcIiooW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZj4rfl0pXCIrXytcIipcIiksej1SZWdFeHAoUiksWD1SZWdFeHAoXCJeXCIrTytcIiRcIiksVT17SUQ6UmVnRXhwKFwiXiMoXCIrRitcIilcIiksQ0xBU1M6UmVnRXhwKFwiXlxcXFwuKFwiK0YrXCIpXCIpLE5BTUU6UmVnRXhwKFwiXlxcXFxbbmFtZT1bJ1xcXCJdPyhcIitGK1wiKVsnXFxcIl0/XFxcXF1cIiksVEFHOlJlZ0V4cChcIl4oXCIrRi5yZXBsYWNlKFwid1wiLFwidypcIikrXCIpXCIpLEFUVFI6UmVnRXhwKFwiXlwiK1ApLFBTRVVETzpSZWdFeHAoXCJeXCIrUiksQ0hJTEQ6UmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitfK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrXytcIiooPzooWystXXwpXCIrXytcIiooXFxcXGQrKXwpKVwiK18rXCIqXFxcXCl8KVwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6UmVnRXhwKFwiXlwiK18rXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK18rXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK18rXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFY9L1tcXHgyMFxcdFxcclxcblxcZl0qWyt+XS8sWT0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBjb2RlLyxKPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLEc9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxRPS9eaFxcZCQvaSxLPS8nfFxcXFwvZyxaPS9cXD1bXFx4MjBcXHRcXHJcXG5cXGZdKihbXidcIlxcXV0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFxdL2csZXQ9L1xcXFwoW1xcZGEtZkEtRl17MSw2fVtcXHgyMFxcdFxcclxcblxcZl0/fC4pL2csdHQ9ZnVuY3Rpb24oZSx0KXt2YXIgbj1cIjB4XCIrdC02NTUzNjtyZXR1cm4gbiE9PW4/dDowPm4/U3RyaW5nLmZyb21DaGFyQ29kZShuKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2fG4+PjEwLDU2MzIwfDEwMjMmbil9O3RyeXtxLmNhbGwody5kb2N1bWVudEVsZW1lbnQuY2hpbGROb2RlcywwKVswXS5ub2RlVHlwZX1jYXRjaChudCl7cT1mdW5jdGlvbihlKXt2YXIgdCxuPVtdO3doaWxlKHQ9dGhpc1tlKytdKW4ucHVzaCh0KTtyZXR1cm4gbn19ZnVuY3Rpb24gcnQoZSl7cmV0dXJuIFkudGVzdChlK1wiXCIpfWZ1bmN0aW9uIGl0KCl7dmFyIGUsdD1bXTtyZXR1cm4gZT1mdW5jdGlvbihuLHIpe3JldHVybiB0LnB1c2gobis9XCIgXCIpPmkuY2FjaGVMZW5ndGgmJmRlbGV0ZSBlW3Quc2hpZnQoKV0sZVtuXT1yfX1mdW5jdGlvbiBvdChlKXtyZXR1cm4gZVt4XT0hMCxlfWZ1bmN0aW9uIGF0KGUpe3ZhciB0PXAuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7cmV0dXJuIGUodCl9Y2F0Y2gobil7cmV0dXJuITF9ZmluYWxseXt0PW51bGx9fWZ1bmN0aW9uIHN0KGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbCxmLGcsbSx2O2lmKCh0P3Qub3duZXJEb2N1bWVudHx8dDp3KSE9PXAmJmModCksdD10fHxwLG49bnx8W10sIWV8fFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBuO2lmKDEhPT0ocz10Lm5vZGVUeXBlKSYmOSE9PXMpcmV0dXJuW107aWYoIWQmJiFyKXtpZihpPUouZXhlYyhlKSlpZihhPWlbMV0pe2lmKDk9PT1zKXtpZihvPXQuZ2V0RWxlbWVudEJ5SWQoYSksIW98fCFvLnBhcmVudE5vZGUpcmV0dXJuIG47aWYoby5pZD09PWEpcmV0dXJuIG4ucHVzaChvKSxufWVsc2UgaWYodC5vd25lckRvY3VtZW50JiYobz10Lm93bmVyRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSkpJiZ5KHQsbykmJm8uaWQ9PT1hKXJldHVybiBuLnB1c2gobyksbn1lbHNle2lmKGlbMl0pcmV0dXJuIEguYXBwbHkobixxLmNhbGwodC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKSwwKSksbjtpZigoYT1pWzNdKSYmVC5nZXRCeUNsYXNzTmFtZSYmdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KG4scS5jYWxsKHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKSwwKSksbn1pZihULnFzYSYmIWgudGVzdChlKSl7aWYoZj0hMCxnPXgsbT10LHY9OT09PXMmJmUsMT09PXMmJlwib2JqZWN0XCIhPT10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe2w9ZnQoZSksKGY9dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/Zz1mLnJlcGxhY2UoSyxcIlxcXFwkJlwiKTp0LnNldEF0dHJpYnV0ZShcImlkXCIsZyksZz1cIltpZD0nXCIrZytcIiddIFwiLHU9bC5sZW5ndGg7d2hpbGUodS0tKWxbdV09ZytkdChsW3VdKTttPVYudGVzdChlKSYmdC5wYXJlbnROb2RlfHx0LHY9bC5qb2luKFwiLFwiKX1pZih2KXRyeXtyZXR1cm4gSC5hcHBseShuLHEuY2FsbChtLnF1ZXJ5U2VsZWN0b3JBbGwodiksMCkpLG59Y2F0Y2goYil7fWZpbmFsbHl7Znx8dC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiB3dChlLnJlcGxhY2UoVyxcIiQxXCIpLHQsbixyKX1hPXN0LmlzWE1MPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJihlLm93bmVyRG9jdW1lbnR8fGUpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4gdD9cIkhUTUxcIiE9PXQubm9kZU5hbWU6ITF9LGM9c3Quc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIG49ZT9lLm93bmVyRG9jdW1lbnR8fGU6dztyZXR1cm4gbiE9PXAmJjk9PT1uLm5vZGVUeXBlJiZuLmRvY3VtZW50RWxlbWVudD8ocD1uLGY9bi5kb2N1bWVudEVsZW1lbnQsZD1hKG4pLFQudGFnTmFtZU5vQ29tbWVudHM9YXQoZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXBwZW5kQ2hpbGQobi5jcmVhdGVDb21tZW50KFwiXCIpKSwhZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksVC5hdHRyaWJ1dGVzPWF0KGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiPHNlbGVjdD48L3NlbGVjdD5cIjt2YXIgdD10eXBlb2YgZS5sYXN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIik7cmV0dXJuXCJib29sZWFuXCIhPT10JiZcInN0cmluZ1wiIT09dH0pLFQuZ2V0QnlDbGFzc05hbWU9YXQoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGRpdiBjbGFzcz0naGlkZGVuIGUnPjwvZGl2PjxkaXYgY2xhc3M9J2hpZGRlbic+PC9kaXY+XCIsZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlXCIpLmxlbmd0aD8oZS5sYXN0Q2hpbGQuY2xhc3NOYW1lPVwiZVwiLDI9PT1lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlXCIpLmxlbmd0aCk6ITF9KSxULmdldEJ5TmFtZT1hdChmdW5jdGlvbihlKXtlLmlkPXgrMCxlLmlubmVySFRNTD1cIjxhIG5hbWU9J1wiK3grXCInPjwvYT48ZGl2IG5hbWU9J1wiK3grXCInPjwvZGl2PlwiLGYuaW5zZXJ0QmVmb3JlKGUsZi5maXJzdENoaWxkKTt2YXIgdD1uLmdldEVsZW1lbnRzQnlOYW1lJiZuLmdldEVsZW1lbnRzQnlOYW1lKHgpLmxlbmd0aD09PTIrbi5nZXRFbGVtZW50c0J5TmFtZSh4KzApLmxlbmd0aDtyZXR1cm4gVC5nZXRJZE5vdE5hbWU9IW4uZ2V0RWxlbWVudEJ5SWQoeCksZi5yZW1vdmVDaGlsZChlKSx0fSksaS5hdHRySGFuZGxlPWF0KGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixlLmZpcnN0Q2hpbGQmJnR5cGVvZiBlLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlIT09QSYmXCIjXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pP3t9OntocmVmOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImhyZWZcIiwyKX0sdHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpfX0sVC5nZXRJZE5vdE5hbWU/KGkuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKHR5cGVvZiB0LmdldEVsZW1lbnRCeUlkIT09QSYmIWQpe3ZhciBuPXQuZ2V0RWxlbWVudEJ5SWQoZSk7cmV0dXJuIG4mJm4ucGFyZW50Tm9kZT9bbl06W119fSxpLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UoZXQsdHQpO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PXR9fSk6KGkuZmluZC5JRD1mdW5jdGlvbihlLG4pe2lmKHR5cGVvZiBuLmdldEVsZW1lbnRCeUlkIT09QSYmIWQpe3ZhciByPW4uZ2V0RWxlbWVudEJ5SWQoZSk7cmV0dXJuIHI/ci5pZD09PWV8fHR5cGVvZiByLmdldEF0dHJpYnV0ZU5vZGUhPT1BJiZyLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKS52YWx1ZT09PWU/W3JdOnQ6W119fSxpLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UoZXQsdHQpO3JldHVybiBmdW5jdGlvbihlKXt2YXIgbj10eXBlb2YgZS5nZXRBdHRyaWJ1dGVOb2RlIT09QSYmZS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIG4mJm4udmFsdWU9PT10fX0pLGkuZmluZC5UQUc9VC50YWdOYW1lTm9Db21tZW50cz9mdW5jdGlvbihlLG4pe3JldHVybiB0eXBlb2Ygbi5nZXRFbGVtZW50c0J5VGFnTmFtZSE9PUE/bi5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTp0fTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT0wLG89dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTtpZihcIipcIj09PWUpe3doaWxlKG49b1tpKytdKTE9PT1uLm5vZGVUeXBlJiZyLnB1c2gobik7cmV0dXJuIHJ9cmV0dXJuIG99LGkuZmluZC5OQU1FPVQuZ2V0QnlOYW1lJiZmdW5jdGlvbihlLG4pe3JldHVybiB0eXBlb2Ygbi5nZXRFbGVtZW50c0J5TmFtZSE9PUE/bi5nZXRFbGVtZW50c0J5TmFtZShuYW1lKTp0fSxpLmZpbmQuQ0xBU1M9VC5nZXRCeUNsYXNzTmFtZSYmZnVuY3Rpb24oZSxuKXtyZXR1cm4gdHlwZW9mIG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT09PUF8fGQ/dDpuLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZSl9LGc9W10saD1bXCI6Zm9jdXNcIl0sKFQucXNhPXJ0KG4ucXVlcnlTZWxlY3RvckFsbCkpJiYoYXQoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8c2VsZWN0PjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsZS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fGgucHVzaChcIlxcXFxbXCIrXytcIiooPzpjaGVja2VkfGRpc2FibGVkfGlzbWFwfG11bHRpcGxlfHJlYWRvbmx5fHNlbGVjdGVkfHZhbHVlKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fGgucHVzaChcIjpjaGVja2VkXCIpfSksYXQoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8aW5wdXQgdHlwZT0naGlkZGVuJyBpPScnLz5cIixlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaV49JyddXCIpLmxlbmd0aCYmaC5wdXNoKFwiWypeJF09XCIrXytcIiooPzpcXFwiXFxcInwnJylcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RofHxoLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIiksaC5wdXNoKFwiLC4qOlwiKX0pKSwoVC5tYXRjaGVzU2VsZWN0b3I9cnQobT1mLm1hdGNoZXNTZWxlY3Rvcnx8Zi5tb3pNYXRjaGVzU2VsZWN0b3J8fGYud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxmLm9NYXRjaGVzU2VsZWN0b3J8fGYubXNNYXRjaGVzU2VsZWN0b3IpKSYmYXQoZnVuY3Rpb24oZSl7VC5kaXNjb25uZWN0ZWRNYXRjaD1tLmNhbGwoZSxcImRpdlwiKSxtLmNhbGwoZSxcIltzIT0nJ106eFwiKSxnLnB1c2goXCIhPVwiLFIpfSksaD1SZWdFeHAoaC5qb2luKFwifFwiKSksZz1SZWdFeHAoZy5qb2luKFwifFwiKSkseT1ydChmLmNvbnRhaW5zKXx8Zi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj9mdW5jdGlvbihlLHQpe3ZhciBuPTk9PT1lLm5vZGVUeXBlP2UuZG9jdW1lbnRFbGVtZW50OmUscj10JiZ0LnBhcmVudE5vZGU7cmV0dXJuIGU9PT1yfHwhKCFyfHwxIT09ci5ub2RlVHlwZXx8IShuLmNvbnRhaW5zP24uY29udGFpbnMocik6ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihyKSkpfTpmdW5jdGlvbihlLHQpe2lmKHQpd2hpbGUodD10LnBhcmVudE5vZGUpaWYodD09PWUpcmV0dXJuITA7cmV0dXJuITF9LHY9Zi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj9mdW5jdGlvbihlLHQpe3ZhciByO3JldHVybiBlPT09dD8odT0hMCwwKToocj10LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHQpKT8xJnJ8fGUucGFyZW50Tm9kZSYmMTE9PT1lLnBhcmVudE5vZGUubm9kZVR5cGU/ZT09PW58fHkodyxlKT8tMTp0PT09bnx8eSh3LHQpPzE6MDo0JnI/LTE6MTplLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uPy0xOjF9OmZ1bmN0aW9uKGUsdCl7dmFyIHIsaT0wLG89ZS5wYXJlbnROb2RlLGE9dC5wYXJlbnROb2RlLHM9W2VdLGw9W3RdO2lmKGU9PT10KXJldHVybiB1PSEwLDA7aWYoIW98fCFhKXJldHVybiBlPT09bj8tMTp0PT09bj8xOm8/LTE6YT8xOjA7aWYobz09PWEpcmV0dXJuIHV0KGUsdCk7cj1lO3doaWxlKHI9ci5wYXJlbnROb2RlKXMudW5zaGlmdChyKTtyPXQ7d2hpbGUocj1yLnBhcmVudE5vZGUpbC51bnNoaWZ0KHIpO3doaWxlKHNbaV09PT1sW2ldKWkrKztyZXR1cm4gaT91dChzW2ldLGxbaV0pOnNbaV09PT13Py0xOmxbaV09PT13PzE6MH0sdT0hMSxbMCwwXS5zb3J0KHYpLFQuZGV0ZWN0RHVwbGljYXRlcz11LHApOnB9LHN0Lm1hdGNoZXM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gc3QoZSxudWxsLG51bGwsdCl9LHN0Lm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihlLHQpe2lmKChlLm93bmVyRG9jdW1lbnR8fGUpIT09cCYmYyhlKSx0PXQucmVwbGFjZShaLFwiPSckMSddXCIpLCEoIVQubWF0Y2hlc1NlbGVjdG9yfHxkfHxnJiZnLnRlc3QodCl8fGgudGVzdCh0KSkpdHJ5e3ZhciBuPW0uY2FsbChlLHQpO2lmKG58fFQuZGlzY29ubmVjdGVkTWF0Y2h8fGUuZG9jdW1lbnQmJjExIT09ZS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gbn1jYXRjaChyKXt9cmV0dXJuIHN0KHQscCxudWxsLFtlXSkubGVuZ3RoPjB9LHN0LmNvbnRhaW5zPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPT1wJiZjKGUpLHkoZSx0KX0sc3QuYXR0cj1mdW5jdGlvbihlLHQpe3ZhciBuO3JldHVybihlLm93bmVyRG9jdW1lbnR8fGUpIT09cCYmYyhlKSxkfHwodD10LnRvTG93ZXJDYXNlKCkpLChuPWkuYXR0ckhhbmRsZVt0XSk/bihlKTpkfHxULmF0dHJpYnV0ZXM/ZS5nZXRBdHRyaWJ1dGUodCk6KChuPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSl8fGUuZ2V0QXR0cmlidXRlKHQpKSYmZVt0XT09PSEwP3Q6biYmbi5zcGVjaWZpZWQ/bi52YWx1ZTpudWxsfSxzdC5lcnJvcj1mdW5jdGlvbihlKXt0aHJvdyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2UpfSxzdC51bmlxdWVTb3J0PWZ1bmN0aW9uKGUpe3ZhciB0LG49W10scj0xLGk9MDtpZih1PSFULmRldGVjdER1cGxpY2F0ZXMsZS5zb3J0KHYpLHUpe2Zvcig7dD1lW3JdO3IrKyl0PT09ZVtyLTFdJiYoaT1uLnB1c2gocikpO3doaWxlKGktLSllLnNwbGljZShuW2ldLDEpfXJldHVybiBlfTtmdW5jdGlvbiB1dChlLHQpe3ZhciBuPXQmJmUscj1uJiYofnQuc291cmNlSW5kZXh8fGopLSh+ZS5zb3VyY2VJbmRleHx8aik7aWYocilyZXR1cm4gcjtpZihuKXdoaWxlKG49bi5uZXh0U2libGluZylpZihuPT09dClyZXR1cm4tMTtyZXR1cm4gZT8xOi0xfWZ1bmN0aW9uIGx0KGUpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09biYmdC50eXBlPT09ZX19ZnVuY3Rpb24gY3QoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09bnx8XCJidXR0b25cIj09PW4pJiZ0LnR5cGU9PT1lfX1mdW5jdGlvbiBwdChlKXtyZXR1cm4gb3QoZnVuY3Rpb24odCl7cmV0dXJuIHQ9K3Qsb3QoZnVuY3Rpb24obixyKXt2YXIgaSxvPWUoW10sbi5sZW5ndGgsdCksYT1vLmxlbmd0aDt3aGlsZShhLS0pbltpPW9bYV1dJiYobltpXT0hKHJbaV09bltpXSkpfSl9KX1vPXN0LmdldFRleHQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1cIlwiLHI9MCxpPWUubm9kZVR5cGU7aWYoaSl7aWYoMT09PWl8fDk9PT1pfHwxMT09PWkpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlLnRleHRDb250ZW50KXJldHVybiBlLnRleHRDb250ZW50O2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZyluKz1vKGUpfWVsc2UgaWYoMz09PWl8fDQ9PT1pKXJldHVybiBlLm5vZGVWYWx1ZX1lbHNlIGZvcig7dD1lW3JdO3IrKyluKz1vKHQpO3JldHVybiBufSxpPXN0LnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOm90LG1hdGNoOlUsZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS5yZXBsYWNlKGV0LHR0KSxlWzNdPShlWzRdfHxlWzVdfHxcIlwiKS5yZXBsYWNlKGV0LHR0KSxcIn49XCI9PT1lWzJdJiYoZVszXT1cIiBcIitlWzNdK1wiIFwiKSxlLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09ZVsxXS5zbGljZSgwLDMpPyhlWzNdfHxzdC5lcnJvcihlWzBdKSxlWzRdPSsoZVs0XT9lWzVdKyhlWzZdfHwxKToyKihcImV2ZW5cIj09PWVbM118fFwib2RkXCI9PT1lWzNdKSksZVs1XT0rKGVbN10rZVs4XXx8XCJvZGRcIj09PWVbM10pKTplWzNdJiZzdC5lcnJvcihlWzBdKSxlfSxQU0VVRE86ZnVuY3Rpb24oZSl7dmFyIHQsbj0hZVs1XSYmZVsyXTtyZXR1cm4gVS5DSElMRC50ZXN0KGVbMF0pP251bGw6KGVbNF0/ZVsyXT1lWzRdOm4mJnoudGVzdChuKSYmKHQ9ZnQobiwhMCkpJiYodD1uLmluZGV4T2YoXCIpXCIsbi5sZW5ndGgtdCktbi5sZW5ndGgpJiYoZVswXT1lWzBdLnNsaWNlKDAsdCksZVsyXT1uLnNsaWNlKDAsdCkpLGUuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihlKXtyZXR1cm5cIipcIj09PWU/ZnVuY3Rpb24oKXtyZXR1cm4hMH06KGU9ZS5yZXBsYWNlKGV0LHR0KS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKHQpe3JldHVybiB0Lm5vZGVOYW1lJiZ0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1lfSl9LENMQVNTOmZ1bmN0aW9uKGUpe3ZhciB0PWtbZStcIiBcIl07cmV0dXJuIHR8fCh0PVJlZ0V4cChcIihefFwiK18rXCIpXCIrZStcIihcIitfK1wifCQpXCIpKSYmayhlLGZ1bmN0aW9uKGUpe3JldHVybiB0LnRlc3QoZS5jbGFzc05hbWV8fHR5cGVvZiBlLmdldEF0dHJpYnV0ZSE9PUEmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBmdW5jdGlvbihyKXt2YXIgaT1zdC5hdHRyKHIsZSk7cmV0dXJuIG51bGw9PWk/XCIhPVwiPT09dDp0PyhpKz1cIlwiLFwiPVwiPT09dD9pPT09bjpcIiE9XCI9PT10P2khPT1uOlwiXj1cIj09PXQ/biYmMD09PWkuaW5kZXhPZihuKTpcIio9XCI9PT10P24mJmkuaW5kZXhPZihuKT4tMTpcIiQ9XCI9PT10P24mJmkuc2xpY2UoLW4ubGVuZ3RoKT09PW46XCJ+PVwiPT09dD8oXCIgXCIraStcIiBcIikuaW5kZXhPZihuKT4tMTpcInw9XCI9PT10P2k9PT1ufHxpLnNsaWNlKDAsbi5sZW5ndGgrMSk9PT1uK1wiLVwiOiExKTohMH19LENISUxEOmZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG89XCJudGhcIiE9PWUuc2xpY2UoMCwzKSxhPVwibGFzdFwiIT09ZS5zbGljZSgtNCkscz1cIm9mLXR5cGVcIj09PXQ7cmV0dXJuIDE9PT1yJiYwPT09aT9mdW5jdGlvbihlKXtyZXR1cm4hIWUucGFyZW50Tm9kZX06ZnVuY3Rpb24odCxuLHUpe3ZhciBsLGMscCxmLGQsaCxnPW8hPT1hP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLG09dC5wYXJlbnROb2RlLHk9cyYmdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHY9IXUmJiFzO2lmKG0pe2lmKG8pe3doaWxlKGcpe3A9dDt3aGlsZShwPXBbZ10paWYocz9wLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT15OjE9PT1wLm5vZGVUeXBlKXJldHVybiExO2g9Zz1cIm9ubHlcIj09PWUmJiFoJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYoaD1bYT9tLmZpcnN0Q2hpbGQ6bS5sYXN0Q2hpbGRdLGEmJnYpe2M9bVt4XXx8KG1beF09e30pLGw9Y1tlXXx8W10sZD1sWzBdPT09TiYmbFsxXSxmPWxbMF09PT1OJiZsWzJdLHA9ZCYmbS5jaGlsZE5vZGVzW2RdO3doaWxlKHA9KytkJiZwJiZwW2ddfHwoZj1kPTApfHxoLnBvcCgpKWlmKDE9PT1wLm5vZGVUeXBlJiYrK2YmJnA9PT10KXtjW2VdPVtOLGQsZl07YnJlYWt9fWVsc2UgaWYodiYmKGw9KHRbeF18fCh0W3hdPXt9KSlbZV0pJiZsWzBdPT09TilmPWxbMV07ZWxzZSB3aGlsZShwPSsrZCYmcCYmcFtnXXx8KGY9ZD0wKXx8aC5wb3AoKSlpZigocz9wLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT15OjE9PT1wLm5vZGVUeXBlKSYmKytmJiYodiYmKChwW3hdfHwocFt4XT17fSkpW2VdPVtOLGZdKSxwPT09dCkpYnJlYWs7cmV0dXJuIGYtPWksZj09PXJ8fDA9PT1mJXImJmYvcj49MH19fSxQU0VVRE86ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWkucHNldWRvc1tlXXx8aS5zZXRGaWx0ZXJzW2UudG9Mb3dlckNhc2UoKV18fHN0LmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIitlKTtyZXR1cm4gclt4XT9yKHQpOnIubGVuZ3RoPjE/KG49W2UsZSxcIlwiLHRdLGkuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShlLnRvTG93ZXJDYXNlKCkpP290KGZ1bmN0aW9uKGUsbil7dmFyIGksbz1yKGUsdCksYT1vLmxlbmd0aDt3aGlsZShhLS0paT1NLmNhbGwoZSxvW2FdKSxlW2ldPSEobltpXT1vW2FdKX0pOmZ1bmN0aW9uKGUpe3JldHVybiByKGUsMCxuKX0pOnJ9fSxwc2V1ZG9zOntub3Q6b3QoZnVuY3Rpb24oZSl7dmFyIHQ9W10sbj1bXSxyPXMoZS5yZXBsYWNlKFcsXCIkMVwiKSk7cmV0dXJuIHJbeF0/b3QoZnVuY3Rpb24oZSx0LG4saSl7dmFyIG8sYT1yKGUsbnVsbCxpLFtdKSxzPWUubGVuZ3RoO3doaWxlKHMtLSkobz1hW3NdKSYmKGVbc109ISh0W3NdPW8pKX0pOmZ1bmN0aW9uKGUsaSxvKXtyZXR1cm4gdFswXT1lLHIodCxudWxsLG8sbiksIW4ucG9wKCl9fSksaGFzOm90KGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gc3QoZSx0KS5sZW5ndGg+MH19KSxjb250YWluczpvdChmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuKHQudGV4dENvbnRlbnR8fHQuaW5uZXJUZXh0fHxvKHQpKS5pbmRleE9mKGUpPi0xfX0pLGxhbmc6b3QoZnVuY3Rpb24oZSl7cmV0dXJuIFgudGVzdChlfHxcIlwiKXx8c3QuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIitlKSxlPWUucmVwbGFjZShldCx0dCkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbih0KXt2YXIgbjtkbyBpZihuPWQ/dC5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8dC5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpOnQubGFuZylyZXR1cm4gbj1uLnRvTG93ZXJDYXNlKCksbj09PWV8fDA9PT1uLmluZGV4T2YoZStcIi1cIik7d2hpbGUoKHQ9dC5wYXJlbnROb2RlKSYmMT09PXQubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbih0KXt2YXIgbj1lLmxvY2F0aW9uJiZlLmxvY2F0aW9uLmhhc2g7cmV0dXJuIG4mJm4uc2xpY2UoMSk9PT10LmlkfSxyb290OmZ1bmN0aW9uKGUpe3JldHVybiBlPT09Zn0sZm9jdXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1wLmFjdGl2ZUVsZW1lbnQmJighcC5oYXNGb2N1c3x8cC5oYXNGb2N1cygpKSYmISEoZS50eXBlfHxlLmhyZWZ8fH5lLnRhYkluZGV4KX0sZW5hYmxlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5kaXNhYmxlZD09PSExfSxkaXNhYmxlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5kaXNhYmxlZD09PSEwfSxjaGVja2VkOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiYhIWUuY2hlY2tlZHx8XCJvcHRpb25cIj09PXQmJiEhZS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsZS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihlKXtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpaWYoZS5ub2RlTmFtZT5cIkBcInx8Mz09PWUubm9kZVR5cGV8fDQ9PT1lLm5vZGVUeXBlKXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIWkucHNldWRvcy5lbXB0eShlKX0saGVhZGVyOmZ1bmN0aW9uKGUpe3JldHVybiBRLnRlc3QoZS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGUpe3JldHVybiBHLnRlc3QoZS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmXCJidXR0b25cIj09PWUudHlwZXx8XCJidXR0b25cIj09PXR9LHRleHQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWUudHlwZSYmKG51bGw9PSh0PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fHQudG9Mb3dlckNhc2UoKT09PWUudHlwZSl9LGZpcnN0OnB0KGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpwdChmdW5jdGlvbihlLHQpe3JldHVyblt0LTFdfSksZXE6cHQoZnVuY3Rpb24oZSx0LG4pe3JldHVyblswPm4/bit0Om5dfSksZXZlbjpwdChmdW5jdGlvbihlLHQpe3ZhciBuPTA7Zm9yKDt0Pm47bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxvZGQ6cHQoZnVuY3Rpb24oZSx0KXt2YXIgbj0xO2Zvcig7dD5uO24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksbHQ6cHQoZnVuY3Rpb24oZSx0LG4pe3ZhciByPTA+bj9uK3Q6bjtmb3IoOy0tcj49MDspZS5wdXNoKHIpO3JldHVybiBlfSksZ3Q6cHQoZnVuY3Rpb24oZSx0LG4pe3ZhciByPTA+bj9uK3Q6bjtmb3IoO3Q+KytyOyllLnB1c2gocik7cmV0dXJuIGV9KX19O2ZvcihuIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWkucHNldWRvc1tuXT1sdChuKTtmb3IobiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWkucHNldWRvc1tuXT1jdChuKTtmdW5jdGlvbiBmdChlLHQpe3ZhciBuLHIsbyxhLHMsdSxsLGM9RVtlK1wiIFwiXTtpZihjKXJldHVybiB0PzA6Yy5zbGljZSgwKTtzPWUsdT1bXSxsPWkucHJlRmlsdGVyO3doaWxlKHMpeyghbnx8KHI9JC5leGVjKHMpKSkmJihyJiYocz1zLnNsaWNlKHJbMF0ubGVuZ3RoKXx8cyksdS5wdXNoKG89W10pKSxuPSExLChyPUkuZXhlYyhzKSkmJihuPXIuc2hpZnQoKSxvLnB1c2goe3ZhbHVlOm4sdHlwZTpyWzBdLnJlcGxhY2UoVyxcIiBcIil9KSxzPXMuc2xpY2Uobi5sZW5ndGgpKTtmb3IoYSBpbiBpLmZpbHRlcikhKHI9VVthXS5leGVjKHMpKXx8bFthXSYmIShyPWxbYV0ocikpfHwobj1yLnNoaWZ0KCksby5wdXNoKHt2YWx1ZTpuLHR5cGU6YSxtYXRjaGVzOnJ9KSxzPXMuc2xpY2Uobi5sZW5ndGgpKTtpZighbilicmVha31yZXR1cm4gdD9zLmxlbmd0aDpzP3N0LmVycm9yKGUpOkUoZSx1KS5zbGljZSgwKX1mdW5jdGlvbiBkdChlKXt2YXIgdD0wLG49ZS5sZW5ndGgscj1cIlwiO2Zvcig7bj50O3QrKylyKz1lW3RdLnZhbHVlO3JldHVybiByfWZ1bmN0aW9uIGh0KGUsdCxuKXt2YXIgaT10LmRpcixvPW4mJlwicGFyZW50Tm9kZVwiPT09aSxhPUMrKztyZXR1cm4gdC5maXJzdD9mdW5jdGlvbih0LG4scil7d2hpbGUodD10W2ldKWlmKDE9PT10Lm5vZGVUeXBlfHxvKXJldHVybiBlKHQsbixyKX06ZnVuY3Rpb24odCxuLHMpe3ZhciB1LGwsYyxwPU4rXCIgXCIrYTtpZihzKXt3aGlsZSh0PXRbaV0paWYoKDE9PT10Lm5vZGVUeXBlfHxvKSYmZSh0LG4scykpcmV0dXJuITB9ZWxzZSB3aGlsZSh0PXRbaV0paWYoMT09PXQubm9kZVR5cGV8fG8paWYoYz10W3hdfHwodFt4XT17fSksKGw9Y1tpXSkmJmxbMF09PT1wKXtpZigodT1sWzFdKT09PSEwfHx1PT09cilyZXR1cm4gdT09PSEwfWVsc2UgaWYobD1jW2ldPVtwXSxsWzFdPWUodCxuLHMpfHxyLGxbMV09PT0hMClyZXR1cm4hMH19ZnVuY3Rpb24gZ3QoZSl7cmV0dXJuIGUubGVuZ3RoPjE/ZnVuY3Rpb24odCxuLHIpe3ZhciBpPWUubGVuZ3RoO3doaWxlKGktLSlpZighZVtpXSh0LG4scikpcmV0dXJuITE7cmV0dXJuITB9OmVbMF19ZnVuY3Rpb24gbXQoZSx0LG4scixpKXt2YXIgbyxhPVtdLHM9MCx1PWUubGVuZ3RoLGw9bnVsbCE9dDtmb3IoO3U+cztzKyspKG89ZVtzXSkmJighbnx8bihvLHIsaSkpJiYoYS5wdXNoKG8pLGwmJnQucHVzaChzKSk7cmV0dXJuIGF9ZnVuY3Rpb24geXQoZSx0LG4scixpLG8pe3JldHVybiByJiYhclt4XSYmKHI9eXQocikpLGkmJiFpW3hdJiYoaT15dChpLG8pKSxvdChmdW5jdGlvbihvLGEscyx1KXt2YXIgbCxjLHAsZj1bXSxkPVtdLGg9YS5sZW5ndGgsZz1vfHx4dCh0fHxcIipcIixzLm5vZGVUeXBlP1tzXTpzLFtdKSxtPSFlfHwhbyYmdD9nOm10KGcsZixlLHMsdSkseT1uP2l8fChvP2U6aHx8cik/W106YTptO2lmKG4mJm4obSx5LHMsdSkscil7bD1tdCh5LGQpLHIobCxbXSxzLHUpLGM9bC5sZW5ndGg7d2hpbGUoYy0tKShwPWxbY10pJiYoeVtkW2NdXT0hKG1bZFtjXV09cCkpfWlmKG8pe2lmKGl8fGUpe2lmKGkpe2w9W10sYz15Lmxlbmd0aDt3aGlsZShjLS0pKHA9eVtjXSkmJmwucHVzaChtW2NdPXApO2kobnVsbCx5PVtdLGwsdSl9Yz15Lmxlbmd0aDt3aGlsZShjLS0pKHA9eVtjXSkmJihsPWk/TS5jYWxsKG8scCk6ZltjXSk+LTEmJihvW2xdPSEoYVtsXT1wKSl9fWVsc2UgeT1tdCh5PT09YT95LnNwbGljZShoLHkubGVuZ3RoKTp5KSxpP2kobnVsbCxhLHksdSk6SC5hcHBseShhLHkpfSl9ZnVuY3Rpb24gdnQoZSl7dmFyIHQsbixyLG89ZS5sZW5ndGgsYT1pLnJlbGF0aXZlW2VbMF0udHlwZV0scz1hfHxpLnJlbGF0aXZlW1wiIFwiXSx1PWE/MTowLGM9aHQoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT10fSxzLCEwKSxwPWh0KGZ1bmN0aW9uKGUpe3JldHVybiBNLmNhbGwodCxlKT4tMX0scywhMCksZj1bZnVuY3Rpb24oZSxuLHIpe3JldHVybiFhJiYocnx8biE9PWwpfHwoKHQ9bikubm9kZVR5cGU/YyhlLG4scik6cChlLG4scikpfV07Zm9yKDtvPnU7dSsrKWlmKG49aS5yZWxhdGl2ZVtlW3VdLnR5cGVdKWY9W2h0KGd0KGYpLG4pXTtlbHNle2lmKG49aS5maWx0ZXJbZVt1XS50eXBlXS5hcHBseShudWxsLGVbdV0ubWF0Y2hlcyksblt4XSl7Zm9yKHI9Kyt1O28+cjtyKyspaWYoaS5yZWxhdGl2ZVtlW3JdLnR5cGVdKWJyZWFrO3JldHVybiB5dCh1PjEmJmd0KGYpLHU+MSYmZHQoZS5zbGljZSgwLHUtMSkpLnJlcGxhY2UoVyxcIiQxXCIpLG4scj51JiZ2dChlLnNsaWNlKHUscikpLG8+ciYmdnQoZT1lLnNsaWNlKHIpKSxvPnImJmR0KGUpKX1mLnB1c2gobil9cmV0dXJuIGd0KGYpfWZ1bmN0aW9uIGJ0KGUsdCl7dmFyIG49MCxvPXQubGVuZ3RoPjAsYT1lLmxlbmd0aD4wLHM9ZnVuY3Rpb24ocyx1LGMsZixkKXt2YXIgaCxnLG0seT1bXSx2PTAsYj1cIjBcIix4PXMmJltdLHc9bnVsbCE9ZCxUPWwsQz1zfHxhJiZpLmZpbmQuVEFHKFwiKlwiLGQmJnUucGFyZW50Tm9kZXx8dSksaz1OKz1udWxsPT1UPzE6TWF0aC5yYW5kb20oKXx8LjE7Zm9yKHcmJihsPXUhPT1wJiZ1LHI9bik7bnVsbCE9KGg9Q1tiXSk7YisrKXtpZihhJiZoKXtnPTA7d2hpbGUobT1lW2crK10paWYobShoLHUsYykpe2YucHVzaChoKTticmVha313JiYoTj1rLHI9KytuKX1vJiYoKGg9IW0mJmgpJiZ2LS0scyYmeC5wdXNoKGgpKX1pZih2Kz1iLG8mJmIhPT12KXtnPTA7d2hpbGUobT10W2crK10pbSh4LHksdSxjKTtpZihzKXtpZih2PjApd2hpbGUoYi0tKXhbYl18fHlbYl18fCh5W2JdPUwuY2FsbChmKSk7eT1tdCh5KX1ILmFwcGx5KGYseSksdyYmIXMmJnkubGVuZ3RoPjAmJnYrdC5sZW5ndGg+MSYmc3QudW5pcXVlU29ydChmKX1yZXR1cm4gdyYmKE49ayxsPVQpLHh9O3JldHVybiBvP290KHMpOnN9cz1zdC5jb21waWxlPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPVtdLG89U1tlK1wiIFwiXTtpZighbyl7dHx8KHQ9ZnQoZSkpLG49dC5sZW5ndGg7d2hpbGUobi0tKW89dnQodFtuXSksb1t4XT9yLnB1c2gobyk6aS5wdXNoKG8pO289UyhlLGJ0KGkscikpfXJldHVybiBvfTtmdW5jdGlvbiB4dChlLHQsbil7dmFyIHI9MCxpPXQubGVuZ3RoO2Zvcig7aT5yO3IrKylzdChlLHRbcl0sbik7cmV0dXJuIG59ZnVuY3Rpb24gd3QoZSx0LG4scil7dmFyIG8sYSx1LGwsYyxwPWZ0KGUpO2lmKCFyJiYxPT09cC5sZW5ndGgpe2lmKGE9cFswXT1wWzBdLnNsaWNlKDApLGEubGVuZ3RoPjImJlwiSURcIj09PSh1PWFbMF0pLnR5cGUmJjk9PT10Lm5vZGVUeXBlJiYhZCYmaS5yZWxhdGl2ZVthWzFdLnR5cGVdKXtpZih0PWkuZmluZC5JRCh1Lm1hdGNoZXNbMF0ucmVwbGFjZShldCx0dCksdClbMF0sIXQpcmV0dXJuIG47ZT1lLnNsaWNlKGEuc2hpZnQoKS52YWx1ZS5sZW5ndGgpfW89VS5uZWVkc0NvbnRleHQudGVzdChlKT8wOmEubGVuZ3RoO3doaWxlKG8tLSl7aWYodT1hW29dLGkucmVsYXRpdmVbbD11LnR5cGVdKWJyZWFrO2lmKChjPWkuZmluZFtsXSkmJihyPWModS5tYXRjaGVzWzBdLnJlcGxhY2UoZXQsdHQpLFYudGVzdChhWzBdLnR5cGUpJiZ0LnBhcmVudE5vZGV8fHQpKSl7aWYoYS5zcGxpY2UobywxKSxlPXIubGVuZ3RoJiZkdChhKSwhZSlyZXR1cm4gSC5hcHBseShuLHEuY2FsbChyLDApKSxuO2JyZWFrfX19cmV0dXJuIHMoZSxwKShyLHQsZCxuLFYudGVzdChlKSksbn1pLnBzZXVkb3MubnRoPWkucHNldWRvcy5lcTtmdW5jdGlvbiBUdCgpe31pLmZpbHRlcnM9VHQucHJvdG90eXBlPWkucHNldWRvcyxpLnNldEZpbHRlcnM9bmV3IFR0LGMoKSxzdC5hdHRyPWIuYXR0cixiLmZpbmQ9c3QsYi5leHByPXN0LnNlbGVjdG9ycyxiLmV4cHJbXCI6XCJdPWIuZXhwci5wc2V1ZG9zLGIudW5pcXVlPXN0LnVuaXF1ZVNvcnQsYi50ZXh0PXN0LmdldFRleHQsYi5pc1hNTERvYz1zdC5pc1hNTCxiLmNvbnRhaW5zPXN0LmNvbnRhaW5zfShlKTt2YXIgYXQ9L1VudGlsJC8sc3Q9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sdXQ9L14uW146I1xcW1xcLixdKiQvLGx0PWIuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQsY3Q9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07Yi5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9dGhpcy5sZW5ndGg7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIHI9dGhpcyx0aGlzLnB1c2hTdGFjayhiKGUpLmZpbHRlcihmdW5jdGlvbigpe2Zvcih0PTA7aT50O3QrKylpZihiLmNvbnRhaW5zKHJbdF0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKG49W10sdD0wO2k+dDt0KyspYi5maW5kKGUsdGhpc1t0XSxuKTtyZXR1cm4gbj10aGlzLnB1c2hTdGFjayhpPjE/Yi51bmlxdWUobik6biksbi5zZWxlY3Rvcj0odGhpcy5zZWxlY3Rvcj90aGlzLnNlbGVjdG9yK1wiIFwiOlwiXCIpK2Usbn0saGFzOmZ1bmN0aW9uKGUpe3ZhciB0LG49YihlLHRoaXMpLHI9bi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHQ9MDtyPnQ7dCsrKWlmKGIuY29udGFpbnModGhpcyxuW3RdKSlyZXR1cm4hMH0pfSxub3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGZ0KHRoaXMsZSwhMSkpfSxmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGZ0KHRoaXMsZSwhMCkpfSxpczpmdW5jdGlvbihlKXtyZXR1cm4hIWUmJihcInN0cmluZ1wiPT10eXBlb2YgZT9sdC50ZXN0KGUpP2IoZSx0aGlzLmNvbnRleHQpLmluZGV4KHRoaXNbMF0pPj0wOmIuZmlsdGVyKGUsdGhpcykubGVuZ3RoPjA6dGhpcy5maWx0ZXIoZSkubGVuZ3RoPjApfSxjbG9zZXN0OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wLGk9dGhpcy5sZW5ndGgsbz1bXSxhPWx0LnRlc3QoZSl8fFwic3RyaW5nXCIhPXR5cGVvZiBlP2IoZSx0fHx0aGlzLmNvbnRleHQpOjA7Zm9yKDtpPnI7cisrKXtuPXRoaXNbcl07d2hpbGUobiYmbi5vd25lckRvY3VtZW50JiZuIT09dCYmMTEhPT1uLm5vZGVUeXBlKXtpZihhP2EuaW5kZXgobik+LTE6Yi5maW5kLm1hdGNoZXNTZWxlY3RvcihuLGUpKXtvLnB1c2gobik7YnJlYWt9bj1uLnBhcmVudE5vZGV9fXJldHVybiB0aGlzLnB1c2hTdGFjayhvLmxlbmd0aD4xP2IudW5pcXVlKG8pOm8pfSxpbmRleDpmdW5jdGlvbihlKXtyZXR1cm4gZT9cInN0cmluZ1wiPT10eXBlb2YgZT9iLmluQXJyYXkodGhpc1swXSxiKGUpKTpiLmluQXJyYXkoZS5qcXVlcnk/ZVswXTplLHRoaXMpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGUsdCl7dmFyIG49XCJzdHJpbmdcIj09dHlwZW9mIGU/YihlLHQpOmIubWFrZUFycmF5KGUmJmUubm9kZVR5cGU/W2VdOmUpLHI9Yi5tZXJnZSh0aGlzLmdldCgpLG4pO3JldHVybiB0aGlzLnB1c2hTdGFjayhiLnVuaXF1ZShyKSl9LGFkZEJhY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWU/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoZSkpfX0pLGIuZm4uYW5kU2VsZj1iLmZuLmFkZEJhY2s7ZnVuY3Rpb24gcHQoZSx0KXtkbyBlPWVbdF07d2hpbGUoZSYmMSE9PWUubm9kZVR5cGUpO3JldHVybiBlfWIuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmMTEhPT10Lm5vZGVUeXBlP3Q6bnVsbH0scGFyZW50czpmdW5jdGlvbihlKXtyZXR1cm4gYi5kaXIoZSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGIuZGlyKGUsXCJwYXJlbnROb2RlXCIsbil9LG5leHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHB0KGUsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihlKXtyZXR1cm4gcHQoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihlKXtyZXR1cm4gYi5kaXIoZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBiLmRpcihlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBiLmRpcihlLFwibmV4dFNpYmxpbmdcIixuKX0scHJldlVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gYi5kaXIoZSxcInByZXZpb3VzU2libGluZ1wiLG4pfSxzaWJsaW5nczpmdW5jdGlvbihlKXtyZXR1cm4gYi5zaWJsaW5nKChlLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gYi5zaWJsaW5nKGUuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBiLm5vZGVOYW1lKGUsXCJpZnJhbWVcIik/ZS5jb250ZW50RG9jdW1lbnR8fGUuY29udGVudFdpbmRvdy5kb2N1bWVudDpiLm1lcmdlKFtdLGUuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihlLHQpe2IuZm5bZV09ZnVuY3Rpb24obixyKXt2YXIgaT1iLm1hcCh0aGlzLHQsbik7cmV0dXJuIGF0LnRlc3QoZSl8fChyPW4pLHImJlwic3RyaW5nXCI9PXR5cGVvZiByJiYoaT1iLmZpbHRlcihyLGkpKSxpPXRoaXMubGVuZ3RoPjEmJiFjdFtlXT9iLnVuaXF1ZShpKTppLHRoaXMubGVuZ3RoPjEmJnN0LnRlc3QoZSkmJihpPWkucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhpKX19KSxiLmV4dGVuZCh7ZmlsdGVyOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbiYmKGU9XCI6bm90KFwiK2UrXCIpXCIpLDE9PT10Lmxlbmd0aD9iLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHRbMF0sZSk/W3RbMF1dOltdOmIuZmluZC5tYXRjaGVzKGUsdCl9LGRpcjpmdW5jdGlvbihlLG4scil7dmFyIGk9W10sbz1lW25dO3doaWxlKG8mJjkhPT1vLm5vZGVUeXBlJiYocj09PXR8fDEhPT1vLm5vZGVUeXBlfHwhYihvKS5pcyhyKSkpMT09PW8ubm9kZVR5cGUmJmkucHVzaChvKSxvPW9bbl07cmV0dXJuIGl9LHNpYmxpbmc6ZnVuY3Rpb24oZSx0KXt2YXIgbj1bXTtmb3IoO2U7ZT1lLm5leHRTaWJsaW5nKTE9PT1lLm5vZGVUeXBlJiZlIT09dCYmbi5wdXNoKGUpO3JldHVybiBufX0pO2Z1bmN0aW9uIGZ0KGUsdCxuKXtpZih0PXR8fDAsYi5pc0Z1bmN0aW9uKHQpKXJldHVybiBiLmdyZXAoZSxmdW5jdGlvbihlLHIpe3ZhciBpPSEhdC5jYWxsKGUscixlKTtyZXR1cm4gaT09PW59KTtpZih0Lm5vZGVUeXBlKXJldHVybiBiLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gZT09PXQ9PT1ufSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciByPWIuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZX0pO2lmKHV0LnRlc3QodCkpcmV0dXJuIGIuZmlsdGVyKHQsciwhbik7dD1iLmZpbHRlcih0LHIpfXJldHVybiBiLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gYi5pbkFycmF5KGUsdCk+PTA9PT1ufSl9ZnVuY3Rpb24gZHQoZSl7dmFyIHQ9aHQuc3BsaXQoXCJ8XCIpLG49ZS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYobi5jcmVhdGVFbGVtZW50KXdoaWxlKHQubGVuZ3RoKW4uY3JlYXRlRWxlbWVudCh0LnBvcCgpKTtyZXR1cm4gbn12YXIgaHQ9XCJhYmJyfGFydGljbGV8YXNpZGV8YXVkaW98YmRpfGNhbnZhc3xkYXRhfGRhdGFsaXN0fGRldGFpbHN8ZmlnY2FwdGlvbnxmaWd1cmV8Zm9vdGVyfGhlYWRlcnxoZ3JvdXB8bWFya3xtZXRlcnxuYXZ8b3V0cHV0fHByb2dyZXNzfHNlY3Rpb258c3VtbWFyeXx0aW1lfHZpZGVvXCIsZ3Q9LyBqUXVlcnlcXGQrPVwiKD86bnVsbHxcXGQrKVwiL2csbXQ9UmVnRXhwKFwiPCg/OlwiK2h0K1wiKVtcXFxccy8+XVwiLFwiaVwiKSx5dD0vXlxccysvLHZ0PS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6XSspW14+XSopXFwvPi9naSxidD0vPChbXFx3Ol0rKS8seHQ9Lzx0Ym9keS9pLHd0PS88fCYjP1xcdys7LyxUdD0vPCg/OnNjcmlwdHxzdHlsZXxsaW5rKS9pLE50PS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLEN0PS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksa3Q9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxFdD0vXnRydWVcXC8oLiopLyxTdD0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2csQXQ9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSxsZWdlbmQ6WzEsXCI8ZmllbGRzZXQ+XCIsXCI8L2ZpZWxkc2V0PlwiXSxhcmVhOlsxLFwiPG1hcD5cIixcIjwvbWFwPlwiXSxwYXJhbTpbMSxcIjxvYmplY3Q+XCIsXCI8L29iamVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48dGJvZHk+PC90Ym9keT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6Yi5zdXBwb3J0Lmh0bWxTZXJpYWxpemU/WzAsXCJcIixcIlwiXTpbMSxcIlg8ZGl2PlwiLFwiPC9kaXY+XCJdfSxqdD1kdChvKSxEdD1qdC5hcHBlbmRDaGlsZChvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO0F0Lm9wdGdyb3VwPUF0Lm9wdGlvbixBdC50Ym9keT1BdC50Zm9vdD1BdC5jb2xncm91cD1BdC5jYXB0aW9uPUF0LnRoZWFkLEF0LnRoPUF0LnRkLGIuZm4uZXh0ZW5kKHt0ZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBlPT09dD9iLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmFwcGVuZCgodGhpc1swXSYmdGhpc1swXS5vd25lckRvY3VtZW50fHxvKS5jcmVhdGVUZXh0Tm9kZShlKSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0sd3JhcEFsbDpmdW5jdGlvbihlKXtpZihiLmlzRnVuY3Rpb24oZSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0KXtiKHRoaXMpLndyYXBBbGwoZS5jYWxsKHRoaXMsdCkpfSk7aWYodGhpc1swXSl7dmFyIHQ9YihlLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApO3RoaXNbMF0ucGFyZW50Tm9kZSYmdC5pbnNlcnRCZWZvcmUodGhpc1swXSksdC5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzO3doaWxlKGUuZmlyc3RDaGlsZCYmMT09PWUuZmlyc3RDaGlsZC5ub2RlVHlwZSllPWUuZmlyc3RDaGlsZDtyZXR1cm4gZX0pLmFwcGVuZCh0aGlzKX1yZXR1cm4gdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKGUpe3JldHVybiBiLmlzRnVuY3Rpb24oZSk/dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2IodGhpcykud3JhcElubmVyKGUuY2FsbCh0aGlzLHQpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PWIodGhpcyksbj10LmNvbnRlbnRzKCk7bi5sZW5ndGg/bi53cmFwQWxsKGUpOnQuYXBwZW5kKGUpfSl9LHdyYXA6ZnVuY3Rpb24oZSl7dmFyIHQ9Yi5pc0Z1bmN0aW9uKGUpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24obil7Yih0aGlzKS53cmFwQWxsKHQ/ZS5jYWxsKHRoaXMsbik6ZSl9KX0sdW53cmFwOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpe2Iubm9kZU5hbWUodGhpcyxcImJvZHlcIil8fGIodGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLmVuZCgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsITAsZnVuY3Rpb24oZSl7KDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKSYmdGhpcy5hcHBlbmRDaGlsZChlKX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLCEwLGZ1bmN0aW9uKGUpeygxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSkmJnRoaXMuaW5zZXJ0QmVmb3JlKGUsdGhpcy5maXJzdENoaWxkKX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsITEsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsITEsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wO2Zvcig7bnVsbCE9KG49dGhpc1tyXSk7cisrKSghZXx8Yi5maWx0ZXIoZSxbbl0pLmxlbmd0aD4wKSYmKHR8fDEhPT1uLm5vZGVUeXBlfHxiLmNsZWFuRGF0YShPdChuKSksbi5wYXJlbnROb2RlJiYodCYmYi5jb250YWlucyhuLm93bmVyRG9jdW1lbnQsbikmJk10KE90KG4sXCJzY3JpcHRcIikpLG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKSkpO3JldHVybiB0aGlzfSxlbXB0eTpmdW5jdGlvbigpe3ZhciBlLHQ9MDtmb3IoO251bGwhPShlPXRoaXNbdF0pO3QrKyl7MT09PWUubm9kZVR5cGUmJmIuY2xlYW5EYXRhKE90KGUsITEpKTt3aGlsZShlLmZpcnN0Q2hpbGQpZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpO2Uub3B0aW9ucyYmYi5ub2RlTmFtZShlLFwic2VsZWN0XCIpJiYoZS5vcHRpb25zLmxlbmd0aD0wKX1yZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1udWxsPT1lPyExOmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBiLmNsb25lKHRoaXMsZSx0KX0pfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiBiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKGUpe3ZhciBuPXRoaXNbMF18fHt9LHI9MCxpPXRoaXMubGVuZ3RoO2lmKGU9PT10KXJldHVybiAxPT09bi5ub2RlVHlwZT9uLmlubmVySFRNTC5yZXBsYWNlKGd0LFwiXCIpOnQ7aWYoIShcInN0cmluZ1wiIT10eXBlb2YgZXx8VHQudGVzdChlKXx8IWIuc3VwcG9ydC5odG1sU2VyaWFsaXplJiZtdC50ZXN0KGUpfHwhYi5zdXBwb3J0LmxlYWRpbmdXaGl0ZXNwYWNlJiZ5dC50ZXN0KGUpfHxBdFsoYnQuZXhlYyhlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKSl7ZT1lLnJlcGxhY2UodnQsXCI8JDE+PC8kMj5cIik7dHJ5e2Zvcig7aT5yO3IrKyluPXRoaXNbcl18fHt9LDE9PT1uLm5vZGVUeXBlJiYoYi5jbGVhbkRhdGEoT3QobiwhMSkpLG4uaW5uZXJIVE1MPWUpO249MH1jYXRjaChvKXt9fW4mJnRoaXMuZW1wdHkoKS5hcHBlbmQoZSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oZSl7dmFyIHQ9Yi5pc0Z1bmN0aW9uKGUpO3JldHVybiB0fHxcInN0cmluZ1wiPT10eXBlb2YgZXx8KGU9YihlKS5ub3QodGhpcykuZGV0YWNoKCkpLHRoaXMuZG9tTWFuaXAoW2VdLCEwLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubmV4dFNpYmxpbmcsbj10aGlzLnBhcmVudE5vZGU7biYmKGIodGhpcykucmVtb3ZlKCksbi5pbnNlcnRCZWZvcmUoZSx0KSl9KX0sZGV0YWNoOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnJlbW92ZShlLCEwKX0sZG9tTWFuaXA6ZnVuY3Rpb24oZSxuLHIpe2U9Zi5hcHBseShbXSxlKTt2YXIgaSxvLGEscyx1LGwsYz0wLHA9dGhpcy5sZW5ndGgsZD10aGlzLGg9cC0xLGc9ZVswXSxtPWIuaXNGdW5jdGlvbihnKTtpZihtfHwhKDE+PXB8fFwic3RyaW5nXCIhPXR5cGVvZiBnfHxiLnN1cHBvcnQuY2hlY2tDbG9uZSkmJkN0LnRlc3QoZykpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpKXt2YXIgbz1kLmVxKGkpO20mJihlWzBdPWcuY2FsbCh0aGlzLGksbj9vLmh0bWwoKTp0KSksby5kb21NYW5pcChlLG4scil9KTtpZihwJiYobD1iLmJ1aWxkRnJhZ21lbnQoZSx0aGlzWzBdLm93bmVyRG9jdW1lbnQsITEsdGhpcyksaT1sLmZpcnN0Q2hpbGQsMT09PWwuY2hpbGROb2Rlcy5sZW5ndGgmJihsPWkpLGkpKXtmb3Iobj1uJiZiLm5vZGVOYW1lKGksXCJ0clwiKSxzPWIubWFwKE90KGwsXCJzY3JpcHRcIiksSHQpLGE9cy5sZW5ndGg7cD5jO2MrKylvPWwsYyE9PWgmJihvPWIuY2xvbmUobywhMCwhMCksYSYmYi5tZXJnZShzLE90KG8sXCJzY3JpcHRcIikpKSxyLmNhbGwobiYmYi5ub2RlTmFtZSh0aGlzW2NdLFwidGFibGVcIik/THQodGhpc1tjXSxcInRib2R5XCIpOnRoaXNbY10sbyxjKTtpZihhKWZvcih1PXNbcy5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxiLm1hcChzLHF0KSxjPTA7YT5jO2MrKylvPXNbY10sa3QudGVzdChvLnR5cGV8fFwiXCIpJiYhYi5fZGF0YShvLFwiZ2xvYmFsRXZhbFwiKSYmYi5jb250YWlucyh1LG8pJiYoby5zcmM/Yi5hamF4KHt1cmw6by5zcmMsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KTpiLmdsb2JhbEV2YWwoKG8udGV4dHx8by50ZXh0Q29udGVudHx8by5pbm5lckhUTUx8fFwiXCIpLnJlcGxhY2UoU3QsXCJcIikpKTtsPWk9bnVsbH1yZXR1cm4gdGhpc319KTtmdW5jdGlvbiBMdChlLHQpe3JldHVybiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHQpWzBdfHxlLmFwcGVuZENoaWxkKGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpKX1mdW5jdGlvbiBIdChlKXt2YXIgdD1lLmdldEF0dHJpYnV0ZU5vZGUoXCJ0eXBlXCIpO3JldHVybiBlLnR5cGU9KHQmJnQuc3BlY2lmaWVkKStcIi9cIitlLnR5cGUsZX1mdW5jdGlvbiBxdChlKXt2YXIgdD1FdC5leGVjKGUudHlwZSk7cmV0dXJuIHQ/ZS50eXBlPXRbMV06ZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGV9ZnVuY3Rpb24gTXQoZSx0KXt2YXIgbixyPTA7Zm9yKDtudWxsIT0obj1lW3JdKTtyKyspYi5fZGF0YShuLFwiZ2xvYmFsRXZhbFwiLCF0fHxiLl9kYXRhKHRbcl0sXCJnbG9iYWxFdmFsXCIpKX1mdW5jdGlvbiBfdChlLHQpe2lmKDE9PT10Lm5vZGVUeXBlJiZiLmhhc0RhdGEoZSkpe3ZhciBuLHIsaSxvPWIuX2RhdGEoZSksYT1iLl9kYXRhKHQsbykscz1vLmV2ZW50cztpZihzKXtkZWxldGUgYS5oYW5kbGUsYS5ldmVudHM9e307Zm9yKG4gaW4gcylmb3Iocj0wLGk9c1tuXS5sZW5ndGg7aT5yO3IrKyliLmV2ZW50LmFkZCh0LG4sc1tuXVtyXSl9YS5kYXRhJiYoYS5kYXRhPWIuZXh0ZW5kKHt9LGEuZGF0YSkpfX1mdW5jdGlvbiBGdChlLHQpe3ZhciBuLHIsaTtpZigxPT09dC5ub2RlVHlwZSl7aWYobj10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksIWIuc3VwcG9ydC5ub0Nsb25lRXZlbnQmJnRbYi5leHBhbmRvXSl7aT1iLl9kYXRhKHQpO2ZvcihyIGluIGkuZXZlbnRzKWIucmVtb3ZlRXZlbnQodCxyLGkuaGFuZGxlKTt0LnJlbW92ZUF0dHJpYnV0ZShiLmV4cGFuZG8pfVwic2NyaXB0XCI9PT1uJiZ0LnRleHQhPT1lLnRleHQ/KEh0KHQpLnRleHQ9ZS50ZXh0LHF0KHQpKTpcIm9iamVjdFwiPT09bj8odC5wYXJlbnROb2RlJiYodC5vdXRlckhUTUw9ZS5vdXRlckhUTUwpLGIuc3VwcG9ydC5odG1sNUNsb25lJiZlLmlubmVySFRNTCYmIWIudHJpbSh0LmlubmVySFRNTCkmJih0LmlubmVySFRNTD1lLmlubmVySFRNTCkpOlwiaW5wdXRcIj09PW4mJk50LnRlc3QoZS50eXBlKT8odC5kZWZhdWx0Q2hlY2tlZD10LmNoZWNrZWQ9ZS5jaGVja2VkLHQudmFsdWUhPT1lLnZhbHVlJiYodC52YWx1ZT1lLnZhbHVlKSk6XCJvcHRpb25cIj09PW4/dC5kZWZhdWx0U2VsZWN0ZWQ9dC5zZWxlY3RlZD1lLmRlZmF1bHRTZWxlY3RlZDooXCJpbnB1dFwiPT09bnx8XCJ0ZXh0YXJlYVwiPT09bikmJih0LmRlZmF1bHRWYWx1ZT1lLmRlZmF1bHRWYWx1ZSl9fWIuZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihlLHQpe2IuZm5bZV09ZnVuY3Rpb24oZSl7dmFyIG4scj0wLGk9W10sbz1iKGUpLGE9by5sZW5ndGgtMTtmb3IoO2E+PXI7cisrKW49cj09PWE/dGhpczp0aGlzLmNsb25lKCEwKSxiKG9bcl0pW3RdKG4pLGQuYXBwbHkoaSxuLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaSl9fSk7ZnVuY3Rpb24gT3QoZSxuKXt2YXIgcixvLGE9MCxzPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lIT09aT9lLmdldEVsZW1lbnRzQnlUYWdOYW1lKG58fFwiKlwiKTp0eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsIT09aT9lLnF1ZXJ5U2VsZWN0b3JBbGwobnx8XCIqXCIpOnQ7aWYoIXMpZm9yKHM9W10scj1lLmNoaWxkTm9kZXN8fGU7bnVsbCE9KG89clthXSk7YSsrKSFufHxiLm5vZGVOYW1lKG8sbik/cy5wdXNoKG8pOmIubWVyZ2UocyxPdChvLG4pKTtyZXR1cm4gbj09PXR8fG4mJmIubm9kZU5hbWUoZSxuKT9iLm1lcmdlKFtlXSxzKTpzfWZ1bmN0aW9uIEJ0KGUpe050LnRlc3QoZS50eXBlKSYmKGUuZGVmYXVsdENoZWNrZWQ9ZS5jaGVja2VkKX1iLmV4dGVuZCh7Y2xvbmU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdT1iLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKTtpZihiLnN1cHBvcnQuaHRtbDVDbG9uZXx8Yi5pc1hNTERvYyhlKXx8IW10LnRlc3QoXCI8XCIrZS5ub2RlTmFtZStcIj5cIik/bz1lLmNsb25lTm9kZSghMCk6KER0LmlubmVySFRNTD1lLm91dGVySFRNTCxEdC5yZW1vdmVDaGlsZChvPUR0LmZpcnN0Q2hpbGQpKSwhKGIuc3VwcG9ydC5ub0Nsb25lRXZlbnQmJmIuc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZHx8MSE9PWUubm9kZVR5cGUmJjExIT09ZS5ub2RlVHlwZXx8Yi5pc1hNTERvYyhlKSkpZm9yKHI9T3Qobykscz1PdChlKSxhPTA7bnVsbCE9KGk9c1thXSk7KythKXJbYV0mJkZ0KGksclthXSk7aWYodClpZihuKWZvcihzPXN8fE90KGUpLHI9cnx8T3QobyksYT0wO251bGwhPShpPXNbYV0pO2ErKylfdChpLHJbYV0pO2Vsc2UgX3QoZSxvKTtyZXR1cm4gcj1PdChvLFwic2NyaXB0XCIpLHIubGVuZ3RoPjAmJk10KHIsIXUmJk90KGUsXCJzY3JpcHRcIikpLHI9cz1pPW51bGwsb30sYnVpbGRGcmFnbWVudDpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGwsYyxwPWUubGVuZ3RoLGY9ZHQodCksZD1bXSxoPTA7Zm9yKDtwPmg7aCsrKWlmKG89ZVtoXSxvfHwwPT09bylpZihcIm9iamVjdFwiPT09Yi50eXBlKG8pKWIubWVyZ2UoZCxvLm5vZGVUeXBlP1tvXTpvKTtlbHNlIGlmKHd0LnRlc3Qobykpe3M9c3x8Zi5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLHU9KGJ0LmV4ZWMobyl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGM9QXRbdV18fEF0Ll9kZWZhdWx0LHMuaW5uZXJIVE1MPWNbMV0rby5yZXBsYWNlKHZ0LFwiPCQxPjwvJDI+XCIpK2NbMl0saT1jWzBdO3doaWxlKGktLSlzPXMubGFzdENoaWxkO2lmKCFiLnN1cHBvcnQubGVhZGluZ1doaXRlc3BhY2UmJnl0LnRlc3QobykmJmQucHVzaCh0LmNyZWF0ZVRleHROb2RlKHl0LmV4ZWMobylbMF0pKSwhYi5zdXBwb3J0LnRib2R5KXtvPVwidGFibGVcIiE9PXV8fHh0LnRlc3Qobyk/XCI8dGFibGU+XCIhPT1jWzFdfHx4dC50ZXN0KG8pPzA6czpzLmZpcnN0Q2hpbGQsaT1vJiZvLmNoaWxkTm9kZXMubGVuZ3RoO3doaWxlKGktLSliLm5vZGVOYW1lKGw9by5jaGlsZE5vZGVzW2ldLFwidGJvZHlcIikmJiFsLmNoaWxkTm9kZXMubGVuZ3RoJiZvLnJlbW92ZUNoaWxkKGwpXG59Yi5tZXJnZShkLHMuY2hpbGROb2Rlcykscy50ZXh0Q29udGVudD1cIlwiO3doaWxlKHMuZmlyc3RDaGlsZClzLnJlbW92ZUNoaWxkKHMuZmlyc3RDaGlsZCk7cz1mLmxhc3RDaGlsZH1lbHNlIGQucHVzaCh0LmNyZWF0ZVRleHROb2RlKG8pKTtzJiZmLnJlbW92ZUNoaWxkKHMpLGIuc3VwcG9ydC5hcHBlbmRDaGVja2VkfHxiLmdyZXAoT3QoZCxcImlucHV0XCIpLEJ0KSxoPTA7d2hpbGUobz1kW2grK10paWYoKCFyfHwtMT09PWIuaW5BcnJheShvLHIpKSYmKGE9Yi5jb250YWlucyhvLm93bmVyRG9jdW1lbnQsbykscz1PdChmLmFwcGVuZENoaWxkKG8pLFwic2NyaXB0XCIpLGEmJk10KHMpLG4pKXtpPTA7d2hpbGUobz1zW2krK10pa3QudGVzdChvLnR5cGV8fFwiXCIpJiZuLnB1c2gobyl9cmV0dXJuIHM9bnVsbCxmfSxjbGVhbkRhdGE6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLG8sYSxzPTAsdT1iLmV4cGFuZG8sbD1iLmNhY2hlLHA9Yi5zdXBwb3J0LmRlbGV0ZUV4cGFuZG8sZj1iLmV2ZW50LnNwZWNpYWw7Zm9yKDtudWxsIT0obj1lW3NdKTtzKyspaWYoKHR8fGIuYWNjZXB0RGF0YShuKSkmJihvPW5bdV0sYT1vJiZsW29dKSl7aWYoYS5ldmVudHMpZm9yKHIgaW4gYS5ldmVudHMpZltyXT9iLmV2ZW50LnJlbW92ZShuLHIpOmIucmVtb3ZlRXZlbnQobixyLGEuaGFuZGxlKTtsW29dJiYoZGVsZXRlIGxbb10scD9kZWxldGUgblt1XTp0eXBlb2Ygbi5yZW1vdmVBdHRyaWJ1dGUhPT1pP24ucmVtb3ZlQXR0cmlidXRlKHUpOm5bdV09bnVsbCxjLnB1c2gobykpfX19KTt2YXIgUHQsUnQsV3QsJHQ9L2FscGhhXFwoW14pXSpcXCkvaSxJdD0vb3BhY2l0eVxccyo9XFxzKihbXildKikvLHp0PS9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkLyxYdD0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sVXQ9L15tYXJnaW4vLFZ0PVJlZ0V4cChcIl4oXCIreCtcIikoLiopJFwiLFwiaVwiKSxZdD1SZWdFeHAoXCJeKFwiK3grXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksSnQ9UmVnRXhwKFwiXihbKy1dKT0oXCIreCtcIilcIixcImlcIiksR3Q9e0JPRFk6XCJibG9ja1wifSxRdD17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sS3Q9e2xldHRlclNwYWNpbmc6MCxmb250V2VpZ2h0OjQwMH0sWnQ9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLGVuPVtcIldlYmtpdFwiLFwiT1wiLFwiTW96XCIsXCJtc1wiXTtmdW5jdGlvbiB0bihlLHQpe2lmKHQgaW4gZSlyZXR1cm4gdDt2YXIgbj10LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSkscj10LGk9ZW4ubGVuZ3RoO3doaWxlKGktLSlpZih0PWVuW2ldK24sdCBpbiBlKXJldHVybiB0O3JldHVybiByfWZ1bmN0aW9uIG5uKGUsdCl7cmV0dXJuIGU9dHx8ZSxcIm5vbmVcIj09PWIuY3NzKGUsXCJkaXNwbGF5XCIpfHwhYi5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl9ZnVuY3Rpb24gcm4oZSx0KXt2YXIgbixyLGksbz1bXSxhPTAscz1lLmxlbmd0aDtmb3IoO3M+YTthKyspcj1lW2FdLHIuc3R5bGUmJihvW2FdPWIuX2RhdGEocixcIm9sZGRpc3BsYXlcIiksbj1yLnN0eWxlLmRpc3BsYXksdD8ob1thXXx8XCJub25lXCIhPT1ufHwoci5zdHlsZS5kaXNwbGF5PVwiXCIpLFwiXCI9PT1yLnN0eWxlLmRpc3BsYXkmJm5uKHIpJiYob1thXT1iLl9kYXRhKHIsXCJvbGRkaXNwbGF5XCIsdW4oci5ub2RlTmFtZSkpKSk6b1thXXx8KGk9bm4ociksKG4mJlwibm9uZVwiIT09bnx8IWkpJiZiLl9kYXRhKHIsXCJvbGRkaXNwbGF5XCIsaT9uOmIuY3NzKHIsXCJkaXNwbGF5XCIpKSkpO2ZvcihhPTA7cz5hO2ErKylyPWVbYV0sci5zdHlsZSYmKHQmJlwibm9uZVwiIT09ci5zdHlsZS5kaXNwbGF5JiZcIlwiIT09ci5zdHlsZS5kaXNwbGF5fHwoci5zdHlsZS5kaXNwbGF5PXQ/b1thXXx8XCJcIjpcIm5vbmVcIikpO3JldHVybiBlfWIuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gYi5hY2Nlc3ModGhpcyxmdW5jdGlvbihlLG4scil7dmFyIGksbyxhPXt9LHM9MDtpZihiLmlzQXJyYXkobikpe2ZvcihvPVJ0KGUpLGk9bi5sZW5ndGg7aT5zO3MrKylhW25bc11dPWIuY3NzKGUsbltzXSwhMSxvKTtyZXR1cm4gYX1yZXR1cm4gciE9PXQ/Yi5zdHlsZShlLG4scik6Yi5jc3MoZSxuKX0sZSxuLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gcm4odGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gcm4odGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihlKXt2YXIgdD1cImJvb2xlYW5cIj09dHlwZW9mIGU7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpeyh0P2U6bm4odGhpcykpP2IodGhpcykuc2hvdygpOmIodGhpcykuaGlkZSgpfSl9fSksYi5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oZSx0KXtpZih0KXt2YXIgbj1XdChlLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09bj9cIjFcIjpufX19fSxjc3NOdW1iZXI6e2NvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOmIuc3VwcG9ydC5jc3NGbG9hdD9cImNzc0Zsb2F0XCI6XCJzdHlsZUZsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGUsbixyLGkpe2lmKGUmJjMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmZS5zdHlsZSl7dmFyIG8sYSxzLHU9Yi5jYW1lbENhc2UobiksbD1lLnN0eWxlO2lmKG49Yi5jc3NQcm9wc1t1XXx8KGIuY3NzUHJvcHNbdV09dG4obCx1KSkscz1iLmNzc0hvb2tzW25dfHxiLmNzc0hvb2tzW3VdLHI9PT10KXJldHVybiBzJiZcImdldFwiaW4gcyYmKG89cy5nZXQoZSwhMSxpKSkhPT10P286bFtuXTtpZihhPXR5cGVvZiByLFwic3RyaW5nXCI9PT1hJiYobz1KdC5leGVjKHIpKSYmKHI9KG9bMV0rMSkqb1syXStwYXJzZUZsb2F0KGIuY3NzKGUsbikpLGE9XCJudW1iZXJcIiksIShudWxsPT1yfHxcIm51bWJlclwiPT09YSYmaXNOYU4ocil8fChcIm51bWJlclwiIT09YXx8Yi5jc3NOdW1iZXJbdV18fChyKz1cInB4XCIpLGIuc3VwcG9ydC5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1yfHwwIT09bi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGxbbl09XCJpbmhlcml0XCIpLHMmJlwic2V0XCJpbiBzJiYocj1zLnNldChlLHIsaSkpPT09dCkpKXRyeXtsW25dPXJ9Y2F0Y2goYyl7fX19LGNzczpmdW5jdGlvbihlLG4scixpKXt2YXIgbyxhLHMsdT1iLmNhbWVsQ2FzZShuKTtyZXR1cm4gbj1iLmNzc1Byb3BzW3VdfHwoYi5jc3NQcm9wc1t1XT10bihlLnN0eWxlLHUpKSxzPWIuY3NzSG9va3Nbbl18fGIuY3NzSG9va3NbdV0scyYmXCJnZXRcImluIHMmJihhPXMuZ2V0KGUsITAscikpLGE9PT10JiYoYT1XdChlLG4saSkpLFwibm9ybWFsXCI9PT1hJiZuIGluIEt0JiYoYT1LdFtuXSksXCJcIj09PXJ8fHI/KG89cGFyc2VGbG9hdChhKSxyPT09ITB8fGIuaXNOdW1lcmljKG8pP298fDA6YSk6YX0sc3dhcDpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGE9e307Zm9yKG8gaW4gdClhW29dPWUuc3R5bGVbb10sZS5zdHlsZVtvXT10W29dO2k9bi5hcHBseShlLHJ8fFtdKTtmb3IobyBpbiB0KWUuc3R5bGVbb109YVtvXTtyZXR1cm4gaX19KSxlLmdldENvbXB1dGVkU3R5bGU/KFJ0PWZ1bmN0aW9uKHQpe3JldHVybiBlLmdldENvbXB1dGVkU3R5bGUodCxudWxsKX0sV3Q9ZnVuY3Rpb24oZSxuLHIpe3ZhciBpLG8sYSxzPXJ8fFJ0KGUpLHU9cz9zLmdldFByb3BlcnR5VmFsdWUobil8fHNbbl06dCxsPWUuc3R5bGU7cmV0dXJuIHMmJihcIlwiIT09dXx8Yi5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl8fCh1PWIuc3R5bGUoZSxuKSksWXQudGVzdCh1KSYmVXQudGVzdChuKSYmKGk9bC53aWR0aCxvPWwubWluV2lkdGgsYT1sLm1heFdpZHRoLGwubWluV2lkdGg9bC5tYXhXaWR0aD1sLndpZHRoPXUsdT1zLndpZHRoLGwud2lkdGg9aSxsLm1pbldpZHRoPW8sbC5tYXhXaWR0aD1hKSksdX0pOm8uZG9jdW1lbnRFbGVtZW50LmN1cnJlbnRTdHlsZSYmKFJ0PWZ1bmN0aW9uKGUpe3JldHVybiBlLmN1cnJlbnRTdHlsZX0sV3Q9ZnVuY3Rpb24oZSxuLHIpe3ZhciBpLG8sYSxzPXJ8fFJ0KGUpLHU9cz9zW25dOnQsbD1lLnN0eWxlO3JldHVybiBudWxsPT11JiZsJiZsW25dJiYodT1sW25dKSxZdC50ZXN0KHUpJiYhenQudGVzdChuKSYmKGk9bC5sZWZ0LG89ZS5ydW50aW1lU3R5bGUsYT1vJiZvLmxlZnQsYSYmKG8ubGVmdD1lLmN1cnJlbnRTdHlsZS5sZWZ0KSxsLmxlZnQ9XCJmb250U2l6ZVwiPT09bj9cIjFlbVwiOnUsdT1sLnBpeGVsTGVmdCtcInB4XCIsbC5sZWZ0PWksYSYmKG8ubGVmdD1hKSksXCJcIj09PXU/XCJhdXRvXCI6dX0pO2Z1bmN0aW9uIG9uKGUsdCxuKXt2YXIgcj1WdC5leGVjKHQpO3JldHVybiByP01hdGgubWF4KDAsclsxXS0obnx8MCkpKyhyWzJdfHxcInB4XCIpOnR9ZnVuY3Rpb24gYW4oZSx0LG4scixpKXt2YXIgbz1uPT09KHI/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT10PzE6MCxhPTA7Zm9yKDs0Pm87bys9MilcIm1hcmdpblwiPT09biYmKGErPWIuY3NzKGUsbitadFtvXSwhMCxpKSkscj8oXCJjb250ZW50XCI9PT1uJiYoYS09Yi5jc3MoZSxcInBhZGRpbmdcIitadFtvXSwhMCxpKSksXCJtYXJnaW5cIiE9PW4mJihhLT1iLmNzcyhlLFwiYm9yZGVyXCIrWnRbb10rXCJXaWR0aFwiLCEwLGkpKSk6KGErPWIuY3NzKGUsXCJwYWRkaW5nXCIrWnRbb10sITAsaSksXCJwYWRkaW5nXCIhPT1uJiYoYSs9Yi5jc3MoZSxcImJvcmRlclwiK1p0W29dK1wiV2lkdGhcIiwhMCxpKSkpO3JldHVybiBhfWZ1bmN0aW9uIHNuKGUsdCxuKXt2YXIgcj0hMCxpPVwid2lkdGhcIj09PXQ/ZS5vZmZzZXRXaWR0aDplLm9mZnNldEhlaWdodCxvPVJ0KGUpLGE9Yi5zdXBwb3J0LmJveFNpemluZyYmXCJib3JkZXItYm94XCI9PT1iLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsbyk7aWYoMD49aXx8bnVsbD09aSl7aWYoaT1XdChlLHQsbyksKDA+aXx8bnVsbD09aSkmJihpPWUuc3R5bGVbdF0pLFl0LnRlc3QoaSkpcmV0dXJuIGk7cj1hJiYoYi5zdXBwb3J0LmJveFNpemluZ1JlbGlhYmxlfHxpPT09ZS5zdHlsZVt0XSksaT1wYXJzZUZsb2F0KGkpfHwwfXJldHVybiBpK2FuKGUsdCxufHwoYT9cImJvcmRlclwiOlwiY29udGVudFwiKSxyLG8pK1wicHhcIn1mdW5jdGlvbiB1bihlKXt2YXIgdD1vLG49R3RbZV07cmV0dXJuIG58fChuPWxuKGUsdCksXCJub25lXCIhPT1uJiZufHwoUHQ9KFB0fHxiKFwiPGlmcmFtZSBmcmFtZWJvcmRlcj0nMCcgd2lkdGg9JzAnIGhlaWdodD0nMCcvPlwiKS5jc3MoXCJjc3NUZXh0XCIsXCJkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnRcIikpLmFwcGVuZFRvKHQuZG9jdW1lbnRFbGVtZW50KSx0PShQdFswXS5jb250ZW50V2luZG93fHxQdFswXS5jb250ZW50RG9jdW1lbnQpLmRvY3VtZW50LHQud3JpdGUoXCI8IWRvY3R5cGUgaHRtbD48aHRtbD48Ym9keT5cIiksdC5jbG9zZSgpLG49bG4oZSx0KSxQdC5kZXRhY2goKSksR3RbZV09biksbn1mdW5jdGlvbiBsbihlLHQpe3ZhciBuPWIodC5jcmVhdGVFbGVtZW50KGUpKS5hcHBlbmRUbyh0LmJvZHkpLHI9Yi5jc3MoblswXSxcImRpc3BsYXlcIik7cmV0dXJuIG4ucmVtb3ZlKCkscn1iLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihlLG4pe2IuY3NzSG9va3Nbbl09e2dldDpmdW5jdGlvbihlLHIsaSl7cmV0dXJuIHI/MD09PWUub2Zmc2V0V2lkdGgmJlh0LnRlc3QoYi5jc3MoZSxcImRpc3BsYXlcIikpP2Iuc3dhcChlLFF0LGZ1bmN0aW9uKCl7cmV0dXJuIHNuKGUsbixpKX0pOnNuKGUsbixpKTp0fSxzZXQ6ZnVuY3Rpb24oZSx0LHIpe3ZhciBpPXImJlJ0KGUpO3JldHVybiBvbihlLHQscj9hbihlLG4scixiLnN1cHBvcnQuYm94U2l6aW5nJiZcImJvcmRlci1ib3hcIj09PWIuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxpKSxpKTowKX19fSksYi5zdXBwb3J0Lm9wYWNpdHl8fChiLmNzc0hvb2tzLm9wYWNpdHk9e2dldDpmdW5jdGlvbihlLHQpe3JldHVybiBJdC50ZXN0KCh0JiZlLmN1cnJlbnRTdHlsZT9lLmN1cnJlbnRTdHlsZS5maWx0ZXI6ZS5zdHlsZS5maWx0ZXIpfHxcIlwiKT8uMDEqcGFyc2VGbG9hdChSZWdFeHAuJDEpK1wiXCI6dD9cIjFcIjpcIlwifSxzZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLnN0eWxlLHI9ZS5jdXJyZW50U3R5bGUsaT1iLmlzTnVtZXJpYyh0KT9cImFscGhhKG9wYWNpdHk9XCIrMTAwKnQrXCIpXCI6XCJcIixvPXImJnIuZmlsdGVyfHxuLmZpbHRlcnx8XCJcIjtuLnpvb209MSwodD49MXx8XCJcIj09PXQpJiZcIlwiPT09Yi50cmltKG8ucmVwbGFjZSgkdCxcIlwiKSkmJm4ucmVtb3ZlQXR0cmlidXRlJiYobi5yZW1vdmVBdHRyaWJ1dGUoXCJmaWx0ZXJcIiksXCJcIj09PXR8fHImJiFyLmZpbHRlcil8fChuLmZpbHRlcj0kdC50ZXN0KG8pP28ucmVwbGFjZSgkdCxpKTpvK1wiIFwiK2kpfX0pLGIoZnVuY3Rpb24oKXtiLnN1cHBvcnQucmVsaWFibGVNYXJnaW5SaWdodHx8KGIuY3NzSG9va3MubWFyZ2luUmlnaHQ9e2dldDpmdW5jdGlvbihlLG4pe3JldHVybiBuP2Iuc3dhcChlLHtkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9LFd0LFtlLFwibWFyZ2luUmlnaHRcIl0pOnR9fSksIWIuc3VwcG9ydC5waXhlbFBvc2l0aW9uJiZiLmZuLnBvc2l0aW9uJiZiLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGUsbil7Yi5jc3NIb29rc1tuXT17Z2V0OmZ1bmN0aW9uKGUscil7cmV0dXJuIHI/KHI9V3QoZSxuKSxZdC50ZXN0KHIpP2IoZSkucG9zaXRpb24oKVtuXStcInB4XCI6cik6dH19fSl9KSxiLmV4cHImJmIuZXhwci5maWx0ZXJzJiYoYi5leHByLmZpbHRlcnMuaGlkZGVuPWZ1bmN0aW9uKGUpe3JldHVybiAwPj1lLm9mZnNldFdpZHRoJiYwPj1lLm9mZnNldEhlaWdodHx8IWIuc3VwcG9ydC5yZWxpYWJsZUhpZGRlbk9mZnNldHMmJlwibm9uZVwiPT09KGUuc3R5bGUmJmUuc3R5bGUuZGlzcGxheXx8Yi5jc3MoZSxcImRpc3BsYXlcIikpfSxiLmV4cHIuZmlsdGVycy52aXNpYmxlPWZ1bmN0aW9uKGUpe3JldHVybiFiLmV4cHIuZmlsdGVycy5oaWRkZW4oZSl9KSxiLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihlLHQpe2IuY3NzSG9va3NbZSt0XT17ZXhwYW5kOmZ1bmN0aW9uKG4pe3ZhciByPTAsaT17fSxvPVwic3RyaW5nXCI9PXR5cGVvZiBuP24uc3BsaXQoXCIgXCIpOltuXTtmb3IoOzQ+cjtyKyspaVtlK1p0W3JdK3RdPW9bcl18fG9bci0yXXx8b1swXTtyZXR1cm4gaX19LFV0LnRlc3QoZSl8fChiLmNzc0hvb2tzW2UrdF0uc2V0PW9uKX0pO3ZhciBjbj0vJTIwL2cscG49L1xcW1xcXSQvLGZuPS9cXHI/XFxuL2csZG49L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLGhuPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtiLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIGIucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT1iLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBlP2IubWFrZUFycmF5KGUpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgZT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIWIodGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJmhuLnRlc3QodGhpcy5ub2RlTmFtZSkmJiFkbi50ZXN0KGUpJiYodGhpcy5jaGVja2VkfHwhTnQudGVzdChlKSl9KS5tYXAoZnVuY3Rpb24oZSx0KXt2YXIgbj1iKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1uP251bGw6Yi5pc0FycmF5KG4pP2IubWFwKG4sZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6dC5uYW1lLHZhbHVlOmUucmVwbGFjZShmbixcIlxcclxcblwiKX19KTp7bmFtZTp0Lm5hbWUsdmFsdWU6bi5yZXBsYWNlKGZuLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pLGIucGFyYW09ZnVuY3Rpb24oZSxuKXt2YXIgcixpPVtdLG89ZnVuY3Rpb24oZSx0KXt0PWIuaXNGdW5jdGlvbih0KT90KCk6bnVsbD09dD9cIlwiOnQsaVtpLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0KX07aWYobj09PXQmJihuPWIuYWpheFNldHRpbmdzJiZiLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbCksYi5pc0FycmF5KGUpfHxlLmpxdWVyeSYmIWIuaXNQbGFpbk9iamVjdChlKSliLmVhY2goZSxmdW5jdGlvbigpe28odGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IociBpbiBlKWduKHIsZVtyXSxuLG8pO3JldHVybiBpLmpvaW4oXCImXCIpLnJlcGxhY2UoY24sXCIrXCIpfTtmdW5jdGlvbiBnbihlLHQsbixyKXt2YXIgaTtpZihiLmlzQXJyYXkodCkpYi5lYWNoKHQsZnVuY3Rpb24odCxpKXtufHxwbi50ZXN0KGUpP3IoZSxpKTpnbihlK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgaT90OlwiXCIpK1wiXVwiLGksbixyKX0pO2Vsc2UgaWYobnx8XCJvYmplY3RcIiE9PWIudHlwZSh0KSlyKGUsdCk7ZWxzZSBmb3IoaSBpbiB0KWduKGUrXCJbXCIraStcIl1cIix0W2ldLG4scil9Yi5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe2IuZm5bdF09ZnVuY3Rpb24oZSxuKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24odCxudWxsLGUsbik6dGhpcy50cmlnZ2VyKHQpfX0pLGIuZm4uaG92ZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGUpLm1vdXNlbGVhdmUodHx8ZSl9O3ZhciBtbix5bix2bj1iLm5vdygpLGJuPS9cXD8vLHhuPS8jLiokLyx3bj0vKFs/Jl0pXz1bXiZdKi8sVG49L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopXFxyPyQvZ20sTm49L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sQ249L14oPzpHRVR8SEVBRCkkLyxrbj0vXlxcL1xcLy8sRW49L14oW1xcdy4rLV0rOikoPzpcXC9cXC8oW15cXC8/IzpdKikoPzo6KFxcZCspfCl8KS8sU249Yi5mbi5sb2FkLEFuPXt9LGpuPXt9LERuPVwiKi9cIi5jb25jYXQoXCIqXCIpO3RyeXt5bj1hLmhyZWZ9Y2F0Y2goTG4pe3luPW8uY3JlYXRlRWxlbWVudChcImFcIikseW4uaHJlZj1cIlwiLHluPXluLmhyZWZ9bW49RW4uZXhlYyh5bi50b0xvd2VyQ2FzZSgpKXx8W107ZnVuY3Rpb24gSG4oZSl7cmV0dXJuIGZ1bmN0aW9uKHQsbil7XCJzdHJpbmdcIiE9dHlwZW9mIHQmJihuPXQsdD1cIipcIik7dmFyIHIsaT0wLG89dC50b0xvd2VyQ2FzZSgpLm1hdGNoKHcpfHxbXTtpZihiLmlzRnVuY3Rpb24obikpd2hpbGUocj1vW2krK10pXCIrXCI9PT1yWzBdPyhyPXIuc2xpY2UoMSl8fFwiKlwiLChlW3JdPWVbcl18fFtdKS51bnNoaWZ0KG4pKTooZVtyXT1lW3JdfHxbXSkucHVzaChuKX19ZnVuY3Rpb24gcW4oZSxuLHIsaSl7dmFyIG89e30sYT1lPT09am47ZnVuY3Rpb24gcyh1KXt2YXIgbDtyZXR1cm4gb1t1XT0hMCxiLmVhY2goZVt1XXx8W10sZnVuY3Rpb24oZSx1KXt2YXIgYz11KG4scixpKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgY3x8YXx8b1tjXT9hPyEobD1jKTp0OihuLmRhdGFUeXBlcy51bnNoaWZ0KGMpLHMoYyksITEpfSksbH1yZXR1cm4gcyhuLmRhdGFUeXBlc1swXSl8fCFvW1wiKlwiXSYmcyhcIipcIil9ZnVuY3Rpb24gTW4oZSxuKXt2YXIgcixpLG89Yi5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihpIGluIG4pbltpXSE9PXQmJigob1tpXT9lOnJ8fChyPXt9KSlbaV09bltpXSk7cmV0dXJuIHImJmIuZXh0ZW5kKCEwLGUsciksZX1iLmZuLmxvYWQ9ZnVuY3Rpb24oZSxuLHIpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlJiZTbilyZXR1cm4gU24uYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBpLG8sYSxzPXRoaXMsdT1lLmluZGV4T2YoXCIgXCIpO3JldHVybiB1Pj0wJiYoaT1lLnNsaWNlKHUsZS5sZW5ndGgpLGU9ZS5zbGljZSgwLHUpKSxiLmlzRnVuY3Rpb24obik/KHI9bixuPXQpOm4mJlwib2JqZWN0XCI9PXR5cGVvZiBuJiYoYT1cIlBPU1RcIikscy5sZW5ndGg+MCYmYi5hamF4KHt1cmw6ZSx0eXBlOmEsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpufSkuZG9uZShmdW5jdGlvbihlKXtvPWFyZ3VtZW50cyxzLmh0bWwoaT9iKFwiPGRpdj5cIikuYXBwZW5kKGIucGFyc2VIVE1MKGUpKS5maW5kKGkpOmUpfSkuY29tcGxldGUociYmZnVuY3Rpb24oZSx0KXtzLmVhY2gocixvfHxbZS5yZXNwb25zZVRleHQsdCxlXSl9KSx0aGlzfSxiLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihlLHQpe2IuZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMub24odCxlKX19KSxiLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGUsbil7YltuXT1mdW5jdGlvbihlLHIsaSxvKXtyZXR1cm4gYi5pc0Z1bmN0aW9uKHIpJiYobz1vfHxpLGk9cixyPXQpLGIuYWpheCh7dXJsOmUsdHlwZTpuLGRhdGFUeXBlOm8sZGF0YTpyLHN1Y2Nlc3M6aX0pfX0pLGIuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDp5bix0eXBlOlwiR0VUXCIsaXNMb2NhbDpObi50ZXN0KG1uWzFdKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpEbix0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi94bWwvLGh0bWw6L2h0bWwvLGpzb246L2pzb24vfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6ZS5TdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOmIucGFyc2VKU09OLFwidGV4dCB4bWxcIjpiLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9NbihNbihlLGIuYWpheFNldHRpbmdzKSx0KTpNbihiLmFqYXhTZXR0aW5ncyxlKX0sYWpheFByZWZpbHRlcjpIbihBbiksYWpheFRyYW5zcG9ydDpIbihqbiksYWpheDpmdW5jdGlvbihlLG4pe1wib2JqZWN0XCI9PXR5cGVvZiBlJiYobj1lLGU9dCksbj1ufHx7fTt2YXIgcixpLG8sYSxzLHUsbCxjLHA9Yi5hamF4U2V0dXAoe30sbiksZj1wLmNvbnRleHR8fHAsZD1wLmNvbnRleHQmJihmLm5vZGVUeXBlfHxmLmpxdWVyeSk/YihmKTpiLmV2ZW50LGg9Yi5EZWZlcnJlZCgpLGc9Yi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxtPXAuc3RhdHVzQ29kZXx8e30seT17fSx2PXt9LHg9MCxUPVwiY2FuY2VsZWRcIixOPXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoMj09PXgpe2lmKCFjKXtjPXt9O3doaWxlKHQ9VG4uZXhlYyhhKSljW3RbMV0udG9Mb3dlckNhc2UoKV09dFsyXX10PWNbZS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09dD9udWxsOnR9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiAyPT09eD9hOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHh8fChlPXZbbl09dltuXXx8ZSx5W2VdPXQpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIHh8fChwLm1pbWVUeXBlPWUpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoZSlpZigyPngpZm9yKHQgaW4gZSltW3RdPVttW3RdLGVbdF1dO2Vsc2UgTi5hbHdheXMoZVtOLnN0YXR1c10pO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihlKXt2YXIgdD1lfHxUO3JldHVybiBsJiZsLmFib3J0KHQpLGsoMCx0KSx0aGlzfX07aWYoaC5wcm9taXNlKE4pLmNvbXBsZXRlPWcuYWRkLE4uc3VjY2Vzcz1OLmRvbmUsTi5lcnJvcj1OLmZhaWwscC51cmw9KChlfHxwLnVybHx8eW4pK1wiXCIpLnJlcGxhY2UoeG4sXCJcIikucmVwbGFjZShrbixtblsxXStcIi8vXCIpLHAudHlwZT1uLm1ldGhvZHx8bi50eXBlfHxwLm1ldGhvZHx8cC50eXBlLHAuZGF0YVR5cGVzPWIudHJpbShwLmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaCh3KXx8W1wiXCJdLG51bGw9PXAuY3Jvc3NEb21haW4mJihyPUVuLmV4ZWMocC51cmwudG9Mb3dlckNhc2UoKSkscC5jcm9zc0RvbWFpbj0hKCFyfHxyWzFdPT09bW5bMV0mJnJbMl09PT1tblsyXSYmKHJbM118fChcImh0dHA6XCI9PT1yWzFdPzgwOjQ0MykpPT0obW5bM118fChcImh0dHA6XCI9PT1tblsxXT84MDo0NDMpKSkpLHAuZGF0YSYmcC5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIHAuZGF0YSYmKHAuZGF0YT1iLnBhcmFtKHAuZGF0YSxwLnRyYWRpdGlvbmFsKSkscW4oQW4scCxuLE4pLDI9PT14KXJldHVybiBOO3U9cC5nbG9iYWwsdSYmMD09PWIuYWN0aXZlKysmJmIuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxwLnR5cGU9cC50eXBlLnRvVXBwZXJDYXNlKCkscC5oYXNDb250ZW50PSFDbi50ZXN0KHAudHlwZSksbz1wLnVybCxwLmhhc0NvbnRlbnR8fChwLmRhdGEmJihvPXAudXJsKz0oYm4udGVzdChvKT9cIiZcIjpcIj9cIikrcC5kYXRhLGRlbGV0ZSBwLmRhdGEpLHAuY2FjaGU9PT0hMSYmKHAudXJsPXduLnRlc3Qobyk/by5yZXBsYWNlKHduLFwiJDFfPVwiK3ZuKyspOm8rKGJuLnRlc3Qobyk/XCImXCI6XCI/XCIpK1wiXz1cIit2bisrKSkscC5pZk1vZGlmaWVkJiYoYi5sYXN0TW9kaWZpZWRbb10mJk4uc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsYi5sYXN0TW9kaWZpZWRbb10pLGIuZXRhZ1tvXSYmTi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLGIuZXRhZ1tvXSkpLChwLmRhdGEmJnAuaGFzQ29udGVudCYmcC5jb250ZW50VHlwZSE9PSExfHxuLmNvbnRlbnRUeXBlKSYmTi5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIscC5jb250ZW50VHlwZSksTi5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIscC5kYXRhVHlwZXNbMF0mJnAuYWNjZXB0c1twLmRhdGFUeXBlc1swXV0/cC5hY2NlcHRzW3AuZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1wLmRhdGFUeXBlc1swXT9cIiwgXCIrRG4rXCI7IHE9MC4wMVwiOlwiXCIpOnAuYWNjZXB0c1tcIipcIl0pO2ZvcihpIGluIHAuaGVhZGVycylOLnNldFJlcXVlc3RIZWFkZXIoaSxwLmhlYWRlcnNbaV0pO2lmKHAuYmVmb3JlU2VuZCYmKHAuYmVmb3JlU2VuZC5jYWxsKGYsTixwKT09PSExfHwyPT09eCkpcmV0dXJuIE4uYWJvcnQoKTtUPVwiYWJvcnRcIjtmb3IoaSBpbntzdWNjZXNzOjEsZXJyb3I6MSxjb21wbGV0ZToxfSlOW2ldKHBbaV0pO2lmKGw9cW4oam4scCxuLE4pKXtOLnJlYWR5U3RhdGU9MSx1JiZkLnRyaWdnZXIoXCJhamF4U2VuZFwiLFtOLHBdKSxwLmFzeW5jJiZwLnRpbWVvdXQ+MCYmKHM9c2V0VGltZW91dChmdW5jdGlvbigpe04uYWJvcnQoXCJ0aW1lb3V0XCIpfSxwLnRpbWVvdXQpKTt0cnl7eD0xLGwuc2VuZCh5LGspfWNhdGNoKEMpe2lmKCEoMj54KSl0aHJvdyBDO2soLTEsQyl9fWVsc2UgaygtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiBrKGUsbixyLGkpe3ZhciBjLHksdix3LFQsQz1uOzIhPT14JiYoeD0yLHMmJmNsZWFyVGltZW91dChzKSxsPXQsYT1pfHxcIlwiLE4ucmVhZHlTdGF0ZT1lPjA/NDowLHImJih3PV9uKHAsTixyKSksZT49MjAwJiYzMDA+ZXx8MzA0PT09ZT8ocC5pZk1vZGlmaWVkJiYoVD1OLmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSxUJiYoYi5sYXN0TW9kaWZpZWRbb109VCksVD1OLmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSxUJiYoYi5ldGFnW29dPVQpKSwyMDQ9PT1lPyhjPSEwLEM9XCJub2NvbnRlbnRcIik6MzA0PT09ZT8oYz0hMCxDPVwibm90bW9kaWZpZWRcIik6KGM9Rm4ocCx3KSxDPWMuc3RhdGUseT1jLmRhdGEsdj1jLmVycm9yLGM9IXYpKToodj1DLChlfHwhQykmJihDPVwiZXJyb3JcIiwwPmUmJihlPTApKSksTi5zdGF0dXM9ZSxOLnN0YXR1c1RleHQ9KG58fEMpK1wiXCIsYz9oLnJlc29sdmVXaXRoKGYsW3ksQyxOXSk6aC5yZWplY3RXaXRoKGYsW04sQyx2XSksTi5zdGF0dXNDb2RlKG0pLG09dCx1JiZkLnRyaWdnZXIoYz9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbTixwLGM/eTp2XSksZy5maXJlV2l0aChmLFtOLENdKSx1JiYoZC50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW04scF0pLC0tYi5hY3RpdmV8fGIuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIE59LGdldFNjcmlwdDpmdW5jdGlvbihlLG4pe3JldHVybiBiLmdldChlLHQsbixcInNjcmlwdFwiKX0sZ2V0SlNPTjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGIuZ2V0KGUsdCxuLFwianNvblwiKX19KTtmdW5jdGlvbiBfbihlLG4scil7dmFyIGksbyxhLHMsdT1lLmNvbnRlbnRzLGw9ZS5kYXRhVHlwZXMsYz1lLnJlc3BvbnNlRmllbGRzO2ZvcihzIGluIGMpcyBpbiByJiYobltjW3NdXT1yW3NdKTt3aGlsZShcIipcIj09PWxbMF0pbC5zaGlmdCgpLG89PT10JiYobz1lLm1pbWVUeXBlfHxuLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihvKWZvcihzIGluIHUpaWYodVtzXSYmdVtzXS50ZXN0KG8pKXtsLnVuc2hpZnQocyk7YnJlYWt9aWYobFswXWluIHIpYT1sWzBdO2Vsc2V7Zm9yKHMgaW4gcil7aWYoIWxbMF18fGUuY29udmVydGVyc1tzK1wiIFwiK2xbMF1dKXthPXM7YnJlYWt9aXx8KGk9cyl9YT1hfHxpfXJldHVybiBhPyhhIT09bFswXSYmbC51bnNoaWZ0KGEpLHJbYV0pOnR9ZnVuY3Rpb24gRm4oZSx0KXt2YXIgbixyLGksbyxhPXt9LHM9MCx1PWUuZGF0YVR5cGVzLnNsaWNlKCksbD11WzBdO2lmKGUuZGF0YUZpbHRlciYmKHQ9ZS5kYXRhRmlsdGVyKHQsZS5kYXRhVHlwZSkpLHVbMV0pZm9yKGkgaW4gZS5jb252ZXJ0ZXJzKWFbaS50b0xvd2VyQ2FzZSgpXT1lLmNvbnZlcnRlcnNbaV07Zm9yKDtyPXVbKytzXTspaWYoXCIqXCIhPT1yKXtpZihcIipcIiE9PWwmJmwhPT1yKXtpZihpPWFbbCtcIiBcIityXXx8YVtcIiogXCIrcl0sIWkpZm9yKG4gaW4gYSlpZihvPW4uc3BsaXQoXCIgXCIpLG9bMV09PT1yJiYoaT1hW2wrXCIgXCIrb1swXV18fGFbXCIqIFwiK29bMF1dKSl7aT09PSEwP2k9YVtuXTphW25dIT09ITAmJihyPW9bMF0sdS5zcGxpY2Uocy0tLDAscikpO2JyZWFrfWlmKGkhPT0hMClpZihpJiZlW1widGhyb3dzXCJdKXQ9aSh0KTtlbHNlIHRyeXt0PWkodCl9Y2F0Y2goYyl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjppP2M6XCJObyBjb252ZXJzaW9uIGZyb20gXCIrbCtcIiB0byBcIityfX19bD1yfXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOnR9fWIuYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi8oPzpqYXZhfGVjbWEpc2NyaXB0L30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGUpe3JldHVybiBiLmdsb2JhbEV2YWwoZSksZX19fSksYi5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7ZS5jYWNoZT09PXQmJihlLmNhY2hlPSExKSxlLmNyb3NzRG9tYWluJiYoZS50eXBlPVwiR0VUXCIsZS5nbG9iYWw9ITEpfSksYi5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7aWYoZS5jcm9zc0RvbWFpbil7dmFyIG4scj1vLmhlYWR8fGIoXCJoZWFkXCIpWzBdfHxvLmRvY3VtZW50RWxlbWVudDtyZXR1cm57c2VuZDpmdW5jdGlvbih0LGkpe249by5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLG4uYXN5bmM9ITAsZS5zY3JpcHRDaGFyc2V0JiYobi5jaGFyc2V0PWUuc2NyaXB0Q2hhcnNldCksbi5zcmM9ZS51cmwsbi5vbmxvYWQ9bi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oZSx0KXsodHx8IW4ucmVhZHlTdGF0ZXx8L2xvYWRlZHxjb21wbGV0ZS8udGVzdChuLnJlYWR5U3RhdGUpKSYmKG4ub25sb2FkPW4ub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsbi5wYXJlbnROb2RlJiZuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobiksbj1udWxsLHR8fGkoMjAwLFwic3VjY2Vzc1wiKSl9LHIuaW5zZXJ0QmVmb3JlKG4sci5maXJzdENoaWxkKX0sYWJvcnQ6ZnVuY3Rpb24oKXtuJiZuLm9ubG9hZCh0LCEwKX19fX0pO3ZhciBPbj1bXSxCbj0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO2IuYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBlPU9uLnBvcCgpfHxiLmV4cGFuZG8rXCJfXCIrdm4rKztyZXR1cm4gdGhpc1tlXT0hMCxlfX0pLGIuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihuLHIsaSl7dmFyIG8sYSxzLHU9bi5qc29ucCE9PSExJiYoQm4udGVzdChuLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2Ygbi5kYXRhJiYhKG4uY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJkJuLnRlc3Qobi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiB1fHxcImpzb25wXCI9PT1uLmRhdGFUeXBlc1swXT8obz1uLmpzb25wQ2FsbGJhY2s9Yi5pc0Z1bmN0aW9uKG4uanNvbnBDYWxsYmFjayk/bi5qc29ucENhbGxiYWNrKCk6bi5qc29ucENhbGxiYWNrLHU/blt1XT1uW3VdLnJlcGxhY2UoQm4sXCIkMVwiK28pOm4uanNvbnAhPT0hMSYmKG4udXJsKz0oYm4udGVzdChuLnVybCk/XCImXCI6XCI/XCIpK24uanNvbnArXCI9XCIrbyksbi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gc3x8Yi5lcnJvcihvK1wiIHdhcyBub3QgY2FsbGVkXCIpLHNbMF19LG4uZGF0YVR5cGVzWzBdPVwianNvblwiLGE9ZVtvXSxlW29dPWZ1bmN0aW9uKCl7cz1hcmd1bWVudHN9LGkuYWx3YXlzKGZ1bmN0aW9uKCl7ZVtvXT1hLG5bb10mJihuLmpzb25wQ2FsbGJhY2s9ci5qc29ucENhbGxiYWNrLE9uLnB1c2gobykpLHMmJmIuaXNGdW5jdGlvbihhKSYmYShzWzBdKSxzPWE9dH0pLFwic2NyaXB0XCIpOnR9KTt2YXIgUG4sUm4sV249MCwkbj1lLkFjdGl2ZVhPYmplY3QmJmZ1bmN0aW9uKCl7dmFyIGU7Zm9yKGUgaW4gUG4pUG5bZV0odCwhMCl9O2Z1bmN0aW9uIEluKCl7dHJ5e3JldHVybiBuZXcgZS5YTUxIdHRwUmVxdWVzdH1jYXRjaCh0KXt9fWZ1bmN0aW9uIHpuKCl7dHJ5e3JldHVybiBuZXcgZS5BY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIil9Y2F0Y2godCl7fX1iLmFqYXhTZXR0aW5ncy54aHI9ZS5BY3RpdmVYT2JqZWN0P2Z1bmN0aW9uKCl7cmV0dXJuIXRoaXMuaXNMb2NhbCYmSW4oKXx8em4oKX06SW4sUm49Yi5hamF4U2V0dGluZ3MueGhyKCksYi5zdXBwb3J0LmNvcnM9ISFSbiYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIFJuLFJuPWIuc3VwcG9ydC5hamF4PSEhUm4sUm4mJmIuYWpheFRyYW5zcG9ydChmdW5jdGlvbihuKXtpZighbi5jcm9zc0RvbWFpbnx8Yi5zdXBwb3J0LmNvcnMpe3ZhciByO3JldHVybntzZW5kOmZ1bmN0aW9uKGksbyl7dmFyIGEscyx1PW4ueGhyKCk7aWYobi51c2VybmFtZT91Lm9wZW4obi50eXBlLG4udXJsLG4uYXN5bmMsbi51c2VybmFtZSxuLnBhc3N3b3JkKTp1Lm9wZW4obi50eXBlLG4udXJsLG4uYXN5bmMpLG4ueGhyRmllbGRzKWZvcihzIGluIG4ueGhyRmllbGRzKXVbc109bi54aHJGaWVsZHNbc107bi5taW1lVHlwZSYmdS5vdmVycmlkZU1pbWVUeXBlJiZ1Lm92ZXJyaWRlTWltZVR5cGUobi5taW1lVHlwZSksbi5jcm9zc0RvbWFpbnx8aVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChpW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO3RyeXtmb3IocyBpbiBpKXUuc2V0UmVxdWVzdEhlYWRlcihzLGlbc10pfWNhdGNoKGwpe311LnNlbmQobi5oYXNDb250ZW50JiZuLmRhdGF8fG51bGwpLHI9ZnVuY3Rpb24oZSxpKXt2YXIgcyxsLGMscDt0cnl7aWYociYmKGl8fDQ9PT11LnJlYWR5U3RhdGUpKWlmKHI9dCxhJiYodS5vbnJlYWR5c3RhdGVjaGFuZ2U9Yi5ub29wLCRuJiZkZWxldGUgUG5bYV0pLGkpNCE9PXUucmVhZHlTdGF0ZSYmdS5hYm9ydCgpO2Vsc2V7cD17fSxzPXUuc3RhdHVzLGw9dS5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSxcInN0cmluZ1wiPT10eXBlb2YgdS5yZXNwb25zZVRleHQmJihwLnRleHQ9dS5yZXNwb25zZVRleHQpO3RyeXtjPXUuc3RhdHVzVGV4dH1jYXRjaChmKXtjPVwiXCJ9c3x8IW4uaXNMb2NhbHx8bi5jcm9zc0RvbWFpbj8xMjIzPT09cyYmKHM9MjA0KTpzPXAudGV4dD8yMDA6NDA0fX1jYXRjaChkKXtpfHxvKC0xLGQpfXAmJm8ocyxjLHAsbCl9LG4uYXN5bmM/ND09PXUucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KHIpOihhPSsrV24sJG4mJihQbnx8KFBuPXt9LGIoZSkudW5sb2FkKCRuKSksUG5bYV09ciksdS5vbnJlYWR5c3RhdGVjaGFuZ2U9cik6cigpfSxhYm9ydDpmdW5jdGlvbigpe3ImJnIodCwhMCl9fX19KTt2YXIgWG4sVW4sVm49L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLFluPVJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIreCtcIikoW2EteiVdKikkXCIsXCJpXCIpLEpuPS9xdWV1ZUhvb2tzJC8sR249W25yXSxRbj17XCIqXCI6W2Z1bmN0aW9uKGUsdCl7dmFyIG4scixpPXRoaXMuY3JlYXRlVHdlZW4oZSx0KSxvPVluLmV4ZWModCksYT1pLmN1cigpLHM9K2F8fDAsdT0xLGw9MjA7aWYobyl7aWYobj0rb1syXSxyPW9bM118fChiLmNzc051bWJlcltlXT9cIlwiOlwicHhcIiksXCJweFwiIT09ciYmcyl7cz1iLmNzcyhpLmVsZW0sZSwhMCl8fG58fDE7ZG8gdT11fHxcIi41XCIscy89dSxiLnN0eWxlKGkuZWxlbSxlLHMrcik7d2hpbGUodSE9PSh1PWkuY3VyKCkvYSkmJjEhPT11JiYtLWwpfWkudW5pdD1yLGkuc3RhcnQ9cyxpLmVuZD1vWzFdP3MrKG9bMV0rMSkqbjpufXJldHVybiBpfV19O2Z1bmN0aW9uIEtuKCl7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtYbj10fSksWG49Yi5ub3coKX1mdW5jdGlvbiBabihlLHQpe2IuZWFjaCh0LGZ1bmN0aW9uKHQsbil7dmFyIHI9KFFuW3RdfHxbXSkuY29uY2F0KFFuW1wiKlwiXSksaT0wLG89ci5sZW5ndGg7Zm9yKDtvPmk7aSsrKWlmKHJbaV0uY2FsbChlLHQsbikpcmV0dXJufSl9ZnVuY3Rpb24gZXIoZSx0LG4pe3ZhciByLGksbz0wLGE9R24ubGVuZ3RoLHM9Yi5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSB1LmVsZW19KSx1PWZ1bmN0aW9uKCl7aWYoaSlyZXR1cm4hMTt2YXIgdD1Ybnx8S24oKSxuPU1hdGgubWF4KDAsbC5zdGFydFRpbWUrbC5kdXJhdGlvbi10KSxyPW4vbC5kdXJhdGlvbnx8MCxvPTEtcixhPTAsdT1sLnR3ZWVucy5sZW5ndGg7Zm9yKDt1PmE7YSsrKWwudHdlZW5zW2FdLnJ1bihvKTtyZXR1cm4gcy5ub3RpZnlXaXRoKGUsW2wsbyxuXSksMT5vJiZ1P246KHMucmVzb2x2ZVdpdGgoZSxbbF0pLCExKX0sbD1zLnByb21pc2Uoe2VsZW06ZSxwcm9wczpiLmV4dGVuZCh7fSx0KSxvcHRzOmIuZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9fSxuKSxvcmlnaW5hbFByb3BlcnRpZXM6dCxvcmlnaW5hbE9wdGlvbnM6bixzdGFydFRpbWU6WG58fEtuKCksZHVyYXRpb246bi5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24odCxuKXt2YXIgcj1iLlR3ZWVuKGUsbC5vcHRzLHQsbixsLm9wdHMuc3BlY2lhbEVhc2luZ1t0XXx8bC5vcHRzLmVhc2luZyk7cmV0dXJuIGwudHdlZW5zLnB1c2gocikscn0sc3RvcDpmdW5jdGlvbih0KXt2YXIgbj0wLHI9dD9sLnR3ZWVucy5sZW5ndGg6MDtpZihpKXJldHVybiB0aGlzO2ZvcihpPSEwO3I+bjtuKyspbC50d2VlbnNbbl0ucnVuKDEpO3JldHVybiB0P3MucmVzb2x2ZVdpdGgoZSxbbCx0XSk6cy5yZWplY3RXaXRoKGUsW2wsdF0pLHRoaXN9fSksYz1sLnByb3BzO2Zvcih0cihjLGwub3B0cy5zcGVjaWFsRWFzaW5nKTthPm87bysrKWlmKHI9R25bb10uY2FsbChsLGUsYyxsLm9wdHMpKXJldHVybiByO3JldHVybiBabihsLGMpLGIuaXNGdW5jdGlvbihsLm9wdHMuc3RhcnQpJiZsLm9wdHMuc3RhcnQuY2FsbChlLGwpLGIuZngudGltZXIoYi5leHRlbmQodSx7ZWxlbTplLGFuaW06bCxxdWV1ZTpsLm9wdHMucXVldWV9KSksbC5wcm9ncmVzcyhsLm9wdHMucHJvZ3Jlc3MpLmRvbmUobC5vcHRzLmRvbmUsbC5vcHRzLmNvbXBsZXRlKS5mYWlsKGwub3B0cy5mYWlsKS5hbHdheXMobC5vcHRzLmFsd2F5cyl9ZnVuY3Rpb24gdHIoZSx0KXt2YXIgbixyLGksbyxhO2ZvcihpIGluIGUpaWYocj1iLmNhbWVsQ2FzZShpKSxvPXRbcl0sbj1lW2ldLGIuaXNBcnJheShuKSYmKG89blsxXSxuPWVbaV09blswXSksaSE9PXImJihlW3JdPW4sZGVsZXRlIGVbaV0pLGE9Yi5jc3NIb29rc1tyXSxhJiZcImV4cGFuZFwiaW4gYSl7bj1hLmV4cGFuZChuKSxkZWxldGUgZVtyXTtmb3IoaSBpbiBuKWkgaW4gZXx8KGVbaV09bltpXSx0W2ldPW8pfWVsc2UgdFtyXT1vfWIuQW5pbWF0aW9uPWIuZXh0ZW5kKGVyLHt0d2VlbmVyOmZ1bmN0aW9uKGUsdCl7Yi5pc0Z1bmN0aW9uKGUpPyh0PWUsZT1bXCIqXCJdKTplPWUuc3BsaXQoXCIgXCIpO3ZhciBuLHI9MCxpPWUubGVuZ3RoO2Zvcig7aT5yO3IrKyluPWVbcl0sUW5bbl09UW5bbl18fFtdLFFuW25dLnVuc2hpZnQodCl9LHByZWZpbHRlcjpmdW5jdGlvbihlLHQpe3Q/R24udW5zaGlmdChlKTpHbi5wdXNoKGUpfX0pO2Z1bmN0aW9uIG5yKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjLHAsZj10aGlzLGQ9ZS5zdHlsZSxoPXt9LGc9W10sbT1lLm5vZGVUeXBlJiZubihlKTtuLnF1ZXVlfHwoYz1iLl9xdWV1ZUhvb2tzKGUsXCJmeFwiKSxudWxsPT1jLnVucXVldWVkJiYoYy51bnF1ZXVlZD0wLHA9Yy5lbXB0eS5maXJlLGMuZW1wdHkuZmlyZT1mdW5jdGlvbigpe2MudW5xdWV1ZWR8fHAoKX0pLGMudW5xdWV1ZWQrKyxmLmFsd2F5cyhmdW5jdGlvbigpe2YuYWx3YXlzKGZ1bmN0aW9uKCl7Yy51bnF1ZXVlZC0tLGIucXVldWUoZSxcImZ4XCIpLmxlbmd0aHx8Yy5lbXB0eS5maXJlKCl9KX0pKSwxPT09ZS5ub2RlVHlwZSYmKFwiaGVpZ2h0XCJpbiB0fHxcIndpZHRoXCJpbiB0KSYmKG4ub3ZlcmZsb3c9W2Qub3ZlcmZsb3csZC5vdmVyZmxvd1gsZC5vdmVyZmxvd1ldLFwiaW5saW5lXCI9PT1iLmNzcyhlLFwiZGlzcGxheVwiKSYmXCJub25lXCI9PT1iLmNzcyhlLFwiZmxvYXRcIikmJihiLnN1cHBvcnQuaW5saW5lQmxvY2tOZWVkc0xheW91dCYmXCJpbmxpbmVcIiE9PXVuKGUubm9kZU5hbWUpP2Quem9vbT0xOmQuZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksbi5vdmVyZmxvdyYmKGQub3ZlcmZsb3c9XCJoaWRkZW5cIixiLnN1cHBvcnQuc2hyaW5rV3JhcEJsb2Nrc3x8Zi5hbHdheXMoZnVuY3Rpb24oKXtkLm92ZXJmbG93PW4ub3ZlcmZsb3dbMF0sZC5vdmVyZmxvd1g9bi5vdmVyZmxvd1sxXSxkLm92ZXJmbG93WT1uLm92ZXJmbG93WzJdfSkpO2ZvcihpIGluIHQpaWYoYT10W2ldLFZuLmV4ZWMoYSkpe2lmKGRlbGV0ZSB0W2ldLHU9dXx8XCJ0b2dnbGVcIj09PWEsYT09PShtP1wiaGlkZVwiOlwic2hvd1wiKSljb250aW51ZTtnLnB1c2goaSl9aWYobz1nLmxlbmd0aCl7cz1iLl9kYXRhKGUsXCJmeHNob3dcIil8fGIuX2RhdGEoZSxcImZ4c2hvd1wiLHt9KSxcImhpZGRlblwiaW4gcyYmKG09cy5oaWRkZW4pLHUmJihzLmhpZGRlbj0hbSksbT9iKGUpLnNob3coKTpmLmRvbmUoZnVuY3Rpb24oKXtiKGUpLmhpZGUoKX0pLGYuZG9uZShmdW5jdGlvbigpe3ZhciB0O2IuX3JlbW92ZURhdGEoZSxcImZ4c2hvd1wiKTtmb3IodCBpbiBoKWIuc3R5bGUoZSx0LGhbdF0pfSk7Zm9yKGk9MDtvPmk7aSsrKXI9Z1tpXSxsPWYuY3JlYXRlVHdlZW4ocixtP3Nbcl06MCksaFtyXT1zW3JdfHxiLnN0eWxlKGUsciksciBpbiBzfHwoc1tyXT1sLnN0YXJ0LG0mJihsLmVuZD1sLnN0YXJ0LGwuc3RhcnQ9XCJ3aWR0aFwiPT09cnx8XCJoZWlnaHRcIj09PXI/MTowKSl9fWZ1bmN0aW9uIHJyKGUsdCxuLHIsaSl7cmV0dXJuIG5ldyByci5wcm90b3R5cGUuaW5pdChlLHQsbixyLGkpfWIuVHdlZW49cnIscnIucHJvdG90eXBlPXtjb25zdHJ1Y3Rvcjpycixpbml0OmZ1bmN0aW9uKGUsdCxuLHIsaSxvKXt0aGlzLmVsZW09ZSx0aGlzLnByb3A9bix0aGlzLmVhc2luZz1pfHxcInN3aW5nXCIsdGhpcy5vcHRpb25zPXQsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPXIsdGhpcy51bml0PW98fChiLmNzc051bWJlcltuXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBlPXJyLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBlJiZlLmdldD9lLmdldCh0aGlzKTpyci5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oZSl7dmFyIHQsbj1yci5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5wb3M9dD10aGlzLm9wdGlvbnMuZHVyYXRpb24/Yi5lYXNpbmdbdGhpcy5lYXNpbmddKGUsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmUsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6ZSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqdCt0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxuJiZuLnNldD9uLnNldCh0aGlzKTpyci5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxyci5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9cnIucHJvdG90eXBlLHJyLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gbnVsbD09ZS5lbGVtW2UucHJvcF18fGUuZWxlbS5zdHlsZSYmbnVsbCE9ZS5lbGVtLnN0eWxlW2UucHJvcF0/KHQ9Yi5jc3MoZS5lbGVtLGUucHJvcCxcIlwiKSx0JiZcImF1dG9cIiE9PXQ/dDowKTplLmVsZW1bZS5wcm9wXX0sc2V0OmZ1bmN0aW9uKGUpe2IuZnguc3RlcFtlLnByb3BdP2IuZnguc3RlcFtlLnByb3BdKGUpOmUuZWxlbS5zdHlsZSYmKG51bGwhPWUuZWxlbS5zdHlsZVtiLmNzc1Byb3BzW2UucHJvcF1dfHxiLmNzc0hvb2tzW2UucHJvcF0pP2Iuc3R5bGUoZS5lbGVtLGUucHJvcCxlLm5vdytlLnVuaXQpOmUuZWxlbVtlLnByb3BdPWUubm93fX19LHJyLnByb3BIb29rcy5zY3JvbGxUb3A9cnIucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihlKXtlLmVsZW0ubm9kZVR5cGUmJmUuZWxlbS5wYXJlbnROb2RlJiYoZS5lbGVtW2UucHJvcF09ZS5ub3cpfX0sYi5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihlLHQpe3ZhciBuPWIuZm5bdF07Yi5mblt0XT1mdW5jdGlvbihlLHIsaSl7cmV0dXJuIG51bGw9PWV8fFwiYm9vbGVhblwiPT10eXBlb2YgZT9uLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoaXIodCwhMCksZSxyLGkpfX0pLGIuZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMuZmlsdGVyKG5uKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6dH0sZSxuLHIpfSxhbmltYXRlOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpPWIuaXNFbXB0eU9iamVjdChlKSxvPWIuc3BlZWQodCxuLHIpLGE9ZnVuY3Rpb24oKXt2YXIgdD1lcih0aGlzLGIuZXh0ZW5kKHt9LGUpLG8pO2EuZmluaXNoPWZ1bmN0aW9uKCl7dC5zdG9wKCEwKX0sKGl8fGIuX2RhdGEodGhpcyxcImZpbmlzaFwiKSkmJnQuc3RvcCghMCl9O3JldHVybiBhLmZpbmlzaD1hLGl8fG8ucXVldWU9PT0hMT90aGlzLmVhY2goYSk6dGhpcy5xdWV1ZShvLnF1ZXVlLGEpfSxzdG9wOmZ1bmN0aW9uKGUsbixyKXt2YXIgaT1mdW5jdGlvbihlKXt2YXIgdD1lLnN0b3A7ZGVsZXRlIGUuc3RvcCx0KHIpfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZSYmKHI9bixuPWUsZT10KSxuJiZlIT09ITEmJnRoaXMucXVldWUoZXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD0hMCxuPW51bGwhPWUmJmUrXCJxdWV1ZUhvb2tzXCIsbz1iLnRpbWVycyxhPWIuX2RhdGEodGhpcyk7aWYobilhW25dJiZhW25dLnN0b3AmJmkoYVtuXSk7ZWxzZSBmb3IobiBpbiBhKWFbbl0mJmFbbl0uc3RvcCYmSm4udGVzdChuKSYmaShhW25dKTtmb3Iobj1vLmxlbmd0aDtuLS07KW9bbl0uZWxlbSE9PXRoaXN8fG51bGwhPWUmJm9bbl0ucXVldWUhPT1lfHwob1tuXS5hbmltLnN0b3AociksdD0hMSxvLnNwbGljZShuLDEpKTsodHx8IXIpJiZiLmRlcXVldWUodGhpcyxlKX0pfSxmaW5pc2g6ZnVuY3Rpb24oZSl7cmV0dXJuIGUhPT0hMSYmKGU9ZXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdCxuPWIuX2RhdGEodGhpcykscj1uW2UrXCJxdWV1ZVwiXSxpPW5bZStcInF1ZXVlSG9va3NcIl0sbz1iLnRpbWVycyxhPXI/ci5sZW5ndGg6MDtmb3Iobi5maW5pc2g9ITAsYi5xdWV1ZSh0aGlzLGUsW10pLGkmJmkuY3VyJiZpLmN1ci5maW5pc2gmJmkuY3VyLmZpbmlzaC5jYWxsKHRoaXMpLHQ9by5sZW5ndGg7dC0tOylvW3RdLmVsZW09PT10aGlzJiZvW3RdLnF1ZXVlPT09ZSYmKG9bdF0uYW5pbS5zdG9wKCEwKSxvLnNwbGljZSh0LDEpKTtmb3IodD0wO2E+dDt0Kyspclt0XSYmclt0XS5maW5pc2gmJnJbdF0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIG4uZmluaXNofSl9fSk7ZnVuY3Rpb24gaXIoZSx0KXt2YXIgbixyPXtoZWlnaHQ6ZX0saT0wO2Zvcih0PXQ/MTowOzQ+aTtpKz0yLXQpbj1adFtpXSxyW1wibWFyZ2luXCIrbl09cltcInBhZGRpbmdcIituXT1lO3JldHVybiB0JiYoci5vcGFjaXR5PXIud2lkdGg9ZSkscn1iLmVhY2goe3NsaWRlRG93bjppcihcInNob3dcIiksc2xpZGVVcDppcihcImhpZGVcIiksc2xpZGVUb2dnbGU6aXIoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihlLHQpe2IuZm5bZV09ZnVuY3Rpb24oZSxuLHIpe3JldHVybiB0aGlzLmFuaW1hdGUodCxlLG4scil9fSksYi5zcGVlZD1mdW5jdGlvbihlLHQsbil7dmFyIHI9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGU/Yi5leHRlbmQoe30sZSk6e2NvbXBsZXRlOm58fCFuJiZ0fHxiLmlzRnVuY3Rpb24oZSkmJmUsZHVyYXRpb246ZSxlYXNpbmc6biYmdHx8dCYmIWIuaXNGdW5jdGlvbih0KSYmdH07cmV0dXJuIHIuZHVyYXRpb249Yi5meC5vZmY/MDpcIm51bWJlclwiPT10eXBlb2Ygci5kdXJhdGlvbj9yLmR1cmF0aW9uOnIuZHVyYXRpb24gaW4gYi5meC5zcGVlZHM/Yi5meC5zcGVlZHNbci5kdXJhdGlvbl06Yi5meC5zcGVlZHMuX2RlZmF1bHQsKG51bGw9PXIucXVldWV8fHIucXVldWU9PT0hMCkmJihyLnF1ZXVlPVwiZnhcIiksci5vbGQ9ci5jb21wbGV0ZSxyLmNvbXBsZXRlPWZ1bmN0aW9uKCl7Yi5pc0Z1bmN0aW9uKHIub2xkKSYmci5vbGQuY2FsbCh0aGlzKSxyLnF1ZXVlJiZiLmRlcXVldWUodGhpcyxyLnF1ZXVlKX0scn0sYi5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfX0sYi50aW1lcnM9W10sYi5meD1yci5wcm90b3R5cGUuaW5pdCxiLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgZSxuPWIudGltZXJzLHI9MDtmb3IoWG49Yi5ub3coKTtuLmxlbmd0aD5yO3IrKyllPW5bcl0sZSgpfHxuW3JdIT09ZXx8bi5zcGxpY2Uoci0tLDEpO24ubGVuZ3RofHxiLmZ4LnN0b3AoKSxYbj10fSxiLmZ4LnRpbWVyPWZ1bmN0aW9uKGUpe2UoKSYmYi50aW1lcnMucHVzaChlKSYmYi5meC5zdGFydCgpfSxiLmZ4LmludGVydmFsPTEzLGIuZnguc3RhcnQ9ZnVuY3Rpb24oKXtVbnx8KFVuPXNldEludGVydmFsKGIuZngudGljayxiLmZ4LmludGVydmFsKSl9LGIuZnguc3RvcD1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwoVW4pLFVuPW51bGx9LGIuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LGIuZnguc3RlcD17fSxiLmV4cHImJmIuZXhwci5maWx0ZXJzJiYoYi5leHByLmZpbHRlcnMuYW5pbWF0ZWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGIuZ3JlcChiLnRpbWVycyxmdW5jdGlvbih0KXtyZXR1cm4gZT09PXQuZWxlbX0pLmxlbmd0aH0pLGIuZm4ub2Zmc2V0PWZ1bmN0aW9uKGUpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGU9PT10P3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2Iub2Zmc2V0LnNldE9mZnNldCh0aGlzLGUsdCl9KTt2YXIgbixyLG89e3RvcDowLGxlZnQ6MH0sYT10aGlzWzBdLHM9YSYmYS5vd25lckRvY3VtZW50O2lmKHMpcmV0dXJuIG49cy5kb2N1bWVudEVsZW1lbnQsYi5jb250YWlucyhuLGEpPyh0eXBlb2YgYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QhPT1pJiYobz1hLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxyPW9yKHMpLHt0b3A6by50b3ArKHIucGFnZVlPZmZzZXR8fG4uc2Nyb2xsVG9wKS0obi5jbGllbnRUb3B8fDApLGxlZnQ6by5sZWZ0KyhyLnBhZ2VYT2Zmc2V0fHxuLnNjcm9sbExlZnQpLShuLmNsaWVudExlZnR8fDApfSk6b30sYi5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihlLHQsbil7dmFyIHI9Yi5jc3MoZSxcInBvc2l0aW9uXCIpO1wic3RhdGljXCI9PT1yJiYoZS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpO3ZhciBpPWIoZSksbz1pLm9mZnNldCgpLGE9Yi5jc3MoZSxcInRvcFwiKSxzPWIuY3NzKGUsXCJsZWZ0XCIpLHU9KFwiYWJzb2x1dGVcIj09PXJ8fFwiZml4ZWRcIj09PXIpJiZiLmluQXJyYXkoXCJhdXRvXCIsW2Esc10pPi0xLGw9e30sYz17fSxwLGY7dT8oYz1pLnBvc2l0aW9uKCkscD1jLnRvcCxmPWMubGVmdCk6KHA9cGFyc2VGbG9hdChhKXx8MCxmPXBhcnNlRmxvYXQocyl8fDApLGIuaXNGdW5jdGlvbih0KSYmKHQ9dC5jYWxsKGUsbixvKSksbnVsbCE9dC50b3AmJihsLnRvcD10LnRvcC1vLnRvcCtwKSxudWxsIT10LmxlZnQmJihsLmxlZnQ9dC5sZWZ0LW8ubGVmdCtmKSxcInVzaW5nXCJpbiB0P3QudXNpbmcuY2FsbChlLGwpOmkuY3NzKGwpfX0sYi5mbi5leHRlbmQoe3Bvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGUsdCxuPXt0b3A6MCxsZWZ0OjB9LHI9dGhpc1swXTtyZXR1cm5cImZpeGVkXCI9PT1iLmNzcyhyLFwicG9zaXRpb25cIik/dD1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihlPXRoaXMub2Zmc2V0UGFyZW50KCksdD10aGlzLm9mZnNldCgpLGIubm9kZU5hbWUoZVswXSxcImh0bWxcIil8fChuPWUub2Zmc2V0KCkpLG4udG9wKz1iLmNzcyhlWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksbi5sZWZ0Kz1iLmNzcyhlWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKSx7dG9wOnQudG9wLW4udG9wLWIuY3NzKHIsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDp0LmxlZnQtbi5sZWZ0LWIuY3NzKHIsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXMub2Zmc2V0UGFyZW50fHxvLmRvY3VtZW50RWxlbWVudDt3aGlsZShlJiYhYi5ub2RlTmFtZShlLFwiaHRtbFwiKSYmXCJzdGF0aWNcIj09PWIuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUub2Zmc2V0UGFyZW50O3JldHVybiBlfHxvLmRvY3VtZW50RWxlbWVudH0pfX0pLGIuZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oZSxuKXt2YXIgcj0vWS8udGVzdChuKTtiLmZuW2VdPWZ1bmN0aW9uKGkpe3JldHVybiBiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKGUsaSxvKXt2YXIgYT1vcihlKTtyZXR1cm4gbz09PXQ/YT9uIGluIGE/YVtuXTphLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtpXTplW2ldOihhP2Euc2Nyb2xsVG8ocj9iKGEpLnNjcm9sbExlZnQoKTpvLHI/bzpiKGEpLnNjcm9sbFRvcCgpKTplW2ldPW8sdCl9LGUsaSxhcmd1bWVudHMubGVuZ3RoLG51bGwpfX0pO2Z1bmN0aW9uIG9yKGUpe3JldHVybiBiLmlzV2luZG93KGUpP2U6OT09PWUubm9kZVR5cGU/ZS5kZWZhdWx0Vmlld3x8ZS5wYXJlbnRXaW5kb3c6ITF9Yi5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGUsbil7Yi5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIitlLGNvbnRlbnQ6bixcIlwiOlwib3V0ZXJcIitlfSxmdW5jdGlvbihyLGkpe2IuZm5baV09ZnVuY3Rpb24oaSxvKXt2YXIgYT1hcmd1bWVudHMubGVuZ3RoJiYocnx8XCJib29sZWFuXCIhPXR5cGVvZiBpKSxzPXJ8fChpPT09ITB8fG89PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKG4scixpKXt2YXIgbztyZXR1cm4gYi5pc1dpbmRvdyhuKT9uLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2VdOjk9PT1uLm5vZGVUeXBlPyhvPW4uZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KG4uYm9keVtcInNjcm9sbFwiK2VdLG9bXCJzY3JvbGxcIitlXSxuLmJvZHlbXCJvZmZzZXRcIitlXSxvW1wib2Zmc2V0XCIrZV0sb1tcImNsaWVudFwiK2VdKSk6aT09PXQ/Yi5jc3MobixyLHMpOmIuc3R5bGUobixyLGkscyl9LG4sYT9pOnQsYSxudWxsKX19KX0pLGUualF1ZXJ5PWUuJD1iLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lLmFtZC5qUXVlcnkmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIGJ9KX0pKHdpbmRvdyk7XG5cbi8vIFNuYXAgdGhpcyBzcGVjaWZpYyB2ZXJzaW9uIG9mIGpRdWVyeSBpbnRvIEg1UC4galF1ZXJ5Lm5vQ29uZmxpY3Qgd2lsbFxuLy8gcmV2ZXJ0IHRoZSBnbG9iYWxzIHRvIHdoYXQgdGhleSB3ZXJlIGJlZm9yZSB0aGlzIGZpbGUgd2FzIGxvYWRlZC5cbnZhciBINVAgPSB3aW5kb3cuSDVQID0gd2luZG93Lkg1UCB8fCB7fTtcblxuLyoqXG4gKiBqUXVlcnkgdjEuOS4xXG4gKlxuICogQG1lbWJlclxuICovXG5INVAualF1ZXJ5ID0galF1ZXJ5Lm5vQ29uZmxpY3QodHJ1ZSk7XG5INVAualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24gKHMpIHtcbiAgaWYgKHMuY3Jvc3NEb21haW4pIHtcbiAgICBzLmNvbnRlbnRzLnNjcmlwdCA9IGZhbHNlO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=