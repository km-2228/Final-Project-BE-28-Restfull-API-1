const express = require('express');
const router = express.Router();

const {getCommentByIdThread, postComment} = require('./../../controllers/main/c_comment');

router.get('/:id_article', getCommentByIdThread)
router.post('/', postComment);

module.exports = router;