var express = require('express');

var app = new express();

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get('/', function (res, res) {
	res.render('./../app/index', {});
})
.listen(7777);