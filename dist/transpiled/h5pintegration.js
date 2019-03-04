"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global H5P, H5PIntegration, Toposort */

/*jshint esnext: true */
(function ($) {
  'use strict';

  function getJSONPromise(url) {
    return new Promise(function (resolve, reject) {
      H5P.jQuery.getJSON(url, resolve).fail(reject);
    });
  }

  window.H5P = window.H5P || {};
  H5P.preventInit = true;
  window.H5PIntegration = window.H5PIntegration || {};
  H5PIntegration.l10n = {
    H5P: {
      advancedHelp: "Include this script on your website if you want dynamic sizing of the embedded content:",
      author: "Author",
      by: "by",
      close: "Close",
      contentChanged: "This content has changed since you last used it.",
      copyrightInformation: "Rights of use",
      copyrights: "Rights of use",
      copyrightsDescription: "View copyright information for this content.",
      disableFullscreen: "Disable fullscreen",
      download: "Download",
      downloadDescription: "Download this content as a H5P file.",
      embed: "Embed",
      embedDescription: "View the embed code for this content.",
      fullscreen: "Fullscreen",
      h5pDescription: "Visit H5P.org to check out more cool content.",
      hideAdvanced: "Hide advanced",
      license: "License",
      noCopyrights: "No copyright information available for this content.",
      showAdvanced: "Show advanced",
      showLess: "Show less",
      showMore: "Show more",
      size: "Size",
      source: "Source",
      startingOver: "You'll be starting over.",
      subLevel: "Sublevel",
      thumbnail: "Thumbnail",
      title: "Title",
      year: "Year"
    }
  };

  var H5PStandalone =
  /*#__PURE__*/
  function () {
    function H5PStandalone() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var pathToContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'workspace';
      var displayOptions = arguments.length > 2 ? arguments[2] : undefined;

      _classCallCheck(this, H5PStandalone);

      this.id = id;
      this.path = pathToContent;
      this.displayOptions = displayOptions;
      return this.init();
    }
    /**
     * Initialize the H5P
     */


    _createClass(H5PStandalone, [{
      key: "init",
      value: function () {
        var _init = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var dependencies, _this$sortDependencie, styles, scripts;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return getJSONPromise("".concat(this.path, "/h5p.json"));

                case 2:
                  this.h5p = _context.sent;
                  _context.next = 5;
                  return getJSONPromise("".concat(this.path, "/content/content.json"));

                case 5:
                  this.content = _context.sent;
                  _context.next = 8;
                  return this.checkIfPathIncludesVersion();

                case 8:
                  H5PIntegration.pathIncludesVersion = this.pathIncludesVersion = _context.sent;
                  _context.next = 11;
                  return this.findMainLibrary();

                case 11:
                  this.mainLibrary = _context.sent;
                  _context.next = 14;
                  return this.findAllDependencies();

                case 14:
                  dependencies = _context.sent;
                  _this$sortDependencie = this.sortDependencies(dependencies), styles = _this$sortDependencie.styles, scripts = _this$sortDependencie.scripts;
                  H5PIntegration.url = this.path;
                  H5PIntegration.contents = H5PIntegration.contents ? H5PIntegration.contents : {};
                  H5PIntegration.contents["cid-".concat(this.id)] = {
                    library: "".concat(this.mainLibrary.machineName, " ").concat(this.mainLibrary.majorVersion, ".").concat(this.mainLibrary.minorVersion),
                    jsonContent: JSON.stringify(this.content),
                    styles: styles,
                    scripts: scripts,
                    displayOptions: this.displayOptions
                  };
                  H5P.init();

                case 20:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
      /**
       * Check if the library folder include the version or not
       * This was changed at some point in H5P and we need to be backwards compatible
       * 
       * @return {boolean}
       */

    }, {
      key: "checkIfPathIncludesVersion",
      value: function () {
        var _checkIfPathIncludesVersion = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var dependency, machinePath, pathIncludesVersion;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  dependency = this.h5p.preloadedDependencies[0];
                  machinePath = dependency.machineName + "-" + dependency.majorVersion + "." + dependency.minorVersion;
                  _context2.prev = 2;
                  _context2.next = 5;
                  return getJSONPromise("".concat(this.path, "/").concat(machinePath, "/library.json"));

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
        return getJSONPromise("".concat(this.path, "/").concat(this.mainLibraryPath, "/library.json"));
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
        var _loadDependencies = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(toFind, alreadyFound) {
          var _this3 = this;

          var dependencies, findNext, newDependencies;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
        var _findLibraryDependencies = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4(libraryName) {
          var _this4 = this;

          var library, libraryPath, dependencies;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return getJSONPromise("".concat(this.path, "/").concat(libraryName, "/library.json"));

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

        var dependencySorter = new Toposort();
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

  $.fn.h5p = function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$id = _ref.id,
        id = _ref$id === void 0 ? 1 : _ref$id,
        _ref$frameJs = _ref.frameJs,
        frameJs = _ref$frameJs === void 0 ? 'dist/h5p-standalone-frame.min.js' : _ref$frameJs,
        _ref$frameCss = _ref.frameCss,
        frameCss = _ref$frameCss === void 0 ? 'dist/css/h5p.css' : _ref$frameCss,
        _ref$h5pContent = _ref.h5pContent,
        h5pContent = _ref$h5pContent === void 0 ? 'workspace' : _ref$h5pContent,
        _ref$displayOptions = _ref.displayOptions,
        displayOptions = _ref$displayOptions === void 0 ? {} : _ref$displayOptions;

    var _displayOptions$frame = displayOptions.frame;
    displayOptions.frame = _displayOptions$frame === void 0 ? true : _displayOptions$frame;
    var _displayOptions$copyr = displayOptions.copyright;
    displayOptions.copyright = _displayOptions$copyr === void 0 ? true : _displayOptions$copyr;
    var _displayOptions$embed = displayOptions.embed;
    displayOptions.embed = _displayOptions$embed === void 0 ? true : _displayOptions$embed;
    var _displayOptions$downl = displayOptions.download;
    displayOptions.download = _displayOptions$downl === void 0 ? true : _displayOptions$downl;
    var _displayOptions$icon = displayOptions.icon;
    displayOptions.icon = _displayOptions$icon === void 0 ? true : _displayOptions$icon;
    var _displayOptions$expor = displayOptions.export;
    displayOptions.export = _displayOptions$expor === void 0 ? true : _displayOptions$expor;
    this.append("<div class=\"h5p-iframe-wrapper\" style=\"background-color:#DDD;\">\n      <iframe id=\"h5p-iframe-".concat(id, "\" class=\"h5p-iframe\" data-content-id=\"").concat(id, "\" style=\"width: 100%; height: 100%; border: none; display: block;\" src=\"about:blank\" frameBorder=\"0\"></iframe>\n    </div>"));
    H5PIntegration.core = {
      styles: [frameCss],
      scripts: [frameJs]
    };
    new H5PStandalone(id, h5pContent, displayOptions);
  };
})(H5P.jQuery);