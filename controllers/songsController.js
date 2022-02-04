const express = require("express");

const {
  getAllSongs,
  getSong,
  createSong,
  updateSong,
} = require("../queries/songs");

const songs = express.Router();

songs.get("/", async (_, response) => {
  console.log("GET request to /songs");
  const allSongs = await getAllSongs();
  if (allSongs.length === 0) {
    response.status(500).json({ error: "server error" });

    return;
  }

  response.status(200).json(allSongs);
});

songs.get("/:id", async (request, response) => {
  console.log("GET request to /songs/:id");
  const song = await getSong(request.params.id);
  response.status(200).json(song);
});

songs.post("/", async (request, response) => {
  const song = await createSong(request.body);

  response.status(200).json(song);
});

songs.delete("/:id", async (req, res) => {
  const deletedSong = await deleteSong(req.params.id);
  console.log(deletedSong);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Song does not exist");
  }
});

songs.put("/:id"),
  async (req, res) => {
    const updatedSong = await updateSong(req.params.id, req.body);
    if(updatedSong.id){
    res.status(200).json(updatedSong);
    }else {
        res.status(404).json("Song does not exist");
    }
  };
module.exports = songs;
