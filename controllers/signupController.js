"use strict";

const signUp = async (req, res) => {
    try {
        res.status(200).json({ message: "Bearer 123456" });
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
