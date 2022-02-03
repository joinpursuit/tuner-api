const express = require("express");
const songs = express.Router();
const{ getAllSongs, getSong, createSong, deleteSong } = require("../queries/songs.js");
const{ checkTextInputs , checkFavorite } = require("../validations/checkSongs.js")

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

songs.post("/", checkTextInputs , checkFavorite, async (req, res)=>{
    const { body } = req;
    try{
        const createdSong = await createSong(body);
        if(createdSong.id){
            res.status(200).json(createdSong)
        }else{
            res.status(404).json({error: "Song creation error"})
        }

    }catch(err){
        console.log(err);
    }
});

songs.delete("/:id", async (req, res)=>{
    const { id } = req.params;
    try{
        const deletedSong = await deleteSong(id);
        if(deletedSong.id){
            res.status(200).json(deletedSong)
        }else{
            res.status(404).json({error: "Song not found"})
        }
    }catch(err){
        console.log(err)
    }
})

module.exports = songs;