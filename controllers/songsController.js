//using express
const express = require("express");
//want to use router method to list as starting path assists with routing
const songs = express.Router();
const {
  getAllSongs,
  getASong,
  addASong,
  deleteASong,
} = require("../queries/songs");

songs.get("/", async (request, response) => {
  const songs = await getAllSongs();
  console.log("this is the songs page working");
  response.send(songs);
});

songs.get("/:id", async (request, response) => {
  const aSong = await getASong(request.params.id);
  response.status(200).json(aSong);
});

songs.post("/", async (request, response) => {
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

module.exports = songs;
