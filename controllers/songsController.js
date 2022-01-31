const express = require('express');
const songs = express.Router();
const {getAllSongs, getSong} = require('../queries/songs');


songs.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
    console.log(allSongs)
    res.status(200).json(allSongs)
});

songs.get("/:id", async (req, res) =>{
    const {id} = req.params
    const song = await getSong (id);
    if (song) {
        res.status(200).json(song)
    }else{
        res.status(404).json({ error: `Page not found!` });
    }
})

songs.post("/", async (req, res) =>{
    const newTrack = req.body
    const {body} = req
    const {name, artist, album,time,} = body
    if(name|| artist || album || time){
        res.status(200).json(newTrack)
    }else{
        res.status(400).json({error: `Complete all fields`})
    }
})

//unsure what to put for create song since the songs have a time. consult with sev. 

//honestly not sure if that {body} = request is correct syntax check with sev

// this is probably too many const... refactor later. 

//check if she wants track or song. 

//have partner double check this creat song post

songs.delete("/id", async (req, res)=>{
    const {id} = req.params;
    const deleteSong = await deleteSong(id)
    res.status(200).json(deleteSong)
})

// am I supposed to be using 200 for all of these? consult study guide. 
module.exports = songs; 