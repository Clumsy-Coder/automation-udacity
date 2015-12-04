var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['styles'], function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch('stylesheets/**/*.scss', ['styles']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('styles', function () {
  return gulp.src('stylesheets/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./stylesheets'))
      .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);