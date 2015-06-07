var PluginForm = require('./forms/PluginForm');
var gulp = require('gulp');

// build src
gulp.task('plugins', function(cb){	
	new PluginForm(cb);
});