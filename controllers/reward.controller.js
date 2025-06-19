const Reward = require('../models/Reward');

const getRewardInfo = async (req, res) => {
  const { address } = req.params;
  try {
    const reward = await Reward.findOne({ walletAddress: address });
    if (!reward) return res.status(404).json({ message: 'No reward info found' });
    res.json(reward);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reward data' });
  }
};

module.exports = { getRewardInfo };
