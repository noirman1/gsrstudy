var fs = require('fs');

fs.readFile('./package.json','utf8',function(err,data){
    
    if(err) throw err;
    console.log(data);
});

console.log('비동기식');