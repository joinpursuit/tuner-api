const express = require("express");

const {
  getAllSongs,
  getSong,
  addNewSongs,
  deleteSong,
  updateSong,
} = require("../queries/songs");

const songs = express.Router();

// All Songs
songs.get("/", async (_, response) => {
  console.log("GET request to /songs");
  const allSongs = await getAllSongs();
  if (getAllSongs.length === 0) {
    response.status(500).json({ error: "server error" });

    return;
  }

  response.status(200).json(allSongs);
});

// Show Song
songs.get("/:id", async (request, response) => {
  console.log("GET request to /songs/:id");
  const song = await getSong(request.params.id);
  if (song.id) {
    response.status(200).json(song);
  } else {
    response.status(404).json("Song does not exist");
  }
});

// Create Song
songs.post("/", async (request, response) => {
  try {
    console.log("POST request to /songs");
    const newSong = await addNewSongs(request.body);
    response.json(newSong);
  } catch (error) {
    response.status(400).json({ error: error });
  }
});

// Delete Song
songs.delete("/:id", async (request, response) => {
  console.log("DELETE request to /songs/:id");
  const deletedSong = await deleteSong(request.params.body);
  if (deleteSong.id) {
    response.status(200).json(deletedSong);
  } else {
    response.status(404).json("Song does not exist.");
  }
});

// Update Song
songs.put("/:id", async (request, response) => {
  console.log("UPDATE request to /songs/:id");
  const updatedSong = await updateSong(request.params.id, request.body);
  if (updatedSong.id) {
    response.status(200).json(updatedSong);
  } else {
    response.status(404).json("Song does not exist.");
  }
});

module.exports = songs;
