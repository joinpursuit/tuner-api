const db = require("../db/dbConfig");

const updateSong = async (id, { name, artist, album, time, is_favorite }) => {
  try {
    console.log(id, name, artist, album, time, is_favorite);
    const updateSong = await db.one(
      "UPDATE song SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 where id=$6 RETURNING *",
      [name, artist, album, time, is_favorite, id]
    );
    return updateSong;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const oneSong = await db.one(
      "DELETE FROM song WHERE id=$1 RETURNING *",
      id
    );
    return oneSong;
  } catch (error) {
    return error;
  }
};

module.exports = { updateSong, deleteSong };
