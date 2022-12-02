const express = require('express');
const router = express.Router();

const {getAllCategories, storeCategory, deleteAllCategories} = require('../../controllers/main/c_category');
const { checkIsAdmin } = require('../../controllers/validate/c_admin');
const {checkJWT} = require('./../../controllers/validate/c_validate');

router.get("/", getAllCategories);
router.use(checkJWT)
router.use(checkIsAdmin)
router.post("/", storeCategory);
router.delete("/", deleteAllCategories);

module.exports = router;