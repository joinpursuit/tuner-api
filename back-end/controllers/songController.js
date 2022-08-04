//dependencies
const express = require("express");
const songs = express.Router();
const { getAllSongs, getOneSong, postNewSong } = require("../queries/songs");

//import the validation checks
const {
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
} = require("../validation/validation");

//get the database
const db = require("../db/dbConfig");

//index route of songs
songs.get("/", async (req, res) => {
  //any() coming from the pg promise, first argument is sql command,
  //.any will take anything the sql command return
  const allSongs = await getAllSongs();
  if (allSongs) {
    res.json({ success: true, payload: allSongs });
  } else {
    res.status(404).json({ success: false, message: "Something went wrong" });
  }
});

//route get individual song back
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);

  if (song) {
    res.status(200).json({ sucess: true, payload: song });
  } else {
    res.status(404).send(`No such song with id of ${id}`);
  }
});

//route to post a new song
songs.post(
  "/new",
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
  async (req, res) => {
    const newSong = req.body;

    try {
      const postedSong = await postNewSong(newSong);
      res.status(200).json({ success: true, song: postedSong });
    } catch (error) {
      res.status(400).json({ error: "Unable to add the song" });
    }
  }
);

//export the sub router of songs
module.exports = songs;
