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

//MIDDLEWARE -Refer to guide..

//lOGGER MIDDLEWARE
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`); //Logs the request method and the request url

  next(); //Means move to the next function
};

//JSON MIDDLEWARE
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

//ROUTE HANDLER for GET /api/users- Not a middleware
const getUserHandler = (req, res) => {
  res.write(JSON.stringify(users)); //Returns a JSON
  res.end();
};

//Route for Get /api/users/:id
const getUserById = (req, res) => {
  const id = req.url.split("/")[3]; // Splits the url into an array and returns the 3rd index which is the id.
  const user = users.find((user) => user.id === parseInt(id)); //Loops through the users array and returns the user with the id that matches the id in the url, parses the id to a number.
  if (user) {
    res.write(JSON.stringify(user)); //Returns a JSON
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User not found" }));
  }
  res.end();
};

//Route Handler for POST /api/users
const createUserHandler = (req, res) => {
  let body = "";
  //listen for data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

//NOT FOUND HANDLER
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not found" }));
  res.end();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUserHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserById(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
