//Creating a server
import http from "http";

const server = http.createServer((request, response) => {
  response.write("Hello world");
  //emd the stream - ideally a framework will do this for you
  response.end();
});

//Now we have to listen on a port

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//Go to your browser and search http://localhost:3000/ {which is the port number} you'll find 'hello world'
