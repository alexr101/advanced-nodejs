var http = require('http');
var debug = require('debug')('http');
var fs = require('fs');
var name = 'My Pipe App';

debug('booting %s', name);

var server = http.createServer(function(req, res) {
  
  debug('request method:' + req.method + ' request url: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  var readStream = fs.createReadStream(__dirname + '/read.html', 'utf8');
  readStream.pipe(res);
});

server.listen(3000, '192.168.1.4', function() {
  debug('listening on port 3000');
});
