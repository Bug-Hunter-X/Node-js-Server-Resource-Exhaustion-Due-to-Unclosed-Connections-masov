const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  res.end('Hello, world!');
  res.on('close',()=>{console.log('connection closed')})
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});