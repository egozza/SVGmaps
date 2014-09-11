

/* Controllers */

var menu = angular.module('menu', []);

registerCont.$inject=['$scope','user','REST','redirectServise'];
menu.controller('registerCont', registerCont);
function registerCont($scope,user,REST,redirectServise)
{
	$scope.password=null;
	$scope.passwordTwo=null;
	$scope.login=null;

	function valid(){
		if($scope.password===$scope.passwordTwo)
		{
			return true;
		}
		else
			return false;

		};

	$scope.register=function(){
		if(valid())
		{
			REST.Register({Params:{login:$scope.login,password:$scope.password}},function(data){
				if(data['Server']=='ok')
				{
					redirectServise.redirectTo('/allmaps');
				}
			});	
		}
	};

	

}
Auth.$inject=['$scope','user','REST','$rootScope','redirectServise'];
menu.controller('Auth', Auth);
function Auth($scope,user,REST,$rootScope,redirectServise)
{
		$scope.Go=function(){
		REST.Authorization({Params:{login:$scope.login,password:$scope.password}},function(data){
			if(data['Server']=='ok'){
				user.setUserLocal(data['Response']['token']);
				 user.setUserScope(data['Response']);
				 redirectServise.redirectTo("/allmaps");

			}
				


		});
			}
	}

	



User.$inject=['$scope','user'];
menu.controller('User', User);

function User($scope,user){
$scope.exit=function(){
	user.delUser();
	


}
	



}



ListNTO.$inject=['$scope','REST','user'];
menu.controller('ListNTO', ListNTO);


	
  function ListNTO($scope,REST,user)
{	
	

$scope.lists=REST.GetNTOs({Params:{login:user.getUserName()}});
	console.log("Список всех классов");
	$scope.removeNTO=function(Id_NTO,id){

		REST.DelNTO({Params:{
			login:user.getUserName(),
			Id_NTO:Id_NTO}},function(data){
			if(data['Server']=='ok')
			{
				console.log('Удаление класса объекта: ServerResponse-'+data['Server']);
			for(var i=id;i<$scope.lists.Response.length;i++)
			{
			$scope.lists.Response[i]=$scope.lists.Response[i+1];

		$scope.lists.Response.length--;
	}
			}
			
		});
	};





$scope.filterName="";


};


AddNTO.$inject=['$scope','REST','Hist','user'];
menu.controller('AddNTO',AddNTO);




function AddNTO($scope,REST,Hist,user){
	
	$scope.listsSP=[];
	$scope.listsFP=[];
	$scope.Status=[];
	console.log("Содание класса объекта");
	
	$scope.addSP=function(){
		$scope.listsSP.push({'name':'','id':null});
			console.log('Добавление новой характеристики:ok');

	};

	$scope.removeSP=function(id){
		for(var i=id;i<$scope.listsSP.length;i++)
			$scope.listsSP[i]=$scope.listsSP[i+1];

		$scope.listsSP.length--;
			console.log('Удаление характеристики:ok');
		
	};

	$scope.addFP=function(){
		$scope.listsFP.push({'name':'','id':null});
			console.log('Добавление новой характеристики:ok');

	};

	$scope.removeFP=function(id){
		for(var i=id;i<$scope.listsFP.length;i++)
			$scope.listsFP[i]=$scope.listsFP[i+1];

		$scope.listsFP.length--;
		console.log('Удаление характеристики:ok');
		
	};

	$scope.saveAll=function(){
		console.log('Сохранение класса объекта:ok');
		REST.SetNTO({Params:{
			login:user.getUserName(),
			Name:$scope.NameNTO,
			Type:null,
			arraySP:$scope.listsSP,
			arrayFP:$scope.listsFP
		}},function(data){
			
				console.log('Создание имени класса:ServerResponse-'+data['Server']);
				Hist.GoToListNTO();
			
	});
};

$scope.GoToBack=function(){
	Hist.GoToListNTO();
}
};


EditNTO.inject=["$scope","REST","$routeParams",'Hist','user'];
menu.controller("EditNTO",EditNTO);

