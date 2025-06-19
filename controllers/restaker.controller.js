const { fetchRestakers } = require('../services/restaker.service');

const getRestakers = async (req, res) => {
  try {
    const restakers = await fetchRestakers();
    res.json(restakers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch restakers' });
  }
};

module.exports = { getRestakers };



