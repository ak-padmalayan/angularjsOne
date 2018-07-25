(function() {
    const angularJSOne = angular.module("angularJSOne", ["ngRoute"])

    angularJSOne.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl:"./views/searchUser.html",
                controller:"searchController"
            })
            .when("/user/:userName", {
                templateUrl:"./views/userDetails.html",
                controller:"userDetailsController"
            })
            .otherwise({
                redirectTo:"/"
            });
    });

}());