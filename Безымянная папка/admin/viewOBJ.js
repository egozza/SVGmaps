var viewOBJ=(function(){
	var NumSP=0;
	var ObjOld=0;
var Color=function(){
Jquery.ColorClass("TrName");
Jquery.ColorClass("TrSmall");
Jquery.ColorClass("TrFull");
Jquery.ColorClass("TrPanel");

	};


return{
	SetObjOld:function(value){
		ObjOld=value;

	},
	GetObjOld:function(){
		return ObjOld;
	},

	CreateNewTableObjectAll:function(){
		var string='';
	string+="<span class='NameSpan'><h3>Создание Нового Объекта</h3></span>"
	string+="<div align='center' class='TrName'><span class='NameSpan' >Имя объекта</span></div>";
	string+="<div align='center' class='TrName'><input type='text' id='NameObject'/><span class='NameSpanSmall'>Тип :</span>";
	string+="<select onchange='viewOBJ.StartNewAll(this)' class='SelectNTO'><option selected>Выберите Тип Объекта</option></select></div>";
	string+="<div class='DivSpace' id='SmallOne'></div><div class='DivSpace' id='FullOne' ></div><div class='DivSpace' id='PanelOne' ></div>"
Jquery.SetHTML('RightContent',null,string);
var GetNTO=function(data){
		if(data!=null)
		{
			var string='';
			for(value in data)
			{
				string+="<option value='"+data[value]['id']+"'>"+data[value]['name']+"</option>";
			}
			Jquery.SetPrependTo(null,'SelectNTO',string);
		
		
		}
		
	};
TypeObject.GetTypeObjects(GetNTO,null);


Color();
	},
	CreateTableObject:function(Id_NTO){
		
			var string='';
		
	string+="<span class='NameSpan'><h3>Редактирование Объекта</h3></span>"
	string+="<div align='center' class='TrName'><span class='NameSpan' >Имя объекта</span></div>";
	string+="<div align='center' class='TrName'><input type='text' id='NameObject'/><span class='NameSpanSmall'>Тип :</span>";
	string+="<select class='SelectNTO' disabled></select></div>";
	string+="<div class='DivSpace' id='SmallOne'></div><div class='DivSpace' id='FullOne' ></div><div class='DivSpace' id='PanelOne' ></div>"
	Jquery.SetHTML('RightContent',null,"");
	Jquery.SetHTML('RightContent',null,string);
	var  callback=function(data){
		if(data!=false){
			var string="<option selected>"+data['name']+"</option>";
			Jquery.SetPrependTo(null,'SelectNTO',string);

		}
	};
		TypeObject.GetTypeObjectOne(callback,Id_NTO);

	},
	CreateTableAllObject:function(Id_NTO,NameNTO){
		var string='';
		
	string+="<span class='NameSpan'><h3>Все объекты Класса "+NameNTO+" </h3></span>"
	string+="<div align='center' class='TrName'><span class='NameSpan' >Объекты</span></div>";
	string+="<div class='DivSpace' id='ObjectsAllOne'></div><div class='DivSpace' id='PanelOne' ></div>"
	Jquery.SetHTML('RightContent',null,"");
	Jquery.SetHTML('RightContent',null,string);
	Color();

	},
	
	CreateNewSmallParams:function(Id_NTO){


	var GetSmall=function(data)
	   {
	   	if(data!=false){
	   		NumSP=0;
	 	var string="<div align='center' id='TrSmallOne' class='TrSmall'><span class='NameSpan' >Короткие парамметры</span></div>";
		for(var value in data)

		{  
			
			string+="<div align='center' class='TrSmall'><span class='NameSpanSmall' >"+data[value]['name']+"</span>";
			string+="<input type='text' id='Text-SP-NEW-"+data[value]['id']+"' class='TextSmall' /></div>";
			NumSP++;
		}	
			
	
			Jquery.RemoveElement(null,'TrSmall');
			
		Jquery.SetAfter('SmallOne',null,string);
		Color();
		}
		 
	};
TypeObject.GetSmallProfile(GetSmall,Id_NTO);



	},
	CreateAllParams:function(Id_NTO,Id_OBJ)
	{
			var GetAll=function(data)
	   {
	   	if(data!=false){
	   		NumSP=0;
	 	var stringSmall="<div align='center' id='TrSmallOne' class='TrSmall'><span class='NameSpan' >Короткие парамметры</span></div>";
	 	var stringFull="<div align='center' id='TrFullOne' class='TrFull'><span class='NameSpan' >Подробные парамметры</span></div>";

		for(var value in data['SmallProfile'])

		{  
			
			stringSmall+="<div align='center' class='TrSmall'><span class='NameSpanSmall' >"+data['SmallProfile'][value]['name']+"</span>";
			stringSmall+="<input type='text' id='Text-SP-NEW-"+data['SmallProfile'][value]['id']+"' class='TextSmall' value='"+data['SmallProfile'][value]['text']+"' /></div>";
			NumSP++;
		}
		for(var value in data['FullProfile'])
		{

			stringFull+="<div align='center' class='TrFull'><span class='NameSpanSmall' >"+data['FullProfile'][value]['name']+"</span>";
			stringFull+="<button  class='ButtonFullAdd' onClick='viewOBJ.SetObjOld("+data['object']['id']+");viewOBJ.StartAllObject("+data['FullProfile'][value]['id']+",\""+data['FullProfile'][value]['name']+"\","+data['object']['id']+")'>Добавить</button></div>";
		}
		Jquery.SetVal('NameObject',null,data['object']['name']);
		Jquery.SetAfter('SmallOne',null,stringSmall);
		Jquery.SetAfter('FullOne',null,stringFull);

		Color();
		}
		};
		Objects.GetObject(GetAll,Id_OBJ,Id_NTO);



	}
	,
	CreateAllObjects:function(Id_NTO,Id_OBJ){
		var callback=function(data){
		if(data!=false)
		{
			var string='';

		for(var value in data){  
			
			string+="<div align='center' class='TrSmall'><span class='NameSpanSmall' >"+data[value]['name']+"</span>";
			string+="<img class='edite' aling='right' ";
			string+="src='img/edite_fon.png' id='Object-"+data[value]['id']+"'";
			string+=" onClick='viewOBJ.StartOld("+data[value]['Id_NTO']+","+data[value]['id']+")' /></div>";
		   }	
			}
			else
			{

			string="<div align='center' class='TrSmall'><span class='NameSpanSmall'>Ни одного объекта пока не созданно</span></div>";
			}

	
		Jquery.RemoveElement(null,'TrSmall');
		Jquery.SetAfter('ObjectsAllOne',null,string);
		Color();

				
		};

			  Objects.GetNameObjectsAll(callback,Id_NTO,Id_OBJ);



	}
	,
	CreateNewFullProfile:function(Id_NTO)
	{
		var GetFull=function(data)
		{
		if(data!=false){
	 	var string="<div align='center' id='TrFullOne' class='TrFull'><span class='NameSpan' >Подробные парамметры</span></div>";
		for(var value in data)

		{  
			
			string+="<div align='center' class='TrFull'><span class='NameSpanSmall' >"+data[value]['name']+"</span>";
			string+="<button  class='ButtonFullAdd' onClick='massage.CreateWindows();massage.AddTextMassage(";
				string+="\"Вы не можете добавлять объекты в "+data[value]['name']+" пока не сохраните объект\")'>Добавить</button></div>";
			
		}

			Jquery.RemoveElement(null,'TrFull');
		Jquery.SetAfter('FullOne',null,string);
		Color();
		};
	}
	TypeObject.GetFullProfile(GetFull,Id_NTO);
},
	
	CreateNewPanel:function(Id_NTO)
	{
	string="<div align='center' class='TrPanel'><table ><tr><td><button";
	string+=" id='SeveAll' onClick='massage.CreateWarningMassage(\"viewOBJ.";
	string+="SaveNewObject("+Id_NTO+")\",\"Вы точно хотите создать новый объект\")' >Сохранить</button></td>";
	string+="<td><button id='RemoveTypeObject' class='ButtonClass' ";
	string+=" >Удалить</button></td></tr></table></div>";
Jquery.RemoveElement(null,'TrPanel');
Jquery.SetAfter('PanelOne',null,string);
	},
	CreatePanel:function(Id_OBJ)
	{
	string="<div align='center' class='TrPanel'><table ><tr><td><button";
	string+=" id='SeveAll' onClick='massage.CreateWarningMassage(\"viewOBJ.";
	string+="SaveObject("+Id_OBJ+")\",\"Вы точно хотите сохранить объект\")' >Сохранить</button></td>";
	string+="<td><button id='RemoveTypeObject' class='ButtonClass' onClick='massage.CreateWarningMassage(\"viewOBJ.RemoveObject("+Id_OBJ+")";
	string+="\",\"Вы точно хотите удалить  Объект\")' >Удалить</button></td></tr></table></div>";
Jquery.RemoveElement(null,'TrPanel');
Jquery.SetAfter('PanelOne',null,string);

	},
	CreatePanelAllObjects:function(Id_NTO){
	string="<div align='center' class='TrPanel'><button";
	string+=" id='SeveAll' onClick='viewOBJ.StartNew("+Id_NTO+")'>Добавить</button></div>";
	
Jquery.RemoveElement(null,'TrPanel');
Jquery.SetAfter('PanelOne',null,string);
	}
	,

	StartNewAll:function(el){
		this.CreateNewSmallParams(el.options[el.selectedIndex].value);
		this.CreateNewFullProfile(el.options[el.selectedIndex].value);
		this.CreateNewPanel(el.options[el.selectedIndex].value);


	},
	StartNew:function(Id_NTO){
		this.CreateTableObject(Id_NTO);
			this.CreateNewSmallParams(Id_NTO);
		this.CreateNewFullProfile(Id_NTO);
		this.CreateNewPanel(Id_NTO);


	},
	StartOld:function(Id_NTO,Id_OBJ)
	{
		this.CreateTableObject(Id_NTO);
		this.CreateAllParams(Id_NTO,Id_OBJ);
		this.CreatePanel(Id_OBJ);

	},
	StartAllObject:function(Id_NTO,NameNTO,Id_OBJ){
		this.CreateTableAllObject(Id_NTO,NameNTO);
		this.CreateAllObjects(Id_NTO,Id_OBJ);
		this.CreatePanelAllObjects(Id_NTO);


	},
	SaveNewObject:function(Id_NTO)
	{	
		
		var callback=function(data){

				if(data)
				{
					massage.CreateWindows();
					massage.AddTextMassage("Объект успешно создан");
				}
				else
				{
					massage.CreateWindows();
					massage.AddTextMassage("Не удалось создать объект");
				}

		};
		var Name=Jquery.GetVal('NameObject',null);
		var mass=[];
		var arrTemp=Jquery.SetArrayElement(null,'TextSmall');
		for(var i=0;i<NumSP;i++){
			mass[i]={'text':arrTemp[i].value, 'Id_SP':GlobalFunction.ParseId(3,arrTemp[i].id)};
		}
		
		Objects.SetObject(callback,Name,Id_NTO,mass,this.GetObjOld());
	
	},
	SaveObject:function(Id_OBJ){

		var callback=function(data){

				if(data)
				{
					massage.CreateWindows();
					massage.AddTextMassage("Объект успешно сохранен");
				}
				else
				{
					massage.CreateWindows();
					massage.AddTextMassage("Не удалось сохранить объект");
				}

		};
		var Name=Jquery.GetVal('NameObject',null);
		var mass=[];
		var arrTemp=Jquery.SetArrayElement(null,'TextSmall');
		for(var i=0;i<NumSP;i++){
			mass[i]={'text':arrTemp[i].value, 'Id_SPD':GlobalFunction.ParseId(3,arrTemp[i].id)};
		}
		if(mass!=undefined)
			Objects.ReloadeObject(callback,Name,Id_OBJ,mass);



	},
	RemoveObject:function(Id_OBJ){

		var callback=function(data){

				if(data)
				{
					massage.CreateWindows();
					massage.AddTextMassage("Объект успешно удален");
				}
				else
				{
					massage.CreateWindows();
					massage.AddTextMassage("Не удалось удалить объект");
				}

		};


Objects.RemoveObject(callback,Id_OBJ);
	}



}


}());



