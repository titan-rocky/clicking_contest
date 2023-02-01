const host = 'localhost';
const port = 8000;
const http = require("http");
var express=require("express");

var app=express();
app.use(express.static('static'));
app.use('/css',express.static('static'));
app.use('/js',express.static('static'));


app.get('/', function (request, response) {
        response.sendFile(__dirname+"/static/index.html")
});

/*

const requestListener = function(req,res){
	res.writeHead(200);
	const fs=require("fs").promises;
	fs.readFile("D:/Github/clicking_contest/static/index.html");
	return;
};
const server = http.createServer(requestListener);
*/

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
/*
app.listen(port);
*/