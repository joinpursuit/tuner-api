// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const songsController = require("./controllers/songs")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to TUNER API");
});

app.use("/songs", songsController)

// EXPORT
module.exports = app;