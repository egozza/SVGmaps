var Jquery=(function(){
	return{
Post:function (callback,TypeFunction,Functions,TypeResp,Params)
{
	
 $.post("server.php",{TypeFunction:TypeFunction,Functions:Functions,TypeResp:TypeResp,Params:Params

	},
 function(data){
   if (data.length!=0)
   {
   	if((data!=false)&&(data!=0)&&(data!=undefined)){
		switch(TypeResp)
		{	
			case 'JSON':
			var a=eval("("+data+")");
			callback(a);
			

			
			break;
			case 'STRING':

			callback(data);

			
			break;

		}}}});


},
SetArrayElement:function(Id,Class)
{
	var string="";
	if(Class!=null)
		if(Id!=null)
		{
			string+="."+Class+"#"+Id;
		}
		else
			string+="."+Class;
		else
		{
			if(Id!=null)
		{
			string+="#"+Id;
		}

		}
		if(string!=""){
			return $(string);
		}
		else
			console.log("ERROR ID or CLASS undefined");
	
	

}
,
SetHTML:function (Id,Class,data)
{
	var string="";
	if(Class!=null)
		if(Id!=null)
		{
			string+="."+Class+"#"+Id;
		}
		else
			string+="."+Class;
		else
		{
			if(Id!=null)
		{
			string+="#"+Id;
		}

		}
		if(string!=""){
			$(string).html(data);
		}
		else
			console.log("ERROR ID or CLASS undefined");
	
	

},
SetAfter:function (Id,Class,data)
{
	var string="";
	if(Class!=null)
		if(Id!=null)
		{
			string+="."+Class+"#"+Id;
		}
		else
			string+="."+Class;
		else
		{
			if(Id!=null)
		{
			string+="#"+Id;
		}

		}
		if(string!=""){
			$(string).after(data);
		}
		else
			console.log("ERROR ID or CLASS undefined");
	
	

},
SetAppendto:function (Id,Class,data)
{
	var string="";
	if(Class!=null)
		if(Id!=null)
		{
			string+="."+Class+"#"+Id;
		}
		else
			string+="."+Class;
		else
		{
			if(Id!=null)
		{
			string+="#"+Id;
		}

		}
		if(string!=""){
			$(string).appendTo(data);
		}
		else
			console.log("ERROR ID or CLASS undefined");
	
	

},
SetPrependTo:function (Id,Class,data)
{
	var string="";
	if(Class!=null)
		if(Id!=null)
		{
			string+="."+Class+"#"+Id;
		}
		else
			string+="."+Class;
		else
		{
			if(Id!=null)
		{
			string+="#"+Id;
		}

		}
		if(string!=""){
			$(string).prepend(data);
		}
		else
			console.log("ERROR ID or CLASS undefined");
	
	

}
,
SetBefore:function (Id,Class,data)
{
	var string="";
	if(Class!=null)
		if(Id!=null)
		{
			string+="."+Class+"#"+Id;
		}
		else
			string+="."+Class;
		else
		{
			if(Id!=null)
		{
			string+="#"+Id;
		}

		}
		if(string!=""){
			$(string).before(data);
		}
		else
			console.log("ERROR ID or CLASS undefined");
	
	

}

,
slideToggle:function(Id,Class,Speed){
	var string="";
	if(Class!=null)
		if(Id!=null)
		{
			string+="."+Class+"#"+Id;
		}
		else
			string+="."+Class;
		else
		{
			if(Id!=null)
		{
			string+="#"+Id;
		}

		}
		if(string!=""){
			$(string).slideToggle(Speed);
		}
		else
			console.log("ERROR ID or CLASS undefined");
		

},
slideDown:function(Id,Class,Speed){
	var string="";
	if(Class!=null)
		if(Id!=null)
		{
			string+="."+Class+"#"+Id;
		}
		else
			string+="."+Class;
		else
		{
			if(Id!=null)
		{
			string+="#"+Id;
		}

		}
		if(string!=""){
			$(string).slideDown(Speed);
		}
		else
			console.log("ERROR ID or CLASS undefined");
		

},
slideUp:function(Id,Class,Speed){
	var string="";
	if(Class!=null)
		if(Id!=null)
		{
			string+="."+Class+"#"+Id;
		}
		else
			string+="."+Class;
		else
		{
			if(Id!=null)
		{
			string+="#"+Id;
		}

		}
		if(string!=""){
			$(string).slideUp(Speed);
		}
		else
			console.log("ERROR ID or CLASS undefined");
		

},
ColorClass:function(Class)
{   

     $("."+Class+":first").addClass("tr_first");
     $("."+Class+":last").addClass("tr_last");
     $("."+Class+":even").addClass("tr_even");
     $("."+Class+":odd").addClass("tr_old");
},
SetVal:function(Id,Class,val)
{
	var string="";
	if(Class!=null)
		if(Id!=null)
		{
			string+="."+Class+"#"+Id;
		}
		else
			string+="."+Class;
		else
		{
			if(Id!=null)
		{
			string+="#"+Id;
		}

		}
		if(string!=""){
			$(string).val(val);
		}
		else
			console.log("ERROR ID or CLASS undefined");
		

},
GetVal:function(Id,Class)
{
	var string="";
	if(Class!=null)
		if(Id!=null)
		{
			string+="."+Class+"#"+Id;
		}
		else
			string+="."+Class;
		else
		{
			if(Id!=null)
		{
			string+="#"+Id;
		}

		}
		if(string!=""){
			return $(string).val();
		}
		else
			console.log("ERROR ID or CLASS undefined");
		

},
RemoveElement:function(Id,Class)
{
	var string="";
	if(Class!=null)
		if(Id!=null)
		{
			string+="."+Class+"#"+Id;
		}
		else
			string+="."+Class;
		else
		{
			if(Id!=null)
		{
			string+="#"+Id;
		}

		}
		if(string!=""){
			return $(string).remove();
		}
		else
			console.log("ERROR ID or CLASS undefined");
		

}


}}
());




