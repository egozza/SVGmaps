'use strict';

var AdminPanel=angular.module('AdminPanel',['PostServise','PanelStatus','ngRoute','menu','localHist','Status']);
AdminPanel.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when("/allnto",{
		templateUrl:"view/listNTOall.html",
		controller:ListNTO
	}).
	when("/addnto",{
		templateUrl:"view/addnto.html",
		controller:AddNTO

	}).
	when("/editnto/:Id_NTO/:nameClass",{
		templateUrl:"view/editnto.html",
		controller:EditNTO

	}).
	when("/addobj/:Id_NTO/:nameClass/:Id_OBJ/:nameOBJ",{
		templateUrl:"view/addobj.html",
		controller:AddOBJ
		
	}).
	when("/allntoobj",{
	templateUrl:"view/allntoobj.html",
		controller:ListNTO
	}).
	when("/allobj/:Id_NTO/:nameClass/:Id_OBJ/:nameOBJ",{
	templateUrl:"view/allobj.html",
		controller:ListOBJ
	}).
	when("/editobj/:Id_NTO/:nameClass/:Id_OBJ/:nameOBJ",{
	templateUrl:"view/editobj.html",
		controller:EditOBJ
	}).
	when("/creatsvg",{
	templateUrl:"view/creatsvg.html",
	controller:CreatSVG
	}).
	when("/editsvg/:id/:nameSVG",{
	templateUrl:"view/editsvg.html",
	controller:Localtion
	}).
	when("/allmaps",{
	templateUrl:"view/allmaps.html",
	controller:AllMaps
	}).
	
	otherwise({
		redirectTo: ''
		});
}]);

