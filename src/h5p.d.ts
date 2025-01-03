/**
 * H5PIntegration Interface
 */
export interface H5PIntegration {
    baseUrl?: string; //should not include a trailing slash
    url: string;  //should not include trailing slash

    urlLibraries?: string; //url to override where to fetch content libraries

    ajaxPath?: string; //deprecated - used only by older content types

    user?: User; //provide only if user account is available - form part of xAPI actor
    siteUrl?: string; //user site homepage on xAPI actor property. Used if user data is not provided.

    reportingIsEnabled?: boolean; //Enable submit button on Interactive book https://github.com/h5p/h5p-interactive-book/blob/6373b8440b0ef5eaf25fe21cae8ad57e9f8d8a9e/src/scripts/app.js#L60

    saveFreq?: false | number;
    postUserStatistics?: boolean; //makes sense if user is available
    ajax: {
        /**
         * endpoint where to post results on completion.
         * postUserStatistics has to be true
         */
        setFinished?: string;
        /**
         * Endpoint to update,restore,or delete user state.
         * H5P core provides placeholders which must start with full colon to work i.e
         * :contentId; :dataType, and :subContentId
         *
         * example endpoint api/v1/h5p/content-user-data/:contentId/:dataType/:subContentId
         */
        contentUserData?: string;

        crossoriginCacheBuster?: boolean;

    },
    l10n: {
        H5P: H5Pl10n
    },

    core?: { //required only when Embed Type = iframe
        scripts: string[];
        styles: string[];
    }

    loadedJs?: string[];//required only when Embed Type = div
    loadedCss?: string[];

    contents: { [key: `cid-${string}`]: H5PContent }
}

export interface User {
    name: string;
    mail: string; //unique user email
    id?: number;
    canToggleViewOthersH5PContents?: 0 | 1;
}

export interface H5PContent {
    title: string; //content title
    url: string; //content URI (absolute + canonical) used to generate xAPI statement.object.id

    contentUrl?: string; //storage path to override location of the content files

    library: string; //main content library
    fullScreen: boolean; //if to enable fullscreen button
    jsonContent: string; //content start parameters as a JSON string (content.json)
    scripts: string[]; // content libraries scripts
    styles: string[]; //content libraries styles
    displayOptions: H5PPlayerDisplayOptions;
    exportUrl: string; //path to download the H5P
    embedCode: string; //code to show on embed dialog
    resizeCode?: string; // script to use for resize. h5p standalone already bundles one by default

    contentUserData?: { [subContentId: string]: 'RESET' | { 'state': string } }[];/* user preloaded data where RESET: will delete previous user state, and state: exp*/

    metadata?: { // any content metadata
        title: string,
        license: string
    }
}

export interface H5PPlayerDisplayOptions {
    frame: boolean;
    export: boolean;
    embed: boolean;
    copyright: boolean;
    icon: boolean;
    copy: boolean;
}

export interface H5Pl10n {

    //h5p-confirmation-dialog.js
    confirmDialogHeader: string;
    confirmDialogBody: string;
    cancelLabel: string;
    confirmLabel: string;

    //h5-action-bar.js
    reuse: string;
    copyrights: string;
    embed: string;
    reuseDescription: string;
    copyrightsDescription: string;
    embedDescription: string;
    h5pDescription: string;

    //request-queue.js
    offlineDialogHeader: string;
    offlineDialogBody: string;
    offlineDialogRetryMessage: string;
    offlineDialogRetryButtonLabel: string;
    offlineSuccessfulSubmit: string

    //h5p.js
    fullscreen: string;
    disableFullscreen: string;
    contentChanged: string;
    startingOver: string;
    copyrightInformation: string;
    close: string;
    reuseContent: string;
    contentCopied: string;
    hideAdvanced: string;
    showAdvanced: string;
    advancedHelp: string;
    thumbnail: string;
    contentType: string;
    title: string;
    author: string;
    year: string;
    source: string;
    changes: string;
    license: string;
    licenseExtras: string;
    licenseU: string;
    licenseCCBY: string;
    licenseCCBYSA: string;
    licenseCCBYND: string;
    licenseCCBYNC: string;
    licenseCCBYNCSA: string;
    licenseCCBYNCND: string;
    licenseCC10: string;
    licenseCC20: string;
    licenseCC25: string;
    licenseCC30: string;
    licenseCC40: string;
    licenseGPL: string;
    licenseV1: string;
    licenseV2: string;
    licenseV3: string;
    licenseC: string;
    licenseCC010: string;
    licensePD: string;
    licensePDM: string;

