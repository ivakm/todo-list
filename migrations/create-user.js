"use strict";

const db = require("../db");
const user = `
    CREATE TABLE users
    (
        id    SERIAL PRIMARY KEY,
        login      VARCHAR(255) NOT NULL,
        password   CHAR(60)     NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
`;

const run = async () => {
    try {
        console.log("migration create-user start");
        await db.query(user);
        console.log("migration create-user finish");
    } catch (e) {
        console.error(`Error - ${e}`);
    }
};

run();
