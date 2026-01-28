const {Uploader} = require('./model')

async function uploadFileOnS3(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const doc = await Uploader.create({
      file: req?.file || {}
    });

    doc.save()

    res.status(201).json({
      success: true,
      data: doc
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
}

module.exports = {
  uploadFileOnS3,
};