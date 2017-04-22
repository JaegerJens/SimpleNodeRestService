import * as connect from "connect";
import * as http from "http";
const serveStatic = require("serve-static");
const httpPort = 3000;

const app = connect();

app.use(serveStatic("../static", {"index": "index.json"}));

app.use((req, res) => {
    res.end("Hello from connect!\n");
});

const server = http.createServer(app).listen(httpPort);
console.log(`listening on http://localhost:${httpPort}/`);
