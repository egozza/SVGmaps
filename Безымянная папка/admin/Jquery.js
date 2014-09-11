var Jquery=(function(){
	return{
Post:function (callback,TypeFunction,Functions,TypeResp,Params)
{
	
 $.post("server.php",{TypeFunction:TypeFunction,Functions:Functions,TypeResp:TypeResp,Params:Params

	},
 function(data){
   if (data.length!=0)
   {
   	console.log("Post запрос "+Functions+" выполнен");
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
				console.log("SetArrayElement "+string+" Ok");
			return $(string);
		}
		else{
			console.log("ERROR ID or CLASS undefined");
		
		console.log("SetArrayElement "+string+" ERROR");
	}
	

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
			console.log("SeHTML "+string+" Ok");
			$(string).html(data);
		}
		else{
			console.log("ERROR ID or CLASS undefined");
		
		console.log("SeHTML "+string+" Ok");
	}
	
	

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
			console.log("SetAfter "+string+" Ok");
			$(string).after(data);
		}
		else{
			console.log("ERROR ID or CLASS undefined");
			console.log("SetAfter "+string+" ERROR");
		}
	
	

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
			console.log("SetAppendto  "+string+" Ok");
			$(string).appendTo(data);
		}
		else{
				console.log("SetAppendto "+string+" Ok");
			console.log("ERROR ID or CLASS undefined");
		}
	
	

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
				console.log("SetPrependTo "+string+" Ok");
			$(string).prepend(data);
		}
		else{
			console.log("SetPrependTo  "+string+" Ok");
			console.log("ERROR ID or CLASS undefined");
		}
	
	

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
			console.log("SetBefore "+string+" Ok");
			$(string).before(data);
		}
		else{
			console.log("SetBefore "+string+" Ok");
			console.log("ERROR ID or CLASS undefined");
		}
	
	

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
			console.log("slideToggle "+string+" Ok");
			$(string).slideToggle(Speed);
		}
		else{
			console.log("slideToggle "+string+" ERROR");
			console.log("ERROR ID or CLASS undefined");
		}
		

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
			console.log("slideDown "+string+" Ok");
			$(string).slideDown(Speed);
		}
		else{
			console.log("slideDown "+string+" ERROR");
			console.log("ERROR ID or CLASS undefined");
		}
		

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
			console.log("slideUp "+string+" Ok");
			$(string).slideUp(Speed);
		}
		else{
			console.log("slideUp "+string+" ERROR");
			console.log("ERROR ID or CLASS undefined");
		}
		

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
			console.log("SetVal "+string+" Ok");
			$(string).val(val);
		}
		else{
			console.log("SetVal "+string+" ERROR");
			console.log("ERROR ID or CLASS undefined");
		}
		

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
			console.log("GetVal "+string+" Ok");
			return $(string).val();
		}
		else{
			console.log("GetVal "+string+" ERROR");
			console.log("ERROR ID or CLASS undefined");
		}
		

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
			console.log("RemoveElement"+string+" Ok");
			return $(string).remove();
		}
		else{
			console.log("RemoveElement "+string+" ERROR");
			console.log("ERROR ID or CLASS undefined");
		}
		

}


}}
());


