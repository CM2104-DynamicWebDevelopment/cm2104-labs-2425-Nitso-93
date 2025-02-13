
var http = require('http');
var currentdate=require('./myfirstmodule');

http.createServer(function (req, res) {

 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write("The date and time are currently: "+currentdate.myDateTime());
 res.end('\nHello World!');
 
}).listen(8080);