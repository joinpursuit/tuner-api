module.exports = {
    sortedResponse: function(songs,order,res){
        switch(order){
            case "asc":
                let abcOrder = songs.sort((a,b) => {
                    let nameA = a.name.toUpperCase();
                    let nameB = b.name.toUpperCase();
                    return nameA < nameB ? -1 : 1;
                });
                return res.send(abcOrder);
            case "desc":
                let reverseAbcOrder = songs.sort((a,b) => {
                    let nameA = a.name.toUpperCase();
                    let nameB = b.name.toUpperCase();
                    return nameA > nameB ? -1 : 1;
                });
                return res.send(reverseAbcOrder);
            default:
                break;
        };
    },
    filteredIsFavoriteResponse: function(songs,is_favorite,res){
        let songIsFavorite = is_favorite === "true";
        let formattedSongs = songs.filter(log => {
            return songs.is_favorite === songIsFavorite;
        });
        return res.send(formattedSongs);
    },
};