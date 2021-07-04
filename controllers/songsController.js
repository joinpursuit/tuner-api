//DEPENDENCIES
const express = require("express");



//CONFIGURATION
const songs = express.Router();
const { getAllSongs, getSong, newSong } = require("../queries/songs.js");



//ROUTES

//Index Route
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    res.json({
        success : true,
        payload : allSongs
    })
});

//Show Route
songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    
    if(song.received === 0){
        res.status(404).json({error : "not found"});
    }else{
        res.json({
            success: true,
            payload: song
        });
    }
});



//Create Route
songs.post("/", async (req, res) => {
    const song = await newSong(req.body);
    res.json({
        success: true,
        payload: song
    })
})

//EXPORTS
module.exports = songs;