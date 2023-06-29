const http = require("http");
const PORT = 5000;

const server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        res.writeHead(204, { "Content-Type": "image/x-icon" });
        res.end();
        return;
    }

    console.log(req);
    res.statusCode = 200;
    res.end("Greetings from the http server");
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});
