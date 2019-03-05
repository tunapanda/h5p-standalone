var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

var files_to_transpile = [
    'node_modules/h5p-php-library/js/h5p-content-type.js',
    'node_modules/h5p-php-library/js/h5p-action-bar.js',
    'node_modules/h5p-php-library/js/h5p-event-dispatcher.js',
    'node_modules/h5p-php-library/js/h5p-x-api-event.js',
    'node_modules/h5p-php-library/js/h5p-x-api.js',
    'node_modules/h5p-php-library/js/h5p.js',
    'src/js/h5pintegration.es6'
];

var mainFiles = [
    'node_modules/toposort-class/build/toposort.js',
    'node_modules/jquery/jquery.js',
    'src/js/h5p-jquery.js',
    'dist/transpiled/h5pintegration.js',
    'dist/transpiled/h5p-content-type.js',
    'dist/transpiled/h5p-event-dispatcher.js',
    'dist/transpiled/h5p-x-api-event.js',
    'dist/transpiled/h5p-x-api.js',
    'dist/transpiled/h5p.js',
    'src/js/h5p-overwrite.js',
];

var frameFiles = [
    'node_modules/jquery/jquery.js',
    'src/js/h5p-jquery.js',
    'dist/transpiled/h5p-event-dispatcher.js',
    'dist/transpiled/h5p-action-bar.js',
    'dist/transpiled/h5p-content-type.js',
    'dist/transpiled/h5p-event-dispatcher.js',
    'dist/transpiled/h5p-x-api-event.js',
    'dist/transpiled/h5p-x-api.js',
    'dist/transpiled/h5p.js',
    'src/js/h5p-overwrite.js'
];

function clean_dist() {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
};

function concat_frame_js() {
    return gulp.src(frameFiles)
        .pipe(babel())
        .pipe(concat('h5p-standalone-frame.js'))
        .pipe(gulp.dest('dist/js'));
};

function concat_main_js() {
    return gulp.src(mainFiles)
        .pipe(babel())
        .pipe(concat('h5p-standalone-main.js'))
        .pipe(gulp.dest('dist/js'));
};

function transpile() {
    return gulp.src(files_to_transpile)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/transpiled/'))
}

function minify_js() {
    return gulp.src('dist/js/*.js')
        .pipe(uglify())
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('dist/js'));
};

function copy_css() {
    return gulp.src('node_modules/h5p-php-library/styles/*.css')
        .pipe(gulp.dest('dist/styles'));
};

function copy_fonts() {
    return gulp.src('node_modules/h5p-php-library/fonts/*')
        .pipe(gulp.dest('dist/fonts'));
};

gulp.task('demo', function () {
    browserSync.init({
        server: {
            baseDir: "./",
        },
        startPath: 'demo/index.html',
    });
});

gulp.task('default', gulp.series(clean_dist, transpile, concat_main_js, concat_frame_js, minify_js, copy_css, copy_fonts));
gulp.task('clean', gulp.series(clean_dist));