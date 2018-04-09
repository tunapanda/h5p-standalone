var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');
var rename = require('gulp-rename');

var mainFiles = [
  'bower_components/toposort/build/toposort.js',
  'bower_components/jquery/jquery.js',
  'src/js/h5p-jquery.js',
  'src/js/h5pintegration.js',
  'bower_components/h5p-php-library/js/h5p-content-type.js',
  'bower_components/h5p-php-library/js/h5p-event-dispatcher.js',
  'bower_components/h5p-php-library/js/h5p-x-api-event.js',
  'bower_components/h5p-php-library/js/h5p-x-api.js',
  'bower_components/h5p-php-library/js/h5p.js',
  'src/js/h5p-overwrite.js'
];

var frameFiles = [
  'bower_components/jquery/jquery.js',
  'src/js/h5p-jquery.js',
  'bower_components/h5p-php-library/js/h5p-event-dispatcher.js',
  'bower_components/h5p-php-library/js/h5p-action-bar.js',
  'bower_components/h5p-php-library/js/h5p-content-type.js',
  'bower_components/h5p-php-library/js/h5p-event-dispatcher.js',
  'bower_components/h5p-php-library/js/h5p-x-api-event.js',
  'bower_components/h5p-php-library/js/h5p-x-api.js',
  'bower_components/h5p-php-library/js/h5p.js',
  'src/js/h5p-overwrite.js'
];

function clean_dist () {
  return gulp.src('dist/*', {read: false})
    .pipe(clean());
};


function compile_js() {
  return gulp.src('src/js/h5pintegration.es6')
    .pipe(babel({
      'presets': ['es2015']
    }))
    .pipe(gulp.dest('src/js'));
};

function concat_main_js() {
  return gulp.src(mainFiles)
    .pipe(concat('h5p-standalone-main.js'))
    .pipe(gulp.dest('dist/js'));
};

function concat_frame_js() {
  return gulp.src(frameFiles)
    .pipe(concat('h5p-standalone-frame.js'))
    .pipe(gulp.dest('dist/js'));
};

function minify_js() {
  return gulp.src('dist/js/*.js')
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('dist/js'));
};

function copy_css() {
  return gulp.src('bower_components/h5p-php-library/styles/*.css')
    .pipe(gulp.dest('dist/styles'));
};

function copy_fonts() {
  return gulp.src('bower_components/h5p-php-library/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
};

gulp.task('demo', function() {
  gulp.src('./')
    .pipe(webserver({
      open: '/demo/'
    }));
});

gulp.task('default', gulp.series(clean_dist, gulp.parallel(gulp.series([compile_js, gulp.parallel(concat_main_js, concat_frame_js), minify_js]), copy_css, copy_fonts)));
