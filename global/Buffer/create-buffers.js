// Useful when we need to read things like an image file from a TCP stream

// filled buffer
var safeBuffer = Buffer.alloc(10);

// empty buffer
// might contain old or sensitive data
// pro: faster performance
var unsafeBuffer = Buffer.allocUnsafe(10);
    unsafeBuffer.fill() // make is safe

var unsafeSlowBuffer = Buffer.allocUnsafeSlow(10);