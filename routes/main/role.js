const express = require('express');
const router = express.Router();

const {getAllRoles, storeRole} = require('../../controllers/main/c_role')
const {checkJWT} = require('./../../controllers/validate/c_validate');

router.get("/", getAllRoles);
// router.use(checkJWT)
router.post("/", storeRole);

module.exports = router;