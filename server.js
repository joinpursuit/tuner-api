// DEPENDENCIES
const dotenv = require('dotenv');

const app = require('./App');

// CONFIGURATION
dotenv.config();
const PORT = process.env.PORT || 7070;

app.listen(PORT, (request,response) => {
// Bookmarks.sql codealong
// app.listen(PORT, () => {
    console.log('Finally, our app is running!')
});