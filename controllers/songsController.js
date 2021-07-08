const express = require("express");
const songs = express.Router();
//Have to destructure
const {getAllSongs, getASong, addASong, updateSong, deleteSong} = require("../queries/songs.js")

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs()
  res.json( allSongs );
});

songs.get("/:id", async (req, res) => {
  const {id} = req.params
  try {
    const song = await getASong(id)
    if(song.id) {
      res.json(song)
    } else {
      throw song
    }
  } catch (error) {
    res.redirect("/404")
  }
});

songs.post("/", async (req, res) => {
  const newSong = await addASong(req.body)
  res.json(newSong)
});

songs.delete("/:id", async (req, res) => {
  const {id} = req.params
  try {
    const d = await deleteSong(id)
    if(d.id){
      res.status(200).json(d)
    } else {
      throw "resource not found"
      //Customize error msg 
    }
  } catch (error) {
    res.status(404).json({error: error, message: error.message})
  }
})

songs.put("/:id", async (req,res)=> {
  const {id} = req.params;
  try {
    const update = await updateSong(id,req.body)
    if(update.id) {
      res.status(200).json(update)
    } else {
      throw "resource not found"
    }
  } catch (error) {``
    res.status(404).json({error: error, message: error.message})
  }
})



module.exports = songs;
