'use strict';

require('../../client/js/client');
require('angular-mocks');

describe('mean-meadian-mode controller', function() {
  var $controllerConstructor;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($controller, $rootScope) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var mmmController = $controllerConstructor('mmmCtrl', {$scope: $scope});
    expect(typeof mmmController).toBe('object');
  });

  describe('api request', function() {

    it('should put the response data into scope', function() {
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.numList = '5, 20, 12, 300, 20, 12';
      $scope.submitNumList();

      expect($scope.numArray).toEqual([5, 20, 12, 300, 20, 12]);
      expect($scope.mean).toEqual(61.5);
      expect($scope.median).toEqual(16);
      expect($scope.mode).toEqual([12, 20]);
    });

    it('should display n/a when no mode', function() {
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.numList = '5, 20, 12, 300';
      $scope.submitNumList();

      expect($scope.mode).toEqual('n/a');
    });
  });
});
