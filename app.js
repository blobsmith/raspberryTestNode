var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.configure(function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'mustache');
	app.engine('mustache', require('hogan-middleware').__express);
});

app.get('/', function(req, res){
	res.render('index', { title: 'Raspberry camera with node.js'});
});

app.listen(3000);