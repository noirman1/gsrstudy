var http = require('http');
var fs = require('fs');

var port = 3000;

var server = http.createServer(function(req,res){
    console.log('클라이언트 요청이 들어왔습니다.');

    var filename = "./ch05/house1.png";

   /* var infile = fs.createReadStream(filename,{flags:'r'});
    infile.pipe(res);
  */

    fs.readFile(filename, function(err,data){
        res.writeHead(200,{"Content-Type":"image/png"});
        res.write(data);
        res.end();
    });

});



server.listen(port, function(){
    console.log('서버가 시작되었습니다.');
});

server.on('close', function(){
    console.log('서버가 종료됩니다.');
});