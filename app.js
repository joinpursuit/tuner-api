// DEPENDENCIES
const cors = require("cors");
const express = require("express");

const songController = require("./controllers/songController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
require("dotenv").config();

app.use("/songs", songController);

// ROUTES

// HOME
app.get("/", (req, res) => {
  res.send("Welcome to Tuner-API !");
});

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("OOPS! SORRY");
  });


// EXPORT
module.exports = app;