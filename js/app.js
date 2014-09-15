'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [ 'ngRoute' ])
.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider.when('/home', {
		templateUrl : 'partials/home.html',
		controller : 'HomeCtrl'
	}).otherwise({
		redirectTo : '/home'
	});
	
} ])

.controller('HomeCtrl', [function() {

}]);
