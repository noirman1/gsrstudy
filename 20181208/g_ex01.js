var http = require('http');

server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello world! \n');
});

server.listen(3000,'localhost');

console.log('server start!!');



