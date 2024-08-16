const toposort = require('toposort');

import {
    H5PContent,
    H5PIntegration,
    H5PPackageDefinition,
    H5PPlayerDisplayOptions,
    LibraryDependency,
    H5PLibraryDefinition,
    User
} from "./h5p";
import {defaultH5PIntegration} from "./h5p-integration";
import {
    getJSON,
    loadScripts,
    loadStylesheets,
    mergeArrayUnique,
    mergeObject,
    urlPath
} from "./utils";

interface Options {
    id?: string;
    title?: string;

    frameCss: string;
    frameJs: string;

    h5pJsonPath?: string;
    librariesPath?: string;
    contentJsonPath?: string;

    frame?: boolean;
    copyright?: boolean;
    export?: boolean;
    icon?: boolean;
    fullScreen?: boolean;
    embed?: boolean;
    copy?: boolean;

    embedCode?: string;
    resizeCode?: string
    downloadUrl?: string;

    customCss?: string[];
    customJs?: string[];

    xAPIObjectIRI?: string
    preventH5PInit?: boolean;
    embedType?: 'div' | 'iframe';

    contentUserData?: H5PContent['contentUserData'];
    saveFreq?: number | false;
    postUserStatistics?: boolean;
    reportingIsEnabled?: boolean;

    ajax?: {
        setFinishedUrl?: string;
        contentUserDataUrl?: string
    },

    user?: User;

    metadata?: H5PContent['metadata'];

    translations?: H5PIntegration['l10n'];

    assetsRequestFetchOptions?: RequestInit;
}

interface H5PKeyPaths {
    h5pJsonPath: string,
    contentJsonPath: string,
    librariesPath: string
}

interface LocalLibraryDependency {
    libraryFolderName: string;
    dependencies: string[];
    preloadedCss?: H5PLibraryDefinition['preloadedCss'];
    preloadedJs?: H5PLibraryDefinition['preloadedJs'];
}

interface PlayerFrameOptions {
    anchorElement: HTMLElement,
    contentId: string,
    embedType: Options['embedType'],
    H5PIntegration: H5PIntegration,
}

export class H5PStandalone {

    libraryFolderContainsVersion = true;

    constructor(anchorElement: HTMLElement, options: Options) {

        const contentId = options.id || Math.random().toString(36).substr(2, 9);

        //TODO: this should be moved to a callable function in future e.g render() function
        // @ts-ignore
        return this.prepareH5PEnvironment(contentId, options)
            .then((H5PIntegration: H5PIntegration) => {

                //set the flag to avoid H5P initializing immediately on script load
                if (!(<any>window).H5P) {
                    (<any>window).H5P = {};
                }
                (<any>window).H5P.preventInit = true;

                const embedType = options.embedType ? options.embedType : 'iframe';

                return this.renderPlayerFrame({anchorElement, contentId, embedType, H5PIntegration})
                    .then(() => {
                        //initialize the H5P
                        if (options.preventH5PInit === undefined || !!options.preventH5PInit) {
                            if (typeof (<any>window).H5P.init === 'function') {
                                (<any>window).H5P.init();
                            }
                            (<any>window).H5P.preventInit = false; //reset for any subsequent request
                        }

                        return contentId; //better than nothing
                    })
            });

    }

    async renderPlayerFrame(params: PlayerFrameOptions) {
        if (!(params.anchorElement instanceof HTMLElement)) {
            throw new Error('createH5P must be passed an element');
        }

        if (params.embedType === 'iframe') {
            const wrapper = document.createElement('div');
            wrapper.classList.add('h5p-iframe-wrapper');
            wrapper.style.backgroundColor = '#DDD;';

            const iframe = document.createElement('iframe');
            iframe.id = `h5p-iframe-${params.contentId}`;
            iframe.src = 'about:blank';

            iframe.classList.add('h5p-iframe');
            iframe.setAttribute('scrolling', 'no');
            iframe.setAttribute('data-content-id', params.contentId);

            iframe.setAttribute('frameBorder', '0');
            iframe.style.width = '100%'
            iframe.style.height = '100%'
            iframe.style.border = 'none'
            iframe.style.display = 'block'

            // inject jQuery property to avoid fatal error if required

            wrapper.append(iframe);
            params.anchorElement.append(wrapper);

            //TODO: only h5p.js is required for fullscreen support
            //load H5P core style
            loadStylesheets(document.head || document.body || params.anchorElement,
                params.H5PIntegration.core.styles)

            //TODO: only h5p-jquery + h5p.js are required. Modern browsers are intelligent w/ caching
            //load H5P core scripts or frame.js as H5P is not bundled in main.bundle.js
            await loadScripts(iframe, params.H5PIntegration.core.scripts);
        } else {
            const wrapper = document.createElement('div');
            wrapper.classList.add('h5p-iframe')

            const contentDiv = document.createElement('div')
            contentDiv.classList.add('h5p-content',)
            contentDiv.setAttribute('data-content-id', params.contentId);

            wrapper.append(contentDiv)

            params.anchorElement.append(wrapper);

            //dynamically load core and libraries stylesheets and scripts
            const coreAssetsAnchor = document.head || document.body || params.anchorElement;

            //stylesheets
            const requiredStyles = (params.H5PIntegration.core.styles || [])
                .concat(params.H5PIntegration.contents[`cid-${params.contentId}`].styles);

            loadStylesheets(coreAssetsAnchor, requiredStyles)

            //javascript
            const requiredScripts = (params.H5PIntegration.core.scripts || [])
                .concat(params.H5PIntegration.contents[`cid-${params.contentId}`].scripts);

            await loadScripts(coreAssetsAnchor, requiredScripts)
        }
    }

