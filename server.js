/**
 * Created by Joshua Baert on 11/30/2016.
 */

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const livereload = require('livereload');

const config = require('./config');

passport.use(new GoogleStrategy({
			clientID: config.googleClientId,
			clientSecret: config.googleClientSecret,
			callbackURL: "http://localhost:" + config.port + "/auth/google/callback"
		},
		function (accessToken, refreshToken, profile, cb) {
			User.findOrCreate({googleId: profile.id}, function (err, user) {
				return cb(err, user);
			});
		}
));

var app = express();



app.use(express.static('public'));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
		function(req, res) {
			res.redirect('/');
		});



app.listen(config.port, function () {
	console.log('listening on ' + config.port)
});


/*
var server = livereload.createServer();
server.watch(__dirname + "./public/dist");
*/
