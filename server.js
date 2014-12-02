'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mmm = require('../lib/mean_median_mode');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + 'build/'));

app.post('/', function(req, res) {
  var numArray = req.body.numArray;
  res.send({
    'mean': mmm.mean(numArray), 
    'median': mmm.median(numArray), 
    'mode': mmm.mode(numArray)
  });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('Server listening on port %d', app.get('port'));
});
