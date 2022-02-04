const express = require("express");
const cors = require("cors");
const songsController = require("./controllers/songsController");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/songs", songsController);

app.get("/", (_, response) => {
  console.log("GET request to /");
  response.send("Hello and welcome to Tuner App!");
});

app.get("*", (_, response) => {
  response.status(404).json({ error: "Page not found" });
});

module.exports = app;
