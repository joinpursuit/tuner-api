// Dependencies
const app = require('./app');
log = console.log

// Configuration
require('dotenv').config()
const PORT = process.env.PORT || 3005

//Listener
app.listen(PORT, () => log(`Server running on port: http://localhost:${PORT}`));