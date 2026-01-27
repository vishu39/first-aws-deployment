const express = require("express");
const uploader = require("../app/uploader/routes");
const cors = require("cors");

module.exports = function (app) {
  app.use("/upload", express.static("upload"));
  app.use(express.json());
  app.use(cors());
  app.use("/uploader", uploader);
};
