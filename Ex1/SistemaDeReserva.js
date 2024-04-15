var nomeDoSistema = "Sistema de reserva"
var http = require("http")

http.createServer(function (request, response) {
    response.write("Sistema de milhagens ==> ")
    response.write("Catalogo ==> ")
    response.write(" Sitema de reservas")
    response.end()
}).listen(8083)
