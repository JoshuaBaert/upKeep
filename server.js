/**
 * Created by Joshua Baert on 11/30/2016.
 */

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const massive = require('massive');
const cors = require('cors');


const config = require('./config');


passport.use(new GoogleStrategy({
		clientID: config.googleClientId,
		clientSecret: config.googleClientSecret,
		callbackURL: "http://upkeep.baert.io/auth/google/callback"
	},
	(accessToken, refreshToken, profile, done) => {
		
		if (profile.provider === 'google') {
			db.readUserByGoogle([profile.id], (err, userArr) => {
				return done(null, userArr[0]);
			});
		} else if (profile.provider === 'facebook') {
			
		}
		
		return;
	}
));




passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});



const app = module.exports = express();


let db = massive.connect({
		connectionString: 'postgres://postgres:test123@localhost/test'
	},
	(err, localdb) => {
		db = localdb;
		app.set('db', db);
	});

app.set('db', massive.connectSync({
	connectionString: 'postgres://postgres:test123@localhost/test',
}));

const apiCtrl = require('./controllers/apiCtrl');


app.use(apiCtrl.checkHits);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.use(session({secret: config.secret, saveUninitialized: true, resave: false,}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', {scope: ['profile']}));

app.get('/auth/google/callback', passport.authenticate('google', {
	successRedirect: 'http://upKeep.baert.io/#/',
	failureRedirect: '/login'
}), (req, res) => {
	console.log(req.user);
	res.redirect('http://upKeep.baert.io/#/');
});




app.use(apiCtrl.checkAuth);
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



app.listen(config.port, () => {
	console.log('listening on ' + config.port)
});
