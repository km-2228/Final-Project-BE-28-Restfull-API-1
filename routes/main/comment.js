const express = require('express');
const router = express.Router();

const {getCommentByIdThread, postComment} = require('./../../controllers/main/c_comment');

router.get('/:id_thread', getCommentByIdThread)
router.post('/:id_thread', postComment);

module.exports = router;