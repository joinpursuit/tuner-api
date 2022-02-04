const bookmarks = require("../controllers/bookmarksController");
const db = require("../db/dbConfig");

const getAllBookmarks = async () => {
  try {
    const bookmarks = await db.any("SELECT * from bookmarks");

    return bookmarks;
  } catch (error) {
    return error;
  }
};

const getBookmark = async (id) => {
  try {
    const bookmark = await db.one("SELECT * FROM bookmarks WHERE id=$1", id);

    return bookmark;
  } catch (error) {
    return error;
  }
};

const createBookmark = async (bookmark) => {
  const { name, url, category, is_favorite } = bookmark;
  const newBookmark = await db.one(
    "INSERT INTO bookmarks (name, url, category, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, url, category, is_favorite]
  );

  return newBookmark;
};

const deleteSong = async (id) => {
  try {
    const query = "DELETE FROM bookmarks WHERE id=$1 RETURNING *";
    const deletedBookmark = await db.one(query, id);
    return deletedBookmark;
  } catch (err) {
    return err;
  }
};

const updateBookmark = async (id, bookmark) => {
    try {
      const { name, url, category, is_favorite } = bookmark;
      
    const updateBookmark = await db.one(
      "UPDATE bookmarks SET name = $1, URL=$2, catergory=$3,is_favorite"
    );
  } catch (err) {
    return err;
  }
};
module.exports = {
  createBookmark,
  getAllBookmarks,
  getBookmark,
  deleteBookmark,
  updateBookmark,
};
