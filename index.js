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

app.use('/', router);

app.use(function(req, res) {
  res.sendStatus(404);
});


app.listen(3000, function () {
  console.log('Homework app listening on port 3000!');
});