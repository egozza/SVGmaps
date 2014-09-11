'use Struct';

var app=angular.module('app',[]);

app.factory("getParams",function($routeParams){
	return {
		getUser:function(){
			return $routeParams.name;
		},
		getIdMap:function(){
			return $routeParams.idMap;
		}


	}



});
app.factory("restServise",function($resource){
    return $resource('serverAng.php/path::Type/:Func', {}, {
  GetMAPS:{method:'GET',params:{Type:'Maps'}},
   GetMAPSxml:{method:'GET',params:{Type:'Maps',Func:"xml"}},
   GetMAP:{method:'GET',params:{Type:'Maps',Func:"one"}},
   GetLINK:{method:'GET',params:{Type:'Link'}}
   });
});
