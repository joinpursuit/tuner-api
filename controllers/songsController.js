const express = require('express');
const songs = express.Router();
const { getAllSongs } = require("../queries/song.js")

songs.get("/", async (req,res)=>{
    const allSongs = await getAllSongs();
    if(allSongs[0]){
        res.json(allSongs);
    }else{
      res.status(500).json({error: "Server Error"});
    }
});

module.exports = songs