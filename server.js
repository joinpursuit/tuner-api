const app = require('./app.js');

require('dotenv').config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`[${process.env.ENVIRONMENT}] Listening on port: ${PORT}`);
});

