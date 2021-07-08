const express = require("express");
const songs = express.Router();

songs.get("/", async (req, res) => {
    res.send("Hello World");
});

module.exports = songs;