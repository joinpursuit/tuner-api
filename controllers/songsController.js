const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, updateSong, deleteSong } = require("../queries/songs");

const dataVerification = (req, res, next) => {
    const typeMatch = (type, ...sameTypeItems) => {
        for (const item of sameTypeItems) {
            if (typeof item !== type)
                return false;
        }
        return true;
    }

    const objShouldHavePairs = 5;
    if (Object.keys(req.body).length !== objShouldHavePairs)
        return res.json({ error: "Invalid data pairs found." });

    const { name, artist, album, time, is_favorite } = req.body;
    if (!typeMatch("string", name, artist, album, time) || !typeMatch("boolean", is_favorite))
        return res.json({ error: "Invalid data type found." });

    next();
}

songs.get("/", async (req, res) => {
    const { order, is_favorite } = req.query;
    const allSongs = await getAllSongs(order, is_favorite);
    res.json(allSongs);
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const song = await getSong(id);
        if (!song.id) {
            console.log(`Database error: ${song}`);
            throw `There is no song with id: ${id}`;
        }
        res.json(song);
    } catch (e) {
        res.status(404).json({ error: "Resource not found.", message: e });
    }
});

songs.post("/", dataVerification, async (req, res) => {
    try {
        const newSong = await createSong(req.body);
        if (!newSong.id) {
            console.log(`Database error: ${newSong}`);
            throw `Error adding ${req.body} to the database.`;
        }
        res.json(newSong);
    } catch (e) {
        res.status(404).json({ error: "Resource not found.", message: e });
    }
});

songs.put("/:id", dataVerification, async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSong = await updateSong(id, req.body);
        if (!updatedSong.id) {
            console.log(`Database error: ${updatedSong}`);
            throw `Error updating ${req.body} to the database.`;
        }
        res.json(updatedSong);
    } catch (e) {
        res.status(404).json({ error: "Resource not found.", message: e });
    }
});

songs.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSong = await deleteSong(id);
        if (!deletedSong.id) {
            console.log(`Database error: id ${id} not found.`);
            throw `Error deleting id ${id} in database.`;
        }
        res.status(200).json(deletedSong);
    } catch (e) {
        res.status(404).json({ error: "Resource not found.", message: e });
    }
});

module.exports = songs;
