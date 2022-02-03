const app = require("./App");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`please, don't stop the music on ${PORT} port`);
});
