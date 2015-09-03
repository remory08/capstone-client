(function(){
	'use strict';

	angular
		.module('app.landing')
		.config(configFunc);

	configFunc.$inject = ['$routeProvider'];

	function configFunc($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'app/landing/landing-page.html'
		});
	}

})();
