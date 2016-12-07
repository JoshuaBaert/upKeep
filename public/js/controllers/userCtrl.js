/**
 * Created by Joshua Baert on 12/2/2016.
 */

angular.module('upKeep').controller('userCtrl', function ($scope, mainSvc, $stateParams, $state) {
	
	$scope.newList = {
		name: undefined,
		icon: undefined
	};
	
	$scope.getUser = function () {
		
		mainSvc.getUser().then((res) => {
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
		mainSvc.putUser(
			$scope.user.firstName,
			$scope.user.lastName,
			$scope.user.email,
			$scope.user.phoneNumber,
			$scope.user.allowEmail,
			$scope.user.allowText
		)
	};
	
	
	
	$scope.index = $stateParams.listIndex;
	
	$scope.getUser();
	
});
	