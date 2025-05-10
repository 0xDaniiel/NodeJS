/**
 * eventsBasics.js
 *
 * Demonstrates how to use Node.js 'events' module:
 * - Registering event listeners
 * - Emitting events
 * - Handling errors using EventEmitter
 */

import { EventEmitter } from "events";

// Create a new EventEmitter instance
const myEmitter = new EventEmitter();

// Event listener for greeting
function greetHandler(name) {
  console.log("Hello, " + name);
}

// Event listener for saying goodbye
function goodByeHandler(name) {
  console.log("Goodbye, " + name);
}

// ------------------------
// Register Event Listeners
// ------------------------

myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodByeHandler);

// ------------------------
// Emit Events
// ------------------------

myEmitter.emit("greet", "Dan"); // Output: Hello, Dan
myEmitter.emit("goodbye", "JavaScript"); // Output: Goodbye, JavaScript

// ------------------------
// Error Handling with EventEmitter
// ------------------------

myEmitter.on("error", (err) => {
  console.error("An error occurred:", err.message);
});

// Simulate an error event
myEmitter.emit("error", new Error("Something went wrong"));
