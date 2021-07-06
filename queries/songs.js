// Dependencies
const db = require("../db/dbConfig")

// Get
const getAllSongs = async (query) =>{ 
    try{ 
        if (query){
            const { order, is_favorite } = query
            console.log("QUERY ORDER:", order)
            console.log("QUERY FAV:", is_favorite)

            const allSongs = order ? await db.any("SELECT * FROM songs ORDER BY name $1;",order) : 
                            await db.any("SELECT * FROM songs WHERE is_favorite = $1;",is_favorite) ;

            console.log(allSongs)
            return allSongs
        }else{
            const allSongs = await db.any("SELECT * FROM songs;");
            return allSongs
        }
    }catch (err) { 
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