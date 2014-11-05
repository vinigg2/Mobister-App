var mobisterApp = angular.module('mobister', ['ionic', 'ngRoute', 'ngResource', 'ngSanitize']);
mobisterApp.config(function($routeProvider, $stateProvider) {
         $stateProvider
            .state(
                '/painel',
                {
                    url: '/painel',
                    templateUrl: "painel.html",
                    controller: "painelController"
                })
            .state(
                '/',
                {
                    url: '/',
                    templateUrl: "login.html",
                    controller: "loginController",
                });
 });

// CONTROLLER //
mobisterApp.controller('loginController', function($scope) {
	$scope.verificarLogin = function () {
		window.location = '#painel';	
	};
});


mobisterApp.controller('painelController', function($scope) {
	$scope.horaAtual = '';
	
	$scope.backlogin = function () {
		window.location = '#/';	
	};
	
	$scope.horarios = [];
	
	$scope.clock = function() {
		 var today=new Date();
		 var h=today.getHours();
		 var m=today.getMinutes();
		 var s=today.getSeconds();
		
		 m=checkTime(m);
		 s=checkTime(s);
		 document.getElementById('horario-date').innerHTML=h+":"+m+":"+s;
			
		$scope.horaAtual = h+":"+m+":"+s;
		
		 t=setTimeout($scope.clock,500);
		function checkTime(i){
		 if (i<10) {
				i="0" + i;
			 }
				 return i;
			 }
		};
	
	
	$scope.pontoHorario = function () {
		var hora = $scope.horaAtual;
		var horario = {
			time : hora
		}
		$scope.horarios.push(horario);
	};
});


function ControllerMenu($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
	  alert();
    $ionicSideMenuDelegate.toggleLeft();
  };
}