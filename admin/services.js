
    var PostServise= angular.module('PostServise', ['ngResource']);
    PostServise.factory('REST', function($resource,$rootScope){
    return $resource('serverAng.php/path::Type/:Func', {}, {
   GetNTOs: {method:'GET', params:{Type:"TypeObject"
    }},
   GetNTO:{method:'GET', params:{Type:'TypeObject',Func:'One'}},
   GetNTOparent:{method:'GET', params:{Type:'TypeObject',Func:'ParentNTO'}}
   ,
   GetOBJs:{method:'GET', params:{Type:'Object'}},
   GetOBJ:{method:'GET', params:{Type:'Object',Func:'One'}},
   GetMAPS:{method:'GET',params:{Type:'Maps'}},
   GetMAPSxml:{method:'GET',params:{Type:'Maps',Func:"xml"}},
   GetMAP:{method:'GET',params:{Type:'Maps',Func:"one"}},
   GetLINK:{method:'GET',params:{Type:'Link'}},

   SetNTO:{method:'POST', params:{Type:'TypeObject'}},
   SetNTOSP:{method:'POST', params:{Type:'TypeObject',Func:'SP'}},
   SetNTOFP:{method:'POST', params:{Type:'TypeObject',Func:'FP'}},
   SetOBJ:{method:'POST', params:{Type:'Object'}},
   SetIMG:{method:'POST',params:{Type:'Uploader',Func:"IMG"}},
   SetSVG:{method:'POST',params:{Type:'Maps',Func:"save"}},
   SetLINK:{method:'POST',params:{Type:'Link'}},



   PutNTO:{method:'PUT', params:{Type:'TypeObject'}},
   PutNTOSP:{method:'PUT', params:{Type:'TypeObject',Func:'SP'}},
   PutNTOFP:{method:'PUT', params:{Type:'TypeObject',Func:'FP'}},
   PutOBJ:{method:'PUT', params:{Type:'Object'}},
   PutSVG:{method:'PUT', params:{Type:'Maps'}},
   PutLINK:{method:'PUT',params:{Type:'Link'}},


   DelNTO:{method:'DELETE', params:{Type:'TypeObject'}},
   DelNTOSP:{method:'DELETE', params:{Type:'TypeObject',Func:'SP'}},
   DelNTOFP:{method:'DELETE', params:{Type:'TypeObject',Func:'FP'}},
   DelOBJ:{method:'DELETE', params:{Type:'Object'}},
   DelMAP:{method:'DELETE',params:{Type:'Maps'}},
   DelLINK:{method:'DELETE',params:{Type:'Link'}},
   Authorization: {method:'POST', params:{Type:'User'}},
   GetTOKEN:{method:'POST', params:{Type:'User',Func:'Token'}},
   Register:{method:'POST',params:{Type:'User',Func:'Reg'}}


   

 


    });
    });
   
     var localHist=angular.module('localHist',[]);
    localHist.factory('Hist',function($location,$routeParams){
      var listHistNTO="/allnto";
      var path=null;
      var listHistOBJ="/allntoobj";
            

      
        return {
         NewPathNTO:function (value)
        {
           path=value;

        },
        NewPathOBJ: function(value){
          path=value;

        },
     
      
        GoToListNTO:function(){
          if(path==null)
          $location.url("/allnto");
        else
          $location.url(/editnto/+path);

        }
      ,
        GoToListOBJ:function(Id_NTO,NameClass,Id_OBJ,NameOBJ){
              $location.url("/allobj/"+Id_NTO+"/"+NameClass+"/"+Id_OBJ+"/"+NameOBJ+"");

        },
        GoToListNTOOBJ:function(Id_NTO,NameClass){
          if($routeParams.Id_OBJ=="null"&&$routeParams.nameOBJ=="null")
                $location.url("/allntoobj");
              else
                $location.url("editobj/"+Id_NTO+"/"+NameClass+"/"+$routeParams.Id_OBJ+"/"
                  +$routeParams.nameOBJ);


        }
         
        
         
           }

    });
var localStorageService=angular.module('localStorageService',[]);
    localStorageService.factory('localStorageService',function($window){


      return {

          Get:function(name){
            return $window.localStorage.getItem(name);

          },
          Set:function(name,value){
            
            
            $window.localStorage.setItem(name,value);
          },
          Delete:function(name){
            $window.localStorage.removeItem(name);

          }
      }


    });
    var redirectServise=angular.module('redirectServise',[]);
    redirectServise.factory('redirectServise',function($location){
      return{
          redirectTo:function(url){
             $location.url(url);

          }


      }


    });
    var user=angular.module('user',['localStorageService']);
    user.factory('user',function($rootScope,localStorageService){
      return{
      getUserName:function(){
        
      if($rootScope.userData)
      return $rootScope.userData['login'];
    else
      return false;

      },
      getUserToken:function(){
        if($rootScope.userData)
      return $rootScope.userData['tokin'];
    return false;

      },
      getUserTokenLocal:function(){
        return localStorageService.Get('SVGmapToken');
      }
      ,
      setUserLocal:function(data){
        localStorageService.Set('SVGmapToken',data);
       

      },
      setUserScope:function(data){
        $rootScope.userData=data;
      },
      delUser:function(){
        localStorageService.Delete('SVGmapToken');
         $rootScope.userData=null;

      }
    }


    })
    