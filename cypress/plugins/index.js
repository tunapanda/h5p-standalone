// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const fs = require('fs');
const path = require('path');
const unzipper = require("unzipper");

module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    const workspace = 'test/';
    const h5pFile = 'h5p-test.h5p';
    const extractFolder = 'full_workspace/'
    const librariesFolder = 'libraries/'
    const contentFolder = 'h5p/'


    on('task', {
        'unzip:h5p': async () => {
            return await fs.createReadStream(`${workspace}${h5pFile}`)
                .pipe(unzipper.Extract({path: `${workspace}${extractFolder}`}))
                .promise()
                .then(() => true);
        },
        'copy:libraries': () => {
            const H5PLibraries = ['Drop-1.0', 'FontAwesome-4.5', 'H5P.FontIcons-1.0', 'H5P.JoubelUI-1.3',
                'H5P.Question-1.4', 'H5P.Transition-1.0', 'H5P.TrueFalse-1.6', 'H5PEditor.RadioGroup-1.1',
                'H5PEditor.ShowWhen-1.0', 'Tether-1.0']; //reading from H5P.json is most dynamic approach

            H5PLibraries.map((folder) => {
                recursiveCopy(`${workspace}${extractFolder}${folder}/`, `${workspace}${librariesFolder}${folder}`)
            });

            return true;
        },
        'copy:content': () => {
            recursiveCopy(`${workspace}${extractFolder}content/`, `${workspace}${contentFolder}content`)
            return true;
        },
        'copy:h5pjson': () => {
            fs.copyFileSync(`${workspace}${extractFolder}h5p.json`, `${workspace}${contentFolder}h5p.json`);
            return true;
        },
        'clean': () => {
            fs.rmdirSync(`${workspace}${extractFolder}`, {recursive: true});
            fs.rmdirSync(`${workspace}${librariesFolder}`, {recursive: true});
            fs.rmdirSync(`${workspace}${contentFolder}`, {recursive: true});

            return true;
        }
    });

    function recursiveCopy(src, dest) {
        const exists = fs.existsSync(src);
        if (!exists) {
            return;
        }
        const stats = fs.statSync(src);
        const isDirectory = stats.isDirectory();

        if (isDirectory) {
            if (!fs.existsSync(dest)) {
                fs.mkdirSync(dest, {recursive: true});
            }
            fs.readdirSync(src).forEach((item) => {
                recursiveCopy(path.join(src, item), path.join(dest, item));
            });
        } else {
            fs.copyFileSync(src, dest);
        }
    }

}
