var url = require('url');

var curURL = url.parse('https://search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');
var curStr = url.format(curURL);

var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log("query : "+param.query);
console.log("요청파라미터 : "+querystring.stringify(param));

//console.log(curStr);
//console.dir(curURL);