(function () {
    let appDirectives = angular.module("appDirectives", []);

    function controllerDirectives($scope, githubConnector) {
        $scope.heading = "Github Account Info";
        $scope.username = "ak-padmalayan";
        $scope.repoSortOrder = "+name";

        $scope.searchGITUser = function(username)
        {
            githubConnector.getUser(username)
                .then(onUserReceived, onHttpFailed);
        }

        function onUserReceived(user) {
            $scope.githubUser = user;
            githubConnector.getReposForUser(user)
                .then(onUserReposReceived, onHttpFailed);
        }

        function onUserReposReceived(reposList) {
            $scope.githubUser.reposList = reposList;
        }

        function onHttpFailed(reason) {
            $scope.error = "ERROR!!! http request failed :(";
        }
    }


    appDirectives.controller("controllerDirectives", ["$scope", "githubConnector", controllerDirectives]);
}());