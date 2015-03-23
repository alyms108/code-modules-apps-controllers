// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS---> code in here will control parts of the DOM having the attribute ng-controller='mainController'
angularApp.controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) {
	$scope.name = 'Alyssa';
	
	// $timeout is a service that lets you run a function after a certain amount of time in milliseconds
	$timeout(function(){
		$scope.name = 'Everybody';
	}, 3000);
}]);



