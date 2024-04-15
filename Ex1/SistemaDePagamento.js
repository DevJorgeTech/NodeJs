var http = require("http")

http.createServer(function (request, response) {
    response.write("Sistema de pagamento ==>")
    response.write(" Aqui esta a listagem de clientes!")
    response.end()
}).listen(8081)