var TypeObject=(function(){
var ArrayObject=[];//Масив объектов


return{


SetTypeObject:function(callback,Name){				//функция создания нового типа объекта
	 Jquery.Post(callback,"TypeObject","SetTypeObject","STRING",{Name:Name});

},
SetSmallProfile: function(callback,Name,Id_NTO){		//функция задани каороткого параметра объекта
	 Jquery.Post(callback,"TypeObject","SetSmallProfile","STRING",{Name:Name,Id_NTO:Id_NTO});
},
SetFullProfile: function(callback,Name,Id_NTO,Type){// функция задания FULL паратметра
	 Jquery.Post(callback,"TypeObject","SetFullProfile","STRING",{Name:Name,Id_NTO:Id_NTO,Type:Type});
},
GetTypeObject: function(callback){					//функция загрузки все типов объектов		
	 Jquery.Post(callback,"TypeObject", "GetTypeObjects", "JSON");
},
GetTypeObjectOne:function(callback,Id_NTO){			//функция загрузки одного объекта
	 Jquery.Post(callback,"TypeObject","GetTypeObjectOne","JSON",{Id_NTO:Id_NTO});
},
RemoveTypeObject:function(callback,Id_NTO){			// функция удаления типа объекта
	 Jquery.Post(callback,"TypeObject", "RemoveTypeObject", "STRING", {Id_NTO:Id_NTO});
},
RemoveSmallProfile:function(callback,Id_SP){			//функция удаления SMALL параметра типа объекта
	 Jquery.Post(callback,"TypeObject", "RemoveSmallProfile", "STRING", {Id_SP:Id_SP});
},
RemoveSmallProfileAll:function(callback,Id_NTO){		// функция удаднеия всех SMALL параметров одного типа
	 Jquery.Post(callback,	"TypeObject", "RemoveSmallProfileAll", "STRING", {Id_NTO:Id_NTO});
},
RemoveFullProfile:function(callback,Id_FP){			//функция удаления одного FULL параметра
	 Jquery.Post(callback,"TypeObject", "RemoveFullProfile", "STRING", {Id_FP:Id_FP});
},
RemoveFullProfileAll: function(callback,Id_NTO){		//функция удаления всех FULL параметров одног типа
	 Jquery.Post(callback,"TypeObject", "RemoveFullProfileAll", "STRING", {Id_NTO:Id_NTO});
},
ReloadeTypeObject: function(callback,Name,Id_NTO){		// функция изменения типа объекта
	 Jquery.Post(callback,"TypeObject", "ReloadeTypeObject", "STRING", {Name:Name,Id_NTO:Id_NTO});
},
ReloadeSmallProfile:function(callback,Name,Id_SP){		// функция перезаписи имени SMALL параметра
	 Jquery.Post(callback,	"TypeObject", "ReloadeSmallProfile", "STRING", {Name:Name,Id_SP:Id_SP});
},
ReloadeFullProfile: function(callback,Name,Id_FP){		 // функция перезаписи имени FULL параметра
	 Jquery.Post(callback,	"TypeObject", "ReloadeFullProfile", "STRING", {Name:Name,Id_FP:Id_FP});
},
GetSmallProfile: function(callback,Id_NTO){				//функция получения всех small параметров типа
	 Jquery.Post(callback,	"TypeObject", "GetSmallProfile", "JSON", {Id_NTO:Id_NTO});
},
GetFullProfile: function(callback,Id_NTO){				//функция получения всех full параметров типа
	 Jquery.Post(callback,	"TypeObject", "GetFullProfile", "JSON", {Id_NTO:Id_NTO});
}

}}());




