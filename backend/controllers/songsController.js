// DEPENDENCIES
const express = require("express");
const songs = express.Router({ mergeParams: true });

const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSongs,
} = require("../../queries/songs");

const {
  checkTitle,
  checkBoolean,
  validateURL,
} = require("../../validations/checkSongs");

// SHOW
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (song.id) {
      res.status(200).json(song);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

// INDEX
songs.get("/", async (req, res) => {
  const { order, is_favorite } = req.query;
  const { albumID } = req.params;

  let filteredData;

  if (albumID) {
    try {
      const albumSongs = await getSongArtist(albumID);
      console.log(albumSongs);
      if (albumSongs[0]) {
        res.status(200).json(albumSongs);
      } else {
        res.status(404).json({ error: "Artist songs not found" });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
      switch (true) {
        case order === "asc":
          allSongs.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return -1;
            }
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return 1;
            }
            return 0;
          });
          res.status(200).json(allSongs);
          break;
        case order === "desc":
          allSongs.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return -1;
            }
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return 1;
            }
            return 0;
          });
          res.status(200).json(allSongs);
          break;
        case is_favorite === "false":
          filteredData = allSongs.filter((item) => {
            return !item.is_favorite;
          });
          res.status(200).json(filteredData);
          break;
        case is_favorite === "true":
          filteredData = allSongs.filter((item) => {
            return item.is_favorite;
          });
          res.status(200).json(filteredData);
          break;
        default:
          res.status(200).json(allSongs);
          break;
      }
    } else {
      res.status(500).json({ error: "server error" });
    }
  }
});

// CREATE
songs.post("/", checkBoolean, checkTitle, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Song not found");
  }
});

// UPDATE
songs.put("/:id", checkTitle, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSongs(id, req.body);
  res.status(200).json(updatedSong);
});

// EXPORT
module.exports = songs;
