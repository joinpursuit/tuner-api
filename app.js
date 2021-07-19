// Dependencies
const express = require("express");
const cors = require("cors");
const songsController = require("./controllers/songsController");

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Tuner App");
});

app.use("/songs", songsController);

// 404 Page
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// Export
module.exports = app;
