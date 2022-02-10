const res = require('express/lib/response');

//This one is mean, use if mean
const meanValidSong = (song) => {
  // Make sure length is 5
  const songCount = Object.values(song).length;

  //example arr, to compare to
  const exArr = ['name', 'artist', 'album', 'time', 'is_favorite'];

  //compare the keys to our example array
  const validKeys = Object.keys(song).every((e, i) => e === exArr[i]);

  // check if values are valid
  const validValues = Object.values(song)
    .map((e) => e + '')
    .every((e) => (e ? true : false));

  return songCount === 5 && validKeys && validValues;
};

// This is the nice be. Be more like this one. They're nice.

const validSong = (req, res, next) => {
  // Check variables for invalid inputs
  const { name, artist, album, time, is_favorite } = req.body;
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

const formatSong = ({
  name,
  artist,
  album = 'No Album Given',
  time = 'No Time Given',
  is_favorite,
}) => {
  return {
    name,
    artist,
    album,
    time,
    is_favorite,
  };
};

module.exports = { validSong, formatSong };
