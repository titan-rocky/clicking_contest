const host = 'localhost';
const port = 8000;
const http = require("http");
var express=require("express");

var app=express();
app.use(express.static('public'));

const requestListener = function(req,res){
	res.writeHead(200);
	const fs=require("fs").promises;
	fs.readFile("D:/Practice/HTMLCSSJS/Butclick/static/index.html");
	return;
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
app.listen(port);
