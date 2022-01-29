const app = require('./App');

require('dotenv').config()
const PORT = process.env.PORT || 3003;

app.listen(PORT, (req, res) => {
    console.log(`our app is running on ${PORT}`)
})