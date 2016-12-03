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
		url: 'list/:index',
		templateUrl: './views/list.html'
	});
	$urlRouterProvider.otherwise('/');
});
'use strict';

/**
 * Created by Joshua Baert on 12/2/2016.
 */
angular.module('upKeep').directive('openCreate', function () {
	return {
		restrict: 'A',
		link: function link(scope, element, attrs) {
			$(element).on('click', function () {
				$('.side-panel').css('width', '70vw');
			});
		}
	};
}).directive('closeCreate', function () {
	return {
		restrict: 'A',
		link: function link(scope, element, attrs) {
			$(element).on('click', function () {
				$('.side-panel').css('width', '0');
			});
		}
	};
}).directive('getUser', function () {
	return {
		restrict: 'EA',
		link: function link(scope, element, attrs) {
			scope.getUser();
		}
	};
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

angular.module('upKeep').controller('userCtrl', function ($scope, mainSvc, $stateParams) {
	$scope.getUser = function () {
		mainSvc.getUser().then(function (res) {
			console.log('got user');
			$scope.user = res.data;
		});
	};

	$scope.putUser = function () {
		console.log('hit Ctrl');
		mainSvc.putUser($scope.user.firstName, $scope.user.lastName, $scope.user.email, $scope.user.phoneNumber, $scope.user.allowEmail, $scope.user.allowText);
	};

	$scope.index = $stateParams.index;

	$scope.getUser();
}).controller('listCtrl', function ($scope, $stateParams, mainSvc) {

	mainSvc.getUser().then(function (res) {
		$scope.user = res.data;
		$scope.list = res.data.lists[$stateParams.index];
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

	this.putUser = function (first, last, email, phone, aEmail, aText) {
		$http.put('/api/user', {
			firstName: first,
			lastName: last,
			email: email,
			phoneNumber: phone,
			allowEmail: aEmail,
			allowText: aText
		});
	};
});
//# sourceMappingURL=maps/bundle.js.map
