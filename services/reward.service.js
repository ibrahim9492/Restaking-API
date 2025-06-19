const Reward = require('../models/Reward');

const fetchRewardByAddress = async (walletAddress) => {
  return await Reward.findOne({ walletAddress });
};

const upsertReward = async (rewardData) => {
  return await Reward.findOneAndUpdate(
    { walletAddress: rewardData.walletAddress },
    rewardData,
    { upsert: true, new: true }
  );
};

module.exports = {
  fetchRewardByAddress,
  upsertReward
};
