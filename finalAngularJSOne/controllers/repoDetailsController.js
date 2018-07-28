(function() {
    function repoDetailsController($scope, $routeParams, $log, $location, githubConnector) {

        function onRepoReceived(repo) {
            $scope.githubRepo = repo;
            //githubConnector.getReposForUser(user)
            //.then(onUserReposReceived, onHttpFailed);
        }
        function onUserReposReceived(reposList) {
            $scope.githubUser.reposList = reposList;
        }
        function onHttpFailed(reason) {
            $scope.error = "ERROR!!! http request failed :(";
        }

        $log.info("repoDetails:: userName: " + $routeParams.userName +", repoName: "+ $routeParams.repoName);
        githubConnector.getRepo($routeParams.userName, $routeParams.repoName)
            .then(onRepoReceived, onHttpFailed);
    }

    const angularJSOne = angular.module("angularJSOne");
    angularJSOne.controller("repoDetailsController", ["$scope", "$routeParams", "$log", "$location", "githubConnector", repoDetailsController]);
}());