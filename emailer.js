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
			
//			console.log(items);
			
			
			
			items.forEach(function (ele, i, arr) {
				
				let start = moment().startOf('day').subtract(4,'hours').valueOf();
				let end = moment().startOf('day').add(20,'hours').valueOf();
				
				if (start < ele.date && ele.date < end) {
					
					if (ele.allow_emails) {
						
						let mailOptions = {
							from: '"no-reply" <no-reply@baert.io>',
							to: 'joshua.kiery@gmail.com',
							subject: 'Reminder of '+ ele.item_name,
							text: 'This is upKeep.baert.io reminder of ' + ele.item_name +
							' the reminder date was set to ' + moment(parseInt(ele.date)).format('l'),
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
						
						/*client.sendMessage({
							to: '+1'+phone,
							from: '3852360320',
							body: 'This is upKeep.baert.io reminder of ' + ele.item_name +
							' the reminder date was set to ' + moment(parseInt(ele.date)).format('l'),
						}, function (err, data) {
							if (err) {
								console.log(err)
							} else  {
								console.log(data)
							}
						})*/
						
						
					}
					
				}
				
			});
			
			setTimeout(function () {
				process.exit(0)
			}, 60000);
			
			
		});
	}
});


