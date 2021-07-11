const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  addSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

//index
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

//show
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (song.id) {
      res.json(song);
    } else {
    //   console.log(`Database error: ${song}`);
      throw `There is no song with id: ${id}`;
    }
  } catch (error) {
    res.status(404).json({ error: "Resource not found.", message: error });
  }
});

//create
songs.post("/", async (req, res) => {
  try {
    const song = req.body;
    const newSong = await addSong(song);
    res.json(newSong);
  } catch (error) {
    return error;
  }
});

//update
songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
  });

//delete
//how to write a validation that shows the data that was deleted
songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await deleteSong(id);
    res.status(200).json(`Song with id ${id} has been deleted.`);
});

module.exports = songs;
