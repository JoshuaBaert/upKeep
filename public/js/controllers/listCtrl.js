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
		
		mainSvc.getUser().then((res) => {
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
			mainSvc.postItem($scope.list.id, $scope.newItem.name, $scope.newItem.date, $scope.newItem.description);
			$state.reload();
		}
	};
	
	
	$scope.putList = function () {
		if ($scope.list.name && $scope.list.icon) {
			mainSvc.putList($scope.list.id, $scope.list.name, $scope.list.icon);
		}
	};
	
	$scope.putItem = function () {
		if ($scope.editItem.name && $scope.editItem.date && $scope.editItem.description) {
			mainSvc.putItem($scope.editItem.id, $scope.editItem.name, $scope.editItem.date, $scope.editItem.description);
		}
	};
	
	
	$scope.deleteList = function () {
		mainSvc.deleteList($scope.list.id)
	};
	
	$scope.deleteItem = function () {
//		console.log('Ctrl deleting sending ', $stateParams.listIndex, $stateParams.itemIndex);
		mainSvc.deleteItem($scope.editItem.id)
	};
	
	
	$scope.getUser();
	
	
	$scope.listIndex = $stateParams.listIndex;
	
	
})
;