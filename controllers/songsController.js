const express = require("express");
const songs = express.Router();

songs.get("/", (req, res) => {
    res.json({ status: "gucci" });
});

module.exports = songs;