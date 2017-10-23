(function () {
  'use strict';

  angular
    .module('lucyFrontend')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(auth, $state, $log) {
    var vm = this;

    vm.login = function () {
      var userName = vm.userName;
      var password = vm.password;
      // var userName = $scope.userName;
      // var password = $scope.password;

      // $log.log('userName: ' + userName + ', password: ' + password);

      // 原来的登录逻辑
      // if (auth.login(userName, password)) {
      //   $state.go('home');
      // } else {
      //   $scope.showError = true;
      // }

      // 发请求的登录逻辑
      auth.login(userName, password).then(function success(result) {
        if (result.data && result.data.isSuccess) {
          $state.go('home');
        } else {
          vm.showError = true;
        }
      })

    };

  }
})();
