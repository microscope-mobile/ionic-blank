	// imports
var angular = require('angular');
require('angular-sanitize');
require('ionic-framework');
require('angular-ui-router');
require('angular-animate');
//require('ng-cordova');

// Application routing and startup
var Router  = require('./router');
var startUp = require('./startUp');

// Application modules
require('./home/home');


// application definition
var app = angular.module('app', ['ionic','app.home']);

app.config(['$stateProvider','$urlRouterProvider', Router]);
app.run(startUp);