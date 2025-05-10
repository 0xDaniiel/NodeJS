/**
 * httpServerBasics.js
 *
 * Demonstrates building a Node.js HTTP server step by step:
 * - Handling basic routes
 * - Using fs to serve static HTML files
 * - Organizing server logic with try-catch for error handling
 */

import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

// ES Module fix for __dirname
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create HTTP server
const server = http.createServer(async (request, response) => {
  try {
    // Allow only GET requests
    if (request.method === "GET") {
      let filePath;

      // Simple routing
      if (request.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (request.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        // If route is not defined, send 404
        response.writeHead(404, { "Content-Type": "text/html" });
        return response.end("<h1>404 - Not Found</h1>");
      }

      // Read and serve the requested HTML file
      const data = await fs.readFile(filePath);
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    } else {
      // Reject unsupported HTTP methods
      response.writeHead(405, { "Content-Type": "text/html" });
      response.end("<h1>405 - Method Not Allowed</h1>");
    }
  } catch (error) {
    // Generic server error handler
    response.writeHead(500, { "Content-Type": "text/html" });
    response.end("<h1>500 - Server Error</h1>");
    console.error("Server error:", error.message);
  }
});

// Port (can be set via environment variable or default to 3000)
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/`);
});
