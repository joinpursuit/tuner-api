const checkName = (req, res, next) => {
  if (req.body.name) {
    console.log('name is ok')
    next()
  } else {
    res.status(400).json({ error: 'Name is required' })
  }
}

const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body
  if (is_favorite == true || is_favorite == false || is_favorite == undefined) {
    next()
  } else {
    res.status(400).json({ error: 'is_favorite must be a boolean value' })
  }
}

const checkForNoAdditionalParams = (req, res, next) => {
  const { name, artist, album, is_favorite, time, ...otherStuff } = req.body
  if (
    otherStuff &&
    Object.keys(otherStuff).length === 0 &&
    Object.getPrototypeOf(otherStuff) === Object.prototype
  ) {
    next()
  } else {
    res.status(400).send({ error: 'no additional parameters allowed' })
  }
}

module.exports = {
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
}
