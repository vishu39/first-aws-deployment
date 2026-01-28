const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");

const s3 = require("../../constant/s3");

// File filter (optional)
const fileFilter = (req, file, cb) => {
  const allowed = /jpg|jpeg|png|pdf|doc|docx/;

  const ext = allowed.test(
    path.extname(file.originalname).toLowerCase()
  );

  if (ext) {
    cb(null, true);
  } else {
    cb(new Error("File type not allowed"), false);
  }
};

const upload = multer({
  fileFilter,

  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,

    contentType: multerS3.AUTO_CONTENT_TYPE,

    metadata: (req, file, cb) => {
      cb(null, {
        fieldName: file.fieldname
      });
    },

    key: (req, file, cb) => {
      const fileName =
        "uploads/" +
        Date.now() +
        "-" +
        file.originalname;

      cb(null, fileName);
    }
  })
});

module.exports = upload;