
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
	string+="<div align='center' class='TrName'><input type='text' id='NameTypeObject'/><div class='DivBlock'></div><div class='DivBlock'></div></div>";

	string+="<div align='center' id='TrSmallOne' class='TrSmall'><span class='NameSpan' >Характеристики</span></div>";
	string+="<div align='center' class='TrSmall'><button onClick='ViewNTO.NewSmallProfile()' id='CreateSP'>Добавить</button></div>";

	string+="<div align='center' id='TrFullOne' class='TrFull'><span class='NameSpan' >Внутренние Классы</span></div>";
	string+="<div align='center' class='TrFull'><button class='ButtonClass' id='CreateFP' onClick='ViewNTO.CreateTypeObject";
	string+="(\"FP\")'>Добавить</button></div>";
	string+="<div align='center' class='TrPanel'><table ><tr><td><button id='SeveAll' onClick='ViewNTO.SeveAllTypeObject()' >Сохранить</button></td>";
	string+="<td><button id='RemoveTypeObject' class='ButtonClass' onClick='massage.CreateWarningMassage(\"ViewNTO.RemoveAllTypeObject()";
	string+="\",\"Вы точно хотите удалить Класс Объекта\")' >Удалить</button></td><td><button onClick='history.GoToBack();"+history.GetPoint()+";' >Назад</button></td></tr></table></div>";
    Jquery.SetHTML('RightContent',null,string);
  
};
var Color=function(){
Jquery.ColorClass("TrName");
Jquery.ColorClass("TrSmall");
Jquery.ColorClass("TrFull");
Jquery.ColorClass("TrPanel");

	};
