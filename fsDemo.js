import { error } from "console";
// import fs from "fs";
import fs from "fs/promises"; //Promise version

/*
//readFile() - callback version
// fs.readFile() Takes in 3 params file location, encoding, and callback
fs.readFile("./test.txt", "utf8", (error, data) => {
  if (error) throw error;
  console.log(data); //Returns the content of test.txt
});

//readFile() - Sync version -- Not adviced for big data
const data = fs.readFileSync("./test.txt", "utf8");
console.log(data);

//readFile() - Promise version
fs.readFile("./test.txt", "utf8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

  */

//readFile() - Async version
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//Write file
const writeFile = async () => {
  try {
    // fs.writeFile() Takes in 2 params file location and Data to write to file
    await fs.writeFile("./test.txt", "Daniel wrote this");
    console.log("file written to..");
  } catch (error) {
    console.log(error);
  }
};

//appendFile - Add to the file instead of overwriting
const appendFile = async () => {
  try {
    // fs.appendFile() Takes in 2 params file location and Data to append to file
    await fs.appendFile("./test.txt", "\n and this too");
  } catch (error) {
    console.log(error);
  }
};
writeFile();
appendFile();
readFile();
