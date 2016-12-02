/**
 * Created by Joshua Baert on 12/1/2016.
 */

angular.module('upKeep', ['ui.router'])
		.config(function ($stateProvider, $urlRouterProvider) {
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
					.state('user.list', {
						url: 'list',
						templateUrl: './views/list.html'
					});
			$urlRouterProvider.otherwise('/login')
		});
