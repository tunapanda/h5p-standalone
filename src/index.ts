import {H5PStandalone} from "./h5p-standalone";


const H5P = H5PStandalone

//todo: this is a hackish way to avoid prototype errors, rename H5P to Player or something else
// @ts-ignore
H5P['EventDispatcher'] = () => {
}

export default {H5P}