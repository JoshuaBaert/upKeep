/**
 * Created by Joshua Baert on 12/1/2016.
 */

angular.module('upKeep').service('mainSvc', function ($http) {
	
	this.getUser = function () {
		return $http.get('/api/user').then(function (res) {
			return res
		})
	};
	
	this.postList = function (name, icon) {
		var list = {
			name: name,
			icon: icon,
			items: []
		};
		
		$http.post('/api/lists', list);
	};
	
	this.putUser = function (first, last, email, phone, aEmail, aText) {
		$http.put('/api/user',
			{
				firstName: first,
				lastName: last,
				email: email,
				phoneNumber: phone,
				allowEmail: aEmail,
				allowText: aText
			});
	};
	
	this.putList = function (listIndex, name, icon) {
		$http.put('/api/list', {
			name: name,
			icon: icon,
			index: listIndex
		})
	}
	
	
});