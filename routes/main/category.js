const express = require('express');
const router = express.Router();

const {getAllCategories, storeCategory} = require('../../controllers/main/c_category')
const {checkJWT} = require('./../../controllers/validate/c_validate');

router.get("/", getAllCategories);
// router.use(checkJWT)
router.post("/", storeCategory);

module.exports = router;