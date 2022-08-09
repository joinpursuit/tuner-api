const checkName = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send("Please enter a name!");
}
next();
};

const checkFavorite = (req, res, next) => {
const { is_favorite } = req.body;
if (is_favorite !== true && is_favorite !== false) {
  return res.status(400).send("Must be true or false!");
}
next();
};

const checkParams = (req, res, next) => {
const { name, artist, album, is_favorite, time, ...otherStuff } = req.body;
if (Object.keys(otherStuff).length > 0) {
  return res.status(400).send("NOPE! NOT ON MY WATCH!.");
}
next();
};

module.exports = {
checkName,
checkFavorite,
checkParams,
};