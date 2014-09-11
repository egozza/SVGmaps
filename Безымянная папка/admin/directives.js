angular.module('Status', ['PanelStatus','PostServise'])
.directive('status', function($timeout){
return {
restrict: 'C',
// Этот HTML заменит директиву zippy.
replace: true,
transclude: true,

template: '<div ><span class="muted">Панель состояния</span><span class="">Операция:</span>'+
'<span class="text-success cursor" title="открыть список операций">{{Table.comand}}</span>'+
'<table class="tableNo table">'+
 '<tr ng-repeat="value in Data" class="{{value.Class}}">'+
                   '<td>{{value.operator}}</td>'+
                    '<td>{{value.status}}</td>'+
                    '</tr></table>'+
			'</div>'

		 

,
// Связующая функция добавит поведение к шаблону
link: function(scope, element, attrs) {

 var  timeoutId; // timeoutId, так что мы можем останавливать обновление времени
 
// используя обновление UI
function updateTime() {
scope.Start();
}
 

 
// расписание обновлений за секунду
function updateLater() {
// сохраняем timeoutId для отмены
timeoutId = $timeout(function() {
updateTime(); // обновляем DOM
updateLater(); // расписание других обновлений
}, 1000);
}
 
// прослушиваем разрушающее (removal) DOM событие, и отменяем следующее обновление UI
// для предотвращения обновления времени после того как DOM-элемент был удален.
element.bind('$destroy', function() {
$timeout.cancel(timeoutId);
});
 
updateLater(); // убиваем процесс обновления UI.
 var title1 = angular.element(element.children()[2]),
 title2 = angular.element(element.children()[3]),
// Состояние Opened / closed
opened = true;
 
// Клик по заголовку должен открыть/закрыть zippy
title1.bind('click', toggle);
 
// Переключение состояния closed/opened
function toggle() {
opened = !opened;
title2.removeClass(opened ? 'tableNo' : 'tableYes');
title2.addClass(opened ? 'tableYes' : 'tableNo');
}
 
// инициализация zippy
toggle();
}
 
}
})
.directive('svg', function($compile){
return {
restrict: 'C',
// Этот HTML заменит директиву zippy.
replace: false,
transclude: false,

// Связующая функция добавит поведение к шаблону
link: function(scope, element, attrs) {

 scope.$watch(
function(scope) {
	var div=angular.element(element[0]);

var svg= angular.element(element[0].contentDocument);
var twosvg;
var flag=false;
var i=0;
svg=angular.element(svg.children()[0]);
while(!flag){
	twosvg=angular.element(svg.children()[i]);
if(twosvg[0].nodeName=="g")
	flag=true;
if(i==50)
	flag=true;

i++;
}
var height=div[0].parentElement.offsetHeight-25-div[0].previousElementSibling.offsetHeight;
twosvg.attr('transform'," scale("+size(div[0].parentElement.offsetWidth-30,height,svg.attr("width"),svg.attr("height"))+","+
	size(div[0].parentElement.offsetWidth-30,height,svg.attr("width"),svg.attr("height"))+")");

//svg.attr('webkit-transform',"scale("+size(div[0].parentElement.offsetWidth-30,height,svg.attr("width"),svg.attr("height"))+")");
 /*
svg.attr('transform',"matrix("+size(div[0].parentElement.offsetWidth-30,height,svg.attr("width"),svg.attr("height"))+",0,0,"+
	size(div[0].parentElement.offsetWidth-30,height,svg.attr("width"),svg.attr("height"))+",0,0)");
//svg.attr('webkit-transform',"scale("+size(div[0].parentElement.offsetWidth-30,height,svg.attr("width"),svg.attr("height"))+")");
 */

 function size(widthDiv,heightDiv,widthSvg,heightSvg)

{
	var scale=(parseFloat((heightDiv/heightSvg)+(widthDiv/widthSvg)))/2;
	return scale;
}
// наблюдение за изменениями выражения 'compile'
return scope.$eval(attrs.compile);
},
function(value) {
// Когда выражение 'compile' изменилось
// назначаем его в текущий DOM
element.html(value);
 

$compile(element.contents())(scope);

}
);





}
}
})
.directive('iframe', function($timeout){
return {
restrict: 'C',
// Этот HTML заменит директиву zippy.
replace: false,
transclude: false,

// Связующая функция добавит поведение к шаблону
link: function(scope, element, attrs) {
	var frame = angular.element(document.getElementById('iframeSVG'));

	frame.bind('load',loade());
	function loade()
	{
	$timeout(function(){scope.InitFrame(); }, 2000)
	}



}





}
}
)
.directive('creatsvg', function(){
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
);
