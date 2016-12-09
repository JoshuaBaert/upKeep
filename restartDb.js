/**
 * Created by Joshua Baert on 12/7/2016.
 */


const massive = require('massive');


let db = massive.connect({
		connectionString: 'postgres://postgres:test123@localhost/test'
	},(err, localdb) => {
//		db = localdb;
		db.readUserById([1], function (err, res) {
			console.log(res)
		});
		return;
	});

process.exit();