(function() {
  'use strict';

  angular
    .module('csa', [
      'ngRoute',
      'app.landing',
      'app.auth',
      'app.farmer'
      // 'firebase',
      // 'app.layout',
      // 'app.core',
    ])

    .config(configFunc)
    .run(runFunc);

    configFunc.$inject = ['$routeProvider'];

    function configFunc($routeProvider) {
      console.log('otherwise');
      $routeProvider.otherwise({
    		redirectTo: '/'
    	});
    }

  runFunc.$inject = ['$rootScope', '$location'];

  function runFunc($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      if (error === "AUTH_REQUIRED") {
        $location.path('/');
      }
    });
  }
})();
