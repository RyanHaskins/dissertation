var express = require('express');
var router = express.Router();
var Record = require('../models/record');

// get list of records
router.get('/records', function(req, res, next){
  Record.find({}, function(err, record){
    if (err) throw err;
    res.render('index', {records: record});
    //res.send(record);
  });
});

// add a new record
router.post('/records', function(req, res, next){
  Record.create(req.body).then(function(record){
    res.send(record);
  }).catch(next);
});

//update record
router.put('/records/:id', function(req, res, next){
  Record.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Record.findOne({_id: req.params.id}).then(function(record){
        res.send(record);
    });
  });
});

// delete record
router.delete('/records/:id', function(req, res, next){
  Record.findByIdAndRemove({_id: req.params.id}).then(function(record){
    res.send(record);
  });
});

// allow index to use the routes
module.exports = router;
