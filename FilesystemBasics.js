/**
 * fsBasics.js
 *
 * Demonstrates file system operations using Node.js 'fs/promises':
 * - Reading a file
 * - Writing to a file
 * - Appending to a file
 */

import fs from "fs/promises"; // Modern Promise-based FS module

const filePath = "./test.txt";

// ------------------------
// Write to a file (overwrite if it exists)
// ------------------------
const writeFile = async () => {
  try {
    await fs.writeFile(filePath, "Daniel wrote this");
    console.log("✅ File written successfully");
  } catch (error) {
    console.error("❌ Error writing file:", error.message);
  }
};

// ------------------------
// Append to the existing file
// ------------------------
const appendFile = async () => {
  try {
    await fs.appendFile(filePath, "\n...and this too");
    console.log("✅ Content appended successfully");
  } catch (error) {
    console.error("❌ Error appending to file:", error.message);
  }
};

// ------------------------
// Read from the file
// ------------------------
const readFile = async () => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    console.log("📄 File contents:\n" + data);
  } catch (error) {
    console.error("❌ Error reading file:", error.message);
  }
};

// ------------------------
// Run all operations
// ------------------------

const runFileOperations = async () => {
  await writeFile();
  await appendFile();
  await readFile();
};

runFileOperations();