function EditNTO($scope,REST,$routeParams,Hist,user){
	
	$scope.listsSP=[];
	$scope.listsFP=[];
	
	$scope.NameClass=$routeParams.nameClass;
	console.log("Редактирование класса объекта");
	function Start(){
	REST.GetNTO({Params:{
		login:user.getUserName(),
		Id_NTO:$routeParams.Id_NTO

	}},function(data){
		$scope.NameNTO=data['Response']['TypeObject']['name'];
		$scope.Type=data['Response']['TypeObject']['Type'];
		$scope.listsSP=data['Response']['SmallData'];
		$scope.listsFP=data['Response']['FullData'];
		$scope.ParamsFP=[];
		if($scope.Type=="FP")
		{
			REST.GetNTOparent({Params:{
				login:user.getUserName(),
				Id_NTOFP:data['Response']['TypeObject']['id']

			}},function(data){
				$scope.ParamsFP=data['Response'];
				Hist.NewPathNTO(data['Response']["NTO"]['id']+"/"+data['Response']["NTO"]['name']);
			})
		}
		else
			Hist.NewPathNTO(null);

	});
};
Start();
	$scope.addSP=function(){
		$scope.listsSP.push({'name':"",'id':null});
		console.log('Добавление новой характеристики:ok');
	};

	$scope.removeSP=function(id){
	var flagDel=false;
	
		for(var i=id;i<$scope.listsSP.length;i++)
		{
			if(($scope.listsSP[i]['id']!=null)&&(!flagDel))
			{
				REST.DelNTOSP({Params:{
					login:user.getUserName(),
					Id_SP:$scope.listsSP[i]['id']
				}},function(data){
					
					
					console.log('Удаление характеристики:ServerResponse-'+data['Server']);
					
					});
				$scope.listsSP[i]=$scope.listsSP[i+1];
				$scope.listsSP.length--;
				flagDel=true;

			}
			else
			{
				if(!flagDel){
					console.log('Удаление  характеристики:ok');
					flagDel=true;
				}
				$scope.listsSP[i]=$scope.listsSP[i+1];
						$scope.listsSP.length--;
			}

			
		}

		
		
	};

	$scope.addFP=function(){
		$scope.listsFP.push({'name':"",'id':null,Class:'tableNo'});
		console.log('Добавление нового класса:ok');

	};

	$scope.removeFP=function(id){
	var flagDel=false;
	
		for(var i=id;i<$scope.listsFP.length;i++)
		{
			if(($scope.listsFP[i]['id']!=null)&&(!flagDel))
			{
				REST.DelNTOFP({Params:{
					login:user.getUserName(),
					Id_FP:$scope.listsFP[i]['Id_FP'],
					Id_NTOFP:$scope.listsFP[i]['id']

				}},function(data){
					
						console.log('Удаление внутреннего класса:ServerResponse-'+data['Server']);
					
				});
				$scope.listsFP[i]=$scope.listsFP[i+1];
						$scope.listsFP.length--;
						flagDel=true;
			}
			else
			{	if(!flagDel){
					console.log('Удаление  Внутреннего класса:ok');
					flagDel=true;
				}
				$scope.listsFP[i]=$scope.listsFP[i+1];
						$scope.listsFP.length--;
			}}};



$scope.saveAll=function(){
	console.log("Обновление класса объекта");
		REST.PutNTO({Params:{
			login:user.getUserName(),
			Name:$scope.NameNTO,
			Id_NTO:$routeParams.Id_NTO,
			arraySP:$scope.listsSP,
			arrayFP:$scope.listsFP
		}},function(data){
			console.log("Обновление имени  класса :ServerResponse-"+data['Server']);
			Start();
			});
};
	$scope.removeNTO=function(){
		if($scope.Type=="GL")
		REST.DelNTO({Params:{
			login:user.getUserName(),
			Id_NTO:$routeParams.Id_NTO
		}},function(data){
			console.log('Удаление класса объекта:ServerResponse-'+data['Server']);
			Hist.GoToListNTO();
			});
		else
			REST.DelNTOFP({Params:{
				login:user.getUserName(),
				Id_FP:$scope.ParamsFP["FP"]['Id_FP'],
				Id_NTOFP:$scope.ParamsFP["FP"]['id']
			}},function(data){
					
						console.log('Удаление внутреннего класса:ServerResponse-'+data['Server']);
						Hist.GoToListNTO();
					
				});
			
		

};
	$scope.GoToBack=function(){
	Hist.GoToListNTO();
}
};

AddOBJ.inject=["$scope","REST","$routeParams",'Hist','user'];
menu.controller("AddOBJ",AddOBJ);

