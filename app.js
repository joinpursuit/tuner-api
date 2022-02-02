//library
const express = require("express");
const songsController = require("./controllers/songsController");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//app.use declares that the path /songs uses the routing methods in the controllers file
app.use("/songs", songsController);

app.get("/", (request, response) => {
  response.send("Welcome to Tuner");
});

app.get("*", (request, response) => {
  response.status(404).send({ error: "Page Not Found" });
});
module.exports = app;
