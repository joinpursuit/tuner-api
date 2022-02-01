const express = require("express");
const songs = express.Router();
const{ getAllSongs } = require("../queries/songs.js");

songs.get("/", async (req,res)=>{
        const allSongs = await getAllSongs();

        if(songs.length){
            res.status(200).json(allSongs);
        }else{
            res.status(500).json({error: "Server Error"});
        }
    
});

module.exports = songs;