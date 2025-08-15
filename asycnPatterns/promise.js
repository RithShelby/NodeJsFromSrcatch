const fs = require("fs").promises;

console.log("1.Starting file read...");
fs
 .readFile("myF.txt", "utf8")
 .then((data) => {
  console.log("3. File Content : ", data);
 })
 .catch((err) => console.log("Error", err));
console.log("2. Run before file is Read");
