console.log(module);

require.resolve('find-me'); // require but dont execute file
require('find-me');
require('find-me-folder');
require('./lib/find-me');

var findMe = require('./lib/find-me');
console.log(findMe);

require('./circular-reference/1');