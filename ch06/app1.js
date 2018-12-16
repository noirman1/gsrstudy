var http = require('http');
var express = require('express');
var app = express();


var static = require('serve-static');
var path = require('path');

var bodyParser = require('body-parser');

var router = express.Router();

app.set('port', process.env.PORT || 3000);


app.use('/public', static(path.join(__dirname, 'public') ));

app.use(bodyParser.urlencoded({extended:false}) );
app.use(bodyParser.json());


/************************************ */
/**몽구스 모듈 사용
/************************************ */
var mongoose = require('mongoose');

var database;
var UserSchema;
var UserModel;

function connectDB() {
    
    var databaseUrl = "mongodb://localhost:27017/local";
    
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl);
    database = mongoose.connection;
    
    database.on('error', console.error.bind(console, 'connection error!'));
    database.on('open', function() {
        console.log('DB 연결 성공! : %s', databaseUrl);
        
    /*************************************************************** */
        UserSchema = mongoose.Schema({
            id:String,
            name:String,
            password:String
        });
        if(UserSchema) console.log('UserSchema 정의 함');
        
        UserModel = mongoose.model('users', UserSchema);
        if(UserModel) console.log('UserModel 정의 함');
    /************************************************************ */  
    });
    
    
    database.on('disconnected', function() {
        console.log('연결이 끊어졌습니다. 5초 후 재 실행!');
        setTimeout(connectDB, 5000);
    })
}


function authUser(database, id, password, callback) {
    
    UserModel.find({"id":id, "password":password}, function(err, result) {
        if(err) {
            callback(err, null);
            return;
        }
        
        console.log("아이디[%s], 비밀번호[%s]로 검색", id, password);
        console.dir(result);
        
        if(result.length > 0) {
            console.log("일치하는 사용자 찾음",result);
            callback(null, result);
        } else {
            console.log("입력 정보와 불일치!")
            callback(null, null);
        }
    });
}

function addUser(database, id, password, name, callback) {
    var user = new UserModel({"id":id, "password":password, "name":name});
    
    user.save(function(err) {
        if(err) {
            callback(err, null);
            return;
        }
        console.log('사용자 데이터 추가 함');
        callback(null, user);
    });
}

function  writeMessage(res, message) {
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>'+message+'</h1>');
    res.end();
}

router.route('/process/adduser').post(function(req, res) {
    console.log('/process/adduser 라우팅 함수 호출 됨.');
    
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    var paramName = req.body.name || req.query.name;
    
    if(database) {
        addUser(database, paramId, paramPassword, paramName, function(err, result) {
            if(err) throw err;
            
            if(result) {
                writeMessage(res, '사용자 추가 성공!');
            } else {
                writeMessage(res, '사용자 추가 실패!');
            }
        })
    } else {
        writeMessage(res, 'DB 접속 실패!');
    }
});

router.route('/process/login').post(function(req, res) {
    console.log('/process/login 라우팅 함수 호출 됨.');
    
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    
    //console.log("%s, %s", paramId, paramPassword);
    
    if(database) {
        authUser(database, paramId, paramPassword, function(err, docs) {
            
            if(docs) {
                writeMessage(res, '로그인 성공.');
            } else {
                writeMessage(res, '로그인 실패.');
            }
        });
        
    } else {
        writeMessage(res, 'DB 객체 없다.');
    }
});

app.use('/', router);

var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('http://localhost:%d 로 서버 실행.', app.get('port'));
    connectDB();
});