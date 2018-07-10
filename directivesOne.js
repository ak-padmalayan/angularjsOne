(function () {
    let appDirectives = angular.module("appDirectives", []);

    function controllerDirectives($scope, $http) {
        $scope.heading = "Github Account Info";
        $scope.username = "ak-padmalayan";
        $scope.repoSortOrder = "+name";

        $scope.searchGITUser = function(username)
        {
            $http.get("https://api.github.com/users/"+username)
                .then(onUserReceived, onHttpFailed);
        }

        function onUserReceived(httpResponse) {
            $scope.githubUser = httpResponse.data;
            $http.get($scope.githubUser.repos_url)
                .then(onUserReposReceived, onHttpFailed);
        }

        function onUserReposReceived(httpResponse) {
            $scope.githubUser.reposList = httpResponse.data;
        }

        function onHttpFailed(reason) {
            $scope.error = "ERROR!!! http request failed :(";
        }
    }


    appDirectives.controller("controllerDirectives", ["$scope", "$http", controllerDirectives]);
}());