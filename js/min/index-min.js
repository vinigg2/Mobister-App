var mobisterApp=angular.module("mobister",["ionic","ngRoute","ngResource","ngSanitize"]);mobisterApp.config(function(l){l.when("/painel",{url:"/painel",templateUrl:"painel.html",controller:"painelController"}).when("/",{url:"/",templateUrl:"login.html",controller:"loginController"}).otherwise("/")}),mobisterApp.controller("loginController",function(l){}),mobisterApp.controller("painelController",function(l){});