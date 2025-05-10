/**
 * pathBasics.js
 *
 * Demonstrates how to work with file and directory paths using Node.js 'path' module.
 */

import path from "path";

// Example file path
const filePath = "./dir1/dir2/test.txt";

// ------------------------
// 1. Path Component Methods
// ------------------------

console.log("📄 Basename:", path.basename(filePath));
// ➤ Returns the file name: "test.txt"

console.log("📁 Directory Name:", path.dirname(filePath));
// ➤ Returns the directory path: "./dir1/dir2"

console.log("📎 Extension Name:", path.extname(filePath));
// ➤ Returns the file extension: ".txt"

console.log("🧩 Parsed Path:", path.parse(filePath));
// ➤ Returns an object: { root, dir, base, ext, name }

// ------------------------
// 2. Creating/Combining Paths
// ------------------------

const joinedPath = path.join("users", "john", "documents");
console.log("🛠️ Joined Path:", joinedPath);
// ➤ Cross-platform-safe: "users/john/documents" or "users\john\documents" on Windows

const resolvedPath = path.resolve("users", "john", "documents");
console.log("📍 Resolved Path:", resolvedPath);
// ➤ Returns absolute path from current working directory
