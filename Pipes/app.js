var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream('read.txt', 'utf8');
var myWriteStream = fs.createWriteStream('write.txt');

// A pipe like the word implies just pipes the data through
// to the destination.
// It's only available on read streams
myReadStream.pipe(myWriteStream);

var server = http.createServer(function(req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var readStream = fs.createReadStream('read.txt', 'utf8');
  readStream.pipe(res);
});

server.listen(3000, '192.168.1.4');
console.log('listening on port 3000');