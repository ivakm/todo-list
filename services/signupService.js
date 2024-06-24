"use strict";

const userModel = require("../models/userModel");
const signUp = async (data) => {
    return await userModel.authenticate(data);
};

const createUser = async (data) => {
    return await userModel.createUser(data);
};

module.exports = {
    signUp,
    createUser,
};
