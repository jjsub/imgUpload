var exec = require("child_process").exec;

function start(response) {
console.log("Request handler 'start' was called.");
exec("ls -lah", function (error, stdout, stderr) { response.writeHead(200, {"Content-Type": "text/plain"}); response.write(stdout);
response.end();
}); }



function upload(response) {
  console.log("Request handler 'uplaod' was called.");
  
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello updload");
  response.end();
}

exports.start  = start;
exports.upload = upload;



/* **********

  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (
      new Date().getTime() < startTime + milliSeconds
      );
  }
  sleep(10000);

************ */