const express = require("express");
const cors = require("cors");
const songController = require("./controllers/songControllers");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/songs", songController);

app.get("/", (_, response) => {
  response.status(200).send("Welcome to tuner!");
});

app.get("*", (_, response) => {
  response.status(404).send({ error: "Not Available" });
});

module.exports = app;
