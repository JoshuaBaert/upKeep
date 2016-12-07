/**
 * Created by Joshua Baert on 12/2/2016.
 */



const app = require('../server');
const moment = require('moment');

const db = app.get('db');

db.createTables((err, data) => {
	if (err) console.log(err);
	else console.log('All tables successfully reset');
});

module.exports = {
	
	checkHits: (req, res, next) => {
//		console.log(req.originalUrl);
		next();
		
	},
	
	checkAuth: (req, res, next) => {
		
		if (req.isAuthenticated()) {
			next();
		} else {
			res.redirect('/');
		}
		
		
	},
	
	
	readUser: (req, res, next) => {
		
		db.readUserById([req.user.id],(err, dbRes)=>{
			res.json(dbRes[0])
		})
		
	},
	
	readLists: (req, res, next) => {
		db.readLists([req.user.id], (err, dbRes) => {
			if (err) console.log(err);
			res.json(dbRes);
		})
	},
	
	readItems: (req, res, next) => {
		db.readItems([req.user.id], (err, dbRes) => {
			if (err) console.log(err);
			res.json(dbRes);
		})
	},
	
	
	
	createList: (req, res, next) => {
		var bd = req.body;
		db.createList([bd.userId, bd.name, bd.icon], (err, dbRes)=>{
			if (err) {
				console.log(err);
				res.sendStatus(500);
			}
			else res.sendStatus(200);
		})
		
	},
	
	createItem: (req, res, next) => {
		let bd = req.body;
		
		bd.date = moment(bd.date).valueOf();
		
		db.createItem([bd.userId, bd.listId, bd.name, bd.date, bd.description], (err, dbRes)=>{
			if (err) {
				console.log(err);
				res.sendStatus(500);
			} else {
				res.sendStatus(200);
			}
		});
	},
	
	
	updateUser: (req, res, next) => {
		console.log(req.body);
		let body = req.body;
		
		db.updateUser([
			body.userId,
			body.firstName,
			body.lastName,
			body.email,
			body.phoneNumber,
			body.allowEmail,
			body.allowText
		], (err, dbRes)=> {
			res.sendStatus(200);
		});
		
	},
	
	updateList: (req, res, next) => {
		let bd = req.body;
		
		db.updateList([bd.listId, bd.name, bd.icon], (err, dbRes)=>{
			if (err) {
				console.log(err);
				res.sendStatus(500);
			} else {
				res.sendStatus(200);
			}
		});
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
		testUser.lists.splice(index, 1);
		res.sendStatus(200);
	},
	
	deleteItem: (req, res, next) => {
		let index = req.params;
		testUser.lists[index.list].items.splice(index.item, 1);
		res.sendStatus(200);
	}
	
	
};