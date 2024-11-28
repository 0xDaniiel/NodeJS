import { createServer } from "http";

const port = 8000;

const users = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@gmail.com",
  },
  {
    id: 3,
    name: "Doe",
    email: "doe@gmail.com",
  },
];

const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users)); //Returns a JSON
    res.end();
  }
  //Using Regex to get the id of the user
  else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3]; // Splits the url into an array and returns the 3rd index which is the id.

    const user = users.find((user) => user.id === parseInt(id)); //Loops through the users array and returns the user with the id that matches the id in the url, parses the id to a number.

    res.setHeader("Content-Type", "application/json");
    if (user) {
      res.write(JSON.stringify(user)); //Returns a JSON
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "User not found" }));
    }
    res.end();
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
  }
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
