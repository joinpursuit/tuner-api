const app = require('./app');
require('dotenv').config();
const PORT = process.env.OUR_PORT || 8003;

app.listen(PORT, (request, response) => {
  console.log(`Listening on PORT ${PORT}`);
});
