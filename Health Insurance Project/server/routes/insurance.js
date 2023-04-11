const express = require("express")

const { addUserInsuranceDetails } = require("../controller/InsuranceDetails.js")

const router = express.Router();

router.post("/add",addUserInsuranceDetails)


module.exports = router