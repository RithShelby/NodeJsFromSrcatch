const express = require("express");
const app = express();
const port = 3000;

// Basic GET route
app.get("/", (req, res) => {
 res.send("Welcome to the blog!");
});

// Route with parameter
app.get("/posts/:id", (req, res) => {
 const postId = req.params.id; // Access the dynamic parameter
 res.send(`Viewing post with ID: ${postId}`);
});

// POST route (use Postman or curl to test: curl -X POST http://localhost:3000/posts)
app.post("/posts", (req, res) => {
 res.send("Created a new post!");
});

// Modular router for /admin paths
const adminRouter = express.Router();
adminRouter.get("/dashboard", (req, res) => {
 res.send("Admin dashboard");
});
app.use("/admin", adminRouter); // Mount the router at /admin

app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
