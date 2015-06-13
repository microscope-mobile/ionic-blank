'use strict';

// imports
var angular = require('angular');
require('angular-sanitize');
require('ionic-framework');
require('angular-ui-router');
require('angular-animate');
//require('ng-cordova');

var startUp = require('./startUp');

// application definition
var app = angular.module('app', ['ionic']);
app.run(startUp);