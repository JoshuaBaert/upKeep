/**
 * Created by Joshua Baert on 12/7/2016.
 */


const massive = require('massive');


let db = massive.connect({
	connectionString: 'postgres://postgres:test123@localhost/test'
}, (err, db) => {
	db.createTables([], function (err, dbRes) {
		if (err) {
			console.log(err)
		} else {
			console.log('Reset the database.');
			process.exit();
		}
	})
	
});

