var http = require('http');
var express = require('express');

var app = express();
app.set('port',process.env.PORT || 3000);

app.use(function(req,res,next){
    console.log('첫번째미들웨어 요청');

    res.writeHead(200,{'Content-Type':'text/html;charset = utf8'});
    res.end('<h1>Express 서버에서 응답한 결과입니다..</h1>');

});


http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작했습니다. :',app.get('port'));
});

