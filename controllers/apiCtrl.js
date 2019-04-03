/**
 * Created by Joshua Baert on 12/2/2016.
 */


const app = require('../server');
const moment = require('moment');

const db = app.get('db');

//db.createTables([], (err, dbRes) => {
//	if (err) console.log(err);
//	else console.log('Tables Reset');
//});

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

        db.q.readUserById([2], (err, dbRes) => {
            res.json(dbRes[0]);
        });
    },

    readLists: (req, res, next) => {
        db.q.readLists([2], (err, dbRes) => {
            if (err) console.log(err);
            res.json(dbRes);
        });
    },

    readItems: (req, res, next) => {
        db.q.readItems([2], (err, dbRes) => {
            if (err) console.log(err);
            res.json(dbRes);
        });
    },



    createList: (req, res, next) => {
        var bd = req.body;
        db.q.createList([bd.userId, bd.name, bd.icon], (err, dbRes) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else res.sendStatus(200);
        });

    },

    createItem: (req, res, next) => {
        let bd = req.body;

        bd.date = moment(bd.date).valueOf();

        db.q.createItem([bd.userId, bd.listId, bd.name, bd.date, bd.description], (err, dbRes) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
    },


    updateUser: (req, res, next) => {
        let body = req.body;

        db.q.updateUser([
            body.userId,
            body.firstName,
            body.lastName,
            body.email,
            body.phoneNumber,
            body.allowEmail,
            body.allowText,
        ], (err, dbRes) => {
            res.sendStatus(200);
        });

    },

    updateList: (req, res, next) => {
        let bd = req.body;

        db.q.updateList([bd.listId, bd.name, bd.icon], (err, dbRes) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });

    },

    updateItem: (req, res, next) => {
        let bd = req.body;

        bd.date = moment(bd.date).valueOf();

        db.q.updateItem([bd.itemId, bd.name, bd.date, bd.description], (err, dbRes) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
    },


    deleteList: (req, res, next) => {
        let index = req.params.listId;
        db.q.deleteListItems([index], (err, dbRes) => {

            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                db.q.deleteList([index], (err, dbRes) => {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200);
                    }
                });
            }
        });
    },

    deleteItem: (req, res, next) => {
        let index = req.params.itemId;
        db.q.deleteItem([index], (err, dbRes) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
    },


    logout: (req, res, next) => {
        req.logout();
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
    },


};
