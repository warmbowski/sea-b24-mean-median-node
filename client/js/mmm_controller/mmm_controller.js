'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.numList = '5, 20, 12, 300';
    $scope.submitNumList = function() {
      $http({
        method: 'POST',
        url: '/',
        data: '{"numArray": [' + $scope.numList + ']}'
      })
      .success(function(data) {
        $scope.numArray = $scope.numList.split(',').map(function(item) { return parseInt(item, 10); });
        $scope.mmmVals = data;
        $scope.mean = data.mean;
        $scope.median = data.median;
        if (data.mode.length === $scope.numArray.length) {
          $scope.mode = 'n/a';
        } else {
          $scope.mode = data.mode;
        }
      })
      .error(function(data) {
        console.log(data);
      });
    };
  }]);
};
