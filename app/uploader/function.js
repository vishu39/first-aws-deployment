
// Upload to S3
async function uploadFileOnS3(req, res, next) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `file-${Date.now()}.txt`,
    Body: "Hello from Node App",
  };

  try {
    const result = await s3.upload(params).promise();
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
    uploadFileOnS3,
};