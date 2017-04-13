var express =require('express');
var app = express();

app.get('/', function(request, response){
	response.send("Hello World");
});

app.get('/:firstname/:lastname', function(request, response){
	var first = request.params.firstname;
	var last = request.params.lastname;
	response.send(["Hello", first, last].join(" "));

app.get('/:firstname/:lastname', function(request, response){
	var first = request.params.firstname;
	var last = request.params.lastname;
	response.send(["Hello", first, last].join(" "));

});

app.listen(process.env.PORT || 8080, process.env.IP);