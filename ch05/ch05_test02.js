var http = require('http');

var server = http.createServer();

var port = 3000;

server.listen(port, function() {
    console.log('서버실행 : %d', port);
});

server.on('connection', function(socket){
    var addr = socket.address();
    console.log('클라이언트 접속 : %s, %d',addr.address, addr.port);
});

server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
         //   console.dir(req);
    res.end('Hello world! \n');
    
});

server.on('close', function(req, res) {
    console.log('서버가 종료 되었습니다.');
});

