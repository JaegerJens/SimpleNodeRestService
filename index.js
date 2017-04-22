const connect = require('connect');
const http = require('http');
const httpPort = 3000;

const app = connect();

app.use((req, res) => {
    res.end("Hello from connect!\n");
});

const server = http.createServer(app).listen(httpPort);
console.log(`listening on http://localhost:${httpPort}/`);
