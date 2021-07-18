const db = require("../db/config");

const getAllSongs = async (playlistId) => {
    try {
        const allSongs = await db.any(`
            SELECT * FROM songs 
            WHERE playlist_id  = $1
        `, playlistId);
        return { success: true, payload: allSongs };
    } catch (e) {
        return { success: false, payload: e };
    }
    // try {
    //     const allSongs = await db.any("SELECT * FROM songs");
    //     return allSongs;

    // } catch (err) {
    //     return err;
    // }
};

const getSong = async (id) => {
    try {
        const song = await db.one("SELECT * FROM songs WHERE id = $1", id);
        return { success: true, payload: song };
    } catch (e) {
        console.log(e);
        return { success: false, payload: e };
    }
    // try {
    //     const song = await db.one("SELECT * FROM songs WHERE id=$1", id);
    //     return song;

    // } catch (err) {
    //     return err;
    // }
};
const createSong = async (song, playlistId) => {
    const { name, artist, album, time, is_favorite } = song;
    try {
        const created = await db.one(`
            INSERT INTO songs (name, artist, album, time, is_favorite , playlist_id) 
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
        `, [name, artist, album, time, is_favorite, playlistId]);

        return { success: true, payload: created };
    } catch (e) {
        console.log(e);
        return { success: false, payload: e };
    }
}
const deleteSong = async (id) => {

    try {
        const query = "DELETE FROM songs WHERE id = $1 RETURNING *";
        const deletedSong = await db.one(query, id);
        return { success: true, payload: deletedSong };
    } catch (error) {
        return error
    }
}
const updateSong = async (id, body) => {
    const { name, artist, album, time, is_favorite } = body
    console.log(name)
    try {
        const query = "UPDATE songs SET name = $1, artist = $2, album = $3,time = $4, is_favorite = $5 WHERE id = $6 RETURNING *";
        const updatedSong = await db.one(query, [name, artist, album, time, is_favorite, id])
        return updatedSong
    } catch (error) {
        console.log(error)
    }
}
module.exports = { getAllSongs, getSong, createSong, deleteSong, updateSong };

//insert into songs (name, artist , album , time ,is_favorite) values ('Perfect','ed sheeran','/','4:40',f)