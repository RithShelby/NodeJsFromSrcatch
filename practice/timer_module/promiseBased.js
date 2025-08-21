const { setInterval } = require("timers/promises");

async function repeatedGreeting() {
 console.log("Starting interval...");

 // Create an async iterator from setInterval
 const interval = setInterval(1000, "tick");

 // Limit to 5 iterations
 let counter = 0;

 for await (const tick of interval) {
  console.log(counter + 1, tick);
  counter++;

  if (counter >= 5) {
   break; // Exit the loop, stopping the interval
  }
 }

 console.log("Interval finished");
}

repeatedGreeting().catch(console.error);
