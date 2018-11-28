var result = 0;

console.time('time check');

for(var i=0; i<=10000; i++){
    result += i;
    
}
console.log("result= %d",result);
console.timeEnd('time Check');

