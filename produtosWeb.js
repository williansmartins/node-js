var http = require("http");
var server = http.createServer(function (req, res){
	res.end("<h2>Olá mundo</h2>");
});
server.listen("3000");

console.info("Servidor no ar");