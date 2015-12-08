// start() contains a blocking operation. We already talked about Node’s
//  execution model - expensive operations are ok, but we must take care to not block the Node.js 
//  process with them. Instead, whenever expensive operations must be executed, these must be put in 
//  the background, and their events must be handled by the event loop.
// And we will now see why the way we constructed the “request handler
//  response handling” in our application doesn’t allow us to make 
//  proper use of non-blocking operations.


function start() {
  console.log("*** Request handler 'start' was called.");
  
  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (
      new Date().getTime() < startTime + milliSeconds
      );
  }
  sleep(10000);
  return "안녕 Hello start";
}

function upload() {
  console.log("Request handler 'uplaod' was called.");
  return "안녕 Hello uplaod";
}

exports.start  = start;
exports.upload = upload;