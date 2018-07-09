(function () {
    let appDirectives = angular.module("appDirectives", []);

    function controllerDirectives($scope, $http) {
        $scope.heading = "Github Account Info";
        $scope.username = "undefined"

        $scope.searchGITUser = function(username)
        {
            let httpPromise = $http.get("https://api.github.com/users/"+username);
            httpPromise.then(onHttpPromiseFulfilled, onHttpPromiseFailed);
        }

        function onHttpPromiseFulfilled(httpResponse) {
            $scope.githubAccount = httpResponse.data;
        }

        function onHttpPromiseFailed(reason) {
            $scope.error = "ERROR!!! http request failed :(";
        }
    }


    appDirectives.controller("controllerDirectives", ["$scope", "$http", controllerDirectives]);
}());