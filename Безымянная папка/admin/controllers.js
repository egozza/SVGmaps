

/* Controllers */

var menu = angular.module('menu', []);


StatusCtrl.$inject=['$scope','Panel'];
menu.controller('StatusCtrl', StatusCtrl);

function StatusCtrl($scope,Panel)
{
	$scope.Table=Panel.GetStatus();
	$scope.Data=$scope.Table.data;
		$scope.Start=function()
{
		$scope.Table=Panel.GetStatus();
		$scope.Data=$scope.Table.data;
};
};

ListNTO.$inject=['$scope','REST','Panel'];
menu.controller('ListNTO', ListNTO);


	
  function ListNTO($scope,REST,Panel)
{	
	

$scope.lists=REST.GetNTOs();
	Panel.AddNew("Список всех классов");
	$scope.removeNTO=function(Id_NTO,id){

		REST.DelNTO({Params:{Id_NTO:Id_NTO}},function(data){
			if(data['Server']=='ok')
			{
				Panel.AddOld('Удаление класса объекта',data['Server']);
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


AddNTO.$inject=['$scope','REST','Panel','Hist'];
menu.controller('AddNTO',AddNTO);




function AddNTO($scope,REST,Panel,Hist){
	
	$scope.listsSP=[];
	$scope.listsFP=[];
	$scope.Status=[];
	Panel.AddNew("Содание класса объекта");
	
	$scope.addSP=function(){
		$scope.listsSP.push({'name':'','id':null});
			Panel.AddOld('Добавление новой характеристики',"ok");

	};

	$scope.removeSP=function(id){
		for(var i=id;i<$scope.listsSP.length;i++)
			$scope.listsSP[i]=$scope.listsSP[i+1];

		$scope.listsSP.length--;
			Panel.AddOld('Удаление характеристики',"ok");
		
	};

	$scope.addFP=function(){
		$scope.listsFP.push({'name':'','id':null});
			Panel.AddOld('Добавление новой характеристики',"ok");

	};

	$scope.removeFP=function(id){
		for(var i=id;i<$scope.listsFP.length;i++)
			$scope.listsFP[i]=$scope.listsFP[i+1];

		$scope.listsFP.length--;
		Panel.AddOld('Удаление характеристики',"ok");
		
	};

	$scope.saveAll=function(){
		Panel.AddOld('Сохранение класса объекта',"ok");
		REST.SetNTO({Params:{
			Name:$scope.NameNTO,
			Type:null,
			arraySP:$scope.listsSP,
			arrayFP:$scope.listsFP
		}},function(data){
			
				Panel.AddOld('Создание имени класса',data['Server']);
				Hist.GoToListNTO();
			
	});
};

$scope.GoToBack=function(){
	Hist.GoToListNTO();
}
};


EditNTO.inject=["$scope","REST","$routeParams",'Panel','Hist'];
menu.controller("EditNTO",EditNTO);

function EditNTO($scope,REST,$routeParams,Panel,Hist){
	
	$scope.listsSP=[];
	$scope.listsFP=[];
	
	$scope.NameClass=$routeParams.nameClass;
	Panel.AddNew("Редактирование класса объекта");
	function Start(){
	REST.GetNTO({Params:{Id_NTO:$routeParams.Id_NTO}},function(data){
		$scope.NameNTO=data['Response']['TypeObject']['name'];
		$scope.Type=data['Response']['TypeObject']['Type'];
		$scope.listsSP=data['Response']['SmallData'];
		$scope.listsFP=data['Response']['FullData'];
		$scope.ParamsFP=[];
		if($scope.Type=="FP")
		{
			REST.GetNTOparent({Params:{

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
		Panel.AddOld('Добавление новой характеристики',"ok");
	};

	$scope.removeSP=function(id){
	var flagDel=false;
	
		for(var i=id;i<$scope.listsSP.length;i++)
		{
			if(($scope.listsSP[i]['id']!=null)&&(!flagDel))
			{
				REST.DelNTOSP({Params:{
					Id_SP:$scope.listsSP[i]['id']
				}},function(data){
					
					
					Panel.AddOld('Удаление характеристики ',data['Server']);
					
					});
				$scope.listsSP[i]=$scope.listsSP[i+1];
				$scope.listsSP.length--;
				flagDel=true;

			}
			else
			{
				if(!flagDel){
					Panel.AddOld('Удаление  характеристики',"ok");
					flagDel=true;
				}
				$scope.listsSP[i]=$scope.listsSP[i+1];
						$scope.listsSP.length--;
			}

			
		}

		
		
	};

	$scope.addFP=function(){
		$scope.listsFP.push({'name':"",'id':null,Class:'tableNo'});
		Panel.AddOld('Добавление нового класса',"ok");

	};

	$scope.removeFP=function(id){
	var flagDel=false;
	
		for(var i=id;i<$scope.listsFP.length;i++)
		{
			if(($scope.listsFP[i]['id']!=null)&&(!flagDel))
			{
				REST.DelNTOFP({Params:{

					Id_FP:$scope.listsFP[i]['Id_FP'],
					Id_NTOFP:$scope.listsFP[i]['id']

				}},function(data){
					
						Panel.AddOld('Удаление внутреннего класса',data['Server']);
					
				});
				$scope.listsFP[i]=$scope.listsFP[i+1];
						$scope.listsFP.length--;
						flagDel=true;
			}
			else
			{	if(!flagDel){
					Panel.AddOld('Удаление  Внутреннего класса',"ok");
					flagDel=true;
				}
				$scope.listsFP[i]=$scope.listsFP[i+1];
						$scope.listsFP.length--;
			}}};



$scope.saveAll=function(){
	Panel.AddNew("Обновление класса объекта");
		REST.PutNTO({Params:{
			Name:$scope.NameNTO,
			Id_NTO:$routeParams.Id_NTO,
			arraySP:$scope.listsSP,
			arrayFP:$scope.listsFP
		}},function(data){
			Panel.AddOld("Обновление имени  класса ",data['Server']);
			Start();
			});
};
	$scope.removeNTO=function(){
		if($scope.Type=="GL")
		REST.DelNTO({Params:{Id_NTO:$routeParams.Id_NTO}},function(data){
			Panel.AddOld('Удаление класса объекта',data['Server']);
			Hist.GoToListNTO();
			});
		else
			REST.DelNTOFP({Params:{Id_FP:$scope.ParamsFP["FP"]['Id_FP'],Id_NTOFP:$scope.ParamsFP["FP"]['id']}},function(data){
					
						Panel.AddOld('Удаление внутреннего класса',data['Server']);
						Hist.GoToListNTO();
					
				});
			
		

};
	$scope.GoToBack=function(){
	Hist.GoToListNTO();
}
};

AddOBJ.inject=["$scope","REST","$routeParams",'Panel','Hist'];
menu.controller("AddOBJ",AddOBJ);

function AddOBJ($scope,REST,$routeParams,Panel,Hist){

	$scope.NameClass=$routeParams.nameClass;
	$scope.Id_NTO=$routeParams.Id_NTO;
	$scope.Id_OBJ=$routeParams.Id_OBJ;
	Panel.AddNew("Создание объекта класса "+$scope.NameClass);
	$scope.Type=0;
	if($scope.Id_OBJ=="null")
		$scope.Type=null;
	else
		$scope.Type=$scope.Id_OBJ;

	REST.GetNTO({Params:{Id_NTO:$routeParams.Id_NTO}},function(data){
	$scope.listsSP=data['Response']['SmallData'];
	$scope.listsFP=data['Response']['FullData'];

		
	$scope.saveAll=function(){
		REST.SetOBJ({Params:{
			Name:$scope.NameOBJ,
			Id_NTO:$scope.Id_NTO,
			array:$scope.listsSP,
			Id_OBJ:$scope.Type

		}},function(data){
			Panel.AddOld(" Сохранение новго объекта",data['Server']);
		})

	};
		$scope.GoToBack=function()
	{
			Hist.GoToListOBJ($routeParams.Id_NTO,$routeParams.nameClass,$routeParams.Id_OBJ,$routeParams.nameOBJ);
	}


});
};

ListOBJ.inject=["$scope","REST","$routeParams",'Panel','Hist'];
menu.controller("ListOBJ",ListOBJ);

function ListOBJ($scope,REST,$routeParams,Panel,Hist){
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




	Panel.AddNew("Список всех объектов класса "+$scope.NameClass);
	$scope.lists=[];
	REST.GetOBJs({Params:{
		Id_NTO:$routeParams.Id_NTO,
		Id_OBJ:$scope.Type
	}},function(data){
		$scope.lists=data["Response"];});
	if(($routeParams.Id_OBJ!="null" )&& ($routeParams.nameOBJ!="null"))
	{
		REST.GetOBJ({Params:{
			Id_OBJ:$routeParams.Id_OBJ
		}},function(data){
			REST.GetNTO({Params:{Id_NTO:data["Response"]["object"]["Id_NTO"]}},function(data)
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





EditOBJ.inject=["$scope","REST","$routeParams",'Panel','Hist'];
menu.controller("EditOBJ",EditOBJ);


function EditOBJ($scope,REST,$routeParams,Panel,Hist){

	$scope.NameOBJ=$routeParams.nameOBJ;
	$scope.Id_OBJ=$routeParams.Id_OBJ;
	$scope.histId_OBJ="null";
	$scope.histnameOBJ="null";
	Panel.AddNew("Редактирование объекта  "+$scope.NameOBJ);
	REST.GetNTO({Params:{Id_NTO:$routeParams.Id_NTO}},function(data){
	$scope.listsSP=[];
	$scope.listsSPimg=[];
	$scope.listsFP=data['Response']['FullData'];
			REST.GetOBJ({Params:{
				Id_OBJ:$routeParams.Id_OBJ,
				Id_NTO:$routeParams.Id_NTO
			}},function(data){
				if(data["Response"]["object"]["Id_OBJ"]!="0")
				{
					REST.GetOBJ({Params:{
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
		REST.PutOBJ({Params:{Name:$scope.NameOBJ,Id_OBJ:$scope.Id_OBJ,array:$scope.listsSP}},function(data){
			Panel.AddOld(" Обновление объекта",data['Server']);
		});

	};
		$scope.removeOBJ=function(){
				REST.DelOBJ({Params:{Id_OBJ:$routeParams.Id_OBJ}},function(data){
					if(data["Server"]=="ok")
						Panel.AddOld("Удаление объекта",data['Server']);
					else
					{
						Panel.AddOld("Удаление объекта",data['Server']);
						$scope.GoToBack();
					}
				});
					
				};
			
		


	$scope.GoToBack=function()
	{
			Hist.GoToListOBJ($routeParams.Id_NTO,$routeParams.nameClass,$scope.histId_OBJ,$scope.histnameOBJ);
	};
	


};

CreatSVG.inject=["$scope","$location"];
menu.controller("CreatSVG",CreatSVG);
function CreatSVG($scope,$location){
	$scope.NameSVG="";
		$scope.Creat=function(){
			if($scope.NameSVG!="")
				$location.url("editsvg/null/"+$scope.NameSVG);
					
		}

}



Localtion.inject=["$routeParams","$scope","REST","Panel","$Location"];
menu.controller("Localtion",Localtion);

function Localtion($routeParams,$scope,REST,Panel,$location){
$scope.Id=$routeParams.id;
var frame ;
$scope.data=null;
var svgCanvas;
if($scope.Id!="null")
Panel.AddNew("Редактирование svg изображения");

 $scope.InitFrame=function()
{
  var doc, mainButton;
            frame = document.getElementById('iframeSVG');
            svgCanvas = new EmbeddedSVGEdit(frame);
            // Hide main button, as we will be controlling new, load, save, etc. from the host document
            doc = frame.contentDocument || frame.contentWindow.document;
            mainButton = doc.getElementById('main_button');
            mainButton.style.display = 'none';

var initReal=function(){
		if($scope.Id!="null")
		REST.GetMAPSxml({Params:{id:$scope.Id}},function(data)
		{
		var string=data["Response"];
		svgCanvas.clear();
		
		svgCanvas.setSvgString(string);
		

		Panel.AddOld("Загрузка svg изображения с id="+$scope.Id,"ok");
  
});
	else
{		svgCanvas.clear();
	svgCanvas.setSvgString("<svg width='640' height='480' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'>"+
 "<!-- Created with SVG-edit - http://svg-edit.googlecode.com/ --><g> <title>Layer 1</title></g></svg>");
}
}
		svgCanvas.ready(initReal());

}


  $scope.SaveSVG=function(){
  	
  	 function handleSvgDatanew(data, error) {
            if (error) {
                   Panel.AddOld("Получение данных от svg-edit","error");
            } else {
            		Panel.AddOld("Получение данных от svg-edit","ok");
            		REST.SetSVG({
            			Params:{Name:$routeParams.nameSVG,val:data}},
            				function(data){
            			Panel.AddOld("Сохранение SVG изображения",data["Server"]);
            		})
                
            }
        };
         function handleSvgDataput(dataString, error) {
            if (error) {
                Panel.AddOld("Получение данных от svg-edit","error");
            } else {
            	 Panel.AddOld("Получение данных от svg-edit","ok");
            		REST.GetMAP({Params:{id:$scope.Id}},function(data){
            			$scope.data=data["Response"][0]["data"];
            		REST.PutSVG({Params:{
            			id:$scope.Id,
            			Name:data["Response"][0]["name"],
            			data:data["Response"][0]["data"],
            			val:dataString
            		}},
            		function(data){
            			Panel.AddOld("Обновление SVG изображения",data["Server"]);

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
  	REST.DelMAP({Params:{id:$routeParams.id,data:$scope.data}},function(data){
  		   	 Panel.AddOld("Удаление карты",data["Server"]);
  		   	 $location.url("/allmaps");
  	});
  }
  	else
  		$location.url("/allmaps");
  


  }




}

AllMaps.inject=["$routeParams","$scope","REST","Panel"];
menu.controller("AllMaps",AllMaps);

function AllMaps($routeParams,$scope,REST,Panel)
{
	Panel.AddNew("Список всех карт");
	
		var item=REST.GetMAPS(function(){
			$scope.ListMaps=item["Response"];
			for(var i=0;i<$scope.ListMaps.length;i++)
			$scope.ListMaps[i]["data"]=$scope.ListMaps[i]["data"]+"?id="+Math.random();
		});
		
			
	
		
			$scope.orderby="id";
			$scope.reverse=true;
  $scope.DeleteMap=function(id,data,key){
  	REST.DelMAP({Params:{id:id,data:data}},function(data){
  		   	 Panel.AddOld("Удаление карты ",data["Server"]);
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


}



