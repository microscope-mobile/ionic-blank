var gulp        = require('gulp');
var connect     = require('gulp-connect');
var runSequence = require('run-sequence');

// run connect server
gulp.task('connect', function() {
	connect.server({
		root: 'www',
		port: 3000,
		livereload: true
	});
});

// serve task => build & connect
gulp.task('serve', function (cb) {
	runSequence('build', 'watch', 'connect');
});