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
app.use("/songs", songsController)

app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.get("/404", (req, res) => {
  res.status(404).send("404 Error -  Page Not Found!!!");
});

// 404 catch all
app.get("*", (req, res) => {
  res.redirect("/404")
});



// EXPORT
module.exports = app;