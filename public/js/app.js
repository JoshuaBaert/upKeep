/**
 * Created by Joshua Baert on 12/1/2016.
 */

angular.module('upKeep', ['ui.router'])
		.config(function ($stateProvider, $urlRouterProvider) {
			$stateProvider
					.state('home', {
						url: '/',
						templateUrl: '../views/home/html',
					})
		});