const express = require('express');
const songs = express.Router();
const { getAllSongs, getSong, newSong } = require('../queries/songs')

songs.get('/', async (req,res) => {
    const allSongs = await getAllSongs();
    res.json(allSongs);
});

//show
songs.get('/:id', async (req,res) => {
    const { id } = req.params;
    try {
        const song = await getSong(id);
        if (song['id']) {
            res.json(song);
        }else {
            throw `No song found at index ${id}`
        }
    }catch (e) {
        res.status(404).json({ error: 'Resource not found' , message : e})
    }
});



//create 
songs.post('/', async (req,res) => {
    try {
        const song = await newSong(req.body);
        if(song['id']) {
            res.json(song);
        } else {
            console.log(`Database: ${song}`)
        }
    } catch (e) {
        res.status(404).json({error: e})
    }
})

module.exports = songs;