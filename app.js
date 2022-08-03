//Dependencies
const express = require("express");
const cors = require("cors");
const songsControllers = require("./controllers/songsController");

//Configuration
const app = express();

//Middleware (certain features to use)
app.use(cors());
app.use(express.json());
app.use("/songs", songsControllers);

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.get("*", (req, res) => {
  res.status(404).send("This route doesn't exist");
});

module.exports = app;
