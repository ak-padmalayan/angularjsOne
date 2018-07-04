(function () {
    function controllerOne($scope) {
            let fruit ={
                name: "grape",
                color: "black",
                imageSrc: "images/grape.png"
            }

        $scope.message = "Hello SomeOne - controllerOne"
        $scope.fruit = fruit;
    }

    let appOne = angular.module("appOne", []);
    appOne.controller("controllerOne", ["$scope", controllerOne]);
}());