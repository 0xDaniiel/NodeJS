/**
 * Provides Cryptograhic functionalities
 * Create Hashes
 * Encrypt and Decrypt data
 * Create random dex
 */
import crypto from "crypto";

const hash = crypto.createHash("sha256"); //the Algorithm we want to use
hash.update("password1234");
console.log(hash.digest("hex")); //Hashing passwords before storing in the database

//Generate random bytes
//Param of size and a callback function
crypto.randomBytes(16, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString("hex"));
});

//Encrypting and Decrypting Data
//Createcipheriv & createDicipheriv
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encryptedData = cipher.update("Hello World", "utf8", "hex");
encryptedData += cipher.final("hex");
console.log(encryptedData);

//To deCipher
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decryptedData = decipher.update(encryptedData, "hex", "utf8");
decryptedData += decipher.final("utf8");
console.log(decryptedData);
