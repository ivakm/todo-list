"use strict";

const express = require("express");
const router = express.Router();
const signUp = require("../controllers/signupController");

router.post("/sign-up", signUp.signUp);
router.post("/create-user", signUp.createUser);

module.exports = router;
