const db = require("../db/config");

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;

    } catch (err) {
        return err;
    }
};

const getSong = async (id) => {
    try {
        const song = await db.one("SELECT * FROM songs WHERE id=$1", id);
        return song;

    } catch (err) {
        return err;
    }
};
const createSong = async (song) => {
    const { name, artist, album, time, is_favorite } = song
    try {
        const theSong = await db.one(
            "INSERT INTO songs(name, artist, album,time, is_favorite) VALUES($1, $2, $3, $4,$5) RETURNING *",
            [name, artist, album, time, is_favorite]
        )
        return theSong
    } catch (e) {
        return e;
    }
}
const deleteSong = async (id) => {
    
    try {
        const query = "DELETE FROM songs WHERE id = $1 RETURNING *";
        const deletedSong = await db.one(query,id );
        return deletedSong;
    } catch (error) {
        return error
    }
}
const updateSong = async (id,body) => {
    const { name, artist, album, time, is_favorite } = body
    console.log(name)
    try {
        const query = "UPDATE songs SET name = $1, artist = $2, album = $3,time = $4, is_favorite = $5 WHERE id = $6 RETURNING *";
        const updatedSong = await db.one(query,[name, artist, album, time, is_favorite,id])
        return updatedSong
    } catch (error) {
      console.log (error)   
    }
}
module.exports = { getAllSongs, getSong, createSong,deleteSong ,updateSong};

//insert into songs (name, artist , album , time ,is_favorite) values ('Perfect','ed sheeran','/','4:40',f)