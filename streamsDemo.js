import fs from "fs";

// Readable Stream: Reading from a file
const readableStream = fs.createReadStream("largeFile.txt", "utf8");

readableStream.on("data", (chunk) => {
  console.log("Reading chunk:", chunk);
});

readableStream.on("end", () => {
  console.log("File read complete!");
});

// Writable Stream: Writing to a file
const writableStream = fs.createWriteStream("output.txt");

writableStream.write("Hello, World!");
writableStream.end(() => {
  console.log("Write operation completed.");
});
