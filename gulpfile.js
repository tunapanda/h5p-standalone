var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');
var rename = require('gulp-rename');

var mainFiles = [
  'bower_components/toposort/build/toposort.js',
  'bower_components/jquery/dist/jquery.js',
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
  'bower_components/jquery/dist/jquery.js',
  'src/js/h5p-jquery.js',
  'bower_components/h5p-php-library/js/h5p-content-type.js',
  'bower_components/h5p-php-library/js/h5p-event-dispatcher.js',
  'bower_components/h5p-php-library/js/h5p-x-api-event.js',
  'bower_components/h5p-php-library/js/h5p-x-api.js',
  'bower_components/h5p-php-library/js/h5p.js',
  'src/js/h5p-overwrite.js'
];

gulp.task('clean-dist', function () {
  return gulp.src('dist/*', {read: false})
    .pipe(clean());
});

gulp.task('compile-js', ['clean-dist'], function() {
  return gulp.src('src/js/h5pintegration.es6')
    .pipe(babel())
    .pipe(gulp.dest('src/js'));
});

gulp.task('concat-main-js', ['compile-js'], function() {
  return gulp.src(mainFiles)
    .pipe(concat('h5p-standalone-main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('concat-frame-js', ['compile-js'], function() {
  return gulp.src(frameFiles)
    .pipe(concat('h5p-standalone-frame.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('minify-js', ['concat-main-js', 'concat-frame-js'], function() {
  return gulp.src('dist/js/*.js')
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-css', ['clean-dist'], function() {
  return gulp.src('bower_components/h5p-php-library/styles/*.css')
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('copy-fonts', ['clean-dist'], function() {
  return gulp.src('bower_components/h5p-php-library/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('demo', function() {
  gulp.src('./')
    .pipe(webserver({
      open: '/demo/'
    }));
});

gulp.task('default', ['concat-main-js', 'concat-frame-js', 'copy-css', 'copy-fonts'], function() {

});

gulp.task('prod', ['default', 'minify-js'], function() {

});
