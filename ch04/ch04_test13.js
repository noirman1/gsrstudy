var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
    var instream = fs.createReadStream('./output.txt');
    instream.pipe(res);
});

server.listen(3000);