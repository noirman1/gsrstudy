/*
process.on('exit',function(){
  console.log('process exit');
});

setTimeout(function(){
    process.exit();
},2000);
*/

process.on('tick',function(count){
    console.log('process tick : %s',count);
  });
  
  setTimeout(function(){
      process.emit('tick',2);
  },2000);