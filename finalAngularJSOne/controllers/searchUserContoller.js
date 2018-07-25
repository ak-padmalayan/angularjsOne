(function() {

    function searchController($scope, $location, $log) {
        function searchGITUser(username) {
            $log.info("UserName: " + username);
            $location.path("/user/"+username);
        }

        $scope.searchGITUser = searchGITUser;
        $scope.username = "ak-padmalayan";
    }

    const angularJSOne = angular.module("angularJSOne");
    angularJSOne.controller("searchController", ["$scope", "$location", "$log", searchController]);
}());