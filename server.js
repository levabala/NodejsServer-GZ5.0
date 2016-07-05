var static = require('node-static');

var fileServer = new static.Server('./Pages');

var history = {};

require('http').createServer(function (request, response) {
    console.log('request from',request.connection.remoteAddress);        
	history[request.connection.remoteAddress]++;
    request.addListener('end', function () {
	fileServer.serve(request, response);
	
    }).resume();
}).listen(8080);