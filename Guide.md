**What is Node js?**

- It is a Javascript runtime (A program or environment for running other programmes).
- Node js was built with C++ and uses th v8 engine which the Google chrome uses.
- Mostly used for developing server-side & Network apps/apis.
- Used to take javascript out of the browser.
- Fast and scalable.

**What you can use Node js for?**

- Building APIs
- Server side Rendering Applications
- Real time applications
- Microservices
- CLI Tools
- Bots
- Web scraping
- Web servers

**Get started**

- Create a package.json file
- You can use npm init , then fill in all the details
- Or just use `npm init -y` to skip

**To import:**

- Make sure your package.json file has a "type" field.
- If not, add "type": "module" after your entry point.
- Adding an export to an object, array, or function means it won't be the only file exported.
- But adding the "default" keyword makes it the main export of the file.

**Explaining terms in the Server.js**

- Create server method is a http used to create a server
- The `.write()` method writes some data to the stream, and calls the supplied callback once the data has been fully handled. If an error occurs, the callback will be called with the error as its first argument. The callback is called asynchronously and before 'error' is emitted.

**To run our server as scripts**

- Go to package.json
- Rename test to - start
- Rename its value to - node server.js
- Now to run the server we use `npm start`

- Next we install nodemon package using `npm install nodemon` to keep the file running
- In the package.json, rename node server.js to nodemon server.js
- When you run npm start, nodemoin watches it, so we don't have to constantly restart our server

**Running a file with .env**

- Use a `--env-file=.env` flag in your package.json
- use the PROCESS keyword {varies with programming languages}
