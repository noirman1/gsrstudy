var http = require('http');

var options = {
    host : 'www.gooogle.com',
    port : 80,
    path : '/'
};

var req = http.get(options, function(res){
    var resData = '';
    res.on('data',function(chunk){
        resData += chunk;
    });

    res.on('end', function(){
        console.log(resData);
    });
});

req.on('error', function(err){
  console.log("오류발생:"+err.message);
});

/*
req.write(req.data);
req.end();
*/
