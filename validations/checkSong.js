const checkName = (req, res, next) => {
    if(req.body.name){
        next();
    } else {
        res.status(400).json({error: "Name is required"});
    }
};

const checkArtist = (req, res, next) => {
    if(req.body.artist){
        next();
    } else {
        res.status(400).json({error: "Artist is required"});
    }
};

const checkAlbum = (req, res, next) => {
    if(req.body.album){
        next();
    } else {
        res.status(400).json({error: "Album is required"});
    }
};

const checkTime = (req, res, next) => {
    let regCheck = req.body.time.match(/^\d:\d\d/g);
    if(regCheck){
        next();
    } else {
        res.status(400).json({error: "Time is required in the following format 1:23"});
    }
};

const checkIsFavorite = (req, res, next) => {
    
    if(typeof req.body.is_favorite === "boolean"){
        next();
    } else {
        res.status(400).json({error: "Is Favorite is required"});
    }
};

module.exports = {
    checkName,
    checkArtist,
    checkAlbum,
    checkTime,
    checkIsFavorite
}