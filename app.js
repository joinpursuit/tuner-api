// Dependencies
const cors = require("cors");
const express = require("express");

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res)=>{
    res.status(200).send("Welcome to Tuner API App");
})

// Export
module.exports = app;