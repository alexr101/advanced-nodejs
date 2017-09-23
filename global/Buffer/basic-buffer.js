// https://www.youtube.com/watch?v=98Uszhk_1tE

var buffer = new Buffer(10);

console.log(buffer);

var buffer2 = new Buffer([1, 2, 3, 4, 5]);

console.log(buffer2);

var buffer3 = new Buffer('Nodejs');

console.log(buffer3);

console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.isEncoding('ascii'));
console.log(Buffer.isEncoding('hex'));
console.log(Buffer.isEncoding(''));

var buffer4 = new Buffer(15);
buffer4.write('NodeJS', 'utf8');

console.log(buffer4);
console.log(buffer4.toString('utf8'));

var buffer5 = new Buffer(3);
buffer5.write('NodeJs is the best');
console.log(buffer5);
console.log(buffer5.toString('utf8')); // Only prints Nod because buffer only holds 3 chars

var buffer6 = new Buffer(15);
buffer6.write('NodeJs is the best');
console.log(buffer6);
console.log(buffer6.toString('utf8', 0, 9)); // prints range of chars