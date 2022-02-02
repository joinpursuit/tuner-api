const sortAndFilter = ({ order, is_favorite }) => {

const sort = order === "asc" ? "ORDER BY name ASC" : order === "desc" ? "ORDER BY name DESC" : "";

const filter = is_favorite === "true" ? "WHERE is_favorite=true" : is_favorite === "false" ? "WHERE is_favorite=false" : "";

return [ filter, sort ].filter((e) => (e ? true : false)).join(' ');
}


module.exports = {sortAndFilter}