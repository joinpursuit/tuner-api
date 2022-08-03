//import db
const db = require("../db/dbConfig");

//check the song's id
const checkId = async (req, res, next) => {
  const result = await db.one("SELECT COUNT(id) FROM songs");
  const songNums = parseInt(result.count);

  const id = parseInt(req.params.id);

  if (id < 1 || id > songNums) {
    res.status(404).json({ error: `Cannot find the song with id ${id}` });
  } else {
    next();
  }
};

module.exports = { checkId };
