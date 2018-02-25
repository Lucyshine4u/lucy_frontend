(function () {
  'use strict';

  angular
    .module('lucyFrontend')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(auth, $state) {
    const vm = this;

    vm.login = function () {
      const userName = vm.userName;
      const password = vm.password;
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
