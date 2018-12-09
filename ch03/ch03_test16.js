function add(a,b,callback){
    var result;
    result = a+b;
    callback(result);

    var count = 0;

    var history = function(){
        count++;
        return count + ":" + a +"+"+b+"="+result;        
    };
    
    return history;
}

var add_history = add(10,10, function(result){

    console.log('%d',result);
});

    console.log(add_history());
    console.log(add_history());
    console.log(add_history());
    
    console.log(add_history());
