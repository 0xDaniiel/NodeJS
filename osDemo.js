import os from "os";
//Gives you information about your system

//userInfo()
console.log(os.userInfo()); //Returns an object with your devuce: uid, gid, username , homedir and shell

//Total memory
console.log(os.totalmem()); //Returns your device total memory in bytes

//Free memory
console.log(os.freemem());

//CPU info
console.log(os.cpus()); //Returns an array of objects for every cores in your device

//Windows version
console.log(os.version());

// others- Refer to the documentation
console.log(os.release());
console.log(os.networkInterfaces());
