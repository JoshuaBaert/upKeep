/**
 * Created by Joshua Baert on 11/30/2016.
 */

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
const massive = require('massive');
const cors = require('cors');


const config = require('./config');


// passport.use(new GoogleStrategy({
//         clientID: config.googleClientId,
//         clientSecret: config.googleClientSecret,
//         callbackURL: '/auth/google/callback',
//     },
//     (accessToken, refreshToken, profile, done) => {
//
//
//         db.readUserByGoogle([profile.id], (err, userArr) => {
//             if (userArr[0]) {
//                 return done(null, userArr[0]);
//             } else {
//                 console.log('attempting account creation');
//                 db.createUserGoogle([
//                     profile.id,
//                     profile.name.givenName,
//                     profile.name.familyName,
//                     profile.emails[0].value,
//                 ], (err, dbRes) => {
//                     db.readUserByGoogle([profile.id], (err, userArr) => {
//                         if (err) {
//                             console.log(err);
//                         } else {
//                             db.start.listIntro([userArr[0].id], (err) => {
//                                 db.start.getNewId([userArr[0].id], (err, dbRes) => {
//                                     if (err) console.log(err);
//                                     db.start.itemIntro([dbRes[0].id, userArr[0].id], (err) => {
//                                         if (err) console.log(err);
//                                         done(null, userArr[0]);
//                                     });
//                                 });
//                             });
//                         }
//                     });
//                 });
//             }
//         });
//
//         return;
//     },
// ));



// passport.use(new FacebookStrategy({
//         clientID: config.facebookId,
//         clientSecret: config.facebookSecret,
//         callbackURL: '/auth/facebook/callback',
//         profileFields: ['email', 'name'],
//     },
//     (accessToken, refreshToken, profile, done) => {
//
//         console.log(profile);
//
//         db.readUserByFacebook([profile.id], (err, userArr) => {
//             if (userArr[0]) {
//                 return done(null, userArr[0]);
//             } else {
//                 console.log('attempting account creation');
//                 db.createUserFacebook([
//                     profile.id,
//                     profile.name.givenName,
//                     profile.name.familyName,
//                     profile.emails[0].value,
//                 ], (err, dbRes) => {
//                     db.readUserByFacebook([profile.id], (err, userArr) => {
//                         if (err) {
//                             console.log(err);
//                         } else {
//                             db.start.listIntro([userArr[0].id], (err) => {
//                                 db.start.getNewId([userArr[0].id], (err, dbRes) => {
//                                     if (err) console.log(err);
//                                     db.start.itemIntro([dbRes[0].id, userArr[0].id], (err) => {
//                                         if (err) console.log(err);
//                                         done(null, userArr[0]);
//                                     });
//                                 });
//                             });
//                         }
//                     });
//                 });
//             }
//         });
//
//         return;
//     },
// ));



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

app.use(passport.initialize({}));
app.use(passport.session({}));

// app.get('/auth/google', passport.authenticate('google', {
//     scope: [
//         'https://www.googleapis.com/auth/plus.login',
//         'https://www.googleapis.com/auth/plus.profile.emails.read',
//     ],
// }));
// app.get('/auth/facebook', passport.authenticate('facebook', {
//     scope: ['email', 'user_about_me'],
// }));

// app.get('/auth/google/callback', passport.authenticate('google', {
//         successRedirect: '/#/',
//         failureRedirect: '/login',
//     }),
//     (req, res) => {
//         res.redirect('/');
//     });
// app.get('/auth/facebook/callback', passport.authenticate('facebook', {
//         successRedirect: '/#/',
//         failureRedirect: '/login',
//     }),
//     (req, res, next) => {
//         res.redirect('/');
//     });



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
    req.login(user, () => {
        res.sendStatus(200);
    });

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

app.get('/logout', apiCtrl.logout);


app.listen(config.port, () => {
    console.log('listening on ' + config.port);
});
