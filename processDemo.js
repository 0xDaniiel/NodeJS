//process is a global object we can access it withoput importing it
console.log(process.argv); //If you run it with a flag eg   node processDemo.js -s it will add -s to the output
console.log(process.argv[2]); //Since its an array we can access it with index

//Using process.env system variable
console.log(process.env.HOMEPATH);

//Id of Node js process
console.log(process.pid);

//Current working directory
console.log(process.cwd());

//Title
console.log(process.title);

//Memory usage
console.log(process.memoryUsage());

// Uptime for the process
console.log(process.uptime());

process.on("exit", (code) => {
  console.log(`Exiting with code ${code}`);
});//This action fires when the process is about to exit

//Exit
console.log(process.exit(0));
console.log("[Will not be printed]"); //Because it comes agter the exit
