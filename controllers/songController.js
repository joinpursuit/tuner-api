const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require('../queries/songs');
const { checkName, checkFavorite, checkParams,} = require('../validation/validation.js');



//INDEX
songs.get("/", async (req, res) => {
    try{
        const allSongs = await getAllSongs();
        if (allSongs[0]) {
            res.status(200).json(allSongs);
        } else {
            res.status(500).json({ error:  'server error' });
        } 
    } catch(error){
        console.log(error)
    }    
})
// Single Song
songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    try{
     const song = await getSong(id);  
      if(song.id) {
        res.status(200).json(song);  
      } else {
        res.status(404).json({error: 'Song not found'}); 
      }
    }catch(error){
     console.log(error);
 }
});


// CREATE A SONG
songs.post('/', checkName, checkFavorite, checkParams, async (req, res) => {
   const { body } = req;
try {
    const createdSong = await createSong(body);
    if(createdSong.id) {
        res.status(200).json(createdSong);
    } else {
        res. status(500).json({error: "Song creation error"})
    }
 } catch(error){
        console.log(error);
 }
})

songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong.id) {
        res.status(200).json(deletedSong);
      } else {
        res.status(404).json({error: "Song not found"});
      }
  })


songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const updatedSong = await updateSong(id, body);
    if(updatedSong.id) {
        res.status(200).json(updatedSong);
    } else {
        res.status(404).json({error: "Song not Found"}); 
    }  
  });

module.exports = songs;