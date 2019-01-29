var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// set up express app
var app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/billingFinanceRecord');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(bodyParser.json());

// get routes
app.use('/api/',require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){

  res.status(422).send({error: err.message});
});

//listen for requests
app.listen(8888, function(){
  console.log(' now listening on port 8888');
});
