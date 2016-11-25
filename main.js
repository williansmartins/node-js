var express = require("express");
var app = express();

app.get("/produtos", function(req, res){
	res.send("<h2>Olá mundo</h2>");
});

app.listen("3000", function (){
	console.info("Servidor no ar");
});