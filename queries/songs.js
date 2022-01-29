
const db = require('../db/dbConfig');

const getAllSongs = async () => {
    try {
        const songs = await db.any('SELECT * FROM songs');
        return songs
    } catch(err) {
        return err
    }
};

const getOneSong = async (index) => {
    try {
        const song = await db.any(`SELECT * FROM songs WHERE id = ${index}`);
        return song
    } catch(err) {
        return err
    }
};

const addNewSong = async (newSong) => {
    try {
        const song = await db.any(
            `INSERT INTO 
                songs (name, artist, album, time, is_favorite)
             VALUES
                ('${newSong.name}', '${newSong.artist}', '${newSong.album}', '${newSong.time}', '${newSong.is_favorite}')
            RETURNING *`
        );
        return song
    } catch(err) {
        return err
    }
};

module.exports = {
    getAllSongs,
    getOneSong,
    addNewSong
}