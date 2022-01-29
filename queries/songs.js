const database = require("../database/dbConfig");

// this function queries our db for us, which can take a while so we want to wait for it to finish.
const getAllSongs = async () => {
    try {
        const songs = await database.any('SELECT * FROM songs');
        return songs
    } catch(err) {
        return err;
    }
};


// dont worry about this code, it'll come up next week

const addNewSongs = async(newSongs) => {
    try {
        const songs = await database.any('INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2) RETURNING *', [newSongs.name, newSongs.release, ]);
        return songs
    } catch (error) {
        return error
    }
}

// here we are exporting our functions to use in our controllers
module.exports = {
    getAllSongs,
    addNewSongs
};