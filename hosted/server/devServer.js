var express = require('express');
var fs = require('fs');
var https = require('https');
var http = require('http');


var app = express();

const YOUR_STATIC_DIR = 'C:/Projects/Tytocare/iframe-text/';
const YOUR_INDEX_HTM_FILE = 'C:/Projects/Tytocare/iframe-text/hosted/client/index.html';
app.use(express.static(YOUR_STATIC_DIR))
app.get('/', function (req, res) {
  res.sendFile(YOUR_INDEX_HTM_FILE);
});


var key = fs.readFileSync('./server.key');
var cert = fs.readFileSync('./server.crt');

console.log(key.toString());
console.log(cert.toString());



var options = {
  key: key,
  cert: cert,
  rejectUnauthorized: false,
  requestCert: true,
  agent: false
}


var httpServer = http.createServer(app);
const port = 4002;
httpServer.listen(port, function () {
  console.log(`http Server is listening on ${port}`);
});



var httpsServer = https.createServer(options, app);
const port_s = 4003;
httpsServer.listen(port_s, function () {
  console.log(`https server is listening on ${port_s}`)
});

