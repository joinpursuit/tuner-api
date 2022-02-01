/* validation - check if you provided a name */
const checkName = (req, res, next) => {
    if (req.body.name) {
        next();
    } else {
        res.status(400).json({ error: "Name is required" });
    }
};

const checkAlbum = (req, res, next) => {
    if (req.body.album) {
        next();
    } else {
        res.status(400).json({ error: "Album is required" });
    }
}

const checkTime = (req, res, next) => {
    if (req.body.time) {
        next();
    } else {
        res.status(400).json({ error: "Time is required" });
    }
}

/* validation - check the data type for boolean */
const checkBoolean = (req, res, next) => {
    if (typeof req.body.is_favorite === "boolean") {
        next();
    } else {
        res.status(400).json({ error: "is_favorite must be a boolean value" });
    }
}

module.exports = { 
    checkName,
    checkAlbum,
    checkTime,
    checkBoolean
};