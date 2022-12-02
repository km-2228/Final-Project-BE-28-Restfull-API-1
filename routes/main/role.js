const express = require('express');
const router = express.Router();

const {getAllRoles, storeRole} = require('../../controllers/main/c_role')
const {checkJWT} = require('./../../controllers/validate/c_validate');
const { checkIsAdmin } = require('../../controllers/validate/c_admin');

router.get("/", getAllRoles);
router.use(checkJWT)
router.use(checkIsAdmin)
router.post("/", storeRole);

module.exports = router;