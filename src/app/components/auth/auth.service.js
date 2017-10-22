(function () {
  'use strict';

  angular
    .module('lucyFrontend')
    .factory('authService', authService);

  /** @ngInject */
  function authService() {
    var service = {
      login: function (username, password) {
        return username === 'xinxin' && password === 'xinxin';
      }
    };

    return service;
  }
})();
