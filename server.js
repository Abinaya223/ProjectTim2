const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/api/products" && req.method === "GET") {

        const data = fs.readFileSync("./data/products.json", "utf-8");

        res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });

        res.end(data);

    } else {
        res.writeHead(404, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: "Endpoint tidak ditemukan"
        }));
    }
});

server.listen(3000, () => {
     console.log("Backend berjalan di http://localhost:3000/api/products");
});