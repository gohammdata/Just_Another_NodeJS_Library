//Imports HTTP and File System Modules
var http = require('http');
var fs = require('fs');

//Create the Read HTML File Using the readFile function
//Writes the HTML file out that was Read.
http.createServer(function (req, res) {
  fs.readFile('example.html', function(err, data) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(data);
    res.end();
  })
}).listen(8080);
