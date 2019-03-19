(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
        "use strict";

        function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

        function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

        function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

        function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

        var toposort = require('toposort'); // First, we define our edges.

        var graph = [['put on your shoes', 'tie your shoes'], ['put on your shirt', 'put on your jacket'], ['put on your shorts', 'put on your jacket'], ['put on your shorts', 'put on your shoes']];
        console.log(graph);
        graph = toposort(graph);
        console.log(graph);
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

            H5PIntegration.init = function (id) {
                var pathToContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'workspace';
                var displayOptions = arguments.length > 2 ? arguments[2] : undefined;
                H5PIntegration.url = "".concat(pathToContent);
                var getInfo = getJSONPromise("".concat(pathToContent, "/h5p.json"));
                var getContent = getJSONPromise("".concat(pathToContent, "/content/content.json"));
                var machinePath;
                var pathIncludesVersion = true;
                var checklibraryPath = getInfo.then(function (h5p) {
                    var dependency = h5p.preloadedDependencies[0];
                    machinePath = dependency.machineName + "-" + dependency.majorVersion + "." + dependency.minorVersion;
                    return new Promise(function (resolve) {
                        getJSONPromise("".concat(pathToContent, "/").concat(machinePath, "/library.json")).then(function (library) {
                            h5p.pathIncludesVersion = true;
                            machinePath = dependency.machineName + "-" + dependency.majorVersion + "." + dependency.minorVersion;
                            resolve(h5p);
                        }, function (e) {
                            h5p.pathIncludesVersion = false;
                            machinePath = dependency.machineName;
                            resolve(h5p);
                        });
                    });
                });
                var dependencyCSS = {};
                var dependencyJS = {}; // let dependencyDepth = 0;

                var loadDependencies = function loadDependencies(toFind, alreadyFound, h5p) {
                    // console.log(`loading dependency level: ${dependencyDepth}`);
                    // dependencyDepth++;
                    var findDependencies = toFind.map(function (dependency) {
                        return getJSONPromise("".concat(pathToContent, "/").concat(dependency, "/library.json")).then(function (library) {
                            var styles = [];
                            var scripts = [];
                            var dependencies2 = [];
                            var libraryPath = library.machineName + (h5p.pathIncludesVersion ? "-" + library.majorVersion + "." + library.minorVersion : '');

                            if (library.preloadedCss) {
                                dependencyCSS[libraryPath] = dependencyCSS[libraryPath] ? dependencyCSS[libraryPath] : [];
                                styles = library.preloadedCss.forEach(function (style) {
                                    dependencyCSS[libraryPath].push("".concat(pathToContent, "/").concat(libraryPath, "/").concat(style.path));
                                });
                            }

                            if (library.preloadedJs) {
                                dependencyJS[libraryPath] = dependencyJS[libraryPath] ? dependencyJS[libraryPath] : [];
                                scripts = library.preloadedJs.forEach(function (script) {
                                    dependencyJS[libraryPath].push("".concat(pathToContent, "/").concat(libraryPath, "/").concat(script.path));
                                });
                            }

                            if (library.preloadedDependencies) {
                                dependencies2 = library.preloadedDependencies.map(function (dependency2) {
                                    return dependency2.machineName + (h5p.pathIncludesVersion ? "-" + dependency2.majorVersion + "." + dependency2.minorVersion : '');
                                });
                            }

                            return Promise.resolve({
                                libraryPath: libraryPath,
                                dependencies: dependencies2
                            });
                        });
                    });
                    var findNext = [];
                    return Promise.all(findDependencies).then(function (data) {
                        // loop over newly found libraries
                        data.forEach(function (library) {
                            // push into found list
                            alreadyFound.push(library); // check if any dependencies haven't been found yet

                            library.dependencies.forEach(function (dependency) {
                                if (!alreadyFound.find(function (foundLibrary) {
                                    return foundLibrary.libraryPath === dependency;
                                }) && !data.find(function (foundLibrary) {
                                    return foundLibrary.libraryPath === dependency;
                                })) {
                                    findNext.push(dependency);
                                }
                            });
                        });

                        if (findNext.length > 0) {
                            return loadDependencies(findNext, alreadyFound, h5p);
                        }

                        return Promise.resolve(alreadyFound);
                    });
                };

                var getLibrary = checklibraryPath.then(function (h5p) {
                    H5PIntegration.pathIncludesVersion = h5p.pathIncludesVersion;
                    var mainLibrary = h5p.preloadedDependencies.find(function (dep) {
                        return dep.machineName === h5p.mainLibrary;
                    });
                    var mainLibraryPath = h5p.mainLibrary + (h5p.pathIncludesVersion ? "-" + mainLibrary.majorVersion + "." + mainLibrary.minorVersion : '');
                    return getJSONPromise("".concat(pathToContent, "/").concat(mainLibraryPath, "/library.json"));
                });
                Promise.all([getInfo, getContent, getLibrary]).then(function (data) {
                    var _data = _slicedToArray(data, 3),
                        h5p = _data[0],
                        content = _data[1],
                        library = _data[2];

                    var libraryPath = library.machineName + (h5p.pathIncludesVersion ? "-" + library.majorVersion + "." + library.minorVersion : '');
                    var styles = [];
                    var scripts = [];
                    var directDependencyNames = h5p.preloadedDependencies.map(function (dependency2) {
                        return dependency2.machineName + (h5p.pathIncludesVersion ? "-" + dependency2.majorVersion + "." + dependency2.minorVersion : '');
                    });
                    loadDependencies(directDependencyNames, [], h5p).then(function (results) {
                        /*var dependencySorter = new Toposort();
                        results.forEach(function (dependency) {
                            return dependencySorter.add(dependency.libraryPath, dependency.dependencies);
                        });
                        */

                        var graph = [];
                        results.forEach(function (dependency) {
                            //console.log(dependency.libraryPath);
                            //console.log(dependency.dependencies);
                            graph.push([dependency.libraryPath, dependency.dependencies]);
                        });
                        console.log(graph);

                        graph = toposort(graph);

                        console.log(graph);

                        //console.log(results);
                        dependencySorter.sort().reverse().forEach(function (dependencyName) {
                            Array.prototype.push.apply(styles, dependencyCSS[dependencyName]);
                            Array.prototype.push.apply(scripts, dependencyJS[dependencyName]);
                        });
                        Array.prototype.push.apply(styles, library.preloadedCss.map(function (style) {
                            return "".concat(pathToContent, "/").concat(libraryPath, "/").concat(style.path);
                        }));
                        Array.prototype.push.apply(scripts, library.preloadedJs.map(function (script) {
                            return "".concat(pathToContent, "/").concat(libraryPath, "/").concat(script.path);
                        }));
                        H5PIntegration.contents = H5PIntegration.contents ? H5PIntegration.contents : {};
                        H5PIntegration.contents["cid-".concat(id)] = {
                            library: "".concat(library.machineName, " ").concat(library.majorVersion, ".").concat(library.minorVersion),
                            jsonContent: JSON.stringify(content),
                            styles: styles,
                            scripts: scripts,
                            displayOptions: displayOptions
                        };
                        H5P.init();
                    });
                });
            };

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
                this.append("<div class=\"h5p-iframe-wrapper\" style=\"background-color:#DDD;\">\n      <iframe id=\"h5p-iframe-".concat(id, "\" class=\"h5p-iframe\" data-content-id=\"").concat(id, "\" style=\"width: 100%; height: 100%; border: none; display: block;\" src=\"about:blank\" frameBorder=\"0\"></iframe>\n    </div>")); // options.frameJs = options.frameJs || 'dist/h5p-standalone-frame.min.js';
                // options.frameCss = options.frameCss || 'dist/css/h5p.css';
                // options.h5pContent = options.h5pContent || 'workspace';

                H5PIntegration.core = {
                    styles: [frameCss],
                    scripts: [frameJs]
                };
                H5PIntegration.init(id, h5pContent, displayOptions);
            };
        })(H5P.jQuery);
    },{"toposort":2}],2:[function(require,module,exports){

        /**
         * Topological sorting function
         *
         * @param {Array} edges
         * @returns {Array}
         */

        module.exports = function(edges) {
            return toposort(uniqueNodes(edges), edges)
        }

        module.exports.array = toposort

        function toposort(nodes, edges) {
            var cursor = nodes.length
                , sorted = new Array(cursor)
                , visited = {}
                , i = cursor
                // Better data structures make algorithm much faster.
                , outgoingEdges = makeOutgoingEdges(edges)
                , nodesHash = makeNodesHash(nodes)

            // check for unknown nodes
            edges.forEach(function(edge) {
                if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
                    throw new Error('Unknown node. There is an unknown node in the supplied edges.')
                }
            })

            while (i--) {
                if (!visited[i]) visit(nodes[i], i, new Set())
            }

            return sorted

            function visit(node, i, predecessors) {
                if(predecessors.has(node)) {
                    var nodeRep
                    try {
                        nodeRep = ", node was:" + JSON.stringify(node)
                    } catch(e) {
                        nodeRep = ""
                    }
                    throw new Error('Cyclic dependency' + nodeRep)
                }

                if (!nodesHash.has(node)) {
                    throw new Error('Found unknown node. Make sure to provided all involved nodes. Unknown node: '+JSON.stringify(node))
                }

                if (visited[i]) return;
                visited[i] = true

                var outgoing = outgoingEdges.get(node) || new Set()
                outgoing = Array.from(outgoing)

                if (i = outgoing.length) {
                    predecessors.add(node)
                    do {
                        var child = outgoing[--i]
                        visit(child, nodesHash.get(child), predecessors)
                    } while (i)
                    predecessors.delete(node)
                }

                sorted[--cursor] = node
            }
        }

        function uniqueNodes(arr){
            var res = new Set()
            for (var i = 0, len = arr.length; i < len; i++) {
                var edge = arr[i]
                res.add(edge[0])
                res.add(edge[1])
            }
            return Array.from(res)
        }

        function makeOutgoingEdges(arr){
            var edges = new Map()
            for (var i = 0, len = arr.length; i < len; i++) {
                var edge = arr[i]
                if (!edges.has(edge[0])) edges.set(edge[0], new Set())
                if (!edges.has(edge[1])) edges.set(edge[1], new Set())
                edges.get(edge[0]).add(edge[1])
            }
            return edges
        }

        function makeNodesHash(arr){
            var res = new Map()
            for (var i = 0, len = arr.length; i < len; i++) {
                res.set(arr[i], i)
            }
            return res
        }

    },{}]},{},[1]);
