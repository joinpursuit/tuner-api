const validSong = (req, res, next) => {
    // Check variables for invalid inputs
    const { name, artist, is_favorite } = req.body;
    const isName = typeof name === 'string' && name ? true : false;
    const isBoolean = typeof is_favorite === 'boolean';
    const isArtist = typeof artist === 'string' && artist ? true : false;
  
    const errorArr = [];
    !isName && errorArr.push('No name provided');
    !isBoolean && errorArr.push("is_favorite isn't a boolean");
    !isArtist && errorArr.push('No artist');
  
    const errorObj = { error: errorArr.join(', ') };
  
    switch (false) {
      case isName:
        return res.status(400).json(errorObj);
      case isBoolean:
        return res.status(400).json(errorObj);
      case isArtist:
        return res.status(400).json(errorObj);
      default:
        next();
    }
  };

  module.exports = { validSong }