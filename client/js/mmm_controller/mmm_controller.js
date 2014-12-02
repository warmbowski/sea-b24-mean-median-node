'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', [$scope, $http, function($scope, $http) {
    $scope.numList = '5, 20, 12, 300';
    $scope.submitNumList = function() {
      $http({
        method: 'POST',
        url: '/',
        data: '{numArray: [' + $scope.numList + ']}'
      })
      .success(function(data) {
        $scope.mmmVals = data;
      })
      .error(function(data, status) {
        console.log(data);
      });
    };
  }]);
};