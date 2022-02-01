const cors = require("cors");
const express = require("express");
const songController = require("./controllers/songsController.js");
const app = express();

app.use(cors());
app.use(express.json());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Welcome to my Tuner App!");
});

app.use("/songs", songController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found.");
});

module.exports = app;
