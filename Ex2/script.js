var minhabiblioteca = require('./exemploModule')

console.log(minhabiblioteca.primeironome);

var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(minhabiblioteca.primeironome);
    res.end();
}).listen(8080);
console.log(minhabiblioteca.primeironome);
