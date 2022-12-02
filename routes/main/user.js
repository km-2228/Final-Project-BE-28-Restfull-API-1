const express = require('express');
const router = express.Router();

const {editProfile, getProfile, updateImage, threadUser, editPassword} = require('./../../controllers/main/c_user');
const {checkJWT} = require('./../../controllers/validate/c_validate')

router.use(checkJWT);
router.get('/', getProfile);
router.put('/', editProfile);
router.put('/change-password', editPassword)
router.put('/update-image', updateImage);
router.get('/get-thread-user', threadUser);

module.exports = router;