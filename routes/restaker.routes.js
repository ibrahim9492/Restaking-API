const express = require('express');
const router = express.Router();
const { getRestakers } = require('../controllers/restaker.controller');

router.get('/', getRestakers);

module.exports = router;
