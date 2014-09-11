var AdminPanel=angular.module('AdminPanel');
AdminPanel.directive('svg', function(){
return {
restrict: 'C',
link: function(scope, element, attrs) {


var div=angular.element(element[0]);

div.bind("load",function(){
	 function size(widthDiv,heightDiv,widthSvg,heightSvg)

{
	var scale=(parseFloat((heightDiv/heightSvg)+(widthDiv/widthSvg)))/2;
	return scale;
}




var svg=angular.element(element[0].contentDocument);

var twosvg;
var flag=false;
var i=0;
svg=angular.element(svg.children()[0]);
while(!flag){
	twosvg=angular.element(svg.children()[i]);
if(twosvg[0].nodeName=="g")
	flag=true;
if(i==2)
	flag=true;

i++;
}
var a;
if(div[0].previousElementSibling==null)
a=0;
else
a=div[0].previousElementSibling.offsetHeight
var height=div[0].parentElement.offsetHeight-25-a;
twosvg.attr('transform'," scale("+size(div[0].parentElement.offsetWidth-30,height,svg.attr("width"),svg.attr("height"))+","+
	size(div[0].parentElement.offsetWidth-30,height,svg.attr("width"),svg.attr("height"))+")");


});








}
}
})
.directive('iframe', function(){
return {
restrict: 'C',
// Этот HTML заменит директиву zippy.


// Связующая функция добавит поведение к шаблону
link: function(scope, element, attrs) {
	var frame = angular.element(document.getElementById('iframeSVG'));

	frame.bind('load',function()
	{
	scope.InitFrame(); 
	}
	);



}





}
}
)
.directive('creatsvg', function($compile){
return {
restrict: 'C',
// Этот HTML заменит директиву zippy.
replace: false,
transclude: false,

// Связующая функция добавит поведение к шаблону
link: function(scope, element, attrs) {

 
scope.$watch(
function(scope) {
		var input=angular.element(element.children()[0]);
	input=angular.element(input.children()[1]);
	input=angular.element(input.children()[0]);
	
	var button=angular.element(element.children()[1]);
	button=angular.element(button.children()[0]);
	button=angular.element(button.children()[0]);
	if(input[0].value=="")
		button.addClass("disabled");
	else
		button.removeClass("disabled");
	

return scope.$eval(attrs.compile);
},
function(value) {

element.html(value);

 
$compile(element.contents())(scope);
})

}
}
}
)
.directive('menuRight', function(){
return {
restrict: 'C',
// Этот HTML заменит директиву zippy.
replace: false,
transclude: false,

// Связующая функция добавит поведение к шаблону
link: function(scope, element, attrs) {
var div=angular.element(element.children()[0]);
var ul=[];
for(var i=0;i<3;i++)
{
ul[i]=angular.element(div.children()[i]);
ul[i].bind('click',function(e){
	var id=this.id;
	var id=id.split("-");
	$(".tab").removeClass("active");
	$("#"+this.id).addClass("active");
	$(".tab-pane").removeClass("active");
	$("#tab"+id[1]).addClass("active");




})
}
 
}
}
}
).

directive("svgone",function($timeout,$window){
return{
	restrict:'C',

	
link: function(scope, element, attrs) {
	 scope.$watch(attrs.ok,function(value){
	 		var div=angular.element(element);
	 		var height=div[0].parentElement.offsetHeight-25;
            element.html(scope.Map);
       

if(value=="ok")
{
	 function size(widthDiv,heightDiv,widthSvg,heightSvg)

{
	var scale=(parseFloat(widthDiv/widthSvg));
	return scale;
}

var svg=div.find("svg");

var twosvg=div.find("g");
twosvg=angular.element(twosvg[0]);

twosvg.attr('transform'," scale("+size(div[0].parentElement.offsetWidth-30,height,svg.attr("width"),svg.attr("height"))+","+
size(div[0].parentElement.offsetWidth-30,height,svg.attr("width"),svg.attr("height"))+")");
var newHieght=div[0].parentElement.offsetWidth/svg.attr("width")
svg.attr("height",svg.attr("height")*newHieght);
svg.attr("width",div[0].parentElement.offsetWidth);
twosvg.bind("click",function(e){
	var id=e.target.id;
	scope.GetId(id);
	 $timeout();


	$(".LinkDialog").slideDown();
	$(".LinkDialog").offset({top:e.pageY,left:e.screenX});
});



     
}});
	



 

}





}}).

directive("newLink",function(){
return{
restrict: 'C',
link: function(scope, element, attrs) {

scope.$watch(attrs.sel,function(value){
	if(value!=null)

	scope.GetOBJ(value);
	
	});

}

	}
})
.

directive("Close",function($timeout){
return{
restrict: 'C',
link: function(scope, element, attrs) {

var button=angular.element(element);
button.bind("click",function(){
	scope.AddLink();
	$timeout();
	$(".LinkDialog").slideUp();

});

}

	}
}).
directive("CloseWindow",function(){
return{
restrict: 'C',
link: function(scope, element, attrs) {

var button=angular.element(element);
button.bind("click",function(){
	$(".LinkDialog").slideUp();

});

}

	}
}).
directive("UserPanel",function(){
return{
restrict: 'C',
link: function(scope, element, attrs) {

var div=angular.element(element);
var label=div.find('label');
scope.$watch(function($rootScope){

	if($rootScope.userData)
	{
		label.html($rootScope.userData['login']+'<a class="text-success" href="admin.php#/login/" >(Выход)</a>');
		var a=label.find('a');
		a.bind('click',function(){
		scope.exit();
		label.html('');

		})
	}
	

}

);
}


}}).

directive("LinkDialog",function(){
	return {
		templateUrl :"view/LinkDialog.html",
		replace :true,
		
		
		restrict :'C',
		controller:function($scope){


		}
		}
})


