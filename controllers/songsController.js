const express = require("express");
const router = express.Router();
const { getAllSongs } = require("../queries/songs");

router.get("/", async (req, res) => {
  const songs = await getAllSongs();
  res.json(songs);
});

module.exports = router;
