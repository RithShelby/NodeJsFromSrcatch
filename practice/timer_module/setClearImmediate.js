// console.log("Start");

const { log } = require("console");

// setTimeout(() => {
//  console.log("setTimeout callback");
// }, 2000);

// setImmediate(() => {
//  console.log("setImmediate callback");
// });
// process.nextTick(() => {
//  console.log("nextTick callback");
// });
// console.log("End");

// cancel Immediate

// const immediateId = setImmediate(() => {
//  console.log("This will not be displayed");
// });

// clearImmediate(immediateId);
// console.log("Cannelled Immediate");

// processnextTick

console.log("Start");

setTimeout(() => {
 console.log("setTimeout executed");
}, 0);
setImmediate(() => {
 console.log("setImmediate executed");
});

process.nextTick(() => {
 console.log("nextTick executed");
});

console.log("End");
