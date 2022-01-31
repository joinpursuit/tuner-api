const express = require("express");
const songs = express.Router();
const { getAllsongs } = require("../queries/songs.js");

songs.get("/", async (req, res)=>{
    const allsongs = await getAllsongs();
    if(allsongs[0]){
        res.status(200).json(allsongs);
    } else {
        res.status(500).json({ error: "server error" });
    }
})

module.exports = songs;