(function () {
  'use strict';

  angular
    .module('lucyFrontend')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, auth, $state) {

    $scope.login = function () {
      var userName = $scope.userName;
      var password = $scope.password;

      // $log.log('userName: ' + userName + ', password: ' + password);

      if (auth.login(userName, password)) {
        $state.go('home');
      } else {
        $scope.showError = true;
      }
    };

  }
})();
