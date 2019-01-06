var user = require('./user1');

function showUser(){
    return user.getUser().name +', '+ user.group.name;
}

console.log('사용자정보 -> '+showUser());