(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    $scope.lunch = "";
    $scope.message = "";
    
    $scope.checkLunch = function () {
        var lunch = $scope.lunch;
        var lunchArr = lunch.split(',');
        var lunchCount = lunchArr.length;
        if (lunchCount >= 4){
            $scope.message = "Too much!";
        }else{
            $scope.message = "Enjoy!";
        }
    }

}

})();