const express = require('express')
const router = express.Router()
const { uploadFileOnS3 } = require("./controller");

router.post("/uploadFileOnS3", uploadFileOnS3);

module.exports = router;