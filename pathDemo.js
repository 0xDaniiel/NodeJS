import path from "path";

const filePath = "./dir1/dir2/test.txt"; //demo

//basename
console.log(path.basename(filePath)); //Returns test.txt

//directory name
console.log(path.dirname(filePath)); //Returns ./dir1/dir2

//extension name
console.log(path.extname(filePath)); //Returns .txt
