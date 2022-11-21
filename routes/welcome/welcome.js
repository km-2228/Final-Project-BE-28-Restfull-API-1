const express = require('express');
const router = express.Router();

const {welcome} = require('./../../controllers/c_welcome')

router.get('/', welcome)

module.exports = router;