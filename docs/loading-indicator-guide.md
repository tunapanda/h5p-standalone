# A simple loading indicator guide

Jan 2025

If your users are not on a fast connection, sometimes it can take
a few seconds to load all the H5P libraries, images and videos
that you need to display the H5P content.

In this case it can be useful to show the users that something
is happening while they wait.

## Prerequisites

This guide assumes that you've read the [Basic Setup Guide](basic-setup-guide.md)
and have a working H5P Standalone player.

## Loading text

First we need a little custom JavaScript to tell the main page when
the H5P frame has loaded.  We'll add a `custom-js` directory to keep
our custom JavaScript file in:

```bash
mkdir assets/h5p-standalone/custom-js
```

Now we can create the `assets/h5p-standalone/custom-js/finished-loading.js`
file, use your favourite text editor and add this:

```javascript
// Filename: assets/h5p-standalone/custom-js/finished-loading.js
const bc = new BroadcastChannel('h5p-loading');
bc.postMessage('h5p-finished-loading');
```

Next we need to edit the `index.html` file.  We'll be adding
the `<style>` stylesheet to the head element, we'll add the
`loading` div to the main `h5p-standalone-container` and
add the `customJs` option to the H5P Standalone player.
We'll also subscribe to messages on a broadcast channel.

Your `index.html` file should now look like this:

```html
<!-- filename: index.html -->
<!DOCTYPE html>

<html>
  <head>
    <title>H5P Standalone Demo</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script type="text/javascript" src="assets/h5p-standalone/dist/main.bundle.js"></script>
    <style>
      .loading {
        display: grid;
        place-items: center;
        height: 192px;
        background-color: #dddddd;
        border-radius: 2rem;
      }

      .loading.hidden {
        display: none;
        visibility: hidden;
      }
    </style>
  </head>

  <body>
    <h2>H5P container below:</h2>

    <div class="h5p-standalone-container">
      <div class="loading">
        <h3>Loading ...</h3>
      </div>
    </div>

    <script>
      function initH5P() {
        const el = document.querySelector(".h5p-standalone-container");
        const loading = document.querySelector('.loading');
        const bc = new BroadcastChannel('h5p-loading');

        bc.onmessage = (e) => {
          if (e.data === 'h5p-finished-loading') {
            loading.classList.add('hidden');
          }
        }


        new H5PStandalone.H5P(el, {
          h5pJsonPath: 'h5p',
          frameJs: 'assets/h5p-standalone/dist/frame.bundle.js',
          frameCss: 'assets/h5p-standalone/dist/styles/h5p.css',
          customJs: 'assets/h5p-standalone/custom-js/finished-loading.js',
        });
      }

      initH5P();
    </script>

  </body>
</html>
```

### How does it work?

As the H5P Standalone player loads the H5P content, it creates an
[iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
for the content to render inside.  The `customJs` option allows us
to load some custom JavaScript _inside_ the iframe.

We can then use a [Broadcast Channel](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel)
to let the parent page know that the iframe has rendered, which
means we can hide the loading message.  This works because the
iframe and the parent page are running from the same [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin).

You can think of the Broadcast Channel like a fanout in a messaging
system.  Or like an FM radio broadcast, anyone that's listening
on that frequency (or in our case, the 'topic' of 'h5p-loading')
will hear the message.

### How to see it working?

You may find that your H5P content loads so fast that it's hard to
see the loading message, especially if you're running the web
server locally.

Both Firefox and Chrome have a throttling feature in their developer
tools that lets you mimic a slower connection.

If you right click on the page and choose 'inspect' this will
bring up the developer tools.

In the 'Network' tab, you should find a drop down next to the 'Disable Cache'
checkbox that by default says 'No throttling'.  If you choose a
regular 3G preset and reload the page, you should now be able to
see your loading indicator before the H5P content replaces it.

### Tuning

Without tuning, this could create some jumps while loading because
we don't know the height of the H5P element until it's loaded
(sometimes know as CSS jank).

To mitigate this, you can match the `height` of your loading
box to the height of your H5P element (once you know what it is):

```css
    <style>
      .loading {
        display: grid;
        place-items: center;
---->   height: 192px;
        background-color: #dddddd;
        border-radius: 2rem;
      }

      .loading.hidden {
        display: none;
        visibility: hidden;
      }
    </style>
```

## Fancier spinner

If you'd like a fancier version, you could use some CSS animation
to spin a spinner while the H5P content loads.

```html
<!-- filename: index.html -->
<!DOCTYPE html>

<html>
  <head>
    <title>H5P Standalone Loading Spinner Demo</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script type="text/javascript" src="assets/h5p-standalone/dist/main.bundle.js"></script>
    <style>
      .loading-spinner {
        display: grid;
        place-items: center;
      }

      .loading-spinner.hidden {
        display: none;
        visibility: hidden;
      }

      .loading-spinner svg {
        width: 96px;
        height: 96px;
      }

      .loading-spinner .dynamic {
        display: none;
        visibility: hidden;
      }

      @media screen and (prefers-reduced-motion: no-preference) {
        .loading-spinner .static {
          display: none;
          visibility: hidden;
        }

        .loading-spinner .dynamic {
          display: block;
          visibility: visible;
          animation-duration: 3s;
          animation-delay: 0.5s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: normal;
          animation-name: spinner;
        }

      }

      @keyframes spinner {
        from {
          transform: rotate(0turn)
        }

        to {
          transform: rotate(1turn)
        }
      }
    </style>
  </head>

  <body>

    <h2>H5P container below:</h2>

    <div class="loading-spinner">
      <svg class="static material-icons hourglass" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z"/><desc>Loading H5P ...</desc></svg>
      <svg class="dynamic material-icons progress_activity" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/><desc>Loading H5P ...</desc></svg>
    </div>
    <div class="h5p-standalone-container"></div>


    <script>
      function initH5P() {
        const el = document.querySelector(".h5p-standalone-container");
        const loading = document.querySelector(".loading-spinner");
        const bc = new BroadcastChannel("h5p-loading");

        bc.onmessage = (e) => {
          if (e.data === "h5p-finished-loading") {
            loading.classList.add("hidden");
          }
        }

        new H5PStandalone.H5P(el, {
          h5pJsonPath: 'h5p',
          frameJs: 'assets/h5p-standalone/dist/frame.bundle.js',
          frameCss: 'assets/h5p-standalone/dist/styles/h5p.css',
          customJs: 'assets/h5p-standalone/js/finished-loading.js',
        });
      }

      initH5P();

    </script>
  </body>
</html>
```

This uses SVG symbols from Google's [Material Symbols](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:progress_activity:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=loading&icon.size=24&icon.color=%235f6368)
but you could swap these SVGs for one of your own creations, just
don't forget to add the `<desc>` (description) so that screen readers
have something to read.

This will spin the 'dynamic' spinner image unless the user prefers
reduced motion, in which case it'll show the 'static' SVG.

There are many ways to create loading indicators, these are just
two examples.  Have fun and see what you can create!
