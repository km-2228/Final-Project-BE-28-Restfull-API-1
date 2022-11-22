const express = require('express');
const router = express.Router();

const {getAllThreads, filterAndSearching, postThread, updateThreadById, deleteThread} = require('./../../controllers/main/c_thread');

router.get('/', getAllThreads);
router.get('/search', filterAndSearching);
router.post('/', postThread);
router.put('/:id', updateThreadById);
router.delete('/:id', deleteThread);

module.exports = router;