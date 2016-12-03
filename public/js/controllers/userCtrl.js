/**
 * Created by Joshua Baert on 12/2/2016.
 */

angular.module('upKeep').controller('userCtrl', function ($scope, mainSvc) {
	mainSvc.getUser().then(function (res) {
		console.log(res.data);
		$scope.user = res.data;
	});
	
	
});