(function() {
  'use strict';

  angular
    .module('lucyFrontend')
    .factory('storage', storage);

  /** @ngInject */
  function storage(httpConstants) {
    return {
      get(key) {
        return localStorage.getItem(`${httpConstants.localStoragePrefix}.${key}`)
      },

      set(key, item) {
        localStorage.setItem(`${httpConstants.localStoragePrefix}.${key}`, item);
      },

      clear() {
        localStorage.clear();
      }
    };
  }
})();
