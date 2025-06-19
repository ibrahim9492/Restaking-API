const axios = require('axios');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Restaker = require('../models/Restaker');
const Validator = require('../models/Validator');
const Reward = require('../models/Reward');

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log('DB Connected. Fetching data...');

  // Mock: Replace with actual subgraph URLs or APIs
  const restakers = [
    { userAddress: '0x123', amountRestaked: 10, targetAVSOperatorAddress: '0xabc' }
  ];
  const validators = [
    { operatorId: '0xabc', totalDelegatedStake: 1000, slashHistory: [], status: 'active' }
  ];
  const rewards = [
    {
      walletAddress: '0x123',
      totalRewards: 2.5,
      breakdown: [{ validator: '0xabc', amount: 2.5, timestamp: new Date() }]
    }
  ];

  await Restaker.deleteMany({});
  await Validator.deleteMany({});
  await Reward.deleteMany({});

  await Restaker.insertMany(restakers);
  await Validator.insertMany(validators);
  await Reward.insertMany(rewards);

  console.log('Data inserted!');
  process.exit();
});
