var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(function log(req, res, next) {
  console.log([req.method, req.url].join(' '));
  next();
});
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', function (req, res) {
  res.json({ data: "Hello API" });
});

app.get('/', function (req, res) {
  res.json({ data: "Hello World!!!" });
});

var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on %s', process.env.PORT);
});
