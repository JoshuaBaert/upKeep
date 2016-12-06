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

const apiCtrl = require('./controllers/apiCtrl');

const config = require('./config');



passport.use(new GoogleStrategy({
		clientID: config.googleClientId,
		clientSecret: config.googleClientSecret,
		callbackURL: "http://localhost:" + config.port + "/auth/google/callback"
	},
	function (accessToken, refreshToken, profile, cb) {
		return cb(null, profile);
	}
));

// prep to put on session
passport.serializeUser(function (user, cb) {
	cb(null, user);
});
// gets data from session prep for req.user
passport.deserializeUser(function (obj, cb) {
	cb(null, obj);
});



var app = module.exports = express();

//app.set('db', massive.connectSync({
//	connectionString: 'postgres://postgres:test123@localhost/test',
//}));


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.use(session({secret: config.secret, saveUninitialized: true, resave: false,}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', {scope: ['profile']}));

app.get('/auth/google/callback', function (req, res, next) {
	next();
}, passport.authenticate('google', {
	successRedirect: 'http://localhost:3030/#/',
	failureRedirect: '/login'
}), function (req, res) {
	res.redirect('http://localhost:3030/#/');
});



app.get('/api/user', apiCtrl.readUser);


app.post('/api/lists', apiCtrl.createList);
app.post('/api/item', apiCtrl.createItem);


app.put('/api/user', apiCtrl.updateUser);
app.put('/api/list', apiCtrl.updateList);
app.put('/api/item', apiCtrl.updateItem);


app.delete('/api/:list', apiCtrl.deleteList);
app.delete('/api/:list/:item', apiCtrl.deleteItem);



app.listen(config.port, function () {
	console.log('listening on ' + config.port)
});
