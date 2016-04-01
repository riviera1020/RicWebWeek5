var express = require("express");
var app = express();

app.get('/user/:name', function (req, res) {
  res.send(req.params.name);
});

app.get('/post/:id', function (req, res) {
  res.send(req.params.id);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
