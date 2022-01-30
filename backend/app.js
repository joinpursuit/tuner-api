// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const songsController = require("./controllers/songsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// SONG ROUTES

app.get("/", (req, res) => {
  res.send("Welcome to Tuner App.");
});

app.use("/songs", songsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
