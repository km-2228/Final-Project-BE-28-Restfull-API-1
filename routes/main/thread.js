const express = require('express');
const router = express.Router();

const {getAllThreads, filterAndSearching, postThread, updateThreadById, deleteThread} = require('./../../controllers/main/c_thread');
const {checkJWT} = require('./../../controllers/validate/c_validate')

router.get('/', getAllThreads);
router.get('/search', filterAndSearching);
router.use(checkJWT);
router.post('/', postThread);
router.put('/:id', updateThreadById);
router.delete('/:id', deleteThread);

module.exports = router;