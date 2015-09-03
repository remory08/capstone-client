(function() {
  'use strict';

  angular
    .module('app.auth')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/farmer-register', {
      templateUrl: 'app/auth/farmer-register.html'
      // controller: 'AuthController',
      // controllerAs: 'vm'
    });
    $routeProvider.when('/supporter-register', {
      templateUrl: 'app/auth/supporter-register.html'
      // controller: 'AuthController',
      // controllerAs: 'vm'
    });
    $routeProvider.when('/farmer-login', {
      templateUrl: 'app/auth/farmer-login.html'
      // controller: 'AuthController',
      // controllerAs: 'vm'
    });
    $routeProvider.when('/supporter-login', {
      templateUrl: 'app/auth/supporter-login.html'
      // controller: 'AuthController',
      // controllerAs: 'vm'
    });
  }

})();
