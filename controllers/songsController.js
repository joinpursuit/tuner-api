const express = require("express");
const songs = express.Router();
// import queries
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require("../queries/songs.js");
// import validations
const { checkName, checkArtist, checkAlbum, checkTime, checkBoolean } = require("../validations/checkSongs");

// INDEX
// new variable `allSongs` which is an array of songs objects. We have to await for the value to come back from the database.
songs.get("/", async (req, res)=>{
    try {
       const allSongs = await getAllSongs();
       
        /* START super bonus */
        const { order, is_favorite } = req.query;
        // `/songs?order=asc` = ascending
        if (order === "asc") {
            allSongs.sort((a,b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)
        }
        // `/songs?order=desc` = descending
        if (order === "desc") {
            allSongs.sort((a,b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : -1)
        }
        //  `/songs?is_favorite=true` = when `is_favorite` is true
        if (is_favorite === "true") {
            const result = allSongs.filter((favorite)=>{
                return favorite.is_favorite === true;
            })
            res.status(200).json(result);
        }
        //  `/songs?is_favorite=false` = when `is_favorite` is true
        if (is_favorite === "false") {
            const result = allSongs.filter((favorite)=>{
                return favorite.is_favorite === false;
            })
            res.status(200).json(result);
        }
        /* END super bonus */

        if (allSongs[0]) {
            res.status(200).json(allSongs);
        } else {
            res.status(500).json({ error: "server error" });
        }
    } catch (err) {
        console.log(err);
    }
});

// SHOW
songs.get("/:id", async (req, res)=>{
    const { id } = req.params;
    try {
        const song = await getSong(id);
        if (song.id) {
            res.status(200).json(song);
        } else {
            // res.status(404).json({ error: "Song not found!" })
            res.redirect("/not-found")
        }
    } catch (err) {
        console.log(err);
    }
})

// CREATE
songs.post("/", checkName, checkArtist, checkAlbum, checkTime, checkBoolean, async (req, res)=>{
    try {
        const createdSong = await createSong(req.body);
        if (createdSong) {
            res.status(200).json(createdSong);
        } else {
            res.status(500).json({ error: "Song creation error. Missing field" })
        }
    } catch (error) {
        res.status(400).json({ error: "Song was not created!" })
    }
})

// DELETE
songs.delete("/:id", async (req, res)=>{
    const { id } = req.params;
        const deletedSong = await deleteSong(id);
        if (deletedSong.id) {
            res.status(200).json(deletedSong);
        } else {
            res.status(404).json({ error: "Song not found!" });
        }
})

// UPDATE
songs.put("/:id", async (req, res)=>{
    const { id } = req.params;
    const { body } = req;
    const updatedSong = await updateSong(id, body);
    if (updatedSong.id) {
        res.status(200).json(updatedSong);
    } else {
        res.status(404).json({ error: "Song not found" });
    }
})

module.exports = songs;