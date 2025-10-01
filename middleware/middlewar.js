const { log } = require("console");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// custom middlewar for logging
app.use((req, res, next) => {
 console.log(`Request recived : ${req.method} ${req.url}`);
 next();
});

// path-specific middlewar
app.use("/api", (req, res, next) => {
 console.log("API route accessed");
 next();
});

// route using JSON body
app.post("/api/users", (req, res) => {
 const user = req.body;
 res.json({ message: "User create", user });
});

// route that throws an error
app.get("/error", (req, res, next) => {
 const err = new Error("Something went wrong !");
 next(err);
});

// asycn route with error

app.get("/asycn-error", async (req, res, next) => {
 try {
  throw new Error("Asycn failure");
 } catch (err) {
  next(err);
 }
});

// 404 handler (for unmatched routes) - place after all routes
app.use((req, res, next) => {
 res.status(404).send("Page not found");
});

// Custom error handler - place last
app.use((err, req, res, next) => {
 console.error(err.stack); // Log the error
 res.status(500).send("Internal Server Error: " + err.message);
});

app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
