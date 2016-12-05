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
					date: new Date(Date.UTC(2017, 2, 14)),
				},
				{
					id: 2,
					name: 'seed lawn',
					description: 'seed lawn',
					date: new Date(Date.UTC(2017, 6, 1)),
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
					date: new Date(Date.UTC(2017, 10, 1)),
				},
				{
					id: 4,
					name: 'Tires',
					description: 'Get new tires',
					date: '2017/06/01',
				},
				{
					id: 5,
					name: 'Wiper blades',
					description: 'Change the wiper blades for winter',
					date: '2017/10/01',
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
	}
	
	
	
};