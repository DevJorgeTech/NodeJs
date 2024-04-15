var nomeDoSistema = "Cia de transportes áreos"
var http = require('http')
var servicoRequest = require('request');
// Importação do modulo http (Permite a criação de um servidor http)
http.createServer(function (request, response) {
    //Atributos: require X request
    // response: Objeto usado para devolver algo para quem solicitar a aplicação
    // request: Obtem dados da requisão feita ao user
    response.write(nomeDoSistema)
    chamandoServicoPag()
    chamandoServicoReseva()
    response.write("Base de dados cia")
}).listen(8080)
function chamandoServicoPag() {
    servicoRequest('http://localhost:8081', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body)
        }
    })
}
function chamandoServicoReseva() {
    servicoRequest('http://localhost:8083', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body)
        }
    })
}
