const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true },
  totalRewards: { type: Number, required: true },
  rewardsBreakdown: [
    {
      validator: String,
      amount: Number,
      timestamp: Date
    }
  ]
});

module.exports = mongoose.model('Reward', rewardSchema);


