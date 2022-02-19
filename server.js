// DEPENDENCIES
const app = require('./App');
const dotenv = require('dotenv');

// CONFIGURATION
dotenv.config();
const PORT = process.env.PORT || 7070;

app.listen(PORT, () => {
    console.log(`Listening to our app on ${PORT}`)
});