const express = require("express");
const cors = require("cors");
const app = express();
const songsCotrollers = require("./controllers/songsConttrollers");

app.use(express.json());
app.use(cors());

app.get("/", (_, response) => {
  console.log("GET request to /");
  response.send("hello world");
});

app.use("/songs", songsCotrollers);

app.get("*", (_, response) => {
  response.status(404).json({ error: "Page not found" });
});

module.exports = app;
