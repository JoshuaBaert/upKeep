/**
 * Created by Joshua Baert on 12/2/2016.
 */



const app = require('../server');

const db = app.get('db');

db.createTables((err, data) => {
	if (err) console.log(err);
	else console.log('All tables successfully reset');
});

module.exports = {
	readUser:(req, res, next) => {
		res.json(req.user);
	},
	
	readLists: (req, res, next) => {
		db.readLists([req.user.id],(err, dbRes)=>{
			res.json(dbRes);
		})
	},
	
	readItems: (req, res, next) => {
		db.readItems([req.user.id],(err, dbRes)=>{
			res.json(dbRes);
		})
	},
	
	
	
	createList: (req, res, next) => {
		console.log(req.body);
		testUser.lists.push(req.body);
		res.sendStatus(200);
	},
	
	createItem: (req, res, next) => {
		let body = req.body;
		let item = {
			name: body.name,
			date: body.date,
			description: body.description
		};
		console.log(body);
		testUser.lists[body.listIndex].items.push(item);
		res.sendStatus(200);
	},
	
	
	updateUser: (req, res, next) => {
		console.log(req.body);
		let body = req.body;
		testUser.firstName = body.firstName;
		testUser.lastName = body.lastName;
		testUser.email = body.email;
		testUser.phoneNumber = body.phoneNumber;
		testUser.allowEmail = body.allowEmail;
		testUser.allowText = body.allowText;
		
		res.sendStatus(200);
	},
	
	updateList: (req, res, next) => {
		let body = req.body;
		testUser.lists[body.index].name = body.name;
		testUser.lists[body.index].icon = body.icon;
		res.sendStatus(200);
	},
	
	updateItem: (req, res, next) => {
		let body = req.body;
		console.log(req.body);
		testUser.lists[body.listIndex].items.splice(body.itemIndex, 1, body.item);
		res.sendStatus(200);
	},
	
	
	deleteList: (req, res, next) => {
		let index = req.params.list;
		console.log('hit API with ', req.params);
		testUser.lists.splice(index,1);
		res.sendStatus(200);
	},
	
	deleteItem: (req, res, next) => {
		let index = req.params;
		testUser.lists[index.list].items.splice(index.item, 1);
		res.sendStatus(200);
	}
	
	
};