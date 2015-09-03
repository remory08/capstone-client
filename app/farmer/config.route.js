(function() {
  'use strict';

  angular
    .module('app.farmer')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/farmer-dashboard', {
      templateUrl: 'app/farmer/farmer-dashboard.html'
    })
  }
})
