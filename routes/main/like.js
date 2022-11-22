const express = require('express');
const router = express.Router();

const {getLikeByIdThread, likeUnlikeThread} = require('./../../controllers/main/c_like');

router.get('/:id_thread', getLikeByIdThread);
router.put('/:id_thread', likeUnlikeThread);

module.exports = router;