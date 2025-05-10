import dotenv from "dotenv";

// Load environment variables from a .env file
dotenv.config();

console.log("API Key:", process.env.API_KEY);
console.log("Port:", process.env.PORT);
