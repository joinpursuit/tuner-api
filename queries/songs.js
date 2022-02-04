const database = require("../database/dbConfig");

// this function queries our db for us, which can take a while so we want to wait for it to finish.
const getAllSongs = async () => {
    try {
        const getAll = await database.any('SELECT * FROM songs');

        return getAll
    } catch(err) {
        return err;
    }
};

const getSong = async (id) => {
    try {
        const get = await database.one('SELECT * FROM songs WHERE id=$1', id);

        return get;
    } catch (error) {
        return error
    }
}

const addNewSongs = async(song) => {
    try {
        const {name, artist, album, time, is_favorite} = song
        const add = await database.one(
            'INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, artist, album, time, is_favorite]
        );

        return add
    } catch (error) {
        return error
    }
}

const deleteSong = async (id) => {
    try {
        const remove = await database.one(
            'DELETE FROM songs WHERE id=$1 RETURNING *', id
        );

        return remove;
    } catch (error) {
        return error;
    }
};

const updateSong = async (id, song) => {
    try {

        const {name, artist, album, time, is_favorite} = song
        const update = await database.one(
            'UPDATE songs SET name=$2, artist=$3, album=$4, time=$5, is_favorite=$6 WHERE id=$1 RETURNING *', [id, name, artist, album, time, is_favorite]
        );

        return update;

    } catch (error) {
        return error;
    }
}

// here we are exporting our functions to use in our controllers
module.exports = {
    getAllSongs,
    getSong,
    addNewSongs, 
    deleteSong, 
    updateSong
};