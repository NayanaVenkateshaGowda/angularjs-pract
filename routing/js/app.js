angular.module('route',["ngRoute"])
.config(route)
.controller('routeCtrl',routeCtrl)
function routeCtrl($scope)
{

}

function route($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "template/main.html"
    })
    .when("/red", {
        templateUrl : "template/red.html"
    })
    .when("/green", {
        templateUrl : "template/green.html"
    })
    .when("/blue", {
        templateUrl : "template/blue.html"
    })
    .otherwise({redirectTo:'/home'})
};