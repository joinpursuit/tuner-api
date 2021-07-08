//DEPENDENCIES
const cors = require("cors")
const express = require("express");

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors())
app.use(express.json());

//ROUTES
app.get("/", (req, res) => {
  res.json("Welcome to the Tuner App!");
});

//404
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

//EXPORT
module.exports = app;
