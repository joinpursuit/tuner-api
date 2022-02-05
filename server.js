const app = require('./App');
 require('dotenv').config();
const PORT = process.env.PORT || 3009

 app.listen(PORT, () => console.log('server is listening on port:'+ PORT))
