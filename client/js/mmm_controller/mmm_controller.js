'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', 'mmmCalcs', function($scope, mmmCalcs) {
    $scope.numList = '5, 20, 12, 300';

    $scope.submitNumList = function() {
      
      $scope.numArray = $scope.numList.split(',').map(function(item) { return parseInt(item, 10); });
      $scope.mean = mmmCalcs().mean($scope.numArray);
      $scope.median = mmmCalcs().median($scope.numArray);
      if (mmmCalcs().mode($scope.numArray).length === $scope.numArray.length) {
        $scope.mode = 'n/a';
      } else {
        $scope.mode = mmmCalcs().mode($scope.numArray);
      }
    };
  }]);
};
