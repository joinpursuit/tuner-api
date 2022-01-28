const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const songsController = require("./controllers/songsController");
app.use("/anime", animeController);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to our the tuner Api");
});

app.get("*", (req, res) => {
  res.status(404).send("this is not the page you are looking for");
});

module.exports = app;
