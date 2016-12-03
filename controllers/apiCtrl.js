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
					date: '2017/10/01',
				},
				{
					id: 2,
					name: 'seed lawn',
					description: 'seed lawn',
					date: '2017/06/01',
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
					date: '2017/10/01',
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

var users = [
	testUser,
];


module.exports = {
	getUser: function (req, res, next) {
		res.json(users[0])
	},
	
	putUser: function (req, res, next) {
		console.log(req.body);
		var body = req.body;
		users[0].firstName = body.firstName;
		users[0].lastName = body.lastName;
		users[0].email = body.email;
		users[0].phoneNumber = body.phoneNumber;
		users[0].allowEmail = body.allowEmail;
		users[0].allowText = body.allowText;
		
		res.sendStatus(200)
	}
	
};