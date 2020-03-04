//Hello World to Start Out
//J. Hamm

//Grabs HTTP
var http = require('http');

//Any succesfull HTTP request to the port 8080
//will prompt the computer to write Hello World
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/html'})

res.end('Hello World!')
}).listen(8080);
