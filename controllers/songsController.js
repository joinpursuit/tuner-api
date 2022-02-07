const express = require('express');
const { validSong } = require('../helpers/errors');
const songs = express.Router();
const { getAllSongs , createSong , getSong, deleteSong, updateSong } = require('../queries/songs')

//INDEX
songs.get('/', async (_, res) => {
    const songs = await getAllSongs();
    // console.log(songs)
    if(songs.length === 0){
        res.status(500).json({error: 'server error'})
    }
    res.status(200).json(songs)
});
// CREATE
songs.post('/', validSong, async (req, res) => {
    try{
        const newSong = await createSong(req.body)
        res.status(200).json(newSong)
    }catch(err){
        throw err
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
            res.status(404).json({error: "error"})
        } 
    } catch (err) {
        return err;
    }
})
//DESTROY
songs.delete('/:id', async (req, res) => {
    const {id} = req.params;
    
   try{
        const song = await deleteSong(id)
        res.status(200).json(song)
    } catch (error) {
        res.status(404).json({error: error})
    }     
    
})
//UPDATE
songs.put("/:id", async (req, res) => {
    const updatedSong = await updateSong(req.params.id, req.body);
      // If there is an error and object is returned which is truthy. Therefore we used .id to check that the updatedSong variable holds the keys and volume we want. 

    // since we used the "one" sql method, which returns an object, if the call to the database is successful we can use dot notation in our conditional for error handling
    if(updatedSong.id) {
        res.status(200).json(updatedSong);
    } else {
        res.status(404).json({error: "Song does not exist"})
    }
})

module.exports = songs;