# 2.1.3
* Remove H5P overrides, found a better solution
* Shoud fix #43

# 2.1.2
* Strike that, librariesPath update didn't even work? Tests were not run...

# 2.1.1
* Bugfix last version didn't inclde an updated built version

# 2.1.0
* Add optional libraryPath option for serving libraries from another source, thanks @tdxdave

# 2.0.2
* Check if main library has dependencies before loading them

# 2.0.1
* fix paths for h5p assets

# 2.0.0
* Switched to Webpack
* Using module system, can be imported via ES6, CommonJS, AMD or Globals
* Hide H5P frame by default
* Move away from being a jQuery plugin
* Include H5P JS files directly in this project
* Remove bower
* Add tests