const cors = require("cors");
const express = require("express");
const app = express();
const songsController = require("./controllers/songsController.js")

app.use(cors());
app.use(express.json());
require("dotenv").config();


app.get("/", (req, res)=>{
    res.send("Welcome to Tuner API")
})
app.use("/songs", songsController);

app.get("*", (req,res)=>{
    res.status(404).send("Page not found");
})


module.exports = app;