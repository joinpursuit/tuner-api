const app = require('./App');
 require('dotenv').config();
const PORT = process.env.PORT

 app.listen(PORT, () => console.log('server is listening on port:'+ PORT))
