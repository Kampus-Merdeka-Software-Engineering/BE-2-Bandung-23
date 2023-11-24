const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end
});

const PORT = process.env.PORT || 6000;
const IP = '127.0.0.1';
    // change 127etc to all zero to deploy in Railway
server.listen(PORT, IP, () => {
    console.log('server is working')
});