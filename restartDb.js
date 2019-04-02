/**
 * Created by Joshua Baert on 12/7/2016.
 */

const massive = require('massive');


let db = massive.connect({
    connectionString: 'postgres://postgres:test123@localhost/test',
}, (err, localDb) => {
    db = localDb;
    db.readUserById([1], function (err, res) {
        console.log(res);
    });
    return;
});

process.exit();

// const { Pool } = require('pg');
// const fs = require('fs');
//
// const db = new Pool({
//     host: 'localhost',
//     user: 'postgres',
//     database: 'postgres',
//     password: 'test123',
//     max: 20,
// });
//
// const sql = fs.readFileSync('./db/createTables.sql').toString();
//
//
// db.connect((err, db, done) => {
//     db.query(sql, (err, res) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log(res);
//     });
// });
