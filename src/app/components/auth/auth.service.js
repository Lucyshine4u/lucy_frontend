(function () {
  'use strict';

  angular
    .module('lucyFrontend')
    .factory('auth', auth);

  /** @ngInject */
  function auth() {
    var service = {
      login: function (username, password) {
        return username === 'xinxin' && password === 'xinxin';
      }
    };

    return service;
  }
})();
