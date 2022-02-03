const app = require('./app')

require('dotenv').config()
const PORT = process.env.PORT || 7070

app.listen(PORT,(require,response) => {
    console.log(`our app is running`)

});