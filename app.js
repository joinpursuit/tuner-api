const express = require("express");
const app = express();
const songsController = require("./controllers/songsController.test.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());
require("dotenv").config();

//ROUTES
app.get("/" ,(req,res) =>{
    res.send("welcome to our Music App");
});

app.use("/songs", songsController);

app.get("*", (req,res) =>{
    res.status(404).send("Page not found")
});

module.exports = app;