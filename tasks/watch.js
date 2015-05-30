var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch(['./scss/**/*.scss'], ['sass']);
  gulp.watch(['./src/**/*.js'], ['browserify']);
  gulp.watch(['./assets/**'], ['assets']);
});