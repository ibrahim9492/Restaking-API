const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  walletAddress: String,
  totalRewards: Number,
  breakdown: [{
    validator: String,
    amount: Number,
    timestamp: Date
  }]
});

module.exports = mongoose.models.Reward||mongoose.model('Reward', rewardSchema);
