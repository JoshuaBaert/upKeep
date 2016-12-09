/**
 * Created by Joshua Baert on 12/6/2016.
 */

var moment = require('moment');

//console.log(moment('2016-12-8').valueOf());

console.log(moment().startOf('day').subtract(4,'hours').valueOf());
console.log(moment().startOf('day').add(20,'hours').valueOf());
console.log(moment().startOf('day').valueOf());
