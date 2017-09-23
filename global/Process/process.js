var versions = process.versions
console.log(versions);

var v8 = process.versions.v8
console.log(v8);

if(process.versions.v8 < '4') {

} else {
	console.log('v8 version is good');
}


// PROCESS EVENTS
// Process is an event emitter
// We can emit and listen to certain events on the process object

// Emitter when node's event loop has nothing else to do OR
// a manual call to process.exit has been executed DUH
// You can only use synchronous operations here, no event loop here
process.on('exit', function(code){
	console.log('process exiting w code: ' + code);
});


// Problem with this event is that it intereferes with Node's 
// default behavior or crashing or exiting after an error
// this will stop that exit
process.on('uncaughtException', function(err) {
	console.log(err);

	process.exit(1); // without this line the code will keep running even after the error

});

process.stdin.resume(); // keeps the event loop busy

console.dog();

