(function() {
    function repoDetailsController($scope, $routeParams, $log, $location, githubConnector) {
        $log.info("repoDetails:: userName: " + $routeParams.userName +", repoName: "+ $routeParams.repoName);
    }

    const angularJSOne = angular.module("angularJSOne");
    angularJSOne.controller("repoDetailsController", ["$scope", "$routeParams", "$log", "$location", "githubConnector", repoDetailsController]);
}());