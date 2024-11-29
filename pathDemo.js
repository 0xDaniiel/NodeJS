import path from "path";

const filePath = "./dir1/dir2/test.txt"; //demo

//basename
console.log(path.basename(filePath)); //Returns test.txt

//directory name
console.log(path.dirname(filePath)); //Returns ./dir1/dir2

//extension name
console.log(path.extname(filePath)); //Returns .txt

//parse
console.log(path.parse(filePath)); //Returns the path as an object

//Join create a filepath based on argument passed on it [Because delimiters differs on OS]
const filePath2 = path.join("users", "path");
console.log(filePath2); //Returns users\path ** for windows

//Resolve
const filePath3 = path.resolve("users", "path");
console.log(filePath3); //Returns an actual path, starting with your device path
