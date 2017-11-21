var fs = require('fs');

//  function should be completely synchronous
//  or asynchronous
// process.nextTick is great because it makes the cb async
function fileSize(fileName, cb){
  if(typeof fileName !== 'string') {
    return process.nextTick(
      cb,
      new TypeError('argument should be string')
    );
  }


  fs.stat(fileName, (err, stats) => {
    if(err) return cb(err);
    cb(null, stats.size);
  })
}
fileSize(__filename, (err, size) => {
  if(err) throw err;
  console.log(`Size in KB: ${size/1024}`);
})