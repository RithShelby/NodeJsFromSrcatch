const { error } = require("console");
const { resolve } = require("path");

const fs = require("fs").promises;
const pro1 = Promise.resolve("First Result");
const pro2 = new Promise((resolve) =>
 setTimeout(() => {
  resolve("Second result"), 1000;
 })
);
const pro3 = fs.readFile("myF.txt", "utf-8");

Promise.all([pro1, pro2, pro3])
 .then((result) => {
  console.log("Result : ", result);
 })
 .catch((error) => {
  console.error("Error in one of the promise", error);
 });
