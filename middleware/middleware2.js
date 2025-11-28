const express = require("express");
const app = express();
const port = 3000;

// ✅ Middleware to parse JSON bodies
app.use(express.json());

// ✅ In-memory posts array
let posts = [];

// ✅ Simple authentication middleware
const authMiddleware = (req, res, next) => {
 const token = req.query.token;
 if (token === "secret") {
  next();
 } else {
  res.status(401).json({ error: "Unauthorized: Invalid or missing token" });
 }
};

// ✅ Homepage route (prevents 404 at /)
app.get("/", (req, res) => {
 res.send(`
    <h1>Welcome to My API</h1>
    <p>Use <code>/posts</code> to view or create posts.</p>
    <p>Example: <a href="/posts?token=secret">View Posts</a></p>
  `);
});

// ✅ Get all posts
app.get("/posts", (req, res) => {
 res.json(posts);
});

// ✅ Get a specific post
app.get("/posts/:id", authMiddleware, (req, res) => {
 const post = posts.find((p) => p.id === req.params.id);
 if (!post) return res.status(404).json({ error: "Post not found" });
 res.json(post);
});

// ✅ Create a new post
app.post("/posts", authMiddleware, (req, res) => {
 const { content } = req.body;
 if (!content) return res.status(400).json({ error: "Content is required" });

 const newPost = { id: String(posts.length + 1), content };
 posts.push(newPost);
 res.status(201).json({
  message: `Created post successfully`,
  post: newPost,
 });
});

// ✅ Delete a post
app.delete("/posts/:id", authMiddleware, (req, res) => {
 const index = posts.findIndex((p) => p.id === req.params.id);
 if (index === -1) return res.status(404).json({ error: "Post not found" });

 const deletedPost = posts.splice(index, 1)[0];
 res.json({ message: `Deleted post with ID: ${deletedPost.id}` });
});

// ✅ Admin routes (using a router)
const adminRouter = express.Router();

adminRouter.get("/dashboard", authMiddleware, (req, res) => {
 res.send(`
    <h2>Admin Dashboard</h2>
    <p>Authorized access granted ✅</p>
  `);
});

app.use("/admin", adminRouter);

// ✅ Global 404 handler (for undefined routes)
app.use((req, res) => {
 res.status(404).json({ error: "Route not found" });
});

// ✅ Start the server
app.listen(port, () => {
 console.log(`✅ Server running at http://localhost:${port}`);
});
