const db = require('../dbConfig.js')

const getAllSongs = async () =>{
  try{
  const allSongs = await db.any('SELECT * FROM songs');  
  return allSongs
} catch (error){
  console.log(error);
  }
};

const getSong = async (id) =>{
  try{
  const song = await db.one(`SELECT * FROM songs WHERE id`, id);  
  return song
} catch (error){
  console.log(error);
  }
}

const createSong = async (newSong) => {
  const {name, artist, album, time, is_favorite} = newSong
  try{
    const newTrack = await db.one(
      "INSERT INTO songs(name, artist, album, time, is_favor)", [name, artist, album, time, is_favorite]
    )
    return newTrack
  }catch(error){
    console.log(error)
  }
}

// for createSongs might need Value but unsure how to add it. Go look at anime project to see if we did this before. 

//why didn't it work when I just wanted to write "new"

const deleteSongs = async (id) => {
  try{
    const deleteSong = await db.one(
      "DELETE FROM songs WHERE id", id
    )
    return deleteSong
  }catch (error){
    console.log(error)
  }
}

// I think we might need a value cause how else will it know what song to delete and should it return all songs after? 
module.exports = {getAllSongs, getSong, createSong, deleteSongs} ;