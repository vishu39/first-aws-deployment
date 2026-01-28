const express = require('express')
const router = express.Router()
const { uploadFileOnS3 } = require("./controller");
const upload = require("../middleware/s3middleware");

router.post("/uploadFileOnS3", upload.single("file"), uploadFileOnS3);

module.exports = router;