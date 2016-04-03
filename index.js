var express = require('express');
var app = express();
var router = express.Router();
var nunjucks = require('nunjucks');
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');
nunjucks.configure('views', {
  autoescape: true,
  express: app
});

router.get('/', function(req, res) {
	res.render('index.html');
});

router.get('/api/query', function(req, res) {
	res.json(req.query);
});

router.get('/api/user/1', function(req, res) {
	res.json({ id: 1, name: "Joe", age: 18 });
});

router.get('/api/user/2', function(req, res) {
	res.json({ id: 2, name: "John", age: 22 });
});

app.use('/', router);

app.use(function(req, res) {
  res.sendStatus(404);
});


app.listen(3000, function () {
  console.log('Homework app listening on port 3000!');
});