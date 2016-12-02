/**
 * Created by Joshua Baert on 12/1/2016.
 */

angular.module('upKeep').service('mainSvc',function ($http) {
	
	this.getUser = function () {
		return $http.get('/api/user').then(function (res) {
			return res
		})
	}
});