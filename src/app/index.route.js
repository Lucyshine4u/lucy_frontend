(function() {
  'use strict';

  angular
    .module('lucyFrontend')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      });

    $stateProvider
      .state('ticket', {
        url: '/ticket',
        templateUrl: 'app/ticket/ticket.html',
        controller: 'TicketController',
        controllerAs: 'ticket'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
