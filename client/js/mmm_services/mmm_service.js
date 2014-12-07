'use strict';

module.exports = function(app) {
  var handleErrors = function(data) {
    console.log(data);
  };

  app.factory('mmmBackend', ['$http', function($http) {
    return {
      submitNumList: function(numList) {
        return $http({
          method: 'POST',
          url: '/',
          data: '{"numArray": [' + numList + ']}'
        })
        .error(handleErrors);
      }
    };
  }]);
};