/**
 * Created by Joshua Baert on 12/7/2016.
 */

const massive = require('massive');

let db;
massive.connect({
    connectionString: 'postgres://postgres:test123@localhost/postgres',
}, (err, localDb) => {
    db = localDb;
    db.q.createTables([], (err, res) => {
        if (err) {
            console.error(err);
            return
        } else {
            console.log('Reset the database');
            console.log(res);
        }
    });
    return;
});
