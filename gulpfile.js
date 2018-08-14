var gulp = require('gulp');
var pug = require('gulp-pug');
var uglifycss = require('gulp-uglifycss');
var image = require('gulp-image');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var purgecss = require('gulp-purgecss')
var gulp = require('gulp');
var gm = require('gulp-gm');

// Image resize and optimize

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
  gulp.src('src/scripts/*.js')
  .pipe(gulp.dest('dist/scripts'))
    .pipe(connect.reload());
});


gulp.task('log', function() {
  gutil.log('== My Log Task ==')
});

gulp.task('sass', function() {
  gulp.src('src/stylesheets/*.scss')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
  .pipe(gulp.dest('dist/styles'))
       .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist/',
    name: 'Dist App',
    root: 'dist',
    port: 8001,
    livereload: true
  })
});



gulp.task('pug', function() {
        gulp.src('src/views/*.pug')
       .pipe(pug())
        .pipe(htmlmin({collapseWhitespace: true}))
       .pipe(gulp.dest('dist'))
       .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.pug', ['pug']);
  gulp.watch('src/stylesheets/**/*.scss', ['sass']);
  gulp.watch('src/img/*', ['images']);
  gulp.watch('src/img/*', ['scripts']);
});


gulp.task('default', ['pug', 'scripts', 'sass', 'connect', 'watch']);
