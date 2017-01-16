/*jshint esnext: true */
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

  H5PIntegration.init = function (id, pathToContent = 'workspace') {

    H5PIntegration.url = `${pathToContent}`;

    let getInfo = getJSONPromise(`${pathToContent}/h5p.json`);
    let getContent = getJSONPromise(`${pathToContent}/content/content.json`);
    let machinePath;
    let pathIncludesVersion = true;

    let checklibraryPath = getInfo.then(function(h5p) {
      let dependency = h5p.preloadedDependencies[0];
      machinePath = dependency.machineName + "-" + dependency.majorVersion + "." + dependency.minorVersion;

      return new Promise((resolve) => {
        getJSONPromise(`${pathToContent}/${machinePath}/library.json`).then(library => {
          h5p.pathIncludesVersion = true;
          machinePath = dependency.machineName + "-" + dependency.majorVersion + "." + dependency.minorVersion;
          resolve(h5p);
        }, (e) => {
          h5p.pathIncludesVersion = false;
          machinePath = dependency.machineName;
          resolve(h5p);
        });
      });
    });

    let getDirectDependencies = checklibraryPath.then(h5p => {
      let dependencies = h5p.preloadedDependencies;
      let loadDependencies = dependencies.map(dependency => {
        machinePath = dependency.machineName + (h5p.pathIncludesVersion ? "-" + dependency.majorVersion + "." + dependency.minorVersion : '');
        return getJSONPromise(`${pathToContent}/${machinePath}/library.json`).then(library => {
          let styles = [];
          let scripts = [];
          let dependencies2 = [];
          let libraryPath = library.machineName + (h5p.pathIncludesVersion ? "-" + library.majorVersion + "." + library.minorVersion : '');

          if (library.preloadedCss) {
            styles = library.preloadedCss.map(style => `${pathToContent}/${libraryPath}/${style.path}`);
          }

          if (library.preloadedJs) {
            scripts = library.preloadedJs.map(script => `${pathToContent}/${libraryPath}/${script.path}`);
          }

          if (library.preloadedDependencies) {
            dependencies2 = library.preloadedDependencies.map(dependency2 => dependency2.machineName);
          }

          return Promise.resolve({ name: dependency.machineName, styles: styles, scripts: scripts, dependencies: dependencies2 });
        });
      });
    return Promise.all(loadDependencies);
  });

  let getLibrary = checklibraryPath.then(function (h5p) {
    let mainLibrary = h5p.preloadedDependencies.find(dep => dep.machineName ===  h5p.mainLibrary);
    let mainLibraryPath = h5p.mainLibrary + (h5p.pathIncludesVersion ? "-" + mainLibrary.majorVersion + "." + mainLibrary.minorVersion : '');
    return getJSONPromise(`${pathToContent}/${mainLibraryPath}/library.json`);
  });

  Promise.all([getInfo, getContent, getLibrary, getDirectDependencies]).then(data => {
    let [h5p, content, library, dependencies] = data;
    let libraryPath = library.machineName + (h5p.pathIncludesVersion ? "-" + library.majorVersion + "." + library.minorVersion : '');
    let styles = library.preloadedCss.map(style => `${pathToContent}/${libraryPath}/${style.path}`);

    let scripts = library.preloadedJs.map(script => `${pathToContent}/${libraryPath}/${script.path}`);


    let dependencySorter = new Toposort();

    dependencies.forEach(dependency => dependencySorter.add(dependency.name, dependency.dependencies));

    dependencySorter.sort().reverse().forEach(function (dependencyName) {
      let dependency = dependencies.find(function (dept) {
        return dept.name === dependencyName;
      });
      if (typeof dependency === "undefined") {
        console.warn("Skipping unmet dependency " + dependencyName);
        return;
      }
      Array.prototype.push.apply(styles, dependency.styles);
      Array.prototype.push.apply(scripts, dependency.scripts);
    });

    H5PIntegration.contents = H5PIntegration.contents ? H5PIntegration.contents : {};

    H5PIntegration.contents[`cid-${id}`] = {
      library: `${library.machineName} ${library.majorVersion}.${library.minorVersion}`,
      jsonContent: JSON.stringify(content),
      styles: styles,
      scripts: scripts
    };

    H5P.init();
  });
};

$.fn.h5p = function (options) {

  this.append(`<div class="h5p-iframe-wrapper" style="background-color:#DDD;">
      <iframe id="h5p-iframe-${options.id}" class="h5p-iframe" data-content-id="${options.id}" style="width: 100%; height: 100%; border: none; display: block;" src="about:blank" frameBorder="0"></iframe>
    </div>`);

  options.frameJs = options.frameJs || 'dist/h5p-standalone-frame.min.js';
  options.frameCss = options.frameCss || 'dist/css/h5p.css';
  options.h5pContent = options.h5pContent || 'workspace';

  H5PIntegration.core = {
    styles: [options.frameCss],
    scripts: [
      options.frameJs
      // 'bower_components/jquery/dist/jquery.js',
      // 'lib/js/h5p-jquery.js',
      // 'bower_components/h5p-php-library/js/h5p-content-type.js',
      // 'bower_components/h5p-php-library/js/h5p-event-dispatcher.js',
      // 'bower_components/h5p-php-library/js/h5p-x-api-event.js',
      // 'bower_components/h5p-php-library/js/h5p-x-api.js',
      // 'bower_components/h5p-php-library/js/h5p.js',
      // 'lib/js/h5p-overwrite.js'
    ]
  };

  H5PIntegration.init(options.id, options.h5pContent);
}
})(H5P.jQuery);