function AddOBJ($scope,REST,$routeParams,Hist,user){

	$scope.NameClass=$routeParams.nameClass;
	$scope.Id_NTO=$routeParams.Id_NTO;
	$scope.Id_OBJ=$routeParams.Id_OBJ;
	console.log("Создание объекта класса "+$scope.NameClass);
	$scope.Type=0;
	if($scope.Id_OBJ=="null")
		$scope.Type=null;
	else
		$scope.Type=$scope.Id_OBJ;

	REST.GetNTO({Params:{
		login:user.getUserName(),
		Id_NTO:$routeParams.Id_NTO
	}},function(data){
	$scope.listsSP=data['Response']['SmallData'];
	$scope.listsFP=data['Response']['FullData'];

		
	$scope.saveAll=function(){
		REST.SetOBJ({Params:{
			login:user.getUserName(),
			Name:$scope.NameOBJ,
			Id_NTO:$scope.Id_NTO,
			array:$scope.listsSP,
			Id_OBJ:$scope.Type

		}},function(data){
			console.log(" Сохранение нового объекта:ServerResponse-"+data['Server']);
		})

	};
		$scope.GoToBack=function()
	{
			Hist.GoToListOBJ($routeParams.Id_NTO,$routeParams.nameClass,$routeParams.Id_OBJ,$routeParams.nameOBJ);
	}


});
};

ListOBJ.inject=["$scope","REST","$routeParams",'Hist','user'];
menu.controller("ListOBJ",ListOBJ);

function ListOBJ($scope,REST,$routeParams,Hist,user){
	$scope.NameClass=$routeParams.nameClass;
	$scope.Id_NTO=$routeParams.Id_NTO;
	$scope.NameOBJ=$routeParams.nameOBJ;
	$scope.Id_OBJ=$routeParams.Id_OBJ;
	$scope.histId_NTO=$scope.Id_NTO;
	$scope.histnameNTO=$scope.NameClass;
	$scope.Type=0;
	if($scope.Id_OBJ=="null")
		$scope.Type=null;
	else
		$scope.Type=$scope.Id_OBJ;




	console.log("Список всех объектов класса "+$scope.NameClass);
	$scope.lists=[];
	REST.GetOBJs({Params:{
		login:user.getUserName(),
		Id_NTO:$routeParams.Id_NTO,
		Id_OBJ:$scope.Type
	}},function(data){
		$scope.lists=data["Response"];});
	if(($routeParams.Id_OBJ!="null" )&& ($routeParams.nameOBJ!="null"))
	{
		REST.GetOBJ({Params:{
			login:user.getUserName(),
			Id_OBJ:$routeParams.Id_OBJ
		}},function(data){
			REST.GetNTO({Params:{
				login:user.getUserName(),
				Id_NTO:data["Response"]["object"]["Id_NTO"]
			}},function(data)
				{
					$scope.histId_NTO=data["Response"]["TypeObject"]["id"];
					$scope.histnameNTO=data["Response"]["TypeObject"]["name"];
				});
		});
	}

$scope.GoToBack=function()
	{
			Hist.GoToListNTOOBJ($scope.histId_NTO,$scope.histnameNTO);
	}

};





EditOBJ.inject=["$scope","REST","$routeParams",'Hist','user'];
menu.controller("EditOBJ",EditOBJ);


function EditOBJ($scope,REST,$routeParams,Hist,user){

	$scope.NameOBJ=$routeParams.nameOBJ;
	$scope.Id_OBJ=$routeParams.Id_OBJ;
	$scope.histId_OBJ="null";
	$scope.histnameOBJ="null";
	console.log("Редактирование объекта  "+$scope.NameOBJ);

	REST.GetNTO({Params:{
		login:user.getUserName(),
		Id_NTO:$routeParams.Id_NTO
	}},function(data){
	$scope.listsSP=[];
	$scope.listsSPimg=[];
	$scope.listsFP=data['Response']['FullData'];
			REST.GetOBJ({Params:{
				login:user.getUserName(),
				Id_OBJ:$routeParams.Id_OBJ,
				Id_NTO:$routeParams.Id_NTO
			}},function(data){
				if(data["Response"]["object"]["Id_OBJ"]!="0")
				{
					REST.GetOBJ({Params:{
						login:user.getUserName(),
						Id_OBJ:data["Response"]["object"]["Id_OBJ"],
						Id_NTO:data["Response"]["object"]["Id_NTO"]

					}},function(data){
						$scope.histId_OBJ=data["Response"]["object"]["id"];
						$scope.histnameOBJ=data["Response"]["object"]["name"];

					});
				}
				$scope.listsSP=data['Response']['SmallProfile'];
				$scope.listsSPimg=data['Response']['SmallProfileImg'];
			});
		});
	$scope.saveAll=function(){
		REST.PutOBJ({Params:{
			login:user.getUserName(),
			Name:$scope.NameOBJ,
			Id_OBJ:$scope.Id_OBJ,
			array:$scope.listsSP
		}},function(data){
			console.log(" Обновление объекта:ServerResponse-"+data['Server']);
		});

	};
		$scope.removeOBJ=function(){
				REST.DelOBJ({Params:{
					login:user.getUserName(),
					Id_OBJ:$routeParams.Id_OBJ
				}},function(data){
					if(data["Server"]=="ok")
						console.log("Удаление объекта:ServerResponse-"+data['Server']);
					else
					{
						console.log("Удаление объекта:ServerResponse-"+data['Server']);
						$scope.GoToBack();
					}
				});
					
				};
			
		


	$scope.GoToBack=function()
	{
			Hist.GoToListOBJ($routeParams.Id_NTO,$routeParams.nameClass,$scope.histId_OBJ,$scope.histnameOBJ);
	};
	


};