var Objects=(function(){
var ArrayObject=[];//Масив объектов
return{
	SetObject:function(callback,Name,Id_NTO,Arr){// Создание объекта и запись SMALLDATA ПАРАМЕТРОВ
		 Jquery.Post(callback,"Object", "SetObject", "STRING", {Name:Name,Id_NTO:Id_NTO,Arr:Arr});
	},
	SetObjectSmallData:function(callback,Arr,Id_OBJ){// ЗАПИСЬ SMALLDATA ПАРАММЕТРОВ
		 Jquery.Post(callback,"Object", "SetObjectSmallData", "STRING", {Arr:Arr,Id_OBJ:Id_OBJ});
	},
	SetFullProfileData:function(callback,table_name,Arr){// ЗАПИСЬ FULLDATA ПАРАМЕТРОВ
		 Jquery.Post(callback,"Object", "SetObjectSmallData", "STRING", {table_name:table_name,Arr:Arr});
	},
	GetNameObject:function(callback,Id_OBJ,Ops){ // Получение имени объекта без парамметров
		 ArrayObject=Jquery.Post(callback,"Object", "GetNameObject", "JSON", {Id_OBJ:Id_OBJ,Ops:Ops});
	},
	GetNameObjectsAll:function(callback,Id_NTO,callback){// получение всех объетов одного типа без параматров
	Jquery.Post(callback,"Object", "GetNameObjectsAll", "JSON", {Id_NTO:Id_NTO},callback);
	},
	GetSmallObject:function(callback,Id_OBJ){// Получение всех SMALLDATA параметрв одного типа и одного объекта
		 ArrayObject=Jquery.Post(callback,"Object", "GetSmallObject", "JSON", {Id_OBJ:Id_OBJ});
	},
	GetObject:function(callback,Id_OBJ,Id_NTO){// получение объекта, его SMALLDATA Параметров и FULL параметров
		 ArrayObject=Jquery.Post(callback,"Object", "GetObject", "JSON", {Id_OBJ:Id_OBJ,Id_NTO:Id_NTO});
	},
	GetFullObjects:function(callback,Id_NTO) {// Получение всех FULL параметров одного объекта
		 ArrayObject=Jquery.Post(callback,"Object", "GetFullObjects", "JSON", {Id_NTO:Id_NTO});
	},
	GetNameTableFullProfile:function(callback,Id_FP){// ПОЛУЧЕНИЕ ИМЕНИ ТАБЛИЦЫ FULL ПАРАММЕТРА
		 Jquery.Post(callback,	"Object", "GetNameTableFullProfile", "JSON", {Id_FP:Id_FP});
	},
	GetFullProfileOneAll:function(callback,Id_FP,Id_OBJ){// ПОЛУЧЕНИЕ ВСЕХ ОБЪЕКТОВ ОДНОГО FULL ПАРАММЕТРА одного объекта
		 ArrayObject=Jquery.Post(callback,"Object", "GetFullProfileOneAll", "JSON", {Id_FP:Id_FP,Id_OBJ:Id_OBJ});
	},
	GetFullProfileOneOne:function(callback,NameTable,Id_FPO){// Получение одного объекта FUll Парамметра
		 ArrayObject=Jquery.Post(callback,	"Object", "GetFullProfileOneOne", "JSON", {NameTable:NameTable,Id_FPO:Id_FPO});
	},
	GetSmallObjectOne:function(callback,Id_SPD){ // Получение одного SMALL DATA ПАРАМЕТРА
		 ArrayObject=Jquery.Post(callback,	"Object", "GetSmallObjectOne", "JSON", {Id_SPD:Id_SPD});
	},
	ReloadeNameObject:function(callback,Name,Id_OBJ){ // Перезапись имени объета
 		 Jquery.Post(callback,	"Object", "ReloadeNameObject", "STRING", {Name:Name,Id_OBJ:Id_OBJ});
 	},
 	ReloadeFullProfileOneOne:function(callback,NameTable,Name,info,fotoURL,Id_FPO){//ОБНОЛЕНИЕ FULL DATA ОДНОГО  ПАРАМЕТРА
 		 Jquery.Post(callback,	"Object", "ReloadeFullProfileOneOne", "STRING", {NameTable:NameTable,Name:Name,info:info,fotoURL:fotoURL,Id_FPO:Id_FPO});
 	},
 	ReloadeSmallProfileOne:function(callback,Id_SPD,text){// ОБНОВЛЕНИЕ SMALL DATA ПАРАММЕТРА
 	 	 Jquery.Post(callback,	"Object", "ReloadeSmallProfileOne", "STRING", {Id_SPD:Id_SPD,text:text});
 	},
 	RemoveObject:function(callback,Id_OBJ){// Функция удаления объекта
 		 Jquery.Post(callback,"Object", "RemoveObject", "STRING", {Id_OBJ:Id_OBJ});
 	},
 	RemoveObjects:function(callback,Arr){// УАЛЕНИЕ ОБЪЕКТОВ
 		 Jquery.Post(callback,	"Object", "RemoveObjects", "STRING", {Arr:Arr});
 	},
 	RemoveSmallData:function(callback,Id_SPD){//УДАЛЕНИЕ SMALL DATA параметра объекта
		 Jquery.Post(callback,"Object","RemoveSmallData","STRING",{Id_SPD:Id_SPD});
	},
	RemoveSmallDatas:function(callback,Arr){//УДАЛЕНИЕ SMALL DATA параметров объекта
		 Jquery.Post(callback,	"Object", "RemoveSmallDatas", "STRING", {Arr:Arr});
	},
	RemoveFullData:function(callback,Id_FP,Id_FPD){//УДАЛЕНИЕ FULL DATA параметра объекта
		 Jquery.Post(callback,	"Object", "RemoveFullData", "STRING", {Id_FP:Id_FP,Id_FPD:Id_FPD});
	},
	RemoveFullDatas:function(callback,Id_FP,Arr){//УДАЛЕНИЕ FULL DATA параметров объекта
		 Jquery.Post(callback,	"Object", "RemoveFullDatas", "STRING", {Id_FP:Id_FP,Arr:Arr});
	},
	RemoveSmallDataAll:function(callback,Id_OBJ){// УДАЛЕНИЕ ВСЕХ SMALL DATA объекта
		 	Jquery.Post(callback,	"Object", "RemoveSmallDataAll", "STRING", {Id_OBJ:Id_OBJ});

	}



}

}());
var AdminMenu=(function(){



return{
	SetMenuTypeObject:function(){
var callback=function(data)
{
	var string="<li onClick='ViewNTO.CreateTypeObject()' class='LiMenuTwo' id='Id_NTO-new'>Новые класс</li> ";
	for(value in data)
	{
		string+="<li onClick='ViewNTO.StartView("+data[value]['id']+")' class='LiMenuTwo'  id='Id_NTO-"+data[value]['id']+"' >"+data[value]['name']+"</li>";

	}
	Jquery.SetHTML("TypeObjectTwo",null, string);
	Jquery.slideToggle("TypeObjectTwo");
}

	TypeObject.GetTypeObject(callback);
	



},
SetMenuObject:function(){
	var callback=function(data){
		var string="<li onClick='' class='LiMenuTwo' id='Id_NTO-new'>Новый объект</li> ";
			for(value in data)
	{
				string+="<li onClick='' class='LiMenuTwo'  id='Id_NTO-"+data[value]['id']+"' > Объекты класса "+data[value]['name']+"</li>";


	}
	Jquery.SetHTML("ObjectsTwo",null, string);
	Jquery.slideToggle("ObjectsTwo");


}

	TypeObject.GetTypeObject(callback);


	}




}




}());

