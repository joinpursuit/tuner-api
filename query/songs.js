import db from '../db/dbConfig.js';

const getAllSongs = async () => {
    try {
        const songs = await db.any("SELECT * FROM songs");
        return songs
    }
    catch(err){
        return err
    }
}

export const getSong = async (id) => {
    try {
        const song = await db.one("SELECT * FROM songs WHERE id=$1", id)
        return song
    }
    catch(err){
        return err
    }
}

export const createSong = async ({name, artist, album, time, is_favorite}) => {
    try {
        const song = await db.one("INSERT INTO songs(name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *", [name, artist, album, time, is_favorite]);
    return song
    }
    catch(err){
        return err
    }
    
}

export default getAllSongs