CreatSVG.inject=["$scope","redirectServise",'user'];
menu.controller("CreatSVG",CreatSVG);
function CreatSVG($scope,redirectServise,user){
	$scope.NameSVG="";
		$scope.Creat=function(){
			if($scope.NameSVG!="")
				redirectServise.redirectTo("editsvg/null/"+$scope.NameSVG);
					
		}

}



Localtion.inject=["$routeParams","$scope","REST","$Location",'user'];
menu.controller("Localtion",Localtion);

function Localtion($routeParams,$scope,REST,$location,user){
$scope.Id=$routeParams.id;
var frame ;
$scope.data=null;
var svgCanvas;
if($scope.Id!="null")
console.log("Редактирование svg изображения");

 $scope.InitFrame=function()
{
  var doc, mainButton;
            frame = document.getElementById('iframeSVG');
            svgCanvas = new EmbeddedSVGEdit(frame);
            
            
var initReal=function(){
		if($scope.Id!="null")
		REST.GetMAPSxml({Params:{
			login:user.getUserName(),
			id:$scope.Id}},function(data)
		{
		var string=data["Response"];
		svgCanvas.clear();
		
		svgCanvas.setSvgString(string);
		

		console.log("Загрузка svg изображения с id="+$scope.Id+":ok");
  
});
	else
{		svgCanvas.clear();
	svgCanvas.setSvgString("<svg width='640' height='480' xmlns='http://www.w3.org/'2'000/svg' xmlns:svg='http://www.w3.org/2000/svg'>"+
 "<!-- Created with SVG-edit - http://svg-edit.googlecode.com/ --><g> <title>Layer 1</title></g></svg>");
}
}
		svgCanvas.ready(initReal);

}


  $scope.SaveSVG=function(){
  	
  	 function handleSvgDatanew(data, error) {
            if (error) {
                   console.log("Получение данных от svg-edit:error");
            } else {
            		console.log("Получение данных от svg-edit:ok");
            		REST.SetSVG({
            			Params:{
            				login:user.getUserName(),
            				Name:$routeParams.nameSVG,val:data}},
            				function(data){
            			console.log("Сохранение SVG изображения:ServerResponse-"+data['Server']);
            		})
                
            }
        };
         function handleSvgDataput(dataString, error) {
            if (error) {
                console.log("Получение данных от svg-edit:error");
            } else {
            	 console.log("Получение данных от svg-edit:ok");
            		REST.GetMAP({Params:{
            			login:user.getUserName(),
            			id:$scope.Id
            		}},function(data){
            			$scope.data=data["Response"][0]["data"];
            		REST.PutSVG({Params:{
            			login:user.getUserName(),
            			id:$scope.Id,
            			Name:data["Response"][0]["name"],
            			data:data["Response"][0]["data"],
            			val:dataString
            		}},
            		function(data){
            			console.log("Обновление SVG изображения:ServerResponse-"+data['Server']);

            		});
                });
            }
        };
        		if($scope.Id=="null")

        	svgCanvas.getSvgString()(handleSvgDatanew);
        		else
        	svgCanvas.getSvgString()(handleSvgDataput);		



  }
  $scope.DeleteMap=function(){
  	if($routeParams.id!='null')
  	{
  	REST.DelMAP({Params:{
  		login:user.getUserName(),
  		id:$routeParams.id,
  		data:$scope.data
  	}},function(data){
  		   	 console.log("Удаление карты:ServerResponse-"+data['Server']);
  		   	 $location.url("/allmaps");
  	});
  }
  	else
  		$location.url("/allmaps");
  


  }




}

