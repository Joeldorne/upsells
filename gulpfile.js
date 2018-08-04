var sass = require('gulp-sass');
var gulp = require('gulp'); 
var pug = require('gulp-pug');
var gutil = require('gulp-util');
var connect = require('gulp-connect');

gulp.task('images', function() {
  gulp.src('src/img/*')
  .pipe(gulp.dest('dist/img'));
});

gulp.task('scripts', function() {
  gulp.src('src/scripts/*.js')
  .pipe(gulp.dest('dist/scripts'))
    .pipe(connect.reload());
});

gulp.task('pug', function() {
        gulp.src('src/views/*.pug')
       .pipe(pug())
       .pipe(gulp.dest('dist'))
       .pipe(connect.reload());
});

gulp.task('log', function() {
  gutil.log('== My Log Task ==')
});

gulp.task('sass', function() {
  gulp.src('src/stylesheets/*.scss')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('dist/styles'))
       .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist/',
    name: 'Dist App',
    root: 'dist',
    port: 8002,
    livereload: true
  })
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.pug', ['pug']);
  gulp.watch('src/stylesheets/**/*.scss', ['sass']);
  gulp.watch('src/img/*', ['images']);
  gulp.watch('src/img/*', ['scripts']);
});

gulp.task('default', ['pug', 'images', 'scripts', 'sass', 'connect', 'watch']);
