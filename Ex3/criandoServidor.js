var http = require("http")

var fs = require("fs")

http.createServer(function (req, res) {
    fs.readFile("JorgeWagner_RGM_33174032.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen(8080)
