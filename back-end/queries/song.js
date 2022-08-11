const db = require('../db/dbConfig')
//index
const getAllSongs = async () => {
  try {
    let allSongs = await db.any('select * from songs')
    return allSongs
  } catch (error) {
    return error
  }
}

//individual
const getAnSong = async (id) => {
  try {
    const song = await db.one('select * from songs where id=$1', id)
    return song
  } catch (error) {
    return error
  }
}

//create
const createSong = async (song) => {
  try {
    const newSongs = await db.any(
      'insert into songs (name, artist, album, time, is_favorite) values ($1, $2, $3, $4, $5) returning *',
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    )
    return newSongs
  } catch (error) {
    console.log(error.message || error)
    return error
  }
}

//delete
const deleteSong = async (id) => {
  try {
    const deleSong = await db.one(
      'delete from songs where id = $1 returning *',
      id
    )
    return deleSong
  } catch (error) {
    return error
  }
}

const updateSong = async (id, song) => {
  try {
    const updateAnSong = await db.one(
      'update songs set name= $1, artist=$2, album=$3, time=$4,is_favorite = $5 where id = $6 returning * ',
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    )
    return updateAnSong
  } catch (error) {
    console.log(error.message || error)
    return error
  }
}

module.exports = {
  getAllSongs,
  getAnSong,
  createSong,
  deleteSong,
  updateSong,
}
