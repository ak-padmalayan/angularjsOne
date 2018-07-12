(function () {
    const countDownBoom = angular.module("countDownBoom", []);

    function boomController($scope, $interval, $log) {
        let countDownInterval = null;
        function decrementCounter(){
            $scope.timerCount --;
            $scope.boom = ($scope.timerCount === 0);
        }

        $scope.saveTheWorld = function() {
            $scope.saved = true;
            if(countDownInterval)
            {
                $log.info("count down stopped");
                $interval.cancel(countDownInterval);
            }
        }

        $scope.timerCount = 10;
        $scope.heading = "!! ATTENTION !!";
        $scope.boom = false;
        $scope.saved = false;
        countDownInterval = $interval(decrementCounter, 1000, 10)
    }

    countDownBoom.controller("boomController", ["$scope", "$interval", "$log",boomController])

}());