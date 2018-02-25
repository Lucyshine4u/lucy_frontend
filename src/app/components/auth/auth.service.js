(function() {
  'use strict';

  angular
    .module('lucyFrontend')
    .factory('auth', auth);

  /** @ngInject */
  function auth($http, httpConstants) {

    let user = null;

    return {
      login,
      getToken,
      isLogin,
      getCurrentUser,
    };

    function login(userName, password) {
      return $http.post(`${httpConstants.contextPath}/api/users/login`, {
        userName: userName,
        password: password,
      }, {
        headers: {
          'Content-Type': httpConstants.contentType
        }
      }).then((response, error) => {
        const isSuccessful = !!response;
        if (isSuccessful) {
          user = response.data;
        }

        return new Promise((accept, reject) => {
          if (isSuccessful) {
            accept(user);
          } else {
            reject(error);
          }
        });
      });
    }

    function getToken() {
      if (user) {
        return user.token;
      }

      return null;
    }

    function isLogin() {
      return !!user;
    }

    function getCurrentUser() {
      return user;
    }
  }
})();
