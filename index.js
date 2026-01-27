const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors')

require("./startup/db")();
require("./startup/routes")(app);

app.use(express.json());
app.use(cors('*'));

// Home Route
app.get("/", (req, res) => {
  res.send("Node.js App Running on AWS 🚀");
});

const PORT = 8800;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
