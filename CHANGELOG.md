## [3.5.1](https://github.com/tunapanda/h5p-standalone/compare/v3.5.0...v3.5.1) (2022-05-12)


### Bug Fixes

* auto-commit changelog file via semantic release package ([6bea820](https://github.com/tunapanda/h5p-standalone/commit/6bea820dd99d83144cdf0a178a7009dde537195f))
* Node release matrix doesn't exist. Fix it to version 14 ([3cdea3c](https://github.com/tunapanda/h5p-standalone/commit/3cdea3cc2aad2de2795bd0246e622dff99650ff9))

## [3.0.3](https://github.com/tunapanda/h5p-standalone/compare/v3.0.2...v3.0.3) (2021-04-19)


### Bug Fixes

* inject jQuery property into Iframe window [#74](https://github.com/tunapanda/h5p-standalone/issues/74) ([#75](https://github.com/tunapanda/h5p-standalone/issues/75)) ([1ec9101](https://github.com/tunapanda/h5p-standalone/commit/1ec910102d352270d2d4dda262399ba6dd57a29d))


## [3.0.2](https://github.com/tunapanda/h5p-standalone/compare/v3.0.1...v3.0.2) (2021-04-19)


### Bug Fixes

* path parameter(s) should resolve correctly ([#73](https://github.com/tunapanda/h5p-standalone/issues/73)) ([7db44f2](https://github.com/tunapanda/h5p-standalone/commit/7db44f2975664aa5cc9a36fe350228c43d230fb8))

## [3.0.1](https://github.com/tunapanda/h5p-standalone/compare/v3.0.0...v3.0.1) (2021-04-17)


### Bug Fixes

* restore mistakenly deleted content id ([#72](https://github.com/tunapanda/h5p-standalone/issues/72)) ([e172cf8](https://github.com/tunapanda/h5p-standalone/commit/e172cf8a4ae0083c4770a911007ffa0c0798ddd3))

# [3.0.0](https://github.com/tunapanda/h5p-standalone/compare/v2.2.2...v3.0.0) (2021-04-17)

### Bug Fixes

* properly cache the Cypress binary

# 2.2.2
* Update all project dependencies
* Update H5P core libraries to latest version
* Fix: Interactive videos causes the player to flicker #62

# 2.2.1
* Remove jQuery as project dependency on package.json
* Fixes failing CircleCi  Github action

# 2.1.3
* Remove H5P overrides, found a better solution
* Should fix #43

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
