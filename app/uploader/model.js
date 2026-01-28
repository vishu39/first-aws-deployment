const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema(
  {
    file: {
      type: Object,
    },
  },
  {
    timestamps: true,
  },
);

const Uploader = mongoose.model("uploader", uploadSchema);

module.exports.Uploader = Uploader;
