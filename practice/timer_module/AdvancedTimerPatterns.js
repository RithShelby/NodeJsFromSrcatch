// function debounce(func, delay) {
//  let timeoutId;
//  return function (...args) {
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(() => func.apply(this, args), delay);
//  };
// }

// const handleResize = debounce(() => {
//  console.log("Window resized");
// }, 300);

// throttling
function throttle(func, limit) {
 let inThrottle = false;
 return function (...args) {
  if (!inThrottle) {
   func.apply(this, args);
   inThrottle = true;
   setTimeout(() => (inThrottle = false), limit);
  }
 };
}
// Example usage
const handleScroll = throttle(() => {
 console.log("Handling scroll");
}, 200);

// sequential timeouts

function sequentialTimeouts(callbacks, delay = 1000) {
 let index = 0;
 function next() {
  if (index < callbacks.length) {
   callbacks[index]();
   index++;
   setTimeout(next, delay);
  }
 }
 next();
}
// Example usage
sequentialTimeouts(
 [
  () => console.log("Step 1"),
  () => console.log("Step 2"),
  () => console.log("Step 3"),
 ],
 1000
);
