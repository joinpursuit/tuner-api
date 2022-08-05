const express = require("express");
const songs = express.Router();
const {
  checkIfSongExists,
  getAllSongs,
  getOneSong,
  postNewSong,
  updateOneSong,
  deleteOneSong,
  songOrder,
  songFavoriteFilter,
} = require("../queries/songs");
const {
  checkName,
  checkBoolean,
  checkAdditionalFields,
} = require("../validation/songValidations");

songs.use("/:id", async (req, res, next) => {
  const { id } = req.params;
  const findSong = await checkIfSongExists(id);

  if (!findSong) {
    return res
      .status(404)
      .send(`There are no songs associated with this ID:(${id}).`);
  }
  next();
});

songs.get("/", async (req, res) => {
  const order = req.query.order;
  const favorite = req.query.is_favorite;
  const orderChoice = await songOrder(order);
  const favoriteChoice = await songFavoriteFilter(favorite);
  if (order) {
    return res.status(200).json(orderChoice);
  } else if (favorite) {
    console.log("=== GET /songs order by favorite ", favoriteChoice, " ===");
    return res.status(200).json(favoriteChoice);
  } else {
    const allSongs = await getAllSongs();
    console.log("=== GET /songs ", allSongs, " ===");
    if (allSongs) {
      res.status(200).json(allSongs);
    } else {
      res.status(404).send("No songs found.");
    }
  }
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);
  console.log("=== GET /songs/:id ", song, " ===");
  if (song) {
    res.status(200).json(song);
  } else {
    res.status(404).send(`There are no songs associated with this ID(${id}).`);
  }
});

songs.post(
  "/",
  checkName,
  checkBoolean,
  checkAdditionalFields,
  async (req, res) => {
    const newSong = {
      name: req.body.name,
      artist: req.body.artist,
      album: req.body.album,
      time: req.body.time,
      is_favorite: req.body.is_favorite,
    };
    const newSongs = await postNewSong(newSong);
    console.log("=== POST /songs ", newSongs, " ===");
    if (newSongs) {
      res.status(200).json(newSongs);
    } else {
      res
        .status(404)
        .send(
          `Please make sure you have entered all the required fields and that they are valid.`
        );
    }
  }
);

songs.put(
  "/:id",
  checkName,
  checkBoolean,
  checkAdditionalFields,
  async (req, res) => {
    const { id } = req.params;
    const updateSong = {
      name: req.body.name,
      artist: req.body.artist,
      album: req.body.album,
      time: req.body.time,
      is_favorite: req.body.is_favorite,
    };
    const updatedSong = await updateOneSong(id, updateSong);
    console.log("=== PUT /songs/:id ", updatedSong, " ===");
    if (updatedSong) {
      res.status(200).json(updatedSong);
    } else {
      res
        .status(404)
        .send(
          `Either no song exists with the ID(${id}), You have not entered all the required fields or they are not valid.`
        );
    }
  }
);

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleteSong = await deleteOneSong(id);
  console.log("=== DELETE /songs/:id ", deleteSong, " ===");
  if (deleteSong) {
    res.status(200).json(deleteSong);
  } else {
    res.status(404).send(`No song exists with the ID(${id})`);
  }
});

module.exports = songs;
