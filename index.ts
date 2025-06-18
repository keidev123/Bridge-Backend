import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import { PORT } from "./config";
import { catchBridgeEvent } from "./src";

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express application
const app = express();

// Set up Cross-Origin Resource Sharing (CORS) options
app.use(cors());

const server = http.createServer(app);

// Start the Express server to listen on the specified port
server.listen(PORT, () => {
  console.log(`Bridge server is running on port ${PORT}`);
  catchBridgeEvent();
});
