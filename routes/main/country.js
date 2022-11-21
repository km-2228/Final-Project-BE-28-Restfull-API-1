const express = require('express');
const router = express.Router();

const {getAllCountries, storeCountry} = require('../../controllers/main/c_country');
const {checkJWT} = require('./../../controllers/validate/c_validate');

router.get("/", getAllCountries);
// router.use(checkJWT)
router.post("/", storeCountry);

module.exports = router;