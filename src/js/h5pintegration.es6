/* global H5P, H5PIntegration, Toposort */
(function ($) {
  'use strict';
  function getJSONPromise(url) {
    return new Promise((resolve, reject) => {
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

  class H5PStandalone {
    constructor(id = 1, pathToContent = 'workspace', displayOptions) {
      this.id = id;
      this.path = pathToContent;
      this.displayOptions = displayOptions;
      return this.init();
    }

    /**
     * Initialize the H5P
     */
    async init() {
      this.h5p = await getJSONPromise(`${this.path}/h5p.json`);
      this.content = await getJSONPromise(`${this.path}/content/content.json`);
      H5PIntegration.pathIncludesVersion = this.pathIncludesVersion = await this.checkIfPathIncludesVersion();

      this.mainLibrary = await this.findMainLibrary();

      const dependencies = await this.findAllDependencies();

      const {styles, scripts} = this.sortDependencies(dependencies);

      H5PIntegration.url = this.path;
      H5PIntegration.contents = H5PIntegration.contents ? H5PIntegration.contents : {};

      H5PIntegration.contents[`cid-${this.id}`] = {
        library: `${this.mainLibrary.machineName} ${this.mainLibrary.majorVersion}.${this.mainLibrary.minorVersion}`,
        jsonContent: JSON.stringify(this.content),
        styles: styles,
        scripts: scripts,
        displayOptions: this.displayOptions
      };

      H5P.init();
    }

    /**
     * Check if the library folder include the version or not
     * This was changed at some point in H5P and we need to be backwards compatible
     * 
     * @return {boolean}
     */
    async checkIfPathIncludesVersion() {
      let dependency = this.h5p.preloadedDependencies[0];
      let machinePath = dependency.machineName + "-" + dependency.majorVersion + "." + dependency.minorVersion;

      let pathIncludesVersion;

      try {
        await getJSONPromise(`${this.path}/${machinePath}/library.json`);
        pathIncludesVersion = true;
      } catch (e) {
        pathIncludesVersion = false;
      }
      return pathIncludesVersion;
    }

    /**
     * return the path to a library
     * @param {object} library
     * @return {string}
     */
    libraryPath(library) {
      return library.machineName + (this.pathIncludesVersion ? "-" + library.majorVersion + "." + library.minorVersion : '');
    }

    /**
     * FInd the main library for this H5P
     * @return {Promise}
     */
    findMainLibrary() {
      const mainLibraryInfo = this.h5p.preloadedDependencies.find(dep => dep.machineName === this.h5p.mainLibrary);

      this.mainLibraryPath = this.h5p.mainLibrary + (this.pathIncludesVersion ? "-" + mainLibraryInfo.majorVersion + "." + mainLibraryInfo.minorVersion : '');
      return getJSONPromise(`${this.path}/${this.mainLibraryPath}/library.json`);
    }

    /**
     * find all the libraries used in this H5P
     * @return {Promise}
     */
    findAllDependencies() {
      const directDependencyNames = this.h5p.preloadedDependencies.map(dependency => this.libraryPath(dependency));

      return this.loadDependencies(directDependencyNames, []);
    }

    /**
     * searches through all supplied libraries for dependencies, this is recursive and repeats until all deep dependencies have been found
     * @param {string[]} toFind list of libraries to find the dependencies of
     * @param {string[]} alreadyFound the dependencies that have already been found
     */
    async loadDependencies(toFind, alreadyFound) {
      // console.log(`loading dependency level: ${dependencyDepth}`);
      // dependencyDepth++;
      let dependencies = alreadyFound;
      let findNext = [];
      let newDependencies = await Promise.all(toFind.map((libraryName) => this.findLibraryDependencies(libraryName)));
      // loop over newly found libraries
      newDependencies.forEach((library) => {
        // push into found list
        dependencies.push(library);
        // check if any dependencies haven't been found yet
        library.dependencies.forEach((dependency) => {
          if (!dependencies.find((foundLibrary) => foundLibrary.libraryPath === dependency) && !newDependencies.find((foundLibrary) => foundLibrary.libraryPath === dependency)) {
            findNext.push(dependency);
          }
        });
      });

      if (findNext.length > 0) {
        return this.loadDependencies(findNext, dependencies);
      }
      return dependencies;
    }

    /**
     * Loads a dependencies library.json and finds the libraries it dependson as well ass the JS and CSS it needs
     * @param {string} libraryName 
     */
    async findLibraryDependencies(libraryName) {
      const library = await getJSONPromise(`${this.path}/${libraryName}/library.json`);
      const libraryPath = this.libraryPath(library);

      let dependencies = [];
      if (library.preloadedDependencies) {
        dependencies = library.preloadedDependencies.map(dependency => this.libraryPath(dependency));
      }

      return { libraryPath, dependencies, preloadedCss: library.preloadedCss, preloadedJs: library.preloadedJs };
    }

    /**
     * Resolves the library dependency tree and sorts the JS and CSS files into order
     * @param {object[]} dependencies 
     * @return {object}
     */
    sortDependencies(dependencies) {
      const dependencySorter = new Toposort();
      let CSSDependencies = {};
      let JSDependencies = {};

      dependencies.forEach(dependency => {
        dependencySorter.add(dependency.libraryPath, dependency.dependencies);

        if (dependency.preloadedCss) {
          CSSDependencies[dependency.libraryPath] = CSSDependencies[dependency.libraryPath] ? CSSDependencies[dependency.libraryPath] : [];
          dependency.preloadedCss.forEach(style => {
            CSSDependencies[dependency.libraryPath].push(`${this.path}/${dependency.libraryPath}/${style.path}`);
          });
        }

        if (dependency.preloadedJs) {
          JSDependencies[dependency.libraryPath] = JSDependencies[dependency.libraryPath] ? JSDependencies[dependency.libraryPath] : [];
          dependency.preloadedJs.forEach(script => {
            JSDependencies[dependency.libraryPath].push(`${this.path}/${dependency.libraryPath}/${script.path}`);
          });
        }
      });

      let styles = [];
      let scripts = [];

      dependencySorter.sort().reverse().forEach(function (dependencyName) {
        Array.prototype.push.apply(styles, CSSDependencies[dependencyName]);
        Array.prototype.push.apply(scripts, JSDependencies[dependencyName]);
      });

      Array.prototype.push.apply(styles, this.mainLibrary.preloadedCss.map(style => `${this.path}/${this.mainLibraryPath}/${style.path}`));
      Array.prototype.push.apply(scripts, this.mainLibrary.preloadedJs.map(script => `${this.path}/${this.mainLibraryPath}/${script.path}`));

      return {styles, scripts};
    }
  }

  $.fn.h5p = function ({
    id = 1,
    frameJs = 'dist/h5p-standalone-frame.min.js',
    frameCss = 'dist/css/h5p.css',
    h5pContent = 'workspace',
    displayOptions = {}
  } = {}) {

    ({
      frame: displayOptions.frame = true,
      copyright: displayOptions.copyright = true,
      embed: displayOptions.embed = true,
      download: displayOptions.download = true,
      icon: displayOptions.icon = true,
      export: displayOptions.export = true
    } = displayOptions);

    this.append(`<div class="h5p-iframe-wrapper" style="background-color:#DDD;">
      <iframe id="h5p-iframe-${id}" class="h5p-iframe" data-content-id="${id}" style="width: 100%; height: 100%; border: none; display: block;" src="about:blank" frameBorder="0"></iframe>
    </div>`);

    H5PIntegration.core = {
      styles: [frameCss],
      scripts: [frameJs]
    };

    new H5PStandalone(id, h5pContent, displayOptions);
  }
})(H5P.jQuery);
