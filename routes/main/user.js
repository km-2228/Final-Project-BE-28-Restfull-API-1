const express = require('express');
const router = express.Router();

const {editProfile, getProfile, updateImage, threadUser} = require('./../../controllers/main/c_user');

router.get('/', getProfile);
router.put('/', editProfile);
router.put('/update-image', updateImage);
router.put('/get-thread-user', threadUser);

module.exports = router;