(function () {
    const countDownBoom = angular.module("countDownBoom", []);

    function boomController($scope) {
        $scope.heading = "!! ATTENTION !!";
    }

    countDownBoom.controller("boomController", ["$scope", boomController])

}());