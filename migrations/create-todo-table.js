"use strict";
const db = require("../db");

const createTodos = `
    CREATE TABLE IF NOT EXISTS todo (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL
        text VARCHAR(255) NOT NULL
        creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
`;

const run = async () => {
    try {
        console.log("migration create-todo-table start");
        await db.query(createTodos);
        console.log("migration create-todo-table finish");
    } catch (e) {
        console.error(`Error - ${e}`);
    }
};

run();
