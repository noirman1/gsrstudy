
var express = require('express')
   ,http = require('http')
   ,path = require('path');    

var bodyParser = require('body-parser')
   ,static = require('serve-static');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use('/public',static(path.join(__dirname, 'public')));
//app.use(static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/*
app.use(function(req,res,next){
    console.log('미들웨어 호출됨.');
});
*/

app.use(function(req, res, next) {
    console.log('첫번째 미들웨어에서 요청');
    
    var userAgent = req.header('User-Agent');
    var paramId = req.body.id || req.query.id;
    //var paramPassword = req.body.password || req.query.password;
    
    res.send('<h3> 서버에서 응답. User-Agent->'+ userAgent +'</h3><h3> Param Id->'+paramId+'</h3>');
  
    /*
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h2>paramId: '+paramId+'</h2>');
    res.write('<h2>paramPassword: '+paramPassword+'</h2>');
    res.end();
    */
});


var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('서버실행:%d', app.get('port'));
});