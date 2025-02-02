# H5P Standalone direct use guide

Jan 2025

A simple setup / "hello world" guide to get H5P Standalone player
up and running for people not so familiar with front end web
development.  We'll use the "direct use" style.

## Basic page and a web server

Let's get a web server up and serving a local page.

First, create a directory for our demo to live in:

```bash
mkdir h5p-standalone-demo
cd h5p-standalone-demo
```

Next we need to create an `index.html` file.  Use your favourite
text editor and copy the text below:

```html
<!-- filename: index.html -->
<!DOCTYPE html>

<html>
  <head>
    <title>H5P Standalone Demo</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>

  <body>
    <h2>H5P container below:</h2>

    <div class="h5p-standalone-container"></div>
  </body>
</html>
```

You can use almost any web server but for demonstration purposes
we'll use use one of these two.

If you have [Docker](https://docs.docker.com/engine/install/) installed
then we can use [Nginx](https://nginx.org/):

```bash
sudo docker run -it --rm -v $(pwd):/usr/share/nginx/html -p 8080:80 nginx:stable-alpine
```

If you don't have docker installed but do have Python 3 available
we can use Python's built in server:

```bash
python3 -m http.server
```

At this point you should be able to open a browser and go to
`http://localhost:8080/`.  You should be able to see the text
"H5P container below:" on the page.

## Add H5P Standalone

In another terminal window or tab (so we can leave the web server
running), change into your `h5p-standalone-demo` directory
and make an `assets/h5p-standalone` directory:

```bash
mkdir -p assets/h5p-standalone
```

Now we need to get the zip file from the latest [release](https://github.com/tunapanda/h5p-standalone/releases/latest).

At the time of writing, this is 3.8.0.  We can now unzip the release
into our new `assets/h5p-standalone` directory:

```bash
unzip ~/Downloads/h5p-standalone-3.8.0.zip -d assets/h5p-standalone
```

This should create a directory structure something like this:
```bash
find . -type d

.
./assets
./assets/h5p-standalone
./assets/h5p-standalone/dist
./assets/h5p-standalone/dist/fonts
./assets/h5p-standalone/dist/fonts/open-sans
./assets/h5p-standalone/dist/styles
./assets/h5p-standalone/dist/images
```

Now we can edit the `index.html` file to load the player.

1) Add the `<script>` tag in the head to load the main bundle
2) Add the `<script>` tag under the div to initialise the player.

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
  </head>

  <body>
    <h2>H5P container below:</h2>

    <div class="h5p-standalone-container"></div>

    <script>
      function initH5P() {
        const el = document.querySelector(".h5p-standalone-container");

        new H5PStandalone.H5P(el, {
          h5pJsonPath: 'h5p',
          frameJs: 'assets/h5p-standalone/dist/frame.bundle.js',
          frameCss: 'assets/h5p-standalone/dist/styles/h5p.css',
        });
      }

      initH5P();
    </script>

  </body>
</html>
```

At this point we have the player all setup but we don't have any H5P
content to play, so let's get some.

## Unzip the .h5p file

In this example we'll use the [Question Set](https://h5p.org/question-set)
example from h5p.org.  In the bottom left of the example on h5p.org
is a 'Reuse' button.  Click that and choose "Download as an .h5p file".

At the time of writing, this gives us "question-set-616.h5p".

1) Make a directory to put the H5P content in:

```bash
mkdir h5p
```

The name of this directory must match the `h5pJsonPath` value above.

2) Unzip the h5p file into our new directory

```bash
unzip ~/Downloads/question-set-616.h5p -d h5p
```

We're now left with a directory structure something like this:

```bash
find . -type d

.
./h5p
./h5p/content
./h5p/content/images
./h5p/H5P.QuestionSet-1.20
./assets
./assets/h5p-standalone
./assets/h5p-standalone/dist
./assets/h5p-standalone/dist/fonts
./assets/h5p-standalone/dist/fonts/open-sans
./assets/h5p-standalone/dist/styles
./assets/h5p-standalone/dist/images
```

If you reload the page, you should see your H5P content!

Hopefully by now the main [README.md](/README.md) documentation makes more sense.

If you'd like some kind of loading indicator, see the
[Loading indicator guide](loading-indicator-guide.md).
