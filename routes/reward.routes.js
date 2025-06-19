const express = require('express');
const router = express.Router();
const { getRewardInfo } = require('../controllers/reward.controller');

router.get('/:address', getRewardInfo);
module.exports = router;
