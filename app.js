const express = require("express");
const app = express();
const cors = require("cors");
const songControllers = require("./controllers/songControllers");

app.use(cors());
app.use(express.json());

app.get("/", (_, response) => {
  console.log("GET REQUEST TO /");
  response.send("Welcome to Turner");
});

app.use("/songs", songControllers);

app.get("*", (_, response) => {
  response.status(404).json({ error: "Page not found" });
});

module.exports = app;
