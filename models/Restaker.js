const mongoose = require('mongoose');

const restakerSchema = new mongoose.Schema({
  userAddress: { type: String, required: true },
  amountRestaked: { type: Number, required: true },
  validatorAddress: { type: String, required: true }
});

module.exports = mongoose.model('Restaker', restakerSchema);

