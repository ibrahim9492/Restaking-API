const express = require('express');
const router = express.Router();
const { getValidators } = require('../controllers/validator.controller');

router.get('/', getValidators);
module.exports = router;
