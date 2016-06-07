var express = require('express');

var app = new express();

app.get('/', function (res, res) {
	res.render('./../app/index.html', {});
})
.listen(7777);
console.log('Server up na porta 7777');