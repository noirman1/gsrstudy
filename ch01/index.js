var result = 0;

console.time('time check');

for(var i=0; i<=10000; i++){
    result += 1;
}

console.timeEnd('time Check');

console.log("result= %d",result);