    async prepareH5PEnvironment(contentId, options: Options): Promise<H5PIntegration> {

        /**
         * Load H5P content and libraries
         */

        const {h5pJsonPath, contentJsonPath, librariesPath} = this.getH5PPaths(options);

        const H5PJsonContent = <H5PPackageDefinition>(await getJSON(`${h5pJsonPath}/h5p.json`, options?.assetsRequestFetchOptions));

        //populate the variable before executing other functions.We assume other dependent
        // libraries follow the same format rather than performing the check for each library
        this.libraryFolderContainsVersion = await this.libraryFolderNameIncludesVersion(
            librariesPath, H5PJsonContent.preloadedDependencies[0], options?.assetsRequestFetchOptions);


        const H5PContentJsonContent = await getJSON(`${contentJsonPath}/content.json`, options?.assetsRequestFetchOptions);

        const mainLibrary = await this.findMainLibrary(H5PJsonContent, librariesPath, options?.assetsRequestFetchOptions);

        const dependencies = await this.findAllDependencies(H5PJsonContent, librariesPath, options?.assetsRequestFetchOptions);


        let {styles, scripts} = this.sortDependencies(dependencies, librariesPath);

        /**
         * Prepare H5PIntegration settings
         */

        let H5PIntegration: H5PIntegration = defaultH5PIntegration();


        //if window property exists
        if (window && (<any>window).H5PIntegration) {
            //if the window already has H5PIntegration property,
            H5PIntegration = mergeObject(H5PIntegration, (<any>window).H5PIntegration)
        }

        /**
         *  Set H5P core scripts and stylesheets.
         *  In the future, we should allow user to provide their own unbundled H5P core assets
         */
        let coreScripts = [urlPath('./frame.bundle.js')];
        let coreStyles = [urlPath('./styles/h5p.css')];

        if (options.frameJs) {
            coreScripts = [urlPath(options.frameJs)]
        }
        if (options.frameCss) {
            coreStyles = [urlPath(options.frameCss)];
        }

        if (!H5PIntegration.core) {
            H5PIntegration.core = {
                styles: coreStyles,
                scripts: coreScripts
            };
        } else {
            //merge unique
            H5PIntegration.core.styles = mergeArrayUnique(H5PIntegration.core.styles, coreStyles);
            H5PIntegration.core.scripts = mergeArrayUnique(H5PIntegration.core.scripts, coreScripts);
        }

        H5PIntegration.url = contentId;
        H5PIntegration.urlLibraries = librariesPath;
        H5PIntegration.postUserStatistics = !!options.postUserStatistics;
        H5PIntegration.reportingIsEnabled = !!options.reportingIsEnabled;

        //since the default is false, only set if it's a number?
        if (options.saveFreq && typeof options.saveFreq === 'number') {
            H5PIntegration.saveFreq = options.saveFreq;
        }

        if (options.user) {
            H5PIntegration.user = options.user; //replacing full object for compatibility
        }

        if (options.ajax?.contentUserDataUrl) {  //replace content user data url only if available
            H5PIntegration.ajax.contentUserData = options.ajax.contentUserDataUrl
        }

        if (options.ajax?.setFinishedUrl) { //replace finished url only if available
            H5PIntegration.ajax.setFinished = options.ajax.setFinishedUrl
        }

        if (options.translations) {
            H5PIntegration.l10n = mergeObject(H5PIntegration.l10n, options.translations);
        }

        if (options.customCss && typeof options.customCss === 'string') {
            options.customCss = [options.customCss]
        }

        if (options.customJs && typeof options.customJs === 'string') {
            options.customJs = [options.customJs]
        }

        // Append custom styles and scripts at the end to override original values
        styles = styles.concat((options.customCss || []).map(style => urlPath(style)));
        scripts = scripts.concat((options.customJs || []).map(script => urlPath(script)));


        const displayOptions: H5PPlayerDisplayOptions = {
            copyright: !!options.copyright,
            embed: !!options.embed,
            export: !!options.export,
            frame: !!options.frame,
            icon: !!options.icon,
            copy: !!options.copy
        };

        let mainLibraryName = `${mainLibrary.machineName} `; //space at the end
        if (mainLibrary.majorVersion) {
            mainLibraryName += mainLibrary.majorVersion
        }
        if (mainLibrary.minorVersion) {
            mainLibraryName += `.${mainLibrary.minorVersion}`
        }

        if (!H5PIntegration.contents) {
            H5PIntegration.contents = {};
        }

        if (!options?.metadata) {
            options.metadata = {
                title: options.title ? options.title : '',
                license: 'U'
            }
        }

        H5PIntegration.contents[`cid-${contentId}`] = {
            library: mainLibraryName,
            title: options.title ? options.title : '',
            url: h5pJsonPath,
            contentUrl: contentJsonPath,
            jsonContent: JSON.stringify(H5PContentJsonContent),
            styles: styles,
            scripts: scripts,

            fullScreen: !!options.fullScreen,
            exportUrl: options.downloadUrl ? urlPath(options.downloadUrl) : undefined,

            //embedCode not dependent on displayOptions.embed
            embedCode: options.embedCode ? options.embedCode : '',

            // resize code is already bundled in main.bundle.js
            resizeCode: options.resizeCode ? options.resizeCode : '',

            displayOptions,
            contentUserData: options.contentUserData,
            metadata: options.metadata
        };

        if (options.xAPIObjectIRI) {
            //no validation
            H5PIntegration.contents[`cid-${contentId}`].url = options.xAPIObjectIRI;
        }
        //now override the window H5PIntegration
        (<any>window).H5PIntegration = H5PIntegration

        return H5PIntegration;
    }

