const {
  getAllSongs,
  addANewSong,
  getASong,
  deleteASong,
  updateASong,
} = require('../queries/songs');

exports.getSongs = async (req, res) => {
  const songs = await getAllSongs();
  return res.status(200).json(songs);
};

exports.addNewSong = async (req, res) => {
  const newSong = req.body;
  const songs = await addANewSong(newSong);
  return res.status(201).json(songs);
};

exports.getSong = async (req, res) => {
  const { id } = req.params;
  const song = await getASong(id);
  return res.status(200).json(song);
};

exports.updateSong = async (req, res) => {
  const { id } = req.params;
  const song = await updateASong(req.body, id);
  return res.status(204).json(song);
};

exports.deleteSong = async (req, res) => {
  const { id } = req.params;
  const song = await deleteASong(id);
  return res.status(204).json(song);
};
