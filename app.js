// Dependencies
const cors = require("cors");
const express = require("express");

// controllers
const songsController = require("./controllers/songsController.js");

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/songs", songsController);

// Routes
app.get("/", (req, res)=>{
    res.status(200).send("Welcome to Tuner API App!");
})

app.get("*", (req, res)=>{
    res.status(404).send("404 - Page not found.");
})

// Export
module.exports = app;