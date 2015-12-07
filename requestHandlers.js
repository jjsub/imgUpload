function start() {
  console.log("*** Request handler 'start' was called.");
}

function uplaod() {
  console.log("Request handler 'uplaod' was called.");
}

exports.start  = start;
exports.uplaod = uplaod;