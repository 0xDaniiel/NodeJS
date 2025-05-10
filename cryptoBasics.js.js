/**
 * cryptoBasics.js
 *
 * Demonstrates core cryptographic operations using Node.js 'crypto' module:
 * - Hashing data (e.g., for passwords)
 * - Generating random bytes
 * - Encrypting and decrypting data using symmetric encryption (AES)
 */

import crypto from "crypto";

// ------------------------
// 1. Creating a SHA-256 Hash
// ------------------------

const password = "password1234";
const hash = crypto.createHash("sha256"); // Specify the algorithm
hash.update(password); // Input data
const hashedPassword = hash.digest("hex"); // Output format
console.log("Hashed Password:", hashedPassword); // Useful for storing securely

// ------------------------
// 2. Generating Random Bytes (e.g., for keys, tokens)
// ------------------------

crypto.randomBytes(16, (err, buf) => {
  if (err) throw err;
  console.log("Random Bytes (Hex):", buf.toString("hex"));
});

// ------------------------
// 3. Symmetric Encryption and Decryption using AES
// ------------------------

const algorithm = "aes-256-cbc"; // AES encryption with 256-bit key and CBC mode
const key = crypto.randomBytes(32); // 256-bit key
const iv = crypto.randomBytes(16); // 128-bit IV (initialization vector)

const dataToEncrypt = "Hello World";

// Encrypting the data
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(dataToEncrypt, "utf8", "hex");
encrypted += cipher.final("hex");
console.log("Encrypted Data:", encrypted);

// Decrypting the data
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log("Decrypted Data:", decrypted);
