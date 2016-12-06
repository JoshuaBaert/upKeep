/**
 * Created by Joshua Baert on 12/2/2016.
 */

var testUser = {
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




module.exports = {
	readUser: function (req, res, next) {
		res.json(testUser)
	},
	
	
	createList: function (req, res, next) {
		console.log(req.body);
		testUser.lists.push(req.body);
		res.sendStatus(200);
	},
	
	createItem: function (req, res, next) {
		var body = req.body;
		var item = {
			name: body.name,
			date: body.date,
			description: body.description
		};
		console.log(body);
		testUser.lists[body.listIndex].items.push(item);
		res.sendStatus(200);
	},
	
	
	updateUser: function (req, res, next) {
		console.log(req.body);
		var body = req.body;
		testUser.firstName = body.firstName;
		testUser.lastName = body.lastName;
		testUser.email = body.email;
		testUser.phoneNumber = body.phoneNumber;
		testUser.allowEmail = body.allowEmail;
		testUser.allowText = body.allowText;
		
		res.sendStatus(200);
	},
	
	updateList: function (req, res, next) {
		var body = req.body;
		testUser.lists[body.index].name = body.name;
		testUser.lists[body.index].icon = body.icon;
		res.sendStatus(200);
	},
	
	updateItem: function (req, res, next) {
		var body = req.body;
		console.log(req.body);
		testUser.lists[body.listIndex].items.splice(body.itemIndex, 1, body.item);
		res.sendStatus(200);
	},
	
	
	deleteList: function (req, res, next) {
		var index = req.params.list;
		console.log('hit API with ', req.params);
		testUser.lists.splice(index,1);
		res.sendStatus(200);
	},
	
	deleteItem: function (req, res, next) {
		var index = req.params;
		testUser.lists[index.list].items.splice(index.item, 1);
		res.sendStatus(200);
	}
	
	
};