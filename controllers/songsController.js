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
        res.status(404).json({ Error: `Page not found!` });
    }
})

module.exports = songs; 