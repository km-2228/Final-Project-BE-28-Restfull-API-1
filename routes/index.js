const express = require('express');
const router = express.Router();

const auths = require('./main/auth');
const category = require('./main/category');
const comment = require('./main/comment');
const country = require('./main/country');
const thread = require('./main/thread');
const role = require('./main/role');
const user = require('./main/user');

const welcome = require('./welcome/welcome');

router.use('/auth-users', auths)
router.use('/categories', category)
router.use('/comments', comment);
router.use('/countries', country);
router.use('/threads', thread);
router.use('/roles', role);
router.use('/users', user);

router.use('/', welcome)

module.exports = router;