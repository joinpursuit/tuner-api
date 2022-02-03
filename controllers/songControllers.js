const express = require("express");

const songs = express.Router();

const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

songs.get("/", async (_, response) => {
  console.log("GET request to /songs");
  const allSongs = await getAllSongs();
  if (!allSongs[0]) {
    response.status(500).json({ error: "server error" });
  } else {
    response.status(200).json(allSongs);
  }
});

songs.get("/:id", async (request, response) => {
  console.log("GET request to /songs/:id");
  const song = await getSong(request.params.id);
  console.log(song);
  if (!song.id) {
    response.status(500).json({ error: "Song not listed" });
  } else {
    response.status(200).json(song);
  }
});

songs.post("/", async (request, response) => {
  const song = await createSong(request.body);
  if (!createSong) {
    response.status(500).json({ error: "Song could not be posted" });
  } else {
    response.status(200).json(song);
  }
});

songs.delete("/:id", async (request, response) => {
  const deletedSong = await deleteSong(request.params.id);
  if (!deletedSong.id) {
    response.status(404).json({ error: "Song not listed" });
  } else {
    response.status(200).json(deletedSong);
  }
});

songs.put("/:id", async (request, response) => {
  const updatedSong = await updateSong(request.params.id, request.body);
  if (updatedSong) {
    response.status(200).json(updatedSong);
  } else {
    response.status(500).json({ error: "Song could not be updated" });
  }
});

module.exports = songs;
