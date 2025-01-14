const http = require('http');

const server = http.createServer((req, res) => {
  // Keep the connection alive indefinitely
  // This can lead to resource exhaustion

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Connection': 'keep-alive'
  });

  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});