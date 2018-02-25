(function () {
  'use strict';

  angular
    .module('lucyFrontend')
    .run(runBlock);

  /** @ngInject */
  function runBlock($state, $rootScope, auth) {
    const listeners = {};
    listeners.stateChangeStart = $rootScope.$on('$stateChangeStart', (event, toState) => {
      if ('login' !== toState.name) {
        // check user auth in resource page
        if (!auth.isLogin()) {
          event.preventDefault();
          $state.go('login', {}, {reload: true});
        }
      }
    });
  }

})();
