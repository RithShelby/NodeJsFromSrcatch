const crypto = require("crypto");

// Create a hash object
const hash = crypto.createHash("sha256");

// Update the hash with data
hash.update("Hello, World!");

// Get the digest in hexadecimal format
const digest = hash.digest("hex");
console.log(digest);
