/**
 * Created by Joshua Baert on 12/3/2016.
 */

angular.module('upKeep').controller('listsCtrl', function ($scope, $stateParams, mainSvc) {
	
	mainSvc.getUser().then(function (res) {
		$scope.user = res.data;
		$scope.list = res.data.lists[$stateParams.index]
	});
	
	$scope.putList = function () {
		if ($scope.list.name && $scope.list.icon) {
			mainSvc.putList($stateParams.index, $scope.list.name, $scope.list.icon);
		}
	}
	
});