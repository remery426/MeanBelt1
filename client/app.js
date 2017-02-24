var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'partials/logreg.html'
    })
    .when('/dash',{
        templateUrl: 'partials/dash.html'
    })
    .when('/user/:name',{
        templateUrl: 'partials/user.html'
    })
    
    .otherwise({
        templateUrl: 'partials/logreg.html'
    })
})