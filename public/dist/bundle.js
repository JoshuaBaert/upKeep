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
		url: 'home/edit/:listIndex',
		templateUrl: './views/side/editList.html',
		reload: true
	}).state('user.list', {
		url: '',
		templateUrl: './views/list.html'
	}).state('user.list.new', {
		url: 'list/:listIndex',
		templateUrl: './views/side/newItem.html'
	}).state('user.list.edit', {
		url: 'list/:listIndex/:itemIndex',
		templateUrl: './views/side/editItem.html'
	});
	$urlRouterProvider.otherwise('/login');
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
}).directive('datePicker', function () {
	$('.date-picker').datepicker({
		changeMonth: true,
		changeYear: true
	});
});
'use strict';

/**
 * Created by Joshua Baert on 12/3/2016.
 */

angular.module('upKeep').controller('listsCtrl', function ($scope, $stateParams, $state, mainSvc) {

	$scope.newItem = {
		name: undefined,
		date: undefined,
		description: undefined
	};

	$scope.getUser = function () {

		mainSvc.getUser().then(function (res) {
			$scope.user = res;

			$scope.list = $scope.user.lists[$stateParams.listIndex];
			if ($stateParams.itemIndex) {
				$scope.editItem = $scope.user.lists[$stateParams.listIndex].items[$stateParams.itemIndex];
				$scope.editItem.date = new Date($scope.editItem.date);
			}
		});
	};

	$scope.postItem = function () {
		if ($scope.newItem.name && $scope.newItem.date && $scope.newItem.description) {
			mainSvc.postItem($scope.listIndex, $scope.newItem.name, $scope.newItem.date, $scope.newItem.description);
			$state.reload();
		}
	};

	$scope.putList = function () {
		if ($scope.list.name && $scope.list.icon) {
			mainSvc.putList($stateParams.listIndex, $scope.list.name, $scope.list.icon);
		}
	};

	$scope.putItem = function () {
		if ($scope.editItem.name && $scope.editItem.date && $scope.editItem.description) {
			mainSvc.putItem($stateParams.listIndex, $stateParams.itemIndex, $scope.editItem.name, $scope.editItem.date, $scope.editItem.description);
		}
	};

	$scope.deleteList = function () {
		mainSvc.deleteList($stateParams.listIndex);
	};

	$scope.deleteItem = function () {
		//		console.log('Ctrl deleting sending ', $stateParams.listIndex, $stateParams.itemIndex);
		mainSvc.deleteItem($stateParams.listIndex, $stateParams.itemIndex);
	};

	$scope.getUser();

	$scope.listIndex = $stateParams.listIndex;
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
			$scope.user = res;
			console.log($scope.user);
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

	$scope.index = $stateParams.listIndex;

	$scope.getUser();
});
'use strict';

/**
 * Created by Joshua Baert on 12/1/2016.
 */

var user = {
	changed: true
};

angular.module('upKeep').service('mainSvc', function ($http, $q, $state) {

	function getUser() {

		var gotUser = false;
		var gotLists = false;
		var gotItems = false;

		var ur;
		var ls;
		var it;

		var defer = $q.defer();

		function giveUser(ur, ls, it) {

			if (gotItems && gotLists && gotUser) {

				user.firstName = ur.first_name;
				user.lastName = ur.last_name;
				user.allowEmail = ur.allow_emails;
				user.allowText = ur.allow_texts;
				user.phoneNumber = ur.phone;
				user.email = ur.email;
				user.lists = [];

				ls.forEach(function (e, i) {
					var items = [];

					it.forEach(function (ele, ind) {
						if (ele.list_id === e.id) {
							items.push({
								id: ele.id,
								name: ele.item_name,
								date: ele.date,
								description: ele.description
							});
						}
					});

					user.lists.push({
						id: e.id,
						name: e.list_name,
						icon: e.icon,
						items: items
					});
				});

				defer.resolve(user);
			}
		}

		$http.get('/api/user').then(function (res) {
			if (typeof res.data === 'string') {
				console.log('err thrown redirecting');
				$state.go('login');
			} else {
				ur = res.data;
				gotUser = true;
				giveUser(ur, ls, it);
			}
		});
		$http.get('/api/lists').then(function (res) {
			ls = res.data;
			gotLists = true;
			giveUser(ur, ls, it);
		});
		$http.get('/api/items').then(function (res) {
			it = res.data;
			gotItems = true;
			giveUser(ur, ls, it);
		});
		return defer.promise;
	}

	this.getUser = function () {

		var defer = $q.defer();

		if (user.changed) {
			//			user.changed = false;
			getUser().then(function (res) {
				defer.resolve(res);
			});
		} else {
			defer.resolve(user);
		}

		return defer.promise;
	};

	this.postList = function (name, icon) {
		var list = {
			name: name,
			icon: icon,
			items: []
		};

		$http.post('/api/lists', list);
	};

	this.postItem = function (listIndex, name, date, description) {
		$http.post('/api/item', {
			listIndex: listIndex,
			name: name,
			date: date,
			description: description
		});
	};

	this.putUser = function (first, last, email, phone, atext, aText) {
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

	this.putItem = function (listIndex, itemIndex, name, date, description) {
		var item = {
			name: name,
			date: date,
			description: description
		};
		$http.put('/api/item', {
			listIndex: listIndex,
			itemIndex: itemIndex,
			item: item
		});
	};

	this.deleteList = function (listIndex) {
		$http.delete('/api/' + listIndex);
	};

	this.deleteItem = function (listIndex, itemIndex) {
		$http.delete('/api/' + listIndex + '/' + itemIndex);
	};
});
//# sourceMappingURL=maps/bundle.js.map
