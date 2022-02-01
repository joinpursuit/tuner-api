const app = require("./app.js");
require("dotenv").config();

const PORT = process.env.PORT;

// this will listen to the page
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
