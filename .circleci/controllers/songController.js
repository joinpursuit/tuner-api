const express = require("express");
const songs = express.Router();
const { getSongs } = require("../search/songs.js");

songs.get("/", async (req, res) => {
    const songs = await getSongs();
    if(songs[0]){
        res.status(200).json(songs);
    }else{
        res.status(500).json({ error: "server error" });
    }
});

module.exports = songs; 