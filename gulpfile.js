var gulp = require('gulp');

require('./tasks/build');
require('./tasks/sass');
require('./tasks/watch');

gulp.task('build', ['browserify', 'sass', 'fonts', 'assets']);
gulp.task('release', ['browserify:release', 'sass', 'fonts', 'assets']);
gulp.task('default', ['sass']);