"use strict";

const db = require("../db");

const createUser = async (user) => {
    const { login, password } = user;
    const result = await db.query(
        "INSERT INTO Users (login, password) VALUES ($1, $2) RETURNING user_id",
        [login, password],
    );
    return result.rows[0].user_id;
};

const authenticate = async (data) => {
    const { login, password } = data;
    const query = "SELECT password FROM Users WHERE login = $1";
    const result = await db.query(query, [login]);
    const userPassword = result.rows[0].password;

    return userPassword === password;
};

module.exports = {
    createUser,
    authenticate,
};
