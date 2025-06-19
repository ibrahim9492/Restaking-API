const Validator = require('../models/Validator');

const getValidators = async (req, res) => {
  try {
    const validators = await Validator.find();
    res.json(validators);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch validators' });
  }
};

module.exports = { getValidators };
