(function () {
'use strict';

angular.module('assignment1', [])

.controller('lunchCheckerController', lunchCheckerController);

lunchCheckerController.$inject = ['$scope'];
function lunchCheckerController($scope){
    $scope.lunch = "";
    
    
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