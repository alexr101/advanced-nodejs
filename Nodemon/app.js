var http = require('http');
var fs = require('fs');
var debug = require('debug')('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('change me hey hey');
});

debug('change me and see the change in server console right now');

server.listen(3000, '192.168.1.4', function() {
  debug('listening on port 3000');
});
