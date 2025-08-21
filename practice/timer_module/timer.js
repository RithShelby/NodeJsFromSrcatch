// Key features include:

// Delayed execution with setTimeout()
// Repeated execution with setInterval()
// Immediate execution in the next event loop with setImmediate()
// Promise-based APIs for modern async/await patterns
const { setTimeout, setInterval, setImmediate } = require("timers");

console.log("Starting timers");

setTimeout(() => {
 console.log("This run after 1 second");
}, 3000);

let counter = 0;
const interval = setInterval(() => {
 counter++;
 console.log(`Interval tick ${counter}`);
 if (counter >= 3) {
  clearInterval(interval);
 }
}, 4000);

setImmediate(() => {
 console.log("This run in the next iteration of the event loop");
});
console.log("Timers scheduled");
