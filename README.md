# h5p-standalone
Display H5P content with plain old HTML

## Usage

```javascript
$('.h5p-container').h5p({
  frameJs: '../dist/js/h5p-standalone-frame.min.js', // OPTIONAL if you move the location of h5p-standalone-frame.min.js
  frameCss: '../dist/styles/h5p.css', // OPTIONAL if you move the location of h5p.css
  h5pContent: '../workspace' // Location of the unpacked H5P content
});
```

## Run The Demo (Gulp)

Install dependencies
```
npm install -g gulp
npm install
```

Unzip `.h5p` file into `workspace` directory

```
gulp demo
```

## Run The Demo (Other)

Unzip `.h5p` file into `workspace` directory

Run a simple http server e.g. `python -m SimpleHttpServer`

head to `http://localhost:8080/demo/`
