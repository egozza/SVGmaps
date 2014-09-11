'use strict';

var AdminPanel=angular.module('AdminPanel',['PostServise','localStorageService','ngRoute','menu','localHist','redirectServise','user']);
AdminPanel.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when("/allnto",{
		templateUrl:"view/listNTOall.html",
		controller:ListNTO,
		resolve: {factory: checkRouting}	
	}).
	when("/addnto",{
		templateUrl:"view/addnto.html",
		controller:AddNTO,
		resolve: {factory: checkRouting}

	}).
	when("/editnto/:Id_NTO/:nameClass",{
		templateUrl:"view/editnto.html",
		controller:EditNTO,
		resolve: {factory: checkRouting}
	}).
	when("/addobj/:Id_NTO/:nameClass/:Id_OBJ/:nameOBJ",{
		templateUrl:"view/addobj.html",
		controller:AddOBJ,
		resolve: {factory: checkRouting}	
	}).
	when("/allntoobj",{
	templateUrl:"view/allntoobj.html",
		controller:ListNTO,
		resolve: {factory: checkRouting}
	}).
	when("/allobj/:Id_NTO/:nameClass/:Id_OBJ/:nameOBJ",{
	templateUrl:"view/allobj.html",
		controller:ListOBJ,
		resolve: {factory: checkRouting}
	}).
	when("/editobj/:Id_NTO/:nameClass/:Id_OBJ/:nameOBJ",{
	templateUrl:"view/editobj.html",
		controller:EditOBJ,
		resolve: {factory: checkRouting}
	}).
	when("/creatsvg",{
	templateUrl:"view/creatsvg.html",
	controller:CreatSVG,
	resolve: {factory: checkRouting}
	}).
	when("/editsvg/:id/:nameSVG",{	
	templateUrl:"view/editsvg.html",
	controller:Localtion,
	resolve: {factory: checkRouting}
	}).
	when("/allmaps",{
	templateUrl:"view/allmaps.html",
	controller:AllMaps,
	resolve: {factory: checkRouting}
	}).
	when("/link/:id",{
	templateUrl:"view/editlink.html",
	controller:EditLink,
	resolve: {factory: checkRouting}
	}).
	when("/login",{
	templateUrl:"view/Authorization.html",
	controller:Auth
	}).
	when("/register",{
	templateUrl:"view/Register.html",
	controller:registerCont
	}).
	
	otherwise({
		redirectTo: '/login'
		});

	
}]);




var checkRouting = function ($q, $rootScope, $http, $location,user) {
    // Утилитная функция для редиректа
    function redirect(path) {
        if ($location.path() != path) {
            $location.path(path); // Делаем редирект.
            return $q.reject(); // Отменит старый роутинг.
        } else {
            return true; // Позволит роутингу случиться.
        }
    }



   return getUserDataPromise($q, $rootScope, $http,user)
        .then(function (userData) {
           
           return true;
        }, function (reason) {
            // Здесь в единственном месте обрабатываем ошибки.
            console.error(reason); // Хотя бы просто логируем ; )
            return redirect("/login");
        });

};


// Вернет обещание, которое либо зарезолвится с готовым userData, либо зареджектится.
var getUserDataPromise = function ($q, $rootScope, $http,user) {
    if ($rootScope.userData) {
        return $q.when($rootScope.userData); // Оборачиваем значение в (уже зарезолвленное) обещание.
    } else {
        var userToken = user.getUserTokenLocal("SVGmapToken");
        if (!userToken) {
            return $q.reject("No user token."); // Следующее обещание в цепочке зареджектится.
        } else {
            // Возвращаем обещание, которое либо заролвится с данными пользователя с сервера,
            // либо зареджектится, если не удалось их загрузить.
            return $http.post("serverAng.php/path:User/Token", {Params:{ token:userToken }})
                .then(function (result) {
                    if (result.data['Server']=='ok') {
                        user.setUserScope(result.data['Response']);
                        return result.data['Response'];
                    } else {
                        return $q.reject("Got response from server but without user data.");
                    }
                }, function (reason) {
                    return $q.reject("Error requesting server: " + reason);
                });
        }
    }
};
