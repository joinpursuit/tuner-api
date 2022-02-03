// DEPENDENCIES
const express = require("express");
const cors =require("cors");
const songController = require("./controllers/songsController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to Tuner");
});

app.use("/songs", songController)

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;