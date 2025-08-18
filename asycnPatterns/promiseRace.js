const pro1 = new Promise((resovle) =>
 setTimeout(() => {
  resovle("First result"), 1000;
 })
);
const pro2 = new Promise((resovle) =>
 setTimeout(() => {
  resovle("Second result"), 500;
 })
);
Promise.race([pro1, pro2]).then((result) => {
 console.log("Fastest result", result);
});
