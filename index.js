var express = require('express');
var app = express();

var my_math = require('./lib/my_math');

app.get('/', function (req, res) {
  res.send('Hello World! You can use');
});

app.get('/calc', function(request, response) {
	let a = parseInt(request.query.a);
	let b = parseInt(request.query.b);
	console.log('a=' + a);
	console.log('b=' + b);
	console.log('a+b=' + (a + b));
  response.send('Rand from ' + a + ' to ' + b + ' => ' + my_math.GetRandomNInRange(a, b));
});

app.listen(80, function () {
  console.log('App listening on port 3000!');
})