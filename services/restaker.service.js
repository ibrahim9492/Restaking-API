const Restaker = require('../models/Restaker');

// Fetch all restakers from DB
const fetchRestakers = async () => {
  return await Restaker.find();
};

// Create or update a restaker entry
const upsertRestaker = async (restakerData) => {
  return await Restaker.findOneAndUpdate(
    { userAddress: restakerData.userAddress },
    restakerData,
    { upsert: true, new: true }
  );
};

module.exports = {
  fetchRestakers,
  upsertRestaker
};
