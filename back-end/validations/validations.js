const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;
  console.log(is_favorite);
  if (is_favorite == true || is_favorite == false || is_favorite == undefined) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};

const checkForNoAdditionalParams = (req, res, next) => {
  const { name, artist, album, is_favorite, time, ...otherStuff } = req.body;
  if (
    otherStuff && // 👈 null and undefined check
    Object.keys(otherStuff).length === 0 &&
    Object.getPrototypeOf(otherStuff) === Object.prototype
  ) {
    next();
  } else {
    res.status(400).send({ error: "no additional parameters allowed" });
  }
};

module.exports = {
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
};
