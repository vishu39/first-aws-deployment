const express = require("express");
const app = express();
// require("dotenv").config();
const ENV = process.env.NODE_ENV || "development";
require('dotenv').config({ path: __dirname + `/env/.env.${ENV || 'production'}` })
require("./startup/db")();

const { setupRoutes } = require('./startup/routes')
setupRoutes(app)

const PORT = process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
