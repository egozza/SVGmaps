
    var PostServise= angular.module('PostServise', ['ngResource']);
    PostServise.factory('REST', function($resource){
    return $resource('serverAng.php/path::Type/:Func', {}, {
   Authorization: {method:'POST', params:{}},
   Exit: {method:'POST', params:{Type:'User',Func:'exit'}},
  });
  });
    