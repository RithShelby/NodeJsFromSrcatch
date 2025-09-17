console.log("1. Start");

// Next tick queue
process.nextTick(() => console.log("2. Next tick"));

// Microtask queue (Promise)
Promise.resolve().then(() => console.log("3. Promise"));

// Timer phase
setTimeout(() => console.log("4. Timeout"), 2000);

// Check phase
setImmediate(() => console.log("5. Immediate"));

console.log("6. End");
