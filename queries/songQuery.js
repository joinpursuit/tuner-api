const database = require('../db/dbConfig');

const getAllSongs = async () => {
    try {
        const allSongs = await database.any(`
            SELECT * FROM songs_tb;
        `);
        return allSongs;
    } catch(error) {
        return error;
    };
};

const getSongById = async (id) => {
    try {
        const theSong = await database.one(`
            SELECT * FROM songs_tb WHERE id=$1 ;
        `, id);
        return theSong;
    } catch(error) {
        return error;
    };
};

const postAndGet = async ({ title, artist, album, length, is_favorite }) => {
    try {
        const postedSong = await database.one(`
            INSERT INTO songs_tb
                (title, artist, album, length, is_favorite) 
            VALUES
                ($1, $2, $3, $4, $5)
            RETURNING * ;
        `, [title, artist, album, length, is_favorite]);
        return postedSong;
    } catch(error) {
        return error;
    };
};

const deleteAndGet = async (id) => {
    try {
        const deletedSong = await database.one(`
            DELETE FROM songs_tb
            WHERE id=$1
            RETURNING * ;
        `, id);
        return deletedSong;
    } catch(error) {
        return error;
    };
};

const updateAndGet = async (id, { title, artist, album, length, is_favorite }) => {
    try {
        const updatedSong = await database.one(`
            UPDATE songs_tb 
            SET 
                title=$1, 
                artist=$2, 
                album=$3, 
                length=$4, 
                is_favorite=$5 
            WHERE id=$6 RETURNING * ; 
        `, [title, artist, album, length, is_favorite, id]);
        return updatedSong;
    } catch(error) {
        return error;
    };
};

module.exports = {
    getAllSongs,
    getSongById,
    postAndGet,
    deleteAndGet,
    updateAndGet
};