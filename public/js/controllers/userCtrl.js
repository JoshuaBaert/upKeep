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
		mainSvc.putUser(
			$scope.user.firstName,
			$scope.user.lastName,
			$scope.user.email,
			$scope.user.phoneNumber,
			$scope.user.allowEmail,
			$scope.user.allowText
		)
		
	};
	
	$scope.index = $stateParams.index;
	
	$scope.getUser();
	
})
	.controller('listCtrl', function ($scope, $stateParams, mainSvc) {
		
		mainSvc.getUser().then(function (res) {
			$scope.user = res.data;
			$scope.list = res.data.lists[$stateParams.index]
		});
		
	});