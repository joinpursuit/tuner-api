const express = require("express");
const {
  getAllSongs,
  getSong,
  newSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");
const songs = express.Router();

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (song["id"]) {
      res.json(song);
    } else {
      throw song;
    }
  } catch (e) {
    res.redirect("/404");
  }
});

songs.post("/", async (req, res) => {
  const song = await newSong(req.body);
  res.json(song);
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSong = await deleteSong(id);
    if (deletedSong.id) {
      res.status(200).json(deletedSong);
    } else {
      throw "Resource not found";
    }
  } catch (e) {
    res.status(404).json({error: e, message: e.message})
  }
});

songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  try{
    const updatedSong = await updateSong(id, req.body);
    if (updatedSong.id) {
        res.status(200).json(updatedSong);
    } else {
        throw "Resource not found"
    } 
  } catch (e){
    res.status(404).json({error: e, message: e.message})
  }
 

});

module.exports = songs;
