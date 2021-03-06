/**
 * Created by Joshua Baert on 12/8/2016.
 */

var massive = require('massive');
var nodemailer = require('nodemailer');
var moment = require('moment');

var config = require('./config');

var client = require('twilio')(config.twSid, config.twAut);

var items;




//+config.smtps
var transporter = nodemailer.createTransport({
	host: 'smtp.mailgun.org',
	port: 587,
	auth: {
		user: 'postmaster@baert.io',
		pass: config.smtps
	}
});


var db = massive.connectSync({
	connectionString: 'postgres://postgres:test123@localhost/test',
}, function (err, db) {
	if (err) {
		console.log(err)
	} else {
		db.readItemsForNotifications([], function (err, dbRes) {
			items = dbRes;
			var texted = false;
//			console.log(items);
			
			
			
			items.forEach(function (ele, i, arr) {
				
				let start = moment().startOf('day').add(20,'hours').valueOf();
				let end = moment().startOf('day').add(44,'hours').valueOf();
				
				if (start < ele.date && ele.date < end) {
					
					console.log(ele.allow_emails, ele.email);
					
					if (ele.allow_emails) {
						
						let mailOptions = {
							from: '"upKeep" <no-reply@baert.io>',
							to: ele.email,
							subject: 'Reminder of '+ ele.item_name,
							text: 'This is upKeep.baert.io reminder of ' + ele.item_name +
							' the reminder date was set to ' + moment(parseInt(ele.date)).format('l') +
							'..   With the description: ' +  ele.description,
						};
						
						transporter.sendMail(mailOptions, function (err, info) {
							if (err) {
								console.log(err);
							} else {
								console.log(info);
							}
						});
					}
					
					if (ele.allow_texts) {
						
						let phone = ele.phone.split('').filter(function (e) {
							return e !== '-' && e !== ')' && e !=='('
						}).join('');
						console.log(phone);
						
						client.sendMessage({
							to: '+1'+phone,
							from: '3852360320',
							body: 'This is upKeep.baert.io reminder of ' + ele.item_name +
							' the reminder date was set to ' + moment(parseInt(ele.date)).format('l'),
						}, function (err, data) {
							if (err) {
								console.log(err)
							} else  {
								console.log(data)
								texted = true;
							}
						});
						
					}
					
				}
				
			});
			
			
			
			
			setTimeout(function () {
				if (texted) {
					let developerAlert = {
						from: '"no-reply" <no-reply@baert.io>',
						to: 'developer@baert.io',
						subject: 'Text alert',
						text: 'Hey someone just got text alerted by our system',
					};
					
					transporter.sendMail(developerAlert, function (err, info) {
						if (err) {
							console.log(err);
						} else {
							console.log(info);
						}
					});
				}
				process.exit(0)
			}, 15000);
			
			
		});
	}
});


