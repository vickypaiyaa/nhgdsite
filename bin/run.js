'use strict';

const http = require('http');
const service = require('../server/app');
const server = http.createServer(service);

server.listen(3000);

server.on('listening', function () {
	console.log('NGH server listening on Port 3000')
});