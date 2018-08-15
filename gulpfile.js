var gulp = require('gulp');
var pug = require('gulp-pug');
var uglifycss = require('gulp-uglifycss');
var image = require('gulp-image');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var purgecss = require('gulp-purgecss')
var gulpRemoveHtml = require('gulp-remove-html');
var gulp = require('gulp');
var gm = require('gulp-gm');
var rename = require("gulp-rename");

// Dist Build

// Images

gulp.task('images', function() {
    gulp.src('src/img/**')
        .pipe(gm(function (gmresize) {
            return gmresize.trim();
        }))
        .pipe(image())
        .pipe(gulp.dest('dist/img'));
});

// Script File

gulp.task('scripts', function() {
    gulp.src('src/scripts/countdown.js')
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

// Log gulp

gulp.task('log', function() {
    gutil.log('== My Log Task ==')
});

gulp.task('sass', function() {
    gulp.src('src/stylesheets/*.scss')
        .pipe(sass({style: 'expanded'}))
        .on('error', gutil.log)
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

// Live Server

gulp.task('connect', function() {
    connect.server({
        root: 'dist/',
        name: 'Dist App',
        root: 'dist',
        port: 8001,
        livereload: true
    })
});

// Pug
//
gulp.task('pug', function() {
    gulp.src('src/views/*.pug')
   .pipe(pug())
   .pipe(gulp.dest('dist'))
   .pipe(connect.reload());
});

// Watch Files

gulp.task('watch', function() {
    gulp.watch('src/**/*.pug', ['pug']);
    gulp.watch('src/stylesheets/**/*.scss', ['sass']);
    gulp.watch('src/img/*', ['images']);
    gulp.watch('src/img/*', ['scripts']);
});


// Carthook Build

gulp.task('carthook-pug', function() {
    gulp.src('src/views/*.pug')
        .pipe(pug())
        .pipe(gulpRemoveHtml())
        .pipe(htmlmin({collapseWhitespace: true, minifyJS:true,}))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('carthook'))
});

gulp.task('carthook-scripts', function() {
    gulp.src('src/scripts/carthook.js')
        .pipe(gulp.dest('carthook'))
});

gulp.task('carthook-sass', function() {
    gulp.src('src/stylesheets/*.scss')
        .pipe(sass({style: 'expanded'}))
        .on('error', gutil.log)
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('carthook'))
});

// Run tasks

gulp.task('default', ['pug', 'scripts', 'sass', 'connect', 'watch']);
gulp.task('carthook', ['carthook-pug', 'carthook-scripts', 'carthook-sass']);
