import express from "express";

const app = express();
const port = 3000;

// Middleware to log request details
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

// Dynamic route with URL parameters
app.get("/user/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

// 404 Handler for undefined routes
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Error handling middleware (catch all errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something went wrong!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
