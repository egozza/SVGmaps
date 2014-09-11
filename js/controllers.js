'use strict';

/* Controllers */

var frends = angular.module('frends', []);

ListFrends.$inject=['$scope','Post'];
frends.controller('ListFrends', ListFrends);
	
  


function ListFrends($scope,Post)
{

 

 $scope.List=function(){
 	
 $scope.frends=Post.query({Id_NTO:$scope.Num});

  	

 	
}
$scope.list=function(ngname,id){
	$scope.frends[id].name=$scope.ngname;
	};
   $scope.Hello='Hello';
   $scope.OrderBy='name';


};