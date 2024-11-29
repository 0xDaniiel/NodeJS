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
