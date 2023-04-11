const express  = require('express');
const { signup, login } = require('../controller/auth.js');
const { getAllUsers, updateUser } = require('../controller/updateDetails.js');

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);

router.get("/getAllUsers",getAllUsers);

router.patch("/update/:id",updateUser);

module.exports = router;