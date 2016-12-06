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
			$scope.list = res.lists[$stateParams.listIndex];
			if ($stateParams.itemIndex) {
				$scope.editItem = res.lists[$stateParams.listIndex].items[$stateParams.itemIndex];
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
	
	
	$scope.deleteList =function () {
		mainSvc.deleteList($stateParams.listIndex)
	};
	
	$scope.deleteItem =function () {
//		console.log('Ctrl deleting sending ', $stateParams.listIndex, $stateParams.itemIndex);
		mainSvc.deleteItem($stateParams.listIndex, $stateParams.itemIndex)
	};
	
	
	$scope.getUser();
	
	
	$scope.listIndex = $stateParams.listIndex;
	
	
});