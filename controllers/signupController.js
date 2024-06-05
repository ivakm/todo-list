"use strict";

const signupService = require("../services/signupService");
const signUp = async (req, res) => {
    try {
        const auth = await signupService.signUp(req.body);

        if (auth) {
            res.json(auth);
        } else {
            res.status(404).json({ message: "something goes wrong" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Authentication error",
            error: error.message,
        });
    }
};

module.exports = {
    signUp,
};
