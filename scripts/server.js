"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const host = 'localhost';
const port = 8000;
const http = require("http");
var express = require("express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.prisma = prisma;
var app = express();
app.use(express.static('./'));
app.use('/css', express.static('style/lbd.css'));
app.use('/js', express.static('script.js'));
app.get('/', function (request, response) {
    response.sendFile(__dirname + "/index.html");
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
