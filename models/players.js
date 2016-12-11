var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  player_name: { type: String, required: true }
});

var model = mongoose.model('players', schema);

module.exports = model;
