const express = require('express');
const songs = express.Router();

songs.get("/", async (req,res) => {
    res.send("songs");
})


module.exports = songsController;