    getH5PPaths(options: Options): H5PKeyPaths {
        let h5pJsonPath: string = urlPath('workspace')
        if (options.h5pJsonPath) {
            h5pJsonPath = urlPath(options.h5pJsonPath);
        }

        let contentJsonPath: string = `${h5pJsonPath}/content`;

        if (options.contentJsonPath) {
            contentJsonPath = urlPath(options.contentJsonPath);
        }

        let librariesPath: string = h5pJsonPath;
        if (options.librariesPath) {
            librariesPath = urlPath(options.librariesPath);
        }

        return {h5pJsonPath, contentJsonPath, librariesPath}
    }


    /**
     * Check if the library folder include the version or not
     * This was changed at some point in H5P and we need to be backwards compatible
     *
     */
    async libraryFolderNameIncludesVersion(
      librariesPath: string,
      dependency: LibraryDependency,
      assetsRequestFetchOptions?: RequestInit
    ): Promise<boolean>
    {
        const libraryPath = this.libraryToFolderName(dependency);

        let libraryFolderIncludesVersion: boolean;

        try {
            await getJSON<H5PLibraryDefinition>(`${librariesPath}/${libraryPath}/library.json`, assetsRequestFetchOptions);
            libraryFolderIncludesVersion = true;
        } catch (e) {
            libraryFolderIncludesVersion = false;
        }
        return libraryFolderIncludesVersion;
    }

    /**
     * Get the name of a library folder
     *
     *
     * @param {object} library
     * @return {string}
     */
    libraryToFolderName(library: LibraryDependency): string {
        /*
         * Be backwards compatible: not all libraries include versions on folder names
         */

        let name = library.machineName;

        if (this.libraryFolderContainsVersion) {
            if (library.majorVersion !== undefined) {
                name += `-${library.majorVersion}`
            }
            if (library.minorVersion !== undefined) {
                name += `.${library.minorVersion}`;
            }
        }


        return name;
    }

    /**
     * FInd the main library for this H5P
     * @return {Promise}
     */
    async findMainLibrary(h5pJsonContent: H5PPackageDefinition,
                          librariesPath: string,
                          assetsRequestFetchOptions?: RequestInit): Promise<H5PLibraryDefinition> {

        const mainLibraryInfo = h5pJsonContent.preloadedDependencies
            .find(dependency => dependency.machineName === h5pJsonContent.mainLibrary);

        const mainLibraryFolderName = this.libraryToFolderName(mainLibraryInfo)
        const libraryFileUrl = `${librariesPath}/${mainLibraryFolderName}/library.json`;
        return getJSON<H5PLibraryDefinition>(libraryFileUrl, assetsRequestFetchOptions);
    }

    /**
     * find all the libraries used in this H5P
     * @return {Promise}
     */
    async findAllDependencies(h5pJsonContent: H5PPackageDefinition,
                              librariesPath,
                              assetsRequestFetchOptions?: RequestInit): Promise<LocalLibraryDependency[]> {
        const directDependencyFolderNames: string[] = h5pJsonContent.preloadedDependencies
            .map(dependency => this.libraryToFolderName(dependency));

        return this.loadDependencies(directDependencyFolderNames, [], librariesPath, assetsRequestFetchOptions);
    }

