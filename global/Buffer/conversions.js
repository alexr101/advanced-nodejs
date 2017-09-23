var fs = require('fs');
var { StringDecoder } = require('string_decoder');
// It's called 'destructuring assignment'
// same as var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf-8');

// You can use array methods on buffers, but they 
// are reference objects.
// for example here the sliced buffer will share the same
// will share the same memory space as the original buffer
var newWord = "THING";

fs.readFile(__dirname + '/readme.txt', function(err, buffer) {
  var tag = buffer.slice(-5, buffer.length+1);

  for(var i = 0; i < tag.length; i++){
    tag[i] = newWord[i].charCodeAt();
  }

  console.log(tag.toString());
  console.log(decoder.write(tag));
  console.log(decoder.write(buffer));
});

// CONVERT THIS STRING