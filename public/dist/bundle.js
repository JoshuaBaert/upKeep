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
	}).state('user.settings', {
		url: "settings",
		templateUrl: './views/settings.html'
	}).state('user.home', {
		url: "",
		templateUrl: './views/home.html'
	}).state('user.home.new', {
		url: "home",
		templateUrl: './views/side/newList.html'
	}).state('user.home.edit', {
		url: 'home/edit/:index',
		templateUrl: './views/side/editList.html',
		reload: true
	}).state('user.list', {
		url: '',
		templateUrl: './views/list.html'
	}).state('user.list.new');
	$urlRouterProvider.otherwise('/');
});
'use strict';

/**
 * Created by Joshua Baert on 12/2/2016.
 */

var openSpeed = 100;
var openWidth = '101vw';

angular.module('upKeep').directive('getUser', function () {
	return {
		restrict: 'E',
		link: function link(scope, element, attrs) {
			scope.getUser();
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
}).directive('openCreate', function () {
	return {
		restrict: 'A',
		link: function link(scope, element, attrs) {
			$(element).on('click', function () {
				setTimeout(function () {
					$('.side-panel').css('width', openWidth);
				}, openSpeed);
			});
		}
	};
}).directive('autoOpenCreate', function () {
	return {
		restrict: 'A',
		link: function link(scope, element, attrs) {
			$(document).ready(function () {
				setTimeout(function () {
					$('.side-panel').css('width', openWidth);
				}, openSpeed);
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
 * Created by Joshua Baert on 12/3/2016.
 */

angular.module('upKeep').controller('listsCtrl', function ($scope, $stateParams, mainSvc) {

	mainSvc.getUser().then(function (res) {
		$scope.user = res.data;
		$scope.list = res.data.lists[$stateParams.index];
	});

	$scope.putList = function () {
		if ($scope.list.name && $scope.list.icon) {
			mainSvc.putList($stateParams.index, $scope.list.name, $scope.list.icon);
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

angular.module('upKeep').controller('userCtrl', function ($scope, mainSvc, $stateParams, $state) {

	$scope.newList = {
		name: undefined,
		icon: undefined
	};

	$scope.getUser = function () {
		mainSvc.getUser().then(function (res) {
			$scope.user = res.data;
		});
	};

	$scope.postList = function () {
		if ($scope.newList.name && $scope.newList.icon) {
			mainSvc.postList($scope.newList.name, $scope.newList.icon);
			$state.reload();
		}
	};

	$scope.putUser = function () {
		console.log('hit Ctrl');
		mainSvc.putUser($scope.user.firstName, $scope.user.lastName, $scope.user.email, $scope.user.phoneNumber, $scope.user.allowEmail, $scope.user.allowText);
	};

	$scope.index = $stateParams.index;

	$scope.getUser();
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

	this.postList = function (name, icon) {
		var list = {
			name: name,
			icon: icon,
			items: []
		};

		$http.post('/api/lists', list);
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

	this.putList = function (listIndex, name, icon) {
		$http.put('/api/list', {
			name: name,
			icon: icon,
			index: listIndex
		});
	};
});
//# sourceMappingURL=maps/bundle.js.map
