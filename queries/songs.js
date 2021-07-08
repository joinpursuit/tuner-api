const database = require("../db/dbConfig.js")

const getAllSongs = async () => {
    try {
        const allSongs = await database.any("SELECT * FROM songs")
        return allSongs
    } catch (error) {
        return error
    }
}

//Passing as an object
module.exports = {getAllSongs};
