exports.pre1 = "pre";
console.log('STARTING CIRCULAR MESS');
var two = require('./2');

console.log(two);

exports.after1 = "after";

