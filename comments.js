// Create web server
// 
// 2015-03-20    PV
// 2016-12-10    PV      ES6

'use strict';

const http = require('http');
const url = require('url');
const fs = require('fs');

const ROOT_DIR = 'html';

const server = http.createServer((request, response) => {
    let urlObj = url.parse(request.url, true, false);
    console.log('URL: ' + urlObj.pathname);

    if (urlObj.pathname === '/') {
        urlObj.pathname += 'index.html';
    }

    fs.readFile(ROOT_DIR + urlObj.pathname, (err, data) => {
        if (err) {
            response.writeHead(404);
            response.end(JSON.stringify(err));
            return;
        }
        response.writeHead(200);
        response.end(data);
    });
});

server.listen(80);
console.log('Server running at port 80');

