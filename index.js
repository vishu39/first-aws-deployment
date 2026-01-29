const express = require("express");
const app = express();
// require("dotenv").config();
require('dotenv').config({ path: __dirname + `/env/.env.${process.env.NODE_ENV || 'production'}` })

require("./startup/db")();

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

const { setupRoutes } = require('./startup/routes')
setupRoutes(app)

const PORT = process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
