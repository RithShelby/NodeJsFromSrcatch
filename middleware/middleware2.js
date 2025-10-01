const { log } = require("console");
const express = require("express");
const app = express();
const port = 3000;

//Middleware to parse JSON bodies
app.use(express.json());

let posts = [];

// auth middleware
const authMiddleware = (req, res, next) => {
 const token = req.query.token;
 if (token === "secret") {
  next();
 } else {
  res.status(401).send("Unauthorized");
 }
};

app.get("/posts/:id", authMiddleware, (req, res) => {
 const postId = req.params.id;
 const post = posts.find((p) => p.id === postId);
 if (post) {
  res.send(`Post ID : ${postId} - ${post.content}`);
 } else {
  res.status(404).send("Post not found");
 }
});

app.post("/posts", authMiddleware, (req, res) => {
 const { content } = req.body;
 if (!content) {
  return res.status(400).send("Content is required");
 }
 const post = { id: String(posts.length + 1), content };
 posts.push(post);
 res.send(`Create a new post ID : ${post.id}`);
});

app.get("/posts", (req, res) => {
 res.json(posts);
});

app.delete("/posts/:id", authMiddleware, (req, res) => {
 const postId = req.params.id;
 const index = posts.findIndex((p) => p.id === postId);
 if (index !== -1) {
  posts.splice(index, 1); // Remove post from array
  res.send(`Deleted post with ID: ${postId}`);
 } else {
  res.status(404).send("Post not found");
 }
});

const adminRouter = express.Router();
adminRouter.get("/dashboard", authMiddleware, (req, res) => {
 res.send("Admin Dashboard");
});

app.use("/admin", adminRouter);

//server

app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
