const connect = require('connect');
const http = require('http');
const serveStatic = require('serve-static');
const httpPort = 3000;

const app = connect();

app.use(serveStatic("static", {"index": "index.json"}));

app.use((req, res) => {
    res.end("Hello from connect!\n");
});

const server = http.createServer(app).listen(httpPort);
console.log(`listening on http://localhost:${httpPort}/`);
