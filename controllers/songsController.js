//DEPENDENCIES
const express = require("express")
const songs = express.Router()
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require("../queries/songs")

// Index
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs()
    res.json(allSongs)
})

// Show
songs.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const bookmark = await getSong(id)
        if (!bookmark.id) {
            res.send("This song id does not exist")
        } else {
            res.json(bookmark)
        }
    } catch (e) {
        console.log(`Error: ${e}`)
        res.json({ Error: `${e}`})
    }
})

// Create
songs.post("/", async (req, res) => {
    try {
        const newSong = await createSong(req.body)
        if (newSong.id) {
            res.json(newSong)
        } else {
            console.log(`Database Error: ${newSong}`)
            throw `Error adding ${req.body} to the database`
        }
    } catch (e) {
        console.log(`Error on create route: ${e}`)
        res.status(404).json({ Error: e})
    }
})

// Delete
songs.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const deletedSong = await deleteSong(id)
        if (deletedSong["name"]) {
            res.status(200).json(deletedSong)
        } else {
            console.log("Error in Delete Route")
            throw "Resource not found"
        }
    } catch (e) {
        console.log(`Error in Delete Route - ${e}`)
        res.json({Error: `Delete Route - ${e}`})
    }
})

// Update
songs.put("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const song = await updateSong(req.body, id)
        if (song["name"]) {
            res.status(200).json({song})
        } else {
            res.send("Song name required")
        }
    } catch (e) {
        console.log(`Error in server: ${e}`)
        return e
    }
})


// EXPORTS
module.exports = songs