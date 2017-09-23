var fs = require('fs');
var { StringDecoder } = require('string_decoder');
var decoder = new StringDecoder('utf-8');

var newWord = "LALALA";
fs.readFile(__filename, function(err, buffer){
  var tag = buffer.slice(-6, buffer.length+1);

  for (var i = 0; i < tag.length; i++) {
    tag[i] = newWord[i].charCodeAt();
  }

  console.log(decoder.write(buffer));

});


// FILE: ABCDEF