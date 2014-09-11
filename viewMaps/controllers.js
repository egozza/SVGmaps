
var app=angular.module('app',[]);

getMap.$inject=["getParams","$scope","restServise"];
app.controller("getMap",getMap);

function getMap(getParams,$scope,restServise){

$scope.idMap=getParams.getIdMap;
$scope.userName=getParams.getUser;
$scope.map;
restServise.GetMAPSxml({Params:{
		login:$scope.userName,
		id:$scope.idMap
	}},function(data){
		if(data["server"]=="ok")
			$scope.map=data["Response"];
		


})





}