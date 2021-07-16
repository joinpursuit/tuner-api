const checkTypes = (req) => {
    if (
      typeof req.name === "string" &&
      typeof req.artist === "string" &&
      typeof req.album === "string" &&
      typeof req.time === "string" &&
      typeof req.is_favorite === "boolean"
    ) {
      return true;
    }
  };
  
  module.exports = checkTypes;