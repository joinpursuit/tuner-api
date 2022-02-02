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
const validSong = ({
  name = false,
  artist = 'No artist given',
  album = 'No album given',
  time = '0:00',
  is_favorite = true,
}) => {
  const newSong = {
    name,
    artist,
    album,
    time,
    is_favorite,
  };
  return newSong.name ? newSong : false;
};

module.exports = { validSong };
