var http = require("http");

// create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello world!"); // write a response to the client
    res.end(); //end the response
  })
  .listen(8080); // the server object  listen to the port 8080. "http://localhost:8080"
