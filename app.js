const express = require("express");

const app = express();

//Middleware
app.use(express.json());

const songsController = require("./controllers/songsController.js");
app.use("/songs", songsController);

app.get("/", (req, res) => {
  res.send("Backend root");
});

app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = app;
