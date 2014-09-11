
    var PostServise= angular.module('PostServise', ['ngResource']);
    PostServise.factory('REST', function($resource){
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

   SetNTO:{method:'POST', params:{Type:'TypeObject'}},
   SetNTOSP:{method:'POST', params:{Type:'TypeObject',Func:'SP'}},
   SetNTOFP:{method:'POST', params:{Type:'TypeObject',Func:'FP'}},
   SetOBJ:{method:'POST', params:{Type:'Object'}},
   SetIMG:{method:'POST',params:{Type:'Uploader',Func:"IMG"}},
   SetSVG:{method:'POST',params:{Type:'Maps',Func:"save"}},



   PutNTO:{method:'PUT', params:{Type:'TypeObject'}},
   PutNTOSP:{method:'PUT', params:{Type:'TypeObject',Func:'SP'}},
   PutNTOFP:{method:'PUT', params:{Type:'TypeObject',Func:'FP'}},
   PutOBJ:{method:'PUT', params:{Type:'Object'}},
   PutSVG:{method:'PUT', params:{Type:'Maps'}},


   DelNTO:{method:'DELETE', params:{Type:'TypeObject'}},
   DelNTOSP:{method:'DELETE', params:{Type:'TypeObject',Func:'SP'}},
   DelNTOFP:{method:'DELETE', params:{Type:'TypeObject',Func:'FP'}},
   DelOBJ:{method:'DELETE', params:{Type:'Object'}},
   DelMAP:{method:'DELETE',params:{Type:'Maps'}}


   

 


    });
    });
    var PanelStatus=angular.module('PanelStatus',[]);
    PanelStatus.factory('Panel',function(){
      var Status=[{comand:"Старт приложения",data:[]}];

      
        return {
          AddNew:function (msg)
        {
            Status.push({comand:msg,data:[]});

        },
      AddOld:function (msg,status)
        {
          var Class;
          if(status=="ok")
              Class="success";
          else
              Class="error"

          Status[Status.length-1].data.push({operator:msg,status:status,Class:Class});
        },
        GetStatus:function()
        {
          return Status[Status.length-1];
        }
         
        
         
           }

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