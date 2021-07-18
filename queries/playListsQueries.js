const db = require("../db/config");

const getAllPlaylists = async () => {
    try {
        const allPlaylists = await db.any("SELECT * FROM playlists");
        return { success: false, payload: allPlaylists };

    } catch (e) {

        return { success: false, payload: e };
    }
}
module.exports = {getAllPlaylists}