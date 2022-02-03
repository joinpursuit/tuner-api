const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 7070
const songsController = require("./controllers/songsController")

app.use(cors());
app.use(express.json());

app.use("/songs", songsController);

app.get("/", (_,response) => {
  console.log("GET request to /");
  response.send("Hello and welcome to tuners!");
});

app.get("*", (_, response) => {
  response.status(404).json({ error: "Page not found" });
});


module.exports = app;
