(function () {
    let appTwo = angular.module("appTwo", []);

    function controllerTwo($scope, $http) {
        $scope.heading = "Github Account Info";
        $scope.promiseStatus = "not resolved :|";
        let httpPromise = $http.get("https://api.github.com/users/ak-padmalayan");
        httpPromise.then(onHttpPromiseFulfilled, onHttpPromiseFailed);

        function onHttpPromiseFulfilled(httpResponse) {
            $scope.promiseStatus = "fulfilled :)";

            responseData = httpResponse.data;
            let githubAccount = {
                login: responseData.login,
                name: responseData.name,
                id: responseData.id,
                avatarUrl: responseData.avatar_url
            }
            $scope.githubAccount = githubAccount;
        }

        function onHttpPromiseFailed(reason) {
            $scope.promiseStatus = "failed :(";
        }
    }


    appTwo.controller("controllerTwo", ["$scope", "$http", controllerTwo]);
}());