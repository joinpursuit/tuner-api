const express = require("express");
const cors = require("cors");
const app = express();
const songsController = require("./controllers/songsController");

app.use(cors());
app.use(express.json());

app.use("/songs", songsController);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Tuner");
});

app.get("*", (req, res) => {
  res.status(404).send("404: Out of Tune");
});

module.exports = app;
