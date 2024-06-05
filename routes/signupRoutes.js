"use strict";

const express = require("express");
const router = express.Router();
const signUp = require("../controllers/signupController");

router.post("/", signUp.signUp);

module.exports = router;
