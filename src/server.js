const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, (request, response) => {
    console.log('the app is running!');
});