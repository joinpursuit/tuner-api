// DEPENDENCIES
const cors = require("cors");
const express = require("express");

const songController = require("./controllers/songController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/songs", songController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner-API !");
});

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });
  

// EXPORT
module.exports = app;