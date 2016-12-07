/**
 * Created by Joshua Baert on 12/1/2016.
 */

var user = {
	id: 1,
	firstName: 'Joshua',
	lastName: 'Baert',
	email: 'jbghoring@gmail.com',
	phoneNumber: '801-850-8199',
	allowEmail: true,
	allowText: true,
	lists: [
		{
			id: 1,
			name: 'Home',
			icon: 'fa-home',
			items: [
				{
					id: 1,
					name: 'Heater air filter',
					description: 'Change the air filter',
					date: 1484550000000
				},
				{
					id: 2,
					name: 'seed lawn',
					description: 'seed lawn',
					date: 1498802400000
				},
			]
			
		},
		{
			id: 2,
			name: 'Civic',
			icon: 'fa-car',
			items: [
				{
					id: 3,
					name: 'Fuel Filter',
					description: 'Change the fuel filter',
					date: 1484550000000
				},
				{
					id: 4,
					name: 'Tires',
					description: 'Get new tires',
					date: 1484550000000
				},
				{
					id: 5,
					name: 'Wiper blades',
					description: 'Change the wiper blades for winter',
					date: 1484550000000
				},
			]
			
		}
	
	]
};

angular.module('upKeep').service('mainSvc', function ($http) {
	
	this.getUser = function () {
		return $http.get('/api/user').then(function (res) {
			var user = res.data;
			console.log(user);
			return user
		})
	};
	
	
	this.postList = function (name, icon) {
		var list = {
			name: name,
			icon: icon,
			items: [],
		};
		
		$http.post('/api/lists', list);
	};
	
	this.postItem = function (listIndex, name, date, description) {
		$http.post('/api/item', {
			listIndex: listIndex,
			name: name,
			date: date,
			description: description,
		})
	};
	
	
	
	this.putUser = function (first, last, email, phone, aEmail, aText) {
		$http.put('/api/user',
			{
				firstName: first,
				lastName: last,
				email: email,
				phoneNumber: phone,
				allowEmail: aEmail,
				allowText: aText,
			});
	};
	
	this.putList = function (listIndex, name, icon) {
		$http.put('/api/list', {
			name: name,
			icon: icon,
			index: listIndex,
		})
	};
	
	this.putItem = function (listIndex, itemIndex, name, date, description) {
		var item = {
			name: name,
			date: date,
			description: description,
		};
		$http.put('/api/item', {
			listIndex: listIndex,
			itemIndex: itemIndex,
			item: item
		})
	};
	
	
	this.deleteList = function (listIndex) {
		$http.delete('/api/' + listIndex);
	};
	
	this.deleteItem = function (listIndex, itemIndex) {
		$http.delete('/api/' + listIndex + '/' + itemIndex);
	}
	
});