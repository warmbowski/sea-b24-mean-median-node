'use strict';

require('../../client/js/client');
require('angular-mocks');

describe('mean-meadian-mode controller', function() {
  var $controllerConstructor;
  var $httpBackend;
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
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));
    
    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectations();
      $httpBackend.verifyNoOutstandingRequests();
    });
    
    it('should put the response data into scope', function() {
      $httpBackend.expectPOST('/').respond(200, {'mean': 61.5, 'median': 16, 'mode': [12,20]});
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.numList = '5, 20, 12, 300, 20, 12';
      $scope.submitNumList();
      $httpBackend.flush();

      expect($scope.numArray).toEqual([ 5, 20, 12, 300, 20, 12 ]);
      expect($scope.mean).toEqual(61.5);
      expect($scope.median).toEqual(16);
      expect($scope.mode).toEqual([ 12, 20 ]);
    });

    it('should display n/a when no mode', function() {
      $httpBackend.expectPOST('/').respond(200, {'mean': 84.25, 'median': 16, 'mode': [5, 12, 20, 300]});
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.numList = '5, 20, 12, 300';
      $scope.submitNumList();
      $httpBackend.flush();

      expect($scope.mode).toEqual('n/a');
    });
  });
});