/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

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
  runtime.wrap = wrap;

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

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
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
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function(arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value instanceof AwaitArgument) {
          return Promise.resolve(value.arg).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
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

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
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

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = arg;

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp[toStringTagSymbol] = "Generator";

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

  runtime.keys = function(object) {
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
  runtime.values = values;

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
        return !!caught;
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
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
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

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global H5P, H5PIntegration, Toposort */
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

  var H5PStandalone = function () {
    function H5PStandalone() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var pathToContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'workspace';
      var displayOptions = arguments[2];

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
      value: function init() {
        var dependencies, _sortDependencies, styles, scripts;

        return regeneratorRuntime.async(function init$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return regeneratorRuntime.awrap(getJSONPromise(this.path + "/h5p.json"));

              case 2:
                this.h5p = _context.sent;
                _context.next = 5;
                return regeneratorRuntime.awrap(getJSONPromise(this.path + "/content/content.json"));

              case 5:
                this.content = _context.sent;
                _context.next = 8;
                return regeneratorRuntime.awrap(this.checkIfPathIncludesVersion());

              case 8:
                H5PIntegration.pathIncludesVersion = this.pathIncludesVersion = _context.sent;
                _context.next = 11;
                return regeneratorRuntime.awrap(this.findMainLibrary());

              case 11:
                this.mainLibrary = _context.sent;
                _context.next = 14;
                return regeneratorRuntime.awrap(this.findAllDependencies());

              case 14:
                dependencies = _context.sent;
                _sortDependencies = this.sortDependencies(dependencies), styles = _sortDependencies.styles, scripts = _sortDependencies.scripts;


                H5PIntegration.url = this.path;
                H5PIntegration.contents = H5PIntegration.contents ? H5PIntegration.contents : {};

                H5PIntegration.contents["cid-" + this.id] = {
                  library: this.mainLibrary.machineName + " " + this.mainLibrary.majorVersion + "." + this.mainLibrary.minorVersion,
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
        }, null, this);
      }

      /**
       * Check if the library folder include the version or not
       * This was changed at some point in H5P and we need to be backwards compatible
       * 
       * @return {boolean}
       */

    }, {
      key: "checkIfPathIncludesVersion",
      value: function checkIfPathIncludesVersion() {
        var dependency, machinePath, pathIncludesVersion;
        return regeneratorRuntime.async(function checkIfPathIncludesVersion$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dependency = this.h5p.preloadedDependencies[0];
                machinePath = dependency.machineName + "-" + dependency.majorVersion + "." + dependency.minorVersion;
                pathIncludesVersion = void 0;
                _context2.prev = 3;
                _context2.next = 6;
                return regeneratorRuntime.awrap(getJSONPromise(this.path + "/" + machinePath + "/library.json"));

              case 6:
                pathIncludesVersion = true;
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](3);

                pathIncludesVersion = false;

              case 12:
                return _context2.abrupt("return", pathIncludesVersion);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, null, this, [[3, 9]]);
      }

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
        return getJSONPromise(this.path + "/" + this.mainLibraryPath + "/library.json");
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
      value: function loadDependencies(toFind, alreadyFound) {
        var _this3 = this;

        var dependencies, findNext, newDependencies;
        return regeneratorRuntime.async(function loadDependencies$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // console.log(`loading dependency level: ${dependencyDepth}`);
                // dependencyDepth++;
                dependencies = alreadyFound;
                findNext = [];
                _context3.next = 4;
                return regeneratorRuntime.awrap(Promise.all(toFind.map(function (libraryName) {
                  return _this3.findLibraryDependencies(libraryName);
                })));

              case 4:
                newDependencies = _context3.sent;

                // loop over newly found libraries
                newDependencies.forEach(function (library) {
                  // push into found list
                  dependencies.push(library);
                  // check if any dependencies haven't been found yet
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
        }, null, this);
      }

      /**
       * Loads a dependencies library.json and finds the libraries it dependson as well ass the JS and CSS it needs
       * @param {string} libraryName 
       */

    }, {
      key: "findLibraryDependencies",
      value: function findLibraryDependencies(libraryName) {
        var _this4 = this;

        var library, libraryPath, dependencies;
        return regeneratorRuntime.async(function findLibraryDependencies$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return regeneratorRuntime.awrap(getJSONPromise(this.path + "/" + libraryName + "/library.json"));

              case 2:
                library = _context4.sent;
                libraryPath = this.libraryPath(library);
                dependencies = [];

                if (library.preloadedDependencies) {
                  dependencies = library.preloadedDependencies.map(function (dependency) {
                    return _this4.libraryPath(dependency);
                  });
                }

                return _context4.abrupt("return", { libraryPath: libraryPath, dependencies: dependencies, preloadedCss: library.preloadedCss, preloadedJs: library.preloadedJs });

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, null, this);
      }

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
              CSSDependencies[dependency.libraryPath].push(_this5.path + "/" + dependency.libraryPath + "/" + style.path);
            });
          }

          if (dependency.preloadedJs) {
            JSDependencies[dependency.libraryPath] = JSDependencies[dependency.libraryPath] ? JSDependencies[dependency.libraryPath] : [];
            dependency.preloadedJs.forEach(function (script) {
              JSDependencies[dependency.libraryPath].push(_this5.path + "/" + dependency.libraryPath + "/" + script.path);
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
          return _this5.path + "/" + _this5.mainLibraryPath + "/" + style.path;
        }));
        Array.prototype.push.apply(scripts, this.mainLibrary.preloadedJs.map(function (script) {
          return _this5.path + "/" + _this5.mainLibraryPath + "/" + script.path;
        }));

        return { styles: styles, scripts: scripts };
      }
    }]);

    return H5PStandalone;
  }();

  $.fn.h5p = function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$id = _ref.id,
        id = _ref$id === undefined ? 1 : _ref$id,
        _ref$frameJs = _ref.frameJs,
        frameJs = _ref$frameJs === undefined ? 'dist/h5p-standalone-frame.min.js' : _ref$frameJs,
        _ref$frameCss = _ref.frameCss,
        frameCss = _ref$frameCss === undefined ? 'dist/css/h5p.css' : _ref$frameCss,
        _ref$h5pContent = _ref.h5pContent,
        h5pContent = _ref$h5pContent === undefined ? 'workspace' : _ref$h5pContent,
        _ref$displayOptions = _ref.displayOptions,
        displayOptions = _ref$displayOptions === undefined ? {} : _ref$displayOptions;

    var _displayOptions$frame = displayOptions.frame;
    displayOptions.frame = _displayOptions$frame === undefined ? true : _displayOptions$frame;
    var _displayOptions$copyr = displayOptions.copyright;
    displayOptions.copyright = _displayOptions$copyr === undefined ? true : _displayOptions$copyr;
    var _displayOptions$embed = displayOptions.embed;
    displayOptions.embed = _displayOptions$embed === undefined ? true : _displayOptions$embed;
    var _displayOptions$downl = displayOptions.download;
    displayOptions.download = _displayOptions$downl === undefined ? true : _displayOptions$downl;
    var _displayOptions$icon = displayOptions.icon;
    displayOptions.icon = _displayOptions$icon === undefined ? true : _displayOptions$icon;
    var _displayOptions$expor = displayOptions.export;
    displayOptions.export = _displayOptions$expor === undefined ? true : _displayOptions$expor;


    this.append("<div class=\"h5p-iframe-wrapper\" style=\"background-color:#DDD;\">\n      <iframe id=\"h5p-iframe-" + id + "\" class=\"h5p-iframe\" data-content-id=\"" + id + "\" style=\"width: 100%; height: 100%; border: none; display: block;\" src=\"about:blank\" frameBorder=\"0\"></iframe>\n    </div>");

    H5PIntegration.core = {
      styles: [frameCss],
      scripts: [frameJs]
    };

    new H5PStandalone(id, h5pContent, displayOptions);
  };
})(H5P.jQuery);