const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong } = require("../queries/songs");
const { checkName, checkFavorite } = require("../validations/checkSongs");

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

songs.post('/', checkName, checkFavorite, async (req, res) => {
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
});

module.exports = songs;
