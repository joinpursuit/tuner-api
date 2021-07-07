const express = require("express");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Get ready for the tunes!");
});

app.get("*", (req, res) => {
    res.status(404).send("No music! (claps hands)");
});

module.exports = app;