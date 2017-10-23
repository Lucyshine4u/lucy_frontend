(function() {
  'use strict';

  angular
    .module('lucyFrontend')
    .factory('auth', auth);

  /** @ngInject */
  function auth($http) {
    var service = {
      login: function(username, password) {
        return $http.post('/api/login', {
          userName: username,
          password: password,
        });
      }
    };

    return service;
  }
})();
