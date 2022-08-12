const db = require('../db/db/dbConfig.js')

// indexing
const allSongs =   async () => {
    try {
      let all = await db.any('select * from songs')
      return all
    } catch (error) {
      return error
    }
  }
  
// single song
const singleSong = async (id) => {
    try {
      const single = await db.one('select * from songs where id=$1', id)
      return single
    } catch (error) {
      return error
    }
}
// creating song
const createSong = async (req) => {
    try {
      const create = await db.any(
        'insert into songs (name, artist, album, time, is_favorite) values ($1, $2, $3, $4, $5) returning *',
        [req.name, req.artist, req.album, req.time, req.is_favorite]
      )
      return create
    } catch (error) {
      return error
    }
  }

// deleting song
const deleteSong = async (id) => {
    try {
      const deleting = await db.one(
        'delete from songs where id = $1 returning *',
        id
      )
      return deleting
    } catch (error) {
      return error
    }
  }

// updating song
const updateSong = async (id, song) => {
    try {
      const updating = await db.one(
        'update songs set name= $1, artist=$2, album=$3, time=$4,is_favorite = $5 where id = $6 returning * ',
        [song.name, song.artist, song.album, song.time, song.is_favorite, id]
      )
      return updating
    } catch (error) {
      console.log(error.message || error)
      return error
    }
  }
module.exports = {
    allSongs,
    singleSong,
    createSong,
    deleteSong,
    updateSong,
}