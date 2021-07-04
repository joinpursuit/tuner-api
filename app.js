//DEPENDENCIES
const express = require("express");
const cors = require("cors");



//CONFIGURATION
const app = express();



//MIDDLEWARE
app.use(express.json());
app.use(cors());



//ROUTES

//Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Tuner");
});



//EXPORTS
module.exports = app;