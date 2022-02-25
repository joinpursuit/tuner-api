const express = require("express");
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

const song = express.Router();

song.get("/", async (req, res) => {
  const songs = await getAllSongs();
  console.log(songs);
  res.status(200).json(songs);
});

song.get("/:id", async (request, response) => {
  console.log("GET request to song/:id");
  const song = await getSong(request.params.id);
  if (song.id) {
    response.status(200).json(song);
  } else {
    response.status(500).json({ error: "server error" });
  }
});

song.post("/", async (request, response) => {
  const createdSong = await createSong(request.body);
  response.status(200).json(createdSong);
});

song.delete("/:id", async (request, response) => {
  console.log("DELETE song from /:id");
  const deletedSong = await deleteSong(request.params.id);
  if (deletedSong.id) {
    response.status(200).json(deletedSong);
  } else {
    response.status(404).json({ error: "no id found" });
  }
});

song.put("/:id", async (request, response) => {
  const updatedSong = await updateSong(request.params.id, request.body);
  if (updatedSong.id) {
    response.status(200).json(updatedSong);
  } else {
    response.status(404).json({ error: "Song does not exist" });
  }
});
// song.post('/new', async (req, res) => {
//     const newSong = req.body
//     newSong.push(newSong);
//     res.status(200).json(newSong)
// })

module.exports = song;
