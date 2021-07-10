// const cors = require("cors");
const express = require("express");
const songsController = require("./controllers/songsController");

const app = express();



// middleware
// app.use(cors());
app.use(express.json());

//routes
app.use("/songs", songsController);


//root
app.get("/", (req, res) => {
    res.send("Welcome to Tuner")
});

// catch all
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});


module.exports = app;