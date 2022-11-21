const express = require('express');
const router = express.Router();

const auths = require('./main/auth');
const comment = require('./main/comment');
const country = require('./main/country');
const like = require('./main/like');
const post = require('./main/post');
const role = require('./main/role');
const user = require('./main/user');

const welcome = require('./welcome/welcome');

router.use('/auth-users', auths)
router.use('/comments', comment);
router.use('/countries', country);
router.use('/likes', like);
router.use('/posts', post);
router.use('/roles', role);
router.use('/users', user);

router.use('/', welcome)

module.exports = router;