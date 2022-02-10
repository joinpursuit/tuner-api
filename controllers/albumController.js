const express = require("express");
const {
  getArtistAlbums,
  getAlbum,
  newAlbum,
  updateAlbum,
  deleteAlbum,
} = require("../queries/albums");

const albums = express.Router({mergeParams: true});


albums.get('/', async (req, res) => {
  const albums = await getArtistAlbums(req.params.id);
  if (albums.length) {
    res.status(200).json(albums);
      } else {
        res.status(404).json({ error: "albums could not be found" });
      }
})


  albums.get("/:id", async (req, res) => {
  console.log("GET to /albums/:id");
  const album = await getAlbum(req.params.id);
  if (album) {
    res.status(200).json(album);
  } else {
    res.status(404).json({ error: "album not found" });
  }
});

albums.post("/new", async (req, res) => {
  console.log("POST to /albums/new");
  const album = req.body;
  const albums = await newAlbum(album);
  if (albums[0]) {
    res.status(200).json(albums);
  } else {
    res.status(404).json({ error: "failed to create new album" });
  }
});

albums.put("/:id/edit", async (req, res) => {
  console.log("PUT to /albums/:id/edit");
  let { id } = req.params;
  let newInfo = req.body;
  const album = await updateAlbum(id, newInfo);
  if (album) {
    res.status(200).json(album);
  } else {
    res.status(404).json({ error: "album could not be updated" });
  }
});

albums.delete("/:id", async (req, res) => {
  console.log("DELETE to /albums/:id");
  const { id } = req.params;
  const album = await deleteAlbum(id);
  if (album) {
    res.status(200).json(album);
  } else {
    res
      .status(404)
      .json({ error: `album with id of ${id} could not be deleted` });
  }
});

//Get All albums that belongs to certain anime
// albums.get('/', ())

module.exports = albums;
