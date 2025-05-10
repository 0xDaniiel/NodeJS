/**
 * restApiServer.js
 *
 * A simple REST API server in Node.js without Express:
 * - Supports GET all users, GET user by ID, and POST new user
 * - Demonstrates basic middleware, routing, and JSON parsing
 */

import { createServer } from "http";

const port = 8000;

// Mock data
const users = [
  { id: 1, name: "John", email: "john@gmail.com" },
  { id: 2, name: "Jane", email: "jane@gmail.com" },
  { id: 3, name: "Doe", email: "doe@gmail.com" },
];

// ------------------------
// Logger Middleware
// ------------------------
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// ------------------------
// JSON Middleware
// ------------------------
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// ------------------------
// Route Handlers
// ------------------------

// GET /api/users
const getUserHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// GET /api/users/:id
const getUserById = (req, res) => {
  const id = req.url.split("/")[3]; // Extract ID from URL
  const user = users.find((u) => u.id === parseInt(id));

  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User not found" }));
  }
  res.end();
};

// POST /api/users
const createUserHandler = (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString(); // Accumulate data
  });

  req.on("end", () => {
    try {
      const newUser = JSON.parse(body);
      users.push(newUser);
      res.statusCode = 201;
      res.write(JSON.stringify(newUser));
    } catch (err) {
      res.statusCode = 400;
      res.write(JSON.stringify({ message: "Invalid JSON" }));
    }
    res.end();
  });
};

// 404 Handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not found" }));
  res.end();
};

// ------------------------
// Server Setup
// ------------------------
const server = createServer((req, res) => {
  // Simulate middleware chain
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUserHandler(req, res);
      } else if (req.url.match(/^\/api\/users\/\d+$/) && req.method === "GET") {
        getUserById(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

// ------------------------
// Start Server
// ------------------------
server.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
