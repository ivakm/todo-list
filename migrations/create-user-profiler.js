"use strict";
const db = require("../db");

const profiler = `
    CREATE TABLE profiles
    (
        id           SERIAL PRIMARY KEY,
        user_id    INTEGER             NOT NULL,
        name       VARCHAR(255)        NOT NULL,
        surname    VARCHAR(255)        NOT NULL,
        email      VARCHAR(255) UNIQUE NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id)
    );
`;

const run = async () => {
    try {
        console.log("migration create-user-profiler start");
        await db.query(profiler);
        console.log("migration create-user-profiler finish");
    } catch (e) {
        console.error(`Error - ${e}`);
    }
};

run();
