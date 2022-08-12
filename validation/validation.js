const checkName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Please enter a name!");
  }
  next();
};

const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;
  if (
    is_favorite !== true &&
    is_favorite !== false &&
    is_favorite !== "true" &&
    is_favorite !== "false"
  ) {
    return res.status(400).send("Must be true or false!");
  }
  next();
};

module.exports = {
  checkName,
  checkBoolean,
};
