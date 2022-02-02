const express = require("express");
const songs = express.Router();
const{ getAllSongs, getSong } = require("../queries/songs.js");

songs.get("/", async (req,res)=>{
        const allSongs = await getAllSongs();

        if(songs.length){
            res.status(200).json(allSongs);
        }else{
            res.status(500).json({error: "Server Error"});
        }
    
});

songs.get("/:id", async (req, res)=>{
    const { id } = req.params;
    try{
        const song = await getSong(id);
        if(song.id){
            res.status(200).json(song)
        }else{
            res.status(404).json({error: "Song Not Found"});
        }

    }catch(err){
        console.log(err)
    }
});

module.exports = songs;