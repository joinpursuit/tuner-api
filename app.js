//DEPENDENCIES
const cors = require("cors");
const express = require("express");
const songsController = require("./controllers/songs");

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Tuner App!");
});

//SONGS ROUTES
app.use("/songs", songsController);

//404
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

//EXPORT
module.exports = app;
