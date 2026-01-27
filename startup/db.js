const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/aws-first-project")
    .then(() => console.log("Connected..."))
    .catch((err) => console.log("Error to connect", err));
};
