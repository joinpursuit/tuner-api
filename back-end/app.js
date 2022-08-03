//dependencies
const express = require("express");
const cors = require("cors");

//sub routes
const songsController = require("./controllers/songController");

const app = express();

//middleware
app.use(cors()); //allows corss origin request
app.use(express.json()); //parse request body into json format

//home route
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

//songs route
app.use("/songs", songsController);

//error route
app.use("*", (req, res) => {
  res.status(404).send("Page not found!");
});

//export app
module.exports = app;
