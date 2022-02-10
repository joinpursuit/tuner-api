//using express
const express = require("express");
//want to use router method to list as starting path assists with routing
const songs = express.Router();
const {
  getAllSongs,
  getASong,
  addASong,
  deleteASong,
  updateSong,
} = require("../queries/songs");

songs.get("/", async (request, response) => {
  const songs = await getAllSongs();
  response.send(songs);
});

songs.get("/:id", async (request, response) => {
  const aSong = await getASong(request.params.id);
  response.status(200).json(aSong);
});

songs.post("/new", async (request, response) => {
  console.log(request.body);
  const newSong = await addASong(request.body);
  response.status(200).json(newSong);
});

songs.delete("/:id", async (request, response) => {
  const deletedSong = await deleteASong(request.params.id);
  if (deletedSong.id) {
    response.status(200).json(deletedSong);
  } else {
    response.status(404).json({ error: "Page Does Not Exist" });
  }
});

songs.put("/:id", async (request, response) => {
  const changedSong = await updateSong(request.params.id, request.body);
  response.status(200).json(changedSong);
});

module.exports = songs;
