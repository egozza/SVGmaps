

var TypeObject=(function(){
var ArrayObject=[];//Масив объектов


return{


SetTypeObject:function(callback,Name){				//функция создания нового типа объекта
	 Jquery.Post(callback,"TypeObject","SetTypeObject","STRING",{Name:Name});

},
SetSmallProfile: function(callback,Name,Id_NTO){		//функция задани каороткого параметра объекта
	 Jquery.Post(callback,"TypeObject","SetSmallProfile","STRING",{Name:Name,Id_NTO:Id_NTO});
},
SetFullProfile: function(callback,Name,Id_NTO){// функция задания FULL паратметра
	var length=Name.length;
	while(Name[length-1]==" ")
	{
		length--;
		Name=Name.slice(0,length);
	}
	 Jquery.Post(callback,"TypeObject","SetFullProfile","STRING",{Name:Name,Id_NTO:Id_NTO});
	
},
GetTypeObjects: function(callback,Type){					//функция загрузки все типов объектов		
	 Jquery.Post(callback,"TypeObject", "GetTypeObjects", "JSON",{Type:Type});
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
RemoveFullProfile:function(callback,Id_FP,Id_NTOFP){			//функция удаления одного FULL параметра
	 Jquery.Post(callback,"TypeObject", "RemoveFullProfile", "STRING", {Id_FP:Id_FP,Id_NTOFP:Id_NTOFP});
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



