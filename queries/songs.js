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
module.exports = {getAllSongs, getSong} ;