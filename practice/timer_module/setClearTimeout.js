setTimeout(() => {
 console.log("Show message after delayed 2 seconds");
}, 2000);

// with argument
const stopTime = setTimeout(
 (name) => {
  console.log(`Hello , ${name}`);
 },
 2000,
 "Node Js"
);

// Storing and clearing a timeout
const timeoutId = setTimeout(() => {
 console.log("This will never be displayed");
}, 5000);

// cancel the timeout before it executes
clearTimeout(timeoutId);
console.log("Timeout has been cancel TimeoutId");
