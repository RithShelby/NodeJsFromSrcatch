const myPromise = new Promise((resolve, reject) => {
 setTimeout(() => {
  const success = Math.random() > 0.5;
  if (success) {
   resolve("It worked well !!");
  } else {
   reject(new Error("Operation failed!"));
  }
 }, 1000);
});

myPromise
 .then((result) => console.log("Success:", result))
 .catch((error) => console.error("Error:", error.message));