var ViewNTO=(function(){
	var NewNFP=0;
	var NewNSP=0;
	var NewFP=0;
	var NewSP=0;
	var Id_nto;
	var SS=true;
	var NewTable=function(){
	var string='';
	string+="<span class='NameSpan'><h3>Редактирование Класса Объекта</h3></span>"
	string+="<div align='center' class='TrName'><span class='NameSpan' >Имя класса объекта</span></div>";
	string+="<div align='center' class='TrName'><input type='text' id='NameTypeObject'/></div>";

	string+="<div align='center' id='TrSmallOne' class='TrSmall'><span class='NameSpan' >Короткие парамметры</span></div>";
	string+="<div align='center' class='TrSmall'><button onClick='ViewNTO.NewSmallProfile()' id='CreateSP'>Добавить</button></div>";

	string+="<div align='center' id='TrFullOne' class='TrFull'><span class='NameSpan' >Подробные парамметры</span></div>";
	string+="<div align='center' class='TrFull'><button class='ButtonClass' id='CreateFP' onClick='ViewNTO.NewFullProfile()'>Добавить</button></div>";
	string+="<div align='center' class='TrPanel'><table ><tr><td><button id='SeveAll' onClick='ViewNTO.SeveAllTypeObject()' >Сохранить</button></td>";
	string+="<td><button id='RemoveTypeObject' class='ButtonClass' onClick='massage.CreateWarningMassage(\"ViewNTO.RemoveAllTypeObject()";
	string+="\",\"Вы точно хотите удалить Класс Объекта\")' >Удалить</button></td></tr></table></div>";
    Jquery.SetHTML('RightContent',null,string);
  
};
var Color=function(){
Jquery.ColorClass("TrName");
Jquery.ColorClass("TrSmall");
Jquery.ColorClass("TrFull");
Jquery.ColorClass("TrPanel");

	};



	return {
SetId_NTO:function(id){

	Id_nto=parseInt(id);
},

StartView:function(Id_NTO){
	NewTable();
	NewNSP=0;
	NewNFP=0;
	NewFP=0;
	NewSP=0;
	
	var GetName=function(data){
		if(data!=null)
		{
		Jquery.SetVal("NameTypeObject",null,data['name']);
		Id_nto=Id_NTO;
		Color();
		}
		
	};
	var GetSmall=function(data)
	{
		var string='';
		for(var value in data)
		{
			string+="<div align='center' class='TrSmall'><input type='text' class='OldSmall' id='Text-SP-"+data[value]["id"]+"'";
			string+="value='"+data[value]['name']+"'/><img class='edite' aling='right' ";
			string+="src='img/edite_fon.png' id='RemoveSmallProfile-"+data[value]['id']+"'";
			string+=" onClick='massage.CreateWarningMassage(\"ViewNTO.RemoveSmallProfile("+data[value]['id']+")\",\"Удалить параметр\")'/></div>";
			NewSP++;
		}
			
		Jquery.SetAfter('TrSmallOne',null,string);
		Color();
		
	};
	var GetFull=function(data){
		var string='';
		for(var value in data)
		{
			string+="<div align='center' class='TrFull'><input type='text' class='OldFull' id='Text-FP-"+data[value]["id"]+"'";
			string+="value='"+data[value]['name']+"'/><img class='edite' aling='right' ";
			string+="src='img/edite_fon.png' id='RemoveFullProfile-"+data[value]['id']+"'";
			string+=" onClick='massage.CreateWarningMassage(\"ViewNTO.RemoveFullProfile("+data[value]['id']+")\",\"Удалить параметр\")'/></div>";
			NewFP++;
 
		}
		Jquery.SetAfter('TrFullOne',null,string);
		Color();


	};

	TypeObject.GetTypeObjectOne(GetName,Id_NTO);
	TypeObject.GetSmallProfile(GetSmall,Id_NTO);
	TypeObject.GetFullProfile(GetFull,Id_NTO);
        





	},
	CreateTypeObject:function(){
	NewTable();
	NewNSP=0;
	NewNFP=0;
	NewFP=0;
	NewSP=0;
	Color();
	var callback=function(data){
		ViewNTO.SetId_NTO(data);
		ViewNTO.StartView(Id_nto);
};
	TypeObject.SetTypeObject(callback,"");

	}
	,
	NewFullProfile:function(){
		var string='';
			string+="<div align='center' class='TrFull'><input type='text' class='NewFP' id='Text-FP-News-"+NewNFP;
			string+="' value='Ввидите имя пареметра "+NewNFP+"'/><img class='edite' aling='right' ";
			string+="src='img/edite_fon.png' id='RemoveNewFullProfile-"+NewNFP+"'";
			string+=" onClick='massage.CreateWarningMassage(\"ViewNTO.RemoveNewFullProfile("+NewNFP+")\",";
			string+="\"Удалить параметр\")'/></div>";
			NewNFP++;
			
			Jquery.SetBefore(null,"TrFull:last",string);
			Color();
			


	},
	NewSmallProfile:function(){
		var string='';
		    string+="<div align='center' class='TrSmall'><input type='text' class='NewSP' id='Text-SP-News-"+NewNSP;
			string+="' value='Ввидите имя пареметра "+NewNSP+"'/><img class='edite' aling='right' ";
			string+="src='img/edite_fon.png' id='RemoveNewSmallProfile-"+NewNSP+"'";
			string+=" onClick='massage.CreateWarningMassage(\"ViewNTO.RemoveNewSmallProfile("+NewNSP+")\",";
			string+="\"Удалить параметр\")'/></div>";
			NewNSP++;
			
			Jquery.SetBefore(null,"TrSmall:last",string);
			Color();


	},
	RepairStatus:function(data){
		if(data)
			SS=true;

	},
	Status:function(){
		return SS;
	},
	ParseId:function(id)
	{
		var array=[];
		array=id.split("-");
		return array[2];
	},
	SeveAllTypeObject:function(){
		var arrayFP=[];

		var arraySP=[];
		arrayFP=Jquery.SetArrayElement(null,"NewFP");
		arraySP=Jquery.SetArrayElement(null,"NewSP");
		
		callback=function(data){
			if(data)
				if(ViewNTO.Status())
				{
					massage.CreateWindows();
					massage.AddTextMassage("Данные успешно сохранены");
				}
				else
				{
					massage.CreateWindows();
					massage.AddTextMassage("Данные не сохранены");
				}


		};

		for(var i=0;i<NewNFP;i++)
		{
			TypeObject.SetFullProfile(ViewNTO.RepairStatus,arrayFP[i].value,Id_nto,"local");
		}
		for(var i=0;i<NewNSP;i++)
		{
			TypeObject.SetSmallProfile(ViewNTO.RepairStatus,arraySP[i].value,Id_nto);
		}
			arrayFP=Jquery.SetArrayElement(null,"OldFull");
			arraySP=Jquery.SetArrayElement(null,"OldSmall");

			for(var i=0;i<NewFP;i++)
		{
			TypeObject.ReloadeFullProfile(ViewNTO.RepairStatus,arrayFP[i].value,Id_nto);
		}
		for(var i=0;i<NewSP;i++)
		{
			TypeObject.ReloadeSmallProfile(ViewNTO.RepairStatus,arraySP[i].value,this.ParseId(arraySP[i].id));
		}
			TypeObject.ReloadeTypeObject(callback,Jquery.GetVal("NameTypeObject",null),Id_nto);
			this.StartView(Id_nto);
	},
	RemoveAllTypeObject:function(){
		var callback=function(data){

				if(data)
				{
					massage.CreateWindows();
					massage.AddTextMassage("Данные успешно удалены");
				}
				else
				{
					massage.CreateWindows();
					massage.AddTextMassage("Данные не удалены");
				}

		};

			TypeObject.RemoveTypeObject(callback,Id_nto);
			this.StartView(Id_nto);



	},
	RemoveFullProfile:function(Id_FP)
	{
			var callback=function(data){

				if(data)
				{
					massage.CreateWindows();
					massage.AddTextMassage("Подробный парамметр удален");
				}
				else
				{
					massage.CreateWindows();
					massage.AddTextMassage("Подробный парамметр не удален");
				}

		};

		TypeObject.RemoveFullProfile(callback,Id_FP);
this.StartView(Id_nto);

	},
	RemoveSmallProfile:function(Id_SP)
	{
		var callback=function(data){

				if(data)
				{
					massage.CreateWindows();
					massage.AddTextMassage("Короткий  парамметр удален");
				}
				else
				{
					massage.CreateWindows();
					massage.AddTextMassage("Короткий парамметр не удален");
				}

		};

		TypeObject.RemoveSmallProfile(callback,Id_SP);
		this.StartView(Id_nto);


	},

	RemoveNewFullProfile:function(id)
	{   
		Jquery.RemoveElement("Text-FP-News-"+id,null);
		Jquery.RemoveElement("RemoveNewFullProfile-"+id,null);
		massage.CloseWindow();
		this.StartView(Id_nto);
	},
	RemoveNewSmallProfile:function(id)
	{   Jquery.RemoveElement("Text-SP-News-"+id,null);
		Jquery.RemoveElement("RemoveNewSmallProfile-"+id,null);
		massage.CloseWindow();
		this.StartView(Id_nto);
	}

}

}());
var massage=(function(){

return{
	CreateWindows:function(){
		this.CloseWindow();
		var string='';
		string="<div align='center' class='MassageWindow' ><button id='OkMassage' class='ButtonClass' ";
		string+="onClick='massage.CloseWindow()'>ОК</button></div>";
		Jquery.SetAfter("global",null,string);

	},
	CloseWindow:function(){
		Jquery.RemoveElement(null,"MassageWindow");
	},
	AddTextMassage:function(text){
		var string='';
		string+="<span class='MassageText'>"+text+"</span>";
		Jquery.SetPrependTo(null,'MassageWindow',string);

	},
	CreateWarningMassage:function(data,text){
		var string='';
		string="<div align='center' class='MassageWindow' ><div alifn='center'><button class='ButtonClass' id='OkMassage' onClick='"+data+"'>ОК</button>";
		string+="<button class='ButtonClass' id='CancelMassage' onClick='massage.CloseWindow() '>Cancel</button></div></div>";
		Jquery.SetAfter("global",null,string);
		this.AddTextMassage(text);
			


	}

}



}());

