import { EventEmitter } from "events";

const myEmmiter = new EventEmitter();

function greetHandler(name) {
  console.log("Hello " + name);
}

function goodByeHandler(name) {
  console.log("Goodbye" + name);
}

//Registering the event handler
myEmmiter.on("greet", greetHandler);
myEmmiter.on("goodbye", goodByeHandler);

//Emit events
myEmmiter.emit("greet", "Dan");
myEmmiter.emit("goodbye", "Javascript");

//Error handling
myEmmiter.on("error", (err) => {
  console.log("An error occured", err);
});

//Simulate Error
myEmmiter.emit("error", new Error("Something went wrong"));
