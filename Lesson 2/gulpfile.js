var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');

gulp.task('default', function() {
	gulp.watch('sass/**/*.scss', ['styles']);
});

gulp.task('styles', function () {
  gulp.src('sass/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./css'));
});
