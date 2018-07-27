var sass = require('gulp-sass');
var gulp = require('gulp'); 
var pug = require('gulp-pug');
var gutil = require('gulp-util');

gulp.task('copy', function() {
  gulp.src('src/img/*')
  .pipe(gulp.dest('dist/img'))
});

gulp.task('pug', function() {
        gulp.src('src/*.pug')
       .pipe(pug())
       .pipe(gulp.dest('dist'));
});

gulp.task('log', function() {
  gutil.log('== My Log Task ==')
});

gulp.task('sass', function() {
  gulp.src('src/styles/main.scss')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('dist/styles'))
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.pug', ['pug']);
  gulp.watch('src/styles/*.scss', ['sass']);
  gulp.watch('src/img/*', ['copy']);
});

gulp.task('default', ['image']);
