var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create record model
var recordSchema = new Schema({
  recordId: {
    type: String,
    required: [true, 'recordedID is required']
  },
  name: {
    type: String,
  }
});

var Record = mongoose.model('record', recordSchema);

module.exports = Record;
