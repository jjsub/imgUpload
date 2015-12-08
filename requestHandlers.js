function start() {
  console.log("*** Request handler 'start' was called.");
  return "안녕 Hello start";
}

function upload() {
  console.log("Request handler 'uplaod' was called.");
  return "안녕 Hello uplaod";
}

exports.start  = start;
exports.upload = upload;