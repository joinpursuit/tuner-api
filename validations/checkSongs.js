const validateSong = (req, res, next) => {
    let errorMsg = [];
    const { name, is_favorite } = req.body;
    if(name === undefined){
        errorMsg.push("name is required");
      }

      if(typeof is_favorite !== "boolean"){
        errorMsg.push("is_favorite must be a boolean");
      }

      if(errorMsg.length > 0){
        res.status(400).json({ err0r: errorMsg.join(", ") });
      }else{
        next();
      }
};

module.exports = { validateSong };