const express = require('express');
const songs = express.Router();
const { getAllSongs, getSong, createSong, deleteSong } = require("../queries/song.js")

songs.get("/", async (req,res)=>{
    const allSongs = await getAllSongs();
    if(allSongs[0]){
        res.json(allSongs);
    }else{
      res.status(500).json({error: "Server Error"});
    }
});

songs.get("/:id", async (req,res)=>{
  const { id } = req.params
  try{
    const song = await getSong(id);
    if(song.id){
      res.status(200).json(song);
    }else{
      res.status(500).json({error: "Server Error"})
    }
  }catch(err){
    console.log(err)
  }
});

songs.post("/", async (req,res)=>{
  const { body } = req;
  try{
    const createdSong = await createSong(body)
    if(createdSong.id){
      res.status(200).json(createdSong);
    }else{
      res.status(500).json({Error: "Bookmark Creation Error!"});
    }
  }catch(err){
    console.log(err);
  }
});

songs.delete("/:id", async (req,res)=>{
  cons
})

module.exports = songs