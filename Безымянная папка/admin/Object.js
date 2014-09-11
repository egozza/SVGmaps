
var Objects=(function(){
var ArrayObject=[];//Масив объектов
return{
	SetObject:function(callback,Name,Id_NTO,Arr,Id_OBJ){// Создание объекта и запись SMALLDATA ПАРАМЕТРОВ
		 Jquery.Post(callback,"Object", "SetObject", "STRING", {Name:Name,Id_NTO:Id_NTO,Arr:Arr,Id_OBJ:Id_OBJ});
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
	GetNameObjectsAll:function(callback,Id_NTO,Id_OBJ){// получение всех объетов одного типа без параматров
	Jquery.Post(callback,"Object", "GetNameObjectsAll", "JSON", {Id_NTO:Id_NTO,Id_OBJ:Id_OBJ},callback);
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
	ReloadeObject:function(callback,Name,Id_OBJ,array){
			Jquery.Post(callback,	"Object", "ReloadeObject", "STRING", {Name:Name,Id_OBJ:Id_OBJ,array:array});
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