(function () {
  'use strict';

  angular
    .module('lucyFrontend')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $log, $state) {

    $scope.login = function () {
      var userName = $scope.userName;
      var password = $scope.password;

      $log.log('userName: ' + userName + ', password: ' + password);

      if (userName === "xinxin" && password === "xinxin") {
        $state.go('home');
      } else {
        $scope.showError = true;
      }
    };

  }
})();
