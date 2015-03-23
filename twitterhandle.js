// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS---> code in here will control parts of the DOM having the attribute ng-controller='mainController'
angularApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {
	$scope.handle = '';
	
	$scope.lowercasehandle = function(){
		return $filter('lowercase')($scope.handle);
	};
	
	$scope.characters=5;
	
	$scope.rules = [
		{ rulename: "Must be 5 characters" },
		{ rulename: "Must not be used elsewhere" },
		{ rulename: "Must be cool" }
	];
	
	console.log($scope.rules);
	
	/*$scope.$watch('handle', function(newValue,oldValue){
		console.info('Changed!');
		console.log('Old:' + oldValue);
		console.log('New:' + newValue);
		
	});*/
	
}]);



