var http = require('http');
var dt = require('./datetime');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write("The current date and time on launch are: " + dt.myDateTime());
  res.end();
}).listen(8080);
