var massage=(function(){

return{
	CreateWindows:function(){
		this.CloseWindow();
		var string='';
		string="<div align='center' class='MassageWindow' ><div align='center' class='MassageButtonOk'><button id='OkMassage' class='ButtonClass' ";
		string+="onClick='massage.CloseWindow()'>ОК</button></div></div>";
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

}}());