AllMaps.inject=["$routeParams","$scope","REST",'user'];
menu.controller("AllMaps",AllMaps);

function AllMaps($routeParams,$scope,REST,user)
{
	console.log("Список всех карт");

		REST.GetMAPS({Params:{
  		login:user.getUserName()
  	}},function(data){
			$scope.ListMaps=data["Response"];
			for(var i=0;i<$scope.ListMaps.length;i++)
			$scope.ListMaps[i]["data"]=$scope.ListMaps[i]["data"]+"?id="+Math.random();
		});
		
			
	
		
			$scope.orderby="id";
			$scope.reverse=true;
  $scope.DeleteMap=function(id,data,key){
  	REST.DelMAP({Params:{
  		login:user.getUserName(),
  		id:id,
  		data:data}},function(data){
  		   	 console.log("Удаление карты :ServerResponse-"+data['Server']);
  		   	 var flagDel=false;
  		   	 $scope.ListMaps.reverse();
	
		for(var i=key;i<$scope.ListMaps.length;i++)
		{
			
				$scope.ListMaps[i]=$scope.ListMaps[i+1];
				flagDel=true;
						
			}
			if(flagDel)
			$scope.ListMaps.length--;

			
		
  	});


  }

};
EditLink.inject=["$routeParams","$scope","REST",'user'];
menu.controller("EditLink",EditLink);


 function EditLink($routeParams,$scope,REST,user)
{
	$scope.Map=null;
	$scope.Ok;
	$scope.IdObject=null;
	$scope.SelectOBJ=null;
	$scope.SelectNTO=null;
	
	$scope.ListNTO=[];
	$scope.ListOBJ=[];
	$scope.Linkall=[];


	REST.GetNTOs({Params:{
  		login:user.getUserName()
  	}},function(data){
		$scope.ListNTO=data["Response"];
	});

	
	REST.GetMAPSxml({Params:{
		login:user.getUserName(),
		id:$routeParams.id
	}},function(data){
		
		$scope.Map=data["Response"];
		$scope.Ok="ok";

		REST.GetLINK({Params:{
			login:user.getUserName(),
			Id_MAP:$routeParams.id
		}},function(data){
				$scope.Linkall=data["Response"];
				
		})

	});
	$scope.restartValue=function(){
	$scope.IdObject=null;
	$scope.SelectOBJ=null;
	$scope.SelectNTO=null;

	}
	$scope.GetOBJ=function(value){
		REST.GetOBJs({
			Params:{
				login:user.getUserName(),
				Id_NTO:value
			}},function(data){

				$scope.ListOBJ=data["Response"];
				
			});


	};
		$scope.FindOBG=function(id){
			
			for(var i=0;i<$scope.Linkall.length;i++)
			{
				if($scope.Linkall[i]['Id_MAPOBJ']==id)
				{
					$scope.SelectOBJ=$scope.Linkall[i]['Id_OBJ'];
					$scope.SelectNTO=$scope.Linkall[i]['Id_NTO'];
					$scope.Flag=false;

					break;
				}
			}

		};
		$scope.AddLink=function(){
			var name;
			
			for(var i=0;i<$scope.ListOBJ.length;i++)
			{	
				if($scope.ListOBJ[i]['id']==$scope.SelectOBJ)
				{		
					name=$scope.ListOBJ[i]['name'];
					for(var j=0;j<$scope.Linkall.length;j++)
					{
						if(($scope.Linkall[j]["Id_OBJ"]==$scope.SelectOBJ)&&($scope.Linkall[j]["Id_MAPOBJ"]==$scope.IdObject))
						{
								return false;

						}
						if($scope.Linkall[j]["Id_MAPOBJ"]==$scope.IdObject)
						{
							$scope.Linkall[j]["Id_OBJ"]=$scope.SelectOBJ;
							$scope.Linkall[j]["nameOBJ"]=name;
								return false;
						}
					}
					}
			}
			$scope.Linkall.push({
				id:"null",
				Id_MAP:$routeParams.id,
				Id_OBJ:$scope.SelectOBJ,
				Id_MAPOBJ:$scope.IdObject,
				Id_NTO:$scope.SelectNTO,
				nameOBJ:name
			});

		
		}



	$scope.GetId=function(id){
		$scope.IdObject=id;
		$scope.FindOBG(id);

	};
	
	$scope.SaveAll=function(){
		REST.SetLINK({Params:{
			login:user.getUserName(),
			Id_MAP:$routeParams.id,
			array:$scope.Linkall

		}},function(data){
			

		})
	}
	

		
	




}





