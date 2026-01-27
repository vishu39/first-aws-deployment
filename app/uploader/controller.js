const {
    uploadFileOnS3,

} = require('./function')

exports.uploadFileOnS3 = async (req, res, next) => {
    uploadFileOnS3(req, res, next)
};