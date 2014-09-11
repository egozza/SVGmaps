'use strict';

var objectList=angular.module('objectList',['PostServise','frends','ngRoute']);
objectList.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when("/one",{
		templateUrl:"view/one.html",
		controller:ListFrends
	}).
	when("/two",{
		templateUrl:"view/two.html",
		controller:ListFrends
	}).
	otherwise({
		redirectTo: '/one'
		});
}]);
