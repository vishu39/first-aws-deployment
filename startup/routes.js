const express = require("express");
const uploader = require("../app/uploader/routes");
const cors = require("cors");

function setupRoutes(app) {
  app.use("/upload", express.static("upload"));
  app.use(express.json());
  app.use(cors());
  app.use("/api/uploader", uploader);
};

module.exports = {
    setupRoutes
};
