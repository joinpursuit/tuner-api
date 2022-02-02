const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong } = require("../queries/songs.js");

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }  
});

// SHOW
songs.get("/:id", async (req, res)=>{
  const { id } = req.params;
  try{
    const song = await getSong(id);
    if(song.id){
      res.status(200).json(song);
    } else {
      res.status(500).json({error: "server error"});
    }
  }catch(err){
    console.log(err)
  }
});

module.exports = songs;