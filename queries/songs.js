const db = require ("../db/config")

const fetchALLSongs = async () => {

    try{
        const allSongs = await db.any("SELECT * FROM songs")
        return allSongs
    }catch(error){
        console.log(error)
    }
}

module.exports = {fetchALLSongs}