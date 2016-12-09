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

	$scope.goHome = function () {
		setTimeout(function () {
			$state.go('user.home.new', { reload: true });
			$scope.getUser();
		}, 650);
	};

	$scope.goList = function () {
		setTimeout(function () {
			$state.go('user.list.new', { listIndex: $stateParams.listIndex }, { reload: true });
			$scope.getUser();
		}, 650);
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
		if ($scope.newItem.name && $scope.newItem.date) {
			mainSvc.postItem($scope.list.id, $scope.newItem.name, $scope.newItem.date, $scope.newItem.description);
			$state.reload();
			swal({
				title: 'Success',
				type: 'success',
				timer: 750,
				showConfirmButton: false
			});
		} else {
			swal({
				title: 'You need both Title and Date',
				type: 'error'
			});
		}
	};

	$scope.putList = function () {
		if ($scope.list.name && $scope.list.icon) {
			mainSvc.putList($scope.list.id, $scope.list.name, $scope.list.icon);
			$scope.goHome();
			swal({
				title: 'Success',
				type: 'success',
				timer: 750,
				showConfirmButton: false
			});
		} else {
			swal({
				title: 'You need both Name and Icon',
				type: 'error'
			});
		}
	};

	$scope.putItem = function () {
		if ($scope.editItem.name && $scope.editItem.date) {
			mainSvc.putItem($scope.editItem.id, $scope.editItem.name, $scope.editItem.date, $scope.editItem.description);
			$state.reload();
			swal({
				title: 'Success',
				type: 'success',
				timer: 750,
				showConfirmButton: false
			});
			$state.go('user.home.new');
		} else {
			swal({
				title: 'You need both Title and Date',
				type: 'error'
			});
		}
	};

	$scope.deleteList = function () {
		mainSvc.deleteList($scope.list.id);
		swal({
			title: 'Success',
			type: 'success',
			timer: 750,
			showConfirmButton: false
		});
		setTimeout(function () {
			$scope.getUser();
			$state.go('user.home.new');
		}, 750);
	};

	$scope.deleteItem = function () {
		mainSvc.deleteItem($scope.editItem.id);
		swal({
			title: 'Success',
			type: 'success',
			timer: 750,
			showConfirmButton: false
		});
		setTimeout(function () {
			$scope.getUser();
			$state.go('user.list.new', { listIndex: $stateParams.listIndex }, { reload: true });
		}, 750);
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

	$scope.goHome = function () {
		setTimeout(function () {
			$state.go('user.home.new', { reload: true });
			$scope.getUser();
		}, 650);
	};

	$scope.goHomeNow = function () {
		setTimeout(function () {
			$state.go('user.home.new', { reload: true });
			$scope.getUser();
		}, 100);
	};

	$scope.getUser = function () {

		mainSvc.getUser().then(function (res) {
			$scope.user = res;
		});
	};

	$scope.postList = function () {
		if ($scope.newList.name && $scope.newList.icon) {
			mainSvc.postList($scope.newList.name, $scope.newList.icon);
			$state.reload();
			swal({
				title: 'Success',
				type: 'success',
				timer: 750,
				showConfirmButton: false
			});
		} else {
			swal({
				title: 'You need both Name and Icon',
				type: 'error'
			});
		}
	};

	$scope.putUser = function () {
		if (!$scope.user.phoneNumber) {
			$scope.user.allowText = false;
		}
		if ($scope.user.firstName && $scope.user.lastName && $scope.user.email) {

			mainSvc.putUser($scope.user.firstName, $scope.user.lastName, $scope.user.email, $scope.user.phoneNumber, $scope.user.allowEmail, $scope.user.allowText);
			swal({
				title: 'Success',
				type: 'success',
				timer: 750,
				showConfirmButton: false
			});
			$scope.goHome();
		} else {
			swal({
				title: 'You need to have First Name, Last Name & Email',
				type: 'error'
			});
		}
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

		console.log('Getting user.');

		var gotUser = false;
		var gotLists = false;
		var gotItems = false;

		var ur;
		var ls;
		var it;

		var defer = $q.defer();

		function giveUser(ur, ls, it) {

			if (gotItems && gotLists && gotUser) {

				user.id = ur.id;
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
								date: parseInt(ele.date),
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
				console.log('Redirect thrown');
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
			user.changed = false;
			getUser().then(function (res) {
				defer.resolve(res);
			});
		} else {
			defer.resolve(user);
		}

		return defer.promise;
	};

	this.postList = function (name, icon) {
		user.changed = true;
		var list = {
			userId: user.id,
			name: name,
			icon: icon
		};

		$http.post('/api/lists', list);
	};

	this.postItem = function (listId, name, date, description) {
		user.changed = true;
		user.lists.forEach(function (e, i) {
			if (e.id = listId) {
				e.items.push({
					userId: user.id,
					listId: listId,
					name: name,
					date: date,
					description: description
				});
			}
		});
		$http.post('/api/item', {
			userId: user.id,
			listId: listId,
			name: name,
			date: date,
			description: description
		});
	};

	this.putUser = function (first, last, email, phone, aEmail, aText) {
		user.changed = true;
		$http.put('/api/user', {
			userId: user.id,
			firstName: first,
			lastName: last,
			email: email,
			phoneNumber: phone,
			allowEmail: aEmail,
			allowText: aText
		});
	};

	this.putList = function (listId, name, icon) {
		user.changed = true;
		$http.put('/api/list', {
			listId: listId,
			name: name,
			icon: icon
		});
	};

	this.putItem = function (itemId, name, date, description) {
		user.changed = true;
		$http.put('/api/item', {
			itemId: itemId,
			name: name,
			date: date,
			description: description
		});
	};

	this.deleteList = function (listId) {
		user.changed = true;
		user.lists.forEach(function (e, i) {
			if (e.id == listId) {
				user.lists.splice(i, 1);
			}
		});
		$http.delete('/api/list/' + listId);
	};

	this.deleteItem = function (itemId) {
		user.changed = true;
		console.log('hit Svc with ' + itemId);
		$http.delete('/api/item/' + itemId);
	};
});
//# sourceMappingURL=maps/bundle.js.map
