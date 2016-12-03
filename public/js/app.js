/**
 * Created by Joshua Baert on 12/1/2016.
 */

angular.module('upKeep', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.when('/', '/home');
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: './views/login.html'
			})
			.state('user', {
				url: '/',
				templateUrl: './views/user.html',
			})
			.state('user.home', {
				url: "home",
				templateUrl: './views/home.html'
			})
			.state('user.settings', {
				url: "settings",
				templateUrl: './views/settings.html'
			})
			.state('user.list', {
				url: 'list/:index',
				templateUrl: './views/list.html'
			});
		$urlRouterProvider.otherwise('/');
	});
