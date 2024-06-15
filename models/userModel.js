"use strict";

const db = require("../db");

const createUser = async (user) => {
    const { login, password } = user;
    const result = await db.query(
        "INSERT INTO users (login, password) VALUES ($1, $2) RETURNING *",
        [login, password],
    );
    return result.rows[0];
};

const authenticate = async (data) => {
    const { login, password } = data;
    const query = "SELECT password FROM users WHERE login = $1";
    const result = await db.query(query, [login]);
    const userPassword = result.rows[0].password;

    return userPassword.trim() === password.trim();
};

module.exports = {
    createUser,
    authenticate,
};
