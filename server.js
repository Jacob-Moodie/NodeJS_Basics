const fs = require("fs");
const { createServer } = require("http");
const { 
createWriteStream,
createReadStream
} = require("util");

const port = 3000;

createServer((req, res) => {
  try {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.end( 
       "Welcome to the server!"
    )
    } catch (error) {
        console.error(error);
        res.writeHead(500, {
            "Content-Type": "text/plain"
        });
        res.end("Server Error")
    }
}).listen(port, () => console.log("Server 3000 is running!"));