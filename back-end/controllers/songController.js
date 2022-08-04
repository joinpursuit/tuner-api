const express = require("express");
const tunes = express.Router();
// const favTunes = require("../models/songs");
// const db = require("../db/dbConfig");
const {
  getAllSongs,
  getASong,
  createSong,
  deleteASong,
  updateASong,
} = require("../queries/tunesqueries");

const {
  checkBoolean,
  checkName,
  checkForNoAdditionalParams,
} = require("../validations/validations");

//INDEX ROUTE
tunes.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs) {
    res.json(allSongs);
  } else {
    res.status(404).json("Error in returning All Songs Index");
  }
});

//SHOW INDIVIDUAL SONGS

tunes.get("/:id", async (req, res) => {
  const { id } = req.params;
  const tune = await getASong(id);
  if (tune) {
    res.status(200).json(tune);
  } else {
    res.status(404).send(`No such anime w/  ID ${req.params.id}`);
  }
});

//CREATE ROUTE

tunes.post(
  "/new",
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
  async (req, res) => {
    const newSong = await createSong(req.body);
    res.json(newSong);
  }
);

module.exports = tunes;

//DELETE ROUTE

tunes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await deleteASong(id);
  if (deleted.id) {
    res.status(200).json(deleted);
  } else {
    res.status(404).json("Bookmark not found");
  }
});

//PUT

tunes.put(
  "/:id",
  checkBoolean,
  checkName,
  checkForNoAdditionalParams,
  async (req, res) => {
    try {
      const updated = await updateASong(req.params.id, req.body);
      res.status(200).json(updated);
    } catch (error) {
      res.status(400).json("Song Not Found");
    }
  }
);
