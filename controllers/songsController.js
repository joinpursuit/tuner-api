const express = require('express');
const songs = express.Router();
const { getAllSongs, getSong, newSong, deleteSong, updateSong, } = require('../queries/songs')

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

//delete 
songs.delete("/:id", async (req,res) => {
    const {id} = req.params;
    try {
        const deletedSong = await deleteSong(id);
        if (deletedSong.id) {
            res.status(200).json(deletedSong)
        } else {
            throw 'Resource not found.';
        }
    } catch (err) {
        res.status(404).json({err: e});
    }
});

//put
songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedSong = await updateSong(id, req.body);
        if (updatedSong.id) {
            res.status(200).json(updatedSong);
        }else {
            throw 'Resource not found'
        }
    } catch (e) {
        res.status(404).json({err: e , message : e});
    }
});

module.exports = songs;