var Resets=function()
{
NewTable();
NewNSP=0;
NewNFP=0;
NewFP=0;
NewSP=0;
};



	return {
SetId_NTO:function(id){

	Id_nto=parseInt(id);
},

StartView:function(Id_NTO){
	Resets();
	
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
			string+="value='"+data[value]['name']+"'/><img class='remove' aling='right' ";
			string+="src='img/edite_fon.png' id='RemoveSmallProfile-"+data[value]['id']+"'";
			string+=" onClick='massage.CreateWarningMassage(\"ViewNTO.RemoveSmallProfile("+data[value]['id']+")\",\"Удалить параметр\")'/><div class='DivBlock'></div></div>";
			NewSP++;
		}
			
		Jquery.SetAfter('TrSmallOne',null,string);
		Color();
		
	};
	var GetFull=function(data){
		var string='';
		for(var value in data)
		{
			string+="<div align='center' class='TrFull'><input type='text' class='OldFull' id='Text-FP-"+data[value]["Id_FP"]+"'";
			string+="value='"+data[value]['name']+"'/><img class='remove' aling='right' ";
			string+="src='img/edite_fon.png' id='RemoveFullProfile-"+data[value]['Id_FP']+"'";
			string+=" onClick='massage.CreateWarningMassage(\"ViewNTO.RemoveFullProfile("+data[value]['Id_FP']+","+data[value]['id']+")\",\"Удалить параметр\")'/>";
			string+="<img class='edite' aling='right' ";
			string+="src='img/edite_fon.png' id='EditeFullProfile-"+data[value]['Id_FP']+"'";
			string+=" onClick=' history.SetPoint(\"ViewNTO.StartView("+data[value]['id']+")\");ViewNTO.StartView("+data[value]['id']+")'/></div>";

			NewFP++;
 
		}
		Jquery.SetAfter('TrFullOne',null,string);
		Color();


	};

	TypeObject.GetTypeObjectOne(GetName,Id_NTO);
	TypeObject.GetSmallProfile(GetSmall,Id_NTO);
	TypeObject.GetFullProfile(GetFull,Id_NTO);
        





	},
	CreateTypeObject:function(Type){
	
	var callback=function(data){
		ViewNTO.SetId_NTO(data);
		history.SetPoint("	ViewNTO.StartView("+Id_nto+");");
		ViewNTO.StartView(Id_nto);

};
	if(Type=='FP')
		{
		this.SeveAllTypeObject();
		Resets();
		Color();
		TypeObject.SetFullProfile(callback,"",Id_nto);
		}
else
	{
	Resets();
	Color();
	TypeObject.SetTypeObject(callback,"");
}
	}
	,
	NewSmallProfile:function(){
		var string='';
		    string+="<div align='center' class='TrSmall'><input type='text' class='NewSP' id='Text-SP-News-"+NewNSP;
			string+="' value='Ввидите имя "+NewNSP+"'/><img class='remove' aling='right' ";
			string+="src='img/edite_fon.png' id='RemoveNewSmallProfile-"+NewNSP+"'";
			string+=" onClick='massage.CreateWarningMassage(\"ViewNTO.RemoveNewSmallProfile("+NewNSP+")\",";
			string+="\"Удалить параметр\")'/><div class='DivBlock'></div></div>";
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
					ViewNTO.StartView(Id_nto);
				}
				else
				{
					massage.CreateWindows();
					massage.AddTextMassage("Данные не сохранены");
				}


		};

		for(var i=0;i<NewNFP;i++)
		{
			TypeObject.SetFullProfile(ViewNTO.RepairStatus,arrayFP[i].value,Id_nto);
		}
		for(var i=0;i<NewNSP;i++)
		{
			TypeObject.SetSmallProfile(ViewNTO.RepairStatus,arraySP[i].value,Id_nto);
		}
			arrayFP=Jquery.SetArrayElement(null,"OldFull");
			arraySP=Jquery.SetArrayElement(null,"OldSmall");

			for(var i=0;i<NewFP;i++)
		{
			TypeObject.ReloadeFullProfile(ViewNTO.RepairStatus,arrayFP[i].value,this.ParseId(arrayFP[i].id));
		}
		for(var i=0;i<NewSP;i++)
		{
			TypeObject.ReloadeSmallProfile(ViewNTO.RepairStatus,arraySP[i].value,this.ParseId(arraySP[i].id));
		}
			TypeObject.ReloadeTypeObject(callback,Jquery.GetVal("NameTypeObject",null),Id_nto);
			
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

			



	},
	RemoveFullProfile:function(Id_FP,Id_NTOFP)
	{
			var callback=function(data){

				if(data)
				{
					massage.CreateWindows();
					massage.AddTextMassage("Внутренний Класс удален");
				}
				else
				{
					massage.CreateWindows();
					massage.AddTextMassage("Внутренний Класс не удален");
				}

		};

		TypeObject.RemoveFullProfile(callback,Id_FP,Id_NTOFP);

		Jquery.RemoveElement("Text-FP-"+Id_FP,null);
		Jquery.RemoveElement("RemoveFullProfile-"+Id_FP,null);
		Jquery.RemoveElement("EditeFullProfile-"+Id_FP,null);

	},
	RemoveSmallProfile:function(Id_SP)
	{
		var callback=function(data){

				if(data)
				{
					massage.CreateWindows();
					massage.AddTextMassage("Парамметр удален");

				}
				else
				{
					massage.CreateWindows();
					massage.AddTextMassage("Парамметр не удален");
				}

		};

		TypeObject.RemoveSmallProfile(callback,Id_SP);
		
		Jquery.RemoveElement("Text-SP-"+Id_SP,null);
		Jquery.RemoveElement("RemoveSmallProfile-"+Id_SP,null);


	},

	RemoveNewFullProfile:function(id)
	{   
		Jquery.RemoveElement("Text-FP-News-"+id,null);
		Jquery.RemoveElement("RemoveNewFullProfile-"+id,null);
		massage.CloseWindow();
		NewNFP--;
		
	},
	RemoveNewSmallProfile:function(id)
	{   Jquery.RemoveElement("Text-SP-News-"+id,null);
		Jquery.RemoveElement("RemoveNewSmallProfile-"+id,null);
		massage.CloseWindow();
		NewNSP--;
		
	}

}

}());






