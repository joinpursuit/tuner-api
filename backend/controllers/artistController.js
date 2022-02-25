// DEPENDENCIES
const express = require("express");
const artists = express.Router();
const albumsController = require("./albumController");

const {
  getAllArtists,
  getArtist,
  createArtist,
  deleteArtist,
  updateArtist,
} = require("../../queries/artist");

artists.use("/:artistID/albums", albumsController);

// SHOW
artists.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const artist = await getArtist(id);
    if (artist.id) {
      res.status(200).json(artist);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

// INDEX
artists.get("/", async (req, res) => {
  const { order, band } = req.query;
  const allArtists = await getAllArtists();
  let filteredData;

  if (allArtists[0]) {
    switch (true) {
      case order === "asc":
        allArtists.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        res.status(200).json(allArtists);
        break;
      case order === "desc":
        allArtists.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        res.status(200).json(allArtists);
        break;
      case band === "false":
        filteredData = allArtists.filter((item) => {
          return !item.band;
        });
        res.status(200).json(filteredData);
        break;
      case band === "true":
        filteredData = allArtists.filter((item) => {
          return item.band;
        });
        res.status(200).json(filteredData);
        break;
      default:
        res.status(200).json(allArtists);
        break;
    }
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// CREATE
artists.post("/", async (req, res) => {
  try {
    const artist = await createArtist(req.body);
    res.json(artist);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
artists.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedArtist = await deleteArtist(id);
  if (deletedArtist.id) {
    res.status(200).json(deletedArtist);
  } else {
    res.status(404).json("Artist not found");
  }
});

// UPDATE
artists.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedArtist = await updateArtist(id, req.body);
  res.status(200).json(updatedArtist);
});

// EXPORT
module.exports = artists;
