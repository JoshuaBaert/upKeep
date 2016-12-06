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
			$scope.user = res.data;
			$scope.list = res.data.lists[$stateParams.listIndex];
			if ($stateParams.itemIndex) {
				$scope.editItem = res.data.lists[$stateParams.listIndex].items[$stateParams.itemIndex];
				$scope.editItem.date = new Date(2017, 1, 1);
				console.log($scope.editItem);
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
	
	$scope.deleteList =function () {
		mainSvc.deleteList($stateParams.listIndex)
	};
	
	
	$scope.getUser();
	
	
	$scope.listIndex = $stateParams.listIndex;
	
	
});