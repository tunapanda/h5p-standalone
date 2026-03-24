import fs from 'fs';
import path from 'path';
import { defineConfig } from 'cypress';
import StreamZip from 'node-stream-zip';

export default defineConfig({
    allowCypressEnv: false,
    e2e: {
        specPattern: 'cypress/e2e/*.spec.js',
        setupNodeEvents(on, config) {
            const workspace = 'test/';
            const h5pFile = 'h5p-test.h5p';
            const extractFolder = 'full_workspace/'
            const librariesFolder = 'libraries/'
            const contentFolder = 'h5p/'


            on('task', {
                'unzip:h5p': async () => {
                    const zip = new StreamZip.async({ file: `${workspace}${h5pFile}` });

                    await zip.extract(null, `${workspace}${extractFolder}`);

                    await zip.close();
                    return true;
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
                    fs.rmdirSync(`${workspace}${extractFolder}`, { recursive: true });
                    fs.rmdirSync(`${workspace}${librariesFolder}`, { recursive: true });
                    fs.rmdirSync(`${workspace}${contentFolder}`, { recursive: true });

                    return true;
                }
            });
        }
    },
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
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach((item) => {
            recursiveCopy(path.join(src, item), path.join(dest, item));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}
