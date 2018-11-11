module.exports.upload = uploadFunction;

function uploadFunction(request, response) {
  let res = {};
  if (request) {
    res = { err: null, response: "Upload success!" };
  } else {
    res = { err: "UPLOAD_ERR", response: "Upload failed" };
  }
  response(res.err, res.response);
}
