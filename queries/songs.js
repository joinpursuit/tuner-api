const db = require('../dbConfig.js')

const getAllSongs = async () =>{
    try{
      const allSongs = await db.any('SELECT * FROM songs');  
      return allSongs
    } catch (error){
        console.log(error);
    }
};

module.exports = {getAllSongs} ;