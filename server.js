/**
 * Created by Joshua Baert on 11/30/2016.
 */

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

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
	console.log('Serialized User');
	cb(null, user);
});

// gets data from session prep for req.user
passport.deserializeUser(function (obj, cb) {
	console.log('Deserialized User');
	cb(null, obj);
});

var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.use(session({
	secret: config.secret,
	saveUninitialized: true,
	resave: false,
}));

app.use(passport.initialize());
app.use(passport.session());



app.get('/auth/google', passport.authenticate('google', {scope: ['profile']}));

app.get('/auth/google/callback',
	function (req, res, next) {
		next();
	},
	passport.authenticate('google', {
		successRedirect: 'http://localhost:8080/#/',
		failureRedirect: '/login'
	}),
	function (req, res) {
		res.redirect('http://localhost:8080/#/');
	});


app.get('/api/user', function (req, res, next) {
	console.log('returning user');
//	console.log(req);
	res.json(req.user)
});



app.listen(config.port, function () {
	console.log('listening on ' + config.port)
});



