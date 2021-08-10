const imageCheck = (photo) => {
    const image = "https://images.8tracks.com/cover/i/010/241/053/3089ee30-887f-4a7d-9422-e30b2d7ace87-8478.jpg?rect=71,0,427,427&q=98&fm=jpg&fit=max"
    
    if(!photo) {
        return image
    }
    return photo

}

module.exports = imageCheck