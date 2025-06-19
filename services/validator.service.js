const Validator = require('../models/Validator');

const fetchValidators = async () => {
  return await Validator.find();
};

const upsertValidator = async (validatorData) => {
  return await Validator.findOneAndUpdate(
    { operatorId: validatorData.operatorId },
    validatorData,
    { upsert: true, new: true }
  );
};

module.exports = {
  fetchValidators,
  upsertValidator
};
