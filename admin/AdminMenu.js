
var AdminMenu=(function(){



return{
	SetMenuTypeObject:function(){
var callback=function(data)
{
	var string="<li onClick='ViewNTO.CreateTypeObject()' class='LiMenuTwo' id='Id_NTO-new'>Новые класс</li> ";
	for(value in data)
	{
		string+="<li onClick='history.SetPoint(\"ViewNTO.StartView("+data[value]['id']+")\");ViewNTO.StartView("+data[value]['id']+")' class='LiMenuTwo'  id='Id_NTO-"+data[value]['id']+"' >"+data[value]['name']+"</li>";

	}
	Jquery.SetHTML("TypeObjectTwo",null, string);
	Jquery.slideToggle("TypeObjectTwo");
}

	TypeObject.GetTypeObjects(callback,null);
	



},
SetMenuObject:function(){
	var callback=function(data){
		if(data!=false)
		{
		var string="<li onClick='viewOBJ.CreateNewTableObjectAll()' class='LiMenuTwo' id='Id_NTO-new'>Новый объект</li> ";
			for(value in data)
	{
				string+="<li onClick='viewOBJ.StartAllObject("+data[value]['id']+",\""+data[value]['name']+"\")' ";
				string+="class='LiMenuTwo'  id='Id_NTO-"+data[value]['id']+"' > Объекты класса "+data[value]['name']+"</li>";


	}
	Jquery.SetHTML("ObjectsTwo",null, string);
	Jquery.slideToggle("ObjectsTwo");
}

}

	TypeObject.GetTypeObjects(callback,null);


	}




}




}());
