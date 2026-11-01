// Task 3: plain server using only the built-in http module.
const http = require("http");

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });

    response.end("Hello");
});

server.listen(3000, () => {
    console.log("HTTP server is running at http://localhost:3000");
});
