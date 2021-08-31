const AlbumCheck = (covers) => {
    const image = "https://cdn.imgbin.com/12/14/10/imgbin-wanted-original-motion-soundtrack-compact-disc-music-album-motion-poster-CrGk9EG3PYPW9xWJvmSDxAu3x.jpg"
    
    if(!covers) {
        return image
    }
    return covers

}

module.exports = AlbumCheck