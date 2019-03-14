const http = require('http');

const server = http.createServer(function (request, response) {
  response.end('hello world!');
});

server.listen(8000, function () {
  console.log('listening on port 8000');
});