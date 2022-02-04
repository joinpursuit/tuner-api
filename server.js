// Dependencies.
const dotenv = require("dotenv");
// Pull in app.js.
const app = require("./app");

// Configuration.
dotenv.config();
let PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
