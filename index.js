const express = require("express");
const app = express();
// require("dotenv").config();
require('dotenv').config({ path: __dirname + `/env/.env.${process.env.NODE_ENV || 'production'}` })

require("./startup/db")();

const { setupRoutes } = require('./startup/routes')
setupRoutes(app)

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});


const PORT = process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