    //deprecated
    download?: string;
    downloadDescription?: string;
    size?: string;
    noCopyrights?: string;
    by?: string;
    showMore?: string;
    showLess?: string;
    subLevel?: string;
    connectionLost?: string;
    connectionReestablished?: string;
    resubmitScores?: string;
}


/**
 * library.json interface
 */
interface H5PLibraryDefinition {
    title: string; //textual human readable library name
    machineName: string; //Include only characters, numbers, dashes, & periods. Start with character
    majorVersion: number; //positive non-fractional integer
    minorVersion: number;  //Neutral or positive non-fractional integer
    patchVersion: number; //Neutral or positive non-fractional integer. Update only on error fixes
    runnable: 0 | 1; //1 if library can run alone

    description?: string //textual description of the library
    contentType?: 'Font' | 'Utility';
    fullscreen?: 1; //enables integrated fullscreen button
    license?: keyof License; //content licence
    author?: string;
    embedTypes?: ['iframe' | 'div']; //possible ways to embed the package in the page
    coreApi?: { //required core API version
        majorVersion: number; //defaults to 1
        minorVersion: number; //defaults to 0
    };
    preloadedCss?: { path: string }[];//paths (relative to root folder) to required CSS files
    preloadedJs?: { path: string }[]; //paths (relative to root folder) to required JS files
    preloadedDependencies?: LibraryDependency[]; //required libraries for it to work
    dynamicDependencies?: LibraryDependency[]; //libs that may be loaded dynamically during execution
    editorDependencies?: LibraryDependency[];
    metadataSettings?: {
        disable?: 0 | 1; //disable metadata completely
        disableExtraTitleField?: 1 | 0 //hide title field from contenty type form
    }
}

/**
 *  h5p.json interface
 */
interface H5PPackageDefinition {
    title: string;
    language: string; // ISO-639-1
    mainLibrary: string; //without version
    embedTypes: ['div'] | ['iframe'] | ['div', 'iframe'];
    preloadedDependencies: LibraryDependency[];
    license?: keyof License;
    authors?: { name: string, role: 'Author' | 'Editor' | 'Licensee' | 'Originator' }[];
    source?: string; //source url of the licensed material
    licenseVersion?: keyof LicenseVersion;
    licenseExtras?: string; //any additional license info
    yearFrom?: string; //license valid since
    yearTo?: string; // license valid end year
    changes?: { [key: string]: string }[]; //changelog
    authorComments?: string; //comments for the editor
}

interface LibraryDependency {
    machineName: string
    minorVersion: number
    majorVersion: number
}

interface License { //enum would have been better
    'CC-BY': 'CC-BY',
    'CC BY-SA': 'CC BY-SA',
    'CC BY-ND': 'CC BY-ND',
    'CC BY-NC': 'CC BY-NC',
    'CC BY-NC-SA': 'CC BY-NC-SA',
    'CC CC-BY-NC-CD': 'CC CC-BY-NC-CD',
    'CC0 1.0': 'CC0 1.0',
    'GNU GPL': 'GNU GPL',
    'PD': 'PD',
    'ODC PDDL': 'ODC PDDL',
    'CC PDM': 'CC PDM',
    'C': 'C',
    'U': 'U'
}

interface LicenseVersion {
    //CC
    '1.0': '1.0',
    '2.0': '2.0',
    '2.5': '2.5', //number cannot be enum key 😔
    '3.0': '3.0',
    '4.0': '4.0',

    //GNU GPL
    'v1': 'v1',
    'v2': 'v2',
    'v3': 'v3',

    //PD
    '-': '-',
    'CCO 1.0': 'CCO 1.0',
    'CC PDM': 'CC PDM',
}