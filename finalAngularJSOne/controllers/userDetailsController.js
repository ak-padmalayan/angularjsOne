(function() {
    function userDetailsController($scope, $routeParams, $location, $log, githubConnector) {
        
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
        function repoSelected(repoName) {
            const repoPath = "/repo/" + $routeParams.userName + "/" + repoName;
            $log.info("RepoPath: " + repoPath);
            $location.path(repoPath);
        }
        
        $scope.repoSortOrder = "+name";
        $scope.repoSelected = repoSelected;
        
        githubConnector.getUser($routeParams.userName)
        .then(onUserReceived, onHttpFailed);
    }

    const angularJSOne = angular.module("angularJSOne");
    angularJSOne.controller("userDetailsController", ["$scope", "$routeParams", "$location", "$log", "githubConnector", userDetailsController]);
}());