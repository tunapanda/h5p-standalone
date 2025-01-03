# [3.8.0](https://github.com/tunapanda/h5p-standalone/compare/v3.7.1...v3.8.0) (2025-01-03)


### Bug Fixes

* copy the vendor images to dist folder ([3249f20](https://github.com/tunapanda/h5p-standalone/commit/3249f206816bd2532941d02d682856428929c622))
* merge the player css files not explicitly requested ([f95352b](https://github.com/tunapanda/h5p-standalone/commit/f95352b9f5ffe48efa3f273db4740da7a355f092))


### Features

* add plugin to merge css (or any utf compatible content) ([60d4400](https://github.com/tunapanda/h5p-standalone/commit/60d4400e2479dfebaf8ac56a9d7e2d75e4280d30))
* include the tooltip file into the frame bundle ([13ca602](https://github.com/tunapanda/h5p-standalone/commit/13ca602b60b05cf96f0d80caa3ddd40ba67d9588))
* merge h5p with tooltip content ([6d6adb8](https://github.com/tunapanda/h5p-standalone/commit/6d6adb8af132ace88a867b713b9336eeeced38bf))
* update h5p core vendor library to match upstream ([1bc80ba](https://github.com/tunapanda/h5p-standalone/commit/1bc80ba78bb7f94d85756450d9f6e48a7483da6b))

## [3.7.1](https://github.com/tunapanda/h5p-standalone/compare/v3.7.0...v3.7.1) (2024-12-04)


### Bug Fixes

* allow url without tld to match regex path ([be65d7d](https://github.com/tunapanda/h5p-standalone/commit/be65d7d45bf40d098d138d70f0db4c9bdd0df772))
* url tld should be between 2 and 63 xcters ([de578ec](https://github.com/tunapanda/h5p-standalone/commit/de578ec04cd6c3155357e39d0b110a96a39432c0))

# [3.7.0](https://github.com/tunapanda/h5p-standalone/compare/v3.6.0...v3.7.0) (2024-07-16)


### Bug Fixes

* CORS issue while fetch assets ([5c33534](https://github.com/tunapanda/h5p-standalone/commit/5c335342b1a6a6ea49c6fa4295c88fa6acd76a5a)), closes [tunapanda/h5p-standalone#151](https://github.com/tunapanda/h5p-standalone/issues/151)
* library not use assetsRequestFetchOptions ([4f3598b](https://github.com/tunapanda/h5p-standalone/commit/4f3598bac3d3e0b196646728b5b487a64cdf977d)), closes [tunapanda/h5p-standalone#151](https://github.com/tunapanda/h5p-standalone/issues/151)


### Features

* disable npm release ([4e69712](https://github.com/tunapanda/h5p-standalone/commit/4e69712f7f2e861cfd789e8889433ba132ca9d6b))
* sample jsdocs ([f2d2771](https://github.com/tunapanda/h5p-standalone/commit/f2d2771364ffcf076f20ea209888830e5aa70f4c))
* sample jsdocs ([0b39636](https://github.com/tunapanda/h5p-standalone/commit/0b39636e6a8e41fcddcefe7f299beab8e62218cd))

# [3.6.0](https://github.com/tunapanda/h5p-standalone/compare/v3.5.1...v3.6.0) (2023-05-12)


### Bug Fixes

* h5p integration postuserstatistics  is always false ([a5b8e9f](https://github.com/tunapanda/h5p-standalone/commit/a5b8e9f71d3d0edb936c48b46e4677d8967bea12))


### Features

* accept override of assets fetch function ([f9ca0be](https://github.com/tunapanda/h5p-standalone/commit/f9ca0be48cc31809dbee436d738ab47895968927))
* add default fallback metadata options for interactive book type ([e4037b9](https://github.com/tunapanda/h5p-standalone/commit/e4037b98c2f7cc39ecb9d9f9a615152dd387ae90))

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
