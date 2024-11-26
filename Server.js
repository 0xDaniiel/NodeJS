//Creating a server
//Remove comments to run codes seperately
import http from "http";

//Test

/*
const server = http.createServer((request, response) => {
  response.write("Hello World"); //end the stream - ideally a framework will do this for you
  response.end();
});

*/

//Using HTML
/*
const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html"); // Means the content we are inputing is an html file
  response.statusCode = 300; //Here we can re-configure the status codes
  response.end("<div> <h1> HTML HEADER TAG </h1></div>");
});
*/

//Short form
const server = http.createServer((request, response) => {
  response.writeHead(300, { "Content-Type": "text/html" }); //Shorter method of writing the header and status codes
  response.end("<div> <h1> HTML HEADER TAG </h1></div>");
});

//Now we have to listen on a port
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//Go to your browser and search http://localhost:3000/ {which is the port number} you'll find 'hello world'

//We are now running server as script, check Guide.md
