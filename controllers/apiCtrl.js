/**
 * Created by Joshua Baert on 12/2/2016.
 */

var testUser = {
	firstName: 'Joshua',
	lastName: 'Baert',
	email: 'jbghoring@gmail.com',
	phoneNumber: '801-850-8199',
	allowEmail: true,
	allowText: true,
	lists: [
		{
			name: 'Home',
			icon: 'fa-home',
			items: [
				{
					name: 'Heater air filter',
					description: 'Change the air filter',
					date: '2017/10/01',
				},
				{
					name: 'seed lawn',
					description: 'seed lawn',
					date: '2017/06/01',
				},
			]
			
		},
		{
			name: 'Civic',
			icon: 'fa-car',
			items: [
				{
					name: 'Fuel Filter',
					description: 'Change the fuel filter',
					date: '2017/10/01',
				},
				{
					name: 'Tires',
					description: 'Get new tires',
					date: '2017/06/01',
				},
				{
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
	
	
};