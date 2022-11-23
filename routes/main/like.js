const express = require('express');
const router = express.Router();

const {getLikeByIdThread, likeUnlikeThread} = require('./../../controllers/main/c_like');
const {checkJWT} = require('./../../controllers/validate/c_validate');

router.get('/:id_thread', getLikeByIdThread);
router.use(checkJWT)
router.post('/:id_thread', likeUnlikeThread);

module.exports = router;