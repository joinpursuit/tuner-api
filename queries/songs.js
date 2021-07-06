// Dependencies
const pgp = require("pg-promise")();
const db = require("../db/dbConfig")

// Get
const getAllSongs = async (query) => {
    try {
        if (query?.is_favorite && query?.order?.toLowerCase() === 'asc') {
            return await db.any('SELECT * FROM songs WHERE is_favorite = $1 ORDER BY name ASC', query.is_favorite)
        } else if (query?.is_favorite && query?.order?.toLowerCase() === 'desc') {
            return await db.any('SELECT * FROM songs WHERE is_favorite = $1 ORDER BY name DESC', query.is_favorite)
        } else if (query?.is_favorite) {
            return await db.any('SELECT * FROM songs WHERE is_favorite = $1', query.is_favorite)
        } else if (query?.order?.toLowerCase() === 'asc') {
            return await db.any('SELECT * FROM songs ORDER BY name ASC')
        } else if (query?.order?.toLowerCase() === 'desc') {
            return await db.any('SELECT * FROM songs ORDER BY name DESC')
        } else {
            return await db.any('SELECT * FROM songs')
        }
    } catch (err) {
        return err
    }
 }

 const getSong = async (id) =>{ 
     try{ 
         const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id)
         return oneSong
     }catch(e) { 
         return e
     }
  }


// Create
const createSong = async (song) =>{ 
    try{ 
        const newSong = await db.one("INSERT INTO songs (name,artist,album,time,is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [song.name, song.artist, song.album, song.time, song.is_favorite])
        return newSong
    }catch(e) { 
        return e
    }
}  

module.exports = {  
    getAllSongs,
    getSong,
    createSong,
}