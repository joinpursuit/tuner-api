const cors = require("cors");
const express = require("express");
const songs = require("./controllers/songsController")

const app = express();

app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//     next();
// })
app.get("/", (req,res) => {
    res.send("Welcome to Tuner")
});

app.use("/songs", songs);

app.get("*", (req, res) => {
 res.status(404).send("Page not found")
});

module.exports = app;