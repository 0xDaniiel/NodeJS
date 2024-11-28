//Creating a server
//Remove comments to Test each step
import http from "http";
import fs from "fs/promises"; //Import file system
import url from "url";
import path from "path";

//Get current path
/*
Using ES modules
__filename; //Get file name()
__dirname; //Get directory name()
*/

const __filename = url.fileURLToPath(import.meta.url);
// console.log(__filename); Displays your file url as a path

const __dirname = path.dirname(__filename);
// console.log(__dirname); Gives you the directory name without the file name

/*
//step 1 - TO CREATE A SERVER 
const server = http.createServer((request, response) => {
  response.write("Hello World"); //end the stream - ideally a framework will do this for you
  response.end();
});

*/

/*
//Step 2 - USING HTML
const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html"); // Means the content we are inputing is an html file
  response.statusCode = 300; //Here we can re-configure the status codes
  response.end("<div> <h1> HTML HEADER TAG </h1></div>");
});
*/

/*
//Step 3 - USING A SHORT FORM
const server = http.createServer((request, response) => {
  response.writeHead(300, { "Content-Type": "text/html" }); //Shorter method of writing the header and status codes
  response.end("<div> <h1> HTML HEADER TAG </h1></div>");
});
*/

/*
//sTEP 4 - USING REQUEST
const server = http.createServer((request, response) => {
  //console.log(request.url); //Page url
  //console.log(request.method); //It is a Get request

  response.writeHead(300, { "Content-Type": "text/html" }); //Shorter method of writing the header and status codes
  response.end(" <h1> HTML HEADER TAG </h1>");
}); 
*/

//USE POSTMAN VS CODE EXTENSION
/**
//Step 4 - cREATING A MINI ROUTER
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1> Homepage</h1>");
  } else if (request.url === "/about") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1> About Page </h1>");
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });

    response.end("<h1> Not Found</h1>");
  }
});
 */

/*
// Step 5 - Using a TRY CATCH block to check if the HTTP method is a GET Request
const server = http.createServer((request, response) => {
  try {
    if (request.method === "GET") {
      if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("<h1> Homepage</h1>");
      } else if (request.url === "/about") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("<h1> About Page </h1>");
      } else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end("<h1> Not Found</h1>");
      }
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/html" });
    response.end("Server Error");
    //If the http method is not a get request, throw a 500 server error
  }
});
*/

//Step 6 - USING A FILE SYSTEM
const server = http.createServer(async (request, response) => {
  try {
    if (request.method === "GET") {
      let filePath;
      if (request.url === "/") {
        filePath = path.join(__dirname, "public", "index.html"); // /public/index.html
      } else if (request.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }

      const data = await fs.readFile(filePath);
      response.setHeader("Content-Type", "text/html");
      response.write(data);
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/html" });
    response.end("Server Error");
    //If the http method is not a get request, throw a 500 server error
  }
});

//Now we have to listen on a port
const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//Go to your browser and search http://localhost:3000/ {which is the port number} you'll find 'hello world'

//We are now running server as script, check Guide.md
