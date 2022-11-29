const express = require('express');
const router = express.Router();

const {getAllCountries, storeCountry, deleteAllCountries} = require('../../controllers/main/c_country');
const { checkIsAdmin } = require('../../controllers/validate/c_admin');
const {checkJWT} = require('./../../controllers/validate/c_validate');

router.get("/", getAllCountries);
router.use(checkJWT)
router.use(checkIsAdmin)
router.post("/", storeCountry);
router.delete("/", deleteAllCountries);

module.exports = router;