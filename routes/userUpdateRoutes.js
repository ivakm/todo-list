"use strict";

const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM users");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({
            message: "Error getting users",
            error: error.message,
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM users WHERE id = $1", [
            id,
        ]);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({
            message: "Error getting users by id",
            error: error.message,
        });
    }
});

module.exports = router;
