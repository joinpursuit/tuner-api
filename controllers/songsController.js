const express = require("express");
const {
  getAllSongs,
  getASong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

const albumsController = require('./albumController')

const songs = express.Router({mergeParams: true});
songs.use('/:id/albums', albumsController)

songs.get("/", async (request, response) => {
  const { order, is_favorite } = request.query;
  const songs = await getAllSongs();
  if (order || is_favorite) {
    if (order === "asc") {
      songs.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      });
      response.send(songs);
    } else if (order === "desc") {
      songs.sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      });
      response.send(songs);
    } else if (is_favorite === "true") {
      let isFavoriteTrue = songs.filter((fav) => fav.is_favorite === true);

      response.send(isFavoriteTrue);
    } else if (is_favorite === "false") {
      let isFavoriteFalse = songs.filter((fav) => fav.is_favorite === false);
      response.send(isFavoriteFalse);
    }
  } else {
    response.send(songs);
  }
});

songs.get("/:id", async (request, response) => {
  const aSong = await getASong(request.params.id);
  response.status(200).json(aSong);
});

songs.post("/", async (request, response) => {
  console.log("GET request to /post");
  const newSong = await createSong(request.body);
  response.status(200).json(newSong);
});

songs.delete("/:id", async (request, response) => {
  console.log("GET request to /delete");
  const deletedSong = await deleteSong(request.params.id);
  if (deletedSong.id) {
    response.status(200).json(deletedSong);
  } else {
    response.status(404).json("Song not found!");
  }
});

//UPDATE
songs.put("/:id", async (request, response) => {
  
  try {
    const updatedSong = await updateSong(request.params.id, request.body);
    response.status(200).json(updatedSong);
  } catch (error) {
    console.log(error);
    response.status(404).json({ error: "Song not found" });
  }
});

module.exports = songs;
