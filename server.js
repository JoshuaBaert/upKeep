/**
 * Created by Joshua Baert on 11/30/2016.
 */

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const massive = require('massive');
const cors = require('cors');

const config = require('./config');


passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});


const app = module.exports = express();


let db = massive.connect({
        connectionString: 'postgres://postgres:test123@localhost/postgres',
    },
    (err, localdb) => {
        if (err) {
            console.error(err);
        }
        db = localdb;
        app.set('db', db);
    },
);

app.set('db', massive.connectSync({
    connectionString: 'postgres://postgres:test123@localhost/postgres',
}));

const apiCtrl = require('./controllers/apiCtrl');


app.use(apiCtrl.checkHits);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.use(session({ secret: config.secret, saveUninitialized: true, resave: false }));

app.use(passport.initialize());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.post('/dummy', (req, res, next) => {
    user = {
        id: 2,
        first_name: 'Guest',
        last_name: 'User',
        email: 'Email@Fake.com',
        phone: '555-555-5555',
        allow_emails: true,
        allow_texts: true,
        facebook_id: null,
        google_id: null,
    };
    req.login(user, {}, (err) => {
        if (err) {
            console.error(err);
            next(err);
        }
        res.sendStatus(200);
    });

});


// app.use(apiCtrl.checkAuth);
/* Need to be authenticated to get past this point otherwise
 sent a redirect handled by angular Svc*/


app.get('/api/user', apiCtrl.readUser);
app.get('/api/lists', apiCtrl.readLists);
app.get('/api/items', apiCtrl.readItems);


app.post('/api/lists', apiCtrl.createList);
app.post('/api/item', apiCtrl.createItem);


app.put('/api/user', apiCtrl.updateUser);
app.put('/api/list', apiCtrl.updateList);
app.put('/api/item', apiCtrl.updateItem);


app.delete('/api/list/:listId', apiCtrl.deleteList);
app.delete('/api/item/:itemId', apiCtrl.deleteItem);

app.get('/logout', apiCtrl.logout);


app.listen(config.port, () => {
    console.log('listening on ' + config.port);
});
