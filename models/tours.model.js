const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const toursSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  number: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Tours = mongoose.model('Tours', toursSchema);

module.exports = Tours;
