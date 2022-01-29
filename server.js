const App = require('./App');

require('dotenv').config();

const PORT = process.env.PORT || 3003;

App.listen(PORT, (req, res) => {
  console.log(`our app is running on port ${PORT}`);
});
