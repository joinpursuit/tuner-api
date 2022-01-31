const express = require("express");
const songs = express.Router();
const { getAllSongs, addNewSong } = require("../queries/songs");

songs.get("/", async (_, response) => {
  const songs = await getAllSongs();
  response.json(songs);
});

songs.get("/:index", (request, response) => {
  songsArray[request.params.index]
    ? response.json(songsArray[request.params.index])
    : response.status(404).json({ error: "Page not found" });
});

songs.post("/", (request, response) => {
  songsArray.push(request.body);
  response.json(songsArray);
});

songs.delete("/:index", (request, response) => {
  if (songsArray[request.params.index]) {
    const [deletedTransaction] = songsArray.splice(request.params.index, 1);
    response.status(200).json(songsArray);
  }
});
songs.put("/:index", (request, response) => {
  songsArray[request.params.index] = request.body;
  response.status(200).json(songsArray);
});

module.exports = songs;
