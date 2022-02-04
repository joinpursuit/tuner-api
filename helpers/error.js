const meanValidSong = (song) => {
    //Make sure length === 5
    const songCounts = Object.values(song).length;
    //Example obj, to compare to
    const exArr = [ "name", "artist", "album", "time", "is_favorite" ];
    //Compare the keys to our example array
    const validKeys = Object.keys(song).every((e,i) => e === exArr[i]);
    //check if values area valid
    const validValues = Object.values(song).map((e) => e + '').every((e) => (e ? true : false));

    return songCounts === 5 && validKeys;
};

const validSong = ({
    name = false,
    artist = 'No artist given',
    album = 'No album given',
    time = '0:00',
    is_favorite = true
    }) => {
    const newSong = {
    name,
    artist,
    album,
    time,
    is_favorite
    }
    return newSong.name ? newSong : false;
}


module.exports = { validSong };