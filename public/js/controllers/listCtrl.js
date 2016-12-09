/**
 * Created by Joshua Baert on 12/3/2016.
 */

angular.module('upKeep').controller('listsCtrl', function ($scope, $stateParams, $state, mainSvc) {
	
	
	$scope.newItem = {
		name: undefined,
		date: undefined,
		description: undefined
	};
	
	$scope.goHome = () => {
		setTimeout(() => {
			$state.go('user.home.new',{reload: true});
			$scope.getUser();
		}, 650);
	};
	
	$scope.goList = () => {
		setTimeout(() => {
			$state.go('user.list.new', {listIndex: $stateParams.listIndex}, {reload: true});
			$scope.getUser();
		}, 650);
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
		if ($scope.newItem.name && $scope.newItem.date) {
			mainSvc.postItem($scope.list.id, $scope.newItem.name, $scope.newItem.date, $scope.newItem.description);
			$state.reload();
			swal({
				title: 'Success',
				type: 'success',
				timer: 750,
				showConfirmButton: false,
			});
		} else {
			swal({
				title: 'You need both Title and Date',
				type: 'error',
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
				showConfirmButton: false,
			});
		} else {
			swal({
				title: 'You need both Name and Icon',
				type: 'error',
			});
		}
	};
	
	$scope.putItem = function () {
		if ($scope.editItem.name && $scope.editItem.date) {
			mainSvc.putItem($scope.editItem.id, $scope.editItem.name, $scope.editItem.date, $scope.editItem.description)
			$state.reload();
			swal({
				title: 'Success',
				type: 'success',
				timer: 750,
				showConfirmButton: false,
			});
			$state.go('user.home.new');
		} else {
			swal({
				title: 'You need both Title and Date',
				type: 'error',
			});
		}
	};
	
	
	$scope.deleteList = function () {
		mainSvc.deleteList($scope.list.id);
		swal({
			title: 'Success',
			type: 'success',
			timer: 750,
			showConfirmButton: false,
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
			showConfirmButton: false,
		});
		setTimeout(function () {
			$scope.getUser();
			$state.go('user.list.new', {listIndex: $stateParams.listIndex}, {reload: true});
		}, 750);
	};
	
	
	$scope.getUser();
	
	
	$scope.listIndex = $stateParams.listIndex;
	
	
})
;