H5P Video
==========

A simple library that displays a video.
Useful when users dynamically add videos to other content.

## Events

The goal of **H5P.Video** is to create one single video API for different video
players. This means one set of events regardless of the video source you use.
Here's a list of the events that **H5P.Video** instances will be triggering:

Event | description
------------ | -------------
ready | Indicates that the user can now call _play()_.
loaded | Triggered after the _ready_ event when the video source is loaded.<br>This may not trigger until after _play()_ is called due to how loading works on difference devices.<br>This is useful for updating the UI with the duration and similar data.<br>Similar to the native _loadedmetadata_ but does handle some special cases like the old Android loading issue.
error | Triggered whenever something goes wrong.<br>`event.data` contains a localized error message that can be displayed in the UI.
stateChange | Triggered whenever the state of the video changes. Possible `event.data`: `H5P.Video.ENDED` (`0`), `H5P.Video.PLAYING` (`1`), `H5P.Video.PAUSED` (`2`), `H5P.Video.BUFFERING` (`3`)
playbackRateChange | Triggered when the video playback speed changes. This is similar to the native _ratechange_ however it mocks away some IE issues.
captions | Triggered when captions become available, i.e. may not be trigger until after _play()_.<br>`event.data` contains a list of valid text tracks that the user may choose from.
qualityChange | Triggered to confirm that the quality was successfully changed. I.e. choosing a different quality does not guarantee it will play.<br>Useful for updating the UI with which quality is currently active.

Here's an example of how you can use these events to react when a user interacts with an Interactive Video.
You'll want to be adding this third-party script through your H5P plugin's _scripts_alter_ hook.

```js
H5P.jQuery(document).on('ready', function () {
  if (H5P && H5P.instances[0] && H5P.instances[0].libraryInfo.machineName === 'H5P.InteractiveVideo') {
    H5P.instances[0].video.on('stateChange', function (e) {
      switch (e.data) {
        case H5P.Video.BUFFERING:
          console.log('Loading');
          break;

        case H5P.Video.PLAYING:
          console.log('Playing');
          break;

        case H5P.Video.PAUSED:
          console.log('Paused');
          break;

        case H5P.Video.ENDED:
          console.log('Finished');
          break;
      }
    });
  }
});
```

## Changing Video Quality

The following example illustrates how you may change video quality using JS:

```js
if (H5P && H5P.Video) {
  H5P.VideoHtml5.getExternalQuality = function (sources, set) {
    setTimeout(function () {
      set(sources[0].quality.name);
    }, 3000);
  };
}

```


## License

(The MIT License)

Copyright (c) 2012-2019 Joubel AS
 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
