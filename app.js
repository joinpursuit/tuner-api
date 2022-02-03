const express = require("express");
const app = express();
const cors = require("cors");
const songsController = require("./controllers/songsController.js");

app.use(cors());
app.use(express.json());


app.use("/songs", songsController);

app.get("/", (req, res) => {
  res.send("Welcome to my Tuner App!");
});


app.get("*", (req, res) => {
  res.status(404).send("Page not found.");
});

module.exports = app;
