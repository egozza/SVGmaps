'use strict';

    var PostServise= angular.module('PostServise', ['ngResource']);
    PostServise.factory('Post', function($resource){
    return $resource('serverAng.php', {}, {
   query: {method:'POST', params:{TypeFunction:"Object",
    Functions:"GetNameObjectsAll",TypeResp:"JSON"},isArray:true},


   save:{method:'POST', params:{TypeFunction:"Object",
    Functions:"ReloadeObject",TypeResp:"JSON"}}
    });
    });