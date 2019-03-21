var express = require('express')
  , http = require('http')
  , static = require('serve-static')
  , path = require('path');

var bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  ,expressSession = require('express-session');

var expressErrorHandler = require('express-error-handler');

var user = require('./routes/user');

var crypto = require('crypto');
 
var mongoose = require('mongoose');

var database;
var UserSchema;
var UserModel;

var app = express();

app.set('port', process.env.PORT || 3000);
app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieParser());
app.use(expressSession({
	secret:'my key',
	resave:true,
	saveUninitialized:true
}));

function connectDB() {

	var databaseUrl = 'mongodb://localhost:27017/local';
	 
	console.log('데이터베이스 연결을 시도합니다.');
	
	mongoose.Promise = global.Promise;  	
	/** { useNewUrlParser: true }*/
	mongoose.connect(databaseUrl, { useNewUrlParser: true, useCreateIndex :  true });
	database = mongoose.connection;

	database.on('open', function () {
		console.log('데이터베이스에 연결되었습니다. : ' + databaseUrl);
		
    /***********************************/ 
		createUserSchema(database);		
		
	});	
	
    database.on('disconnected', function() {
        console.log('연결이 끊어졌습니다. 5초 후 재연결합니다.');
        setInterval(connectDB, 5000);
	});
	
	database.on('error', console.error.bind(console, 'mongoose connection error.'));

	app.set('database',database);
}

function createUserSchema(database){
	database.UserSchema = require('./database/user_schema').createSchema(mongoose);

	database.UserModel = mongoose.model('users3', database.UserSchema);
	console.log('UserModel 정의함.');
}

var router = express.Router();

router.route('/process/login').post(user.login);
router.route('/process/adduser').post(user.adduser);
router.route('/process/listuser').post(user.listuser);

app.use('/', router);

var errorHandler = expressErrorHandler({
 static: {
   '404': './public/404.html'
 }
});

app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );

//===== 서버 시작 =====//

process.on('SIGTERM', function () {
    console.log("프로세스가 종료됩니다.");
    app.close();
});

app.on('close', function () {
	console.log("Express 서버 객체가 종료됩니다.");
	if (database) {
		database.close();
	}
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('서버가 시작되었습니다. 포트 : ' + app.get('port'));

  connectDB();
   
});
