'use strict';

/**
 * Created by Joshua Baert on 12/1/2016.
 */

angular.module('upKeep', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('/', '/home');
	$stateProvider.state('login', {
		url: '/login',
		templateUrl: './views/login.html'
	}).state('user', {
		url: '/',
		templateUrl: './views/user.html'
	}).state('user.home', {
		url: "home",
		templateUrl: './views/home.html'
	}).state('user.settings', {
		url: "settings",
		templateUrl: './views/settings.html'
	}).state('user.list', {
		url: 'list',
		templateUrl: './views/list.html'
	});
	$urlRouterProvider.otherwise('/login');
});
'use strict';

/**
 * Created by Joshua Baert on 12/1/2016.
 */

angular.module('upKeep').controller('mainCtrl', function ($scope, mainSvc) {
  $scope.notWorking = 'working';
});
'use strict';

/**
 * Created by Joshua Baert on 12/2/2016.
 */

angular.module('upKeep').controller('userCtrl', function ($scope, mainSvc) {
	mainSvc.getUser().then(function (res) {
		console.log(res.data);
		$scope.user = res.data;
	});
});
'use strict';

/**
 * Created by Joshua Baert on 12/1/2016.
 */

angular.module('upKeep').service('mainSvc', function ($http) {

	this.getUser = function () {
		return $http.get('/api/user').then(function (res) {
			return res;
		});
	};
});
//# sourceMappingURL=maps/bundle.js.map
