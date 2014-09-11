var Login = angular.module('Login', []);


Authorization.$inject=['$scope','REST','$location'];
Login.controller('Authorization', Authorization);

function Authorization($scope,REST,$location){

	$scope.Go=function(){
		REST.Authorization({Params:{login:$scope.login,password:$scope.password}},function(data){
			if(data['Server'])
				if(data['Server'])
					$location.url('admin.php');


		});
	}
		$scope.Exit=function(){
			REST.Exit(function(data){
				alert(data['Server'])
			});

		}
	
}