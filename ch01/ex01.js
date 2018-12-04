var ex_mod1 = require('./module1');

console.log('agrv 파라미터 :'+process.argv.length);
console.dir(process.argv);


process.argv.forEach(function(item,index){
    console.log(index+':'+ item);
});


ex_mod1.a();