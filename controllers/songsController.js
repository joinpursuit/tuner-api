// Dependencies
const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

// Index
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json({
    success: true,
    payload: allSongs,
  });
});

// Create
songs.post("/add", async (req, res) => {
  try {
    const newSong = await createSong(req.body);
    if (newSong["id"]) {
      res.json({
        success: true,
        payload: newSong,
      });
    } else {
      console.log(`Database error: ${newSong}`);
      throw `Error adding ${req.body} to the database.`;
    }
  } catch (error) {
    res.status(404).json({
      error: "Song not added.",
      message: error,
    });
  }
});

// Show
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (song["id"]) {
      res.json({
        success: true,
        payload: song,
      });
    } else {
      console.log(`Database error: ${song}`);
      throw `There is no song with the id: ${id}`;
    }
  } catch (error) {
    res.status(404).json({
      error: "Resource not found.",
      message: error,
    });
  }
});

// Destroy
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  res.status(200).json({
    success: true,
    payload: deletedSong,
  });
});

// Update
songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  res.status(200).json({
    success: true,
    payload: updatedSong,
  });
});

module.exports = songs;
