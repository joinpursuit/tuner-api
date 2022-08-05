const checkName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Name is required.");
  }
  next();
};

const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;
  if (is_favorite !== true && is_favorite !== false) {
    return res.status(400).send("is_favorite must be true or false.");
  }
  next();
};

const checkAdditionalFields = (req, res, next) => {
  const { name, artist, album, is_favorite, time, ...otherStuff } = req.body;
  if (Object.keys(otherStuff).length > 0) {
    return res.status(400).send("Additional fields are not allowed.");
  }
  next();
};

module.exports = {
  checkName,
  checkBoolean,
  checkAdditionalFields,
};
