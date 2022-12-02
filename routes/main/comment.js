const express = require('express');
const router = express.Router();

const {getCommentByIdThread, postComment} = require('./../../controllers/main/c_comment');
const {checkJWT} = require('./../../controllers/validate/c_validate');

router.get('/:id_thread', getCommentByIdThread)
router.use(checkJWT)
router.post('/:id_thread', postComment);

module.exports = router;