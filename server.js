const app = require("./App");

require("dotenv").config();
const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
