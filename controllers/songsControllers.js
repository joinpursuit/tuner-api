const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  addNewSongs,
  deleteSong,
  updateSong,
} = require("../queries/songs");

songs.get("/", async (_, response) => {
  console.log("GET request to /");

  const allSongs = await getAllSongs();
  response.json(allSongs);
});

songs.get("/:id", async (request, response) => {
  console.log("GET request to /:id");

  const oneSong = await getSong(request.params.id);
  response.status(200).json(oneSong);
});

songs.post("/", async (request, response) => {
  console.log("POST request to /");

  const add = await addNewSongs(request.body);
  response.status(200).json(add);
});

songs.delete("/:id", async (request, response) => {
  console.log("DELETE request to /:id");

  const remove = await deleteSong(request.params.id);
  response.status(200).json(remove);
});

songs.put("/:id", async (request, response) => {
  console.log("PUT request to /:id");

  const update = await updateSong(request.params.id, request.body);
  response.status(200).json(update);
});

module.exports = songs;
