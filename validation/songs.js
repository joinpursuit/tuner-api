const checkNameArtistAlbum = (req, res, next) => {
  if (req.body.name && req.body.artist && req.body.album) next();
  else res.json({ error: "name is required" });
};
const isFavorite = (req, res, next) => {
  if (typeof req.body.is_favorite === "boolean") next();
  else res.json({ error: "is_favorite should be true or false" });
};
const checkTimeFormat = (req, res, next) => {
  const { time } = req.body;
  const timeArr = time.split(":");
  if (timeArr.every((el) => !isNaN(el)) && timeArr.length === 3) next();
  else res.json({ error: "time should be in hh:mn:ss format" });
};

module.exports = { checkNameArtistAlbum, isFavorite, checkTimeFormat };
