const express = require("express");
const cors = require("cors");
const songController = require("./controllers/songController.js");

const app = express();

app.use(cors());
app.use(express.json());
// app.use()

app.get("/", (req, res) => {
  res.send("Welcome to tuner");
});
app.get("*", (req, res) => {
  res.status(404).send("Not found");
});

module.exports = app;
