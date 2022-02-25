// DEPENDENCIES
const express = require("express");
const albums = express.Router({ mergeParams: true });
const songsController = require("./songsController");

const {
  getAllAlbums,
  getAlbum,
  createAlbum,
  deleteAlbum,
  updateAlbum,
  getAlbumArtist,
} = require("../../queries/albums");

albums.use("/:albumID/songs", songsController);

// SHOW
albums.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const album = await getAlbum(id);
    if (album.id) {
      res.status(200).json(album);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

// INDEX
albums.get("/", async (req, res) => {
  const { order } = req.query;
  const { artistID } = req.params;

  if (artistID) {
    try {
      const album = await getAlbumArtist(artistID);
      if (album[0]) {
        res.status(200).json(album);
      } else {
        res.status(404).json({ error: "not found" });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    const allAlbums = await getAllAlbums();
    if (allAlbums[0]) {
      switch (true) {
        case order === "asc":
          allAlbums.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return -1;
            }
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return 1;
            }
            return 0;
          });
          res.status(200).json(allAlbums);
          break;
        case order === "desc":
          allAlbums.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return -1;
            }
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return 1;
            }
            return 0;
          });
          res.status(200).json(allAlbums);
          break;
        default:
          res.status(200).json(allAlbums);
          break;
      }
    } else {
      res.status(500).json({ error: "server error" });
    }
  }
});

// CREATE
albums.post("/", async (req, res) => {
  try {
    const album = await createAlbum(req.body);
    res.json(album);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
albums.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedAlbum = await deleteAlbum(id);
  if (deletedAlbum.id) {
    res.status(200).json(deletedAlbum);
  } else {
    res.status(404).json("Album not found");
  }
});

// UPDATE
albums.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedAlbum = await updateAlbum(id, req.body);
  res.status(200).json(updatedAlbum);
});

// EXPORT
module.exports = albums;
