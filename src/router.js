'use strict';

// Router class
function Router($stateProvider,$urlRouterProvider) {

	$stateProvider

    .state('home', {
      url: '/home',
      templateUrl: '/home/templates/home.html',
      //controller: '/home/controllers/homeCtrl'
       });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise("/home");// Important!
}

module.exports = Router;