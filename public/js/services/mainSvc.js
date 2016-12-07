/**
 * Created by Joshua Baert on 12/1/2016.
 */

var user = {
	changed: true,
};


angular.module('upKeep').service('mainSvc', function ($http, $q, $state) {
	
	
	function getUser () {
		
		let gotUser = false;
		let gotLists = false;
		let gotItems = false;
		
		var ur;
		var ls;
		var it;
		
		let defer = $q.defer();
		
		function giveUser (ur, ls, it) {
			
			if (gotItems && gotLists && gotUser) {
				console.log(ur);
				
				user.id = ur.id;
				user.firstName = ur.first_name;
				user.lastName = ur.last_name;
				user.allowEmail = ur.allow_emails;
				user.allowText = ur.allow_texts;
				user.phoneNumber = ur.phone;
				user.email = ur.email;
				user.lists = [];
				
				ls.forEach((e,i)=>{
					let items = [];
					
					it.forEach((ele,ind)=>{
						if(ele.list_id === e.id) {
							items.push({
								id: ele.id,
								name: ele.item_name,
								date: ele.date,
								description: ele.description,
							})
						}
					});
					
					user.lists.push({
						id: e.id,
						name: e.list_name,
						icon: e.icon,
						items: items,
					})
					
				});
				
				defer.resolve(user);
			}
		}
		
		$http.get('/api/user').then((res)=>{
			if (typeof res.data === 'string') {
				console.log('err thrown redirecting');
				$state.go('login');
			} else {
				ur = res.data;
				gotUser = true;
				giveUser(ur, ls, it);
			}
			
		});
		$http.get('/api/lists').then((res)=>{
			ls = res.data;
			gotLists = true;
			giveUser(ur, ls, it);
		});
		$http.get('/api/items').then((res)=>{
			it = res.data;
			gotItems = true;
			giveUser(ur, ls, it);
		});
		return defer.promise
	}
	
	
	this.getUser = function () {
		
		var defer = $q.defer();
		
		if (user.changed) {
//			user.changed = false;
			getUser().then(function (res) {
				defer.resolve(res);
			});
		} else {
			defer.resolve(user);
		}
		
		return defer.promise
	};
	
	
	this.postList = function (name, icon) {
		var list = {
			userId: user.id,
			name: name,
			icon: icon,
		};
		
		$http.post('/api/lists', list);
	};
	
	this.postItem = function (listId, name, date, description) {
		console.log(listId);
		$http.post('/api/item', {
			userId: user.id,
			listId: listId,
			name: name,
			date: date,
			description: description,
		})
	};
	
	
	
	this.putUser = function (first, last, email, phone, aEmail, aText) {
		user.changed = true;
		$http.put('/api/user',
			{
				userId: user.id,
				firstName: first,
				lastName: last,
				email: email,
				phoneNumber: phone,
				allowEmail: aEmail,
				allowText: aText,
			});
	};
	
	this.putList = function (listId, name, icon) {
		$http.put('/api/list', {
			listId: listId,
			name: name,
			icon: icon,
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