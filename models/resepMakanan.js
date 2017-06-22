'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resepMakananSchema = new Schema({
  name: String,
  ingredient: String
});

var resepMakanan = mongoose.model('resepMakanan', resepMakananSchema);

module.exports = resepMakanan;