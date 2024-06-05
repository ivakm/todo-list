"use strict";

const userModel = require("../models/userModel");
const signUp = async (data) => {
    return await userModel.authenticate(data);
};

module.exports = {
    signUp,
};