    /**
     * search through all supplied libraries for dependencies,
     * this is recursive and repeats until all deep dependencies have been found
     *
     * @param {string[]} toFind list of libraries to find the dependencies of
     * @param {string[]} alreadyFound the dependencies that have already been found
     * @param librariesPath
     * @param librariesPath
     *
     */
    async loadDependencies(toFind: string[], alreadyFound: LocalLibraryDependency[],
                           librariesPath: string,
                           assetsRequestFetchOptions?: RequestInit): Promise<LocalLibraryDependency[]> {

        const dependencies = alreadyFound;
        const findNext = [];

        const dependenciesDiscoveryRequests = toFind.map((libraryFolderName) => {
            return this.findLibraryDependencies(libraryFolderName, librariesPath, assetsRequestFetchOptions)
        });

        const discoveredDependencies = await Promise.all(dependenciesDiscoveryRequests);

        // loop over newly found libraries
        discoveredDependencies.forEach((library) => {
            // push into found list
            dependencies.push(library);
            // check if any dependencies haven't been found yet
            library.dependencies.forEach((dependency) => {

                const libDependencyFound = dependencies
                    .find((foundLibrary) => {
                        return foundLibrary.libraryFolderName === dependency;
                    });

                const discoveredLibDependencyFound = discoveredDependencies
                    .find((foundLibrary) => {
                        return foundLibrary.libraryFolderName === dependency;
                    });

                if (!libDependencyFound && !discoveredLibDependencyFound) {
                    findNext.push(dependency);
                }
            });
        });

        if (findNext.length > 0) {
            return this.loadDependencies(findNext, dependencies, librariesPath, assetsRequestFetchOptions);
        }
        return dependencies;
    }

    /**
     * Loads a dependencies' library.json and finds the libraries  dependencies as well
     * as the JS and CSS it needs
     *
     * @param libraryFolderName
     * @param librariesPath
     */
    async findLibraryDependencies(libraryFolderName: string,
                                  librariesPath: string,
                                  assetsRequestFetchOptions?: RequestInit): Promise<LocalLibraryDependency> {

        const libraryFileUrl = `${librariesPath}/${libraryFolderName}/library.json`;
        const library = await getJSON<H5PLibraryDefinition>(libraryFileUrl, assetsRequestFetchOptions);


        let dependencies: string[] = [];
        if (library.preloadedDependencies) {
            dependencies = library.preloadedDependencies
                .map(dependency => this.libraryToFolderName(dependency));
        }

        return {
            libraryFolderName,
            dependencies,
            preloadedCss: library.preloadedCss,
            preloadedJs: library.preloadedJs
        };
    }


    /**
     * Resolves the library dependency tree and sorts the JS and CSS files into order
     *
     * @param {object[]} dependencies
     * @param librariesPath
     * @return {object}
     */
    sortDependencies(dependencies: LocalLibraryDependency[],
                     librariesPath: string): { styles: string[], scripts: string[] } {

        const dependencyGraph = [];
        let CSSDependencies = {};
        let JSDependencies = {};

        dependencies.forEach(dependency => {

            if (dependency.dependencies.length === 0) {
                dependencyGraph.push([dependency.libraryFolderName])
            }

            dependency.dependencies.forEach((node) => {
                dependencyGraph.push([dependency.libraryFolderName, node]);
            });

            if (dependency.preloadedCss) {
                CSSDependencies[dependency.libraryFolderName] = [];

                if (CSSDependencies[dependency.libraryFolderName]) {
                    CSSDependencies[dependency.libraryFolderName] = CSSDependencies[dependency.libraryFolderName];
                }
                dependency.preloadedCss.forEach(style => {

                    const styleFileUrl = `${librariesPath}/${dependency.libraryFolderName}/${style.path}`;
                    CSSDependencies[dependency.libraryFolderName].push(styleFileUrl);
                });
            }

            if (dependency.preloadedJs) {
                JSDependencies[dependency.libraryFolderName] = [];
                if (JSDependencies[dependency.libraryFolderName]) {
                    JSDependencies[dependency.libraryFolderName] = JSDependencies[dependency.libraryFolderName];
                }
                dependency.preloadedJs.forEach(script => {
                    const scriptFileUrl = `${librariesPath}/${dependency.libraryFolderName}/${script.path}`;
                    JSDependencies[dependency.libraryFolderName].push(scriptFileUrl);
                });
            }
        });

        let styles = [];
        let scripts = [];

        toposort(dependencyGraph).reverse().forEach(function (dependencyName) {
            Array.prototype.push.apply(styles, CSSDependencies[dependencyName]);
            Array.prototype.push.apply(scripts, JSDependencies[dependencyName]);
        });

        return {styles, scripts};
    }
}
