const { request } = require("express");
const express = require("express");
const songs = express.Router();
const { getAllSongs, addNewSongs } = require("../queries/songs");

songs.get("/", async (_, response) => {
  console.log("GET request to /songs");
  const allSongs = await getAllSongs();

  response.status(200).json(allSongs);
});

songs.get("/:id", async (_, response) => {
  console.log("GET request to /songs/:id");
  const song = await getAllSongs(request.params.id);

  response.status(200).json(song);
});

songs.post("/", (request, response) => {
  songsArray.push(require.body);
  response.json(songsArray);
});

songs.delete("/:index", (request, response) => {
  if (songsArray[require.params.index]) {
    const [deletedSongs] = songsArray.splice(require.params.index, 1);
    response.status(200).json(songsArray);
  }
});

songs.put("/", async (request, response) => {
  const song = await addNewSongs(request.body);
  response.status(200).json(song);
});

module.exports = songs;
