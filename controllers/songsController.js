const express = require('express');
const songs = express.Router();
const { getAllSongs , createSong , getSong} = require('../queries/songs')

//INDEX
songs.get('/', async (_, res) => {
    const songs = await getAllSongs();
    console.log(songs)
    if(songs.length === 0){
        res.status(500).json({error: 'server error'})
    }
    res.status(200).json(songs)
});
// CREATE
songs.post('/', async (req, res) => {
    try{
        const newSong = await createSong(req.body)
        res.status(200).json(newSong)
    }catch(err){
        res.status(400).json({ error: err})
    }
    
})
//SHOW
songs.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const song = await getSong(id)
        if(song.id){
            res.status(200).json(song)
        }else {
            res.redirect("/notfound")
        } 
    } catch (err) {
        return err;
    }
})