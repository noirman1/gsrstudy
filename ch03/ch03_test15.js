function add(a,b,callback){
    var result = a+b;

    callback(result);
}

add(4,6,function(result){
    console.log(result);
});