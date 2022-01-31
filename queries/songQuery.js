const database = require('../db/dbConfig');

// is * referring to the columns (the type of data to get back)
// when do we get to use anything else besides ".any" on our database?
    // is it related to SQL's "LIMIT" command?
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
        const theSong = await database.any(`
            SELECT * FROM songs_tb WHERE id = ${id} ;
        `);
        return theSong;
    } catch(error) {
        return error;
    };
};

const postAndGet = async ({ title, artist, album, length, is_favorite }) => {
    try {
        const postedSong = await database.any(`
            INSERT INTO songs_tb
                (title, artist, album, length, is_favorite) 
            VALUES
                ('${title}', '${artist}', '${album}', '${length}', ${is_favorite})
            RETURNING * ;
        `);
        return postedSong;
    } catch(error) {
        return error;
    };
};

const deleteAndGet = async (id) => {
    try {
        const deletedSong = await database.any(`
            DELETE FROM songs_tb
            WHERE id = ${id} 
            RETURNING * ;
        `);
        return deletedSong;
    } catch(error) {
        return error;
    };
};

const updateAndGet = async (id, { title, artist, album, length, is_favorite }) => {
    try {
        const updatedSong = await database.any(`
            UPDATE songs_tb 
            SET 
                title = '${title}', 
                artist = '${artist}', 
                album = '${album}', 
                length = '${length}', 
                is_favorite = ${is_favorite} 
            WHERE id = ${id} RETURNING * ; 
        `);
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