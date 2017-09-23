// Pipes > Stream > WriteFiles

var http = require('http');
var fs = require('fs'); // Native File System Module

// Inherits from the Event Emitter so it has events listeners
var myReadStream = fs.createReadStream(__dirname + '/readme.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

// 'data' is an event listener already set up by node for READ STREAMS
// each chunk is a buffer
myReadStream.on('data', function(chunk) {
  console.log('chunk received: ');
  console.log(chunk);
  myWriteStream.write(chunk);
  // console.log(chunk.toString('utf8'));
});