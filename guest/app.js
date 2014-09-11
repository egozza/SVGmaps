'use strict';

var User=angular.module('User',['PostServise','ngRoute',"Login"]);
User.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when("/new",{
		templateUrl:"view/listNTOall.html",
		
	}).
	when("/old",{
		templateUrl:"view/Authorization.html",
		controller:Authorization

	}).
	
	
	otherwise({
		redirectTo: '/old'
		});
}]);

