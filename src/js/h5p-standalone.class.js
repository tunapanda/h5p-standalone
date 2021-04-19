import Toposort from 'toposort-class';
import H5P from 'imports-loader?imports=H5PIntegration|window.H5PIntegration!H5P';

H5PIntegration = window.H5PIntegration;

function urlPath(path) {
  path = path.trim();

  if (path.match(/^[a-z0-9]+:\/\//i)) {
    return path;
  }
  //if path starts with a double slash, it's protocol relative URL
  if (path.startsWith('//')) {
    return window.location.protocol + path;
  }

  //if path starts with a slash, its relative in respect to page URL root
  if (path.startsWith('/')) {
    return window.location.origin + path;
  }

  let prefix = window.location.protocol + "//" + window.location.host;

  if (window.location.pathname.indexOf('/') > -1) {
    prefix = prefix + window.location.pathname.split('/').slice(0, -1).join("/");
  } else {
    prefix = prefix + window.location.pathname;
  }
  return prefix + "/" + path;
}

export default class H5PStandalone {
  constructor(el, options) {
    this.id = options.id || Math.random().toString(36).substr(2, 9);

    if (options.h5pJsonPath) {
      this.h5pJsonPath = urlPath(options.h5pJsonPath);
    } else {
      this.h5pJsonPath = urlPath('workspace')
    }
    if (!options.librariesPath) {
      this.librariesPath = this.h5pJsonPath;
    } else {
      this.librariesPath = urlPath(options.librariesPath);
    }
    if (!options.contentJsonPath) {
      this.contentUrl = urlPath(`${this.h5pJsonPath}/content`);
    } else {
      this.contentUrl = urlPath(options.contentJsonPath);
    }
    const displayOptions = {
      frame: options.frame, copyright: options.copyright,
      embed: options.embed, icon: options.icon,
      export: options.export
    };

    const h5pStylesBundle = urlPath(options.frameCss);
    const h5pScriptsBundle = urlPath(options.frameJs);

    this.initElement(el);
    return this.initH5P(h5pStylesBundle, h5pScriptsBundle, displayOptions, options.preventH5PInit);
  }

  initElement(el) {
    if (!(el instanceof HTMLElement)) {
      throw new Error('createH5P must be passed an element');
    }

    const parent =document.createElement('div');
    parent.classList.add('h5p-iframe-wrapper');
    parent.style.backgroundColor='#DDD;';


    const iframe = document.createElement('iframe');
    iframe.id = `h5p-iframe-${this.id}`;
    iframe.src='about:blank';

    iframe.classList.add('h5p-iframe');
    iframe.setAttribute('scrolling','no');
    iframe.setAttribute('data-content-id',`${this.id}`);

    iframe.setAttribute('frameBorder',0);
    iframe.style.width='100%'
    iframe.style.height='100%'
    iframe.style.border='none'
    iframe.style.display='block'

    parent.append(iframe);
    el.append(parent);

    // inject jQuery property to avoid fatal error if required
    iframe.contentWindow['jQuery'] ={}
  }

  async initH5P(frameCss = './styles/h5p.css', frameJs = './frame.bundle.js', displayOptions, preventH5PInit) {
    this.h5p = await this.getJSON(`${this.h5pJsonPath}/h5p.json`);

    const content = await this.getJSON(`${this.contentUrl}/content.json`);
    H5PIntegration.pathIncludesVersion = this.pathIncludesVersion = await this.checkIfPathIncludesVersion();

    this.mainLibrary = await this.findMainLibrary();

    const dependencies = await this.findAllDependencies();

    const { styles, scripts } = this.sortDependencies(dependencies);

    H5PIntegration.urlLibraries = this.path;
    H5PIntegration.contents = H5PIntegration.contents ? H5PIntegration.contents : {};

    H5PIntegration.core = {
      styles: [frameCss],
      scripts: [frameJs]
    };

    H5PIntegration.contents[`cid-${this.id}`] = {
      library: `${this.mainLibrary.machineName} ${this.mainLibrary.majorVersion}.${this.mainLibrary.minorVersion}`,
      jsonContent: JSON.stringify(content),
      styles: styles,
      scripts: scripts,
      displayOptions: displayOptions,
      contentUrl: this.contentUrl
    };

    // if (!preventH5PInit) {
    H5P.init();
    // }
  }

  getJSON(url) {
    return fetch(url).then(res => res.json());
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
      await this.getJSON(`${this.librariesPath}/${machinePath}/library.json`);
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
    return this.getJSON(`${this.librariesPath}/${this.mainLibraryPath}/library.json`);
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
    const library = await this.getJSON(`${this.librariesPath}/${libraryName}/library.json`);
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
          CSSDependencies[dependency.libraryPath].push(`${this.librariesPath}/${dependency.libraryPath}/${style.path}`);
        });
      }

      if (dependency.preloadedJs) {
        JSDependencies[dependency.libraryPath] = JSDependencies[dependency.libraryPath] ? JSDependencies[dependency.libraryPath] : [];
        dependency.preloadedJs.forEach(script => {
          JSDependencies[dependency.libraryPath].push(`${this.librariesPath}/${dependency.libraryPath}/${script.path}`);
        });
      }
    });

    let styles = [];
    let scripts = [];

    dependencySorter.sort().reverse().forEach(function (dependencyName) {
      Array.prototype.push.apply(styles, CSSDependencies[dependencyName]);
      Array.prototype.push.apply(scripts, JSDependencies[dependencyName]);
    });

    if (this.mainLibrary.preloadedCss) {
      Array.prototype.push.apply(styles, this.mainLibrary.preloadedCss.map(style => `${this.librariesPath}/${this.mainLibraryPath}/${style.path}`));
    }
    if (this.mainLibrary.preloadedJs) {
      Array.prototype.push.apply(scripts, this.mainLibrary.preloadedJs.map(script => `${this.librariesPath}/${this.mainLibraryPath}/${script.path}`));
    }
    return { styles, scripts };
  }
}
