const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Durdona's and AnJu's Tuner App")
})

module.exports = app;